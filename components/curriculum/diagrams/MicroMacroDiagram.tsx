// Microeconomics vs. Macroeconomics — side-by-side comparison diagram
// Dark-mode compatible via CSS custom properties and currentColor

export function MicroMacroDiagram() {
  return (
    <figure className="my-2 select-none">
      <svg
        viewBox="0 0 380 260"
        className="w-full max-w-lg mx-auto block"
        aria-label="Microeconomics versus Macroeconomics comparison diagram"
        role="img"
      >
        {/* ── Title ── */}
        <text x="190" y="18" fontSize="11" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit" fontWeight="600" letterSpacing="0.5">
          TWO LENSES OF ECONOMICS
        </text>

        {/* ══ LEFT: Microeconomics ══ */}
        {/* Card background */}
        <rect x="12" y="28" width="168" height="220" rx="10" fill="#3b82f6" fillOpacity="0.06" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.3" />

        {/* Header bar */}
        <rect x="12" y="28" width="168" height="32" rx="10" fill="#3b82f6" fillOpacity="0.18" />
        <rect x="12" y="48" width="168" height="12" fill="#3b82f6" fillOpacity="0.18" />

        <text x="96" y="49" fontSize="12" fill="#3b82f6" textAnchor="middle" fontFamily="inherit" fontWeight="700">MICRO</text>
        <text x="96" y="60" fontSize="8.5" fill="#3b82f6" textAnchor="middle" fontFamily="inherit" opacity="0.85">economics</text>

        {/* Zoom-in icon */}
        <circle cx="96" cy="84" r="12" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
        <circle cx="96" cy="84" r="6" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.2" opacity="0.7" />
        <line x1="104" y1="92" x2="110" y2="98" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <text x="96" y="108" fontSize="8" fill="currentColor" opacity="0.45" textAnchor="middle" fontFamily="inherit">zoom in</text>

        {/* Focus label */}
        <text x="96" y="124" fontSize="9" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit" fontStyle="italic">Studies individual agents</text>

        {/* Examples */}
        {[
          { y: 143, text: "• Single consumer's choice" },
          { y: 158, text: '• One firm\'s pricing' },
          { y: 173, text: '• A single market' },
          { y: 188, text: '• Supply & demand curves' },
        ].map(({ y, text }) => (
          <text key={y} x="24" y={y} fontSize="8.5" fill="currentColor" opacity="0.65" fontFamily="inherit">{text}</text>
        ))}

        {/* Example question */}
        <rect x="20" y="198" width="152" height="42" rx="6" fill="#3b82f6" fillOpacity="0.08" />
        <text x="96" y="212" fontSize="7.5" fill="#3b82f6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontStyle="italic">"Why do airports charge</text>
        <text x="96" y="223" fontSize="7.5" fill="#3b82f6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontStyle="italic">more for coffee than</text>
        <text x="96" y="234" fontSize="7.5" fill="#3b82f6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontStyle="italic">the high street?"</text>

        {/* ══ RIGHT: Macroeconomics ══ */}
        <rect x="200" y="28" width="168" height="220" rx="10" fill="#8b5cf6" fillOpacity="0.06" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.3" />

        <rect x="200" y="28" width="168" height="32" rx="10" fill="#8b5cf6" fillOpacity="0.18" />
        <rect x="200" y="48" width="168" height="12" fill="#8b5cf6" fillOpacity="0.18" />

        <text x="284" y="49" fontSize="12" fill="#8b5cf6" textAnchor="middle" fontFamily="inherit" fontWeight="700">MACRO</text>
        <text x="284" y="60" fontSize="8.5" fill="#8b5cf6" textAnchor="middle" fontFamily="inherit" opacity="0.85">economics</text>

        {/* Zoom-out icon */}
        <circle cx="284" cy="84" r="14" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.4" />
        <circle cx="284" cy="84" r="9" fill="none" stroke="#8b5cf6" strokeWidth="1.2" opacity="0.5" />
        <circle cx="284" cy="84" r="4" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="1" opacity="0.7" />
        <text x="284" y="108" fontSize="8" fill="currentColor" opacity="0.45" textAnchor="middle" fontFamily="inherit">zoom out</text>

        <text x="284" y="124" fontSize="9" fill="currentColor" opacity="0.6" textAnchor="middle" fontFamily="inherit" fontStyle="italic">Studies the whole economy</text>

        {[
          { y: 143, text: '• GDP & national output' },
          { y: 158, text: '• Inflation & price levels' },
          { y: 173, text: '• Unemployment rates' },
          { y: 188, text: '• Central bank policy' },
        ].map(({ y, text }) => (
          <text key={y} x="212" y={y} fontSize="8.5" fill="currentColor" opacity="0.65" fontFamily="inherit">{text}</text>
        ))}

        <rect x="208" y="198" width="152" height="42" rx="6" fill="#8b5cf6" fillOpacity="0.08" />
        <text x="284" y="212" fontSize="7.5" fill="#8b5cf6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontStyle="italic">"Why did the UK economy</text>
        <text x="284" y="223" fontSize="7.5" fill="#8b5cf6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontStyle="italic">grow faster than France's</text>
        <text x="284" y="234" fontSize="7.5" fill="#8b5cf6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontStyle="italic">last year?"</text>

        {/* ══ VS divider ══ */}
        <text x="190" y="143" fontSize="13" fill="currentColor" opacity="0.2" textAnchor="middle" fontFamily="inherit" fontWeight="700">vs</text>
      </svg>
      <figcaption className="text-center text-[11px] text-[var(--muted-fg)] mt-1">
        Same logic, different scale — both branches share the same core principles
      </figcaption>
    </figure>
  )
}
