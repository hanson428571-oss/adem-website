type Pair = readonly [string, string];
type Triple = readonly [string, string, string];

const metrics: Pair[] = [
  ["Stage", "Functional MVP"],
  ["Entry Market", "Building inspection"],
  ["Patent Status", "USPTO provisional"],
  ["Long-Term Layer", "Trusted real-world data"],
];

const painPoints = [
  "High-cost manual facade inspection workflows",
  "Fragmented and non-standardized inspection data",
  "Limited reuse after each report is delivered",
  "No trusted record layer for long-term building health",
];

const tech: Pair[] = [
  [
    "AI Inspection Analysis",
    "Computer vision, thermal analysis, point-cloud workflows, anomaly detection, and building health scoring.",
  ],
  [
    "Triple-in-One Tether System",
    "Patent-pending ground-to-drone infrastructure for power, data transmission, and task module support.",
  ],
  [
    "Trusted Verification Layer",
    "Mission logs, operator records, inspection history, and verifiable building health records.",
  ],
  [
    "Self-Improving Infrastructure",
    "Every inspection compounds into better models, workflows, risk analysis, and city-scale intelligence.",
  ],
];

const businessModel: Triple[] = [
  [
    "Phase 1",
    "Smart Inspection Service",
    "Facade inspection, AI anomaly analysis, building health reports, and maintenance recommendations.",
  ],
  [
    "Phase 2",
    "Membership Management",
    "Recurring inspections, historical building records, AI risk analysis, and priority service packages.",
  ],
  [
    "Phase 3",
    "AI Data Platform",
    "Building risk models, smart city integrations, infrastructure data services, and cross-site intelligence.",
  ],
];

const roadmap: Triple[] = [
  ["2026", "Prototype + Product MVP", "Complete Product MVP, build early AI recognition capability, and validate the system workflow."],
  ["2027", "Pilot validation", "Run field pilots, establish customer cases, accumulate data, and improve model stability."],
  ["2028", "AI platform", "Expand membership revenue, launch AI analysis platform capabilities, and scale into more cities."],
  ["2029+", "Trusted infrastructure", "Develop smart city applications, trusted data services, and broader Physical AI use cases."],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#top" className="brand" aria-label="ADEM home">
          <img src="/adem-logo-dark.png" alt="ADEM" />
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#platform">Platform</a>
          <a href="#mvp">MVP</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#investors">Investors</a>
        </nav>
        <a className="navCta" href="mailto:founder@ademtrust.ai?subject=Investor%20inquiry%20for%20ADEM">
          Contact
        </a>
      </header>

      <section id="top" className="hero">
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">AI & Data Environment Management</p>
          <h1>Building the Trusted Infrastructure for the Physical AI Era</h1>
          <p className="lead">
            ADEM turns building inspection into verified, reusable real-world data for AI, smart cities, and
            infrastructure management.
          </p>
          <div className="ctaRow">
            <a className="primary" href="#mvp">Watch MVP Demo</a>
            <a className="secondary" href="#investors">Request Investor Deck</a>
          </div>
          <div className="metrics">
            {metrics.map(([label, value]) => (
              <div className="metric" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section thesis">
        <div>
          <p className="eyebrow">The thesis</p>
          <h2>ADEM starts with inspection, then compounds into infrastructure.</h2>
        </div>
        <p>
          Traditional inspection companies complete one task at a time. ADEM is designed to collect, analyze,
          verify, and continuously reuse field data so every inspection improves the next model, report, and
          city-scale decision layer.
        </p>
      </section>

      <section id="problem" className="section twoCol">
        <div>
          <p className="eyebrow">Why now</p>
          <h2>Building inspection still lacks trusted data infrastructure.</h2>
        </div>
        <div className="list">
          {painPoints.map((point) => (
            <div key={point} className="listItem">{point}</div>
          ))}
        </div>
      </section>

      <section id="platform" className="section platform">
        <p className="eyebrow">The platform</p>
        <h2>From drone operation to trusted building intelligence.</h2>
        <div className="flow">
          <span>Drone Inspection</span>
          <span>AI Analysis</span>
          <span>Trusted Verification</span>
          <span>Building Health Passport</span>
          <span>Continuous Learning</span>
        </div>
        <div className="featureGrid">
          <div>
            <h3>A unified loop for Physical AI field data</h3>
            <p>
              ADEM combines aerial data capture, image and thermal analysis, point-cloud workflows, mission
              records, and trusted verification into a repeatable operating system for built environments.
            </p>
          </div>
          <figure className="mediaFrame">
            <img src="/adem-system-flow.png" alt="ADEM system operation flow" />
          </figure>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Technology moat</p>
        <h2>Persistent operation, AI analysis, and trusted records in one stack.</h2>
        <div className="techGrid">
          {tech.map(([title, body]) => (
            <article className="techCard" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <figure className="wideMedia">
          <img src="/adem-3in1-system.png" alt="ADEM triple-in-one tether system" />
        </figure>
      </section>

      <section id="mvp" className="section videoSection">
        <div className="videoText">
          <p className="eyebrow">Functional MVP</p>
          <h2>A one-minute view of ADEM&apos;s inspection operating system.</h2>
          <p>
            The MVP demonstrates drone-based facade inspection, AI anomaly detection, trusted mission records,
            and the Building Health Passport concept.
          </p>
          <div className="statusList">
            <span>Functional MVP complete</span>
            <span>AI model research in progress</span>
            <span>Prototype and pilot validation next</span>
          </div>
        </div>
        <div className="videoShell">
          <iframe
            src="https://www.youtube.com/embed/qbKdY3LzJxk?cc_load_policy=0&hl=en"
            title="ADEM Functional MVP video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section business">
        <p className="eyebrow">Business model</p>
        <h2>A service wedge that grows into a data platform.</h2>
        <div className="modelGrid">
          {businessModel.map(([phase, title, body]) => (
            <article className="modelCard" key={phase}>
              <span>{phase}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section roadmap">
        <p className="eyebrow">Roadmap</p>
        <h2>Validation first, platform scale next.</h2>
        <div className="roadGrid">
          {roadmap.map(([year, title, body]) => (
            <article key={year}>
              <strong>{year}</strong>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="investors" className="section investor">
        <div>
          <p className="eyebrow">Investor access</p>
          <h2>Request the investor deck or schedule a founder conversation.</h2>
          <p>ADEM is preparing for prototype development, pilot validation, and early strategic partnerships.</p>
        </div>
        <div className="investorCard">
          <img src="/adem-logo-light.png" alt="ADEM" />
          <p>Founder / CEO: Hanson Chang</p>
          <a className="primary" href="mailto:founder@ademtrust.ai?subject=Investor%20inquiry%20for%20ADEM">
            founder@ademtrust.ai
          </a>
        </div>
      </section>
    </main>
  );
}
