// Fertige Fragmente in die data.js eines Fachs einsetzen – ohne den Rest der Datei anzufassen.
//
// Aufruf:  node apply_fragments.js <Fach>/Scripts/data.js <topic-id> <fragment.html> [weitere …] [--dry-run]
//
// Fragmentformat (eine oder mehrere Dateien):
//   @@@ <exakter Name des Unterkapitels>
//   <HTML des Unterkapitels>
//   @@@ <nächstes Unterkapitel>
//   …
//
// Was das Skript tut:
//  * sucht das Thema (id oder Name) und darin jedes Unterkapitel per exaktem Namen,
//  * ersetzt nur das Stringliteral des Feldes «summary» – in derselben Schreibweise
//    wie bisher ("…", '…' oder `…` – Geographie nutzt JSON-Strings, andere Fächer
//    Template-Literals) und mit dem Zeilenende der Datei (CRLF bleibt CRLF),
//  * lädt die Datei danach neu und prüft, dass jeder Text exakt angekommen ist,
//  * meldet fehlende Bilddateien und doppelte SVG-ids (Marker-/ClipPath-ids müssen
//    auf der ganzen Seite eindeutig sein, sonst zeigen Pfeile auf fremde Marker).
"use strict";
const fs = require("fs");
const path = require("path");
const { loadTopics } = require("./outline.js");

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const [file, topicKey, ...frags] = args.filter((a) => a !== "--dry-run");
if (!file || !topicKey || !frags.length) {
  console.error("Aufruf: node apply_fragments.js <data.js> <topic-id> <fragment.html> […] [--dry-run]");
  process.exit(1);
}

// ---------- Fragmente lesen ----------
const wanted = new Map();
for (const f of frags) {
  const parts = fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n").split(/^@@@ /m).slice(1);
  for (const p of parts) {
    const nl = p.indexOf("\n");
    const name = p.slice(0, nl).trim();
    const html = p.slice(nl + 1).replace(/<!--[\s\S]*?-->\n?/g, "").trim();
    if (wanted.has(name)) throw new Error("Unterkapitel doppelt in den Fragmenten: " + name);
    wanted.set(name, html);
  }
}

// ---------- Thema finden ----------
const topics = loadTopics(file);
const topic = topics.find((t) => t.id === topicKey || t.name === topicKey);
if (!topic) throw new Error("Thema nicht gefunden: " + topicKey + " (ids: " + topics.map((t) => t.id).join(", ") + ")");
const names = topic.subtopics.map((s) => s.name);
for (const n of wanted.keys()) if (!names.includes(n)) throw new Error(`«${n}» ist kein Unterkapitel von ${topic.id}. Vorhanden: ${names.join(" | ")}`);

let text = fs.readFileSync(file, "utf8");
const EOL = text.includes("\r\n") ? "\r\n" : "\n";

// Stringliteral ab Position pos lesen ("…", '…' oder `…`)
function readLiteral(src, pos) {
  const q = src[pos];
  if (!`"'\``.includes(q)) return null;
  let i = pos + 1;
  while (i < src.length) {
    const c = src[i];
    if (c === "\\") { i += 2; continue; }
    if (q === "`" && c === "$" && src[i + 1] === "{") throw new Error("Template-Literal mit ${…} – bitte von Hand bearbeiten");
    if (c === q) break;
    i++;
  }
  const raw = src.slice(pos, i + 1);
  let value;
  if (q === '"') value = JSON.parse(raw);
  else if (q === "'") value = JSON.parse('"' + raw.slice(1, -1).replace(/\\'/g, "'").replace(/"/g, '\\"') + '"');
  else value = raw.slice(1, -1);
  return { start: pos, end: i + 1, quote: q, value };
}

function encode(html, q) {
  if (q === '"') return JSON.stringify(html);
  if (q === "'") return "'" + JSON.stringify(html).slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'") + "'";
  return "`" + html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${").replace(/\n/g, EOL) + "`";
}

// Abschnitt des Themas im Quelltext eingrenzen
const idRe = /(["']?)id\1\s*:\s*(["'`])(topic-[^"'`]+)\2/g;
const idHits = [...text.matchAll(idRe)];
let section = null;
for (let k = 0; k < idHits.length; k++) {
  if (idHits[k][3] !== topic.id) continue;
  const start = idHits[k].index;
  const next = idHits.slice(k + 1).find((h) => h.index > start);
  const end = next ? next.index : text.length;
  const slice = text.slice(start, end);
  if (names.every((n) => slice.includes(JSON.stringify(n).slice(1, -1)) || slice.includes(n))) { section = [start, end]; break; }
}
if (!section) throw new Error("Abschnitt von " + topic.id + " im Quelltext nicht eindeutig gefunden – bitte von Hand einsetzen");

// name-Felder im Abschnitt lesen
const keyRe = /(["']?)(name|summary)\1\s*:\s*/g;
keyRe.lastIndex = section[0];
const keys = [];
let m;
while ((m = keyRe.exec(text)) && m.index < section[1]) {
  const lit = readLiteral(text, m.index + m[0].length);
  if (lit) keys.push({ key: m[2], lit });
}

const edits = [];
const unchanged = [];
for (const [name, html] of wanted) {
  const idx = keys.findIndex((k) => k.key === "name" && k.lit.value === name);
  if (idx < 0) throw new Error("name-Feld nicht gefunden: " + name);
  const sum = keys.slice(idx + 1).find((k, j, arr) => k.key === "summary" && !arr.slice(0, j).some((x) => x.key === "name"));
  const current = (topic.subtopics.find((x) => x.name === name).summary || "").trim();
  if (current === html) {
    unchanged.push(name); // nichts schreiben, damit git diff sauber bleibt
  } else if (sum) {
    edits.push({ start: sum.lit.start, end: sum.lit.end, value: encode(html, sum.lit.quote), name });
  } else if (html) {
    // Unterkapitel ohne Text (z. B. { name: "…" }): summary-Feld direkt nach dem Namen einfügen,
    // im Stil der Datei (Geographie: "summary": "…", sonst summary: `…`)
    const nameKey = keys[idx];
    const quotedKeys = /"name"\s*:\s*$/.test(text.slice(nameKey.lit.start - 12, nameKey.lit.start));
    const q = quotedKeys ? '"' : "`";
    const ins = `, ${quotedKeys ? '"summary"' : "summary"}: ${encode(html, q)}`;
    edits.push({ start: nameKey.lit.end, end: nameKey.lit.end, value: ins, name });
  } else {
    unchanged.push(name); // leer und ohne summary-Feld: nichts zu tun
  }
}
edits.sort((a, b) => b.start - a.start);
for (const e of edits) text = text.slice(0, e.start) + e.value + text.slice(e.end);

if (!edits.length) { console.log("Nichts zu ändern – alle Texte sind schon aktuell."); process.exit(0); }
if (dry) { console.log("Probelauf – würde ersetzen:", edits.map((e) => e.name).join(" | ")); process.exit(0); }

const backup = file + ".bak";
fs.copyFileSync(file, backup);
fs.writeFileSync(file, text, "utf8");

// ---------- Kontrolle ----------
let ok = true;
try {
  const t2 = loadTopics(file).find((t) => t.id === topic.id);
  for (const [name, html] of wanted) {
    const s = t2.subtopics.find((x) => x.name === name);
    if (!s || (s.summary || "").trim() !== html) { ok = false; console.error("ABWEICHUNG nach dem Einsetzen:", name); }
  }
} catch (e) { ok = false; console.error("data.js lässt sich nicht mehr laden:", e.message); }
if (!ok) { fs.copyFileSync(backup, file); console.error("→ Original wiederhergestellt."); process.exit(1); }
fs.unlinkSync(backup);

const subjectDir = path.dirname(path.dirname(path.resolve(file)));
const missing = new Set();
const ids = new Map();
const all = loadTopics(file).flatMap((t) => t.subtopics || []).map((s) => s.summary || "").join("\n");
for (const [, html] of wanted)
  for (const r of html.matchAll(/(?:src|href)="(Resourcen\/[^"#?]+)"/g))
    if (!fs.existsSync(path.join(subjectDir, r[1]))) missing.add(r[1]);
for (const r of all.matchAll(/\sid="([^"]+)"/g)) ids.set(r[1], (ids.get(r[1]) || 0) + 1);
const dup = [...ids].filter(([, n]) => n > 1).map(([id, n]) => `${id} (${n}×)`);

for (const name of unchanged) console.log("unverändert:", name);
for (const [name, html] of wanted) {
  if (unchanged.includes(name)) continue;
  const c = (re) => (html.match(re) || []).length;
  console.log(`ersetzt: ${name.padEnd(48).slice(0, 48)} ${String(html.length).padStart(6)} Z  img ${c(/<img/g)}  svg ${c(/<svg/g)}  tab ${c(/<table/g)}`);
}
console.log(missing.size ? "FEHLENDE BILDER: " + [...missing].join(", ") : "alle Bilder vorhanden");
console.log(dup.length ? "DOPPELTE ids im ganzen Fach: " + dup.join(", ") : "keine doppelten ids");
