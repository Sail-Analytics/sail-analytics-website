import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/site-layout";
import { Calculator } from "../components/calculator/calculator";
import { getSupabase } from "../lib/supabase";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Engagement calculator | Sail Analytics" },
      {
        name: "description",
        content:
          "Estimate the rate for a Sail Analytics specialist against the cost of an in-house hire. Opens after you enter your email.",
      },
      { property: "og:title", content: "Engagement calculator | Sail Analytics" },
      {
        property: "og:description",
        content:
          "Estimate the rate for a Sail Analytics specialist against the cost of an in-house hire. Opens after you enter your email.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CalculatorPage,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function CalculatorPage() {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setSubmitting(true);

    try {
      const supabase = getSupabase();
      const { error } = await supabase.from("calculator_leads").insert({
        email: value,
        source: "calculator_gate",
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });
      if (error) console.error("calculator_leads insert failed:", error.message);
    } catch (err) {
      console.error("Supabase not configured, lead was not saved:", err);
    } finally {
      setSubmitting(false);
      setUnlocked(true);
    }
  }

  return (
    <SiteLayout>
      <section className="view" id="v-calculator" data-route="/calculator">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">Engagement calculator</p>
            <h1>What would a specialist cost?</h1>
            <p className="lede">
              Set six variables and get an indicative rate for a Sail Analytics specialist, next to the cost of the
              same role hired in-house. Enter your email to open the calculator.
            </p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page">
            {!unlocked && (
              <div className={"gate" + (invalid ? " invalid" : "")} id="calc-gate">
                <div className="gate-top">
                  <p className="gk">One step first</p>
                  <h2>See the numbers.</h2>
                  <p>
                    Tell us where to reach you and the calculator opens right here. We use your email only to
                    follow up on your enquiry, never to sell or share.
                  </p>
                  <form id="calc-gate-form" noValidate onSubmit={handleSubmit}>
                    <input
                      type="email"
                      id="calc-email"
                      name="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      aria-label="Work email"
                      required
                      value={email}
                      onChange={(ev) => {
                        setEmail(ev.target.value);
                        if (invalid && EMAIL_RE.test(ev.target.value.trim())) setInvalid(false);
                      }}
                    />
                    <button className="btn btn-signal" type="submit" disabled={submitting}>
                      {submitting ? "Opening…" : "Open the calculator"}
                    </button>
                  </form>
                  <p className="err" id="calc-email-err">Enter a valid email address to continue.</p>
                  <p className="fine">
                    By continuing you agree we may contact you about your enquiry, in line with our{" "}
                    <Link to="/privacy">privacy policy</Link>.
                  </p>
                </div>
              </div>
            )}

            {unlocked && <Calculator />}
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
