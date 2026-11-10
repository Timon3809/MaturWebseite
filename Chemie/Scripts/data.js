window.summaryData = {
  topics: [
    {
      id: "topic-1",
      name: "Atombau",
      subtopics: [
        {
          name: "Atommodelle - erste Gehversuche",
          summary: `
            <h3>Demokrit (ca. 600–400 v. Chr.)</h3>
            <p>Der griechische Gelehrte Demokrit vertrat vermutlich als Erster die Auffassung, dass die Welt aus unteilbaren Teilchen besteht. Das griechische Wort <em>atomos</em> bedeutet „unteilbar“. Zusammen mit seinem Lehrer Leukipp postulierte er in der Atomtheorie, dass die gesamte Natur aus kleinsten, unsichtbaren und unteilbaren Einheiten – den Atomen – zusammengesetzt sei.</p>
            <p>Andere griechische Gelehrte lehnten diese Vorstellung ab, da man die Welt damals als etwas Göttliches ansah. Demokrits stärkster Gegner war Empedokles, der die Lehre von den vier Elementen Feuer, Erde, Luft und Wasser begründete. Demokrits Idee blieb rund 2'000 Jahre unbeachtet.</p>
            <h3>John Dalton (1803)</h3>
            <p>Der Engländer John Dalton griff 1803 als Erster wieder Demokrits Idee auf. Er vermutete, dass alle Stoffe aus Atomen bestehen. Seine Theorie wurde nach ihm <strong>Dalton'sche Atomhypothese</strong> genannt.</p>
            <h3>Die Dalton'sche Atomhypothese</h3>
            <ol>
              <li>Alle Stoffe (Materie) bestehen aus kleinsten, <strong>unteilbaren</strong>, neutralen Teilchen, den Atomen.</li>
              <li>Atome sind <strong>unzerstörbar</strong>: Bei chemischen Reaktionen können sie weder entstehen noch vernichtet werden.</li>
              <li>Alle Atome eines Elements haben die gleiche <strong>Masse</strong> (Atomgewicht) und <strong>Grösse</strong> (Volumen).</li>
              <li>Es gibt so viele <strong>Atomsorten</strong> wie Elemente. Atome verschiedener Elemente unterscheiden sich in Masse und Grösse.</li>
              <li>Bei chemischen Reaktionen werden Atome neu angeordnet und in bestimmten <strong>Zahlenverhältnissen</strong> miteinander verknüpft. So entstehen Stoffe mit neuen <strong>Eigenschaften</strong>.</li>
            </ol>
          `
        },
        {
          name: "Elementarteilchen",
          summary: `
            <h3>Bausteine der Atome</h3>
            <p>Atome bestehen aus <strong>Elektronen, Protonen und Neutronen</strong>. Die Masse von Protonen und Neutronen beträgt jeweils ungefähr 1 u; die Masse des Elektrons ist viel kleiner.</p>
            <div class="summary-table-wrap">
              <table>
                <caption>Masse und Ladung der Elementarteilchen</caption>
                <thead><tr><th scope="col">Teilchen</th><th scope="col">Symbol</th><th scope="col">Masse</th><th scope="col">Ladung</th></tr></thead>
                <tbody>
                  <tr><td>Elektron</td><td>e<sup>−</sup></td><td>0.00055 u</td><td>−e</td></tr>
                  <tr><td>Proton</td><td>p<sup>+</sup></td><td>1.0073 u</td><td>+e</td></tr>
                  <tr><td>Neutron</td><td>n</td><td>1.0087 u</td><td>neutral</td></tr>
                </tbody>
              </table>
            </div>
            <h3>Thomsons Kathodenstrahl-Experiment</h3>
            <p>1897 untersuchte Joseph John Thomson Kathodenstrahlen in einer fast luftleeren Glasröhre. Die Strahlen gingen von der negativ geladenen Kathode aus und wurden zur positiven Anode beschleunigt. Ihre Ablenkung zeigte, dass sie aus <strong>negativ geladenen Teilchen</strong> bestanden. Da diese Teilchen unabhängig vom verwendeten Material dieselben waren, folgerte Thomson, dass sie in allen Atomen vorkommen. Diese Teilchen wurden <strong>Elektronen</strong> genannt.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="cathode-tube-title cathode-tube-desc" viewBox="0 0 720 210" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="cathode-tube-title">Schematische Kathodenstrahlröhre</title>
                <desc id="cathode-tube-desc">In einer Glasröhre werden negativ geladene Teilchen an der Kathode freigesetzt, gebündelt, zur positiven Anode beschleunigt und treffen auf einen Leuchtschirm.</desc>
                <defs>
                  <marker id="cathode-beam-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#d84b43"/></marker>
                  <marker id="cathode-label-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#68747c"/></marker>
                </defs>
                <rect x="76" y="67" width="560" height="82" rx="40" fill="#f3f8fa" stroke="#71838e" stroke-width="3"/>
                <path d="M95 108 H625" fill="none" stroke="#d84b43" stroke-width="4" marker-end="url(#cathode-beam-arrow)"/>
                <g stroke="#465b68" stroke-width="4">
                  <path d="M108 87 V129"/><path d="M318 70 V95 M318 121 V146"/>
                </g>
                <path d="M630 82 Q604 108 630 134" fill="none" stroke="#63a36b" stroke-width="7"/>
                <g fill="#394957" font-family="Arial, sans-serif" font-size="15" text-anchor="middle">
                  <text x="108" y="172">Kathode (−)</text><text x="318" y="172">Anode (+)</text><text x="602" y="172">Leuchtschirm</text>
                  <text x="205" y="48" fill="#d84b43">Kathodenstrahlen (Elektronen)</text>
                </g>
                <g fill="none" stroke="#68747c" stroke-width="1.5" marker-end="url(#cathode-label-arrow)">
                  <path d="M108 155 V133"/><path d="M318 155 V146"/><path d="M602 155 L625 130"/>
                </g>
                <text x="360" y="202" fill="#68747c" font-family="Arial, sans-serif" font-size="13" text-anchor="middle">Elektronen werden von der Kathode freigesetzt und zum Schirm beschleunigt.</text>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Vereinfachte Darstellung der Kathodenstrahlröhre</figcaption>
            </figure>
            <h3>Thomsons Atommodell</h3>
            <p>Im <strong>Rosinenkuchen-Modell</strong> stellte Thomson sich das Atom als eine gleichmässig positiv geladene Kugel vor, in die negativ geladene Elektronen eingebettet sind. So sollte das Atom insgesamt neutral sein.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="plum-pudding-title plum-pudding-desc" viewBox="0 0 420 190" style="display:block;width:100%;max-width:420px;height:auto">
                <title id="plum-pudding-title">Thomsons Rosinenkuchen-Modell</title>
                <desc id="plum-pudding-desc">Negativ geladene Elektronen sind in einer gleichmässig verteilten positiven Ladung eingebettet.</desc>
                <circle cx="210" cy="88" r="72" fill="#f06b62" stroke="#d64e48" stroke-width="3"/>
                <g fill="#fff" stroke="#315f7b" stroke-width="2">
                  <circle cx="177" cy="52" r="9"/><circle cx="226" cy="46" r="9"/><circle cx="250" cy="78" r="9"/>
                  <circle cx="192" cy="91" r="9"/><circle cx="232" cy="112" r="9"/><circle cx="166" cy="125" r="9"/>
                </g>
                <g fill="#315f7b" font-family="Arial, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
                  <text x="177" y="57">−</text><text x="226" y="51">−</text><text x="250" y="83">−</text>
                  <text x="192" y="96">−</text><text x="232" y="117">−</text><text x="166" y="130">−</text>
                </g>
                <g fill="#fff" font-family="Arial, sans-serif" font-size="18" font-weight="700" text-anchor="middle">
                  <text x="205" y="75">+</text><text x="222" y="143">+</text><text x="148" y="88">+</text>
                </g>
                <text x="210" y="180" fill="#566575" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">Elektronen in gleichmässig verteilter positiver Ladung</text>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Thomsons Modell: „Rosinen“ (Elektronen) in positiver Ladung</figcaption>
            </figure>
            <h3>Protonen und Neutronen</h3>
            <p>1886 beobachtete Eugen Goldstein <strong>Kanalstrahlen</strong>: positiv geladene Teilchen, die sich durch Öffnungen in der Kathode bewegen. Später verwendete Ernest Rutherford die Bezeichnung <strong>Proton</strong> für den positiv geladenen Baustein des Atomkerns. 1932 entdeckte James Chadwick das <strong>Neutron</strong>, ein ungeladenes Teilchen mit einer Masse ähnlich der des Protons.</p>
            <p>Ein Beispiel für eine Kernumwandlung ist <strong><sup>9</sup><sub>4</sub>Be + <sup>4</sup><sub>2</sub>He → <sup>12</sup><sub>6</sub>C + <sup>1</sup><sub>0</sub>n</strong>: Beim Beschuss von Beryllium mit Alpha-Teilchen entsteht unter anderem ein Neutron.</p>
          `
        },
        {
          name: "Elektrische Ladungen",
          summary: `
            <h3>Elektrostatische Kräfte</h3>
            <p>Elektrisch geladene Körper üben Kräfte aufeinander aus. Diese <strong>elektrostatischen Kräfte</strong> (Coulombkräfte) können anziehend oder abstossend sein. Je grösser die Ladungen und je kleiner ihr Abstand, desto stärker ist die Kraft. Elektrostatische Kräfte sind stark im Vergleich zu Gravitationskräften.</p>
            <h3>Das Coulomb'sche Gesetz</h3>
            <p>Für zwei Punktladungen gilt für den Betrag der Kraft:</p>
            <p style="text-align:center;font-size:1.25em"><strong>F = k · |q<sub>1</sub> · q<sub>2</sub>| / r<sup>2</sup></strong></p>
            <p><em>F</em> ist die elektrostatische Kraft, <em>q<sub>1</sub></em> und <em>q<sub>2</sub></em> sind die Ladungen, <em>r</em> ist ihr Abstand und <em>k</em> eine Konstante. Die Kraft ist proportional zum Produkt der Ladungen und umgekehrt proportional zum Quadrat des Abstands.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="coulomb-force-title coulomb-force-desc" viewBox="0 0 720 240" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="coulomb-force-title">Anziehung und Abstossung elektrischer Ladungen</title>
                <desc id="coulomb-force-desc">Gleichnamige Ladungen stossen sich ab, ungleichnamige Ladungen ziehen sich an. Ein grösserer Abstand führt zu einer kleineren Kraft.</desc>
                <defs>
                  <marker id="coulomb-arrow-left" markerWidth="9" markerHeight="9" refX="2" refY="3" orient="auto"><path d="M8,0 L0,3 L8,6 z" fill="#477a98"/></marker>
                  <marker id="coulomb-arrow-right" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="#477a98"/></marker>
                </defs>
                <g font-family="Arial, sans-serif" text-anchor="middle">
                  <text x="180" y="28" fill="#394957" font-size="17" font-weight="700">Gleichnamige Ladungen</text>
                  <circle cx="115" cy="93" r="27" fill="#e9f2f7" stroke="#7195aa" stroke-width="2"/><circle cx="245" cy="93" r="27" fill="#e9f2f7" stroke="#7195aa" stroke-width="2"/>
                  <text x="115" y="101" fill="#315f7b" font-size="28" font-weight="700">+</text><text x="245" y="101" fill="#315f7b" font-size="28" font-weight="700">+</text>
                  <path d="M145 93 H84" stroke="#477a98" stroke-width="3" marker-end="url(#coulomb-arrow-left)"/><path d="M215 93 H276" stroke="#477a98" stroke-width="3" marker-end="url(#coulomb-arrow-right)"/>
                  <text x="180" y="148" fill="#566575" font-size="14">Abstossung</text>
                  <text x="540" y="28" fill="#394957" font-size="17" font-weight="700">Ungleichnamige Ladungen</text>
                  <circle cx="475" cy="93" r="27" fill="#e9f2f7" stroke="#7195aa" stroke-width="2"/><circle cx="605" cy="93" r="27" fill="#f8ecea" stroke="#c28c86" stroke-width="2"/>
                  <text x="475" y="101" fill="#315f7b" font-size="28" font-weight="700">+</text><text x="605" y="101" fill="#a34e47" font-size="28" font-weight="700">−</text>
                  <path d="M445 93 H506" stroke="#477a98" stroke-width="3" marker-end="url(#coulomb-arrow-right)"/><path d="M635 93 H574" stroke="#477a98" stroke-width="3" marker-end="url(#coulomb-arrow-left)"/>
                  <text x="540" y="148" fill="#566575" font-size="14">Anziehung</text>
                  <path d="M120 190 H600" stroke="#adb9c0" stroke-width="2"/>
                  <circle cx="210" cy="190" r="10" fill="#e9f2f7" stroke="#7195aa" stroke-width="2"/><circle cx="510" cy="190" r="10" fill="#f8ecea" stroke="#c28c86" stroke-width="2"/>
                  <text x="210" y="215" fill="#566575" font-size="12">q₁</text><text x="510" y="215" fill="#566575" font-size="12">q₂</text>
                  <text x="360" y="181" fill="#566575" font-size="14">Abstand r</text>
                  <text x="360" y="225" fill="#566575" font-size="14">Grösserer Abstand → kleinere Kraft (F ∝ 1/r²)</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Die Ladungsvorzeichen bestimmen Anziehung oder Abstossung; der Abstand beeinflusst die Kraftstärke.</figcaption>
            </figure>
          `
        },
        {
          name: "Das Kern-Hülle-Modell",
          summary: `
            <h3>Rutherford's Streuversuch</h3>
            <p>Rutherford und sein Team beschossen eine sehr dünne Goldfolie mit positiv geladenen Alpha-Teilchen. Die meisten flogen gerade hindurch; einige wurden abgelenkt und sehr wenige zurückgestreut.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="rutherford-scattering-title rutherford-scattering-desc" viewBox="0 0 720 240" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="rutherford-scattering-title">Rutherford's Streuversuch an einer Goldfolie</title>
                <desc id="rutherford-scattering-desc">Alpha-Teilchen treffen auf eine dünne Goldfolie. Die meisten durchqueren sie gerade, einige werden abgelenkt und wenige zurückgestreut.</desc>
                <defs>
                  <marker id="rutherford-beam-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#397da1"/></marker>
                  <marker id="rutherford-scatter-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#d87937"/></marker>
                </defs>
                <rect x="310" y="35" width="18" height="170" rx="4" fill="#f2d86c" stroke="#bea747" stroke-width="2"/>
                <text x="319" y="25" fill="#566575" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">Goldfolie</text>
                <g fill="none" stroke="#397da1" stroke-width="3" marker-end="url(#rutherford-beam-arrow)">
                  <path d="M50 72 H590"/><path d="M50 120 H590"/><path d="M50 168 H590"/>
                </g>
                <path d="M50 120 H310" fill="none" stroke="#397da1" stroke-width="3"/>
                <g fill="none" stroke="#d87937" stroke-width="3" marker-end="url(#rutherford-scatter-arrow)">
                  <path d="M319 84 L480 42"/><path d="M319 151 L428 209"/><path d="M310 121 H95"/>
                </g>
                <g fill="#394957" font-family="Arial, sans-serif" font-size="15">
                  <text x="45" y="220">Alpha-Teilchen</text>
                  <text x="490" y="118">meiste Teilchen:</text><text x="490" y="137">gerade durch</text>
                  <text x="487" y="35">wenige abgelenkt</text><text x="58" y="102">sehr wenige zurückgestreut</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Die meisten Alpha-Teilchen durchqueren die Folie; nur wenige ändern ihre Richtung stark.</figcaption>
            </figure>
            <h3>Deutung und Schlussfolgerung</h3>
            <ul>
              <li>Da die meisten Alpha-Teilchen ungehindert hindurchfliegen, besteht der grösste Teil des Atoms aus leerem Raum.</li>
              <li>Die Ablenkung entsteht, wenn positiv geladene Alpha-Teilchen nahe an den ebenfalls positiv geladenen Atomkern gelangen und abgestossen werden.</li>
              <li>Der Atomkern ist sehr klein, positiv geladen und enthält fast die gesamte Masse des Atoms. Die negativ geladenen Elektronen bilden die Atomhülle.</li>
            </ul>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="nucleus-shell-title nucleus-shell-desc" viewBox="0 0 560 280" style="display:block;width:100%;max-width:560px;height:auto">
                <title id="nucleus-shell-title">Vereinfachtes Kern-Hülle-Modell des Atoms</title>
                <desc id="nucleus-shell-desc">Ein kleiner, positiv geladener Kern mit Protonen und Neutronen liegt im Zentrum. Elektronen befinden sich in der weit grösseren Atomhülle; dazwischen ist überwiegend leerer Raum.</desc>
                <circle cx="280" cy="135" r="105" fill="#edf6fb" stroke="#73a9c5" stroke-width="3"/>
                <circle cx="280" cy="135" r="29" fill="#ef756c" stroke="#c6534d" stroke-width="2"/>
                <g fill="#fff" stroke="#a34541" stroke-width="1.5">
                  <circle cx="269" cy="126" r="7"/><circle cx="287" cy="124" r="7"/><circle cx="276" cy="143" r="7"/><circle cx="292" cy="143" r="7"/>
                </g>
                <g fill="#a34541" font-family="Arial, sans-serif" font-size="10" font-weight="700" text-anchor="middle">
                  <text x="269" y="130">+</text><text x="287" y="128">n</text><text x="276" y="147">+</text><text x="292" y="147">n</text>
                </g>
                <g fill="#4a8fba" stroke="#fff" stroke-width="2">
                  <circle cx="280" cy="30" r="9"/><circle cx="385" cy="135" r="9"/><circle cx="280" cy="240" r="9"/><circle cx="175" cy="135" r="9"/>
                  <circle cx="354" cy="61" r="9"/><circle cx="206" cy="209" r="9"/>
                </g>
                <g fill="#fff" font-family="Arial, sans-serif" font-size="12" font-weight="700" text-anchor="middle">
                  <text x="280" y="34">−</text><text x="385" y="139">−</text><text x="280" y="244">−</text><text x="175" y="139">−</text>
                  <text x="354" y="65">−</text><text x="206" y="213">−</text>
                </g>
                <g fill="#394957" font-family="Arial, sans-serif" font-size="15">
                  <text x="24" y="55">Elektronenhülle</text><path d="M158 58 L188 76" stroke="#68747c" stroke-width="1.5"/>
                  <text x="365" y="205">kleiner Atomkern</text><path d="M360 190 L305 151" stroke="#68747c" stroke-width="1.5"/>
                </g>
                <text x="280" y="274" fill="#68747c" font-family="Arial, sans-serif" font-size="13" text-anchor="middle">Der Kern ist im Vergleich zur Atomhülle sehr klein.</text>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Schematische Darstellung: kleiner Atomkern, grosse Elektronenhülle, dazwischen viel leerer Raum.</figcaption>
            </figure>
          `
        },
        {
          name: "Die Zusammensetzung von Atomen",
          summary: `
            <p>Atome bestehen aus Protonen und Neutronen im Atomkern sowie Elektronen in der Hülle. Ein Atom ist als Ganzes elektrisch neutral: Es enthält gleich viele <strong>Protonen wie Elektronen</strong>.</p>
            <h3>Ordnungszahl und Nukleonenzahl</h3>
            <ul>
              <li>Die <strong>Ordnungszahl</strong> entspricht der Anzahl der Protonen. Sie wird auch <strong>Kernladungszahl</strong> genannt und legt fest, um welches Element es sich handelt.</li>
              <li>Die <strong>Nukleonenzahl</strong> (Massenzahl) ist die Summe aus Protonen und Neutronen im Kern.</li>
              <li>Die <strong>Atommasse</strong> entspricht näherungsweise der Masse von Protonen und Neutronen zusammen. Die Elektronenmasse ist im Vergleich sehr klein.</li>
              <li>Die Neutronenzahl berechnet sich aus <strong>Nukleonenzahl − Ordnungszahl</strong>.</li>
            </ul>
            <h3>Nuklid-Schreibweise</h3>
            <p>Ein <strong>Nuklid</strong> ist eine Atomsorte mit festgelegter Protonen- und Neutronenzahl. In der Schreibweise <sup>A</sup><sub>Z</sub>X steht <em>X</em> für das Elementsymbol, <em>A</em> für die Nukleonenzahl und <em>Z</em> für die Ordnungszahl (Kernladungszahl).</p>
            <div class="summary-table-wrap">
              <table>
                <caption>Zusammensetzung einiger neutraler Atome</caption>
                <thead><tr><th scope="col">Teilchen</th><th scope="col">Nuklid-Symbol</th><th scope="col">Protonen</th><th scope="col">Elektronen</th><th scope="col">Neutronen</th><th scope="col">Nukleonenzahl</th></tr></thead>
                <tbody>
                  <tr><td>Helium</td><td><sup>4</sup><sub>2</sub>He</td><td>2</td><td>2</td><td>2</td><td>4</td></tr>
                  <tr><td>Kohlenstoff</td><td><sup>12</sup><sub>6</sub>C</td><td>6</td><td>6</td><td>6</td><td>12</td></tr>
                  <tr><td>Stickstoff</td><td><sup>14</sup><sub>7</sub>N</td><td>7</td><td>7</td><td>7</td><td>14</td></tr>
                  <tr><td>Uran</td><td><sup>238</sup><sub>92</sub>U</td><td>92</td><td>92</td><td>146</td><td>238</td></tr>
                  <tr><td>Gold</td><td><sup>197</sup><sub>79</sub>Au</td><td>79</td><td>79</td><td>118</td><td>197</td></tr>
                  <tr><td>Eisen</td><td><sup>56</sup><sub>26</sub>Fe</td><td>26</td><td>26</td><td>30</td><td>56</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          name: "Isotope",
          summary: `
            <h3>Atome derselben Atomsorte</h3>
            <p><strong>Isotope</strong> sind Atome derselben Atomsorte mit unterschiedlicher Atommasse. Sie haben gleich viele Protonen, aber unterschiedlich viele Neutronen.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="isotope-compare-title isotope-compare-desc" viewBox="0 0 640 230" style="display:block;width:100%;max-width:640px;height:auto">
                <title id="isotope-compare-title">Isotope haben gleich viele Protonen und unterschiedliche Neutronenzahlen</title>
                <desc id="isotope-compare-desc">Zwei schematische Atome derselben Atomsorte haben je drei Protonen, aber unterschiedlich viele Neutronen im Kern.</desc>
                <g font-family="Arial, sans-serif" text-anchor="middle">
                  <text x="170" y="27" fill="#394957" font-size="17" font-weight="700">Isotop 1</text>
                  <text x="470" y="27" fill="#394957" font-size="17" font-weight="700">Isotop 2</text>
                  <circle cx="170" cy="112" r="65" fill="#f3f8fb" stroke="#9bb7c8" stroke-width="2"/>
                  <circle cx="470" cy="112" r="65" fill="#f3f8fb" stroke="#9bb7c8" stroke-width="2"/>
                  <circle cx="170" cy="112" r="29" fill="#e8eef2" stroke="#aab8c2" stroke-width="1.5"/>
                  <circle cx="470" cy="112" r="35" fill="#e8eef2" stroke="#aab8c2" stroke-width="1.5"/>
                  <g fill="#e9796e" stroke="#a84943" stroke-width="1.5">
                    <circle cx="160" cy="105" r="8"/><circle cx="178" cy="104" r="8"/><circle cx="170" cy="121" r="8"/>
                    <circle cx="458" cy="103" r="8"/><circle cx="477" cy="103" r="8"/><circle cx="467" cy="121" r="8"/>
                  </g>
                  <g fill="#6c8ca0" stroke="#466579" stroke-width="1.5">
                    <circle cx="160" cy="121" r="8"/>
                    <circle cx="482" cy="122" r="8"/><circle cx="457" cy="122" r="8"/><circle cx="470" cy="89" r="8"/>
                  </g>
                  <g fill="#fff" font-size="10" font-weight="700">
                    <text x="160" y="109">p⁺</text><text x="178" y="108">p⁺</text><text x="170" y="125">p⁺</text>
                    <text x="160" y="125">n</text>
                    <text x="458" y="107">p⁺</text><text x="477" y="107">p⁺</text><text x="467" y="125">p⁺</text>
                    <text x="482" y="126">n</text><text x="457" y="126">n</text><text x="470" y="93">n</text>
                  </g>
                  <text x="170" y="198" fill="#566575" font-size="14">3 Protonen · 1 Neutron</text>
                  <text x="470" y="198" fill="#566575" font-size="14">3 Protonen · 3 Neutronen</text>
                  <text x="320" y="224" fill="#68747c" font-size="13">Gleiche Protonenzahl = gleiche Atomsorte</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Schematische Darstellung: Isotope unterscheiden sich durch die Neutronenzahl.</figcaption>
            </figure>
            <h3>Durchschnittliche Atommasse</h3>
            <p>Im Periodensystem ist meist die <strong>durchschnittliche Atommasse</strong> einer Atomsorte angegeben. Sie ergibt sich aus den Massen ihrer Isotope, gewichtet nach deren natürlicher Häufigkeit.</p>
          `
        },
        { name: "Genauere Betrachtung der Elektronenhülle", placeholder: true },
        { name: "Von Ionisierungsenergien zum Bohr'schen Atommodell", placeholder: true },
        { name: "Das Periodensystem", placeholder: true },
        { name: "Elementfamilien", placeholder: true },
        {
          name: "Atomrumpf und Rumpfladung",
          summary: `
            <h3>Atomrumpf und Rumpfladung</h3>
            <p>Der <strong>Atomrumpf</strong> besteht aus dem Atomkern und den Elektronen der inneren, abgeschlossenen Schalen. Er ist ein Atom ohne Valenzelektronen und stets positiv geladen. Bei Hauptgruppenelementen entspricht seine <strong>Rumpfladung der Hauptgruppennummer</strong>.</p>
            <p>Ein Atom ist elektrisch neutral: Die positive Rumpfladung wird durch die gleich grosse negative Ladung der Valenzelektronen ausgeglichen. Die Anzahl der Valenzelektronen entspricht daher der Grösse der Rumpfladung.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="atomic-core-title atomic-core-desc" viewBox="0 0 720 270" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="atomic-core-title">Vergleich der Atomrümpfe von Magnesium und Chlor</title>
                <desc id="atomic-core-desc">Ein Magnesium-Atomrumpf mit Ladung 2 plus zieht zwei Valenzelektronen an. Ein Chlor-Atomrumpf mit Ladung 7 plus zieht sieben Valenzelektronen stärker an.</desc>
                <g font-family="Arial, sans-serif" text-anchor="middle">
                  <text x="180" y="28" fill="#394957" font-size="18" font-weight="700">Magnesium</text>
                  <text x="540" y="28" fill="#394957" font-size="18" font-weight="700">Chlor</text>
                  <circle cx="180" cy="127" r="77" fill="none" stroke="#e65d50" stroke-width="3"/>
                  <circle cx="540" cy="127" r="77" fill="none" stroke="#e65d50" stroke-width="3"/>
                  <circle cx="180" cy="127" r="49" fill="#d9efda" stroke="#8ab98b" stroke-width="2"/>
                  <circle cx="540" cy="127" r="49" fill="#b9e2b4" stroke="#6ea971" stroke-width="2"/>
                  <text x="180" y="121" fill="#31533b" font-size="23" font-weight="700">2+</text>
                  <text x="180" y="145" fill="#31533b" font-size="14">Atomrumpf</text>
                  <text x="540" y="121" fill="#31533b" font-size="23" font-weight="700">7+</text>
                  <text x="540" y="145" fill="#31533b" font-size="14">Atomrumpf</text>
                  <g fill="#fff" stroke="#52636c" stroke-width="1.5">
                    <circle cx="180" cy="47" r="9"/><circle cx="180" cy="207" r="9"/>
                    <circle cx="540" cy="47" r="9"/><circle cx="540" cy="207" r="9"/>
                    <circle cx="477" cy="82" r="9"/><circle cx="603" cy="82" r="9"/>
                    <circle cx="477" cy="172" r="9"/><circle cx="603" cy="172" r="9"/>
                    <circle cx="540" cy="217" r="9"/>
                  </g>
                  <g fill="#52636c" font-size="12">
                    <text x="180" y="51">−</text><text x="180" y="211">−</text>
                    <text x="540" y="51">−</text><text x="540" y="211">−</text>
                    <text x="477" y="86">−</text><text x="603" y="86">−</text>
                    <text x="477" y="176">−</text><text x="603" y="176">−</text><text x="540" y="221">−</text>
                  </g>
                  <text x="180" y="245" fill="#566575" font-size="14">2 Valenzelektronen · schwächer angezogen</text>
                  <text x="540" y="245" fill="#566575" font-size="14">7 Valenzelektronen · stärker angezogen</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Die Valenzelektronen gleichen die positive Rumpfladung im neutralen Atom aus.</figcaption>
            </figure>
            <h3>Metalle und Nichtmetalle</h3>
            <p>Metall-Atome haben im Vergleich kleine Rumpfladungen. Ihre Valenzelektronen werden schwächer angezogen und lassen sich mit relativ wenig Energie abspalten. Nichtmetall-Atome haben grössere Rumpfladungen; ihre Valenzelektronen werden stärker angezogen.</p>
          `
        },
        {
          name: "Licht und Elektronenhülle",
          summary: `
            <h3>Spektralfarben und Komplementärfarben</h3>
            <p>Sichtbares Licht umfasst Wellenlängen von ungefähr <strong>400 bis 800 nm</strong>. Wird ein Teil des weissen Lichts absorbiert, erscheint die beobachtete Farbe als Komplementärfarbe des absorbierten Spektralbereichs. Beispielsweise erscheint eine Substanz, die blaues Licht absorbiert, gelb.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="complement-colors-title complement-colors-desc" viewBox="0 0 600 220" style="display:block;width:100%;max-width:600px;height:auto">
                <title id="complement-colors-title">Beispiele für absorbierte Farben und ihre Komplementärfarben</title>
                <desc id="complement-colors-desc">Violett ergänzt Gelbgrün, Blau ergänzt Orange, Grün ergänzt Purpur, Gelb ergänzt Indigoblau und Rot ergänzt Blaugrün.</desc>
                <g font-family="Arial, sans-serif" font-size="15" dominant-baseline="middle">
                  <g transform="translate(0 10)"><rect x="144" y="0" width="72" height="28" rx="5" fill="#7540a5"/><text x="225" y="14" fill="#394957">Violett</text><path d="M300 14 H365" stroke="#8a979f" stroke-width="2"/><path d="M365 14 l-8 -5 v10 z" fill="#8a979f"/><rect x="384" y="0" width="72" height="28" rx="5" fill="#b5d348"/><text x="465" y="14" fill="#394957">Gelbgrün</text></g>
                  <g transform="translate(0 48)"><rect x="144" y="0" width="72" height="28" rx="5" fill="#1769b0"/><text x="225" y="14" fill="#394957">Blau</text><path d="M300 14 H365" stroke="#8a979f" stroke-width="2"/><path d="M365 14 l-8 -5 v10 z" fill="#8a979f"/><rect x="384" y="0" width="72" height="28" rx="5" fill="#f28a25"/><text x="465" y="14" fill="#394957">Orange</text></g>
                  <g transform="translate(0 86)"><rect x="144" y="0" width="72" height="28" rx="5" fill="#21a44a"/><text x="225" y="14" fill="#394957">Grün</text><path d="M300 14 H365" stroke="#8a979f" stroke-width="2"/><path d="M365 14 l-8 -5 v10 z" fill="#8a979f"/><rect x="384" y="0" width="72" height="28" rx="5" fill="#8c318f"/><text x="465" y="14" fill="#394957">Purpur</text></g>
                  <g transform="translate(0 124)"><rect x="144" y="0" width="72" height="28" rx="5" fill="#f1d62d"/><text x="225" y="14" fill="#394957">Gelb</text><path d="M300 14 H365" stroke="#8a979f" stroke-width="2"/><path d="M365 14 l-8 -5 v10 z" fill="#8a979f"/><rect x="384" y="0" width="72" height="28" rx="5" fill="#314c9b"/><text x="465" y="14" fill="#394957">Indigoblau</text></g>
                  <g transform="translate(0 162)"><rect x="144" y="0" width="72" height="28" rx="5" fill="#e53935"/><text x="225" y="14" fill="#394957">Rot</text><path d="M300 14 H365" stroke="#8a979f" stroke-width="2"/><path d="M365 14 l-8 -5 v10 z" fill="#8a979f"/><rect x="384" y="0" width="72" height="28" rx="5" fill="#24aeb0"/><text x="465" y="14" fill="#394957">Blaugrün</text></g>
                </g>
                <g fill="#68747c" font-family="Arial, sans-serif" font-size="12" font-weight="700">
                  <text x="144" y="211">absorbierte Farbe</text><text x="384" y="211">beobachtete Komplementärfarbe</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Farbpaare aus dem Spektrum</figcaption>
            </figure>
            <div class="summary-table-wrap">
              <table>
                <caption>Absorbierte Spektralfarbe und beobachtete Komplementärfarbe</caption>
                <thead><tr><th scope="col">Wellenlänge</th><th scope="col">Absorbierte Farbe</th><th scope="col">Beobachtete Farbe</th></tr></thead>
                <tbody>
                  <tr><td>400 nm</td><td>Violett</td><td>Gelbgrün</td></tr>
                  <tr><td>425 nm</td><td>Indigoblau</td><td>Gelb</td></tr>
                  <tr><td>450 nm</td><td>Blau</td><td>Orange</td></tr>
                  <tr><td>490 nm</td><td>Blaugrün</td><td>Rot</td></tr>
                  <tr><td>510 nm</td><td>Grün</td><td>Purpur</td></tr>
                  <tr><td>530 nm</td><td>Gelbgrün</td><td>Violett</td></tr>
                  <tr><td>550 nm</td><td>Gelb</td><td>Indigoblau</td></tr>
                  <tr><td>590 nm</td><td>Orange</td><td>Blau</td></tr>
                  <tr><td>640 nm</td><td>Rot</td><td>Blaugrün</td></tr>
                  <tr><td>730 nm</td><td>Purpur</td><td>Grün</td></tr>
                </tbody>
              </table>
            </div>
            <h3>Flammenfärbung</h3>
            <p>Wärme hebt Elektronen auf ein höheres Energieniveau. Fallen sie auf ein niedrigeres Niveau zurück, wird die Energiedifferenz als Licht einer bestimmten Wellenlänge abgegeben. Die charakteristische Flammenfarbe kann zur <strong>qualitativen Identifikation</strong> von Alkali- und Erdalkalimetallen verwendet werden; dabei findet keine chemische Reaktion statt.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="flame-colors-title flame-colors-desc" viewBox="0 0 720 190" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="flame-colors-title">Charakteristische Flammenfarben verschiedener Metalle</title>
                <desc id="flame-colors-desc">Lithium zeigt karminrot, Natrium orangegelb, Kalium hellviolett, Rubidium rotviolett, Caesium orange, Strontium rot und Barium grün.</desc>
                <g font-family="Arial, sans-serif" text-anchor="middle">
                  <g transform="translate(55 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#c92c46"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Lithium</text><text x="38" y="144" fill="#68747c" font-size="13">Karminrot</text></g>
                  <g transform="translate(145 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#ffb521"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Natrium</text><text x="38" y="144" fill="#68747c" font-size="13">Orangegelb</text></g>
                  <g transform="translate(235 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#a88be8"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Kalium</text><text x="38" y="144" fill="#68747c" font-size="13">Hellviolett</text></g>
                  <g transform="translate(325 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#b64d8d"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Rubidium</text><text x="38" y="144" fill="#68747c" font-size="13">Rotviolett</text></g>
                  <g transform="translate(415 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#ff7628"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Caesium</text><text x="38" y="144" fill="#68747c" font-size="13">Orange</text></g>
                  <g transform="translate(505 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#e94136"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Strontium</text><text x="38" y="144" fill="#68747c" font-size="13">Rot</text></g>
                  <g transform="translate(595 22)"><path d="M32 92 C8 66 29 48 30 20 C53 44 61 62 45 92 Z" fill="#77a83b"/><text x="38" y="122" fill="#394957" font-size="15" font-weight="700">Barium</text><text x="38" y="144" fill="#68747c" font-size="13">Grün</text></g>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Typische Flammenfarben von Alkali- und Erdalkalimetallen</figcaption>
            </figure>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="electron-light-title electron-light-desc" viewBox="0 0 720 250" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="electron-light-title">Anregung und Lichtemission eines Elektrons</title>
                <desc id="electron-light-desc">Wärme oder UV-Licht hebt ein Elektron auf ein höheres Energieniveau. Beim Zurückfallen auf ein niedrigeres Niveau wird Licht abgegeben. Bei Fluoreszenz ist das ausgesandte Licht meist energieärmer und langwelliger als das absorbierte UV-Licht.</desc>
                <defs>
                  <marker id="electron-energy-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#427da0"/></marker>
                  <marker id="electron-light-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#d97832"/></marker>
                </defs>
                <g stroke="#536775" stroke-width="3">
                  <path d="M90 190 H290"/><path d="M90 120 H290"/>
                  <path d="M430 190 H630"/><path d="M430 120 H630"/>
                </g>
                <g fill="#394957" font-family="Arial, sans-serif" font-size="15">
                  <text x="92" y="215">Grundzustand</text><text x="92" y="105">angeregter Zustand</text>
                  <text x="432" y="215">Grundzustand</text><text x="432" y="105">angeregter Zustand</text>
                  <text x="105" y="42" font-size="17" font-weight="700">Flammenfärbung</text>
                  <text x="445" y="42" font-size="17" font-weight="700">Fluoreszenz</text>
                </g>
                <g fill="#315f7b">
                  <circle cx="170" cy="184" r="8"/><circle cx="510" cy="184" r="8"/>
                  <circle cx="510" cy="114" r="8"/>
                </g>
                <g fill="none" stroke-width="3" marker-end="url(#electron-energy-arrow)">
                  <path d="M170 174 V132" stroke="#427da0"/>
                  <path d="M510 174 V132" stroke="#427da0"/>
                </g>
                <path d="M196 128 V178" fill="none" stroke="#d97832" stroke-width="3" marker-end="url(#electron-light-arrow)"/>
                <path d="M536 128 V178" fill="none" stroke="#d97832" stroke-width="3" marker-end="url(#electron-light-arrow)"/>
                <g fill="#68747c" font-family="Arial, sans-serif" font-size="13">
                  <text x="206" y="153">Licht</text><text x="546" y="153">sichtbares Licht</text>
                  <text x="102" y="238">Energiezufuhr durch Wärme</text><text x="442" y="238">Anregung z. B. durch UV-Licht</text>
                </g>
                <path d="M460 75 H570" stroke="#80539b" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#electron-light-arrow)"/>
                <text x="574" y="80" fill="#80539b" font-family="Arial, sans-serif" font-size="13">UV</text>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Elektronen nehmen Energie auf und geben beim Zurückfallen Licht ab.</figcaption>
            </figure>
            <h3>Fluoreszenz</h3>
            <p>Fluoreszenz ist die spontane Lichtemission kurz nach der Anregung eines Materials. Die Anregung kann beispielsweise durch UV-Licht erfolgen. Das ausgesandte Licht ist meist energieärmer und hat eine längere Wellenlänge als das absorbierte Licht. Die Energie eines Lichtquants ist umgekehrt proportional zur Wellenlänge: <strong>E ∼ 1/λ</strong>.</p>
          `
        },
        {
          name: "Grenzen des Bohr'schen Atommodells",
          summary: `
            <h3>Maximale Schalenbesetzung</h3>
            <p>Nach dem Bohr'schen Postulat können sich Elektronen nur auf bestimmten Schalen aufhalten. Die maximale Besetzung einer Schale wird mit <strong>2n<sup>2</sup></strong> berechnet (n = Schalennummer): 1. Schale: 2, 2. Schale: 8, 3. Schale: 18 Elektronen.</p>
            <h3>Grenzen am Beispiel Kalium</h3>
            <p>Kalium besitzt 19 Elektronen. Eine einfache Auffüllung nach der maximalen Schalenkapazität ergäbe <strong>2–8–9</strong>. Das widerspricht der Stellung im Periodensystem: Kalium steht in der 4. Periode und I. Hauptgruppe und hat die Elektronenkonfiguration <strong>2–8–8–1</strong>.</p>
            <p>Auch die Ionisierungsenergien sprechen für diese Verteilung. Deutliche Energiesprünge liegen nach dem ersten, dem neunten und dem siebzehnten Elektron: Die Schalen enthalten demnach von innen nach aussen <strong>2, 8, 8 und 1 Elektron</strong>.</p>
            <p>Die Formel 2n<sup>2</sup> beschreibt die maximale Anzahl an Elektronen pro Schale, erklärt aber nicht die tatsächliche Besetzung der Schalen. Das zeigt eine Grenze des vereinfachten Bohr'schen Atommodells.</p>
          `
        },
        {
          name: "Bohr-Sommerfeld'sches Atommodell",
          summary: `
            <h3>Erweiterung des Bohr-Modells</h3>
            <p>Das Bohr'sche Schalenmodell erklärt viele Eigenschaften der Atome, aber nicht die gemessenen Ionisierungsenergien schwererer Elemente. Arnold Sommerfeld erweiterte es: Hauptschalen werden in <strong>Unterschalen</strong> mit unterschiedlichen Energien unterteilt. Die Elektronenverteilung auf Schalen und Unterschalen heisst <strong>Elektronenkonfiguration</strong>.</p>
            <h3>Schalen und Unterschalen</h3>
            <p>Die Hauptquantenzahl <em>n</em> gibt an, wie viele Unterschalen zu einer Hauptschale gehören. Die Unterschalen werden mit s, p, d und f bezeichnet. Sie fassen der Reihe nach höchstens <strong>2, 6, 10 und 14 Elektronen</strong>. Die Schalen K, L, M und N entsprechen n = 1, 2, 3 und 4.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="subshell-capacity-title subshell-capacity-desc" viewBox="0 0 720 240" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="subshell-capacity-title">Unterschalen der ersten vier Hauptschalen und ihre Kapazitäten</title>
                <desc id="subshell-capacity-desc">Die K-Schale enthält 1s, die L-Schale 2s und 2p, die M-Schale 3s, 3p und 3d, und die N-Schale 4s, 4p, 4d und 4f. Die Kapazitäten der s-, p-, d- und f-Unterschalen sind 2, 6, 10 und 14 Elektronen.</desc>
                <g font-family="Arial, sans-serif" text-anchor="middle">
                  <g fill="#394957" font-size="16" font-weight="700">
                    <text x="177" y="28">K-Schale (n = 1)</text><text x="307" y="28">L-Schale (n = 2)</text>
                    <text x="437" y="28">M-Schale (n = 3)</text><text x="567" y="28">N-Schale (n = 4)</text>
                  </g>
                  <g fill="#f3f6f8" stroke="#aab8c2" stroke-width="1.5">
                    <rect x="128" y="44" width="98" height="42" rx="8"/>
                    <rect x="258" y="44" width="98" height="42" rx="8"/><rect x="258" y="92" width="98" height="42" rx="8"/>
                    <rect x="388" y="44" width="98" height="42" rx="8"/><rect x="388" y="92" width="98" height="42" rx="8"/><rect x="388" y="140" width="98" height="42" rx="8"/>
                    <rect x="518" y="44" width="98" height="42" rx="8"/><rect x="518" y="92" width="98" height="42" rx="8"/><rect x="518" y="140" width="98" height="42" rx="8"/><rect x="518" y="188" width="98" height="42" rx="8"/>
                  </g>
                  <g fill="#356b91" font-size="17" font-weight="700">
                    <text x="177" y="63">1s</text>
                    <text x="307" y="63">2s</text><text x="307" y="111">2p</text>
                    <text x="437" y="63">3s</text><text x="437" y="111">3p</text><text x="437" y="159">3d</text>
                    <text x="567" y="63">4s</text><text x="567" y="111">4p</text><text x="567" y="159">4d</text><text x="567" y="207">4f</text>
                  </g>
                  <g fill="#596b78" font-size="11">
                    <text x="177" y="78">max. 2 e⁻</text>
                    <text x="307" y="78">2 e⁻</text><text x="307" y="126">6 e⁻</text>
                    <text x="437" y="78">2 e⁻</text><text x="437" y="126">6 e⁻</text><text x="437" y="174">10 e⁻</text>
                    <text x="567" y="78">2 e⁻</text><text x="567" y="126">6 e⁻</text><text x="567" y="174">10 e⁻</text><text x="567" y="222">14 e⁻</text>
                  </g>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Unterschalen mit ihrer maximalen Elektronenzahl</figcaption>
            </figure>
            <h3>Besetzungsreihenfolge</h3>
            <p>Elektronen besetzen die Unterschalen in Reihenfolge zunehmender Energie. Die Reihenfolge verläuft nicht einfach Schale für Schale: So wird <strong>4s vor 3d</strong> besetzt. Danach setzt sich die Reihenfolge mit 5f, 6d und 7p fort. Bei den Elementen nimmt die Elektronenzahl mit der Ordnungszahl zu; die Unterschalenbesetzung erklärt den Aufbau des Periodensystems.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="aufbau-order-title aufbau-order-desc" viewBox="0 0 560 390" style="display:block;width:100%;max-width:560px;height:auto">
                <title id="aufbau-order-title">Diagonale Besetzungsregel für Unterschalen</title>
                <desc id="aufbau-order-desc">Tabelle mit Hauptschalen 1 bis 7 als Zeilen und den Unterschalen s, p, d und f als Spalten. Diagonale Pfeile zeigen die Besetzungsreihenfolge: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p.</desc>
                <defs><marker id="aufbau-diagonal-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#e69a43"/></marker></defs>
                <g fill="#566575" font-family="Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
                  <text x="120" y="24">s</text><text x="230" y="24">p</text><text x="340" y="24">d</text><text x="450" y="24">f</text>
                </g>
                <g fill="#f3f6f8" stroke="#b8c5ce" stroke-width="1.5">
                  <rect x="82" y="34" width="76" height="38" rx="5"/><rect x="192" y="34" width="76" height="38" rx="5"/><rect x="302" y="34" width="76" height="38" rx="5"/><rect x="412" y="34" width="76" height="38" rx="5"/>
                  <rect x="82" y="80" width="76" height="38" rx="5"/><rect x="192" y="80" width="76" height="38" rx="5"/><rect x="302" y="80" width="76" height="38" rx="5"/><rect x="412" y="80" width="76" height="38" rx="5"/>
                  <rect x="82" y="126" width="76" height="38" rx="5"/><rect x="192" y="126" width="76" height="38" rx="5"/><rect x="302" y="126" width="76" height="38" rx="5"/><rect x="412" y="126" width="76" height="38" rx="5"/>
                  <rect x="82" y="172" width="76" height="38" rx="5"/><rect x="192" y="172" width="76" height="38" rx="5"/><rect x="302" y="172" width="76" height="38" rx="5"/><rect x="412" y="172" width="76" height="38" rx="5"/>
                  <rect x="82" y="218" width="76" height="38" rx="5"/><rect x="192" y="218" width="76" height="38" rx="5"/><rect x="302" y="218" width="76" height="38" rx="5"/><rect x="412" y="218" width="76" height="38" rx="5"/>
                  <rect x="82" y="264" width="76" height="38" rx="5"/><rect x="192" y="264" width="76" height="38" rx="5"/><rect x="302" y="264" width="76" height="38" rx="5"/><rect x="412" y="264" width="76" height="38" rx="5"/>
                  <rect x="82" y="310" width="76" height="38" rx="5"/><rect x="192" y="310" width="76" height="38" rx="5"/><rect x="302" y="310" width="76" height="38" rx="5"/><rect x="412" y="310" width="76" height="38" rx="5"/>
                </g>
                <g fill="none" stroke="#e69a43" stroke-width="2.2" marker-end="url(#aufbau-diagonal-arrow)">
                  <path d="M230 108 L120 144"/>
                  <path d="M230 154 L120 190"/>
                  <path d="M340 154 L230 190 L120 236"/>
                  <path d="M340 200 L230 236 L120 282"/>
                  <path d="M450 200 L340 236 L230 282 L120 328"/>
                  <path d="M450 246 L340 282 L230 328"/>
                </g>
                <g fill="#68747c" font-family="Arial, sans-serif" font-size="13" text-anchor="end">
                  <text x="70" y="58">1</text><text x="70" y="104">2</text><text x="70" y="150">3</text><text x="70" y="196">4</text>
                  <text x="70" y="242">5</text><text x="70" y="288">6</text><text x="70" y="334">7</text>
                </g>
                <g fill="#315f7b" stroke="#f3f6f8" stroke-width="4" paint-order="stroke" font-family="Arial, sans-serif" font-size="16" font-weight="700" text-anchor="middle">
                  <text x="120" y="58">1s</text><text x="120" y="104">2s</text><text x="230" y="104">2p</text>
                  <text x="120" y="150">3s</text><text x="230" y="150">3p</text><text x="340" y="150">3d</text>
                  <text x="120" y="196">4s</text><text x="230" y="196">4p</text><text x="340" y="196">4d</text><text x="450" y="196">4f</text>
                  <text x="120" y="242">5s</text><text x="230" y="242">5p</text><text x="340" y="242">5d</text><text x="450" y="242">5f</text>
                  <text x="120" y="288">6s</text><text x="230" y="288">6p</text><text x="340" y="288">6d</text>
                  <text x="120" y="334">7s</text><text x="230" y="334">7p</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Pfeile von oben rechts nach unten links lesen: Sie zeigen die Besetzungsreihenfolge der Unterschalen.</figcaption>
            </figure>
            <p>Pro Orbital sind höchstens zwei Elektronen mit entgegengesetztem Spin erlaubt (Pauli-Prinzip). Gleichwertige Orbitale werden zuerst einzeln besetzt, bevor sich Elektronen paaren (Hund'sche Regel).</p>
            <p>Für die Elektronenkonfiguration schreibt man die Unterschalen in Besetzungsreihenfolge mit der jeweiligen Elektronenzahl als hochgestelltem Index, zum Beispiel für Kalium: <strong>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>1</sup></strong>.</p>
          `
        },
        {
          name: "Orbital-Modell",
          summary: `
            <h3>Orbitale und Unterschalen</h3>
            <p>Im Orbital-Modell werden Elektronen nicht mehr durch feste Kreisbahnen beschrieben. Die Aufenthaltsräume der Elektronen (Orbitale) sind Bereiche um den Atomkern, in denen sich ein Elektron mit ungefähr 90 % Wahrscheinlichkeit aufhält. Die Orbitale unterscheiden sich in Form und Energie.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="orbital-shapes-title orbital-shapes-desc" viewBox="0 0 720 190" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="orbital-shapes-title">Schematische Formen von s-, p-, d- und f-Orbitalen</title>
                <desc id="orbital-shapes-desc">Das s-Orbital ist kugelförmig, das p-Orbital hantelförmig, das d-Orbital vierlappig und das f-Orbital mehrlappig dargestellt.</desc>
                <defs>
                  <radialGradient id="orbital-s"><stop offset="0%" stop-color="#75b9df" stop-opacity=".85"/><stop offset="100%" stop-color="#75b9df" stop-opacity=".25"/></radialGradient>
                </defs>
                <g fill="#f7f9fb" stroke="#d7e0e8">
                  <rect x="8" y="8" width="166" height="174" rx="14"/><rect x="188" y="8" width="166" height="174" rx="14"/>
                  <rect x="368" y="8" width="166" height="174" rx="14"/><rect x="548" y="8" width="164" height="174" rx="14"/>
                </g>
                <g fill="#394957" font-family="Arial, sans-serif" font-size="17" font-weight="700" text-anchor="middle">
                  <text x="91" y="34">s-Orbital</text><text x="271" y="34">p-Orbital</text><text x="451" y="34">d-Orbital</text><text x="630" y="34">f-Orbital</text>
                </g>
                <circle cx="91" cy="106" r="43" fill="url(#orbital-s)" stroke="#4b91bd" stroke-width="2"/>
                <g stroke="#fff" stroke-width="2">
                  <ellipse cx="251" cy="106" rx="32" ry="19" fill="#6fb5db"/>
                  <ellipse cx="291" cy="106" rx="32" ry="19" fill="#e8a56e"/>
                  <ellipse cx="431" cy="106" rx="17" ry="31" fill="#6fb5db"/><ellipse cx="471" cy="106" rx="17" ry="31" fill="#e8a56e"/>
                  <ellipse cx="451" cy="86" rx="17" ry="31" fill="#6fb5db"/><ellipse cx="451" cy="126" rx="17" ry="31" fill="#e8a56e"/>
                  <ellipse cx="610" cy="106" rx="13" ry="30" fill="#6fb5db"/><ellipse cx="650" cy="106" rx="13" ry="30" fill="#e8a56e"/>
                  <ellipse cx="630" cy="86" rx="13" ry="30" fill="#6fb5db"/><ellipse cx="630" cy="126" rx="13" ry="30" fill="#e8a56e"/>
                  <ellipse cx="616" cy="92" rx="12" ry="27" transform="rotate(-45 616 92)" fill="#6fb5db"/>
                  <ellipse cx="644" cy="120" rx="12" ry="27" transform="rotate(-45 644 120)" fill="#e8a56e"/>
                </g>
                <g fill="#566575" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">
                  <text x="91" y="164">kugelförmig</text><text x="271" y="164">hantelförmig</text>
                  <text x="451" y="164">meist vierlappig</text><text x="630" y="164">mehrlappig</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Schematische Darstellungen der Orbitalformen</figcaption>
            </figure>
            <ul>
              <li><strong>s-Orbitale:</strong> kugelsymmetrisch; pro Hauptenergieniveau gibt es ein s-Orbital.</li>
              <li><strong>p-Orbitale:</strong> hantelförmig und räumlich ausgerichtet; ab dem zweiten Hauptenergieniveau gibt es drei gleichwertige p-Orbitale.</li>
              <li><strong>d-Orbitale:</strong> ab dem dritten Hauptenergieniveau gibt es fünf; die meisten sind rosettenförmig.</li>
              <li><strong>f-Orbitale:</strong> sieben Orbitale mit komplizierter Form.</li>
            </ul>
            <h3>Quantenzahlen und Besetzung</h3>
            <p>Vier Quantenzahlen beschreiben den Zustand eines Elektrons: Die Hauptquantenzahl <em>n</em> gibt das Energieniveau an, die Nebenquantenzahl <em>l</em> die Orbitalform (s, p, d, f), die magnetische Quantenzahl <em>m</em> die räumliche Orientierung und die Spinquantenzahl <em>m<sub>s</sub></em> den Elektronenspin.</p>
            <p>Jedes Orbital kann höchstens zwei Elektronen mit entgegengesetztem Spin enthalten. Orbitale gleicher Energie werden zuerst einzeln besetzt; danach werden Elektronen gepaart. Die Besetzung folgt der Reihenfolge zunehmender Energie, beginnend mit dem energieärmsten Orbital.</p>
            <figure class="summary-figure">
              <svg role="img" aria-labelledby="orbital-capacity-title orbital-capacity-desc" viewBox="0 0 720 180" style="display:block;width:100%;max-width:720px;height:auto">
                <title id="orbital-capacity-title">Anzahl der Orbitale und maximale Elektronenzahl in den Unterschalen</title>
                <desc id="orbital-capacity-desc">s enthält ein Orbital für zwei Elektronen, p drei Orbitale für sechs Elektronen, d fünf Orbitale für zehn Elektronen und f sieben Orbitale für vierzehn Elektronen.</desc>
                <g fill="#394957" font-family="Arial, sans-serif" font-size="17" font-weight="700" text-anchor="middle">
                  <text x="91" y="30">s</text><text x="271" y="30">p</text><text x="451" y="30">d</text><text x="631" y="30">f</text>
                </g>
                <g fill="#f7f9fb" stroke="#7b8b98" stroke-width="2">
                  <rect x="59" y="48" width="64" height="48" rx="5"/>
                  <rect x="203" y="48" width="44" height="48" rx="5"/><rect x="249" y="48" width="44" height="48" rx="5"/><rect x="295" y="48" width="44" height="48" rx="5"/>
                  <rect x="357" y="48" width="36" height="48" rx="5"/><rect x="395" y="48" width="36" height="48" rx="5"/><rect x="433" y="48" width="36" height="48" rx="5"/><rect x="471" y="48" width="36" height="48" rx="5"/><rect x="509" y="48" width="36" height="48" rx="5"/>
                  <rect x="552" y="48" width="22" height="48" rx="4"/><rect x="575" y="48" width="22" height="48" rx="4"/><rect x="598" y="48" width="22" height="48" rx="4"/><rect x="621" y="48" width="22" height="48" rx="4"/><rect x="644" y="48" width="22" height="48" rx="4"/><rect x="667" y="48" width="22" height="48" rx="4"/><rect x="690" y="48" width="22" height="48" rx="4"/>
                </g>
                <g fill="#356b91" font-family="Arial, sans-serif" font-size="21" font-weight="700" text-anchor="middle">
                  <text x="91" y="80">↑↓</text>
                  <text x="225" y="80">↑↓</text><text x="271" y="80">↑↓</text><text x="317" y="80">↑↓</text>
                  <text x="375" y="80">↑↓</text><text x="413" y="80">↑↓</text><text x="451" y="80">↑↓</text><text x="489" y="80">↑↓</text><text x="527" y="80">↑↓</text>
                  <text x="563" y="80" font-size="16">↑↓</text><text x="586" y="80" font-size="16">↑↓</text><text x="609" y="80" font-size="16">↑↓</text><text x="632" y="80" font-size="16">↑↓</text><text x="655" y="80" font-size="16">↑↓</text><text x="678" y="80" font-size="16">↑↓</text><text x="701" y="80" font-size="16">↑↓</text>
                </g>
                <g fill="#566575" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">
                  <text x="91" y="128">1 Orbital</text><text x="271" y="128">3 Orbitale</text><text x="451" y="128">5 Orbitale</text><text x="632" y="128">7 Orbitale</text>
                  <text x="91" y="153">max. 2 e⁻</text><text x="271" y="153">max. 6 e⁻</text><text x="451" y="153">max. 10 e⁻</text><text x="632" y="153">max. 14 e⁻</text>
                </g>
              </svg>
              <figcaption style="text-align:center;color:#68747c;font-size:.9em">Jedes Kästchen steht für ein Orbital; pro Orbital sind höchstens zwei Elektronen möglich.</figcaption>
            </figure>
          `
        }
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
            <div class="summary-table-wrap">
              <table>
                <caption>Kochsalz auf einen Blick</caption>
                <thead><tr><th scope="col">Formel</th><th scope="col">Aufbau</th><th scope="col">Ladung / Beweglichkeit</th></tr></thead>
                <tbody>
                  <tr><td><strong>NaCl</strong></td><td>Ionengitter aus Na<sup>+</sup> und Cl<sup>−</sup>, Verhältnis 1:1</td><td>Nach aussen neutral; fest gebunden, in Lösung beweglich</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          name: "Die Bildung von Salzen aus Metallen und Nichtmetallen",
          summary: `
            <h3>Elektronenübertragung</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Vom Atom zum Salz</caption>
                <thead><tr><th scope="col">Metall</th><th scope="col">Nichtmetall</th><th scope="col">Zusammen</th></tr></thead>
                <tbody><tr><td>gibt häufig Elektronen ab → <strong>Kation</strong>; oft stabilere, edelgasähnliche Hülle</td><td>nimmt häufig Elektronen auf → <strong>Anion</strong>; oft stabilere, edelgasähnliche Hülle</td><td>entgegengesetzte Ladungen ziehen sich an → Ionengitter</td></tr></tbody>
              </table>
            </div>
            <h3>Beispiel: Natriumchlorid</h3>
            <p><strong>Na → Na<sup>+</sup> + e<sup>−</sup></strong> &nbsp; | &nbsp; <strong>Cl + e<sup>−</sup> → Cl<sup>−</sup></strong> &nbsp; | &nbsp; Verhältnis im Salz: <strong>Na<sup>+</sup>:Cl<sup>−</sup> = 1:1</strong></p>
          `
        },
        {
          name: "Ionenbindung und Ionengitter",
          summary: `
            <h3>Ionenbindung</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>So ist das Ionengitter aufgebaut</caption>
                <tbody>
                  <tr><th scope="row">Bindung</th><td>Elektrostatische Anziehung zwischen Kationen und Anionen</td></tr>
                  <tr><th scope="row">Anordnung</th><td>Anziehung wirkt in alle Richtungen: ausgedehntes Gitter statt einzelner Moleküle; Anziehungen gross, Abstossungen klein</td></tr>
                  <tr><th scope="row">Bilanz</th><td>Jedes Ion ist von mehreren Gegenionen umgeben (Zahl abhängig von der Gitterstruktur); das Gitter ist insgesamt neutral</td></tr>
                </tbody>
              </table>
            </div>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Energiebilanz beim Lösen</caption>
                <thead><tr><th scope="col">Gitterenergie</th><th scope="col">Hydratationsenergie</th><th scope="col">Beobachtung</th></tr></thead>
                <tbody>
                  <tr><td>zum Trennen nötig</td><td>beim Umgeben der Ionen frei</td><td>Hydratation überwiegt: Lösung wärmer; Gitterenergie überwiegt: Lösung kühlt ab</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Auch die Unordnung (Entropie) beeinflusst die Löslichkeit.</p>
          `
        },
        {
          name: "Eigenschaften von Salzen",
          summary: `
            <h3>Eigenschaften und Teilchenmodell</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Aufbau erklärt Eigenschaft</caption>
                <thead><tr><th scope="col">Eigenschaft</th><th scope="col">Erklärung im Teilchenmodell</th></tr></thead>
                <tbody>
                  <tr><td>Leitfähigkeit</td><td>Nur in Schmelze oder Lösung bewegliche Ionen</td></tr>
                  <tr><td>Sprödigkeit</td><td>Verschobene Gitterebenen bringen gleich geladene Ionen nebeneinander</td></tr>
                  <tr><td>Hohe Schmelztemperatur</td><td>Starke Gitterkräfte benötigen viel Energie zum Trennen</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Die Eigenschaften folgen aus dem Ionengitter und unterscheiden sich von vielen molekularen Stoffen.</p>
          `
        },
        {
          name: "Löseprozesse",
          summary: `
            <h3>Lösen in Wasser: Hydratation</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Hydratation in drei Schritten</caption>
                <tbody>
                  <tr><th scope="row">1</th><td>H<sub>2</sub>O-Dipole (O teilweise −, H teilweise +) richten O-Seite zu Kationen, H-Seiten zu Anionen aus.</td></tr>
                  <tr><th scope="row">2</th><td>Wassermoleküle lösen Ionen aus dem Gitter und bilden eine <strong>Hydrathülle</strong>.</td></tr>
                  <tr><th scope="row">3</th><td>Die hydratisierten Ionen verteilen sich und bewegen sich in der Lösung.</td></tr>
                </tbody>
              </table>
            </div>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Bindungstypen im Vergleich</caption>
                <thead><tr><th scope="col">Bindung</th><th scope="col">Zusammenhalt</th><th scope="col">Beispiel</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Kovalent</th><td>Nichtmetallatome teilen Elektronenpaare; typische Grundteilchen: Moleküle</td><td>H<sub>2</sub>O</td></tr>
                  <tr><th scope="row">Metallisch</th><td>Metallatomrümpfe und gemeinsam genutzte, delokalisierte Valenzelektronen</td><td>Eisen</td></tr>
                  <tr><th scope="row">Ionisch</th><td>Anziehung zwischen positiven und negativen Ionen; oft Metall + Nichtmetall</td><td>NaCl</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Vereinfachte Grenzfälle; Bindungen können Mischformen sein.</p>
          `
        },
        {
          name: "Chemische Formeln lesen",
          summary: `
            <h3>Teilchenformeln und Stoffformeln</h3>
            <p>Formeln verwenden Elementsymbole; tiefgestellte Indizes geben Atomanzahl oder Zahlenverhältnis an.</p>
            <div class="summary-table-wrap">
              <table>
                <caption>Was Formeln zeigen</caption>
                <thead><tr><th scope="col">Form</th><th scope="col">Aussage</th><th scope="col">Beispiel</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Index</th><td>Anzahl der Atome bzw. Zahlenverhältnis</td><td>CH<sub>4</sub>: 1 C, 4 H</td></tr>
                  <tr><th scope="row">Teilchenformel</th><td>Einzelnes Teilchen, auch mit Ladung</td><td>O<sup>2−</sup>: Sauerstoff-Ion</td></tr>
                  <tr><th scope="row">Stoffformel</th><td>Bausteine und ihr Verhältnis im Stoff</td><td>NaCl: Na<sup>+</sup> : Cl<sup>−</sup> = 1:1, kein einzelnes Molekül</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">CH<sub>4</sub> kann ein Molekül oder den Stoff Methan bezeichnen; der Kontext entscheidet.</p>
            <h3>Formel als Hinweis auf Bindungstyp und Teilchen</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Erste Orientierung an der Formel</caption>
                <thead><tr><th scope="col">Formel enthält</th><th scope="col">Typischer Hinweis</th><th scope="col">Beispiel</th></tr></thead>
                <tbody>
                  <tr><td>Nur Metalle</td><td>Metallischer Stoff</td><td>Fe</td></tr>
                  <tr><td>Nur Nichtmetalle</td><td>Meist molekular; Kohlenstoff-Netzwerke wie Graphit und Diamant sind Ausnahmen</td><td>H<sub>2</sub>O</td></tr>
                  <tr><td>Metall und Nichtmetall</td><td>Meist salzartig aus Ionen</td><td>NaCl</td></tr>
                  <tr><td>Hochgestellte Ladung</td><td>Einzelnes Ion, nicht automatisch neutraler Stoff</td><td>Na<sup>+</sup></td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Mehratomige Ionen und Grenzfälle erfordern eine genauere Betrachtung.</p>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Reaktionsschema</caption>
                <thead><tr><th scope="col">Edukte</th><th scope="col">Umordnung</th><th scope="col">Produkte</th></tr></thead>
                <tbody><tr><td>Ausgangsstoffe</td><td>Teilchen stossen zusammen; Bindungen werden gelöst und neu gebildet</td><td>Neue Stoffe mit veränderten Eigenschaften</td></tr></tbody>
              </table>
            </div>
            <p>Atomsorten, Atomzahl und Ladung bleiben erhalten. Eine Reaktion kann Energie aufnehmen oder abgeben.</p>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Von Teilchen zu messbaren Mengen</caption>
                <thead><tr><th scope="col">Grösse</th><th scope="col">Zusammenhang</th><th scope="col">Einheit / Hinweis</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Stoffmenge n</th><td>N = n · N<sub>A</sub>; n = N/N<sub>A</sub></td><td>mol; 1 mol = 6,022&nbsp;140&nbsp;76 · 10<sup>23</sup> Teilchen</td></tr>
                  <tr><th scope="row">Molare Masse M</th><td>n = m/M; m = n · M</td><td>g/mol; Verbindung: Atommassen gemäss Formel aufsummieren</td></tr>
                </tbody>
              </table>
            </div>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Rechenweg in fünf Schritten</caption>
                <tbody>
                  <tr><th scope="row">1</th><td>Reaktionsgleichung ausgleichen.</td></tr>
                  <tr><th scope="row">2</th><td>Masse oder Teilchenzahl in Stoffmenge umrechnen.</td></tr>
                  <tr><th scope="row">3</th><td>Mit dem Koeffizientenverhältnis die gesuchte Stoffmenge berechnen.</td></tr>
                  <tr><th scope="row">4–5</th><td>In Masse, Teilchenzahl oder Gasvolumen umrechnen; Einheiten und Grössenordnung prüfen.</td></tr>
                </tbody>
              </table>
            </div>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Was die Reaktion beschleunigt</caption>
                <thead><tr><th scope="col">Faktor</th><th scope="col">Wirkung</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Konzentration</th><td>Mehr Teilchen pro Volumen → mehr Zusammenstösse</td></tr>
                  <tr><th scope="row">Temperatur</th><td>Schnellere Teilchen; mehr Zusammenstösse mit ausreichender Energie; oft etwa doppelte Geschwindigkeit je +10 °C</td></tr>
                  <tr><th scope="row">Oberfläche</th><td>Fein zerteilter Feststoff: mehr Teilchen zugänglich</td></tr>
                  <tr><th scope="row">Katalysator</th><td>Geringere Aktivierungsenergie; beschleunigt Hin- und Rückreaktion, nicht dauerhaft verbraucht</td></tr>
                </tbody>
              </table>
            </div>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Einfluss auf das Gleichgewicht</caption>
                <thead><tr><th scope="col">Änderung</th><th scope="col">Verschiebung / Wirkung</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Konzentration</th><td>Zusatz wird teilweise verbraucht; Entzug begünstigt Neubildung</td></tr>
                  <tr><th scope="row">Druck (Gase)</th><td>Höherer Druck begünstigt weniger Gasteilchen; bei gleicher Anzahl geringer Einfluss</td></tr>
                  <tr><th scope="row">Temperatur</th><td>Erwärmen endotherm, Abkühlen exotherm; K<sub>c</sub> kann sich ändern</td></tr>
                  <tr><th scope="row">Katalysator</th><td>Gleichgewicht schneller erreicht, aber nicht verschoben</td></tr>
                </tbody>
              </table>
            </div>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Säuren, Basen und besondere Teilchen</caption>
                <thead><tr><th scope="col">Teilchen</th><th scope="col">Merkmal</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Säure</th><td>Gibt H<sup>+</sup> ab; saure H-Bindung meist an O, N, S oder Halogene</td></tr>
                  <tr><th scope="row">Base</th><td>Nimmt H<sup>+</sup> auf und benötigt ein freies Elektronenpaar</td></tr>
                  <tr><th scope="row">Ampholyt</th><td>Kann als Säure oder Base reagieren, z. B. Wasser</td></tr>
                  <tr><th scope="row">Mehrprotonige Säure</th><td>Gibt mehrere Protonen schrittweise ab</td></tr>
                </tbody>
              </table>
            </div>
            <p>In Wasser bilden Protonen mit H<sub>2</sub>O H<sub>3</sub>O<sup>+</sup>. Bewegliche Ionen leiten Strom; reine Moleküle nicht.</p>
          `
        },
        {
          name: "Säure-Base-Reaktionen",
          number: 2,
          summary: `
            <h3>Protonenübertragung</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Protonenübergang und korrespondierende Paare</caption>
                <tbody>
                  <tr><th scope="row">Schema</th><td>HA + B ⇌ A<sup>−</sup> + BH<sup>+</sup></td></tr>
                  <tr><th scope="row">Paare</th><td>HA/A<sup>−</sup> und BH<sup>+</sup>/B; Unterschied jeweils H<sup>+</sup></td></tr>
                  <tr><th scope="row">Gleichgewicht</th><td>Bevorzugt die Seite des schwächeren Säure-Base-Paares</td></tr>
                  <tr><th scope="row">Beispiele</th><td>CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ CH<sub>3</sub>COO<sup>−</sup> + H<sub>3</sub>O<sup>+</sup><br>NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup></td></tr>
                </tbody>
              </table>
            </div>
            <h3>Neutralisation</h3>
            <p><strong>H<sub>3</sub>O<sup>+</sup> + OH<sup>−</sup> → 2 H<sub>2</sub>O</strong>; bei vollständiger Neutralisation entstehen aus den übrigen Ionen Salz und Wasser.</p>
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
            <div class="summary-table-wrap">
              <table>
                <caption>pH-Rechnung: passende Grundbeziehung</caption>
                <thead><tr><th scope="col">Fall</th><th scope="col">Ansatz</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Starke einprotonige Säure</th><td>c(H<sub>3</sub>O<sup>+</sup>) ≈ c<sub>0</sub>; pH = −log c(H<sub>3</sub>O<sup>+</sup>)</td></tr>
                  <tr><th scope="row">Starke Base</th><td>c(OH<sup>−</sup>) bestimmen; pOH = −log c(OH<sup>−</sup>); pH = 14 − pOH (25 °C)</td></tr>
                  <tr><th scope="row">Schwache einprotonige Säure</th><td>pH ≈ ½(pK<sub>s</sub> − log c<sub>0</sub>(HA)); Näherungsbedingungen beachten</td></tr>
                  <tr><th scope="row">Schwache Base</th><td>Gleichgewicht und korrespondierende Säure berücksichtigen; Näherung siehe Unterthema 6.9</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Konzentration in mol/L einsetzen; bei Verdünnung zuerst die neue Konzentration berechnen.</p>
          `
        },
        {
          name: "Indikatoren",
          number: 6,
          summary: `
            <h3>Farbumschlag durch Protonierung</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Indikatorformen</caption>
                <thead><tr><th scope="col">Bedingung</th><th scope="col">Überwiegt</th></tr></thead>
                <tbody>
                  <tr><td>Tieferer pH</td><td>HInd (protoniert)</td></tr>
                  <tr><td>Höherer pH</td><td>Ind<sup>−</sup> (deprotoniert)</td></tr>
                  <tr><td>Gleichgewicht</td><td>HInd ⇌ H<sup>+</sup> + Ind<sup>−</sup></td></tr>
                  <tr><td>Umschlagbereich</td><td>Etwa pK<sub>s</sub> ± 1; beide Formen ähnlich häufig</td></tr>
                </tbody>
              </table>
            </div>
            <p>Beispiele: Bromthymolblau, Lackmus, Rotkohlsaft; pH-Papier enthält ein Indikatorgemisch. Für Titrationen den Umschlag im steilen pH-Sprung wählen.</p>
          `
        },
        {
          name: "Puffer-Lösungen",
          number: 7,
          summary: `
            <h3>Bestandteile und Wirkung</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Puffer auf einen Blick</caption>
                <thead><tr><th scope="col">Bestandteil / Zugabe</th><th scope="col">Wirkung</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Schwache Säure + korrespondierende Base</th><td>In vergleichbaren Mengen, z. B. CH<sub>3</sub>COOH/CH<sub>3</sub>COO<sup>−</sup></td></tr>
                  <tr><th scope="row">Säure / Base</th><td>A<sup>−</sup> + H<sub>3</sub>O<sup>+</sup> → HA + H<sub>2</sub>O; HA + OH<sup>−</sup> → A<sup>−</sup> + H<sub>2</sub>O</td></tr>
                  <tr><th scope="row">Puffergleichung</th><td>pH = pK<sub>s</sub> + log<sub>10</sub>(c(A<sup>−</sup>)/c(HA))</td></tr>
                  <tr><th scope="row">Bereich / Kapazität</th><td>Beste Wirkung bei pH ≈ pK<sub>s</sub>; wirksam etwa pK<sub>s</sub> ± 1. Höhere Konzentration erhöht die Kapazität.</td></tr>
                  <tr><th scope="row">Auswahl</th><td>Puffer passend zum gewünschten pH wählen.</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Kleine Säure-/Base-Zugaben ändern den pH wenig; die Pufferwirkung ist begrenzt.</p>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Titration in drei Schritten</caption>
                <tbody>
                  <tr><th scope="row">1</th><td>Bekanntes Probenvolumen vorlegen; Standardlösung aus der Bürette zugeben.</td></tr>
                  <tr><th scope="row">2</th><td>pH mit Indikator oder pH-Meter bis zum steilen Sprung beobachten.</td></tr>
                  <tr><th scope="row">3</th><td>Am Äquivalenzpunkt Stoffmengenverhältnis anwenden: c<sub>S</sub> · V<sub>S</sub> = c<sub>B</sub> · V<sub>B</sub> (einprotonig/einwertig).</td></tr>
                </tbody>
              </table>
            </div>
            <p class="summary-note">Der Äquivalenzpunkt liegt nicht immer bei pH 7: starke Säure + starke Base etwa bei 7; schwache Säure + starke Base darüber.</p>
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
            <p>Redoxreaktionen sind Elektronenübertragungen: Oxidation und Reduktion treten immer gemeinsam auf.</p>
            <div class="summary-table-wrap">
              <table>
                <caption>Redox: Elektronen gehen vom Reduktionsmittel zum Oxidationsmittel</caption>
                <thead><tr><th scope="col">Vorgang</th><th scope="col">Elektronen</th><th scope="col">Mittel</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Oxidation</th><td>Abgabe</td><td>Reduktionsmittel wird oxidiert</td></tr>
                  <tr><th scope="row">Reduktion</th><td>Aufnahme</td><td>Oxidationsmittel wird reduziert</td></tr>
                </tbody>
              </table>
            </div>
            <p>Beispiel: <strong>2 Na → 2 Na<sup>+</sup> + 2 e<sup>−</sup></strong> (Oxidation); <strong>Cl<sub>2</sub> + 2 e<sup>−</sup> → 2 Cl<sup>−</sup></strong> (Reduktion); Gesamt: <strong>2 Na + Cl<sub>2</sub> → 2 NaCl</strong>.</p>
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
            <div class="summary-table-wrap">
              <table>
                <caption>Aufbau und Funktion</caption>
                <tbody>
                  <tr><th scope="row">Zwei Halbzellen</th><td>Oxidation und Reduktion laufen räumlich getrennt ab.</td></tr>
                  <tr><th scope="row">Äusserer Draht</th><td>Elektronen fliessen vom Reduktionsmittel zur Reduktion; es entsteht Strom.</td></tr>
                  <tr><th scope="row">Salzbrücke</th><td>Ermöglicht Ionenaustausch und hält Lösungen elektrisch ausgeglichen.</td></tr>
                  <tr><th scope="row">Elektroden</th><td>Anode: Oxidation; Kathode: Reduktion.</td></tr>
                  <tr><th scope="row">Zellspannung</th><td>Potentialdifferenz der Halbreaktionen; Strom bis Gleichgewicht oder ein Edukt aufgebraucht ist.</td></tr>
                </tbody>
              </table>
            </div>
            <h3>Brennstoffzelle</h3>
            <p>Eine Brennstoffzelle setzt Wasserstoff und Sauerstoff kontrolliert zu Wasser um und wandelt einen grossen Teil der Reaktionsenergie direkt in elektrische Energie um. An den Elektroden beschleunigt Platin die Reaktionen; eine Protonenaustauschmembran lässt Protonen passieren und trennt die Reaktionsräume.</p>
          `
        },
        {
          name: "Elektrolyse",
          summary: `
            <h3>Erzwungene Redoxreaktionen</h3>
            <div class="summary-table-wrap">
              <table>
                <caption>Elektrolyse von Kupferchlorid</caption>
                <thead><tr><th scope="col">Ort</th><th scope="col">Vorgang</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Positive Anode</th><td>Oxidation; Elektronen werden entzogen</td></tr>
                  <tr><th scope="row">Negative Kathode</th><td>Reduktion; Elektronen werden geliefert</td></tr>
                  <tr><th scope="row">Gesamt</th><td>CuCl<sub>2</sub> → Cu + Cl<sub>2</sub></td></tr>
                </tbody>
              </table>
            </div>
            <p>Eine Gleichspannungsquelle erzwingt die Reaktion. Mindestspannung: Zersetzungsspannung; praktisch ist eine höhere Spannung nötig. Bei Kupferchlorid wird Cu<sup>2+</sup> zu Kupfer und Chlorid zu Chlor.</p>
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
            <p>Die Gesamtgleichung ähnelt oft der Photosynthese, die Prozesse verlaufen aber grundverschieden. Im Citratzyklus werden Kohlenstoffverbindungen aus Zucker, Fetten und Proteinen schrittweise zu CO<sub>2</sub> oxidiert; Sauerstoff wird dort nicht verbraucht.</p>
            <div class="summary-table-wrap">
              <table>
                <caption>Elektronenfluss und Energiegewinnung</caption>
                <thead><tr><th scope="col">Schritt</th><th scope="col">Was geschieht?</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Oxidation</th><td>Elektronen werden auf NAD<sup>+</sup> und FAD übertragen → NADH und FADH<sub>2</sub>.</td></tr>
                  <tr><th scope="row">Transport</th><td>Coenzyme bringen Elektronen zur Elektronentransportkette; Proteinkomplexe geben sie schrittweise an Sauerstoff weiter.</td></tr>
                  <tr><th scope="row">ATP-Bildung</th><td>Energie pumpt Protonen durch die Membran; der Protonengradient treibt ADP + Phosphat → ATP.</td></tr>
                </tbody>
              </table>
            </div>
            <p>Die räumlich geordneten Schritte ermöglichen kontrollierte Energiegewinnung statt eines grossen Wärmeverlusts.</p>
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
