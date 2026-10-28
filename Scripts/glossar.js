const glossaryData = window.glossaryData;
if (!glossaryData?.categories) {
  throw new Error("Glossardaten müssen unter window.glossaryData.categories verfügbar sein.");
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

const topicNames = Object.keys(glossaryData.categories);
const glossaryEntries = Object.entries(glossaryData.categories).flatMap(([topic, entries]) =>
  entries.map((entry) => ({ ...entry, topic }))
);
const mindmapTopics = glossaryData.mindmap?.topics ?? topicNames.map((name) => ({
  name,
  subcategories: [{
    name: "Begriffe",
    terms: glossaryData.categories[name].map((entry) => entry.term)
  }]
}));
const mindmapName = glossaryData.mindmap?.name ?? "Glossar";

const topicFilter         = document.getElementById("glossary-topic");
const queryInput          = document.getElementById("glossary-search");
const listView            = document.getElementById("glossary-list-view");
const mapView             = document.getElementById("glossary-map-view");
const mapViewport         = document.getElementById("mindmap-viewport");
const mapSurface          = document.getElementById("mindmap-surface");
const mapConnections      = document.getElementById("mindmap-connections");
const mapDetailTitle      = document.getElementById("mindmap-detail-title");
const mapDetailDefinition = document.getElementById("mindmap-detail-definition");
const mapDetailTopic      = document.getElementById("mindmap-detail-topic");
const mapFullscreenToggle = document.getElementById("mindmap-fullscreen");

const mapWidth            = 2300;
const mapHeight           = 1900;
const mapCenterX          = mapWidth / 2;
const mapCenterY          = mapHeight / 2;
let selectedTerm          = null;
let selectedNode          = null;
let mapScale              = 0.4;
let mapTranslateX         = 0;
let mapTranslateY         = 0;
let mapHasCentered        = false;
let dragState             = null;

topicFilter.insertAdjacentHTML("beforeend", topicNames.map((topic) =>
  `<option value="${topic}">${topic}</option>`
).join(""));

function renderGlossary() {
  const query = queryInput.value.trim().toLocaleLowerCase("de");
  const filtered = glossaryEntries.filter((entry) => {
    if (topicFilter.value !== "all" && entry.topic !== topicFilter.value) {
      return false;
    }
    return !query || `${entry.term} ${entry.definition}`.toLocaleLowerCase("de").includes(query);
  }).sort((first, second) => new Intl.Collator("de").compare(first.term, second.term));

  document.getElementById("glossary-total").textContent =
    `${filtered.length} ${filtered.length === 1 ? "BEGRIFF" : "BEGRIFFE"}`;
  document.getElementById("glossary-empty").hidden = filtered.length !== 0;
  document.getElementById("glossary-list").innerHTML = filtered.map((entry) => `
    <details class="glossary-card">
      <summary><span class="glossary-term">${escapeHtml(entry.term)}</span><span class="glossary-toggle">+</span></summary>
      <div class="glossary-definition"><span class="glossary-topic">${escapeHtml(entry.topic)}</span><p>${escapeHtml(entry.definition)}</p></div>
    </details>
  `).join("");
  renderMindmap(filtered);
}

function renderMindmap(entries) {
  mapSurface.querySelectorAll(".mindmap-node").forEach((node) => node.remove());
  mapConnections.replaceChildren();

  const topics = mindmapTopics
    .map((topic) => {
      const topicEntries = entries.filter((entry) => entry.topic === topic.name);
      const remainingEntries = new Map(topicEntries.map((entry) => [entry.term, entry]));
      const subcategories = topic.subcategories.map((subcategory) => ({
        name: subcategory.name,
        entries: subcategory.terms
          .map((term) => remainingEntries.get(term))
          .filter(Boolean)
      })).filter((subcategory) => subcategory.entries.length > 0);

      const assignedTerms = new Set(subcategories.flatMap((subcategory) =>
        subcategory.entries.map((entry) => entry.term)
      ));
      const unassignedEntries = topicEntries.filter((entry) => !assignedTerms.has(entry.term));
      if (unassignedEntries.length > 0) {
        subcategories.push({ name: "Weitere Begriffe", entries: unassignedEntries });
      }

      return {
        name: topic.name,
        subcategories,
        entries: topicEntries
      };
    })
    .filter((topic) => topic.entries.length > 0);
  const totalTerms = topics.reduce((total, topic) => total + topic.entries.length, 0);

  mapViewport.hidden = totalTerms === 0;
  document.getElementById("mindmap-empty").hidden = totalTerms !== 0;
  if (!totalTerms) {
    if (selectedNode) selectedNode.classList.remove("active");
    selectedNode = null;
    selectedTerm = null;
    mapDetailTitle.textContent = "Begriff auswählen";
    mapDetailDefinition.textContent = "Wähle einen Begriff in der Mindmap aus, um die Definition anzuzeigen.";
    mapDetailTopic.textContent = "";
    return;
  }

  const root = { name: mindmapName };
  addMapNode(root, mapCenterX, mapCenterY, 0);

  const topicRadius = 240;
  const subcategoryRadius = 500;
  const termRadius = 800;
  const firstAngle = -Math.PI / 2;
  let sectorStart = firstAngle;

  topics.forEach((topic) => {
    const sectorSize = (topic.entries.length / totalTerms) * Math.PI * 2;
    const topicAngle = sectorStart + sectorSize / 2;
    const topicX = mapCenterX + Math.cos(topicAngle) * topicRadius;
    const topicY = mapCenterY + Math.sin(topicAngle) * topicRadius;
    addMapNode(topic, topicX, topicY, 1);
    drawMapLine(mapCenterX, mapCenterY, topicX, topicY, 1);

    let subcategoryStart = sectorStart;
    topic.subcategories.forEach((subcategory) => {
      const subcategorySize = (subcategory.entries.length / topic.entries.length) * sectorSize;
      const subcategoryAngle = subcategoryStart + subcategorySize / 2;
      const subcategoryX = mapCenterX + Math.cos(subcategoryAngle) * subcategoryRadius;
      const subcategoryY = mapCenterY + Math.sin(subcategoryAngle) * subcategoryRadius;
      addMapNode(subcategory, subcategoryX, subcategoryY, 2);
      drawMapLine(topicX, topicY, subcategoryX, subcategoryY, 2);

      subcategory.entries.forEach((entry, entryIndex) => {
        const angle = subcategoryStart +
          ((entryIndex + 0.5) / subcategory.entries.length) * subcategorySize;
        const termX = mapCenterX + Math.cos(angle) * termRadius;
        const termY = mapCenterY + Math.sin(angle) * termRadius;
        const termNode = addMapNode(entry, termX, termY, 3, () => selectMindmapTerm(entry, termNode));
        drawMapLine(subcategoryX, subcategoryY, termX, termY, 3);

        if (selectedTerm === entry.term) {
          termNode.classList.add("active");
          selectedNode = termNode;
        }
      });

      subcategoryStart += subcategorySize;
    });

    sectorStart += sectorSize;
  });

  if (selectedTerm && !entries.some((entry) => entry.term === selectedTerm)) {
    selectedTerm = null;
    selectedNode = null;
    mapDetailTitle.textContent = "Begriff auswählen";
    mapDetailDefinition.textContent = "Wähle einen Begriff in der Mindmap aus, um die Definition anzuzeigen.";
    mapDetailTopic.textContent = "";
  }
}

function addMapNode(data, x, y, level, onSelect) {
  const node = document.createElement(onSelect ? "button" : "div");
  node.className = `mindmap-node mindmap-level-${level}`;
  node.textContent = data.term || data.name;
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;

  if (onSelect) {
    node.type = "button";
    node.addEventListener("click", onSelect);
    node.setAttribute("aria-label", `Definition für ${data.term} anzeigen`);
  }

  mapSurface.appendChild(node);
  return node;
}

function drawMapLine(x1, y1, x2, y2, level) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("class", `mindmap-line mindmap-line-${level}`);
  mapConnections.appendChild(line);
}

function selectMindmapTerm(entry, node) {
  if (selectedNode) selectedNode.classList.remove("active");
  selectedNode = node;
  selectedTerm = entry.term;
  node.classList.add("active");
  mapDetailTitle.textContent = entry.term;
  mapDetailDefinition.textContent = entry.definition;
  mapDetailTopic.textContent = entry.topic;
}

function updateMapTransform() {
  mapSurface.style.transform =
    `translate(${mapTranslateX}px, ${mapTranslateY}px) scale(${mapScale})`;
}

function centerMindmap() {
  const scaleX = (mapViewport.clientWidth - 60) / 1760;
  const scaleY = (mapViewport.clientHeight - 60) / 1760;
  mapScale = Math.min(0.4, scaleX, scaleY);
  mapTranslateX = mapViewport.clientWidth / 2 - mapCenterX * mapScale;
  mapTranslateY = mapViewport.clientHeight / 2 - mapCenterY * mapScale;
  updateMapTransform();
}

function zoomMindmap(nextScale, originX, originY) {
  const oldScale = mapScale;
  mapScale = Math.max(0.35, Math.min(nextScale, 1.8));
  mapTranslateX = originX - (originX - mapTranslateX) * (mapScale / oldScale);
  mapTranslateY = originY - (originY - mapTranslateY) * (mapScale / oldScale);
  updateMapTransform();
}

function initializeMindmapInteractions() {
  document.querySelectorAll(".glossary-view-button").forEach((button) => {
    button.addEventListener("click", () => {
      const showMap = button.dataset.view === "mindmap";
      listView.hidden = showMap;
      mapView.hidden = !showMap;
      document.querySelectorAll(".glossary-view-button").forEach((viewButton) => {
        const active = viewButton === button;
        viewButton.classList.toggle("is-active", active);
        viewButton.setAttribute("aria-pressed", String(active));
      });
      if (showMap && !mapHasCentered) {
        centerMindmap();
        mapHasCentered = true;
      }
    });
  });

  mapViewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".mindmap-node")) return;
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX - mapTranslateX,
      startY: event.clientY - mapTranslateY
    };
    mapViewport.setPointerCapture(event.pointerId);
    mapViewport.classList.add("is-dragging");
  });

  mapViewport.addEventListener("pointermove", (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    mapTranslateX = event.clientX - dragState.startX;
    mapTranslateY = event.clientY - dragState.startY;
    updateMapTransform();
  });

  function stopMapDrag(event) {
    if (!dragState || (event && event.pointerId !== dragState.pointerId)) return;
    dragState = null;
    mapViewport.classList.remove("is-dragging");
  }

  mapViewport.addEventListener("pointerup", stopMapDrag);
  mapViewport.addEventListener("pointercancel", stopMapDrag);
  mapViewport.addEventListener("wheel", (event) => {
    event.preventDefault();
    const rect = mapViewport.getBoundingClientRect();
    zoomMindmap(
      mapScale * (event.deltaY < 0 ? 1.1 : 1 / 1.1),
      event.clientX - rect.left,
      event.clientY - rect.top
    );
  }, { passive: false });

  document.getElementById("mindmap-zoom-in").addEventListener("click", () => {
    zoomMindmap(mapScale * 1.2, mapViewport.clientWidth / 2, mapViewport.clientHeight / 2);
  });
  document.getElementById("mindmap-zoom-out").addEventListener("click", () => {
    zoomMindmap(mapScale / 1.2, mapViewport.clientWidth / 2, mapViewport.clientHeight / 2);
  });
  document.getElementById("mindmap-center").addEventListener("click", centerMindmap);
  mapFullscreenToggle.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      if (mapView.requestFullscreen) {
        mapView.requestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });

  function syncFullscreenState() {
    const active = Boolean(document.fullscreenElement === mapView);
    mapFullscreenToggle.textContent = active ? "Vollbild beenden" : "Vollbild";
    mapFullscreenToggle.setAttribute("aria-pressed", String(active));
    mapView.classList.toggle("is-fullscreen", active);
    if (active) {
      requestAnimationFrame(centerMindmap);
    }
  }

  document.addEventListener("fullscreenchange", syncFullscreenState);
  window.addEventListener("resize", () => {
    if (!mapView.hidden) centerMindmap();
  });

  queryInput.addEventListener("input", renderGlossary);
  topicFilter.addEventListener("change", renderGlossary);
  renderGlossary();
  syncFullscreenState();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMindmapInteractions);
} else {
  initializeMindmapInteractions();
}
