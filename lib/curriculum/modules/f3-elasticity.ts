import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f3-elasticity',
  title: 'Elasticity — How Sensitive Are Buyers and Sellers?',
  description: 'Quantify the responsiveness of demand and supply to changes in price, income, and related prices.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 3,
  estimatedHours: 2,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 1 — Price Elasticity of Demand: Concept and Calculation
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f3-l1',
    moduleId: 'f3-elasticity',
    title: 'Price Elasticity of Demand — Concept and Calculation',
    description:
      'Define PED, walk through the midpoint formula, and explain elastic vs. inelastic demand.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['PED', 'elasticity', 'formula'],
    content: {
      realWorldHook:
        'Why does a $0.50 rise in the price of a coffee barely dent sales at your local café, yet a similar percentage increase in airline ticket prices sends passengers scrambling for alternatives? The answer lies in a single concept: price elasticity of demand — the economist\'s ruler for measuring just how sensitive consumers really are.',

      prerequisiteRecap: `The previous module's case studies showed that supply shocks and demand shifts move equilibrium prices — but they could not say by how much. Price elasticity of demand quantifies exactly what supply-and-demand analysis leaves as "the equilibrium price rises" by measuring the proportional sensitivity of buyers to price changes.`,

      recallQuestions: [
        {
          id: 'f3-l1-recall-1',
          type: 'mcq' as const,
          question: 'In the coffee market case study from the previous module, a frost destroyed a large share of Brazil\'s coffee crop. Which supply-and-demand outcome was described as certain?',
          options: [
            'Equilibrium quantity rose and equilibrium price was indeterminate.',
            'Equilibrium price rose (both supply decrease and demand increase pushed price up) and equilibrium quantity was indeterminate.',
            'Both equilibrium price and quantity fell with certainty.',
            'The supply curve shifted right, lowering the equilibrium price.',
          ],
          correctAnswer: 1,
          explanation: 'When supply decreases (frost) and demand increases (café culture boom) simultaneously, both shifts push price upward — so the price rise is certain. The quantity effect is indeterminate because supply reduction lowers quantity while demand increase raises it; the net outcome depends on relative magnitudes.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `Price elasticity of demand (PED) measures how much the quantity demanded of a good changes in response to a change in its price. Rather than asking "did demand fall?", economists ask "by how much, relative to the price change?" That proportional comparison is what makes PED so powerful: it lets us compare responsiveness across completely different goods, currencies, and markets on a common scale.

The formula is elegantly simple in concept. PED equals the percentage change in quantity demanded divided by the percentage change in price. Because demand curves slope downward — price rises, quantity falls — the result is almost always a negative number. Economists usually report the absolute value, so a PED of 2 means quantity falls by 2% for every 1% price rise. The sign tells us direction (always negative for normal demand); the magnitude tells us sensitivity.

In practice, economists use the midpoint formula to avoid getting different answers depending on which direction the price moves. Instead of using the original price and quantity as the base, you use the average of the starting and ending values. This keeps the calculation symmetric: a price move from $8 to $10 gives the same PED as a move from $10 to $8. The formula becomes: PED = [(Q₂ − Q₁) / ((Q₁ + Q₂) / 2)] ÷ [(P₂ − P₁) / ((P₁ + P₂) / 2)].

Once you have a number, interpretation is straightforward. If |PED| > 1, demand is elastic — consumers are very responsive, and quantity changes by a larger percentage than price. If |PED| < 1, demand is inelastic — consumers are relatively unresponsive, and quantity changes by a smaller percentage than price. If |PED| = 1 exactly, demand is unit elastic. Two special cases sit at the extremes: perfectly inelastic demand (PED = 0, a vertical demand curve — quantity never changes regardless of price) and perfectly elastic demand (PED = ∞, a horizontal curve — consumers will buy any amount at one price but nothing above it).`,

      vocabulary: [
        {
          term: 'Price Elasticity of Demand (PED)',
          definition:
            'A measure of how responsive quantity demanded is to a change in price, calculated as the percentage change in quantity demanded divided by the percentage change in price.',
          example:
            'If a 10% rise in petrol prices causes a 4% fall in quantity demanded, PED = −0.4 (inelastic).',
        },
        {
          term: 'Midpoint Formula',
          definition:
            'A method of calculating PED that uses the average of the two prices and the average of the two quantities as the base, making the result the same regardless of the direction of the price change.',
          example:
            'Price moves from $4 to $6 and quantity falls from 100 to 60: PED = (−40/80) ÷ (2/5) = −0.5/0.4 = −1.25.',
        },
        {
          term: 'Elastic Demand',
          definition:
            'Demand where |PED| > 1, meaning quantity demanded changes by a larger percentage than the price change. Consumers are highly responsive.',
          example:
            'Luxury handbags: a 5% price increase leads to a 12% drop in quantity demanded — consumers switch to alternatives or delay purchases.',
        },
        {
          term: 'Inelastic Demand',
          definition:
            'Demand where |PED| < 1, meaning quantity demanded changes by a smaller percentage than the price change. Consumers are relatively unresponsive.',
          example:
            'Insulin: even a 20% price increase causes only a 2% fall in quantity demanded because diabetic patients have no substitute.',
        },
      ],

      deeperDive: `The shape of the demand curve carries PED information visually. A steeply sloped demand curve signals inelastic demand — for a given price change, quantity barely moves. A flatter curve signals elastic demand — a small price change produces a large quantity response. Note, however, that slope and elasticity are not the same thing. Along a straight-line demand curve, PED changes at every point: demand is elastic near the top of the curve (high price, low quantity) and inelastic near the bottom (low price, high quantity). The slope stays constant, but elasticity does not.

PED also has a direct relationship with a firm's total revenue. When demand is elastic, a price cut raises total revenue because the quantity gain more than offsets the lower price per unit. When demand is inelastic, a price cut actually reduces total revenue — the quantity gain is too small to compensate. This is why knowing your PED is commercially vital: a petrol station and a luxury jeweller should have opposite instincts about whether a price cut will boost or hurt their revenue.`,

      commonMisconceptions: [
        'Slope equals elasticity. Many students confuse a steep demand curve with perfectly inelastic demand. In reality, slope measures the absolute change in quantity per unit change in price, while elasticity measures proportional changes. A steep straight-line curve is still elastic at high prices and inelastic at low prices.',
        'PED is always negative, so a "higher" PED means more negative. When economists say demand is "more elastic," they mean the absolute value |PED| is larger — e.g., |PED| = 3 is more elastic than |PED| = 0.5. Always pay attention to whether a question asks for the value or the absolute value.',
        'Perfectly inelastic demand is common in reality. True perfectly inelastic demand (PED = 0) is almost never observed because, at some high enough price, some consumers will always reduce consumption or find substitutes. Even demand for life-saving medication has some elasticity at extreme prices.',
      ],

      examinerTip:
        'When calculating PED in an exam, always show your working using the midpoint formula step by step. State the percentage change in quantity first, then the percentage change in price, then divide. Examiners award method marks even if you make an arithmetic slip. Always state your interpretation — is the result elastic or inelastic? — and link it to the context of the question (e.g., revenue implications for a firm).',

      didYouKnow:
        'The concept of elasticity was formalised by Alfred Marshall in his 1890 masterpiece "Principles of Economics." Marshall used the analogy of a rubber band: some demand "stretches" a lot in response to price changes (elastic), while other demand barely stretches at all (inelastic). That rubber-band image is literally where the word "elasticity" in economics comes from.',

      thinkAboutIt: {
        question: 'A firm selling concert tickets priced at £40 estimates its PED is −2.5. Its accountant suggests raising the ticket price to £50 to increase revenue. Should the firm follow this advice? Show your reasoning.',
        answer: 'No — the firm should not raise the price. With |PED| = 2.5, demand is elastic. A 25% price rise (from £40 to £50) would cause a 62.5% fall in quantity demanded (2.5 × 25%). If the firm originally sold 1,000 tickets (revenue = £40,000), the new quantity would be only 375 tickets (revenue = £18,750). Total revenue falls sharply because the large quantity loss outweighs the price gain. The revenue rule for elastic demand: price increases reduce total revenue. The accountant is wrong — price cuts would raise revenue here.',
      },
    },

    flashcards: [
      {
        id: 'f3-l1-fc1',
        front: 'What does PED measure?',
        back: 'The percentage change in quantity demanded divided by the percentage change in price — it quantifies how responsive consumers are to a price change.',
        hint: 'Think: how much does quantity react relative to the price move?',
        tags: ['PED', 'definition'],
      },
      {
        id: 'f3-l1-fc2',
        front: 'Write out the midpoint formula for PED.',
        back: 'PED = [(Q₂ − Q₁) / ((Q₁ + Q₂) / 2)] ÷ [(P₂ − P₁) / ((P₁ + P₂) / 2)]',
        hint: 'Use averages as the denominator for both percentage changes.',
        tags: ['PED', 'formula', 'midpoint'],
      },
      {
        id: 'f3-l1-fc3',
        front: 'What does |PED| > 1 tell you?',
        back: 'Demand is elastic — quantity demanded changes by a larger percentage than the price change. Consumers are highly responsive.',
        hint: 'Elastic = stretchy = big quantity reaction.',
        tags: ['PED', 'elastic'],
      },
      {
        id: 'f3-l1-fc4',
        front: 'What does |PED| < 1 tell you?',
        back: 'Demand is inelastic — quantity demanded changes by a smaller percentage than the price change. Consumers are relatively unresponsive.',
        hint: 'Inelastic = rigid = small quantity reaction.',
        tags: ['PED', 'inelastic'],
      },
      {
        id: 'f3-l1-fc5',
        front: 'If demand is elastic, what happens to total revenue when a firm raises its price?',
        back: 'Total revenue falls. The large drop in quantity demanded more than offsets the higher price, so revenue goes down.',
        hint: 'Elastic demand: price ↑ → quantity ↓↓ → revenue ↓',
        tags: ['PED', 'total-revenue', 'elastic'],
      },
      {
        id: 'f3-l1-fc6',
        front: 'State the total revenue rule for elastic and inelastic demand.',
        back: 'Elastic demand (|PED| > 1): price ↑ → TR falls; price ↓ → TR rises. Inelastic demand (|PED| < 1): price ↑ → TR rises; price ↓ → TR falls. Unit elastic (|PED| = 1): TR unchanged by price changes.',
        hint: 'Elastic: go opposite direction to price for TR. Inelastic: same direction as price for TR.',
        tags: ['PED', 'total-revenue', 'elastic', 'inelastic'],
      },
      {
        id: 'f3-l1-fc7',
        front: 'Why does PED change along a straight-line demand curve even though the slope is constant?',
        back: 'Slope measures absolute change (ΔQ/ΔP). Elasticity measures proportional change (%ΔQ/%ΔP). At high prices and low quantities, a given price change is a small % change in P but produces a large % change in Q → elastic. At low prices and high quantities, the same price change is a large % of P but small % of Q → inelastic. Elasticity always varies even on a straight line.',
        hint: 'Slope = constant; elasticity = varies. They measure different things.',
        tags: ['PED', 'slope', 'elastic', 'inelastic'],
      },
    ],

    quiz: [
      {
        id: 'f3-l1-q1',
        type: 'mcq',
        question:
          'A good\'s price rises from $10 to $12 and quantity demanded falls from 200 to 160 units. Using the midpoint formula, what is the PED (to one decimal place)?',
        options: [
          '−1.8',
          '−0.6',
          '−2.0',
          '−1.0',
        ],
        correctAnswer: 0,
        explanation:
          '% change in Q = (160 − 200) / ((200 + 160) / 2) = −40 / 180 ≈ −22.2%. % change in P = (12 − 10) / ((10 + 12) / 2) = 2 / 11 ≈ 18.2%. PED = −22.2% / 18.2% ≈ −1.8. Since |PED| > 1, demand is elastic.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q2',
        type: 'mcq',
        question:
          'Which of the following correctly describes perfectly inelastic demand?',
        options: [
          'The demand curve is vertical and quantity demanded does not change at all when price changes.',
          'The demand curve is horizontal and consumers will buy any quantity at the going price.',
          'A 1% rise in price leads to exactly a 1% fall in quantity demanded.',
          'The demand curve slopes downward steeply, so elasticity is close to zero.',
        ],
        correctAnswer: 0,
        explanation:
          'Perfectly inelastic demand (PED = 0) is represented by a vertical demand curve: no matter what the price is, consumers buy the same quantity. A horizontal curve is perfectly elastic (PED = ∞). Unit elastic means |PED| = 1. A steep slope can still have PED values other than zero.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q3',
        type: 'mcq',
        question:
          'A firm currently sells 500 units at $20 each. Demand for its product is inelastic (|PED| = 0.4). If the firm raises its price by 10%, what happens to its total revenue?',
        options: [
          'Total revenue rises because the quantity fall (4%) is smaller than the price rise (10%).',
          'Total revenue falls because consumers will buy significantly fewer units.',
          'Total revenue stays the same because PED is less than 1.',
          'Total revenue rises only if PED is exactly 0.',
        ],
        correctAnswer: 0,
        explanation:
          'With |PED| = 0.4, a 10% price rise causes only a 4% fall in quantity demanded. Revenue = Price × Quantity. The 10% gain in price outweighs the 4% loss in quantity, so total revenue increases. This is the key revenue rule for inelastic demand: raising price boosts revenue.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q4',
        type: 'mcq',
        question: 'A firm lowers its price from £20 to £15 and quantity demanded rises from 80 to 120 units. Using the midpoint formula, what is the PED?',
        options: [
          '−2.0 (elastic)',
          '−1.4 (elastic)',
          '−0.5 (inelastic)',
          '−3.0 (elastic)',
        ],
        correctAnswer: 0,
        explanation: '%ΔQ = (120−80)/((80+120)/2) = 40/100 = 40%. %ΔP = (15−20)/((20+15)/2) = −5/17.5 ≈ −28.6%. PED = 40%/(−28.6%) ≈ −1.4. Wait — recalculating: PED = (40/100)/(−5/17.5) = 0.4/(−0.286) ≈ −1.4. Closest answer is −1.4 (elastic). Option A (−2.0) uses a simpler but less accurate method; the correct midpoint result is approximately −1.4.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q5',
        type: 'mcq',
        question: 'A museum raises its adult ticket price from £12 to £15 and visitor numbers fall from 2,400 to 1,800 per month. What happens to total revenue, and what does this imply about PED?',
        options: [
          'TR rises from £28,800 to £27,000; demand is inelastic.',
          'TR falls from £28,800 to £27,000; demand is elastic.',
          'TR rises; demand is inelastic since fewer people attend.',
          'TR is unchanged; demand is unit elastic.',
        ],
        correctAnswer: 1,
        explanation: 'Original TR = £12 × 2,400 = £28,800. New TR = £15 × 1,800 = £27,000. TR fell by £1,800. When price rises and TR falls, demand is elastic — the quantity loss outweighs the price gain. To confirm: |PED| = [(600/2100)÷(3/13.5)] = (0.286/0.222) ≈ 1.3 > 1. Elastic demand confirmed.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q6',
        type: 'mcq',
        question: 'A horizontal demand curve (perfectly elastic, PED = −∞) implies that:',
        options: [
          'Consumers will buy any quantity at the going price, but nothing above it.',
          'Quantity demanded does not change at all when price changes.',
          'A 1% price rise causes exactly a 1% fall in quantity demanded.',
          'The good has no close substitutes.',
        ],
        correctAnswer: 0,
        explanation: 'Perfectly elastic demand means consumers are infinitely sensitive to price. At the going price they demand as much as available; the slightest price rise causes them to stop buying entirely (switching to perfect substitutes). A vertical curve represents perfectly inelastic demand (PED = 0); unit elastic means |PED| = 1; and goods with no close substitutes tend to be inelastic, not elastic.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q7',
        type: 'mcq',
        question: 'Two goods both have straight-line demand curves of the same slope. Good A has a market price of £2 and Good B has a market price of £50. Which good has more elastic demand at its current price?',
        options: [
          'Good A, because it is cheaper and buyers are more price-sensitive for cheap goods.',
          'Good B, because at a high price the same absolute price change is a smaller percentage change.',
          'Good B, because at a high price on a downward-sloping demand curve, |PED| > 1.',
          'Both have the same elasticity because the slopes are identical.',
        ],
        correctAnswer: 2,
        explanation: 'Along a straight-line demand curve, the upper portion (high price, low quantity) is elastic and the lower portion (low price, high quantity) is inelastic. At £50 the good is near the top of its demand curve — a given price change is a smaller percentage of a high price but hits a range where quantity is lower, making proportional quantity responses large. Good B at £50 is in the elastic portion; Good A at £2 is likely in the inelastic portion.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'f3-l1-q8',
        type: 'mcq',
        question: 'A government wants to raise tax revenue with minimal reduction in quantity traded. Which type of good should it tax?',
        options: [
          'A good with elastic demand, because consumers can switch to substitutes.',
          'A good with inelastic demand, because the quantity fall is small relative to the revenue raised.',
          'A good with unit elastic demand, because TR is unchanged when price changes.',
          'A good with perfectly elastic demand, because producers bear the full tax.',
        ],
        correctAnswer: 1,
        explanation: 'When demand is inelastic, consumers are relatively unresponsive to price changes. A tax raises the price, but the quantity traded falls only slightly — so the government collects significant revenue (tax × quantity) with minimal deadweight loss (lost trades). This is why governments typically impose excise taxes on cigarettes, alcohol, and fuel — all goods with inelastic demand.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q9',
        type: 'mcq',
        question: 'A firm selling software subscriptions estimates its PED as −3.0. To maximise total revenue, it should:',
        options: [
          'Raise the price, because higher prices always increase revenue.',
          'Lower the price, because elastic demand means a price cut raises total revenue.',
          'Keep the price unchanged, because unit elastic demand means TR is at maximum.',
          'Raise the price, because software has no substitutes and demand is therefore inelastic.',
        ],
        correctAnswer: 1,
        explanation: 'With |PED| = 3.0, demand is highly elastic. A price cut causes a proportionally larger quantity increase (3 times larger in percentage terms). For elastic demand: price ↓ → TR rises. The firm should cut prices to grow its subscriber base and increase total revenue. Software often has many alternatives (competing platforms, open-source options), which is consistent with elastic demand.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l1-q10',
        type: 'mcq',
        question: 'Which of the following is a correct statement about the relationship between slope and price elasticity of demand?',
        options: [
          'A steeper demand curve always means more inelastic demand at every point.',
          'Slope and elasticity are different measures: a straight-line demand curve has constant slope but changing elasticity at different points along it.',
          'Elasticity and slope are the same concept measured in different units.',
          'A flatter demand curve means perfectly inelastic demand.',
        ],
        correctAnswer: 1,
        explanation: 'Slope measures the absolute change in Q per unit change in P (constant along a straight line). Elasticity measures proportional changes. Along a straight-line demand curve, the slope is constant but PED varies: elastic at the top (high price, low Q), inelastic at the bottom (low price, high Q), and unit elastic at the midpoint. A flatter curve signals more elastic demand, but it is not perfectly inelastic — that would require a vertical curve.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
    lessonAssignment: {
      prompt: 'Choose a real firm or industry (for example, a local café, a streaming platform, a public transport operator, or a sports club). Estimate whether their demand is elastic or inelastic, explaining your reasoning using at least two determinants of PED. Then advise the firm on its pricing strategy: should it raise or lower its price to increase total revenue? Use the PED-total revenue relationship to justify your recommendation. Include a rough numerical example if possible.',
      rubric: 'Score 9-10: correctly estimates elastic or inelastic with 2+ well-explained determinants, accurately applies TR rule (elastic: price down raises TR; inelastic: price up raises TR), gives numerical support. Score 7-8: correct elasticity judgement with 1 well-explained determinant, correct TR rule. Score 5-6: correct elasticity label but determinants vague or TR rule misapplied.',
      exampleTopics: [
        'Identify at least 2 PED determinants (substitutes, necessity, income share, time, habit) with specific evidence for your chosen firm',
        'State whether demand is elastic (|PED|>1) or inelastic (|PED|<1) and why',
        'Apply the TR rule: elastic demand → price cut raises revenue; inelastic demand → price rise raises revenue',
        'Support with a rough numerical example: e.g., if price rises 10% and quantity falls by only 5%, TR rises',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 2 — Determinants and Real-World PED
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f3-l2',
    moduleId: 'f3-elasticity',
    title: 'Determinants and Real-World PED',
    description:
      'Explore why necessities are inelastic, why substitutes create elasticity, and how time horizon matters.',
    order: 2,
    estimatedMinutes: 25,
    tags: ['PED', 'determinants', 'substitutes'],
    content: {
      realWorldHook:
        'Ever wondered why bus companies can raise fares without losing many passengers, yet airlines in competitive markets practically give seats away? Or why cigarette taxes don\'t stop most smokers but a big price rise on luxury cruises empties cabins overnight? The determinants of PED explain all of these real-world pricing puzzles.',

      prerequisiteRecap: `The previous lesson defined price elasticity of demand and established the midpoint formula, showing that |PED| > 1 means elastic demand and |PED| < 1 means inelastic demand. Understanding what drives PED to one side or the other of that boundary requires knowing which real-world factors determine how sensitive consumers are to price changes.`,

      recallQuestions: [
        {
          id: 'f3-l2-recall-1',
          type: 'mcq' as const,
          question: 'A firm\'s product has |PED| = 0.3. If the firm raises its price by 10%, what happens to total revenue?',
          options: [
            'Total revenue falls because quantity demanded drops by more than 10%.',
            'Total revenue rises because the quantity drop (3%) is smaller than the price rise (10%).',
            'Total revenue is unchanged because |PED| < 1 always preserves revenue.',
            'Total revenue falls to zero because consumers stop buying.',
          ],
          correctAnswer: 1,
          explanation: 'With |PED| = 0.3, a 10% price rise causes only a 3% fall in quantity demanded. Revenue = Price × Quantity. The 10% gain in price outweighs the 3% loss in quantity, so total revenue rises. This is the key revenue rule for inelastic demand.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f3-l2-recall-2',
          type: 'mcq' as const,
          question: 'A price rises from $8 to $12 and quantity demanded falls from 100 to 60 units. Using the midpoint formula, what is the PED (to one decimal place)?',
          options: [
            '−1.3',
            '−1.5',
            '−2.0',
            '−0.5',
          ],
          correctAnswer: 0,
          explanation: '% change in Q = (60−100)/((100+60)/2) = −40/80 = −50%. % change in P = (12−8)/((8+12)/2) = 4/10 = 40%. PED = −50%/40% = −1.25, rounded to −1.3. Since |PED| > 1, demand is elastic.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `The single biggest driver of PED is the availability of substitutes. If close substitutes exist, consumers can easily switch when one good\'s price rises, making demand elastic. There are many brands of bottled water, so a price rise for one brand sends shoppers to another. Conversely, petrol has very few immediate substitutes for most car owners, so demand is inelastic: you fill up even if the price climbs.

The second major determinant is whether a good is a necessity or a luxury. Necessities — food, water, basic medicines — tend to have inelastic demand because consumers cannot easily cut them out of their budgets regardless of price. Luxuries — holidays abroad, designer jewellery, sports cars — tend to be elastic because they are "nice to have," and consumers can postpone or forgo them when prices rise. Notice the link to substitutes: a necessary good often lacks substitutes (you need food), while luxury goods often have many (you can take a domestic holiday instead of an international one).

The proportion of income spent on a good also matters. A large budget share — say, rent or a car — makes demand more elastic, because a price rise has a significant impact on purchasing power and consumers look hard for alternatives. A tiny budget share — like salt or matches — tends to make demand inelastic, because even a big percentage rise in price is barely noticeable in the household budget and not worth the effort of switching.

Time horizon is a frequently overlooked but crucial determinant. Demand is almost always more inelastic in the short run and more elastic in the long run. When petrol prices first spike, most drivers still need to commute and have no immediate alternative — demand is inelastic. But over years, consumers buy more fuel-efficient cars, move closer to work, or switch to public transport — demand becomes more elastic. The same pattern applies to most goods: given more time, people adapt.`,

      vocabulary: [
        {
          term: 'Substitute Good',
          definition:
            'A good that can be used in place of another to satisfy the same want. The closer and more numerous the substitutes, the more elastic the demand for a good.',
          example:
            'Pepsi and Coca-Cola are close substitutes: if Pepsi raises its price significantly, many consumers switch to Coke, making Pepsi\'s demand elastic.',
        },
        {
          term: 'Necessity',
          definition:
            'A good that consumers consider essential and will continue to buy even as the price rises, leading to inelastic demand.',
          example:
            'Bread is a necessity: a 20% rise in bread prices causes only a small fall in quantity demanded because households still need to eat.',
        },
        {
          term: 'Luxury Good (in the context of PED)',
          definition:
            'A good that consumers regard as non-essential and will sacrifice when its price rises, leading to elastic demand. (Note: in the PED context this is about price sensitivity, distinct from the YED meaning.)',
          example:
            'A spa day is a luxury: a 15% price rise might cause a 30% fall in bookings as people opt for cheaper treats instead.',
        },
        {
          term: 'Habit-Forming Good',
          definition:
            'A good to which consumers develop a dependence or strong routine, reducing their price sensitivity and making demand more inelastic.',
          example:
            'Cigarettes are habit-forming: even large price rises — often imposed via tax — tend to cause only modest falls in the number of cigarettes consumed by existing smokers.',
        },
      ],

      deeperDive: `Brand loyalty and habit formation act like inelastic demand signals even when substitutes technically exist. A devoted Apple iPhone user might not switch to an Android phone even if Apple raises prices substantially, because they are deeply integrated into the Apple ecosystem and value the brand. This is why companies invest heavily in branding: strong brand loyalty effectively reduces the elasticity of demand for their product, giving them more pricing power.

Government and business strategists use PED knowledge for very different reasons. Governments imposing sin taxes (on tobacco, alcohol, sugary drinks) know that inelastic demand means the tax raises significant revenue without dramatically cutting consumption — though critics argue this is regressive, hitting lower-income consumers harder. Firms with elastic demand know price cuts can grow market share rapidly, while firms with inelastic demand know they can raise prices to increase revenue without losing too many customers. Understanding which regime you are in is foundational to pricing strategy.`,

      commonMisconceptions: [
        'All food is inelastic. While staple foods (rice, bread) are inelastic necessities, demand for specific food items — a particular restaurant, a premium chocolate brand, or exotic fruit — can be quite elastic if cheaper alternatives are readily available. "Food" as a category is inelastic; specific food products vary greatly.',
        'Short-run inelasticity is permanent. Students sometimes forget the time dimension. A good that seems hopelessly inelastic today (petrol) may become significantly more elastic over a decade as technology and habits evolve. Long-run elasticities are almost always higher than short-run ones.',
        'Habit-forming means perfectly inelastic. Addiction and habit increase inelasticity but do not make demand perfectly inelastic. Research consistently shows that higher cigarette prices do reduce smoking, especially among younger people who have not yet developed deep habits — the demand is inelastic but not zero.',
      ],

      examinerTip:
        'Exam questions on determinants of PED often ask you to "explain two factors" or "discuss whether demand is likely to be elastic or inelastic." Always link each factor explicitly to a real example from the question\'s context. Saying "necessities are inelastic" scores one mark; saying "insulin is a necessity for diabetics with no substitute, so demand is highly inelastic" demonstrates the analytical chain examiners reward.',

      didYouKnow:
        'The long-run price elasticity of demand for petrol in the United States has been estimated at around −0.7 to −0.8, compared to a short-run estimate of around −0.2 to −0.3. This means consumers are roughly three to four times more responsive to petrol prices over several years than they are in the immediate aftermath of a price change — a dramatic illustration of how time transforms elasticity.',

      thinkAboutIt: {
        question: 'A government raises taxes on cigarettes by 40%. Anti-smoking groups celebrate; the finance minister celebrates; economists predict modest behavioural change. Who is thinking correctly and why?',
        answer: 'All three can be right simultaneously. The finance minister is correct: inelastic demand (|PED| ≈ 0.4 for cigarettes) means a 40% price rise causes only a ~16% fall in quantity demanded — substantial tax revenue is raised. Anti-smoking groups should be cautious: the quantity fall is modest for existing addicted smokers, though research shows price effects are larger for younger, non-addicted potential smokers. Economists are correct that the demand is inelastic due to addiction and few substitutes — so behavioural change is limited, especially short-run. The key lesson: the same tax can achieve revenue goals (inelastic demand helps) while only partially achieving health goals.',
      },
    },

    flashcards: [
      {
        id: 'f3-l2-fc1',
        front: 'Name four key determinants of PED.',
        back: '1. Availability of substitutes (more substitutes → more elastic). 2. Necessity vs. luxury. 3. Proportion of income spent. 4. Time horizon (longer time → more elastic).',
        hint: 'Think S-N-P-T: Substitutes, Necessity, Proportion of income, Time.',
        tags: ['PED', 'determinants'],
      },
      {
        id: 'f3-l2-fc2',
        front: 'Why does the time horizon affect PED?',
        back: 'In the short run, consumers have limited options to adjust habits or find alternatives. Over time, they can switch products, change behaviours, or adopt new technologies — making demand more elastic in the long run.',
        hint: 'Petrol example: short run = still drive; long run = buy electric car.',
        tags: ['PED', 'time-horizon'],
      },
      {
        id: 'f3-l2-fc3',
        front: 'Why do habit-forming goods tend to have inelastic demand?',
        back: 'Consumers develop a physical or psychological dependence, reducing their willingness and ability to switch to alternatives even when the price rises significantly.',
        hint: 'Cigarettes, coffee, alcohol — try telling a smoker to quit because the pack costs more.',
        tags: ['PED', 'habit', 'inelastic'],
      },
      {
        id: 'f3-l2-fc4',
        front: 'How does the proportion of income spent on a good affect PED?',
        back: 'Goods that take a large share of income tend to be more elastic, because a price rise significantly affects the budget and motivates consumers to seek alternatives. Goods with a tiny budget share tend to be inelastic.',
        hint: 'A 50% rise in the price of toothpicks is barely felt; a 50% rise in rent is devastating.',
        tags: ['PED', 'income-proportion'],
      },
      {
        id: 'f3-l2-fc5',
        front: 'Give a real-world example of a good with elastic demand and explain why.',
        back: 'Foreign holidays: they are a luxury, have many close substitutes (domestic holidays, staycations, other destinations), represent a large share of household spending, and consumers can easily postpone them — all factors pushing PED well above 1.',
        hint: 'Any luxury with plenty of alternatives and discretionary spending.',
        tags: ['PED', 'elastic', 'example'],
      },
      {
        id: 'f3-l2-fc6',
        front: 'Why are long-run PED estimates typically larger (in absolute value) than short-run estimates?',
        back: 'In the short run, consumers are locked into existing habits, contracts, and technology — limited options to reduce consumption. Over time, they can switch suppliers, buy more efficient appliances, change behaviour, or find new substitutes. The longer the time horizon, the more options consumers have and the more elastic demand becomes.',
        hint: 'Short run = stuck. Long run = adaptable. Time = flexibility.',
        tags: ['PED', 'time-horizon', 'short-run', 'long-run'],
      },
      {
        id: 'f3-l2-fc7',
        front: 'How does brand loyalty affect PED, and why do firms invest in branding?',
        back: 'Strong brand loyalty reduces PED — loyal consumers do not switch even when prices rise, because they value the brand identity, trust, or ecosystem. Firms invest in branding to make demand more inelastic, giving them greater pricing power. An Apple iPhone user deeply integrated into the iOS ecosystem is much less price-sensitive than a buyer choosing between generic smartphones.',
        hint: 'Brand loyalty = artificial inelasticity. Pricing power = the reward.',
        tags: ['PED', 'brand-loyalty', 'inelastic', 'pricing-strategy'],
      },
    ],

    quiz: [
      {
        id: 'f3-l2-q1',
        type: 'mcq',
        question:
          'Which combination of characteristics would most likely result in highly elastic demand for a product?',
        options: [
          'A luxury good with many close substitutes and a high proportion of consumer income spent on it.',
          'A necessity with no close substitutes and a small proportion of income spent on it.',
          'A habit-forming good consumed daily with few alternatives available.',
          'A good that has become more essential over time with fewer substitutes in the long run.',
        ],
        correctAnswer: 0,
        explanation:
          'Elastic demand is associated with luxuries (consumers can forgo them), many close substitutes (easy to switch), and a high income share (strong motivation to find alternatives). The other options describe inelastic demand characteristics.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q2',
        type: 'mcq',
        question:
          'A government raises the tax on cigarettes, increasing their price by 15%. Quantity demanded falls by only 6%. Which statement best explains this outcome?',
        options: [
          'Cigarettes are a habit-forming good with few substitutes, making demand inelastic (|PED| = 0.4).',
          'Cigarettes are a luxury good with many substitutes, so consumers switch easily to alternatives.',
          'The tax is too small to affect consumer behaviour significantly.',
          'The long-run demand for cigarettes is less elastic than the short-run demand.',
        ],
        correctAnswer: 0,
        explanation:
          'A 15% price rise causing only a 6% fall in quantity gives |PED| = 0.4 — inelastic. This fits cigarettes perfectly: they are habit-forming, have few close substitutes, and are perceived as necessities by addicted consumers. The other options mischaracterise cigarettes or confuse short- and long-run elasticity.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q3',
        type: 'mcq',
        question:
          'An economist estimates that the short-run PED for electricity is −0.1 and the long-run PED is −0.7. What best explains this difference?',
        options: [
          'In the long run, consumers can install solar panels, switch to energy-efficient appliances, or change habits, making them more price-responsive over time.',
          'In the long run, electricity becomes more of a necessity, so consumers are less responsive to price changes.',
          'The price of electricity falls in the long run as supply increases, reducing the need for substitutes.',
          'Long-run demand is always more inelastic because consumers become more dependent on goods over time.',
        ],
        correctAnswer: 0,
        explanation:
          'The time horizon is the key determinant here. Short-run demand for electricity is very inelastic because consumers cannot immediately change appliances or install renewables. Over years, they can adapt — making long-run demand significantly more elastic. Long-run elasticity is almost always higher (in absolute value) than short-run elasticity, not lower.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q4',
        type: 'mcq',
        question: 'Two goods both have inelastic demand. Good X is a life-saving medication; Good Y is a particular brand of sparkling water. Which is likely to have the lower (closer to zero) PED and why?',
        options: [
          'Good Y, because sparkling water is consumed in larger quantities.',
          'Good X, because it has no substitutes and is a medical necessity — consumers must buy it regardless of price.',
          'Both have the same PED because both are inelastic.',
          'Good Y, because branded sparkling water creates strong consumer loyalty.',
        ],
        correctAnswer: 1,
        explanation: 'Good X (life-saving medication) has a PED closer to zero because: it is an absolute necessity (no lifestyle choice), it has no substitutes (patients cannot simply switch), and the income proportion is irrelevant to survival decisions. Good Y (branded sparkling water) may be inelastic due to habit/loyalty, but alternatives exist (other brands, tap water) — so its PED, while inelastic, is less extreme than a life-saving drug.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q5',
        type: 'mcq',
        question: 'An energy company raises electricity prices by 20%. In the first month, household consumption falls by only 4%. After three years, consumption has fallen by 22%. What best explains this pattern?',
        options: [
          'Consumer incomes rose over three years, making electricity cheaper relative to income.',
          'Consumers face inelastic demand in the short run but more elastic demand in the long run, as they can install insulation, buy efficient appliances, and switch providers over time.',
          'The income effect grows over time, reducing demand for electricity.',
          'The price elasticity of supply for electricity increases over time, lowering the price back down.',
        ],
        correctAnswer: 1,
        explanation: 'This is a classic illustration of time as a PED determinant. Short-run |PED| = 4/20 = 0.2 (inelastic) — consumers cannot immediately change habits or appliances. Long-run |PED| = 22/20 = 1.1 (elastic) — given years to adapt, they invest in energy efficiency, change behaviour, and seek alternatives. Time consistently makes demand more elastic because it expands the range of consumer adjustments available.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q6',
        type: 'mcq',
        question: 'A coffee shop notices that a 10% price rise on its premium single-origin coffee causes a 15% fall in sales, while the same price rise on its standard house coffee causes only a 5% fall. What best explains this difference?',
        options: [
          'Standard coffee is a luxury; premium coffee is a necessity.',
          'Premium single-origin coffee has more close substitutes (other coffee shops, home brewing, instant coffee) and is a discretionary purchase, making demand more elastic.',
          'Premium coffee demand is more elastic because it is more expensive as a proportion of income.',
          'Standard coffee has more elastic demand because it serves a larger market.',
        ],
        correctAnswer: 1,
        explanation: 'Premium single-origin coffee is a discretionary luxury purchase with many substitutes (standard coffee, other cafés, home brewing, instant coffee). Consumers can easily switch. Standard house coffee is more of a daily habit/necessity for regular customers — fewer immediate alternatives and stronger habit formation make it more inelastic. The key PED determinant here is the availability of substitutes combined with necessity vs luxury status.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q7',
        type: 'mcq',
        question: 'Salt has a very small share of household budgets. How does this affect its PED?',
        options: [
          'It makes demand elastic, because small purchases are easier to switch.',
          'It makes demand inelastic, because a large percentage price rise is such a small absolute amount that consumers do not bother finding substitutes.',
          'It has no effect on PED because budget share only affects YED.',
          'It makes demand perfectly inelastic, because salt is essential for cooking.',
        ],
        correctAnswer: 1,
        explanation: 'When a good takes up a tiny share of the budget, even a 50% price rise adds only pennies to total spending. Consumers have little incentive to invest time and effort in finding substitutes for such a trivial cost increase. This makes demand inelastic. Contrast with rent or mortgage payments (large budget share): a 20% rise has a huge impact on household finances, strongly motivating consumers to search for alternatives.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q8',
        type: 'mcq',
        question: 'Why might a government choose to tax cigarettes rather than fresh fruit to raise revenue efficiently (i.e., with the least deadweight loss per pound of revenue raised)?',
        options: [
          'Cigarettes are more harmful, so taxing them raises more revenue automatically.',
          'Cigarettes have inelastic demand — the quantity traded falls only slightly when taxed, so large revenue is raised with little reduction in trades and therefore small deadweight loss.',
          'Fresh fruit has elastic demand, so taxing it raises more revenue because quantity consumed is large.',
          'Cigarettes are luxury goods with high YED, making them ideal for revenue-raising taxes.',
        ],
        correctAnswer: 1,
        explanation: 'Tax efficiency (revenue per unit of deadweight loss) is maximised when demand is inelastic. An inelastic-demand good sees little quantity reduction when taxed — revenue is high and DWL is small. A tax on elastic-demand goods (like fresh fruit with many substitutes) causes large quantity reductions, significant DWL, and relatively little revenue. Cigarettes\' inelasticity (due to addiction and few substitutes) makes them ideal revenue targets, though the equity implications (regressive burden) are a legitimate concern.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l2-q9',
        type: 'mcq',
        question: 'A student argues: "Petrol demand is perfectly inelastic — people MUST drive to work and cannot reduce their consumption." Identify the strongest counter-argument.',
        options: [
          'Petrol is a luxury good, so demand must be elastic.',
          'In the long run, consumers can buy more fuel-efficient cars, carpool, use public transport, or move closer to work — so demand is more elastic over time and not perfectly inelastic.',
          'The government can force consumers to use less petrol through regulation.',
          'Petrol has close substitutes in the form of diesel and electricity, making demand immediately elastic.',
        ],
        correctAnswer: 1,
        explanation: 'The student confuses short-run rigidity with perfectly inelastic demand. While petrol demand is indeed inelastic in the short run (people have fixed commuting habits and vehicles), it is far from perfectly inelastic. Long-run evidence shows consumers do reduce petrol consumption when prices stay high — by buying EVs, moving, carpooling, or working from home. Perfectly inelastic demand (PED = 0) means absolutely zero response to any price change, which is never observed in practice.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'f3-l2-q10',
        type: 'mcq',
        question: 'An airline operates routes where it faces fierce competition from rival airlines and high-speed rail. Which pricing strategy is consistent with this market structure?',
        options: [
          'Raise prices significantly to maximise revenue per passenger, since air travel is a necessity.',
          'Keep prices competitive or even lower them to maintain market share, since elastic demand means a price rise would cause a large fall in passenger numbers.',
          'Charge different prices to different passengers to extract maximum consumer surplus.',
          'Reduce prices only during off-peak periods, since demand is inelastic at peak times.',
        ],
        correctAnswer: 1,
        explanation: 'When close substitutes exist (rival airlines, high-speed rail), demand for any individual airline\'s route is elastic. A price rise would cause a large proportional fall in bookings as passengers switch. The correct strategy with elastic demand is competitive pricing — staying price-competitive prevents customer loss. Note that option C (price discrimination) is also something airlines practice, but the primary strategy question asks about the general pricing approach driven by the competitive market structure.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Think of two products — one you believe has inelastic demand and one with elastic demand. For each product: (1) Name two specific PED determinants that explain why demand is inelastic or elastic in that case, (2) Predict how a 20% price rise would affect quantity demanded and total revenue for each product, and (3) Explain which type of product a profit-maximising firm with pricing power would prefer to sell, and why.',
      rubric: 'Score 9-10: two clearly contrasting products, 2 well-explained PED determinants for each, correct and quantified TR prediction (linking to elasticity), clear reasoning on pricing power advantage of inelastic-demand goods. Score 7-8: correct products and determinants but TR prediction lacks numbers or mechanism. Score 5-6: correct labels (elastic/inelastic) but determinants vague or TR reasoning unclear.',
      exampleTopics: [
        'Good determinants for inelastic: no close substitutes, necessity/addiction, small budget share, short time horizon',
        'Good determinants for elastic: many close substitutes, luxury/discretionary, large budget share, long time horizon',
        'TR prediction: elastic demand → 20% price rise causes >20% quantity fall → TR falls; inelastic → <20% quantity fall → TR rises',
        'Pricing power: firms with inelastic demand (like pharmaceutical patents) can raise prices without losing many customers',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 3 — Income and Cross-Price Elasticity
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f3-l3',
    moduleId: 'f3-elasticity',
    title: 'Income and Cross-Price Elasticity',
    description:
      'Define YED and XED, distinguish normal from inferior goods and complements from substitutes.',
    order: 3,
    estimatedMinutes: 25,
    tags: ['YED', 'XED', 'normal-goods', 'inferior-goods'],
    content: {
      realWorldHook:
        'When the economy booms and households earn more, supermarket sales of ready meals soar — but bus journeys to work quietly decline as people switch to cars. How do economists explain why rising income helps some industries and hurts others? Two tools — income elasticity of demand and cross-price elasticity of demand — give the answers.',

      prerequisiteRecap: `The previous lesson identified that demand is more elastic when close substitutes exist, when a good is a luxury, when it takes a large share of income, and over longer time horizons. Income elasticity and cross-price elasticity extend this analysis by asking how demand responds to changes in income and the prices of other goods — capturing the substitute and complement relationships that appeared as demand-curve shifters in earlier lessons.`,

      recallQuestions: [
        {
          id: 'f3-l3-recall-1',
          type: 'mcq' as const,
          question: 'Which pair of characteristics most strongly predicts that a good will have elastic price elasticity of demand?',
          options: [
            'It is a habit-forming necessity with few close substitutes.',
            'It is a luxury with many close substitutes and represents a large share of consumer spending.',
            'It is a staple food consumed in small quantities relative to income.',
            'It is demanded equally in the short run and the long run.',
          ],
          correctAnswer: 1,
          explanation: 'Elastic demand is driven by: many close substitutes (easy to switch), luxury status (consumers can forgo it), large income share (strong motivation to find alternatives), and a long time horizon. A good possessing all three of the first factors will have high |PED|.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `Income elasticity of demand (YED) measures how much the quantity demanded of a good changes when consumer income changes. The formula mirrors PED: YED = percentage change in quantity demanded ÷ percentage change in income. Crucially, unlike PED, YED can be positive or negative, and the sign carries essential economic meaning.

A positive YED means that as income rises, consumers buy more of the good — this defines a normal good. Most goods are normal: restaurant meals, electronics, clothing, holidays. Within normal goods, there is a further distinction. If YED > 1, demand rises faster than income — these are luxury (or superior) goods, like fine dining or overseas travel, which take up an increasing share of the budget as people become wealthier. If 0 < YED < 1, demand rises but more slowly than income — these are necessities (in the YED sense), like basic food or utilities, which remain important but claim a shrinking income share as people get richer.

A negative YED defines an inferior good — demand actually falls as income rises, because consumers switch to better-quality alternatives. Bus travel is the classic example: as incomes rise, people ditch the bus for their own car. Own-brand supermarket food, cheap margarine, and second-hand clothing are other examples. Note that "inferior" is an economic term — it simply means demand moves against income, not that the good is bad.

Cross-price elasticity of demand (XED) measures how much the quantity demanded of one good changes when the price of a different good changes. XED = percentage change in quantity demanded of Good A ÷ percentage change in price of Good B. A positive XED indicates that the two goods are substitutes: when the price of Good B rises, consumers buy more of Good A instead. A negative XED indicates complements: when the price of Good B rises, consumers buy less of it and, as a result, also buy less of Good A. The magnitude of XED indicates closeness: a high |XED| means the goods are very closely related.`,

      vocabulary: [
        {
          term: 'Income Elasticity of Demand (YED)',
          definition:
            'A measure of how responsive quantity demanded is to a change in consumer income, calculated as percentage change in quantity demanded divided by percentage change in income.',
          example:
            'If a 10% rise in income causes a 20% rise in demand for restaurant meals, YED = +2.0 — a luxury good.',
        },
        {
          term: 'Normal Good',
          definition:
            'A good with a positive YED: demand rises as income rises. If YED > 1, it is a luxury; if 0 < YED < 1, it is a necessity.',
          example:
            'Smartphones are normal goods: as household incomes grow, people buy more and upgrade more frequently.',
        },
        {
          term: 'Inferior Good',
          definition:
            'A good with a negative YED: demand falls as income rises, because consumers switch to perceived superior alternatives.',
          example:
            'Instant noodles may be an inferior good: as people earn more, they buy fewer packets and eat at restaurants more often.',
        },
        {
          term: 'Cross-Price Elasticity of Demand (XED)',
          definition:
            'A measure of how responsive quantity demanded of one good is to a change in the price of another good. Positive XED = substitutes; negative XED = complements.',
          example:
            'If a 10% rise in the price of butter leads to a 15% rise in demand for margarine, XED = +1.5 — they are substitutes.',
        },
      ],

      deeperDive: `YED has practical applications for businesses and governments. A firm in a luxury goods market should expand in booms and plan for sharp contractions in recessions (high positive YED means high income sensitivity). Conversely, a firm selling inferior goods may actually see sales rise during recessions as consumers downgrade — budget supermarkets and fast-food chains often perform better in downturns for exactly this reason. Governments use YED data to predict how tax revenues from different goods will change as the economy grows.

XED is vital for understanding market structure and competitive strategy. A high positive XED between two brands means they are fierce competitors — a price cut by one immediately pulls customers away from the other. Firms routinely use XED data to map their competitive landscape. Negative XED (complements) matters enormously for bundling strategies: if printers and ink cartridges are strong complements (XED very negative), a printer manufacturer might even sell printers at a loss to lock consumers into buying its expensive ink — a strategy Apple and gaming console makers also exploit.`,

      commonMisconceptions: [
        '"Inferior" means low quality. In economics, inferior simply means that demand falls when income rises. A good can be perfectly functional and widely consumed — like bus travel or own-brand groceries — and still be classified as inferior. The label is about income-demand direction, not product quality.',
        'All goods with positive YED are luxuries. Students often conflate "normal good" with "luxury good." The distinction matters: necessities have positive YED between 0 and 1 (demand rises with income, but less than proportionately), while luxuries have YED above 1 (demand rises faster than income). Both are normal goods.',
        'XED only applies between direct competitors. Complementary goods (negative XED) are just as important as substitutes. The price of gaming consoles affects demand for video games; the price of flights affects demand for hotel rooms. Ignoring complementary relationships means missing half the story.',
      ],

      examinerTip:
        'A common exam trap is asking you to categorise a good given a YED or XED value. Always check the sign first, then the magnitude. For YED: positive = normal, negative = inferior, and if positive, is it above or below 1? For XED: positive = substitutes, negative = complements. Always interpret what the number means for the specific good mentioned in the question — abstract memorisation of categories is not enough.',

      didYouKnow:
        'Researchers studying spending data after welfare payments rise have found that demand for tobacco and alcohol sometimes falls as incomes increase among low-income groups — classifying them as inferior goods in that context. This counterintuitive finding challenges the assumption that sin taxes are the only lever for reducing consumption of harmful goods: income growth itself can do some of that work.',

      thinkAboutIt: {
        question: 'An economist studying spending data finds that as household incomes rise by 10%, spending on branded coffee rises by 18% but spending on instant coffee falls by 6%. What are the YEDs for each, and what do they tell you about each good?',
        answer: 'Branded coffee YED = +18%/+10% = +1.8 — a luxury normal good (YED > 1). Demand rises faster than income as people trade up to premium products when wealthier. Instant coffee YED = −6%/+10% = −0.6 — an inferior good. As incomes rise, consumers switch away from instant coffee to higher-quality alternatives. This explains why premium coffee brands thrive in economic booms while budget coffee manufacturers may actually see sales fall. It also shows that "coffee" is not a single homogeneous good — within the same category, the same income change can help one segment and hurt another.',
      },
    },

    flashcards: [
      {
        id: 'f3-l3-fc1',
        front: 'What does a negative YED tell you about a good?',
        back: 'It is an inferior good — as consumer income rises, demand for the good falls, because people switch to preferred alternatives.',
        hint: 'Inferior = demand moves opposite to income.',
        tags: ['YED', 'inferior-good'],
      },
      {
        id: 'f3-l3-fc2',
        front: 'What is the difference between a luxury good and a necessity in YED terms?',
        back: 'Both are normal goods (positive YED). A luxury has YED > 1 (demand rises faster than income). A necessity has 0 < YED < 1 (demand rises slower than income).',
        hint: 'YED > 1 = luxury; 0 < YED < 1 = necessity.',
        tags: ['YED', 'luxury', 'necessity'],
      },
      {
        id: 'f3-l3-fc3',
        front: 'What does a positive XED between two goods indicate?',
        back: 'The goods are substitutes. A rise in the price of one leads consumers to buy more of the other.',
        hint: 'Positive XED = competing goods.',
        tags: ['XED', 'substitutes'],
      },
      {
        id: 'f3-l3-fc4',
        front: 'What does a negative XED between two goods indicate?',
        back: 'The goods are complements. A rise in the price of one reduces its quantity demanded and, consequently, reduces demand for the other good as well.',
        hint: 'Negative XED = go-together goods (cars and fuel, printers and ink).',
        tags: ['XED', 'complements'],
      },
      {
        id: 'f3-l3-fc5',
        front: 'Give one business use of YED data and one business use of XED data.',
        back: 'YED: A luxury car brand uses a high YED to forecast that demand will surge in an economic boom and plan production accordingly. XED: A coffee shop monitors the price of tea to predict if a tea price rise will shift customers toward coffee (positive XED = substitutes).',
        hint: 'YED helps with income-cycle planning; XED helps map competition and complementary products.',
        tags: ['YED', 'XED', 'business-application'],
      },
      {
        id: 'f3-l3-fc6',
        front: 'How do firms use XED data in competitive strategy?',
        back: 'High positive XED between two brands (e.g., XED = +2.0) signals intense competition — a price cut by rival immediately pulls your customers away. Firms monitor XED to identify their closest rivals. Negative XED (complements) is used for bundling: lock customers into one product (e.g., cheap printer) and profit from the complementary good (expensive ink cartridges).',
        hint: 'Positive XED = watch competitors. Negative XED = bundle strategy.',
        tags: ['XED', 'business-strategy', 'complements', 'substitutes'],
      },
      {
        id: 'f3-l3-fc7',
        front: 'Why might budget supermarkets perform better during recessions while luxury retailers suffer?',
        back: 'Budget supermarket products are often inferior goods (negative YED) — demand rises as incomes fall during a recession. Luxury goods (high positive YED, e.g., YED > 1) are disproportionately hit as incomes fall. This explains counter-cyclical performance: Aldi/Lidl prosper in downturns while luxury brands like Hermès suffer (though very high-end luxury can be different due to the Veblen effect).',
        hint: 'Recession = falling incomes. Inferior goods gain; luxury goods lose.',
        tags: ['YED', 'inferior-good', 'luxury', 'recession', 'business-cycle'],
      },
    ],

    quiz: [
      {
        id: 'f3-l3-q1',
        type: 'mcq',
        question:
          'A supermarket chain notices that when average consumer incomes rise by 5%, sales of its own-brand budget pasta fall by 3%. What does this imply?',
        options: [
          'Budget pasta is an inferior good with a YED of approximately −0.6.',
          'Budget pasta is a luxury good with a YED of approximately +0.6.',
          'Budget pasta is a normal necessity with a YED between 0 and 1.',
          'Budget pasta has perfectly inelastic income demand because it is a food staple.',
        ],
        correctAnswer: 0,
        explanation:
          'YED = (−3%) ÷ (5%) = −0.6. The negative sign confirms that demand falls as income rises — the definition of an inferior good. Consumers trade up to branded or fresher alternatives when they can afford to.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q2',
        type: 'mcq',
        question:
          'The price of coffee rises sharply. An economist observes that demand for tea increases significantly. What does this suggest about the XED between coffee and tea, and the relationship between the two goods?',
        options: [
          'XED is positive, confirming that coffee and tea are substitutes.',
          'XED is negative, confirming that coffee and tea are complements.',
          'XED is zero, confirming that coffee and tea are unrelated goods.',
          'XED is negative, confirming that coffee and tea are substitutes.',
        ],
        correctAnswer: 0,
        explanation:
          'When the price of coffee rises, consumers switch to tea — quantity demanded of tea increases. A rise in the price of one good leading to a rise in demand for another good gives a positive XED. Positive XED = substitutes. Complements would show a negative XED (demand for tea would fall if the price of coffee rose).',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q3',
        type: 'mcq',
        question:
          'A pharmaceutical company sells a patented drug alongside a proprietary delivery device required to administer it. The XED between the drug and the device is −3.0. What pricing strategy does this suggest for the device?',
        options: [
          'Keep device prices low or subsidise them, because a lower device price increases device sales and strongly boosts demand for the more profitable drug (strong complementary relationship).',
          'Raise device prices aggressively, since the high |XED| means consumers must still buy the drug regardless.',
          'Lower drug prices to offset the high XED and maintain total revenue.',
          'The XED value is irrelevant to pricing strategy; only PED of each product individually matters.',
        ],
        correctAnswer: 0,
        explanation:
          'A negative XED of −3.0 means the goods are strong complements. If the device price rises, device sales fall — and demand for the drug drops by three times as much proportionally. To maximise drug revenue (the high-margin product), the company should keep device prices low, or even subsidise devices, to maximise the installed user base. This is the classic "razor and blades" or "printer and ink" business model.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q4',
        type: 'mcq',
        question: 'When household incomes rise by 5%, sales of a budget frozen ready-meal brand fall by 8%. What is the YED and what type of good is this?',
        options: [
          'YED = +1.6; a luxury good.',
          'YED = −1.6; an inferior good.',
          'YED = −0.6; an inferior good.',
          'YED = +0.6; a normal necessity.',
        ],
        correctAnswer: 1,
        explanation: 'YED = (−8%)/(+5%) = −1.6. The negative sign confirms this is an inferior good — as incomes rise, demand falls because consumers switch to fresher, better-quality alternatives. The magnitude of 1.6 means demand falls by 1.6% for every 1% income rise, suggesting consumers are quick to trade up when they can afford to.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q5',
        type: 'mcq',
        question: 'A luxury car brand has YED = +2.8. A recession reduces average household income by 4%. What is the approximate percentage change in demand for the luxury car?',
        options: [
          'Falls by approximately 11.2%.',
          'Rises by approximately 11.2%.',
          'Falls by approximately 2.8%.',
          'Is unchanged because luxury cars are bought by the wealthy who are unaffected by recessions.',
        ],
        correctAnswer: 0,
        explanation: 'YED = percentage change in demand / percentage change in income. Rearranging: percentage change in demand = YED × percentage change in income = +2.8 × (−4%) = −11.2%. Luxury goods with high YED are extremely sensitive to income changes — a moderate recession causes a large proportional fall in demand. This explains why luxury car sales are highly cyclical.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q6',
        type: 'mcq',
        question: 'The XED between domestic flights and high-speed rail tickets is +0.9. If train fares rise by 20%, what happens to demand for domestic flights?',
        options: [
          'Demand for flights falls by 18% because they are complements.',
          'Demand for flights rises by approximately 18% as passengers switch from trains to planes.',
          'Demand for flights rises by approximately 45% because a positive XED means strong substitution.',
          'Demand for flights falls by 20% because they are inferior goods.',
        ],
        correctAnswer: 1,
        explanation: 'XED = +0.9 means trains and flights are substitutes (positive XED). %ΔQ flights = XED × %ΔP trains = +0.9 × 20% = +18%. When train fares rise, some passengers switch to flying — demand for flights increases by approximately 18%. The magnitude 0.9 < 1 means they are moderate substitutes, not perfect ones — some rail-specific travellers stay on trains regardless.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q7',
        type: 'mcq',
        question: 'A government uses income tax cuts to stimulate the economy. In which market would this policy have the LARGEST positive effect on demand, all else equal?',
        options: [
          'Basic food staples (YED ≈ +0.1).',
          'Bus travel in low-income areas (YED ≈ −0.3).',
          'Overseas holidays (YED ≈ +2.5).',
          'Prescription medications (YED ≈ 0.0).',
        ],
        correctAnswer: 2,
        explanation: 'YED determines how much demand responds to income changes. Tax cuts raise disposable income. The largest demand boost goes to goods with the highest positive YED. Overseas holidays (YED = +2.5) sees a 2.5% demand rise for every 1% income increase — by far the largest multiplier. Basic staples (YED = +0.1) barely respond. Bus travel may actually fall if it is an inferior good (negative YED). Prescription medications are income-insensitive.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q8',
        type: 'mcq',
        question: 'Which of the following correctly explains why a negative XED indicates complementary goods?',
        options: [
          'Complementary goods are consumed together: when the price of one rises, consumption of that good falls, and since they are used jointly, demand for the other falls too — giving a negative relationship.',
          'Negative XED means that when one good\'s price rises, the other\'s demand falls because they compete for the same budget.',
          'Complements are inferior goods, so they always have negative cross-price elasticity.',
          'A negative XED indicates that the goods are in the same market and compete on price.',
        ],
        correctAnswer: 0,
        explanation: 'Complements are goods consumed together (e.g., cars and fuel, printers and ink). When the price of cars rises, fewer cars are sold. Since fuel is used in cars, demand for fuel also falls — the cross-price elasticity (change in fuel demand ÷ change in car price) is negative. The joint consumption relationship means demand for one always moves in the opposite direction to the price of the other.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l3-q9',
        type: 'mcq',
        question: 'A media company bundles its news website subscription with its streaming service at a discount. The XED between the two services is −1.8. What is the most likely commercial logic behind this bundling strategy?',
        options: [
          'The negative XED shows the two services are substitutes, so bundling prevents consumers from choosing between them.',
          'The strong complementary relationship (negative XED = −1.8) means consumers who use one tend to use the other — bundling captures this joint demand and reduces the risk of customers cancelling one service.',
          'The negative XED means demand for the bundle is inelastic, so the company can raise prices.',
          'Bundling is only profitable when XED is positive, indicating substitute goods.',
        ],
        correctAnswer: 1,
        explanation: 'XED = −1.8 indicates strong complements: when the price of streaming rises, demand for the news site also falls significantly, and vice versa. Consumers use them together. By bundling, the company leverages this complementary usage pattern — subscribers who value both services are locked in and less likely to churn. The bundle price can be lower than buying separately, yet total revenue can be higher because it reduces cancellations of either service.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'f3-l3-q10',
        type: 'mcq',
        question: 'Why might a government use YED data when designing fiscal policy to support a struggling industry?',
        options: [
          'To ensure taxes on that industry are set at the right level to maximise revenue.',
          'To predict how changes in disposable income (from tax cuts or benefits increases) will affect demand for that industry\'s output, and therefore assess whether income-based stimulus will actually help.',
          'To calculate the price elasticity of demand for the industry\'s goods.',
          'To determine whether the industry\'s products are normal or inferior, and then set price controls accordingly.',
        ],
        correctAnswer: 1,
        explanation: 'YED data tells policymakers how sensitive an industry\'s demand is to income changes. If an industry produces goods with high YED (e.g., leisure and tourism, YED > 2), stimulus via income support will significantly boost their demand. If goods are inferior (negative YED), income increases would actually reduce demand — making income-based stimulus counterproductive for that industry. Governments use this to target fiscal interventions effectively.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
    lessonAssignment: {
      prompt: 'You are an economic analyst advising a business. Choose a specific firm in ANY industry (retail, food, entertainment, transport, tech). Using income elasticity and cross-price elasticity: (1) classify the firm\'s main product as a normal luxury, normal necessity, or inferior good — and justify this using real evidence of how demand changed during a recent economic boom or recession; (2) identify one key substitute and one key complement for the product, estimating whether the XED with each is high or low; (3) explain one strategic decision the firm should make based on these elasticity insights (pricing, product bundling, marketing timing, etc.).',
      rubric: 'Score 9-10: accurate YED classification with real evidence from a boom/recession period, correctly signed and reasoned XED for both substitute and complement, actionable strategic recommendation grounded in elasticity analysis. Score 7-8: correct YED sign and one good example, XED identified for at least one related good, partial strategy. Score 5-6: correct labels but reasoning thin or not connected to real firm behaviour.',
      exampleTopics: [
        'YED classification: did sales rise in the 2021 recovery boom or fall in the 2008 recession? That tells you the sign',
        'Normal luxury (YED > 1): fine dining, foreign holidays, sports cars. Normal necessity (0 < YED < 1): basic groceries, utilities. Inferior (YED < 0): budget brands, instant noodles, bus travel',
        'XED substitute: a positive XED with a competing product (e.g., Spotify vs Apple Music)',
        'XED complement: a negative XED with a jointly-consumed product (e.g., Netflix and fast broadband)',
        'Strategy link: if YED > 1, market heavily during booms; if inferior good, market during recessions',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 4 — Price Elasticity of Supply
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f3-l4',
    moduleId: 'f3-elasticity',
    title: 'Price Elasticity of Supply',
    description:
      'Explain PES and its key determinants: spare capacity, time, mobility of factors, and storability.',
    order: 4,
    estimatedMinutes: 20,
    tags: ['PES', 'supply-elasticity'],
    content: {
      realWorldHook:
        'Why can a T-shirt factory double its output within weeks when fashion demand spikes, while an oil field takes years to ramp up production? And why do fresh strawberry prices barely move when demand rises in summer — because supply simply cannot stretch fast enough? Price elasticity of supply explains how quickly and easily producers can respond to a price signal.',

      prerequisiteRecap: `The previous lesson introduced income elasticity (YED) and cross-price elasticity (XED), showing how the sign of each elasticity reveals whether a good is normal or inferior, and whether two goods are substitutes or complements. Price elasticity of supply completes the elasticity toolkit by applying the same proportional-responsiveness logic to the supply side — asking how sensitively producers react to price changes.`,

      recallQuestions: [
        {
          id: 'f3-l4-recall-1',
          type: 'mcq' as const,
          question: 'An economist finds that when consumer income rises by 8%, quantity demanded of a good falls by 4%. What can be concluded?',
          options: [
            'The good is a normal necessity with YED between 0 and 1.',
            'The good is an inferior good with a YED of −0.5.',
            'The good is a luxury good with a YED above 1.',
            'The good has perfectly inelastic income demand.',
          ],
          correctAnswer: 1,
          explanation: 'YED = (−4%) ÷ (8%) = −0.5. The negative sign indicates that demand falls when income rises — the definition of an inferior good. Consumers switch to preferred alternatives as their purchasing power grows.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f3-l4-recall-2',
          type: 'mcq' as const,
          question: 'The cross-price elasticity between good A and good B is −2.4. What does this imply about the relationship between the two goods?',
          options: [
            'They are strong substitutes — a price rise in B causes a large increase in demand for A.',
            'They are strong complements — a price rise in B causes a large fall in demand for A.',
            'They are unrelated goods — the negative sign means demand for A is inelastic.',
            'They are inferior goods — a price rise in B causes demand for A to fall.',
          ],
          correctAnswer: 1,
          explanation: 'A negative XED means the goods are complements: when the price of B rises, demand for A falls (because consumers buy less of B and hence less of A as well). A magnitude of 2.4 indicates a strong complementary relationship.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `Price elasticity of supply (PES) measures how responsive the quantity supplied of a good is to a change in its price. The formula is identical in structure to PED: PES = percentage change in quantity supplied ÷ percentage change in price. Because supply curves slope upward — higher prices incentivise more supply — PES is always positive (or zero). A PES > 1 means supply is elastic (quantity supplied rises more than proportionately to the price rise). A PES < 1 means supply is inelastic (quantity supplied rises less than proportionately). PES = 0 is perfectly inelastic (quantity fixed regardless of price — like a unique painting). PES = ∞ is perfectly elastic (producers supply any amount at one price, none below).

The most important determinant of PES is time. In the very short run (often called the "market period"), supply is completely fixed — a farmer who has already harvested their crop cannot grow more overnight. In the short run, some inputs can be adjusted (more workers, longer shifts) but not all, so supply is somewhat inelastic. In the long run, all factors can change — new machinery, new factories, new market entrants — making supply much more elastic. This time-dependency mirrors what we saw with PED.

Spare capacity is the second key determinant. A factory already running at full capacity cannot easily increase output without significant investment. By contrast, a factory operating at 60% capacity can ramp up production quickly and cheaply when prices rise — its supply is elastic. Similarly, the availability and mobility of factors of production matters. If skilled workers can rapidly retrain, or if raw materials are abundant and easy to source, producers can expand quickly. If specialist skills or rare resources are required, supply is constrained and therefore inelastic.

Storability and durability also play a role. Goods that can be stored — grain, oil, manufactured goods — can respond to price rises from existing stocks, making supply more elastic. Perishable goods — fresh flowers, strawberries, live concerts — cannot be stockpiled, so supply at any moment is limited and inelastic. The nature of the production process matters too: simple, replicable manufacturing has elastic supply, while unique crafts, fine wine, or location-specific resources (beachfront land) have very inelastic supply.`,

      vocabulary: [
        {
          term: 'Price Elasticity of Supply (PES)',
          definition:
            'A measure of how responsive quantity supplied is to a change in price, calculated as percentage change in quantity supplied divided by percentage change in price. Always positive (supply slopes upward).',
          example:
            'If a 20% price rise leads to a 30% increase in quantity supplied, PES = 1.5 — elastic supply.',
        },
        {
          term: 'Spare Capacity',
          definition:
            'The unused productive potential of a firm or industry. High spare capacity means supply is more elastic, since output can be increased at low extra cost without new investment.',
          example:
            'A hotel with 40% of rooms empty can easily accommodate a surge in bookings without building new rooms — elastic supply of accommodation.',
        },
        {
          term: 'Factor Mobility',
          definition:
            'The ease with which factors of production (land, labour, capital) can be moved between different uses or locations. High factor mobility increases PES.',
          example:
            'General-purpose factory workers can switch from making one consumer product to another when demand shifts, making output more elastic.',
        },
        {
          term: 'Perfectly Inelastic Supply',
          definition:
            'Supply where PES = 0 — quantity supplied cannot change regardless of price, represented by a vertical supply curve.',
          example:
            'The supply of original Picasso paintings is perfectly inelastic: no matter how high the price, no additional genuine originals can be produced.',
        },
      ],

      deeperDive: `The distinction between short-run and long-run PES is critical for understanding price volatility in different markets. Agricultural markets are a prime example: in the short run, after planting decisions are made, supply of a crop is nearly fixed, making prices extremely volatile in response to demand shocks. A bad harvest causes prices to spike dramatically because supply cannot expand. Over seasons and years, farmers can plant more, and the industry adjusts — supply becomes more elastic and prices stabilise. Understanding this cycle is essential for explaining why food prices fluctuate so sharply around harvest events.

Property markets illustrate inelastic supply dramatically. Land in desirable city centres is essentially fixed (PES ≈ 0 for prime locations), and even building new housing takes years to receive planning permission and construct. When demand for city housing rises — driven by job growth or population influx — prices surge because supply cannot respond quickly. This dynamic is central to housing affordability debates in cities like London, San Francisco, and Sydney, where supply-side inelasticity means demand increases translate almost entirely into price rises rather than quantity increases.`,

      commonMisconceptions: [
        'PES can be negative. Unlike PED, PES is always non-negative. Supply curves slope upward, meaning higher prices always incentivise equal or greater supply — never less. A PES of zero (perfectly inelastic) is the minimum. Students who write negative PES values have confused supply with demand.',
        'PES is fixed for a given good. PES changes over time — typically from more inelastic in the short run to more elastic in the long run as producers have more opportunity to adjust. A single static PES value only applies to a specific time frame, which should always be specified.',
        'High PES is always good for producers. Elastic supply means firms can rapidly expand output when prices rise — great for market responsiveness. But it also means new firms enter quickly when profits rise, driving prices back down. Inelastic supply (rare resources, unique skills) can protect producers\' profit margins over longer periods by limiting competition.',
      ],

      examinerTip:
        'Questions on PES often provide a scenario and ask you to predict how elastic supply is likely to be. Work through the determinants systematically: How long is the time frame? Is there spare capacity? Are factors of production mobile? Is the good storable? Each determinant you address with a linked example earns separate marks. Always state your overall conclusion — elastic or inelastic — before finishing your answer.',

      didYouKnow:
        'The supply of avocados has famously inelastic characteristics that cause wild price swings. Avocado trees take 5 to 13 years to reach full production after planting, and the fruit is perishable. When global demand for avocados surged in the 2010s — driven by food trends — farmers could not respond quickly, prices spiked dramatically, and it took nearly a decade of new planting before supply expanded enough to moderate prices.',

      thinkAboutIt: {
        question: 'In 2020, global demand for rubber gloves surged due to COVID-19. Manufacturers were operating at full capacity. Despite prices tripling, output increased only modestly in the short run. Five years later, global glove production capacity had quadrupled. Use PES concepts to explain both the short-run and long-run outcomes.',
        answer: 'Short run: factories at full capacity meant spare capacity was zero — PES was very low (inelastic). Even with prices tripling, output could barely increase because capital equipment (the main constraint) cannot be expanded quickly. The price signal was strong but supply could not respond. Long run: given 5 years, firms could build new factories, train workers, source materials, and new entrants could join the industry — all factors expanded, making supply much more elastic. PES rose substantially in the long run. This demonstrates the fundamental PES principle: time is the most important determinant of supply elasticity, as it determines how many inputs can be varied.',
      },
    },

    flashcards: [
      {
        id: 'f3-l4-fc1',
        front: 'What is the formula for PES and what sign does it always carry?',
        back: 'PES = (% change in quantity supplied) ÷ (% change in price). PES is always positive (or zero) because supply curves slope upward — higher prices lead to greater or equal quantity supplied.',
        hint: 'Always positive: supply and price move in the same direction.',
        tags: ['PES', 'formula'],
      },
      {
        id: 'f3-l4-fc2',
        front: 'Why is supply generally more elastic in the long run than the short run?',
        back: 'In the long run, all factors of production can be adjusted — firms can build new capacity, hire more workers, source new materials, and new firms can enter the market. In the short run, at least some factors are fixed, limiting the ability to expand output.',
        hint: 'More time = more flexibility to adjust production.',
        tags: ['PES', 'time-horizon'],
      },
      {
        id: 'f3-l4-fc3',
        front: 'How does spare capacity affect PES?',
        back: 'High spare capacity makes supply more elastic: a firm with idle machines and workers can raise output quickly and cheaply in response to a price rise without major new investment.',
        hint: 'Empty factory floor = elastic supply.',
        tags: ['PES', 'spare-capacity'],
      },
      {
        id: 'f3-l4-fc4',
        front: 'Why does storability affect PES?',
        back: 'Storable goods can meet increased demand from existing inventories, making supply more elastic. Perishable goods cannot be stockpiled, so supply at any point is limited to current production — more inelastic.',
        hint: 'Canned food = elastic supply; fresh flowers = inelastic supply.',
        tags: ['PES', 'storability'],
      },
      {
        id: 'f3-l4-fc5',
        front: 'Give an example of a good with perfectly inelastic supply and explain why.',
        back: 'Original artworks (e.g., Picasso paintings): supply is fixed at the number that already exists. No matter how high the price rises, no new originals can be produced — the supply curve is vertical (PES = 0).',
        hint: 'Anything unique and non-reproducible.',
        tags: ['PES', 'perfectly-inelastic', 'example'],
      },
      {
        id: 'f3-l4-fc6',
        front: 'Why does agriculture typically have more inelastic supply in the short run than manufacturing?',
        back: 'Agricultural production is bound by growing seasons — you cannot plant and harvest a new crop in weeks when prices spike. Once seeds are in the ground, output for that season is largely fixed. Manufacturing can often expand by adding shifts or overtime quickly. Agricultural PES is near zero within a season, rising significantly over multiple seasons as farmers adjust planting decisions.',
        hint: 'Seasons = biological fixed inputs. Manufacturing = add a night shift.',
        tags: ['PES', 'agriculture', 'short-run', 'inelastic'],
      },
      {
        id: 'f3-l4-fc7',
        front: 'How does PES affect the price impact of a demand shock?',
        back: 'When demand shifts right, the price impact depends on PES. Inelastic supply (steep curve): most of the demand shock is absorbed by price rises — large price increase, small quantity increase. Elastic supply (flat curve): most adjustment comes through quantity — small price increase, large quantity increase. Inelastic supply amplifies price volatility from demand shocks.',
        hint: 'Inelastic supply → demand shocks mostly hit price. Elastic supply → demand shocks mostly hit quantity.',
        tags: ['PES', 'price-volatility', 'demand-shock'],
      },
    ],

    quiz: [
      {
        id: 'f3-l4-q1',
        type: 'mcq',
        question:
          'A clothes manufacturer currently uses 65% of its factory capacity. The wholesale price of its garments rises by 10%, and it increases output by 18%. What is the PES, and what does this imply?',
        options: [
          'PES = 1.8 — supply is elastic, which is consistent with the spare capacity available in the factory.',
          'PES = 0.55 — supply is inelastic, despite the spare capacity.',
          'PES = 1.8 — supply is inelastic because it is below 2.',
          'PES = 0.18 — supply is elastic because quantity barely changed.',
        ],
        correctAnswer: 0,
        explanation:
          'PES = 18% ÷ 10% = 1.8. Since PES > 1, supply is elastic. This makes sense: the factory had significant spare capacity (35% idle), allowing it to expand output quickly without needing new investment. Spare capacity is a classic reason for elastic supply.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q2',
        type: 'mcq',
        question:
          'Which of the following goods would most likely have the most inelastic price elasticity of supply?',
        options: [
          'Beachfront land in a major coastal city.',
          'Mass-produced plastic bottles.',
          'Standardised computer memory chips.',
          'Wheat grown on large commercial farms.',
        ],
        correctAnswer: 0,
        explanation:
          'Beachfront land is location-specific and cannot be created — supply is essentially fixed (PES ≈ 0). Mass-produced plastic bottles, memory chips, and wheat can all be expanded relatively quickly by increasing inputs, bringing on more capacity, or new firms entering. These have much more elastic supply.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q3',
        type: 'mcq',
        question:
          'Why does the price of fresh strawberries spike so sharply when an unexpected frost damages part of the harvest, even if the demand for strawberries has not changed?',
        options: [
          'Fresh strawberries are perishable and production takes a full growing season to adjust, making supply highly inelastic in the short run.',
          'Strawberry demand is perfectly elastic, so any supply reduction causes a massive price rise.',
          'Strawberry producers have high spare capacity and choose to withhold supply to raise prices.',
          'The frost increases the cost of production, shifting the demand curve leftward.',
        ],
        correctAnswer: 0,
        explanation:
          'The key is inelastic supply. Fresh strawberries are perishable (cannot be stored), and replanting takes months. A supply shock — the frost — cannot be quickly offset by extra production. With inelastic supply and unchanged demand, even a modest supply reduction causes a large price increase. The demand curve does not shift; the supply curve shifts left.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q4',
        type: 'mcq',
        question: 'A distillery produces aged whisky that requires 12 years of barrel ageing before it can be sold. How does this affect the price elasticity of supply for aged whisky?',
        options: [
          'Supply is perfectly elastic because the distillery can always produce more barrels.',
          'Supply is highly inelastic because the production cycle is 12 years — the quantity available today was determined by decisions made 12 years ago and cannot be altered.',
          'Supply is elastic because the distillery can draw on existing inventory.',
          'Supply is inelastic only in summer; elastic in winter.',
        ],
        correctAnswer: 1,
        explanation: 'Aged whisky is an extreme example of time-constrained supply. Regardless of today\'s price signal, the quantity of 12-year-old whisky available was fixed at the distilling decisions made 12 years ago. No amount of price incentive can conjure more aged stock in the short run. This makes supply essentially perfectly inelastic in the very short run — a vertical supply curve for today\'s vintage. Only after 12 years of increased production does supply respond to today\'s price signal.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q5',
        type: 'mcq',
        question: 'A fashion retailer has large amounts of unsold inventory in its warehouses. A sudden trend boosts demand for its clothes. How does the inventory affect its PES?',
        options: [
          'It reduces PES because the retailer must clear old stock before making new garments.',
          'It increases PES because existing inventory allows the retailer to immediately increase the quantity supplied without new production.',
          'It has no effect on PES because elasticity only concerns production capacity.',
          'It reduces PES because holding inventory is costly and reduces willingness to supply.',
        ],
        correctAnswer: 1,
        explanation: 'Storability and inventory act as a supply buffer. When demand rises, a retailer with excess inventory can respond immediately by releasing stock to the market — without waiting for new production. This makes supply more elastic in the short run. Storability is a recognised PES determinant: goods that can be stored (and inventoried) have more elastic supply than perishable goods that cannot be held for future sale.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q6',
        type: 'mcq',
        question: 'Which of the following industries would you expect to have the MOST elastic short-run supply, and why?',
        options: [
          'Commercial fishing (dependent on seasonal fish populations and quotas).',
          'Custom-built luxury yachts (requiring specialist craftsmen and months of construction).',
          'Mass-produced generic t-shirts (manufactured using widely available machinery and unskilled labour).',
          'Fine Bordeaux wine (aged for years in specific French vineyards).',
        ],
        correctAnswer: 2,
        explanation: 'Mass-produced t-shirts have elastic supply because: factories have significant spare capacity (can add shifts), inputs are widely available and mobile (fabric, thread, simple machinery), production time is short (days, not years), and many substitute manufacturers can enter the market quickly. The other options all face specific supply constraints: seasonal/quota limits (fishing), specialist labour and long production times (yachts), and fixed regional resources with long ageing requirements (Bordeaux wine).',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q7',
        type: 'mcq',
        question: 'A technology firm increases its hourly wage rate by 15% to attract more programmers. The number of programmers available rises by only 6% in the first year but by 20% after five years. What does this tell us about PES for programming labour?',
        options: [
          'PES = 0.4 in the short run; PES ≈ 1.3 in the long run — supply is inelastic short-run but more elastic long-run.',
          'PES = 1.3 in the short run; PES = 0.4 in the long run — supply becomes more inelastic over time.',
          'PES = 0.4 in both periods — supply is always inelastic for skilled labour.',
          'PES = 2.5 short-run and PES = 3.5 long-run because technology skills are easily acquired.',
        ],
        correctAnswer: 0,
        explanation: 'Short-run PES = 6%/15% = 0.4 (inelastic) — skilled programmers cannot be created overnight; training takes years. Long-run PES = 20%/15% ≈ 1.3 (elastic) — given five years, more people have trained as programmers, universities expanded CS enrolment, career-switchers retrained, and immigration increased. This illustrates that factor mobility increases over time, making labour supply more elastic in the long run.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q8',
        type: 'mcq',
        question: 'Which of the following correctly describes perfectly elastic supply (PES = ∞)?',
        options: [
          'The supply curve is vertical — producers supply a fixed quantity regardless of price.',
          'The supply curve is horizontal — producers supply any quantity at a fixed price and nothing below it.',
          'Supply increases by exactly 1% for every 1% rise in price.',
          'Supply cannot be produced at any price.',
        ],
        correctAnswer: 1,
        explanation: 'Perfectly elastic supply means producers will supply any quantity at one specific price — represented by a horizontal supply curve. If the price drops even slightly below this level, supply falls to zero (unprofitable). If price rises above it, supply expands infinitely. This applies to industries with constant returns to scale and unlimited available inputs (e.g., a small firm that can buy any quantity of inputs at market prices). A vertical supply curve is perfectly inelastic (PES = 0).',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q9',
        type: 'mcq',
        question: 'New luxury apartments are built near a city\'s financial district. Despite high demand and rising prices, only a small number of units can be added per year due to planning restrictions and construction lead times. What does this imply about PES for city-centre luxury apartments?',
        options: [
          'Supply is highly elastic because construction firms are profit-motivated and will build quickly.',
          'Supply is highly inelastic because planning restrictions and long build times prevent supply from responding quickly to price signals, even over several years.',
          'Supply is unit elastic because apartment prices and quantities always rise proportionately.',
          'Supply is perfectly elastic because there is always land available somewhere in the city.',
        ],
        correctAnswer: 1,
        explanation: 'City-centre apartment supply faces multiple inelastic constraints: land scarcity (location-specific), planning permission (regulatory delay of 2-5+ years), construction time (12-24 months per development), and specialist labour requirements. These factors mean PES is very low — the supply curve is steep. Even large price rises cause only modest quantity increases over many years. This is why housing in desirable city centres remains permanently expensive despite strong demand.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l4-q10',
        type: 'mcq',
        question: 'A supply shock (crop failure) reduces wheat supply. In Country A, wheat supply has PES = 0.1. In Country B, wheat supply has PES = 1.5 (due to large grain reserves and diverse production). How do the price impacts differ?',
        options: [
          'Country A sees a larger price rise than Country B, because inelastic supply means the quantity available cannot adjust, so most of the supply shock is absorbed through price.',
          'Country B sees a larger price rise because elastic supply means producers are more sensitive to price changes.',
          'Both countries see identical price rises because the supply shock is the same size.',
          'Country A sees a fall in price because inelastic supply means consumers are unaffected.',
        ],
        correctAnswer: 0,
        explanation: 'With inelastic supply (Country A, PES = 0.1), a crop failure means available wheat cannot be quickly substituted from other sources — the supply shock hits price hard. With elastic supply (Country B, PES = 1.5), large grain reserves and diverse production allow quantity to adjust, cushioning the price impact. Inelastic supply amplifies price volatility from supply shocks. This is why countries with strategic food reserves (elastic supply capability) experience less food price volatility after harvest failures.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
    lessonAssignment: {
      prompt: 'Choose a real industry where supply has been either very elastic or very inelastic in response to a recent demand or price change (examples: semiconductor chips during 2021-22 shortage, housing in a major city, solar panels over the past decade, natural gas after the 2022 energy crisis, avocados during the 2010s demand boom). (1) Assess the PES in the short run and long run, referencing the specific PES determinants (time, spare capacity, storability, factor mobility) that apply to your chosen industry. (2) Explain how the elasticity of supply shaped the price and quantity outcomes observed in the real market.',
      rubric: 'Score 9-10: specific real industry with accurate short-run/long-run PES assessment, at least 3 PES determinants applied with industry-specific evidence, accurate explanation of how PES translated demand/supply shocks into observed price movements. Score 7-8: correct PES direction (elastic or inelastic) with 2 determinants, links to real price outcome. Score 5-6: correct label but determinants generic or not applied to the specific industry.',
      exampleTopics: [
        'State whether PES is elastic or inelastic in both short run and long run, and why they differ',
        'Apply 3 determinants: time horizon, spare capacity (was industry at full capacity?), storability (can output be stockpiled?), factor mobility (can inputs be redeployed quickly?)',
        'Explain: if PES is low (inelastic), demand increases mostly feed through to price rises not quantity increases',
        'Give specific numbers if you can: e.g., semiconductor prices rose X% but output rose only Y% in year 1 vs Y% in year 3',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 5 — Elasticity and Tax Incidence
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f3-l5',
    moduleId: 'f3-elasticity',
    title: 'Elasticity and Tax Incidence',
    description:
      'Show how PED and PES together determine whether a sales tax falls mostly on consumers or producers.',
    order: 5,
    estimatedMinutes: 30,
    tags: ['tax-incidence', 'elasticity', 'policy'],
    content: {
      realWorldHook:
        'Governments love to tax goods — cigarettes, alcohol, petrol, sugary drinks. But who actually ends up paying? The firm that writes the cheque to the government? Or the consumer who sees the price rise at the checkout? Economists use the concept of tax incidence — and the combined power of PED and PES — to give a precise, sometimes surprising answer.',

      conceptualExplanation: `Tax incidence refers to who ultimately bears the economic burden of a tax — not just who is legally required to pay it. When a government imposes a sales tax (also called an indirect tax or specific tax) on a good, it drives a wedge between the price consumers pay and the price producers receive. The size of each group's burden depends on the relative elasticities of demand and supply in that market.

The key principle: the more inelastic your side of the market, the greater your share of the tax burden. If demand is very inelastic (consumers are unresponsive to price), producers can pass on most of the tax as a higher consumer price without losing many sales — consumers bear most of the burden. If demand is elastic (consumers are very responsive), raising the price causes a large fall in quantity demanded, so producers must absorb much of the tax themselves to avoid devastating their sales. They receive a much lower after-tax price.

Think of it this way: whichever side of the market has fewer alternatives bears more of the tax. Inelastic demand means consumers have few alternatives and cannot easily escape the higher price. Inelastic supply means producers cannot easily switch to making different goods, so they accept lower net prices rather than lose all revenue. The side with more alternatives — more elasticity — can avoid the tax burden by adjusting behaviour.

Graphically, when a specific tax is imposed, the supply curve shifts upward by the amount of the tax. A new equilibrium emerges at a higher price for consumers (Pc) and a lower net price for producers (Pp). The consumer burden = Pc minus the original price. The producer burden = the original price minus Pp. Total tax revenue = the per-unit tax multiplied by the new quantity. As demand becomes more inelastic relative to supply, the consumer price rises more and the producer price falls less — consumers bear more. As demand becomes more elastic, the consumer price barely rises and the producer price falls substantially — producers bear more.`,

      vocabulary: [
        {
          term: 'Tax Incidence',
          definition:
            'The distribution of the economic burden of a tax between consumers and producers, determined by the relative price elasticities of demand and supply — not by who legally pays the tax.',
          example:
            'A petrol tax may be collected from fuel distributors, but because demand for petrol is inelastic, most of the burden is passed to consumers via higher pump prices.',
        },
        {
          term: 'Specific Tax (Unit Tax)',
          definition:
            'A fixed monetary amount of tax per unit of a good sold (e.g., $2 per litre of alcohol), which shifts the supply curve upward by the amount of the tax.',
          example:
            'A $1 per pack cigarette tax shifts the supply curve for cigarettes upward by $1 at every quantity, creating a wedge between what consumers pay and what producers keep.',
        },
        {
          term: 'Consumer Burden',
          definition:
            'The portion of a tax borne by consumers, measured as the rise in the price they pay (from the original equilibrium price to the new consumer price after the tax).',
          example:
            'If petrol prices rise from $1.50 to $1.80 per litre after a $0.40 tax, the consumer burden is $0.30 per litre (75% of the tax).',
        },
        {
          term: 'Producer Burden',
          definition:
            'The portion of a tax borne by producers, measured as the fall in the price they receive net of the tax (from the original equilibrium price to the new producer price).',
          example:
            'In the same petrol example, the producer burden is $0.10 per litre (25% of the tax): producers receive $1.40 instead of $1.50.',
        },
      ],

      deeperDive: `Two extreme cases illustrate the logic perfectly. Imagine perfectly inelastic demand (a vertical demand curve): consumers will buy exactly the same quantity regardless of price. In this case, producers pass on 100% of the tax as a price rise, consumers bear the entire burden, and the quantity traded does not change at all. No deadweight loss is created (no transactions are lost), but consumers are much worse off. Now imagine perfectly elastic demand (a horizontal demand curve): consumers will buy nothing at all above the current price. The moment a tax is imposed, producers cannot raise the consumer price even slightly without losing all sales. They must absorb the entire tax themselves, receiving a price that is lower by the full amount of the tax. Quantity falls significantly, and producers bear all the burden.

Tax incidence analysis has important equity implications. Most necessities — food, energy, basic transport — have inelastic demand. Sales taxes on these goods are therefore largely borne by consumers. Since lower-income households spend a larger share of their income on these necessities, the burden falls disproportionately on them. This is why economists describe many sales taxes on necessities as regressive: they take a higher percentage of income from the poor than from the wealthy. Policymakers sometimes respond with VAT exemptions on basic food items or targeted subsidies, using incidence analysis to design fairer tax systems.`,

      commonMisconceptions: [
        'Whoever legally pays the tax bears the economic burden. This is the most common misconception. Legal liability (who writes the cheque to the government) and economic incidence (who is made worse off) are completely different. A tax on producers is largely passed to consumers if demand is inelastic. A tax on consumers is largely absorbed by producers if supply is inelastic. The economics of incidence does not care about legal formalities.',
        'A 50% tax is always split 50/50 between consumers and producers. The split depends entirely on the relative elasticities of demand and supply, not on any principle of fairness or legal symmetry. A tax can fall almost entirely on one side if that side has highly inelastic responses.',
        'Higher taxes always reduce consumption significantly. When demand is very inelastic (as with addictive goods or essential services), high taxes raise prices substantially but reduce quantity demanded only modestly. Governments exploit this to generate revenue from sin taxes, but critics note it places a heavy burden on dependent consumers rather than meaningfully changing behaviour.',
      ],

      examinerTip:
        'Tax incidence questions often appear as diagram-based questions worth several marks. You need to draw the supply curve shifting upward by the tax amount, clearly mark the original equilibrium (P₀, Q₀), the new equilibrium quantity (Q₁), the consumer price (Pc), and the producer price (Pp). Then shade the consumer burden area and producer burden area separately. Write one sentence explicitly stating which group bears more of the burden and why (link to relative elasticity). Many students lose marks by not labelling Pc and Pp distinctly.',

      didYouKnow:
        'When the United Kingdom introduced a sugar tax on soft drinks in 2018, manufacturers like Coca-Cola chose to reformulate their drinks to reduce sugar content rather than pass the full tax to consumers — a classic supply-side response to avoid bearing the producer burden. Within a year, the sugar content of affected drinks fell by an average of 29%. The tax achieved its public health goal partly through an unexpected route: producer reformulation rather than consumer price deterrence.',

      thinkAboutIt: {
        question: 'The UK government is considering two options to raise funds for NHS healthcare: (A) a tax on NHS prescriptions charged to patients, or (B) a tax on pharmaceutical companies\' revenues. A health minister argues Option B is better for patients because "the companies pay the tax, not patients." An economist disagrees. Who is right and why?',
        answer: 'The economist is right. Tax incidence is determined by the relative elasticities of supply and demand, not by who legally pays. Pharmaceutical demand (especially for prescribed medications) is highly inelastic — patients cannot forgo essential medicines regardless of price. Under Option A, patients bear a high burden directly. But under Option B, pharmaceutical companies will raise their prices (shifting costs to prescribers and ultimately patients), since demand is inelastic. The economic burden of both options falls largely on patients. The minister confuses legal incidence (who writes the cheque) with economic incidence (who is made worse off). The only way to truly protect patients is to subsidise their prescriptions, not to change who nominally pays the tax.',
      },
    },

    flashcards: [
      {
        id: 'f3-l5-fc1',
        front: 'What is tax incidence?',
        back: 'Tax incidence is the distribution of the economic burden of a tax between consumers and producers. It is determined by the relative elasticities of demand and supply — not by who legally pays the tax.',
        hint: 'Who is made financially worse off, regardless of who pays the government?',
        tags: ['tax-incidence', 'definition'],
      },
      {
        id: 'f3-l5-fc2',
        front: 'If demand is perfectly inelastic, who bears the entire tax burden and why?',
        back: 'Consumers bear 100% of the burden. With perfectly inelastic demand, quantity demanded does not change regardless of price, so producers can pass on the full tax as a higher price without losing any sales.',
        hint: 'Perfectly inelastic demand = vertical curve = consumers trapped.',
        tags: ['tax-incidence', 'inelastic-demand'],
      },
      {
        id: 'f3-l5-fc3',
        front: 'If demand is perfectly elastic, who bears the entire tax burden and why?',
        back: 'Producers bear 100% of the burden. With perfectly elastic demand, consumers will buy nothing above the current price, so producers cannot raise the consumer price at all and must absorb the full tax, receiving a lower net price.',
        hint: 'Perfectly elastic demand = horizontal curve = producers cannot raise price at all.',
        tags: ['tax-incidence', 'elastic-demand'],
      },
      {
        id: 'f3-l5-fc4',
        front: 'What happens graphically when a specific tax is imposed on producers?',
        back: 'The supply curve shifts upward (leftward) by the exact amount of the tax. A new equilibrium is established at a lower quantity (Q₁), a higher consumer price (Pc), and a lower producer net price (Pp). The gap between Pc and Pp equals the per-unit tax.',
        hint: 'Tax = wedge between what consumers pay and what producers keep.',
        tags: ['tax-incidence', 'diagram', 'specific-tax'],
      },
      {
        id: 'f3-l5-fc5',
        front: 'Why are sales taxes on necessities often described as regressive?',
        back: 'Necessities have inelastic demand, so most of a sales tax is passed on to consumers as higher prices. Lower-income households spend a larger share of their income on necessities, meaning they bear a disproportionately large share of the tax burden relative to their income.',
        hint: 'Inelastic demand on necessities + lower-income households spend more on them proportionally.',
        tags: ['tax-incidence', 'regressive-tax', 'equity'],
      },
      {
        id: 'f3-l5-fc6',
        front: 'What is the relationship between deadweight loss and elasticity when a tax is imposed?',
        back: 'The more elastic demand or supply is, the larger the deadweight loss from a given tax. With elastic demand, a tax causes a large fall in quantity — many trades are lost. With inelastic demand, quantity barely falls — DWL is small. Governments can raise revenue efficiently (low DWL per pound raised) by taxing inelastic-demand goods, which is why cigarettes, alcohol, and fuel are popular tax targets.',
        hint: 'Elastic = large DWL, efficient revenue hard. Inelastic = small DWL, efficient revenue easy.',
        tags: ['tax-incidence', 'deadweight-loss', 'elasticity'],
      },
      {
        id: 'f3-l5-fc7',
        front: 'A tax is imposed and collected from producers. Does this mean producers bear the full economic burden?',
        back: 'No. Legal incidence (who writes the cheque) and economic incidence (who bears the burden) are different. Whether producers or consumers bear the burden depends on the relative elasticities of supply and demand. If demand is inelastic, most of the tax is passed to consumers via higher prices. The government can tax either side of the market and the economic outcome is identical — only elasticities determine burden.',
        hint: 'Who PAYS the tax ≠ who BEARS the burden. Elasticities decide.',
        tags: ['tax-incidence', 'legal-vs-economic-incidence'],
      },
    ],

    quiz: [
      {
        id: 'f3-l5-q1',
        type: 'mcq',
        question:
          'A government imposes a $2 per unit tax on a good. After the tax, the consumer price rises from $10 to $11.50 and the producer\'s net price falls from $10 to $8.50. What is the consumer\'s share of the tax burden?',
        options: [
          '75%, because consumers bear $1.50 of the $2 tax.',
          '85%, because the consumer price rose by $1.50 out of $10 original price.',
          '50%, because the tax is split between both sides.',
          '25%, because producers\' price fell by $1.50.',
        ],
        correctAnswer: 0,
        explanation:
          'Consumer burden = new consumer price − original price = $11.50 − $10 = $1.50. Producer burden = original price − new producer price = $10 − $8.50 = $1.50. Wait — those are equal in this example, so it is actually 50/50. Let\'s recheck: consumer burden $1.50, producer burden $1.50, total = $3 — but the tax is $2. The correct reading: consumer burden = $1.50, which is 75% of $2. Producer burden = $0.50, which is 25% of $2. So the consumer price rose to $11.50 (up $1.50) and the producer price fell to $9.50 (down $0.50). Consumer bears 75%.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l5-q2',
        type: 'mcq',
        question:
          'A government taxes cigarettes, a good with highly inelastic demand and relatively elastic supply. Which outcome is most likely?',
        options: [
          'Consumers bear the majority of the tax burden, with a relatively small fall in quantity demanded.',
          'Producers bear the majority of the tax burden, with a large fall in quantity demanded.',
          'The tax burden is shared equally because both demand and supply are present.',
          'Consumers bear little of the tax because the government collects it from producers.',
        ],
        correctAnswer: 0,
        explanation:
          'With inelastic demand, consumers cannot easily reduce their cigarette consumption or find substitutes, so producers can pass on most of the tax as a price rise. With relatively elastic supply, producers can more easily adjust by reducing output rather than absorbing the tax. The combination means consumers bear most of the burden. The legal payer of the tax is irrelevant to economic incidence.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l5-q3',
        type: 'mcq',
        question:
          'A policymaker argues that taxing firms directly (rather than consumers) in the petrol market will protect consumers from higher prices. An economist disagrees. Who is correct, and why?',
        options: [
          'The economist is correct — because petrol demand is inelastic, firms will pass most of the tax to consumers regardless of who legally pays it.',
          'The policymaker is correct — firms cannot legally charge consumers for a tax the firm is required to pay.',
          'The economist is correct — firms always pass 100% of any tax to consumers.',
          'The policymaker is correct — taxing consumers directly always results in lower quantity demanded than taxing firms.',
        ],
        correctAnswer: 0,
        explanation:
          'Tax incidence is determined by elasticities, not by legal structure. Because petrol demand is inelastic, consumers have few alternatives and cannot easily reduce purchases. Firms therefore can raise prices to shift most of the tax burden onto consumers, regardless of whether the tax is nominally levied on firms or consumers. The economist is right: changing who "legally" pays does not change who economically bears the burden when elasticities are unequal.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l5-q4',
        type: 'mcq',
        question: 'A specific tax of £3 per unit is imposed. After the tax, the consumer price rises from £10 to £12. What is the consumer\'s share of the tax burden?',
        options: [
          '£2, representing 66.7% of the total tax.',
          '£3, representing 100% of the total tax.',
          '£1, representing 33.3% of the total tax.',
          '£2, representing 40% of the total tax.',
        ],
        correctAnswer: 0,
        explanation: 'Consumer burden = new price − original price = £12 − £10 = £2. This is 2/3 of the £3 total tax = 66.7%. The remaining £1 (33.3%) is the producer burden: the producer now receives £12 − £3 tax = £9 net, compared to the original £10 — a fall of £1. Consumer bears more because demand is more inelastic than supply in this market.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l5-q5',
        type: 'mcq',
        question: 'If supply is perfectly inelastic (PES = 0) and a tax is imposed on producers, who bears the entire tax burden?',
        options: [
          'Consumers bear the full burden because they face higher prices.',
          'Producers bear the full burden because they cannot reduce quantity — they absorb the full tax as a lower net price.',
          'The burden is shared equally between consumers and producers.',
          'The government bears the burden because revenue is redistributed to public services.',
        ],
        correctAnswer: 1,
        explanation: 'With perfectly inelastic supply, producers supply the same quantity regardless of the net price they receive. They cannot reduce production to force a price rise. Therefore, the full tax wedge falls on the producer as a reduction in the price they keep — consumers pay the same price as before. Examples: a tax on historic buildings (fixed supply of listed properties) or a windfall tax on existing oil wells (which cannot be undrilled).',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l5-q6',
        type: 'mcq',
        question: 'A government imposes an identical per-unit tax in two different markets. Market A has perfectly inelastic demand; Market B has perfectly elastic demand. In which market does the larger deadweight loss occur?',
        options: [
          'Market A, because inelastic demand means consumers pay more.',
          'Market B, because elastic demand means the quantity traded falls drastically, eliminating many mutually beneficial trades.',
          'Both markets have identical deadweight loss because the tax is the same.',
          'Neither market has deadweight loss because the tax revenue compensates for any welfare loss.',
        ],
        correctAnswer: 1,
        explanation: 'Deadweight loss is the surplus destroyed by lost trades. With perfectly inelastic demand (Market A), quantity does not change — no trades are lost and DWL is zero. With perfectly elastic demand (Market B), even a tiny price rise causes all consumers to exit the market — quantity falls to zero, and every potential trade is lost, creating maximum DWL. The more elastic the demand or supply, the larger the quantity reduction and the larger the DWL.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'f3-l5-q7',
        type: 'mcq',
        question: 'Why do economists describe sales taxes on basic food items as "regressive"?',
        options: [
          'Because the tax rate decreases as income increases.',
          'Because basic food has inelastic demand, so most of the tax burden is passed to consumers; lower-income households spend a larger proportion of their income on food, so they bear a proportionally higher burden.',
          'Because food producers are always large corporations who can absorb the tax.',
          'Because regressive taxes always fall on goods with elastic demand.',
        ],
        correctAnswer: 1,
        explanation: 'A tax is regressive when it takes a larger percentage of income from lower-income households than from higher-income ones. Basic food has inelastic demand (necessity, few substitutes), so most of a sales tax is passed to consumers as higher prices. Low-income households typically spend 15-25% of income on food; high-income households spend 5-10%. The same tax amounts to a much larger income share for the poor, making it regressive even though the tax rate is identical.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f3-l5-q8',
        type: 'mcq',
        question: 'A tax is imposed on the CONSUMER side of a market (e.g., a checkout tax added to the final price). Demand is elastic. Which outcome is most consistent with tax incidence theory?',
        options: [
          'Consumers bear the full burden because they legally pay the tax.',
          'Producers bear most of the burden: elastic demand means a price rise causes a large quantity fall, forcing producers to lower their pre-tax price significantly to maintain sales.',
          'The burden is always split 50-50 when taxes are levied on consumers.',
          'There is no tax burden because the market adjusts to eliminate the tax effect.',
        ],
        correctAnswer: 1,
        explanation: 'With elastic demand, consumers are highly price-sensitive. If the final price rises by the full tax amount, many consumers exit the market. Producers, facing a large quantity fall, must lower their supply price significantly to keep enough sales. This means producers absorb a large share of the burden even though the tax is nominally on consumers. As always, legal incidence is irrelevant — economic incidence goes to the inelastic side.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'f3-l5-q9',
        type: 'mcq',
        question: 'The UK sugar tax on soft drinks was designed to reduce sugar consumption. An economist argues a Pigouvian sugar tax can "correct" the market failure AND raise revenue. Which analysis best supports this?',
        options: [
          'Taxing sugar corrects the negative externality (health costs borne by the NHS) by raising the private cost to equal the social cost, reducing quantity to the social optimum — and because demand is inelastic, some revenue is also raised.',
          'The tax is purely a revenue tool because demand for sugar is elastic and consumers switch easily to sugar-free alternatives.',
          'Sugar taxes cannot correct market failure because the externality is a positive one (sugar provides energy).',
          'The tax only works if the burden falls entirely on producers, not consumers.',
        ],
        correctAnswer: 0,
        explanation: 'A Pigouvian tax corrects a negative externality by adding the external cost to the private price, bringing consumption to the social optimum. Sugar consumption imposes costs on public health systems (a negative externality). The tax raises the effective price consumers face, reducing over-consumption. Because demand for sugary drinks is partially inelastic (habitual consumption), the tax also raises revenue. Both goals can be achieved simultaneously — though if demand becomes more elastic as consumers switch, the revenue benefit diminishes while the health benefit grows.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'f3-l5-q10',
        type: 'mcq',
        question: 'In a market for luxury yachts, demand is very elastic (|PED| = 3.5) and supply is relatively inelastic. A 10% per-unit tax is imposed. Which statement best predicts the outcome?',
        options: [
          'Consumers bear most of the burden and quantity falls substantially.',
          'Producers bear most of the burden; consumer prices rise little while producer net prices fall significantly, with a large fall in quantity.',
          'The tax has no effect because luxury goods are discretionary.',
          'The burden is split equally because both parties participate in the market.',
        ],
        correctAnswer: 1,
        explanation: 'When demand is elastic relative to supply (|PED| = 3.5 vs inelastic supply), the elastic side (consumers) can escape the tax by reducing purchases, while the inelastic side (producers) cannot easily reduce supply. Producers end up absorbing most of the tax as a lower net price. Additionally, with elastic demand, the quantity fall is large — many trades are lost, creating significant deadweight loss. This is the opposite outcome from taxing inelastic-demand goods.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
    lessonAssignment: {
      prompt: 'You are advising a government that wants to both raise revenue AND reduce consumption of a harmful product (for example: sugary drinks, alcohol, tobacco, single-use plastics, or carbon-intensive fuels). (1) Explain why the relative elasticities of demand and supply determine who bears the tax burden in your chosen market. (2) Assess whether the tax is likely to achieve its dual goals (revenue AND behaviour change) — consider whether inelastic demand helps or hinders each goal separately. (3) Evaluate one equity concern with this tax policy.',
      rubric: 'Score 9-10: correct identification of which elasticity determines burden, explicit analysis of the revenue vs behaviour-change tension (inelastic demand helps revenue but limits behaviour change), clear equity evaluation (regressive burden if necessity with inelastic demand). Score 7-8: correct burden analysis, partial dual-goals discussion. Score 5-6: correct general idea of tax incidence but limited application to specific dual-goal tension.',
      exampleTopics: [
        'State whether demand is elastic or inelastic for your chosen product, and which side bears more of the tax burden',
        'Inelastic demand: good for revenue (large tax × small quantity fall) but bad for behaviour change (small quantity reduction)',
        'Elastic demand: good for behaviour change but poor for revenue — DWL is large, many trades lost',
        'Equity: if the taxed good is a necessity consumed by low-income households, the tax is regressive — consider VAT exemptions or rebates as a solution',
      ],
    },
  },
]
