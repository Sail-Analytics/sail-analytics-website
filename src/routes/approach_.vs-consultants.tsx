import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "../components/comparison-page";

export const Route = createFileRoute("/approach_/vs-consultants")({
  head: () => ({
    meta: [
      { title: "Sail Analytics vs consultants | Sail Analytics" },
      { name: "description", content: "Advice and direction versus building the working system." },
      { property: "og:title", content: "Sail Analytics vs consultants | Sail Analytics" },
      { property: "og:description", content: "Advice and direction versus building the working system." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ComparisonPage
      data={{
        route: "/approach/vs-consultants",
        eyebrow: "Sail Analytics vs consultants",
        h1: "Builds it, not just advises.",
        lede: "Advisory consultants are good at telling you what to do. The gap opens when it's time to build it.",
        whenRightHeading: "When advisory alone is what you need.",
        whenRightLede: "If you need a strategy, a market view or an independent recommendation and your own team will execute, a pure advisory consultant fits.",
        whenRightPoints: [
          "You need direction or a decision, not delivery.",
          "You have a capable team ready to implement the recommendation.",
          "Independence from the build is the point.",
        ],
        colLeftLabel: "An advisory consultant",
        colLeftRows: [
          { term: "Output", def: "A recommendation, a deck, a roadmap." },
          { term: "Delivery", def: "Hands the build to you or a third party." },
          { term: "Proximity to the data", def: "Often one step removed from the pipeline and the tools." },
          { term: "Accountability", def: "For the advice, not the working system." },
        ],
        colRightLabel: "A team that builds it",
        colRightRows: [
          { term: "Output", def: "A working platform, pipeline, dashboard or model." },
          { term: "Delivery", def: "Builds it, and can keep it running." },
          { term: "Proximity to the data", def: "In the pipeline and the tools, day to day." },
          { term: "Accountability", def: "For the system in daily use, not just the plan." },
        ],
        honestLine: "Consultants bring valuable independence and direction. Sail Analytics is built to actually deliver the system, because our specialists build the thing rather than describe it.",
        nextTo: "/approach/vs-it-services",
        nextLabel: "vs large IT services firms",
      }}
    />
  ),
});
