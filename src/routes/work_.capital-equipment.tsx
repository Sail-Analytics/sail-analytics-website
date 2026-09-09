import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/capital-equipment")({
  head: () => ({
    meta: [
      { title: "Capital equipment · Make the numbers trustworthy first | Sail Analytics" },
      {
        name: "description",
        content:
          "We delivered data management and governance for a leading capital-equipment manufacturer in three connected stages, establishing stewardship and audit alongside an active ERP rollout.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/capital-equipment",
        sector: "Capital equipment",
        h1: "Make the numbers trustworthy first.",
        lede: "We delivered data management and governance for a leading capital-equipment manufacturer in three connected stages, establishing stewardship and audit alongside an active ERP rollout.",
        metae: {
          sector: "Capital equipment",
          howWeWorked: "Project delivery",
          stack: "ERP, open-source data-sanitisation tools, Tableau",
          headline: "Data stewardship established",
        },
        problem:
          "A leading capital-equipment manufacturer needed to lay the data-management groundwork to support growth, an ongoing ERP implementation and process mapping across the business — along with the governance to sustain data quality at scale. Without established stewardship and quality processes, an ERP rollout risks inheriting the same fragmented, inconsistent data it is meant to replace, undermining the reporting and analytics that depend on it.",
        whatWeBuilt:
          "We delivered this in three connected stages. First, data sourcing and management: leading ERP implementation across Inventory and Purchase, mapping as-is capture processes and identifying gaps. Second, analytics: establishing proper storage and organisation across Inventory, Purchase and Manufacturing, sanitising data with open-source tools, and assigning departmental data stewards with ongoing audit processes. Third, visualisation: using Tableau to track ERP-adoption progress and flag data aberrations as they arise.",
        impact: [
          <>A structured, staged approach to <strong>data governance</strong> running alongside an active ERP rollout.</>,
          <>Departmental <strong>data stewardship and audit</strong> processes established for ongoing quality.</>,
          <>Tableau-based visibility into <strong>ERP adoption</strong> and early detection of data issues.</>,
        ],
        noHeadlineNote: "This engagement is measured by the governance capability established rather than a single headline percentage.",
        nextTo: "/work/education-bi",
        nextSectorLabel: "Education",
        nextTitle: "One view of learning and money",
      }}
    />
  ),
});
