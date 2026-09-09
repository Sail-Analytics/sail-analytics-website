import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/ecommerce-reporting")({
  head: () => ({
    meta: [
      { title: "E-commerce · Replace the fulfilment spreadsheets | Sail Analytics" },
      {
        name: "description",
        content:
          "We built a multi-source AWS pipeline for a direct-to-consumer appliance brand, replacing manual spreadsheets with automated Flash and MIS reporting and a Power BI order-journey view.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/ecommerce-reporting",
        sector: "E-commerce",
        h1: "Replace the fulfilment spreadsheets.",
        lede: "We built a multi-source AWS pipeline for a direct-to-consumer appliance brand, replacing manual spreadsheets with automated Flash and MIS reporting and a Power BI order-journey view.",
        metae: {
          sector: "E-commerce",
          howWeWorked: "Project delivery",
          stack: "Shopify, ERP, AWS, Power BI",
          headline: "Automated reporting, spreadsheets retired",
        },
        problem:
          "A direct-to-consumer connected-appliance brand selling through Shopify needed a consolidated, automated view of sales, delivery, returns and fulfilment. Order, delivery, returns and fee data lived across Shopify, an ERP and other operational tools with no unified reporting layer. Reconciling them by hand was slow and error-prone, leaving the business without a single source of truth for fulfilment health, fee accuracy or revenue.",
        whatWeBuilt:
          "We built a multi-source pipeline on a cloud-native AWS architecture, integrating Shopify, the ERP and auxiliary systems and feeding automated reporting and a Power BI dashboard suite. Deliverables include an automated Flash Report distributed by scheduled email (sales, deliveries, returns, fees and fulfilment health), a monthly MIS report covering sales, fees, payouts and fulfilment end to end, and a Power BI Order Journey dashboard built on the full order-lifecycle dataset.",
        impact: [
          <>Consolidated, automated reporting <strong>replacing manual spreadsheets</strong>.</>,
          <><strong>End-to-end visibility</strong> into order lifecycle, fulfilment health and fee accuracy.</>,
          <>A scalable <strong>AWS pipeline</strong> supporting ongoing automated reporting.</>,
        ],
        noHeadlineNote: "The project record does not state a single headline percentage for this engagement.",
        nextTo: "/work/fmcg-field-sales",
        nextSectorLabel: "FMCG",
        nextTitle: "See sales and field effort in one place",
      }}
    />
  ),
});
