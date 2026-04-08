// Marginal Benefit / Marginal Cost — inline SVG diagram

export function MBMCDiagram() {
  // Lines cross at (175, 140) in SVG space
  // MB: (50, 50) → (305, 230)   downward sloping
  // MC: (50, 230) → (305, 50)   upward sloping

  return (
    <figure className="my-2 select-none">
      <svg
        viewBox="0 0 360 290"
        className="w-full max-w-md mx-auto block"
        aria-label="Marginal Benefit equals Marginal Cost diagram"
        role="img"
      >
        <defs>
          <marker id="arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 7 2.5, 0 5" fill="currentColor" opacity="0.5" />
          </marker>
          {/* Shading for net gain (left of intersection) */}
          <clipPath id="gain-clip">
            <polygon points="50,230 175,140 50,50" />
          </clipPath>
          {/* Shading for net loss (right of intersection) */}
          <clipPath id="loss-clip">
            <polygon points="175,140 305,50 305,230" />
          </clipPath>
        </defs>

        {/* ── Shaded regions ── */}
        {/* Net gain: MB > MC (left of intersection) — triangle above MC, below MB */}
        <polygon
          points="50,50 175,140 50,230"
          fill="#22c55e"
          opacity="0.08"
        />
        {/* Net loss: MC > MB (right of intersection) — triangle above MB, below MC */}
        <polygon
          points="175,140 305,50 305,230"
          fill="#ef4444"
          opacity="0.07"
        />

        {/* ── Grid lines ── */}
        {[80, 120, 160, 200].map((v) => (
          <line key={v} x1="50" y1={v} x2="310" y2={v} stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
        ))}

        {/* ── Axes ── */}
        <line x1="50" y1="255" x2="318" y2="255" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" markerEnd="url(#arr)" />
        <line x1="50" y1="255" x2="50" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" markerEnd="url(#arr)" />

        {/* Axis labels */}
        <text x="318" y="268" fontSize="10" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Quantity</text>
        <text x="14" y="138" fontSize="10" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit" transform="rotate(-90 14 138)">£ per unit</text>

        {/* ── MB line (downward) ── */}
        <line x1="50" y1="50" x2="305" y2="230" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <text x="56" y="46" fontSize="11" fill="#22c55e" fontWeight="700" fontFamily="inherit">MB</text>
        <text x="56" y="57" fontSize="8" fill="#22c55e" opacity="0.7" fontFamily="inherit">(Marginal Benefit)</text>

        {/* ── MC line (upward) ── */}
        <line x1="50" y1="230" x2="305" y2="50" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <text x="58" y="238" fontSize="11" fill="#f59e0b" fontWeight="700" fontFamily="inherit">MC</text>
        <text x="58" y="248" fontSize="8" fill="#f59e0b" opacity="0.7" fontFamily="inherit">(Marginal Cost)</text>

        {/* ── Intersection point ── */}
        <circle cx="175" cy="140" r="6" fill="white" stroke="#22c55e" strokeWidth="2" />
        <line x1="175" y1="140" x2="175" y2="255" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <text x="175" y="268" fontSize="9" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit">Q*</text>

        {/* MB = MC label */}
        <rect x="182" y="126" width="72" height="16" rx="3" fill="var(--card-bg, #1a1a1a)" opacity="0.9" />
        <text x="218" y="138" fontSize="9.5" fill="#22c55e" fontWeight="700" textAnchor="middle" fontFamily="inherit">MB = MC ← Optimal</text>

        {/* Region labels */}
        <text x="95" y="142" fontSize="8.5" fill="#22c55e" opacity="0.8" textAnchor="middle" fontFamily="inherit">Net gain</text>
        <text x="95" y="152" fontSize="7.5" fill="#22c55e" opacity="0.6" textAnchor="middle" fontFamily="inherit">(keep going)</text>

        <text x="252" y="142" fontSize="8.5" fill="#ef4444" opacity="0.8" textAnchor="middle" fontFamily="inherit">Net loss</text>
        <text x="252" y="152" fontSize="7.5" fill="#ef4444" opacity="0.6" textAnchor="middle" fontFamily="inherit">(stop here)</text>

        {/* Caption bar */}
        <rect x="52" y="270" width="256" height="13" rx="3" fill="currentColor" opacity="0.04" />
        <text x="180" y="280" fontSize="8" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">
          Rational agents act while MB ≥ MC, and stop at Q* where MB = MC
        </text>
      </svg>
      <figcaption className="text-center text-[11px] text-[var(--muted-fg)] mt-1">
        The optimal quantity is always where MB meets MC — not where totals are maximised
      </figcaption>
    </figure>
  )
}
