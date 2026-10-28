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
const summaryData = window.summaryData;
if (!summaryList || !Array.isArray(summaryData?.topics)) {
  throw new Error("Zusammenfassungen benötigen ein summary-list-Element und summaryData.topics.");
}

const topicNumber = (topic) => {
  const match = String(topic.id ?? "").match(/(\d+)$/);
  const number = topic.number ?? (match ? Number(match[1]) : NaN);
  if (!Number.isInteger(Number(number))) {
    throw new Error(`Das Zusammenfassungsthema "${topic.name}" benötigt eine numerische Nummer oder ID.`);
  }
  return Number(number);
};

summaryList.innerHTML = summaryData.topics.map((topic) => {
  const number = topicNumber(topic);
  const hasContent = topic.summary || topic.placeholder || topic.subtopics?.length;
  if (!hasContent) {
    return `
      <div class="summary-card summary-card-static">
        <div class="summary-static-row">
          <span class="summary-number">${String(number).padStart(2, "0")}</span>
          <span class="summary-title">${escapeHtml(topic.name)}</span>
        </div>
      </div>
    `;
  }

  return `
    <details class="summary-card">
      <summary>
        <span class="summary-number">${String(number).padStart(2, "0")}</span>
        <span class="summary-title">${escapeHtml(topic.name)}${topic.status === "not-covered" ? '<span class="summary-status">NOCH NICHT BEHANDELT</span>' : ""}</span>
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
}).join("");
