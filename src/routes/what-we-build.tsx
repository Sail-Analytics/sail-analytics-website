import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/what-we-build")({
  head: () => ({
    meta: [
      { title: "What we build | Sail Analytics" },
      {
        name: "description",
        content:
          "Modern data platforms, business intelligence, data engineering, advanced analytics, data quality and modernisation.",
      },
      { property: "og:title", content: "What we build | Sail Analytics" },
      {
        property: "og:description",
        content:
          "Modern data platforms, business intelligence, data engineering, advanced analytics, data quality and modernisation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhatWeBuild,
});

const TECH_LOGOS = [
  { key: "tableau", alt: "Tableau logo" },
  { key: "powerbi", alt: "Microsoft Power BI logo" },
  { key: "qlik", alt: "Qlik logo" },
  { key: "gcloud", alt: "Google Cloud logo" },
  { key: "redshift", alt: "Amazon Redshift logo" },
  { key: "mysql", alt: "MySQL logo" },
  { key: "bigquery", alt: "Google BigQuery logo" },
  { key: "python", alt: "Python logo" },
] as const;

function WhatWeBuild() {
  return (
    <SiteLayout>
      <section className="view" id="v-what-we-build" data-route="/what-we-build">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">What we build</p>
            <h1>Data systems, across the whole stack.</h1>
            <p className="lede">
              Sail Analytics builds across the entire data and analytics lifecycle. The breadth matters because
              most real problems cross several of these at once: from getting the data in, to the dashboard
              someone opens every morning, to the model that predicts what happens next.
            </p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page">
            <p className="eyebrow">Capabilities</p>
            <h2>What we're asked to build most.</h2>
            <div className="build-grid" style={{ borderTopColor: "var(--black)" }}>
              <div className="build">
                <p className="verb">Build</p>
                <h3>Modern data platforms</h3>
                <p>Bring fragmented operational data into one reliable foundation on AWS, Redshift or BigQuery, with the engineering that keeps it current.</p>
              </div>
              <div className="build">
                <p className="verb">Understand</p>
                <h3>Business intelligence</h3>
                <p>Reporting systems people actually open, in Tableau, Power BI or Qlik, aligned to your business process and refreshed on the schedule the work needs.</p>
              </div>
              <div className="build">
                <p className="verb">Explain</p>
                <h3>Descriptive analytics</h3>
                <p>The measures that explain what happened: field-force metrics, inventory ageing, sales versus effort, market basket analysis.</p>
              </div>
              <div className="build">
                <p className="verb">Predict</p>
                <h3>Advanced analytics</h3>
                <p>Models that state what is about to happen, scored honestly: failure classification, attrition prediction, demand forecasting.</p>
              </div>
              <div className="build">
                <p className="verb">Trust</p>
                <h3>Data management &amp; quality</h3>
                <p>Sourcing, sanitisation, stewardship and monitoring, so the numbers behind every dashboard can be relied on.</p>
              </div>
              <div className="build">
                <p className="verb">Modernise</p>
                <h3>Data modernisation</h3>
                <p>Move legacy reporting and fragmented data environments onto modern platforms, and automate the manual steps out of reporting.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page prose">
            <p className="eyebrow">How to think about it</p>
            <h2>We sell outcomes and systems, not seats.</h2>
            <p className="lede">The unit of value is the problem you're trying to solve, not the person who happens to be sitting near it.</p>
            <p>
              Every engagement brings both the capability to do the work and the judgement to steer it. The same
              specialists who build the warehouse, the pipeline, the dashboard or the model also bring the
              experience that shapes the decisions around them: where to start, what stack, what architecture,
              what to avoid.
            </p>
            <p>That is the difference between handing over a working system and handing over a set of hands. We take responsibility for the thing being built.</p>
            <p>
              <Link className="textlink" to="/work">
                See how that plays out in delivered work{" "}
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        <section className="section tint">
          <div className="page">
            <p className="eyebrow">Technologies</p>
            <h2>The tools we build in.</h2>
            <p className="lede">Tool choice follows the estate and the reporting need, not a house preference.</p>
            <ul className="logos" aria-label="Technology logos">
              {TECH_LOGOS.map((logo) => (
                <li key={logo.key}>
                  <img src={`/logos/${logo.key}.png`} alt={logo.alt} width={120} height={44} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Have a problem that crosses several of these?</h2>
            <p className="lede">Most do. Tell us the outcome and the systems involved, and we'll map it to the right approach.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
              <Link className="btn btn-ghost" to="/how-we-work">See how we work</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
