'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, ReferenceDot,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Solow Growth Model ──────────────────────────────────────────────────── */
// widget key: 'solow-growth-model'
export function SolowGrowthModel() {
  const [alpha, setAlpha] = useState(0.33) // capital's output share
  const [s, setS] = useState(0.2)          // savings rate
  const [delta, setDelta] = useState(0.06) // depreciation rate
  const [n, setN] = useState(0.01)         // population growth rate

  const effDep = delta + n

  // k* = (s / (delta+n)) ^ (1/(1-alpha))
  const kStar = Math.pow(s / effDep, 1 / (1 - alpha))
  const yStar = Math.pow(kStar, alpha)
  const cStar = (1 - s) * yStar

  const sGold = alpha
  const goldDiff = s - sGold
  const goldStatus = Math.abs(goldDiff) < 0.005 ? 'at' : goldDiff > 0 ? 'above' : 'below'

  const kMax = kStar * 2
  const data = Array.from({ length: 41 }, (_, i) => {
    const k = (kMax * i) / 40
    return {
      k: +k.toFixed(3),
      output: +Math.pow(k, alpha).toFixed(3),
      required: +(effDep * k).toFixed(3),
      actual: +(s * Math.pow(k, alpha)).toFixed(3),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Solow Growth Model</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Per-worker production y = k^alpha meets the required-investment line (delta+n)k. Where actual investment sk^alpha crosses it defines the steady state k*.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="k"
              type="number"
              domain={[0, +kMax.toFixed(2)]}
              label={{ value: 'Capital per worker (k)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Output / Investment per worker', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={+kStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: `k* = ${kStar.toFixed(2)}`, fill: 'var(--accent)', fontSize: 10, position: 'top' }} />
            <Line type="monotone" dataKey="output" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Output y = k^alpha" />
            <Line type="monotone" dataKey="required" stroke="#ef4444" strokeWidth={2.5} dot={false} name="Required investment (delta+n)k" />
            <Line type="monotone" dataKey="actual" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Actual investment sk^alpha" />
            <ReferenceDot x={+kStar.toFixed(2)} y={+yStar.toFixed(2)} r={5} fill="var(--accent)" stroke="var(--card-bg)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{kStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Steady-state k*</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">{yStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Steady-state y*</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{cStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Steady-state c*</div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          goldStatus === 'at' ? 'border-green-500/30 bg-green-500/10' :
          goldStatus === 'below' ? 'border-blue-500/30 bg-blue-500/10' :
          'border-red-500/30 bg-red-500/10'
        )}>
          <div className={cn(
            'text-sm font-black',
            goldStatus === 'at' ? 'text-green-500' : goldStatus === 'below' ? 'text-blue-500' : 'text-red-500'
          )}>
            Golden Rule savings rate s_gold = alpha = {sGold.toFixed(2)} — current s is {goldStatus} the golden rule
          </div>
          <div className="text-xs text-[var(--muted-fg)] mt-1">
            {goldStatus === 'below' && 'Below the golden rule: raising s raises BOTH k* and c* — dynamically efficient, more saving helps consumption in the long run.'}
            {goldStatus === 'above' && 'Above the golden rule: raising s further would actually REDUCE steady-state consumption — the economy is over-saving.'}
            {goldStatus === 'at' && 'At the golden rule: steady-state consumption per worker is at its maximum possible value.'}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Capital share (alpha): {alpha.toFixed(2)}</label>
            <input type="range" min={0.2} max={0.5} step={0.01} value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Capital's output share alpha" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Savings rate (s): {(s * 100).toFixed(0)}%</label>
            <input type="range" min={0.05} max={0.4} step={0.01} value={s} onChange={(e) => setS(Number(e.target.value))} className="w-full accent-green-500" aria-label="Savings rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Depreciation rate (delta): {(delta * 100).toFixed(0)}%</label>
            <input type="range" min={0.02} max={0.15} step={0.01} value={delta} onChange={(e) => setDelta(Number(e.target.value))} className="w-full accent-red-500" aria-label="Depreciation rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Population growth (n): {(n * 100).toFixed(0)}%</label>
            <input type="range" min={0} max={0.03} step={0.005} value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Population growth rate" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Effective depreciation (delta+n) = {(effDep * 100).toFixed(1)}% — capital per worker must be replenished at this rate just to keep k constant as depreciation erodes the capital stock and population growth spreads it thinner.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── New Keynesian Phillips Curve ────────────────────────────────────────── */
// widget key: 'new-keynesian-phillips'
export function NewKeynesianPhillips() {
  const [kappa, setKappa] = useState(0.4)
  const [piExp, setPiExp] = useState(2)
  const [gap, setGap] = useState(0)
  const [shock, setShock] = useState(0)

  const rNatural = 2
  const piTarget = 2

  const pi = piExp + kappa * gap + shock
  const policyRate = rNatural + pi + 0.5 * (pi - piTarget) + 0.5 * gap

  const data = Array.from({ length: 21 }, (_, i) => {
    const g = -5 + i * 0.5
    return { gap: g, pi: +(piExp + kappa * g + shock).toFixed(2) }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">New Keynesian Phillips Curve &amp; Taylor Rule</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The NKPC links current inflation to expected inflation and the output gap: pi = pi_e + kappa x output gap (+ any cost-push shock). The Taylor rule then sets the policy rate in response.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="gap"
              label={{ value: 'Output gap (%)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Inflation (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={gap} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: 'Current gap', fill: 'var(--accent)', fontSize: 10, position: 'top' }} />
            <ReferenceLine y={piTarget} stroke="#94a3b8" strokeDasharray="4 4" label={{ value: 'Inflation target', fill: '#94a3b8', fontSize: 10 }} />
            <Line type="monotone" dataKey="pi" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="NKPC" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">{pi.toFixed(2)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Current inflation (pi)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{policyRate.toFixed(2)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Taylor-rule policy rate (i)</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Slope / stickiness (kappa): {kappa.toFixed(2)}</label>
            <input type="range" min={0.1} max={1} step={0.05} value={kappa} onChange={(e) => setKappa(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Phillips curve slope kappa" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Expected inflation (pi_e): {piExp.toFixed(1)}%</label>
            <input type="range" min={0} max={6} step={0.1} value={piExp} onChange={(e) => setPiExp(Number(e.target.value))} className="w-full accent-green-500" aria-label="Expected inflation" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Output gap: {gap > 0 ? '+' : ''}{gap.toFixed(1)}%</label>
            <input type="range" min={-5} max={5} step={0.1} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Output gap" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Cost-push shock: {shock > 0 ? '+' : ''}{shock.toFixed(1)}%</label>
            <input type="range" min={-2} max={2} step={0.1} value={shock} onChange={(e) => setShock(Number(e.target.value))} className="w-full accent-red-500" aria-label="Cost-push shock to inflation" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          <span className="font-semibold text-[var(--fg)]">Divine coincidence: </span>
          In the basic New Keynesian model, stabilising inflation and stabilising the output gap coincide (the &ldquo;divine coincidence&rdquo;) UNLESS there is a cost-push shock — in that case, the central bank faces a genuine trade-off between the two goals.
          {shock !== 0 && ' Try setting the output gap slider to 0 above: with a nonzero shock, inflation still deviates from target even at a zero output gap — that deviation is the trade-off in action.'}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Quantity Theory of Money &amp; Fisher Equation ──────────────────────────── */
// widget key: 'fisher-monetary-theory'
export function FisherMonetaryTheory() {
  const [mGrowth, setMGrowth] = useState(6)
  const [vGrowth, setVGrowth] = useState(0)
  const [yGrowth, setYGrowth] = useState(2.5)
  const [r, setR] = useState(2)
  const [piExp, setPiExp] = useState(3.5)

  const impliedInflation = mGrowth + vGrowth - yGrowth
  const nominalRateSimple = r + piExp
  const nominalRatePrecise = (1 + r / 100) * (1 + piExp / 100) - 1

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Quantity Theory of Money &amp; the Fisher Equation</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            M x V = P x Y in growth rates gives implied inflation. The Fisher equation then links real rates, expected inflation, and nominal rates.
          </p>
        </div>

        <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-center">
          <div className="text-2xl font-black text-blue-500">{impliedInflation.toFixed(1)}%</div>
          <div className="text-xs text-[var(--muted-fg)]">Implied inflation: %M + %V − %Y = {mGrowth}% + {vGrowth}% − {yGrowth}%</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Money supply growth (%M): {mGrowth.toFixed(1)}%</label>
            <input type="range" min={0} max={15} step={0.5} value={mGrowth} onChange={(e) => setMGrowth(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Money supply growth rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Velocity growth (%V): {vGrowth > 0 ? '+' : ''}{vGrowth.toFixed(1)}%</label>
            <input type="range" min={-3} max={3} step={0.25} value={vGrowth} onChange={(e) => setVGrowth(Number(e.target.value))} className="w-full accent-purple-500" aria-label="Velocity of money growth rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Real GDP growth (%Y): {yGrowth.toFixed(1)}%</label>
            <input type="range" min={0} max={6} step={0.25} value={yGrowth} onChange={(e) => setYGrowth(Number(e.target.value))} className="w-full accent-green-500" aria-label="Real GDP growth rate" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-2xl font-black text-[var(--accent)]">{nominalRateSimple.toFixed(2)}%</div>
          <div className="text-xs text-[var(--muted-fg)]">Nominal rate (Fisher equation): i = r + pi_e = {r}% + {piExp.toFixed(1)}%</div>
          <div className="text-[11px] text-[var(--muted-fg)] mt-1">Precise compounding version: i = (1+r)(1+pi_e) − 1 = {(nominalRatePrecise * 100).toFixed(2)}%</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Real interest rate (r): {r.toFixed(1)}%</label>
            <input type="range" min={0} max={5} step={0.25} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full accent-red-500" aria-label="Real interest rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Expected inflation (pi_e): {piExp.toFixed(1)}%</label>
            <input type="range" min={0} max={10} step={0.25} value={piExp} onChange={(e) => setPiExp(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Expected inflation for Fisher equation" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          If the central bank targets a stable inflation rate, expected inflation should track that target — the Fisher equation then implies that faster money growth (raising expected inflation) eventually raises NOMINAL rates too (the Fisher effect), even though it doesn&rsquo;t change the REAL rate in the long run (money neutrality).
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Ricardian Equivalence &amp; Fiscal Multipliers ──────────────────────────── */
// widget key: 'ricardian-equivalence-multiplier'
export function RicardianEquivalenceMultiplier() {
  const [mpc, setMpc] = useState(0.6)
  const [deltaG, setDeltaG] = useState(50)
  const [ricardian, setRicardian] = useState(30)

  const multiplier = 1 / (1 - mpc)
  const naiveEffect = multiplier * deltaG
  const effectiveMultiplier = 1 + (multiplier - 1) * (1 - ricardian / 100)
  const ricardianEffect = effectiveMultiplier * deltaG

  const maxEffect = 1 / (1 - 0.9) * 100 // upper bound for bar scaling reference

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Fiscal Multipliers &amp; Ricardian Equivalence</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The naive Keynesian multiplier assumes households simply spend according to their MPC. Ricardian equivalence argues rational households partly offset deficit spending by saving for future taxes.
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-blue-500">Naive multiplier effect</span>
              <span className="text-[var(--muted-fg)]">${naiveEffect.toFixed(1)}B</span>
            </div>
            <div className="h-6 rounded-full bg-[var(--muted)] overflow-hidden">
              <div className="h-full rounded-full bg-blue-500 transition-all duration-300" style={{ width: `${Math.min(100, (naiveEffect / maxEffect) * 100)}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-green-500">Ricardian-adjusted effect</span>
              <span className="text-[var(--muted-fg)]">${ricardianEffect.toFixed(1)}B</span>
            </div>
            <div className="h-6 rounded-full bg-[var(--muted)] overflow-hidden">
              <div className="h-full rounded-full bg-green-500 transition-all duration-300" style={{ width: `${Math.min(100, (ricardianEffect / maxEffect) * 100)}%` }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">${deltaG}B</div>
            <div className="text-xs text-[var(--muted-fg)]">Spending increase (deltaG)</div>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">{multiplier.toFixed(2)}x</div>
            <div className="text-xs text-[var(--muted-fg)]">Naive multiplier 1/(1−MPC)</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-lg font-black text-green-500">{effectiveMultiplier.toFixed(2)}x</div>
            <div className="text-xs text-[var(--muted-fg)]">Ricardian-adjusted multiplier</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">MPC: {mpc.toFixed(2)}</label>
            <input type="range" min={0.4} max={0.9} step={0.05} value={mpc} onChange={(e) => setMpc(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Marginal propensity to consume" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Govt spending increase (deltaG): ${deltaG}B</label>
            <input type="range" min={10} max={100} step={5} value={deltaG} onChange={(e) => setDeltaG(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Government spending increase" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Ricardian equivalence degree: {ricardian}%</label>
            <input type="range" min={0} max={100} step={5} value={ricardian} onChange={(e) => setRicardian(Number(e.target.value))} className="w-full accent-green-500" aria-label="Ricardian equivalence degree" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Full Ricardian equivalence (100%) would mean deficit-financed spending has NO net effect on output, because rational households save the extra income today to pay the higher taxes they anticipate tomorrow. In practice, most economists believe Ricardian equivalence is only PARTIAL — some households are credit-constrained or don&rsquo;t fully anticipate future taxes — so real-world multipliers sit somewhere between the two extremes.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Mundell-Fleming IS-LM-BP ────────────────────────────────────────────── */
// widget key: 'mundell-fleming-islmbp'
type ExchangeRegime = 'floating' | 'fixed'
type PolicyTool = 'fiscal' | 'monetary'

interface MFResult {
  effective: boolean
  chain: string
}

const MF_MATRIX: Record<ExchangeRegime, Record<PolicyTool, MFResult>> = {
  floating: {
    fiscal: {
      effective: false,
      chain: 'Fiscal expansion shifts IS right, pushing up domestic interest rates. Under perfect capital mobility this attracts capital inflows, causing the currency to APPRECIATE. The stronger currency reduces net exports, shifting IS back toward its original position — full crowding out via the exchange rate. Output is largely unchanged.',
    },
    monetary: {
      effective: true,
      chain: 'Monetary expansion shifts LM right, lowering domestic interest rates. Under perfect capital mobility this triggers capital outflows, causing the currency to DEPRECIATE. The weaker currency boosts net exports, shifting IS right as well — reinforcing rather than offsetting the expansion. Output rises.',
    },
  },
  fixed: {
    fiscal: {
      effective: true,
      chain: 'Fiscal expansion shifts IS right, which would normally raise domestic interest rates. To defend the fixed exchange rate against the resulting appreciation pressure, the central bank must expand the money supply (buying foreign currency), which shifts LM right too — reinforcing rather than offsetting the expansion. Output rises.',
    },
    monetary: {
      effective: false,
      chain: 'An attempted monetary expansion shifts LM right and would depreciate the currency. To defend the peg, the central bank is forced to sell foreign reserves and contract the money supply back — undoing the initial monetary expansion entirely. Output is largely unchanged.',
    },
  },
}

export function MundellFlemingISLMBP() {
  const [regime, setRegime] = useState<ExchangeRegime>('floating')
  const [tool, setTool] = useState<PolicyTool>('fiscal')

  const result = MF_MATRIX[regime][tool]
  const effectPct = result.effective ? 85 : 8

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Mundell-Fleming: IS-LM-BP with Perfect Capital Mobility</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Assumption: PERFECT capital mobility — capital flows instantly to eliminate any interest rate differential with the rest of the world. Choose an exchange rate regime and a policy tool to see whether it is effective at raising output.
          </p>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Exchange rate regime</div>
            <div className="flex gap-2 flex-wrap">
              {([['floating', 'Floating'], ['fixed', 'Fixed']] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setRegime(key)}
                  className={cn(
                    'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    regime === key ? 'text-white border-transparent bg-blue-500 border-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Policy tool</div>
            <div className="flex gap-2 flex-wrap">
              {([['fiscal', 'Fiscal expansion'], ['monetary', 'Monetary expansion']] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTool(key)}
                  className={cn(
                    'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    tool === key ? 'text-white border-transparent bg-amber-500 border-amber-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          result.effective ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
        )}>
          <div className={cn('text-xl font-black', result.effective ? 'text-green-500' : 'text-red-500')}>
            {result.effective ? 'EFFECTIVE' : 'INEFFECTIVE'}
          </div>
          <p className="text-sm text-[var(--fg)] mt-2 text-left">{result.chain}</p>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Illustrative output effect</div>
          <div className="h-8 rounded-full bg-[var(--muted)] overflow-hidden">
            <div
              className={cn('h-full rounded-full transition-all duration-300', result.effective ? 'bg-green-500' : 'bg-red-500')}
              style={{ width: `${effectPct}%` }}
            />
          </div>
          <p className="text-[10px] text-[var(--muted-fg)] text-right">Purely illustrative — not to scale</p>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Pareto Efficiency &amp; the Utility Possibility Frontier ────────────────── */
// widget key: 'pareto-welfare-frontier'
export function ParetoWelfareFrontier() {
  const [gamma, setGamma] = useState(1.5)
  const [u1Sel, setU1Sel] = useState(50)

  const Umax = 100

  const u2Of = (u1: number) => {
    const remainder = Math.pow(Umax, gamma) - Math.pow(u1, gamma)
    return remainder > 0 ? Math.pow(remainder, 1 / gamma) : 0
  }

  const u2Sel = u2Of(u1Sel)

  // Symmetric point (utilitarian = Rawlsian for this symmetric UPF)
  const symmetricU1 = Umax / Math.pow(2, 1 / gamma)
  const symmetricU2 = u2Of(symmetricU1)

  const data = Array.from({ length: 51 }, (_, i) => {
    const u1 = (Umax * i) / 50
    return { u1: +u1.toFixed(2), u2: +u2Of(u1).toFixed(2) }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Pareto Efficiency &amp; the Utility Possibility Frontier</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Every point on this frontier is Pareto efficient. Move along it to compare the utilitarian/Rawlsian point with your own chosen split.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="u1"
              type="number"
              domain={[0, Umax]}
              label={{ value: 'Utility of Person 1 (U1)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, Umax]}
              label={{ value: 'Utility of Person 2 (U2)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <Line type="monotone" dataKey="u2" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="UPF" />
            <ReferenceDot x={+symmetricU1.toFixed(1)} y={+symmetricU2.toFixed(1)} r={6} fill="#22c55e" stroke="var(--card-bg)" strokeWidth={2} />
            <ReferenceDot x={u1Sel} y={+u2Sel.toFixed(1)} r={6} fill="var(--accent)" stroke="var(--card-bg)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-lg font-black text-green-500">({symmetricU1.toFixed(1)}, {symmetricU2.toFixed(1)})</div>
            <div className="text-xs text-[var(--muted-fg)]">Utilitarian = Rawlsian optimum (equal split)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">({u1Sel.toFixed(0)}, {u2Sel.toFixed(1)})</div>
            <div className="text-xs text-[var(--muted-fg)]">Current selected point</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Frontier curvature (gamma): {gamma.toFixed(2)}</label>
            <input type="range" min={1} max={3} step={0.1} value={gamma} onChange={(e) => setGamma(Number(e.target.value))} className="w-full accent-blue-500" aria-label="UPF curvature gamma" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">U1 (Person 1&apos;s utility): {u1Sel}</label>
            <input type="range" min={0} max={100} step={1} value={u1Sel} onChange={(e) => setU1Sel(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Select utility of person 1" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          For this symmetric frontier, the utilitarian and Rawlsian optima coincide at the equal-split point; they would differ if the frontier were asymmetric, e.g. if the two people had different underlying productivities. Every point ON the frontier is Pareto efficient (you can&rsquo;t help one person without hurting the other) — but the frontier alone doesn&rsquo;t tell you WHICH point is best. That requires a value judgement about how to weigh one person&rsquo;s wellbeing against another&rsquo;s — this is exactly the role of a social welfare function (see the companion widget).
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Social Welfare Functions ─────────────────────────────────────────────── */
// widget key: 'social-welfare-function'
const EPSILON_STEPS = [0, 0.5, 1, 2, 5, 20]
const SWF_M = 100
const u1 = (x: number) => Math.pow(x, 0.8)
const u2 = (x: number) => 1.3 * Math.pow(SWF_M - x, 0.8)

const swf = (x: number, eps: number) => {
  const a = u1(x)
  const b = u2(x)
  if (a <= 0 || b <= 0) return -Infinity
  if (Math.abs(eps - 1) < 1e-9) return Math.log(a) + Math.log(b)
  const p = 1 - eps
  return Math.pow(Math.pow(a, p) + Math.pow(b, p), 1 / p)
}

export function SocialWelfareFunction() {
  const [epsilonIdx, setEpsilonIdx] = useState(0)
  const epsilon = EPSILON_STEPS[epsilonIdx]

  const { xStar, u1Star, u2Star } = useMemo(() => {
    let bestX = 50
    let bestVal = -Infinity
    for (let x = 1; x <= 99; x++) {
      const val = swf(x, epsilon)
      if (val > bestVal) {
        bestVal = val
        bestX = x
      }
    }
    return { xStar: bestX, u1Star: u1(bestX), u2Star: u2(bestX) }
  }, [epsilon])

  const chartData = EPSILON_STEPS.map((eps) => {
    let bestX = 50
    let bestVal = -Infinity
    for (let x = 1; x <= 99; x++) {
      const val = swf(x, eps)
      if (val > bestVal) {
        bestVal = val
        bestX = x
      }
    }
    return { eps: `e=${eps}`, x: bestX, other: SWF_M - bestX }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Social Welfare Functions &amp; Inequality Aversion</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Person 1: u1(x) = x^0.8. Person 2 (30% more efficient at converting resources into utility): u2(100−x) = 1.3(100−x)^0.8. Adjust inequality-aversion (epsilon) to see the optimal split shift.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="eps" tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} label={{ value: 'Inequality aversion (epsilon)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} label={{ value: 'Optimal allocation to Person 1', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine y={50} stroke="var(--border)" strokeDasharray="4 4" />
            <Line type="monotone" dataKey="x" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} name="Optimal x* (to Person 1)" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">x* = {xStar}</div>
            <div className="text-xs text-[var(--muted-fg)]">Allocation to Person 1 — u1(x*) = {u1Star.toFixed(1)}</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-lg font-black text-green-500">100−x* = {SWF_M - xStar}</div>
            <div className="text-xs text-[var(--muted-fg)]">Allocation to Person 2 — u2(100−x*) = {u2Star.toFixed(1)}</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">Inequality aversion (epsilon): {epsilon} {epsilon === 0 ? '(utilitarian)' : epsilon >= 20 ? '(near-Rawlsian / maximin)' : ''}</label>
          <input
            type="range" min={0} max={EPSILON_STEPS.length - 1} step={1} value={epsilonIdx}
            onChange={(e) => setEpsilonIdx(Number(e.target.value))}
            className="w-full accent-[#e8c547]"
            aria-label="Inequality aversion parameter epsilon"
          />
          <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
            <span>← Utilitarian (epsilon=0)</span>
            <span>Rawlsian / maximin (epsilon large) →</span>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          At epsilon=0 (pure utilitarian), the optimum favours whichever person converts resources to utility more efficiently — here, Person 2, who gets 30% more utility per unit of resource, so the utilitarian split gives Person 2 the majority of the resource. As epsilon rises toward Rawlsian/maximin, the optimum shifts toward EQUALISING utilities (not resources) between the two people — giving relatively more of the resource to the less-efficient Person 1 to compensate, since maximin cares about the worse-off person&rsquo;s utility level, not about the resource total.
        </div>
      </CardContent>
    </Card>
  )
}
