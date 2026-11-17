# -*- coding: utf-8 -*-
"""Assembles data/schweiz-lernkarte.json from cached OSM responses + swisstopo country shape."""
import json, glob, os, math, sys, re
from shapely.geometry import shape, mapping, Point, LineString, MultiLineString, Polygon, box
from shapely.ops import unary_union, linemerge
from shapely import affinity
import spec, regions, base

here = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, 'schweiz-lernkarte.json')
BOUNDS = base.BOUNDS
report = []          # verification findings, printed at the end
def warn(msg): report.append(msg); print('!!', msg)

def load_cache():
    out = []
    for p in glob.glob(os.path.join(here, 'work', 'cache', '*.json')):
        out.extend(json.load(open(p, encoding='utf8')).get('elements', []))
    return out
EL = load_cache()

def slug(s):
    s = s.lower().replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('é', 'e').replace('è', 'e').replace('ô', 'o').replace('ê', 'e')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

def hav(a, b):  # km between (lon,lat)
    R = 6371.0; la1, la2 = math.radians(a[1]), math.radians(b[1])
    dl = math.radians(b[0] - a[0]); dp = la2 - la1
    h = math.sin(dp / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def nodes(kind_filter):
    return [e for e in EL if e.get('type') == 'node' and kind_filter(e.get('tags', {}))]

def pick(cands, key):  # nearest ele; returns element
    return min(cands, key=key)

# ---------------- cities -------------------
CITY_OSM = {  # display -> (acceptable OSM names, place)
    'Genf': ['Genève'], 'Lausanne': ['Lausanne'], 'Sion': ['Sion'], 'Brig': ['Brig'], 'Domodossola': ['Domodossola'],
    'Locarno': ['Locarno'], 'Bellinzona': ['Bellinzona'], 'Airolo': ['Airolo'], 'Lugano': ['Lugano'], 'St. Moritz': ['St. Moritz'],
    'Davos': ['Davos'], 'Chur': ['Chur'], 'Glarus': ['Glarus'], 'St. Gallen': ['St. Gallen'], 'Schaffhausen': ['Schaffhausen'],
    'Winterthur': ['Winterthur'], 'Zürich': ['Zürich'], 'Zug': ['Zug'], 'Luzern': ['Luzern'], 'Aarau': ['Aarau'], 'Olten': ['Olten'],
    'Solothurn': ['Solothurn'], 'Basel': ['Basel'], 'Delsberg': ['Delémont'], 'Biel': ['Biel/Bienne'], 'Neuenburg': ['Neuchâtel'],
    'La Chaux-de-Fonds': ['La Chaux-de-Fonds'], 'Yverdon': ['Yverdon-les-Bains'], 'Freiburg': ['Fribourg'], 'Bern': ['Bern'], 'Thun': ['Thun'],
}
# Places that the Overpass instance did not return: Wikidata/Wikipedia coordinates (cross-checked, see report)
CITY_FALLBACK = {'Genf': (6.1432, 46.2044), 'Zürich': (8.5411, 47.3744), 'Neuenburg': (6.9306, 46.9903), 'Delsberg': (7.3472, 47.3653)}
PEAK_FALLBACK = {  # name: (lon, lat, ele)  -- Wikidata P625/P2044 (Q15134, Q22432013, Q385301, Q675628, Q15224), OSM for Röti
    'Tödi': (8.9147, 46.8111, 3612), 'Glärnisch': (9.0171, 47.008, 2904), 'Churfirsten': (9.3048, 47.1537, 2306),
    'La Dôle': (6.0994, 46.425, 1677), 'Säntis': (9.3433, 47.2492, 2501), 'Weissenstein': (7.5279, 47.2580, 1396),
}
PASS_FALLBACK = {'Gotthard': (8.5617, 46.5592, 2106), 'Flüela': (9.9486, 46.7515, 2383), 'Grosser St. Bernhard': (7.1704, 45.8691, 2469)}

def city_xy(display):
    xy = _city_osm(display)
    fb = CITY_FALLBACK.get(display)
    if xy and fb and hav(xy, fb) > 1.5: warn(f'city {display}: OSM and Wikidata differ by {hav(xy, fb):.1f} km')
    return xy or fb

def _city_osm(display):
    names = CITY_OSM[display]
    c = [e for e in nodes(lambda t: t.get('place') in ('city', 'town', 'village') and t.get('name') in names)]
    # several hits (Zug AT, Biel VS ...): the one with the largest population is the real city
    if not c: return None
    c.sort(key=lambda e: -int(re.sub(r'\D', '', e['tags'].get('population', '0')) or 0))
    e = c[0]; return (round(e['lon'], 5), round(e['lat'], 5))

# ---------------- peaks / passes -------------------
PEAK_OSM = {  # display -> (osm name regex, expected sheet ele)
    'Dufourspitze': 'Dufourspitze', 'Dom': 'Dom', 'Matterhorn': 'Matterhorn', 'Dents du Midi': 'Haute Cime', 'Jungfrau': 'Jungfrau',
    'Tödi': 'Piz Russein|Tödi', 'Glärnisch': 'Vrenelisgärtli|Glärnisch', 'Titlis': 'Titlis', 'Pilatus': 'Esel',
    'Rigi': 'Rigi', 'Mythen': 'Grosser Mythen', 'Napf': 'Napf', 'Säntis': 'Säntis', 'Pizol': 'Pizol', 'Churfirsten': 'Hinderrugg',
    'Piz Bernina': 'Piz Bernina', 'Piz Buin': 'Piz Buin', 'Chasseral': 'Chasseral', 'La Dôle': 'La Dôle|Dôle',
    'Weissenstein': 'Röti|Roti|Weissenstein', 'Lägern': 'Hochwacht',
}
PEAK_NEAR = {'Pilatus': (8.25, 46.98), 'Lägern': (8.40, 47.48), 'Glärnisch': (8.99, 46.99), 'Weissenstein': (7.50, 47.26),
             'Tödi': (8.92, 46.81), 'Churfirsten': (9.3, 47.17), 'Säntis': (9.34, 47.25), 'La Dôle': (6.10, 46.425)}
def peak_xy(display, sheet_ele):
    xy, e = _peak_osm(display, sheet_ele)
    fb = PEAK_FALLBACK.get(display)
    if xy and fb and hav(xy, fb[:2]) > 1.5: warn(f'peak {display}: OSM and Wikidata differ by {hav(xy, fb[:2]):.1f} km')
    if xy: return xy, e
    return (fb[0], fb[1]), fb[2]

def _peak_osm(display, sheet_ele):
    rx = re.compile('^(' + PEAK_OSM[display] + ')')
    c = nodes(lambda t: t.get('natural') == 'peak' and rx.match(t.get('name', '')))
    def ele(e):
        try: return float(re.sub(r'[^0-9.]', '', e['tags'].get('ele', '0')) or 0)
        except ValueError: return 0
    near = PEAK_NEAR.get(display)
    if near: c = [e for e in c if hav((e['lon'], e['lat']), near) < 15]
    if not c: return None, None
    e = min(c, key=lambda e: abs(ele(e) - sheet_ele))
    return (round(e['lon'], 5), round(e['lat'], 5)), ele(e)

PASS_OSM = {
    'Grosser St. Bernhard': 'Grand-Saint-Bernard|Grand Saint-Bernard|Grosser St|Gran San Bernardo', 'Simplon': 'Simplonpass', 'Nufenen': 'Nufenenpass',
    'Furka': 'Furkapass', 'Gotthard': 'Gotthard', 'Grimsel': 'Grimselpass', 'Oberalp': 'Oberalppass', 'Susten': 'Sustenpass',
    'Lukmanier': 'Passo del Lucomagno|Lukmanier', 'San Bernardino': 'Passo del San Bernardino', 'Julier': 'Julierpass',
    'Albulapass': 'Albulapass', 'Flüela': 'Flüela|Fluela', 'Berninapass': 'Passo del Bernina', 'Ofen': 'Pass dal Fuorn',
    'Umbrail': 'Pass Umbrail', 'Maloja': 'Malojapass', 'Hauenstein': 'Unterer Hauenstein', 'Vue des Alpes': 'Vue des Alpes',
}
def pass_xy(display, sheet_ele):
    xy, e = _pass_osm(display, sheet_ele)
    fb = PASS_FALLBACK.get(display)
    if xy and fb and hav(xy, fb[:2]) > 1.5: warn(f'pass {display}: OSM and Wikidata differ by {hav(xy, fb[:2]):.1f} km')
    if xy: return xy, e
    return (fb[0], fb[1]), fb[2]

def _pass_osm(display, sheet_ele):
    rx = re.compile('^(' + PASS_OSM[display] + ')')
    c = nodes(lambda t: ('mountain_pass' in t or t.get('natural') == 'saddle') and rx.match(t.get('name', '')))
    def ele(e):
        try: return float(re.sub(r'[^0-9.]', '', e['tags'].get('ele', '0')) or 0)
        except ValueError: return 0
    if display == 'Gotthard': c = [e for e in c if hav((e['lon'], e['lat']), (8.56, 46.56)) < 6]
    if display == 'Grosser St. Bernhard': c = [e for e in c if hav((e['lon'], e['lat']), (7.17, 45.87)) < 6]
    if not c: return None, None
    e = min(c, key=lambda e: abs(ele(e) - sheet_ele))
    return (round(e['lon'], 5), round(e['lat'], 5)), ele(e)

# ---------------- water (lakes, rivers) -------------------
def ways_to_geoms(elements):
    """Return dict osm-id -> shapely geometry for ways/relations with 'geometry' members (out geom)."""
    res = {}
    for e in elements:
        if e['type'] == 'way' and 'geometry' in e:
            pts = [(p['lon'], p['lat']) for p in e['geometry']]
            res[('w', e['id'])] = (e['tags'], pts)
    return res

def rel_lines(e):
    lines = []
    for m in e.get('members', []):
        if m['type'] == 'way' and m.get('geometry') and len(m['geometry']) > 1:
            pts = [(p['lon'], p['lat']) for p in m['geometry'] if p]
            if len(pts) > 1: lines.append(LineString(pts))
    return lines

def rel_polygon(e):
    outers = [LineString([(p['lon'], p['lat']) for p in m['geometry']]) for m in e.get('members', []) if m['type'] == 'way' and m.get('role') == 'outer' and m.get('geometry')]
    inners = [LineString([(p['lon'], p['lat']) for p in m['geometry']]) for m in e.get('members', []) if m['type'] == 'way' and m.get('role') == 'inner' and m.get('geometry')]
    from shapely.ops import polygonize
    merged = linemerge(outers) if outers else None
    if merged is None: return None
    polys = list(polygonize(merged))
    if not polys: return None
    outer = unary_union(polys)
    if inners:
        ip = list(polygonize(linemerge(inners)))
        if ip: outer = outer.difference(unary_union(ip))
    return outer

def simplify(g, tol):
    s = g.simplify(tol, preserve_topology=True)
    return s

def rnd(geom_map, nd=4):
    def r(c):
        if isinstance(c[0], (int, float)): return [round(c[0], nd), round(c[1], nd)]
        return [r(x) for x in c]
    return {'type': geom_map['type'], 'coordinates': r(geom_map['coordinates'])}

CLIP = box(*BOUNDS)
LAKE_OSM = {
    'Lago Maggiore': r'Lago Maggiore', 'Lago di Lugano': r'Lago di Lugano|Lago Ceresio|Ceresio', 'Bodensee': r'Bodensee', 'Walensee': r'Walensee',
    'Sihlsee': r'Sihlsee', 'Zürichsee': r'Zürichsee', 'Greifensee': r'Greifensee', 'Zugersee': r'Zugersee',
    'Vierwaldstättersee': r'Vierwaldstättersee', 'Hallwilersee': r'Hallwilersee', 'Sempachersee': r'Sempachersee', 'Brienzersee': r'Brienzersee',
    'Thunersee': r'Thunersee', 'Murtensee': r'Murtensee|Lac de Morat', 'Bielersee': r'Bielersee|Lac de Bienne',
    'Lac de Neuchâtel': r'Lac de Neuchâtel|Neuenburgersee', 'Lac Léman': r'Lac Léman|Genfersee|Lac de Genève',
}
def lake_geom(display):
    rx = re.compile('^(' + LAKE_OSM[display] + ')')
    polys = []
    for e in EL:
        t = e.get('tags', {})
        if t.get('natural') != 'water' or not rx.match(t.get('name', '')): continue
        if e['type'] == 'relation':
            p = rel_polygon(e)
            if p is not None: polys.append(p)
        elif e['type'] == 'way' and e.get('geometry') and len(e['geometry']) > 3:
            pts = [(q['lon'], q['lat']) for q in e['geometry']]
            if pts[0] == pts[-1]: polys.append(Polygon(pts))
    if not polys: return None
    g = unary_union([p.buffer(0) for p in polys])
    return g

RIVER_OSM = {
    'Rhône': r'Rhône|Rhone|Le Rhône|Rotten', 'Ticino': r'Ticino', 'Maggia': r'Maggia', 'Verzasca': r'Verzasca', 'Vorderrhein': r'Rein Anteriur|Vorderrhein',
    'Hinterrhein': r'Rein Posteriur|Hinterrhein', 'Rhein': r'Rhein', 'Inn': r'Inn|En', 'Albula': r'Albula', 'Julia': r'Gelgia|Julia',
    'Linth': r'Linth', 'Limmat': r'Limmat', 'Sihl': r'Sihl', 'Töss': r'Töss', 'Thur': r'Thur', 'Sitter': r'Sitter', 'Reuss': r'Reuss',
    'Kleine Emme': r'Kleine Emme|Waldemme', 'Grosse Emme': r'Grosse Emme|Emme$', 'Aare': r'Aare', 'Simme': r'Simme', 'Saane': r'Saane|Sarine',
    'Orbe': r"Orbe|L'Orbe", 'Doubs': r'Doubs|Le Doubs', 'Birs': r'Birs|Birse|La Birse', 'Moesa': r'Moesa', 'Landquart': r'Landquart',
}
def river_lines(display, extra_names=None):
    rx = re.compile('^(' + RIVER_OSM[display] + ')$')
    best = []
    for e in EL:
        t = e.get('tags', {})
        if e['type'] != 'relation' or t.get('type') != 'waterway' or not rx.match(t.get('name', '')): continue
        ls = rel_lines(e)
        if ls: best.append((t.get('name'), e['id'], ls))
    if True:   # also collect the named ways (upper courses are often not part of the relation)
        by = {}
        for e in EL:
            t = e.get('tags', {})
            if e['type'] == 'way' and t.get('waterway') in ('river', 'stream') and rx.match(t.get('name', '')) and e.get('geometry'):
                pts = [(p['lon'], p['lat']) for p in e['geometry'] if p]
                if len(pts) > 1: by.setdefault(t['name'], []).append(LineString(pts))
        best += [(n, 0, ls) for n, ls in by.items()]
    return best
