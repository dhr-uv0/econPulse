// Production Possibilities Frontier — inline SVG diagram
// Dark-mode compatible via CSS custom properties

export function PPFDiagram() {
  return (
    <figure className="my-2 select-none">
      <svg
        viewBox="0 0 360 290"
        className="w-full max-w-md mx-auto block"
        aria-label="Production Possibilities Frontier diagram"
        role="img"
      >
        {/* ── Defs ── */}
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="currentColor" opacity="0.5" />
          </marker>
          <marker id="arrowhead-accent" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
          </marker>
        </defs>

        {/* ── Grid lines (subtle) ── */}
        {[60, 100, 140, 180, 220].map((v) => (
          <line key={`hg-${v}`} x1="50" y1={v} x2="310" y2={v} stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        ))}
        {[90, 130, 170, 210, 250].map((v) => (
          <line key={`vg-${v}`} x1={v} y1="25" x2={v} y2="255" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        ))}

        {/* ── Axes ── */}
        <line x1="50" y1="255" x2="315" y2="255" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" markerEnd="url(#arrowhead)" />
        <line x1="50" y1="255" x2="50" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" markerEnd="url(#arrowhead)" />

        {/* ── Axis labels ── */}
        <text x="315" y="268" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit">Consumer Goods</text>
        <text x="14" y="138" fontSize="10" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit" transform="rotate(-90 14 138)">Capital Goods</text>

        {/* ── Growth PPF (dashed, outer) ── */}
        <path
          d="M 50 20 C 195 20 310 155 310 255"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.45"
        />
        <text x="278" y="208" fontSize="9" fill="#22c55e" opacity="0.7" fontFamily="inherit" fontStyle="italic">after growth</text>

        {/* ── Main PPF curve ── */}
        <path
          d="M 50 40 C 185 40 295 168 295 255"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text x="176" y="38" fontSize="10" fill="#22c55e" fontWeight="bold" fontFamily="inherit" textAnchor="middle">PPF</text>

        {/* ── Growth arrow ── */}
        <line x1="218" y1="108" x2="244" y2="87" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arrowhead-accent)" opacity="0.8" />
        <text x="256" y="84" fontSize="9" fill="#22c55e" fontFamily="inherit" opacity="0.85">Growth</text>

        {/* ── Point A: ON the curve (efficient) ~t=0.45 ── */}
        {/* Cubic bezier at t≈0.45: x≈196, y≈113 */}
        <circle cx="196" cy="113" r="5" fill="#22c55e" />
        <text x="212" y="111" fontSize="10" fill="currentColor" fontFamily="inherit" fontWeight="600">A</text>
        <text x="212" y="123" fontSize="8.5" fill="currentColor" opacity="0.6" fontFamily="inherit">Efficient</text>

        {/* ── Point B: INSIDE the curve (inefficient) ── */}
        <circle cx="145" cy="165" r="5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <text x="128" y="163" fontSize="10" fill="currentColor" fontFamily="inherit" fontWeight="600" textAnchor="end">B</text>
        <text x="128" y="175" fontSize="8.5" fill="currentColor" opacity="0.55" fontFamily="inherit" textAnchor="end">Inefficient</text>

        {/* ── Point C: OUTSIDE the curve (unattainable) ── */}
        <circle cx="248" cy="78" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.55" />
        <text x="258" y="75" fontSize="10" fill="currentColor" fontFamily="inherit" fontWeight="600">C</text>
        <text x="258" y="87" fontSize="8.5" fill="currentColor" opacity="0.55" fontFamily="inherit">Unattainable</text>

        {/* ── Legend key ── */}
        <rect x="52" y="268" width="256" height="14" rx="3" fill="currentColor" opacity="0.04" />
        <circle cx="66" cy="275" r="3" fill="#22c55e" />
        <text x="73" y="278" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="inherit">on curve = efficient</text>
        <circle cx="148" cy="275" r="3" fill="currentColor" opacity="0.3" />
        <text x="155" y="278" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="inherit">inside = inefficient</text>
        <circle cx="232" cy="275" r="3" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" opacity="0.5" />
        <text x="239" y="278" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="inherit">outside = impossible</text>
      </svg>
      <figcaption className="text-center text-[11px] text-[var(--muted-fg)] mt-1">
        The PPF — every point tells a story about how an economy uses its resources
      </figcaption>
    </figure>
  )
}
