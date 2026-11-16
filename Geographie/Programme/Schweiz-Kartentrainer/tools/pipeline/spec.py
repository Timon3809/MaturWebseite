# -*- coding: utf-8 -*-
"""Item list exactly as in '0. Legende zur Karte der Schweiz' (key = letter/number on the worksheet)."""

# (key, display name, aliases)
RIVERS = [
    ('a', 'Rhône', ['Rhone', 'Rhône / Rhone']), ('b', 'Ticino', ['Tessin']), ('c', 'Maggia', []), ('d', 'Verzasca', []),
    ('e', 'Vorderrhein', []), ('f', 'Hinterrhein', []), ('g', 'Rhein', []), ('h', 'Inn', []), ('i', 'Albula', []),
    ('j', 'Julia', []), ('k', 'Linth', []), ('l', 'Limmat', []), ('m', 'Sihl', []), ('n', 'Töss', []), ('o', 'Thur', []),
    ('p', 'Sitter', []), ('q', 'Reuss', []), ('r', 'Kleine Emme', []), ('s', 'Grosse Emme', ['Große Emme']),
    ('t', 'Aare', []), ('u', 'Simme', []), ('v', 'Saane', ['Sarine', 'Saane / Sarine']), ('w', 'Orbe', []),
    ('x', 'Doubs', []), ('y', 'Birs', []),
]
LAKES = [
    ('A', 'Lago Maggiore', ['Lac Majeur', 'Langensee']), ('B', 'Lago di Lugano', ['Luganersee', 'Ceresio']),
    ('C', 'Bodensee', []), ('D', 'Walensee', []), ('E', 'Sihlsee', []), ('F', 'Zürichsee', []),
    ('G', 'Greifensee', []), ('H', 'Zugersee', []), ('I', 'Vierwaldstättersee', ['Vierwaldstaettersee']),
    ('J', 'Hallwilersee', []), ('K', 'Sempachersee', []), ('L', 'Brienzersee', []), ('M', 'Thunersee', []),
    ('N', 'Murtensee', ['Lac de Morat']), ('O', 'Bielersee', ['Lac de Bienne', 'Bielersee / Lac de Bienne']),
    ('P', 'Lac de Neuchâtel', ['Neuenburgersee', 'Neuenburger See']), ('Q', 'Lac Léman', ['Genfersee', 'Genfer See', 'Lac Leman']),
]
# (no, name, sheet elevation, aliases)
MOUNTAINS = [
    (1, 'Dufourspitze', 4634, ['Monte Rosa', 'Dufourspitze (Monte Rosa)']), (2, 'Dom', 4545, []), (3, 'Matterhorn', 4478, []),
    (4, 'Dents du Midi', 3257, []), (5, 'Jungfrau', 4158, []), (6, 'Tödi', 3614, []), (7, 'Glärnisch', 2904, []),
    (8, 'Titlis', 3228, []), (9, 'Pilatus', 2120, []), (10, 'Rigi', 1798, []), (11, 'Mythen', 1899, ['Grosser Mythen']),
    (12, 'Napf', 1408, []), (13, 'Säntis', 2503, []), (14, 'Pizol', 2844, []), (15, 'Churfirsten', 2306, []),
    (16, 'Piz Bernina', 4049, []), (17, 'Piz Buin', 3312, []), (18, 'Chasseral', 1607, []), (19, 'La Dôle', 1677, ['Dôle', 'Dole']),
    (20, 'Weissenstein', 1396, ['Weißenstein']), (21, 'Lägern', 856, []),
]
PASSES = [
    ('a', 'Grosser St. Bernhard', 2469, ['Großer St. Bernhard', 'Grand-Saint-Bernard', 'Gr. St. Bernhard']), ('b', 'Simplon', 2006, []),
    ('c', 'Nufenen', 2478, []), ('d', 'Furka', 2431, []), ('e', 'Gotthard', 2109, ['Gotthardpass']), ('f', 'Grimsel', 2165, []),
    ('g', 'Oberalp', 2044, []), ('h', 'Susten', 2224, []), ('i', 'Lukmanier', 1972, []),
    ('j', 'San Bernardino', 2065, []), ('k', 'Julier', 2284, []), ('l', 'Albulapass', 2312, ['Albula']),
    ('m', 'Flüela', 2383, ['Fluela']), ('n', 'Berninapass', 2328, ['Bernina']), ('o', 'Ofen', 2149, ['Ofenpass']),
    ('p', 'Umbrail', 2503, []), ('q', 'Maloja', 1815, []), ('r', 'Hauenstein', 691, []), ('s', 'Vue des Alpes', 1283, []),
]
REGIONS = [
    ('A', 'Lavaux', []), ('B', 'Rhônetal', ['Rhonetal', 'Rhonetal (Wallis)']), ('C', 'Goms', []), ('D', 'Leventina', []),
    ('E', 'Maggiatal', ['Valle Maggia', 'Vallemaggia']), ('F', 'Verzascatal', ['Val Verzasca']), ('G', 'Misox', ['Val Mesolcina', 'Mesolcina']),
    ('H', 'Bergell', ['Val Bregaglia', 'Bregaglia']), ('I', 'Puschlav', ['Val Poschiavo', 'Poschiavo']),
    ('J', 'Münstertal', ['Val Müstair', 'Val Mustair']), ('K', 'Engadin', ['Engiadina']), ('L', 'Prättigau', []),
    ('M', 'Domleschg', []), ('N', 'Surselva', ['Bündner Oberland']), ('O', 'St. Galler Rheintal', ['Rheintal', 'Sankt Galler Rheintal']),
    ('P', 'Toggenburg', []), ('Q', 'Alpstein', []), ('R', 'Entlebuch', []), ('S', 'Emmental', []),
    ('T', 'Napfgebiet', ['Napfbergland']), ('U', 'Berner Seeland', ['Seeland', '(Berner) Seeland']),
    ('V', 'Vallée de Joux', ['Vallee de Joux', 'Joux']), ('W', 'Freiberge', ['Franches-Montagnes']),
    ('X', 'Ajoie', []), ('Y', 'Freiamt', []),
]
CITIES = [
    ('G', 'Genf', ['Genève', 'Geneve', 'Geneva']), ('L', 'Lausanne', []), ('S', 'Sion', ['Sitten']), ('BR', 'Brig', ['Brig-Glis']),
    ('DOM', 'Domodossola', []), ('LOC', 'Locarno', []), ('BEL', 'Bellinzona', []), ('AI', 'Airolo', []), ('LUG', 'Lugano', []),
    ('S.M.', 'St. Moritz', ['Sankt Moritz', 'Saint Moritz']), ('DAV', 'Davos', []), ('Ch', 'Chur', []), ('GL', 'Glarus', []),
    ('S.G.', 'St. Gallen', ['Sankt Gallen']), ('SH', 'Schaffhausen', []), ('W', 'Winterthur', []), ('Z', 'Zürich', ['Zuerich']),
    ('ZG', 'Zug', []), ('LU', 'Luzern', ['Lucerne']), ('A', 'Aarau', []), ('O', 'Olten', []), ('SO', 'Solothurn', []),
    ('BS', 'Basel', []), ('D', 'Delsberg', ['Delémont', 'Delemont']), ('BI', 'Biel', ['Bienne', 'Biel/Bienne']),
    ('N', 'Neuenburg', ['Neuchâtel', 'Neuchatel']), ('LCF', 'La Chaux-de-Fonds', ['La Chaux de Fonds', 'Chaux-de-Fonds']),
    ('Y', 'Yverdon', ['Yverdon-les-Bains']), ('F', 'Freiburg', ['Fribourg']), ('BE', 'Bern', ['Berne']), ('T', 'Thun', []),
]
# every pass may be typed with or without the word "Pass" (Furka / Furkapass / Furka Pass)
def _pass_aliases(name, ele, al):
    base = name[:-4] if name.endswith('pass') else name
    extra = {base, base + 'pass', base + ' Pass', base + '-Pass'}
    return sorted(set(al) | (extra - {name}))
PASSES = [(k, n, e, _pass_aliases(n, e, a)) for k, n, e, a in PASSES]

assert (len(RIVERS), len(LAKES), len(MOUNTAINS), len(PASSES), len(REGIONS), len(CITIES)) == (25, 17, 21, 19, 25, 31)
