// Übersicht über die Zusammenfassungen eines Fachs – und Export als Fragmentdatei.
//
// Aufruf:
//   node outline.js <Fach>/Scripts/data.js
//       → alle Themen (id, Name, Gruppe) mit Unterkapiteln: Länge, Anzahl img / svg / Tabellen / Merke
//   node outline.js <Fach>/Scripts/data.js --export topic-5 <out.html>
//       → schreibt die aktuellen Texte eines Themas im Fragmentformat (@@@ Name …)
//         als Ausgangspunkt fürs Überarbeiten
//   node outline.js <Fach>/Scripts/data.js --text topic-5
//       → aktueller Inhalt als Klartext (Abbildungen als [FIG datei]) zum schnellen Lesen
"use strict";
const fs = require("fs");
const path = require("path");

const [file, flag, topicId, out] = process.argv.slice(2);

function loadTopics(f) {
  global.window = {};
  // data.js setzt Objekte auf window (z. B. window.subjectData.summaries.topics)
  eval(fs.readFileSync(f, "utf8"));
  const seen = new Set();
  const find = (o, depth) => {
    if (!o || typeof o !== "object" || seen.has(o) || depth > 4) return null;
    seen.add(o);
    if (Array.isArray(o.topics) && o.topics.some((t) => t && Array.isArray(t.subtopics))) return o.topics;
    for (const v of Object.values(o)) { const r = find(v, depth + 1); if (r) return r; }
    return null;
  };
  const topics = find(global.window, 0);
  if (!topics) throw new Error("Keine topics mit subtopics gefunden in " + f);
  return topics;
}
module.exports = { loadTopics };
if (require.main !== module) return;
if (!file) { console.error("Aufruf: node outline.js <data.js> [--export topic-N out.html | --text topic-N]"); process.exit(1); }

const topics = loadTopics(file);
const count = (s, re) => ((s || "").match(re) || []).length;

if (flag === "--export" || flag === "--text") {
  const t = topics.find((x) => x.id === topicId || x.name === topicId);
  if (!t) { console.error("Thema nicht gefunden:", topicId); process.exit(1); }
  if (flag === "--export") {
    const body = t.subtopics.map((s) => `@@@ ${s.name}\n${(s.summary || "").trim()}\n`).join("\n");
    fs.writeFileSync(out, body, "utf8");
    console.log("geschrieben:", out, t.subtopics.length, "Unterkapitel");
  } else {
    t.subtopics.forEach((s, i) => {
      const txt = (s.summary || "")
        .replace(/<figure.*?<\/figure>/gs, (m) => `[FIG ${(m.match(/src="([^"]+)"/) || [, "svg"])[1]}]`)
        .replace(/<\/(li|tr|p|h3)>/g, " ¦ ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
      console.log(`\n## ${i + 1} ${s.name}\n${txt}`);
    });
  }
  process.exit(0);
}

topics.forEach((t, ti) => {
  console.log(`${t.id || "#" + (ti + 1)}  ${t.name}${t.group ? "  [" + t.group + "]" : ""}${t.summary ? "  (Thema hat eigenen Text)" : ""}`);
  (t.subtopics || []).forEach((s, i) => {
    const h = s.summary || "";
    console.log(
      `   ${String(i + 1).padStart(2)} ${String(h.length).padStart(6)} Z  img ${count(h, /<img/g)}  svg ${count(h, /<svg/g)}  tab ${count(h, /<table/g)}  merke ${count(h, /summary-merke/g)}  ${s.name}`
    );
  });
});
console.log("\nOrdner des Fachs:", path.dirname(path.dirname(path.resolve(file))));
