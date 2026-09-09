import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "How to build your data capability | Sail Analytics" },
      {
        name: "description",
        content:
          "An honest guide to building internally, using a partner, or using Sail Analytics, with six comparisons.",
      },
      { property: "og:title", content: "How to build your data capability | Sail Analytics" },
      {
        property: "og:description",
        content:
          "An honest guide to building internally, using a partner, or using Sail Analytics, with six comparisons.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Approach,
});

const COMPARISONS = [
  { to: "/approach/vs-hiring", k: "vs hiring internally", h: "Faster and more flexible" },
  { to: "/approach/vs-build-from-scratch", k: "vs building from scratch", h: "Less trial and error" },
  { to: "/approach/vs-consultants", k: "vs consultants", h: "Builds it, not just advises" },
  { to: "/approach/vs-it-services", k: "vs large IT services firms", h: "More focused and economical" },
  { to: "/approach/vs-staffing", k: "vs generalist partners", h: "Specialised in this one domain" },
  { to: "/approach/vs-freelancers", k: "vs freelancers", h: "Structured and team-backed" },
] as const;

function Approach() {
  return (
    <SiteLayout>
      <section className="view" id="v-approach" data-route="/approach">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">Building your data capability</p>
            <h1>How should you build your data capability?</h1>
            <p className="lede">
              There's no single right answer; it depends on where you're starting from and what data
              needs to become for your business. Here's an honest guide to the main routes, including where
              Sail Analytics fits and where it doesn't.
            </p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page-wide">
            <div className="page" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <p className="eyebrow">The three broad routes</p>
              <h2>Build internally, use a partner, or use Sail Analytics.</h2>
            </div>
            <div className="dmatrix">
              <div className="dcol">
                <p className="dh">Build internally</p>
                <h3>An in-house data team</h3>
                <p className="when">Good when</p>
                <ul>
                  <li>Data will be a large, permanent, core capability for years.</li>
                  <li>You have the time and budget to hire, tool and ramp a full team.</li>
                  <li>Owning the whole function outright is a strategic priority.</li>
                </ul>
              </div>
              <div className="dcol">
                <p className="dh">Use a partner</p>
                <h3>A generalist or advisory partner</h3>
                <p className="when">Good when</p>
                <ul>
                  <li>You need direction or a decision more than delivery.</li>
                  <li>The work is routine and you can direct and check it closely.</li>
                  <li>A large programme needs a single accountable vendor at scale.</li>
                </ul>
              </div>
              <div className="dcol sail">
                <p className="dh">Use Sail Analytics</p>
                <h3>A specialist that builds it</h3>
                <p className="when">Good when</p>
                <ul>
                  <li>You have a data problem and want a working system, fast.</li>
                  <li>Speed, specialisation and accountability matter more than a permanent seat.</li>
                  <li>You want experience to set the direction, then build and hand over.</li>
                </ul>
              </div>
            </div>
            <div className="page" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="callout" style={{ marginTop: "var(--s6)" }}>
                <p>
                  <b>The honest line.</b> Sail Analytics isn't the right answer for every situation, and
                  we'll say so. Where you need a working data system built by people who've done it
                  before, with less trial and error than building from scratch and more delivery than pure
                  advisory, that's exactly where we fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page">
            <p className="eyebrow">The detail</p>
            <h2>Sail Analytics, compared to the alternatives.</h2>
            <p className="lede">
              Six honest comparisons against the routes you're probably weighing. None of them claim Sail
              Analytics is always better; each says exactly where it fits, and where it doesn't.
            </p>
            <div className="grid" style={{ marginTop: "var(--s6)" }}>
              {COMPARISONS.map((c) => (
                <Link className="card" to={c.to} key={c.to}>
                  <div className="bd">
                    <p className="k">{c.k}</p>
                    <h3>{c.h}</h3>
                    <p className="fig-none">
                      <svg className="ico"><use href="#ic-arrow" /></svg>
                      Read the comparison
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Not sure which way to go?</h2>
            <p className="lede">Describe your situation and we'll tell you honestly whether Sail Analytics is the right call.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
              <Link className="btn btn-ghost" to="/calculator">Estimate a specialist's cost</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
