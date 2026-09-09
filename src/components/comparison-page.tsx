import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./site-layout";

interface Row {
  term: string;
  def: string;
}

export interface ComparisonData {
  route: string;
  eyebrow: string;
  h1: string;
  lede: string;
  whenRightHeading: string;
  whenRightLede: string;
  whenRightPoints: string[];
  colLeftLabel: string;
  colLeftRows: Row[];
  colRightLabel: string;
  colRightRows: Row[];
  honestLine: string;
  nextTo: string;
  nextLabel: string;
}

export function ComparisonPage({ data }: { data: ComparisonData }) {
  return (
    <SiteLayout>
      <section className="view" data-route={data.route}>
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">{data.eyebrow}</p>
            <h1>{data.h1}</h1>
            <p className="lede">{data.lede}</p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page prose">
            <h2>{data.whenRightHeading}</h2>
            <p className="lede">{data.whenRightLede}</p>
            <ul>
              {data.whenRightPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="page-wide">
            <div className="page" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <p className="eyebrow">Side by side</p>
              <h2>The honest comparison.</h2>
            </div>
            <div className="vs" style={{ marginTop: "var(--s6)" }}>
              <div className="col">
                <p className="tagm">{data.colLeftLabel}</p>
                <h3>{data.colLeftLabel}</h3>
                <dl>
                  {data.colLeftRows.map((r) => (
                    <div key={r.term}>
                      <dt>{r.term}</dt>
                      <dd>{r.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="col sail">
                <p className="tagm">Sail Analytics</p>
                <h3>{data.colRightLabel}</h3>
                <dl>
                  {data.colRightRows.map((r) => (
                    <div key={r.term}>
                      <dt>{r.term}</dt>
                      <dd>{r.def}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="page" style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="callout" style={{ marginTop: "var(--s6)" }}>
                <p>
                  <b>The honest line.</b> {data.honestLine}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm">
          <div className="page">
            <div className="next">
              <Link to="/approach">
                <p className="k">BACK</p>
                <b>All comparisons</b>
              </Link>
              <Link to={data.nextTo}>
                <p className="k">NEXT</p>
                <b>{data.nextLabel}</b>
              </Link>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Talk it through with us.</h2>
            <p className="lede">Describe your situation and timeline. We&rsquo;ll tell you honestly which way to go.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
