import ovp, time
jobs = [
    ('birse', '[out:json][timeout:90];way["waterway"~"^(river|stream)$"]["name"~"^(Birse|La Birse|Birs)$"](47.0,7.0,47.6,7.8);out geom;'),
    ('waldemme', '[out:json][timeout:90];way["waterway"~"^(river|stream)$"]["name"~"^(Waldemme|Kleine Emme)$"](46.78,7.95,47.12,8.35);out geom;'),
    ('sitter', '[out:json][timeout:90];way["waterway"~"^(river|stream)$"]["name"~"^Sitter$"](47.2,9.2,47.55,9.5);out geom;'),
    ('toess', '[out:json][timeout:90];way["waterway"~"^(river|stream)$"]["name"~"^Töss$"](47.2,8.5,47.6,9.0);out geom;'),
]
for label, q in jobs:
    t = time.time()
    try:
        d = ovp.q(q, timeout=100)
        names = sorted(set(e.get('tags', {}).get('name') for e in d['elements']))
        print(label, len(d['elements']), 'ways', names, round(time.time() - t), 's', flush=True)
    except Exception as ex:
        print(label, 'FAILED', repr(ex)[:80], flush=True)
print('done12', flush=True)
