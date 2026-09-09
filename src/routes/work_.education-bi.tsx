import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/education-bi")({
  head: () => ({
    meta: [
      { title: "Education · One view of learning and money | Sail Analytics" },
      {
        name: "description",
        content:
          "We combined school transactional systems, manual reporting and finance data into one warehouse for a VC-funded education company, behind a private Tableau dashboard.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/education-bi",
        sector: "Education",
        h1: "One view of learning and money.",
        lede: "We combined school transactional systems, manual reporting and finance data into one warehouse for a VC-funded education company, behind a private Tableau dashboard.",
        metae: {
          sector: "Education",
          howWeWorked: "Project delivery",
          stack: "School ERP, finance ERP, cloud warehouse, Tableau",
          headline: "Learning and financial views, unified",
        },
        problem:
          "A venture-backed educational-products company whose data — spanning school transactional systems, manual reporting and finance/accounting — was scattered, unorganised and largely manual. With data from school ERP systems, unorganised manual reporting and a separate finance ERP, there was no consolidated foundation from which to understand student outcomes or financial performance; every question required a fresh manual pull from disconnected sources.",
        whatWeBuilt:
          "We combined all three sources into a single data warehouse, with analysis for different organisational levels shaped through structured KPI consulting. On top we delivered a combination of descriptive and predictive analytics to give a clearer understanding of both student learning outcomes and financial performance, visualised through a private, browser-based Tableau monitoring dashboard.",
        impact: [
          <>A single, structured BI foundation <strong>replacing scattered, manual processes</strong>.</>,
          <>Combined visibility into <strong>student learning outcomes and financial performance</strong>.</>,
          <>A private, accessible <strong>monitoring dashboard</strong> supporting faster decisions.</>,
        ],
        noHeadlineNote: "This engagement is measured by the capability delivered rather than a single headline percentage.",
        nextTo: "/work/erp-global-manufacturing",
        nextSectorLabel: "Manufacturing",
        nextTitle: "Give a global group one view of itself",
      }}
    />
  ),
});
