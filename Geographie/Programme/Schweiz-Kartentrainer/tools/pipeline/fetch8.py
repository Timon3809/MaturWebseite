import ovp, time
B = ovp.BBOX
def run(label, query):
    t = time.time()
    try:
        d = ovp.q(query, timeout=150)
        print(label, len(d['elements']), 'elements', round(time.time() - t), 's', flush=True)
    except Exception as ex:
        print(label, 'FAILED', repr(ex)[:90], flush=True)

run('cities-diacritics', f'''[out:json][timeout:100];
node["place"~"^(city|town)$"]["name"~"^(Genève|Neuchâtel|Delémont|Zürich)$"]({B});out;''')
run('peaks-diacritics', f'''[out:json][timeout:100];
node["natural"="peak"]["name"~"^(Tödi|Piz Russein|Vrenelisgärtli|Glärnisch|Säntis|Hinderrugg|La Dôle|Dôle|Röti)$"]({B});out;''')
run('toess', '''[out:json][timeout:100];way["waterway"~"river|stream"]["name"="Töss"](47.2,8.5,47.6,8.95);out geom;''')
run('rhone-rel', '''[out:json][timeout:120];rel["waterway"="river"]["name"~"^(Rhône|Rhone)$"](45.9,5.9,46.7,8.5);out geom(45.9,5.9,46.7,8.5);''')
print('done8', flush=True)
