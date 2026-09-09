import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/pharma-field-force")({
  head: () => ({
    meta: [
      { title: "Pharma · Retire the weekly Excel grind | Sail Analytics" },
      {
        name: "description",
        content:
          "We replaced weekly manual Excel reporting at a pharma-nutrition market leader with an end-to-end Tableau layer delivering right-time field-force KPIs.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/pharma-field-force",
        sector: "Pharma",
        h1: "Retire the weekly Excel grind.",
        lede: "We replaced weekly manual Excel reporting at a pharma-nutrition market leader with an end-to-end Tableau layer delivering right-time field-force KPIs.",
        metae: {
          sector: "Pharma",
          howWeWorked: "Project delivery",
          stack: "ERP sources, Tableau",
          headline: "Right-time KPIs, manual Excel retired",
        },
        problem:
          "A market-leading pharmaceutical organisation in nutrition products, running an extensive on-the-ground sales operation. Sales data was captured by an ERP, but monitoring was entirely manual: every week data was downloaded and compiled into Excel by hand. It was slow, consumed significant senior time, introduced real risk of error, delayed decisions, and made it impossible to slice performance across departments and individual salespeople.",
        whatWeBuilt:
          "We implemented an end-to-end business intelligence solution on Tableau: gathering requirements from stakeholders, combining multiple sources, building visualisations, and setting up refresh mechanisms tuned for right-time information — some metrics in real time, others on a schedule matched to how the business uses them.",
        impact: [
          <>Deeper sales insight through <strong>segmented field-force metrics</strong> — customer-facing days, call counts, coaching days — down to the individual rep.</>,
          <>Improved field productivity through <strong>daily tracking</strong> and proactive, data-driven decisions.</>,
          <>Significant <strong>cost reduction</strong> from eliminating manual, repetitive data crunching.</>,
          <>Wider adoption of data-driven decision-making, driven by intuitive visualisation.</>,
        ],
        noHeadlineNote: "The project record does not state a single headline percentage for this engagement.",
        nextTo: "/work/ev-battery",
        nextSectorLabel: "Mobility",
        nextTitle: "Predict battery failure before it happens",
      }}
    />
  ),
});
