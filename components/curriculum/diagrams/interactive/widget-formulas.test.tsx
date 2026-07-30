// Value-assertion tests for the most mathematically complex interactive
// widgets — rendered at their default slider state, asserting the exact
// computed numbers that appear in the DOM. Expected values below were
// computed independently (Node scripts replicating each widget's formula,
// not copied from the component under test) before writing each assertion.
//
// This deliberately covers a bounded, high-risk subset (multi-step closed-
// form solves, numeric root-finding, game theory) rather than all ~64
// widgets — the InteractiveDiagram.test.tsx wiring test already covers
// every widget's basic render/no-crash/no-fallback behavior; this file
// adds a second layer of protection specifically for widgets where a
// formula regression would be easy to introduce and hard to notice.

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MonopsonyLabourMarket, LorenzGiniCalculator } from './i3-widgets'
import { SolowGrowthModel } from './ol2-widgets'
import { HeckscherOhlinFactorIntensity, KrugmanNewTradeModel } from './ol6-widgets'
import { OptimalTaxationRamsey } from './ol7-widgets'
import { PovertyTrapDynamics } from './ol8-widgets'
import { TimeValueOfMoney, InvestmentPortfolioRisk } from './dc-widgets'

describe('MonopsonyLabourMarket (default: no minimum wage)', () => {
  it('shows the correct monopsony and competitive equilibrium points', () => {
    render(<MonopsonyLabourMarket />)
    expect(screen.getByText(/7\.2 workers at \$14\.80/)).toBeInTheDocument()
    expect(screen.getByText(/10\.29 workers at \$19\.43/)).toBeInTheDocument()
  })
})

describe('LorenzGiniCalculator (default shares: 4/9/14/22/51)', () => {
  it('computes Gini = 0.428', () => {
    render(<LorenzGiniCalculator />)
    expect(screen.getByText('0.428')).toBeInTheDocument()
  })
})

describe('SolowGrowthModel (default: alpha=0.33, s=0.2, delta=0.06, n=0.01)', () => {
  it('computes steady-state k*, y*, c* and the golden rule', () => {
    render(<SolowGrowthModel />)
    expect(screen.getByText('4.79')).toBeInTheDocument()
    expect(screen.getByText('1.68')).toBeInTheDocument()
    expect(screen.getByText('1.34')).toBeInTheDocument()
    expect(screen.getByText(/s_gold = alpha = 0\.33/)).toBeInTheDocument()
  })
})

describe('HeckscherOhlinFactorIntensity (default: L=120, K=100)', () => {
  it('solves the factor-constraint corner point and abundance ratio', () => {
    render(<HeckscherOhlinFactorIntensity />)
    expect(screen.getByText('46.7')).toBeInTheDocument()
    expect(screen.getByText('26.7')).toBeInTheDocument()
    expect(screen.getByText(/L\/K = 1\.20/)).toBeInTheDocument()
  })
})

describe('KrugmanNewTradeModel (default: S=5000, b=1, F=100, c=5)', () => {
  it('shows more firms (not doubled), higher output, lower price after integrating into a 2x market', () => {
    render(<KrugmanNewTradeModel />)
    expect(screen.getByText('7.07')).toBeInTheDocument()
    expect(screen.getByText('10.00')).toBeInTheDocument()
    expect(screen.getByText('121.4')).toBeInTheDocument()
    expect(screen.getByText('180.0')).toBeInTheDocument()
  })
})

describe('OptimalTaxationRamsey (default: PED_A=1.8, PED_B=0.5, revenue=$800)', () => {
  it('shows the Ramsey allocation raising less deadweight loss than the uniform-tax alternative', () => {
    render(<OptimalTaxationRamsey />)
    expect(screen.getByText('$70.24')).toBeInTheDocument()
    expect(screen.getByText('$164.00')).toBeInTheDocument()
  })
})

describe('PovertyTrapDynamics (default: s=30%, A=10, k0=0.3)', () => {
  it('starts below the unstable threshold (~0.38) and converges to the low trap (k*=0)', () => {
    render(<PovertyTrapDynamics />)
    expect(screen.getByText(/Converges to k\* = 0\.00 \(the low trap\)/)).toBeInTheDocument()
  })
})

describe('TimeValueOfMoney (default: rate=8%)', () => {
  it("shows the Rule of 72 estimate close to the exact doubling time", () => {
    render(<TimeValueOfMoney />)
    expect(screen.getByText('9.0 yrs')).toBeInTheDocument()
    expect(screen.getByText('9.01 yrs')).toBeInTheDocument()
  })
})

describe('InvestmentPortfolioRisk (default: 60% stocks, correlation=0)', () => {
  it('shows the exact 2-asset portfolio variance formula result, below the naive weighted-average risk', () => {
    render(<InvestmentPortfolioRisk />)
    expect(screen.getByText('6.60%')).toBeInTheDocument()
    expect(screen.getByText('10.98%')).toBeInTheDocument()
  })
})
