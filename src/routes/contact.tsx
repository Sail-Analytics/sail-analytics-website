import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/site-layout";
import { getSupabase } from "../lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sail Analytics" },
      {
        name: "description",
        content:
          "Tell Sail Analytics about your data problem. We reply with how we'd approach it and what the work looks like.",
      },
      { property: "og:title", content: "Contact | Sail Analytics" },
      {
        property: "og:description",
        content:
          "Tell Sail Analytics about your data problem. We reply with how we'd approach it and what the work looks like.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setStatus("submitting");
    const form = ev.currentTarget;
    const data = new FormData(form);

    try {
      const supabase = getSupabase();
      const { error } = await supabase.from("contact_submissions").insert({
        name: String(data.get("name") || ""),
        company: String(data.get("company") || ""),
        email: String(data.get("email") || ""),
        situation: String(data.get("situation") || ""),
        objective: String(data.get("objective") || ""),
        detail: String(data.get("detail") || "") || null,
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });
      if (error) {
        console.error("contact_submissions insert failed:", error.message);
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Supabase not configured, submission was not saved:", err);
      setStatus("error");
    }
  }

  return (
    <SiteLayout>
      <section className="view" id="v-contact" data-route="/contact">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">Start a conversation</p>
            <h1>Tell us about your data problem.</h1>
            <p className="lede">
              Bring the outcome you need and the situation you're in. We reply with how we'd approach it
              and what the work looks like.
            </p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page-wide">
            <div className="reach">
              <div>
                <h2>Send the brief.</h2>
                {status === "sent" ? (
                  <div className="callout" style={{ marginTop: "var(--s5)" }}>
                    <p>
                      <b>Thanks — that's sent.</b> A person will read it and reply in writing.
                    </p>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} style={{ marginTop: "var(--s5)" }}>
                  <div className="two-up">
                    <div className="field">
                      <label htmlFor="n">Your name <span className="req">*</span></label>
                      <input id="n" name="name" type="text" autoComplete="name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="co">Company <span className="req">*</span></label>
                      <input id="co" name="company" type="text" autoComplete="organization" required />
                    </div>
                  </div>
                  <div className="two-up">
                    <div className="field">
                      <label htmlFor="em">Work email <span className="req">*</span></label>
                      <input id="em" name="email" type="email" autoComplete="email" required />
                    </div>
                    <div className="field">
                      <label htmlFor="si">Where you're starting from</label>
                      <select id="si" name="situation" defaultValue="We have a data problem to solve">
                        <option>We have a data problem to solve</option>
                        <option>We're building a data capability from scratch</option>
                        <option>We have a team and a gap</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="ob">What are you trying to solve? <span className="req">*</span></label>
                    <input
                      id="ob"
                      name="objective"
                      type="text"
                      placeholder="e.g. one trusted view of primary and secondary sales"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="de">Anything else worth knowing</label>
                    <textarea
                      id="de"
                      name="detail"
                      placeholder="Systems, timing, budget range, what has been tried."
                    />
                  </div>
                  <div className="acts" style={{ marginTop: "var(--s5)" }}>
                    <button className="btn btn-signal" type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? "Sending…" : "Send the brief"}
                    </button>
                    <span className="aside">WE REPLY IN WRITING</span>
                  </div>
                  {status === "error" && (
                    <p className="err" style={{ display: "block", marginTop: "var(--s3)" }}>
                      Something went wrong sending that. Please try again, or email{" "}
                      <a href="mailto:hello@sailanalytics.com">hello@sailanalytics.com</a> directly.
                    </p>
                  )}
                </form>
                )}
              </div>
              <div>
                <h2>Or reach us directly.</h2>
                <dl className="facts" style={{ marginTop: "var(--s5)" }}>
                  <div><dt>Email</dt><dd><a href="mailto:hello@sailanalytics.com">hello@sailanalytics.com</a></dd></div>
                  <div><dt>New business</dt><dd>Send the outcome and the situation. A person replies.</dd></div>
                  <div><dt>What next</dt><dd>A scoping conversation, then a recommended approach.</dd></div>
                  <div><dt>Comparing routes</dt><dd><Link to="/approach">How should you build your data capability?</Link></dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page">
            <p className="eyebrow">Questions</p>
            <h2>Before you write.</h2>
            <div className="qa" style={{ marginTop: "var(--s6)" }}>
              <details open>
                <summary>What happens after I send this?</summary>
                <div className="ans">
                  <p>
                    A person reads it and replies. If it's a fit, the next step is a scoping conversation
                    about the outcome, the systems and the right approach. If it isn't work we should do,
                    we'll say so.
                  </p>
                </div>
              </details>
              <details>
                <summary>Do you respond to RFPs?</summary>
                <div className="ans">
                  <p>
                    Yes. Send the document and the deadline. Scoped delivery is quoted against a written scope, so
                    precision helps.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
