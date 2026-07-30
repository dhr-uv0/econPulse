'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

/* ── Unemployment Types ──────────────────────────────────────────────────── */
// widget key: 'unemployment-types'
export function UnemploymentTypes() {
  const POPULATION = 1000
  const [employed, setEmployed] = useState(600)
  const [unemployed, setUnemployed] = useState(50)
  const [unemploymentType, setUnemploymentType] = useState<'frictional' | 'structural' | 'cyclical' | 'seasonal'>('frictional')

  const handleEmployedChange = (value: number) => {
    setEmployed(Math.min(value, POPULATION - unemployed))
  }

  const handleUnemployedChange = (value: number) => {
    setUnemployed(Math.min(value, POPULATION - employed))
  }

  const laborForce = employed + unemployed
  const notInLaborForce = POPULATION - laborForce
  const unemploymentRate = laborForce > 0 ? (unemployed / laborForce) * 100 : 0
  const lfpr = (laborForce / POPULATION) * 100

  const typeInfo = {
    frictional: {
      label: 'Frictional',
      color: '#3b82f6',
      definition: 'Short-term unemployment from workers voluntarily between jobs or searching for a better match.',
      example: 'A college graduate spends 6 weeks job-hunting before accepting an offer.',
      policy: 'Improve job-matching information (job boards, career centres) — this type is normal and even healthy, not really "fixable."',
    },
    structural: {
      label: 'Structural',
      color: '#f59e0b',
      definition: 'Mismatch between workers’ skills/location and available jobs, often from technological change or industry decline.',
      example: 'Coal miners whose skills don’t transfer after mine closures.',
      policy: 'Retraining programs, relocation assistance, education investment.',
    },
    cyclical: {
      label: 'Cyclical',
      color: '#ef4444',
      definition: 'Unemployment caused by a downturn in the business cycle (deficient aggregate demand).',
      example: 'Mass layoffs during a recession.',
      policy: 'Expansionary fiscal/monetary policy to boost aggregate demand.',
    },
    seasonal: {
      label: 'Seasonal',
      color: '#22c55e',
      definition: 'Predictable unemployment tied to the calendar or season.',
      example: 'Ski instructors unemployed in summer, agricultural workers between harvests.',
      policy: 'Minimal — usually anticipated and planned around, sometimes addressed with seasonal unemployment insurance.',
    },
  }

  const current = typeInfo[unemploymentType]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Unemployment: Types and Measurement</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust employment and unemployment to see how the unemployment rate and labour force participation rate are calculated, then explore the four types of unemployment.
          </p>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-[var(--border)] p-3 text-center">
            <div className="text-lg font-black text-green-500">{employed}</div>
            <div className="text-xs text-[var(--muted-fg)]">Employed</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3 text-center">
            <div className="text-lg font-black text-red-500">{unemployed}</div>
            <div className="text-xs text-[var(--muted-fg)]">Unemployed</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{unemploymentRate.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Unemployment Rate</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{lfpr.toFixed(1)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">LFPR</div>
          </div>
        </div>

        {/* Stacked bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-[var(--muted-fg)]">
            <span>Population breakdown (of {POPULATION})</span>
            <span>Labor force: {laborForce}</span>
          </div>
          <div className="h-6 rounded-full overflow-hidden bg-[var(--muted)] flex">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${(employed / POPULATION) * 100}%` }}
              title="Employed"
            />
            <div
              className="h-full bg-red-500 transition-all duration-300"
              style={{ width: `${(unemployed / POPULATION) * 100}%` }}
              title="Unemployed"
            />
            <div
              className="h-full bg-[var(--border)] transition-all duration-300"
              style={{ width: `${(notInLaborForce / POPULATION) * 100}%` }}
              title="Not in labor force"
            />
          </div>
          <div className="flex gap-4 text-xs flex-wrap">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-4 rounded-full bg-green-500" />
              <span className="text-[var(--muted-fg)]">Employed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-4 rounded-full bg-red-500" />
              <span className="text-[var(--muted-fg)]">Unemployed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-4 rounded-full bg-[var(--border)]" />
              <span className="text-[var(--muted-fg)]">Not in labor force ({notInLaborForce})</span>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">
              Employed: {employed}
            </label>
            <input
              type="range" min={0} max={POPULATION} value={employed}
              onChange={(e) => handleEmployedChange(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Adjust number employed"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-red-500">
              Unemployed: {unemployed}
            </label>
            <input
              type="range" min={0} max={POPULATION} value={unemployed}
              onChange={(e) => handleUnemployedChange(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="Adjust number unemployed"
            />
          </div>
        </div>

        {/* Type selector */}
        <div className="space-y-3">
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(typeInfo) as Array<keyof typeof typeInfo>).map((key) => {
              const info = typeInfo[key]
              const active = unemploymentType === key
              return (
                <button
                  key={key}
                  onClick={() => setUnemploymentType(key)}
                  className={cn(
                    'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    active ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                  style={active ? { background: info.color, borderColor: info.color } : {}}
                >
                  {info.label}
                </button>
              )
            })}
          </div>

          <div className="rounded-xl border border-[var(--border)] p-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: current.color }}>
              {current.label} Unemployment
            </div>
            <p className="text-sm text-[var(--fg)]">{current.definition}</p>
            <p className="text-sm text-[var(--muted-fg)]"><span className="font-semibold text-[var(--fg)]">Example: </span>{current.example}</p>
            <p className="text-sm text-[var(--muted-fg)]"><span className="font-semibold text-[var(--fg)]">Policy response: </span>{current.policy}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── CPI Calculator ──────────────────────────────────────────────────────── */
// widget key: 'cpi-calculator'
interface BasketItem {
  key: string
  label: string
  basePrice: number
  quantity: number
  min: number
  max: number
  step: number
}

const BASKET: BasketItem[] = [
  { key: 'bread', label: 'Bread', basePrice: 3.00, quantity: 20, min: 2, max: 6, step: 0.1 },
  { key: 'rent', label: 'Rent', basePrice: 1200, quantity: 1, min: 900, max: 2000, step: 10 },
  { key: 'gasoline', label: 'Gasoline', basePrice: 3.50, quantity: 50, min: 2, max: 7, step: 0.1 },
  { key: 'healthcare', label: 'Healthcare visit', basePrice: 200, quantity: 1, min: 150, max: 400, step: 5 },
]

export function CPICalculator() {
  const [prices, setPrices] = useState<Record<string, number>>(() =>
    Object.fromEntries(BASKET.map((item) => [item.key, item.basePrice]))
  )

  const setPrice = (key: string, value: number) => {
    setPrices((prev) => ({ ...prev, [key]: value }))
  }

  const baseBasketCost = BASKET.reduce((sum, item) => sum + item.basePrice * item.quantity, 0)
  const currentBasketCost = BASKET.reduce((sum, item) => sum + prices[item.key] * item.quantity, 0)
  const cpi = (currentBasketCost / baseBasketCost) * 100
  const inflationRate = cpi - 100

  const itemStats = BASKET.map((item) => {
    const pctChange = ((prices[item.key] - item.basePrice) / item.basePrice) * 100
    const weight = (item.basePrice * item.quantity) / baseBasketCost
    const contribution = weight * pctChange
    return { ...item, pctChange, contribution }
  })

  const biggestDriver = itemStats.reduce((max, item) =>
    Math.abs(item.contribution) > Math.abs(max.contribution) ? item : max
  , itemStats[0])

  const isGasolineDominant = biggestDriver.key === 'gasoline' && Math.abs(biggestDriver.contribution) > 0.5
  const changedItems = itemStats.filter((item) => Math.abs(item.pctChange) > 1)
  const broadBased = changedItems.length >= 3 &&
    itemStats.every((item) => Math.sign(item.pctChange) === Math.sign(itemStats[0].pctChange) || Math.abs(item.pctChange) < 1)

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">CPI Calculator</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust current-year prices for a fixed basket of goods to see how the Consumer Price Index and inflation rate are calculated.
          </p>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-2xl font-black text-[var(--accent)]">{cpi.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">CPI (base year = 100)</div>
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3 text-center',
            inflationRate >= 0 ? 'border-red-500/30 bg-red-500/10' : 'border-blue-500/30 bg-blue-500/10'
          )}>
            <div className={cn('text-2xl font-black', inflationRate >= 0 ? 'text-red-500' : 'text-blue-500')}>
              {inflationRate >= 0 ? '+' : ''}{inflationRate.toFixed(1)}%
            </div>
            <div className="text-xs text-[var(--muted-fg)]">Inflation Rate</div>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid gap-4 sm:grid-cols-2">
          {BASKET.map((item) => (
            <div key={item.key} className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">
                {item.label}: ${prices[item.key].toFixed(2)} <span className="text-xs text-[var(--muted-fg)] font-normal">(base ${item.basePrice.toFixed(2)}, qty {item.quantity})</span>
              </label>
              <input
                type="range" min={item.min} max={item.max} step={item.step} value={prices[item.key]}
                onChange={(e) => setPrice(item.key, Number(e.target.value))}
                className="w-full accent-[#e8c547]"
                aria-label={`Adjust current price of ${item.label}`}
              />
            </div>
          ))}
        </div>

        {/* Per-item breakdown */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-[var(--fg)]">Price change by item</div>
          {itemStats.map((item) => (
            <div key={item.key} className={cn(
              'flex items-center justify-between rounded-lg border p-2 text-sm',
              item.key === biggestDriver.key ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10' : 'border-[var(--border)]'
            )}>
              <span className="text-[var(--fg)]">
                {item.label}
                {item.key === biggestDriver.key && (
                  <span className="ml-2 text-xs font-semibold text-[var(--accent)]">largest driver</span>
                )}
              </span>
              <span className={cn('font-semibold', item.pctChange >= 0 ? 'text-red-500' : 'text-blue-500')}>
                {item.pctChange >= 0 ? '+' : ''}{item.pctChange.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>

        {/* Explanatory note */}
        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          {isGasolineDominant
            ? 'Gasoline/energy is driving most of the overall price change — this pattern looks like cost-push inflation, where a narrow supply-side shock (e.g., an oil price spike) ripples through the price level.'
            : broadBased
            ? 'Prices are rising across most items in the basket in a similar direction — this broad-based pattern looks more like demand-pull inflation, consistent with economy-wide excess demand.'
            : 'Price changes so far are mixed or small. Push the sliders further to see whether a pattern of cost-push (energy-driven) or demand-pull (broad-based) inflation emerges.'}
        </div>
      </CardContent>
    </Card>
  )
}
