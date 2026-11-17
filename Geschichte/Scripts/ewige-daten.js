const timelineData  = window.subjectData.features.timeline;
const firstYear     = Math.min(...timelineData.dates.map((entry) => entry.year));
const lastYear      = Math.max(...timelineData.dates.map((entry) => entry.year));
const yearSpan      = lastYear - firstYear;
const scaleYears    = [1815, 1871, 1914, 1945, 1989, 2003];
const periodsChart  = document.getElementById("periods-chart");
const datesList     = document.getElementById("dates-list");


//Balken 
periodsChart.innerHTML = `
  <div class="periods-axis">
    ${scaleYears.map((year) => `<span style="--year-position:${((year - firstYear) / yearSpan) * 100}%">${year}</span>`).join("")}
  </div>
  ${timelineData.topics.map((topic) => {
    const left = ((topic.start - firstYear) / yearSpan) * 100;
    const width = ((topic.end - topic.start) / yearSpan) * 100;
    return `
      <div class="period-row">
        <span class="period-name">${topic.name}</span>
        <div class="period-track"><span class="period-bar period-${topic.color}" style="--period-left:${left}%;--period-width:${width}%"></span></div>
        <span class="period-years">${topic.start}–${topic.end}</span>
      </div>
    `;
  }).join("")}
`;

//Daten
datesList.innerHTML = timelineData.dates.map((entry) => `
  <li class="date-entry">
    <span class="timeline-marker"></span>
    <time>${entry.year}</time>
    <details class="timeline-event">
      <summary><span>${entry.event}</span><span class="timeline-toggle">+</span></summary>
      <p>${entry.explanation}</p>
    </details>
  </li>
`).join("");
