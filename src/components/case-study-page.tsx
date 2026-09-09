import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./site-layout";

interface Fig {
  n: ReactNode;
  k: string;
  c: string;
}

export interface CaseStudyData {
  route: string;
  sector: string;
  h1: string;
  lede: string;
  metae: { sector: string; howWeWorked: string; stack: string; headline: string };
  problem: string;
  whatWeBuilt: string;
  impact: ReactNode[];
  noHeadlineNote?: string;
  figs?: Fig[];
  nextTo: string;
  nextSectorLabel: string;
  nextTitle: string;
}

export function CaseStudyPage({ data }: { data: CaseStudyData }) {
  return (
    <SiteLayout>
      <section className="view" data-route={data.route}>
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">Case study &middot; {data.sector}</p>
            <h1>{data.h1}</h1>
            <p className="lede">{data.lede}</p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page prose">
            <h2 className="sr">Engagement detail</h2>
            <dl className="metae">
              <div><dt>Sector</dt><dd>{data.metae.sector}</dd></div>
              <div><dt>How we worked</dt><dd>{data.metae.howWeWorked}</dd></div>
              <div><dt>Stack</dt><dd>{data.metae.stack}</dd></div>
              <div><dt>Headline</dt><dd>{data.metae.headline}</dd></div>
            </dl>
            <h3>The problem</h3>
            <p>{data.problem}</p>
            <h3>What we built</h3>
            <p>{data.whatWeBuilt}</p>
            <h3>Impact</h3>
            <ul>
              {data.impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {data.noHeadlineNote && (
              <p className="meta" style={{ marginTop: "var(--s5)" }}>{data.noHeadlineNote}</p>
            )}
            <div className="callout">
              <p>
                <b>On sourcing.</b> Every fact and figure here comes from Sail Analytics&rsquo; project record for
                this engagement. Client names are withheld where they were not released for publication.
              </p>
            </div>
          </div>
        </section>

        {data.figs && (
          <section className="section-sm">
            <div className="page">
              <p className="eyebrow">The measured result</p>
              <h2>What the client measured.</h2>
              <div className="figs">
                {data.figs.map((f) => (
                  <div className="fig-item" key={f.k}>
                    <p className="n">{f.n}</p>
                    <p className="k">{f.k}</p>
                    <p className="c">{f.c}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-sm">
          <div className="page">
            <div className="next">
              <Link to="/work">
                <p className="k">BACK</p>
                <b>All case studies</b>
              </Link>
              <Link to={data.nextTo}>
                <p className="k">NEXT &middot; {data.nextSectorLabel.toUpperCase()}</p>
                <b>{data.nextTitle}</b>
              </Link>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Have a problem like this?</h2>
            <p className="lede">Tell us the systems you&rsquo;re working with and what you can&rsquo;t currently see.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
