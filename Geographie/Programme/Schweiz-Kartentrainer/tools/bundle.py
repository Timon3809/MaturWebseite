"""Builds the single-file index.html (runs without a server) from src/ + data/ + map.config.json.

Usage: python bundle.py <trainer_dir>
Mirrors how the Asia trainer's index.html was produced: HTML shell + INLINE_CONFIG/INLINE_DATA
+ schema.js + core.js + app.js with ES-module syntax stripped and the fetch calls replaced.
"""
import json, re, sys, pathlib

root = pathlib.Path(sys.argv[1])
cfg = json.loads((root / 'map.config.json').read_text(encoding='utf8'))
data_path = root / cfg['data']
css = (root / 'src' / 'styles.css').read_text(encoding='utf8')
shell = (root / 'src' / 'shell.html').read_text(encoding='utf8')
schema = (root / 'src' / 'schema.js').read_text(encoding='utf8')
core = (root / 'src' / 'core.js').read_text(encoding='utf8')
app = (root / 'src' / 'app.js').read_text(encoding='utf8')

def drop_dup_consts(js):
    # core.js already declares the map size; the single-file bundle shares one scope
    return re.sub(r'^const MAP_(WIDTH|HEIGHT) = \d+;\s*$', '', js, flags=re.M)

def strip_modules(js):
    js = re.sub(r'^import .*?;\s*$', '', js, flags=re.M)
    js = re.sub(r'^export\s+(const|function|async function)', r'\1', js, flags=re.M)
    js = re.sub(r'^export \{[^}]*\};\s*$', '', js, flags=re.M)
    return js

old_load = re.search(r"    const configResponse = await fetch\('\./map\.config\.json'\);.*?data = validateDataset\(await response\.json\(\)\);", app, flags=re.S)
if not old_load:
    raise SystemExit('could not find the fetch block in app.js')
app = app.replace(old_load.group(0), "    config = validateConfig(INLINE_CONFIG);\n    data = validateDataset(INLINE_DATA);")

# keep </script> out of the inline JSON
def js_json(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')

script = (
    'const INLINE_CONFIG = ' + js_json(cfg) + ';\n'
    'const INLINE_DATA = ' + js_json(json.loads(data_path.read_text(encoding='utf8'))) + ';\n\n'
    + strip_modules(schema) + '\n' + strip_modules(core) + '\n' + strip_modules(drop_dup_consts(app))
)
html = shell.replace('/*__CSS__*/', css).replace('/*__SCRIPT__*/', script)
(root / 'index.html').write_text(html, encoding='utf8')
print('wrote', root / 'index.html', len(html) // 1024, 'KB')
