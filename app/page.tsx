const metrics = [
  ['Functional MVP', 'Completed'],
  ['USPTO Provisional', '64/043,935'],
  ['Core System', 'Drone + AI + Verification'],
  ['Stage', 'Pre-seed / Prototype'],
];

const painPoints = ['Manual inspection workflows', 'High cost and low scalability', 'Fragmented, non-standardized data', 'Limited data reuse after each report'];
const tech = [
  ['AI Inspection Analysis', 'Computer vision, thermal analysis, point-cloud workflows, and building health scoring.'],
  ['Triple-in-One Tether System', 'Power, data, and liquid/functional support for longer-duration façade robotics.'],
  ['Trusted Verification Layer', 'Mission logs, operator records, inspection history, and verifiable building health data.'],
  ['Self-Improving Infrastructure', 'Inspection data continuously improves models, workflows, and system capability.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <img src="/adem-logo-dark.png" alt="ADEM logo" className="logo" />
          <div className="navLinks">
            <a href="#solution">Solution</a>
            <a href="#mvp">MVP</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Trusted Physical AI Infrastructure</p>
            <h1>Building the trusted data layer for real-world inspection.</h1>
            <p className="lead">
              Tesla built machines to collect reality. ADEM builds systems to verify reality.
            </p>
            <div className="ctaRow">
              <a className="primary" href="#mvp">Watch MVP Video</a>
              <a className="secondary" href="mailto:founder@ademtrust.ai">Contact Founder</a>
            </div>
          </div>
          <div className="heroCard">
            <p className="cardTitle">System Flow</p>
            <div className="flow"><span>Drone Inspection</span><b>→</b><span>AI Detection</span><b>→</b><span>Trusted Verification</span><b>→</b><span>Building Health Passport</span></div>
          </div>
        </div>
      </section>

      <section className="section stats">
        {metrics.map(([label, value]) => <div className="stat" key={label}><p>{label}</p><strong>{value}</strong></div>)}
      </section>

      <section className="section twoCol">
        <div>
          <p className="eyebrow">Problem</p>
          <h2>Building inspection still lacks a trusted data infrastructure.</h2>
        </div>
        <div className="list">
          {painPoints.map((p) => <div key={p} className="listItem">{p}</div>)}
        </div>
      </section>

      <section id="solution" className="section">
        <p className="eyebrow">Solution</p>
        <h2>ADEM combines drones, AI analysis, and verification into one operating system.</h2>
        <div className="techGrid">
          {tech.map(([title, body]) => <article className="techCard" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section id="mvp" className="section videoSection">
        <div className="videoText">
          <p className="eyebrow">Functional MVP</p>
          <h2>From inspection data to verifiable building health records.</h2>
          <p>
            This one-minute MVP demonstrates ADEM’s target workflow: drone-based façade inspection, AI anomaly detection, mission verification, and a Building Health Passport interface.
          </p>
        </div>
        <video className="video" controls poster="/adem-logo-dark.png">
          <source src="/adem-mvp.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section roadmap">
        <p className="eyebrow">Roadmap</p>
        <div className="roadGrid">
          <div><strong>2026</strong><span>Prototype + Product MVP</span></div>
          <div><strong>2027</strong><span>Pilot validation + early commercialization</span></div>
          <div><strong>2028</strong><span>AI platform + market expansion</span></div>
          <div><strong>2029+</strong><span>Smart infrastructure and data platform</span></div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <img src="/adem-logo-light.png" alt="ADEM logo light" />
        <h2>For investors, partners, and pilot opportunities.</h2>
        <p>Founder / CEO: Hanson Chang</p>
        <a className="primary" href="mailto:founder@ademtrust.ai">founder@ademtrust.ai</a>
      </section>
    </main>
  );
}
