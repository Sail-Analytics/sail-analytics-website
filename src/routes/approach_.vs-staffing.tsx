import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "../components/comparison-page";

export const Route = createFileRoute("/approach_/vs-staffing")({
  head: () => ({
    meta: [
      { title: "Sail Analytics vs generalist partners | Sail Analytics" },
      { name: "description", content: "Generalist breadth versus specialisation in this one domain." },
      { property: "og:title", content: "Sail Analytics vs generalist partners | Sail Analytics" },
      { property: "og:description", content: "Generalist breadth versus specialisation in this one domain." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ComparisonPage
      data={{
        route: "/approach/vs-staffing",
        eyebrow: "Sail Analytics vs generalist partners",
        h1: "Specialised in this one domain.",
        lede: "A generalist partner can put capable people on a task quickly. The question is whether they've built this specific kind of system before.",
        whenRightHeading: "When a generalist partner is enough.",
        whenRightLede: "If you need generalist hands for well-defined, lower-specialisation work, and you have the in-house expertise to direct and check it, a generalist partner can be the pragmatic choice.",
        whenRightPoints: [
          "The work is routine and doesn't need deep domain judgement.",
          "You have the in-house expertise to direct and check it closely.",
          "Volume and speed matter more than depth.",
        ],
        colLeftLabel: "A generalist partner",
        colLeftRows: [
          { term: "Specialisation", def: "Data and analytics is one category among many." },
          { term: "Experience", def: "Variable. You screen for it yourself." },
          { term: "Judgement", def: "Executes the brief as written." },
          { term: "Accountability", def: "For the people supplied, not the outcome." },
        ],
        colRightLabel: "A data specialist",
        colRightRows: [
          { term: "Specialisation", def: "Data and analytics is the whole business." },
          { term: "Experience", def: "Specialists who have delivered this class of system before." },
          { term: "Judgement", def: "Flags a better approach when the brief can be improved." },
          { term: "Accountability", def: "For the working system that results." },
        ],
        honestLine: "A generalist partner is broader and can be faster to staff. Sail Analytics is more specialised and more experienced in this one domain, which is what you're really buying when the work is data.",
        nextTo: "/approach/vs-freelancers",
        nextLabel: "vs freelancers",
      }}
    />
  ),
});
