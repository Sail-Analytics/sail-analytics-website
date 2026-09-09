import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/ev-cab-scheduling")({
  head: () => ({
    meta: [
      { title: "Mobility · Schedule an electric cab fleet automatically | Sail Analytics" },
      {
        name: "description",
        content:
          "We built an AI-driven scheduler for an electric-cab fleet, solving many hard constraints at once with each cab's battery charge as a primary limit.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/ev-cab-scheduling",
        sector: "Mobility",
        h1: "Schedule an electric cab fleet automatically.",
        lede: "We built an AI-driven scheduler for an electric-cab fleet, solving many hard constraints at once with each cab's battery charge as a primary limit.",
        metae: {
          sector: "Mobility",
          howWeWorked: "Project delivery",
          stack: "Exact mathematical programming, Genetic Algorithms, Tabu Search, Simulated Annealing, telematics",
          headline: "Automated, battery-aware scheduling",
        },
        problem:
          "An operator of a fleet of electric cabs needed to schedule a large set of planned pickup and drop trips efficiently, with each cab's battery charge as a primary constraint on which trips it could take. Every cab is either at a pickup depot or on the road via telematics, and assigning the best cab meant satisfying many simultaneous constraints: sufficient charge, driver hours, vehicle-type eligibility per campus, escort round-trip rules, occupancy limits, minimum wait times, even distance distribution across cabs, minimal dead miles, resilience to single-cab disruption, and charging around fast/slow requirements — all while maximising utilisation.",
        whatWeBuilt:
          "We solved the problem in two stages: exact mathematical programming for the core allocation, followed by heuristic methods — Genetic Algorithms, Tabu Search and Simulated Annealing — to handle the full complexity of real-world constraints at scale. The result is a fully optimised, automated scheduler built specifically for this fleet's operational rules.",
        impact: [
          <>A fully automated, AI-driven scheduler <strong>replacing manual trip allocation</strong>.</>,
          <>Multiple hard business and logical constraints <strong>solved simultaneously</strong> per allocation.</>,
          <><strong>Battery-aware, telematics-driven</strong> scheduling operating in real time across the fleet.</>,
        ],
        noHeadlineNote: "This engagement is measured by capability delivered rather than a single headline percentage.",
        nextTo: "/work/energy-audit",
        nextSectorLabel: "Energy",
        nextTitle: "Turn thirty years of records into analytics",
      }}
    />
  ),
});
