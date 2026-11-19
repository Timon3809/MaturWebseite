// Themen einer data.js nach Abschnitten (group) umsortieren, ohne Inhalt zu ändern.
// Die Nummern der Abschnitte (01, 02 …) auf der Seite ergeben sich aus der Reihenfolge im Array.
//
// Aufruf:  node reorder_groups.js <Fach>/Scripts/data.js "Herz-Kreislauf" "Ökologie" … [--dry-run]
// Jede vorkommende group muss genannt sein. Innerhalb eines Abschnitts bleibt die Reihenfolge,
// ids bleiben unverändert. Zeilenenden bleiben erhalten. Getestet mit Biologie.
"use strict";
const fs = require("fs");

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const [file, ...order] = args.filter((a) => a !== "--dry-run");
if (!file || !order.length) {
  console.error('Aufruf: node reorder_groups.js <data.js> "Gruppe 1" "Gruppe 2" … [--dry-run]');
  process.exit(1);
}
const src = fs.readFileSync(file, "utf8");
const E = src.includes("\r\n") ? "\r\n" : "\n";

const first = src.search(new RegExp("    \\{" + E + '      id: "topic-'));
const endRe = new RegExp(E + "    \\}" + E + "    \\]", "g");
let m, last = null;
while ((m = endRe.exec(src))) last = m;
if (first < 0 || !last) throw new Error("Themenliste nicht gefunden.");
const end = last.index + (E + "    }").length;

const chunks = src.slice(first, end).split(new RegExp("," + E + "(?=    \\{" + E + '      id: ")'));
const rank = (c) => {
  const g = (c.match(/^      group: "([^"]+)"/m) || [])[1];
  const i = order.indexOf(g);
  if (i < 0) throw new Error(`Abschnitt «${g}» fehlt in der Reihenfolge (${c.match(/id: "[^"]+"/)[0]}).`);
  return i;
};
const sorted = chunks.map((c, i) => [rank(c), i, c]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map((x) => x[2]);
const out = src.slice(0, first) + sorted.join("," + E) + src.slice(end);
if (out.length !== src.length) throw new Error("Längenprüfung fehlgeschlagen – nichts geschrieben.");

for (const c of sorted) console.log(c.match(/group: "([^"]+)"/)[1].padEnd(20), c.match(/name: "([^"]+)"/)[1]);
if (!dry) fs.writeFileSync(file, out);
console.log(dry ? "(Probelauf, nichts geschrieben)" : `${chunks.length} Themen umsortiert.`);
