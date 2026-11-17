import ovp, time
parts = [('a', '46.05,6.8,46.40,7.4'), ('b', '46.10,7.3,46.45,7.9'), ('c', '46.25,7.8,46.60,8.5'), ('d', '46.10,5.9,46.35,6.9')]
for label, bb in parts:
    t = time.time()
    try:
        d = ovp.q(f'[out:json][timeout:100];way["waterway"="river"]["name"~"^(Rhône|Rhone|Le Rhône)$"]({bb});out geom;', timeout=120)
        print('rhone', label, len(d['elements']), 'ways', round(time.time() - t), 's', flush=True)
    except Exception as ex:
        print('rhone', label, 'FAILED', repr(ex)[:80], flush=True)
print('done9', flush=True)
