'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Regulating a Natural Monopoly (Antitrust) ───────────────────────────── */
// widget key: 'antitrust-regulation'
type Regime = 'unregulated' | 'mc-pricing' | 'ac-pricing'

export function AntitrustRegulation() {
  const [regime, setRegime] = useState<Regime>('unregulated')

  const MC = 4
  const atc = (q: number) => 100 / q + 4
  const profit = (q: number, p: number) => (p - atc(q)) * q

  // Unregulated: MR = MC, where MR = 20 - Q
  const qMonopoly = 16
  const pMonopoly = 20 - 0.5 * qMonopoly

  // MC pricing: P = MC = 4, read off the demand curve
  const qMCPricing = (20 - MC) / 0.5
  const pMCPricing = MC

  // AC pricing: P = ATC(Q) -> 20 - 0.5Q = 100/Q + 4 -> Q^2 - 32Q + 200 = 0
  // take the larger root, which lies between the monopoly and MC-pricing outputs
  const qACPricing = (32 + Math.sqrt(32 * 32 - 4 * 200)) / 2
  const pACPricing = 20 - 0.5 * qACPricing

  const regimes: Record<Regime, { label: string; q: number; p: number; note: string }> = {
    'unregulated': {
      label: 'Unregulated monopoly',
      q: qMonopoly, p: pMonopoly,
      note: 'The profit-maximising monopolist produces where MR = MC. Output is restricted and price sits above marginal cost — allocatively inefficient, but the firm earns a comfortable profit.',
    },
    'mc-pricing': {
      label: 'Marginal-cost pricing',
      q: qMCPricing, p: pMCPricing,
      note: 'Allocatively efficient (P = MC) — output expands to the socially optimal level. But the firm loses money since P is below ATC (average costs are still falling at this output) — sustaining this price requires a government subsidy.',
    },
    'ac-pricing': {
      label: 'Average-cost pricing',
      q: qACPricing, p: pACPricing,
      note: 'A "fair-return" rule: price is set where P = ATC, so the firm breaks even (zero economic profit) without a subsidy. Output is higher than the unregulated outcome but still below the allocatively efficient MC-pricing output.',
    },
  }

  const current = regimes[regime]
  const currentProfit = profit(current.q, current.p)

  const data = Array.from({ length: 40 }, (_, i) => {
    const q = i + 1
    return {
      q,
      demand: Math.max(0, 20 - 0.5 * q),
      mr: q <= 20 ? Math.max(0, 20 - q) : null,
      mc: MC,
      atc: +atc(q).toFixed(2),
    }
  })

  const markerData = [{ q: +current.q.toFixed(2), p: +current.p.toFixed(2) }]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Regulating a Natural Monopoly</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            This natural monopoly has average costs that keep falling as output rises (ATC = 100/Q + 4, always above the constant marginal cost of $4). Compare how three regulatory regimes change price, output, and profit.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {(Object.keys(regimes) as Regime[]).map((key) => (
            <button
              key={key}
              onClick={() => setRegime(key)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                regime === key ? 'text-white border-transparent bg-blue-500 border-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
              )}
            >
              {regimes[key].label}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q" type="number" domain={[0, 40]}
              label={{ value: 'Quantity (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 24]}
              label={{ value: 'Price / Cost ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <Line data={data} type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line data={data} type="monotone" dataKey="mr" stroke="#94a3b8" strokeWidth={2} dot={false} name="MR" />
            <Line data={data} type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MC" />
            <Line data={data} type="monotone" dataKey="atc" stroke="#22c55e" strokeWidth={2.5} dot={false} name="ATC" />
            <Line
              data={markerData} type="monotone" dataKey="p"
              stroke="var(--accent)" strokeWidth={0}
              dot={{ r: 7, fill: 'var(--accent)', strokeWidth: 2, stroke: 'var(--card-bg)' }}
              name="Selected regime"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{current.q.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Quantity (Q)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">${current.p.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Price (P)</div>
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3',
            currentProfit >= 0 ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
          )}>
            <div className={cn('text-lg font-black', currentProfit >= 0 ? 'text-green-500' : 'text-red-500')}>
              {currentProfit >= 0 ? '+' : '−'}${Math.abs(currentProfit).toFixed(2)}
            </div>
            <div className="text-xs text-[var(--muted-fg)]">Economic profit</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          {current.note}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── GDP via the Value-Added Approach ────────────────────────────────────── */
// widget key: 'value-added-calculator'
export function ValueAddedCalculator() {
  const [farmerPrice, setFarmerPrice] = useState(2)
  const [millerPrice, setMillerPrice] = useState(3.5)
  const [bakerPrice, setBakerPrice] = useState(5)
  const [retailerPrice, setRetailerPrice] = useState(7)

  const stages = [
    { label: 'Wheat farmer', sells: farmerPrice, va: farmerPrice, color: '#f59e0b' },
    { label: 'Miller', sells: millerPrice, va: millerPrice - farmerPrice, color: '#3b82f6' },
    { label: 'Baker', sells: bakerPrice, va: bakerPrice - millerPrice, color: '#22c55e' },
    { label: 'Retailer', sells: retailerPrice, va: retailerPrice - bakerPrice, color: '#8b5cf6' },
  ]

  const sumVA = stages.reduce((s, st) => s + st.va, 0)
  const maxAbs = Math.max(1, ...stages.map((s) => Math.abs(s.va)))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">GDP via the Value-Added Approach</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Wheat passes through four stages before reaching the consumer. Adjust each stage&rsquo;s sale price and see how value added at each step sums to the final retail price.
          </p>
        </div>

        <div className="space-y-3">
          {stages.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: s.color }} className="font-semibold">{s.label}</span>
                <span className="text-[var(--muted-fg)]">sells at ${s.sells.toFixed(2)} · value added ${s.va.toFixed(2)}</span>
              </div>
              <div className="h-5 rounded-full bg-[var(--muted)] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(0, (Math.abs(s.va) / maxAbs) * 100)}%`, background: s.va < 0 ? '#ef4444' : s.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-lg font-black text-[var(--accent)]">
            Sum of value added = ${sumVA.toFixed(2)} = Final sale price = ${retailerPrice.toFixed(2)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Farmer&rsquo;s wheat price: ${farmerPrice.toFixed(2)}</label>
            <input type="range" min={1} max={3} step={0.1} value={farmerPrice} onChange={(e) => setFarmerPrice(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Farmer's wheat sale price" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Miller&rsquo;s flour price: ${millerPrice.toFixed(2)}</label>
            <input type="range" min={2} max={5} step={0.1} value={millerPrice} onChange={(e) => setMillerPrice(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Miller's flour sale price" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Baker&rsquo;s bread price (to retailer): ${bakerPrice.toFixed(2)}</label>
            <input type="range" min={3} max={7} step={0.1} value={bakerPrice} onChange={(e) => setBakerPrice(Number(e.target.value))} className="w-full accent-green-500" aria-label="Baker's bread sale price to retailer" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Retailer&rsquo;s consumer price: ${retailerPrice.toFixed(2)}</label>
            <input type="range" min={4} max={10} step={0.1} value={retailerPrice} onChange={(e) => setRetailerPrice(Number(e.target.value))} className="w-full accent-purple-500" aria-label="Retailer's final consumer price" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          GDP counts each stage&rsquo;s VALUE ADDED, not the full sale price at every stage — otherwise the same output would be counted multiple times (double-counting) as it passes through the chain.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Real vs. Nominal GDP and the GDP Deflator ───────────────────────────── */
// widget key: 'real-nominal-gdp'
export function RealNominalGDP() {
  const Y1_WIDGET_PRICE = 10
  const Y1_WIDGET_QTY = 100
  const Y1_SERVICE_PRICE = 20
  const Y1_SERVICE_QTY = 50
  const gdpY1 = Y1_WIDGET_PRICE * Y1_WIDGET_QTY + Y1_SERVICE_PRICE * Y1_SERVICE_QTY

  const [widgetPrice2, setWidgetPrice2] = useState(11)
  const [widgetQty2, setWidgetQty2] = useState(110)
  const [servicePrice2, setServicePrice2] = useState(22)
  const [serviceQty2, setServiceQty2] = useState(60)

  const nominalGDP2 = widgetPrice2 * widgetQty2 + servicePrice2 * serviceQty2
  const realGDP2 = Y1_WIDGET_PRICE * widgetQty2 + Y1_SERVICE_PRICE * serviceQty2
  const deflator = (nominalGDP2 / realGDP2) * 100
  const nominalGrowth = ((nominalGDP2 - gdpY1) / gdpY1) * 100
  const realGrowth = ((realGDP2 - gdpY1) / gdpY1) * 100
  const inflationRate = deflator - 100

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Real vs. Nominal GDP and the GDP Deflator</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Year 1 is the fixed base year. Adjust Year 2&rsquo;s prices and quantities to separate real output growth from pure price inflation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">${gdpY1.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Year 1 GDP (base year — nominal = real)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{deflator.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Year 2 GDP deflator (Year 1 = 100)</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">${nominalGDP2.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Year 2 Nominal GDP (Year 2 P × Year 2 Q)</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-lg font-black text-green-500">${realGDP2.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Year 2 Real GDP (Year 1 P × Year 2 Q)</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{nominalGrowth >= 0 ? '+' : ''}{nominalGrowth.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Nominal GDP growth</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">{realGrowth >= 0 ? '+' : ''}{realGrowth.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Real GDP growth</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-red-500">{inflationRate >= 0 ? '+' : ''}{inflationRate.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Inflation rate (deflator − 100)</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Widgets — Year 2 price: ${widgetPrice2}</label>
            <input type="range" min={8} max={15} step={0.5} value={widgetPrice2} onChange={(e) => setWidgetPrice2(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Widgets Year 2 price" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Widgets — Year 2 quantity: {widgetQty2}</label>
            <input type="range" min={80} max={150} step={1} value={widgetQty2} onChange={(e) => setWidgetQty2(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Widgets Year 2 quantity" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Services — Year 2 price: ${servicePrice2}</label>
            <input type="range" min={15} max={30} step={0.5} value={servicePrice2} onChange={(e) => setServicePrice2(Number(e.target.value))} className="w-full accent-green-500" aria-label="Services Year 2 price" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Services — Year 2 quantity: {serviceQty2}</label>
            <input type="range" min={40} max={90} step={1} value={serviceQty2} onChange={(e) => setServiceQty2(Number(e.target.value))} className="w-full accent-green-500" aria-label="Services Year 2 quantity" />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Nominal GDP growth mixes together two things: more stuff being produced (real growth) and prices simply rising (inflation). Real GDP holds prices fixed at Year 1 levels, so its growth rate isolates the change in actual output.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── The Money Multiplier ────────────────────────────────────────────────── */
// widget key: 'money-multiplier'
export function MoneyMultiplier() {
  const [rr, setRr] = useState(20) // required reserve ratio, %
  const [d0, setD0] = useState(1000) // initial deposit, $

  const rrFrac = rr / 100
  const multiplier = 1 / rrFrac
  const totalMoneyCreation = d0 * multiplier

  const rounds: { round: number; deposit: number; reserves: number; loaned: number }[] = []
  let deposit = d0
  for (let i = 1; i <= 5; i++) {
    const reserves = deposit * rrFrac
    const loaned = deposit - reserves
    rounds.push({ round: i, deposit, reserves, loaned })
    deposit = loaned
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Money Multiplier</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            An initial deposit gets re-lent and re-deposited across the banking system. Adjust the required reserve ratio and initial deposit to see how much money the system can theoretically create.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">${d0.toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Initial deposit (D₀)</div>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">{multiplier.toFixed(2)}×</div>
            <div className="text-xs text-[var(--muted-fg)]">Money multiplier (1 / rr)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">${totalMoneyCreation.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            <div className="text-xs text-[var(--muted-fg)]">Total money creation</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Required reserve ratio (rr): {rr}%</label>
            <input type="range" min={5} max={50} step={1} value={rr} onChange={(e) => setRr(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Required reserve ratio" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Initial deposit (D₀): ${d0.toLocaleString()}</label>
            <input type="range" min={100} max={10000} step={100} value={d0} onChange={(e) => setD0(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Initial deposit amount" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-[var(--muted-fg)] text-xs">
                <th className="p-2">Round</th>
                <th className="p-2">New deposit</th>
                <th className="p-2">Reserves held (rr)</th>
                <th className="p-2">Loaned out (1 − rr)</th>
              </tr>
            </thead>
            <tbody>
              {rounds.map((r) => (
                <tr key={r.round} className="border-t border-[var(--border)]">
                  <td className="p-2 font-semibold text-[var(--fg)]">{r.round}</td>
                  <td className="p-2 text-[var(--fg)]">${r.deposit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                  <td className="p-2 text-[var(--muted-fg)]">${r.reserves.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                  <td className="p-2 text-green-500 font-semibold">${r.loaned.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[var(--muted-fg)]">
          ...continuing indefinitely, total money created converges to D₀ / rr = ${totalMoneyCreation.toLocaleString(undefined, { maximumFractionDigits: 0 })}.
        </p>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          In reality, banks hold excess reserves and some cash leaks out of the banking system (currency drain), so the real-world multiplier is smaller than the simple 1/rr formula — this is the theoretical maximum, assuming no leakage and no excess reserves.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── The Loanable Funds Market ────────────────────────────────────────────── */
// widget key: 'loanable-funds-market'
export function LoanableFundsMarket() {
  const [deficit, setDeficit] = useState(0) // government budget deficit, $0-8

  // Supply: r = 1 + 0.4Q  |  Baseline demand (investment only): r = 12 - 0.3Q
  const SUPPLY_INT = 1, SUPPLY_SLOPE = 0.4
  const DEMAND_INT = 12, DEMAND_SLOPE = -0.3

  // Baseline equilibrium (deficit = 0)
  const q0 = (DEMAND_INT - SUPPLY_INT) / (SUPPLY_SLOPE - DEMAND_SLOPE)
  const r0 = SUPPLY_INT + SUPPLY_SLOPE * q0

  // Current equilibrium — total demand (private investment + government borrowing) shifts right by `deficit`
  const currentDemandInt = DEMAND_INT + deficit
  const qCurrent = (currentDemandInt - SUPPLY_INT) / (SUPPLY_SLOPE - DEMAND_SLOPE)
  const rCurrent = SUPPLY_INT + SUPPLY_SLOPE * qCurrent

  // Private investment quantity at the new, higher interest rate — read off the ORIGINAL (unshifted) investment demand curve
  const privateInvestmentNow = (DEMAND_INT - rCurrent) / -DEMAND_SLOPE
  const crowdingOut = q0 - privateInvestmentNow

  const data = Array.from({ length: 41 }, (_, i) => {
    const q = i
    return {
      q,
      supply: SUPPLY_INT + SUPPLY_SLOPE * q,
      baselineDemand: Math.max(0, DEMAND_INT + DEMAND_SLOPE * q),
      currentDemand: Math.max(0, currentDemandInt + DEMAND_SLOPE * q),
    }
  })

  const baselineMarker = [{ q: +q0.toFixed(2), r: +r0.toFixed(2) }]
  const currentMarker = [{ q: +qCurrent.toFixed(2), r: +rCurrent.toFixed(2) }]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Loanable Funds Market</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Savings supply and investment demand for loanable funds determine the equilibrium real interest rate. Increase the government budget deficit to see how it crowds out private investment.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q" type="number" domain={[0, 40]}
              label={{ value: 'Quantity of loanable funds (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 22]}
              label={{ value: 'Real interest rate (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <Line data={data} type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply (savings)" />
            <Line data={data} type="monotone" dataKey="baselineDemand" stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Demand — no deficit" />
            <Line data={data} type="monotone" dataKey="currentDemand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand — with deficit" />
            <Line
              data={baselineMarker} type="monotone" dataKey="r"
              stroke="var(--border)" strokeWidth={0}
              dot={{ r: 6, fill: 'var(--card-bg)', strokeWidth: 2, stroke: 'var(--muted-fg)' }}
              name="Baseline equilibrium"
            />
            <Line
              data={currentMarker} type="monotone" dataKey="r"
              stroke="var(--accent)" strokeWidth={0}
              dot={{ r: 7, fill: 'var(--accent)', strokeWidth: 2, stroke: 'var(--card-bg)' }}
              name="Current equilibrium"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{rCurrent.toFixed(2)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium real interest rate (r*)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{qCurrent.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium quantity of funds (Q*)</div>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
            <div className="text-lg font-black text-red-500">{crowdingOut.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Private investment crowded out</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">Government budget deficit: ${deficit.toFixed(1)}</label>
          <input type="range" min={0} max={8} step={0.5} value={deficit} onChange={(e) => setDeficit(Number(e.target.value))} className="w-full accent-red-500" aria-label="Government budget deficit" />
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          A larger budget deficit shifts demand for loanable funds right, raising the real interest rate and crowding out some private investment — this is the crowding-out effect.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── The Phillips Curve (Short-Run and Long-Run) ─────────────────────────── */
// widget key: 'phillips-curve'
export function PhillipsCurve() {
  const U_NATURAL = 5

  const [expectedInflation, setExpectedInflation] = useState(3) // πe, %
  const [unemployment, setUnemployment] = useState(5) // U, %

  const srpc = (u: number) => expectedInflation - 0.5 * (u - U_NATURAL)
  const currentInflation = srpc(unemployment)

  const data = Array.from({ length: 33 }, (_, i) => {
    const u = 2 + i * 0.25
    return { u: +u.toFixed(2), pi: +srpc(u).toFixed(2) }
  })

  const currentMarker = [{ u: unemployment, pi: +currentInflation.toFixed(2) }]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Phillips Curve</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            In the short run, unemployment and inflation trade off along the SRPC. In the long run, the economy settles at the natural rate of unemployment regardless of inflation.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="u" type="number" domain={[2, 10]}
              label={{ value: 'Unemployment rate (%)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[-2, 10]}
              label={{ value: 'Inflation rate (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={U_NATURAL} stroke="#a855f7" strokeWidth={2.5} label={{ value: 'LRPC (U = Uₙ)', fill: '#a855f7', fontSize: 11, position: 'top' }} />
            <Line data={data} type="monotone" dataKey="pi" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="SRPC" />
            <Line
              data={currentMarker} type="monotone" dataKey="pi"
              stroke="var(--accent)" strokeWidth={0}
              dot={{ r: 7, fill: 'var(--accent)', strokeWidth: 2, stroke: 'var(--card-bg)' }}
              name="Current point"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{unemployment.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Unemployment (U)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{currentInflation.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Inflation (π)</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Expected inflation (πₑ): {expectedInflation.toFixed(1)}%</label>
            <input type="range" min={0} max={8} step={0.5} value={expectedInflation} onChange={(e) => setExpectedInflation(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Expected inflation rate — shifts the SRPC" />
            <p className="text-xs text-[var(--muted-fg)]">Shifts the entire SRPC up or down.</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Actual unemployment (U): {unemployment.toFixed(1)}%</label>
            <input type="range" min={2} max={10} step={0.25} value={unemployment} onChange={(e) => setUnemployment(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Actual unemployment rate — moves along the SRPC" />
            <p className="text-xs text-[var(--muted-fg)]">Moves along the current SRPC.</p>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          In the short run, policymakers can trade off lower unemployment for higher inflation by moving along the SRPC. But if actual inflation persistently differs from what people expected, expectations adjust (πₑ catches up), shifting the SRPC — in the long run, unemployment returns to Uₙ regardless of the inflation rate (money is neutral), which is why the LRPC is vertical.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Long-Run Economic Growth and Productivity ───────────────────────────── */
// widget key: 'growth-productivity'
export function GrowthProductivity() {
  const BASELINE_GROWTH = 2 // %

  const [growthRate, setGrowthRate] = useState(4) // %
  const [mix, setMix] = useState(50) // % of growth from capital deepening (0-100)

  const doublingTime = 70 / growthRate

  const data = Array.from({ length: 51 }, (_, year) => ({
    year,
    chosen: +(100 * Math.pow(1 + growthRate / 100, year)).toFixed(1),
    baseline: +(100 * Math.pow(1 + BASELINE_GROWTH / 100, year)).toFixed(1),
  }))

  const chosenIndexAt50 = data[50].chosen
  const baselineIndexAt50 = data[50].baseline

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Long-Run Economic Growth and Productivity</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Small differences in the annual growth rate of GDP per capita compound into enormous differences in living standards over decades.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-lg font-black text-[var(--accent)]">
            At a growth rate of {growthRate.toFixed(2)}% per year, GDP per capita doubles in approximately {doublingTime.toFixed(1)} years.
          </div>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="year"
              label={{ value: 'Years from today', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'GDP per capita (index = 100 today)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <Line type="monotone" dataKey="baseline" stroke="var(--border)" strokeWidth={2} strokeDasharray="5 5" dot={false} name={`Reference (${BASELINE_GROWTH}% growth)`} />
            <Line type="monotone" dataKey="chosen" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Chosen growth rate" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{baselineIndexAt50.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Index after 50 years at {BASELINE_GROWTH}%</div>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">{chosenIndexAt50.toFixed(0)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Index after 50 years at {growthRate.toFixed(2)}%</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">Annual GDP per capita growth rate: {growthRate.toFixed(2)}%</label>
          <input type="range" min={0.5} max={6} step={0.25} value={growthRate} onChange={(e) => setGrowthRate(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Annual GDP per capita growth rate" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Source of growth: {mix}% capital deepening / {100 - mix}% technology (TFP)
          </label>
          <input type="range" min={0} max={100} step={5} value={mix} onChange={(e) => setMix(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Mix of growth from capital deepening versus technology" />
          <div className="flex h-6 w-full overflow-hidden rounded-full">
            <div className="flex items-center justify-center text-[10px] font-semibold text-white" style={{ width: `${mix}%`, background: '#f59e0b' }}>
              {mix >= 15 ? 'Capital deepening' : ''}
            </div>
            <div className="flex items-center justify-center text-[10px] font-semibold text-white" style={{ width: `${100 - mix}%`, background: '#22c55e' }}>
              {100 - mix >= 15 ? 'Technology (TFP)' : ''}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Growth from capital deepening alone runs into diminishing returns; sustained long-run growth requires productivity (technology) improvements.
        </div>
      </CardContent>
    </Card>
  )
}
