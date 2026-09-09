import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/solar-bi")({
  head: () => ({
    meta: [
      { title: "Energy · See project delays before they cascade | Sail Analytics" },
      {
        name: "description",
        content:
          "We designed a Tableau BI solution for a solar-infrastructure company, surfacing delays, supplier dependencies and target-versus-actual completion across its full project portfolio.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/solar-bi",
        sector: "Energy",
        h1: "See project delays before they cascade.",
        lede: "We designed a Tableau BI solution for a solar-infrastructure company, surfacing delays, supplier dependencies and target-versus-actual completion across its full project portfolio.",
        metae: {
          sector: "Energy",
          howWeWorked: "Project delivery",
          stack: "Tableau, disparate project data sources",
          headline: "Portfolio-wide monitoring and control",
        },
        problem:
          "A solar-infrastructure company delivering several large projects for state and federal governments, where speed, quality and cost control decide successful execution. Each project ran across four components — Engineering, Procurement, Construction and Net Metering — and management needed KPIs on progress and potential delays across all four at their fingertips, but was working from disparate sources with no unified view.",
        whatWeBuilt:
          "We designed a comprehensive Business Intelligence solution in Tableau for monitoring and control across the portfolio. It surfaces the expected delay of individual procurement or construction activities and their knock-on impact on timelines, supplier dependency by value of total procurement, the exact stage each material has reached, target-versus-actual completion at weekly, monthly and quarterly cadence, and cost and quality parameters across construction.",
        impact: [
          <>Real-time, portfolio-wide visibility into <strong>project delays and downstream impact</strong>.</>,
          <>Clear <strong>supplier dependency and procurement-stage tracking</strong> across every active project.</>,
          <>Consistent, cadence-based reporting on <strong>target-versus-actual</strong> completion for leadership.</>,
        ],
        noHeadlineNote: "This engagement is measured by the monitoring capability delivered rather than a single headline percentage.",
        nextTo: "/work/capital-equipment",
        nextSectorLabel: "Capital equipment",
        nextTitle: "Make the numbers trustworthy first",
      }}
    />
  ),
});
