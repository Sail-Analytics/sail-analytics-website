import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy | Sail Analytics" },
      { name: "description", content: "Sail Analytics privacy policy." },
      { property: "og:title", content: "Privacy policy | Sail Analytics" },
      { property: "og:description", content: "Sail Analytics privacy policy." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <section className="view" id="v-privacy" data-route="/privacy">
        <div className="legal">
          <p className="eyebrow">Legal</p>
          <h1>Privacy policy</h1>
          <p className="updated">LAST UPDATED 8 SEPTEMBER 2026</p>
          <div className="prose">
            <p>This policy explains what Sail Analytics collects when you contact us through this website, and how we use it.</p>
            <h2>What we collect</h2>
            <p>
              When you contact Sail Analytics through this website, we collect the details you submit in the
              form: your name, company, email and the description of your project. We use them only to respond
              to your enquiry.
            </p>
            <h2>How we use it</h2>
            <p>We use your details to respond to and service your enquiry. We do not sell your information, and we do not use it for anything beyond that purpose.</p>
            <h2>Your rights</h2>
            <p>You can ask us to access, correct or delete the information Sail Analytics holds about you at any time. To do so, contact us using the address below.</p>
            <h2>Contact</h2>
            <p>Questions about this policy can go to <a href="mailto:hello@sailanalytics.com">hello@sailanalytics.com</a>.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
