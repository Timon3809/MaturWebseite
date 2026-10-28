# Vormatur & Matur

Statische Lernwebseite zur Vorbereitung auf die **Vormatur (März 2027)** und die **Matur (Juni 2027)**.  
Keine Build-Tools, keine Abhängigkeiten — pure HTML, CSS und JavaScript.

## Starten

Die Seite ist eine reine Offline-Webanwendung:

1. Ordner klonen bzw. herunterladen
2. `index.html` im Browser öffnen (Doppelklick genügt)

Optional mit einem lokalen Server (empfohlen, falls Dateien/PDFs nicht laden):

```bash
# Python
python -m http.server 8080

# oder Node
npx serve .
```

Anschlussend `http://localhost:8080` öffnen.

## Übersicht der Fächer

| Fach | Status | Inhalte |
|------|--------|---------|
| **Geschichte** | vollständig | Zusammenfassungen, Glossar, ewige Daten, Dateien, Prüfungssimulator |
| **Chemie** | Aufbau | Zusammenfassungen, Glossar, Dateien, Prüfungssimulator; Skripte zu Atombau und Molekularen Stoffen |
| **Geographie** | Platzhalter | Zusammenfassungen, Glossar, Dateien; Inhalte folgen |
| **Biologie** | aufgebaut | Zusammenfassungen (Neurobiologie & Gentechnik), Glossar (klassische Genetik), Dateien, Prüfungssimulator |
| Mathe, PhysikSP, Deutsch, Französisch | in Vorbereitung | Matur-Fächer, noch nicht verfügbar |

## Funktionen

### Geschichte

- **Zusammenfassungen** — Themen und Unterpunkte kompakt erklärt, inkl. Bilder
- **Glossar** — zentrale Begriffe suchen, filtern und als Mindmap strukturieren
- **Ewige Daten** — historische Ereignisse auf einem Zeitstrahl (1815–heute) mit Epochenbalken
- **Dateien** — Lehrmittel und Stoffplan als PDF zum Herunterladen
- **Prüfungssimulator** — zufällige Übungsprüfung zusammenstellen:
  - Teil 1: Wissen und Begriffe (Begriff erklären, wahr/falsch)
  - Teil 2: Verstehen (Verständnisfragen)
  - Teil 3: Quellenanalyse
  - Export als **Word-Dokument** (`.doc`) oder **PDF**

### Chemie

Die Lernbereiche (Übersicht, Zusammenfassungen, Glossar, Dateien, Prüfungssimulator) sind angelegt. Unter `Chemie/Skript/` liegen bereits PDF-Skripte (Atombau, Molekulare Stoffe); weitere Inhalte folgen.

### Geographie

Strukturell vorbereitet mit Übersicht, Zusammenfassungen, Glossar und Dateien. Unterrichtsinhalte werden ergänzt, sobald die Unterlagen bereitstehen.

### Biologie

- **Zusammenfassungen** — Neurobiologie und Gentechnik (Nervensystem, Nervenzellen, Ruhe-/Aktionspotenzial, Genregulation, Gentechnik-Methoden)
- **Glossar** — Begriffe der klassischen Genetik, mit Suche und Mindmap
- **Dateien**, **Prüfungssimulator** — angelegt, Inhalte folgen

## Projektstruktur

```
MaturWebseite/
├── index.html              # Startseite / Fachübersicht
├── styles.css              # gesamtes Design (Sidebar, Cards, Timeline, …)
├── site-nav.js             # gemeinsame Sidebar-Navigation
├── Geschichte/
│   ├── index.html          # Fachübersicht Geschichte
│   ├── zusammenfassungen.html
│   ├── glossar.html
│   ├── ewige-daten.html
│   ├── dateien.html
│   ├── pruefungssimulator.html
│   ├── Scripts/
│   │   ├── data.js             # alle Inhalte (Themen, Glossar, Fragen, …)
│   │   ├── zusammenfassungen.js
│   │   ├── glossar.js
│   │   ├── ewige-daten.js
│   │   └── pruefungssimulator.js
│   └── Resourcen/
│       ├── Bilder_Zusammenfassung/   # Abbildungen für die Themen
│       └── Dateien/                  # PDFs (Lehrmittel, Stoffplan)
├── Chemie/
│   ├── index.html
│   ├── zusammenfassungen.html
│   ├── glossar.html
│   ├── dateien.html
│   ├── pruefungssimulator.html
│   └── Skript/                       # PDF-Skripte (Atombau, Molekulare Stoffe, …)
├── Geographie/
│   ├── index.html
│   ├── zusammenfassungen.html
│   ├── glossar.html
│   └── dateien.html
└── Biologie/
    ├── index.html
    ├── zusammenfassungen.html
    ├── glossar.html
    ├── dateien.html
    ├── pruefungssimulator.html
    └── Scripts/
        ├── data.js                 # Glossar Genetik + Themen Neurobiologie/Gentechnik
        ├── glossar.js
        └── zusammenfassungen.js
```

## Technik

- **Reines Frontend** — keine externen Frameworks, kein Backend, kein Build-Schritt
- **Navigation** — `site-nav.js` baut die Sidebar je nach Fach und aktueller Seite auf (Attribute `data-nav-section` / `data-nav-page` am `<aside class="sidebar">`)
- **Datenhaltung** — alle Lerninhalte liegen zentral in `Geschichte/Scripts/data.js` als `window.historyData`:
  - `topics` — Zusammenfassungen mit HTML-Body
  - `glossary` / `glossaryMindmap` — Begriffe und Struktur
  - `eternalDates` / `timelineTopics` — Zeitstrahl
  - `examParts` / `topicQuestions` — Prüfungsaufbau und Fragenpool
- **Export** — Word wird als HTML-basiertes `.doc` erzeugt, das PDF wird ohne Bibliothek direkt gebaut

## Inhalte erweitern

Neue Geschichte-Themen oder Prüfungsfragen einfach in `Geschichte/Scripts/data.js` eintragen:

1. **Zusammenfassung:** Eintrag unter `topics` mit `id`, `name` und `subtopics` (optional `summary` als HTML)
2. **Prüfungsfragen:** Eintrag unter `topicQuestions` mit den Typen `term`, `trueFalse`, `understanding`, `analysis`
3. **Glossar:** Begriff unter `glossary` (nach Epochen gruppiert) und in `glossaryMindmap` verknüpfen
4. **Ewige Daten:** Ereignis unter `eternalDates` mit `year`, `event`, `explanation`

Für ein neues Fach (z. B. Chemie mit Inhalten): Ordnerstruktur von `Geschichte/` kopieren, Inhalte anpassen und im `site-nav.js`-Abschnitt `sections` einen eigenen Navigationsblock ergänzen.

## Hinweise

- Die Seite ist auf Deutsch und für den Einsatz am Desktop gedacht; das Layout ist zusätzlich responsiv.
- Der Prüfungssimulator wählt die Fragen zufällig aus dem Pool der gewählten Themen; für Themen ohne Fragen wird ein entsprechender Hinweis angezeigt.
- Lehrmittel-PDFs in `Geschichte/Resourcen/Dateien/` sind eigene Unterlagen und gehören nicht zum Code.
