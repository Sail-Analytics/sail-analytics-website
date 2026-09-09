// Exact port of the original drawTime() SVG generator.
const SAIL = "#000000";
const INH = "#a7a9ac";
const GRID = "#e4e4e6";
const AXIS = "#8b8d90";

interface Segment {
  label: string;
  value: number;
}

interface TimeChartData {
  srcWks: number;
  loop: number;
  notice: number;
  ramp: number;
  inWks: number;
  sailWks: number;
  sailMatch: number;
  sailContract: number;
  sailRamp: number;
}

export function TimeChart({ d }: { d: TimeChartData }) {
  const W = 700, H = 196, L = 8, R = 96, T = 34, B = 26;
  const pw = W - L - R;
  const maxW = Math.max(d.inWks, d.sailWks, 8) * 1.06;
  const x = (w: number) => L + (pw * w) / maxW;
  const tick = maxW > 28 ? 8 : 4;

  const gridLines: { x: number; label: string }[] = [];
  for (let w = 0; w <= maxW; w += tick) {
    gridLines.push({ x: x(w), label: String(w) });
  }

  function bar(yy: number, name: string, color: string, segs: Segment[]) {
    let cur = 0;
    const total = segs.reduce((a, s) => a + s.value, 0);
    const rects = segs.map((s, i) => {
      const wd = x(cur + s.value) - x(cur);
      const last = i === segs.length - 1;
      const rectX = x(cur);
      const showLabel = wd > s.label.length * 6.4 + 20;
      const el = (
        <g key={s.label}>
          <rect
            x={rectX}
            y={yy}
            width={Math.max(wd, 1)}
            height={32}
            rx={3}
            fill={color}
            fillOpacity={last ? 1 : 0.18 + i * 0.08}
            stroke="#fff"
            strokeWidth={1.5}
          />
          {showLabel && (
            <text x={rectX + 10} y={yy + 21} fontSize={11.5} fontWeight={500} fill={last ? "#fff" : color}>
              {s.label}
            </text>
          )}
        </g>
      );
      cur += s.value;
      return el;
    });
    return (
      <g key={name}>
        <text x={L} y={yy - 9} fontSize={12.5} fontWeight={600} fill={color}>
          {name}
        </text>
        {rects}
        <text x={W - R + 16} y={yy + 22} fontSize={14} fontWeight={700} fill={color}>
          {Math.round(total)} weeks
        </text>
      </g>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Weeks until productive work, Sail Analytics versus an in-house hire"
    >
      {gridLines.map((g) => (
        <g key={g.x}>
          <line x1={g.x} x2={g.x} y1={T - 8} y2={H - B} stroke={GRID} strokeWidth={1} />
          <text x={g.x} y={T - 16} textAnchor="middle" fontSize={11.5} fill={AXIS}>
            {g.label}
          </text>
        </g>
      ))}
      {bar(T + 8, "Sail Analytics", SAIL, [
        { label: "Match a specialist", value: d.sailMatch },
        { label: "Contract and access", value: d.sailContract },
        { label: "Ramp to productive", value: d.sailRamp },
      ])}
      {bar(T + 90, "In-house hire", INH, [
        { label: "Source and screen", value: d.srcWks },
        { label: "Interviews", value: d.loop },
        { label: "Notice period", value: d.notice },
        { label: "Ramp to productive", value: d.ramp },
      ])}
      <text x={W - R} y={H - 4} textAnchor="end" fontSize={11.5} fill={AXIS}>
        weeks from the proposal
      </text>
    </svg>
  );
}
