window.summaryData = {
  topics: [
    {
      id: "topic-1",
      name: "Atombau",
      subtopics: [
        { name: "Atommodelle - erste Gehversuche", placeholder: true },
        { name: "Elementarteilchen", placeholder: true },
        { name: "Elektrische Ladungen", placeholder: true },
        { name: "Das Kern-Hülle-Modell", placeholder: true },
        { name: "Die Zusammensetzung von Atomen", placeholder: true },
        { name: "Isotope", placeholder: true },
        { name: "Genauere Betrachtung der Elektronenhülle", placeholder: true },
        { name: "Von Ionisierungsenergien zum Bohr'schen Atommodell", placeholder: true },
        { name: "Das Periodensystem", placeholder: true },
        { name: "Elementfamilien", placeholder: true },
        { name: "Atomrumpf und Rumpfladung", placeholder: true },
        { name: "Licht und Elektronenhülle", placeholder: true },
        { name: "Grenzen des Bohr'schen Atommodells", placeholder: true },
        { name: "Bohr-Sommerfeld'sches Atommodell", placeholder: true },
        { name: "Orbital-Modell", placeholder: true }
      ]
    },
    {
      id: "topic-2",
      name: "Moleküle und molekulare Stoffe",
      subtopics: [
        { name: "Stoffe und ihre Bausteine", placeholder: true },
        { name: "Wechselwirkungen zwischen geladenen Teilchen", placeholder: true },
        { name: "Die Energie eines Systems aus zwei Wasserstoff-Atomen", placeholder: true },
        { name: "Die Elektronenpaarbindung", placeholder: true },
        { name: "Die Edelgasregel", placeholder: true },
        { name: "Der räumliche Bau von Molekülen", placeholder: true },
        { name: "Die Polarität von Bindungen", placeholder: true },
        { name: "Dipol-Moleküle", placeholder: true },
        { name: "Zwischenmolekulare Kräfte (ZMK)", placeholder: true },
        { name: "Siedepunkt von Reinstoffen", placeholder: true },
        { name: "Mischbarkeit / Löslichkeit", placeholder: true },
        { name: "Nomenklatur", placeholder: true },
        { name: "Struktur und Eigenschaften", placeholder: true }
      ]
    },
    {
      id: "topic-3",
      name: "Salze",
      subtopics: [
        {
          name: "Kochsalz",
          summary: `
            <h3>Ein Salz aus Ionen</h3>
            <ul>
              <li>Kochsalz ist der Stoff <strong>Natriumchlorid</strong> mit der Verhältnisformel <strong>NaCl</strong>.</li>
              <li>Es besteht nicht aus einzelnen NaCl-Molekülen, sondern aus einem regelmässigen Ionengitter mit Na<sup>+</sup>- und Cl<sup>−</sup>-Ionen.</li>
              <li>Das Zahlenverhältnis der Ionen ist 1:1; positive und negative Ladungen gleichen sich aus. Der Salzkristall ist nach aussen elektrisch neutral.</li>
              <li>Als Feststoff sind die Ionen an ihre Gitterplätze gebunden; in einer Salzlösung können sie sich bewegen.</li>
            </ul>
          `
        },
        {
          name: "Die Bildung von Salzen aus Metallen und Nichtmetallen",
          summary: `
            <h3>Elektronenübertragung</h3>
            <ul>
              <li>Metallatome geben häufig Valenzelektronen ab und werden zu positiv geladenen <strong>Kationen</strong>.</li>
              <li>Nichtmetallatome nehmen häufig Elektronen auf und werden zu negativ geladenen <strong>Anionen</strong>.</li>
              <li>Beide Ionen erreichen dabei oft eine stabilere, edelgasähnliche Elektronenhülle.</li>
              <li>Die entgegengesetzt geladenen Ionen ziehen sich elektrostatisch an; viele Ionen ordnen sich zu einem Salz zusammen.</li>
            </ul>
            <h3>Beispiel: Natriumchlorid</h3>
            <ul>
              <li><strong>Na → Na<sup>+</sup> + e<sup>−</sup></strong>: Natrium gibt ein Elektron ab.</li>
              <li><strong>Cl + e<sup>−</sup> → Cl<sup>−</sup></strong>: Chlor nimmt ein Elektron auf.</li>
              <li>Im entstehenden Salz gleichen sich die Ladungen aus; Na<sup>+</sup> und Cl<sup>−</sup> liegen im Verhältnis 1:1 vor.</li>
            </ul>
          `
        },
        {
          name: "Ionenbindung und Ionengitter",
          summary: `
            <h3>Ionenbindung</h3>
            <ul>
              <li>Ionenbindung = elektrostatische Anziehung zwischen Kationen und Anionen.</li>
              <li>Die Anziehung wirkt in alle Richtungen; ein Salz bildet deshalb normalerweise kein einzelnes Molekül, sondern ein ausgedehntes Gitter.</li>
              <li>Im Ionengitter sind die Ionen so angeordnet, dass Anziehungen möglichst gross und Abstossungen möglichst klein sind.</li>
              <li>Jedes Ion ist von mehreren Ionen mit entgegengesetzter Ladung umgeben; die Anzahl der Nachbarn hängt von der Gitterstruktur ab.</li>
              <li>Das gesamte Gitter bleibt elektrisch neutral, auch wenn die einzelnen Ionen geladen sind.</li>
            </ul>
          `
        },
        {
          name: "Verhältnisformeln und Nomenklatur von Salzen",
          summary: `
            <h3>Verhältnisformel aufstellen</h3>
            <ol>
              <li>Ladungen von Kation und Anion bestimmen.</li>
              <li>Die Anzahl der Ionen so wählen, dass die Gesamtladung null ist.</li>
              <li>Das kleinste ganzzahlige Verhältnis als Indizes schreiben; Indizes nicht als Ladungen lesen.</li>
            </ol>
            <ul>
              <li>Beispiele: Na<sup>+</sup> + Cl<sup>−</sup> → <strong>NaCl</strong>; Ca<sup>2+</sup> + 2 F<sup>−</sup> → <strong>CaF<sub>2</sub></strong>.</li>
              <li>Ein Gitter kann mehrere Formeleinheiten enthalten. Eine Verhältnisformel beschreibt das Zahlenverhältnis, keine einzelne Moleküleinheit.</li>
            </ul>
            <h3>Salze benennen</h3>
            <ul>
              <li>Name des Kations (meist Metallname), danach Name des Anions, z. B. Natriumchlorid, Calciumfluorid.</li>
              <li>Bei Metallen mit unterschiedlichen möglichen Ladungen wird die Ladung mit römischer Zahl angegeben.</li>
              <li>Einatomige Nichtmetall-Anionen erhalten häufig die Endung <strong>-id</strong>: Chlorid, Oxid, Sulfid.</li>
              <li>Die Ladungen werden in der neutralen Stoffformel nicht dazugeschrieben; sie dienen zum Ermitteln der Indizes.</li>
            </ul>
            <div class="summary-table-wrap">
              <table class="summary-note-table">
                <caption>Namensregel</caption>
                <tbody><tr><td>Name des Metalls + Name des Nichtmetall-Ions</td></tr></tbody>
              </table>
            </div>
            <div class="summary-table-wrap">
              <table class="summary-note-table">
                <caption>Metalle mit mehreren möglichen Ladungen</caption>
                <tbody><tr><td>Die Ladung wird mit römischen Ziffern angegeben, z. B. Titan(IV)-oxid.</td></tr></tbody>
              </table>
            </div>
          `
        },
        {
          name: "Molekül-Ionen",
          summary: `
            <h3>Mehratomige Ionen</h3>
            <ul>
              <li>Ein Molekül-Ion (mehratomiges Ion) besteht aus mehreren kovalent gebundenen Atomen und trägt als Ganzes eine Ladung.</li>
              <li>In einem Salz bleibt das mehratomige Ion als Einheit erhalten; bei Verhältnisformeln muss seine Gesamtladung ausgeglichen werden.</li>
              <li>Beispiele für Kationen: Ammonium <strong>NH<sub>4</sub><sup>+</sup></strong>, Oxonium/Hydronium <strong>H<sub>3</sub>O<sup>+</sup></strong>.</li>
            </ul>
            <div class="summary-table-wrap">
              <table>
                <caption>Unregelmässige einatomige Ionen</caption>
                <thead><tr><th scope="col">Ion</th><th scope="col">Name des Ions</th><th scope="col">Element</th></tr></thead>
                <tbody>
                  <tr><td>N<sup>3−</sup></td><td>Nitrid-Ion</td><td>Stickstoff</td></tr>
                  <tr><td>O<sup>2−</sup></td><td>Oxid-Ion</td><td>Sauerstoff</td></tr>
                  <tr><td>S<sup>2−</sup></td><td>Sulfid-Ion</td><td>Schwefel</td></tr>
                  <tr><td>H<sup>−</sup></td><td>Hydrid-Ion</td><td>Wasserstoff</td></tr>
                  <tr><td>C<sup>4−</sup></td><td>Carbid-Ion</td><td>Kohlenstoff</td></tr>
                </tbody>
              </table>
            </div>
            <div class="summary-table-wrap">
              <table>
                <caption>Unregelmässige mehratomige Ionen (Endung -at oder -it)</caption>
                <thead><tr><th scope="col">Formel</th><th scope="col">Name des Ions</th></tr></thead>
                <tbody>
                  <tr><td>NH<sub>4</sub><sup>+</sup></td><td>Ammonium-Ion</td></tr>
                  <tr><td>H<sub>3</sub>O<sup>+</sup></td><td>Hydronium-Ion</td></tr>
                  <tr><td>OH<sup>−</sup></td><td>Hydroxid-Ion</td></tr>
                  <tr><td>CO<sub>3</sub><sup>2−</sup></td><td>Carbonat-Ion</td></tr>
                  <tr><td>HCO<sub>3</sub><sup>−</sup></td><td>Hydrogencarbonat-Ion</td></tr>
                  <tr><td>PO<sub>4</sub><sup>3−</sup></td><td>Phosphat-Ion</td></tr>
                  <tr><td>HPO<sub>4</sub><sup>2−</sup></td><td>Hydrogenphosphat</td></tr>
                  <tr><td>H<sub>2</sub>PO<sub>4</sub><sup>−</sup></td><td>Dihydrogenphosphat</td></tr>
                  <tr><td>SO<sub>4</sub><sup>2−</sup></td><td>Sulfat-Ion</td></tr>
                  <tr><td>HSO<sub>4</sub><sup>−</sup></td><td>Hydrogensulfat-Ion</td></tr>
                  <tr><td>NO<sub>3</sub><sup>−</sup></td><td>Nitrat-Ion</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          name: "Gitterenergie von Salzen",
          summary: `
            <h3>Energie beim Trennen und Zusammenlagern</h3>
            <ul>
              <li>Beim Herauslösen von Ionen aus dem Ionengitter muss die elektrostatische Anziehung überwunden werden.</li>
              <li>Die dazu benötigte Energie heisst <strong>Gitterenergie</strong>.</li>
              <li>Wenn sich Wassermoleküle um einzelne Ionen anordnen, wird <strong>Hydratationsenergie</strong> frei.</li>
              <li>Die Energiebilanz beim Lösen hängt davon ab, wie Gitterenergie und frei werdende Hydratationsenergie zusammenwirken.</li>
              <li>Überwiegt die frei werdende Hydratationsenergie, wird die Lösung wärmer (exothermer Vorgang); überwiegt die benötigte Gitterenergie, kühlt sie ab (endothermer Vorgang).</li>
              <li>Die Energiebilanz allein ist nicht die ganze Erklärung der Löslichkeit; auch die Unordnung bzw. Entropie spielt eine Rolle.</li>
            </ul>
          `
        },
        {
          name: "Eigenschaften von Salzen",
          summary: `
            <h3>Eigenschaften und Teilchenmodell</h3>
            <ul>
              <li><strong>Elektrische Leitfähigkeit:</strong> Festes Salz leitet normalerweise nicht, weil die Ionen im Gitter gebunden sind. In einer Salzschmelze oder Salzlösung sind Ionen beweglich und können Ladung transportieren.</li>
              <li><strong>Sprödigkeit:</strong> Werden Gitterebenen verschoben, können gleich geladene Ionen nebeneinander zu liegen kommen. Ihre Abstossung lässt den Kristall brechen.</li>
              <li><strong>Hohe Schmelztemperaturen:</strong> Zum Trennen der Ionen ist viel Energie nötig, da die elektrostatischen Gitterkräfte stark sind.</li>
              <li>Die Eigenschaften folgen aus dem Aufbau des Ionengitters und unterscheiden sich dadurch von vielen molekularen Stoffen.</li>
            </ul>
          `
        },
        {
          name: "Löseprozesse",
          summary: `
            <h3>Lösen in Wasser: Hydratation</h3>
            <ol>
              <li>Wassermoleküle sind Dipole: Die Sauerstoffseite ist teilweise negativ, die Wasserstoffseiten teilweise positiv.</li>
              <li>Die Sauerstoffseite richtet sich zu Kationen aus; die Wasserstoffseiten richten sich zu Anionen aus.</li>
              <li>Wassermoleküle ziehen Ionen aus dem Gitter und umgeben sie mit einer <strong>Hydrathülle</strong>.</li>
              <li>Die hydratisierten Ionen verteilen sich in der Lösung und können sich bewegen.</li>
            </ol>
            <ul>
              <li><strong>Dissoziation:</strong> Aufspaltung eines ionischen Stoffes in seine Ionen beim Lösen, z. B. NaCl(s) → Na<sup>+</sup>(aq) + Cl<sup>−</sup>(aq).</li>
              <li>Das Zustandszeichen <strong>(aq)</strong> bedeutet, dass Teilchen in wässriger Lösung vorliegen.</li>
              <li>Die Löslichkeit ist von Stoff zu Stoff verschieden; sie hängt unter anderem vom Verhältnis zwischen Gitterkräften und Wechselwirkungen mit Wasser ab.</li>
              <li>Eine grössere Ionenladung kann stärkere Gitterkräfte bedeuten, bestimmt die Löslichkeit aber nicht allein.</li>
            </ul>
            <div class="summary-table-wrap">
              <table class="summary-note-table">
                <caption>Merksatz zur Löslichkeit</caption>
                <tbody><tr><td>Je höher die Ionenladung, desto schlechter löslich (Gitterkräfte sind grösser).</td></tr></tbody>
              </table>
            </div>
          `
        },
        {
          name: "Schwerlösliche Salze - Fällungsreaktion",
          summary: `
            <h3>Niederschlag aus zwei Salzlösungen</h3>
            <div class="summary-table-wrap">
              <table class="summary-note-table">
                <caption>Beobachtung</caption>
                <tbody><tr><td>Das Zusammengiessen zweier gut löslicher Salze kann ein schwerlösliches Salz bilden. Das Wasser wird trüb und es entsteht ein Niederschlag.</td></tr></tbody>
              </table>
            </div>
            <ul>
              <li>Beim Mischen zweier gut löslicher Salze können ihre Ionen neu kombiniert werden.</li>
              <li>Entsteht dabei ein schwerlösliches Salz, scheidet es sich als fester <strong>Niederschlag</strong> ab; die Lösung kann trüb werden.</li>
              <li>Ob ein Niederschlag entsteht, hängt von der Löslichkeit der möglichen Produkte ab.</li>
            </ul>
            <h3>Beispiel: Silberchlorid</h3>
            <p>Beim Mischen von Natriumchlorid- und Silbernitratlösung entsteht schwerlösliches Silberchlorid:</p>
            <ul>
              <li><strong>Teilchengleichung:</strong> Na<sup>+</sup>(aq) + Cl<sup>−</sup>(aq) + Ag<sup>+</sup>(aq) + NO<sub>3</sub><sup>−</sup>(aq) → AgCl(s) + Na<sup>+</sup>(aq) + NO<sub>3</sub><sup>−</sup>(aq)</li>
              <li>Natrium- und Nitrationen bleiben unverändert in Lösung und sind <strong>Zuschauer-Ionen</strong>.</li>
              <li><strong>Nettogleichung:</strong> Ag<sup>+</sup>(aq) + Cl<sup>−</sup>(aq) → AgCl(s)</li>
            </ul>
          `
        },
        {
          name: "Exkurse",
          summary: `
            <h3>Valenzelektronen eines Molekül-Ions zählen</h3>
            <p>Beispiel Sulfat-Ion SO<sub>4</sub><sup>2−</sup>:</p>
            <ol>
              <li>Valenzelektronen der Atome addieren: S besitzt 6, jedes O besitzt 6; insgesamt 6 + 4 · 6 = 30.</li>
              <li>Bei einer negativen Ladung die zusätzlichen Elektronen dazuzählen: 30 + 2 = 32 Elektronen.</li>
              <li>Elektronenpaare bestimmen: 32 ÷ 2 = 16 Elektronenpaare.</li>
            </ol>
            <p>Die Ladung des Ions muss beim Zählen immer berücksichtigt werden. Diese Zählung liefert die Gesamtzahl der Elektronen für eine Lewis-Darstellung, nicht allein deren genaue Anordnung.</p>
          `
        },
        { name: "Die Crux mit den Salzen", placeholder: true }
      ]
    },
    {
      id: "topic-4",
      name: "Chemische Bindungen",
      subtopics: [
        {
          name: "Einleitung und Bindungstypen",
          summary: `
            <h3>Was hält Teilchen zusammen?</h3>
            <ul>
              <li>Chemische Bindungen halten Atome oder Ionen in grösseren Grundteilchen und Stoffen zusammen.</li>
              <li>Ursache ist die elektrostatische (Coulomb-)Anziehung zwischen positiven Atomkernen bzw. Atomrümpfen und negativen Elektronen.</li>
              <li>Das Rumpf-Valenzelektronenmodell hilft, Bindungen und Stoffeigenschaften vereinfacht zu beschreiben.</li>
            </ul>
            <h3>Drei grundlegende Bindungsmodelle</h3>
            <ul>
              <li><strong>Kovalente Bindung:</strong> Nichtmetallatome teilen Elektronenpaare; typische Grundteilchen sind Moleküle, z. B. H<sub>2</sub>O.</li>
              <li><strong>Metallische Bindung:</strong> Metallatomrümpfe werden durch gemeinsam genutzte, delokalisierte Valenzelektronen zusammengehalten; z. B. Eisen.</li>
              <li><strong>Ionenbindung:</strong> Anziehung zwischen positiv und negativ geladenen Ionen in Salzen; häufig aus Metall- und Nichtmetallatomen, z. B. NaCl.</li>
              <li>Die Modelle sind vereinfachte Grenzfälle; Bindungen können auch Mischformen aufweisen.</li>
            </ul>
          `
        },
        {
          name: "Chemische Formeln lesen",
          summary: `
            <h3>Teilchenformeln und Stoffformeln</h3>
            <ul>
              <li>Formeln verwenden Elementsymbole; tiefgestellte Indizes geben die Anzahl der Atome bzw. das Zahlenverhältnis an.</li>
              <li><strong>Teilchenformeln</strong> beschreiben ein einzelnes Teilchen: CH<sub>4</sub> enthält 1 C- und 4 H-Atome; O<sup>2−</sup> ist ein zweifach negativ geladenes Sauerstoff-Ion.</li>
              <li><strong>Stoffformeln</strong> geben an, welche Atome oder Ionen in welchem Verhältnis einen Stoff aufbauen.</li>
              <li>Bei ionischen Stoffen stehen in der Verhältnisformel normalerweise keine Ladungen: NaCl bedeutet Na<sup>+</sup>- und Cl<sup>−</sup>-Ionen im Verhältnis 1:1; es gibt keine einzelnen NaCl-Moleküle im Ionengitter.</li>
              <li>CH<sub>4</sub> kann sowohl ein Methan-Molekül als auch den molekularen Stoff Methan bezeichnen; der Kontext entscheidet.</li>
            </ul>
            <h3>Formel als Hinweis auf Bindungstyp und Teilchen</h3>
            <ul>
              <li>Nur Metall-Atomsorten, z. B. Fe → metallischer Stoff.</li>
              <li>Nur Nichtmetall-Atomsorten, z. B. H<sub>2</sub>O → meist molekularer Stoff; wichtige Ausnahme: Kohlenstoff-Netzwerke wie Graphit und Diamant.</li>
              <li>Metall- und Nichtmetall-Atome, z. B. NaCl → meist salzartiger Stoff aus Ionen.</li>
              <li>Geladene Formel mit hochgestellter Ladung, z. B. Na<sup>+</sup> oder Cl<sup>−</sup> → einzelnes Ion, nicht automatisch ein neutraler Stoff.</li>
              <li>Das sind Orientierungshilfen: mehratomige Ionen wie NH<sub>4</sub><sup>+</sup> und Grenzfälle erfordern eine genauere Betrachtung.</li>
            </ul>
          `
        },
        {
          name: "Metallische Bindung und Elektronengasmodell",
          summary: `
            <h3>Aufbau eines Metalls</h3>
            <ul>
              <li>Metallatome ordnen sich in einem regelmässigen Metallgitter an.</li>
              <li>Valenzelektronen sind nicht mehr einem einzelnen Atom zugeordnet: Sie sind <strong>delokalisiert</strong> und bewegen sich durch das Gitter.</li>
              <li>Die positiv geladenen Atomrümpfe und die gemeinsamen Elektronen bilden zusammen ein insgesamt neutrales Metall.</li>
              <li>Die Anziehung zwischen Atomrümpfen und delokalisierten Elektronen hält das Gitter zusammen. Das vereinfachte Modell nennt die beweglichen Elektronen <strong>Elektronengas</strong> – es handelt sich nicht um ein Gas aus Atomen.</li>
            </ul>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="metal-bond-title metal-bond-desc" viewBox="0 0 640 220" style="display:block;width:100%;max-width:640px;height:auto">
                <title id="metal-bond-title">Vereinfachtes Modell der metallischen Bindung</title>
                <desc id="metal-bond-desc">Positive Atomrümpfe liegen regelmässig in einem Metallgitter. Dazwischen bewegen sich delokalisierte Valenzelektronen.</desc>
                <defs>
                  <radialGradient id="metal-electron-cloud">
                    <stop offset="0%" stop-color="#b6d6c6" stop-opacity=".85"/>
                    <stop offset="100%" stop-color="#b6d6c6" stop-opacity=".15"/>
                  </radialGradient>
                </defs>
                <rect x="36" y="24" width="568" height="152" rx="18" fill="url(#metal-electron-cloud)" stroke="#a9b5a8"/>
                <g fill="#f7f4ec" stroke="#667267" stroke-width="2">
                  <circle cx="112" cy="68" r="20"/><circle cx="250" cy="68" r="20"/><circle cx="388" cy="68" r="20"/><circle cx="526" cy="68" r="20"/>
                  <circle cx="112" cy="132" r="20"/><circle cx="250" cy="132" r="20"/><circle cx="388" cy="132" r="20"/><circle cx="526" cy="132" r="20"/>
                </g>
                <g fill="#454940" font-size="15" font-weight="600" text-anchor="middle">
                  <text x="112" y="73">+</text><text x="250" y="73">+</text><text x="388" y="73">+</text><text x="526" y="73">+</text>
                  <text x="112" y="137">+</text><text x="250" y="137">+</text><text x="388" y="137">+</text><text x="526" y="137">+</text>
                </g>
                <g fill="#356b91" font-size="17" font-weight="700" text-anchor="middle">
                  <text x="181" y="108">e⁻</text><text x="319" y="108">e⁻</text><text x="457" y="108">e⁻</text>
                </g>
                <g fill="#454940" font-size="13">
                  <text x="320" y="204" text-anchor="middle">Atomrümpfe im Gitter + bewegliche, delokalisierte Elektronen</text>
                </g>
              </svg>
            </figure>
            <h3>Typische Eigenschaften von Metallen</h3>
            <ul>
              <li><strong>Elektrische Leitfähigkeit:</strong> Bei angelegter Spannung bewegen sich die Elektronen gerichtet vom negativen zum positiven Pol; für Spannung, Stromstärke und Widerstand gilt <strong>U = R · I</strong>.</li>
              <li><strong>Wärmeleitfähigkeit:</strong> Energie kann durch die beweglichen Elektronen und die Teilchen des Gitters weitergegeben werden.</li>
              <li><strong>Verformbarkeit:</strong> Gitterebenen können gegeneinander verschoben werden, ohne dass eine gerichtete Bindung sofort zerreisst.</li>
              <li>Metallglanz und Magnetisierbarkeit sind weitere mögliche Stoffeigenschaften; nicht jedes Metall ist magnetisch.</li>
            </ul>
          `
        },
        {
          name: "Bändermodell und Grenzen der Modelle",
          summary: `
            <h3>Bändermodell</h3>
            <ul>
              <li>In einzelnen Atomen besitzen Elektronen bestimmte Energieniveaus.</li>
              <li>In einem Festkörper liegen sehr viele ähnliche Elektronenenergien dicht beieinander und bilden <strong>Energiebänder</strong>.</li>
              <li>Elektronen können sich überlappende bzw. nahe Energieniveaus teilen; die Verteilung und Besetzung der Bänder hilft, die elektrische Leitfähigkeit von Feststoffen zu verstehen.</li>
              <li>Zwischen Bändern kann eine <strong>Bandlücke</strong> liegen. Bei Halbleitern kann Energiezufuhr – etwa durch Erwärmen oder eine angelegte Spannung – Elektronen über diese Lücke heben; die Leitfähigkeit nimmt zu.</li>
            </ul>
            <h3>Modelle haben Grenzen</h3>
            <ul>
              <li>Das Elektronengasmodell erklärt grundlegende Eigenschaften wie elektrische Leitfähigkeit anschaulich, aber nicht alle Phänomene in Metallen.</li>
              <li>Beispiele aus dem Dossier: die besondere Reaktionsträgheit von Edelmetallen und Formgedächtnis bei Memory-Metallen.</li>
              <li>Auch das Bändermodell ist ein vereinfachtes Modell; für komplizierte Eigenschaften realer Festkörper braucht es genauere Beschreibungen.</li>
            </ul>
          `
        },
        {
          name: "Supraleitung",
          summary: `
            <h3>Widerstand verschwindet</h3>
            <ul>
              <li>Bei bestimmten Materialien fällt der elektrische Widerstand unterhalb einer materialspezifischen <strong>kritischen Temperatur</strong> auf null.</li>
              <li>Der Übergang vom normalen Leiter zum Supraleiter erfolgt in einem engen Temperaturbereich.</li>
              <li>Viele elementare Supraleiter benötigen sehr tiefe Temperaturen; das Kühlen kann aufwendig sein.</li>
              <li>Hochtemperatur-Supraleiter erreichen höhere kritische Temperaturen als klassische elementare Supraleiter; „hoch“ ist dabei ein relativer Begriff und bedeutet nicht Raumtemperatur.</li>
              <li>Supraleitende Spulen erzeugen starke Magnetfelder, z. B. in Kernspin-Tomografen und Teilchenbeschleunigern.</li>
            </ul>
          `
        },
        {
          name: "Metall-Legierungen",
          summary: `
            <h3>Zusammensetzung und Nutzen</h3>
            <ul>
              <li><strong>Legierung:</strong> metallischer Werkstoff aus mehreren Elementen, mindestens eines davon ist ein Metall.</li>
              <li>Legieren ermöglicht, Eigenschaften gezielt anzupassen; viele Metalle werden deshalb nicht in reiner Form als Werkstoff verwendet.</li>
              <li><strong>Messing:</strong> Kupfer und Zink; <strong>Bronze:</strong> Kupfer und Zinn.</li>
              <li><strong>Stahl:</strong> Eisen mit Kohlenstoff; Chrom verbessert die Korrosionsbeständigkeit von rostbeständigen Stählen, Kohlenstoff beeinflusst die Härte und Festigkeit.</li>
              <li>Gold wird mit Silber, Kupfer, Nickel oder Zink legiert; Zusammensetzung und Mischungsverhältnis beeinflussen Farbe und Härte, z. B. Gelb-, Weiss- und Rotgold.</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "topic-5",
      name: "Chemische Reaktionen",
      subtopics: [
        {
          name: "Einführung",
          summary: `
            <h3>Was geschieht bei einer chemischen Reaktion?</h3>
            <ul>
              <li>Ausgangsstoffe (<strong>Edukte</strong>) werden in neue Stoffe (<strong>Produkte</strong>) umgewandelt.</li>
              <li>Atome werden neu angeordnet; chemische Bindungen werden gelöst und neu gebildet.</li>
              <li>Die Atomsorten und ihre Gesamtzahl bleiben erhalten; Atome und Ladung werden weder erzeugt noch vernichtet.</li>
              <li>Stoffeigenschaften ändern sich; die Reaktion kann Energie aufnehmen oder abgeben.</li>
              <li>Teilchenmodell: Reaktionen beruhen auf Zusammenstössen und Umordnungen von Teilchen.</li>
            </ul>
            <h3>Reaktionsbedingungen</h3>
            <ul>
              <li>Ob eine Reaktion abläuft, hängt unter anderem von den beteiligten Stoffen und den Bedingungen ab.</li>
              <li>Reaktionsgeschwindigkeit und Gleichgewicht sind verschiedene Fragen: Wie schnell läuft die Reaktion ab, und wie weit wird sie umgesetzt?</li>
            </ul>
          `
        },
        {
          name: "Wie viele Teilchen sind da denn genau?",
          summary: `
            <h3>Stoffmenge und Teilchenzahl</h3>
            <ul>
              <li>Atome, Moleküle und Ionen sind sehr klein; eine Stoffportion enthält deshalb sehr viele Teilchen.</li>
              <li>Die Stoffmenge <strong>n</strong> wird in Mol (mol) angegeben.</li>
              <li><strong>1 mol = N<sub>A</sub> = 6,022&nbsp;140&nbsp;76 · 10<sup>23</sup></strong> Teilchen.</li>
              <li>Teilchenzahl: <strong>N = n · N<sub>A</sub></strong>; Stoffmenge: <strong>n = N/N<sub>A</sub></strong>.</li>
            </ul>
            <h3>Molare Masse</h3>
            <ul>
              <li>Die molare Masse <strong>M</strong> gibt die Masse eines Mols an; Einheit: g/mol.</li>
              <li>Für ein Element entspricht der Zahlenwert von M in g/mol näherungsweise der Atommasse in u.</li>
              <li>Bei Verbindungen werden die molaren Massen gemäss der Formel aufsummiert, z. B. M(H<sub>2</sub>O) = 2 · M(H) + M(O).</li>
              <li><strong>n = m/M</strong> und <strong>m = n · M</strong>; vor dem Rechnen die Einheiten prüfen.</li>
            </ul>
          `
        },
        {
          name: "Reaktionsgleichungen",
          summary: `
            <h3>Information in einer Gleichung</h3>
            <ul>
              <li>Edukte stehen links, Produkte rechts; der Pfeil zeigt die Reaktionsrichtung.</li>
              <li>Formeln zeigen, welche Stoffe reagieren; Koeffizienten vor den Formeln geben das Teilchen- und Stoffmengenverhältnis an.</li>
              <li>Beispiel: <strong>2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O</strong>; Verhältnis 2 : 1 : 2.</li>
            </ul>
            <h3>Gleichung ausgleichen</h3>
            <ol>
              <li>Edukte und Produkte korrekt formulieren.</li>
              <li>Atome jeder Sorte auf beiden Seiten zählen.</li>
              <li>Ausschliesslich Koeffizienten anpassen, bis alle Atomzahlen übereinstimmen.</li>
              <li>Bei Ionenreaktionen zusätzlich die Gesamtladung auf beiden Seiten prüfen.</li>
              <li>Koeffizienten auf die kleinsten ganzen Zahlen kürzen; Indizes in Formeln nie verändern.</li>
            </ol>
            <p><strong>Kontrolle:</strong> Atombilanz und – falls relevant – Ladungsbilanz müssen stimmen.</p>
          `
        },
        {
          name: "Stöchiometrie",
          summary: `
            <h3>Reaktionsmengen berechnen</h3>
            <ul>
              <li>Die ausgeglichene Reaktionsgleichung liefert das Verhältnis der Stoffmengen über ihre Koeffizienten.</li>
              <li>Grundbeziehungen: <strong>n = m/M</strong>, <strong>m = n · M</strong>; Teilchenzahl: <strong>N = n · N<sub>A</sub></strong>.</li>
              <li>Für Gase bei gleichem Druck und gleicher Temperatur sind Volumenverhältnisse gleich den Stoffmengenverhältnissen.</li>
            </ul>
            <h3>Rechenweg</h3>
            <ol>
              <li>Reaktionsgleichung ausgleichen.</li>
              <li>Gegebene Masse oder Teilchenzahl in Stoffmenge umrechnen.</li>
              <li>Mit dem Koeffizientenverhältnis die gesuchte Stoffmenge berechnen.</li>
              <li>Falls gefragt, Stoffmenge in Masse, Teilchenzahl oder Gasvolumen umrechnen.</li>
              <li>Einheiten und Grössenordnung kontrollieren.</li>
            </ol>
            <h3>Limitierender Stoff und Ausbeute</h3>
            <ul>
              <li>Edukte gemäss Gleichung im passenden Verhältnis vergleichen.</li>
              <li>Der <strong>limitierende Stoff</strong> wird zuerst aufgebraucht und begrenzt die maximal mögliche Produktmenge.</li>
              <li>Andere Edukte können im Überschuss übrig bleiben.</li>
              <li><strong>Ausbeute (%) = tatsächliche Produktmenge / theoretische Produktmenge · 100 %</strong>.</li>
            </ul>
          `
        },
        {
          name: "Kinetik: Die Geschwindigkeit von chemischen Reaktionen",
          summary: `
            <h3>Reaktionsgeschwindigkeit</h3>
            <ul>
              <li>Beschreibt, wie schnell Edukte verbraucht oder Produkte gebildet werden.</li>
              <li>Mittlere Geschwindigkeit: Konzentrationsänderung pro Zeit, z. B. <strong>v = Δc/Δt</strong>.</li>
              <li>Reaktionsgeschwindigkeit kann über die Abnahme eines Edukts oder die Zunahme eines Produkts bestimmt werden.</li>
              <li>Im Teilchenmodell müssen Teilchen zusammenstossen; nicht jeder Zusammenstoss führt zu einer Reaktion.</li>
            </ul>
            <h3>Einflussfaktoren</h3>
            <ul>
              <li><strong>Konzentration:</strong> mehr Teilchen pro Volumen → häufigere Zusammenstösse → schnellere Reaktion.</li>
              <li><strong>Temperatur:</strong> Teilchen bewegen sich schneller; mehr Zusammenstösse besitzen genügend Energie. Als grobe Faustregel steigt die Geschwindigkeit oft etwa auf das Doppelte pro 10 °C.</li>
              <li><strong>Oberfläche:</strong> fein zerteilte Feststoffe reagieren schneller, weil mehr Teilchen an der Oberfläche zugänglich sind.</li>
              <li><strong>Katalysator:</strong> ermöglicht einen Reaktionsweg mit geringerer Aktivierungsenergie; beschleunigt Hin- und Rückreaktion, wird dabei nicht dauerhaft verbraucht.</li>
            </ul>
            <h3>Katalyse und Enzyme</h3>
            <ul>
              <li>Bei heterogener Katalyse befinden sich Katalysator und Edukte in unterschiedlichen Phasen; die Reaktion findet oft an der Katalysatoroberfläche statt.</li>
              <li>Enzyme sind biologische Katalysatoren: spezifische Bindung am aktiven Zentrum, beschleunigte Reaktion und regulierbare Aktivität.</li>
              <li>Ein Katalysator verändert nicht die Gleichgewichtslage und nicht die Gleichgewichtskonstante.</li>
            </ul>
          `
        },
        {
          name: "Das chemische Gleichgewicht",
          summary: `
            <h3>Dynamisches Gleichgewicht</h3>
            <ul>
              <li>Umkehrbare Reaktionen laufen gleichzeitig als Hin- und Rückreaktion ab: <strong>a A + b B ⇌ c C + d D</strong>.</li>
              <li>Im geschlossenen System ist das Gleichgewicht erreicht, wenn Hin- und Rückreaktion gleich schnell sind.</li>
              <li>Die Konzentrationen bleiben dann konstant, sind aber nicht zwingend gleich; auf Teilchenebene laufen beide Reaktionen weiter.</li>
            </ul>
            <h3>Massenwirkungsgesetz</h3>
            <ul>
              <li><strong>K<sub>c</sub> = c(C)<sup>c</sup> · c(D)<sup>d</sup> / (c(A)<sup>a</sup> · c(B)<sup>b</sup>)</strong> im Gleichgewicht.</li>
              <li>Die stöchiometrischen Koeffizienten werden zu Exponenten; reine Feststoffe und Flüssigkeiten werden im Ausdruck weggelassen.</li>
              <li>Bei gegebener Temperatur ist K<sub>c</sub> für eine Reaktion konstant; ein grosser Wert begünstigt Produkte, ein kleiner Wert Edukte.</li>
            </ul>
            <h3>Gleichgewicht verschieben: Prinzip von Le Chatelier</h3>
            <ul>
              <li><strong>Konzentration:</strong> Zugabe eines Stoffes verschiebt das Gleichgewicht so, dass ein Teil davon verbraucht wird; Entzug begünstigt dessen Neubildung.</li>
              <li><strong>Druck (Gasreaktionen):</strong> Druckerhöhung begünstigt die Seite mit weniger gasförmigen Teilchen; bei gleicher Teilchenzahl ist der Einfluss gering.</li>
              <li><strong>Temperatur:</strong> Erwärmen begünstigt die endotherme Richtung, Abkühlen die exotherme Richtung; die Temperatur kann auch K<sub>c</sub> verändern.</li>
              <li><strong>Katalysator:</strong> beschleunigt das Erreichen des Gleichgewichts, verschiebt es aber nicht.</li>
            </ul>
            <h3>Beispiel: Ammoniaksynthese</h3>
            <p><strong>N<sub>2</sub> + 3 H<sub>2</sub> ⇌ 2 NH<sub>3</sub> + Wärme</strong>. Hoher Druck und tiefere Temperatur begünstigen Ammoniak; industriell wird ein Kompromiss mit Katalysator, Produktabtrennung und Rückführung unverbrauchter Gase genutzt.</p>
          `
        }
      ]
    },
    {
      id: "topic-6",
      name: "Säure-Basen",
      subtopics: [
        {
          name: "Einführung",
          number: 1,
          summary: `
            <h3>Brønsted-Modell</h3>
            <ul>
              <li><strong>Säure:</strong> Teilchen, das ein Proton (H<sup>+</sup>) abgeben kann.</li>
              <li><strong>Base:</strong> Teilchen, das ein Proton aufnehmen kann; benötigt ein freies Elektronenpaar.</li>
              <li>Eine saure H-Bindung ist meist an ein elektronegatives Atom gebunden, z. B. O, N, S oder Halogene.</li>
              <li>Freie Protonen sind in Wasser nicht stabil: Sie binden sich an H<sub>2</sub>O und bilden H<sub>3</sub>O<sup>+</sup> (Oxonium-/Hydronium-Ion).</li>
              <li>Elektrische Leitfähigkeit in Lösungen entsteht durch bewegliche Ionen; reine Moleküle leiten nicht.</li>
            </ul>
            <h3>Besondere Teilchen</h3>
            <ul>
              <li><strong>Ampholyt:</strong> kann je nach Reaktionspartner als Säure oder Base reagieren, z. B. Wasser.</li>
              <li><strong>Mehrprotonige Säure:</strong> kann schrittweise mehrere Protonen abgeben.</li>
            </ul>
          `
        },
        {
          name: "Säure-Base-Reaktionen",
          number: 2,
          summary: `
            <h3>Protonenübertragung</h3>
            <ul>
              <li>Säure-Base-Reaktion = Übertragung eines Protons von einer Säure auf eine Base.</li>
              <li>Allgemein: <strong>HA + B ⇌ A<sup>−</sup> + BH<sup>+</sup></strong>.</li>
              <li><strong>Korrespondierende Paare:</strong> HA/A<sup>−</sup> und BH<sup>+</sup>/B; Partner unterscheiden sich jeweils um ein H<sup>+</sup>.</li>
              <li>Beispiele: CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ CH<sub>3</sub>COO<sup>−</sup> + H<sub>3</sub>O<sup>+</sup>; NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>.</li>
              <li>Das Gleichgewicht liegt bevorzugt auf der Seite des schwächeren Säure-Base-Paares; Säure-Base-Reihe zum Vergleichen verwenden.</li>
            </ul>
            <h3>Neutralisation</h3>
            <ul>
              <li>Säure + Base; Oxonium- und Hydroxid-Ionen reagieren zu Wasser: <strong>H<sub>3</sub>O<sup>+</sup> + OH<sup>−</sup> → 2 H<sub>2</sub>O</strong>.</li>
              <li>Bei vollständiger Neutralisation entstehen aus den übrigen Ionen ein Salz und Wasser.</li>
            </ul>
          `
        },
        {
          name: "Der pH-Wert",
          number: 3,
          summary: `
            <h3>Definition und Skala</h3>
            <ul>
              <li><strong>pH = −log<sub>10</sub> c(H<sub>3</sub>O<sup>+</sup>)</strong>; Konzentration in mol/L.</li>
              <li>Umkehrung: <strong>c(H<sub>3</sub>O<sup>+</sup>) = 10<sup>−pH</sup> mol/L</strong>.</li>
              <li>Bei 25 °C gilt für verdünnte wässrige Lösungen typischerweise: pH &lt; 7 sauer, pH = 7 neutral, pH &gt; 7 basisch.</li>
              <li>Eine Änderung um eine pH-Einheit entspricht einer zehnfachen Änderung der Oxonium-Ionen-Konzentration.</li>
            </ul>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="ph-scale-title ph-scale-desc" viewBox="0 0 640 92" style="display:block;width:100%;max-width:640px;height:auto">
                <title id="ph-scale-title">pH-Skala</title>
                <desc id="ph-scale-desc">Die Skala reicht von sauer unter pH 7 über neutral bei pH 7 bis basisch über pH 7.</desc>
                <defs>
                  <linearGradient id="ph-scale-gradient">
                    <stop offset="0%" stop-color="#df756d"/>
                    <stop offset="50%" stop-color="#e7d77c"/>
                    <stop offset="100%" stop-color="#75a9c1"/>
                  </linearGradient>
                </defs>
                <text x="24" y="18" font-size="13" fill="#64675f">sauer</text>
                <text x="320" y="18" text-anchor="middle" font-size="13" fill="#64675f">neutral</text>
                <text x="616" y="18" text-anchor="end" font-size="13" fill="#64675f">basisch</text>
                <rect x="24" y="28" width="592" height="18" rx="9" fill="url(#ph-scale-gradient)"/>
                <g font-size="12" fill="#454940">
                  <text x="24" y="68" text-anchor="middle">0</text>
                  <text x="151" y="68" text-anchor="middle">3</text>
                  <text x="320" y="68" text-anchor="middle">7</text>
                  <text x="489" y="68" text-anchor="middle">11</text>
                  <text x="616" y="68" text-anchor="middle">14</text>
                </g>
                <g stroke="#64675f" stroke-width="1">
                  <path d="M24 48v6 M151 48v6 M320 48v6 M489 48v6 M616 48v6"/>
                </g>
                <circle cx="320" cy="37" r="4" fill="#454940"/>
              </svg>
            </figure>
            <h3>Autoprotolyse des Wassers</h3>
            <ul>
              <li><strong>2 H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + OH<sup>−</sup></strong>; auch reines Wasser enthält wenige Ionen.</li>
              <li><strong>K<sub>w</sub> = c(H<sub>3</sub>O<sup>+</sup>) · c(OH<sup>−</sup>) ≈ 10<sup>−14</sup></strong> bei 25 °C; pH + pOH = 14.</li>
              <li>pH-Meter: genau; Indikatorpapier: schneller, aber ungenauer.</li>
            </ul>
          `
        },
        {
          name: "Die Säurekonstante",
          number: 4,
          summary: `
            <h3>Säurestärke im Gleichgewicht</h3>
            <ul>
              <li>Allgemein: <strong>HA + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + A<sup>−</sup></strong>.</li>
              <li><strong>K<sub>s</sub> = c(H<sub>3</sub>O<sup>+</sup>) · c(A<sup>−</sup>) / c(HA)</strong>; die Wasserkonzentration ist in wässriger Lösung praktisch konstant.</li>
              <li><strong>pK<sub>s</sub> = −log<sub>10</sub> K<sub>s</sub></strong>.</li>
              <li>Kleiner pK<sub>s</sub> / grosser K<sub>s</sub> → stärkere Säure; grosse Säurestärke bedeutet eine weiter rechts liegende Dissoziation.</li>
              <li>Starke Säuren geben Protonen in Wasser nahezu vollständig ab; schwache Säuren reagieren nur teilweise.</li>
            </ul>
          `
        },
        {
          name: "Vorgehen zur Berechnung",
          number: 5,
          summary: `
            <h3>Säure-Base-Reaktionen beurteilen</h3>
            <ol>
              <li>Alle in wesentlichen Mengen vorhandenen Teilchen auflisten; Salze zuerst in Kationen und Anionen zerlegen.</li>
              <li>Zuschauer-Ionen erkennen und für die eigentliche Protonenübertragung weglassen.</li>
              <li>Mit der Säure-Base-Reihe stärkste Säure und stärkste Base bestimmen.</li>
              <li>Protonenübertragung formulieren und Gleichgewicht prüfen: bevorzugt zur Seite des schwächeren Säure-Base-Paares.</li>
            </ol>
            <h3>pH-Berechnungen: Grundfälle</h3>
            <ul>
              <li><strong>Starke einprotonige Säure:</strong> vollständige Abgabe; c(H<sub>3</sub>O<sup>+</sup>) ≈ c<sub>0</sub>(Säure), danach pH = −log c(H<sub>3</sub>O<sup>+</sup>).</li>
              <li><strong>Starke Base:</strong> c(OH<sup>−</sup>) aus Konzentration und Stöchiometrie bestimmen; pOH = −log c(OH<sup>−</sup>), dann pH = 14 − pOH (bei 25 °C).</li>
              <li><strong>Schwache, einprotonige Säure:</strong> pH ≈ ½(pK<sub>s</sub> − log c<sub>0</sub>(HA)); Näherung nur anwenden, wenn ihre Voraussetzungen erfüllt sind.</li>
              <li><strong>Schwache Base:</strong> Gleichgewicht und Stärke der korrespondierenden Säure mitberücksichtigen; Näherung siehe Unterthema 6.9.</li>
              <li>Vor dem Logarithmieren Konzentrationen in mol/L einsetzen; bei Verdünnung zuerst neue Konzentration berechnen.</li>
            </ul>
          `
        },
        {
          name: "Indikatoren",
          number: 6,
          summary: `
            <h3>Farbumschlag durch Protonierung</h3>
            <ul>
              <li>pH-Indikatoren sind meist schwache Säuren/Basen; protonierte und deprotonierte Form haben unterschiedliche Farben.</li>
              <li><strong>HInd ⇌ H<sup>+</sup> + Ind<sup>−</sup></strong>: tiefere pH-Werte begünstigen HInd, höhere pH-Werte Ind<sup>−</sup>.</li>
              <li>Der sichtbare Umschlag erfolgt über einen Bereich, ungefähr bei pH = pK<sub>s</sub> ± 1; am Umschlagspunkt liegen beide Formen ähnlich häufig vor.</li>
              <li>Beispiele: Bromthymolblau, Lackmus, Rotkohlsaft; pH-Papier enthält ein Indikatorgemisch.</li>
              <li>Für eine Titration Indikator wählen, dessen Umschlagsbereich im steilen pH-Sprung liegt.</li>
            </ul>
          `
        },
        {
          name: "Puffer-Lösungen",
          number: 7,
          summary: `
            <h3>Bestandteile und Wirkung</h3>
            <ul>
              <li>Puffer = schwache Säure und korrespondierende Base in vergleichbaren Mengen, z. B. CH<sub>3</sub>COOH/CH<sub>3</sub>COO<sup>−</sup>.</li>
              <li>Zugabe von Säure: A<sup>−</sup> + H<sub>3</sub>O<sup>+</sup> → HA + H<sub>2</sub>O; Zugabe von Base: HA + OH<sup>−</sup> → A<sup>−</sup> + H<sub>2</sub>O.</li>
              <li>Der pH-Wert ändert sich bei kleinen Säure-/Base-Zugaben nur wenig; die Pufferwirkung ist begrenzt.</li>
            </ul>
            <h3>Pufferbereich und Kapazität</h3>
            <ul>
              <li><strong>pH = pK<sub>s</sub> + log<sub>10</sub>(c(A<sup>−</sup>)/c(HA))</strong> (Puffergleichung).</li>
              <li>Bei gleichen Mengen gilt pH = pK<sub>s</sub>; grösste Pufferwirkung in der Nähe dieses Wertes.</li>
              <li>Wirksamer Bereich ungefähr pK<sub>s</sub> ± 1 (etwa zwei pH-Einheiten).</li>
              <li>Höhere Konzentrationen des Puffers → grössere Pufferkapazität; geeigneten Puffer nach gewünschtem pH wählen.</li>
            </ul>
          `
        },
        {
          name: "pH-Berechnung für schwache Basen",
          number: 9,
          summary: `
            <h3>Gleichgewicht schwacher Basen</h3>
            <ul>
              <li><strong>B + H<sub>2</sub>O ⇌ BH<sup>+</sup> + OH<sup>−</sup></strong>; nur ein Teil der Basenteilchen reagiert.</li>
              <li>Rückreaktion berücksichtigen; pH hängt von Anfangskonzentration und Basenstärke ab.</li>
              <li>Für die Näherung den pK<sub>s</sub>-Wert der korrespondierenden Säure BH<sup>+</sup> verwenden: pK<sub>b</sub> = 14 − pK<sub>s</sub>(BH<sup>+</sup>).</li>
              <li><strong>pOH ≈ ½(pK<sub>b</sub> − log<sub>10</sub> c<sub>0</sub>(B))</strong>; anschliessend pH = 14 − pOH (bei 25 °C).</li>
              <li>Näherung nur für schwache, einprotonige Basen und wenn der resultierende pH deutlich über 8 liegt; sonst Autoprotolyse des Wassers mitberücksichtigen.</li>
            </ul>
          `
        },
        {
          name: "Säure/Base-Titration",
          number: 10,
          summary: `
            <h3>Konzentration unbekannter Lösungen bestimmen</h3>
            <ul>
              <li>Bekanntes Volumen der Probelösung mit unbekannter Konzentration vorlegen.</li>
              <li>Standardlösung bekannter Konzentration aus der Bürette langsam zugeben; pH-Verlauf mit Indikator oder pH-Meter beobachten.</li>
              <li><strong>Äquivalenzpunkt:</strong> Säure und Base haben im stöchiometrisch passenden Verhältnis vollständig reagiert; nicht immer bei pH 7.</li>
              <li>Am Äquivalenzpunkt die Stoffmengenbeziehung aus der Reaktionsgleichung verwenden; bei einprotoniger Säure und einwertiger Base: <strong>c<sub>S</sub> · V<sub>S</sub> = c<sub>B</sub> · V<sub>B</sub></strong>.</li>
              <li>Indikator so wählen, dass sein Farbumschlag im steilen pH-Sprung liegt; alternativ pH messen und bis zum Sprung titrieren.</li>
              <li>Starke Säure + starke Base: Äquivalenzpunkt etwa pH 7; schwache Säure + starke Base: Äquivalenzpunkt über pH 7.</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "topic-7",
      name: "Elektronenübertragungsreaktion",
      subtopics: [
        {
          name: "Einführung und Formalismen",
          summary: `
            <h3>Grundprinzip</h3>
            <p><strong>Redoxreaktionen</strong> sind Elektronenübertragungen. Oxidation und Reduktion treten immer gemeinsam auf: Bei der Oxidation werden Elektronen abgegeben, bei der Reduktion aufgenommen. Das Reduktionsmittel ist der Elektronenspender und wird oxidiert; das Oxidationsmittel ist der Elektronenempfänger und wird reduziert.</p>
            <p>Beispiel Natrium und Chlor: <strong>2 Na → 2 Na<sup>+</sup> + 2 e<sup>−</sup></strong> (Oxidation), <strong>Cl<sub>2</sub> + 2 e<sup>−</sup> → 2 Cl<sup>−</sup></strong> (Reduktion); insgesamt <strong>2 Na + Cl<sub>2</sub> → 2 NaCl</strong>.</p>
            <h3>Oxidationszahlen</h3>
            <ul>
              <li>Elementare Stoffe haben die Oxidationszahl 0; bei einatomigen Ionen entspricht sie der Ionenladung.</li>
              <li>Bei Molekülen werden die Bindungselektronen formal dem elektronegativeren Atom zugeordnet. Die Summe der Oxidationszahlen entspricht der Gesamtladung.</li>
              <li>Steigende Oxidationszahl bedeutet Oxidation; sinkende Oxidationszahl bedeutet Reduktion. So lassen sich auch Elektronenverschiebungen in Molekülen erkennen, in denen keine freien Elektronen übertragen werden.</li>
            </ul>
            <h3>Redoxreihe und Reaktionsgleichungen</h3>
            <p>Die Redoxreihe ordnet Redoxpaare nach ihrem Standardpotential E°. Ein stärkeres Reduktionsmittel hat ein niedrigeres E°; bei Paaren mit H<sub>2</sub> oder O<sub>2</sub> hängt das Potential unter anderem vom pH-Wert ab. Für eine Gesamtreaktion werden Oxidation und Reduktion so vervielfacht, dass gleich viele Elektronen abgegeben wie aufgenommen werden. Danach werden die Teilreaktionen addiert, Elektronen gekürzt und Atom- sowie Ladungsbilanz geprüft.</p>
          `
        },
        {
          name: "Redox-Gleichgewicht",
          summary: `
            <h3>Reaktionsrichtung und Potential</h3>
            <p>Redoxpaare bestehen aus einer oxidierten und einer reduzierten Form. Die Redoxreihe hilft vorherzusagen, ob ein Elektronentransfer abläuft: Ein starkes Reduktionsmittel kann ein Oxidationsmittel reduzieren, das in der Reihe stärker ist. Die Potentialwerte gelten für festgelegte Bedingungen; bei Reaktionen mit H<sub>3</sub>O<sup>+</sup> oder OH<sup>−</sup> beeinflusst der pH-Wert das Potential.</p>
            <h3>Galvanische Zelle</h3>
            <p>In einer galvanischen Zelle laufen Oxidation und Reduktion räumlich getrennt in zwei Halbzellen ab. Die Elektronen fliessen über einen äusseren Draht vom Reduktionsmittel zur Reduktion; dadurch entsteht elektrischer Strom. Die Salzbrücke ermöglicht den Ionenaustausch und hält die Lösungen elektrisch ausgeglichen. Die Zellspannung ergibt sich aus der Potentialdifferenz der Halbreaktionen.</p>
            <ul>
              <li><strong>Anode:</strong> Ort der Oxidation.</li>
              <li><strong>Kathode:</strong> Ort der Reduktion.</li>
              <li>Eine galvanische Zelle liefert Strom, bis das Gleichgewicht erreicht ist oder ein Edukt aufgebraucht ist.</li>
            </ul>
            <h3>Brennstoffzelle</h3>
            <p>Eine Brennstoffzelle setzt Wasserstoff und Sauerstoff kontrolliert zu Wasser um und wandelt einen grossen Teil der Reaktionsenergie direkt in elektrische Energie um. An den Elektroden beschleunigt Platin die Reaktionen; eine Protonenaustauschmembran lässt Protonen passieren und trennt die Reaktionsräume.</p>
          `
        },
        {
          name: "Elektrolyse",
          summary: `
            <h3>Erzwungene Redoxreaktionen</h3>
            <p>Bei einer Elektrolyse erzwingt eine Gleichspannungsquelle eine Redoxreaktion, die von selbst nicht abläuft. Die Stromquelle wirkt als Elektronenpumpe: Sie entzieht Elektronen an der positiven <strong>Anode</strong> (Oxidation) und liefert sie an der negativen <strong>Kathode</strong> (Reduktion). Die nötige Mindestspannung heisst Zersetzungsspannung; praktisch ist eine höhere Spannung nötig.</p>
            <p>Beispiel für die Elektrolyse von Kupferchlorid: An der Kathode wird Cu<sup>2+</sup> zu Kupfer reduziert; an der Anode werden Chlorid-Ionen zu Chlor oxidiert. Gesamt: <strong>CuCl<sub>2</sub> → Cu + Cl<sub>2</sub></strong>.</p>
            <h3>Anwendungen</h3>
            <p>Elektrolysen werden unter anderem zur Aluminiumgewinnung, zur Raffination von Kupfer und Gold, zur Herstellung von Natronlauge und Chlor sowie zum Galvanisieren eingesetzt.</p>
            <h3>Akkumulatoren</h3>
            <p>Akkumulatoren speichern Energie in reversiblen chemischen Reaktionen und können wieder aufgeladen werden. In einem Lithium-Ionen-Akku wandern Lithium-Ionen beim Entladen durch den Elektrolyten zwischen den Elektroden; Elektronen fliessen durch den äusseren Stromkreis. Beim Laden laufen die Vorgänge umgekehrt. Graphit und Metalloxide können Lithium-Ionen in ihre Kristallstrukturen einlagern (Interkalation).</p>
          `
        },
        {
          name: "Biologische Redox-Reaktionen",
          summary: `
            <h3>Zellatmung und Citratzyklus</h3>
            <p>Die Gesamtgleichung der Zellatmung wird oft ähnlich wie die der Photosynthese dargestellt, doch die Prozesse verlaufen grundverschieden. Im Citratzyklus werden Kohlenstoffverbindungen aus Zucker, Fetten und Proteinen schrittweise zu CO<sub>2</sub> oxidiert. Sauerstoff wird in diesem Zyklus selbst nicht verbraucht.</p>
            <h3>Elektronenüberträger</h3>
            <p>Die bei der Oxidation frei werdenden Elektronen werden zunächst auf die Coenzyme <strong>NAD<sup>+</sup></strong> und <strong>FAD</strong> übertragen. Dabei entstehen die energiereicheren Formen <strong>NADH</strong> und <strong>FADH<sub>2</sub></strong>. Sie transportieren die Elektronen zur Elektronentransportkette in der inneren Mitochondrienmembran.</p>
            <h3>Elektronentransportkette und ATP</h3>
            <p>Die Elektronen werden schrittweise über Proteinkomplexe weitergegeben und schliesslich auf Sauerstoff übertragen. Die dabei frei werdende Energie pumpt Protonen durch die Membran und erzeugt einen Konzentrations- und Ladungsunterschied. Dieser Protonengradient treibt die Bildung von ATP aus ADP und Phosphat an. Die vielen kleinen, räumlich geordneten Schritte ermöglichen eine kontrollierte Energiegewinnung statt eines grossen Energieverlusts als Wärme.</p>
            <h3>Enzyme</h3>
            <p>Enzyme katalysieren die einzelnen Reaktionsschritte. Ihre Bindungstasche bindet bestimmte Substrate und richtet sie für die Reaktion aus; so wird die Umsetzung beschleunigt und bleibt substratspezifisch.</p>
          `
        }
      ]
    },
    {
      id: "topic-8",
      name: "Organische Chemie",
      status: "not-covered",
      subtopics: [
        { name: "Kurze Grundlagen der organischen Chemie", placeholder: true },
        { name: "Formeln zur Beschreibung von organischen Molekülen", placeholder: true },
        { name: "Grundbausteine der organischen Industrie: Alkane", placeholder: true },
        { name: "Funktionelle Gruppen und Stoffklassen", placeholder: true },
        { name: "Die Reaktionen von organischen Molekülen", placeholder: true }
      ]
    }
  ]
};
