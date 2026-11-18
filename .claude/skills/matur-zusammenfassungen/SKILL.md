---
name: matur-zusammenfassungen
description: Stil und Arbeitsablauf für die Lern-Zusammenfassungen der Vormatur-Webseite (Biologie, Chemie, Geographie, Geschichte) – dichte Lernkapitel mit vielen Abbildungen aus den Skripten, Tabellen, Merke-Kästen und selbst gezeichneten SVG-Schemata. Verwende diesen Skill immer, wenn eine Zusammenfassung oder ein Kapitel in der data.js eines Fachs (z. B. Geographie/Scripts/data.js) neu geschrieben, überarbeitet, ergänzt oder «im gleichen Stil» wie ein anderes Kapitel angepasst werden soll, wenn ein Skript, Arbeitsblatt, Praktikum oder Zeitungsartikel (PDF, DOCX, ZIP) in eine Zusammenfassung eingearbeitet werden soll, wenn «mehr Abbildungen / Tabellen / Details» gewünscht sind, oder wenn eine Grafik aus Messwerten neu gezeichnet werden soll – auch wenn das Wort «Skill» oder «Stil» nicht fällt.
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

### 2. Quellen sichten

Heruntergeladene Dateien (ZIP, PDF, DOCX) zuerst in einen eigenen Ordner im Scratchpad kopieren bzw. entpacken und nur von dort lesen; Python dabei mit `-I` starten.

- **Immer die Seiten rendern und ansehen**, nicht nur Text extrahieren: Ausgefüllte Lösungen (eingetippt oder handschriftlich), Beschriftungen in Grafiken und eingescannte Artikel fehlen in der Textextraktion.

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/render_pdf.py <datei.pdf> <scratch>/seiten
python -I .claude/skills/matur-zusammenfassungen/scripts/contact_sheet.py <scratch>/uebersicht.jpg seiten <scratch>/seiten:1:8 --cols 4
```

- Text zusätzlich mit pymupdf (`page.get_text()`) bzw. aus `word/document.xml` (DOCX) holen – zum Zitieren von Zahlen. Bilder aus DOCX liegen in `word/media/`.
- Notieren: Welche Teile sind Prüfungsstoff (vollständig übernehmen), welche Fallbeispiel (nur Schlüsse), welche leer (ergänzen und markieren)?

### 3. Abbildungen ausschneiden

Ausschnitte in einer `spec.json` festlegen (Pixel der 200-dpi-Seite), schneiden, im Kontaktabzug prüfen und nachjustieren, bis keine fremden Textzeilen oder abgeschnittenen Legenden mehr drin sind:

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/crop.py <scratch>/seiten <scratch>/bilder spec.json [--join gesamt=teil1,teil2]
python -I .claude/skills/matur-zusammenfassungen/scripts/contact_sheet.py <scratch>/check.jpg bilder <scratch>/bilder/*.jpg
```

- Dateinamen: `<kürzel>-<inhalt>.jpg` in Kleinbuchstaben mit Bindestrichen (z. B. `zonen-permafrost-alaska.jpg`, `klima-zyklone-lebenslauf.jpg`). Das Kürzel des Kapitels beibehalten, wenn es schon Bilder gibt.
- Ausgefüllte Lösungen im Bild sind erwünscht (das Skript des Users enthält die eingetragenen Antworten).
- Grosse Karten und Diagramme, die man im Detail lesen muss, als `summary-figure-full` mit Link zum Vergrössern einbauen.
- Fertige Bilder nach `<Fach>/Resourcen/Bilder/` kopieren.

### 4. Schemata und Grafiken zeichnen

Wo das Skript nur eine leere Vorlage, eine schlecht lesbare Skizze oder nur Daten hat, ein Inline-SVG zeichnen (Regeln und Farbpalette in `references/bausteine.md`). Typische Fälle: Kreislauf/Rückkoppelung, Ablauf in Schritten, Zeitstrahl, Querschnitt (Luv/Lee, Zyklone), Vergleich zweier Zustände, Diagramm aus einer Messwerttabelle.

**Diagramme aus Messwerten nicht von Hand setzen**, sondern per kleinem Skript aus der Wertetabelle erzeugen (x/y-Umrechnung als Funktion) – so stimmen die Punkte garantiert. Danach offline prüfen, auch im Dark-Mode:

```bash
python -I .claude/skills/matur-zusammenfassungen/scripts/svg_preview.py <scratch>/svg.png fragment.html
python -I .claude/skills/matur-zusammenfassungen/scripts/svg_preview.py <scratch>/svg-dark.png fragment.html --dark
```

Überlappende Beschriftungen korrigieren, bevor eingesetzt wird.

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

Das Skript ersetzt nur die `summary`-Felder der genannten Unterkapitel, behält Anführungszeichen-Stil und Zeilenenden (CRLF) der Datei bei, prüft nach dem Schreiben, dass alles exakt angekommen ist (sonst stellt es das Original wieder her), und meldet fehlende Bilder und doppelte SVG-ids. Bei Fehlern im Fragment: Fragment korrigieren, dann erneut einsetzen – das Skript ist wiederholbar.

### 7. Prüfen

Im Browser (Dev-Server aus `.claude/launch.json`, z. B. `static` auf Port 8765) die Zusammenfassungsseite des Fachs öffnen und per JavaScript:
- `data.js` mit `fetch(…, {cache:'reload'})` neu laden, dann die Seite neu laden,
- alle Karten und Unterkapitel öffnen, bei allen `img` `loading="eager"` setzen, einige Sekunden warten,
- zählen: Bilder mit `naturalWidth === 0` (= defekt), Anzahl SVG und Tabellen, Konsolenfehler,
- einzelne Stellen per Screenshot ansehen, auch mit `document.documentElement.setAttribute('data-theme','dark')`.

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
- **Datei-Kodierung:** UTF-8 mit CRLF. Nicht mit Werkzeugen bearbeiten, die das Zeilenende ändern; `apply_fragments.js` erhält es.
