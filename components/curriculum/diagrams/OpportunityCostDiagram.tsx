// Opportunity Cost — fork-in-the-road decision diagram
// Dark-mode compatible via CSS custom properties and currentColor

export function OpportunityCostDiagram() {
  return (
    <figure className="my-2 select-none">
      <svg
        viewBox="0 0 380 270"
        className="w-full max-w-lg mx-auto block"
        aria-label="Opportunity cost decision diagram"
        role="img"
      >
        <defs>
          <marker id="oc-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="currentColor" opacity="0.4" />
          </marker>
          <marker id="oc-arrow-chosen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
          </marker>
          <marker id="oc-arrow-forgone" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#ef4444" opacity="0.7" />
          </marker>
        </defs>

        {/* ── Title ── */}
        <text x="190" y="16" fontSize="11" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit" fontWeight="600" letterSpacing="0.5">
          OPPORTUNITY COST IN ACTION
        </text>

        {/* ── Decision node ── */}
        <circle cx="190" cy="60" r="22" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
        <text x="190" y="57" fontSize="9" fill="currentColor" opacity="0.7" textAnchor="middle" fontFamily="inherit" fontWeight="600">YOU HAVE</text>
        <text x="190" y="69" fontSize="9" fill="currentColor" opacity="0.7" textAnchor="middle" fontFamily="inherit" fontWeight="600">4 HOURS</text>

        {/* ── Left branch: chosen option ── */}
        <line x1="170" y1="76" x2="88" y2="118" stroke="#22c55e" strokeWidth="2" markerEnd="url(#oc-arrow-chosen)" />
        <text x="118" y="105" fontSize="8.5" fill="#22c55e" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontWeight="600" transform="rotate(-25 118 105)">CHOOSE</text>

        {/* Chosen box */}
        <rect x="18" y="120" width="140" height="58" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="88" y="141" fontSize="10" fill="#22c55e" textAnchor="middle" fontFamily="inherit" fontWeight="700">Study for exam</text>
        <text x="88" y="156" fontSize="8.5" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit">4 hours of revision</text>
        <text x="88" y="170" fontSize="8.5" fill="#22c55e" opacity="0.8" textAnchor="middle" fontFamily="inherit">→ Expected grade: A</text>

        {/* Chosen outcome arrow */}
        <line x1="88" y1="178" x2="88" y2="208" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#oc-arrow-chosen)" />
        <rect x="18" y="210" width="140" height="36" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3" />
        <text x="88" y="226" fontSize="9" fill="#22c55e" opacity="0.9" textAnchor="middle" fontFamily="inherit" fontWeight="600">BENEFIT GAINED</text>
        <text x="88" y="239" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Higher grade achieved</text>

        {/* ── Right branch: forgone option ── */}
        <line x1="210" y1="76" x2="292" y2="118" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#oc-arrow-forgone)" opacity="0.7" />
        <text x="262" y="105" fontSize="8.5" fill="#ef4444" opacity="0.7" textAnchor="middle" fontFamily="inherit" fontWeight="600" transform="rotate(25 262 105)">GIVE UP</text>

        {/* Forgone box */}
        <rect x="222" y="120" width="140" height="58" rx="8" fill="#ef4444" fillOpacity="0.06" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="5 3" strokeOpacity="0.5" />
        <text x="292" y="141" fontSize="10" fill="#ef4444" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontWeight="700">Work part-time shift</text>
        <text x="292" y="156" fontSize="8.5" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit">4 hours at $20/hr</text>
        <text x="292" y="170" fontSize="8.5" fill="#ef4444" opacity="0.7" textAnchor="middle" fontFamily="inherit">→ $80 in wages</text>

        {/* Forgone outcome */}
        <line x1="292" y1="178" x2="292" y2="208" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" markerEnd="url(#oc-arrow-forgone)" />
        <rect x="222" y="210" width="140" height="36" rx="8" fill="#ef4444" fillOpacity="0.06" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.35" />
        <text x="292" y="226" fontSize="9" fill="#ef4444" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontWeight="600">OPPORTUNITY COST</text>
        <text x="292" y="239" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">$80 of wages foregone</text>

        {/* ── Key insight banner ── */}
        <rect x="60" y="254" width="260" height="14" rx="4" fill="currentColor" fillOpacity="0.04" />
        <text x="190" y="264" fontSize="8" fill="currentColor" opacity="0.45" textAnchor="middle" fontFamily="inherit">
          Opportunity cost = value of the next-best alternative not chosen
        </text>
      </svg>
      <figcaption className="text-center text-[11px] text-[var(--muted-fg)] mt-1">
        Every choice has a hidden price — the best option you didn't take
      </figcaption>
    </figure>
  )
}
