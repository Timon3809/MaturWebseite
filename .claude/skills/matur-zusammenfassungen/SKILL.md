---
name: matur-zusammenfassungen
description: Stil und Arbeitsablauf für die Lern-Zusammenfassungen der Vormatur-Webseite (Biologie, Chemie, Geographie, Geschichte) – dichte Lernkapitel mit vielen Abbildungen aus den Skripten, Tabellen, Merke-Kästen und selbst gezeichneten SVG-Schemata. Verwende diesen Skill immer, wenn eine Zusammenfassung oder ein Kapitel in der data.js eines Fachs (z. B. Geographie/Scripts/data.js) neu geschrieben, überarbeitet, ergänzt oder «im gleichen Stil» wie ein anderes Kapitel angepasst werden soll, wenn ein Skript, Arbeitsblatt, Praktikum oder Zeitungsartikel (PDF, DOCX, ZIP) in eine Zusammenfassung eingearbeitet werden soll, wenn «mehr Abbildungen / Tabellen / Details» gewünscht sind, wenn ein neuer Abschnitt bzw. neue Themen angelegt, die Reihenfolge der Abschnitte geändert oder Begriffe ins Glossar aufgenommen werden sollen, oder wenn eine Grafik aus Messwerten neu gezeichnet werden soll – auch wenn das Wort «Skill» oder «Stil» nicht fällt.
---

# Lern-Zusammenfassungen im Vormatur-Stil

Die Webseite ist eine **Lernseite für die Matura**. Jede Zusammenfassung soll man statt des Skripts lesen können: vollständig im Inhalt, aber schneller erfassbar. Massstab für Dichte und Bildmenge ist die **Ökologie bei Biologie** – lieber eine Abbildung oder Tabelle mehr als ein Absatz Fliesstext mehr.

Die HTML-Bausteine mit Klassen, Bildunterschriften und SVG-Regeln stehen in `references/bausteine.md`. Ein fertiges Kapitel als Muster liegt in `references/beispiel-kapitel.html` (Geographie 5.7 Permafrost: Abbildungen, Tabellen, Merke, Lösungen, ergänzte Teile, Schemata). Beide vor dem ersten Schreiben lesen.

## Grundsätze des Stils

1. **Bilder und Tabellen tragen den Inhalt, Text verbindet.** Pro Unterkapitel typischerweise 2–6 Abbildungen (Ausschnitte aus dem Skript und/oder gezeichnete Schemata) und 2–5 Tabellen. Ein Aufzählungspunkt, der eigentlich einen Vergleich enthält, wird zur Tabelle (Spalten = Vergleichsobjekte, Zeilen = Kriterien).
2. **Jede Abbildung wird erklärt.** Die Bildunterschrift sagt, *was man darauf sieht und was man daraus lernt*, nicht nur den Titel. Dazu immer die Quelle mit Seitenzahl. So bleibt das Bild auch ohne Skript verständlich.
3. **Gelöste Aufgaben statt leerer Lücken.** Lückentexte, Tabellen zum Ausfüllen, Rechen- und Zuordnungsaufgaben werden mit Lösung und kurzem Lösungsweg wiedergegeben – genau das wird an der Prüfung verlangt.
4. **Merke-Kästen für das Prüfungsrelevante.** Pro Unterkapitel 1–3 `summary-merke` mit Definition, Merksatz, Eselsbrücke oder Fazit. Nicht jeden Absatz zum Merke machen, sonst verliert es die Wirkung.
5. **Zeitungsartikel, Broschüren, Filme: Schlüsse statt Details.** Bei Texten, die Fallbeispiele liefern (z. B. Mosuo, «7 Milliarden», EU-Broschüre, Uiguren), nicht jede Zahl übernehmen. Stattdessen: kurzer Steckbrief in Tabellenform, dann die **wichtigen Schlüsse** als Liste oder Merke («Was lernt man daraus?»). Bei Skripten mit Prüfungsstoff dagegen vollständig bleiben.
6. **Lücken im Skript füllen – sichtbar.** Wo das Skript leer ist, nur Stichworte enthält oder ein Thema im Titel nennt, aber nicht ausführt, wird ergänzt. Ergänztes immer erkennbar machen: Tabellen mit `class="summary-note-table"` und einer Caption wie «… – im Skript leer, hier ergänzt», Abbildungen mit `figure-source` «Ergänzung – nicht im Skript». Der Leser soll wissen, was er gegen den Unterricht prüfen muss.
7. **Widersprüche offenlegen, nicht still entscheiden.** Wenn handschriftliche Lösungen im Skript den Daten oder dem gedruckten Text widersprechen (z. B. «34 m» als Lösung, aus der Tabelle folgen aber 40 m), die belegbare Variante verwenden und den Widerspruch in der Schlussnachricht nennen.
8. **Sprache:** Deutsch mit Schweizer Rechtschreibung (ss statt ß), Fachbegriffe beim ersten Auftreten **fett**, sachlich und knapp. Zahlen mit Einheit und schmalem Tausenderabstand (1500 m, 200 000 Tiere).
9. **Formeln** Neue Formeln sollten beim ersten Vorkommen kurz erklärt werden.

## Arbeitsablauf

### 1. Bestand erfassen

```bash
node .claude/skills/matur-zusammenfassungen/scripts/outline.js <Fach>/Scripts/data.js
node .claude/skills/matur-zusammenfassungen/scripts/outline.js <Fach>/Scripts/data.js --text topic-5
```

Die erste Zeile zeigt alle Themen mit Unterkapiteln und zählt img/svg/Tabellen/Merke – so sieht man, wo es dünn ist. `--text` zeigt den aktuellen Inhalt lesbar. Die Unterkapitel-**Namen** bleiben in der Regel unverändert, weil das Einsetzen über den exakten Namen läuft und andere Seiten (Glossar, Prüfungssimulator) darauf verweisen können.

Bestehende Bilder des Kapitels ansehen (`contact_sheet.py bilder …`) und entscheiden: behalten, durch besseren Ausschnitt ersetzen oder entfernen. Defekte Dateien finden:

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/check_images.py <Fach>/Resourcen/Bilder
```

#### Neue Themen oder Abschnitte anlegen

`apply_fragments.js` ersetzt nur **bestehende** `summary`-Felder. Für ein neues Thema zuerst das Gerüst anlegen (ids werden fortlaufend vergeben, Platzhalter «In Arbeit.»):

```bash
node .claude/skills/matur-zusammenfassungen/scripts/add_topics.js <Fach>/Scripts/data.js themen.json
# themen.json: [{"name": "Das Herz", "group": "Herz-Kreislauf", "subtopics": ["Anatomie des Herzens", …]}]
```

- Ein **Abschnitt** auf der Seite (01, 02 …) ist eine `group`; aufeinanderfolgende Themen mit gleicher `group` werden zusammengefasst. Die Nummern ergeben sich aus der Reihenfolge im Array – neue Themen deshalb hinten anhängen, damit sich bestehende Nummern nicht ungewollt verschieben.
- Pro Skript ein Thema, pro Skriptkapitel ein Unterkapitel ist ein guter Schnitt (z. B. 3–5 Unterkapitel pro Thema).
- Die Unterkapitel-Namen danach mit `outline.js` kontrollieren und **wörtlich** in die `@@@`-Zeilen übernehmen.
- Abschnitte umsortieren (Inhalt und ids bleiben unverändert, im Diff erscheinen aber viele verschobene Zeilen):

```bash
node .claude/skills/matur-zusammenfassungen/scripts/reorder_groups.js <Fach>/Scripts/data.js "Herz-Kreislauf" "Ökologie" … [--dry-run]
```

### 2. Quellen sichten

Heruntergeladene Dateien (ZIP, PDF, DOCX) zuerst in einen eigenen Ordner im Scratchpad kopieren bzw. entpacken und nur von dort lesen; Python dabei mit `-I` starten.

- **Immer die Seiten rendern und ansehen**, nicht nur Text extrahieren: Ausgefüllte Lösungen (eingetippt oder handschriftlich), Beschriftungen in Grafiken und eingescannte Artikel fehlen in der Textextraktion.

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/render_pdf.py <datei.pdf> <scratch>/seiten
python -I .claude/skills/matur-zusammenfassungen/scripts/contact_sheet.py <scratch>/uebersicht.jpg seiten <scratch>/seiten:1:8 --cols 4
```

- Text zusätzlich mit pymupdf (`page.get_text()`) bzw. aus `word/document.xml` (DOCX) holen – zum Zitieren von Zahlen. Bilder aus DOCX liegen in `word/media/`. (`pymupdf` nur über `_deps.py` importieren, `import fitz` scheitert unter `python -I`.)
- **Eingetippte Notizen erscheinen oft als Zeichensalat** (z. B. `+OT1GZGR_YGZUX…`): Die Zeichen sind um 26 verschoben (`chr(ord(c) + 26)` → «EinKatalysator…», `¥` = ä, `½` = ü, `·` = ö, Leerzeichen fehlen). Entschlüsseln lohnt sich – das sind die Lösungen des Users. Die Reihenfolge im extrahierten Text entspricht nicht der Lage auf der Seite; Zuordnung immer am gerenderten Bild prüfen.
- **Die eingetragenen Lösungen sind Schülerlösungen und können falsch sein.** Jede gegen Skripttext und Fachwissen prüfen; falsche korrigieren, in der Caption «korrigiert» vermerken und in der Schlussnachricht auflisten (Grundsatz 7). Unklare, aber nicht widerlegbare Einträge stehen lassen und nur ergänzen.
- Notieren: Welche Teile sind Prüfungsstoff (vollständig übernehmen), welche Fallbeispiel (nur Schlüsse), welche leer (ergänzen und markieren)?

### 3. Abbildungen ausschneiden

Ausschnitte in einer `spec.json` festlegen (Pixel der 200-dpi-Seite), schneiden, im Kontaktabzug prüfen und nachjustieren, bis keine fremden Textzeilen, Bildunterschriften des Skripts oder abgeschnittenen Legenden mehr drin sind. Die Koordinaten nicht aus dem Kontaktabzug schätzen (zu klein), sondern auf einem Gitterbild ablesen – zwei Seiten pro Bild:

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/grid.py <scratch>/g-p1-2.jpg <scratch>/seiten/p1.png <scratch>/seiten/p2.png
python -I .claude/skills/matur-zusammenfassungen/scripts/grid.py <scratch>/g-p4.jpg <scratch>/seiten/p4.png --scale 0.6   # Querformat
```

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/crop.py <scratch>/seiten <scratch>/bilder spec.json [--join gesamt=teil1,teil2]
python -I .claude/skills/matur-zusammenfassungen/scripts/contact_sheet.py <scratch>/check.jpg bilder <scratch>/bilder/*.jpg
```

- Dateinamen: `<kürzel>-<inhalt>.jpg` in Kleinbuchstaben mit Bindestrichen (z. B. `zonen-permafrost-alaska.jpg`, `klima-zyklone-lebenslauf.jpg`). Das Kürzel des Kapitels beibehalten, wenn es schon Bilder gibt.
- Ausgefüllte Lösungen im Bild sind erwünscht (das Skript des Users enthält die eingetragenen Antworten).
- Grosse Karten und Diagramme, die man im Detail lesen muss, als `summary-figure-full` mit Link zum Vergrössern einbauen.
- **Hochformat beachten:** `summary-figure` ist auf 320 px Höhe begrenzt, `summary-figure-wide` auf 520 px. Hohe, schmale Bilder (Seitenverhältnis über ca. 1,3 : 1) deshalb als `summary-figure-wide`; sehr hohe (z. B. ganzer Körper) auf den wichtigen Teil zuschneiden und mit `<a href>` auf das ganze Bild verlinken.
- Breite, flache Streifen (z. B. eine Bildreihe aus einer Tabelle) als `summary-figure-full` mit Link.
- Fotos von erkennbaren Kindern oder Patienten weglassen und den Inhalt im Text beschreiben; in der Schlussnachricht erwähnen.
- Fertige Bilder nach `<Fach>/Resourcen/Bilder/` kopieren.

### 4. Schemata und Grafiken zeichnen

Wo das Skript nur eine leere Vorlage, eine schlecht lesbare Skizze oder nur Daten hat, ein Inline-SVG zeichnen (Regeln und Farbpalette in `references/bausteine.md`). Typische Fälle: Kreislauf/Rückkoppelung, Ablauf in Schritten, Zeitstrahl, Querschnitt (Luv/Lee, Zyklone), Vergleich zweier Zustände, Diagramm aus einer Messwerttabelle.

**Diagramme aus Messwerten nicht von Hand setzen**, sondern per kleinem Skript aus der Wertetabelle erzeugen (x/y-Umrechnung als Funktion) – so stimmen die Punkte garantiert. Danach offline prüfen, auch im Dark-Mode:

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/svg_preview.py <scratch>/svg.png fragment.html
python -I .claude/skills/matur-zusammenfassungen/scripts/svg_preview.py <scratch>/svg-dark.png fragment.html --dark
```

Überlappende Beschriftungen korrigieren, bevor eingesetzt wird. `svg_preview.py` zeigt keine Pfeilspitzen (`marker`) und setzt `<tspan>` mitten in einer Zeile falsch – Nummern deshalb lieber als ①②③ direkt in den Text schreiben; Pfeile im Browser kontrollieren. Texte in Kästen grosszügig bemessen (im Browser ist die Schrift breiter als in der Vorschau).

Kreuzungs- und Kombinationstabellen (z. B. Blutgruppen der Kinder für alle Elternpaare) ebenfalls per Skript aus allen Genotypen erzeugen statt von Hand.

### 5. Kapitel schreiben

Die Unterkapitel als **Fragmentdateien** im Scratchpad schreiben, ein Thema pro Datei oder aufgeteilt auf mehrere Dateien (lange Themen in zwei Hälften, damit eine Datei handlich bleibt):

```html
@@@ Exakter Name des Unterkapitels
<p>Einleitung in 1–3 Sätzen: Worum geht es, warum ist es wichtig?</p>
<h3>Zwischentitel</h3>
… Abbildungen, Tabellen, Listen, Merke …
@@@ Nächstes Unterkapitel
…
```

Aufbau eines Unterkapitels (Richtwert, nicht starr):
1. Einleitung (kurz) – evtl. Begriffstabelle.
2. Pro Teilthema ein `<h3>`, darunter Abbildung(en) mit erklärender Bildunterschrift, dann Tabelle oder Liste.
3. Aufgaben aus dem Skript mit Lösung (Tabelle «Frage | Antwort» oder Lösungsweg).
4. Merke / Fazit am Schluss eines Teilthemas.

### 6. Einsetzen

```bash
node .claude/skills/matur-zusammenfassungen/scripts/apply_fragments.js <Fach>/Scripts/data.js topic-5 frag-a.html frag-b.html
```

Das Skript ersetzt nur die `summary`-Felder der genannten Unterkapitel, behält Anführungszeichen-Stil und Zeilenenden (CRLF) der Datei bei, prüft nach dem Schreiben, dass alles exakt angekommen ist (sonst stellt es das Original wieder her), und meldet fehlende Bilder und doppelte SVG-ids. Bei Fehlern im Fragment: Fragment korrigieren, dann erneut einsetzen – das Skript ist wiederholbar. Bei vielen Themen: jedes Thema gleich nach dem Schreiben einsetzen, dann ist Fertiges gesichert.

In Fragmenten für Template-Literal-Dateien (Biologie) keine Backticks und kein `${` verwenden.

### 6b. Glossar ergänzen

Bei neuen Themen die wichtigsten Begriffe (ca. 25–50 pro Abschnitt) ins Glossar aufnehmen. In Biologie gehört jeder Begriff in `glossary.categories` (Begriff + Definition in 1–2 Sätzen) **und** in einen Ast von `glossary.mindmap.topics` (Unterkategorien gruppieren die Begriffe):

```bash
node .claude/skills/matur-zusammenfassungen/scripts/add_glossary.js <Fach>/Scripts/data.js begriffe.json [--dry-run]
# begriffe.json: {"Herz-Kreislauf": [["Blut", [["Hämatokrit", "Definition …"], …]], …]}
```

Das Skript überspringt Begriffe, die es schon gibt (z. B. «Antigen» in Immunbiologie), damit keine Dubletten entstehen. Definitionen aus der Zusammenfassung ableiten (gleiche Zahlen und Begriffe), Schweizer Rechtschreibung.

### 7. Prüfen

Im Browser (Dev-Server aus `.claude/launch.json`, z. B. `static` auf Port 8765) die Zusammenfassungsseite des Fachs öffnen und per JavaScript:
- `data.js` mit `fetch(…, {cache:'reload'})` neu laden, dann die Seite neu laden,
- alle Karten und Unterkapitel öffnen, bei allen `img` `loading="eager"` setzen, einige Sekunden warten,
- zählen: Bilder mit `naturalWidth === 0` (= defekt), Anzahl SVG und Tabellen, Konsolenfehler,
- zu klein dargestellte Bilder finden: `clientWidth < 200` oder `clientHeight < 160` → Klasse anpassen (siehe Schritt 3),
- einzelne Stellen per Screenshot ansehen, auch mit `document.documentElement.setAttribute('data-theme','dark')`,
- bei neuen Themen oder Glossarbegriffen auch `glossar.html` laden (Konsolenfehler, Kategorie im Filter, Anzahl Begriffe, Mindmap).

Wenn Screenshots hängen (Fenster verdeckt), auf `svg_preview.py` und die JavaScript-Zählung ausweichen und das in der Schlussnachricht sagen.

Danach `graphify update .` (siehe CLAUDE.md des Projekts).

### 8. Abschluss

In der Schlussnachricht an den User:
- Tabelle «vorher / jetzt» pro Unterkapitel (Abbildungen, Tabellen).
- Was **ergänzt** wurde (nicht im Skript) und was er gegen den Unterricht prüfen soll.
- Gefundene **Widersprüche** zwischen Lösungen und Daten.
- Welche Bilder ersetzt oder defekt waren, welche alten Dateien nun ungenutzt im Ordner liegen.
- Was nicht geprüft werden konnte.

Nur auf ausdrücklichen Wunsch committen und pushen; dann nur `<Fach>/Scripts/data.js` und die neuen Bilder, nie `graphify-out/`, `.claude/`, `CLAUDE.md` oder fremde Änderungen. Nach dem Push daran erinnern, dass GitHub Pages etwa eine Minute braucht und der Browser-Cache (Ctrl + F5) die alte Version zeigen kann.

## Stolperfallen (alle schon vorgekommen)

- **JPEG-2000 mit `.png`-Endung:** Bilder, die aus PDFs extrahiert wurden, sind manchmal JPEG-2000. Chrome und Firefox zeigen sie nicht an. `check_images.py --fix` speichert sie als JPG neu; Verweis anpassen.
- **Doppelte SVG-ids:** `<marker id>` und `<clipPath id>` gelten für die ganze Seite. Jedes SVG bekommt ein eigenes Präfix (`zy-a`, `mo-b` …), sonst übernehmen Pfeile die Farbe eines anderen Diagramms.
- **Dark-Mode:** Die Seite hat einen Dunkelmodus. Gezeichnete Schemata (`<svg>` direkt in einer `summary-figure`) bekommen dort per `styles.css` ein helles Feld (`#f4f3ee`) mit dunkler Grundfarbe – wie die gescannten Abbildungen. Die SVG-Farben sind deshalb immer für **hellen Grund** zu wählen; nie helle Schrift, die sich auf den dunklen Seitenhintergrund verlässt, und das SVG nicht in zusätzliche Wrapper verpacken (sonst greift die Regel nicht).
- **Lazy Loading:** Bilder in geschlossenen `<details>` laden nicht; vor dem Zählen `loading="eager"` setzen und warten.
- **Caching:** Der lokale Server und GitHub Pages liefern `data.js` aus dem Cache; immer mit `cache:'reload'` holen.
- **Struktur von data.js ändert sich:** Die Themen liegen je nach Fach und Stand unter `window.subjectData.summaries.topics`, `window.historyData.topics` o. ä. Die Skripte suchen die `topics` selbst – nicht hart auf einen Pfad bauen.
- **Datei-Kodierung:** UTF-8 mit CRLF. Nicht mit Werkzeugen bearbeiten, die das Zeilenende ändern; `apply_fragments.js` und die anderen Skripte erhalten es. Achtung: `git show HEAD:…` liefert LF – beim Vergleichen die Zeilenenden normalisieren. Nach jeder Änderung `git diff --numstat` ansehen: Ein Diff über die ganze Datei heisst, die Zeilenenden sind kaputt.
- **Lange Texte nicht per Bash-Heredoc schreiben:** Anführungszeichen und Sonderzeichen (z. B. in JSON mit Definitionen) brechen das Kommando ab. Fragmente, JSON und Hilfsskripte mit dem Write-Werkzeug anlegen.
- **Anker beim Einfügen:** Beim Einfügen in eine Liste nicht vor, sondern nach der schliessenden Klammer des letzten Eintrags einfügen; danach `node -e` mit `require` die Datei laden, um Syntaxfehler sofort zu sehen. Vorher war `data.js` sauber committet → im Notfall `git checkout -- <Datei>`.
