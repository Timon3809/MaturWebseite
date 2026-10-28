(function () {
  const sections = {
    index: {
      brand: { mark: "M", name: "Vormatur", tag: "STARTSEITE", href: "index.html" },
      links: [
        { label: "Fachübersicht", href: "index.html",                 icon: "⌂", page: "home" },
        { label: "Geschichte",    href: "Geschichte/index.html",      icon: "▣", page: "history" },
        { label: "Chemie",        href: "Chemie/index.html",         icon: "⚗", page: "chemistry" },
        { label: "Geographie",    href: "Geographie/index.html",      icon: "◎", page: "geography" }
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
        { label: "Dateien",           href: "dateien.html",            icon: "↓", page: "files" },
        { label: "Prüfungssimulator", href: "pruefungssimulator.html", icon: "▤", page: "simulator" }
      ]
    },
    geographie: {
      brand: { mark: "Geo", name: "Vormatur", tag: "GEOGRAPHIE", href: "../index.html" },
      links: [
        { label: "Übersicht",         href: "index.html",                    icon: "◎", page: "overview" },
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
  const config      = sections[section];


  const brand     = document.createElement("a");
  brand.className = "brand";
  brand.href      = config.brand.href;
  brand.innerHTML = `
    <span class="brand-mark">${config.brand.mark}</span>
    <span class="brand-copy"><strong>${config.brand.name}</strong><small>${config.brand.tag}</small></span>
  `;

  const nav = document.createElement("nav");
  nav.className = "main-nav";
  nav.innerHTML = config.links.map((link) => {
    const isActive  = link.page === currentPage;
    return `
      <a class="nav-link${isActive ? " is-active" : ""}" href="${link.href}">
        <span class="nav-icon">${link.icon}</span>
        ${link.label}
      </a>
    `;
  }).join("");

  sidebar.replaceChildren(brand, nav);
})();
