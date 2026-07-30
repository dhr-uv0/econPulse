'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'

/* ── Consumer & Producer Surplus ─────────────────────────────────────────── */
// widget key: 'consumer-producer-surplus'
export function ConsumerProducerSurplus() {
  const [demandShift, setDemandShift] = useState(0)   // -2 to +2
  const [supplyShift, setSupplyShift] = useState(0)   // -2 to +2

  const D_INTERCEPT = 12 + demandShift * 1.2
  const S_INTERCEPT = 2 + supplyShift * 1.2
  const D_SLOPE = -0.8
  const S_SLOPE = 0.6

  const eqQ = (D_INTERCEPT - S_INTERCEPT) / (S_SLOPE - D_SLOPE)
  const eqP = D_INTERCEPT + D_SLOPE * eqQ

  const consumerSurplus = 0.5 * (D_INTERCEPT - eqP) * eqQ
  const producerSurplus = 0.5 * (eqP - S_INTERCEPT) * eqQ
  const totalWelfare = consumerSurplus + producerSurplus

  const data = Array.from({ length: 12 }, (_, i) => {
    const q = i
    return {
      q,
      demand: Math.max(0, D_INTERCEPT + D_SLOPE * q),
      supply: Math.max(0, S_INTERCEPT + S_SLOPE * q),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Consumer &amp; Producer Surplus</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The competitive equilibrium maximises total welfare. Shift demand and supply to see how consumer surplus, producer surplus, and total welfare change.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q"
              label={{ value: 'Quantity', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Price ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              domain={[0, 16]}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `Qty: ${v}`}
            />
            <ReferenceLine
              x={+eqQ.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `Q* = ${eqQ.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }}
            />
            <ReferenceLine
              y={+eqP.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `P* = $${eqP.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }}
            />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">${consumerSurplus.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Consumer surplus</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-lg font-black text-green-500">${producerSurplus.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Producer surplus</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">${totalWelfare.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Total welfare</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">
              Demand Shift: {demandShift > 0 ? '+' : ''}{demandShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Shift demand curve"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">
              Supply Shift: {supplyShift > 0 ? '+' : ''}{supplyShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Shift supply curve"
            />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          At the competitive equilibrium, total welfare (CS+PS) is maximised — this is the efficiency argument for free, undistorted markets. Any quantity above or below Q* would reduce total surplus.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── YED / XED Classifier ────────────────────────────────────────────────── */
// widget key: 'yed-xed-classifier'
export function YEDXEDClassifier() {
  const [pctIncome, setPctIncome] = useState(10)     // -20 to 20
  const [pctQdYed, setPctQdYed] = useState(5)        // -30 to 30

  const [pctPriceB, setPctPriceB] = useState(10)     // -20 to 20
  const [pctQdXed, setPctQdXed] = useState(5)        // -30 to 30

  const yed = pctIncome !== 0 ? pctQdYed / pctIncome : 0
  const xed = pctPriceB !== 0 ? pctQdXed / pctPriceB : 0

  const yedClass = yed < 0 ? 'Inferior good' : yed > 1 ? 'Normal good, luxury' : 'Normal good, necessity'
  const yedColor = yed < 0 ? 'text-red-500' : yed > 1 ? 'text-blue-500' : 'text-green-500'
  const yedExample = yed < 0
    ? 'e.g. instant noodles — demand falls as incomes rise and consumers switch to better alternatives'
    : yed > 1
    ? 'e.g. designer handbags — demand rises more than proportionally with income'
    : 'e.g. basic groceries — demand rises with income but less than proportionally'

  const xedClass = Math.abs(xed) < 0.1 ? 'Unrelated goods' : xed > 0 ? 'Substitutes' : 'Complements'
  const xedColor = Math.abs(xed) < 0.1 ? 'text-[var(--muted-fg)]' : xed > 0 ? 'text-amber-500' : 'text-purple-500'
  const xedExample = Math.abs(xed) < 0.1
    ? 'e.g. bread and umbrellas — a price change in one has no meaningful effect on demand for the other'
    : xed > 0
    ? 'e.g. Coke and Pepsi — a price rise in one raises demand for the other'
    : 'e.g. printers and ink cartridges — a price fall in one raises demand for the other'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Income &amp; Cross-Price Elasticity of Demand</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Use the sliders to classify goods by how demand responds to income (YED) and to the price of a related good (XED).
          </p>
        </div>

        {/* YED section */}
        <div className="space-y-4 rounded-xl border border-[var(--border)] p-4">
          <h4 className="text-sm font-bold text-[var(--fg)]">Income Elasticity of Demand (YED)</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">% change in income: {pctIncome > 0 ? '+' : ''}{pctIncome}%</label>
              <input
                type="range" min={-20} max={20} step={1} value={pctIncome}
                onChange={(e) => setPctIncome(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label="Percent change in income"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">% change in Qd: {pctQdYed > 0 ? '+' : ''}{pctQdYed}%</label>
              <input
                type="range" min={-30} max={30} step={1} value={pctQdYed}
                onChange={(e) => setPctQdYed(Number(e.target.value))}
                className="w-full accent-green-500"
                aria-label="Percent change in quantity demanded for YED"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
              <div className={cn('text-xl font-black', yedColor)}>{yed.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">YED</div>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-3">
              <div className={cn('text-sm font-black', yedColor)}>{yedClass}</div>
              <div className="text-xs text-[var(--muted-fg)] mt-1">{yedExample}</div>
            </div>
          </div>
        </div>

        {/* XED section */}
        <div className="space-y-4 rounded-xl border border-[var(--border)] p-4">
          <h4 className="text-sm font-bold text-[var(--fg)]">Cross-Price Elasticity of Demand (XED)</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">% change in price of Good B: {pctPriceB > 0 ? '+' : ''}{pctPriceB}%</label>
              <input
                type="range" min={-20} max={20} step={1} value={pctPriceB}
                onChange={(e) => setPctPriceB(Number(e.target.value))}
                className="w-full accent-amber-500"
                aria-label="Percent change in price of Good B"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">% change in Qd of Good A: {pctQdXed > 0 ? '+' : ''}{pctQdXed}%</label>
              <input
                type="range" min={-30} max={30} step={1} value={pctQdXed}
                onChange={(e) => setPctQdXed(Number(e.target.value))}
                className="w-full accent-purple-500"
                aria-label="Percent change in quantity demanded of Good A for XED"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
              <div className={cn('text-xl font-black', xedColor)}>{xed.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">XED</div>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-3">
              <div className={cn('text-sm font-black', xedColor)}>{xedClass}</div>
              <div className="text-xs text-[var(--muted-fg)] mt-1">{xedExample}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Price Elasticity of Supply Calculator ───────────────────────────────── */
// widget key: 'pes-calculator'
export function PESCalculator() {
  const [p1, setP1] = useState(5)
  const [p2, setP2] = useState(10)
  const [q1, setQ1] = useState(50)
  const [q2, setQ2] = useState(100)

  const pctQ = ((q2 - q1) / ((q1 + q2) / 2)) * 100
  const pctP = ((p2 - p1) / ((p1 + p2) / 2)) * 100
  const pes = pctP !== 0 ? pctQ / pctP : 0
  const pesAbs = Math.abs(pes)

  const classify = pesAbs > 1.02 ? 'Elastic supply' : pesAbs < 0.98 ? 'Inelastic supply' : 'Unit elastic supply'
  const classColor = pesAbs > 1.02 ? 'text-blue-500' : pesAbs < 0.98 ? 'text-red-500' : 'text-green-500'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Price Elasticity of Supply Calculator</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            PES = (% change in Qs) ÷ (% change in P), calculated with the midpoint method. Adjust price and quantity to see elasticity change.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Original Price (P₁): ${p1}</label>
              <input type="range" min={1} max={20} value={p1} onChange={(e) => setP1(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Original price" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">New Price (P₂): ${p2}</label>
              <input type="range" min={1} max={30} value={p2} onChange={(e) => setP2(Number(e.target.value))} className="w-full accent-blue-500" aria-label="New price" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Original Qty Supplied (Q₁): {q1}</label>
              <input type="range" min={10} max={200} value={q1} onChange={(e) => setQ1(Number(e.target.value))} className="w-full accent-green-500" aria-label="Original quantity supplied" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">New Qty Supplied (Q₂): {q2}</label>
              <input type="range" min={10} max={200} value={q2} onChange={(e) => setQ2(Number(e.target.value))} className="w-full accent-green-500" aria-label="New quantity supplied" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-sm font-semibold text-[var(--muted-fg)]">% ΔQs</div>
            <div className="text-xl font-black text-green-500">{pctQ.toFixed(1)}%</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-sm font-semibold text-[var(--muted-fg)]">% ΔP</div>
            <div className="text-xl font-black text-blue-500">{pctP.toFixed(1)}%</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-sm font-semibold text-[var(--muted-fg)]">PES</div>
            <div className={cn('text-xl font-black', classColor)}>{pes.toFixed(2)}</div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          pesAbs > 1.02 ? 'border-blue-500/30 bg-blue-500/10' : pesAbs < 0.98 ? 'border-red-500/30 bg-red-500/10' : 'border-green-500/30 bg-green-500/10'
        )}>
          <div className={cn('text-2xl font-black', classColor)}>{classify}</div>
          <p className="text-sm text-[var(--muted-fg)] mt-1">
            What drives elastic vs. inelastic supply: spare capacity, the time horizon under consideration, and how easy it is to store or transport the output.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-sm text-[var(--fg)]">
          A straight-line supply curve through the origin has PES=1 at every single point along it, regardless of its slope — try setting P₁=$5, Q₁=50 and P₂=$10, Q₂=100 to see this.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Marshall-Lerner Condition &amp; J-Curve ──────────────────────────────────── */
// widget key: 'marshall-lerner-jcurve'
export function MarshallLernerJCurve() {
  const [pedx, setPedx] = useState(0.6)
  const [pedm, setPedm] = useState(0.6)

  const sum = pedx + pedm
  const satisfied = sum > 1

  const dipDepth = 12
  const longRunGain = satisfied ? 8 + (sum - 1) * 6 : -6 * (1 - sum)
  const jCurveData = Array.from({ length: 9 }, (_, t) => {
    const value = 100 - dipDepth * Math.exp(-t / 2) + longRunGain * (1 - Math.exp(-t / 3))
    return { t, balance: +value.toFixed(1) }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Marshall-Lerner Condition &amp; the J-Curve</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A currency depreciation improves the current account only if the sum of export and import demand elasticities exceeds 1. Even then, the improvement typically arrives only after an initial dip — the J-curve.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">PEDx (elasticity of demand for exports): {pedx.toFixed(1)}</label>
            <input
              type="range" min={0.2} max={2.0} step={0.1} value={pedx}
              onChange={(e) => setPedx(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Elasticity of demand for exports"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">PEDm (elasticity of demand for imports): {pedm.toFixed(1)}</label>
            <input
              type="range" min={0.2} max={2.0} step={0.1} value={pedm}
              onChange={(e) => setPedm(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Elasticity of demand for imports"
            />
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          satisfied ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
        )}>
          <div className={cn('text-lg font-black', satisfied ? 'text-green-500' : 'text-red-500')}>
            PEDx + PEDm = {sum.toFixed(2)}
          </div>
          <div className="text-sm text-[var(--muted-fg)] mt-1">
            {satisfied
              ? 'Condition satisfied — depreciation should improve the current account'
              : 'Condition NOT satisfied — depreciation may worsen the current account'}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={jCurveData} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="t"
              label={{ value: 'Time (periods after depreciation)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Current Account Balance', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine y={100} stroke="var(--border)" strokeDasharray="4 4" label={{ value: 'Pre-depreciation level', fill: 'var(--muted-fg)', fontSize: 10 }} />
            <Line type="monotone" dataKey="balance" stroke={satisfied ? '#22c55e' : '#ef4444'} strokeWidth={2.5} dot={false} name="Current account balance" />
          </LineChart>
        </ResponsiveContainer>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Import and export CONTRACTS take time to adjust — in the short run, quantities are relatively fixed (inelastic), so the immediate effect of a weaker currency is just paying more for imports. Only once trade volumes adjust (elasticities become &quot;un-inelastic&quot; over time) does the Marshall-Lerner condition&apos;s prediction play out.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Terms of Trade Index ────────────────────────────────────────────────── */
// widget key: 'terms-of-trade-index'
export function TermsOfTradeIndex() {
  const [exportIndexY2, setExportIndexY2] = useState(110)
  const [importIndexY2, setImportIndexY2] = useState(90)

  const totY1 = 100
  const totY2 = (exportIndexY2 / importIndexY2) * 100
  const improved = totY2 > 100.01
  const worsened = totY2 < 99.99

  const fallingImportPricesWithImprovement = improved && importIndexY2 < 100

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Terms of Trade Index</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The Terms of Trade index measures the ratio of a country&apos;s export prices to import prices. Year 1 is fixed at 100 for both indices; adjust Year 2.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Export price index (Year 2): {exportIndexY2}</label>
            <input
              type="range" min={70} max={150} step={1} value={exportIndexY2}
              onChange={(e) => setExportIndexY2(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Export price index for Year 2"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">Import price index (Year 2): {importIndexY2}</label>
            <input
              type="range" min={70} max={150} step={1} value={importIndexY2}
              onChange={(e) => setImportIndexY2(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Import price index for Year 2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{totY1.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">ToT index — Year 1</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{totY2.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">ToT index — Year 2</div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          improved ? 'border-green-500/30 bg-green-500/10' : worsened ? 'border-red-500/30 bg-red-500/10' : 'border-[var(--border)]'
        )}>
          <div className={cn('text-lg font-black', improved ? 'text-green-500' : worsened ? 'text-red-500' : 'text-[var(--fg)]')}>
            {improved ? 'Terms of trade improved' : worsened ? 'Terms of trade worsened' : 'Terms of trade unchanged'}
          </div>
          <div className="text-xs text-[var(--muted-fg)] mt-1">
            {improved ? 'Can buy more imports per unit of exports' : worsened ? 'Can buy fewer imports per unit of exports' : 'No change in trading position'}
          </div>
        </div>

        <div className={cn(
          'rounded-lg p-3 text-sm',
          fallingImportPricesWithImprovement ? 'border-2 border-amber-500/40 bg-amber-500/10 text-[var(--fg)] font-medium' : 'bg-[var(--muted)] text-[var(--muted-fg)]'
        )}>
          An improving ToT is not always &quot;good news&quot; — if it&apos;s driven by FALLING import prices (e.g. due to a global recession reducing commodity prices), it may simply reflect weak global demand rather than a genuine gain in a country&apos;s trading position. Always check WHY the ratio moved, not just its direction.
          {fallingImportPricesWithImprovement && ' In this exact scenario, the improvement is being driven by falling import prices — worth questioning whether it reflects strength or weak global demand.'}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Development Indicators ──────────────────────────────────────────────── */
// widget key: 'development-indicators'
function normaliseLog(value: number, min: number, max: number) {
  const logV = Math.log(value)
  const logMin = Math.log(min)
  const logMax = Math.log(max)
  return Math.min(1, Math.max(0, (logV - logMin) / (logMax - logMin)))
}

function normaliseLinear(value: number, min: number, max: number) {
  return Math.min(1, Math.max(0, (value - min) / (max - min)))
}

function developmentIndex(gdpPerCapita: number, lifeExpectancy: number, schooling: number) {
  const gdpNorm = normaliseLog(gdpPerCapita, 500, 50000)
  const lifeNorm = normaliseLinear(lifeExpectancy, 45, 85)
  const schoolNorm = normaliseLinear(schooling, 2, 15)
  return (gdpNorm + lifeNorm + schoolNorm) / 3
}

export function DevelopmentIndicators() {
  const [gdpA, setGdpA] = useState(38000)
  const [lifeA, setLifeA] = useState(58)
  const [schoolA, setSchoolA] = useState(5)

  const [gdpB, setGdpB] = useState(9000)
  const [lifeB, setLifeB] = useState(78)
  const [schoolB, setSchoolB] = useState(12)

  const indexA = developmentIndex(gdpA, lifeA, schoolA)
  const indexB = developmentIndex(gdpB, lifeB, schoolB)

  const gdpRankReversed = (gdpA > gdpB) !== (indexA > indexB)

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Economic Development vs. Growth</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            GDP per capita measures income, but a broader composite development index also weighs health and education. Adjust each country&apos;s indicators to see how the two rankings can diverge.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Country A */}
          <div className="space-y-4 rounded-xl border border-blue-500/30 p-4">
            <h4 className="text-sm font-bold text-blue-500">Country A</h4>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">GDP per capita: ${gdpA.toLocaleString()}</label>
              <input
                type="range" min={500} max={50000} step={500} value={gdpA}
                onChange={(e) => setGdpA(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label="Country A GDP per capita"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Life expectancy: {lifeA} years</label>
              <input
                type="range" min={45} max={85} step={1} value={lifeA}
                onChange={(e) => setLifeA(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label="Country A life expectancy"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Mean years of schooling: {schoolA}</label>
              <input
                type="range" min={2} max={15} step={0.5} value={schoolA}
                onChange={(e) => setSchoolA(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label="Country A mean years of schooling"
              />
            </div>
            <div className="rounded-lg bg-blue-500/10 p-3 text-center">
              <div className="text-lg font-black text-blue-500">{indexA.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Composite development index</div>
            </div>
          </div>

          {/* Country B */}
          <div className="space-y-4 rounded-xl border border-green-500/30 p-4">
            <h4 className="text-sm font-bold text-green-500">Country B</h4>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">GDP per capita: ${gdpB.toLocaleString()}</label>
              <input
                type="range" min={500} max={50000} step={500} value={gdpB}
                onChange={(e) => setGdpB(Number(e.target.value))}
                className="w-full accent-green-500"
                aria-label="Country B GDP per capita"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Life expectancy: {lifeB} years</label>
              <input
                type="range" min={45} max={85} step={1} value={lifeB}
                onChange={(e) => setLifeB(Number(e.target.value))}
                className="w-full accent-green-500"
                aria-label="Country B life expectancy"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Mean years of schooling: {schoolB}</label>
              <input
                type="range" min={2} max={15} step={0.5} value={schoolB}
                onChange={(e) => setSchoolB(Number(e.target.value))}
                className="w-full accent-green-500"
                aria-label="Country B mean years of schooling"
              />
            </div>
            <div className="rounded-lg bg-green-500/10 p-3 text-center">
              <div className="text-lg font-black text-green-500">{indexB.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Composite development index</div>
            </div>
          </div>
        </div>

        {/* Ranking comparison */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-[var(--muted-fg)] text-xs">
                <th className="p-2">Ranking</th>
                <th className="p-2">By GDP per capita</th>
                <th className="p-2">By development index</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--border)]">
                <td className="p-2 font-semibold text-[var(--fg)]">1st</td>
                <td className={cn('p-2 font-bold', gdpA >= gdpB ? 'text-blue-500' : 'text-green-500')}>
                  {gdpA >= gdpB ? 'Country A' : 'Country B'}
                </td>
                <td className={cn('p-2 font-bold', indexA >= indexB ? 'text-blue-500' : 'text-green-500')}>
                  {indexA >= indexB ? 'Country A' : 'Country B'}
                </td>
              </tr>
              <tr className="border-t border-[var(--border)]">
                <td className="p-2 font-semibold text-[var(--fg)]">2nd</td>
                <td className={cn('p-2 font-bold', gdpA >= gdpB ? 'text-green-500' : 'text-blue-500')}>
                  {gdpA >= gdpB ? 'Country B' : 'Country A'}
                </td>
                <td className={cn('p-2 font-bold', indexA >= indexB ? 'text-green-500' : 'text-blue-500')}>
                  {indexA >= indexB ? 'Country B' : 'Country A'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {gdpRankReversed && (
          <div className="rounded-xl border-2 border-amber-500/40 bg-amber-500/10 p-3 text-center text-sm font-semibold text-amber-500">
            The rankings diverge — the country ranked higher by GDP per capita is NOT the country ranked higher on the composite development index.
          </div>
        )}

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Two countries can have very different GDP per capita rankings from their broader development rankings — GDP captures income, not health, education, or how evenly income is distributed. This is exactly why growth (rising GDP) and development (broader wellbeing) are distinct concepts.
        </div>
      </CardContent>
    </Card>
  )
}
