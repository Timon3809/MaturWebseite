# HTML-Bausteine der Zusammenfassungen

Alle Klassen sind in `styles.css` definiert (Abschnitt `.summary-text …`, Dark-Mode unter `:root[data-theme]`). Keine neuen Klassen und kein `style`-Attribut einführen, ausser es gibt wirklich keinen passenden Baustein – dann die Klasse in `styles.css` ergänzen und dem User sagen.

## Inhalt

1. Abbildung aus dem Skript (normal, breit, ganze Breite)
2. Inline-SVG-Schema
3. Tabelle (normal, ergänzt)
4. Merke-Kasten
5. Listen und Zwischentitel
6. Bildunterschrift und Quelle
7. SVG-Regeln und Farbpalette
8. Vorlagen für häufige Schemata

---

## 1. Abbildung aus dem Skript

```html
<figure class="summary-figure"><img src="Resourcen/Bilder/zonen-iqaluit.jpg" alt="Blick auf die Holzhäuser von Iqaluit" loading="lazy"><figcaption><strong>Abb. – Iqaluit heute.</strong> Holzhäuser statt Iglus – die Häuser stehen wegen des Permafrosts auf Stelzen.<span class="figure-source">Quelle: Skript «Landschaftsgürtel der gemässigten und kalten Zonen», S. 5 (M5)</span></figcaption></figure>
```

| Variante | Klasse | Wann |
|---|---|---|
| normal | `summary-figure` | Fotos, kleine Skizzen (max. 60 % Breite, 320 px hoch) |
| breit | `summary-figure summary-figure-wide` | Querformat: Profile, Karten, Diagrammreihen (92 %, 520 px) |
| ganze Breite | `summary-figure summary-figure-full` + `<a href="…" target="_blank" rel="noopener">` um das `<img>` | grosse Karten und Tabellen, die man im Detail lesen muss; in der Bildunterschrift «Zum Vergrössern anklicken.» |

`alt` beschreibt den Bildinhalt in einem Satz (für Screenreader und falls das Bild fehlt), nie nur «Abbildung».

## 2. Inline-SVG-Schema

```html
<figure class="summary-figure summary-svg"><svg viewBox="0 0 640 300" role="img" aria-label="Kurzbeschreibung" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  …
</svg><figcaption><strong>Abb. – Titel</strong> (digital gezeichnet). Was man sieht und lernt.<span class="figure-source">Quelle: nach Skript …, S. x</span></figcaption></figure>
```

Die Breite ist immer `viewBox="0 0 640 …"` (wird auf max. 640 px skaliert); die Höhe nach Inhalt (130–550).

## 3. Tabellen

```html
<div class="summary-table-wrap"><table><caption>Titel der Tabelle</caption><thead><tr><th>Kriterium</th><th>A</th><th>B</th></tr></thead><tbody>
<tr><td><strong>Zeilenkopf</strong></td><td>…</td><td>…</td></tr>
</tbody></table></div>
```

- Immer in `summary-table-wrap` (auf dem Handy scrollt die Tabelle statt die Seite zu sprengen).
- `caption`, wenn die Tabelle nicht direkt unter einem passenden `<h3>` steht.
- Erste Spalte fett als Zeilenkopf.
- **Ergänzte Inhalte** (nicht im Skript, Lösungen zu leeren Aufgaben): `<table class="summary-note-table">` – wird beige hinterlegt – und Caption wie «Aufgaben 3–5 – im Skript leer, hier ergänzt» oder «Probleme und Lösungen – ergänzt, steht nicht im Skript».
- Farbmarkierung einer Skala (z. B. Saffir-Simpson): einzelnes `style="border-left:6px solid #…"` auf der ersten Zelle ist erlaubt.

Typische Tabellenformen:
- **Steckbrief:** Merkmal | Wert (Ort, Zahlen, Daten).
- **Vergleich:** Kriterium | A | B (Tundra–Steppe, Hurrikan–Tornado, Bilaterale I–II).
- **Ablauf:** Phase/Zeit | Was geschieht | Folge.
- **Aufgabe:** Frage | Antwort (bzw. Gesuchte Grösse | Lösung | So liest man es ab).
- **Ursache–Wirkung:** Problem | Ursache | Massnahme.

## 4. Merke-Kasten

```html
<div class="summary-merke"><strong>Merke:</strong> Kerngedanke in ein bis drei Sätzen, wichtige Begriffe <strong>fett</strong>.</div>
```

Andere Einleitungen je nach Funktion: «Merksatz:», «Das Wichtigste:», «Fazit:», «Schluss:» (bei Zeitungsartikeln), «Eselsbrücke:», «Tipp für die Prüfung:», «Vorgehen bei der Zuordnung:».

## 5. Listen und Zwischentitel

- `<h3>` für Teilthemen innerhalb eines Unterkapitels (kein `<h2>`; `<h4>` nur selten).
- `<ul>` für gleichrangige Punkte, `<ol>` für Abläufe in Reihenfolge.
- Listenpunkte beginnen mit dem fettgedruckten Stichwort: `<li><strong>Stichwort:</strong> Erklärung.</li>`
- Absätze `<p>` kurz halten (2–4 Sätze).

## 6. Bildunterschrift und Quelle

Format: `<strong>Abb. – Titel.</strong> Erklärung. <span class="figure-source">Quelle: …</span>`

| Herkunft | Quellenangabe |
|---|---|
| Ausschnitt aus Skript | `Quelle: Skript «Titel», S. 7 (Abb. 2)` – bei ausgefüllten Blättern «(mit eingetragenen Lösungen)» |
| eigenes Schema nach Skript | `Quelle: nach Skript «Titel», S. 7` und in der Unterschrift «(digital gezeichnet)» |
| aus Messwerten neu gezeichnet | `Quelle: Daten aus Skript «Titel», S. 7` und «(neu gezeichnet aus den Tabellenwerten)» |
| eigene Ergänzung | `Ergänzung – nicht im Skript` |
| Praktikum, Werkstatt | `Quelle: Praktikum 8 Gesteine, S. 3` |

## 7. SVG-Regeln und Farbpalette

**Farben.** Ein SVG steht im hellen Modus direkt auf der hellen Seite und im Dark-Mode auf einem hellen Feld (Regel in `styles.css`: `:root[data-theme="dark"] .summary-text .summary-figure > svg`, Hintergrund `#f4f3ee`, `color: #454940`). Alle Farben sind also für hellen Grund zu wählen:

| Rolle | Farbe |
|---|---|
| neutrale Schrift, Achsen, Rahmen | `currentColor` (bevorzugt) oder `#454940` – beides ist auf dem hellen Feld dunkel |
| Nebentext, Hilfslinien | `currentColor` mit `fill-opacity`/`stroke-opacity=".65"` oder `#7a7c73` |
| Grün (Akzent der Seite, positiv, Natur) | `#58745a` |
| Blau (kalt, Wasser, Winter) | `#4f7ea8`, dunkler `#3f6f9c` |
| Rot/Orange (warm, Gefahr, Sommer) | `#c47b59`, kräftiger `#b5533c` |
| Gelb (Sonne, Getreide) | `#c9a23f` |
| Flächen | dieselben Farben als `rgba(…, .12–.3)` – so bleibt der Hintergrund durchscheinend |

Weisse Kästen (`fill="#fff"`) und helle Flächen mit dunkler Schrift darauf sind erlaubt. Nicht erlaubt: helle Schrift (weiss, hellgrau) ausserhalb farbiger Flächen – sie verschwindet auf dem hellen Feld.

**Weitere Regeln:**
- `font-family="sans-serif"`, Grundgrösse 11–12; Titel 12–14 und `font-weight="bold"`.
- Pfeile über `<defs><marker id="<präfix>-a" …>`; das Präfix ist pro Schema eindeutig (2–3 Buchstaben aus dem Thema). `apply_fragments.js` meldet doppelte ids.
- Text nie über Linien oder Kurven legen: nach `svg_preview.py` kontrollieren und verschieben.
- Mehrzeiliger Text: einzelne `<text>`-Elemente mit 14–16 px Abstand (`<tspan>` nur für Hervorhebungen in einer Zeile).
- Keine externen Schriften, Bilder oder Skripte im SVG.

## 8. Vorlagen für häufige Schemata

Bewährte Formen (Beispiele in den Geographie-Kapiteln):
- **Kreislauf / positive Rückkoppelung:** fünf Kästen im Kreis, gebogene Pfeile, Kreis in der Mitte mit dem Begriff (Hurrikan, Permafrost-Klima).
- **Ablauf in Schritten:** 4–5 gleich breite Kästen nebeneinander mit Pfeilen, wichtigster Schritt farbig hervorgehoben, Fazitzeile darunter (Hurrikan-Lebenslauf, Dust Bowl).
- **Zeitstrahl:** waagrechte Linie mit Pfeil, Punkte in Kategorienfarben, Datum darüber fett, Text darunter, Legende unten (Bilaterale, ANWR, Ein-Kind-Politik).
- **Querschnitt:** Gelände als Pfad, Luftmassen als Flächen, Wolken als Ellipsen, Regen als kurze schräge Linien (Luv/Lee, Zyklone, Föhn).
- **Diagramm aus Daten:** Achsen, Gitter, Polyline mit Punkten, gestrichelte Referenzlinien mit Beschriftung der Lösungswerte (Bohrloch-Temperaturprofil). Per Skript generieren, z. B.:

```js
const X = (t) => +(330 + t * 27).toFixed(1);   // Temperatur → x
const Y = (d) => +(70 + d * 8.4).toFixed(1);    // Tiefe → y
const pts = werte.map((t, i) => `${X(t)},${Y(tiefe[i])}`).join(" ");
```
- **Vergleich zwei Zustände:** zwei Hälften nebeneinander mit Überschrift «Falsch/Richtig», «Sommer/Winter», «vorher/nachher» (Bauen auf Permafrost, Monsun).
- **Mindmap:** zentrale Ellipse, sechs Kästen ringsum mit Linien (Verwertung des Seehunds).
