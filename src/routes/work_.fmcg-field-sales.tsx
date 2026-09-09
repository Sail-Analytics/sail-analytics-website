import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/fmcg-field-sales")({
  head: () => ({
    meta: [
      { title: "FMCG · See sales and field effort in one place | Sail Analytics" },
      {
        name: "description",
        content:
          "We unified three disconnected systems into one warehouse for a fifty-year-old FMCG producer, cutting fulfilment turnaround by 27% and giving the sales head a same-day view of field effort.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/fmcg-field-sales",
        sector: "FMCG",
        h1: "See sales and field effort in one place.",
        lede: "We unified three disconnected systems into one warehouse for a fifty-year-old FMCG producer, cutting fulfilment turnaround by 27% and giving the sales head a same-day view of field effort.",
        metae: {
          sector: "FMCG",
          howWeWorked: "Project delivery",
          stack: "ERP, DMS, Field Salesforce App, AWS, cloud warehouse, Tableau",
          headline: "27% lower fulfilment turnaround",
        },
        problem:
          "A leading FMCG producer, fifty years in the industry, with a distribution network across multiple states and over a thousand employees. Three systems ran the sales process and none of them talked: an ERP for primary sales, a Distribution Management System run by distributors for secondary sales, and a Field Salesforce App for order-taking and attendance. Sales leadership couldn't answer basic questions — how primary sales converted to secondary week on week, how well distributors fulfilled orders and how long that took, how productive the field force was, and whether teams followed their routes.",
        whatWeBuilt:
          "We built a data warehouse integrating all three systems, with the engineering pipeline running on AWS Cloud using a cloud warehouse for storage, connected to a Tableau BI layer. Dashboards were designed around the organisation's existing business processes and refreshed four times a day to match how the business works.",
        impact: [
          <><strong>15% increase</strong> in sales efficiency, from visibility into field-force effort and attendance across regions in near real time.</>,
          <><strong>25% improvement</strong> in route adherence.</>,
          <><strong>15% improvement</strong> in order fulfilment rate, with a <strong>27% reduction</strong> in fulfilment turnaround time.</>,
        ],
        figs: [
          { n: <>&minus;27<small>%</small></>, k: "Fulfilment time", c: "Turnaround on orders." },
          { n: <>+25<small>%</small></>, k: "Route adherence", c: "Field-force compliance." },
          { n: <>+15<small>%</small></>, k: "Fulfilment rate", c: "Across distributors." },
          { n: <>+15<small>%</small></>, k: "Sales efficiency", c: "Effort translating to sales." },
        ],
        nextTo: "/work/pharma-field-force",
        nextSectorLabel: "Pharma",
        nextTitle: "Retire the weekly Excel grind",
      }}
    />
  ),
});
