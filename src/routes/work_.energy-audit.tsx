import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/energy-audit")({
  head: () => ({
    meta: [
      { title: "Energy · Turn thirty years of records into analytics | Sail Analytics" },
      {
        name: "description",
        content:
          "We digitised over thirty years of unorganised records and built audio analytics that detects leak type and size from the frequency signature of ultrasound waves.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/energy-audit",
        sector: "Energy",
        h1: "Turn thirty years of records into analytics.",
        lede: "We digitised over thirty years of unorganised records and built audio analytics that detects leak type and size from the frequency signature of ultrasound waves.",
        metae: {
          sector: "Energy",
          howWeWorked: "Project delivery",
          stack: "Cloud infrastructure, field data-collection tools, audio analytics, Tableau",
          headline: "30 years of records digitised",
        },
        problem:
          "A maintenance-engineering firm with more than 31 years of experience in in-plant maintenance for critical infrastructure — lubrication consultancy and specialised welding wherever steam is used — wanted to move from reactive maintenance to intelligent, data-driven leak prevention. Decades of operational data existed but in unorganised form, scattered across formats and departments, with no consolidated system for identifying and prioritising equipment losses before they became costly failures.",
        whatWeBuilt:
          "We set up cloud infrastructure to host and manage over 30 years of previously unorganised data, digitising structured records and unstructured audio with enhanced quality monitoring using a mix of off-the-shelf and custom-built field tools. On top we built an audio-analytics capability for automatic leak-type and leak-size detection from the frequency signature of ultrasound waves, plus an analytics-based decision framework used across prominent oil refineries to reduce losses from 11 distinct types of equipment aberration. A Tableau environment and internal processes completed the solution.",
        impact: [
          <>Automatic classification of air leaks by <strong>type and severity</strong> across plant departments.</>,
          <>A consolidated, <strong>30+-year data foundation</strong> supporting ongoing loss-reduction analysis.</>,
          <>A repeatable <strong>audio-analytics leak-detection</strong> capability applicable across industrial sites.</>,
        ],
        figs: [
          { n: <>30+<small>yrs</small></>, k: "Records digitised", c: "From unorganised formats." },
          { n: "11", k: "Aberration types", c: "Targeted for loss reduction." },
        ],
        nextTo: "/work/heritage-mapping",
        nextSectorLabel: "Public sector",
        nextTitle: "Plan cultural sites on the evidence",
      }}
    />
  ),
});
