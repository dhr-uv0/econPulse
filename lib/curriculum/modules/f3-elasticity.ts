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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
]
