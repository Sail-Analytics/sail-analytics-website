// Exact port of the engagement calculator's pricing model from the original
// site (inline <script> in sail-analytics-website-feedback-updated.html).
// Numbers and formulas are final -- do not change them without sign-off.

export type RoleKey = "ae" | "ba" | "arch";
export type LoadKey = "full" | "half" | "frac";
export type ExpKey = "e1" | "e2" | "e3";
export type OverlapKey = "none" | "four" | "full";
export type TermKey = "t1" | "t2" | "t3";
export type StartKey = "now" | "m1" | "m3";

export interface CalculatorState {
  role: RoleKey;
  load: LoadKey;
  exp: ExpKey;
  overlap: OverlapKey;
  term: TermKey;
  start: StartKey;
}

export const DEFAULT_STATE: CalculatorState = {
  role: "ae",
  load: "full",
  exp: "e2",
  overlap: "four",
  term: "t2",
  start: "m1",
};

export const ROLES: Record<
  RoleKey,
  {
    label: string;
    short: string;
    desc: string;
    icon: string;
    base: number;
    expAdd: Partial<Record<ExpKey, number>>;
    us: Partial<Record<ExpKey, number>>;
    scarcity: number;
    only?: ExpKey[];
  }
> = {
  ae: {
    label: "Analytics Engineer",
    short: "Data / Analytics Engineer",
    desc: "Pipelines, dbt models, warehouse build",
    icon: "ic-role",
    base: 40,
    expAdd: { e1: 0, e2: 10, e3: 20 },
    us: { e1: 108, e2: 148, e3: 175 },
    scarcity: 1.15,
  },
  ba: {
    label: "Data Analyst",
    short: "Data / Business Analyst",
    desc: "SQL, dashboards, stakeholder reporting",
    icon: "ic-bars",
    base: 30,
    expAdd: { e1: 0, e2: 10, e3: 20 },
    us: { e1: 80, e2: 112, e3: 135 },
    scarcity: 0.85,
  },
  arch: {
    label: "Data Architect",
    short: "Data Architect",
    desc: "Target-state design, migration roadmaps",
    icon: "ic-blueprint",
    base: 60,
    expAdd: { e2: 15, e3: 30 },
    us: { e2: 185, e3: 215 },
    scarcity: 1.3,
    only: ["e2", "e3"],
  },
};

export const LOAD: Record<LoadKey, { hpw: number; add: number; tile: string; label: string }> = {
  full: { hpw: 40, add: 0, tile: "Full time", label: "full time" },
  half: { hpw: 20, add: 6, tile: "20 hrs a week", label: "20 hours a week" },
  frac: { hpw: 10, add: 10, tile: "10 hrs a week", label: "10 hours a week" },
};

export const OVERLAP: Record<OverlapKey, { add: number; tile: string }> = {
  none: { add: 0, tile: "Not required" },
  four: { add: 2, tile: "At least 4 hrs" },
  full: { add: 5, tile: "Entire day" },
};

export const TERM: Record<TermKey, { add: number; tile: string; label: string }> = {
  t1: { add: 6, tile: "0–3 months", label: "0 to 3 months" },
  t2: { add: 3, tile: "4–12 months", label: "4 to 12 months" },
  t3: { add: 0, tile: "1 year+", label: "a year or more" },
};

export const START: Record<StartKey, { add: number; tile: string; label: string }> = {
  now: { add: 3, tile: "Now", label: "now" },
  m1: { add: 1, tile: "In a month", label: "in a month" },
  m3: { add: 0, tile: "In 3 months", label: "in 3 months" },
};

export const EXP: Record<ExpKey, { ramp: number; mult: number; sailRamp: number; tile: string; label: string }> = {
  e1: { ramp: 5, mult: 0.9, sailRamp: 0.75, tile: "1–5 years", label: "1–5 years" },
  e2: { ramp: 8, mult: 1.15, sailRamp: 1.5, tile: "6–10 years", label: "6–10 years" },
  e3: { ramp: 10, mult: 1.35, sailRamp: 2, tile: "10+ years", label: "10+ years" },
};

export const A = {
  weeks: 50,
  hrsPerMonthFactor: 4,
  burden: 0.3,
  seat: 6300,
  agency: 0.2,
  loop: 3000,
  equip: 2400,
  interviewWks: 3,
  notice: 4,
  sourceWks: 6,
  sailMatch: 1.5,
  sailContract: 1,
};

export interface FieldOption {
  v: string;
  icon: string;
  label: string;
  desc: string;
}

export interface Field {
  id: "load" | "exp" | "overlap" | "term" | "start";
  badge: string;
  icon: string;
  head: string;
  opts: FieldOption[];
}

export const FIELDS: Field[] = [
  {
    id: "load",
    badge: "Time",
    icon: "ic-load",
    head: "Hours per week",
    opts: [
      { v: "full", icon: "ic-briefcase", label: "Full time", desc: "40 hours a week" },
      { v: "half", icon: "ic-halfpie", label: "Fractional", desc: "20 hours a week" },
      { v: "frac", icon: "ic-quarterpie", label: "Fractional", desc: "10 hours a week" },
    ],
  },
  {
    id: "exp",
    badge: "Experience",
    icon: "ic-exp",
    head: "Years of experience",
    opts: [
      { v: "e1", icon: "ic-seedling", label: "1–5 years", desc: "Works to a scope set by the team" },
      { v: "e2", icon: "ic-medal", label: "6–10 years", desc: "Sets the approach and reviews the work of others" },
      { v: "e3", icon: "ic-crown", label: "10+ years", desc: "Leads design and strategy decisions" },
    ],
  },
  {
    id: "overlap",
    badge: "Overlap",
    icon: "ic-overlap",
    head: "Working hours overlap",
    opts: [
      { v: "none", icon: "ic-mail", label: "Not required", desc: "Handover in writing, no shared hours" },
      { v: "four", icon: "ic-venn", label: "At least 4 hours", desc: "Standups and pairing inside the overlap" },
      { v: "full", icon: "ic-sun", label: "Entire day", desc: "Cover across your working day" },
    ],
  },
  {
    id: "term",
    badge: "Commitment",
    icon: "ic-term",
    head: "Length of commitment",
    opts: [
      { v: "t1", icon: "ic-cal-3", label: "0–3 months", desc: "Trial or a single scope of work" },
      { v: "t2", icon: "ic-cal-check", label: "4–12 months", desc: "Several scopes across a roadmap" },
      { v: "t3", icon: "ic-infinity", label: "1 year+", desc: "Rolling term at the base rate" },
    ],
  },
  {
    id: "start",
    badge: "Onboarding",
    icon: "ic-start",
    head: "Start date",
    opts: [
      { v: "now", icon: "ic-start", label: "Now", desc: "Assigned from current availability" },
      { v: "m1", icon: "ic-calclock", label: "In a month", desc: "Match inside four weeks" },
      { v: "m3", icon: "ic-roadmap", label: "In 3 months", desc: "Match scheduled in advance" },
    ],
  },
];

export function expAdd(role: RoleKey, exp: ExpKey): number {
  const t = ROLES[role].expAdd;
  const only = ROLES[role].only;
  return t[exp] !== undefined ? t[exp]! : t[only![0]]!;
}

export function priced(st: CalculatorState) {
  const r = ROLES[st.role];
  const load = LOAD[st.load];
  const rate = r.base + load.add + expAdd(st.role, st.exp) + OVERLAP[st.overlap].add + TERM[st.term].add + START[st.start].add;
  return { rate, month: rate * load.hpw * A.hrsPerMonthFactor, year: rate * load.hpw * A.weeks };
}

export function addOf(state: CalculatorState, fieldId: Field["id"], v: string): number {
  if (fieldId === "exp") return expAdd(state.role, v as ExpKey);
  const table = { load: LOAD, overlap: OVERLAP, term: TERM, start: START }[fieldId] as Record<string, { add: number }>;
  return table[v].add;
}

export function allowed(state: CalculatorState, f: Field): FieldOption[] {
  if (f.id === "exp" && ROLES[state.role].only) {
    const only = ROLES[state.role].only!;
    return f.opts.filter((o) => only.indexOf(o.v as ExpKey) >= 0);
  }
  return f.opts;
}

export function normalise(state: CalculatorState): CalculatorState {
  const only = ROLES[state.role].only;
  if (only && only.indexOf(state.exp) < 0) {
    return { ...state, exp: only[0] };
  }
  return state;
}

export interface Derived {
  rate: number;
  month: number;
  year: number;
  base: number;
  inYear: number;
  inWks: number;
  sailMatch: number;
  sailWks: number;
  saved: number;
  cheaper: boolean;
  faster: number;
  compareLead: string;
  timeChart: {
    srcWks: number;
    loop: number;
    notice: number;
    ramp: number;
    inWks: number;
    sailWks: number;
    sailMatch: number;
    sailContract: number;
    sailRamp: number;
  };
  costChart: { month: number; sailStart: number; base: number; hireWeek: number };
  methodNote: string;
}

export function computeDerived(state: CalculatorState): Derived {
  const r = ROLES[state.role];
  const e = state.exp;
  const ex = EXP[e];
  const load = LOAD[state.load];

  const { rate, month, year } = priced(state);
  const base = r.us[e]! * 1000;
  const inYear = base * (1 + A.burden) + A.seat + base * A.agency + A.loop + A.equip;
  const inWks = A.sourceWks * r.scarcity * ex.mult + A.interviewWks + A.notice + ex.ramp;
  const sailMatch = A.sailMatch * Math.min(r.scarcity, 1.2);
  const sailWks = sailMatch + A.sailContract + ex.sailRamp;
  const saved = inYear - year;
  const cheaper = saved > 0;
  const faster = inWks - sailWks;

  const article = /^[aeiou]/i.test(r.label) ? "An " : "A ";
  const compareLead =
    article +
    r.label.toLowerCase() +
    " with " +
    ex.label +
    " of experience on a US payroll costs " +
    usd(inYear) +
    " in the first 12 months, including benefits, recruiting and tooling.";

  const methodNote =
    "In-house figure: " +
    usd(base) +
    " US base salary plus " +
    Math.round(A.burden * 100) +
    "% payroll and benefits, tooling, recruiting fee, interview time and equipment. The in-house figure is full time, since a hire cannot be sized in fractions. Sail Analytics figures use " +
    load.hpw +
    " hours a week, " +
    A.hrsPerMonthFactor * load.hpw +
    " hours a month and " +
    A.weeks +
    " weeks a year, with no recruiting, notice period or severance. Both timelines start at the date of the proposal. The start date changes the rate, not the elapsed time. Figures are indicative estimates, not a quote.";

  return {
    rate,
    month,
    year,
    base,
    inYear,
    inWks,
    sailMatch,
    sailWks,
    saved,
    cheaper,
    faster,
    compareLead,
    timeChart: {
      srcWks: A.sourceWks * r.scarcity * ex.mult,
      loop: A.interviewWks,
      notice: A.notice,
      ramp: ex.ramp,
      inWks,
      sailWks,
      sailMatch,
      sailContract: A.sailContract,
      sailRamp: ex.sailRamp,
    },
    costChart: { month, sailStart: sailWks, base, hireWeek: inWks - ex.ramp },
    methodNote,
  };
}

export function usd(v: number): string {
  return "$" + Math.round(v).toLocaleString("en-US");
}

export function wks(v: number): string {
  return Math.round(v) + " weeks";
}

export function plus(v: number): string {
  return v === 0 ? "$0" : "+$" + Math.round(v);
}

export function pctBase(v: number, base: number): string {
  return v === 0 ? "0%" : "+" + Math.round((v / base) * 100) + "%";
}
