import json, sys
d = json.load(open(sys.argv[1], encoding='utf8'))
dev = []
for i in d['items']:
    fp = i['featureProperties']
    if 'hoeheBlatt' in fp:
        diff = fp['hoeheOsm'] - fp['hoeheBlatt']
        dev.append((abs(diff), i['name'], fp['hoeheBlatt'], fp['hoeheOsm']))
dev.sort(reverse=True)
print('max dev', dev[:8])
print('n', len(dev), 'all<=12:', all(x[0] <= 12 for x in dev))
print({t: sum(1 for i in d['items'] if i['type'] == t) for t in set(i['type'] for i in d['items'])})
print('river km', [(i['name'], i['featureProperties']['laengeKm']) for i in d['items'] if i['type'] == 'river'])
