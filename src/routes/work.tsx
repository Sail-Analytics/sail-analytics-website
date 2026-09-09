import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case studies | Sail Analytics" },
      {
        name: "description",
        content:
          "Thirteen engagements across manufacturing, retail, FMCG, pharma, e-commerce, mobility, energy, education and the public sector, and the data systems we built.",
      },
      { property: "og:title", content: "Case studies | Sail Analytics" },
      {
        property: "og:description",
        content:
          "Thirteen engagements across manufacturing, retail, FMCG, pharma, e-commerce, mobility, energy, education and the public sector, and the data systems we built.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Work,
});

const CASES = [
  { to: "/work/erp-global-manufacturing", k: "Manufacturing", h: "Give a global group one view of itself.", fig: "25–30 companies unified" },
  { to: "/work/demand-forecasting", k: "Manufacturing", h: "Forecast demand instead of reacting to it.", fig: "17% lower inventory cost" },
  { to: "/work/retail-manufacturing", k: "Retail", h: "Serve executives and the front line from one source.", fig: "30% key personnel time saved" },
  { to: "/work/ecommerce-reporting", k: "E-commerce", h: "Replace the fulfilment spreadsheets.", fig: null, figNone: "Automated Flash and MIS reporting" },
  { to: "/work/fmcg-field-sales", k: "FMCG", h: "See sales and field effort in one place.", fig: "27% lower fulfilment time" },
  { to: "/work/pharma-field-force", k: "Pharma", h: "Retire the weekly Excel grind.", fig: null, figNone: "Right-time KPIs, manual Excel retired" },
  { to: "/work/ev-battery", k: "Mobility", h: "Predict battery failure before it happens.", fig: "98%+ classifier accuracy" },
  { to: "/work/ev-cab-scheduling", k: "Mobility", h: "Schedule an electric cab fleet automatically.", fig: null, figNone: "AI-driven, battery-aware scheduling" },
  { to: "/work/energy-audit", k: "Energy", h: "Turn thirty years of records into analytics.", fig: "30 years of records digitised" },
  { to: "/work/heritage-mapping", k: "Public sector", h: "Plan cultural sites on the evidence.", fig: null, figNone: "Hundreds of sites mapped" },
  { to: "/work/solar-bi", k: "Energy", h: "See project delays before they cascade.", fig: null, figNone: "Portfolio-wide delay tracking" },
  { to: "/work/capital-equipment", k: "Capital equipment", h: "Make the numbers trustworthy first.", fig: null, figNone: "Data stewardship established" },
  { to: "/work/education-bi", k: "Education", h: "One view of learning and money.", fig: null, figNone: "Learning and financial views, unified" },
] as const;

function Work() {
  return (
    <SiteLayout>
      <section className="view" id="v-work" data-route="/work">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">Delivered work</p>
            <h1>Real business problems, and what we built.</h1>
            <p className="lede">
              Thirteen engagements across manufacturing, retail, FMCG, pharma, e-commerce, mobility, energy,
              education and the public sector. Each one starts from a business problem and ends in a working
              system. Where the project record holds a measured number we show it; where it doesn&rsquo;t, we say
              so rather than inventing one.
            </p>
          </div>
        </section>
        <section className="section-sm tint">
          <div className="page-wide">
            <h2 className="sr">All case studies</h2>
            <div className="grid">
              {CASES.map((c) => (
                <Link className="card" to={c.to} key={c.to}>
                  <div className="bd">
                    <p className="k">{c.k}</p>
                    <h3>{c.h}</h3>
                    {c.fig ? (
                      <p className="fig">{c.fig}</p>
                    ) : (
                      <p className="fig-none">
                        <svg className="ico"><use href="#ic-arrow" /></svg>
                        {c.figNone}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="page">
            <h2>See one close to your problem?</h2>
            <p className="lede">Tell us which, and we&rsquo;ll walk you through how we&rsquo;d approach yours.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
