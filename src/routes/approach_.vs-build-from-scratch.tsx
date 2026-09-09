import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "../components/comparison-page";

export const Route = createFileRoute("/approach_/vs-build-from-scratch")({
  head: () => ({
    meta: [
      { title: "Sail Analytics vs building from scratch | Sail Analytics" },
      { name: "description", content: "Owning the whole function versus getting there with less trial and error." },
      { property: "og:title", content: "Sail Analytics vs building from scratch | Sail Analytics" },
      { property: "og:description", content: "Owning the whole function versus getting there with less trial and error." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ComparisonPage
      data={{
        route: "/approach/vs-build-from-scratch",
        eyebrow: "Sail Analytics vs building from scratch",
        h1: "Less trial and error.",
        lede: "Building a data function from nothing is a real option. It also means learning expensive lessons in public, on your timeline.",
        whenRightHeading: "When building from scratch is right.",
        whenRightLede: "If data is destined to be a large, permanent, core capability and you have the time and budget to invest in building it properly, an in-house function is a goal worth owning.",
        whenRightPoints: [
          "Data will be a large, permanent, core capability.",
          "You have the time and budget to invest in getting there.",
          "Owning the whole function outright is a strategic priority.",
        ],
        colLeftLabel: "Building it yourself",
        colLeftRows: [
          { term: "Starting point", def: "A blank page: where to start, what stack, what architecture." },
          { term: "Trial and error", def: "Lessons learned the expensive way, on your timeline." },
          { term: "Time to value", def: "Long. Hiring, tooling and false starts come first." },
          { term: "Risk", def: "Early architecture mistakes are costly to unwind." },
        ],
        colRightLabel: "Building it with Sail Analytics",
        colRightRows: [
          { term: "Starting point", def: "A direction set by people who have done it before." },
          { term: "Trial and error", def: "The avoidable mistakes already known and skipped." },
          { term: "Time to value", def: "Short. Delivery starts while you decide what to own." },
          { term: "Risk", def: "Architecture chosen with experience, then handed over." },
        ],
        honestLine: "Building your own team is the right long-term goal for some. Sail Analytics gets you there with less trial and error, setting the direction and delivering while you decide what to build in-house.",
        nextTo: "/approach/vs-consultants",
        nextLabel: "vs consultants",
      }}
    />
  ),
});
