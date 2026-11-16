import ovp, time, sys
# (label, name regex, bbox s,w,n,e)
jobs = [
    ('Töss', '^Töss$', '47.2,8.7,47.6,8.95'),
    ('Birs', '^Birs$', '47.1,7.2,47.6,7.7'),
    ('Orbe', "^(Orbe|L'Orbe)$", '46.55,6.2,46.85,6.7'),
    ('Doubs', '^(Doubs|Le Doubs)$', '47.0,6.7,47.5,7.3'),
    ('Moesa', '^Moesa$', '46.15,9.0,46.5,9.3'),
    ('Emme', '^(Grosse Emme|Emme)$', '46.8,7.5,47.2,7.95'),
    ('Rhône-a', '^(Rhône|Rhone|Le Rhône)$', '46.05,6.8,46.5,7.6'),
    ('Rhône-b', '^(Rhône|Rhone|Le Rhône)$', '46.2,7.5,46.65,8.5'),
    ('Rhône-c', '^(Rhône|Rhone|Le Rhône)$', '45.95,5.9,46.4,6.9'),
]
for label, rx, bb in jobs:
    t = time.time()
    try:
        d = ovp.q(f'[out:json][timeout:100];way["waterway"="river"]["name"~"{rx}"]({bb});out geom;', timeout=120)
        print(label, len(d['elements']), 'ways', round(time.time() - t), 's', flush=True)
    except Exception as ex:
        print(label, 'FAILED', repr(ex)[:80], flush=True)
print('done5', flush=True)
