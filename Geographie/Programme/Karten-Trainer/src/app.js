import { matchAnswer, createProjector, projectedLinePath } from "./core.js";
import { TYPE_ORDER, TYPE_LABELS, validateConfig, validateDataset } from "./schema.js";

const MAP_WIDTH = 1080;
const MAP_HEIGHT = 760;
const PAN_MARGIN_X = 180;
const PAN_MARGIN_Y = 120;
const MARKER_HIT_RADIUS = 32;

const elements = {
  app: document.querySelector("#app"),
  panel: document.querySelector("#panel-root"),
  svg: document.querySelector("#map-svg"),
  mapContent: document.querySelector("#map-content"),
  baseLayer: document.querySelector("#base-layer"),
  studyLayer: document.querySelector("#study-layer"),
  hitLayer: document.querySelector("#hit-layer"),
  highlightLayer: document.querySelector("#highlight-layer"),
  toast: document.querySelector("#toast"),
  mapModeLabel: document.querySelector("#map-mode-label"),
  zoomIn: document.querySelector("#zoom-in"),
  zoomOut: document.querySelector("#zoom-out"),
  zoomReset: document.querySelector("#zoom-reset"),
  mapLegend: document.querySelector("#map-legend"),
};

const state = {
  phase: "loading",
  mode: "click",
  theme: loadTheme(),
  selectedTypes: new Set(),
  deck: [],
  retryQueue: [],
  current: null,
  retryStage: false,
  answerLocked: false,
  feedback: null,
  clickedId: null,
  hoveredId: null,
  revealedIds: new Set(),
  selectedAnswer: "",
  initialTotal: 0,
  initialAnswered: 0,
  initialStats: {
    correct: 0,
    wrong: 0,
    unknown: 0,
  },
  totalAttempts: 0,
  masteredIds: new Set(),
  needsPractice: new Map(),
  history: [],
  transform: {
    scale: 1,
    x: 0,
    y: 0,
  },
};

let data;
let config;
let controlsWired = false;
let baseRendered = false;
let itemsById = new Map();
let projector;
let suppressNextClick = false;
let dragState = null;
let activePointers = new Map();
let initialPinchDistance = null;
let initialPinchScale = null;
let pinchMoved = false;

init();

async function init() {
  applyTheme();

  renderAll();
  await loadData();
}

async function loadData() {
  state.phase = 'loading';
  renderAll();
  try {
    const configResponse = await fetch('./map.config.json');
    if (!configResponse.ok) throw new Error('Kartenkonfiguration konnte nicht geladen werden (' + configResponse.status + ').');
    config = validateConfig(await configResponse.json());
    const response = await fetch('./' + config.data);
    if (!response.ok) throw new Error('Kartendaten konnten nicht geladen werden (' + response.status + ').');
    data = validateDataset(await response.json());
    data.typeLabels = { ...TYPE_LABELS, ...data.typeLabels };
    state.selectedTypes = new Set(availableTypes());
    document.title = config.title;
    document.querySelector('.map-kicker').textContent = config.region;
    elements.svg.setAttribute('aria-label', 'Interaktive Karte: ' + config.region);
    itemsById = new Map(data.items.map((item) => [item.id, item]));
    projector = createProjector(data.bounds);
    state.phase = "setup";
    if (!controlsWired) { wireMapControls(); controlsWired = true; }
    renderAll();
  } catch (error) {
    state.phase = "error";
    renderLayoutMode();
    renderError(error);
  }
}

function renderAll() {
  renderLayoutMode();
  const focus = elements.panel.contains(document.activeElement) ? document.activeElement : null;
  const focusId = focus?.id;
  const focusType = focus?.dataset.type;
  const focusMode = focus?.dataset.mode;
  const focusTheme = focus?.dataset.theme;
  const focusAction = ['data-select-all', 'data-select-countries', 'data-theme-toggle'].find(name => focus?.hasAttribute(name));
  renderPanel();
  const replacement = (focusId && elements.panel.querySelector(`#${focusId}`))
    || (focusType && elements.panel.querySelector(`[data-type="${focusType}"]`))
    || (focusMode && elements.panel.querySelector(`[data-mode="${focusMode}"]`))
    || (focusTheme && elements.panel.querySelector(`[data-theme="${focusTheme}"]`))
    || (focusAction && elements.panel.querySelector(`[${focusAction}]`));
  if (replacement) replacement.focus({ preventScroll: true });
  else if (state.phase === "quiz") (elements.panel.querySelector('#next-question')
    || elements.panel.querySelector('#answer-input') || elements.panel.querySelector('h1'))?.focus({ preventScroll: true });
  else if (focus && ['setup', 'results'].includes(state.phase)) elements.panel.querySelector('h1')?.focus({ preventScroll: true });
  renderMap();
  renderLegend();
  renderToast();
  updateModeLabel();
}

function renderLayoutMode() {
  const isSetup = state.phase === "setup" || state.phase === "loading" || state.phase === "error";
  const isGame = state.phase === "quiz" || state.phase === "results";
  elements.app.classList.toggle("setup-layout", isSetup);
  elements.app.classList.toggle("game-layout", isGame);
  document.body.classList.toggle("is-setup", isSetup);
  document.body.classList.toggle("is-game", isGame);
}

function renderPanel() {
  if (state.phase === "loading") {
    elements.panel.innerHTML = `
      <div class="setup-card">
        <div class="setup-title">
          <span>${escapeHtml(config?.title || "Karten-Trainer")}</span>
          <h1>Kartendaten laden</h1>
        </div>
      </div>
    `;
    return;
  }

  if (state.phase === "setup") {
    renderSetupPanel();
    return;
  }

  if (state.phase === "quiz") {
    renderQuizPanel();
    return;
  }

  if (state.phase === "results") {
    renderResultsPanel();
  }
}

function renderSetupPanel() {
  const selectedCount = selectedItems().length;
  const totalCount = data.items.length;
  const typeControls = availableTypes().map((type) => {
    const count = data.items.filter((item) => item.type === type).length;
    const active = state.selectedTypes.has(type);
    return `
      <button class="type-toggle ${active ? "active" : ""}" type="button" data-type="${type}" aria-pressed="${active}">
        <span>${escapeHtml(data.typeLabels[type])}</span>
        <small>${count}</small>
      </button>
    `;
  }).join("");

  elements.panel.innerHTML = `
    <div class="setup-card">
      <div class="setup-title">
        <span>${escapeHtml(config?.title || "Karten-Trainer")}</span>
        <h1 tabindex="-1">Deine Lernrunde</h1>
        <p>${escapeHtml(config.description)}</p>
      </div>

      <section class="setup-section">
        <div class="section-title">
          <h2>Modus</h2>
        </div>
        <div class="segmented mode-segmented">
          <button type="button" class="${state.mode === "click" ? "active" : ""}" data-mode="click" aria-pressed="${state.mode === "click"}">Ort finden</button>
          <button type="button" class="${state.mode === "type" ? "active" : ""}" data-mode="type" aria-pressed="${state.mode === "type"}">Ort benennen</button>
          <button type="button" class="${state.mode === "practice" ? "active" : ""}" data-mode="practice" aria-pressed="${state.mode === "practice"}">Frei üben</button>
        </div>
        <p class="mode-help">${{click:"Finde den gesuchten Begriff auf der Karte. Fehler werden am Ende wiederholt.",type:"Benenne den markierten Ort. Bekannte Namen und Schreibvarianten werden akzeptiert.",practice:"Erkunde die Karte in deinem Tempo und blende Lösungen einzeln ein."}[state.mode]}</p>
      </section>

      <section class="setup-section">
        <div class="section-title">
          <h2>Darstellung</h2>
        </div>
        <div class="segmented">
          <button type="button" class="${state.theme === "dark" ? "active" : ""}" data-theme="dark" aria-pressed="${state.theme === "dark"}">Dunkel</button>
          <button type="button" class="${state.theme === "light" ? "active" : ""}" data-theme="light" aria-pressed="${state.theme === "light"}">Hell</button>
        </div>
      </section>

      <section class="setup-section">
        <div class="section-title">
          <h2>Kategorien</h2>
          <div class="setup-actions">
            <button class="mini-button" type="button" data-select-all>Alle</button>
            ${availableTypes().includes("country") ? '<button class="mini-button" type="button" data-select-countries>Nur Länder</button>' : ""}
          </div>
        </div>
        <div class="type-grid">${typeControls}</div>
      </section>

      <section class="setup-footer">
        <div>
          <strong>${selectedCount}/${totalCount}</strong>
          <span>Begriffe aktiv</span>
        </div>
        <button class="primary-button" type="button" id="start-round" ${selectedCount ? "" : "disabled"}>Runde starten</button>
      </section>
      ${sourceDetails()}
    </div>
  `;

  wirePanelEvents();
}

function renderQuizPanel() {
  if (state.mode === "practice") {
    renderPracticePanel();
    return;
  }

  const item = state.current;
  const progress = getProgress();
  const feedback = state.feedback
    ? `<div class="feedback ${state.feedback.kind}" role="status">${escapeHtml(state.feedback.message)}</div>`
    : "";
  const prompt = state.mode === "click"
    ? `<span>Klicke den passenden Punkt an</span><strong class="challenge-term">${escapeHtml(item.name)}</strong>`
    : `<span>Wie heißt der markierte Ort?</span><strong>${escapeHtml(data.typeLabels[item.type])}</strong>`;
  const answerArea = state.mode === "type" && !state.answerLocked
    ? `
      <form class="answer-form" id="answer-form">
        <label for="answer-input" class="sr-only">Name des markierten Orts</label>
        <input id="answer-input" type="text" autocomplete="off" placeholder="Antwort eingeben" value="${escapeAttribute(state.selectedAnswer)}" autofocus>
        <button class="primary-button" type="submit">Prüfen</button>
      </form>
    `
    : "";
  const actionArea = state.answerLocked
    ? `<button class="primary-button" type="button" id="next-question">Weiter</button>`
    : `<button class="secondary-button" type="button" id="dont-know">Ich weiss es nicht</button>`;

  elements.panel.innerHTML = `
    <div class="game-card">
      <div class="game-header">
        <button class="mini-button" type="button" id="back-to-setup">Auswahl</button>
        <button class="mini-button" type="button" data-theme-toggle>${state.theme === "dark" ? "Hell" : "Dunkel"}</button>
      </div>

      <div class="progress-wrap">
        <div class="progress-meta">
          <span>${state.retryStage ? "Wiederholung" : "Runde"}</span>
          <span>${progress.label}</span>
        </div>
        <div class="progress-bar" role="progressbar" aria-label="Lernfortschritt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}"><span style="width:${progress.percent}%"></span></div>
      </div>

      <section class="challenge-card">
        <span class="prompt-type">${escapeHtml(data.typeLabels[item.type])}</span>
        <h1 class="prompt-main" tabindex="-1">${prompt}</h1>
        ${answerArea}
        ${feedback}
        ${actionArea}
      </section>

      <section class="stats-grid">
        <div class="stat"><strong>${state.initialStats.correct}</strong><span>richtig</span></div>
        <div class="stat"><strong>${state.initialStats.wrong}</strong><span>falsch</span></div>
        <div class="stat"><strong>${state.initialStats.unknown}</strong><span>nicht gewusst</span></div>
      </section>
    </div>
  `;

  wirePanelEvents();
}

function renderPracticePanel() {
  const visibleItems = selectedItems();
  const revealedCount = visibleItems.filter((item) => state.revealedIds.has(item.id)).length;

  elements.panel.innerHTML = `
    <div class="game-card practice-card">
      <div class="game-header">
        <button class="mini-button" type="button" id="back-to-setup">Auswahl</button>
        <button class="mini-button" type="button" data-theme-toggle>${state.theme === "dark" ? "Hell" : "Dunkel"}</button>
      </div>

      <section class="challenge-card">
        <span class="prompt-type">Übungsmodus</span>
        <h1 class="prompt-main" tabindex="-1">
          <span>Wähle einen Kartenpunkt, um seinen Namen ein- oder auszublenden.</span>
          <strong>${revealedCount}/${visibleItems.length} sichtbar</strong>
        </h1>
        <div class="button-row">
          <button class="secondary-button" type="button" id="hide-all-labels" ${revealedCount ? "" : "disabled"}>Alle ausblenden</button>
          <button class="secondary-button" type="button" id="show-all-labels" ${revealedCount === visibleItems.length ? "disabled" : ""}>Alle zeigen</button>
        </div>
      </section>

      <section class="stats-grid">
        <div class="stat"><strong>${visibleItems.length}</strong><span>aktiv</span></div>
        <div class="stat"><strong>${revealedCount}</strong><span>sichtbar</span></div>
        <div class="stat"><strong>${visibleItems.length - revealedCount}</strong><span>verdeckt</span></div>
      </section>
    </div>
  `;

  wirePanelEvents();
}

function renderResultsPanel() {
  const wrongItems = [...state.needsPractice.values()];
  const percent = state.initialTotal
    ? Math.round((state.initialStats.correct / state.initialTotal) * 100)
    : 0;
  const missList = wrongItems.length
    ? `<div class="miss-list">${wrongItems.map(({ item, reason }) => `
        <div class="miss-pill">
          <span>${escapeHtml(item.name)}</span>
          <span>${reason === "unknown" ? "nicht gewusst" : "falsch"}</span>
        </div>
      `).join("")}</div>`
    : `<p class="source-note">Keine Fehler in der ersten Runde.</p>`;

  elements.panel.innerHTML = `
    <div class="game-card result-card">
      <div class="game-header">
        <button class="mini-button" type="button" id="back-to-setup">Auswahl</button>
        <button class="mini-button" type="button" data-theme-toggle>${state.theme === "dark" ? "Hell" : "Dunkel"}</button>
      </div>

      <section class="challenge-card">
        <h1 class="prompt-type" tabindex="-1">Runde abgeschlossen</h1>
        <p class="result-score"><strong>${percent}%</strong><span>zuerst richtig</span></p>
      </section>

      <section class="stats-grid">
        <div class="stat"><strong>${state.initialStats.correct}</strong><span>richtig</span></div>
        <div class="stat"><strong>${state.initialStats.wrong}</strong><span>falsch</span></div>
        <div class="stat"><strong>${state.initialStats.unknown}</strong><span>nicht gewusst</span></div>
      </section>

      <section class="result-list">
        <div class="section-title">
          <h2>Wiederholt bis richtig</h2>
          <span>${state.totalAttempts} Antworten</span>
        </div>
        ${missList}
      </section>

      <div class="button-row">
        <button class="primary-button" type="button" id="start-round">Neue Runde</button>
        <button class="secondary-button" type="button" id="reset-setup">Auswahl ändern</button>
      </div>
    </div>
  `;

  wirePanelEvents();
}

function wirePanelEvents() {
  elements.panel.querySelectorAll("[data-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;
      if (state.selectedTypes.has(type)) {
        state.selectedTypes.delete(type);
      } else {
        state.selectedTypes.add(type);
      }
      renderAll();
    });
  });

  elements.panel.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      renderAll();
    });
  });

  elements.panel.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.theme = button.dataset.theme;
      applyTheme();
      renderAll();
    });
  });

  elements.panel.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    renderAll();
  });

  elements.panel.querySelector("[data-select-all]")?.addEventListener("click", () => {
    state.selectedTypes = new Set(availableTypes());
    renderAll();
  });

  elements.panel.querySelector("[data-select-countries]")?.addEventListener("click", () => {
    state.selectedTypes = new Set(["country"]);
    renderAll();
  });

  elements.panel.querySelector("#start-round")?.addEventListener("click", startRound);
  elements.panel.querySelector("#reset-setup")?.addEventListener("click", goToSetup);
  elements.panel.querySelector("#back-to-setup")?.addEventListener("click", goToSetup);
  elements.panel.querySelector("#dont-know")?.addEventListener("click", () => finalizeAnswer("unknown"));
  elements.panel.querySelector("#next-question")?.addEventListener("click", nextQuestion);
  elements.panel.querySelector("#hide-all-labels")?.addEventListener("click", () => {
    state.revealedIds.clear();
    renderAll();
  });
  elements.panel.querySelector("#show-all-labels")?.addEventListener("click", () => {
    state.revealedIds = new Set(selectedItems().map((item) => item.id));
    renderAll();
  });

  const form = elements.panel.querySelector("#answer-form");
  const input = elements.panel.querySelector("#answer-input");
  if (input) {
    input.addEventListener("input", (event) => {
      state.selectedAnswer = event.target.value;
    });
    if (!state.answerLocked) requestAnimationFrame(() => input.focus({ preventScroll: true }));
  }
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitTextAnswer();
    });
  }
}

function goToSetup() {
  state.phase = "setup";
  state.current = null;
  state.deck = [];
  state.retryQueue = [];
  state.answerLocked = false;
  state.feedback = null;
  state.clickedId = null;
  state.hoveredId = null;
  state.revealedIds.clear();
  state.selectedAnswer = "";
  resetZoom();
  renderAll();
}

function startRound() {
  const deck = shuffle(selectedItems().map((item) => item.id));
  if (!deck.length) return;
  state.phase = "quiz";
  state.deck = deck;
  state.retryQueue = [];
  state.current = null;
  state.retryStage = false;
  state.answerLocked = false;
  state.feedback = null;
  state.clickedId = null;
  state.hoveredId = null;
  state.revealedIds.clear();
  state.selectedAnswer = "";
  state.initialTotal = deck.length;
  state.initialAnswered = 0;
  state.initialStats = { correct: 0, wrong: 0, unknown: 0 };
  state.totalAttempts = 0;
  state.masteredIds = new Set();
  state.needsPractice = new Map();
  state.history = [];
  resetZoom(false);
  if (state.mode === "practice") {
    renderAll();
    return;
  }
  nextQuestion();
}

function selectedItems() {
  return data.items.filter((item) => state.selectedTypes.has(item.type));
}

function activeMapItems() {
  if (state.phase !== "quiz") return [];
  if (state.mode === "type") return state.current ? [state.current] : [];
  return selectedItems();
}

function nextQuestion() {
  state.feedback = null;
  state.clickedId = null;
  state.hoveredId = null;
  state.answerLocked = false;
  state.selectedAnswer = "";

  if (!state.deck.length && state.retryQueue.length) {
    state.retryStage = true;
    state.deck = shuffle([...new Set(state.retryQueue)]);
    state.retryQueue = [];
  }

  if (!state.deck.length) {
    state.phase = "results";
    state.current = null;
    renderAll();
    return;
  }

  state.current = itemsById.get(state.deck.shift());
  renderAll();
}

function finalizeAnswer(result, payload = {}) {
  if (!state.current || state.answerLocked) return;

  const item = state.current;
  const correct = result === "correct" || result === "typo";
  state.answerLocked = true;
  state.totalAttempts += 1;
  state.clickedId = payload.clickedId || null;
  state.hoveredId = null;

  if (!state.retryStage) {
    state.initialAnswered += 1;
    if (correct) state.initialStats.correct += 1;
    if (result === "wrong") state.initialStats.wrong += 1;
    if (result === "unknown") state.initialStats.unknown += 1;
  }

  if (correct) {
    state.masteredIds.add(item.id);
  } else {
    state.retryQueue.push(item.id);
    if (!state.needsPractice.has(item.id)) {
      state.needsPractice.set(item.id, { item, reason: result === "unknown" ? "unknown" : "wrong" });
    }
  }

  state.history.push({
    id: item.id,
    result,
    retry: state.retryStage,
    answer: payload.answer || "",
    clickedId: payload.clickedId || "",
  });

  state.feedback = createFeedback(result, item, payload);
  renderAll();
}

function createFeedback(result, item, payload) {
  if (result === "correct") {
    return { kind: "good", message: "Richtig." };
  }
  if (result === "typo") {
    return { kind: "warn", message: payload.message || `Akzeptiert. Die Schreibweise ist: ${item.name}.` };
  }
  if (result === "unknown") {
    return { kind: "warn", message: `Die Lösung ist: ${item.name}.` };
  }

  const clicked = payload.clickedId ? itemsById.get(payload.clickedId) : null;
  const clickedText = clicked ? `Du hast ${clicked.name} gewählt.` : `„${payload.answer || ''}“ ist nicht richtig.`;
  return { kind: "bad", message: `${clickedText} Richtig ist: ${item.name}.` };
}

function submitTextAnswer() {
  const answer = state.selectedAnswer.trim();
  if (!answer) return;
  const match = matchAnswer(answer, state.current, data.items);

  finalizeAnswer(match.result, {
    answer,
    message: match.message,
  });
}

function handleMapClick(event) {
  if (suppressNextClick || state.phase !== "quiz") {
    return;
  }

  if (state.mode !== "click" && state.mode !== "practice") {
    return;
  }

  if (state.mode === "click" && (state.answerLocked || !state.current)) {
    return;
  }

  const item = hitTestMarker(event);
  if (!item) {
    showToast("Klicke auf einen Punkt. Du kannst zoomen, wenn Punkte nah beieinander liegen.");
    return;
  }

  chooseMapItem(item);
}

function chooseMapItem(item) {
  if (state.mode === "practice") {
    if (state.revealedIds.has(item.id)) {
      state.revealedIds.delete(item.id);
    } else {
      state.revealedIds.add(item.id);
    }
    renderAll();
    return;
  }

  finalizeAnswer(item.id === state.current.id ? "correct" : "wrong", { clickedId: item.id });
}

function handleMapMove(event) {
  if (dragState || state.phase !== "quiz" || (state.answerLocked && state.mode !== "practice")) return;
  if (state.mode !== "click" && state.mode !== "practice") return;
  const item = hitTestMarker(event);
  const nextId = item?.id || null;
  if (state.hoveredId !== nextId) {
    state.hoveredId = nextId;
    renderMap();
  }
}

function getProgress() {
  if (state.retryStage) {
    const mastered = state.masteredIds.size;
    const total = state.initialTotal || 1;
    return {
      percent: Math.round((mastered / total) * 100),
      label: `${mastered}/${total} sicher`,
    };
  }

  const total = state.initialTotal || 1;
  const currentNumber = Math.min(state.initialAnswered + (state.answerLocked ? 0 : 1), total);
  return {
    percent: Math.round((state.initialAnswered / total) * 100),
    label: `${currentNumber}/${total}`,
  };
}

function updateModeLabel() {
  if (!data) return;
  if (state.phase === "quiz" && state.mode === "practice") {
    elements.mapModeLabel.textContent = "Frei üben";
    return;
  }
  if (state.phase === "quiz" && state.current) {
    elements.mapModeLabel.textContent = state.mode === "click"
      ? "Punkte anklicken"
      : "Markierten Ort benennen";
    return;
  }
  if (state.phase === "results") {
    elements.mapModeLabel.textContent = "Runde abgeschlossen";
    return;
  }
  elements.mapModeLabel.textContent = "Bereit";
}

function renderMap() {
  if (!data || !projector) return;
  if (!baseRendered) elements.baseLayer.replaceChildren();
  elements.studyLayer.replaceChildren();
  elements.hitLayer.replaceChildren();
  elements.highlightLayer.replaceChildren();

  if (!baseRendered) for (const feature of data.baseMap.features) {
    elements.baseLayer.append(svgElement("path", {
      d: pathForGeometry(feature.geometry),
      class: "base-country",
      "fill-rule": "evenodd",
    }));
  }

  baseRendered = true;

  if (state.phase === "quiz") {
    for (const item of (state.mode === "type" ? selectedItems() : activeMapItems())) {
      renderStudyFeature(item);
    }

    for (const item of activeMapItems()) {
      renderMarker(item);
    }

    const hovered = state.hoveredId ? itemsById.get(state.hoveredId) : null;
    if (state.mode === "practice") {
      for (const item of activeMapItems()) {
        if (state.revealedIds.has(item.id)) {
          renderHighlight(item, "highlight practice-revealed");
          renderMapLabel(item);
        }
      }
      if (hovered && !state.revealedIds.has(hovered.id)) {
        renderHighlight(hovered, "hover-box");
      }
    }

    if (hovered && state.mode === "click" && !state.answerLocked) {
      renderHighlight(hovered, "hover-box");
    }

    if (state.mode === "type" && state.current && !state.answerLocked) {
      renderHighlight(state.current, "highlight");
    }

    if (state.answerLocked && state.current) {
      if (state.clickedId && state.clickedId !== state.current.id) {
        renderHighlight(itemsById.get(state.clickedId), "highlight bad");
      }
      renderHighlight(state.current, state.feedback?.kind === "bad" ? "highlight good" : `highlight ${state.feedback?.kind === "good" ? "good" : ""}`);
      renderMapLabel(state.current);
    }
  }

  applyTransform();
}

function renderLegend() {
  if (!elements.mapLegend || !data || state.phase !== "quiz") {
    if (elements.mapLegend) {
      elements.mapLegend.hidden = true;
      elements.mapLegend.innerHTML = "";
    }
    return;
  }

  const entries = availableTypes()
    .filter((type) => state.selectedTypes.has(type))
    .map((type) => `
      <div class="legend-item">
        ${legendIcon(type)}
        <span>${escapeHtml(data.typeLabels[type])}</span>
      </div>
    `).join("");

  const open = elements.mapLegend.querySelector('details')?.open;
  elements.mapLegend.hidden = false;
  elements.mapLegend.innerHTML = `
    <details ${open ? 'open' : ''}><summary>Legende</summary><div class="legend-list">${entries}</div></details>
  `;
}

function legendIcon(type) {
  const symbol = {
    country: `<circle r="3.7" class="legend-shape"></circle>`,
    city: `<rect x="-4" y="-4" width="8" height="8" rx="1.4" class="legend-shape"></rect>`,
    island: `<path d="M0 -5 L5 3.8 L-5 3.8 Z" class="legend-shape"></path>`,
    region: `<path d="M0 -5.3 L5.3 0 L0 5.3 L-5.3 0 Z" class="legend-shape"></path>`,
    mountain: `<path d="M-6 4.3 L-1.7 -4.7 L1.2 0.2 L3.1 -3.3 L6.2 4.3 Z" class="legend-shape"></path>`,
    water: `<path d="M0 -5.7 C3.5 -1.5 4.9 0.8 4.9 2.8 C4.9 5.4 2.7 6.7 0 6.7 C-2.7 6.7 -4.9 5.4 -4.9 2.8 C-4.9 0.8 -3.5 -1.5 0 -5.7 Z" class="legend-shape"></path>`,
  }[type === "river" ? "water" : type === "peninsula" ? "island" : type] || "";

  return `
    <svg class="legend-icon marker-${type}" viewBox="-11 -11 22 22" aria-hidden="true" focusable="false">
      <circle r="8" class="legend-ring"></circle>
      ${symbol}
    </svg>
  `;
}

function renderMarker(item) {
  const [x, y] = projector.project(item.anchor);
  const showAsCurrent = (item.id === state.current?.id && (state.mode === "type" || state.answerLocked))
    || (state.mode === "practice" && state.revealedIds.has(item.id));
  const classes = [
    "map-marker",
    `marker-${item.type}`,
    showAsCurrent ? "current" : "",
    item.id === state.hoveredId ? "hovered" : "",
  ].filter(Boolean).join(" ");

  const group = svgElement("g", {
    class: classes,
    "data-item-id": item.id,
    transform: `translate(${x.toFixed(2)} ${y.toFixed(2)})`,
    ...(state.mode !== 'type' && !state.answerLocked ? {
      tabindex: '0', role: 'button',
      'aria-label': `Kartenpunkt ${activeMapItems().indexOf(item) + 1}, ${data.typeLabels[item.type]}`,
    } : {}),
  });
  group.append(svgElement("circle", { r: 7.5, class: "marker-ring" }));
  appendMarkerSymbol(group, item.type);
  elements.hitLayer.append(group);
}

function appendMarkerSymbol(group, type) {
  if (type === "peninsula") type = "island";
  if (type === "river") type = "water";
  if (type === "country") {
    group.append(svgElement("circle", { r: 3.5, class: "marker-symbol" }));
    return;
  }

  if (type === "city") {
    group.append(svgElement("rect", {
      x: -3.8,
      y: -3.8,
      width: 7.6,
      height: 7.6,
      rx: 1.4,
      class: "marker-symbol",
    }));
    return;
  }

  if (type === "island") {
    group.append(svgElement("path", {
      d: "M0 -4.8 L4.7 3.7 L-4.7 3.7 Z",
      class: "marker-symbol",
    }));
    return;
  }

  if (type === "region") {
    group.append(svgElement("path", {
      d: "M0 -5.1 L5.1 0 L0 5.1 L-5.1 0 Z",
      class: "marker-symbol",
    }));
    return;
  }

  if (type === "mountain") {
    group.append(svgElement("path", {
      d: "M-5.7 4.2 L-1.6 -4.5 L1.2 0.2 L3 -3.2 L6 4.2 Z",
      class: "marker-symbol",
    }));
    return;
  }

  group.append(svgElement("path", {
    d: "M0 -5.5 C3.4 -1.4 4.7 0.8 4.7 2.7 C4.7 5.3 2.6 6.5 0 6.5 C-2.6 6.5 -4.7 5.3 -4.7 2.7 C-4.7 0.8 -3.4 -1.4 0 -5.5 Z",
    class: "marker-symbol",
  }));
}

function renderStudyFeature(item) {
  if (item.type === "country" || item.type === "city" || item.geometry.type === "Point") {
    return;
  }

  const path = svgElement("path", {
    d: pathForGeometry(item.geometry),
    class: [
      "study-feature",
      `study-${item.type}`,
      item.geometry.type.includes("Line") ? "study-line" : "study-area",
    ].join(" "),
  });

  elements.studyLayer.append(path);
}

function renderHighlight(item, className) {
  if (!item) return;

  if (item.geometry.type === "Point") {
    const [x, y] = projector.project(item.anchor);
    elements.highlightLayer.append(svgElement("circle", {
      cx: x,
      cy: y,
      r: 14,
      class: `${className} highlight-point`,
    }));
    return;
  }

  const path = svgElement("path", {
    d: pathForGeometry(item.geometry),
    class: `${className} ${item.geometry.type.includes("Line") ? "highlight-line" : ""}`,
    "fill-rule": "evenodd",
  });

  if (item.geometry.type.includes("Line")) {
    path.setAttribute("stroke-width", "9");
  }

  elements.highlightLayer.append(path);
}

function renderMapLabel(item) {
  const [x, y] = projector.project(item.anchor);
  const label = svgElement("text", {
    x,
    y: y - 18,
    class: "map-label",
  });
  label.textContent = item.name;
  elements.highlightLayer.append(label);
}

function hitTestMarker(event) {
  const point = clientPointToContentPoint(event.clientX, event.clientY);
  if (!point) return null;

  const ctm = elements.svg.getScreenCTM();
  const screenScale = ctm ? Math.hypot(ctm.a, ctm.b) : 1;
  let nearest = null;
  let nearestDistance = Infinity;
  for (const item of activeMapItems()) {
    const [x, y] = projector.project(item.anchor);
    const distance = Math.hypot((x - point.x) * state.transform.scale, (y - point.y) * state.transform.scale) * screenScale;
    if (distance < nearestDistance) {
      nearest = item;
      nearestDistance = distance;
    }
  }

  return nearestDistance <= MARKER_HIT_RADIUS ? nearest : null;
}

function clientPointToContentPoint(clientX, clientY) {
  const ctm = elements.svg.getScreenCTM();
  if (!ctm) return null;

  const svgPoint = elements.svg.createSVGPoint();
  svgPoint.x = clientX;
  svgPoint.y = clientY;
  const viewPoint = svgPoint.matrixTransform(ctm.inverse());
  return {
    x: (viewPoint.x - state.transform.x) / state.transform.scale,
    y: (viewPoint.y - state.transform.y) / state.transform.scale,
  };
}

function pathForGeometry(geometry) {
  if (!geometry) return "";

  if (geometry.type === "LineString") {
    return pathForLine(geometry.coordinates);
  }

  if (geometry.type === "MultiLineString") {
    return geometry.coordinates.map(pathForLine).join(" ");
  }

  if (geometry.type === "Polygon") {
    return pathForPolygon(geometry.coordinates);
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map(pathForPolygon).join(" ");
  }

  return "";
}

function pathForLine(line) {
  return projectedLinePath(line, projector);
}

function pathForPolygon(rings) {
  return rings.map((ring) => `${pathForLine(ring)} Z`).join(" ");
}

function wireMapControls() {
  elements.svg.addEventListener('keydown', (event) => {
    const marker = event.target.closest('[data-item-id]');
    if (!marker || state.phase !== 'quiz' || state.answerLocked) return;
    const id = marker.dataset.itemId;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      chooseMapItem(itemsById.get(id));
      if (state.mode === 'practice') elements.hitLayer.querySelector(`[data-item-id="${id}"]`)?.focus();
    } else if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      const markers = [...elements.hitLayer.querySelectorAll('[tabindex]')];
      const step = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
      markers[(markers.indexOf(marker) + step + markers.length) % markers.length]?.focus();
    }
  });
  elements.zoomIn.addEventListener("click", () => zoomBy(1.22));
  elements.zoomOut.addEventListener("click", () => zoomBy(0.82));
  elements.zoomReset.addEventListener("click", () => resetZoom());
  elements.svg.addEventListener("click", handleMapClick);
  elements.svg.addEventListener("mousemove", handleMapMove);
  elements.svg.addEventListener("mouseleave", () => {
    if (state.hoveredId) {
      state.hoveredId = null;
      renderMap();
    }
  });

  elements.svg.addEventListener("wheel", (event) => {
    event.preventDefault();
    const factor = event.deltaY < 0 ? 1.08 : 0.92;
    const oldScale = state.transform.scale;
    const newScale = clamp(oldScale * factor, 0.9, 4.5);

    const { x: cx, y: cy } = clientPointToViewPoint(event.clientX, event.clientY);

    state.transform.x = cx - (cx - state.transform.x) * (newScale / oldScale);
    state.transform.y = cy - (cy - state.transform.y) * (newScale / oldScale);
    state.transform.scale = newScale;
    clampTransform();
    applyTransform();
  }, { passive: false });

  function getPinchDistance() {
    const pts = Array.from(activePointers.values());
    const dx = pts[0].clientX - pts[1].clientX;
    const dy = pts[0].clientY - pts[1].clientY;
    return Math.hypot(dx, dy);
  }

  function getPinchCenter() {
    const pts = Array.from(activePointers.values());
    return {
      x: (pts[0].clientX + pts[1].clientX) / 2,
      y: (pts[0].clientY + pts[1].clientY) / 2,
    };
  }

  elements.svg.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    elements.svg.setPointerCapture(event.pointerId);
    activePointers.set(event.pointerId, event);

    if (activePointers.size === 1) {
      dragState = {
        x: event.clientX,
        y: event.clientY,
        startX: state.transform.x,
        startY: state.transform.y,
        moved: false,
      };
      elements.svg.classList.add("dragging");
    } else if (activePointers.size === 2) {
      dragState = null;
      initialPinchDistance = getPinchDistance();
      initialPinchScale = state.transform.scale;
      pinchMoved = false;
    }
  });

  elements.svg.addEventListener("pointermove", (event) => {
    if (!activePointers.has(event.pointerId)) return;
    activePointers.set(event.pointerId, event);

    if (activePointers.size === 2 && initialPinchDistance) {
      const dist = getPinchDistance();
      const scaleDelta = dist / initialPinchDistance;
      const newScale = clamp(initialPinchScale * scaleDelta, 0.9, 4.5);
      if (Math.abs(dist - initialPinchDistance) > 3) {
        pinchMoved = true;
      }
      
      const center = getPinchCenter();
      const { x: cx, y: cy } = clientPointToViewPoint(center.x, center.y);

      const oldScale = state.transform.scale;
      state.transform.x = cx - (cx - state.transform.x) * (newScale / oldScale);
      state.transform.y = cy - (cy - state.transform.y) * (newScale / oldScale);
      state.transform.scale = newScale;
      clampTransform();
      applyTransform();
      return;
    }

    if (activePointers.size === 1 && dragState) {
      const dx = event.clientX - dragState.x;
      const dy = event.clientY - dragState.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) dragState.moved = true;
      if (!dragState.moved) return;

      const ctm = elements.svg.getScreenCTM();
      const scaleX = 1 / ctm.a;
      const scaleY = 1 / ctm.d;

      state.transform.x = dragState.startX + dx * scaleX;
      state.transform.y = dragState.startY + dy * scaleY;
      clampTransform();
      applyTransform();
    }
  });

  function removePointer(event) {
    activePointers.delete(event.pointerId);
    if (activePointers.size < 2) {
      initialPinchDistance = null;
    }
    if (activePointers.size === 0) {
      if ((dragState && dragState.moved) || pinchMoved) {
        suppressNextClick = true;
        setTimeout(() => { suppressNextClick = false; }, 120);
      }
      dragState = null;
      pinchMoved = false;
      elements.svg.classList.remove("dragging");
    } else if (activePointers.size === 1) {
      const ptr = Array.from(activePointers.values())[0];
      dragState = {
        x: ptr.clientX,
        y: ptr.clientY,
        startX: state.transform.x,
        startY: state.transform.y,
        moved: true,
      };
    }
  }

  elements.svg.addEventListener("pointerup", removePointer);
  elements.svg.addEventListener("pointercancel", removePointer);
}

function zoomBy(factor) {
  const oldScale = state.transform.scale;
  const newScale = clamp(oldScale * factor, 0.9, 4.5);
  const cx = MAP_WIDTH / 2;
  const cy = MAP_HEIGHT / 2;

  state.transform.x = cx - (cx - state.transform.x) * (newScale / oldScale);
  state.transform.y = cy - (cy - state.transform.y) * (newScale / oldScale);
  state.transform.scale = newScale;
  clampTransform();
  applyTransform();
}

function resetZoom(shouldRender = true) {
  state.transform = { scale: 1, x: 0, y: 0 };
  applyTransform();
  if (shouldRender) renderMap();
}

function clampTransform() {
  const { scale } = state.transform;
  const [minX, maxX] = panRange(MAP_WIDTH, scale, PAN_MARGIN_X);
  const [minY, maxY] = panRange(MAP_HEIGHT, scale, PAN_MARGIN_Y);
  state.transform.x = clamp(state.transform.x, minX, maxX);
  state.transform.y = clamp(state.transform.y, minY, maxY);
}

function panRange(size, scale, margin) {
  const scaledSize = size * scale;

  if (scaledSize <= size) {
    const centeredOffset = (size - scaledSize) / 2;
    return [centeredOffset - margin, centeredOffset + margin];
  }

  return [size - scaledSize - margin, margin];
}

function applyTransform() {
  const { scale, x, y } = state.transform;
  elements.mapContent.setAttribute("transform", `translate(${x} ${y}) scale(${scale})`);
}

function renderToast() {
  if (state.phase === "quiz" && state.retryStage && !state.answerLocked) {
    showToast("Wiederholung: nur Begriffe, die noch nicht sicher waren.", false);
    return;
  }
  if (!elements.toast.dataset.manual) {
    elements.toast.hidden = true;
  }
}

function showToast(message, temporary = true) {
  elements.toast.hidden = false;
  elements.toast.textContent = message;
  if (temporary) {
    elements.toast.dataset.manual = "1";
    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => {
      delete elements.toast.dataset.manual;
      elements.toast.hidden = true;
    }, 1800);
  } else {
    delete elements.toast.dataset.manual;
  }
}

function renderError(error) {
  elements.panel.innerHTML = `
    <div class="setup-card">
      <div class="setup-title">
        <span>${escapeHtml(config?.title || "Karten-Trainer")}</span>
        <h1>Fehler</h1>
      </div>
      <div class="feedback bad" role="alert">${escapeHtml(error.message)}</div>
      <button class="primary-button" id="retry-load" type="button">Erneut versuchen</button>
    </div>
  `;
  elements.panel.querySelector("#retry-load").addEventListener("click", loadData);
}

function loadTheme() {
  try { return localStorage.getItem('map-trainer-theme') || 'light'; } catch { return 'light'; }
}
function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  try { localStorage.setItem('map-trainer-theme', state.theme); } catch { /* Storage may be blocked. */ }
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
}

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#039;");
}

function availableTypes() { return TYPE_ORDER.filter(type => data?.items.some(item => item.type === type)); }
function sourceDetails() {
  return '<details class="source-details"><summary>Kartendaten & Hinweise</summary><p>Made with Natural Earth. Grenzen und Landschaften dienen der Orientierung.</p>'
    + data.sources.map(source => '<p>' + (source.url ? '<a href="' + escapeAttribute(source.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(source.title) + '</a>' : escapeHtml(source.title)) + '</p>').join('')
    + (data.notes || []).map(note => '<p>' + escapeHtml(note) + '</p>').join('') + '</details>';
}
function clientPointToViewPoint(x, y) {
  const p = elements.svg.createSVGPoint(); p.x = x; p.y = y;
  return p.matrixTransform(elements.svg.getScreenCTM().inverse());
}
