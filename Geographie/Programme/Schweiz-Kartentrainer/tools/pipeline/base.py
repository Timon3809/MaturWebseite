"""Base map: Switzerland (swisstopo via swiss-maps) + neighbours (Natural Earth 10m) clipped to bounds."""
import json, os
from shapely.geometry import shape, mapping, box
from shapely.ops import unary_union
import topo

here = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(here, 'work')
BOUNDS = (5.4, 45.45, 11.0, 48.2)

def r(coords, nd=4):
    if isinstance(coords[0], (int, float)): return [round(coords[0], nd), round(coords[1], nd)]
    return [r(c, nd) for c in coords]

def clean(geom, tol):
    g = geom.simplify(tol, preserve_topology=True)
    if g.is_empty: return None
    return g

def build():
    clip = box(*BOUNDS)
    ch = unary_union([shape(f['geometry']) for f in topo.features('country', os.path.join(SRC, 'ch.json'))])
    feats = []
    ne = json.load(open(os.path.join(SRC, 'ne_10m_admin0.geojson'), encoding='utf8'))
    names = {'France': 'Frankreich', 'Germany': 'Deutschland', 'Italy': 'Italien', 'Austria': 'Österreich', 'Liechtenstein': 'Liechtenstein'}
    for f in ne['features']:
        p = f['properties']
        nm = p.get('ADMIN') or p.get('NAME')
        if nm in names:
            g = shape(f['geometry']).intersection(clip).difference(ch.buffer(0))
            g = clean(g, 0.002)
            if g: feats.append({'type': 'Feature', 'properties': {'id': nm.lower(), 'name': names[nm]}, 'geometry': mapping(g)})
    g = clean(ch.intersection(clip), 0.0006)
    feats.append({'type': 'Feature', 'properties': {'id': 'schweiz', 'name': 'Schweiz', 'home': True}, 'geometry': mapping(g)})
    return feats, ch

if __name__ == '__main__':
    feats, ch = build()
    for f in feats:
        g = shape(f['geometry']); print(f['properties'], g.geom_type, len(json.dumps(mapping(g))) // 1024, 'KB')
    print('CH bounds', ch.bounds)
