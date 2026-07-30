'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Automatic Stabilisers ───────────────────────────────────────────────── */
// widget key: 'automatic-stabilizers'
export function AutomaticStabilizers() {
  const [outputGap, setOutputGap] = useState(0) // -10 to +10 (%)

  const taxRevenue = 20 + 0.5 * outputGap
  const transfers = 5 - 0.3 * outputGap
  const netEffect = taxRevenue - transfers

  const data = Array.from({ length: 21 }, (_, i) => {
    const gap = i - 10
    return {
      gap,
      tax: +(20 + 0.5 * gap).toFixed(2),
      transfers: +(5 - 0.3 * gap).toFixed(2),
      taxBaseline: 20,
      transfersBaseline: 5,
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Automatic Stabilisers</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Move the output gap to see how tax revenue and transfer payments respond automatically over the business cycle, compared to a hypothetical world with no automatic stabilisers.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="gap"
              label={{ value: 'Output gap (%)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 30]}
              label={{ value: '% of GDP', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={outputGap} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: 'Current gap', fill: 'var(--accent)', fontSize: 10, position: 'top' }} />
            <Line type="monotone" dataKey="tax" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Tax revenue (% GDP)" />
            <Line type="monotone" dataKey="transfers" stroke="#ef4444" strokeWidth={2.5} dot={false} name="Transfers (% GDP)" />
            <Line type="monotone" dataKey="taxBaseline" stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Tax — no stabilisers" />
            <Line type="monotone" dataKey="transfersBaseline" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Transfers — no stabilisers" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">{taxRevenue.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Tax revenue (% GDP)</div>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
            <div className="text-lg font-black text-red-500">{transfers.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Transfers (% GDP)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{netEffect >= 0 ? '+' : ''}{netEffect.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Net automatic fiscal effect</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Output gap: {outputGap > 0 ? '+' : ''}{outputGap}% {outputGap > 0 ? '(boom)' : outputGap < 0 ? '(recession)' : '(at potential)'}
          </label>
          <input
            type="range" min={-10} max={10} step={1} value={outputGap}
            onChange={(e) => setOutputGap(Number(e.target.value))}
            className="w-full accent-[#e8c547]"
            aria-label="Adjust output gap"
          />
          <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
            <span>← Recession (below potential)</span>
            <span>Boom (above potential) →</span>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          These changes happen automatically through the existing tax and benefit system — no new legislation is needed. This is what distinguishes automatic stabilisers from discretionary fiscal policy (Lesson 1), which requires a deliberate government decision.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Government Debt and Deficits — Sustainability ───────────────────────── */
// widget key: 'debt-sustainability'
export function DebtSustainability() {
  const [d0, setD0] = useState(60)   // initial debt-to-GDP %
  const [g, setG] = useState(2)      // real GDP growth rate %
  const [r, setR] = useState(4)      // real interest rate %
  const [pb, setPb] = useState(0)    // primary balance % of GDP

  const d0f = d0 / 100
  const gf = g / 100
  const rf = r / 100
  const pbf = pb / 100

  const trajectory: number[] = [d0f]
  for (let t = 0; t < 20; t++) {
    const prev = trajectory[t]
    const next = (prev * (1 + rf)) / (1 + gf) - pbf
    trajectory.push(next)
  }

  const finalDebt = trajectory[20]
  const isSustainable = finalDebt <= d0f

  const data = trajectory.map((d, year) => ({
    year,
    debt: +Math.min(400, Math.max(0, d * 100)).toFixed(1),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Government Debt and Deficits — Sustainability</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Simulate the debt-to-GDP ratio over 20 years using the standard debt dynamics equation: d(t+1) = d(t) × (1+r)/(1+g) − primary balance.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="year"
              label={{ value: 'Year', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 400]}
              label={{ value: 'Debt-to-GDP (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine y={d0} stroke="var(--border)" strokeDasharray="4 4" label={{ value: `Start (${d0}%)`, fill: 'var(--muted-fg)', fontSize: 10 }} />
            <Line
              type="monotone" dataKey="debt"
              stroke={isSustainable ? '#22c55e' : '#ef4444'}
              strokeWidth={2.5} dot={false} name="Debt-to-GDP"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          isSustainable ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
        )}>
          <div className={cn('text-lg font-black', isSustainable ? 'text-green-500' : 'text-red-500')}>
            {isSustainable ? 'Debt-to-GDP is falling or stable — this path looks sustainable' : 'Debt-to-GDP is rising — this path may not be sustainable'}
          </div>
          <div className="text-xs text-[var(--muted-fg)] mt-1">
            Year 0: {(d0f * 100).toFixed(1)}% → Year 20: {(finalDebt * 100).toFixed(1)}%
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Initial debt-to-GDP (d₀): {d0}%</label>
            <input type="range" min={30} max={150} step={5} value={d0} onChange={(e) => setD0(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Initial debt-to-GDP ratio" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Real GDP growth (g): {g > 0 ? '+' : ''}{g}%</label>
            <input type="range" min={-2} max={6} step={0.5} value={g} onChange={(e) => setG(Number(e.target.value))} className="w-full accent-green-500" aria-label="Real GDP growth rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Real interest rate (r): {r}%</label>
            <input type="range" min={0} max={8} step={0.5} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full accent-red-500" aria-label="Real interest rate on debt" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Primary balance (pb): {pb > 0 ? '+' : ''}{pb}% {pb >= 0 ? '(surplus)' : '(deficit)'}</label>
            <input type="range" min={-5} max={5} step={0.5} value={pb} onChange={(e) => setPb(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Primary balance as percent of GDP" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          When the interest rate on debt (r) exceeds the growth rate of the economy (g), debt tends to grow on its own even with a balanced primary budget — the government must run a primary surplus just to keep the debt ratio stable. When g exceeds r, the economy can &ldquo;grow out of&rdquo; modest deficits.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Money Market — Central Banks, Interest Rates &amp; QE ─────────────────────── */
// widget key: 'money-market-diagram'
export function MoneyMarketDiagram() {
  const NEUTRAL_MS = 15
  const [moneySupply, setMoneySupply] = useState(NEUTRAL_MS)

  const iStar = 12 - 0.4 * moneySupply

  const data = Array.from({ length: 16 }, (_, i) => {
    const m = i * 2
    return { m, demand: Math.max(0, 12 - 0.4 * m) }
  })

  const direction = moneySupply > NEUTRAL_MS ? 'expansionary' : moneySupply < NEUTRAL_MS ? 'contractionary' : 'neutral'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Money Market — Central Banks and Interest Rates</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust the money supply set by the central bank through open-market operations (or QE) to see the effect on the equilibrium interest rate.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="m"
              label={{ value: 'Quantity of money (M)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 12]}
              label={{ value: 'Interest rate (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={moneySupply} stroke="#22c55e" strokeWidth={2.5} label={{ value: 'Money supply (Mₛ)', fill: '#22c55e', fontSize: 10, position: 'top' }} />
            <ReferenceLine y={+iStar.toFixed(1)} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: `i* = ${iStar.toFixed(1)}%`, fill: 'var(--accent)', fontSize: 11, position: 'right' }} />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Money demand" />
          </LineChart>
        </ResponsiveContainer>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-2xl font-black text-[var(--accent)]">{iStar.toFixed(1)}%</div>
          <div className="text-xs text-[var(--muted-fg)]">Equilibrium interest rate (i*)</div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Money supply (Mₛ): {moneySupply}
          </label>
          <input
            type="range" min={5} max={25} step={1} value={moneySupply}
            onChange={(e) => setMoneySupply(Number(e.target.value))}
            className="w-full accent-green-500"
            aria-label="Adjust money supply set by the central bank"
          />
          <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
            <span>← Contract money supply (QT / rate hike)</span>
            <span>Expand money supply (QE / rate cut) →</span>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          {direction === 'expansionary'
            ? 'Expansionary policy (e.g. QE / rate cut) — lower i* → cheaper borrowing → higher investment and consumption → AD shifts right.'
            : direction === 'contractionary'
            ? 'Contractionary policy (QT / rate hike) — higher i* → more expensive borrowing → lower investment and consumption → AD shifts left.'
            : 'Money supply at a neutral setting — no directional pressure on borrowing costs from this baseline.'}
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Conventional monetary policy adjusts the policy interest rate directly. Quantitative easing (QE) is an unconventional tool used when rates are already near zero — the central bank directly expands the money supply by purchasing large quantities of bonds, pushing this diagram&rsquo;s supply line further right than conventional policy normally would.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Fiscal vs. Monetary Policy — Tradeoffs and Coordination ─────────────── */
// widget key: 'policy-comparison'
type PolicyTool = 'fiscal' | 'monetary'
type Scenario = 'recession' | 'overheating'

interface PolicyInfo {
  action: string
  pros: string
  cons: string
}

const POLICY_MATRIX: Record<PolicyTool, Record<Scenario, PolicyInfo>> = {
  fiscal: {
    recession: {
      action: 'Expansionary fiscal policy — increase government spending or cut taxes.',
      pros: 'Directly boosts aggregate demand; effective even at the zero lower bound where monetary policy loses traction.',
      cons: 'Long implementation lag (requires legislation); may increase the budget deficit; risk of crowding out private investment if the economy is already near capacity.',
    },
    overheating: {
      action: 'Contractionary fiscal policy — cut government spending or raise taxes.',
      pros: 'Directly cools aggregate demand and inflationary pressure.',
      cons: 'Politically unpopular (visible spending cuts or tax rises); slow to implement; risk of being pro-cyclical if enacted too late, after the boom has already turned.',
    },
  },
  monetary: {
    recession: {
      action: 'Expansionary monetary policy — cut interest rates, or quantitative easing if rates are already near zero.',
      pros: 'Faster to implement than fiscal policy (central bank can act between scheduled meetings if needed); no legislative delay.',
      cons: 'Less effective near the zero lower bound; transmission to the real economy takes time (typically 6–18 months); less effective if banks are reluctant to lend or firms are reluctant to borrow.',
    },
    overheating: {
      action: 'Contractionary monetary policy — raise interest rates.',
      pros: 'Fast decision-making; directly targets inflation by raising the cost of borrowing.',
      cons: 'A blunt instrument — raises borrowing costs economy-wide, not just for overheating sectors; risk of overtightening into a recession; disproportionately hurts borrowers/debtors.',
    },
  },
}

export function PolicyComparison() {
  const [tool, setTool] = useState<PolicyTool>('fiscal')
  const [scenario, setScenario] = useState<Scenario>('recession')

  const current = POLICY_MATRIX[tool][scenario]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Fiscal vs. Monetary Policy — Tradeoffs and Coordination</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Choose a policy tool and an economic scenario to compare how each responds, and its pros and cons.
          </p>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Policy tool</div>
            <div className="flex gap-2 flex-wrap">
              {([['fiscal', 'Fiscal'], ['monetary', 'Monetary']] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTool(key)}
                  className={cn(
                    'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    tool === key ? 'text-white border-transparent bg-blue-500 border-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Scenario</div>
            <div className="flex gap-2 flex-wrap">
              {([['recession', 'Recession'], ['overheating', 'Overheating']] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setScenario(key)}
                  className={cn(
                    'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    scenario === key ? 'text-white border-transparent bg-amber-500 border-amber-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 space-y-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-1">Action</div>
            <p className="text-sm text-[var(--fg)]">{current.action}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-green-500 mb-1">Pros</div>
            <p className="text-sm text-[var(--fg)]">{current.pros}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">Cons</div>
            <p className="text-sm text-[var(--fg)]">{current.cons}</p>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          <span className="font-semibold text-[var(--fg)]">Coordination note: </span>
          In practice, fiscal and monetary authorities don&rsquo;t always move in the same direction at the same time — a central bank raising rates to fight inflation while the government simultaneously runs an expansionary fiscal deficit works against itself. Well-coordinated policy uses each tool where it has a comparative advantage: monetary policy for fast, broad demand management; fiscal policy for targeted, structural, or zero-lower-bound situations.
        </div>
      </CardContent>
    </Card>
  )
}
