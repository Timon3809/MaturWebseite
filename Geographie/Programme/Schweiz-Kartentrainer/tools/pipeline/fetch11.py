import ovp, time
for label, q in [('rotten', '[out:json][timeout:90];way["waterway"="river"]["name"~"Rotten"](46.2,7.4,46.65,8.5);out geom;'),
                 ('rhone-any-upper', '[out:json][timeout:90];way["waterway"="river"]["name:fr"~"Rhône"](46.2,7.4,46.65,8.5);out geom;')]:
    t = time.time()
    try:
        d = ovp.q(q, timeout=100)
        print(label, len(d['elements']), 'ways', [e.get('tags', {}).get('name') for e in d['elements'][:4]], round(time.time() - t), 's', flush=True)
    except Exception as ex:
        print(label, 'FAILED', repr(ex)[:80], flush=True)
print('done11', flush=True)
