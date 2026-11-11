(function () {
  const molecules = [
    {
      id: "water",
      name: "Wasser",
      formula: "H₂O",
      shape: "gewinkelt",
      geometry: "Gewinkelt",
      angle: "ca. 104,5°",
      dipole: "Ja",
      explanation: "Die polaren O–H-Bindungen sind gewinkelt angeordnet. Ihre Ladungsschwerpunkte heben sich deshalb nicht auf.",
      atoms: [
        { element: "O", x: 0, y: 0, z: 0 },
        { element: "H", x: -0.79, y: 0, z: 0.61 },
        { element: "H", x: 0.79, y: 0, z: 0.61 }
      ],
      bonds: [{ from: 0, to: 1 }, { from: 0, to: 2 }],
      lonePairs: [
        { atom: 0, direction: { x: 0, y: 0.8, z: -0.6 } },
        { atom: 0, direction: { x: 0, y: -0.8, z: -0.6 } }
      ]
    },
    {
      id: "carbon-dioxide",
      name: "Kohlenstoffdioxid",
      formula: "CO₂",
      shape: "linear",
      geometry: "Linear",
      angle: "180°",
      dipole: "Nein",
      explanation: "Die beiden polaren C=O-Bindungen liegen einander gegenüber. Ihre Wirkungen heben sich auf.",
      atoms: [
        { element: "C", x: 0, y: 0, z: 0 },
        { element: "O", x: -1.15, y: 0, z: 0 },
        { element: "O", x: 1.15, y: 0, z: 0 }
      ],
      bonds: [{ from: 0, to: 1, order: 2 }, { from: 0, to: 2, order: 2 }],
      lonePairs: [
        { atom: 1, direction: { x: -0.5, y: 0.866, z: 0 } },
        { atom: 1, direction: { x: -0.5, y: -0.866, z: 0 } },
        { atom: 2, direction: { x: 0.5, y: 0.866, z: 0 } },
        { atom: 2, direction: { x: 0.5, y: -0.866, z: 0 } }
      ]
    },
    {
      id: "ammonia",
      name: "Ammoniak",
      formula: "NH₃",
      shape: "pyramidenförmig",
      geometry: "Trigonal-pyramidal",
      angle: "ca. 107°",
      dipole: "Ja",
      explanation: "Die drei N–H-Bindungen bilden eine Pyramidenform. Die Bindungspolaritäten heben sich nicht vollständig auf.",
      atoms: [
        { element: "N", x: 0, y: 0.15, z: 0 },
        { element: "H", x: 0.93, y: -0.2, z: 0 },
        { element: "H", x: -0.465, y: -0.2, z: 0.805 },
        { element: "H", x: -0.465, y: -0.2, z: -0.805 }
      ],
      bonds: [{ from: 0, to: 1 }, { from: 0, to: 2, stereo: "wedge" }, { from: 0, to: 3 }],
      lonePairs: [{ atom: 0, direction: { x: 0, y: 1, z: 0 } }]
    },
    {
      id: "methane",
      name: "Methan",
      formula: "CH₄",
      shape: "tetraedrisch",
      geometry: "Tetraedrisch",
      angle: "ca. 109,5°",
      dipole: "Nein",
      explanation: "Die vier C–H-Bindungen sind tetraedrisch und symmetrisch angeordnet. Ihre Wirkungen heben sich auf.",
      atoms: [
        { element: "C", x: 0, y: 0, z: 0 },
        { element: "H", x: 0.7, y: 0.7, z: 0.7 },
        { element: "H", x: 0.7, y: -0.7, z: -0.7 },
        { element: "H", x: -0.7, y: 0.7, z: -0.7 },
        { element: "H", x: -0.7, y: -0.7, z: 0.7 }
      ],
      bonds: [
        { from: 0, to: 1, stereo: "wedge" },
        { from: 0, to: 2, stereo: "dash" },
        { from: 0, to: 3 },
        { from: 0, to: 4 }
      ],
      lonePairs: []
    },
    {
      id: "formaldehyde",
      name: "Methanal",
      formula: "CH₂O",
      shape: "planar",
      geometry: "Planar",
      angle: "ca. 120°",
      dipole: "Ja",
      explanation: "Die Atome liegen in einer Ebene. Durch die polare C=O-Bindung ist das Molekül ein Dipol.",
      atoms: [
        { element: "C", x: 0, y: 0, z: 0 },
        { element: "O", x: 1.05, y: 0, z: 0 },
        { element: "H", x: -0.52, y: 0.9, z: 0 },
        { element: "H", x: -0.52, y: -0.9, z: 0 }
      ],
      bonds: [{ from: 0, to: 1, order: 2 }, { from: 0, to: 2 }, { from: 0, to: 3 }],
      lonePairs: [
        { atom: 1, direction: { x: 0.5, y: 0.866, z: 0 } },
        { atom: 1, direction: { x: 0.5, y: -0.866, z: 0 } }
      ]
    },
    {
      id: "propane",
      name: "Propan",
      formula: "C₃H₈",
      shape: "gewinkelt",
      geometry: "Tetraedrisch an den C-Atomen",
      angle: "ca. 112°",
      dipole: "Nein",
      explanation: "Die drei C-Atome bilden eine gewinkelte Kette. In der Skelettformel werden die C-Atome und die daran gebundenen H-Atome nicht beschriftet.",
      atoms: [
        { element: "C", x: -0.829, y: -0.559, z: 0 },
        { element: "C", x: 0, y: 0, z: 0 },
        { element: "C", x: 0.829, y: -0.559, z: 0 },
        { element: "H", x: -1.632, y: 0.036, z: 0 },
        { element: "H", x: -0.842, y: -1.136, z: 0.816 },
        { element: "H", x: -0.842, y: -1.136, z: -0.816 },
        { element: "H", x: 0, y: 0.577, z: 0.816 },
        { element: "H", x: 0, y: 0.577, z: -0.816 },
        { element: "H", x: 1.632, y: 0.036, z: 0 },
        { element: "H", x: 0.842, y: -1.136, z: 0.816 },
        { element: "H", x: 0.842, y: -1.136, z: -0.816 }
      ],
      bonds: [
        { from: 0, to: 1 }, { from: 1, to: 2 },
        { from: 0, to: 3, stereo: "wedge" }, { from: 0, to: 4, stereo: "dash" }, { from: 0, to: 5 },
        { from: 1, to: 6, stereo: "wedge" }, { from: 1, to: 7, stereo: "dash" },
        { from: 2, to: 8, stereo: "wedge" }, { from: 2, to: 9, stereo: "dash" }, { from: 2, to: 10 }
      ],
      lonePairs: []
    },
    {
      id: "butan-2-ol",
      name: "Butan-2-ol",
      formula: "C₄H₁₀O",
      shape: "räumlich",
      geometry: "Tetraedrisch am C-2",
      angle: "ca. 109,5°",
      dipole: "Ja",
      explanation: "Am C-2 sind vier unterschiedliche Gruppen gebunden. Der ausgefüllte Keil zeigt die OH-Gruppe nach vorn, der gestrichelte Keil das H nach hinten.",
      atoms: [
        { element: "C", x: 0, y: 0, z: 0 },
        { element: "O", x: -0.577, y: 0.577, z: 0.577 },
        { element: "H", x: 0, y: 1.154, z: 1.154 },
        { element: "C", x: -0.577, y: -0.577, z: -0.577 },
        { element: "H", x: 0, y: -1.154, z: -1.154 },
        { element: "H", x: -1.154, y: 0, z: -1.154 },
        { element: "H", x: -1.154, y: -1.154, z: 0 },
        { element: "C", x: 0.577, y: -0.577, z: 0.577 },
        { element: "H", x: 1.154, y: 0, z: 1.154 },
        { element: "H", x: 0, y: -1.154, z: 1.154 },
        { element: "C", x: 1.154, y: -1.154, z: 0 },
        { element: "H", x: 1.731, y: -0.577, z: -0.577 },
        { element: "H", x: 0.577, y: -1.731, z: -0.577 },
        { element: "H", x: 1.731, y: -1.731, z: 0.577 },
        { element: "H", x: 0.577, y: 0.577, z: -0.577 }
      ],
      bonds: [
        { from: 0, to: 1, stereo: "wedge" }, { from: 1, to: 2 },
        { from: 0, to: 3 }, { from: 3, to: 4 }, { from: 3, to: 5 }, { from: 3, to: 6 },
        { from: 0, to: 7 }, { from: 7, to: 8 }, { from: 7, to: 9 },
        { from: 7, to: 10 }, { from: 10, to: 11 }, { from: 10, to: 12 }, { from: 10, to: 13 },
        { from: 0, to: 14, stereo: "dash" }
      ],
      lonePairs: [
        { atom: 1, direction: { x: -0.577, y: 0.577, z: -0.577 } },
        { atom: 1, direction: { x: -0.577, y: -0.577, z: 0.577 } }
      ]
    }
  ];

  const elements = window.periodicElements;

  const svgNamespace = "http://www.w3.org/2000/svg";
  const maximumModelScale = 150;
  let modelScale = maximumModelScale;
  const SIMULATION_PREFERENCES_KEY = "chemie-simulation-preferences";
  const select = document.getElementById("molecule-select");
  const moleculeView = document.getElementById("molecule-view");
  const atomView = document.getElementById("atom-view");
  const equilibriumView = document.getElementById("equilibrium-view");
  const moleculeMode = document.getElementById("molecule-mode");
  const atomMode = document.getElementById("atom-mode");
  const equilibriumMode = document.getElementById("equilibrium-mode");
  const conversionMode = document.getElementById("conversion-mode");
  const conversionView = document.getElementById("conversion-view");
  const bohrRepresentation = document.getElementById("bohr-representation");
  const coreRepresentation = document.getElementById("core-representation");
  const canvas = document.getElementById("molecule-canvas");
  const structure = document.getElementById("molecule-structure");
  const moleculeInstructions = document.getElementById("molecule-instructions");
  const moleculeNote = document.getElementById("molecule-note");
  const moleculeLegend = document.querySelector(".molecule-legend");
  const electronToggle = document.getElementById("electron-toggle");
  const moleculeRepresentations = {
    ballStick: document.getElementById("ball-stick-representation"),
    structural: document.getElementById("structural-representation"),
    wedge: document.getElementById("wedge-representation"),
    skeletal: document.getElementById("skeletal-representation")
  };
  const atomStructure = document.getElementById("atom-shells");
  const periodicTable = document.getElementById("periodic-table");
  const periodicHeadings = document.querySelector(".periodic-group-headings");
  const elementSearch = document.getElementById("element-search");
  const periodicCount = document.getElementById("periodic-count");
  const equilibriumParticles = document.getElementById("equilibrium-particles");
  const equilibriumTemperature = document.getElementById("equilibrium-temperature");
  const equilibriumPressure = document.getElementById("equilibrium-pressure");
  const equilibriumCatalyst = document.getElementById("equilibrium-catalyst");
  const equilibriumPlay = document.getElementById("equilibrium-play");
  const equilibriumReset = document.getElementById("equilibrium-reset");
  const equilibriumAddProduct = document.getElementById("equilibrium-add-product");
  const equilibriumRemoveProduct = document.getElementById("equilibrium-remove-product");
  const equilibriumConstantResult = document.getElementById("equilibrium-constant-result");
  const conversionValue = document.getElementById("conversion-value");
  const conversionUnit = document.getElementById("conversion-unit");
  const conversionMolarMass = document.getElementById("conversion-molar-mass");
  const conversionMolarVolume = document.getElementById("conversion-molar-volume");
  const conversionResult = document.getElementById("conversion-result");
  const atomDetail = document.getElementById("atom-detail");
  const textTargets = {
    name: document.getElementById("molecule-name"),
    formula: document.getElementById("molecule-formula"),
    shape: document.getElementById("molecule-shape"),
    geometry: document.getElementById("molecule-geometry"),
    angle: document.getElementById("molecule-angle"),
    dipole: document.getElementById("molecule-dipole"),
    explanation: document.getElementById("molecule-explanation")
  };
  const elementTargets = {
    name: document.getElementById("element-name"),
    symbol: document.getElementById("element-symbol"),
    number: document.getElementById("element-number"),
    isotope: document.getElementById("element-isotope"),
    protons: document.getElementById("element-protons"),
    neutrons: document.getElementById("element-neutrons"),
    electrons: document.getElementById("element-electrons"),
    shellConfig: document.getElementById("element-shell-config"),
    valence: document.getElementById("element-valence")
  };
  let rotationX = -0.2;
  let rotationY = 0.45;
  let selectedAtom = -1;
  let activePointer = null;
  let dragStart = null;
  let suppressClick = false;
  let showLonePairs = true;
  let moleculeRepresentation = "ballStick";
  let selectedElementSymbol = "H";
  let atomRepresentation = "bohr";
  const equilibriumState = {
    nitrogen: 20,
    hydrogen: 60,
    ammonia: 0,
    addedAmmonia: 0,
    history: [],
    elapsed: 0
  };
  const equilibriumParticleMotion = [];
  const EQUILIBRIUM_PARTICLE_LIMIT = 100;
  const AVOGADRO_CONSTANT = 6.02214076e23;
  const EQUILIBRIUM_EXTENT_PER_RATE_SECOND = 0.45;
  const EQUILIBRIUM_RATE_BAR_SCALE = 3;
  let equilibriumTimer = null;
  let equilibriumAnimationFrame = null;
  let equilibriumRunning = true;
  let lastEquilibriumUpdate = 0;
  let lastChartUpdate = 0;
  let lastParticleAnimationUpdate = 0;
  let renderedParticleCounts = "";

  function svgElement(tag, attributes) {
    const element = document.createElementNS(svgNamespace, tag);
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
    return element;
  }

  function currentMolecule() {
    return molecules.find((molecule) => molecule.id === select.value) || molecules[0];
  }

  function currentElement() {
    return elements.find((element) => element.symbol === selectedElementSymbol) || elements[0];
  }

  function saveSimulationPreferences(mode) {
    try {
      localStorage.setItem(SIMULATION_PREFERENCES_KEY, mode);
    } catch (error) {
      console.warn("Die Simulationsauswahl konnte nicht gespeichert werden.", error);
    }
  }

  function restoreSimulationPreferences() {
    let savedMode;
    try {
      savedMode = localStorage.getItem(SIMULATION_PREFERENCES_KEY);
    } catch (error) {
      console.warn("Die gespeicherte Simulationsauswahl konnte nicht geladen werden.", error);
      return "molecule";
    }
    if (savedMode && !["molecule", "atom", "equilibrium", "conversion"].includes(savedMode)) {
      try {
        savedMode = JSON.parse(savedMode)?.mode;
      } catch {
        savedMode = null;
      }
    }
    return ["molecule", "atom", "equilibrium", "conversion"].includes(savedMode)
      ? savedMode
      : "molecule";
  }

  function setModelMode(mode) {
    const showAtom = mode === "atom";
    const showMolecule = mode === "molecule";
    const showEquilibrium = mode === "equilibrium";
    const showConversion = mode === "conversion";
    moleculeView.hidden = showAtom || showEquilibrium || showConversion;
    atomView.hidden = !showAtom;
    equilibriumView.hidden = !showEquilibrium;
    conversionView.hidden = !showConversion;
    moleculeMode.classList.toggle("is-active", showMolecule);
    atomMode.classList.toggle("is-active", showAtom);
    equilibriumMode.classList.toggle("is-active", showEquilibrium);
    conversionMode.classList.toggle("is-active", showConversion);
    moleculeMode.setAttribute("aria-pressed", String(showMolecule));
    atomMode.setAttribute("aria-pressed", String(showAtom));
    equilibriumMode.setAttribute("aria-pressed", String(showEquilibrium));
    conversionMode.setAttribute("aria-pressed", String(showConversion));
    if (showEquilibrium) {
      startEquilibriumTimer();
    } else {
      stopEquilibriumTimer();
    }
    saveSimulationPreferences(mode);
  }

  function rotate(point) {
    const cosY = Math.cos(rotationY);
    const sinY = Math.sin(rotationY);
    const cosX = Math.cos(rotationX);
    const sinX = Math.sin(rotationX);
    const x = point.x * cosY + point.z * sinY;
    const depth = -point.x * sinY + point.z * cosY;
    return {
      x,
      y: point.y * cosX - depth * sinX,
      depth: point.y * sinX + depth * cosX
    };
  }

  function project(point) {
    const rotated = rotate(point);
    const perspective = 1 / (1 + rotated.depth * 0.045);
    return {
      x: 360 + rotated.x * modelScale * perspective,
      y: 232 - rotated.y * modelScale * perspective,
      depth: rotated.depth
    };
  }

  function fitModelToCanvas(molecule) {
    const projectedUnits = molecule.atoms.map((atom) => {
      const rotated = rotate(atom);
      const perspective = 1 / (1 + rotated.depth * 0.045);
      return {
        x: Math.abs(rotated.x * perspective),
        y: Math.abs(rotated.y * perspective)
      };
    });
    const maxX = Math.max(...projectedUnits.map((point) => point.x));
    const maxY = Math.max(...projectedUnits.map((point) => point.y));
    const horizontalScale = 325 / Math.max(maxX, 0.5);
    const verticalScale = 185 / Math.max(maxY, 0.5);
    modelScale = Math.min(maximumModelScale, horizontalScale, verticalScale);
  }

  function atomRadius(element) {
    return element === "H" ? 15 : 21;
  }

  function perpendicular(dx, dy, dz) {
    let vector = { x: -dy, y: dx, z: 0 };
    let length = Math.hypot(vector.x, vector.y, vector.z);
    if (length < 0.001) {
      vector = { x: 0, y: -dz, z: dy };
      length = Math.hypot(vector.x, vector.y, vector.z) || 1;
    }
    return { x: vector.x / length, y: vector.y / length, z: vector.z / length };
  }

  function renderElectronPair(center, orientation, depth, className) {
    const first = project({
      x: center.x - orientation.x * 0.045,
      y: center.y - orientation.y * 0.045,
      z: center.z - orientation.z * 0.045
    });
    const second = project({
      x: center.x + orientation.x * 0.045,
      y: center.y + orientation.y * 0.045,
      z: center.z + orientation.z * 0.045
    });
    const position = { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
    const pair = svgElement("g", {
      class: `electron-pair ${className}`,
      transform: `translate(${position.x} ${position.y})`
    });
    pair.append(
      svgElement("circle", { cx: first.x - position.x, cy: first.y - position.y, r: 3.3 }),
      svgElement("circle", { cx: second.x - position.x, cy: second.y - position.y, r: 3.3 })
    );
    pair.dataset.depth = String(depth);
    return pair;
  }

  function renderLonePairElectron(pair, molecule) {
    const atom = molecule.atoms[pair.atom];
    const direction = pair.direction;
    const directionLength = Math.hypot(direction.x, direction.y, direction.z) || 1;
    const unit = {
      x: direction.x / directionLength,
      y: direction.y / directionLength,
      z: direction.z / directionLength
    };
    const side = perpendicular(unit.x, unit.y, unit.z);
    const radius = atomRadius(atom.element) / modelScale + 0.11;
    const center = {
      x: atom.x + unit.x * radius,
      y: atom.y + unit.y * radius,
      z: atom.z + unit.z * radius
    };
    return renderElectronPair(center, side, atom.y + atom.z + unit.y + unit.z, "electron-pair-lone");
  }

  function renderBond(bond, positions) {
    const start = positions[bond.from];
    const end = positions[bond.to];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.hypot(dx, dy) || 1;
    const offsetX = (-dy / length) * 4;
    const offsetY = (dx / length) * 4;
    const order = bond.order || 1;
    const group = svgElement("g", { class: "molecule-bond" });

    for (let index = 0; index < order; index += 1) {
      const offset = (index - (order - 1) / 2) * 5;
      const insetStart = atomRadius(currentMolecule().atoms[bond.from].element) * 0.82;
      const insetEnd = atomRadius(currentMolecule().atoms[bond.to].element) * 0.82;
      const lineStartX = start.x + (dx / length) * insetStart + offsetX * offset / 4;
      const lineStartY = start.y + (dy / length) * insetStart + offsetY * offset / 4;
      const lineEndX = end.x - (dx / length) * insetEnd + offsetX * offset / 4;
      const lineEndY = end.y - (dy / length) * insetEnd + offsetY * offset / 4;
      group.append(svgElement("line", {
        x1: lineStartX,
        y1: lineStartY,
        x2: lineEndX,
        y2: lineEndY,
        stroke: "#828982",
        "stroke-width": order === 1 ? 6 : 4,
        "stroke-linecap": "round"
      }));
    }

    group.dataset.depth = String((start.depth + end.depth) / 2);
    return group;
  }

  function renderAtom(atom, index, position) {
    const group = svgElement("g", {
      class: `molecule-atom${selectedAtom === index ? " is-selected" : ""}`,
      transform: `translate(${position.x} ${position.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `${atom.element}-Atom`
    });
    group.dataset.atomIndex = String(index);
    const radius = atomRadius(atom.element);
    const textColor = atom.element === "H" ? "#455149" : "#fffefa";
    group.append(
      svgElement("circle", {
        r: radius,
        fill: `url(#atom-${atom.element === "C" ? "carbon" : atom.element === "H" ? "hydrogen" : atom.element === "O" ? "oxygen" : "nitrogen"})`
      })
    );
    const label = svgElement("text", { y: 1, fill: textColor });
    label.textContent = atom.element;
    group.append(label);
    group.addEventListener("click", () => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }
      selectAtom(index);
    });
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectAtom(index);
      }
    });
    group.dataset.depth = String(position.depth);
    return group;
  }

  function flatMoleculePositions(molecule) {
    const rotated = molecule.atoms.map((atom, index) => {
      if (molecule.id === "water") {
        return { x: atom.x, y: atom.z, depth: atom.y };
      }
      if (molecule.id === "butan-2-ol" && moleculeRepresentation === "structural") {
        const positions = [
          { x: 0, y: 0 },
          { x: -0.113203, y: -0.993572 },
          { x: 0.820377, y: -1.351940 },
          { x: -1, y: 0 },
          { x: -1, y: 1 },
          { x: -2, y: 0 },
          { x: -1, y: -1 },
          { x: 0.333807, y: 0.942641 },
          { x: 0.447010, y: 1.936213 },
          { x: -0.640563, y: 1.167592 },
          { x: 1.333807, y: 0.942641 },
          { x: 1.333807, y: 1.942641 },
          { x: 2.333807, y: 0.942641 },
          { x: 1.333807, y: -0.057359 },
          { x: 0.974370, y: -0.224951 }
        ];
        return { ...positions[index], depth: 0 };
      }
      if (molecule.id === "methane" && moleculeRepresentation === "structural") {
        const positions = [
          { x: 0, y: 0 },
          { x: -1, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: 1 },
          { x: 1, y: 1 }
        ];
        return { ...positions[index], depth: 0 };
      }
      return { x: atom.x + atom.z * 0.55, y: atom.y, depth: atom.z };
    });
    const bounds = moleculeRepresentation === "skeletal"
      ? rotated.filter((point, index) => {
        const atom = molecule.atoms[index];
        if (atom.element !== "H") {
          return true;
        }
        return molecule.bonds.some((bond) => {
          const otherIndex = bond.from === index ? bond.to : bond.to === index ? bond.from : -1;
          return otherIndex >= 0 && molecule.atoms[otherIndex].element !== "C";
        });
      })
      : rotated;
    const xValues = bounds.map((point) => point.x);
    const yValues = bounds.map((point) => point.y);
    const width = Math.max(...xValues) - Math.min(...xValues);
    const height = Math.max(...yValues) - Math.min(...yValues);
    const scale = Math.min(150, 400 / Math.max(width, 0.5), 220 / Math.max(height, 0.5));
    const centerX = (Math.max(...xValues) + Math.min(...xValues)) / 2;
    const centerY = (Math.max(...yValues) + Math.min(...yValues)) / 2;
    return rotated.map((point, index) => ({
      x: 360 + (point.x - centerX) * scale,
      y: 232 - (point.y - centerY) * scale
        + (molecule.id === "ammonia" && moleculeRepresentation === "wedge" && index === 2 ? 18 : 0),
      depth: point.depth
    }));
  }

  function renderFlatLonePair(pair, molecule, positions, index) {
    const atomPosition = positions[pair.atom];
    let direction;
    if (molecule.id === "water") {
      direction = index === 0 ? { x: -0.72, y: 0.69 } : { x: 0.72, y: 0.69 };
    } else {
      direction = { x: pair.direction.x + pair.direction.z * 0.55, y: -pair.direction.y };
    }
    const length = Math.hypot(direction.x, direction.y) || 1;
    direction = { x: direction.x / length, y: direction.y / length };
    const center = {
      x: atomPosition.x + direction.x * 23,
      y: atomPosition.y + direction.y * 23
    };
    const perpendicularDirection = { x: -direction.y, y: direction.x };
    const pairGroup = svgElement("g", {
      class: "electron-pair electron-pair-lone",
      transform: `translate(${center.x} ${center.y})`
    });
    pairGroup.append(
      svgElement("circle", {
        cx: -perpendicularDirection.x * 3,
        cy: -perpendicularDirection.y * 3,
        r: 2.8
      }),
      svgElement("circle", {
        cx: perpendicularDirection.x * 3,
        cy: perpendicularDirection.y * 3,
        r: 2.8
      })
    );
    pairGroup.dataset.depth = String(atomPosition.depth);
    return pairGroup;
  }

  function renderFlatBond(bond, molecule, positions, visibleAtoms, representation) {
    const start = positions[bond.from];
    const end = positions[bond.to];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.hypot(dx, dy) || 1;
    const direction = { x: dx / length, y: dy / length };
    const perpendicularDirection = { x: -direction.y, y: direction.x };
    const order = bond.order || 1;
    const group = svgElement("g", { class: "formula-bond" });
    const stereo = representation === "wedge" && order === 1 ? bond.stereo : null;

    if (stereo === "wedge" || stereo === "dash") {
      const isAmmoniaWedge = molecule.id === "ammonia" && bond.from === 0 && bond.to === 2;
      const isMethaneStereoBond = molecule.id === "methane";
      const isPropaneStereoBond = molecule.id === "propane";
      const narrowEndpoint = stereo === "wedge" ? start : end;
      const wideEndpoint = stereo === "wedge" ? end : start;
      const narrowInset = isAmmoniaWedge ? 14 : isMethaneStereoBond || isPropaneStereoBond ? 16 : 0;
      const wideInset = isAmmoniaWedge ? 15 : isMethaneStereoBond || isPropaneStereoBond ? 16 : 0;
      const stereoDirection = {
        x: (wideEndpoint.x - narrowEndpoint.x) / length,
        y: (wideEndpoint.y - narrowEndpoint.y) / length
      };
      const narrow = {
        x: narrowEndpoint.x + stereoDirection.x * narrowInset,
        y: narrowEndpoint.y + stereoDirection.y * narrowInset
      };
      const wide = {
        x: wideEndpoint.x - stereoDirection.x * wideInset,
        y: wideEndpoint.y - stereoDirection.y * wideInset
      };
      const base = 1.5;
      const broad = isAmmoniaWedge || isPropaneStereoBond ? 7 : 12;
      if (stereo === "wedge") {
        group.append(svgElement("polygon", {
          class: "formula-wedge",
          points: `${narrow.x + perpendicularDirection.x * base},${narrow.y + perpendicularDirection.y * base} ${narrow.x - perpendicularDirection.x * base},${narrow.y - perpendicularDirection.y * base} ${wide.x - perpendicularDirection.x * broad},${wide.y - perpendicularDirection.y * broad} ${wide.x + perpendicularDirection.x * broad},${wide.y + perpendicularDirection.y * broad}`
        }));
      } else {
        const dashCount = 6;
        for (let index = 1; index <= dashCount; index += 1) {
          const progress = index / (dashCount + 1);
          const center = {
            x: narrow.x + (wide.x - narrow.x) * progress,
            y: narrow.y + (wide.y - narrow.y) * progress
          };
          const halfWidth = base + (broad - base) * progress;
          group.append(svgElement("line", {
            class: "formula-hash",
            x1: center.x - perpendicularDirection.x * halfWidth,
            y1: center.y - perpendicularDirection.y * halfWidth,
            x2: center.x + perpendicularDirection.x * halfWidth,
            y2: center.y + perpendicularDirection.y * halfWidth
          }));
        }
      }
    } else {
      const startInset = visibleAtoms[bond.from] ? 12 : 2;
      const endInset = visibleAtoms[bond.to] ? 12 : 2;
      for (let index = 0; index < order; index += 1) {
        const offset = (index - (order - 1) / 2) * 6;
        group.append(svgElement("line", {
          class: "formula-bond-line",
          x1: start.x + direction.x * startInset + perpendicularDirection.x * offset,
          y1: start.y + direction.y * startInset + perpendicularDirection.y * offset,
          x2: end.x - direction.x * endInset + perpendicularDirection.x * offset,
          y2: end.y - direction.y * endInset + perpendicularDirection.y * offset
        }));
      }
    }

    group.dataset.depth = String((start.depth + end.depth) / 2);
    return group;
  }

  function renderFormulaAtom(atom, index, position, visible) {
    const group = svgElement("g", {
      class: `formula-atom${visible ? "" : " formula-atom-implicit"}${selectedAtom === index ? " is-selected" : ""}`,
      transform: `translate(${position.x} ${position.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `${atom.element}-Atom${visible ? "" : ", in dieser Darstellung ausgelassen"}`
    });
    group.dataset.atomIndex = String(index);
    group.append(svgElement("circle", { class: "formula-atom-hit", r: "15" }));
    if (visible) {
      const label = svgElement("text", { class: "formula-atom-label", y: "1" });
      label.textContent = atom.element;
      group.append(label);
    }
    group.addEventListener("click", () => selectAtom(index));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectAtom(index);
      }
    });
    group.dataset.depth = String(position.depth);
    return group;
  }

  function renderFlatMolecule(molecule) {
    const positions = flatMoleculePositions(molecule);
    const showStructuralFallback = moleculeRepresentation === "skeletal" && molecule.id === "carbon-dioxide";
    const isSkeletal = moleculeRepresentation === "skeletal" && !showStructuralFallback;
    const visibleAtoms = molecule.atoms.map((atom, index) => {
      if (showStructuralFallback) {
        return true;
      }
      if (!isSkeletal && moleculeRepresentation !== "wedge") {
        return true;
      }
      if (moleculeRepresentation === "wedge" && atom.element === "H") {
        if (molecule.id === "formaldehyde" || molecule.id === "propane") {
          return true;
        }
        const attachedBond = molecule.bonds.find((bond) => bond.from === index || bond.to === index);
        const bondedIndex = attachedBond?.from === index ? attachedBond.to : attachedBond?.from;
        return Boolean(attachedBond && (
          bondedIndex !== undefined && molecule.atoms[bondedIndex].element !== "C"
          || attachedBond.stereo
          || molecule.id === "methane"
        ));
      }
      if (!isSkeletal) {
        return true;
      }
      if (atom.element === "C") {
        const carbonNeighbors = molecule.bonds
          .filter((bond) => bond.from === index || bond.to === index)
          .map((bond) => molecule.atoms[bond.from === index ? bond.to : bond.from]);
        const hasOnlyOneCarbon = molecule.atoms.filter((candidate) => candidate.element === "C").length === 1;
        if (hasOnlyOneCarbon && carbonNeighbors.length === 0) {
          return true;
        }
        return carbonNeighbors.length > 0 && carbonNeighbors.every((neighbor) => neighbor.element === "H");
      }
      if (atom.element !== "H") {
        return true;
      }
      const bondedAtom = molecule.bonds
        .filter((bond) => bond.from === index || bond.to === index)
        .map((bond) => molecule.atoms[bond.from === index ? bond.to : bond.from])
        .find((other) => other.element !== "H");
      return bondedAtom?.element !== "C";
    });
    const displayedBonds = molecule.bonds.filter((bond) => {
      if (!isSkeletal && moleculeRepresentation !== "wedge") {
        return true;
      }
      const first = molecule.atoms[bond.from];
      const second = molecule.atoms[bond.to];
      const carbonHydrogenBond = (first.element === "C" && second.element === "H")
        || (first.element === "H" && second.element === "C");
      return !carbonHydrogenBond
        || moleculeRepresentation === "wedge"
          && (
            Boolean(bond.stereo)
            || molecule.id === "methane"
            || molecule.id === "formaldehyde"
            || molecule.id === "propane"
          );
    });
    const elements = displayedBonds.map((bond) =>
      renderFlatBond(bond, molecule, positions, visibleAtoms, moleculeRepresentation)
    );
    if (showLonePairs) {
      (molecule.lonePairs || []).forEach((pair, index) =>
        elements.push(renderFlatLonePair(pair, molecule, positions, index))
      );
    }
    molecule.atoms.forEach((atom, index) => {
      elements.push(renderFormulaAtom(atom, index, positions[index], visibleAtoms[index]));
    });
    elements.sort((left, right) => Number(left.dataset.depth) - Number(right.dataset.depth));
    structure.replaceChildren(...elements);
  }

  function updateMoleculeNote(molecule = currentMolecule()) {
    const notes = {
      ballStick: "",
      structural: "Die Strukturformel zeigt alle Atome und Bindungen; Mehrfachbindungen werden durch parallele Striche dargestellt.",
      wedge: "In der Keilstrichformel zeigen ausgefüllte Keile nach vorn und gestrichelte Keile nach hinten.",
      skeletal: "In der Skelettformel stehen Ecken und Enden für C-Atome; an C gebundene H-Atome werden weggelassen. Andere Atome und ihre H-Atome bleiben sichtbar."
    };
    const isCarbonDioxideNotice = moleculeRepresentation === "skeletal" && molecule.id === "carbon-dioxide";
    moleculeNote.classList.toggle("is-warning", isCarbonDioxideNotice);
    moleculeNote.textContent = isCarbonDioxideNotice
      ? "Für CO₂ gibt es keine Skelettformel mit einer C-Kette. Deshalb wird hier die Strukturformel angezeigt."
      : notes[moleculeRepresentation];
    moleculeNote.hidden = !moleculeNote.textContent;
  }

  function renderModel() {
    const molecule = currentMolecule();
    if (moleculeRepresentation !== "ballStick") {
      renderFlatMolecule(molecule);
      return;
    }
    fitModelToCanvas(molecule);
    const positions = molecule.atoms.map(project);
    const elements = molecule.bonds.map((bond) => renderBond(bond, positions));
    if (showLonePairs) {
      (molecule.lonePairs || []).forEach((pair) => elements.push(renderLonePairElectron(pair, molecule)));
    }
    molecule.atoms.forEach((atom, index) => elements.push(renderAtom(atom, index, positions[index])));
    elements.sort((left, right) => Number(left.dataset.depth) - Number(right.dataset.depth));
    structure.replaceChildren(...elements);
  }

  function setMoleculeRepresentation(representation) {
    moleculeRepresentation = representation;
    const previousMoleculeId = select.value;
    const selectedMolecule = molecules.some((molecule) => molecule.id === previousMoleculeId)
      ? previousMoleculeId
      : molecules[0].id;
    select.replaceChildren(...molecules.map((molecule) => {
      const option = document.createElement("option");
      option.value = molecule.id;
      option.textContent = `${molecule.name} (${molecule.formula})`;
      return option;
    }));
    select.value = selectedMolecule;
    Object.entries(moleculeRepresentations).forEach(([key, button]) => {
      const isActive = key === representation;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    const isBallStick = representation === "ballStick";
    electronToggle.hidden = !currentMolecule().lonePairs?.length;
    moleculeLegend.hidden = !isBallStick;
    canvas.classList.toggle("is-rotatable", isBallStick);
    canvas.setAttribute("aria-label", isBallStick
      ? "Drehbares Kugel-Stab-Molekülmodell. Mit Maus oder Touch ziehen, mit Pfeiltasten drehen."
      : "Schematische zweidimensionale Moleküldarstellung. Atome anklicken für Details.");
    moleculeInstructions.textContent = isBallStick
      ? "Ziehen zum Drehen · Atom anklicken für Details · Pfeiltasten funktionieren ebenfalls"
      : "Atom anklicken für Details";
    updateMoleculeNote();
    electronToggle.textContent = showLonePairs
      ? "Freie Elektronenpaare ausblenden"
      : "Freie Elektronenpaare einblenden";
    electronToggle.setAttribute("aria-pressed", String(showLonePairs));
    if (previousMoleculeId !== selectedMolecule) {
      showMolecule();
    } else {
      textTargets.shape.textContent = {
        ballStick: currentMolecule().shape,
        structural: "Strukturformel",
        wedge: "Keilstrichformel",
        skeletal: "Skelettformel"
      }[representation];
      renderModel();
    }
  }

  function selectAtom(index) {
    selectedAtom = index;
    const molecule = currentMolecule();
    const atom = molecule.atoms[index];
    const element = elements.find((candidate) => candidate.symbol === atom.element);
    const connections = molecule.bonds
      .filter((bond) => bond.from === index || bond.to === index)
      .map((bond) => {
        const otherIndex = bond.from === index ? bond.to : bond.from;
        const other = molecule.atoms[otherIndex];
        const bondName = ["", "Einfachbindung", "Doppelbindung", "Dreifachbindung"][bond.order || 1];
        return `${bondName} zu ${other.element}`;
      });
    atomDetail.replaceChildren();
    const heading = document.createElement("strong");
    heading.textContent = `${element.name} (${atom.element})`;
    const detail = document.createElement("span");
    detail.textContent = connections.length ? connections.join(" · ") : "Keine Bindungen";
    const elementLink = document.createElement("a");
    elementLink.className = "molecule-element-link";
    elementLink.href = "#atom-view";
    elementLink.textContent = `${atom.element} im Atom-Tab anzeigen`;
    elementLink.addEventListener("click", (event) => {
      event.preventDefault();
      setModelMode("atom");
      elementSearch.value = "";
      filterElements();
      chooseElement(element);
      periodicTable.querySelector(`[data-symbol="${element.symbol}"]`).focus();
    });
    atomDetail.append(heading, detail, elementLink);
    renderModel();
    structure.querySelector(`[data-atom-index="${index}"]`).focus({ preventScroll: true });
  }

  function showMolecule() {
    const molecule = currentMolecule();
    updateMoleculeNote(molecule);
    moleculeLegend.querySelectorAll("[data-element]").forEach((item) => {
      item.hidden = !molecule.atoms.some((atom) => atom.element === item.dataset.element);
    });
    const hasLonePairs = Boolean(molecule.lonePairs?.length);
    moleculeLegend.querySelector(".electron-pair-legend").hidden = !hasLonePairs;
    electronToggle.hidden = !hasLonePairs;
    textTargets.name.textContent = molecule.name;
    textTargets.formula.textContent = molecule.formula;
    textTargets.shape.textContent = {
      ballStick: molecule.shape,
      structural: "Strukturformel",
      wedge: "Keilstrichformel",
      skeletal: "Skelettformel"
    }[moleculeRepresentation];
    textTargets.geometry.textContent = molecule.geometry;
    textTargets.angle.textContent = molecule.angle;
    textTargets.dipole.textContent = molecule.dipole;
    textTargets.explanation.textContent = molecule.explanation;
    selectedAtom = -1;
    atomDetail.replaceChildren();
    const heading = document.createElement("strong");
    heading.textContent = "Atome entdecken";
    const detail = document.createElement("span");
    detail.textContent = "Wähle ein Atom im Modell aus, um seine Bindungen zu sehen.";
    atomDetail.append(heading, detail);
    resetView();
  }

  function nucleusPositions(count) {
    const positions = [{ x: 0, y: 0 }];
    for (let ring = 1; positions.length < count; ring += 1) {
      const slots = ring * 6;
      const radius = ring * 14;
      for (let slot = 0; slot < slots && positions.length < count; slot += 1) {
        const angle = (slot / slots) * Math.PI * 2 - Math.PI / 2;
        positions.push({ x: Math.cos(angle) * radius, y: Math.sin(angle) * radius });
      }
    }
    return positions;
  }

  function superscript(value) {
    return String(value).replace(/[0-9]/g, (digit) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(digit)]);
  }

  function addNucleus(element) {
    const centerX = 360;
    const centerY = 280;
    const nucleons = [
      ...Array.from({ length: element.atomicNumber }, () => ({ type: "proton", label: "+" })),
      ...Array.from({ length: element.massNumber - element.atomicNumber }, () => ({ type: "neutron", label: "n" }))
    ];
    const positions = nucleusPositions(nucleons.length);
    const core = svgElement("circle", {
      cx: centerX,
      cy: centerY,
      r: "48",
      fill: "#f5f3ed",
      stroke: "#d8d5ca",
      "stroke-width": "1.5"
    });
    atomStructure.append(core);

    nucleons.slice(0, 37).forEach((nucleon, index) => {
      const position = positions[index];
      const particle = svgElement("g", {
        class: `nucleon nucleon-${nucleon.type}`,
        "aria-label": nucleon.type === "proton" ? "Proton" : "Neutron"
      });
      particle.append(svgElement("circle", {
        cx: centerX + position.x,
        cy: centerY + position.y,
        r: "7.4",
        fill: `url(#atom-nucleus-${nucleon.type})`
      }));
      const label = svgElement("text", {
        x: centerX + position.x,
        y: centerY + position.y + 0.5,
        fill: nucleon.type === "proton" ? "#fffefa" : "#fffefa"
      });
      label.textContent = nucleon.label;
      particle.append(label);
      atomStructure.append(particle);
    });
  }

  function drawAtomrumpf(element) {
    const centerX = 360;
    const centerY = 280;
    const valenceCount = element.shells[element.shells.length - 1];
    atomStructure.append(svgElement("circle", {
      class: "atom-valence-ring",
      cx: centerX,
      cy: centerY,
      r: 77
    }));
    atomStructure.append(svgElement("circle", {
      class: "atom-core-representation",
      cx: centerX,
      cy: centerY,
      r: 49
    }));
    const symbol = svgElement("text", {
      class: "atom-core-symbol",
      x: centerX,
      y: centerY - 10
    });
    symbol.textContent = element.symbol;
    atomStructure.append(symbol);
    const charge = svgElement("text", {
      class: "atom-core-charge",
      x: centerX,
      y: centerY + 25
    });
    charge.textContent = `+${valenceCount}`;
    atomStructure.append(charge);

    for (let electronIndex = 0; electronIndex < valenceCount; electronIndex += 1) {
      const angle = (electronIndex / valenceCount) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * 77;
      const y = centerY + Math.sin(angle) * 77;
      atomStructure.append(svgElement("circle", {
        class: "valence-electron-dot",
        cx: x,
        cy: y,
        r: 7,
        "aria-label": "Valenzelektron"
      }));
    }
  }

  function drawAtom() {
    const element = currentElement();
    const shells = element.shells;
    const radii = [70, 98, 126, 154, 182, 210, 238];
    const centerY = 280;
    const symbol = element.symbol;
    atomStructure.replaceChildren();

    if (atomRepresentation === "bohr") {
      shells.forEach((electronCount, shellIndex) => {
        const radius = radii[shellIndex];
        const shellCircle = svgElement("circle", {
          class: "electron-shell",
          cx: "360",
          cy: centerY,
          r: radius
        });
        atomStructure.append(shellCircle);
        const shellName = String.fromCharCode(75 + shellIndex);
        const shellLabel = svgElement("text", {
          class: "shell-label",
          x: "360",
          y: centerY - radius - 7,
          "text-anchor": "middle"
        });
        shellLabel.textContent = shellName;
        atomStructure.append(shellLabel);

        for (let electronIndex = 0; electronIndex < electronCount; electronIndex += 1) {
          const angle = (electronIndex / electronCount) * Math.PI * 2 - Math.PI / 2;
          const x = 360 + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          const electron = svgElement("g", {
            class: "atom-electron",
            "aria-label": `Elektron auf der ${shellIndex + 1}. Schale`
          });
          electron.append(svgElement("circle", { cx: x, cy: y, r: "10" }));
          const minus = svgElement("text", { x, y: y + 0.5 });
          minus.textContent = "−";
          electron.append(minus);
          atomStructure.append(electron);
        }
      });
      addNucleus(element);
    } else {
      drawAtomrumpf(element);
    }

    elementTargets.name.textContent = element.name;
    elementTargets.symbol.textContent = symbol;
    elementTargets.number.textContent = String(element.atomicNumber);
    elementTargets.isotope.textContent = `${superscript(element.massNumber)}${symbol}`;
    elementTargets.protons.textContent = String(element.atomicNumber);
    elementTargets.neutrons.textContent = String(element.massNumber - element.atomicNumber);
    elementTargets.electrons.textContent = String(element.atomicNumber);
    elementTargets.shellConfig.textContent = shells.join(" | ");
    elementTargets.valence.textContent = String(shells[shells.length - 1]);
    const neutrons = element.massNumber - element.atomicNumber;
    const representationLabel = atomRepresentation === "bohr"
      ? "Bohr-Modell"
      : "Atomrumpf und Valenzelektronen";
    document.getElementById("atom-representation-label").textContent = representationLabel;
    document.getElementById("bohr-representation").classList.toggle("is-active", atomRepresentation === "bohr");
    document.getElementById("core-representation").classList.toggle("is-active", atomRepresentation === "core");
    document.getElementById("bohr-representation").setAttribute("aria-pressed", String(atomRepresentation === "bohr"));
    document.getElementById("core-representation").setAttribute("aria-pressed", String(atomRepresentation === "core"));
    document.querySelectorAll(".atom-legend-bohr-item").forEach((item) => { item.hidden = atomRepresentation !== "bohr"; });
    document.querySelector(".atom-legend-core-item").hidden = atomRepresentation !== "core";
    document.querySelector(".atom-legend-valence-item").hidden = atomRepresentation !== "core";
    document.getElementById("atom-representation-note").textContent = atomRepresentation === "bohr"
      ? "Schematische Darstellung eines neutralen Atoms im vereinfachten Bohr-Modell. Die Nuklide sind Beispiele; bei Elementen ohne stabile Isotope ist ein langlebiges Isotop gewählt. Kernteilchen, Abstände und Grössen sind nicht massstabsgetreu."
      : "Der Atomrumpf umfasst den Kern und die inneren Elektronen; die Punkte zeigen die Elektronen der äussersten Schale. Die positive Ladung entspricht der Zahl dieser Valenzelektronen. Nicht massstabsgetreu.";
    document.getElementById("atom-diagram-title").textContent = atomRepresentation === "bohr"
      ? `Bohr-Modell von ${element.name}`
      : `Atomrumpf- und Valenzelektronenmodell von ${element.name}`;
    const nucleusDescription = element.massNumber > 37
      ? "Nur eine kleine Auswahl der Kernteilchen ist eingezeichnet."
      : "Der Kern ist schematisch gezeichnet.";
    document.getElementById("atom-diagram-desc").textContent = atomRepresentation === "bohr"
      ? `${element.atomicNumber} Proton${element.atomicNumber === 1 ? "" : "en"} und ${neutrons} Neutron${neutrons === 1 ? "" : "en"} im Kern; ${element.atomicNumber} Elektron${element.atomicNumber === 1 ? "" : "en"} auf ${shells.length} Schale${shells.length === 1 ? "" : "n"}: ${shells.join(", ")}. ${nucleusDescription}`
      : `${element.name}: Atomrumpf mit Ladung +${shells[shells.length - 1]} und ${shells[shells.length - 1]} Valenzelektron${shells[shells.length - 1] === 1 ? "" : "en"}.`;
    periodicTable.querySelectorAll(".periodic-element").forEach((button) => {
      const isSelected = button.dataset.symbol === symbol;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
      button.tabIndex = isSelected ? 0 : -1;
    });
  }

  function chooseElement(element) {
    selectedElementSymbol = element.symbol;
    drawAtom();
  }

  function filterElements() {
    const query = elementSearch.value.trim().toLocaleLowerCase("de");
    let visibleCount = 0;
    periodicTable.querySelectorAll(".periodic-element").forEach((button) => {
      const element = elements.find((item) => item.symbol === button.dataset.symbol);
      const matches = !query || `${element.atomicNumber} ${element.name} ${element.symbol}`.toLocaleLowerCase("de").includes(query);
      button.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });
    periodicCount.textContent = query ? `${visibleCount} von ${elements.length} Elementen` : `${elements.length} Elemente`;
  }

  function renderPeriodicTable() {
    const blankHeading = document.createElement("span");
    blankHeading.setAttribute("aria-hidden", "true");
    periodicHeadings.append(blankHeading);
    for (let group = 1; group <= 18; group += 1) {
      const heading = document.createElement("span");
      heading.textContent = String(group);
      periodicHeadings.append(heading);
    }

    for (let period = 1; period <= 9; period += 1) {
      const rowLabel = document.createElement("span");
      rowLabel.className = "periodic-period-number";
      rowLabel.textContent = period <= 7 ? String(period) : period === 8 ? "Ln" : "An";
      rowLabel.setAttribute("aria-hidden", "true");
      rowLabel.style.gridColumn = "1";
      rowLabel.style.gridRow = String(period <= 7 ? period : period === 8 ? 9 : 11);
      periodicTable.append(rowLabel);
    }

    elements.forEach((element) => {
      const button = document.createElement("button");
      button.type = "button";
      const seriesStartClass = element.symbol === "La"
        ? " is-lanthanide-start"
        : element.symbol === "Ac"
          ? " is-actinide-start"
          : "";
      button.className = `periodic-element ${element.category}${seriesStartClass}`;
      button.style.gridColumn = String(element.group + 1);
      button.style.gridRow = String(element.period <= 7 ? element.period : element.period === 8 ? 9 : 11);
      button.dataset.symbol = element.symbol;
      button.setAttribute("aria-label", `${element.atomicNumber} ${element.name}, ${element.symbol}`);
      button.setAttribute("aria-pressed", String(element.symbol === selectedElementSymbol));
      button.tabIndex = element.symbol === selectedElementSymbol ? 0 : -1;
      button.title = `${element.name} (${element.symbol}), Ordnungszahl ${element.atomicNumber}`;

      const number = document.createElement("span");
      number.className = "periodic-element-number";
      number.textContent = String(element.atomicNumber);
      const symbol = document.createElement("strong");
      symbol.textContent = element.symbol;
      button.append(number, symbol);
      button.addEventListener("click", () => chooseElement(element));
      periodicTable.append(button);
    });
  }

  function navigatePeriodicTable(event) {
    const current = elements.find((element) => element.symbol === event.target.dataset.symbol);
    if (!current) {
      return;
    }

    const direction = {
      ArrowLeft: { axis: "group", step: -1 },
      ArrowRight: { axis: "group", step: 1 },
      ArrowUp: { axis: "period", step: -1 },
      ArrowDown: { axis: "period", step: 1 }
    }[event.key];
    if (!direction) {
      return;
    }

    const next = elements
      .filter((element) => {
        const button = periodicTable.querySelector(`[data-symbol="${element.symbol}"]`);
        return button && !button.hidden && (direction.axis === "group"
          ? element.period === current.period && (element.group - current.group) * direction.step > 0
          : element.group === current.group && (element.period - current.period) * direction.step > 0);
      })
      .sort((left, right) => {
        const distance = (element) => Math.abs(element[direction.axis] - current[direction.axis]);
        return distance(left) - distance(right);
      })[0];
    if (next) {
      event.preventDefault();
      chooseElement(next);
      periodicTable.querySelector(`[data-symbol="${next.symbol}"]`).focus();
    }
  }

  function drawEquilibriumAtom(group, x, y, symbol) {
    const isHydrogen = symbol === "H";
    const atom = svgElement("g", {});
    atom.append(svgElement("circle", {
      class: `equilibrium-atom equilibrium-atom-${isHydrogen ? "h" : "n"}`,
      cx: x,
      cy: y,
      r: isHydrogen ? 8 : 10
    }));
    const label = svgElement("text", {
      class: `equilibrium-atom-label${isHydrogen ? " equilibrium-atom-label-h" : ""}`,
      x,
      y: y + 0.5
    });
    label.textContent = symbol;
    atom.append(label);
    group.append(atom);
  }

  function drawEquilibriumMolecule(type, x, y, rotation) {
    const group = svgElement("g", {
      class: type === "ammonia" ? "equilibrium-molecule-ammonia" : "",
      transform: `translate(${x} ${y}) rotate(${rotation})`
    });
    if (type === "ammonia") {
      group.append(svgElement("circle", {
        class: "equilibrium-ammonia-highlight",
        cx: 0,
        cy: 0,
        r: 23
      }));
      const positions = [{ x: -14, y: 12 }, { x: 14, y: 12 }, { x: 0, y: -16 }];
      positions.forEach((position) => {
        group.append(svgElement("line", {
          class: "equilibrium-bond",
          x1: 0,
          y1: 0,
          x2: position.x,
          y2: position.y
        }));
      });
      positions.forEach((position) => drawEquilibriumAtom(group, position.x, position.y, "H"));
      drawEquilibriumAtom(group, 0, 0, "N");
    } else {
      const distance = type === "nitrogen" ? 11 : 9;
      group.append(svgElement("line", {
        class: "equilibrium-bond",
        x1: -distance,
        y1: 0,
        x2: distance,
        y2: 0
      }));
      const symbol = type === "nitrogen" ? "N" : "H";
      drawEquilibriumAtom(group, -distance, 0, symbol);
      drawEquilibriumAtom(group, distance, 0, symbol);
    }
    return group;
  }

  function renderEquilibriumParticles() {
    const particles = [
      ...Array.from({ length: Math.round(equilibriumState.nitrogen) }, () => "nitrogen"),
      ...Array.from({ length: Math.round(equilibriumState.hydrogen) }, () => "hydrogen"),
      ...Array.from({ length: Math.round(equilibriumState.ammonia) }, () => "ammonia")
    ];
    const counts = `${Math.round(equilibriumState.nitrogen)}-${Math.round(equilibriumState.hydrogen)}-${Math.round(equilibriumState.ammonia)}`;
    if (counts === renderedParticleCounts) {
      return;
    }
    renderedParticleCounts = counts;
    const rowCount = Math.max(9, Math.ceil(particles.length / 10));
    const rowSpacing = 432 / (rowCount - 1);
    const slots = [];
    for (let row = 0; row < rowCount; row += 1) {
      for (let column = 0; column < 10; column += 1) {
        slots.push({ x: 55 + column * 76, y: 54 + row * rowSpacing });
      }
    }
    const existingByType = { nitrogen: [], hydrogen: [], ammonia: [] };
    equilibriumParticleMotion.forEach((particle) => existingByType[particle.type].push(particle));
    equilibriumParticleMotion.length = 0;
    const motion = particles.map((type, index) => {
      const particle = existingByType[type].pop();
      if (particle) {
        return particle;
      }
      const slot = slots[index];
      const angle = ((index * 137.5) % 360) * (Math.PI / 180);
      const speedVariation = 0.65 + ((index * 37) % 70) / 100;
      const rotation = (index * 37) % 46 - 23;
      return {
        type,
        element: drawEquilibriumMolecule(type, slot.x, slot.y, rotation),
        x: slot.x + ((index * 31) % 17) - 8,
        y: slot.y + ((index * 19) % 13) - 6,
        velocityX: Math.cos(angle) * speedVariation,
        velocityY: Math.sin(angle) * speedVariation,
        rotation,
        boundary: type === "ammonia" ? 23 : 14
      };
    });
    equilibriumParticleMotion.push(...motion);
    equilibriumParticles.replaceChildren(...motion.map((particle) => particle.element));
  }

  function animateEquilibriumParticles(now) {
    equilibriumAnimationFrame = null;
    if (!equilibriumRunning || equilibriumView.hidden) {
      return;
    }
    const deltaTime = Math.min((now - lastParticleAnimationUpdate) / 1000, 0.05);
    lastParticleAnimationUpdate = now;
    const temperatureSpeeds = [48, 100, 170];
    const speed = temperatureSpeeds[Number(equilibriumTemperature.value)];
    equilibriumParticleMotion.forEach((particle) => {
      particle.x += particle.velocityX * speed * deltaTime;
      particle.y += particle.velocityY * speed * deltaTime;
      const minX = 20 + particle.boundary;
      const maxX = 780 - particle.boundary;
      const minY = 24 + particle.boundary;
      const maxY = 516 - particle.boundary;
      if (particle.x < minX || particle.x > maxX) {
        particle.x = Math.max(minX, Math.min(maxX, particle.x));
        particle.velocityX *= -1;
      }
      if (particle.y < minY || particle.y > maxY) {
        particle.y = Math.max(minY, Math.min(maxY, particle.y));
        particle.velocityY *= -1;
      }
      particle.element.setAttribute(
        "transform",
        `translate(${particle.x} ${particle.y}) rotate(${particle.rotation})`
      );
    });
    equilibriumAnimationFrame = window.requestAnimationFrame(animateEquilibriumParticles);
  }

  function startParticleAnimation() {
    if (
      equilibriumAnimationFrame !== null
      || !equilibriumRunning
      || equilibriumView.hidden
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    lastParticleAnimationUpdate = performance.now();
    equilibriumAnimationFrame = window.requestAnimationFrame(animateEquilibriumParticles);
  }

  function stopParticleAnimation() {
    if (equilibriumAnimationFrame !== null) {
      window.cancelAnimationFrame(equilibriumAnimationFrame);
      equilibriumAnimationFrame = null;
    }
  }

  function calculateAmountConversions() {
    const value = conversionValue.valueAsNumber;
    const molarMass = conversionMolarMass.valueAsNumber;
    const molarVolume = conversionMolarVolume.valueAsNumber;
    const hasMolarMass = conversionMolarMass.value.trim() !== "";
    const hasMolarVolume = conversionMolarVolume.value.trim() !== "";
    if (!Number.isFinite(value) || value < 0) {
      conversionResult.textContent = "Gib einen gültigen Wert grösser oder gleich 0 ein.";
      return;
    }
    if (hasMolarMass && (!Number.isFinite(molarMass) || molarMass <= 0)) {
      conversionResult.textContent = "Die molare Masse M muss grösser als 0 sein.";
      return;
    }
    if (hasMolarVolume && (!Number.isFinite(molarVolume) || molarVolume <= 0)) {
      conversionResult.textContent = "Das molare Gasvolumen Vₘ muss grösser als 0 sein.";
      return;
    }

    let moles;
    if (conversionUnit.value === "mol" || conversionUnit.value === "particles") {
      moles = conversionUnit.value === "mol" ? value : value / AVOGADRO_CONSTANT;
    } else if (conversionUnit.value === "g") {
      if (!Number.isFinite(molarMass) || molarMass <= 0) {
        conversionResult.textContent = "Für die Umrechnung von Masse in Stoffmenge musst du M eingeben.";
        return;
      }
      moles = value / molarMass;
    } else {
      if (!Number.isFinite(molarVolume) || molarVolume <= 0) {
        conversionResult.textContent = "Für die Umrechnung von Gasvolumen in Stoffmenge musst du Vₘ eingeben.";
        return;
      }
      moles = value / molarVolume;
    }

    if (!Number.isFinite(moles)) {
      conversionResult.textContent = "Mit diesen Werten ist keine endliche Umrechnung möglich.";
      return;
    }
    const amountFormatter = new Intl.NumberFormat("de-CH", { maximumSignificantDigits: 6 });
    const particleFormatter = new Intl.NumberFormat("de-CH", { maximumFractionDigits: 0 });
    const formatResult = (label, result, unit, formatter = amountFormatter) => Number.isFinite(result)
      ? `${label} = ${formatter.format(result)} ${unit}`
      : `${label} = ausserhalb des darstellbaren Zahlenbereichs`;
    const results = [`Stoffmenge n = ${amountFormatter.format(moles)} mol`];
    results.push(Number.isFinite(molarMass) && molarMass > 0
      ? formatResult("Masse m", moles * molarMass, "g")
      : "Masse m = Molare Masse M eingeben");
    results.push(Number.isFinite(molarVolume) && molarVolume > 0
      ? formatResult("Gasvolumen V", moles * molarVolume, "L")
      : "Gasvolumen V = Molvolumen Vₘ eingeben");
    results.push(formatResult("Teilchenzahl N", moles * AVOGADRO_CONSTANT, "Teilchen", particleFormatter));
    conversionResult.textContent = results.join("\n");
  }

  function updateEquilibriumConditions() {
    const levels = ["Tief", "Mittel", "Hoch"];
    document.getElementById("equilibrium-temperature-label").textContent = levels[Number(equilibriumTemperature.value)];
    document.getElementById("equilibrium-pressure-label").textContent = levels[Number(equilibriumPressure.value)];
    const { forward, reverse } = equilibriumRates();
    updateEquilibriumDisplay(forward, reverse);
  }

  function updateEquilibriumConstant(forwardRate, reverseRate) {
    if (Math.abs(forwardRate - reverseRate) >= equilibriumRateTolerance()) {
      equilibriumConstantResult.textContent = "Wird berechnet, sobald das Gleichgewicht erreicht ist.";
      return;
    }
    const concentrations = {
      ammonia: Math.round(equilibriumState.ammonia),
      nitrogen: Math.round(equilibriumState.nitrogen),
      hydrogen: Math.round(equilibriumState.hydrogen)
    };
    if (concentrations.nitrogen === 0 || concentrations.hydrogen === 0) {
      equilibriumConstantResult.textContent = "Kc ist mit diesen Modellwerten nicht berechenbar.";
      return;
    }
    const equilibriumConstant = (concentrations.ammonia ** 2)
      / (concentrations.nitrogen * concentrations.hydrogen ** 3);
    const formattedValue = equilibriumConstant !== 0
      && (equilibriumConstant >= 1e5 || equilibriumConstant < 1e-2)
      ? equilibriumConstant.toExponential(2).replace(".", ",")
      : new Intl.NumberFormat("de-CH", { maximumFractionDigits: 2 }).format(equilibriumConstant);
    equilibriumConstantResult.textContent = `Kc ≈ ${formattedValue} L²/mol²`;
  }

  function renderEquilibriumChart() {
    const lines = {
      nitrogen: {
        line: document.getElementById("equilibrium-line-n2"),
        label: document.getElementById("equilibrium-label-n2")
      },
      hydrogen: {
        line: document.getElementById("equilibrium-line-h2"),
        label: document.getElementById("equilibrium-label-h2")
      },
      ammonia: {
        line: document.getElementById("equilibrium-line-nh3"),
        label: document.getElementById("equilibrium-label-nh3")
      }
    };
    const samples = equilibriumState.history.length
      ? equilibriumState.history
      : [equilibriumState];
    const labelPositions = [];
    Object.entries(lines).forEach(([species, elements]) => {
      const points = samples.map((sample, index) => {
        const x = samples.length === 1
          ? 42
          : 42 + (index / (samples.length - 1)) * 303;
        const totalParticles = sample.nitrogen + sample.hydrogen + sample.ammonia;
        const relativeConcentration = totalParticles > 0 ? sample[species] / totalParticles : 0;
        const y = 125 - Math.max(0, Math.min(1, relativeConcentration)) * 100;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      });
      elements.line.setAttribute("points", points.join(" "));
      const lastPoint = points[points.length - 1].split(",");
      labelPositions.push({ label: elements.label, y: Number(lastPoint[1]) });
    });
    labelPositions.sort((first, second) => first.y - second.y);
    labelPositions.forEach((position, index) => {
      position.y = Math.max(position.y, 30 + index * 12);
    });
    const lastPosition = labelPositions[labelPositions.length - 1];
    if (lastPosition.y > 124) {
      const adjustment = lastPosition.y - 124;
      labelPositions.forEach((position) => {
        position.y -= adjustment;
      });
    }
    labelPositions.forEach((position) => {
      position.label.setAttribute("y", position.y.toFixed(1));
    });
  }

  function updateEquilibriumDisplay(forwardRate, reverseRate) {
    renderEquilibriumParticles();
    document.getElementById("equilibrium-n2-count").textContent = String(Math.round(equilibriumState.nitrogen));
    document.getElementById("equilibrium-h2-count").textContent = String(Math.round(equilibriumState.hydrogen));
    document.getElementById("equilibrium-nh3-count").textContent = String(Math.round(equilibriumState.ammonia));
    document.getElementById("equilibrium-time").textContent = `t = ${equilibriumState.elapsed.toFixed(1)} s`;
    const atEquilibrium = Math.abs(forwardRate - reverseRate) < equilibriumRateTolerance();
    const status = atEquilibrium
      ? "Dynamisches Gleichgewicht: Beide Reaktionen laufen gleich schnell."
      : forwardRate > reverseRate
        ? "Die Hinreaktion zu Ammoniak überwiegt."
        : "Die Rückreaktion zu Stickstoff und Wasserstoff überwiegt.";
    document.getElementById("equilibrium-status").textContent = status;
    updateEquilibriumConstant(forwardRate, reverseRate);
    const forwardAbsoluteRate = forwardRate * EQUILIBRIUM_EXTENT_PER_RATE_SECOND * 2;
    const reverseAbsoluteRate = reverseRate * EQUILIBRIUM_EXTENT_PER_RATE_SECOND * 2;
    const updateRateBar = (id, value) => {
      const bar = document.getElementById(id);
      bar.style.width = `${Math.min(100, (value / EQUILIBRIUM_RATE_BAR_SCALE) * 100)}%`;
      bar.parentElement.setAttribute("aria-valuenow", String(Math.min(value, EQUILIBRIUM_RATE_BAR_SCALE)));
    };
    updateRateBar("equilibrium-forward-rate", forwardAbsoluteRate);
    updateRateBar("equilibrium-reverse-rate", reverseAbsoluteRate);
    const formatRate = new Intl.NumberFormat("de-CH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3
    });
    document.getElementById("equilibrium-forward-absolute-rate").textContent =
      `Δc/Δt = ${formatRate.format(forwardAbsoluteRate)} Modell-Einheiten/s`;
    document.getElementById("equilibrium-reverse-absolute-rate").textContent =
      `Δc/Δt = ${formatRate.format(reverseAbsoluteRate)} Modell-Einheiten/s`;
    const displayedParticleCount = Math.round(equilibriumState.nitrogen)
      + Math.round(equilibriumState.hydrogen)
      + Math.round(equilibriumState.ammonia);
    equilibriumAddProduct.disabled = displayedParticleCount >= EQUILIBRIUM_PARTICLE_LIMIT;
    const hasDisplayedAmmonia = Math.round(equilibriumState.ammonia) > 0;
    equilibriumRemoveProduct.disabled = !hasDisplayedAmmonia;
    equilibriumRemoveProduct.setAttribute("aria-disabled", String(!hasDisplayedAmmonia));
    document.getElementById("equilibrium-diagram-desc").textContent =
      `${Math.round(equilibriumState.nitrogen)} Stickstoff-, ${Math.round(equilibriumState.hydrogen)} Wasserstoff- und ${Math.round(equilibriumState.ammonia)} Ammoniakmoleküle in einem geschlossenen Gefäss.`;
  }

  function equilibriumRateFactors() {
    const temperatureShiftFactors = [10, 1, 0.04];
    const pressureShiftFactors = [0.06, 1, 10];
    const temperatureRateFactors = [0.7, 1, 1.5];
    const pressureRateFactors = [0.7, 1, 1.4];
    const temperatureIndex = Number(equilibriumTemperature.value);
    const pressureIndex = Number(equilibriumPressure.value);
    const equilibriumShiftFactor = temperatureShiftFactors[temperatureIndex]
      * pressureShiftFactors[pressureIndex];
    const kineticFactor = temperatureRateFactors[temperatureIndex]
      * pressureRateFactors[pressureIndex];
    const catalystFactor = equilibriumCatalystFactor();
    return { equilibriumShiftFactor, kineticFactor, catalystFactor };
  }

  function equilibriumRates() {
    const { equilibriumShiftFactor, kineticFactor, catalystFactor } = equilibriumRateFactors();
    const forward = Math.max(0, equilibriumState.nitrogen / 20)
      * Math.pow(Math.max(0, equilibriumState.hydrogen / 60), 3)
      * equilibriumShiftFactor * kineticFactor * catalystFactor;
    const reverse = 0.25
      * Math.pow(Math.max(0, equilibriumState.ammonia / 40), 2)
      * kineticFactor * catalystFactor;
    return { forward, reverse };
  }

  function equilibriumRateTolerance() {
    const temperatureRateFactors = [0.7, 1, 1.5];
    const pressureRateFactors = [0.7, 1, 1.4];
    const kineticFactor = temperatureRateFactors[Number(equilibriumTemperature.value)]
      * pressureRateFactors[Number(equilibriumPressure.value)];
    return 0.006 * kineticFactor * equilibriumCatalystFactor();
  }

  function equilibriumCatalystFactor() {
    return equilibriumCatalyst.checked ? 36 : 1;
  }

  function updateEquilibrium(now) {
    const deltaTime = Math.min((now - lastEquilibriumUpdate) / 1000, 0.25);
    lastEquilibriumUpdate = now;
    if (equilibriumRunning && deltaTime > 0) {
      const { forward, reverse } = equilibriumRates();
      const extent = Math.max(
        -Math.min(equilibriumState.ammonia / 2, 1),
        Math.min((forward - reverse) * EQUILIBRIUM_EXTENT_PER_RATE_SECOND * deltaTime, equilibriumState.nitrogen, equilibriumState.hydrogen / 3)
      );
      equilibriumState.nitrogen = Math.max(0, equilibriumState.nitrogen - extent);
      equilibriumState.hydrogen = Math.max(0, equilibriumState.hydrogen - extent * 3);
      equilibriumState.ammonia = Math.max(0, equilibriumState.ammonia + extent * 2);
      equilibriumState.elapsed += deltaTime;
      equilibriumState.history.push({
        nitrogen: equilibriumState.nitrogen,
        hydrogen: equilibriumState.hydrogen,
        ammonia: equilibriumState.ammonia
      });
      if (equilibriumState.history.length > 70) {
        equilibriumState.history.shift();
      }
    }
    const { forward, reverse } = equilibriumRates();
    updateEquilibriumDisplay(forward, reverse);
    if (now - lastChartUpdate > 350) {
      renderEquilibriumChart();
      lastChartUpdate = now;
    }
  }

  function startEquilibriumTimer() {
    if (equilibriumTimer !== null) {
      return;
    }
    lastEquilibriumUpdate = performance.now();
    equilibriumTimer = window.setInterval(() => updateEquilibrium(performance.now()), 100);
    startParticleAnimation();
  }

  function stopEquilibriumTimer() {
    if (equilibriumTimer !== null) {
      window.clearInterval(equilibriumTimer);
      equilibriumTimer = null;
    }
    stopParticleAnimation();
  }

  function resetEquilibrium() {
    equilibriumState.nitrogen = 20;
    equilibriumState.hydrogen = 60;
    equilibriumState.ammonia = 0;
    equilibriumState.addedAmmonia = 0;
    equilibriumState.history = [];
    equilibriumState.elapsed = 0;
    equilibriumRunning = true;
    equilibriumPlay.setAttribute("aria-label", "Simulation pausieren");
    equilibriumPlay.title = "Simulation pausieren";
    equilibriumPlay.setAttribute("aria-pressed", "true");
    startParticleAnimation();
    const { forward, reverse } = equilibriumRates();
    updateEquilibriumDisplay(forward, reverse);
    renderEquilibriumChart();
  }

  function resetView() {
    rotationX = -0.2;
    rotationY = 0.45;
    renderModel();
  }

  const initialModelMode = restoreSimulationPreferences();
  renderPeriodicTable();
  filterElements();
  periodicTable.addEventListener("keydown", navigatePeriodicTable);
  elementSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = elementSearch.value.trim().toLocaleLowerCase("de");
      const match = elements.find((element) => !query || `${element.atomicNumber} ${element.name} ${element.symbol}`.toLocaleLowerCase("de").includes(query));
      if (match) {
        event.preventDefault();
        chooseElement(match);
        periodicTable.querySelector(`[data-symbol="${match.symbol}"]`).focus();
      }
    }
  });
  moleculeMode.addEventListener("click", () => setModelMode("molecule"));
  atomMode.addEventListener("click", () => setModelMode("atom"));
  equilibriumMode.addEventListener("click", () => setModelMode("equilibrium"));
  conversionMode.addEventListener("click", () => setModelMode("conversion"));
  Object.entries(moleculeRepresentations).forEach(([representation, button]) => {
    button.addEventListener("click", () => setMoleculeRepresentation(representation));
  });
  setMoleculeRepresentation(moleculeRepresentation);
  bohrRepresentation.addEventListener("click", () => {
    atomRepresentation = "bohr";
    drawAtom();
  });
  coreRepresentation.addEventListener("click", () => {
    atomRepresentation = "core";
    drawAtom();
  });
  select.addEventListener("change", showMolecule);
  elementSearch.addEventListener("input", filterElements);
  equilibriumTemperature.addEventListener("input", updateEquilibriumConditions);
  equilibriumPressure.addEventListener("input", updateEquilibriumConditions);
  equilibriumCatalyst.addEventListener("change", updateEquilibriumConditions);
  conversionValue.addEventListener("input", calculateAmountConversions);
  conversionUnit.addEventListener("change", calculateAmountConversions);
  conversionMolarMass.addEventListener("input", calculateAmountConversions);
  conversionMolarVolume.addEventListener("input", calculateAmountConversions);
  equilibriumPlay.addEventListener("click", () => {
    equilibriumRunning = !equilibriumRunning;
    const playLabel = equilibriumRunning ? "Simulation pausieren" : "Simulation fortsetzen";
    equilibriumPlay.setAttribute("aria-label", playLabel);
    equilibriumPlay.title = playLabel;
    equilibriumPlay.setAttribute("aria-pressed", String(equilibriumRunning));
    lastEquilibriumUpdate = performance.now();
    if (equilibriumRunning) {
      startParticleAnimation();
    } else {
      stopParticleAnimation();
    }
  });
  equilibriumAddProduct.addEventListener("click", () => {
    const displayedParticleCount = Math.round(equilibriumState.nitrogen)
      + Math.round(equilibriumState.hydrogen)
      + Math.round(equilibriumState.ammonia);
    if (displayedParticleCount < EQUILIBRIUM_PARTICLE_LIMIT) {
      equilibriumState.ammonia += 1;
      equilibriumState.addedAmmonia += 1;
      equilibriumState.history.push({
        nitrogen: equilibriumState.nitrogen,
        hydrogen: equilibriumState.hydrogen,
        ammonia: equilibriumState.ammonia
      });
      if (equilibriumState.history.length > 70) {
        equilibriumState.history.shift();
      }
      const { forward, reverse } = equilibriumRates();
      updateEquilibriumDisplay(forward, reverse);
      renderEquilibriumChart();
    }
  });
  equilibriumRemoveProduct.addEventListener("click", () => {
    if (Math.round(equilibriumState.ammonia) > 0) {
      equilibriumState.ammonia = Math.max(0, equilibriumState.ammonia - 1);
      equilibriumState.addedAmmonia = Math.max(0, equilibriumState.addedAmmonia - 1);
      equilibriumState.history.push({
        nitrogen: equilibriumState.nitrogen,
        hydrogen: equilibriumState.hydrogen,
        ammonia: equilibriumState.ammonia
      });
      if (equilibriumState.history.length > 70) {
        equilibriumState.history.shift();
      }
      const { forward, reverse } = equilibriumRates();
      updateEquilibriumDisplay(forward, reverse);
      renderEquilibriumChart();
    }
  });
  equilibriumReset.addEventListener("click", resetEquilibrium);
  electronToggle.addEventListener("click", () => {
    showLonePairs = !showLonePairs;
    electronToggle.setAttribute("aria-pressed", String(showLonePairs));
    electronToggle.textContent = showLonePairs
      ? "Freie Elektronenpaare ausblenden"
      : "Freie Elektronenpaare einblenden";
    renderModel();
  });
  canvas.addEventListener("pointerdown", (event) => {
    if (moleculeRepresentation !== "ballStick") {
      return;
    }
    const atom = event.target.closest(".molecule-atom");
    if (atom) {
      selectAtom(Number(atom.dataset.atomIndex));
    }
    activePointer = event.pointerId;
    dragStart = { x: event.clientX, y: event.clientY };
    suppressClick = false;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (moleculeRepresentation !== "ballStick" || event.pointerId !== activePointer || !dragStart) {
      return;
    }
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) {
      suppressClick = true;
      canvas.classList.add("is-dragging");
    }
    rotationY += dx * 0.009;
    rotationX = Math.max(-1.45, Math.min(1.45, rotationX + dy * 0.009));
    dragStart = { x: event.clientX, y: event.clientY };
    renderModel();
  });
  function endDrag(event) {
    if (event.pointerId === activePointer) {
      activePointer = null;
      dragStart = null;
      canvas.classList.remove("is-dragging");
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    }
  }
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);
  canvas.addEventListener("keydown", (event) => {
    if (moleculeRepresentation !== "ballStick") {
      return;
    }
    const rotationStep = 0.12;
    if (event.key === "ArrowLeft") {
      rotationY -= rotationStep;
    } else if (event.key === "ArrowRight") {
      rotationY += rotationStep;
    } else if (event.key === "ArrowUp") {
      rotationX = Math.max(-1.45, rotationX - rotationStep);
    } else if (event.key === "ArrowDown") {
      rotationX = Math.min(1.45, rotationX + rotationStep);
    } else if (event.key === "Home") {
      resetView();
      return;
    } else {
      return;
    }
    event.preventDefault();
    renderModel();
  });

  showMolecule();
  drawAtom();
  updateEquilibriumConditions();
  resetEquilibrium();
  calculateAmountConversions();
  setModelMode(initialModelMode);
})();
