import type { CurriculumModule, Lesson } from '@/lib/types'

// ── IB UNIT 2A — Demand and Supply ────────────────────────────────────────────

const ib2Lessons: Lesson[] = [
  {
    id: 'ib2-l1', moduleId: 'ib2-micro-a', title: 'Demand — IB Diagram Standards', description: 'Draw demand curves to IB standards (labelled axes, ceteris paribus, D₁/D₂ notation); identify six demand shifters.', order: 1, estimatedMinutes: 30, tags: ['IB', 'demand', 'diagrams'],
    flashcards: [
      { id: 'fc-ib2-l1-1', front: 'Name the six main shifters of the demand curve.', back: '1. Income (normal vs. inferior goods). 2. Prices of related goods (substitutes and complements). 3. Tastes and preferences. 4. Population size and composition. 5. Future price expectations. 6. Credit availability / interest rates.', hint: 'Remember: IPRPE+C — Income, Prices of related goods, Population, Preferences, Expectations, Credit.', tags: ['IB', 'demand'] },
      { id: 'fc-ib2-l1-2', front: 'What is the difference between a change in quantity demanded and a change in demand?', back: 'A change in quantity demanded is a movement along the demand curve caused by a change in the good\'s own price. A change in demand is a shift of the entire curve caused by any non-price factor (a demand shifter).', hint: 'Movement along = price change; curve shift = non-price factor.', tags: ['IB', 'demand'] },
      { id: 'fc-ib2-l1-3', front: 'How must axes be labelled on an IB demand diagram?', back: 'The vertical axis must be labelled "Price (P)" with a currency symbol or unit if specified. The horizontal axis must be labelled "Quantity (Q)" with a unit if given. The curve must be labelled "D", "D₁", or "D₂" — not just a line.', hint: 'Unlabelled axes and curves lose marks on IB diagram questions.', tags: ['IB', 'diagrams'] },
    ],
    quiz: [
      { id: 'q-ib2-l1-1', type: 'mcq', question: 'A rise in consumer incomes causes demand for a normal good to:', options: ['Shift right, increasing quantity demanded at every price.', 'Move up the existing curve as price rises.', 'Shift left, reducing quantity demanded at every price.', 'Remain unchanged because income is not a price variable.'], correctAnswer: 0, explanation: 'Income is a non-price demand shifter. Rising income for a normal good shifts the entire demand curve to the right — consumers wish to buy more at every price level. This is a change in demand, not a change in quantity demanded, so the curve shifts rather than a movement along it occurring.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib2-l1-2', type: 'mcq', question: 'Tea and coffee are substitutes. If the price of coffee rises, the effect on the market for tea is:', options: ['Demand for tea shifts right as consumers switch from the now-more-expensive coffee.', 'Demand for tea shifts left as coffee becomes relatively more attractive.', 'The supply of tea rises to meet extra demand from coffee drinkers.', 'The quantity demanded of tea falls along the existing demand curve.'], correctAnswer: 0, explanation: 'When the price of a substitute (coffee) rises, the good becomes relatively more expensive. Consumers substitute toward tea, increasing demand for tea at every price — a rightward shift of the tea demand curve. The price of coffee is a non-price factor for the tea market, so this is a demand shift, not a movement.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The demand curve plots the inverse relationship between a good's own price and the quantity consumers are willing and able to purchase per period, holding all other factors constant (ceteris paribus). Its downward slope reflects two underlying mechanisms. The substitution effect means that as a good's price rises, it becomes relatively more expensive compared to alternatives, so consumers substitute away from it. The income effect means that a price rise reduces consumers' real purchasing power, causing them to buy less of the good (for normal goods). Together, these effects ensure that quantity demanded falls as price rises — a relationship so consistent across markets that economists call it the law of demand. At the IB level, every diagram must show clearly labelled axes (Price on the vertical, Quantity on the horizontal), a downward-sloping curve labelled D or D₁, and — if a shift is being illustrated — a second curve labelled D₂ with an arrow showing the direction of change.\n\nDistinguishing movements along the demand curve from shifts of the curve is critical for IB Paper 1 essays and Paper 2 data-response questions. A change in the good's own price causes a movement along the existing curve — quantity demanded rises or falls but demand itself is unchanged. Any non-price factor that changes consumers' willingness to buy — income, the price of related goods, tastes, population, expectations about future prices, or credit conditions — shifts the entire curve. IB examiners penalise candidates who describe a price change as shifting the curve, or who draw a shift when they should show a movement. Practise narrating every diagram: name the cause, identify whether it is a price or non-price factor, show the correct graphical response, and explain the new equilibrium outcome.`,
      prerequisiteRecap: `In ib1 we saw that the price mechanism answers the three fundamental economic questions in a free market — what, how, and for whom to produce — by coordinating the self-interested decisions of buyers and sellers. The demand curve is the buyer's side of that mechanism, translating consumer willingness to pay into a schedule of quantities demanded at each price.`,
      recallQuestions: [
        {
          id: 'ib2-l1-recall-1',
          type: 'mcq' as const,
          question: 'In a free market economy, the price mechanism allocates resources by signalling relative scarcity. Which of the following best illustrates the incentive function of rising prices?',
          options: [
            'Higher prices ration the good among consumers willing and able to pay, reducing the quantity demanded.',
            'Higher prices transmit information about scarcity to all market participants simultaneously.',
            'Higher prices attract new producers into the market, expanding supply toward the point of greater scarcity.',
            'Higher prices cause the government to intervene and impose a price ceiling.',
          ],
          correctAnswer: 2,
          explanation: 'The incentive function means rising prices create profit opportunities that motivate producers to increase supply. This is distinct from the rationing function (option A, which describes how prices allocate goods among consumers) and the signalling function (option B). Option D describes government intervention, which overrides the price mechanism rather than illustrating it.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib2-l2', moduleId: 'ib2-micro-a', title: 'Supply — IB Diagram Standards', description: 'Draw supply curves correctly; identify six supply shifters with real-world examples.', order: 2, estimatedMinutes: 30, tags: ['IB', 'supply', 'diagrams'],
    flashcards: [
      { id: 'fc-ib2-l2-1', front: 'Name the six main shifters of the supply curve.', back: '1. Costs of production (wages, raw materials, energy). 2. Technology and productivity. 3. Number of sellers in the market. 4. Government taxes and subsidies. 5. Prices of related goods in production (joint and competitive supply). 6. Future price expectations of producers.', hint: 'Remember: CTNGTE — Costs, Technology, Number of firms, Government policy, Technology improvements, Expectations.', tags: ['IB', 'supply'] },
      { id: 'fc-ib2-l2-2', front: 'Why does the supply curve slope upward?', back: 'Higher prices make production more profitable, incentivising existing firms to expand output and attracting new firms into the market. Additionally, increasing marginal costs mean firms require a higher price to justify producing additional units.', hint: 'Higher price → more profitable → more supplied.', tags: ['IB', 'supply'] },
      { id: 'fc-ib2-l2-3', front: 'How does a per-unit tax affect the supply curve?', back: 'A per-unit tax raises the cost of production for the firm. This shifts the supply curve to the left (a decrease in supply) by the amount of the tax, since producers require a higher price than before to supply any given quantity.', hint: 'Tax = cost increase = leftward supply shift = S → S₁.', tags: ['IB', 'supply', 'diagrams'] },
    ],
    quiz: [
      { id: 'q-ib2-l2-1', type: 'mcq', question: 'A technological improvement in wheat farming reduces the cost of production. On a supply diagram, this is shown as:', options: ['A rightward shift of the supply curve, indicating greater supply at every price.', 'A movement down the existing supply curve as price falls.', 'A leftward shift of the supply curve, indicating less supply at every price.', 'A pivot of the supply curve around the vertical intercept.'], correctAnswer: 0, explanation: 'Technology that reduces costs is a non-price supply shifter. It shifts the entire supply curve to the right (an increase in supply) — producers are now willing and able to supply more at every price level. This is a change in supply, not a change in quantity supplied, so the curve shifts.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib2-l2-2', type: 'mcq', question: 'Beef and leather are goods in joint supply. If the demand for beef rises and its price increases, the likely effect on the leather market is:', options: ['Supply of leather increases as more cattle are slaughtered, lowering the price of leather.', 'Demand for leather falls because beef is more expensive.', 'Supply of leather falls because farmers divert resources away from leather.', 'The price of leather rises in line with the price of beef.'], correctAnswer: 0, explanation: 'Joint supply means that producing one good automatically generates the other. Higher beef prices incentivise more cattle farming, increasing the by-product supply of leather. The leather supply curve shifts right, reducing the price of leather — a key real-world application of supply theory in IB contexts.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The supply curve shows the positive relationship between a good's own price and the quantity producers are willing and able to offer for sale per period, ceteris paribus. Its upward slope reflects two reinforcing forces. First, higher prices make production more profitable, attracting new firms and encouraging existing ones to expand. Second, firms face increasing marginal costs as they scale up — producing additional units requires bidding resources away from other uses at rising cost — so a higher price is needed to make each successive unit worth producing. At the IB level, a correctly drawn supply curve must have clearly labelled axes, an upward-sloping line labelled S or S₁, and — when a shift is required — a second curve S₂ with an arrow indicating whether supply has increased (rightward) or decreased (leftward).\n\nSupply shifters move the entire curve and must be distinguished carefully from movements along it. A change in the good's own price causes a movement along the curve (a change in quantity supplied). Non-price factors — input costs, technology, the number of producers, government taxes or subsidies, prices of related goods in production, and producer expectations — shift the curve. A wage increase raises costs and shifts supply left; a productivity-enhancing technology shifts it right. IB examiners also test joint supply (beef and leather, oil and petrol) and competitive supply (a farmer choosing between wheat and barley), where production decisions in one market spill over into another. Real-world examples strengthen Paper 1 evaluation paragraphs — always link the theoretical shift to a plausible, named real-world context when the question permits it.`,
      prerequisiteRecap: `The previous lesson established that the demand curve is downward-sloping because of the substitution and income effects, and that non-price factors shift the curve. Supply is the seller's counterpart: the upward-sloping supply curve reflects rising marginal costs and the profit motive that draws more output into a market as price increases.`,
      recallQuestions: [
        {
          id: 'ib2-l2-recall-1',
          type: 'mcq' as const,
          question: 'A rise in the wage rate paid to coffee baristas shifts the supply curve of coffee to the left. This is because:',
          options: [
            'Higher wages reduce consumer demand for coffee, causing the demand curve to fall.',
            'Higher wages are a non-price supply shifter that increases the marginal cost of production, reducing the quantity producers are willing to supply at every price.',
            'Higher wages cause a movement down the existing supply curve as producers reduce output.',
            'Higher wages attract more workers into the industry, increasing supply.',
          ],
          correctAnswer: 1,
          explanation: 'Wages are an input cost — a non-price supply shifter. When wages rise, the cost of producing each unit increases, so producers are willing to supply less at every given price. This shifts the entire supply curve leftward. A movement along the curve occurs only when the good\'s own price changes.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib2-l3', moduleId: 'ib2-micro-a', title: 'Competitive Market Equilibrium and Price Mechanism', description: 'Show how markets self-correct; explain signalling, incentive, and rationing functions of prices.', order: 3, estimatedMinutes: 30, tags: ['IB', 'equilibrium', 'price-mechanism'],
    flashcards: [
      { id: 'fc-ib2-l3-1', front: 'What are the three functions of the price mechanism in a free market?', back: '1. Signalling: prices transmit information about relative scarcity and consumer preferences to producers. 2. Incentive: profit from high prices incentivises firms to increase supply; rising costs signal firms to reduce use of scarce resources. 3. Rationing: prices ration goods among consumers, allocating them to those most willing and able to pay.', hint: 'Signal — Incentive — Ration (SIR).', tags: ['IB', 'price-mechanism'] },
      { id: 'fc-ib2-l3-2', front: 'Define market equilibrium.', back: 'Market equilibrium is the price at which quantity demanded equals quantity supplied. There is no tendency for price to change because the market clears — every consumer willing to pay the equilibrium price can find a seller, and every producer willing to supply at that price can find a buyer.', hint: 'Qd = Qs at P* — the market clears.', tags: ['IB', 'equilibrium'] },
      { id: 'fc-ib2-l3-3', front: 'How does a market self-correct when there is a surplus?', back: 'A surplus (excess supply) means Qs > Qd at the current price. Unsold inventories accumulate, so suppliers cut prices to clear stock. As price falls, quantity demanded rises and quantity supplied falls until Qd = Qs is restored at the new equilibrium.', hint: 'Surplus → price falls → Qd rises and Qs falls → equilibrium restored.', tags: ['IB', 'equilibrium'] },
    ],
    quiz: [
      { id: 'q-ib2-l3-1', type: 'mcq', question: 'When demand for a good rises, the price mechanism restores equilibrium by:', options: ['The higher price signalling producers to increase supply, and rationing the good among consumers, until a new, higher equilibrium price and quantity is established.', 'The government directing more resources into the industry to meet demand.', 'Consumers reducing their demand back to the original level as prices stabilise.', 'Producers automatically reducing costs to keep the price constant.'], correctAnswer: 0, explanation: 'A demand increase creates a shortage at the original price. Price rises, performing two functions simultaneously: it signals and incentivises producers to expand supply, and it rations the good among those willing to pay more. The market self-corrects to a new equilibrium with a higher price and higher quantity — no central coordination required.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib2-l3-2', type: 'mcq', question: 'A market is in equilibrium at P* = $10. A government report reveals the good is a health risk, reducing consumer demand. The immediate effect before price adjusts is:', options: ['A surplus, because quantity supplied exceeds the now-lower quantity demanded at $10.', 'A shortage, because producers rush to exit the market.', 'No change, because supply has not shifted.', 'A new equilibrium immediately established at a lower price.'], correctAnswer: 0, explanation: 'The demand shift immediately creates a surplus at the original price of $10 — producers are supplying Q* units but consumers now want fewer. Price has not yet adjusted. The surplus then triggers the self-correcting mechanism: price falls until the market clears at the new, lower equilibrium.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Market equilibrium is the price at which the quantity consumers wish to buy exactly equals the quantity producers wish to sell. It is not a static state but a gravitational point toward which the market continually tends. If price is above equilibrium, a surplus emerges — unsold goods pile up, producers discount prices to clear inventory, and price falls until the surplus disappears. If price is below equilibrium, a shortage develops — consumers cannot find the good, they bid up prices, producers expand output, and price rises until the shortage clears. This self-correcting mechanism operates automatically through the incentives built into the price system, without requiring any central authority to observe or direct the process. IB candidates must be able to narrate this adjustment story fluently, linking each step to the diagram.\n\nThe price mechanism performs three analytically distinct functions that IB examiners test explicitly. Signalling: prices transmit compressed information about scarcity and value — a rising price tells producers that consumers want more of a good and that resources are relatively scarce. Incentive: high prices create profit opportunities that incentivise firms to enter markets and increase production, while rising input costs incentivise firms to use resources more sparingly. Rationing: because markets do not produce enough to satisfy all wants at zero price, the price mechanism rations goods to those most willing (and able) to pay, clearing the market. Together these functions coordinate the decisions of millions of self-interested actors into a coherent allocation of resources — the core insight behind arguments for market economies. IB evaluation questions on this topic require candidates to acknowledge both the efficiency gains and the equity concerns (rationing by ability to pay excludes the poor) of the price mechanism.`,
      prerequisiteRecap: `Supply analysis showed that six non-price factors shift the supply curve, while price changes cause movements along it. Bringing demand and supply together, the equilibrium price is where the plans of buyers and sellers coincide — it is the price mechanism in action, resolving the competing interests of all market participants.`,
      recallQuestions: [
        {
          id: 'ib2-l3-recall-1',
          type: 'mcq' as const,
          question: 'A government report reveals that a pesticide widely used on farms is harmful to bees, causing several countries to ban it. This most likely causes:',
          options: [
            'A leftward shift of the supply curve for crops using that pesticide, raising equilibrium price and reducing quantity.',
            'A rightward shift of the demand curve for crops as consumers switch to safer alternatives.',
            'A movement up the supply curve as the cost of production rises.',
            'No change in equilibrium because the pesticide ban affects supply and demand equally.',
          ],
          correctAnswer: 0,
          explanation: 'A ban on a key input (the pesticide) raises production costs or forces use of less effective alternatives — a non-price supply shifter that shifts the supply curve leftward. At the original equilibrium price a shortage emerges; price rises and quantity traded falls until a new equilibrium is reached. This is a supply shift, not a movement along the existing curve, because the good\'s own price has not changed.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib2-l4', moduleId: 'ib2-micro-a', title: 'Elasticities — PED, PES, YED, XED', description: 'Define, calculate, interpret, and apply all four elasticity concepts; connect PED to total revenue.', order: 4, estimatedMinutes: 45, tags: ['IB', 'elasticity', 'PED', 'YED', 'XED'],
    flashcards: [
      { id: 'fc-ib2-l4-1', front: 'State the formula for Price Elasticity of Demand (PED) and interpret a value of −2.5.', back: 'PED = % change in Qd ÷ % change in P. A value of −2.5 means demand is price elastic: a 1% price rise causes a 2.5% fall in quantity demanded. Elastic demand (|PED| > 1) means total revenue falls when price rises.', hint: 'Elastic: |PED| > 1; inelastic: |PED| < 1; unit elastic: |PED| = 1.', tags: ['IB', 'PED'] },
      { id: 'fc-ib2-l4-2', front: 'How does PED relate to total revenue?', back: 'If demand is price inelastic (|PED| < 1), a price rise increases total revenue because the proportional fall in quantity is smaller than the proportional rise in price. If demand is elastic (|PED| > 1), a price rise reduces total revenue. At unit elasticity, TR is maximised.', hint: 'Inelastic → price and TR move together; Elastic → they move in opposite directions.', tags: ['IB', 'PED'] },
      { id: 'fc-ib2-l4-3', front: 'Distinguish YED and XED and state what their signs indicate.', back: 'YED (Income Elasticity of Demand) = % ΔQd ÷ % ΔIncome. Positive YED = normal good; negative YED = inferior good; YED > 1 = luxury good. XED (Cross Elasticity of Demand) = % ΔQd of A ÷ % ΔP of B. Positive XED = substitutes; negative XED = complements.', hint: 'YED sign → normal vs. inferior; XED sign → substitutes vs. complements.', tags: ['IB', 'YED', 'XED'] },
    ],
    quiz: [
      { id: 'q-ib2-l4-1', type: 'mcq', question: 'A firm\'s product has a PED of −0.4. If the firm raises its price by 10%, total revenue will:', options: ['Fall, because quantity demanded will drop by more than 10%.', 'Rise, because the percentage fall in quantity demanded (4%) is smaller than the percentage rise in price (10%).', 'Remain unchanged because the good is a necessity.', 'Fall, because consumers will switch to substitutes.'], correctAnswer: 1, explanation: 'With |PED| = 0.4, demand is price inelastic. A 10% price rise reduces quantity demanded by only 4% (0.4 × 10%). Since price rises proportionally more than quantity falls, total revenue (P × Q) increases. Inelastic goods allow firms to raise revenue by increasing price.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib2-l4-2', type: 'mcq', question: 'The XED between good A and good B is calculated as +3.2. This indicates that goods A and B are:', options: ['Close substitutes, so a price rise in B causes a large increase in demand for A.', 'Strong complements, so a price rise in B reduces demand for A.', 'Inferior goods that are consumed together.', 'Unrelated goods with independent demand curves.'], correctAnswer: 0, explanation: 'A positive XED indicates substitutes: when the price of B rises, consumers switch to A, increasing demand for A. The magnitude (+3.2) indicates the goods are close substitutes — a 1% rise in the price of B leads to a 3.2% rise in demand for A. Complements would have a negative XED.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Elasticity measures the responsiveness of one variable to a change in another, expressed as a ratio of percentage changes. Price Elasticity of Demand (PED) captures how sensitively consumers respond to price changes: PED = (%ΔQd) / (%ΔP). Because demand curves slope downward, PED is always negative, but IB convention often refers to its absolute value. Demand is elastic when |PED| > 1 (quantity responds proportionally more than price), inelastic when |PED| < 1, and unit elastic when |PED| = 1. Determinants of PED include the number and closeness of substitutes (more substitutes → more elastic), whether the good is a necessity or luxury, its share of consumers' income, and the time period considered (demand is more elastic in the long run as consumers adjust habits). Understanding PED is directly applicable to revenue management: a price rise raises total revenue only if demand is inelastic.\n\nThe IB syllabus extends elasticity analysis to three additional concepts. Price Elasticity of Supply (PES) measures how quickly producers can respond to price changes; it depends on spare capacity, stock levels, factor mobility, and the production time horizon. Income Elasticity of Demand (YED) distinguishes normal goods (positive YED) from inferior goods (negative YED) and luxuries (YED > 1) from necessities (0 < YED < 1) — critical for understanding how recessions and booms affect different industries. Cross Elasticity of Demand (XED) quantifies the relationship between goods: a positive XED identifies substitutes while a negative XED identifies complements. Together, these four elasticity measures form a toolkit that IB candidates apply to government policy analysis (who bears the burden of a tax?), business strategy (should the firm raise or lower price?), and macroeconomic forecasting (how will income growth shift demand across sectors?).`,
      prerequisiteRecap: `The previous lesson showed that the price mechanism restores equilibrium through the signalling, incentive, and rationing functions of prices. Elasticity now adds quantitative precision: it measures how strongly buyers and sellers respond to price changes, determining both how much adjustment is needed and how swiftly markets clear.`,
      recallQuestions: [
        {
          id: 'ib2-l4-recall-1',
          type: 'mcq' as const,
          question: 'In a free market, the price of crude oil rises sharply due to a supply disruption. According to the rationing function of the price mechanism, the most direct effect is:',
          options: [
            'The higher price reduces the quantity of oil demanded, allocating the scarce supply to those most willing and able to pay.',
            'The government uses the price signal to redistribute oil from surplus regions to deficit regions.',
            'The higher price signals firms to reduce their oil consumption permanently.',
            'The price rise immediately restores equilibrium by attracting new oil suppliers into the market.',
          ],
          correctAnswer: 0,
          explanation: 'The rationing function means that a higher price chokes off demand, allocating the available (now scarcer) supply to buyers willing to pay the most. This is the immediate short-run effect. The incentive function (attracting new suppliers) and signalling function (informing producers) also operate, but they describe longer-run supply responses, not the immediate rationing mechanism.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib2-l5', moduleId: 'ib2-micro-a', title: 'Role of the Price System — Efficiency and Welfare', description: 'Define consumer and producer surplus; show the efficiency of competitive equilibrium; introduce deadweight loss.', order: 5, estimatedMinutes: 30, tags: ['IB', 'consumer-surplus', 'producer-surplus', 'DWL'],
    flashcards: [
      { id: 'fc-ib2-l5-1', front: 'Define consumer surplus and show it on a diagram.', back: 'Consumer surplus is the difference between the maximum price consumers are willing to pay and the price they actually pay. On a supply-and-demand diagram, it is the area below the demand curve and above the equilibrium price, to the left of the equilibrium quantity.', hint: 'CS = area of triangle above price and below demand curve.', tags: ['IB', 'consumer-surplus'] },
      { id: 'fc-ib2-l5-2', front: 'What is deadweight loss (DWL) and when does it arise?', back: 'Deadweight loss is the loss of total welfare (consumer plus producer surplus) that occurs when a market does not produce at the competitive equilibrium quantity. It arises from any market failure or government intervention that causes output to diverge from the allocatively efficient level.', hint: 'DWL = triangle of lost surplus when Q ≠ Q*.', tags: ['IB', 'DWL'] },
      { id: 'fc-ib2-l5-3', front: 'Why is competitive equilibrium considered allocatively efficient?', back: 'At the competitive equilibrium, P = MC. This means the value consumers place on the last unit (measured by price) exactly equals the cost of producing it (MC). All mutually beneficial trades occur, total surplus (CS + PS) is maximised, and no DWL exists.', hint: 'Allocative efficiency: P = MC, no DWL, maximum total surplus.', tags: ['IB', 'consumer-surplus', 'producer-surplus'] },
    ],
    quiz: [
      { id: 'q-ib2-l5-1', type: 'mcq', question: 'If a government imposes a binding price ceiling below the competitive equilibrium price, total welfare in the market will:', options: ['Increase, because consumers pay a lower price and benefit from greater consumer surplus.', 'Decrease, because a deadweight loss triangle arises from the reduction in quantity traded.', 'Remain the same, because gains to consumers equal losses to producers.', 'Increase, because lower prices always improve social welfare.'], correctAnswer: 1, explanation: 'A binding price ceiling reduces the quantity traded below the equilibrium level. The surplus on trades that no longer take place — the DWL triangle — represents benefits that were potentially available but are now lost. While consumer surplus may rise for those who can buy at the lower price, the DWL means total surplus falls.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib2-l5-2', type: 'mcq', question: 'At competitive equilibrium, total surplus is maximised because:', options: ['Every consumer pays the same price, ensuring fairness in distribution.', 'All trades where consumers\' willingness to pay exceeds producers\' marginal cost are completed, leaving no mutually beneficial trades unrealised.', 'Producers earn the highest possible profit at the equilibrium price.', 'Government intervention ensures the market produces the socially optimal quantity.'], correctAnswer: 1, explanation: 'Allocative efficiency requires P = MC. At competitive equilibrium, every unit for which a buyer\'s willingness to pay (shown by the demand curve) exceeds the seller\'s cost (shown by supply) is traded. No further gains from trade exist. Moving away from this point in either direction creates a DWL — trades that fail to occur even though they would have benefited both parties.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Welfare economics provides tools for measuring who gains and who loses from market outcomes and policy changes. Consumer surplus (CS) is the aggregate benefit consumers receive beyond what they pay — it is the triangular area below the demand curve and above the market price. Producer surplus (PS) is the equivalent gain for sellers: the area above the supply curve and below the price, representing the revenue firms receive in excess of their minimum acceptable prices (their marginal costs). Total surplus — the sum of CS and PS — is the standard measure of the welfare generated by a market. At the competitive equilibrium, where demand and supply intersect, total surplus is maximised because every unit for which a buyer's willingness to pay exceeds the seller's cost is traded. No further mutually beneficial exchanges are left unrealised.\n\nDeadweight loss (DWL) arises whenever a market departs from the competitive equilibrium quantity. It is the triangular area representing trades that would have created surplus — buyers valued the good more than it cost to produce — but do not occur. DWL can be caused by taxes, subsidies, price controls, externalities, or monopoly pricing. In each case, output is restricted below (or sometimes pushed above) the efficient level, destroying welfare that could have been created. The concept of DWL is central to IB evaluation: any argument that a government policy "corrects" a market failure must show that the DWL eliminated by the intervention outweighs any DWL the intervention itself creates. IB candidates who can draw accurate DWL triangles and relate their size to elasticity conditions demonstrate the highest-level analytical skill expected at this tier.`,
      prerequisiteRecap: `Elasticity — particularly PED — determines how strongly buyers respond to price changes and therefore how total revenue moves when price is adjusted. Consumer and producer surplus extend this analysis from revenue to welfare, measuring the gains market participants obtain beyond their minimum requirements, and showing exactly what is at stake when output deviates from the competitive equilibrium.`,
      recallQuestions: [
        {
          id: 'ib2-l5-recall-1',
          type: 'mcq' as const,
          question: 'A firm sells a product with a Price Elasticity of Demand of −1.8. If it raises its price by 5%, total revenue will:',
          options: [
            'Rise, because demand is inelastic and the quantity fall is proportionally smaller than the price rise.',
            'Fall, because demand is elastic and the quantity fall is proportionally larger than the price rise.',
            'Remain unchanged because the good is unit elastic at |PED| = 1.8.',
            'Rise, because a higher price always increases revenue regardless of elasticity.',
          ],
          correctAnswer: 1,
          explanation: 'With |PED| = 1.8 > 1, demand is price elastic. A 5% price rise causes approximately a 9% fall in quantity demanded (1.8 × 5%), so the proportional quantity reduction outweighs the price increase and total revenue (P × Q) falls. Price rises increase revenue only when demand is inelastic (|PED| < 1).',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib2-l6', moduleId: 'ib2-micro-a', title: 'Government Intervention — Taxes, Subsidies, Price Controls', description: 'Analyse each intervention using IB diagrams; calculate welfare impacts; evaluate with pros and cons.', order: 6, estimatedMinutes: 45, tags: ['IB', 'government-intervention', 'taxes', 'subsidies'],
    flashcards: [
      { id: 'fc-ib2-l6-1', front: 'How is the incidence of a per-unit tax shared between consumers and producers?', back: 'Tax incidence depends on relative elasticities. The more inelastic side of the market bears the greater share. If demand is more inelastic than supply, consumers bear most of the tax (price rises by close to the full tax amount). If supply is more inelastic, producers bear more (price rises by less than the tax).', hint: 'Inelastic side pays more; the less responsive party cannot avoid the burden.', tags: ['IB', 'taxes'] },
      { id: 'fc-ib2-l6-2', front: 'Show the welfare effects of a per-unit subsidy on a diagram.', back: 'A subsidy shifts supply right (S → S₁), lowering price and increasing quantity. Consumers gain surplus (price falls), producers gain surplus (effective price received rises), government spends the subsidy amount (rectangle = subsidy per unit × Q₁). If output was already efficient, a DWL triangle arises because overproduction occurs.', hint: 'Subsidy → lower consumer price, higher producer price, government cost = subsidy × Q.', tags: ['IB', 'subsidies'] },
      { id: 'fc-ib2-l6-3', front: 'Distinguish a price ceiling from a price floor and give an example of each.', back: 'A price ceiling is a maximum legal price set below equilibrium (e.g., rent controls) — it creates a shortage (Qd > Qs). A price floor is a minimum legal price set above equilibrium (e.g., minimum wage, agricultural support prices) — it creates a surplus (Qs > Qd).', hint: 'Ceiling below equilibrium → shortage; Floor above equilibrium → surplus.', tags: ['IB', 'price-mechanism'] },
    ],
    quiz: [
      { id: 'q-ib2-l6-1', type: 'mcq', question: 'A government imposes a per-unit tax on petrol. Given that petrol demand is price inelastic, most of the tax burden will fall on:', options: ['Consumers, because inelastic demand means they cannot easily reduce consumption in response to the price rise.', 'Producers, because they are legally required to remit the tax to the government.', 'Consumers and producers equally regardless of elasticities.', 'Producers, because inelastic demand allows them to pass costs on easily.'], correctAnswer: 0, explanation: 'Tax incidence falls on the more inelastic side. Inelastic demand means consumers cannot substitute away from petrol — they have little choice but to absorb the price rise. Producers can therefore pass most of the tax on via higher prices. The legal obligation to remit the tax is irrelevant to economic incidence.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib2-l6-2', type: 'mcq', question: 'A government introduces a price floor above the equilibrium wage in the labour market. The most likely outcome is:', options: ['A surplus of labour (unemployment), as the quantity of labour supplied exceeds the quantity demanded at the higher wage.', 'A shortage of workers, as firms compete for labour at the lower market wage.', 'No change in employment, as wages automatically adjust to clear the market.', 'A fall in consumer prices, as firms pass on their lower labour costs.'], correctAnswer: 0, explanation: 'A price floor above equilibrium creates a surplus — suppliers (workers) offer more labour at the high wage than firms (demanders) wish to hire. This surplus is unemployment. The effectiveness of a minimum wage as policy depends on the elasticity of labour demand: elastic demand leads to proportionally larger employment losses, while inelastic demand limits job losses.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Governments intervene in markets to correct failures, redistribute income, or pursue social objectives — but every intervention creates its own welfare trade-offs. A per-unit tax shifts the supply curve upward (leftward) by the amount of the tax, raising the consumer price, lowering the producer's net price, and reducing equilibrium quantity. The difference between the new consumer price and producer price equals the tax per unit. Total welfare falls by a DWL triangle representing the trades that no longer occur. However, the government collects tax revenue (the tax per unit multiplied by the new quantity), which may be used to fund public services — a key point in any balanced IB evaluation. The distribution of the tax burden between consumers and producers is determined entirely by relative elasticities: the more inelastic party faces the steeper price change and therefore bears the greater incidence.\n\nSubsidies work in the opposite direction: they shift supply rightward, lower the consumer price, raise the effective producer price, and increase quantity. If the market was initially at the competitive equilibrium, the subsidy causes overproduction relative to the allocatively efficient output and creates a DWL. However, if the market was underproducing due to a positive externality, a well-targeted subsidy can reduce or eliminate the original DWL. Price ceilings set below equilibrium create shortages and may reduce quality, generate black markets, and lead to non-price rationing. Price floors set above equilibrium create surpluses and may require governments to purchase excess production. IB evaluation paragraphs on intervention must assess not only the intended benefits but also the unintended consequences, the equity implications, and whether alternative policies might achieve the same goal at lower welfare cost.`,
      prerequisiteRecap: `Consumer and producer surplus showed that competitive equilibrium maximises total welfare, with any departure creating a deadweight loss triangle. Government intervention through taxes, subsidies, and price controls directly creates or corrects such departures — making welfare analysis (using surplus diagrams) the essential tool for evaluating every intervention.`,
      recallQuestions: [
        {
          id: 'ib2-l6-recall-1',
          type: 'mcq' as const,
          question: 'At competitive equilibrium, total surplus (consumer surplus + producer surplus) is maximised because:',
          options: [
            'The government has set price equal to the socially optimal level through regulation.',
            'Every unit for which a buyer\'s willingness to pay exceeds the seller\'s marginal cost is traded, leaving no mutually beneficial exchanges unrealised.',
            'Consumer surplus and producer surplus are equal, ensuring a fair distribution of gains.',
            'The price mechanism has driven marginal cost to zero, eliminating all production inefficiency.',
          ],
          correctAnswer: 1,
          explanation: 'Allocative efficiency at competitive equilibrium (P = MC) means all trades where willingness to pay exceeds cost are completed. The condition requires total surplus to be maximised — not that CS equals PS (option C), nor government involvement (option A). Any intervention that moves output away from Q* creates a DWL by preventing some of these mutually beneficial trades.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
]

export const ib2MicroA: CurriculumModule = {
  id: 'ib2-micro-a',
  title: 'IB Unit 2A — Demand and Supply',
  description: 'Build the full IB micro toolkit from demand through welfare and market failure.',
  tier: 'IB' as const,
  track: 'IB_SL' as const,
  unit: 2,
  estimatedHours: 4,
  color: '#8b5cf6',
  icon: 'BookOpen',
  lessons: ib2Lessons,
}
