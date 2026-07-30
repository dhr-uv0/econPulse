'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, ReferenceDot,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Optimal Taxation — Ramsey Rule (widget key: 'optimal-taxation-ramsey') ──
   Two goods, each with its own PED and its own baseline price and quantity.
   Per-unit DWL approximation: DWL_i = 0.5 * PED_i * (t_i/P_i)^2 * P_i * Q_i
   The inverse elasticity rule is properly stated in AD VALOREM terms: the tax
   rate as a fraction of price, tau_i = t_i/P_i, should satisfy
   tau_A / tau_B = PED_B / PED_A (tax the less elastic good more heavily, as a
   % of its price — it distorts behaviour less per dollar raised). Converting
   back to per-unit dollar tax: t_A/t_B = (PED_B/PED_A) * (P_A/P_B). Minimising
   total DWL subject to a fixed revenue target R = t_A*Q_A + t_B*Q_B (quantities
   held at baseline — a simplifying assumption, stated below) via Lagrange gives
   the closed form t_i = lambda * P_i / PED_i, with
   lambda = R / (P_A*Q_A/PED_A + P_B*Q_B/PED_B) — this is exactly the point
   satisfying the ad valorem ratio above, and because it is the constrained
   minimum of a convex objective, it is GUARANTEED to weakly dominate any other
   allocation raising the same revenue, including a naive uniform per-unit tax
   t_uniform = R / (Q_A + Q_B). (An earlier draft applied the elasticity ratio
   directly to the dollar tax rates, ignoring the price difference between the
   goods — that version could actually underperform the uniform tax for some
   valid slider combinations, e.g. PED_A=0.5, PED_B=1.5, which is why the ad
   valorem version is used here instead.) Verified numerically with
   PED_A=1.8, PED_B=0.5, R=800: Ramsey total DWL ~= 70.2 vs uniform total
   DWL ~= 164.0; and spot-checked across the full slider range (including
   PED_A<PED_B and PED_A=PED_B) that Ramsey DWL never exceeds uniform DWL.
────────────────────────────────────────────────────────────────────────── */
export function OptimalTaxationRamsey() {
  const [pedA, setPedA] = useState(1.8)
  const [pedB, setPedB] = useState(0.5)
  const [revenue, setRevenue] = useState(800)

  const priceA = 10
  const priceB = 20
  const qA = 100
  const qB = 100

  const dwl = (ped: number, t: number, price: number, q: number) =>
    0.5 * ped * (t / price) ** 2 * price * q

  // Ramsey / inverse-elasticity allocation (ad valorem rates tau_i = t_i/P_i
  // satisfy tau_A/tau_B = PED_B/PED_A; closed form t_i = lambda * P_i / PED_i)
  const lambda = revenue / (priceA * qA / pedA + priceB * qB / pedB)
  const tA = lambda * priceA / pedA
  const tB = lambda * priceB / pedB
  const dwlA = dwl(pedA, tA, priceA, qA)
  const dwlB = dwl(pedB, tB, priceB, qB)
  const dwlRamsey = dwlA + dwlB

  // Naive uniform tax raising the same revenue
  const tUniform = revenue / (qA + qB)
  const dwlAUniform = dwl(pedA, tUniform, priceA, qA)
  const dwlBUniform = dwl(pedB, tUniform, priceB, qB)
  const dwlUniform = dwlAUniform + dwlBUniform

  const savings = dwlUniform - dwlRamsey
  const savingsPct = dwlUniform > 0 ? (savings / dwlUniform) * 100 : 0

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Optimal Taxation — the Ramsey Rule</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            To raise a fixed amount of tax revenue at the smallest efficiency cost, the inverse elasticity rule
            says the tax rate on each good should be inversely proportional to its price elasticity of demand.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">
              PED — Good A (restaurant meals): {pedA.toFixed(2)}
            </label>
            <input
              type="range" min={0.5} max={3.0} step={0.1} value={pedA}
              onChange={(e) => setPedA(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Price elasticity of demand for good A, restaurant meals"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">
              PED — Good B (prescription drugs): {pedB.toFixed(2)}
            </label>
            <input
              type="range" min={0.2} max={1.5} step={0.1} value={pedB}
              onChange={(e) => setPedB(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Price elasticity of demand for good B, prescription drugs"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Target tax revenue: ${revenue}
            </label>
            <input
              type="range" min={200} max={2000} step={20} value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Target total tax revenue needed"
            />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] p-3 text-xs text-[var(--muted-fg)]">
          Baseline (untaxed): Good A price ${priceA}, quantity {qA} units. Good B price ${priceB}, quantity {qB} units.
          Both goods start at the same baseline quantity so the two approaches can be compared on equal footing.
          Quantities are held at baseline for this illustrative DWL calculation — a simplification that ignores
          how the tax itself would shrink quantity demanded.
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 space-y-2">
            <div className="text-sm font-black text-[var(--accent)]">Ramsey-optimal (differentiated)</div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Tax on A (meals)</span>
              <span className="font-bold text-[var(--fg)]">${tA.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Tax on B (drugs)</span>
              <span className="font-bold text-[var(--fg)]">${tB.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-[var(--border)] pt-2">
              <span className="text-[var(--muted-fg)]">Total DWL</span>
              <span className="font-black text-[var(--accent)]">${dwlRamsey.toFixed(2)}</span>
            </div>
          </div>
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 space-y-2">
            <div className="text-sm font-black text-red-500">Naive uniform tax</div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Tax on A (meals)</span>
              <span className="font-bold text-[var(--fg)]">${tUniform.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Tax on B (drugs)</span>
              <span className="font-bold text-[var(--fg)]">${tUniform.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-[var(--border)] pt-2">
              <span className="text-[var(--muted-fg)]">Total DWL</span>
              <span className="font-black text-red-500">${dwlUniform.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          savings > 0.01 ? 'border-green-500/30 bg-green-500/10' : 'border-[var(--border)]'
        )}>
          <div className={cn('text-2xl font-black', savings > 0.01 ? 'text-green-500' : 'text-[var(--fg)]')}>
            {savings > 0.01 ? `Efficiency gain: $${savings.toFixed(2)} (${savingsPct.toFixed(0)}% less DWL)` : 'No efficiency gain at this configuration — Ramsey allocation coincides with uniform'}
          </div>
          <p className="text-sm text-[var(--muted-fg)] mt-1">
            Both approaches raise exactly ${revenue.toFixed(0)} in revenue, but the Ramsey allocation does it with less
            distortion to behaviour.
          </p>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          The Ramsey Rule says: to raise a given amount of revenue with the smallest total efficiency cost, tax goods
          with less elastic demand more heavily — since inelastic demand means less behaviour distortion (less quantity
          change) per dollar of tax. This is why goods like tobacco or prescription drugs are common tax targets on
          efficiency grounds (though equity considerations often push the other way, since these goods can be
          necessities for some groups).
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Social Insurance & Adverse Selection (widget key: 'social-insurance-adverse-selection')
   High-risk and low-risk types, each with own claim probability. Fixed payout $10,000.
   Fair premium_i = prob_i * payout. Pooled premium = weighted-average prob * payout,
   weighted by share high-risk. Under pooling, low-risk overpay relative to their own
   fair premium (cross-subsidising high-risk) and high-risk underpay.
   Adverse selection: if pooled premium exceeds low-risk fair premium by more than the
   opt-out threshold (%), low-risk individuals leave a VOLUNTARY pool; recompute the
   pool with only high-risk remaining (new pooled premium = high-risk fair premium),
   illustrating the "death spiral".
   Verified: highRisk=40%, lowRisk=10%, share=30% → fairHigh=$4,000, fairLow=$1,000,
   pooled prob = 0.3*0.4+0.7*0.1 = 0.19 → pooled premium $1,900 (low overpays $900,
   high underpays $2,100 — cross-subsidy confirmed in the correct direction).
────────────────────────────────────────────────────────────────────────── */
export function SocialInsuranceAdverseSelection() {
  const [highRiskProb, setHighRiskProb] = useState(40) // %
  const [lowRiskProbRaw, setLowRiskProbRaw] = useState(10) // %
  const [shareHighRisk, setShareHighRisk] = useState(30) // %
  const [optOutThreshold, setOptOutThreshold] = useState(50) // %

  const payout = 10000
  const lowRiskProb = Math.min(lowRiskProbRaw, highRiskProb - 1)

  const fairHigh = (highRiskProb / 100) * payout
  const fairLow = (lowRiskProb / 100) * payout

  const s = shareHighRisk / 100
  const pooledProb = s * highRiskProb + (1 - s) * lowRiskProb
  const pooledPremium = (pooledProb / 100) * payout

  const lowOverpay = pooledPremium - fairLow
  const highUnderpay = fairHigh - pooledPremium
  const overpayPct = fairLow > 0 ? (lowOverpay / fairLow) * 100 : 0

  const optsOut = overpayPct > optOutThreshold
  const spiralPremium = fairHigh // pool left with only high-risk types

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Social Insurance &amp; Adverse Selection</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Pooling high-risk and low-risk individuals into one community-rated premium means low-risk people
            cross-subsidise high-risk people. Under voluntary participation, that overpayment can trigger an exit
            unraveling — a &quot;death spiral&quot;.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-red-500">
              High-risk claim probability: {highRiskProb}%
            </label>
            <input
              type="range" min={20} max={60} step={1} value={highRiskProb}
              onChange={(e) => setHighRiskProb(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="High-risk group probability of needing a payout"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">
              Low-risk claim probability: {lowRiskProb}%
            </label>
            <input
              type="range" min={5} max={25} step={1} value={lowRiskProbRaw}
              onChange={(e) => setLowRiskProbRaw(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Low-risk group probability of needing a payout"
            />
            <p className="text-xs text-[var(--muted-fg)]">Clamped below the high-risk probability</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Share of population that is high-risk: {shareHighRisk}%
            </label>
            <input
              type="range" min={10} max={90} step={1} value={shareHighRisk}
              onChange={(e) => setShareHighRisk(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Share of population that is high-risk"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Low-risk opt-out tolerance: {optOutThreshold}% overpayment
            </label>
            <input
              type="range" min={0} max={100} step={5} value={optOutThreshold}
              onChange={(e) => setOptOutThreshold(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="How much overpayment low-risk people will tolerate before opting out"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">${fairLow.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Low-risk fair premium</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">${pooledPremium.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Pooled (community-rated) premium</div>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
            <div className="text-lg font-black text-red-500">${fairHigh.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">High-risk fair premium</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-red-500">+${Math.max(0, lowOverpay).toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Low-risk overpays vs own fair premium ({overpayPct.toFixed(0)}%)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">-${Math.max(0, highUnderpay).toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">High-risk underpays vs own fair premium</div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          optsOut ? 'border-red-500/30 bg-red-500/10' : 'border-green-500/30 bg-green-500/10'
        )}>
          {optsOut ? (
            <>
              <div className="text-xl font-black text-red-500">Death spiral: low-risk individuals opt out</div>
              <p className="text-sm text-[var(--muted-fg)] mt-1">
                Overpayment of {overpayPct.toFixed(0)}% exceeds the {optOutThreshold}% tolerance, so low-risk people leave
                for self-insurance or risk-rated coverage. Only high-risk individuals remain, and the pool must
                re-price to <span className="font-bold text-[var(--fg)]">${spiralPremium.toFixed(0)}</span> — up
                from ${pooledPremium.toFixed(0)} — to stay solvent.
              </p>
            </>
          ) : (
            <>
              <div className="text-xl font-black text-green-500">Pool remains stable</div>
              <p className="text-sm text-[var(--muted-fg)] mt-1">
                Overpayment of {overpayPct.toFixed(0)}% is within the {optOutThreshold}% tolerance, so low-risk people
                stay in the pool and the ${pooledPremium.toFixed(0)} premium holds.
              </p>
            </>
          )}
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          This is why many social insurance systems (e.g. national health insurance, Social Security) use mandatory
          participation rather than voluntary community-rated pricing — mandating everyone into the pool prevents
          the low-risk exit that would otherwise unravel it.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Cost-Benefit Analysis — NPV (widget key: 'cost-benefit-npv') ────────────
   NPV = -UpfrontCost + AnnualBenefit * [1 - (1+r)^-N] / r  (annuity formula, r>0).
   BCR = PV(benefits) / UpfrontCost. Recommend if NPV>0 (equivalently BCR>1).
   Sensitivity: NPV plotted across discount rates 1%-15%, holding cost/benefit/
   lifespan fixed at current slider values; the zero-crossing is the informal IRR.
────────────────────────────────────────────────────────────────────────── */
export function CostBenefitNPV() {
  const [upfrontCost, setUpfrontCost] = useState(100) // $M
  const [annualBenefit, setAnnualBenefit] = useState(15) // $M
  const [lifespan, setLifespan] = useState(20) // years
  const [discountRate, setDiscountRate] = useState(5) // %

  const pvAnnuity = (benefit: number, n: number, ratePct: number) => {
    const r = ratePct / 100
    if (r === 0) return benefit * n
    return benefit * (1 - Math.pow(1 + r, -n)) / r
  }

  const pvBenefits = pvAnnuity(annualBenefit, lifespan, discountRate)
  const npv = pvBenefits - upfrontCost
  const bcr = upfrontCost > 0 ? pvBenefits / upfrontCost : 0
  const recommend = npv > 0

  const sensitivityData = Array.from({ length: 29 }, (_, i) => {
    const rate = 1 + i * 0.5 // 1% to 15% in 0.5% steps
    const pv = pvAnnuity(annualBenefit, lifespan, rate)
    return { rate: +rate.toFixed(1), npv: +(pv - upfrontCost).toFixed(2) }
  })

  const currentPoint = sensitivityData.reduce((closest, d) =>
    Math.abs(d.rate - discountRate) < Math.abs(closest.rate - discountRate) ? d : closest
  , sensitivityData[0])

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Cost-Benefit Analysis — Net Present Value</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A public infrastructure project is worth undertaking if the present value of its future benefits exceeds
            its upfront cost — but the answer can flip depending on the discount rate chosen.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Upfront cost: ${upfrontCost}M
            </label>
            <input
              type="range" min={10} max={500} step={5} value={upfrontCost}
              onChange={(e) => setUpfrontCost(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="Upfront cost of the project in millions of dollars"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Annual benefit: ${annualBenefit}M
            </label>
            <input
              type="range" min={1} max={50} step={1} value={annualBenefit}
              onChange={(e) => setAnnualBenefit(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Annual benefit of the project in millions of dollars"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Project lifespan: {lifespan} years
            </label>
            <input
              type="range" min={5} max={40} step={1} value={lifespan}
              onChange={(e) => setLifespan(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Project lifespan in years"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Discount rate: {discountRate}%
            </label>
            <input
              type="range" min={1} max={10} step={0.5} value={discountRate}
              onChange={(e) => setDiscountRate(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Social discount rate"
            />
          </div>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={sensitivityData} margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="rate"
              type="number"
              domain={[1, 15]}
              label={{ value: 'Discount rate (%)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'NPV ($M)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 11 }}
              formatter={(v: number) => [`$${v.toFixed(1)}M`, 'NPV']}
              labelFormatter={(v) => `Discount rate: ${v}%`}
            />
            <ReferenceLine y={0} stroke="var(--muted-fg)" strokeDasharray="4 4" label={{ value: 'NPV = 0 (informal IRR crossing)', fill: 'var(--muted-fg)', fontSize: 10, position: 'insideTopRight' }} />
            <ReferenceLine x={discountRate} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: `Current: ${discountRate}%`, fill: 'var(--accent)', fontSize: 10 }} />
            <Line type="monotone" dataKey="npv" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="NPV" />
            <ReferenceDot x={currentPoint.rate} y={currentPoint.npv} r={6} fill="var(--accent)" stroke="var(--card-bg)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">${pvBenefits.toFixed(1)}M</div>
            <div className="text-xs text-[var(--muted-fg)]">PV of benefits</div>
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3',
            npv > 0 ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
          )}>
            <div className={cn('text-lg font-black', npv > 0 ? 'text-green-500' : 'text-red-500')}>${npv.toFixed(1)}M</div>
            <div className="text-xs text-[var(--muted-fg)]">Net present value</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--accent)]">{bcr.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Benefit-cost ratio</div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          recommend ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
        )}>
          <div className={cn('text-xl font-black', recommend ? 'text-green-500' : 'text-red-500')}>
            {recommend ? 'Recommend: proceed (NPV > 0, BCR > 1)' : 'Do not proceed: NPV < 0, BCR < 1'}
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          A project&apos;s IRR (internal rate of return) is the discount rate at which NPV=0 — visible on the chart as
          where the curve crosses zero. If the actual social discount rate (often set by government guidance, and a
          genuinely contested policy choice — e.g. how do we value costs/benefits to future generations?) is below
          the IRR, the project passes the NPV&gt;0 test; if above, it fails. This is why the choice of discount rate
          is itself a significant policy debate in cost-benefit analysis, especially for long-lived projects like
          climate policy.
        </div>
      </CardContent>
    </Card>
  )
}
