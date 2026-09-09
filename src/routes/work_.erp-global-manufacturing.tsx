import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/erp-global-manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing · Give a global group one view of itself | Sail Analytics" },
      {
        name: "description",
        content:
          "We built an ERP-agnostic Azure platform that unifies 25–30 operating companies under one executive reporting framework, processing around 100 million rows a day.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/erp-global-manufacturing",
        sector: "Manufacturing",
        h1: "Give a global group one view of itself.",
        lede: "We built an ERP-agnostic Azure platform that unifies 25–30 operating companies under one executive reporting framework, processing around 100 million rows a day.",
        metae: {
          sector: "Manufacturing",
          howWeWorked: "Project delivery",
          stack: "Azure Data Factory, Databricks, Azure Synapse, Power BI",
          headline: "25–30 operating companies unified",
        },
        problem:
          "A global manufacturing group runs 25 to 30 operating companies across EMEA, each on its own instance of enterprise systems with no shared reporting layer. Leadership had no single, consistent view of group performance: every company reported on its own schedule and in its own format, and onboarding a newly acquired or restructured entity meant repeating the same manual integration work each time.",
        whatWeBuilt:
          "We modernised and extended an Azure-based architecture into a scalable, ERP-agnostic platform. Azure Data Factory ingests data from each company's source systems, Databricks handles large-scale transformation and standardisation, Azure Synapse Analytics serves as the unified warehouse, and Power BI delivers the executive reporting layer. It was purpose-built to onboard new companies with minimal rework, whatever their underlying ERP.",
        impact: [
          <><strong>25–30 operating companies</strong> unified under a single executive reporting framework.</>,
          <><strong>~100 million rows</strong> processed daily across the group.</>,
          <><strong>New ERP instances onboarded in 2–6 weeks</strong>, down from a fully manual, bespoke integration effort.</>,
        ],
        figs: [
          { n: "25–30", k: "Operating companies", c: "Unified under one framework." },
          { n: "~100M", k: "Rows per day", c: "Processed across the group." },
          { n: <>2–6<small>wks</small></>, k: "ERP onboarding", c: "Down from bespoke integration." },
        ],
        nextTo: "/work/demand-forecasting",
        nextSectorLabel: "Manufacturing",
        nextTitle: "Forecast demand instead of reacting to it",
      }}
    />
  ),
});
