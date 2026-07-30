'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceDot,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── The Marketing Mix (4Ps) — Marketing Mix Simulator ───────────────────── */
// widget key: 'marketing-mix-simulator'
const BASE_POTENTIAL = 30000
const REFERENCE_PRICE = 5

export function MarketingMixSimulator() {
  const [price, setPrice] = useState(5)               // $2 - $8
  const [promotion, setPromotion] = useState(25000)    // $0 - $50,000/mo
  const [outlets, setOutlets] = useState(500)          // 10 - 2,000
  const [productInvestment, setProductInvestment] = useState(10000) // $0 - $20,000

  const priceEffect = Math.pow(REFERENCE_PRICE / price, 1.2)
  const promotionEffect = 1 + 0.3 * Math.log(1 + promotion / 10000)
  const placeEffect = Math.min(1, outlets / 500)
  const productEffect = 1 + 0.15 * (productInvestment / 20000)

  const monthlySales = BASE_POTENTIAL * priceEffect * promotionEffect * placeEffect * productEffect
  const revenue = price * monthlySales
  const marketingCost = promotion + productInvestment
  const contribution = revenue - marketingCost

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Marketing Mix Simulator (4Ps)</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            You run a small snack food brand. Adjust each of the 4 Ps — Price, Promotion, Place, and Product — to see how monthly unit sales, revenue, and marketing contribution respond.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">${price.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Price</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">${promotion.toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Promotion / mo</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-amber-500">{outlets.toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Retail outlets</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-purple-500">${productInvestment.toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Product investment</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Price: ${price.toFixed(2)} per unit</label>
            <input
              type="range" min={2} max={8} step={0.25} value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Adjust retail price per unit"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Promotion spend: ${promotion.toLocaleString()}/mo</label>
            <input
              type="range" min={0} max={50000} step={1000} value={promotion}
              onChange={(e) => setPromotion(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Adjust monthly promotion spend"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Place — retail outlets: {outlets.toLocaleString()}</label>
            <input
              type="range" min={10} max={2000} step={10} value={outlets}
              onChange={(e) => setOutlets(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="Adjust number of retail outlets carrying the product"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Product quality investment: ${productInvestment.toLocaleString()}</label>
            <input
              type="range" min={0} max={20000} step={500} value={productInvestment}
              onChange={(e) => setProductInvestment(Number(e.target.value))}
              className="w-full accent-purple-500"
              aria-label="Adjust product quality and R&D investment"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{Math.round(monthlySales).toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Monthly unit sales</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">${Math.round(revenue).toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Monthly revenue</div>
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3',
            contribution >= 0 ? 'border-[var(--accent)]/30 bg-[var(--accent)]/10' : 'border-red-500/30 bg-red-500/10'
          )}>
            <div className={cn('text-lg font-black', contribution >= 0 ? 'text-[var(--accent)]' : 'text-red-500')}>
              ${Math.round(contribution).toLocaleString()}
            </div>
            <div className="text-xs text-[var(--muted-fg)]">Monthly marketing contribution</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Marketing contribution = Revenue − (Promotion + Product investment). It is not full profit, since production costs and the fixed costs of building out distribution (Place) aren&rsquo;t modeled here. Raising price without also raising product-quality investment can hurt sales more than it helps revenue per unit — the 4 Ps work together, not independently.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Digital &amp; Social Media Marketing — ROAS Calculator ───────────────────── */
// widget key: 'roas-calculator'
interface Campaign {
  name: string
  spend: number
  revenue: number
  color: string
}

export function ROASCalculator() {
  const [instaSpend, setInstaSpend] = useState(10000)
  const [instaRevenue, setInstaRevenue] = useState(40000)
  const [googleSpend, setGoogleSpend] = useState(15000)
  const [googleRevenue, setGoogleRevenue] = useState(60000)
  const [influencerSpend, setInfluencerSpend] = useState(5000)
  const [influencerRevenue, setInfluencerRevenue] = useState(30000)

  const campaigns: Campaign[] = [
    { name: 'Instagram Campaign', spend: instaSpend, revenue: instaRevenue, color: '#ec4899' },
    { name: 'Google Ads Campaign', spend: googleSpend, revenue: googleRevenue, color: '#3b82f6' },
    { name: 'Influencer Campaign', spend: influencerSpend, revenue: influencerRevenue, color: '#f59e0b' },
  ]

  const totalBudget = campaigns.reduce((sum, c) => sum + c.spend, 0)
  const totalRevenue = campaigns.reduce((sum, c) => sum + c.revenue, 0)

  const ranked = [...campaigns]
    .map((c) => ({ ...c, roas: c.revenue / c.spend, budgetShare: c.spend / totalBudget * 100, revenueShare: c.revenue / totalRevenue * 100 }))
    .sort((a, b) => b.roas - a.roas)

  const best = ranked[0]
  const potentialRevenue = totalBudget * best.roas
  const improvement = potentialRevenue - totalRevenue

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Digital &amp; Social Media Marketing — ROAS Calculator</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust ad spend and revenue generated for three campaigns to compare Return on Ad Spend (ROAS = Revenue ÷ Spend).
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-3 rounded-xl border border-[var(--border)] p-4">
            <div className="font-semibold text-sm" style={{ color: '#ec4899' }}>Instagram Campaign</div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">Ad spend: ${instaSpend.toLocaleString()}</label>
              <input type="range" min={1000} max={30000} step={500} value={instaSpend} onChange={(e) => setInstaSpend(Number(e.target.value))} className="w-full accent-pink-500" aria-label="Instagram campaign ad spend" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">Revenue generated: ${instaRevenue.toLocaleString()}</label>
              <input type="range" min={1000} max={150000} step={1000} value={instaRevenue} onChange={(e) => setInstaRevenue(Number(e.target.value))} className="w-full accent-pink-500" aria-label="Instagram campaign revenue generated" />
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-[var(--border)] p-4">
            <div className="font-semibold text-sm" style={{ color: '#3b82f6' }}>Google Ads Campaign</div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">Ad spend: ${googleSpend.toLocaleString()}</label>
              <input type="range" min={1000} max={30000} step={500} value={googleSpend} onChange={(e) => setGoogleSpend(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Google Ads campaign ad spend" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">Revenue generated: ${googleRevenue.toLocaleString()}</label>
              <input type="range" min={1000} max={150000} step={1000} value={googleRevenue} onChange={(e) => setGoogleRevenue(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Google Ads campaign revenue generated" />
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-[var(--border)] p-4">
            <div className="font-semibold text-sm" style={{ color: '#f59e0b' }}>Influencer Campaign</div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">Ad spend: ${influencerSpend.toLocaleString()}</label>
              <input type="range" min={1000} max={30000} step={500} value={influencerSpend} onChange={(e) => setInfluencerSpend(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Influencer campaign ad spend" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">Revenue generated: ${influencerRevenue.toLocaleString()}</label>
              <input type="range" min={1000} max={150000} step={1000} value={influencerRevenue} onChange={(e) => setInfluencerRevenue(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Influencer campaign revenue generated" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Ranked by ROAS (best to worst)</div>
          {ranked.map((c, i) => (
            <div key={c.name} className="flex items-center justify-between rounded-xl border border-[var(--border)] p-3">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                <span className="text-sm font-semibold text-[var(--fg)]">{i + 1}. {c.name}</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-black" style={{ color: c.color }}>{c.roas.toFixed(2)}x</div>
                <div className="text-[10px] text-[var(--muted-fg)]">{c.budgetShare.toFixed(0)}% of budget · {c.revenueShare.toFixed(0)}% of revenue</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">Reallocate budget exercise</div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-sm font-black text-[var(--fg)]">${totalBudget.toLocaleString()}</div>
              <div className="text-[10px] text-[var(--muted-fg)]">Total budget (fixed)</div>
            </div>
            <div>
              <div className="text-sm font-black text-[var(--fg)]">${totalRevenue.toLocaleString()}</div>
              <div className="text-[10px] text-[var(--muted-fg)]">Current total revenue</div>
            </div>
            <div>
              <div className="text-sm font-black text-green-500">${Math.round(potentialRevenue).toLocaleString()}</div>
              <div className="text-[10px] text-[var(--muted-fg)]">If all spent on {best.name.split(' ')[0]} at current ROAS</div>
            </div>
          </div>
          <div className="text-center text-sm font-semibold text-green-500">
            Potential improvement: {improvement >= 0 ? '+' : ''}${Math.round(improvement).toLocaleString()}
          </div>
          <p className="text-xs text-[var(--muted-fg)]">
            This assumes ROAS stays constant as spend increases, which is rarely fully true in practice — most channels see diminishing ROAS as you increase spend and saturate the audience. Use this as a directional guide, not a literal prediction.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Reading Financial Statements — Ratio Analysis ────────────────────────── */
// widget key: 'financial-statement-ratios'
function ratioLabel(kind: 'current' | 'debt', value: number): { text: string; color: string } {
  if (kind === 'current') {
    if (value < 1) return { text: 'Liquidity concern', color: 'text-red-500' }
    if (value <= 2) return { text: 'Healthy', color: 'text-green-500' }
    return { text: 'Possibly holding excess idle assets', color: 'text-amber-500' }
  }
  if (value < 0.4) return { text: 'Conservative', color: 'text-green-500' }
  if (value <= 0.6) return { text: 'Moderate leverage', color: 'text-amber-500' }
  return { text: 'Highly leveraged', color: 'text-red-500' }
}

export function FinancialStatementRatios() {
  const [revenue, setRevenue] = useState(500000)
  const [cogs, setCogs] = useState(300000)
  const [opex, setOpex] = useState(100000)
  const [currentAssets, setCurrentAssets] = useState(300000)
  const [currentLiabilities, setCurrentLiabilities] = useState(150000)
  const [totalAssets, setTotalAssets] = useState(800000)
  const [totalLiabilities, setTotalLiabilities] = useState(400000)

  const grossMargin = (revenue - cogs) / revenue * 100
  const operatingMargin = (revenue - cogs - opex) / revenue * 100
  const currentRatio = currentAssets / currentLiabilities
  const debtToAssets = totalLiabilities / totalAssets

  const currentLabel = ratioLabel('current', currentRatio)
  const debtLabel = ratioLabel('debt', debtToAssets)

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Reading Financial Statements — Ratio Analysis</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust the line items of a simplified income statement and balance sheet to see how the key financial ratios respond.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-[var(--border)] p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted-fg)]">Income statement</div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Revenue: ${revenue.toLocaleString()}</label>
              <input type="range" min={100000} max={2000000} step={10000} value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust revenue" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Cost of goods sold: ${cogs.toLocaleString()}</label>
              <input type="range" min={50000} max={1500000} step={10000} value={cogs} onChange={(e) => setCogs(Number(e.target.value))} className="w-full accent-red-500" aria-label="Adjust cost of goods sold" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Operating expenses: ${opex.toLocaleString()}</label>
              <input type="range" min={20000} max={500000} step={5000} value={opex} onChange={(e) => setOpex(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Adjust operating expenses" />
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-[var(--border)] p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted-fg)]">Balance sheet</div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Current assets: ${currentAssets.toLocaleString()}</label>
              <input type="range" min={50000} max={1000000} step={10000} value={currentAssets} onChange={(e) => setCurrentAssets(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust current assets" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Current liabilities: ${currentLiabilities.toLocaleString()}</label>
              <input type="range" min={20000} max={500000} step={10000} value={currentLiabilities} onChange={(e) => setCurrentLiabilities(Number(e.target.value))} className="w-full accent-red-500" aria-label="Adjust current liabilities" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Total assets: ${totalAssets.toLocaleString()}</label>
              <input type="range" min={200000} max={3000000} step={10000} value={totalAssets} onChange={(e) => setTotalAssets(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust total assets" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--fg)]">Total liabilities: ${totalLiabilities.toLocaleString()}</label>
              <input type="range" min={100000} max={2000000} step={10000} value={totalLiabilities} onChange={(e) => setTotalLiabilities(Number(e.target.value))} className="w-full accent-red-500" aria-label="Adjust total liabilities" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-[var(--border)] p-3 text-center">
            <div className="text-lg font-black text-blue-500">{grossMargin.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Gross margin</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3 text-center">
            <div className={cn('text-lg font-black', operatingMargin >= 0 ? 'text-green-500' : 'text-red-500')}>{operatingMargin.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Operating margin</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3 text-center">
            <div className={cn('text-lg font-black', currentLabel.color)}>{currentRatio.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Current ratio</div>
            <div className={cn('text-[10px] mt-0.5', currentLabel.color)}>{currentLabel.text}</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3 text-center">
            <div className={cn('text-lg font-black', debtLabel.color)}>{debtToAssets.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Debt-to-assets</div>
            <div className={cn('text-[10px] mt-0.5', debtLabel.color)}>{debtLabel.text}</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          No single ratio tells the whole story — a business can have strong margins but poor liquidity (cash tied up in inventory/receivables), or low leverage but weak profitability. DECA judges expect competitors to interpret several ratios together to form a complete picture of financial health.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Time Value of Money ──────────────────────────────────────────────────── */
// widget key: 'time-value-of-money'
export function TimeValueOfMoney() {
  const [pv, setPv] = useState(10000)
  const [rate, setRate] = useState(8)
  const [years, setYears] = useState(10)
  const [targetFV, setTargetFV] = useState(50000)

  const r = rate / 100
  const fv = pv * Math.pow(1 + r, years)
  const requiredPV = targetFV / Math.pow(1 + r, years)
  const rule72 = 72 / rate
  const exactDouble = Math.log(2) / Math.log(1 + r)

  const data = Array.from({ length: years + 1 }, (_, year) => ({
    year,
    value: +(pv * Math.pow(1 + r, year)).toFixed(2),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Time Value of Money</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Compound interest grows an investment forward in time; discounting works backward to find how much you&rsquo;d need today to hit a future goal.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="year"
              label={{ value: 'Year', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Value ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
              tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
              formatter={(v: number) => [`$${v.toLocaleString()}`, 'Value']}
              labelFormatter={(v) => `Year ${v}`}
            />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Investment value" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Present value / initial investment: ${pv.toLocaleString()}</label>
            <input type="range" min={1000} max={100000} step={1000} value={pv} onChange={(e) => setPv(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust present value or initial investment amount" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Annual interest / discount rate: {rate}%</label>
            <input type="range" min={1} max={15} step={0.5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust annual interest or discount rate" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Number of years: {years}</label>
            <input type="range" min={1} max={30} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Adjust number of years" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Target future value goal: ${targetFV.toLocaleString()}</label>
            <input type="range" min={5000} max={500000} step={5000} value={targetFV} onChange={(e) => setTargetFV(Number(e.target.value))} className="w-full accent-purple-500" aria-label="Adjust target future value goal" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">${Math.round(fv).toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Future value of ${pv.toLocaleString()} after {years} years</div>
          </div>
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-3">
            <div className="text-lg font-black text-purple-500">${Math.round(requiredPV).toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Required present value to reach ${targetFV.toLocaleString()}</div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2">Rule of 72 vs. exact doubling time</div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <div className="text-lg font-black text-[var(--fg)]">{rule72.toFixed(1)} yrs</div>
              <div className="text-xs text-[var(--muted-fg)]">Rule of 72 estimate (72 ÷ rate)</div>
            </div>
            <div>
              <div className="text-lg font-black text-[var(--fg)]">{exactDouble.toFixed(2)} yrs</div>
              <div className="text-xs text-[var(--muted-fg)]">Exact doubling time (ln 2 ÷ ln(1+rate))</div>
            </div>
          </div>
          <p className="text-xs text-[var(--muted-fg)] mt-2">
            The Rule of 72 is a quick mental-math shortcut — notice how close it stays to the exact figure across a wide range of interest rates.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Investment &amp; Risk — Portfolio Diversification ────────────────────────── */
// widget key: 'investment-portfolio-risk'
const STOCKS_RETURN = 9
const STOCKS_SD = 18
const BONDS_RETURN = 3
const BONDS_SD = 5

function portfolioStats(stockPct: number, correlation: number) {
  const wS = stockPct / 100
  const wB = 1 - wS
  const expectedReturn = wS * STOCKS_RETURN + wB * BONDS_RETURN
  const variance =
    wS * wS * STOCKS_SD * STOCKS_SD +
    wB * wB * BONDS_SD * BONDS_SD +
    2 * wS * wB * correlation * STOCKS_SD * BONDS_SD
  const risk = Math.sqrt(Math.max(0, variance))
  return { expectedReturn, risk }
}

export function InvestmentPortfolioRisk() {
  const [stockAllocation, setStockAllocation] = useState(60)
  const [correlation, setCorrelation] = useState(0)

  const { expectedReturn, risk } = portfolioStats(stockAllocation, correlation)

  const frontier = Array.from({ length: 11 }, (_, i) => {
    const pct = i * 10
    const { expectedReturn: ret, risk: rk } = portfolioStats(pct, correlation)
    return { pct, return: +ret.toFixed(2), risk: +rk.toFixed(2) }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Investment &amp; Risk — Portfolio Diversification</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Split a portfolio between Stocks (expected return 9%, risk 18%) and Bonds (expected return 3%, risk 5%), and see how correlation between them affects diversification.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={frontier} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="risk" type="number" domain={[0, 20]}
              label={{ value: 'Risk — standard deviation (%)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 10]}
              label={{ value: 'Expected return (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
              formatter={(v: number, name: string) => [`${v}%`, name === 'return' ? 'Expected return' : name]}
              labelFormatter={(v) => `Risk: ${v}%`}
            />
            <Line type="monotone" dataKey="return" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Efficient frontier" />
            <ReferenceDot x={+risk.toFixed(2)} y={+expectedReturn.toFixed(2)} r={6} fill="var(--accent)" stroke="var(--card-bg)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">{expectedReturn.toFixed(2)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Portfolio expected return</div>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
            <div className="text-lg font-black text-red-500">{risk.toFixed(2)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Portfolio risk (standard deviation)</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Allocation to Stocks: {stockAllocation}% (Bonds: {100 - stockAllocation}%)</label>
            <input
              type="range" min={0} max={100} step={5} value={stockAllocation}
              onChange={(e) => setStockAllocation(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Adjust portfolio allocation to stocks"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Correlation between stocks and bonds: {correlation.toFixed(2)}</label>
            <input
              type="range" min={-0.5} max={0.5} step={0.05} value={correlation}
              onChange={(e) => setCorrelation(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="Adjust correlation between stock and bond returns"
            />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Because stocks and bonds aren&rsquo;t perfectly correlated, combining them typically reduces portfolio risk below what a simple weighted-average of their individual risks would suggest — this is diversification. Try lowering the correlation slider toward −0.5 and notice the frontier curves further left (lower risk for the same return) — the diversification benefit is larger when assets move more independently (or oppositely) of each other.
        </div>
      </CardContent>
    </Card>
  )
}
