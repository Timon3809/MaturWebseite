# -*- coding: utf-8 -*-
import json, os, sys, math, re, datetime
from shapely.geometry import shape, mapping, Point, LineString, MultiLineString, Polygon, MultiPolygon, box
from shapely.ops import unary_union, linemerge
from shapely import affinity
import spec, regions, base, topo
import build_data as B

here = B.here
SRC = os.path.join(here, 'work')
CH_JSON = os.path.join(SRC, 'ch.json')
feats_base, CH = base.build()
CH_BUF = CH.buffer(0.07)                     # rivers are clipped to Switzerland + ~6 km
items, ids, report = [], set(), B.report

def uid(s):
    s = B.slug(s); k = s; n = 2
    while k in ids: k = f'{s}-{n}'; n += 1
    ids.add(k); return k

def add(type_, name, aliases, anchor, geometry, sheet_key, source, **props):
    fp = {'blatt': str(sheet_key)}; fp.update(props)
    items.append({'id': uid(name if type_ != 'pass' else name + '-pass'), 'type': type_, 'name': name, 'aliases': sorted(set([name] + aliases)),
                  'geometry': geometry, 'anchor': [round(anchor[0], 5), round(anchor[1], 5)], 'source': source, 'featureProperties': fp})

# ---- cities
for key, name, al in spec.CITIES:
    xy = B.city_xy(name)
    if xy is None: B.warn(f'city {name}: not found in OSM'); continue
    add('city', name, al, xy, {'type': 'Point', 'coordinates': list(xy)}, key, 'osm-place')

# ---- mountains / passes (+ elevation check against the worksheet)
for no, name, ele, al in spec.MOUNTAINS:
    xy, e = B.peak_xy(name, ele)
    if xy is None: B.warn(f'peak {name}: not found'); continue
    if abs(e - ele) > 30: B.warn(f'peak {name}: OSM {e:.0f} m vs Blatt {ele} m')
    add('mountain', name, al, xy, {'type': 'Point', 'coordinates': list(xy)}, no, 'osm-peak', hoeheBlatt=ele, hoeheOsm=e)
for key, name, ele, al in spec.PASSES:
    xy, e = B.pass_xy(name, ele)
    if xy is None: B.warn(f'pass {name}: not found'); continue
    if abs(e - ele) > 30: B.warn(f'pass {name}: OSM {e:.0f} m vs Blatt {ele} m')
    add('pass', name, al, xy, {'type': 'Point', 'coordinates': list(xy)}, key, 'osm-pass', hoeheBlatt=ele, hoeheOsm=e)

# ---- lakes (swisstopo polygons, matched by centroid to known lake centres)
LAKE_IDX = {'Lago Maggiore': 19, 'Lago di Lugano': 18, 'Bodensee': 17, 'Walensee': 13, 'Sihlsee': 11, 'Zürichsee': 1, 'Greifensee': 0,
            'Zugersee': 9, 'Vierwaldstättersee': 10, 'Hallwilersee': 8, 'Sempachersee': 7, 'Brienzersee': 3, 'Thunersee': 2,
            'Murtensee': 16, 'Bielersee': 4, 'Lac de Neuchâtel': 5, 'Lac Léman': 21}
LAKE_CENTER = {'Lago Maggiore': (8.65, 46.0), 'Lago di Lugano': (8.97, 45.98), 'Bodensee': (9.38, 47.6), 'Walensee': (9.2, 47.12),
               'Sihlsee': (8.79, 47.13), 'Zürichsee': (8.72, 47.25), 'Greifensee': (8.68, 47.35), 'Zugersee': (8.49, 47.13),
               'Vierwaldstättersee': (8.46, 47.0), 'Hallwilersee': (8.22, 47.28), 'Sempachersee': (8.155, 47.145),
               'Brienzersee': (7.97, 46.73), 'Thunersee': (7.72, 46.69), 'Murtensee': (7.08, 46.93), 'Bielersee': (7.16, 47.08),
               'Lac de Neuchâtel': (6.86, 46.9), 'Lac Léman': (6.53, 46.42)}
lake_polys = [shape(f['geometry']) for f in topo.features('lakes', CH_JSON)]
for key, name, al in spec.LAKES:
    g = lake_polys[LAKE_IDX[name]]
    c = g.centroid
    d = B.hav((c.x, c.y), LAKE_CENTER[name])
    if d > 12: B.warn(f'lake {name}: swisstopo polygon centroid {d:.0f} km from expected centre')
    gs = g.simplify(0.0004, preserve_topology=True)
    anchor = g.representative_point()
    add('water', name, al, (anchor.x, anchor.y), B.rnd(mapping(gs)), key, 'swisstopo-lake', areaKm2=round(g.area * 111 * 76, 1))
# base lakes (all swisstopo lakes, so the country outline is right everywhere)
for i, g in enumerate(lake_polys):
    feats_base.append({'type': 'Feature', 'properties': {'id': f'see-{i}', 'name': 'See', 'kind': 'lake'}, 'geometry': B.rnd(mapping(g.simplify(0.0006, preserve_topology=True)))})

def best_anchor(cands, ref):
    """cands: [(lon,lat)] in preference order; choose the one farthest (up to 10 km) from every anchor placed so far,
    breaking ties by preference (earlier = better)."""
    others = [i['anchor'] for i in items]
    best, bs = None, -1
    for k, c in enumerate(cands):
        d = min((B.hav(c, o) for o in others), default=99)
        score = min(d, 10.0) - 0.02 * k - 0.02 * B.hav(c, ref)
        if score > bs: best, bs = c, score
    return best

def line_candidates(g):
    ls = [g] if g.geom_type == 'LineString' else list(g.geoms)
    main = max(ls, key=lambda l: l.length)
    return [(p.x, p.y) for p in (main.interpolate(f, normalized=True) for f in (0.5, 0.4, 0.6, 0.3, 0.7, 0.2, 0.8, 0.45, 0.55, 0.35, 0.65, 0.25, 0.75, 0.15, 0.85))]

def poly_candidates(poly):
    c = poly.representative_point(); out = [(c.x, c.y)]
    minx, miny, maxx, maxy = poly.bounds
    n = 14
    for a in range(n + 1):
        for b in range(n + 1):
            p = Point(minx + (maxx - minx) * a / n, miny + (maxy - miny) * b / n)
            if poly.contains(p) and poly.exterior.distance(p) > 0.004 if poly.geom_type == 'Polygon' else poly.contains(p): out.append((p.x, p.y))
    return out

# ---- rivers
MUST_PASS = {  # (lon, lat, tolerance km): a correct river course has to go through these places
    'Rhône': [(7.36, 46.23, 3), (6.14, 46.2, 4), (8.1, 46.4, 5)],
    'Ticino': [(8.61, 46.53, 4), (8.97, 46.36, 3), (8.80, 46.20, 6)],
    'Maggia': [(8.60, 46.33, 4), (8.78, 46.19, 4)],
    'Verzasca': [(8.79, 46.37, 4), (8.85, 46.19, 5)],
    'Vorderrhein': [(8.85, 46.70, 4), (9.20, 46.77, 4)],
    'Hinterrhein': [(9.44, 46.70, 4), (9.35, 46.5, 12)],
    'Rhein': [(9.5, 47.1, 6), (8.63, 47.7, 8), (7.62, 47.56, 4)],
    'Inn': [(9.84, 46.5, 5), (10.30, 46.80, 4)],
    'Albula': [(9.64, 46.68, 8), (9.43, 46.70, 5)],
    'Julia': [(9.57, 46.46, 10), (9.58, 46.66, 5)],
    'Linth': [(9.05, 46.9, 10), (8.95, 47.1, 8)],
    'Limmat': [(8.54, 47.37, 3), (8.31, 47.47, 4)],
    'Sihl': [(8.54, 47.37, 4), (8.74, 47.06, 12)],
    'Töss': [(8.73, 47.50, 4), (8.65, 47.40, 10)],
    'Thur': [(9.09, 47.30, 4), (9.05, 47.46, 5)],
    'Sitter': [(9.37, 47.43, 6), (9.3, 47.25, 10)],
    'Reuss': [(8.30, 47.05, 3), (8.2, 47.4, 6), (8.62, 46.66, 12)],
    'Kleine Emme': [(8.07, 47.06, 4), (8.01, 46.95, 4)],
    'Grosse Emme': [(7.79, 46.94, 4), (7.63, 47.06, 4)],
    'Aare': [(7.45, 46.95, 3), (8.04, 47.39, 4), (7.65, 46.75, 5), (8.16, 46.72, 8)],
    'Simme': [(7.4, 46.66, 12), (7.55, 46.69, 7)],
    'Saane': [(7.16, 46.8, 3), (7.28, 46.5, 10)],
    'Orbe': [(6.53, 46.725, 5), (6.35, 46.66, 8)],
    'Doubs': [(6.83, 47.25, 8), (7.05, 47.37, 8)],
    'Birs': [(7.59, 47.56, 4), (7.35, 47.36, 6)],
}
# Sitter: the mountain headwaters above Appenzell carry other names in OSM, so it is not length-checked
REF_LEN = {'Birs': 73, 'Töss': 57, 'Kleine Emme': 60, 'Grosse Emme': 80, 'Thur': 135, 'Limmat': 36, 'Sihl': 73,
           'Verzasca': 32, 'Maggia': 57, 'Albula': 38, 'Simme': 53, 'Saane': 128, 'Vorderrhein': 69, 'Hinterrhein': 63}
LAKE_GAP_OK = {'Rhône', 'Rhein', 'Aare', 'Reuss', 'Ticino', 'Inn', 'Linth', 'Doubs', 'Saane'}   # courses interrupted by lakes
river_geo = {}
for key, name, al in spec.RIVERS + [('-', 'Moesa', []), ('-', 'Landquart', [])]:
    cands = B.river_lines(name)
    if not cands: B.warn(f'river {name}: no relation in OSM cache'); continue
    lines = [l for _, _, ls in cands for l in ls]
    merged = linemerge(unary_union(lines))
    clipped = merged.intersection(CH_BUF)
    if clipped.is_empty: B.warn(f'river {name}: empty after clipping'); continue
    clipped = linemerge(clipped) if clipped.geom_type == 'MultiLineString' else clipped
    river_geo[name] = clipped
    names = sorted(set(n for n, _, _ in cands)); rels = sorted(set(i for _, i, _ in cands))
    length = sum(B.hav(a, b) for l in ([clipped] if clipped.geom_type == 'LineString' else list(clipped.geoms)) for a, b in zip(l.coords[:-1], l.coords[1:]))
    # length plausibility against published lengths (km, rounded) and continuity of the merged course
    ref = REF_LEN.get(name)
    if ref and not (0.75 * ref <= length <= 1.3 * ref): B.warn(f'river {name}: {length:.0f} km in data vs ~{ref} km published')
    parts = [clipped] if clipped.geom_type == 'LineString' else list(clipped.geoms)
    if len(parts) > 1:
        gaps = sorted((min(a.distance(b) for b in parts if b is not a) * 80 for a in parts), reverse=True)
        if gaps[0] > 3 and name not in LAKE_GAP_OK: B.warn(f'river {name}: {len(parts)} separate parts, largest gap {gaps[0]:.1f} km')
    for (lon, lat, tol) in MUST_PASS.get(name, []):
        d = clipped.distance(Point(lon, lat)) * 80
        if d > tol: B.warn(f'river {name}: course {d:.1f} km from ({lon},{lat}) (allowed {tol})')
    if key == '-': continue
    simp = clipped.simplify(0.0012, preserve_topology=True)
    gm = mapping(simp)
    cands = line_candidates(simp)
    add('river', name, al, best_anchor(cands, cands[0]), B.rnd(gm), key, 'osm-waterway', osmNamen=names, osmRelationen=rels, laengeKm=round(length))

# ---- regions
for key, name, al in spec.REGIONS:
    rc = regions.R[key]
    if 'river' in rc:
        rname, (x0, x1), (y0, y1), buf = rc['river']
        g = river_geo.get(rname)
        if g is None: B.warn(f'region {name}: river {rname} missing'); continue
        seg = g.intersection(box(x0, y0, x1, y1))
        poly = seg.buffer(buf, cap_style=1)
    elif 'line' in rc:
        pts, buf = rc['line']; poly = LineString(pts).buffer(buf, cap_style=1)
    else:
        (cx, cy), rx, ry, rot = rc['ellipse']
        poly = affinity.rotate(affinity.scale(Point(cx, cy).buffer(1, 48), rx, ry), rot, origin=(cx, cy))
    if poly.is_empty: B.warn(f'region {name}: empty'); continue
    poly = poly.simplify(0.0015, preserve_topology=True)
    for pn, px, py in rc['probes']:
        if not poly.buffer(0.004).contains(Point(px, py)): B.warn(f'region {name}: {pn} ({px},{py}) not inside outline')
    c = poly.representative_point()
    # anchor: any point inside the outline, as far as possible from every other marker
    add('region', name, al, best_anchor(poly_candidates(poly), (c.x, c.y)), B.rnd(mapping(poly)), key, 'curated-outline')

# ---- global checks
counts = {t: sum(1 for i in items if i['type'] == t) for t in ('river', 'water', 'mountain', 'pass', 'region', 'city')}
print('counts', counts, 'total', len(items))
exp = {'river': 25, 'water': 17, 'mountain': 21, 'pass': 19, 'region': 25, 'city': 31}
for t, n in exp.items():
    if counts[t] != n: B.warn(f'count {t}: {counts[t]} != {n}')
# unique anchors and minimum spacing
pts = [(i['name'], i['type'], i['anchor']) for i in items]
close = []
for a in range(len(pts)):
    for b in range(a + 1, len(pts)):
        d = B.hav(pts[a][2], pts[b][2])
        if d < 9: close.append((round(d, 1), pts[a][0], pts[a][1], pts[b][0], pts[b][1]))
for c in sorted(close): print('close', c)
for it in items:
    x, y = it['anchor']
    assert B.BOUNDS[0] <= x <= B.BOUNDS[2] and B.BOUNDS[1] <= y <= B.BOUNDS[3], it['name']

data = {
    'generatedAt': datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.000Z'),
    'bounds': list(B.BOUNDS), 'projection': 'web-mercator',
    'typeLabels': {'city': 'Städte', 'water': 'Seen', 'river': 'Flüsse', 'region': 'Täler und Landschaften', 'mountain': 'Berge', 'pass': 'Pässe'},
    'sources': [
        {'title': 'swisstopo / swiss-maps: Landesgrenze und Seen (swissBOUNDARIES3D, 2023)', 'url': 'https://github.com/interactivethings/swiss-maps'},
        {'title': 'OpenStreetMap-Mitwirkende: Flüsse, Gipfel, Pässe, Ortschaften (ODbL)', 'url': 'https://www.openstreetmap.org/copyright'},
        {'title': 'Natural Earth 10m: Nachbarländer', 'url': 'https://www.naturalearthdata.com/'},
        {'title': 'Legende zur Karte der Schweiz (Arbeitsblatt, Buchstaben und Nummern)'},
    ],
    'notes': ['Benennung und Höhenangaben wie auf dem Arbeitsblatt «0. Legende zur Karte der Schweiz».',
              'Täler und Landschaften sind vereinfachte Lernflächen, keine amtlichen Grenzen.',
              'Bei Gipfeln und Pässen steht der Punkt auf dem höchsten Punkt bzw. der Passhöhe.'],
    'baseMap': {'type': 'FeatureCollection', 'features': feats_base},
    'items': items,
}
json.dump(data, open(B.OUT, 'w', encoding='utf8'), ensure_ascii=False, separators=(',', ':'))
print('wrote', B.OUT, os.path.getsize(B.OUT) // 1024, 'KB')
print('\n== VERIFICATION FINDINGS ==')
for r in report: print(' -', r)
