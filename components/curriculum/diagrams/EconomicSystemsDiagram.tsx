// Economic Systems Spectrum — command to free market continuum
// Dark-mode compatible via CSS custom properties and currentColor

export function EconomicSystemsDiagram() {
  return (
    <figure className="my-2 select-none">
      <svg
        viewBox="0 0 400 280"
        className="w-full max-w-lg mx-auto block"
        aria-label="Economic systems spectrum from command to free market"
        role="img"
      >
        {/* ── Title ── */}
        <text x="200" y="16" fontSize="11" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit" fontWeight="600" letterSpacing="0.5">
          THE ECONOMIC SYSTEMS SPECTRUM
        </text>

        {/* ── Gradient spectrum bar ── */}
        <defs>
          <linearGradient id="spectrumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <rect x="30" y="90" width="340" height="14" rx="7" fill="url(#spectrumGrad)" opacity="0.4" />

        {/* Spectrum arrow line */}
        <line x1="30" y1="97" x2="370" y2="97" stroke="currentColor" strokeWidth="1" opacity="0.15" />

        {/* ── THREE COLUMNS ── */}

        {/* COMMAND ECONOMY — left */}
        <rect x="14" y="28" width="114" height="52" rx="8" fill="#ef4444" fillOpacity="0.08" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.4" />
        <text x="71" y="47" fontSize="10" fill="#ef4444" textAnchor="middle" fontFamily="inherit" fontWeight="700">COMMAND</text>
        <text x="71" y="59" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Government controls</text>
        <text x="71" y="70" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">all production</text>

        {/* Command tick mark */}
        <line x1="71" y1="80" x2="71" y2="92" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
        <circle cx="71" cy="97" r="5" fill="#ef4444" fillOpacity="0.7" />

        {/* Command characteristics */}
        <text x="71" y="118" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Central planning</text>
        {[
          { y: 138, t: '• State owns resources' },
          { y: 153, t: '• Govt sets prices' },
          { y: 168, t: '• Allocates output' },
        ].map(({ y, t }) => (
          <text key={y} x="22" y={y} fontSize="8" fill="currentColor" opacity="0.5" fontFamily="inherit">{t}</text>
        ))}

        {/* Command examples */}
        <rect x="14" y="178" width="114" height="42" rx="6" fill="#ef4444" fillOpacity="0.06" />
        <text x="71" y="193" fontSize="8" fill="#ef4444" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontWeight="600">Real examples:</text>
        <text x="71" y="206" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">Soviet USSR (1920s–91)</text>
        <text x="71" y="217" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">North Korea (today)</text>

        {/* MIXED ECONOMY — centre */}
        <rect x="143" y="28" width="114" height="52" rx="8" fill="#8b5cf6" fillOpacity="0.08" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.4" />
        <text x="200" y="47" fontSize="10" fill="#8b5cf6" textAnchor="middle" fontFamily="inherit" fontWeight="700">MIXED</text>
        <text x="200" y="59" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Markets + government</text>
        <text x="200" y="70" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">work together</text>

        <line x1="200" y1="80" x2="200" y2="92" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="97" r="6" fill="#8b5cf6" fillOpacity="0.75" />

        <text x="200" y="118" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Blend of both systems</text>
        {[
          { y: 138, t: '• Private & public sectors' },
          { y: 153, t: '• Regulated markets' },
          { y: 168, t: '• Welfare state exists' },
        ].map(({ y, t }) => (
          <text key={y} x="150" y={y} fontSize="8" fill="currentColor" opacity="0.5" fontFamily="inherit">{t}</text>
        ))}

        <rect x="143" y="178" width="114" height="42" rx="6" fill="#8b5cf6" fillOpacity="0.06" />
        <text x="200" y="193" fontSize="8" fill="#8b5cf6" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontWeight="600">Real examples:</text>
        <text x="200" y="206" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">UK, USA, Germany</text>
        <text x="200" y="217" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">Most modern economies</text>

        {/* FREE MARKET — right */}
        <rect x="272" y="28" width="114" height="52" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.4" />
        <text x="329" y="47" fontSize="10" fill="#22c55e" textAnchor="middle" fontFamily="inherit" fontWeight="700">FREE MARKET</text>
        <text x="329" y="59" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Private actors decide</text>
        <text x="329" y="70" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">all production</text>

        <line x1="329" y1="80" x2="329" y2="92" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
        <circle cx="329" cy="97" r="5" fill="#22c55e" fillOpacity="0.7" />

        <text x="329" y="118" fontSize="8.5" fill="currentColor" opacity="0.55" textAnchor="middle" fontFamily="inherit">Price mechanism only</text>
        {[
          { y: 138, t: '• Private ownership' },
          { y: 153, t: '• Prices set by markets' },
          { y: 168, t: '• No govt intervention' },
        ].map(({ y, t }) => (
          <text key={y} x="280" y={y} fontSize="8" fill="currentColor" opacity="0.5" fontFamily="inherit">{t}</text>
        ))}

        <rect x="272" y="178" width="114" height="42" rx="6" fill="#22c55e" fillOpacity="0.06" />
        <text x="329" y="193" fontSize="8" fill="#22c55e" opacity="0.8" textAnchor="middle" fontFamily="inherit" fontWeight="600">Real examples:</text>
        <text x="329" y="206" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">Hong Kong (pre-2020)</text>
        <text x="329" y="217" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit">Theoretical ideal</text>

        {/* ── Bottom note ── */}
        <rect x="60" y="230" width="280" height="14" rx="4" fill="currentColor" fillOpacity="0.04" />
        <text x="200" y="240" fontSize="7.5" fill="currentColor" opacity="0.4" textAnchor="middle" fontFamily="inherit">
          No economy is purely command or purely free — all real economies are mixed
        </text>

        {/* ── Three questions answered row ── */}
        <rect x="14" y="248" width="372" height="26" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
        <text x="200" y="260" fontSize="8" fill="currentColor" opacity="0.5" textAnchor="middle" fontFamily="inherit" fontWeight="600">Every system answers the same 3 questions:</text>
        <text x="200" y="271" fontSize="8" fill="currentColor" opacity="0.4" textAnchor="middle" fontFamily="inherit">WHAT to produce?  ·  HOW to produce it?  ·  FOR WHOM?</text>
      </svg>
      <figcaption className="text-center text-[11px] text-[var(--muted-fg)] mt-1">
        The key difference is who answers the three central economic questions
      </figcaption>
    </figure>
  )
}
