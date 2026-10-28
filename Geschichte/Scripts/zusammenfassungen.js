window.summaryData = { topics: window.historyData.topics };
window.summaryData.renderHtml = (html) => {
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
