import { A } from "../../lib/calculator/model";

// Exact port of the original drawCost() SVG generator.
const SAIL = "#000000";
const INH = "#a7a9ac";
const GRID = "#e4e4e6";
const AXIS = "#8b8d90";

interface CostChartData {
  month: number;
  sailStart: number;
  base: number;
  hireWeek: number;
}

export function CostChart({ d }: { d: CostChartData }) {
  const W = 700, H = 310, L = 64, R = 14, T = 10, B = 42;
  const pw = W - L - R, ph = H - T - B, MO = 36;

  const sailAt = (m: number) => Math.max(0, m - d.sailStart / 4.33) * d.month;
  const hireMo = d.hireWeek / 4.33;
  const once = d.base * A.agency + A.loop + A.equip;
  const run = (d.base * (1 + A.burden) + A.seat) / 12;
  const inAt = (m: number) => (m < hireMo ? once * (m / Math.max(hireMo, 0.001)) * 0.35 : once + Math.max(0, m - hireMo) * run);

  const max = Math.max(inAt(MO), sailAt(MO)) * 1.06;
  const x = (m: number) => L + (pw * m) / MO;
  const y = (v: number) => T + ph - (ph * v) / max;

  const step0 = Math.pow(10, Math.floor(Math.log10(max / 4)));
  let tick = step0;
  for (const f of [1, 2, 2.5, 5, 10]) {
    if (step0 * f >= max / 6) {
      tick = step0 * f;
      break;
    }
  }

  const hLines: { y: number; label: string }[] = [];
  for (let v = 0; v <= max; v += tick) {
    hLines.push({ y: y(v), label: "$" + Math.round(v / 1000) + "k" });
  }
  const vLines: { x: number; label: string }[] = [];
  for (let m = 0; m <= MO; m += 6) {
    vLines.push({ x: x(m), label: String(m) });
  }

  function path(f: (m: number) => number) {
    let p = "";
    for (let m = 0; m <= MO; m += 0.5) {
      p += (m ? "L" : "M") + x(m).toFixed(1) + " " + y(f(m)).toFixed(1) + " ";
    }
    return p;
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cumulative cost over 36 months, Sail Analytics versus an in-house hire"
    >
      {hLines.map((g) => (
        <g key={g.y}>
          <line x1={L} x2={W - R} y1={g.y} y2={g.y} stroke={GRID} strokeWidth={1} />
          <text x={L - 10} y={g.y + 4} textAnchor="end" fontSize={11.5} fill={AXIS}>
            {g.label}
          </text>
        </g>
      ))}
      {vLines.map((g) => (
        <g key={g.x}>
          <line x1={g.x} x2={g.x} y1={T} y2={T + ph} stroke={GRID} strokeWidth={1} />
          <text x={g.x} y={T + ph + 22} textAnchor="middle" fontSize={11.5} fill={AXIS}>
            {g.label}
          </text>
        </g>
      ))}
      <path d={path(inAt)} fill="none" stroke={INH} strokeWidth={2.6} strokeLinejoin="round" />
      <path d={path(sailAt)} fill="none" stroke={SAIL} strokeWidth={2.6} strokeLinejoin="round" />
      <text x={W - R} y={H - 6} textAnchor="end" fontSize={11.5} fill={AXIS}>
        months from the proposal
      </text>
    </svg>
  );
}
