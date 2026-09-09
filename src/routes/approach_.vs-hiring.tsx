import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "../components/comparison-page";

export const Route = createFileRoute("/approach_/vs-hiring")({
  head: () => ({
    meta: [
      { title: "Sail Analytics vs hiring internally | Sail Analytics" },
      { name: "description", content: "When to hire, and when a specialist that builds the system is the faster route." },
      { property: "og:title", content: "Sail Analytics vs hiring internally | Sail Analytics" },
      { property: "og:description", content: "When to hire, and when a specialist that builds the system is the faster route." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ComparisonPage
      data={{
        route: "/approach/vs-hiring",
        eyebrow: "Sail Analytics vs hiring internally",
        h1: "Faster, and you get a working system sooner.",
        lede: "Hiring a permanent data team is the right call when data is core and permanent. It's slower and more fixed when what you need is a working system now.",
        whenRightHeading: "When hiring internally is the right move.",
        whenRightLede: "If the need is permanent, full-time and central to your business, a hire is usually better than any external arrangement. We'd tell you the same.",
        whenRightPoints: [
          "The role is core and will exist for years, not months.",
          "You can fund a full-time team and afford the runway to fill it.",
          "Deep, exclusive institutional knowledge matters more than speed.",
        ],
        colLeftLabel: "A permanent team",
        colLeftRows: [
          { term: "Time to a working system", def: "Two to four months before anyone is productive: sourcing, interviews, notice, ramp." },
          { term: "Flexibility", def: "Fixed. Scaling down means redundancy; scaling up means hiring again." },
          { term: "Breadth", def: "Bounded by who you managed to hire." },
          { term: "Cost shape", def: "Salaries, benefits, tools, plus the cost of the gap while you search." },
        ],
        colRightLabel: "A system, delivered",
        colRightRows: [
          { term: "Time to a working system", def: "Weeks, drawn from people already employed and available." },
          { term: "Flexibility", def: "Sized to the outcome and changeable as the work evolves." },
          { term: "Breadth", def: "Specialists backed by a team, so an adjacent skill is a question away." },
          { term: "Cost shape", def: "Priced against the outcome. No vacancy cost, no benefits load, no idle time." },
        ],
        honestLine: "Sail Analytics isn't universally cheaper or better than hiring. It's faster and gets you a working system sooner, and it wins when speed, specialisation or flexibility matter more than a permanent seat.",
        nextTo: "/approach/vs-build-from-scratch",
        nextLabel: "vs building from scratch",
      }}
    />
  ),
});
