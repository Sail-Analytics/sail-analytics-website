import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "../components/comparison-page";

export const Route = createFileRoute("/approach_/vs-it-services")({
  head: () => ({
    meta: [
      { title: "Sail Analytics vs large IT services firms | Sail Analytics" },
      { name: "description", content: "Reach and scale versus focus and economy for data and analytics work." },
      { property: "og:title", content: "Sail Analytics vs large IT services firms | Sail Analytics" },
      { property: "og:description", content: "Reach and scale versus focus and economy for data and analytics work." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ComparisonPage
      data={{
        route: "/approach/vs-it-services",
        eyebrow: "Sail Analytics vs large IT services firms",
        h1: "More focused and economical.",
        lede: "Large IT services firms can do almost anything at almost any scale. That reach comes with overhead, and often with distance from the actual build.",
        whenRightHeading: "When a large firm is the right fit.",
        whenRightLede: "For a multi-year, multi-workstream programme that needs a single accountable vendor at enterprise scale, a large firm is built for exactly that.",
        whenRightPoints: [
          "The programme spans many functions and years.",
          "You need one vendor accountable for an enterprise-wide transformation.",
          "Procurement and governance require a firm of a certain size.",
        ],
        colLeftLabel: "A large IT services firm",
        colLeftRows: [
          { term: "Focus", def: "Data is one practice among dozens." },
          { term: "Cost shape", def: "Layered teams and overhead priced into the rate." },
          { term: "Proximity", def: "Partners sell; junior teams often build." },
          { term: "Scale", def: "Built for very large, long programmes." },
        ],
        colRightLabel: "A focused specialist",
        colRightRows: [
          { term: "Focus", def: "Data and analytics only." },
          { term: "Cost shape", def: "A lean, specialist rate with far less overhead." },
          { term: "Proximity", def: "The people you meet are the people who build." },
          { term: "Scale", def: "Sized for focused, high-value work rather than sprawl." },
        ],
        honestLine: "A large firm has reach and scale Sail Analytics doesn't. For focused data and analytics work, Sail Analytics is more focused and more economical, without the overhead you'd be funding either way.",
        nextTo: "/approach/vs-staffing",
        nextLabel: "vs generalist partners",
      }}
    />
  ),
});
