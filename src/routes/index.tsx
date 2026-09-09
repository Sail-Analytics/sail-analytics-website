import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sail Analytics | We build the data systems behind better decisions" },
      {
        name: "description",
        content:
          "Sail Analytics builds the data platforms, analytics systems and decision tools businesses rely on.",
      },
      { property: "og:title", content: "Sail Analytics | We build the data systems behind better decisions" },
      {
        property: "og:description",
        content: "Sail Analytics builds the data platforms, analytics systems and decision tools businesses rely on.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const CLIENT_LOGOS = [
  { key: "cocoblu", alt: "Cocoblu logo" },
  { key: "duroflex", alt: "Duroflex logo" },
  { key: "permaweld", alt: "Permaweld logo" },
  { key: "hippocampus", alt: "Hippocampus Learning Centres logo" },
  { key: "tarasafe", alt: "Tarasafe logo" },
  { key: "kci", alt: "KCI logo" },
  { key: "indiaeye", alt: "IndiaEye Graphics logo" },
  { key: "masoom", alt: "Masoom Group logo" },
] as const;

function Index() {
  return (
    <SiteLayout>
      <section className="view" id="v-home" data-route="/">
        {/* 01 - HERO */}
        <section className="hero">
          <svg className="hero-grid" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <pattern id="fineGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.05" />
              </pattern>
            </defs>
            <rect width="1440" height="620" fill="url(#fineGrid)" />
            <line x1="0" y1="600" x2="1440" y2="150" stroke="#000" strokeWidth="1" strokeOpacity="0.14" />
            <line x1="0" y1="600" x2="1440" y2="150" stroke="#27AAE0" strokeWidth="1.5" strokeDasharray="2 10" strokeOpacity="0.55" />
            <circle cx="1116" cy="243" r="6" fill="#27AAE0" />
            <circle cx="1116" cy="243" r="15" fill="none" stroke="#27AAE0" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
          <div className="hero-in">
            <span className="kicker">We help businesses make better decisions through data</span>
            <h1>
              We build the data<br />
              systems behind<br />
              <span className="accent">better decisions.</span>
            </h1>
            <p className="lede">
              Sail Analytics helps businesses turn fragmented data into reliable data platforms, analytics systems
              and decision tools.
            </p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">
                Talk to us{" "}
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link className="btn btn-ghost" to="/work">
                See our work
              </Link>
            </div>
            <ul className="hero-rail" aria-label="What we build">
              <li><span className="hn">01</span>Data platforms</li>
              <li><span className="hn">02</span>Business intelligence</li>
              <li><span className="hn">03</span>Advanced analytics</li>
              <li><span className="hn">04</span>Managed data</li>
            </ul>
          </div>
        </section>

        {/* 02 - THE PROBLEM */}
        <section className="section">
          <div className="page">
            <p className="eyebrow">The problem</p>
            <h2>Your data is everywhere. Your decisions shouldn't be.</h2>
            <p className="lede">
              Operational data piles up across every system you run, and the answers you need get stranded inside
              it. We bring it together and turn it into something your business can decide with.
            </p>
            <div
              className="flow"
              role="img"
              aria-label="Operational systems (ERP, CRM, e-commerce, Excel, IoT) flow into Sail Analytics, which turns them into trusted data, analytics, dashboards, predictions and decisions."
            >
              <div className="flow-band">
                <p className="bl">Operational systems</p>
                <div className="flow-tags">
                  <span className="flow-tag">ERP</span>
                  <span className="flow-tag">CRM</span>
                  <span className="flow-tag">E-commerce</span>
                  <span className="flow-tag">Excel</span>
                  <span className="flow-tag">IoT</span>
                  <span className="flow-tag">Field &amp; ops data</span>
                </div>
              </div>
              <div className="flow-arrow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </div>
              <div className="flow-band hub">
                <p className="bl">One reliable foundation</p>
                <p className="brand">Sail Analytics</p>
              </div>
              <div className="flow-arrow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </div>
              <div className="flow-band out">
                <p className="bl">Decisions you can trust</p>
                <div className="flow-tags">
                  <span className="flow-tag">Trusted data</span>
                  <span className="flow-tag">Analytics</span>
                  <span className="flow-tag">Dashboards</span>
                  <span className="flow-tag">Predictions</span>
                  <span className="flow-tag">Decisions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 - WHAT WE DO */}
        <section className="section tint">
          <div className="page">
            <p className="eyebrow">What we do</p>
            <h2>From raw systems to decisions, we build the whole chain.</h2>
            <p className="lede">
              Most engagements cross several of these at once. We can start anywhere along the chain and take
              responsibility for the outcome.
            </p>
            <div className="caps">
              <div className="cap">
                <p className="cn">Build the foundation</p>
                <h3>Reliable data to work from</h3>
                <ul><li>Data engineering</li><li>Data platforms</li><li>Data modernization</li></ul>
              </div>
              <div className="cap">
                <p className="cn">Make data useful</p>
                <h3>Answers people actually use</h3>
                <ul><li>BI</li><li>Reporting</li><li>Analytics</li><li>Semantic models</li></ul>
              </div>
              <div className="cap">
                <p className="cn">Go beyond reporting</p>
                <h3>See what happens next</h3>
                <ul><li>Forecasting</li><li>Predictive modelling</li><li>Optimization</li></ul>
              </div>
              <div className="cap">
                <p className="cn">Keep it working</p>
                <h3>Systems that stay reliable</h3>
                <ul><li>Data operations</li><li>Monitoring</li><li>Enhancements</li><li>Managed analytics</li></ul>
              </div>
            </div>
            <p style={{ marginTop: "var(--s7)" }}>
              <Link className="textlink" to="/what-we-build">
                See the full set of capabilities{" "}
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* 04 - PROOF */}
        <section className="section">
          <div className="page">
            <p className="eyebrow">Proof</p>
            <h2>We measure our work by what changes in the business.</h2>
            <p className="lede">A sample of outcomes from delivered work. Each names the sector and exactly what was measured.</p>
            <div className="figs">
              <div className="fig-item"><p className="n">&minus;17<small>%</small></p><p className="k">Manufacturing &middot; inventory cost</p><p className="c">Holding cost from demand forecasting.</p></div>
              <div className="fig-item"><p className="n">98<small>%+</small></p><p className="k">Mobility &middot; predictive accuracy</p><p className="c">Battery failure classifier.</p></div>
              <div className="fig-item"><p className="n">&minus;27<small>%</small></p><p className="k">FMCG &middot; fulfilment time</p><p className="c">Order fulfilment turnaround.</p></div>
              <div className="fig-item"><p className="n">30<small>%</small></p><p className="k">Retail &middot; reporting effort</p><p className="c">Key personnel time saved.</p></div>
            </div>
            <p style={{ marginTop: "var(--s7)" }}>
              <Link className="textlink" to="/work">
                Read the case studies{" "}
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* 05 - CASE STUDIES */}
        <section className="section tint">
          <div className="page-wide">
            <div className="page" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <p className="eyebrow">Case studies</p>
              <h2>We start from a question, and build the answer.</h2>
            </div>
            <div className="grid" style={{ marginTop: "var(--s6)" }}>
              <Link className="card" to="/work/ev-battery">
                <div className="bd">
                  <p className="k">Mobility</p>
                  <h3>Can you predict a battery failure before it happens?</h3>
                  <p>Challenge, what we built, result: battery telemetry turned into a predictive system.</p>
                  <p className="fig">98%+ classifier accuracy</p>
                </div>
              </Link>
              <Link className="card" to="/work/demand-forecasting">
                <div className="bd">
                  <p className="k">Manufacturing</p>
                  <h3>How do you get ahead of demand?</h3>
                  <p>A DeepAR+ forecasting pipeline feeding monthly demand into production planning and procurement.</p>
                  <p className="fig">17% lower inventory holding cost</p>
                </div>
              </Link>
              <Link className="card" to="/work/fmcg-field-sales">
                <div className="bd">
                  <p className="k">FMCG</p>
                  <h3>Where is sales effort actually going?</h3>
                  <p>Three disconnected systems unified into one warehouse and a same-day view.</p>
                  <p className="fig">27% lower fulfilment time</p>
                </div>
              </Link>
            </div>
            <p className="page" style={{ paddingLeft: 0, paddingRight: 0, marginTop: "var(--s6)" }}>
              <Link className="textlink" to="/work">
                All case studies{" "}
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* 06 - WHERE WE HAVE EXPERIENCE */}
        <section className="section">
          <div className="page">
            <p className="eyebrow">Where we have experience</p>
            <h2>The problems we solve, by industry.</h2>
            <p className="lede">
              Our experience is domain experience. In each of these sectors, here&rsquo;s the kind of problem
              we&rsquo;re brought in to solve.
            </p>
            <div className="inds">
              <div className="ind"><h3>Retail &amp; Consumer</h3><p>Stock-outs and overstock, real-time reporting across sales and inventory, and product mix from market-basket analysis.</p></div>
              <div className="ind"><h3>Manufacturing</h3><p>ERP and production data brought together, data quality and stewardship established, and adoption tracked where it wasn&rsquo;t before.</p></div>
              <div className="ind"><h3>Energy</h3><p>Decades of unorganised records digitised, and sensor and audio analytics that detect faults from the signal itself.</p></div>
              <div className="ind"><h3>Pharma &amp; Healthcare</h3><p>Field-force effort versus sales, route optimisation, and three-tier dashboards that alert the right person on a breach.</p></div>
              <div className="ind"><h3>Education</h3><p>Learning outcomes and financial performance unified into one view for the people running the schools.</p></div>
              <div className="ind"><h3>Mobility</h3><p>IoT telemetry turned into predictive systems that flag failure risk before it becomes downtime.</p></div>
            </div>
          </div>
        </section>

        {/* 07 - HOW WE WORK */}
        <section className="section tint">
          <div className="page">
            <p className="eyebrow">How we work</p>
            <h2>However you need to bring us in.</h2>
            <p className="lede">The engagement follows your situation: a defined build, extra expertise, or an ongoing capability.</p>
            <div className="hww">
              <div className="hww-item"><p className="q">Need a project built?</p><p className="a"><b>We deliver it.</b> A defined outcome, from discovery through delivery, against a written scope.</p></div>
              <div className="hww-item"><p className="q">Need additional expertise?</p><p className="a"><b>We embed with your team.</b> Experienced specialists working alongside you when you need capacity or depth.</p></div>
              <div className="hww-item"><p className="q">Need an ongoing capability?</p><p className="a"><b>We build and operate it with you.</b> Continuously building and running the systems you depend on.</p></div>
            </div>
            <p style={{ marginTop: "var(--s7)" }}>
              <Link className="textlink" to="/how-we-work">
                See how we work{" "}
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* 08 - WHY SAIL */}
        <section className="section">
          <div className="page">
            <p className="eyebrow">Why Sail Analytics</p>
            <h2>Business-first. Technically deep. Built to deliver.</h2>
            <div className="why">
              <div className="why-item"><p className="wn">01</p><h3>Business-first</h3><p>We start from the decision you&rsquo;re trying to make, not the technology. The problem is the unit of value.</p></div>
              <div className="why-item"><p className="wn">02</p><h3>Technically deep</h3><p>The people who set the direction are the people who build it, hands-on across the whole stack.</p></div>
              <div className="why-item"><p className="wn">03</p><h3>Built to deliver</h3><p>We&rsquo;re accountable for a working system in daily use, not a deck describing one.</p></div>
            </div>
            <div className="quote">
              <blockquote>
                They automated our reporting and clearly understood the on-the-ground challenges our teams face
                every day.
              </blockquote>
              <p className="cite"><b>Tarasafe</b>On the reporting system Sail Analytics built for them.</p>
            </div>
          </div>
        </section>

        <section className="section tint">
          <div className="page">
            <p className="eyebrow">Trusted by</p>
            <h2>Businesses and brands we&rsquo;ve built for.</h2>
            <ul className="logos" aria-label="Client logos">
              {CLIENT_LOGOS.map((logo) => (
                <li key={logo.key}>
                  <img src={`/logos/${logo.key}.png`} alt={logo.alt} width={120} height={44} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Have a data problem worth solving?</h2>
            <p className="lede">
              Tell us the decision you&rsquo;re trying to make and the systems involved. We&rsquo;ve probably seen
              something like it before, and we&rsquo;ll figure out how to build it.
            </p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Talk to us</Link>
              <Link className="btn btn-ghost" to="/how-we-work">See how we work</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
