import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f2-supply-demand',
  title: 'Demand, Supply, and Markets',
  description: 'Master the engine of market economies — how prices emerge from the interaction of buyers and sellers.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 2,
  estimatedHours: 3,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 1 — Demand
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f2-l1',
    moduleId: 'f2-supply-demand',
    title: 'Demand — What Buyers Want and Why',
    description:
      'Define demand, draw demand curves, and identify the five non-price determinants that shift the curve.',
    order: 1,
    estimatedMinutes: 30,
    tags: ['demand', 'demand-curve', 'shifters'],
    content: {
      realWorldHook:
        'Every January, gyms overflow with new members — and prices barely budge. Yet when a new iPhone launches, Apple raises its price and sells millions anyway. Why do some goods attract more buyers at higher prices while others see demand collapse at the first hint of a price rise? The answer lies in one of the most fundamental ideas in all of economics: the law of demand.',

      prerequisiteRecap: `In the circular flow model from the previous module, households and firms are linked through product and factor markets. Demand is what drives households' spending flows in that product market — without understanding what determines buyers' willingness to purchase, the circular flow model remains an empty diagram.`,

      recallQuestions: [
        {
          id: 'f2-l1-recall-1',
          type: 'mcq' as const,
          question: 'In the circular flow of income model, which of the following best describes the role of households in the product market?',
          options: [
            'They sell goods and services to firms in exchange for revenue.',
            'They spend income on goods and services produced by firms, creating consumption expenditure.',
            'They supply land, labour, and capital to the factor market only.',
            'They receive wages, rent, and profit from the government.',
          ],
          correctAnswer: 1,
          explanation: 'In the circular flow model, households are buyers in the product market — they use the income earned in factor markets to purchase goods and services from firms, generating the consumption expenditure (C) that flows back to firms as revenue.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `## What Is Demand?

**Demand** is not simply desire. In economics, demand refers to the *quantity of a good or service that consumers are willing and able to purchase at various prices over a given time period*. Both conditions matter: wanting something is not enough — you must also have the purchasing power to back up that want. When economists talk about demand, they always mean *effective* demand backed by money.

## The Law of Demand

The **law of demand** states that, *all else equal (ceteris paribus)*, as the price of a good rises, the quantity demanded falls; as the price falls, the quantity demanded rises. This inverse relationship exists for two reasons. First, the **substitution effect**: when a good becomes more expensive, consumers switch to cheaper alternatives. Second, the **income effect**: a price rise reduces your real purchasing power, so you can afford less of the good even if your money income stays the same.

## The Demand Curve

Plotting price on the vertical axis and quantity demanded on the horizontal axis produces the **demand curve** — a line (usually drawn as straight for simplicity) that slopes *downward from left to right*. Each point on the curve represents a (price, quantity) pair from the demand schedule. A movement *along* the curve — called a **change in quantity demanded** — occurs only when the price of the good itself changes. This is not the same as a shift.

## Non-Price Determinants (Shifters)

Five factors can shift the entire demand curve left or right without any change in the good's own price:

1. **Income** — For normal goods, higher income raises demand (curve shifts right); for inferior goods, higher income *lowers* demand (curve shifts left).
2. **Prices of related goods** — A rise in the price of a *substitute* (e.g., coffee when tea rises) increases demand; a rise in the price of a *complement* (e.g., printers when ink cartridges rise) decreases demand.
3. **Consumer tastes and preferences** — Trends, advertising, and cultural shifts change how desirable people find a product.
4. **Expectations** — If consumers expect prices to rise next month, they buy more today (demand rises now); if they expect prices to fall, they wait (demand falls now).
5. **Number of buyers** — A larger market population means more potential purchasers, shifting the curve right.

Remember the mnemonic **IPTED** (Income, Prices of related goods, Tastes, Expectations, Demand-side population).`,

      vocabulary: [
        {
          term: 'Demand',
          definition:
            'The quantity of a good or service that consumers are willing and able to purchase at various price levels during a given period, all else equal.',
          example:
            'The demand for umbrellas rises during rainy seasons as more consumers are both willing and able to pay for them.',
        },
        {
          term: 'Law of Demand',
          definition:
            'The principle that, ceteris paribus, quantity demanded and price move in opposite directions — a higher price leads to lower quantity demanded.',
          example:
            'When a streaming service raises its monthly fee from $10 to $15, the number of subscribers decreases — illustrating the law of demand.',
        },
        {
          term: 'Substitute Good',
          definition:
            'A good that can replace another in consumption; when the price of one rises, demand for its substitute increases.',
          example:
            'Butter and margarine are substitutes — if butter prices spike, more consumers buy margarine instead.',
        },
        {
          term: 'Complement Good',
          definition:
            'A good consumed jointly with another; when the price of one rises, demand for its complement decreases.',
          example:
            'Gaming consoles and video games are complements — a price rise in consoles reduces demand for games.',
        },
      ],

      deeperDive: `## Individual vs. Market Demand

An individual demand curve shows how much *one consumer* buys at each price. The **market demand curve** is obtained by *horizontally summing* all individual demand curves — adding up the quantities demanded by every buyer at each price level. This aggregation is why market demand curves slope downward even if some unusual individuals have upward-sloping personal demands (a theoretical rarity called a Giffen good).

## Elasticity Preview

Not all demand curves are equally steep. A very steep demand curve signals **inelastic demand** — buyers are relatively insensitive to price changes (think insulin for diabetics). A flat demand curve signals **elastic demand** — buyers are very sensitive to price (think luxury handbags with many substitutes). Understanding the *slope* of demand is the gateway to price elasticity, which you will study in depth in a later module.`,

      commonMisconceptions: [
        'A fall in price does NOT shift the demand curve — it causes a movement *along* the existing demand curve (a change in quantity demanded, not a change in demand).',
        'Demand and quantity demanded are not synonyms: "demand" refers to the entire curve/schedule, while "quantity demanded" is a single point on that curve at a specific price.',
        'An increase in demand does not necessarily mean people *want* the good more emotionally — it means they are willing and able to buy more of it at every price level, often due to an external factor like rising income.',
      ],

      examinerTip:
        'In any exam question involving demand, always state ceteris paribus when applying the law of demand, and clearly distinguish between a "change in demand" (curve shift) and a "change in quantity demanded" (movement along the curve). Examiners deduct marks for conflating these.',

      didYouKnow:
        'The demand curve concept was formally introduced by Alfred Marshall in his 1890 masterwork *Principles of Economics*, but merchants had understood the inverse price-quantity relationship intuitively for thousands of years — ancient Babylonian clay tablets record price adjustments based on buyer response.',
    },
    flashcards: [
      {
        id: 'f2-l1-fc1',
        front: 'What is the law of demand?',
        back: 'Ceteris paribus, as the price of a good rises, quantity demanded falls; as price falls, quantity demanded rises. The relationship between price and quantity demanded is inverse.',
        tags: ['demand', 'law-of-demand'],
      },
      {
        id: 'f2-l1-fc2',
        front: 'What is the difference between a change in demand and a change in quantity demanded?',
        back: 'A change in *quantity demanded* is a movement along the demand curve caused by a change in the good\'s own price. A change in *demand* is a shift of the entire curve caused by a non-price determinant (shifter).',
        tags: ['demand', 'shifts', 'movements'],
      },
      {
        id: 'f2-l1-fc3',
        front: 'Name the five non-price determinants of demand (shifters).',
        back: 'Income · Prices of related goods (substitutes & complements) · Tastes and preferences · Expectations · Number of buyers  (Mnemonic: IPTED)',
        tags: ['demand', 'shifters'],
      },
      {
        id: 'f2-l1-fc4',
        front: 'What happens to demand for a normal good when consumer income rises?',
        back: 'Demand increases — the entire demand curve shifts to the right — because consumers can now afford to buy more of the good at every price level.',
        tags: ['demand', 'income', 'normal-good'],
      },
      {
        id: 'f2-l1-fc5',
        front: 'If the price of coffee rises sharply, what happens to the demand for tea (a substitute)?',
        back: 'Demand for tea increases (curve shifts right). Consumers substitute away from the now-more-expensive coffee toward tea, raising quantity demanded of tea at every price.',
        tags: ['demand', 'substitutes', 'shifters'],
      },
    ],
    quiz: [
      {
        id: 'f2-l1-q1',
        type: 'mcq',
        question:
          'A supermarket lowers the price of orange juice from $3.00 to $2.00 per litre. Consumers respond by buying more orange juice. Which of the following best describes this?',
        options: [
          'An increase in demand for orange juice',
          'A rightward shift of the demand curve for orange juice',
          'An increase in quantity demanded of orange juice',
          'A decrease in the supply of orange juice',
        ],
        correctAnswer: 2,
        explanation:
          'A change in the good\'s own price causes a movement *along* the demand curve — a change in quantity demanded, not a change in demand. The curve itself has not shifted; consumers are simply at a different point on the same curve.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l1-q2',
        type: 'mcq',
        question:
          'Smartphones and mobile data plans are complementary goods. If the price of smartphones falls significantly, what happens in the market for mobile data plans?',
        options: [
          'Demand for data plans falls because consumers have less money to spend.',
          'Demand for data plans rises because more people now own smartphones.',
          'The supply of data plans increases to match lower smartphone prices.',
          'There is no effect on data plan demand because price changes only affect the good itself.',
        ],
        correctAnswer: 1,
        explanation:
          'Complements are consumed together. Cheaper smartphones increase smartphone ownership, which increases the demand for the complementary good — mobile data plans. The demand curve for data plans shifts rightward.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l1-q3',
        type: 'mcq',
        question:
          'A news report announces that house prices are expected to rise 20% next year. How would this expectation most likely affect current demand for housing?',
        options: [
          'Current demand for housing decreases because buyers will wait for lower prices.',
          'Current demand for housing is unaffected because the price change has not happened yet.',
          'Current demand for housing increases as buyers rush to purchase before prices rise.',
          'The supply of housing increases in response to expected higher prices.',
        ],
        correctAnswer: 2,
        explanation:
          'Expectations of future price rises are a non-price determinant of demand. Rational consumers will bring forward their purchases to avoid paying higher prices later, shifting the current demand curve rightward and increasing present quantity demanded.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 2 — Supply
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f2-l2',
    moduleId: 'f2-supply-demand',
    title: 'Supply — What Sellers Offer and Why',
    description:
      'Define supply, draw supply curves, and identify the six non-price determinants of supply including technology and input costs.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['supply', 'supply-curve', 'shifters'],
    content: {
      realWorldHook:
        'In 2021, a global semiconductor shortage meant car manufacturers could not get enough chips to complete their vehicles — thousands of nearly-finished cars sat in fields waiting for a single component. Yet chip factories could not simply flip a switch to produce more: building a new fabrication plant takes years and billions of dollars. The story of supply is the story of why producing more of something is rarely instant or free.',

      prerequisiteRecap: `The previous lesson established that demand curves slope downward because of the law of demand — as price rises, quantity demanded falls. Supply completes the other half of the market picture by explaining how producers respond to price changes, creating the upward-sloping counterpart to the demand curve.`,

      recallQuestions: [
        {
          id: 'f2-l2-recall-1',
          type: 'mcq' as const,
          question: 'According to the law of demand, what happens to quantity demanded when the price of a good rises, all else equal?',
          options: [
            'Quantity demanded rises because consumers expect further price increases.',
            'Quantity demanded falls because the good becomes relatively more expensive.',
            'Quantity demanded is unchanged because consumers have fixed habits.',
            'Quantity demanded rises because producers increase supply.',
          ],
          correctAnswer: 1,
          explanation: 'The law of demand states that, ceteris paribus, price and quantity demanded move in opposite directions. A higher price triggers the substitution effect (switch to cheaper alternatives) and the income effect (reduced real purchasing power), both reducing quantity demanded.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f2-l2-recall-2',
          type: 'mcq' as const,
          question: 'Which of the following would cause the demand curve for coffee to shift to the right?',
          options: [
            'A fall in the price of coffee.',
            'A rise in the price of tea (a substitute for coffee).',
            'A fall in consumer income (assuming coffee is a normal good).',
            'An expectation that coffee prices will fall next month.',
          ],
          correctAnswer: 1,
          explanation: 'A rise in the price of a substitute (tea) makes coffee relatively cheaper by comparison, so consumers switch from tea to coffee — the demand curve for coffee shifts rightward. A change in coffee\'s own price causes a movement along the curve, not a shift.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `## What Is Supply?

**Supply** is the quantity of a good or service that producers are *willing and able* to offer for sale at various prices over a given time period, all else equal. Like demand, both conditions matter — a factory that physically cannot produce more (not able) or a firm that refuses to sell below cost (not willing) is not supplying into the market in the economic sense.

## The Law of Supply

The **law of supply** states that, *ceteris paribus*, as the price of a good rises, the quantity supplied increases; as the price falls, the quantity supplied decreases. This positive relationship exists because higher prices make production more profitable, drawing in existing producers to expand output and new producers to enter the market. Lower prices erode profit margins, causing firms to cut production or exit.

## The Supply Curve

Plotting price (vertical axis) against quantity supplied (horizontal axis) yields the **supply curve**, which slopes *upward from left to right* — the opposite of the demand curve. A movement *along* the supply curve — a **change in quantity supplied** — occurs only when the good's own price changes. Everything else that could influence supply works through *shifts* of the curve.

## Non-Price Determinants of Supply (Shifters)

Six key factors shift the entire supply curve:

1. **Input costs (cost of production)** — If wages, raw materials, or energy prices rise, producing each unit costs more, so firms supply *less* at every price (curve shifts left). Lower input costs shift supply right.
2. **Technology** — Improved technology raises productivity, lowering per-unit costs and allowing firms to supply *more* at every price (curve shifts right).
3. **Number of sellers** — More producers in a market increases total market supply (curve shifts right); firms exiting shifts supply left.
4. **Government policies** — Subsidies lower production costs and shift supply right; taxes raise costs and shift supply left. Regulations can shift supply in either direction depending on their nature.
5. **Prices of related goods in production** — If a firm can use the same resources to produce an alternative product whose price has risen, it may switch production away from the original good (supply of original shifts left).
6. **Expectations of future prices** — If firms expect prices to rise, they may withhold current supply to sell later at a higher price (supply now shifts left).

The mnemonic **TINGPE** (Technology, Input costs, Number of sellers, Government policy, Prices of related goods in production, Expectations) covers all six.`,

      vocabulary: [
        {
          term: 'Supply',
          definition:
            'The quantity of a good or service that producers are willing and able to offer for sale at various price levels during a given period, ceteris paribus.',
          example:
            'The supply of solar panels has increased dramatically over the past decade as more manufacturers entered the market.',
        },
        {
          term: 'Law of Supply',
          definition:
            'The principle that, ceteris paribus, a higher price motivates producers to supply a greater quantity; a lower price leads to a lower quantity supplied.',
          example:
            'When crude oil prices spike, oil companies expand drilling operations, increasing the quantity of oil supplied.',
        },
        {
          term: 'Input Costs',
          definition:
            'The costs of resources used in production — including labour (wages), raw materials, energy, and capital — that directly affect a firm\'s willingness to supply.',
          example:
            'A rise in steel prices increases input costs for car manufacturers, causing them to supply fewer cars at any given price.',
        },
        {
          term: 'Subsidy',
          definition:
            'A government payment to producers that lowers their cost of production, thereby increasing supply and shifting the supply curve to the right.',
          example:
            'Government subsidies for electric-vehicle manufacturers have lowered production costs and boosted the supply of EVs.',
        },
      ],

      deeperDive: `## Producer Surplus and the Supply Curve

The supply curve is not just a descriptive tool — it encodes information about **producer surplus**, the difference between the price a firm receives and the minimum price it would have accepted (its marginal cost). The area above the supply curve and below the market price represents the total producer surplus in the market. Understanding this link between supply curves and surplus is essential for evaluating who gains from trade.

## Short-Run vs. Long-Run Supply

Supply responsiveness to price changes depends heavily on time. In the **short run**, at least one input (usually capital — factory size, equipment) is fixed, limiting how much firms can expand. In the **long run**, all inputs are variable: firms can build new factories, hire more workers, or exit the industry entirely. This is why long-run supply curves tend to be flatter (more elastic) than short-run supply curves — producers have more options to adjust when given enough time.`,

      commonMisconceptions: [
        'A rise in price does NOT shift the supply curve — it causes a movement along the supply curve (a change in quantity supplied). Only non-price factors shift the curve.',
        'An increase in supply means the curve shifts *rightward* — producers supply more at *every* price — not just that they are producing more at one specific price.',
        'Technology improvements always shift supply to the right (increase supply) — they do not affect demand unless they change the product\'s quality in a way consumers notice.',
      ],

      examinerTip:
        'When explaining a supply shift in an exam, always identify the *specific* non-price determinant, state the *direction* of the shift (left or right), and explain the *mechanism* — why does that factor change producers\' willingness or ability to supply? Vague answers like "supply changed" earn no marks.',

      didYouKnow:
        'The law of supply has one famous exception: the **backward-bending labour supply curve**. At very high wages, workers may actually supply *fewer* hours of labour because they are rich enough to value leisure more than additional income — a real-world quirk observed among high-earning professionals.',
    },
    flashcards: [
      {
        id: 'f2-l2-fc1',
        front: 'What is the law of supply?',
        back: 'Ceteris paribus, as the price of a good rises, quantity supplied increases; as price falls, quantity supplied decreases. Price and quantity supplied move in the same direction.',
        tags: ['supply', 'law-of-supply'],
      },
      {
        id: 'f2-l2-fc2',
        front: 'Which direction does a supply curve slope, and why?',
        back: 'Upward (positive slope) from left to right. Higher prices make production more profitable, incentivising existing firms to produce more and new firms to enter — increasing quantity supplied.',
        tags: ['supply', 'supply-curve'],
      },
      {
        id: 'f2-l2-fc3',
        front: 'Name the six non-price determinants of supply (shifters).',
        back: 'Technology · Input costs · Number of sellers · Government policy (taxes/subsidies) · Prices of related goods in production · Expectations  (Mnemonic: TINGPE)',
        tags: ['supply', 'shifters'],
      },
      {
        id: 'f2-l2-fc4',
        front: 'How does a new labour-saving technology affect the supply curve?',
        back: 'It shifts supply to the right (increases supply). The technology lowers per-unit production costs, making it profitable to produce and sell more at every price level.',
        tags: ['supply', 'technology', 'shifters'],
      },
      {
        id: 'f2-l2-fc5',
        front: 'What is the effect of a government subsidy on the supply curve?',
        back: 'A subsidy shifts the supply curve rightward (increases supply). By reducing producers\' cost of production, the subsidy makes it profitable to offer more units at every price.',
        tags: ['supply', 'government-policy', 'subsidy'],
      },
    ],
    quiz: [
      {
        id: 'f2-l2-q1',
        type: 'mcq',
        question:
          'A drought destroys a large portion of this year\'s wheat crop, dramatically raising the cost of wheat for bread manufacturers. What is the most likely effect on the market for bread?',
        options: [
          'The demand for bread increases because wheat is now scarce.',
          'The supply of bread decreases because input costs have risen.',
          'The supply of bread increases as manufacturers try to offset higher costs.',
          'The quantity supplied of bread rises as bread prices rise.',
        ],
        correctAnswer: 1,
        explanation:
          'Wheat is an input to bread production. A rise in wheat prices increases input costs, making bread production less profitable at every price level. This shifts the supply curve of bread to the left — a decrease in supply.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l2-q2',
        type: 'mcq',
        question:
          'A government introduces a new environmental regulation requiring factories to install expensive pollution filters. Assuming no change in market price, how does this affect the supply of manufactured goods?',
        options: [
          'Supply increases because the regulation signals quality, attracting more buyers.',
          'Supply is unaffected because the price of the goods has not changed.',
          'Supply decreases because the regulation raises production costs for firms.',
          'Supply increases because more workers are needed to install the filters.',
        ],
        correctAnswer: 2,
        explanation:
          'Environmental regulations that require costly equipment raise firms\' cost of production — a non-price determinant of supply. Higher costs reduce profitability and willingness to supply at each price level, shifting the supply curve to the left.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l2-q3',
        type: 'mcq',
        question:
          'Corn and soybean crops compete for the same farmland. If the price of soybeans rises sharply, what happens to the supply of corn?',
        options: [
          'Supply of corn increases because farmers earn more revenue in total.',
          'Supply of corn decreases as farmers switch land from corn to the more profitable soybeans.',
          'Supply of corn is unaffected because corn and soybeans are unrelated goods.',
          'Demand for corn falls because farmers prefer soybeans.',
        ],
        correctAnswer: 1,
        explanation:
          'Corn and soybeans are related goods in production — they compete for the same resource (farmland). A rise in soybean prices makes soybeans relatively more profitable, incentivising farmers to allocate land to soybeans instead of corn. The supply of corn shifts left.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 3 — Market Equilibrium
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f2-l3',
    moduleId: 'f2-supply-demand',
    title: 'Market Equilibrium — Where Prices Come From',
    description:
      'Show how supply and demand interact to produce an equilibrium price and quantity, and trace through surpluses and shortages.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['equilibrium', 'surplus', 'shortage'],
    content: {
      realWorldHook:
        'Have you ever noticed that water — essential for life — is cheap, while diamonds — essentially decorative — are expensive? This "water-diamond paradox" puzzled economists for centuries until they understood that price is not set by usefulness alone, but by the *interaction* of how much buyers want something and how readily sellers can provide it. That interaction is market equilibrium.',

      prerequisiteRecap: `The previous lesson showed that the supply curve slopes upward because higher prices incentivise producers to offer more, and that non-price factors such as input costs and technology can shift the entire curve. Market equilibrium builds directly on both the demand and supply curves by finding the single price where these two opposing forces balance.`,

      recallQuestions: [
        {
          id: 'f2-l3-recall-1',
          type: 'mcq' as const,
          question: 'A new labour-saving technology reduces the cost of producing smartphones. What is the most likely effect on the supply curve for smartphones?',
          options: [
            'The supply curve shifts to the left because fewer workers are needed.',
            'The supply curve shifts to the right because production costs have fallen.',
            'The supply curve is unchanged; only the demand curve shifts.',
            'There is a movement up the supply curve because prices rise.',
          ],
          correctAnswer: 1,
          explanation: 'Improved technology is a non-price determinant of supply. By reducing production costs, it increases the quantity firms are willing to supply at every price level, shifting the supply curve to the right (an increase in supply).',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f2-l3-recall-2',
          type: 'mcq' as const,
          question: 'Which mnemonic covers the six non-price determinants of supply?',
          options: [
            'IPTED',
            'TINGPE',
            'SNTPE',
            'DANCES',
          ],
          correctAnswer: 1,
          explanation: 'TINGPE stands for Technology, Input costs, Number of sellers, Government policy, Prices of related goods in production, and Expectations — the six factors that shift the supply curve. IPTED covers the five demand shifters.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `## What Is Equilibrium?

**Market equilibrium** is the price-quantity combination at which the quantity demanded by consumers exactly equals the quantity supplied by producers. At this point, the market "clears" — there are no unsatisfied buyers at the going price, and no unsold inventories sitting with sellers. Graphically, equilibrium is the point where the demand curve and supply curve *intersect*, yielding the **equilibrium price (P*)** and the **equilibrium quantity (Q*)**.

## Surpluses — Too Much Supply

When the actual market price is *above* the equilibrium price, quantity supplied exceeds quantity demanded — producers want to sell more than buyers want to buy. This excess supply is called a **surplus** (or glut). Surplus puts *downward pressure on price*: sellers, stuck with unsold goods, discount their prices to attract buyers. As price falls back toward equilibrium, quantity supplied decreases and quantity demanded increases until the surplus disappears.

## Shortages — Too Little Supply

When the market price is *below* equilibrium, quantity demanded exceeds quantity supplied — buyers want more than producers are willing to offer. This excess demand is called a **shortage** (or excess demand). Shortage puts *upward pressure on price*: unsatisfied buyers bid the price up, or sellers realise they can charge more. As price rises toward equilibrium, quantity demanded falls and quantity supplied rises until the shortage is eliminated.

## The Self-Correcting Market

Free markets have a remarkable self-correcting mechanism. Any price above equilibrium creates a surplus that pushes price down; any price below equilibrium creates a shortage that pushes price up. This automatic adjustment — driven by the incentives of profit-seeking sellers and utility-maximising buyers — is what economists call the **price mechanism** or the "invisible hand" (a term coined by Adam Smith). Without any central planner, prices signal to buyers and sellers how to allocate resources efficiently.`,

      vocabulary: [
        {
          term: 'Market Equilibrium',
          definition:
            'The price and quantity at which quantity demanded equals quantity supplied, leaving no tendency for price to change further.',
          example:
            'If apples equilibrate at $2 per kg, supermarkets sell exactly as many kilograms as consumers wish to buy at that price.',
        },
        {
          term: 'Surplus (Excess Supply)',
          definition:
            'A market condition where, at the current price, quantity supplied exceeds quantity demanded, creating downward pressure on price.',
          example:
            'After a bumper harvest, an oversupply of avocados creates a surplus — supermarkets discount prices to clear shelves.',
        },
        {
          term: 'Shortage (Excess Demand)',
          definition:
            'A market condition where, at the current price, quantity demanded exceeds quantity supplied, creating upward pressure on price.',
          example:
            'Popular concert tickets priced below equilibrium sell out instantly, creating a shortage — unsatisfied buyers pay premium prices on resale markets.',
        },
        {
          term: 'Price Mechanism',
          definition:
            'The process by which price signals coordinate the decisions of buyers and sellers, guiding resource allocation in a free market without central direction.',
          example:
            'A spike in petrol prices signals refineries to produce more and consumers to drive less — restoring balance through the price mechanism alone.',
        },
      ],

      deeperDive: `## Comparative Statics — Tracing Shift Effects

Economists use **comparative statics** to analyse how equilibrium changes when a demand or supply curve shifts. The method: (1) start at the original equilibrium; (2) identify *which* curve shifts and in *which* direction; (3) find the new intersection; (4) compare the new P* and Q* with the old ones. For example, if demand increases (shifts right) while supply is unchanged, both equilibrium price and quantity rise. If supply increases (shifts right) while demand is unchanged, equilibrium price falls but quantity rises.

## Double Shifts

When *both* curves shift simultaneously, one of the equilibrium variables becomes ambiguous. If demand and supply both increase: quantity definitely rises, but the effect on price depends on *which shift is larger*. If demand increases by more than supply, price rises; if supply increases by more, price falls; if they increase by equal amounts, price is unchanged. Examiners love double-shift questions — always note when the outcome is "indeterminate" rather than guessing a direction.`,

      commonMisconceptions: [
        'Equilibrium does not mean the market is "fair" or that everyone is satisfied — it simply means quantity supplied equals quantity demanded. Some buyers willing to pay less than P* go without the good.',
        'A shortage is not the same as scarcity. Scarcity is a universal condition (wants exceed available resources). A shortage is a specific market condition caused by price being held below equilibrium, often by a price ceiling.',
        'When demand increases and the equilibrium price rises, this does NOT shift the supply curve — it causes a movement along the existing supply curve (an increase in quantity supplied, not supply).',
      ],

      examinerTip:
        'In exam diagrams, always label the axes (Price on vertical, Quantity on horizontal), mark the equilibrium point clearly as (Q*, P*), and use arrows to show the direction of any shifts. A diagram without labels cannot earn full marks.',

      didYouKnow:
        'The first fully mathematical treatment of market equilibrium was developed by Léon Walras in 1874, who imagined an auctioneer calling out trial prices until markets cleared — a process he called "tâtonnement" (French for "groping towards" equilibrium). No real auctioneer is needed; prices adjust automatically through decentralised trading.',
    },
    flashcards: [
      {
        id: 'f2-l3-fc1',
        front: 'What is market equilibrium?',
        back: 'The price and quantity at which quantity demanded equals quantity supplied. Graphically, it is the intersection of the demand and supply curves. At this point the market clears with no surplus or shortage.',
        tags: ['equilibrium'],
      },
      {
        id: 'f2-l3-fc2',
        front: 'What is a surplus, and what does it do to price?',
        back: 'A surplus (excess supply) occurs when price is above equilibrium — quantity supplied > quantity demanded. Unsold inventories pressure sellers to lower prices, pushing the market back toward equilibrium.',
        tags: ['equilibrium', 'surplus'],
      },
      {
        id: 'f2-l3-fc3',
        front: 'What is a shortage, and what does it do to price?',
        back: 'A shortage (excess demand) occurs when price is below equilibrium — quantity demanded > quantity supplied. Unsatisfied buyers bid up prices, pushing the market back toward equilibrium.',
        tags: ['equilibrium', 'shortage'],
      },
      {
        id: 'f2-l3-fc4',
        front: 'If demand increases and supply is unchanged, what happens to equilibrium price and quantity?',
        back: 'Both equilibrium price (P*) and equilibrium quantity (Q*) rise. The demand curve shifts right, intersecting the supply curve at a higher, larger point.',
        tags: ['equilibrium', 'comparative-statics'],
      },
      {
        id: 'f2-l3-fc5',
        front: 'If supply increases and demand is unchanged, what happens to equilibrium price and quantity?',
        back: 'Equilibrium price (P*) falls and equilibrium quantity (Q*) rises. The supply curve shifts right, intersecting the demand curve at a lower price but larger quantity.',
        tags: ['equilibrium', 'comparative-statics'],
      },
    ],
    quiz: [
      {
        id: 'f2-l3-q1',
        type: 'mcq',
        question:
          'At a price of $50, a market has quantity supplied of 800 units and quantity demanded of 500 units. Which of the following will most likely occur?',
        options: [
          'A shortage develops and price rises toward equilibrium.',
          'A surplus develops and price falls toward equilibrium.',
          'The market is at equilibrium and price remains stable.',
          'Demand increases to eliminate the excess supply.',
        ],
        correctAnswer: 1,
        explanation:
          'Quantity supplied (800) exceeds quantity demanded (500) — this is a surplus of 300 units. Sellers are stuck with unsold goods and will lower prices to attract more buyers. Price falls until quantity supplied equals quantity demanded.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l3-q2',
        type: 'mcq',
        question:
          'A heatwave dramatically increases demand for air conditioners while supply remains unchanged. What is the new equilibrium outcome compared to the original?',
        options: [
          'Lower equilibrium price and lower equilibrium quantity.',
          'Higher equilibrium price and lower equilibrium quantity.',
          'Higher equilibrium price and higher equilibrium quantity.',
          'Lower equilibrium price and higher equilibrium quantity.',
        ],
        correctAnswer: 2,
        explanation:
          'An increase in demand shifts the demand curve rightward. With supply unchanged, the new equilibrium is at the intersection of the new (right-shifted) demand curve and the original supply curve — yielding a higher equilibrium price and a higher equilibrium quantity.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l3-q3',
        type: 'mcq',
        question:
          'A government caps the price of rental apartments at $800/month when the equilibrium rent is $1,200/month. What market outcome does this create?',
        options: [
          'A surplus of apartments, as the low price discourages renters.',
          'A shortage of apartments, as quantity demanded exceeds quantity supplied at $800.',
          'Market equilibrium at a lower rent beneficial to both landlords and tenants.',
          'An increase in the supply of apartments because construction is now more affordable.',
        ],
        correctAnswer: 1,
        explanation:
          'A price ceiling set below equilibrium keeps the price artificially low. At $800, more people want to rent apartments (high quantity demanded) but fewer landlords are willing to supply them (low quantity supplied) — creating a persistent shortage.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 4 — Shifts vs. Movements
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f2-l4',
    moduleId: 'f2-supply-demand',
    title: 'Shifts vs. Movements — The #1 Diagram Mistake',
    description:
      'Drill the critical distinction between a movement along a curve (price change) and a shift of the curve (non-price factor change).',
    order: 4,
    estimatedMinutes: 20,
    tags: ['shifts', 'movements', 'diagrams'],
    content: {
      realWorldHook:
        'Imagine reading two headlines on the same day: "Rising petrol prices cause drivers to buy less fuel" and "Electric vehicle boom cuts demand for petrol." Both stories describe less petrol being consumed — but the economic explanations are completely different. Confusing these two phenomena is the single most common mistake students make in economics exams, and it costs marks every time.',

      prerequisiteRecap: `The previous lesson on market equilibrium showed how supply and demand intersect to determine price and quantity, and introduced comparative statics — tracing what happens when one curve shifts. Precisely distinguishing between a shift of the curve and a movement along it is the analytical skill that makes comparative statics reliable rather than error-prone.`,

      recallQuestions: [
        {
          id: 'f2-l4-recall-1',
          type: 'mcq' as const,
          question: 'In a market currently at equilibrium, a heatwave dramatically increases demand for ice cream. Which comparative statics outcome is correct?',
          options: [
            'Equilibrium price rises and equilibrium quantity falls.',
            'Equilibrium price rises and equilibrium quantity rises.',
            'Equilibrium price is unchanged and equilibrium quantity rises.',
            'The supply curve shifts right, lowering the equilibrium price.',
          ],
          correctAnswer: 1,
          explanation: 'An increase in demand (rightward shift of the demand curve) with supply unchanged moves the equilibrium up along the supply curve — both price and quantity rise. This is a standard comparative statics result from the previous lesson.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f2-l4-recall-2',
          type: 'mcq' as const,
          question: 'A shortage occurs when, at the current price, quantity demanded exceeds quantity supplied. What market force eliminates the shortage?',
          options: [
            'Price falls, reducing quantity demanded until the market clears.',
            'Price rises, increasing quantity supplied and reducing quantity demanded until the market clears.',
            'Supply shifts right automatically to meet excess demand.',
            'The government intervenes to set the price at equilibrium.',
          ],
          correctAnswer: 1,
          explanation: 'Unsatisfied buyers bid up the price, while sellers realise they can charge more. As price rises toward equilibrium, quantity supplied increases (movement up the supply curve) and quantity demanded decreases (movement along the demand curve) until the shortage is eliminated.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `## The Critical Distinction

Every supply-and-demand diagram can tell two kinds of stories, and mixing them up is a serious analytical error:

**Movement along a curve** (change in quantity demanded or quantity supplied) — occurs when the *good's own price changes*. The curve stays fixed; only the point on the curve moves. An increase in price → move up-left along demand (less quantity demanded). A fall in price → move down-right along demand (more quantity demanded). The same logic applies to supply: price rises → move up-right along supply.

**Shift of the curve** (change in demand or change in supply) — occurs when a *non-price determinant* changes. The entire curve moves to a new position. A rightward shift means more is demanded/supplied at *every* price; a leftward shift means less is demanded/supplied at *every* price.

## Demand-Side Examples

| Event | Curve Affected | Type | Direction |
|---|---|---|---|
| Price of good X falls | Demand for X | Movement | Down-right along demand |
| Consumer income rises (normal good) | Demand | Shift | Right (increase) |
| Price of complement rises | Demand | Shift | Left (decrease) |
| Favourable advertising campaign | Demand | Shift | Right (increase) |

## Supply-Side Examples

| Event | Curve Affected | Type | Direction |
|---|---|---|---|
| Price of good X rises | Supply of X | Movement | Up-right along supply |
| New cost-saving technology | Supply | Shift | Right (increase) |
| Input costs rise | Supply | Shift | Left (decrease) |
| Government imposes new tax | Supply | Shift | Left (decrease) |

## Why This Matters in Diagrams

When drawing diagrams, never draw a new curve when a movement is the right answer — and never just move a point when a shift is required. Examiners are trained to spot this error immediately. A golden rule: *if the change is caused by the good's own price, it's a movement; if it's caused by anything else, it's a shift.*`,

      vocabulary: [
        {
          term: 'Change in Quantity Demanded',
          definition:
            'A movement along a fixed demand curve caused solely by a change in the good\'s own price; not a shift of the curve.',
          example:
            'When cinema ticket prices rise from $12 to $15, audiences buy fewer tickets — a movement up the demand curve for cinema tickets.',
        },
        {
          term: 'Change in Demand',
          definition:
            'A shift of the entire demand curve to the left or right caused by a change in a non-price determinant such as income, tastes, or prices of related goods.',
          example:
            'A viral health report linking red meat to disease shifts the demand curve for beef to the left at every price level.',
        },
        {
          term: 'Change in Quantity Supplied',
          definition:
            'A movement along a fixed supply curve caused solely by a change in the good\'s own price.',
          example:
            'A rise in the price of cocoa motivates farmers to harvest more, moving up the supply curve for cocoa.',
        },
        {
          term: 'Change in Supply',
          definition:
            'A shift of the entire supply curve caused by a change in a non-price determinant such as input costs, technology, or government policy.',
          example:
            'A subsidy for renewable energy shifts the supply curve of solar panels to the right, increasing supply at every price.',
        },
      ],

      deeperDive: `## A Foolproof Decision Framework

When you encounter any economic event, ask yourself two questions in order:

1. **Which market am I analysing?** (What is the good or service?)
2. **What changed?** (Is it the price of *this* good, or is it something else?)

If the answer to question 2 is "the price of this good," draw a movement along the existing curve. If the answer is anything else — income, tastes, related goods, input costs, technology, expectations, number of participants — draw a new curve shifted left or right.

## Simultaneous Changes

Real markets rarely experience only one change at a time. A tech breakthrough that lowers production costs (supply shifts right → price falls) also causes a movement along the demand curve (quantity demanded rises). Both happen at once, but they are triggered by different mechanisms. The shift came from the non-price factor; the movement came from the resulting price change. Seeing both in one diagram is correct and sophisticated — it's the full story.`,

      commonMisconceptions: [
        'A change in price NEVER shifts the curve — it always results in a movement along the curve. Only non-price determinants cause shifts.',
        'When supply increases (curve shifts right) and price consequently falls, the resulting increase in quantity demanded is a movement along the demand curve — the demand curve itself has NOT shifted.',
        'Saying "demand rose because the good became cheaper" is backwards logic — the price of the good is not a determinant of demand; it only determines quantity demanded along an existing demand curve.',
      ],

      examinerTip:
        'In exam essays and diagrams, use precise language: write "quantity demanded increased" (movement) or "demand increased" (shift) — never use them interchangeably. Examiners treat this as a mark-scheme distinction, and sloppy language is penalised even when your underlying understanding is correct.',

      didYouKnow:
        'The distinction between movements along curves and shifts of curves was rigorously formalised in Alfred Marshall\'s *Principles of Economics* (1890). Marshall drew his famous supply-and-demand "scissors" diagram and spent considerable effort explaining that only price changes move you along the blade — everything else moves the blade itself.',
    },
    flashcards: [
      {
        id: 'f2-l4-fc1',
        front: 'What causes a movement along the demand curve (change in quantity demanded)?',
        back: 'A change in the good\'s own price — and only that. When price rises, quantity demanded falls (move up-left); when price falls, quantity demanded rises (move down-right). The curve itself does not move.',
        tags: ['shifts', 'movements', 'demand'],
      },
      {
        id: 'f2-l4-fc2',
        front: 'What causes a shift of the demand curve (change in demand)?',
        back: 'Any non-price determinant: income, prices of related goods, tastes/preferences, expectations, or number of buyers. A shift means quantity demanded changes at EVERY price level.',
        tags: ['shifts', 'demand', 'shifters'],
      },
      {
        id: 'f2-l4-fc3',
        front: 'What causes a movement along the supply curve (change in quantity supplied)?',
        back: 'A change in the good\'s own price — and only that. When price rises, producers supply more (move up-right); when price falls, they supply less (move down-left).',
        tags: ['shifts', 'movements', 'supply'],
      },
      {
        id: 'f2-l4-fc4',
        front: 'What causes a shift of the supply curve (change in supply)?',
        back: 'Any non-price determinant: input costs, technology, number of sellers, government policy, prices of related goods in production, or expectations of future prices.',
        tags: ['shifts', 'supply', 'shifters'],
      },
      {
        id: 'f2-l4-fc5',
        front: 'A rise in income increases demand for new cars, causing car prices to rise. What happens to the quantity of cars supplied?',
        back: 'Quantity supplied increases — a movement along the supply curve (not a shift). The higher car price incentivises producers to supply more, moving up-right along the existing supply curve.',
        tags: ['shifts', 'movements', 'equilibrium'],
      },
    ],
    quiz: [
      {
        id: 'f2-l4-q1',
        type: 'mcq',
        question:
          'A cold snap destroys a significant portion of the orange crop, raising orange prices. Consumers buy fewer oranges as a result. Which best describes what happened in the orange market?',
        options: [
          'Demand for oranges decreased (demand curve shifted left).',
          'Quantity demanded of oranges decreased (movement along the demand curve).',
          'Supply of oranges increased (supply curve shifted right).',
          'Quantity supplied of oranges increased (movement along the supply curve).',
        ],
        correctAnswer: 1,
        explanation:
          'Consumers bought fewer oranges because the *price* of oranges rose — not because of any change in income, tastes, or related goods. A price change causes a movement along the demand curve: quantity demanded decreased. The demand curve itself did not shift.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l4-q2',
        type: 'mcq',
        question:
          'A popular documentary convinces millions of viewers to adopt plant-based diets. How should this be represented in the market for beef?',
        options: [
          'A movement down the demand curve for beef (lower quantity demanded).',
          'A leftward shift of the demand curve for beef (decrease in demand).',
          'A rightward shift of the supply curve for beef (increase in supply).',
          'A movement up the supply curve for beef (higher quantity supplied).',
        ],
        correctAnswer: 1,
        explanation:
          'The documentary changed consumer tastes and preferences — a non-price determinant of demand. At every price level, fewer consumers want to buy beef. This shifts the entire demand curve to the left: a decrease in demand, not just a change in quantity demanded.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l4-q3',
        type: 'mcq',
        question:
          'Which of the following would cause a movement along the supply curve for smartphones rather than a shift of the supply curve?',
        options: [
          'The price of rare-earth metals (used in smartphones) rises sharply.',
          'The government imposes a new tax on smartphone manufacturers.',
          'The market price of smartphones rises due to increased consumer demand.',
          'A new assembly-line robot halves the cost of producing each phone.',
        ],
        correctAnswer: 2,
        explanation:
          'Only a change in the good\'s own price creates a movement along the supply curve. The other options — input cost changes (A), government taxes (B), and new technology (D) — are all non-price determinants of supply that shift the supply curve itself.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 5 — Markets in Action
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f2-l5',
    moduleId: 'f2-supply-demand',
    title: 'Markets in Action — Case Studies',
    description:
      'Apply supply-and-demand analysis to real markets: coffee prices, housing, labour, and crude oil.',
    order: 5,
    estimatedMinutes: 35,
    tags: ['case-studies', 'applications'],
    content: {
      realWorldHook:
        'In 2022, a combination of droughts in Brazil, supply chain disruptions, and surging post-pandemic café culture sent global coffee prices to their highest level in a decade. Housing markets in major cities are perpetually short of supply. Oil prices collapsed in 2020 and then tripled by 2022. These are not random events — they are supply-and-demand forces playing out in real time, and understanding them gives you a powerful lens for reading the news.',

      prerequisiteRecap: `The previous lesson drilled the crucial distinction between a movement along a curve (caused only by a change in the good's own price) and a shift of the entire curve (caused by a non-price determinant). Applying supply-and-demand analysis to real markets requires confidently identifying whether each event triggers a movement or a shift — and in which direction.`,

      recallQuestions: [
        {
          id: 'f2-l5-recall-1',
          type: 'mcq' as const,
          question: 'A film documentary praises the health benefits of oat milk, causing consumers to buy more of it at every price. How should this be represented on the oat-milk market diagram?',
          options: [
            'A movement down the demand curve because oat milk is now seen as more affordable.',
            'A leftward shift of the supply curve because producers anticipate higher demand.',
            'A rightward shift of the demand curve because consumer tastes have changed.',
            'A movement up the supply curve because the price of oat milk rises.',
          ],
          correctAnswer: 2,
          explanation: 'A change in consumer tastes is a non-price determinant of demand. Because buyers now want more oat milk at every price level, the entire demand curve shifts to the right — this is a change in demand, not a change in quantity demanded.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `## Case Study 1 — Coffee: A Demand and Supply Story

**Background:** Brazil and Vietnam produce over 60% of the world's coffee. In 2021, severe frosts hit Brazilian coffee plantations, destroying a large share of the harvest.

**Supply-and-Demand Analysis:**
- *Supply shock*: Frost reduces supply → supply curve shifts left → at the original price, a shortage develops → price rises.
- *Demand side*: Post-pandemic café reopenings simultaneously boosted demand → demand curve shifts right → further upward pressure on price.
- *New equilibrium*: Higher price, and quantity ambiguous (because supply fell while demand rose, quantity effects partially offset each other — the outcome depends on the magnitudes).

**Lesson:** Commodity markets are highly sensitive to weather and geopolitics on the supply side and to economic cycles on the demand side. Both curves can shift simultaneously, and price is the primary signal of scarcity.

## Case Study 2 — Housing: Persistent Shortage

**Background:** In cities like London, Sydney, and San Francisco, housing demand has risen with population growth, rising incomes, and urbanisation, but supply has failed to keep pace.

**Supply-and-Demand Analysis:**
- *Demand side*: Population growth, income growth, and urban migration shift demand right.
- *Supply side*: Zoning regulations, planning restrictions, construction costs, and geographical constraints (water on three sides) limit supply — the supply curve is steep and slow to shift right.
- *Outcome*: Persistent rightward shift in demand with relatively inelastic, slow-adjusting supply → continuously rising equilibrium prices.

**Lesson:** When supply is inelastic and constrained by regulation, demand-driven price increases are large and persistent rather than self-correcting quickly.

## Case Study 3 — Labour Market: Minimum Wage

**Background:** Governments set minimum wages above market equilibrium wages in certain sectors, intending to raise workers' incomes.

**Supply-and-Demand Analysis:**
- *Labour demand* slopes downward: at higher wages, firms hire fewer workers (substitute capital for labour, or reduce output).
- *Labour supply* slopes upward: at higher wages, more people are willing to work.
- *Minimum wage above equilibrium*: Quantity of labour supplied exceeds quantity demanded → surplus of labour = **unemployment**.
- *Counter-argument*: In monopsonistic labour markets (one dominant employer), a minimum wage can actually *increase* employment — a nuanced result beyond the basics.

**Lesson:** Price floors (like minimum wages) set above equilibrium create surpluses — in the labour market, that surplus is unemployment.

## Case Study 4 — Crude Oil: OPEC and Supply Management

**Background:** OPEC (the Organisation of the Petroleum Exporting Countries) is a cartel of oil-producing nations that coordinates production levels to influence global oil prices.

**Supply-and-Demand Analysis:**
- OPEC restricts member production → supply of oil shifts left → at the original price, a shortage → price rises.
- In 2020, COVID-19 collapsed global demand (demand shifted left sharply) → oil price crashed, briefly going negative for futures contracts.
- By 2022, demand recovered rapidly while OPEC maintained output restrictions → supply relatively inelastic → prices tripled.

**Lesson:** Supply restrictions by cartels keep prices above competitive equilibrium. Demand shocks can overwhelm even coordinated supply management, demonstrating the power of demand shifts in commodity markets.`,

      vocabulary: [
        {
          term: 'Supply Shock',
          definition:
            'An unexpected event that significantly shifts the supply curve — either reducing supply (negative shock) or increasing supply (positive shock) — causing rapid price adjustment.',
          example:
            'A hurricane destroying Gulf Coast oil refineries is a negative supply shock that shifts oil supply left, raising petrol prices.',
        },
        {
          term: 'Price Floor',
          definition:
            'A government-set minimum price above the equilibrium price, intended to support producers or workers. It creates a surplus because quantity supplied exceeds quantity demanded.',
          example:
            'A minimum wage of $15/hour set above the equilibrium wage of $12/hour is a price floor in the labour market, potentially creating unemployment.',
        },
        {
          term: 'Cartel',
          definition:
            'A group of producers that coordinates output and pricing decisions to act collectively like a monopolist, restricting supply to raise prices above competitive equilibrium.',
          example:
            'OPEC coordinates the oil output of member nations to keep global oil prices higher than they would be in a fully competitive market.',
        },
        {
          term: 'Inelastic Supply',
          definition:
            'A supply condition where quantity supplied responds little to price changes, often because production capacity is fixed in the short run or constrained by regulation.',
          example:
            'The supply of beachfront property is highly inelastic because no more beachfront can be created — a rise in price attracts very few additional units.',
        },
      ],

      deeperDive: `## Reading the News with Supply and Demand

Once you have mastered the framework, every economic news story becomes a supply-and-demand puzzle. The workflow is always:

1. **Identify the market** — what good or service is being traded?
2. **Identify the shock** — what changed? (A new regulation? A weather event? A technology? A pandemic?)
3. **Determine which curve moves** — is this a supply shock or a demand shock (or both)?
4. **Determine the direction** — left (decrease) or right (increase)?
5. **Trace the equilibrium outcome** — what happens to P* and Q*?
6. **Consider second-round effects** — how do changes in this market affect related markets?

Step 6 is where economics gets rich. A rise in oil prices (supply shock in oil) raises input costs for airlines (supply of flights shifts left → airfares rise → quantity of flights demanded falls). That, in turn, affects tourism (demand for hotels falls in some destinations) and so on through the economy.

## Limitations of the Model

Supply and demand is a powerful simplification, but it assumes competitive markets with many buyers and sellers, homogeneous products, and perfect information. Real markets often violate these assumptions: monopolists set prices rather than taking them; information asymmetries cause market failures; network effects mean demand curves can slope upward. Later modules address these complications — but supply and demand remains the essential starting framework.`,

      commonMisconceptions: [
        'OPEC restricting oil production does not shift the demand curve — it shifts the supply curve to the left. The resulting price rise then causes a movement *along* the demand curve (lower quantity demanded).',
        'A minimum wage creating unemployment is a model prediction under competitive labour market assumptions. In reality, labour markets have frictions and power imbalances that can make the outcome more nuanced.',
        '"Shortage" is not the same as "low supply" — you can have low supply with no shortage if demand is equally low. A shortage specifically means quantity demanded exceeds quantity supplied at the current price.',
      ],

      examinerTip:
        'In case-study or data-response questions, always anchor your analysis to a labelled diagram. State which curve shifts, in which direction, and why — then read off the new equilibrium. Examiners want to see the logical chain: cause → curve shift → new equilibrium → effect on price and quantity.',

      didYouKnow:
        'In April 2020, the price of West Texas Intermediate crude oil futures briefly fell to -$37 per barrel — producers were paying buyers to take oil off their hands. This extraordinary event occurred because storage facilities were full during COVID lockdowns, and futures contracts required physical delivery. It is arguably the most dramatic real-world illustration of excess supply (a surplus) ever recorded.',
    },
    flashcards: [
      {
        id: 'f2-l5-fc1',
        front: 'What is a supply shock, and give one example?',
        back: 'A supply shock is an unexpected event that sharply shifts the supply curve. Example: a drought destroying coffee crops is a negative supply shock that shifts coffee supply left, raising equilibrium coffee prices.',
        tags: ['case-studies', 'supply-shock'],
      },
      {
        id: 'f2-l5-fc2',
        front: 'Why do housing prices in major cities rise persistently even without sudden demand spikes?',
        back: 'Supply of housing is highly inelastic — constrained by zoning, planning regulations, and geography. Even modest rightward shifts in demand (from population or income growth) produce large, sustained price increases because supply cannot expand quickly.',
        tags: ['case-studies', 'housing', 'inelastic-supply'],
      },
      {
        id: 'f2-l5-fc3',
        front: 'What market outcome does a minimum wage set above equilibrium create, and why?',
        back: 'A surplus of labour — unemployment. At the above-equilibrium wage, quantity of labour supplied exceeds quantity demanded (firms hire fewer workers). This is a price floor creating excess supply.',
        tags: ['case-studies', 'labour', 'price-floor'],
      },
      {
        id: 'f2-l5-fc4',
        front: 'How does OPEC use supply restriction to raise oil prices?',
        back: 'OPEC coordinates member nations to limit production, shifting the global oil supply curve to the left. At the original price a shortage develops, pushing equilibrium price upward. Members earn more revenue per barrel despite selling fewer barrels.',
        tags: ['case-studies', 'oil', 'cartel'],
      },
      {
        id: 'f2-l5-fc5',
        front: 'When both supply and demand shift simultaneously, which equilibrium outcome is always ambiguous?',
        back: 'Price is ambiguous when supply and demand shift in the same direction (both increase or both decrease); quantity is ambiguous when they shift in opposite directions. The indeterminate variable depends on the relative magnitudes of the two shifts.',
        tags: ['case-studies', 'double-shift', 'equilibrium'],
      },
    ],
    quiz: [
      {
        id: 'f2-l5-q1',
        type: 'mcq',
        question:
          'A severe drought in a major coffee-growing region simultaneously cuts coffee supply, while a global trend toward café culture increases coffee demand. What is the certain outcome for the coffee market?',
        options: [
          'Equilibrium price rises; equilibrium quantity change is indeterminate.',
          'Equilibrium quantity rises; equilibrium price change is indeterminate.',
          'Both equilibrium price and quantity rise with certainty.',
          'Equilibrium price falls and equilibrium quantity rises.',
        ],
        correctAnswer: 0,
        explanation:
          'When supply decreases (shifts left) and demand increases (shifts right), both forces push the equilibrium price upward — so the price rise is certain. However, the supply decrease reduces quantity while the demand increase raises it; the net effect on equilibrium quantity depends on the relative magnitude of the shifts, making quantity indeterminate.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l5-q2',
        type: 'mcq',
        question:
          'OPEC agrees to cut oil production by 10%. In the short run, which diagram correctly represents the effect on the global oil market?',
        options: [
          'The demand curve for oil shifts to the left, lowering the equilibrium price.',
          'The supply curve of oil shifts to the left, raising the equilibrium price.',
          'The supply curve of oil shifts to the right, lowering the equilibrium price.',
          'Both curves shift left; price and quantity both fall.',
        ],
        correctAnswer: 1,
        explanation:
          'OPEC\'s production cut directly reduces the quantity of oil offered at every price — the supply curve shifts to the left. With demand unchanged, this creates a shortage at the original price, pushing equilibrium price upward and equilibrium quantity downward.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f2-l5-q3',
        type: 'mcq',
        question:
          'A city introduces strict zoning laws that severely limit new residential construction. Assuming population continues to grow, what is the most likely long-run outcome?',
        options: [
          'Housing prices fall as developers find ways around the regulations.',
          'Housing prices rise persistently because supply cannot expand to meet growing demand.',
          'Demand for housing falls to match constrained supply, stabilising prices.',
          'The housing market reaches a new equilibrium at lower prices and lower quantity.',
        ],
        correctAnswer: 1,
        explanation:
          'Strict zoning makes supply highly inelastic — the supply curve is steep and cannot shift rightward. As population grows, demand shifts right repeatedly. Without supply expansion to absorb the increases, each demand shift results in higher equilibrium prices, creating a persistent upward trend in housing costs.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },
]
