import urllib.request, os, sys
d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'work')
os.makedirs(d, exist_ok=True)
jobs = [
    ('ch.json', 'https://cdn.jsdelivr.net/npm/swiss-maps@4.4.0/2023/ch-combined.json'),
    ('ne_10m_admin0.geojson', 'https://cdn.jsdelivr.net/gh/nvkelso/natural-earth-vector@v5.1.2/geojson/ne_10m_admin_0_countries.geojson'),
]
for name, url in jobs:
    p = os.path.join(d, name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        print('have', name); continue
    req = urllib.request.Request(url, headers={'User-Agent': 'SchoolMapTrainer/1.0'})
    with urllib.request.urlopen(req, timeout=100) as r, open(p, 'wb') as f:
        f.write(r.read())
    print('fetched', name, os.path.getsize(p))
