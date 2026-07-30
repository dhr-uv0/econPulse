'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { Ruler, LayoutGrid } from 'lucide-react'
import { ExternalityDiagram, PublicGoodsSimulator } from '@/components/curriculum/diagrams/interactive/f5-widgets'
import { UnemploymentTypes, CPICalculator } from '@/components/curriculum/diagrams/interactive/f6-widgets'
import { RevenueCurves, ProfitMax } from '@/components/curriculum/diagrams/interactive/i1-widgets'
import {
  PerfectCompetitionDiagram, MonopolyDiagram, MonopolisticCompetitionDiagram,
  OligopolyGame, PriceDiscrimination, MarketStructureComparison,
} from '@/components/curriculum/diagrams/interactive/i2-widgets'
import {
  MRPLabourDemand, LabourMarketEquilibrium, MonopsonyLabourMarket,
  EconomicRentCalculator, LorenzGiniCalculator,
} from '@/components/curriculum/diagrams/interactive/i3-widgets'
import {
  AutomaticStabilizers, DebtSustainability, MoneyMarketDiagram, PolicyComparison,
} from '@/components/curriculum/diagrams/interactive/i5-widgets'
import {
  ComparativeAdvantage, TariffDiagram, ExchangeRateMarket, BOPComponents,
} from '@/components/curriculum/diagrams/interactive/i6-widgets'
import {
  AntitrustRegulation, ValueAddedCalculator, RealNominalGDP, MoneyMultiplier,
  LoanableFundsMarket, PhillipsCurve, GrowthProductivity,
} from '@/components/curriculum/diagrams/interactive/ap-widgets'
import {
  ConsumerProducerSurplus, YEDXEDClassifier, PESCalculator,
  MarshallLernerJCurve, TermsOfTradeIndex, DevelopmentIndicators,
} from '@/components/curriculum/diagrams/interactive/ib-widgets'
import {
  UtilityMaximization, SlutskyDecomposition, IsoquantCostMinimization,
  EdgeworthBoxGE, ArrowsImpossibilityVoting, MatchingTheory,
} from '@/components/curriculum/diagrams/interactive/ol1-widgets'
import {
  SolowGrowthModel, NewKeynesianPhillips, FisherMonetaryTheory,
  RicardianEquivalenceMultiplier, MundellFlemingISLMBP,
  ParetoWelfareFrontier, SocialWelfareFunction,
} from '@/components/curriculum/diagrams/interactive/ol2-widgets'
import {
  GameSolver, GameTreeBackwardInduction, AuctionSimulator,
} from '@/components/curriculum/diagrams/interactive/ol3-widgets'
import {
  OLSRegressionSandbox, InferenceAndOVB, CausalInferenceToolkit,
} from '@/components/curriculum/diagrams/interactive/ol5-widgets'
import {
  HeckscherOhlinFactorIntensity, KrugmanNewTradeModel,
} from '@/components/curriculum/diagrams/interactive/ol6-widgets'
import {
  OptimalTaxationRamsey, SocialInsuranceAdverseSelection, CostBenefitNPV,
} from '@/components/curriculum/diagrams/interactive/ol7-widgets'
import {
  ProspectTheorySimulator, NudgeDefaultEffect, PovertyTrapDynamics,
} from '@/components/curriculum/diagrams/interactive/ol8-widgets'
import {
  MarketingMixSimulator, ROASCalculator, FinancialStatementRatios,
  TimeValueOfMoney, InvestmentPortfolioRisk,
} from '@/components/curriculum/diagrams/interactive/dc-widgets'

interface Props {
  lessonId: string
  diagramType: string | undefined
}

// Map lesson IDs to specific diagram types for Foundation/Intermediate modules
const LESSON_DIAGRAM_MAP: Record<string, string> = {
  'f1-l1': 'scarcity-slider',
  'f1-l2': 'scarcity-slider',
  'f1-l3': 'ppc-slider',
  'f1-l4': 'scarcity-slider',
  'f1-l5': 'demand-curve-shifter',
  'f2-l1': 'demand-curve-shifter',
  'f2-l2': 'demand-curve-shifter',
  'f2-l3': 'price-mechanism-simulator',
  'f2-l4': 'demand-curve-shifter',
  'f2-l5': 'price-mechanism-simulator',
  'f3-l1': 'elasticity-calculator',
  'f3-l2': 'elasticity-calculator',
  'f3-l3': 'elasticity-calculator',
  'f3-l4': 'elasticity-calculator',
  'f3-l5': 'tax-incidence',
  'f4-l1': 'demand-curve-shifter',
  'f4-l2': 'demand-curve-shifter',
  'f4-l3': 'demand-curve-shifter',
  'f4-l4': 'demand-curve-shifter',
  'f5-l1': 'externality-diagram',
  'f5-l2': 'tax-incidence',
  'f5-l3': 'price-mechanism-simulator',
  'f5-l4': 'tax-incidence',
  'f5-l5': 'public-goods-simulator',
  'f6-l1': 'gdp-components',
  'f6-l2': 'business-cycle',
  'f6-l3': 'unemployment-types',
  'f6-l4': 'cpi-calculator',
  'f6-l5': 'adas-diagram',
  'i1-l1': 'cost-curves',
  'i1-l2': 'cost-curves',
  'i1-l3': 'cost-curves',
  'i1-l4': 'cost-curves',
  'i1-l5': 'revenue-curves',
  'i1-l6': 'profit-max',
  'i2-l1': 'perfect-competition-diagram',
  'i2-l2': 'monopoly-diagram',
  'i2-l3': 'monopolistic-competition-diagram',
  'i2-l4': 'oligopoly-game',
  'i2-l5': 'price-discrimination',
  'i2-l6': 'market-structure-comparison',
  'i3-l1': 'mrp-labour-demand',
  'i3-l2': 'labour-market-equilibrium',
  'i3-l3': 'monopsony-labour-market',
  'i3-l4': 'economic-rent-calculator',
  'i3-l5': 'lorenz-gini-calculator',
  'i4-l1': 'adas-diagram',
  'i4-l2': 'adas-diagram',
  'i4-l3': 'adas-diagram',
  'i4-l4': 'adas-diagram',
  'i4-l5': 'adas-diagram',
  'i4-l6': 'demand-curve-shifter',
  'i5-l1': 'adas-diagram',
  'i5-l2': 'automatic-stabilizers',
  'i5-l3': 'debt-sustainability',
  'i5-l4': 'money-market-diagram',
  'i5-l5': 'money-market-diagram',
  'i5-l6': 'policy-comparison',
  'i6-l1': 'comparative-advantage',
  'i6-l2': 'comparative-advantage',
  'i6-l3': 'tariff-diagram',
  'i6-l4': 'exchange-rate-market',
  'i6-l5': 'bop-components',

  // ── AP Economics ─────────────────────────────────────────────────────────
  'ap1-l1': 'cost-curves',
  'ap1-l2': 'cost-curves',
  'ap1-l3': 'perfect-competition-diagram',
  'ap1-l4': 'perfect-competition-diagram',
  'ap2-l1': 'perfect-competition-diagram',
  'ap2-l2': 'monopoly-diagram',
  'ap2-l3': 'oligopoly-game',
  'ap2-l4': 'monopolistic-competition-diagram',
  'ap2-l5': 'labour-market-equilibrium',
  'ap3-l1': 'externality-diagram',
  'ap3-l2': 'public-goods-simulator',
  'ap3-l3': 'antitrust-regulation',
  'ap4-l1': 'gdp-components',
  'ap4-l2': 'value-added-calculator',
  'ap4-l3': 'real-nominal-gdp',
  'ap4-l4': 'cpi-calculator',
  'ap5-l1': 'money-market-diagram',
  'ap5-l2': 'money-multiplier',
  'ap5-l3': 'money-market-diagram',
  'ap5-l4': 'loanable-funds-market',
  'ap5-l5': 'phillips-curve',
  'ap6-l1': 'exchange-rate-market',
  'ap6-l2': 'bop-components',
  'ap6-l3': 'solow-growth-model',
  'ap7-l1': 'growth-productivity',
  'ap7-l2': 'loanable-funds-market',
  'ap7-l3': 'phillips-curve',
  'ap7-l4': 'policy-comparison',
  'ap7-l5': 'exchange-rate-market',

  // ── IB Economics ─────────────────────────────────────────────────────────
  'ib1-l1': 'scarcity-slider',
  'ib1-l3': 'ppc-slider',
  'ib2-l1': 'demand-curve-shifter',
  'ib2-l2': 'demand-curve-shifter',
  'ib2-l3': 'price-mechanism-simulator',
  'ib2-l4': 'elasticity-calculator',
  'ib2-l5': 'consumer-producer-surplus',
  'ib2-l6': 'tax-incidence',
  'ib3-l1': 'elasticity-calculator',
  'ib3-l2': 'yed-xed-classifier',
  'ib3-l3': 'pes-calculator',
  'ib3-l4': 'tax-incidence',
  'ib3-l5': 'price-mechanism-simulator',
  'ib4-l1': 'cost-curves',
  'ib4-l2': 'profit-max',
  'ib4-l3': 'perfect-competition-diagram',
  'ib4-l4': 'antitrust-regulation',
  'ib4-l5': 'monopolistic-competition-diagram',
  'ib4-l6': 'oligopoly-game',
  'ib4-l7': 'price-discrimination',
  'ib5-l1': 'gdp-components',
  'ib5-l2': 'business-cycle',
  'ib5-l3': 'unemployment-types',
  'ib5-l4': 'cpi-calculator',
  'ib5-l5': 'phillips-curve',
  'ib6-l1': 'comparative-advantage',
  'ib6-l2': 'tariff-diagram',
  'ib6-l4': 'exchange-rate-market',
  'ib6-l5': 'bop-components',
  'ib6-l6': 'marshall-lerner-jcurve',
  'ib6-l7': 'terms-of-trade-index',
  'ib7-l1': 'development-indicators',
  'ib7-l3': 'comparative-advantage',
  'ib7-l4': 'debt-sustainability',
  'ib7-l5': 'bop-components',
  'ib8-l1': 'tariff-diagram',
  'ib8-l2': 'lorenz-gini-calculator',
  'ib8-l3': 'externality-diagram',
  'ib8-l4': 'terms-of-trade-index',
  'ib8-l5': 'marshall-lerner-jcurve',

  // ── Olympiad ──────────────────────────────────────────────────────────────
  'ol1-l1': 'utility-maximization',
  'ol1-l2': 'slutsky-decomposition',
  'ol1-l3': 'isoquant-cost-minimization',
  'ol1-l4': 'edgeworth-box-ge',
  'ol1-l5': 'arrows-impossibility-voting',
  'ol1-l6': 'matching-theory',
  'ol2-l1': 'solow-growth-model',
  'ol2-l2': 'new-keynesian-phillips',
  'ol2-l3': 'fisher-monetary-theory',
  'ol2-l4': 'ricardian-equivalence-multiplier',
  'ol2-l5': 'mundell-fleming-islmbp',
  'ol3-l1': 'game-solver',
  'ol3-l2': 'game-solver',
  'ol3-l3': 'oligopoly-game',
  'ol3-l4': 'game-tree-backward-induction',
  'ol3-l5': 'auction-simulator',
  'ol4-l1': 'pareto-welfare-frontier',
  'ol4-l2': 'social-welfare-function',
  'ol4-l3': 'edgeworth-box-ge',
  'ol4-l4': 'arrows-impossibility-voting',
  'ol4-l5': 'externality-diagram',
  'ol5-l1': 'ols-regression-sandbox',
  'ol5-l2': 'ols-regression-sandbox',
  'ol5-l3': 'ols-regression-sandbox',
  'ol5-l4': 'inference-and-ovb',
  'ol5-l5': 'inference-and-ovb',
  'ol5-l6': 'causal-inference-toolkit',
  'ol5-l7': 'causal-inference-toolkit',
  'ol6-l1': 'comparative-advantage',
  'ol6-l2': 'heckscher-ohlin-factor-intensity',
  'ol6-l3': 'krugman-new-trade-model',
  'ol6-l4': 'tariff-diagram',
  'ol6-l5': 'comparative-advantage',
  'ol7-l1': 'public-goods-simulator',
  'ol7-l2': 'optimal-taxation-ramsey',
  'ol7-l3': 'social-insurance-adverse-selection',
  'ol7-l4': 'arrows-impossibility-voting',
  'ol7-l5': 'cost-benefit-npv',
  'ol8-l2': 'prospect-theory-simulator',
  'ol8-l3': 'nudge-default-effect',
  'ol8-l4': 'poverty-trap-dynamics',
  'ol8-l5': 'solow-growth-model',

  // ── DECA ─────────────────────────────────────────────────────────────────
  'dc2-l1': 'marketing-mix-simulator',
  'dc2-l4': 'roas-calculator',
  'dc3-l1': 'financial-statement-ratios',
  'dc3-l2': 'time-value-of-money',
  'dc3-l3': 'investment-portfolio-risk',
  'dc3-l4': 'financial-statement-ratios',
  'dc4-l2': 'revenue-curves',
  'dc4-l3': 'monopolistic-competition-diagram',
  'dc4-l4': 'profit-max',
  'dc4-l5': 'cpi-calculator',
  'dc4-l6': 'money-market-diagram',
  'dc5-l1': 'business-cycle',
  'dc5-l2': 'business-cycle',
  'dc5-l3': 'exchange-rate-market',
}

export function InteractiveDiagram({ lessonId, diagramType }: Props) {
  const resolved = LESSON_DIAGRAM_MAP[lessonId] ?? diagramType
  switch (resolved) {
    case 'demand-curve-shifter':    return <DemandCurveShifter />
    case 'ppc-slider':              return <PPCSlider />
    case 'scarcity-slider':         return <ScarcityDiagram />
    case 'price-mechanism-simulator': return <PriceMechanism />
    case 'elasticity-calculator':   return <ElasticityCalculator />
    case 'tax-incidence':           return <TaxIncidence />
    case 'cost-curves':             return <CostCurves />
    case 'adas-diagram':            return <ADASDiagram />
    case 'gdp-components':          return <GDPComponents />
    case 'business-cycle':          return <BusinessCycle />
    case 'externality-diagram':     return <ExternalityDiagram />
    case 'public-goods-simulator':  return <PublicGoodsSimulator />
    case 'unemployment-types':      return <UnemploymentTypes />
    case 'cpi-calculator':          return <CPICalculator />
    case 'revenue-curves':          return <RevenueCurves />
    case 'profit-max':              return <ProfitMax />
    case 'perfect-competition-diagram':      return <PerfectCompetitionDiagram />
    case 'monopoly-diagram':                 return <MonopolyDiagram />
    case 'monopolistic-competition-diagram': return <MonopolisticCompetitionDiagram />
    case 'oligopoly-game':                   return <OligopolyGame />
    case 'price-discrimination':             return <PriceDiscrimination />
    case 'market-structure-comparison':      return <MarketStructureComparison />
    case 'mrp-labour-demand':          return <MRPLabourDemand />
    case 'labour-market-equilibrium':  return <LabourMarketEquilibrium />
    case 'monopsony-labour-market':    return <MonopsonyLabourMarket />
    case 'economic-rent-calculator':   return <EconomicRentCalculator />
    case 'lorenz-gini-calculator':     return <LorenzGiniCalculator />
    case 'automatic-stabilizers': return <AutomaticStabilizers />
    case 'debt-sustainability':   return <DebtSustainability />
    case 'money-market-diagram':  return <MoneyMarketDiagram />
    case 'policy-comparison':     return <PolicyComparison />
    case 'comparative-advantage': return <ComparativeAdvantage />
    case 'tariff-diagram':        return <TariffDiagram />
    case 'exchange-rate-market':  return <ExchangeRateMarket />
    case 'bop-components':        return <BOPComponents />
    case 'antitrust-regulation':   return <AntitrustRegulation />
    case 'value-added-calculator': return <ValueAddedCalculator />
    case 'real-nominal-gdp':       return <RealNominalGDP />
    case 'money-multiplier':       return <MoneyMultiplier />
    case 'loanable-funds-market':  return <LoanableFundsMarket />
    case 'phillips-curve':         return <PhillipsCurve />
    case 'growth-productivity':    return <GrowthProductivity />
    case 'consumer-producer-surplus': return <ConsumerProducerSurplus />
    case 'yed-xed-classifier':        return <YEDXEDClassifier />
    case 'pes-calculator':            return <PESCalculator />
    case 'marshall-lerner-jcurve':    return <MarshallLernerJCurve />
    case 'terms-of-trade-index':      return <TermsOfTradeIndex />
    case 'development-indicators':    return <DevelopmentIndicators />
    case 'utility-maximization':      return <UtilityMaximization />
    case 'slutsky-decomposition':     return <SlutskyDecomposition />
    case 'isoquant-cost-minimization': return <IsoquantCostMinimization />
    case 'edgeworth-box-ge':           return <EdgeworthBoxGE />
    case 'arrows-impossibility-voting': return <ArrowsImpossibilityVoting />
    case 'matching-theory':             return <MatchingTheory />
    case 'solow-growth-model':              return <SolowGrowthModel />
    case 'new-keynesian-phillips':          return <NewKeynesianPhillips />
    case 'fisher-monetary-theory':          return <FisherMonetaryTheory />
    case 'ricardian-equivalence-multiplier': return <RicardianEquivalenceMultiplier />
    case 'mundell-fleming-islmbp':          return <MundellFlemingISLMBP />
    case 'pareto-welfare-frontier':         return <ParetoWelfareFrontier />
    case 'social-welfare-function':         return <SocialWelfareFunction />
    case 'game-solver':                  return <GameSolver />
    case 'game-tree-backward-induction': return <GameTreeBackwardInduction />
    case 'auction-simulator':            return <AuctionSimulator />
    case 'ols-regression-sandbox':      return <OLSRegressionSandbox />
    case 'inference-and-ovb':           return <InferenceAndOVB />
    case 'causal-inference-toolkit':    return <CausalInferenceToolkit />
    case 'heckscher-ohlin-factor-intensity': return <HeckscherOhlinFactorIntensity />
    case 'krugman-new-trade-model':          return <KrugmanNewTradeModel />
    case 'optimal-taxation-ramsey':            return <OptimalTaxationRamsey />
    case 'social-insurance-adverse-selection': return <SocialInsuranceAdverseSelection />
    case 'cost-benefit-npv':                   return <CostBenefitNPV />
    case 'prospect-theory-simulator': return <ProspectTheorySimulator />
    case 'nudge-default-effect':      return <NudgeDefaultEffect />
    case 'poverty-trap-dynamics':     return <PovertyTrapDynamics />
    case 'marketing-mix-simulator':    return <MarketingMixSimulator />
    case 'roas-calculator':            return <ROASCalculator />
    case 'financial-statement-ratios': return <FinancialStatementRatios />
    case 'time-value-of-money':        return <TimeValueOfMoney />
    case 'investment-portfolio-risk':  return <InvestmentPortfolioRisk />
    default:                        return <DefaultDiagram lessonId={lessonId} exerciseText={diagramType} />
  }
}

/* ── Supply & Demand Diagram ─────────────────────────────────────────────── */
function DemandCurveShifter() {
  const [demandShift, setDemandShift] = useState(0)   // -2 to +2
  const [supplyShift, setSupplyShift] = useState(0)   // -2 to +2

  const D_INTERCEPT = 10 + demandShift * 1.5
  const S_INTERCEPT = 2  + supplyShift * 1.5
  const D_SLOPE = -0.8
  const S_SLOPE = 0.6

  // Equilibrium: D_INTERCEPT + D_SLOPE * Q = S_INTERCEPT + S_SLOPE * Q
  const eqQ = (D_INTERCEPT - S_INTERCEPT) / (S_SLOPE - D_SLOPE)
  const eqP = D_INTERCEPT + D_SLOPE * eqQ

  const data = Array.from({ length: 11 }, (_, i) => {
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
          <h3 className="font-bold text-[var(--fg)] mb-1">Supply &amp; Demand Interactive</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Shift the curves to see how equilibrium price and quantity change.
          </p>
        </div>

        {/* Chart */}
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
              domain={[0, 14]}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `Qty: ${v}`}
            />
            <ReferenceLine
              x={eqQ.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `Q* = ${eqQ.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }}
            />
            <ReferenceLine
              y={eqP.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `P* = $${eqP.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }}
            />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply" />
          </LineChart>
        </ResponsiveContainer>

        {/* Equilibrium display */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">${eqP.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium Price</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{eqQ.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium Quantity</div>
          </div>
        </div>

        {/* Controls */}
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
            <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
              <span>← Decrease demand</span>
              <span>Increase demand →</span>
            </div>
            <p className="text-xs text-[var(--muted-fg)]">
              {demandShift < 0 ? 'Demand decreases (e.g., income falls, substitute gets cheaper)' :
               demandShift > 0 ? 'Demand increases (e.g., income rises, advertising, fashion trend)' :
               'Demand unchanged'}
            </p>
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
            <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
              <span>← Decrease supply</span>
              <span>Increase supply →</span>
            </div>
            <p className="text-xs text-[var(--muted-fg)]">
              {supplyShift < 0 ? 'Supply decreases (e.g., input costs rise, natural disaster)' :
               supplyShift > 0 ? 'Supply increases (e.g., technology improves, new firms enter)' :
               'Supply unchanged'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── PPC Diagram ─────────────────────────────────────────────────────────── */
function PPCSlider() {
  const [allocation, setAllocation] = useState(50) // % of resources to Good A
  const [growthLevel, setGrowthLevel] = useState(0) // 0 = baseline

  const maxA = 10 + growthLevel * 2
  const maxB = 10 + growthLevel * 2

  // Concave PPC: for allocation t (0..100), compute A and B on the PPC
  const t = allocation / 100
  const ppcA = maxA * Math.sin((t * Math.PI) / 2)
  const ppcB = maxB * Math.cos((t * Math.PI) / 2)

  const ppcData = Array.from({ length: 51 }, (_, i) => {
    const ti = i / 50
    return {
      a: +(maxA * Math.sin((ti * Math.PI) / 2)).toFixed(2),
      b: +(maxB * Math.cos((ti * Math.PI) / 2)).toFixed(2),
    }
  })

  const baselineData = Array.from({ length: 51 }, (_, i) => {
    const ti = i / 50
    const bMax = 10
    return {
      a: +(bMax * Math.sin((ti * Math.PI) / 2)).toFixed(2),
      b: +(bMax * Math.cos((ti * Math.PI) / 2)).toFixed(2),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Production Possibility Curve</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Move the allocation slider to choose a point on the PPC. Simulate economic growth to shift the curve outward.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="a" type="number" domain={[0, 14]}
              label={{ value: 'Good A (Healthcare)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              dataKey="b" type="number" domain={[0, 14]}
              label={{ value: 'Good B (Education)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 11 }}
              formatter={(v: number, name: string) => [v.toFixed(1), name === 'a' ? 'Healthcare' : 'Education']}
            />
            {growthLevel > 0 && (
              <Line data={baselineData} type="monotone" dataKey="b" stroke="var(--border)" strokeWidth={1.5} dot={false} strokeDasharray="4 4" name="Baseline PPC" />
            )}
            <Line data={ppcData} type="monotone" dataKey="b" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Current PPC" />
            {/* Current point */}
            <Line
              data={[{ a: +ppcA.toFixed(1), b: +ppcB.toFixed(1) }]}
              type="monotone" dataKey="b"
              stroke="var(--accent)" strokeWidth={0} dot={{ r: 7, fill: 'var(--accent)', strokeWidth: 2, stroke: 'var(--card-bg)' }}
              name="Current allocation"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Current point */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{ppcA.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Healthcare units</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-xs font-semibold text-[var(--accent)] mb-1">Opportunity cost</div>
            <div className="text-xs text-[var(--muted-fg)]">Moving right costs education</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">{ppcB.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Education units</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Resource allocation: {allocation}% to Healthcare
            </label>
            <input type="range" min={1} max={99} value={allocation}
              onChange={(e) => setAllocation(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Adjust resource allocation"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Economic growth: {growthLevel > 0 ? `+${growthLevel * 20}%` : 'None'}
            </label>
            <input type="range" min={0} max={3} step={1} value={growthLevel}
              onChange={(e) => setGrowthLevel(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Simulate economic growth"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              {growthLevel > 0 ? 'Outward shift: technology or resource improvement' : 'Baseline — no growth'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Scarcity Diagram ────────────────────────────────────────────────────── */
function ScarcityDiagram() {
  const [wants, setWants] = useState(80)
  const [resources, setResources] = useState(40)
  const gap = wants - resources

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Scarcity Gap</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust wants and resources to see how scarcity creates the fundamental economic problem.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-red-500">Unlimited Wants</span>
              <span className="text-[var(--fg)] font-bold">{wants}</span>
            </div>
            <div className="h-6 rounded-full overflow-hidden bg-[var(--muted)]">
              <div className="h-full bg-red-400 transition-all duration-300" style={{ width: `${wants}%` }} />
            </div>
            <input type="range" min={20} max={100} value={wants}
              onChange={(e) => setWants(Number(e.target.value))}
              className="w-full accent-red-500" aria-label="Adjust wants level"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-green-500">Available Resources</span>
              <span className="text-[var(--fg)] font-bold">{resources}</span>
            </div>
            <div className="h-6 rounded-full overflow-hidden bg-[var(--muted)]">
              <div className="h-full bg-green-400 transition-all duration-300" style={{ width: `${resources}%` }} />
            </div>
            <input type="range" min={5} max={80} value={resources}
              onChange={(e) => setResources(Number(e.target.value))}
              className="w-full accent-green-500" aria-label="Adjust resources level"
            />
          </div>

          <div className={cn(
            'rounded-xl border-2 p-4 text-center transition-all',
            gap > 0 ? 'border-red-500/30 bg-red-500/10' : 'border-green-500/30 bg-green-500/10'
          )}>
            <div className={`text-3xl font-black ${gap > 0 ? 'text-red-500' : 'text-green-500'}`}>
              {gap > 0 ? `Gap: ${gap}` : 'No Scarcity!'}
            </div>
            <div className="mt-1 text-sm text-[var(--muted-fg)]">
              {gap > 0
                ? 'Scarcity exists → choices must be made → opportunity costs arise'
                : 'Resources exceed wants → no economic problem (theoretical)'
              }
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Price Mechanism ─────────────────────────────────────────────────────── */
function PriceMechanism() {
  const [price, setPrice] = useState(5)

  const demand = Math.max(0, 15 - price * 1.5)
  const supply = Math.max(0, price * 1.2 - 1)
  const surplus = supply > demand ? supply - demand : 0
  const shortage = demand > supply ? demand - supply : 0

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Price Mechanism</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust the price to see how surpluses and shortages resolve themselves in a market.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Price: ${price.toFixed(2)}
          </label>
          <input type="range" min={1} max={10} step={0.5} value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-[#e8c547]" aria-label="Adjust market price"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-2xl font-black text-blue-500">{demand.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Qty Demanded</div>
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3',
            surplus > 0 ? 'border-green-500/30 bg-green-500/10' :
            shortage > 0 ? 'border-red-500/30 bg-red-500/10' :
            'border-[var(--accent)]/30 bg-[var(--accent)]/10'
          )}>
            <div className={`text-lg font-black ${surplus > 0 ? 'text-green-500' : shortage > 0 ? 'text-red-500' : 'text-[var(--accent)]'}`}>
              {surplus > 0 ? `Surplus` : shortage > 0 ? `Shortage` : `Equilibrium`}
            </div>
            <div className="text-xs text-[var(--muted-fg)]">
              {surplus > 0 ? `+${surplus.toFixed(1)} units` : shortage > 0 ? `-${shortage.toFixed(1)} units` : 'Market clears'}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-2xl font-black text-green-500">{supply.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Qty Supplied</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          {surplus > 0
            ? 'Surplus → producers cut price → Qd ↑, Qs ↓ → moves toward equilibrium'
            : shortage > 0
            ? 'Shortage → consumers bid up price → Qd ↓, Qs ↑ → moves toward equilibrium'
            : 'Market is in equilibrium — no tendency to change'}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Elasticity Calculator ───────────────────────────────────────────────── */
function ElasticityCalculator() {
  const [p1, setP1] = useState(10)
  const [p2, setP2] = useState(12)
  const [q1, setQ1] = useState(100)
  const [q2, setQ2] = useState(80)

  const pctQ = ((q2 - q1) / ((q1 + q2) / 2)) * 100
  const pctP = ((p2 - p1) / ((p1 + p2) / 2)) * 100
  const ped = pctQ / pctP
  const pedAbs = Math.abs(ped)

  const classify = pedAbs > 1 ? 'Elastic' : pedAbs < 1 ? 'Inelastic' : 'Unit Elastic'
  const classColor = pedAbs > 1 ? 'text-blue-500' : pedAbs < 1 ? 'text-red-500' : 'text-green-500'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Elasticity Calculator (Midpoint Method)</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            PED = (% change in Qd) ÷ (% change in P). Adjust price and quantity to see elasticity change.
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
              <label className="text-sm font-semibold text-[var(--fg)]">Original Qty (Q₁): {q1}</label>
              <input type="range" min={10} max={200} value={q1} onChange={(e) => setQ1(Number(e.target.value))} className="w-full accent-green-500" aria-label="Original quantity" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">New Qty (Q₂): {q2}</label>
              <input type="range" min={10} max={200} value={q2} onChange={(e) => setQ2(Number(e.target.value))} className="w-full accent-green-500" aria-label="New quantity" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-sm font-semibold text-[var(--muted-fg)]">% ΔQd</div>
            <div className="text-xl font-black text-green-500">{pctQ.toFixed(1)}%</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-sm font-semibold text-[var(--muted-fg)]">% ΔP</div>
            <div className="text-xl font-black text-blue-500">{pctP.toFixed(1)}%</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-sm font-semibold text-[var(--muted-fg)]">PED</div>
            <div className={`text-xl font-black ${classColor}`}>{ped.toFixed(2)}</div>
          </div>
        </div>

        <div className={`rounded-xl border-2 p-4 text-center ${pedAbs > 1 ? 'border-blue-500/30 bg-blue-500/10' : pedAbs < 1 ? 'border-red-500/30 bg-red-500/10' : 'border-green-500/30 bg-green-500/10'}`}>
          <div className={`text-2xl font-black ${classColor}`}>{classify}</div>
          <p className="text-sm text-[var(--muted-fg)] mt-1">
            {pedAbs > 1 ? 'Consumers are sensitive to price. A price rise decreases total revenue.' :
             pedAbs < 1 ? 'Consumers are insensitive to price. A price rise increases total revenue.' :
             'Revenue unchanged — 1% price change = 1% quantity change.'}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Tax Incidence Diagram ───────────────────────────────────────────────── */
function TaxIncidence() {
  const [taxRate, setTaxRate] = useState(3)
  const [pedSlider, setPedSlider] = useState(5) // 1=inelastic, 10=elastic

  const D_INTERCEPT = 12
  const S_INTERCEPT = 2
  const D_SLOPE = -(1 + (pedSlider - 1) * 0.15)
  const S_SLOPE = 0.6

  const eqQ = (D_INTERCEPT - S_INTERCEPT) / (S_SLOPE - D_SLOPE)
  const eqP = D_INTERCEPT + D_SLOPE * eqQ

  const newSIntercept = S_INTERCEPT + taxRate
  const newQ = (D_INTERCEPT - newSIntercept) / (S_SLOPE - D_SLOPE)
  const pBuyer = D_INTERCEPT + D_SLOPE * newQ
  const pSeller = pBuyer - taxRate

  const consumerBurden = pBuyer - eqP
  const producerBurden = eqP - pSeller

  const data = Array.from({ length: 11 }, (_, i) => ({
    q: i,
    demand: Math.max(0, D_INTERCEPT + D_SLOPE * i),
    supply: Math.max(0, S_INTERCEPT + S_SLOPE * i),
    supplyTax: Math.max(0, newSIntercept + S_SLOPE * i),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Tax Incidence Interactive</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            See how a per-unit tax is split between consumers and producers depending on elasticity.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Quantity', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis domain={[0, 14]} label={{ value: 'Price ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine y={pBuyer.toFixed(1)} stroke="#3b82f6" strokeDasharray="4 4" label={{ value: `Buyer $${pBuyer.toFixed(2)}`, fill: '#3b82f6', fontSize: 10 }} />
            <ReferenceLine y={pSeller > 0 ? pSeller.toFixed(1) : 0} stroke="#22c55e" strokeDasharray="4 4" label={{ value: `Seller $${Math.max(0, pSeller).toFixed(2)}`, fill: '#22c55e', fontSize: 10, position: 'right' }} />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2} dot={false} name="Supply (pre-tax)" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="supplyTax" stroke="#ef4444" strokeWidth={2.5} dot={false} name="Supply (post-tax)" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Per-unit tax: ${taxRate}</label>
            <input type="range" min={0} max={6} step={0.5} value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full accent-red-500" aria-label="Per-unit tax" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Demand elasticity: {pedSlider <= 3 ? 'Inelastic' : pedSlider >= 8 ? 'Elastic' : 'Moderate'}</label>
            <input type="range" min={1} max={10} value={pedSlider} onChange={(e) => setPedSlider(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Demand elasticity" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">${Math.max(0, consumerBurden).toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Consumer burden per unit</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-lg font-black text-green-500">${Math.max(0, producerBurden).toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Producer burden per unit</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Cost Curves ─────────────────────────────────────────────────────────── */
function CostCurves() {
  const [tfc, setTfc] = useState(100)
  const [variable, setVariable] = useState(5) // variable cost coefficient

  const data = Array.from({ length: 12 }, (_, q) => {
    if (q === 0) return { q, afc: null, avc: null, atc: null, mc: null }
    const tvc = variable * q + 0.3 * q * q
    const tc = tfc + tvc
    const mc = variable + 0.6 * q
    return {
      q,
      afc: +(tfc / q).toFixed(2),
      avc: +(tvc / q).toFixed(2),
      atc: +(tc / q).toFixed(2),
      mc: +mc.toFixed(2),
    }
  }).filter(d => d.q > 0)

  const minATC = data.reduce((min, d) => d.atc! < min.atc! ? d : min)

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Cost Curves Interactive</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust fixed costs and variable costs to see how ATC, AVC, AFC, and MC shift. MC always intersects ATC at its minimum.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Output (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis domain={[0, 80]} label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={minATC.q} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `Min ATC @ Q=${minATC.q}`, fill: 'var(--accent)', fontSize: 10 }} />
            <Line type="monotone" dataKey="afc" stroke="#94a3b8" strokeWidth={2} dot={false} name="AFC" />
            <Line type="monotone" dataKey="avc" stroke="#22c55e" strokeWidth={2} dot={false} name="AVC" />
            <Line type="monotone" dataKey="atc" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="ATC" />
            <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MC" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Total Fixed Cost: ${tfc}</label>
            <input type="range" min={20} max={300} step={10} value={tfc} onChange={(e) => setTfc(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Total fixed cost" />
            <p className="text-xs text-[var(--muted-fg)]">Higher TFC → AFC curve shifts up, ATC shifts up</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Variable cost factor: {variable}</label>
            <input type="range" min={1} max={10} value={variable} onChange={(e) => setVariable(Number(e.target.value))} className="w-full accent-green-500" aria-label="Variable cost factor" />
            <p className="text-xs text-[var(--muted-fg)]">Higher variable costs → AVC and MC shift up</p>
          </div>
        </div>

        <div className="flex gap-4 text-xs flex-wrap">
          {[['AFC','#94a3b8','Average Fixed Cost'], ['AVC','#22c55e','Average Variable Cost'], ['ATC','#3b82f6','Average Total Cost'], ['MC','#ef4444','Marginal Cost']].map(([k, c, label]) => (
            <div key={k} className="flex items-center gap-1.5">
              <div className="h-2 w-6 rounded-full" style={{ background: c }} />
              <span className="text-[var(--muted-fg)]">{label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── AD/AS Diagram ───────────────────────────────────────────────────────── */
function ADASDiagram() {
  const [adShift, setAdShift] = useState(0)
  const [srasShift, setSrasShift] = useState(0)
  const [showLRAS, setShowLRAS] = useState(true)

  const AD_INT = 14 + adShift * 1.5
  const SRAS_INT = 2 + srasShift * 1.5
  const AD_SLOPE = -0.9
  const SRAS_SLOPE = 0.7
  const LRAS_X = 8

  const eqQ = (AD_INT - SRAS_INT) / (SRAS_SLOPE - AD_SLOPE)
  const eqP = AD_INT + AD_SLOPE * eqQ

  const data = Array.from({ length: 16 }, (_, i) => ({
    q: i,
    ad: Math.max(0, AD_INT + AD_SLOPE * i),
    sras: Math.max(0, SRAS_INT + SRAS_SLOPE * i),
  }))

  const gap = eqQ - LRAS_X
  const gapLabel = Math.abs(gap) < 0.3 ? 'At potential output' : gap > 0 ? 'Inflationary gap' : 'Recessionary gap'
  const gapColor = Math.abs(gap) < 0.3 ? 'text-green-500' : gap > 0 ? 'text-red-500' : 'text-blue-500'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">AD/AS Model Interactive</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Shift AD (demand shocks) and SRAS (supply shocks) to see output gaps and price level changes.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Real GDP', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis domain={[0, 14]} label={{ value: 'Price Level', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={eqQ.toFixed(1)} stroke="var(--accent)" strokeDasharray="4 4" />
            <ReferenceLine y={eqP.toFixed(1)} stroke="var(--accent)" strokeDasharray="4 4" />
            {showLRAS && <ReferenceLine x={LRAS_X} stroke="#a855f7" strokeWidth={2.5} label={{ value: 'LRAS', fill: '#a855f7', fontSize: 11, position: 'top' }} />}
            <Line type="monotone" dataKey="ad" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="AD" />
            <Line type="monotone" dataKey="sras" stroke="#f59e0b" strokeWidth={2.5} dot={false} name="SRAS" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">AD Shift (demand shock): {adShift > 0 ? '+' : ''}{adShift}</label>
            <input type="range" min={-3} max={3} step={0.5} value={adShift} onChange={(e) => setAdShift(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Shift AD curve" />
            <p className="text-xs text-[var(--muted-fg)]">{adShift > 0 ? 'Positive demand shock (stimulus, confidence rise)' : adShift < 0 ? 'Negative demand shock (recession, fear, austerity)' : 'AD neutral'}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-amber-500">SRAS Shift (supply shock): {srasShift > 0 ? '+' : ''}{srasShift}</label>
            <input type="range" min={-3} max={3} step={0.5} value={srasShift} onChange={(e) => setSrasShift(Number(e.target.value))} className="w-full accent-amber-500" aria-label="Shift SRAS curve" />
            <p className="text-xs text-[var(--muted-fg)]">{srasShift > 0 ? 'Favourable supply shock (tech, lower input costs)' : srasShift < 0 ? 'Adverse supply shock (oil crisis, stagflation)' : 'SRAS neutral'}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className={`rounded-xl border-2 px-4 py-2 text-center ${Math.abs(gap) < 0.3 ? 'border-green-500/30 bg-green-500/10' : gap > 0 ? 'border-red-500/30 bg-red-500/10' : 'border-blue-500/30 bg-blue-500/10'}`}>
            <div className={`font-black ${gapColor}`}>{gapLabel}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium GDP: {eqQ.toFixed(1)} | Potential: {LRAS_X}</div>
          </div>
          <button onClick={() => setShowLRAS(!showLRAS)} className="text-xs text-purple-500 border border-purple-500/30 rounded-lg px-3 py-2 hover:bg-purple-500/10 transition-colors">
            {showLRAS ? 'Hide' : 'Show'} LRAS
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── GDP Components ──────────────────────────────────────────────────────── */
function GDPComponents() {
  const [consumption, setConsumption] = useState(65)
  const [investment, setInvestment] = useState(15)
  const [government, setGovernment] = useState(20)
  const [netExports, setNetExports] = useState(-5)

  const gdp = consumption + investment + government + netExports
  const components = [
    { label: 'C — Consumption', value: consumption, color: '#3b82f6', pct: (consumption / gdp * 100).toFixed(1) },
    { label: 'I — Investment', value: investment, color: '#22c55e', pct: (investment / gdp * 100).toFixed(1) },
    { label: 'G — Government', value: government, color: '#f59e0b', pct: (government / gdp * 100).toFixed(1) },
    { label: 'X−M — Net Exports', value: netExports, color: netExports >= 0 ? '#8b5cf6' : '#ef4444', pct: (netExports / gdp * 100).toFixed(1) },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">GDP = C + I + G + (X−M)</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust each component and see its share of GDP. This is the expenditure approach.
          </p>
        </div>

        {/* Bar chart */}
        <div className="space-y-3">
          {components.map(({ label, value, color, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color }} className="font-semibold">{label}</span>
                <span className="text-[var(--muted-fg)]">${value}B ({pct}%)</span>
              </div>
              <div className="h-5 rounded-full bg-[var(--muted)] overflow-hidden">
                <div className="h-full rounded-full transition-all duration-300" style={{ width: `${Math.max(0, (value / 120 * 100))}%`, background: color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-3xl font-black text-[var(--accent)]">GDP = ${gdp}B</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Consumption (C)', val: consumption, set: setConsumption, min: 30, max: 100, color: 'blue' },
            { label: 'Investment (I)', val: investment, set: setInvestment, min: 0, max: 40, color: 'green' },
            { label: 'Government (G)', val: government, set: setGovernment, min: 0, max: 50, color: 'amber' },
            { label: 'Net Exports (X−M)', val: netExports, set: setNetExports, min: -20, max: 20, color: 'purple' },
          ].map(({ label, val, set, min, max, color }) => (
            <div key={label} className="space-y-1">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">{label}: ${val}B</label>
              <input type="range" min={min} max={max} value={val} onChange={(e) => set(Number(e.target.value))} className={`w-full accent-${color}-500`} aria-label={label} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Business Cycle ──────────────────────────────────────────────────────── */
function BusinessCycle() {
  const [phase, setPhase] = useState(2) // 0=trough, 1=recovery, 2=peak, 3=recession

  const phases = [
    { name: 'Trough', color: '#ef4444', gdp: 'Below potential', unemployment: 'High (>6%)', inflation: 'Low (<2%)', policy: 'Expansionary fiscal & monetary policy' },
    { name: 'Recovery', color: '#f59e0b', gdp: 'Rising toward potential', unemployment: 'Falling', inflation: 'Rising moderately', policy: 'Gradual removal of stimulus' },
    { name: 'Peak / Boom', color: '#22c55e', gdp: 'Above potential (inflationary gap)', unemployment: 'Very low (<4%)', inflation: 'High (>3%)', policy: 'Contractionary policy (rate hikes)' },
    { name: 'Recession', color: '#3b82f6', gdp: 'Falling below potential', unemployment: 'Rising', inflation: 'Falling', policy: 'Consider expansionary stimulus' },
  ]

  const cycleData = Array.from({ length: 37 }, (_, i) => ({
    t: i,
    gdp: 50 + 20 * Math.sin((i / 36) * 2 * Math.PI),
    potential: 50,
  }))

  const current = phases[phase]
  const phasePosition = [3, 10, 19, 28]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Business Cycle</h3>
          <p className="text-sm text-[var(--muted-fg)]">Select a phase to see GDP, unemployment, inflation, and appropriate policy response.</p>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={cycleData} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="t" hide />
            <YAxis domain={[20, 80]} hide />
            <ReferenceLine y={50} stroke="#a855f7" strokeWidth={1.5} strokeDasharray="5 5" label={{ value: 'Potential Output', fill: '#a855f7', fontSize: 10, position: 'right' }} />
            <ReferenceLine x={phasePosition[phase]} stroke={current.color} strokeWidth={2} label={{ value: current.name, fill: current.color, fontSize: 11, position: 'top' }} />
            <Line type="monotone" dataKey="gdp" stroke="#3b82f6" strokeWidth={3} dot={false} name="Real GDP" />
          </LineChart>
        </ResponsiveContainer>

        <div className="flex gap-2 flex-wrap">
          {phases.map((p, i) => (
            <button key={p.name} onClick={() => setPhase(i)} className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2 ${phase === i ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'}`} style={phase === i ? { background: p.color, borderColor: p.color } : {}}>
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'GDP', value: current.gdp },
            { label: 'Unemployment', value: current.unemployment },
            { label: 'Inflation', value: current.inflation },
            { label: 'Policy Response', value: current.policy },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-[var(--border)] p-3">
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: current.color }}>{label}</div>
              <div className="text-sm text-[var(--fg)]">{value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Default — shows exercise instructions or placeholder ────────────────── */
function DefaultDiagram({ lessonId, exerciseText }: { lessonId: string; exerciseText?: string }) {
  if (exerciseText) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Ruler className="h-5 w-5 text-[var(--accent)]" />
            <h3 className="font-bold text-[var(--fg)]">Diagram &amp; Exercise</h3>
          </div>
          <p className="text-sm text-[var(--muted-fg)] italic">
            Work through this exercise on paper or in your notes:
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-4 text-sm text-[var(--fg)] leading-relaxed whitespace-pre-line">
            {exerciseText}
          </div>
          <p className="text-xs text-[var(--muted-fg)]">
            Tip: Sketch diagrams by hand — examiners award marks for labelled diagrams, and drawing them yourself reinforces your memory.
          </p>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card>
      <CardContent className="pt-6 text-center text-[var(--muted-fg)] py-12">
        <LayoutGrid className="h-9 w-9 mx-auto mb-3 opacity-50" />
        <p className="font-semibold">Interactive diagram for this lesson is coming soon.</p>
        <p className="text-sm mt-1">Lesson: {lessonId}</p>
      </CardContent>
    </Card>
  )
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
