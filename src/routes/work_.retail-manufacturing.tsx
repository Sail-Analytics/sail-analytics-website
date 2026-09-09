import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/retail-manufacturing")({
  head: () => ({
    meta: [
      { title: "Retail · Serve executives and the front line from one source | Sail Analytics" },
      {
        name: "description",
        content:
          "We modernised data operations end to end for a large retail and manufacturing distribution network, saving 30% of key personnel time through real-time, automated reporting.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/retail-manufacturing",
        sector: "Retail",
        h1: "Serve executives and the front line from one source.",
        lede: "We modernised data operations end to end for a large retail and manufacturing distribution network, saving 30% of key personnel time through real-time, automated reporting.",
        metae: {
          sector: "Retail",
          howWeWorked: "Project delivery",
          stack: "Real-time BI dashboards, dealer intelligence layer, market-basket and attrition models",
          headline: "30% key personnel time saved",
        },
        problem:
          "A large retail and manufacturing distribution network with an extensive dealer base. Sales, marketing, inventory and production each worked off disconnected views, and front-line sales staff lacked the dealer-level context to act quickly. Executive reporting was slow and manual, scheme and promotional benefits were applied inconsistently across dealers, and there was no systematic way to see which products moved together or which dealers were at risk of churning.",
        whatWeBuilt:
          "We modernised data operations end to end: real-time executive reporting for every level of the organisation, a live dealer intelligence layer for front-line staff at the point of action, automated scheme-benefit policy implementation across the dealer and distributor base, market-basket analysis to guide product mix and in-store placement, and a predictive model to flag dealers at risk of attrition before they are lost.",
        impact: [
          <><strong>30% time savings</strong> for key personnel through automated, real-time reporting across Sales &amp; Marketing, Inventory and Production.</>,
          <>Front-line sales teams equipped with <strong>dealer-level intelligence</strong> at the point of action.</>,
          <>Proactive <strong>dealer attrition prevention</strong> through predictive modelling.</>,
        ],
        figs: [
          { n: <>30<small>%</small></>, k: "Personnel time saved", c: "Automated real-time reporting." },
          { n: "Live", k: "Dealer intelligence", c: "At the point of action." },
        ],
        nextTo: "/work/ecommerce-reporting",
        nextSectorLabel: "E-commerce",
        nextTitle: "Replace the fulfilment spreadsheets",
      }}
    />
  ),
});
