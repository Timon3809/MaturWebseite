(function () {
  const themeStorageKey = "vormatur-theme";
  const savedTheme = localStorage.getItem(themeStorageKey);
  const isDark = savedTheme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  const sections = {
    index: {
      brand: { mark: "M", name: "Vormatur", tag: "STARTSEITE", href: "index.html" },
      links: [
        { label: "Fachübersicht", href: "index.html",                 icon: "⌂", page: "home" },
        { label: "Geschichte",    href: "Geschichte/index.html",      icon: "▣", page: "history" },
        { label: "Chemie",        href: "Chemie/index.html",         icon: "⚗", page: "chemistry" },
        { label: "Geographie",    href: "Geographie/index.html",      icon: "◎", page: "geography" },
        { label: "Biologie",      href: "Biologie/index.html",        icon: "❀", page: "biology" }
      ]
    },
    geschichte: {
      brand: { mark: "G", name: "Vormatur", tag: "GESCHICHTE", href: "../index.html" },
      links: [
        { label: "Übersicht",         href: "index.html",          icon: "▣", page: "overview" },
        { label: "Zusammenfassungen", href: "zusammenfassungen.html",   icon: "▧", page: "summaries" },
        { label: "Glossar",           href: "glossar.html",             icon: "⌕",  page: "glossary" },
        { label: "Ewige Daten",       href: "ewige-daten.html",         icon: "◷", page: "eternal-data" },
        { label: "Dateien",           href: "dateien.html",              icon: "↓", page: "files" },
        { label: "Prüfungssimulator", href: "pruefungssimulator.html",  icon: "▤", page: "simulator" }
      ]
    },
    chemie: {
      brand: { mark: "Ch", name: "Vormatur", tag: "CHEMIE", href: "../index.html" },
      links: [
        { label: "Übersicht",         href: "index.html",                    icon: "⚗", page: "overview" },
        { label: "Zusammenfassungen", href: "zusammenfassungen.html",  icon: "▧", page: "summaries" },
        { label: "Glossar",           href: "glossar.html",            icon: "⌕", page: "glossary" },
        { label: "Applets", href: "simulationen.html", icon: "⚛", page: "models" },
        { label: "Dateien",           href: "dateien.html",            icon: "↓", page: "files" }
      ]
    },
    geographie: {
      brand: { mark: "Gg", name: "Vormatur", tag: "GEOGRAPHIE", href: "../index.html" },
      links: [
        { label: "Übersicht",         href: "index.html",                    icon: "◎", page: "overview" },
        { label: "Zusammenfassungen", href: "zusammenfassungen.html",        icon: "▧", page: "summaries" },
        { label: "Glossar",           href: "glossar.html",                  icon: "⌕", page: "glossary" },
        { label: "Applets", href: "programme.html",   icon: "◈", page: "programs" },
        { label: "Dateien",           href: "dateien.html",                  icon: "↓", page: "files" }
      ]
    },
    physikapplets: {
      brand: { mark: "Ph", name: "Vormatur", tag: "PHYSIKAPPLETS", href: "../index.html" },
      links: [
        { label: "Übersicht", href: "index.html", icon: "◈", page: "overview" }
      ]
    },
    franzoesisch: {
      brand: { mark: "F", name: "Vormatur", tag: "FRANZÖSISCH", href: "../index.html" },
      links: [
        { label: "Übersicht",         href: "index.html",                    icon: "”", page: "overview" },
        { label: "Grammatik",         href: "grammatik.html",               icon: "✎", page: "grammar" },
        { label: "Dateien",           href: "dateien.html",                  icon: "↓", page: "files" }
      ]
    },
    biologie: {
      brand: { mark: "B", name: "Vormatur", tag: "BIOLOGIE", href: "../index.html" },
      links: [
        { label: "Übersicht",         href: "index.html",                    icon: "❀", page: "overview" },
        { label: "Zusammenfassungen", href: "zusammenfassungen.html",        icon: "▧", page: "summaries" },
        { label: "Glossar",           href: "glossar.html",                  icon: "⌕", page: "glossary" },
        { label: "Dateien",           href: "dateien.html",                  icon: "↓", page: "files" }
      ]
    }
  };

  const sidebar = document.querySelector(".sidebar[data-nav-section]");
  if (!sidebar) {
    return;
  }

  const section     = sidebar.dataset.navSection;
  const currentPage = sidebar.dataset.navPage;
  const navBase     = sidebar.dataset.navBase || "";
  const config      = sections[section];

  const header = document.querySelector(".workspace > header");
  if (header) {
    let topbarActions = header.querySelector(".topbar-right");
    if (!topbarActions) {
      topbarActions = document.createElement("div");
      topbarActions.className = "topbar-right";
      header.append(topbarActions);
    }

    const themeToggle = document.createElement("button");
    themeToggle.className = "theme-toggle";
    themeToggle.type = "button";
    themeToggle.setAttribute("role", "switch");
    themeToggle.setAttribute("aria-label", "Dunkelmodus");
    themeToggle.setAttribute("aria-checked", String(isDark));
    themeToggle.title = "Dunkelmodus";
    themeToggle.innerHTML = `
      <span class="theme-toggle-icon" aria-hidden="true">${isDark ? "☾" : "☼"}</span>
      <span class="theme-toggle-label">${isDark ? "Dunkel" : "Hell"}</span>
      <span class="theme-toggle-track" aria-hidden="true"><span></span></span>
    `;
    themeToggle.addEventListener("click", () => {
      const nextIsDark = document.documentElement.dataset.theme !== "dark";
      document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
      themeToggle.setAttribute("aria-checked", String(nextIsDark));
      themeToggle.querySelector(".theme-toggle-icon").textContent = nextIsDark ? "☾" : "☼";
      themeToggle.querySelector(".theme-toggle-label").textContent = nextIsDark ? "Dunkel" : "Hell";
      localStorage.setItem(themeStorageKey, nextIsDark ? "dark" : "light");
    });
    topbarActions.append(themeToggle);
  }

  const brand     = document.createElement("a");
  brand.className = "brand";
  brand.href      = navBase + config.brand.href;
  brand.innerHTML = `
    <span class="brand-mark">${config.brand.mark}</span>
    <span class="brand-copy"><strong>${config.brand.name}</strong><small>${config.brand.tag}</small></span>
  `;

  const nav = document.createElement("nav");
  nav.className = "main-nav";
  nav.innerHTML = config.links.map((link) => {
    const isActive  = link.page === currentPage;
    return `
      <a class="nav-link${isActive ? " is-active" : ""}" href="${navBase}${link.href}">
        ${link.label}
      </a>
    `;
  }).join("");

  sidebar.replaceChildren(brand, nav);
})();
