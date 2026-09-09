import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  A,
  DEFAULT_STATE,
  EXP,
  FIELDS,
  LOAD,
  OVERLAP,
  ROLES,
  START,
  TERM,
  addOf,
  allowed,
  computeDerived,
  expAdd,
  normalise,
  pctBase,
  plus,
  priced,
  usd,
  type CalculatorState,
  type Field,
} from "../../lib/calculator/model";
import { TimeChart } from "./time-chart";
import { CostChart } from "./cost-chart";

function Icon({ id, className = "i" }: { id: string; className?: string }) {
  return (
    <svg className={className}>
      <use href={`#${id}`} />
    </svg>
  );
}

function BigPrice({ value }: { value: number }) {
  return (
    <>
      <small>$</small>
      {Math.round(value).toLocaleString("en-US")}
    </>
  );
}

export function Calculator() {
  const [state, setState] = useState<CalculatorState>(DEFAULT_STATE);
  const [openId, setOpenId] = useState<Field["id"] | null>(null);
  const tilesRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(3);

  useEffect(() => {
    function measure() {
      if (!tilesRef.current) return;
      const gt = getComputedStyle(tilesRef.current).gridTemplateColumns || "";
      const n = gt.split(" ").filter(Boolean).length;
      setCols(Math.max(1, n));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    function onKey(ev: KeyboardEvent) {
      if (ev.key === "Escape" && openId) setOpenId(null);
    }
    function onClick() {
      if (openId) setOpenId(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [openId]);

  function selectRole(k: CalculatorState["role"]) {
    setState((s) => normalise({ ...s, role: k }));
    setOpenId(null);
  }

  function selectOption(fieldId: Field["id"], v: string) {
    setState((s) => normalise({ ...s, [fieldId]: v } as CalculatorState));
    setOpenId(null);
  }

  const r = ROLES[state.role];
  const ex = EXP[state.exp];
  const load = LOAD[state.load];
  const ov = OVERLAP[state.overlap];
  const term = TERM[state.term];
  const start = START[state.start];
  const { rate } = priced(state);
  const d = computeDerived(state);

  const row = (icon: string, name: string, val: string, pc: string, cls?: string) => (
    <div className={"lrow" + (cls || "")} key={name}>
      <span className="n">
        <Icon id={icon} />
        <em>{name}</em>
      </span>
      <span className="dots" />
      <span className="amt">{val}</span>
      <span className="pct">{pc}</span>
    </div>
  );

  return (
    <div className="calc calc-wrap" id="calc-wrap">
      <div className="config config-role">
        <h2>Select the role</h2>
        <p className="lead">The rate is calculated from this.</p>
        <div className="roles" role="radiogroup" aria-label="Job role">
          {(Object.keys(ROLES) as Array<CalculatorState["role"]>).map((k) => {
            const role = ROLES[k];
            return (
              <button
                key={k}
                className="role"
                type="button"
                role="radio"
                aria-checked={state.role === k}
                onClick={(ev) => {
                  ev.stopPropagation();
                  selectRole(k);
                }}
              >
                <span className="dot" />
                <span className="rt">
                  <b>{role.short}</b>
                  <span>
                    {usd(role.base)}/hr base &middot; {role.desc}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="config">
        <h2>Configure your engagement</h2>
        <p className="lead">Tap a card to change a variable. Figures update on selection.</p>
        <div className="tiles" ref={tilesRef}>
          {FIELDS.map((f, idx) => {
            const av = allowed(state, f);
            const currentValue = (state as unknown as Record<string, string>)[f.id];
            const o = av.find((opt) => opt.v === currentValue) || av[0];
            const note = "+" + usd(addOf(state, f.id, o.v)) + "/hr";
            const isOpen = openId === f.id;
            const lastCol = idx % cols === cols - 1;

            return (
              <div className="cell" key={f.id}>
                <button
                  className="tile"
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setOpenId((cur) => (cur === f.id ? null : f.id));
                  }}
                >
                  <span className="trow">
                    <span className="badge">
                      <Icon id={f.icon} />
                      {f.badge}
                    </span>
                    <Icon id="ic-chev" className="i chev" />
                  </span>
                  <span className="tfoot">
                    <span className="name">{o.label}</span>
                    <span className="extra">{note}</span>
                  </span>
                </button>
                {isOpen && (
                  <div className={"picker" + (lastCol ? " right" : "")} role="listbox">
                    <div className="head">{f.head}</div>
                    {av.map((opt) => {
                      const p = priced({ ...state, [f.id]: opt.v } as CalculatorState);
                      const sel = currentValue === opt.v;
                      const top = "+" + usd(addOf(state, f.id, opt.v)) + "/hr";
                      return (
                        <button
                          key={opt.v}
                          className="opt"
                          type="button"
                          role="option"
                          aria-selected={sel}
                          onClick={(ev) => {
                            ev.stopPropagation();
                            selectOption(f.id, opt.v);
                          }}
                        >
                          <span className="ic">
                            <Icon id={opt.icon} />
                          </span>
                          <span className="txt">
                            <b>{opt.label}</b>
                            <span>{opt.desc}</span>
                          </span>
                          <span className="amt">
                            <b>{top}</b>
                            <span>{usd(p.month)}/mo</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="included">
          <h3>Every engagement includes</h3>
          <div className="chips">
            <span className="chip"><Icon id="ic-check" />In-house specialists</span>
            <span className="chip"><Icon id="ic-lock" />NDA and IP assignment</span>
            <span className="chip"><Icon id="ic-shield" />Replacement cover</span>
            <span className="chip"><Icon id="ic-report" />Weekly delivery report</span>
            <span className="chip"><Icon id="ic-people" />Architect review</span>
            <span className="chip"><Icon id="ic-off" />No notice period</span>
          </div>
        </div>

        <div className="summary">
          <div className="price">
            <div className="p"><BigPrice value={rate} /></div>
            <div className="u">per hour</div>
            <div className="two">
              <div>
                <b><BigPrice value={d.month} /></b>
                <span>per month ({load.hpw * A.hrsPerMonthFactor} hrs)</span>
              </div>
              <div>
                <b><BigPrice value={d.year} /></b>
                <span>per year ({(load.hpw * A.weeks).toLocaleString("en-US")} hrs &middot; {A.weeks} weeks)</span>
              </div>
            </div>
          </div>
          <div className="rows">
            {row(r.icon, "Base rate, " + r.label, usd(r.base), "")}
            {row("ic-exp", "Experience, " + ex.label, plus(expAdd(state.role, state.exp)), pctBase(expAdd(state.role, state.exp), r.base))}
            {row("ic-load", "Time commitment, " + load.label, plus(load.add), pctBase(load.add, r.base))}
            {row("ic-venn", "Working hours overlap", plus(ov.add), pctBase(ov.add, r.base))}
            {row("ic-term", "Commitment, " + term.label, plus(term.add), pctBase(term.add, r.base))}
            {row("ic-start", "Start " + start.label, plus(start.add), pctBase(start.add, r.base))}
            {row("ic-money", "Your rate per hour", usd(rate), "", " tot")}
          </div>
        </div>
      </div>

      <div className="compare">
        <p className="compare-h">Compared with an in-house hire</p>
        <p className="compare-lead">{d.compareLead}</p>
        <div className="duo">
          <div className="dcard">
            <h3>Cost, first 12 months</h3>
            <div className="line"><span>In-house</span><b>{usd(d.inYear)}</b></div>
            <div className="line"><span>Sail Analytics</span><b>{usd(d.year)}</b></div>
            <div className="delta">
              {d.cheaper ? Math.round((d.saved / d.inYear) * 100) + "% lower" : Math.round((-d.saved / d.inYear) * 100) + "% higher"}
              <em>{d.cheaper ? usd(d.saved) + " difference in year one" : usd(-d.saved) + " above the in-house cost"}</em>
            </div>
          </div>
          <div className="chart chart-tight">
            <h3>Cumulative cost over three years</h3>
            <p>Cost accrues from the date of the proposal, before work starts.</p>
            <div><CostChart d={d.costChart} /></div>
            <div className="legend">
              <span className="c-sail"><i style={{ background: "#000000" }} />Sail Analytics</span>
              <span className="c-in"><i style={{ background: "#a7a9ac" }} />In-house hire</span>
            </div>
          </div>
        </div>

        <div className="chart">
          <h3>Time to productive work</h3>
          <p>Measured from the date of the proposal, not the date of signing. Includes notice period and ramp-up.</p>
          <p className="statline">
            <b>{d.faster > 0 ? Math.round((d.faster / d.inWks) * 100) + "% less time" : "0%"}</b>
            <span>
              {`${Math.round(d.sailWks)} weeks with Sail Analytics against ${Math.round(d.inWks)} weeks in-house. Difference of ${Math.round(
                Math.abs(d.faster),
              )} weeks to first output.`}
            </span>
          </p>
          <div><TimeChart d={d.timeChart} /></div>
          <div className="phases">
            <span className="c-sail">Sail Analytics: match a specialist &rarr; contract and access &rarr; ramp to productive</span>
            <span className="c-in">In-house: source and screen &rarr; interviews &rarr; notice period &rarr; ramp to productive</span>
          </div>
        </div>

        <div className="benefits">
          <h3>What the rate covers</h3>
          <dl>
            <div><dt><Icon id="ic-clock" />No recruiting cycle</dt><dd>No job posting, agency fee or interview loop. The work is done by in-house specialists who are already employed by Sail Analytics and work on data engineering, analytics and architecture.</dd></div>
            <div><dt><Icon id="ic-swap" />Hours instead of headcount</dt><dd>Take 10, 20 or 40 hours a week and change the number between terms. A hire cannot be sized in fractions.</dd></div>
            <div><dt><Icon id="ic-money" />No employment overhead</dt><dd>No payroll taxes, benefits, equity, laptops, tool seats, entity setup or severance. One invoice.</dd></div>
            <div><dt><Icon id="ic-shield" />Replacement cover</dt><dd>If a specialist leaves, we replace them and cover the handover. An in-house departure restarts the search and loses the context.</dd></div>
            <div><dt><Icon id="ic-people" />Seniority by task</dt><dd>An architect for design decisions, an engineer for the build. One hire carries one salary and one skill set.</dd></div>
            <div><dt><Icon id="ic-off" />Exit at end of term</dt><dd>Cost stops at the end of the term. No redundancy process and no idle capacity to fund between projects.</dd></div>
          </dl>
        </div>
      </div>

      <div className="offer">
        <span className="tag">New clients</span>
        <h3>Rates above are before discount.</h3>
        <p>Figures above are list rates. New clients receive a discount set against final terms: scope, length of commitment and number of specialists.</p>
        <div className="offer-cta">
          <Link to="/contact">Discuss an engagement</Link>
          <span>We send the rate in writing.</span>
        </div>
      </div>
      <p className="method">{d.methodNote}</p>
    </div>
  );
}
