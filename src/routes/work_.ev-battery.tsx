import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/ev-battery")({
  head: () => ({
    meta: [
      { title: "Mobility · Predict battery failure before it happens | Sail Analytics" },
      {
        name: "description",
        content:
          "We turned battery telemetry into a predictive system that identifies failure risk early, at over 98% classifier accuracy on a heavily imbalanced dataset.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/ev-battery",
        sector: "Mobility",
        h1: "Predict battery failure before it happens.",
        lede: "We turned battery telemetry into a predictive system that identifies failure risk early, at over 98% classifier accuracy on a heavily imbalanced dataset.",
        metae: {
          sector: "Mobility",
          howWeWorked: "Project delivery",
          stack: "IoT telemetry, Python, SMOTE",
          headline: "98%+ classifier accuracy",
        },
        problem:
          "A battery-as-a-service operator, supplying and maintaining battery packs across an EV fleet, wanted to predict battery failure in advance rather than react to it. IoT devices in each battery continuously capture vitals against threshold limits, but turning that raw stream into an early-warning system meant finding which patterns actually precede a failure — hard, because genuine failure events are rare compared with normal operation.",
        whatWeBuilt:
          "In preprocessing we identified the derived metrics that describe degradation (recharge cycles, threshold breaches, intervals between breaches and breach duration) and labelled every row as Healthy, Warning or Breached to train a classifier for real-time data. Because Warning and Breached samples were far rarer than Healthy ones, we corrected the imbalance with Synthetic Minority Oversampling (SMOTE). Visualising breach patterns also showed malfunctions cluster in a specific voltage range, confirming that Warning has a measurable, predictive relationship with Breached.",
        impact: [
          <><strong>Over 98% accuracy</strong>, read alongside the other measures because accuracy alone flatters an imbalanced set.</>,
          <><strong>Precision, recall and F1 between 0.78 and 0.82</strong> — strong given the class imbalance.</>,
          <>A validated, data-driven basis for predicting breaches before they occur.</>,
        ],
        figs: [
          { n: <>98<small>%+</small></>, k: "Classifier accuracy", c: "On a heavily imbalanced set." },
          { n: <>0.78<small>&ndash;0.82</small></>, k: "Precision, recall, F1", c: "Across all three measures." },
        ],
        nextTo: "/work/ev-cab-scheduling",
        nextSectorLabel: "Mobility",
        nextTitle: "Schedule an electric cab fleet automatically",
      }}
    />
  ),
});
