const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

const renderSummaryHtml = (html, formatter) => {
  if (typeof html !== "string") return escapeHtml(html ?? "");
  return formatter ? formatter(html) : html;
};

const renderPlaceholder = (placeholder) => {
  const title = typeof placeholder === "string" ? placeholder : "Zusammenfassung folgt";
  const description = typeof placeholder === "object" && placeholder.description
    ? placeholder.description
    : "Für dieses Kapitel sind noch keine Inhalte eingetragen.";

  return `<div class="placeholder-panel"><span>▧</span><p><strong>${escapeHtml(title)}</strong>${escapeHtml(description)}</p></div>`;
};

const summaryList = document.getElementById("summary-list");
const summaryData = window.subjectData?.summaries;
if (!summaryList || !Array.isArray(summaryData?.topics)) {
  throw new Error("Zusammenfassungen benötigen ein summary-list-Element und subjectData.summaries.topics.");
}

const topicNumber = (topic) => {
  const match = String(topic.id ?? "").match(/(\d+)$/);
  const number = topic.number ?? (match ? Number(match[1]) : NaN);
  if (!Number.isInteger(Number(number))) {
    throw new Error(`Das Zusammenfassungsthema "${topic.name}" benötigt eine numerische Nummer oder ID.`);
  }
  return Number(number);
};

// Optionales Feld "group": Themen mit gleicher Gruppe (z. B. Neurobiologie, Genetik, Immunbiologie, Ökologie)
// werden in eine aufklappbare Oberkategorie gepackt. Themen ohne group bleiben unverändert auf oberster Ebene.
// label: Nummer innerhalb einer Oberkategorie (z. B. "2.3"); ohne label gilt die eigene Themennummer.
const renderTopic = (topic, label) => {
  const number = label ?? topicNumber(topic);
  const numberLabel = label ?? String(number).padStart(2, "0");
  const hasContent = topic.summary || topic.placeholder || topic.subtopics?.length;
  if (!hasContent) {
    return `
      <div class="summary-card summary-card-static">
        <div class="summary-static-row">
          <span class="summary-number">${numberLabel}</span>
          <span class="summary-title">${escapeHtml(topic.name)}</span>
        </div>
      </div>
    `;
  }

  return `
    <details class="summary-card">
      <summary>
        <span class="summary-number">${numberLabel}</span>
        <span class="summary-title">${escapeHtml(topic.name)}${topic.status === "not-covered" ? '<span class="summary-status">NOCH NICHT BEHANDELT</span>' : topic.status === "partially-covered" ? '<span class="summary-status">TEILWEISE BEHANDELT</span>' : ""}</span>
        <span class="summary-toggle">+</span>
      </summary>
      <div class="summary-content">
        ${topic.summary ? `<div class="summary-text">${renderSummaryHtml(topic.summary, summaryData.renderHtml)}</div>` : ""}
        ${topic.placeholder && !topic.summary ? renderPlaceholder(topic.placeholder) : ""}
        ${topic.subtopics?.length ? `
          <div class="summary-subtopics">
            ${topic.subtopics.map((subtopic, subtopicIndex) => `
              <details class="summary-subtopic">
                <summary>
                  <span class="summary-number">${number}.${escapeHtml(subtopic.number ?? subtopicIndex + 1)}</span>
                  <span class="summary-title">${escapeHtml(subtopic.name)}</span>
                  <span class="summary-toggle">+</span>
                </summary>
                ${subtopic.summary ? `<div class="summary-text">${renderSummaryHtml(subtopic.summary, summaryData.renderHtml)}</div>` : ""}
                ${subtopic.placeholder && !subtopic.summary ? renderPlaceholder(subtopic.placeholder) : ""}
              </details>
            `).join("")}
          </div>
        ` : ""}
      </div>
    </details>
  `;
};

const renderedEntries = [];
summaryData.topics.forEach((topic) => {
  const last = renderedEntries[renderedEntries.length - 1];
  if (topic.group && last?.group === topic.group) last.topics.push(topic);
  else renderedEntries.push({ group: topic.group, topics: [topic] });
});

let groupCounter = 0;
summaryList.innerHTML = renderedEntries.map((entry) => {
  if (!entry.group) return entry.topics.map((topic) => renderTopic(topic)).join("");
  // Wie bei Geographie: Oberkategorie 01, 02, … und die Themen darin 1.1, 1.2, …
  const groupNumber = ++groupCounter;
  return `
    <details class="summary-card summary-category">
      <summary>
        <span class="summary-number">${String(groupNumber).padStart(2, "0")}</span>
        <span class="summary-title">${escapeHtml(entry.group)}</span>
        <span class="summary-toggle">+</span>
      </summary>
      <div class="summary-category-body">${entry.topics.map((topic, index) => renderTopic(topic, `${groupNumber}.${index + 1}`)).join("")}</div>
    </details>
  `;
}).join("");
