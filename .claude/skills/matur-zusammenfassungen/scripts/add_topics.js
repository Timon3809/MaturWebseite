// Neue Themen (mit Unterkapiteln) am Ende der Themenliste einer data.js anlegen.
// apply_fragments.js ersetzt nur bestehende summary-Felder – neue Themen brauchen zuerst dieses Gerüst.
//
// Aufruf:  node add_topics.js <Fach>/Scripts/data.js themen.json [--dry-run]
// themen.json:
//   [{ "name": "Das Herz", "group": "Herz-Kreislauf",
//      "subtopics": ["Anatomie des Herzens", "Herzleistung"] }, …]
// «group» ist optional (fasst Themen zu einem aufklappbaren Abschnitt zusammen).
// Die ids werden fortlaufend vergeben (topic-<höchste Nummer + 1> …). Jedes Unterkapitel
// erhält den Platzhalter <p>In Arbeit.</p>; danach die Fragmente mit apply_fragments.js einsetzen.
// Zeilenenden (CRLF/LF) der Datei bleiben erhalten. Getestet mit Biologie
// (window.subjectData.summaries.topics, Einrückung 4 Leerzeichen).
"use strict";
const fs = require("fs");

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const [file, specFile] = args.filter((a) => a !== "--dry-run");
if (!file || !specFile) {
  console.error("Aufruf: node add_topics.js <data.js> themen.json [--dry-run]");
  process.exit(1);
}
let src = fs.readFileSync(file, "utf8");
const E = src.includes("\r\n") ? "\r\n" : "\n";
const spec = JSON.parse(fs.readFileSync(specFile, "utf8"));

const ids = [...src.matchAll(/id: "topic-(\d+)"/g)].map((m) => +m[1]);
let next = (ids.length ? Math.max(...ids) : 0) + 1;
const q = (s) => JSON.stringify(s);

const block = spec.map((t) => {
  for (const s of t.subtopics) if (src.includes(`name: ${q(s)}`)) console.warn("Warnung: Unterkapitel-Name existiert schon:", s);
  const lines = ["    {", `      id: "topic-${next++}",`, `      name: ${q(t.name)},`];
  if (t.group) lines.push(`      group: ${q(t.group)},`);
  lines.push("      subtopics: [");
  lines.push(t.subtopics.map((s) => ["        {", `          name: ${q(s)},`, "          summary: `<p>In Arbeit.</p>`", "        }"].join(E)).join("," + E));
  lines.push("      ]", "    }");
  return lines.join(E);
}).join("," + E);

// Ende der Themenliste: letztes «    }» (Themenobjekt) direkt gefolgt von «    ]» (Array-Ende)
const re = new RegExp(E + "    \\}" + E + "    \\]", "g");
let m, last = null;
while ((m = re.exec(src))) last = m;
if (!last) throw new Error("Ende der Themenliste nicht gefunden – Einrückung der data.js prüfen.");
const at = last.index + (E + "    }").length;
src = src.slice(0, at) + "," + E + block + src.slice(at);

if (dry) { console.log(block); process.exit(0); }
fs.writeFileSync(file, src);
console.log(`${spec.length} Themen angelegt (bis topic-${next - 1}). Danach: outline.js zur Kontrolle, dann apply_fragments.js.`);
