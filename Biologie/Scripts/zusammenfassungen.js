const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

const renderSummaryHtml = (html) => {
  if (typeof html !== "string") return escapeHtml(html ?? "");

  const template = document.createElement("template");
  template.innerHTML = html;
  template.content.querySelectorAll(".summary-lazar").forEach((section) => {
    const sourceHeading = section.querySelector(":scope > h3");
    if (/^Lazars (Notizen|Zusammenfassung)$/.test(sourceHeading?.textContent.trim() ?? "")) {
      sourceHeading.remove();
    }

    while (section.firstChild) {
      section.parentNode.insertBefore(section.firstChild, section);
    }
    section.remove();
  });

  return template.innerHTML;
};

const summaryList = document.getElementById("summary-list");
summaryList.innerHTML = window.historyData.topics.map((topic) => {
  const number = Number(topic.id.slice("topic-".length));
  const hasContent = topic.summary || topic.subtopics?.length;
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
      ${topic.summary ? `<div class="summary-text">${renderSummaryHtml(topic.summary)}</div>` : ""}
      ${topic.subtopics?.length ? `
        <div class="summary-subtopics">
          ${topic.subtopics.map((subtopic, subtopicIndex) => `
            <details class="summary-subtopic">
              <summary>
                <span class="summary-number">${number}.${subtopicIndex + 1}</span>
                <span class="summary-title">${escapeHtml(subtopic.name)}</span>
                <span class="summary-toggle">+</span>
              </summary>
              ${subtopic.summary ? `<div class="summary-text">${renderSummaryHtml(subtopic.summary)}</div>` : ""}
            </details>
          `).join("")}
        </div>
      ` : ""}
    </div>
  </details>
  `;
}).join("");
