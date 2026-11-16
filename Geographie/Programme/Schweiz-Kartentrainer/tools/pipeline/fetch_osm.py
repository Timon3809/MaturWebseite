import ovp, json, sys, time
B = ovp.BBOX
def run(label, query):
    t = time.time()
    d = ovp.q(query, timeout=170)
    print(label, len(d['elements']), 'elements', round(time.time() - t), 's', flush=True)

run('cities', f'''[out:json][timeout:120];
node["place"~"^(city|town|village)$"]["name"~"^(Genève|Genf|Lausanne|Sion|Sitten|Brig-Glis|Brig|Domodossola|Locarno|Bellinzona|Airolo|Lugano|St\\. Moritz|Sankt Moritz|Davos|Chur|Glarus|St\\. Gallen|Sankt Gallen|Schaffhausen|Winterthur|Zürich|Zug|Luzern|Aarau|Olten|Solothurn|Basel|Delémont|Delsberg|Biel/Bienne|Biel|Bienne|Neuchâtel|Neuenburg|La Chaux-de-Fonds|Yverdon-les-Bains|Yverdon|Fribourg|Freiburg|Bern|Thun)$"]({B});
out;''')

run('peaks', f'''[out:json][timeout:120];
node["natural"="peak"]["name"~"^(Dufourspitze|Dom|Matterhorn|Grand Cornier|Haute Cime|Dents du Midi|Jungfrau|Piz Russein|Tödi|Bächistock|Vrenelisgärtli|Glärnisch|Titlis|Pilatus|Tomlishorn|Esel|Rigi Kulm|Rigi|Grosser Mythen|Mythen|Napf|Säntis|Pizol|Hinderrugg|Churfirsten|Piz Bernina|Piz Buin|Chasseral|La Dôle|Röti|Weissenstein|Hasenmatt|Lägern|Lägern Hochwacht|Hochwacht|Burghorn)$"]({B});
out;''')

run('passes', f'''[out:json][timeout:120];
(node["mountain_pass"="yes"]["name"~"Grand-Saint-Bernard|Grosser St|Simplon|Nufenen|Novena|Furka|Gotthard|Grimsel|Oberalp|Susten|Lukmanier|Lucomagno|San Bernardino|Julier|Albula|Flüela|Fluela|Bernina|Ofen|Fuorn|Umbrail|Maloja|Malögia|Hauenstein|Vue des Alpes"]({B});
 node["natural"="saddle"]["name"~"Grand-Saint-Bernard|Grosser St|Simplon|Nufenen|Novena|Furka|Gotthard|Grimsel|Oberalp|Susten|Lukmanier|Lucomagno|San Bernardino|Julier|Albula|Flüela|Fluela|Bernina|Ofen|Fuorn|Umbrail|Maloja|Malögia|Hauenstein|Vue des Alpes"]({B}););
out;''')

run('lakes', f'''[out:json][timeout:150];
(rel["natural"="water"]["water"="lake"]["name"~"^(Lago Maggiore|Lago di Lugano|Lago Ceresio|Bodensee|Walensee|Sihlsee|Zürichsee|Greifensee|Zugersee|Vierwaldstättersee|Hallwilersee|Sempachersee|Brienzersee|Thunersee|Murtensee|Lac de Morat|Bielersee|Lac de Bienne|Lac de Neuchâtel|Neuenburgersee|Lac Léman|Genfersee|Lac de Genève)"]({B});
 way["natural"="water"]["name"~"^(Lago Maggiore|Lago di Lugano|Lago Ceresio|Bodensee|Walensee|Sihlsee|Zürichsee|Greifensee|Zugersee|Vierwaldstättersee|Hallwilersee|Sempachersee|Brienzersee|Thunersee|Murtensee|Lac de Morat|Bielersee|Lac de Bienne|Lac de Neuchâtel|Neuenburgersee|Lac Léman|Genfersee|Lac de Genève)"]({B}););
out geom(45.4,5.5,48.3,11.0);''')

run('rivers', f'''[out:json][timeout:170];
rel["waterway"="river"]["type"="waterway"]["name"~"^(Rhône|Rhone|Ticino|Maggia|Verzasca|Vorderrhein|Rein Anteriur|Hinterrhein|Rein Posteriur|Rhein|Inn|En|Albula|Alvra|Julia|Gelgia|Linth|Limmat|Sihl|Töss|Thur|Sitter|Reuss|Kleine Emme|Grosse Emme|Aare|Simme|Saane|Sarine|Orbe|Doubs|Birs)$"]({B});
out geom(45.4,5.5,48.3,11.0);''')
print('done', flush=True)
