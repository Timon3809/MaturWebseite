import json, hashlib, os, subprocess, sys, tempfile
CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'work', 'cache'); os.makedirs(CACHE, exist_ok=True)
EPS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter']
UA = 'SchoolMapTrainer/1.0 (educational geography exercise)'
BBOX = '45.6,5.7,48.0,10.8'

def q(query, timeout=90):
    # NOTE: the query goes through a UTF-8 file (data@file). Passing it as a command-line argument on Windows
    # re-encodes umlauts/accents to cp1252, so names like Zürich, Töss or Genève silently matched nothing.
    h = hashlib.sha1(('utf8file-v3' + query).encode()).hexdigest(); p = os.path.join(CACHE, h + '.json')
    if os.path.exists(p): return json.load(open(p, encoding='utf8'))
    last = None
    with tempfile.NamedTemporaryFile('w', suffix='.txt', delete=False, encoding='utf8') as tf:
        tf.write(query); qfile = tf.name
    try:
        for ep in EPS:
            try:
                r = subprocess.run(['curl', '-s', '-m', str(timeout), '-A', UA, '--data-urlencode', 'data@' + qfile, ep],
                                   capture_output=True, timeout=timeout + 10)
                d = json.loads(r.stdout.decode('utf8'))
                json.dump(d, open(p, 'w', encoding='utf8')); return d
            except Exception as e:
                last = e; print('  fail', ep, repr(e)[:100], file=sys.stderr)
    finally:
        os.unlink(qfile)
    raise RuntimeError(f'overpass failed: {last}')
