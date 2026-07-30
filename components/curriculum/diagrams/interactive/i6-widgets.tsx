'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'

/* ── Comparative Advantage ───────────────────────────────────────────────── */
// widget key: 'comparative-advantage'
// Used for both "Comparative Advantage — The Case for Trade" and
// "Terms of Trade and Gains from Trade"
function computeTradeConsumption(maxCloth: number, maxWine: number, specializesCloth: boolean, tot: number) {
  if (specializesCloth) {
    const cloth = 0.5 * maxCloth
    const wine = 0.5 * maxCloth * tot
    return { cloth, wine }
  }
  const wine = 0.5 * maxWine
  const cloth = (0.5 * maxWine) / tot
  return { cloth, wine }
}

export function ComparativeAdvantage() {
  const [homeMaxCloth, setHomeMaxCloth] = useState(60)
  const [homeMaxWine, setHomeMaxWine] = useState(30)
  const [foreignMaxCloth, setForeignMaxCloth] = useState(40)
  const [foreignMaxWine, setForeignMaxWine] = useState(80)
  const [tot, setTot] = useState(1)

  const ocHomeCloth = homeMaxWine / homeMaxCloth
  const ocForeignCloth = foreignMaxWine / foreignMaxCloth

  const totLow = Math.min(ocHomeCloth, ocForeignCloth)
  const totHigh = Math.max(ocHomeCloth, ocForeignCloth)
  const totValid = totLow < totHigh && tot > totLow && tot < totHigh

  const homeHasClothCA = ocHomeCloth < ocForeignCloth
  const foreignHasClothCA = ocForeignCloth < ocHomeCloth

  const homeAutarky = { cloth: 0.5 * homeMaxCloth, wine: 0.5 * homeMaxWine }
  const foreignAutarky = { cloth: 0.5 * foreignMaxCloth, wine: 0.5 * foreignMaxWine }

  const homeTrade = totValid ? computeTradeConsumption(homeMaxCloth, homeMaxWine, homeHasClothCA, tot) : null
  const foreignTrade = totValid ? computeTradeConsumption(foreignMaxCloth, foreignMaxWine, foreignHasClothCA, tot) : null

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Comparative Advantage &amp; Gains from Trade</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Set each country&apos;s maximum output of Cloth and Wine, then choose Terms of Trade to see whether — and how much — both countries gain from specialising and trading.
          </p>
        </div>

        {/* Opportunity cost + CA summary */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-xs font-semibold text-[var(--muted-fg)] mb-1">Home&apos;s opp. cost of Cloth</div>
            <div className="text-lg font-black text-blue-500">{ocHomeCloth.toFixed(2)} Wine</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-xs font-semibold text-[var(--muted-fg)] mb-1">Foreign&apos;s opp. cost of Cloth</div>
            <div className="text-lg font-black text-green-500">{ocForeignCloth.toFixed(2)} Wine</div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center text-sm">
          {ocHomeCloth === ocForeignCloth ? (
            <span className="text-[var(--fg)]">Opportunity costs are identical — neither country has a comparative advantage, so there is no basis for mutually beneficial trade.</span>
          ) : (
            <span className="text-[var(--fg)]">
              <span className="font-bold text-blue-500">Home</span> has the comparative advantage in{' '}
              <span className="font-bold">{homeHasClothCA ? 'Cloth' : 'Wine'}</span>; {' '}
              <span className="font-bold text-green-500">Foreign</span> has the comparative advantage in{' '}
              <span className="font-bold">{foreignHasClothCA ? 'Cloth' : 'Wine'}</span>.
            </span>
          )}
        </div>

        {/* Sliders: max outputs */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Home max Cloth: {homeMaxCloth}</label>
            <input
              type="range" min={20} max={100} step={5} value={homeMaxCloth}
              onChange={(e) => setHomeMaxCloth(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Home's maximum Cloth output"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Home max Wine: {homeMaxWine}</label>
            <input
              type="range" min={20} max={100} step={5} value={homeMaxWine}
              onChange={(e) => setHomeMaxWine(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Home's maximum Wine output"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">Foreign max Cloth: {foreignMaxCloth}</label>
            <input
              type="range" min={20} max={100} step={5} value={foreignMaxCloth}
              onChange={(e) => setForeignMaxCloth(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Foreign's maximum Cloth output"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">Foreign max Wine: {foreignMaxWine}</label>
            <input
              type="range" min={20} max={100} step={5} value={foreignMaxWine}
              onChange={(e) => setForeignMaxWine(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Foreign's maximum Wine output"
            />
          </div>
        </div>

        {/* Terms of trade slider */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Terms of Trade: {tot.toFixed(2)} units of Wine per unit of Cloth
          </label>
          <input
            type="range" min={0.1} max={6} step={0.05} value={tot}
            onChange={(e) => setTot(Number(e.target.value))}
            className="w-full accent-[#e8c547]"
            aria-label="Set Terms of Trade — units of Wine per unit of Cloth"
          />
          <p className="text-xs text-[var(--muted-fg)]">
            Mutually beneficial only strictly between the two opportunity costs.
          </p>
        </div>

        {/* Result: warning or comparison table */}
        {!totValid ? (
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-500 font-semibold">
            Not mutually beneficial at this Terms of Trade — must be strictly between {totLow.toFixed(2)} and {totHigh.toFixed(2)}.
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-sm font-semibold text-[var(--fg)]">Autarky vs. With-Trade Consumption</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-[var(--muted-fg)] text-xs">
                    <th className="p-2">Country</th>
                    <th className="p-2">Autarky Cloth</th>
                    <th className="p-2">Autarky Wine</th>
                    <th className="p-2">Trade Cloth</th>
                    <th className="p-2">Trade Wine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--border)]">
                    <td className="p-2 font-semibold text-blue-500">Home</td>
                    <td className="p-2 text-[var(--fg)]">{homeAutarky.cloth.toFixed(1)}</td>
                    <td className="p-2 text-[var(--fg)]">{homeAutarky.wine.toFixed(1)}</td>
                    <td className={cn('p-2 font-bold', homeTrade!.cloth >= homeAutarky.cloth ? 'text-green-500' : 'text-red-500')}>
                      {homeTrade!.cloth.toFixed(1)}
                    </td>
                    <td className={cn('p-2 font-bold', homeTrade!.wine >= homeAutarky.wine ? 'text-green-500' : 'text-red-500')}>
                      {homeTrade!.wine.toFixed(1)}
                    </td>
                  </tr>
                  <tr className="border-t border-[var(--border)]">
                    <td className="p-2 font-semibold text-green-500">Foreign</td>
                    <td className="p-2 text-[var(--fg)]">{foreignAutarky.cloth.toFixed(1)}</td>
                    <td className="p-2 text-[var(--fg)]">{foreignAutarky.wine.toFixed(1)}</td>
                    <td className={cn('p-2 font-bold', foreignTrade!.cloth >= foreignAutarky.cloth ? 'text-green-500' : 'text-red-500')}>
                      {foreignTrade!.cloth.toFixed(1)}
                    </td>
                    <td className={cn('p-2 font-bold', foreignTrade!.wine >= foreignAutarky.wine ? 'text-green-500' : 'text-red-500')}>
                      {foreignTrade!.wine.toFixed(1)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--muted-fg)]">
              Green figures show consumption at least as high as autarky — the gains from specialisation and trade.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ── Tariff Diagram ──────────────────────────────────────────────────────── */
// widget key: 'tariff-diagram'
export function TariffDiagram() {
  const [pw, setPw] = useState(5)
  const [tariff, setTariff] = useState(2)

  const D_INTERCEPT = 20
  const D_SLOPE = -0.8
  const S_INTERCEPT = 2
  const S_SLOPE = 0.6

  const qdFree = (D_INTERCEPT - pw) / -D_SLOPE
  const qsFree = (pw - S_INTERCEPT) / S_SLOPE
  const importsFree = Math.max(0, qdFree - qsFree)

  const pDomestic = pw + tariff
  const qdNew = (D_INTERCEPT - pDomestic) / -D_SLOPE
  const qsNewRaw = (pDomestic - S_INTERCEPT) / S_SLOPE
  const qsNew = Math.min(qsNewRaw, qdNew)
  const importsNew = Math.max(0, qdNew - qsNew)

  const revenue = importsNew > 0 ? tariff * importsNew : 0
  const dwlProduction = Math.max(0, 0.5 * tariff * (qsNew - qsFree))
  const dwlConsumption = Math.max(0, 0.5 * tariff * (qdFree - qdNew))
  const dwlTotal = dwlProduction + dwlConsumption

  const data = Array.from({ length: 25 }, (_, q) => ({
    q,
    demand: Math.max(0, D_INTERCEPT + D_SLOPE * q),
    supply: Math.max(0, S_INTERCEPT + S_SLOPE * q),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Trade Barriers — Tariff Interactive</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            This country is a price-taking importer at world price Pw. See how a per-unit tariff raises the domestic price, shrinks imports, raises government revenue, and creates deadweight loss.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q"
              label={{ value: 'Quantity', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 20]}
              label={{ value: 'Price ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine y={pw} stroke="#22c55e" strokeDasharray="5 5" label={{ value: `Pw = $${pw.toFixed(2)}`, fill: '#22c55e', fontSize: 10 }} />
            <ReferenceLine y={pDomestic} stroke="#ef4444" strokeDasharray="5 5" label={{ value: `Pw+t = $${pDomestic.toFixed(2)}`, fill: '#ef4444', fontSize: 10, position: 'right' }} />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">World price (Pw): ${pw.toFixed(2)}</label>
            <input
              type="range" min={3} max={9} step={0.5} value={pw}
              onChange={(e) => setPw(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Set world price"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-red-500">Tariff (t): ${tariff.toFixed(2)}</label>
            <input
              type="range" min={0} max={5} step={0.25} value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="Set per-unit tariff"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{importsFree.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Imports (free trade)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-red-500">{importsNew.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Imports (with tariff)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">${revenue.toFixed(1)}B</div>
            <div className="text-xs text-[var(--muted-fg)]">Govt. tariff revenue</div>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
            <div className="text-lg font-black text-red-500">${dwlTotal.toFixed(1)}B</div>
            <div className="text-xs text-[var(--muted-fg)]">Total deadweight loss</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Qd (free): {qdFree.toFixed(1)} · Qs (free): {qsFree.toFixed(1)} · Qd (tariff): {qdNew.toFixed(1)} · Qs (tariff): {qsNew.toFixed(1)}.
          {importsNew === 0 && qdNew > 0 && ' The tariff is high enough to eliminate imports entirely — further increases have no additional effect.'}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Exchange Rate Market ────────────────────────────────────────────────── */
// widget key: 'exchange-rate-market'
export function ExchangeRateMarket() {
  const [demandShift, setDemandShift] = useState(0)
  const [supplyShift, setSupplyShift] = useState(0)
  const [regime, setRegime] = useState<'floating' | 'fixed'>('floating')
  const [pegRate, setPegRate] = useState(8.5)

  const D_INTERCEPT = 12 + demandShift * 1.2
  const S_INTERCEPT = 2 + supplyShift * 1.2
  const D_SLOPE = -0.7
  const S_SLOPE = 0.5

  const eqE = (D_INTERCEPT - S_INTERCEPT) / (S_SLOPE - D_SLOPE)
  const eqQ = D_INTERCEPT + D_SLOPE * eqE

  const qdAtPeg = Math.max(0, D_INTERCEPT + D_SLOPE * pegRate)
  const qsAtPeg = Math.max(0, S_INTERCEPT + S_SLOPE * pegRate)
  const gap = qdAtPeg - qsAtPeg
  const isExcessSupply = gap < 0
  const isExcessDemand = gap > 0

  const data = Array.from({ length: 17 }, (_, i) => {
    const e = i
    return {
      e,
      demand: Math.max(0, D_INTERCEPT + D_SLOPE * e),
      supply: Math.max(0, S_INTERCEPT + S_SLOPE * e),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Exchange Rate Market</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Demand and supply of the domestic currency in the foreign-exchange market. Compare a floating rate (set by the market) against a fixed rate (defended by the central bank).
          </p>
        </div>

        <div className="flex gap-2">
          {(['floating', 'fixed'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRegime(r)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2 capitalize',
                regime === r ? 'text-white border-transparent bg-[var(--accent)]' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
              )}
            >
              {r}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="e"
              label={{ value: 'Exchange Rate', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Quantity of Currency', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            {regime === 'floating' ? (
              <ReferenceLine x={+eqE.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `E* = ${eqE.toFixed(2)}`, fill: 'var(--accent)', fontSize: 11 }} />
            ) : (
              <ReferenceLine x={pegRate} stroke="#a855f7" strokeWidth={2.5} label={{ value: `Peg = ${pegRate.toFixed(2)}`, fill: '#a855f7', fontSize: 11 }} />
            )}
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand for currency" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply of currency" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">
              Demand shift: {demandShift > 0 ? '+' : ''}{demandShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Shift currency demand"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              {demandShift > 0 ? 'e.g. rising export demand or capital inflows — currency appreciates' :
               demandShift < 0 ? 'e.g. falling export demand or capital outflows — currency depreciates' :
               'No shift'}
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">
              Supply shift: {supplyShift > 0 ? '+' : ''}{supplyShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Shift currency supply"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              {supplyShift > 0 ? 'e.g. rising import demand or capital outflows — currency depreciates' :
               supplyShift < 0 ? 'e.g. falling import demand or capital inflows — currency appreciates' :
               'No shift'}
            </p>
          </div>
        </div>

        {regime === 'fixed' && (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-purple-500">Pegged rate: {pegRate.toFixed(2)}</label>
            <input
              type="range" min={2} max={15} step={0.1} value={pegRate}
              onChange={(e) => setPegRate(Number(e.target.value))}
              className="w-full accent-purple-500"
              aria-label="Set pegged exchange rate"
            />
          </div>
        )}

        {regime === 'floating' ? (
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
            <div className="text-2xl font-black text-[var(--accent)]">E* = {eqE.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Floating equilibrium, quantity traded = {eqQ.toFixed(1)}</div>
          </div>
        ) : (
          <div className={cn(
            'rounded-xl border-2 p-4 text-center',
            isExcessSupply ? 'border-red-500/30 bg-red-500/10' : isExcessDemand ? 'border-blue-500/30 bg-blue-500/10' : 'border-green-500/30 bg-green-500/10'
          )}>
            <div className={cn('text-lg font-black', isExcessSupply ? 'text-red-500' : isExcessDemand ? 'text-blue-500' : 'text-green-500')}>
              {isExcessSupply ? 'Excess supply of currency' : isExcessDemand ? 'Excess demand for currency' : 'Peg matches equilibrium'}
            </div>
            <div className="text-xs text-[var(--muted-fg)] mt-1">
              {isExcessSupply
                ? `Central bank must BUY ${Math.abs(gap).toFixed(1)} units with foreign reserves to defend the peg`
                : isExcessDemand
                ? `Central bank must SELL ${Math.abs(gap).toFixed(1)} units of foreign reserves to meet demand`
                : 'No intervention needed — the peg happens to match the floating equilibrium'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ── Balance of Payments Components ──────────────────────────────────────── */
// widget key: 'bop-components'
export function BOPComponents() {
  const [currentAccount, setCurrentAccount] = useState(-30)
  const [capitalAccount, setCapitalAccount] = useState(2)
  const [financialAccount, setFinancialAccount] = useState(25)

  const discrepancy = -(currentAccount + capitalAccount + financialAccount)

  const components = [
    { label: 'Current Account', value: currentAccount },
    { label: 'Capital Account', value: capitalAccount },
    { label: 'Financial Account', value: financialAccount },
    { label: 'Statistical Discrepancy', value: discrepancy },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Balance of Payments</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            By definition, the Current, Capital, and Financial accounts sum to zero. Adjust the sliders and watch the Statistical Discrepancy absorb whatever residual is needed to balance the books.
          </p>
        </div>

        {/* Bar-list */}
        <div className="space-y-3">
          {components.map(({ label, value }) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-1">
                <span className={cn('font-semibold', value >= 0 ? 'text-green-500' : 'text-red-500')}>{label}</span>
                <span className="text-[var(--muted-fg)]">{value >= 0 ? '+' : ''}{value.toFixed(1)}B</span>
              </div>
              <div className="h-5 rounded-full bg-[var(--muted)] overflow-hidden">
                <div
                  className={cn('h-full rounded-full transition-all duration-300', value >= 0 ? 'bg-green-500' : 'bg-red-500')}
                  style={{ width: `${Math.min(100, Math.abs(value) / 50 * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-sm text-[var(--muted-fg)]">CA + KA + FA + Statistical Discrepancy</div>
          <div className="text-2xl font-black text-[var(--accent)]">
            {(currentAccount + capitalAccount + financialAccount + discrepancy).toFixed(1)}B = 0
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Current Account: {currentAccount >= 0 ? '+' : ''}{currentAccount}B</label>
            <input
              type="range" min={-50} max={50} step={1} value={currentAccount}
              onChange={(e) => setCurrentAccount(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Set Current Account balance"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Capital Account: {capitalAccount >= 0 ? '+' : ''}{capitalAccount}B</label>
            <input
              type="range" min={-10} max={10} step={0.5} value={capitalAccount}
              onChange={(e) => setCapitalAccount(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="Set Capital Account balance"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Financial Account: {financialAccount >= 0 ? '+' : ''}{financialAccount}B</label>
            <input
              type="range" min={-50} max={50} step={1} value={financialAccount}
              onChange={(e) => setFinancialAccount(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Set Financial Account balance"
            />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          By definition, a current account deficit must be financed by a capital/financial account surplus (a country running a trade deficit is, by accounting identity, also a net borrower from or seller of assets to the rest of the world) — the BOP always balances in principle, even though real-world data never sums to exactly zero due to measurement error.
        </div>
      </CardContent>
    </Card>
  )
}
