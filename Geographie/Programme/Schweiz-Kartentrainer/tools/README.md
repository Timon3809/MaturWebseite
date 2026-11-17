# Schweizer Kartentrainer – Werkzeuge

Der Trainer nutzt dasselbe Framework wie der Asien-Trainer (`src/`), erweitert um den Typ **Pässe**
(Schema, Marker, Legende) und eine hervorgehobene Schweiz mit Nachbarländern als Basiskarte.

## Seite neu erzeugen

`index.html` ist ein Einzeldatei-Bundle (läuft auch ohne Server) aus `src/`, `map.config.json` und `data/`:

```bash
python tools/bundle.py Geographie/Programme/Schweiz-Kartentrainer
```

## Datensatz neu erzeugen (`tools/pipeline/`)

Nur nötig, wenn Orte oder Flüsse geändert werden. Reihenfolge, jeweils aus `tools/pipeline/`:

1. `python fetch_base.py` lädt Landesgrenze/Seen (swiss-maps) und Nachbarländer (Natural Earth) nach `work/`.
2. `fetch_osm.py`, `fetch5.py`, `fetch8.py`, `fetch9.py`, `fetch11.py`, `fetch12.py` holen Flüsse, Gipfel, Pässe und Städte
   von Overpass (Cache in `work/cache/`; der Server ist langsam, einzelne Abfragen brauchen mehrere Versuche).
3. `python build_main.py ../../data/schweiz-lernkarte.json` baut den Datensatz und druckt einen **Prüfbericht**:
   Anzahl 25/17/21/19/25/31, Höhen laut Blatt gegen OSM (±30 m), Wikidata-Gegenprobe der Koordinaten (±1,5 km),
   Flusslauf durch Pflichtpunkte, Länge und Lücken jedes Flusses, Probeorte innerhalb der Talflächen.
   Der Bericht muss leer sein.

| Quelle | Verwendung |
| --- | --- |
| swisstopo via `swiss-maps` (2023) | Landesgrenze, alle Seen |
| OpenStreetMap (Overpass) | Flüsse, Gipfel, Pässe, Städte |
| Wikidata / Wikipedia | Gegenprobe und Ersatz, wo OSM fehlte |
| Natural Earth 10m | Nachbarländer |
| `regions.py` | Täler/Landschaften: aus Flussabschnitten oder von Hand gesetzten Achsen gepuffert (vereinfachte Lernflächen, keine amtlichen Grenzen) |

Windows: Overpass-Abfragen mit Umlauten/Akzenten müssen als UTF-8-Datei (`data@datei`) übergeben werden, nicht als
Kommandozeilenargument (sonst werden Zürich, Töss, Rhône usw. nicht gefunden). `ovp.py` macht das bereits.
Der Oberlauf der Rhône heisst in OSM «Rotten», die Birs im Jura «La Birse», die obere Kleine Emme «Waldemme».
