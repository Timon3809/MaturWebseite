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
| **Geographie** | aufgebaut | Zusammenfassungen in 5 Themen (Klimatologie, Geologie/Gletscher, Schweiz, Asien, USA) mit 123 Abbildungen, Glossar (Begriffe + Gesteine, nach Thema), Dateien |
| **Biologie** | aufgebaut | 27 Zusammenfassungen (Neurobiologie, Genetik, Immunbiologie, Ökologie) mit 83 Abbildungen, Glossar mit 355 Begriffen in 5 Kategorien, Dateien |
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

- **Zusammenfassungen** — fünf Themen mit 69 Unterthemen, aufgebaut nach dem Inhaltsverzeichnis der Matur 2026:
  - **Klimatologie** (Grundlagen, Niederschlag, Zirkulation, Klimazonen, Köppen, Monsune, Zyklonen)
  - **Geologie und Gletscher** (Tethys, Alpenfaltung, Bauteile, Jura/Mittelland, Gesteine, Gesteinskreislauf, Gletscher)
  - **Schweiz** (Tessin, Tourismus, Bevölkerungsgeographie, EU, Asyl, Landschaftswandel)
  - **Asien** (Gliederung, China: Regionen, Damm, Wirtschaft, Peking, Bevölkerung, Religion, Sprache)
  - **USA** (Klima Nordamerikas, Landschaftsgürtel)
  - 123 eingebettete Abbildungen sowie saubere SVG-Nachbauten (Gesteinskreislauf, Tethys-Profil, Geologisches Profil Jura–Alpen)
- **Glossar** — 185 Begriffe nach Thema (Klimatologie, Geologie, Gesteine, Schweiz, Asien/China, USA) mit Suche und Mindmap
- **Programme und Karten Trainer** (`Geographie/programme.html`) — Asien-Karten-Trainer (`Geographie/Programme/Karten-Trainer/`, 69 Lernobjekte: Orte finden, benennen, frei üben; Single-File-Build, läuft auch über `file://`), Nordamerika-Kartentrainer (`Geographie/Programme/Nordamerika Kartentrainer.html`) das Köppen-Klimaquiz (`Geographie/Programme/klimaquiz.html`) sowie Direktlinks zu den Glossar-Lernfunktionen (Quizlet-Funktion `glossar.html#lernen`, Steine-Quizlet `glossar.html#steine`)
- **Dateien** — Inhaltsverzeichnis Matur 2026 (prov.)

### Biologie

- **Zusammenfassungen** — nach Gebieten gruppiert (Feld `group` in `topics`):
  - **Neurobiologie** (Nervensystem, Nervenzellen, Ruhe-/Aktionspotenzial)
  - **Genetik** (Mendel, Mitose/Meiose, Drosophila/Genkarten, Genwirkung und Mutationen, Humangenetik und Stammbäume, Molekulargenetik, Genregulation, Gentechnik)
  - **Immunbiologie** (Infektion und Lymphsystem, unspezifische Abwehr, Antigene/Antikörper/MHC, humorale und zelluläre Antwort, Impfung, Allergien, ELISA)
  - **Ökologie** (Umweltfaktoren, Temperaturanpassungen, Stoffkreisläufe, Energiefluss, Beziehungen und Nische, Konkurrenz, Populationen, Sukzession, Lotka-Volterra, Mensch und Umwelt)
  - Abbildungen aus den Unterrichtsunterlagen in `Biologie/Resourcen/Bilder/` (mit Quellenangabe in der Bildunterschrift)
- **Glossar** — Kategorien Klassische Genetik, Molekulargenetik & Gentechnik, Immunbiologie, Ökologie, Umweltbiologie; Suche, Themenfilter, Mindmap (mehrere Ringe bei vielen Begriffen) und Lernmodi
- **Dateien** — wichtige Biologie-Dokumente herunterladen

## Projektstruktur

```
MaturWebseite/
├── index.html              # Startseite / Fachübersicht
├── styles.css              # gesamtes Design (Sidebar, Cards, Timeline, …)
├── site-nav.js             # gemeinsame Sidebar-Navigation
├── Scripts/                # gemeinsame Renderer und Lernlogik
│   ├── glossar-page.js     # gemeinsames HTML-Gerüst aller Glossarseiten
│   ├── glossar.js
│   ├── glossar-quiz.js
│   └── zusammenfassungen.js
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
│   │   ├── ewige-daten.js
│   │   ├── pruefungsfragen.js
│   │   ├── pruefungsquellen.js
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
│   ├── Scripts/
│   │   ├── data.js
│   │   ├── glossar-data.js
│   │   ├── periodic-elements-data.js
│   │   └── simulationen.js
│   └── Skript/                 # PDF-Skripte (Atombau, Molekulare Stoffe, …)
├── Geographie/
│   ├── index.html
│   ├── zusammenfassungen.html
│   ├── glossar.html
│   ├── dateien.html
│   ├── Scripts/
│   │   ├── data.js                 # 23 Themen + Glossar (nach Inhaltsverzeichnis Matur 2026)
│   └── Resourcen/
│       ├── Bilder/                 # Abbildungen (Gesteinskreislauf, Tethys-Profil, …)
│       └── Dateien/                # Stoffpläne und Dokumente
└── Biologie/
    ├── index.html
    ├── zusammenfassungen.html
    ├── glossar.html
    ├── dateien.html
    └── Scripts/
        ├── data.js                 # Glossar (5 Kategorien) + 27 Themen (Neurobiologie, Genetik, Immunbiologie, Ökologie)
```

## Technik

- **Reines Frontend** — keine externen Frameworks, kein Backend, kein Build-Schritt
- **Navigation** — `site-nav.js` baut die Sidebar je nach Fach und aktueller Seite auf (Attribute `data-nav-section` / `data-nav-page` am `<aside class="sidebar">`)
- **Dunkelmodus** — Schalter oben rechts auf den Seiten mit gemeinsamem Layout; die Einstellung bleibt beim Seitenwechsel gespeichert
- **Glossarseiten** — die vorhandenen `*/glossar.html`-Adressen bleiben bestehen; `Scripts/glossar-page.js` erzeugt das gemeinsame Gerüst, Fachseiten liefern nur ihre Metadaten und Datenquelle
- **Datenhaltung** — Fach-Scripts stellen ihre Inhalte einheitlich über `window.subjectData` bereit:
  - `glossary.categories` und optional `glossary.mindmap`
  - `summaries.topics`
  - optionale Fachfunktionen unter `features` (z. B. Zeitstrahl, Prüfung, Gesteine oder Simulationen)
  - gemeinsame Renderer lesen diese Struktur fachunabhängig
- **Export** — Word wird als HTML-basiertes `.doc` erzeugt, das PDF wird ohne Bibliothek direkt gebaut

## Inhalte erweitern

Neue Geschichte-Themen oder Prüfungsfragen in `Geschichte/Scripts/data.js` ergänzen. Das Script veröffentlicht sie unter `window.subjectData`:

1. **Zusammenfassung:** Daten unter `summaries.topics` mit `id`, `name` und `subtopics` (optional `summary` als HTML)
2. **Prüfungsfragen:** Daten unter `features.exam.topicQuestions` mit den Typen `term`, `trueFalse`, `understanding`, `analysis`
3. **Glossar:** Daten unter `glossary.categories` (nach Epochen gruppiert) und in `glossary.mindmap` verknüpfen
4. **Ewige Daten:** Ereignisse unter `features.timeline.dates` mit `year`, `event`, `explanation`

Fachspezifische Daten, die keine Zusammenfassung oder Glossar sind, gehören in `subjectData.features`. Für ein neues Fach können die gemeinsamen Renderer in `Scripts/` wiederverwendet werden; nur fachliche Inhalte und nötige Spezialfunktionen werden ergänzt.

## Hinweise

- Die Seite ist auf Deutsch und für den Einsatz am Desktop gedacht; das Layout ist zusätzlich responsiv.
- Der Prüfungssimulator wählt die Fragen zufällig aus dem Pool der gewählten Themen; für Themen ohne Fragen wird ein entsprechender Hinweis angezeigt.
- Lehrmittel-PDFs in `Geschichte/Resourcen/Dateien/` sind eigene Unterlagen und gehören nicht zum Code.
