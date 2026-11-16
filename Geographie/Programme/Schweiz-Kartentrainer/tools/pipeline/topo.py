"""Minimal TopoJSON -> GeoJSON-geometry decoder (arcs, transform)."""
import json

def load(path):
    t = json.load(open(path, encoding='utf8'))
    sc = t.get('transform', {}).get('scale', [1, 1]); tr = t.get('transform', {}).get('translate', [0, 0])
    arcs = []
    for a in t['arcs']:
        x = y = 0; out = []
        for dx, dy in a:
            x += dx; y += dy
            out.append([x * sc[0] + tr[0], y * sc[1] + tr[1]])
        arcs.append(out)
    return t, arcs

def _ring(idx, arcs):
    pts = []
    for i in idx:
        a = arcs[i] if i >= 0 else arcs[~i][::-1]
        pts.extend(a if not pts else a[1:])
    return pts

def geometry(g, arcs):
    ty = g['type']
    if ty == 'Polygon':
        return {'type': 'Polygon', 'coordinates': [_ring(r, arcs) for r in g['arcs']]}
    if ty == 'MultiPolygon':
        return {'type': 'MultiPolygon', 'coordinates': [[_ring(r, arcs) for r in p] for p in g['arcs']]}
    if ty == 'LineString':
        return {'type': 'LineString', 'coordinates': _ring(g['arcs'], arcs)}
    if ty == 'MultiLineString':
        return {'type': 'MultiLineString', 'coordinates': [_ring(l, arcs) for l in g['arcs']]}
    raise ValueError(ty)

def features(obj_name, path):
    t, arcs = load(path)
    o = t['objects'][obj_name]
    res = []
    for g in o.get('geometries', [o]):
        res.append({'type': 'Feature', 'properties': g.get('properties', {}), 'geometry': geometry(g, arcs)})
    return res
