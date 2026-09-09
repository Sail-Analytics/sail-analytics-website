import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "../components/case-study-page";

export const Route = createFileRoute("/work_/demand-forecasting")({
  head: () => ({
    meta: [
      { title: "Manufacturing · Forecast demand instead of reacting to it | Sail Analytics" },
      {
        name: "description",
        content:
          "We benchmarked forecasting approaches and deployed DeepAR+ for an engine and power-solutions manufacturer, cutting inventory holding costs by 17%.",
      },
    ],
  }),
  component: () => (
    <CaseStudyPage
      data={{
        route: "/work/demand-forecasting",
        sector: "Manufacturing",
        h1: "Forecast demand instead of reacting to it.",
        lede: "We benchmarked forecasting approaches and deployed DeepAR+ for an engine and power-solutions manufacturer, cutting inventory holding costs by 17%.",
        metae: {
          sector: "Manufacturing",
          howWeWorked: "Project delivery",
          stack: "Cloud data lake, serverless ETL, cloud warehouse, DeepAR+, BI semantic layer",
          headline: "17% lower inventory holding cost",
        },
        problem:
          "A leading manufacturer of engines and power solutions needed better demand forecasting to get ahead of inventory. Demand swings, long material lead times and competitive pressure meant both stockouts and excess inventory were eating into margins and customer satisfaction. The existing process couldn't reliably capture seasonality or cross-product-line demand relationships, so planning and procurement were reacting to demand rather than anticipating it.",
        whatWeBuilt:
          "We benchmarked multiple forecasting approaches — ARIMA, LSTM neural networks and other machine-learning methods — on MAPE%, RMSE and MAD. DeepAR+ was selected for its ability to learn seasonal patterns and related time series across product lines at once. Source ERP data lands in a cloud data lake, is transformed through a serverless ETL layer and loaded into a warehouse for modelling; the model runs on a managed ML platform, and monthly forecasts flow into a BI semantic layer for planning and procurement.",
        impact: [
          <><strong>17% reduction</strong> in inventory holding costs.</>,
          <><strong>Monthly forecasts</strong> feeding directly into production planning and procurement.</>,
          <>Planned enhancement: real-time marketing inputs and customer-forecasted sales to sharpen accuracy further.</>,
        ],
        figs: [
          { n: <>&minus;17<small>%</small></>, k: "Inventory holding cost", c: "Reduction from forecasting." },
          { n: "Monthly", k: "Forecast cadence", c: "Into planning and procurement." },
        ],
        nextTo: "/work/retail-manufacturing",
        nextSectorLabel: "Retail",
        nextTitle: "Serve executives and the front line from one source",
      }}
    />
  ),
});
