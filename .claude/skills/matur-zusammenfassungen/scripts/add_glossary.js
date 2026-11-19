// Neue Glossar-Kategorien samt Mindmap-Zweig in eine data.js einfügen (Struktur von Biologie:
// window.subjectData.glossary.categories + glossary.mindmap.topics).
//
// Aufruf:  node add_glossary.js <Fach>/Scripts/data.js begriffe.json [--dry-run]
// begriffe.json:
//   { "Herz-Kreislauf": [                       ← neue Kategorie (= Mindmap-Ast)
//       ["Blut", [                              ← Unterkategorie in der Mindmap
//         ["Hämatokrit", "Definition …"],       ← Begriff, Definition
//         …]],
//       …] }
// Begriffe, die es (ohne Gross-/Kleinschreibung) schon in einer anderen Kategorie gibt, werden
// übersprungen und gemeldet – keine Dubletten im Glossar. Kategorien werden hinten angehängt.
// Zeilenenden bleiben erhalten.
"use strict";
const fs = require("fs");

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const [file, json] = args.filter((a) => a !== "--dry-run");
if (!file || !json) {
  console.error("Aufruf: node add_glossary.js <data.js> begriffe.json [--dry-run]");
  process.exit(1);
}
let src = fs.readFileSync(file, "utf8");
const neu = JSON.parse(fs.readFileSync(json, "utf8"));
const E = src.includes("\r\n") ? "\r\n" : "\n";

global.window = {};
eval(src); // data.js setzt window.subjectData
const glossary = window.subjectData && window.subjectData.glossary;
if (!glossary || !glossary.categories) throw new Error("glossary.categories nicht gefunden.");
const existing = new Set(Object.values(glossary.categories).flat().map((e) => e.term.toLowerCase()));

const q = (s) => JSON.stringify(s);
const key = (k) => (/^[A-Za-z]+$/.test(k) ? k : q(k));
let catTxt = "", mapTxt = "", n = 0;
const skipped = [];
for (const [cat, subs] of Object.entries(neu)) {
  if (glossary.categories[cat]) throw new Error("Kategorie existiert schon: " + cat);
  const entries = [], mapSubs = [];
  for (const [sub, terms] of subs) {
    const t = [];
    for (const [term, def] of terms) {
      if (existing.has(term.toLowerCase())) { skipped.push(term); continue; }
      existing.add(term.toLowerCase());
      entries.push(`      {\n        term: ${q(term)},\n        definition: ${q(def)}\n      }`);
      t.push(term); n++;
    }
    if (t.length) mapSubs.push(`          {\n            name: ${q(sub)},\n            terms: [${t.map(q).join(", ")}]\n          }`);
  }
  catTxt += `,\n    ${key(cat)}: [\n${entries.join(",\n")}\n    ]`;
  mapTxt += `,\n      {\n        name: ${q(cat)},\n        subcategories: [\n${mapSubs.join(",\n")}\n        ]\n      }`;
}
catTxt = catTxt.replace(/\n/g, E);
mapTxt = mapTxt.replace(/\n/g, E);

// Ende von categories: «    ]» + «    },» + «    mindmap: {»
const a1 = "\n    ]\n    },\n    mindmap: {".replace(/\n/g, E);
const i1 = src.indexOf(a1);
if (i1 < 0 || src.indexOf(a1, i1 + 1) >= 0) throw new Error("Ende von glossary.categories nicht eindeutig gefunden.");
const at1 = i1 + (E + "    ]").length;
src = src.slice(0, at1) + catTxt + src.slice(at1);

// Ende der Mindmap-Themen: letztes «      }» vor «    ]» «    }» «  },»
const a2 = "\n      }\n    ]\n    }\n  },".replace(/\n/g, E);
const i2 = src.indexOf(a2, at1);
if (i2 < 0) throw new Error("Ende von glossary.mindmap.topics nicht gefunden.");
const at2 = i2 + (E + "      }").length;
src = src.slice(0, at2) + mapTxt + src.slice(at2);

console.log("neu:", n, "| übersprungen (gibt es schon):", skipped.join(", ") || "–");
if (!dry) fs.writeFileSync(file, src);
