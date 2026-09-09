import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "../components/comparison-page";

export const Route = createFileRoute("/approach_/vs-freelancers")({
  head: () => ({
    meta: [
      { title: "Sail Analytics vs freelancers | Sail Analytics" },
      { name: "description", content: "Lean and bounded versus structured and team-backed." },
      { property: "og:title", content: "Sail Analytics vs freelancers | Sail Analytics" },
      { property: "og:description", content: "Lean and bounded versus structured and team-backed." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ComparisonPage
      data={{
        route: "/approach/vs-freelancers",
        eyebrow: "Sail Analytics vs freelancers",
        h1: "Structured and team-backed.",
        lede: "A good freelancer is excellent value. The risk is concentration: one person, no backup, and the structure is yours to provide.",
        whenRightHeading: "When a freelancer is the right call.",
        whenRightLede: "For a small, self-contained piece of work with a clear brief and low continuity risk, a trusted freelancer is often the most economical option.",
        whenRightPoints: [
          "The task is small, bounded and short.",
          "You can absorb the risk if the person becomes unavailable.",
          "You have the structure to manage and review them yourself.",
        ],
        colLeftLabel: "An independent freelancer",
        colLeftRows: [
          { term: "Continuity", def: "One person. Illness or exit stalls the work." },
          { term: "Structure", def: "You supply the process, review and quality bar." },
          { term: "Breadth", def: "Bounded by one person's skills." },
          { term: "Backing", def: "None beyond the individual." },
        ],
        colRightLabel: "A team-backed specialist",
        colRightRows: [
          { term: "Continuity", def: "Cover and handover if someone moves on." },
          { term: "Structure", def: "A delivery process, review and quality bar included." },
          { term: "Breadth", def: "A specialist plus a team for adjacent skills." },
          { term: "Backing", def: "An architect and peers behind the work." },
        ],
        honestLine: "A freelancer can be leaner still for a small, bounded task. Sail Analytics is more structured and team-backed, which matters the moment continuity or quality assurance does.",
        nextTo: "/approach/vs-hiring",
        nextLabel: "vs hiring internally",
      }}
    />
  ),
});
