const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

function getQuestionPool(questionType, selectedTopics) {
  return selectedTopics.flatMap((topic) =>
    (window.historyData.topicQuestions[topic.id]?.[questionType.id] ?? []).map((question) => ({
      ...question,
      topic: topic.name,
      part: questionType.part,
      typeName: questionType.name
    }))
  );
}

function getQuestionAvailability(questionType, selectedTopics) {
  return getQuestionPool(questionType, selectedTopics).length;
}

function updateQuestionPlaceholders() {
  const selectedTopics = getSelectedTopics();
  const placeholderContainer = document.getElementById("question-type-placeholders");
  const submitButton = document.querySelector("#simulator-form button[type='submit']");
  const selectionError = document.getElementById("topic-selection-error");
  const hasSelection = selectedTopics.length > 0;
  const missingTypes = window.historyData.examParts.flatMap((part) =>
    part.questionTypes.flatMap((questionType) => {
      const available = getQuestionAvailability({ ...questionType, part: part.name }, selectedTopics);
      return available < questionType.count ? [`${questionType.name} (${available}/${questionType.count})`] : [];
    })
  );
  const canGenerate = hasSelection && missingTypes.length === 0;

  placeholderContainer.innerHTML = window.historyData.examParts.map((part) => `
    <section class="exam-part-placeholder">
      <h4>${escapeHtml(part.name)}</h4>
      <ul>
        ${part.questionTypes.map((questionType) => {
          const available = getQuestionAvailability({ ...questionType, part: part.name }, selectedTopics);
          const status = `${questionType.count} benötigt · ${available} verfügbar`;
          return `<li><span>${escapeHtml(questionType.name)}</span><span>${escapeHtml(status)}</span></li>`;
        }).join("")}
      </ul>
    </section>
  `).join("");
  submitButton.disabled = !canGenerate;

  if (!hasSelection) {
    selectionError.textContent = "Wähle mindestens ein Thema aus.";
  } else if (!canGenerate) {
    selectionError.textContent = `Für die gewünschte Prüfungsgrösse fehlen noch Fragen bei: ${missingTypes.join(", ")}.`;
  } else {
    selectionError.textContent = "";
  }
}

function populateTopics() {
  const options = document.getElementById("topic-options");
  options.innerHTML = window.historyData.topics.map((topic) =>
    `<label class="topic-option"><input type="checkbox" name="topics" value="${escapeHtml(topic.id)}" checked><span>${escapeHtml(topic.id.replace("topic-", ""))}. ${escapeHtml(topic.name)}</span></label>`
  ).join("");
  updateQuestionPlaceholders();
}

function getSelectedTopics() {
  const selectedIds = new Set(
    [...document.querySelectorAll("#topic-options input:checked")].map((checkbox) => checkbox.value)
  );
  return window.historyData.topics.filter((topic) => selectedIds.has(topic.id));
}

function chooseQuestions(selectedTopics) {
  return window.historyData.examParts.flatMap((part) =>
    part.questionTypes.flatMap((questionType) => {
      const questionPool = getQuestionPool({ ...questionType, part: part.name }, selectedTopics);
      for (let index = questionPool.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [questionPool[index], questionPool[swapIndex]] = [questionPool[swapIndex], questionPool[index]];
      }
      return questionPool.slice(0, questionType.count);
    })
  );
}

function renderExam(questions, selectedTopics) {
  const result = document.getElementById("exam-result");
  const topicName = selectedTopics.length === window.historyData.topics.length
    ? "Alle Themen"
    : selectedTopics.map((topic) => topic.name).join(", ");
  result.innerHTML = `
    <div class="exam-heading">
      <div><span class="eyebrow dark-eyebrow">DEIN ÜBUNGSBLATT IST BEREIT</span><h2>Geschichtsprüfung erstellt</h2><p>${escapeHtml(topicName)} <span>·</span> alle drei Teile</p></div>
      <div class="exam-actions"><button class="button button-outline" type="button" id="download-word">Word herunterladen</button><button class="button button-primary" type="button" id="download-pdf">PDF herunterladen</button></div>
    </div>
    <p class="exam-disclaimer">Lade die Prüfung als Word-Dokument oder PDF herunter, um die Fragen anzusehen.</p>
  `;
  result.hidden = false;
  document.getElementById("download-word").addEventListener("click", () => downloadWord(questions, topicName));
  document.getElementById("download-pdf").addEventListener("click", () => downloadPdf(questions, topicName));
}

function saveBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

function downloadWord(questions, topicName) {
  let currentPart = "";
  let questionNumber = 0;
  let index = 0;
  const rows = [];

  while (index < questions.length) {
    const question = questions[index];
    if (question.part !== currentPart) {
      rows.push(`<h2>${escapeHtml(question.part)}</h2>`);
      currentPart = question.part;
    }

    if (question.typeName === "Begriff erklären") {
      const terms = [];
      while (index < questions.length
        && questions[index].part === currentPart
        && questions[index].typeName === "Begriff erklären") {
        terms.push(questions[index]);
        index += 1;
      }

      questionNumber += 1;
      rows.push(`<span>${questionNumber}) Erklären Sie in <b>maximal 2 Sätzen:</b></span><br>`);
      rows.push(`<table style="width: 100%; border-collapse: collapse; border-spacing: 0; mso-cellspacing: 0; margin: 0 0 12pt 0.2in;"><tbody>`);
      terms.forEach((term, termIndex) => {
        const label = String.fromCharCode(97 + termIndex);
        rows.push(`<tr>
          <td style="padding: 0; margin: 0; line-height: 12pt; mso-line-height-rule: exactly; vertical-align: top;">${label}) ... den Begriff &quot;${escapeHtml(term.term ?? term.text)}&quot;</td>
          <td style="width: 1in; padding: 0; margin: 0; line-height: 12pt; mso-line-height-rule: exactly; text-align: right; vertical-align: top; white-space: nowrap;">(1 Punkt)</td>
        </tr>`);
      });
      rows.push(`</tbody></table><br><br>`);
      continue;
    }

    if (question.typeName === "Wahr / falsch") {
      const statements = [];
      while (index < questions.length
        && questions[index].part === currentPart
        && questions[index].typeName === "Wahr / falsch") {
        statements.push(questions[index]);
        index += 1;
      }

      rows.push(`<table style="width: 100%; border-collapse: collapse; margin: 0;">
        <tr>
          <td style="padding: 0; vertical-align: top;">${questionNumber + 1}) Sind die Aussagen richtig (R) oder falsch (F)?</td>
          <td style="width: 1in; padding: 0; text-align: right; vertical-align: top; white-space: nowrap;">(2 Punkte)</td>
        </tr>
        <tr><td colspan="2" style="padding: 0; vertical-align: top;"><b>&rarr; Pro falsche Aussage wird ein 1/2 Punkt abgezogen.</b></td></tr>
      </table>
      <br>
        <table style="width: 100%; border-collapse: collapse; margin: 8pt 0 8pt;">
          <tbody>${statements.map((statement) => {
            const text = statement.text.replace(/^Entscheide, ob die Aussage wahr oder falsch ist:\s*/i, "");
            return `<tr>
              <td style="width: 0.7in; height: 0.3in; border: 1px solid black; padding: 0;">&nbsp;</td>
              <td style="height: 0.3in; border: 1px solid black; padding: 1pt 3pt; vertical-align: middle;">${escapeHtml(text)}</td>
            </tr>`;
          }).join("")}</tbody>
        </table>`);
      questionNumber += 1;
      continue;
    }

    questionNumber += 1;
    const points = question.typeName === "Verständnisfrage" ? 3
      : question.typeName === "Analyse" ? 5
      : 0;
    rows.push(`<table style="width: 100%; border-collapse: collapse; margin: 0;">
        <tr>
          <td style="padding: 0; vertical-align: top;">${questionNumber}) ${escapeHtml(question.text)}</td>
          <td style="width: 1in; padding: 0; text-align: right; vertical-align: top; white-space: nowrap;">${points ? `(${points} Punkte)` : ""}</td>
        </tr>
      </table>
      <p style="margin-bottom: 36pt">&nbsp;</p>`);
    index += 1;
  }


  const content = `<!doctype html><html><head><meta charset="utf-8"><title>Geschichtsprüfung</title>
    <style>
      body, p, h1, h2, strong, b { font-family: Aptos, Arial, sans-serif; }
      @page Section1 {
        size: 595.3pt 841.9pt;
        margin: 56pt 50pt 50pt 50pt;
        mso-header-margin: 18pt;
      }
      div.Section1 { page: Section1; }
      p.MsoHeader { margin: 0; text-align: right; font: 9pt Aptos, Arial, sans-serif; }
    </style>
    </head><body style="font-family: Aptos, Arial, sans-serif;"><div class="Section1">
    <div style="mso-element: header;" id="word-header">
      <p class="MsoHeader" style="border-right: 1px solid black; padding-right: 12pt;">
        KSL, sco<br><b>Vorbereitungsprüfung Geschichte<br>M6a</b>
      </p>
    </div>
    <h1 style="margin: 0; font-size: 19pt;">${escapeHtml(topicName)}</h1>
    <br><br>
    <table style="width: 100%; border-collapse: collapse; margin: 0 0 16pt; padding: 10pt 0;">
      <tr>
        <td style="width: 54%; padding: 3pt 0; vertical-align: top;">
          Name: _________________
        </td>
        <td style="width: 46%; padding: 0; vertical-align: top;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10pt 0; vertical-align: top;">Maximale Punktzahl:</td><td style="padding: 3pt 0; vertical-align: top; text-align: right;">18 Punkte</td></tr>
            <tr><td style="padding: 10pt 0; vertical-align: top;">Erreichte Punktzahl:</td><td style="padding: 3pt 0; vertical-align: top; text-align: right;">__________</td></tr>
            <tr><td style="padding: 10pt 0; vertical-align: top;"><b>Note:</b></td><td style="padding: 3pt 0; vertical-align: top; text-align: right;"><b>__________</b></td></tr>
          </table>
        </td>
      </tr>
    </table>
    <p style="margin: 12pt 0 18pt; border: 2px solid black; padding: 6pt;">
      <b>Schreiben Sie ganze Sätze.</b> Vereinzelte Wörter ohne Sinnzusammenhang werden nicht in die Bewertung miteinbezogen. <b>Viel Erfolg!</b>
    </p>
    ${rows.join("")}
  </div></body></html>`;
  const blob = new Blob(["\ufeff", content], { type: "application/msword;charset=utf-8" });
  saveBlob(blob, "geschichtspruefung.doc");
}

const winAnsiSpecialCharacters = {
  "€": 0x80,
  "‚": 0x82,
  "ƒ": 0x83,
  "„": 0x84,
  "…": 0x85,
  "†": 0x86,
  "‡": 0x87,
  "ˆ": 0x88,
  "‰": 0x89,
  "Š": 0x8a,
  "‹": 0x8b,
  "Œ": 0x8c,
  "Ž": 0x8e,
  "‘": 0x91,
  "’": 0x92,
  "“": 0x93,
  "”": 0x94,
  "•": 0x95,
  "–": 0x96,
  "—": 0x97,
  "™": 0x99,
  "š": 0x9a,
  "›": 0x9b,
  "œ": 0x9c,
  "ž": 0x9e,
  "Ÿ": 0x9f
};

function toWinAnsi(text) {
  return Array.from(text, (character) => {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 0xff) return String.fromCharCode(codePoint);
    if (Object.hasOwn(winAnsiSpecialCharacters, character)) {
      return String.fromCharCode(winAnsiSpecialCharacters[character]);
    }
    return "?";
  }).join("");
}

function escapePdfText(text) {
  return toWinAnsi(text).replace(/[\\()]/g, "\\$&");
}

function wrapPdfText(text, maxCharacters) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length > maxCharacters && line) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function buildExamPdf(questions, topicName) {
  const pages = [[]];
  let y = 752;
  const addText = (font, size, x, text, position = y) => {
    pages[pages.length - 1].push(`BT /${font} ${size} Tf ${x} ${position} Td (${escapePdfText(text)}) Tj ET`);
  };
  const addLine = (x1, y1, x2, y2, width = 0.65) => {
    pages[pages.length - 1].push(`${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
  };
  const addRect = (x, bottom, width, height, lineWidth = 0.8) => {
    pages[pages.length - 1].push(`${lineWidth} w ${x} ${bottom} ${width} ${height} re S`);
  };
  const addRepeatedHeader = () => {
    addText("F1", 9, 453, "KSL, sco", 814);
    addText("F2", 9, 388, "Vorbereitungsprüfung Geschichte", 802);
    addText("F2", 9, 518, "M6a", 790);
    addLine(543, 786, 543, 819, 0.8);
  };
  const startPage = () => {
    pages.push([]);
    y = 752;
    addRepeatedHeader();
  };
  const ensureSpace = (height, part = "") => {
    if (y - height < 55) {
      startPage();
      if (part && part === currentPart) {
        addText("F2", 13, 52, part);
        y -= 24;
      }
    }
  };
  const addWrapped = (font, size, x, text, maxCharacters, lineHeight) => {
    const lines = wrapPdfText(text, maxCharacters);
    lines.forEach((line) => {
      addText(font, size, x, line);
      y -= lineHeight;
    });
    return lines.length;
  };

  addRepeatedHeader();
  addText("F2", 19, 52, topicName, 747);
  y = 716;

  addText("F1", 10, 52, "Name:");
  addLine(86, 711, 300, 711);
  addText("F1", 10, 322, "Maximale Punktzahl:");
  addText("F1", 10, 497, "18 Punkte");
  y -= 17;
  addText("F1", 10, 322, "Erreichte Punktzahl:");
  addLine(444, 696, 543, 696);
  y -= 17;
  addText("F2", 10, 322, "Note:");
  addLine(444, 679, 543, 679);
  y -= 14;

  addRect(52, y - 40, 491, 40);
  addText("F2", 9, 60, "Schreiben Sie ganze Sätze.", y - 14);
  addText("F1", 9, 60, "Vereinzelte Wörter ohne Sinnzusammenhang werden nicht in die Bewertung", y - 25);
  addText("F1", 9, 60, "miteinbezogen. Viel Erfolg!", y - 34);
  y -= 60;

  let currentPart = "";
  let questionNumber = 0;
  let index = 0;
  while (index < questions.length) {
    const question = questions[index];
    if (question.part !== currentPart) {
      ensureSpace(150);
      addText("F2", 13, 52, question.part);
      y -= 24;
      currentPart = question.part;
    }

    if (question.typeName === "Begriff erklären") {
      const terms = [];
      while (index < questions.length
        && questions[index].part === currentPart
        && questions[index].typeName === "Begriff erklären") {
        terms.push(questions[index]);
        index += 1;
      }

      ensureSpace(90, currentPart);
      questionNumber += 1;
      addWrapped("F1", 11, 52, `${questionNumber}) Erklären Sie in maximal 2 Sätzen:`, 75, 15);
      y -= 2;
      terms.forEach((term, termIndex) => {
        const label = String.fromCharCode(97 + termIndex);
        const termText = `${label}) ... den Begriff "${term.term ?? term.text}"`;
        addText("F1", 11, 66, termText);
        addText("F1", 9, 500, "(1 Punkt)");
        y -= 14;
      });
      y -= 30;
      continue;
    }

    if (question.typeName === "Wahr / falsch") {
      const statements = [];
      while (index < questions.length
        && questions[index].part === currentPart
        && questions[index].typeName === "Wahr / falsch") {
        statements.push(questions[index]);
        index += 1;
      }

      ensureSpace(130, currentPart);
      questionNumber += 1;
      addText("F1", 11, 52, `${questionNumber}) Sind die Aussagen richtig (R) oder falsch (F)?`);
      addText("F1", 9, 473, "(2 Punkte)");
      y -= 16;
      addText("F2", 9, 52, "-> Pro falsche Aussage wird ein 1/2 Punkt abgezogen.");
      y -= 19;

      for (const statement of statements) {
        const text = statement.text.replace(/^Entscheide, ob die Aussage wahr oder falsch ist:\s*/i, "");
        const lines = wrapPdfText(text, 68);
        const rowHeight = Math.max(22, lines.length * 11 + 8);
        ensureSpace(rowHeight + 4, currentPart);
        addRect(52, y - rowHeight, 42, rowHeight, 0.65);
        addRect(94, y - rowHeight, 449, rowHeight, 0.65);
        lines.forEach((line, lineIndex) => addText("F1", 9, 101, line, y - 13 - lineIndex * 11));
        y -= rowHeight;
      }
      y -= 23;
      continue;
    }

    questionNumber += 1;
    const points = question.typeName === "Verständnisfrage" ? 3
      : question.typeName === "Analyse" ? 5
      : 0;
    const questionLines = wrapPdfText(`${questionNumber}) ${question.text}`, 75);
    const questionHeight = questionLines.length * 14 + (question.typeName === "Analyse" ? 85 : 55);
    ensureSpace(questionHeight, currentPart);
    questionLines.forEach((line, lineIndex) => {
      addText("F1", 11, 52, line, y - lineIndex * 14);
    });
    addText("F1", 9, 493, `(${points} Punkte)`, y);
    y -= questionLines.length * 14 + 8;
    y -= question.typeName === "Analyse" ? 85 : 55;
    index += 1;
  }

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pages.map((_, index) => `${6 + index * 2} 0 R`).join(" ")}] /Count ${pages.length} >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"
  ];

  pages.forEach((commands, index) => {
    const content = commands.join("\n");
    const contentObjectId = 5 + index * 2;
    const pageObjectId = contentObjectId + 1;
    objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjectId} 0 R >>`);
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const crossReferenceOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${crossReferenceOffset}\n%%EOF`;

  const bytes = Uint8Array.from(pdf, (character) => character.charCodeAt(0));
  return new Blob([bytes], { type: "application/pdf" });
}

function downloadPdf(questions, topicName) {
  saveBlob(buildExamPdf(questions, topicName), "geschichtspruefung.pdf");
}

document.getElementById("simulator-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedTopics = getSelectedTopics();
  const allTypesAvailable = window.historyData.examParts.every((part) =>
    part.questionTypes.every((questionType) =>
      getQuestionAvailability({ ...questionType, part: part.name }, selectedTopics) >= questionType.count
    )
  );
  if (!selectedTopics.length || !allTypesAvailable) {
    updateQuestionPlaceholders();
    return;
  }
  const questions = chooseQuestions(selectedTopics);
  renderExam(questions, selectedTopics);
});
document.getElementById("topic-options").addEventListener("change", updateQuestionPlaceholders);
populateTopics();
