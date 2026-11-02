// Lernmodus für die Glossarseiten (Biologie, Geographie):
// Karteikarten, Multiple Choice mit 8 Optionen (beide Richtungen) und Schreibmodus.
(() => {
  // Chemie/Geschichte liefern window.glossaryData.categories,
  // Biologie/Geographie window.historyData.glossary.
  const glossaryData = window.glossaryData?.categories ?? window.historyData?.glossary ?? {};
  const topicNames = Object.keys(glossaryData);
  const glossaryEntries = Object.entries(glossaryData).flatMap(([topic, entries]) =>
    entries.map((entry) => ({ ...entry, topic }))
  );

  const learnView      = document.getElementById("glossary-learn-view");
  const learnModes     = document.getElementById("learn-modes");
  const learnDirection = document.getElementById("learn-direction");
  const learnTopic     = document.getElementById("learn-topic");
  const learnTotal     = document.getElementById("learn-total");
  const learnStage     = document.getElementById("learn-stage");
  const learnActions   = document.getElementById("learn-actions");

  const state = {
    mode: "cards",
    direction: "mixed",
    topic: "all",
    deck: [],
    index: 0,
    entry: null,
    options: [],
    questionDirection: "forward",
    flipped: false,
    answered: false,
    finished: false,
    correct: 0,
    asked: 0,
    picked: -1,
    guess: ""
  };

  learnTopic.insertAdjacentHTML("beforeend", topicNames.map((topic) =>
    `<option value="${topic}">${topic}</option>`
  ).join(""));

  function shuffle(items) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [result[index], result[swap]] = [result[swap], result[index]];
    }
    return result;
  }

  function normalize(text) {
    return text.trim().toLocaleLowerCase("de").replace(/\s+/g, " ");
  }

  function escapeAttr(text) {
    return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function answerVariants(term) {
    return [term, term.split(/[,;(]/)[0].trim()].filter(Boolean);
  }

  function buildOptions(entry, answerKind) {
    const correct = answerKind === "term" ? entry.term : entry.definition;
    const seen = new Set([correct]);
    const options = [correct];
    const sameTopic = shuffle(state.deck.filter((candidate) => candidate !== entry));
    const others = shuffle(glossaryEntries.filter((candidate) =>
      candidate !== entry && !state.deck.includes(candidate)
    ));
    for (const candidate of [...sameTopic, ...others]) {
      const value = answerKind === "term" ? candidate.term : candidate.definition;
      if (seen.has(value)) continue;
      seen.add(value);
      options.push(value);
      if (options.length === 8) break;
    }
    return shuffle(options);
  }

  function buildDeck() {
    state.deck = shuffle(state.topic === "all"
      ? glossaryEntries
      : glossaryEntries.filter((entry) => entry.topic === state.topic));
    state.index = 0;
    state.correct = 0;
    state.asked = 0;
    state.finished = false;
    prepareQuestion();
  }

  function prepareQuestion() {
    state.entry = state.deck[state.index] || null;
    state.options = [];
    state.flipped = false;
    state.answered = false;
    state.picked = -1;
    state.guess = "";
    if (!state.entry || state.mode !== "choice") return;
    state.questionDirection = state.direction === "mixed"
      ? (Math.random() < 0.5 ? "forward" : "backward")
      : state.direction;
    state.options = buildOptions(state.entry, state.questionDirection === "forward" ? "definition" : "term");
  }

  function advance() {
    if (state.index + 1 >= state.deck.length) {
      state.finished = true;
    } else {
      state.index += 1;
      prepareQuestion();
    }
    render();
  }

  function progressText() {
    if (state.mode === "cards") {
      return `KARTE ${Math.min(state.index + 1, state.deck.length)} / ${state.deck.length}`;
    }
    return `FRAGE ${Math.min(state.index + 1, state.deck.length)} / ${state.deck.length} · RICHTIG ${state.correct}`;
  }

  function renderStage() {
    if (!state.deck.length) {
      learnStage.innerHTML = `<p class="empty-state">Keine Begriffe für dieses Thema gefunden.</p>`;
      return;
    }
    if (state.finished) {
      learnStage.innerHTML = `
        <div class="learn-summary">
          <span class="eyebrow dark-eyebrow">ABGESCHLOSSEN</span>
          <h2>${state.correct} von ${state.asked} richtig</h2>
          <p>Alle ${state.deck.length} Begriffe aus ${state.topic === "all" ? "allen Themen" : state.topic} wurden abgefragt.</p>
        </div>`;
      return;
    }
    if (state.mode === "cards") {
      learnStage.innerHTML = `
        <div class="learn-card${state.flipped ? " is-flipped" : ""}" data-action="flip" role="button" tabindex="0" aria-label="Karte umdrehen">
          <div class="learn-card-inner">
            <div class="learn-card-face learn-card-front">
              <span class="eyebrow dark-eyebrow">${state.entry.topic}</span>
              <strong class="learn-card-term">${state.entry.term}</strong>
              <span class="learn-card-hint">Tippen zum Umdrehen</span>
            </div>
            <div class="learn-card-face learn-card-back">
              <span class="eyebrow dark-eyebrow">DEFINITION</span>
              <p class="learn-card-definition">${state.entry.definition}</p>
              <span class="learn-card-hint">Tippen zum Umdrehen</span>
            </div>
          </div>
        </div>`;
      return;
    }
    if (state.mode === "choice") {
      const forward = state.questionDirection === "forward";
      const prompt = forward ? state.entry.term : state.entry.definition;
      const correctAnswer = forward ? state.entry.definition : state.entry.term;
      learnStage.innerHTML = `
        <div class="learn-prompt">
          <span class="eyebrow dark-eyebrow">${forward ? "BEGRIFF → DEFINITION" : "DEFINITION → BEGRIFF"}</span>
          <p class="learn-prompt-text">${prompt}</p>
        </div>
        <div class="learn-options">
          ${state.options.map((option, optionIndex) => {
            let extraClass = "";
            if (state.answered) {
              if (option === correctAnswer) extraClass = " is-correct";
              else if (optionIndex === state.picked) extraClass = " is-wrong";
            }
            return `<button class="learn-option${extraClass}" type="button" data-action="pick" data-index="${optionIndex}"${state.answered ? " disabled" : ""}>${option}</button>`;
          }).join("")}
        </div>`;
      return;
    }
    const guessed = answerVariants(state.entry.term).some((variant) => normalize(variant) === normalize(state.guess || ""));
    learnStage.innerHTML = `
      <div class="learn-prompt">
        <span class="eyebrow dark-eyebrow">DEFINITION → BEGRIFF</span>
        <p class="learn-prompt-text">${state.entry.definition}</p>
      </div>
      <div class="learn-write" id="learn-write">
        <input class="field-control" id="learn-answer" type="text" placeholder="Begriff eingeben …" autocomplete="off" value="${escapeAttr(state.answered ? state.guess : "")}">
        ${state.answered ? `
          <p class="learn-feedback ${guessed ? "is-correct" : "is-wrong"}">
            ${guessed ? "Richtig!" : `Leider falsch. Richtig wäre: <strong>${state.entry.term}</strong>`}
          </p>` : ""}
      </div>`;
  }

  function renderActions() {
    if (!state.deck.length) {
      learnActions.innerHTML = "";
      learnTotal.textContent = "0 BEGRIFFE";
      return;
    }
    learnTotal.textContent = `${state.deck.length} ${state.deck.length === 1 ? "BEGRIFF" : "BEGRIFFE"}`;
    if (state.finished) {
      learnActions.innerHTML = `
        <button class="learn-action" type="button" data-action="restart">Neu starten</button>`;
      return;
    }
    if (state.mode === "cards") {
      learnActions.innerHTML = `
        <button class="learn-action" type="button" data-action="prev"${state.index === 0 ? " disabled" : ""}>Zurück</button>
        <button class="learn-action" type="button" data-action="flip">Umdrehen</button>
        <button class="learn-action" type="button" data-action="next">${state.index + 1 >= state.deck.length ? "Fertig" : "Weiter"}</button>
        <button class="learn-action" type="button" data-action="shuffle">Mischen</button>
        <span class="learn-progress">${progressText()}</span>`;
      return;
    }
    const showNext = state.mode === "write" || state.answered;
    learnActions.innerHTML = `
      <button class="learn-action" type="button" data-action="prev"${state.index === 0 ? " disabled" : ""}>Zurück</button>
      ${state.mode === "write" && !state.answered ? `<button class="learn-action" type="button" data-action="check">Prüfen</button>` : ""}
      <button class="learn-action" type="button" data-action="next"${showNext ? "" : " disabled"}>${state.index + 1 >= state.deck.length ? "Fertig" : "Weiter"}</button>
      <button class="learn-action" type="button" data-action="shuffle">Mischen</button>
      <span class="learn-progress">${progressText()}</span>`;
  }

  function render() {
    learnDirection.hidden = state.mode !== "choice";
    renderStage();
    renderActions();
  }

  function setActive(group, button) {
    group.querySelectorAll("button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }

  function checkAnswer() {
    const input = document.getElementById("learn-answer");
    state.guess = input ? input.value : "";
    if (!state.guess.trim()) return;
    state.asked += 1;
    const correct = answerVariants(state.entry.term).some((variant) => normalize(variant) === normalize(state.guess));
    if (correct) state.correct += 1;
    state.answered = true;
    render();
  }

  function handleAction(event) {
    const target = event.target.closest("[data-action]");
    if (!target || !learnView.contains(target)) return;
    const action = target.dataset.action;

    if (action === "flip") {
      state.flipped = !state.flipped;
      render();
    } else if (action === "prev") {
      if (state.index > 0) {
        state.index -= 1;
        prepareQuestion();
        render();
      }
    } else if (action === "next") {
      if (state.mode === "choice" && !state.answered) return;
      advance();
    } else if (action === "shuffle") {
      state.deck = shuffle(state.deck);
      state.index = 0;
      state.correct = 0;
      state.asked = 0;
      state.finished = false;
      prepareQuestion();
      render();
    } else if (action === "restart") {
      buildDeck();
      render();
    } else if (action === "pick") {
      if (state.answered) return;
      state.picked = Number(target.dataset.index);
      const forward = state.questionDirection === "forward";
      const correctAnswer = forward ? state.entry.definition : state.entry.term;
      state.asked += 1;
      if (state.options[state.picked] === correctAnswer) state.correct += 1;
      state.answered = true;
      render();
    } else if (action === "check") {
      checkAnswer();
    }
  }

  learnModes.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) return;
    state.mode = button.dataset.mode;
    setActive(learnModes, button);
    buildDeck();
    render();
  });

  learnDirection.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-direction]");
    if (!button) return;
    state.direction = button.dataset.direction;
    setActive(learnDirection, button);
    buildDeck();
    render();
  });

  learnTopic.addEventListener("change", () => {
    state.topic = learnTopic.value;
    buildDeck();
    render();
  });

  learnStage.addEventListener("click", handleAction);
  learnActions.addEventListener("click", handleAction);
  learnStage.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".learn-card");
    if (!card) return;
    event.preventDefault();
    state.flipped = !state.flipped;
    render();
  });
  learnStage.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || !event.target.matches("#learn-answer")) return;
    event.preventDefault();
    if (state.answered) advance();
    else checkAnswer();
  });

  buildDeck();
  render();
})();
