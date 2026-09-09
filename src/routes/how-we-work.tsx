import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How we work | Sail Analytics" },
      {
        name: "description",
        content:
          "Three ways to bring Sail Analytics in: project delivery, embedded capability, and managed data capability.",
      },
      { property: "og:title", content: "How we work | Sail Analytics" },
      {
        property: "og:description",
        content:
          "Three ways to bring Sail Analytics in: project delivery, embedded capability, and managed data capability.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HowWeWork,
});

function HowWeWork() {
  return (
    <SiteLayout>
      <section className="view" id="v-how-we-work" data-route="/how-we-work">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">How we work</p>
            <h1>Three ways to bring us in.</h1>
            <p className="lede">
              The model follows your situation, not the other way round. Here is what each one is for, so you can
              size it before we ever speak.
            </p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page">
            <div className="model">
              <span className="mnum">1</span>
              <div className="mbody">
                <h3>Project delivery</h3>
                <p>
                  We take responsibility for a defined data or analytics outcome, from discovery through delivery.
                  Scope, price and acceptance criteria agreed before work starts.
                </p>
                <div className="grid2">
                  <div>
                    <h4>Best when</h4>
                    <p>The finish line can be described in advance: a platform build, a dashboard suite, a migration or a model.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>A working system delivered against a written scope, and the judgement about how it should be built included.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="model">
              <span className="mnum">2</span>
              <div className="mbody">
                <h3>Embedded capability</h3>
                <p>
                  We provide experienced specialists who work alongside your team when you need additional
                  expertise or capacity. One option among these three, not the definition of Sail Analytics.
                </p>
                <div className="grid2">
                  <div>
                    <h4>Best when</h4>
                    <p>You have a team and a gap, already know what the work is, and want capability without a hiring cycle.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>Specialists backed by a team, so an adjacent skill and an architect&rsquo;s view are a question away.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="model">
              <span className="mnum">3</span>
              <div className="mbody">
                <h3>Managed data capability</h3>
                <p>
                  We continuously build and operate the systems your business depends on, adjusting as the picture
                  clears and the estate evolves.
                </p>
                <div className="grid2">
                  <div>
                    <h4>Best when</h4>
                    <p>The work will be discovered as it goes, or the systems need ongoing operation rather than a one-off build.</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <p>A running capability you can lean on, with a view of the work at any point.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page prose">
            <p className="eyebrow">The through-line</p>
            <h2>Whatever the model, we own the outcome.</h2>
            <p className="lede">
              Commonly the sequence runs one way: a discovery phase clears the unknowns, the build that follows is
              scoped precisely, and an ongoing capability keeps it moving.
            </p>
            <p>What stays constant is accountability. We&rsquo;re not describing what should be done and handing it off. We build the thing and stand behind it in daily use.</p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page">
            <p className="eyebrow">Questions</p>
            <h2>Questions about working together.</h2>
            <div className="qa" style={{ marginTop: "var(--s6)" }}>
              <details open>
                <summary>Can the engagement change over time?</summary>
                <div className="ans">
                  <p>
                    Yes, and it commonly does. A discovery phase often becomes a scoped build, and a delivered
                    build often becomes an ongoing capability. The model tracks where the work actually is.
                  </p>
                </div>
              </details>
              <details>
                <summary>Who does the work?</summary>
                <div className="ans">
                  <p>Experienced specialists employed by Sail Analytics. That&rsquo;s what makes continuity, an architect on call, and a start date drawn from current availability possible.</p>
                </div>
              </details>
              <details>
                <summary>What&rsquo;s the smallest engagement you take?</summary>
                <div className="ans">
                  <p>A single, well-defined outcome. The models are built to flex down as well as up, so a focused first piece of work is a fine place to start.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Not sure which fits?</h2>
            <p className="lede">Tell us the situation and the outcome you need, and we&rsquo;ll recommend the model.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
              <Link className="btn btn-ghost" to="/approach">How should you build your data capability?</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
