import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Sail Analytics" },
      {
        name: "description",
        content: "Sail Analytics helps businesses make better decisions through data. Our mission, values and clients.",
      },
      { property: "og:title", content: "About | Sail Analytics" },
      {
        property: "og:description",
        content: "Sail Analytics helps businesses make better decisions through data. Our mission, values and clients.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

const TEAM = [
  {
    name: "Abdul Samad",
    role: "Frontend & web development",
    sk: "Frontend Development, Website Development, API Integration, UI Implementation, Visual Design, AI Automation, Workflow Optimization",
    cert: "Full Stack Web Development – IIT Roorkee",
  },
  {
    name: "Anosh Sood",
    role: "Data engineering",
    sk: "Data Engineering, Data Pipelines, AWS, Python, SQL, Data Modelling, AI & Agentic AI, Machine Learning",
    cert: "Microsoft Azure Data Fundamentals (DP-900)",
  },
  {
    name: "Meghana Badiger",
    role: "Data engineering",
    sk: "Azure Databricks, PySpark, Azure Data Factory, AWS Glue, Microsoft Fabric, Delta Lake, Data Modelling, SAP OData",
    cert: "Microsoft Azure Data Fundamentals (DP-900) · Microsoft Fabric Data Engineer Associate",
  },
  {
    name: "Mohd Owais Khan",
    role: "Data engineering & architecture",
    sk: "Data Engineering, AWS Glue, Amazon Redshift, Databricks, PySpark, Azure Data Factory, Data Architecture, ETL/ELT",
    cert: "AWS Solutions Architect – Associate",
  },
  {
    name: "Akhila N",
    role: "HR & operations",
    sk: "HR Operations, Employee Management, Accounts & Payments, Statutory Compliance, Documentation, Invoicing, Contract Management, Client & Vendor Coordination",
    cert: null,
  },
  {
    name: "Sayanta Singha Roy",
    role: "Business development",
    sk: "Business Development, Lead Generation, LinkedIn Sales Navigator, Apollo, Email Marketing, Client Engagement, LinkedIn Outreach, BI Support",
    cert: "AWS Certified Cloud Practitioner",
  },
  {
    name: "Aiswarya Suresh",
    role: "Applied AI & analytics",
    sk: "Data Engineering, Machine Learning, Applied AI, LLM Solutions, Power BI, Power Query, API Integration, Semantic Layer",
    cert: "Microsoft Azure Data Fundamentals (DP-900)",
  },
  {
    name: "Anis Kaarthi",
    role: "Data engineering",
    sk: "Azure Databricks, PySpark, Azure Data Factory, Apache Kafka, Apache Spark, Apache Iceberg, Data Engineering, Terraform",
    cert: "Databricks Data Engineer Associate · Databricks Data Engineer Professional",
  },
  {
    name: "Kanak Agarwal",
    role: "Data engineering",
    sk: "Data Engineering, SQL, Python, AWS, Oracle Database, Data Integration, Data Modelling, AI & Agentic AI",
    cert: "AWS Certified Cloud Practitioner · Oracle Agentic AI & AI Foundations",
  },
  {
    name: "Mohan Gowda",
    role: "Azure data engineering",
    sk: "Azure Data Engineering, Azure Data Services, SQL, Data Analytics, Data Modelling, Cloud Computing, Azure AI, Machine Learning",
    cert: "Microsoft Azure Data Fundamentals (DP-900) · Azure Fundamentals (AZ-900) · Azure AI Fundamentals (AI-901)",
  },
  {
    name: "Ajay Kumar",
    role: "Business intelligence",
    sk: "Power BI, DAX, Power Query, Data Modelling, SQL, Data Visualization, Business Intelligence, Dashboard Development",
    cert: null,
  },
  {
    name: "Jaysree K",
    role: "Azure data engineering",
    sk: "Azure Data Engineering, Azure Databricks, Azure Data Factory, PySpark, SQL, Data Modelling, Oracle Database, Data Integration",
    cert: null,
  },
] as const;

const CLIENT_LOGOS = [
  { key: "cocoblu", alt: "Cocoblu logo" },
  { key: "duroflex", alt: "Duroflex logo" },
  { key: "permaweld", alt: "Permaweld logo" },
  { key: "hippocampus", alt: "Hippocampus Learning Centres logo" },
  { key: "tarasafe", alt: "Tarasafe logo" },
  { key: "kci", alt: "KCI logo" },
  { key: "indiaeye", alt: "IndiaEye Graphics logo" },
  { key: "masoom", alt: "Masoom Group logo" },
] as const;

function About() {
  return (
    <SiteLayout>
      <section className="view" id="v-about" data-route="/about">
        <section className="section-sm">
          <div className="page">
            <p className="eyebrow">About</p>
            <h1>We help businesses make better decisions through data.</h1>
            <p className="lede">
              That&rsquo;s the whole mission, and it sets the test for the work. A dashboard nobody opens
              hasn&rsquo;t helped anyone decide anything. Delivery only counts once the thing is in use.
            </p>
          </div>
        </section>

        <section className="section-sm tint">
          <div className="page prose">
            <p className="eyebrow">Who we are</p>
            <h2>A specialist data and analytics firm.</h2>
            <p>
              Sail Analytics takes messy business data problems and turns them into working systems. We&rsquo;re
              hands-on and technically credible: the people who set the direction are the people who build the
              platforms, pipelines, dashboards and models on top of them.
            </p>
            <p>
              We&rsquo;re not a large consultancy describing what should be done, and we&rsquo;re not a source of
              interchangeable hands. Our specialists are employed by Sail Analytics, which is what lets us stand
              behind each engagement with continuity, an architect on call, and a start date drawn from current
              availability.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="page">
            <p className="eyebrow">Values</p>
            <h2>What we hold to.</h2>
            <div className="build-grid" style={{ borderTopColor: "var(--black)" }}>
              <div className="build">
                <p className="verb">Craft</p>
                <h3>Excellence in the work</h3>
                <p>A steadfast commitment to quality and value, built around zero compromise. We&rsquo;re specialists who genuinely like crunching data for a living.</p>
              </div>
              <div className="build">
                <p className="verb">Impact</p>
                <h3>Value delivered</h3>
                <p>Every engagement is measured by the impact it creates. Adding real value to clients is what gives us our edge, and we grow with the clients we serve.</p>
              </div>
              <div className="build">
                <p className="verb">Partnership</p>
                <h3>Clients come first</h3>
                <p>A customer-centric approach, with clear communication and consistent results. We treat your business as something worth getting right.</p>
              </div>
              <div className="build">
                <p className="verb">Honesty</p>
                <h3>Straight answers</h3>
                <p>We say where we fit and where we don&rsquo;t. If a problem isn&rsquo;t work we should take on, we&rsquo;ll tell you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page-wide">
            <p className="eyebrow">The team</p>
            <h2>The specialists behind the work.</h2>
            <p className="lede">
              The people who set the direction are the people who build the systems. Data engineers, BI and
              applied-AI specialists, and the operations and business team who keep engagements moving — all
              employed by Sail Analytics.
            </p>
            <div className="team">
              {TEAM.map((m) => (
                <div className="member" key={m.name}>
                  <h3>{m.name}</h3>
                  <p className="role">{m.role}</p>
                  <p className="sk">{m.sk}</p>
                  {m.cert && (
                    <p className="cert">
                      <b>Certifications</b>
                      {m.cert}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section tint">
          <div className="page">
            <p className="eyebrow">Trusted by</p>
            <h2>Businesses and brands we&rsquo;ve built for.</h2>
            <ul className="logos" aria-label="Client logos">
              {CLIENT_LOGOS.map((logo) => (
                <li key={logo.key}>
                  <img src={`/logos/${logo.key}.png`} alt={logo.alt} width={120} height={44} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section dark">
          <div className="page">
            <h2>Talk to the team.</h2>
            <p className="lede">Tell us what you&rsquo;re trying to build, and we&rsquo;ll tell you how we&rsquo;d approach it.</p>
            <div className="acts">
              <Link className="btn btn-signal" to="/contact">Start a conversation</Link>
              <Link className="btn btn-ghost" to="/work">Read the case studies</Link>
            </div>
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
