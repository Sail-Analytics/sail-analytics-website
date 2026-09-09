import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/heritage-mapping")({
  head: () => ({
    meta: [
      { title: "Public sector · Plan cultural sites on the evidence | Sail Analytics" },
      {
        name: "description",
        content:
          "We built dynamic geographic visualisations for a government cultural body, correlating population, existing landmarks and proposed development to support evidence-based siting.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/heritage-mapping",
        sector: "Public sector",
        h1: "Plan cultural sites on the evidence.",
        lede: "We built dynamic geographic visualisations for a government cultural body, correlating population, existing landmarks and proposed development to support evidence-based siting.",
        metae: {
          sector: "Public sector",
          howWeWorked: "Project delivery",
          stack: "Geographic visualisation, population and landmark datasets",
          headline: "Evidence-based cultural site planning",
        },
        problem:
          "A regulatory body whose mission is to preserve and celebrate local heritage through museum exhibitions and related services. Planning future site developments required correlating factors that had never been brought together in one view — regional population data, the presence and density of existing historical landmarks, and where new development was being proposed — making evidence-based siting decisions difficult.",
        whatWeBuilt:
          "We implemented dynamic visualisations for internal and external stakeholders, mapping museums and landmarks geographically by size, topology and development status (established, planned or recommended), and correlating population data with the presence of other historical sites in the surrounding area.",
        impact: [
          <>Evidence-based cultural site planning <strong>replacing intuition-led</strong> decisions.</>,
          <>A consolidated geographic view spanning <strong>hundreds of mapped</strong> museums and landmarks across regions.</>,
          <>Shared visibility for both <strong>internal planning teams and external stakeholders</strong>.</>,
        ],
        noHeadlineNote: "This engagement is measured by the capability delivered rather than a single headline percentage.",
        nextTo: "/work/solar-bi",
        nextSectorLabel: "Energy",
        nextTitle: "See project delays before they cascade",
      }}
    />
  ),
});
