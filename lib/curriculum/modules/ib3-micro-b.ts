import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ib3-micro-b',
  title: 'IB Micro B — Elasticity & Government Intervention',
  description: 'Elasticity concepts and government intervention tools tested in IB Paper 1 and Paper 2.',
  tier: 'IB' as const,
  track: 'IB_SL' as const,
  unit: 3,
  estimatedHours: 4,
  color: '#8b5cf6',
  icon: 'Target',
}

export const lessons: Lesson[] = [
  {
    id: 'ib3-l1',
    moduleId: 'ib3-micro-b',
    title: 'Price Elasticity of Demand',
    description: 'Formula, diagram interpretation, determinants of PED, and the total revenue test — all to IB SL standard.',
    order: 1,
    estimatedMinutes: 40,
    tags: ['IB', 'PED', 'elasticity', 'total-revenue'],
    content: {
      isStub: false,
      conceptualExplanation: `Price Elasticity of Demand (PED) measures the responsiveness of quantity demanded to a change in the good's own price. The formula is PED = (% change in quantity demanded) ÷ (% change in price). Because demand curves slope downward, PED is always negative — a price rise always causes a fall in quantity demanded. IB convention often refers to the absolute value |PED|. When |PED| > 1, demand is price elastic: consumers respond proportionally more than the price changes, and the demand curve is relatively flat. When |PED| < 1, demand is price inelastic: consumers respond proportionally less than the price changes, and the curve is relatively steep. When |PED| = 1, demand is unit elastic — quantity demanded and price change by exactly the same percentage, placing the firm at the peak of its total revenue curve.

The main determinants of PED are the number and closeness of substitutes (the single most important factor — more substitutes make demand more elastic), whether the good is a necessity or a luxury (necessities are inelastic; luxuries are elastic), the proportion of income spent on the good (large share → more elastic), how narrowly or broadly the good is defined (narrow definitions yield more substitutes and higher elasticity), and the time period under consideration (demand becomes more elastic over time as consumers adjust habits and find alternatives). IB examiners expect candidates to be able to justify the elasticity of a specific good with reference to these determinants rather than simply asserting a value.

The revenue test is the most practical application of PED for IB analysis. Total revenue (TR) equals price multiplied by quantity. If demand is elastic, a price rise reduces TR because the proportional fall in quantity outweighs the proportional rise in price. If demand is inelastic, a price rise increases TR because the proportional fall in quantity is smaller than the proportional rise in price. At unit elasticity TR is maximised. On a diagram, TR at any price is shown by the rectangle formed between that price, the origin, and the quantity demanded at that price. IB Paper 2 data-response questions frequently provide data requiring candidates to calculate PED and infer whether a firm should raise or lower its price to increase revenue.`,
      realWorldHook: `In 2022, when fuel prices surged above $5 per gallon across much of the United States, drivers reduced their consumption by only a modest amount — confirming economists' long-standing estimate that the short-run PED for petrol is around −0.25. Commuters still needed to reach work, and alternatives such as public transit or remote working took months to arrange. Yet researchers tracking long-run behaviour found that over two to three years, the same price spike ultimately triggered larger responses: car-pooling expanded, fuel-efficient vehicle sales surged, and some employers permanently extended remote-working options. This real-world contrast between short-run inelasticity and long-run elasticity is a textbook illustration of how the time horizon determinant shapes PED.`,
      interactiveElement: `Draw a downward-sloping demand curve on a price–quantity diagram. Mark an initial equilibrium at price P₁ and quantity Q₁. Now raise the price to P₂ and read off the new quantity Q₂. Shade the original revenue rectangle (P₁ × Q₁) in one colour. Shade the new revenue rectangle (P₂ × Q₂) in a second colour. Compare the two rectangles: if the new rectangle is larger, demand is inelastic and TR rose; if it is smaller, demand is elastic and TR fell. Now try the same exercise with a steeper curve (inelastic) and a flatter curve (elastic) to see how curve shape determines the revenue outcome. Finally, label the percentage changes in P and Q and calculate PED directly to verify your visual conclusion.`,
      vocabulary: [
        {
          term: 'Price Elasticity of Demand (PED)',
          definition: 'A measure of the responsiveness of quantity demanded to a change in the good\'s own price, calculated as (% ΔQd) ÷ (% ΔP).',
          example: 'If petrol prices rise by 10% and quantity demanded falls by 3%, PED = −3% ÷ 10% = −0.3, indicating inelastic demand.',
        },
        {
          term: 'Price inelastic demand',
          definition: 'Demand where |PED| < 1: a given percentage change in price produces a smaller percentage change in quantity demanded. The demand curve is relatively steep.',
          example: 'Insulin demand is highly inelastic — diabetic patients must purchase it regardless of price increases, so quantity demanded falls very little even when price doubles.',
        },
        {
          term: 'Total Revenue Test',
          definition: 'A method to determine elasticity by observing how total revenue (P × Q) changes when price changes. TR and price move in opposite directions when demand is elastic, and in the same direction when demand is inelastic.',
          example: 'A music streaming service with elastic demand finds that lowering its monthly price from $12 to $10 attracts so many new subscribers that total revenue rises — consistent with |PED| > 1.',
        },
      ],
      deeperDive: `IB HL candidates must recognise that PED varies along a linear demand curve: it is elastic at high prices (upper portion) and inelastic at low prices (lower portion), even though the slope is constant. This is because elasticity depends on percentage changes, not absolute changes. At the midpoint of a linear demand curve, |PED| = 1 and total revenue is maximised. Moving up the curve raises PED; moving down lowers it. A firm wishing to maximise revenue should therefore price at the midpoint — a result confirmed algebraically by setting the derivative of TR with respect to Q to zero.

From a policy perspective, PED governs the effectiveness of indirect taxes in reducing consumption of demerit goods. A tax on cigarettes will generate large government revenue precisely because demand is inelastic (|PED| ≈ 0.4) — consumers cannot easily quit in the short run. But this same inelasticity means the tax is relatively ineffective at achieving the health goal of reduced consumption. Governments face a trade-off: the goods that raise the most revenue through taxation are the goods whose consumption changes least. This paradox is central to evaluation in IB Paper 1 essays on corrective taxation.`,
      commonMisconceptions: [
        'PED is always negative, so saying demand is "elastic" does not mean PED is positive — it means the absolute value exceeds 1. IB candidates sometimes confuse the sign with the magnitude and incorrectly state that elastic demand has a positive PED.',
        'A steeper demand curve does not always mean more inelastic demand at every point — slope and elasticity are related but distinct. Elasticity compares percentage changes, so a curve with constant slope still has varying elasticity along its length. Candidates who equate slope with elasticity make systematic errors on diagram questions.',
        'A price rise always increases revenue — this is only true if demand is inelastic. For an elastic good, a price rise reduces total revenue because the fall in quantity demanded more than offsets the higher price. This misconception leads to poor business and policy recommendations.',
      ],
      examinerTip: `On IB Paper 2 data-response questions that give you price and quantity data across two time periods, always calculate PED explicitly using the formula before stating whether demand is elastic or inelastic — never guess from the numbers alone. Show your working: write out "% ΔQd = [(Q₂ − Q₁)/Q₁] × 100" and "% ΔP = [(P₂ − P₁)/P₁] × 100", divide them, and state the result with its sign. Then link the PED value to the total revenue test and to any policy recommendation in the question. IB mark schemes award method marks for correct formula use even when arithmetic is wrong, so always show the process.`,
      didYouKnow: `The concept of price elasticity was formalised by Alfred Marshall in his 1890 Principles of Economics, but the idea had been understood intuitively by merchants for centuries. Salt traders in medieval Europe knew that doubling their prices caused barely any drop in sales — because salt was essential for food preservation — and accordingly charged as much as the market would bear. This is a textbook example of inelastic demand persisting across five hundred years of economic history.`,
      prerequisiteRecap: `In ib2 we saw that government intervention — through per-unit taxes, subsidies, and price controls — creates deadweight loss by pushing market output away from the competitive equilibrium. Price Elasticity of Demand is the key variable that determines how large the deadweight loss is and how the burden of a tax is shared: the more inelastic the demand, the greater the consumer's share of the tax burden and the smaller the reduction in quantity traded.`,
      recallQuestions: [
        {
          id: 'ib3-l1-recall-1',
          type: 'mcq' as const,
          question: 'A government imposes a per-unit tax on a good. Holding all else equal, which outcome will produce the largest deadweight loss?',
          options: [
            'Price elastic demand and price elastic supply, so quantity traded falls sharply when the tax is imposed.',
            'Price inelastic demand and price inelastic supply, so quantity traded barely changes when the tax is imposed.',
            'Perfectly inelastic demand, so consumers absorb the entire tax without reducing quantity demanded.',
            'Perfectly elastic supply, so producers bear the entire tax burden.',
          ],
          correctAnswer: 0,
          explanation: 'Deadweight loss is the triangle of welfare destroyed by the reduction in quantity traded. When both demand and supply are price elastic, even a modest tax causes a large fall in quantity, creating a large DWL triangle. When both are inelastic (option B), quantity barely falls and the DWL triangle is small — which is why governments raise most revenue by taxing inelastic goods, albeit at an equity cost.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
    flashcards: [
      {
        id: 'ib3-l1-fc1',
        front: 'State the PED formula and explain what a value of −0.6 means.',
        back: 'PED = (% change in Qd) ÷ (% change in P). A value of −0.6 means demand is price inelastic (|PED| < 1): a 1% rise in price causes only a 0.6% fall in quantity demanded. Because the quantity response is proportionally smaller, a price rise will increase total revenue.',
        tags: ['IB', 'PED', 'formula'],
      },
      {
        id: 'ib3-l1-fc2',
        front: 'List four determinants of PED and state which is considered the most important.',
        back: '1. Number and closeness of substitutes (most important — more substitutes → more elastic). 2. Necessity vs. luxury status. 3. Proportion of income spent on the good. 4. Time period (demand becomes more elastic over time). The availability of substitutes is the dominant factor because it directly controls consumers\' ability to switch away from the good when its price rises.',
        tags: ['IB', 'PED', 'determinants'],
      },
      {
        id: 'ib3-l1-fc3',
        front: 'How does the total revenue test determine whether demand is elastic or inelastic?',
        back: 'If price rises and total revenue (P × Q) also rises, demand is inelastic (|PED| < 1) — the quantity fall is proportionally smaller. If price rises and total revenue falls, demand is elastic (|PED| > 1) — the quantity fall is proportionally larger. If total revenue does not change, demand is unit elastic (|PED| = 1).',
        tags: ['IB', 'PED', 'total-revenue'],
      },
    ],
    quiz: [
      {
        id: 'ib3-l1-q1',
        type: 'mcq',
        question: 'The price of a product rises from $20 to $25, and quantity demanded falls from 500 units to 425 units. What is the PED, and what does it imply for total revenue?',
        options: [
          'PED = −0.6; demand is inelastic, so total revenue increases.',
          'PED = −1.5; demand is elastic, so total revenue decreases.',
          'PED = −0.6; demand is inelastic, so total revenue decreases.',
          'PED = −1.5; demand is elastic, so total revenue increases.',
        ],
        correctAnswer: 0,
        explanation: '% ΔQd = (−75/500) × 100 = −15%. % ΔP = (5/20) × 100 = 25%. PED = −15% ÷ 25% = −0.6. Since |PED| = 0.6 < 1, demand is inelastic. A price rise with inelastic demand means the percentage price gain outweighs the percentage quantity loss, so TR rises from $20 × 500 = $10,000 to $25 × 425 = $10,625.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l1-q2',
        type: 'mcq',
        question: 'A government wants to maximise tax revenue from a per-unit tax on alcohol. To achieve this, it should target alcohol goods whose demand is:',
        options: [
          'Price inelastic, because consumers reduce quantity purchased by proportionally less than the price rise, so tax revenue is high.',
          'Price elastic, because consumers buy more of the product if its price is kept low.',
          'Unit elastic, because the revenue rectangle is largest at this point on the demand curve.',
          'Perfectly elastic, because no consumer surplus is lost and revenue is maximised.',
        ],
        correctAnswer: 0,
        explanation: 'Tax revenue per unit is fixed (the tax rate), so total tax revenue = tax per unit × quantity sold. The government maximises tax revenue by ensuring quantity sold remains high — which happens when demand is inelastic. Inelastic demand means consumers cannot easily cut back, so the tax causes only a small fall in quantity, keeping tax revenue large. Elastic demand would see a large quantity reduction, undermining revenue.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l1-q3',
        type: 'mcq',
        question: 'Which of the following goods is most likely to have a high price elasticity of demand (|PED| > 1)?',
        options: [
          'A specific brand of luxury designer handbag with many close substitute brands available.',
          'Prescription heart medication for which no alternative treatment exists.',
          'Tap water for household drinking and sanitation.',
          'Petrol for a long-distance truck driver with no alternative fuel option.',
        ],
        correctAnswer: 0,
        explanation: 'A luxury designer handbag has many close substitutes (other designer brands), is not a necessity, and represents a large share of income — all factors pushing PED above 1. The other goods are necessities with few or no substitutes, resulting in inelastic demand. The availability of substitutes is the single most important determinant of PED.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  {
    id: 'ib3-l2',
    moduleId: 'ib3-micro-b',
    title: 'Income & Cross-Price Elasticity of Demand',
    description: 'YED — normal, inferior, and luxury goods; XED — substitutes and complements; business and policy applications.',
    order: 2,
    estimatedMinutes: 38,
    tags: ['IB', 'YED', 'XED', 'elasticity', 'normal-inferior-luxury'],
    content: {
      isStub: false,
      conceptualExplanation: `Income Elasticity of Demand (YED) measures how quantity demanded responds to a change in consumer income, calculated as YED = (% change in Qd) ÷ (% change in income). The sign of YED is the most important piece of information it conveys. A positive YED identifies a normal good — as incomes rise, consumers buy more. A negative YED identifies an inferior good — as incomes rise, consumers actually buy less, switching to superior alternatives. Within normal goods, the magnitude matters: if YED > 1 the good is a luxury (demand rises proportionally more than income, so the good's income share grows), while if 0 < YED < 1 the good is a necessity (demand rises proportionally less than income, so its income share shrinks as people get richer). Classic luxuries include foreign holidays, sports cars, and fine dining; classic inferior goods include instant noodles, second-hand clothing, and bus travel in high-income contexts.

Cross-Price Elasticity of Demand (XED) measures the responsiveness of quantity demanded of good A to a change in the price of good B, calculated as XED = (% change in Qd of A) ÷ (% change in P of B). Again, the sign is the critical result. A positive XED indicates that goods A and B are substitutes — when the price of B rises, consumers switch to A, increasing its demand. A negative XED indicates that goods A and B are complements — when the price of B rises, consumption of B falls, dragging down demand for A as well (since they are consumed together). A zero or near-zero XED indicates goods that are unrelated. The magnitude of XED indicates the closeness of the relationship: a high positive value means close substitutes (e.g., Pepsi and Coca-Cola), while a high negative value means close complements (e.g., printers and ink cartridges).

Both YED and XED have direct business applications. A firm can use YED data to forecast how a recession or economic boom will affect its sales, and to decide whether to expand production of luxuries (risky in downturns) or necessities (more stable). A conglomerate producing both luxury and inferior goods can hedge its revenue across the economic cycle. XED data allows firms to monitor competitive threats: a high positive XED with a rival product suggests that price changes by competitors will rapidly affect demand for their own product. Retailers use negative XED relationships to design bundle pricing strategies — selling printers cheaply to lock customers into high-margin ink cartridges exploits the strong complementary relationship between the two goods.`,
      realWorldHook: `When the 2008–2009 global recession struck, sales of budget food brands surged while premium restaurant chains reported falling covers — a textbook demonstration of YED in action. UK supermarket chain Aldi reported record market-share gains as shoppers switched from premium own-label products, illustrating negative YED for economy food staples. Simultaneously, sales of luxury watches in Switzerland fell by over 20% as global incomes contracted, confirming their luxury status (YED >> 1). The crisis gave economists a natural experiment in which the income elasticities that firms had estimated in good times were suddenly tested under stress — and the results matched theory closely.`,
      interactiveElement: `Draw two separate diagrams side by side. Left diagram: Income-demand relationship for a normal good and an inferior good. Show how a rise in income shifts the demand curve for the normal good to the right (D → D₁) and shifts the demand curve for the inferior good to the left (D → D₁). Label both curves and annotate YED sign. Right diagram: Cross-price elasticity exercise. Draw the market for butter (good A). Now raise the price of margarine (good B, a substitute). Show the rightward shift in butter demand (positive XED). Then repeat with the price of bread (good B, a complement) rising — show the leftward shift in butter demand (negative XED). Label all curves D, D₁, and annotate XED sign alongside each shift.`,
      vocabulary: [
        {
          term: 'Income Elasticity of Demand (YED)',
          definition: 'A measure of the responsiveness of quantity demanded to a change in consumer income, calculated as (% ΔQd) ÷ (% Δ income). Sign indicates good type; magnitude indicates sensitivity.',
          example: 'If a 5% rise in income causes demand for overseas holidays to rise by 12%, YED = +2.4 — the holidays are a luxury good.',
        },
        {
          term: 'Inferior good',
          definition: 'A good with a negative YED: as consumer incomes rise, demand for the good falls, because consumers substitute toward higher-quality alternatives.',
          example: 'Supermarket own-brand instant noodles are an inferior good in many high-income countries — as household incomes rise, shoppers trade up to fresh pasta or restaurant meals.',
        },
        {
          term: 'Cross-Price Elasticity of Demand (XED)',
          definition: 'A measure of the responsiveness of quantity demanded of one good to a change in the price of another good, calculated as (% ΔQd of A) ÷ (% ΔP of B). Positive = substitutes; negative = complements.',
          example: 'If a 10% rise in the price of Uber rides causes a 15% increase in demand for taxis, the XED = +1.5, indicating the two services are close substitutes.',
        },
      ],
      deeperDive: `YED has important macroeconomic implications. Industries producing luxury goods (YED > 1) face highly cyclical demand — they boom in expansions and contract sharply in recessions. This is why luxury goods companies hedge by diversifying across global markets at different points in the business cycle. Conversely, supermarkets selling inferior-good ranges can actually benefit from recessions, making their revenue counter-cyclical. Understanding a product's YED therefore shapes corporate strategy, staffing decisions, and investment planning just as directly as PED shapes pricing decisions.

XED analysis underpins competition policy and antitrust regulation. When two firms claim that their products are in separate markets, competition authorities examine the XED between them: a high positive XED implies they compete closely and should be regulated together. For instance, the European Commission uses XED estimates when assessing proposed mergers — if a merger would combine two firms whose products have high positive XED, there is a risk of reduced competition and consumer harm. IB HL candidates can incorporate this regulatory application into evaluation paragraphs on market power and government intervention.`,
      commonMisconceptions: [
        'A negative YED does not mean the good is "bad" or of poor quality in an absolute sense — it simply means consumers substitute away from it as incomes rise. Many inferior goods are perfectly functional; they lose market share as incomes grow because higher-quality alternatives become affordable.',
        'A positive XED does not always mean goods are close substitutes. A small positive XED (e.g., +0.05) might reflect very loose substitutability — changing the price of one barely affects demand for the other. Always comment on the magnitude, not just the sign.',
        'XED is not symmetric: the XED of A with respect to B is not necessarily equal to the XED of B with respect to A. Butter and margarine may have a high XED from butter\'s perspective (many margarine buyers would switch to butter if margarine got expensive), but a moderate XED from margarine\'s perspective if its market is much larger. Candidates who assume symmetry make errors in multi-market analysis.',
      ],
      examinerTip: `IB Paper 1 essay questions on elasticity often ask for two or more elasticity concepts within a single response. A strong answer uses YED and XED together: begin each concept with a precise definition and formula, give a clearly labelled worked example (even a hypothetical numerical one), and then apply to the specific context in the question. When the question involves a firm's strategy, connect YED to income forecasting and XED to competitive positioning. Avoid vague language — "demand will change" — and instead specify direction and cause: "the positive XED of +1.8 indicates the goods are close substitutes, so a rise in the price of good B shifts demand for good A rightward."`,
      didYouKnow: `Economists at the IMF have estimated the income elasticity of demand for international tourism at around 1.5–2.5 in most regions — meaning travel is a robust luxury good. During the COVID-19 pandemic this relationship was dramatically distorted by health restrictions, but the underlying elasticity reasserted itself almost immediately once restrictions lifted in 2022–23, with global air travel rebounding far faster than most industries. This episode reminded forecasters not to confuse structural income elasticity with temporary disruption from external shocks.`,
      prerequisiteRecap: `PED measures how strongly consumers respond to a change in a good's own price, determining both the revenue impact on firms and the welfare cost of taxes. YED and XED extend the same logic: they measure responsiveness to income changes and to price changes of related goods, enabling firms and policymakers to predict demand across the economic cycle and across competitive markets.`,
      recallQuestions: [
        {
          id: 'ib3-l2-recall-1',
          type: 'mcq' as const,
          question: 'A luxury hotel chain has estimated its PED at −2.4. If it cuts room rates by 10% during a recession, which outcome best follows from the total revenue test?',
          options: [
            'Total revenue falls, because demand is inelastic and the quantity increase is proportionally smaller than the price cut.',
            'Total revenue rises, because demand is elastic and the quantity increase is proportionally larger than the price cut.',
            'Total revenue is unchanged, because the hotel is pricing at unit elasticity.',
            'Total revenue falls, because a price cut always signals lower quality to consumers.',
          ],
          correctAnswer: 1,
          explanation: 'With |PED| = 2.4 > 1, demand is price elastic. A 10% price cut raises quantity demanded by approximately 24% (2.4 × 10%), more than offsetting the lower price. Total revenue (P × Q) therefore rises. The total revenue test states: for elastic demand, price and TR move in opposite directions — a price cut raises TR.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
    flashcards: [
      {
        id: 'ib3-l2-fc1',
        front: 'What do the sign and magnitude of YED reveal about a good?',
        back: 'Sign: positive YED = normal good (demand rises with income); negative YED = inferior good (demand falls as income rises). Magnitude: YED > 1 = luxury (income share rises with income); 0 < YED < 1 = necessity (income share falls with income). Example: a YED of +2.1 means a luxury normal good.',
        tags: ['IB', 'YED', 'normal-inferior-luxury'],
      },
      {
        id: 'ib3-l2-fc2',
        front: 'What does a cross-price elasticity of −2.4 between goods A and B indicate?',
        back: 'A negative XED indicates A and B are complements — they are consumed together. The value −2.4 shows a strong complementary relationship: a 1% rise in the price of B causes a 2.4% fall in quantity demanded of A. Example: if B is printers and A is ink cartridges, a printer price rise causes a large drop in ink demand.',
        tags: ['IB', 'XED', 'complements'],
      },
      {
        id: 'ib3-l2-fc3',
        front: 'How can a business use YED data strategically across the economic cycle?',
        back: 'A firm selling luxury goods (high positive YED) should expand capacity during economic booms but hold back investment going into recessions, since revenue is highly cyclical. A conglomerate producing both luxury and inferior-good ranges hedges its overall revenue — when luxury sales fall in a recession, inferior-good sales rise, stabilising total income. YED therefore shapes diversification strategy.',
        tags: ['IB', 'YED', 'business-applications'],
      },
    ],
    quiz: [
      {
        id: 'ib3-l2-q1',
        type: 'mcq',
        question: 'Consumer income rises by 8% and demand for bus travel falls by 4%. Which of the following correctly classifies bus travel and explains why?',
        options: [
          'An inferior good with YED = −0.5, because demand fell as income rose, indicating consumers are substituting toward preferred transport alternatives.',
          'A normal good with YED = +0.5, because demand and income moved in the same proportional direction.',
          'A luxury good with YED = −2.0, because the demand response was larger in proportion than the income change.',
          'A necessity with YED = +2.0, because the good is essential for daily travel.',
        ],
        correctAnswer: 0,
        explanation: 'YED = (−4%) ÷ (+8%) = −0.5. The negative sign classifies bus travel as an inferior good — as incomes rise, consumers switch to car ownership or taxis, so demand for bus travel falls. The magnitude of 0.5 suggests a moderate degree of inferiority. Luxuries have YED > 1 and are normal goods; necessities have 0 < YED < 1.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l2-q2',
        type: 'mcq',
        question: 'A car manufacturer observes that when the price of petrol rises by 20%, demand for its large SUVs falls by 30%. The XED is −1.5. This indicates that SUVs and petrol are:',
        options: [
          'Complements, because a higher petrol price makes owning and running an SUV more expensive, reducing demand for the vehicle itself.',
          'Substitutes, because consumers switch from petrol to SUVs when petrol becomes expensive.',
          'Unrelated goods, since petrol and SUVs are bought in entirely different markets.',
          'Inferior goods, because demand for SUVs falls as petrol prices rise.',
        ],
        correctAnswer: 0,
        explanation: 'XED = (−30%) ÷ (+20%) = −1.5. The negative sign indicates complements — petrol and SUVs are consumed together. When petrol becomes more expensive, the running cost of an SUV rises, so consumers demand fewer SUVs. The magnitude of 1.5 shows a strong complementary relationship. Inferior good status is determined by YED (income relationship), not XED.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l2-q3',
        type: 'mcq',
        question: 'Which of the following business decisions is most directly informed by cross-price elasticity of demand data?',
        options: [
          'A supermarket deciding whether to cut the price of its store-brand cola in response to a price increase by a rival branded cola, given a high positive XED between the two products.',
          'A luxury car manufacturer deciding how many vehicles to produce during an economic boom based on rising household incomes.',
          'A tobacco company assessing the revenue impact of a government tax that raises cigarette prices by 15%.',
          'An airline determining whether to raise ticket prices in the peak summer season based on inelastic demand from business travellers.',
        ],
        correctAnswer: 0,
        explanation: 'XED measures responsiveness of demand for one good to price changes of another. A high positive XED between store-brand and branded cola means that a branded price rise will shift significant demand toward the store brand — exactly the information a supermarket pricing manager needs to exploit competitive pricing opportunities. The other decisions rely primarily on YED (luxury car boom demand), PED (tobacco tax revenue), and PED (airline pricing).',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  {
    id: 'ib3-l3',
    moduleId: 'ib3-micro-b',
    title: 'Price Elasticity of Supply',
    description: 'Formula, determinants of PES, and the time horizon — momentary, short-run, and long-run supply responses.',
    order: 3,
    estimatedMinutes: 35,
    tags: ['IB', 'PES', 'elasticity', 'supply', 'time-horizon'],
    content: {
      isStub: false,
      conceptualExplanation: `Price Elasticity of Supply (PES) measures how responsive the quantity supplied by producers is to a change in the good's own price. The formula is PES = (% change in quantity supplied) ÷ (% change in price). Unlike PED, PES is always positive, because the supply curve slopes upward — higher prices incentivise greater production. When PES > 1, supply is elastic: producers can expand output proportionally more than the price rises. When PES < 1, supply is inelastic: producers cannot respond quickly to price changes, so quantity supplied rises proportionally less than the price. Perfectly inelastic supply (PES = 0) is represented by a vertical supply curve — quantity cannot change at all regardless of price, as with land in a fixed location or genuine antiques. Perfectly elastic supply (PES = ∞) is represented by a horizontal curve — any price below the market price would cause zero supply, while any rise above it would cause unlimited supply, as approximated in long-run perfectly competitive markets.

The key determinants of PES are: spare productive capacity (firms with idle machinery can rapidly expand output, making supply more elastic); the ease and cost of storing inventories (goods that can be stockpiled have more elastic supply, as producers release stocks when prices rise); the mobility of factors of production (labour and capital that can move quickly between uses yield more elastic supply); the time required to produce the good (agricultural crops take a growing season, complex machinery takes years to design and build — both are inelastic in the short run); and the number of firms in the market (more potential entrants can enter when prices rise, increasing elasticity).

The time horizon is arguably the most important determinant of PES and the one most frequently tested in IB examinations. Economists distinguish three supply periods. In the momentary (market) period, supply is perfectly inelastic — the quantity produced is already fixed; think of fish at a morning market or fresh-cut flowers. Producers can only vary the price at which they offer their existing stock. In the short run, at least one factor (typically capital) is fixed but others (especially labour) can be varied; firms may extend working hours or bring on extra shifts, so supply becomes somewhat elastic. In the long run, all factors are variable, new firms can enter, and existing firms can build new capacity — supply becomes much more elastic, approaching perfect elasticity in highly competitive industries.`,
      realWorldHook: `The global semiconductor shortage of 2020–2022 is a textbook case of perfectly inelastic supply in the short run. When demand for chips surged — driven simultaneously by gaming consoles, electric vehicles, and remote-working devices — chipmakers could not simply switch on new capacity. Building a semiconductor fabrication plant (a "fab") requires two to three years and billions of dollars. In 2021, TSMC announced $100 billion in new investment, but meaningful new capacity only began coming online in 2024. The result was soaring chip prices with essentially no supply response for over two years — a real-world PES approaching zero — followed by gradual normalisation as long-run investment bore fruit.`,
      interactiveElement: `Draw three separate supply curves for the same market on the same price–quantity diagram to illustrate the three time horizons. First, draw a vertical line (perfectly inelastic) labelled S_momentary — this represents a morning fish market where the catch is already fixed. Second, draw a steeply upward-sloping curve labelled S_short-run — firms can add labour shifts but capital is fixed. Third, draw a gently upward-sloping (almost flat) curve labelled S_long-run — all factors are variable and new firms can enter. Now add a demand shift (D → D₁) and trace the price and quantity outcomes in each period. Notice that the momentary period produces only a price response (no new quantity), the short run produces a partial quantity response, and the long run produces a large quantity response with a smaller remaining price change.`,
      vocabulary: [
        {
          term: 'Price Elasticity of Supply (PES)',
          definition: 'A measure of the responsiveness of quantity supplied to a change in price, calculated as (% ΔQs) ÷ (% ΔP). Always positive; values greater than 1 are elastic, less than 1 are inelastic.',
          example: 'If a 10% rise in coffee prices causes quantity supplied to rise by 25% over a growing season, PES = 2.5, indicating elastic supply.',
        },
        {
          term: 'Momentary (market period) supply',
          definition: 'The supply response over so short a time that output cannot be changed at all — the supply curve is vertical (perfectly inelastic). Producers can only adjust price, not quantity.',
          example: 'The supply of fresh strawberries at a Saturday farmers\' market is fixed by what was picked that morning; sellers can only adjust the asking price, not produce more on the spot.',
        },
        {
          term: 'Long-run supply elasticity',
          definition: 'The supply response over a period long enough for all factors of production to be varied and new firms to enter or exit. Supply becomes much more elastic as the productive capacity of the industry adjusts fully to the new price signal.',
          example: 'Following a sustained rise in solar panel prices, new manufacturers entered the market and existing ones built larger factories over five years, making long-run supply of solar panels highly elastic.',
        },
      ],
      deeperDive: `The distinction between elastic and inelastic supply has major implications for how price changes following a demand shock are shared between a permanent price increase and a quantity increase. When a demand curve shifts right in a market with inelastic supply, almost all of the adjustment falls on price — quantity barely changes, so the price spike is large and potentially prolonged. This is the situation in housing markets in dense cities: land supply is near-perfectly inelastic (a vertical S curve), so an increase in urban population bidding for homes drives prices up dramatically with very little new supply response in the short run. Only in the long run — if planning permissions are granted and new construction occurs — does supply become somewhat elastic and prices moderate.

IB HL students should also understand that governments' ability to achieve policy goals through price interventions depends on PES. When a government subsidises agricultural production, the benefit to producers is larger when supply is inelastic (producers capture most of the subsidy as profit, since they cannot easily expand output to compete it away). When supply is elastic, subsidy benefits are largely passed on to consumers through lower prices, as new firms enter and compete down prices. This mirrors the tax incidence argument and is worth explicitly connecting to Tax Incidence diagrams in the next lesson.`,
      commonMisconceptions: [
        'PES is not determined by the slope of the supply curve alone. A supply curve that passes through the origin (regardless of slope) always has PES = 1 at every point, because percentage changes in Q and P are always equal at any point on such a line. Only curves that cut the price axis have PES > 1 at every point, and curves that cut the quantity axis have PES < 1. Many candidates incorrectly infer elasticity from slope alone.',
        'A short-run supply curve that is steeper than the long-run supply curve does not mean producers are "unwilling" to supply more — it means they are physically unable to expand capacity quickly. The constraint is technical and time-based, not behavioural. IB candidates should use causal language carefully: "producers cannot yet respond" rather than "producers choose not to respond."',
        'Perfectly inelastic supply does not mean supply is zero — it means supply is fixed at a particular quantity regardless of price. This is a crucial distinction: a vertical supply curve at Q = 1,000 means exactly 1,000 units are available at any price, not that nothing is supplied.',
      ],
      examinerTip: `IB Paper 1 Part (b) evaluation questions on supply elasticity often reward candidates who explicitly connect PES to the time horizon and give a real-world example. Structure your answer as: (1) define PES with formula; (2) draw a diagram showing elastic vs. inelastic supply curves with clearly labelled axes; (3) explain the determinants, prioritising time horizon and spare capacity; (4) apply to the specific context in the question — for example, if the question concerns agricultural markets, note that seasonal production cycles make short-run PES near zero but long-run PES significantly higher as farmers adjust planting decisions.`,
      didYouKnow: `The price of genuine oil paintings by deceased masters (e.g., Rembrandt or Vermeer) is the closest real-world example of perfectly inelastic supply — no new Rembrandts can ever be produced. When a Rembrandt sells at auction, the entire price effect falls on price alone. This is why prices in the fine art market for authenticated old masters can reach hundreds of millions of dollars: demand from wealthy collectors is growing, but supply is permanently fixed, making PES = 0 in the strictest sense.`,
    },
    flashcards: [
      {
        id: 'ib3-l3-fc1',
        front: 'State the PES formula and explain the difference between elastic and inelastic supply with a diagram reference.',
        back: 'PES = (% ΔQs) ÷ (% ΔP). Elastic supply (PES > 1): a gently sloped supply curve — a given price rise causes a proportionally larger quantity increase. Inelastic supply (PES < 1): a steeply sloped curve — price rises cause proportionally smaller quantity increases. A vertical supply curve = perfectly inelastic (PES = 0); a horizontal curve = perfectly elastic (PES = ∞).',
        tags: ['IB', 'PES', 'formula', 'diagrams'],
      },
      {
        id: 'ib3-l3-fc2',
        front: 'List four determinants of PES and explain how each affects elasticity.',
        back: '1. Spare capacity: idle capital allows rapid output expansion → more elastic. 2. Storability: storable goods can be released from inventory quickly → more elastic. 3. Factor mobility: labour/capital that can switch uses easily → more elastic. 4. Production time: longer production periods (e.g., crops, aircraft) mean producers cannot respond quickly → more inelastic in the short run.',
        tags: ['IB', 'PES', 'determinants'],
      },
      {
        id: 'ib3-l3-fc3',
        front: 'Describe the three time horizons of supply and how PES changes across them.',
        back: 'Momentary period: supply is perfectly inelastic (vertical S curve) — output is already fixed, only price adjusts. Short run: supply becomes somewhat elastic as variable inputs (e.g., labour) are adjusted, but capital is fixed. Long run: supply is much more elastic as all factors vary and new firms enter; in perfect competition, supply approaches perfectly elastic.',
        tags: ['IB', 'PES', 'time-horizon'],
      },
    ],
    quiz: [
      {
        id: 'ib3-l3-q1',
        type: 'mcq',
        question: 'A severe drought destroys 40% of a region\'s wheat crop. In the momentary period, the primary effect in the wheat market will be:',
        options: [
          'A large rise in the price of wheat with little or no change in quantity sold, because supply is perfectly inelastic in the momentary period.',
          'A large fall in quantity sold and no change in price, because supply determines quantity.',
          'A large rise in both price and quantity, as producers respond to higher prices by farming more land.',
          'No change in price, because the government will release emergency grain reserves.',
        ],
        correctAnswer: 0,
        explanation: 'In the momentary period, the supply of wheat is fixed by what was already harvested — the supply curve is vertical. A negative supply shock (drought) shifts this vertical curve left, and since quantity cannot adjust, the entire burden falls on price. Wheat prices spike sharply. In the short and long run, farmers can plant more and new land can be brought into production, making supply gradually more elastic and moderating the price rise over time.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l3-q2',
        type: 'mcq',
        question: 'Which of the following industries is most likely to have a high (elastic) PES in the long run but a very low (inelastic) PES in the short run?',
        options: [
          'Commercial aviation, where building new aircraft requires multi-year production lead times but aircraft manufacturers can scale up orders over a decade.',
          'Fresh vegetable retailing, where unsold stock perishes within days and cannot be stored for later sale.',
          'Currency exchange, where supply of foreign exchange responds instantly to price signals in global financial markets.',
          'Land for development in a city centre, where supply is permanently fixed by geography.',
        ],
        correctAnswer: 0,
        explanation: 'Commercial aviation has a long production cycle — a new Boeing 737 takes around two years from order to delivery, and building a new factory takes even longer. Short-run PES is therefore very low. But over a decade, manufacturers can expand capacity significantly, making long-run PES much higher. Fresh vegetables have very low elasticity in both periods (perishability). Currencies and city land have near-zero PES in all time horizons for different reasons.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l3-q3',
        type: 'mcq',
        question: 'A supply curve for handmade artisan ceramics passes through the origin with a gentle upward slope. The PES at any point on this curve is:',
        options: [
          'Equal to 1 (unit elastic) at every point, because any straight-line supply curve through the origin has PED = PES = 1.',
          'Greater than 1 (elastic) because the curve is gently sloped.',
          'Less than 1 (inelastic) because artisan production cannot easily be scaled up.',
          'Zero (perfectly inelastic) because artisan output is limited by skill.',
        ],
        correctAnswer: 0,
        explanation: 'A straight-line supply curve that passes through the origin has PES = 1 at every point. This is a geometric property: at any point on such a line, the ratio of the percentage change in Q to the percentage change in P equals 1 exactly, regardless of slope. Only supply curves that cut the price axis (above origin) have PES > 1, and those that cut the quantity axis have PES < 1. The slope of the curve tells us nothing about elasticity by itself without knowing where the curve intersects the axes.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  {
    id: 'ib3-l4',
    moduleId: 'ib3-micro-b',
    title: 'Tax Incidence & Subsidies',
    description: 'Per-unit indirect tax diagrams, consumer/producer burden sharing, welfare loss, and subsidy analysis — all to IB SL standard.',
    order: 4,
    estimatedMinutes: 45,
    tags: ['IB', 'tax-incidence', 'subsidies', 'welfare', 'government-intervention'],
    content: {
      isStub: false,
      conceptualExplanation: `An indirect (per-unit) tax is a fixed amount charged on each unit of a good sold. On a supply-demand diagram, a per-unit tax shifts the supply curve upward (leftward) by the exact amount of the tax, since producers now require a higher market price than before to cover both their production costs and the tax payment. The vertical distance between the original and new supply curves exactly equals the per-unit tax. After the tax, a new equilibrium forms: the consumer pays a higher price (P_consumer), the producer receives a lower net price (P_producer = P_consumer minus the tax), and the quantity traded falls below the original equilibrium. The government collects tax revenue equal to the tax per unit multiplied by the new equilibrium quantity, shown on the diagram as a rectangle between P_consumer, P_producer, and Q_new.

The distribution of the tax burden — tax incidence — between consumers and producers is determined by the relative price elasticities of demand and supply. The consumer burden is the vertical distance from the original equilibrium price to the new consumer price (P_consumer − P_original), multiplied by the new quantity. The producer burden is the vertical distance from the original price to the new producer net price (P_original − P_producer), multiplied by the new quantity. Crucially, the party with the more inelastic curve faces the larger burden: if demand is more inelastic than supply, consumers bear the majority of the tax, as they cannot easily reduce quantity demanded; if supply is more inelastic, producers bear more, as they cannot easily cut back production or raise prices. IB candidates must be able to illustrate this with two contrasting diagrams showing different elasticity conditions.

The per-unit tax also generates a deadweight loss (DWL) — a triangle of welfare that is destroyed and received by nobody. This arises because the tax causes the quantity traded to fall below the allocatively efficient level. Units that would have been voluntarily traded — for which consumers' willingness to pay exceeded producers' costs — are no longer traded because the tax drives a wedge between the consumer price and the producer net price. The DWL triangle is bounded by the original supply curve, the original demand curve, and the vertical line at the new equilibrium quantity. IB evaluations of tax policy must weigh this welfare cost against the benefits of tax revenue and any externality correction the tax may achieve.`,
      realWorldHook: `The UK's sugar tax — the Soft Drinks Industry Levy, introduced in April 2018 — provides a live case study of tax incidence and reformulation behaviour. Drinks containing more than 8g of sugar per 100ml are taxed at 24 pence per litre. Within two years of the tax's announcement, producers reformulated over 50% of the affected products to bring sugar content below the threshold — a supply-side response that reduced the taxable base dramatically. For products that remained high in sugar, retailers absorbed most of the tax rather than fully passing it to consumers, reflecting competitive pressure in a market with elastic consumer demand (many low-sugar substitute drinks were readily available). The lesson: tax incidence theory predicted the outcome, but the reformulation response — reducing DWL while achieving the health objective — exceeded expectations.`,
      interactiveElement: `Draw a supply-demand diagram with a downward-sloping demand curve and an upward-sloping supply curve meeting at equilibrium (P*, Q*). Now shift the supply curve LEFT (upward) by the amount of the per-unit tax — label this new curve S_tax. Mark the new equilibrium: the consumer price P_c (where D meets S_tax) and the producer net price P_p (P_c minus the tax, read off the original S curve). Shade the consumer burden rectangle in blue (from P* to P_c, width Q_new). Shade the producer burden rectangle in orange (from P_p to P*, width Q_new). Shade the government revenue rectangle (the sum of the two burden rectangles, from P_p to P_c, width Q_new). Finally, shade the deadweight loss triangle in grey — the triangle formed between the original S, the original D, and the vertical line at Q_new, to the right of Q_new. Annotate all regions clearly. Now redraw the diagram with a perfectly inelastic demand curve and observe that the entire tax burden falls on consumers and the DWL disappears.`,
      vocabulary: [
        {
          term: 'Tax incidence',
          definition: 'The distribution of the economic burden of a tax between consumers and producers, determined by the relative price elasticities of demand and supply — not by who is legally required to pay the tax.',
          example: 'A £1 per-unit tax on cigarettes results in consumers bearing £0.85 of the burden (price rises by 85p) and producers bearing £0.15 (net price falls by 15p), because cigarette demand is highly inelastic.',
        },
        {
          term: 'Deadweight loss (DWL) from taxation',
          definition: 'The loss of total consumer and producer surplus from the reduction in quantity traded caused by the tax — welfare destroyed that is collected by nobody, not even the government. Shown as a triangle on a supply-demand diagram.',
          example: 'A per-unit tax on restaurant meals reduces the number of meals sold from 10,000 to 8,000 per week. The 2,000 meals that no longer occur represented mutually beneficial trades; their lost surplus is the DWL.',
        },
        {
          term: 'Per-unit subsidy',
          definition: 'A government payment of a fixed amount per unit of output to producers, which shifts the supply curve downward (rightward) by the subsidy amount, lowering the consumer price and increasing equilibrium quantity.',
          example: 'A £50-per-tonne subsidy on organic wheat shifts the supply curve right, reducing the price consumers pay for organic flour and increasing the quantity of organic wheat grown.',
        },
      ],
      deeperDive: `The welfare analysis of taxation can be extended by noting that the size of the DWL depends on both elasticities. When both demand and supply are inelastic, the tax causes very little reduction in quantity — the DWL triangle is small — and most of the burden is borne by consumers. When both are elastic, the tax causes a large quantity reduction, the DWL is large, and the tax is relatively less effective at raising revenue (since the tax base shrinks sharply). This is why optimal tax theory (Ramsey taxation) recommends taxing goods with inelastic demand most heavily — not only to minimise DWL, but also to maximise revenue. However, such taxes tend to be regressive, falling disproportionately on lower-income consumers who spend a larger share of income on necessities. IB HL candidates are expected to identify this equity-efficiency trade-off in extended evaluation paragraphs.

Subsidies create a mirror-image set of welfare effects. A per-unit subsidy shifts supply right, lowering the consumer price and raising the effective producer price (producer receives the market price plus the subsidy). Consumers gain surplus from the lower price; producers gain surplus from the higher effective price they receive. The government spends an amount equal to the subsidy per unit times the new quantity. If the market was initially producing at the allocatively efficient quantity, the subsidy causes overproduction and a DWL arises — the government is spending more than the total welfare gain to consumers and producers. However, if the market was underproducing due to a positive externality (e.g., education or vaccination), the subsidy correction can reduce or eliminate the pre-existing DWL, improving overall welfare. This conditional evaluation — whether the subsidy is corrective or distortionary — is the mark of a sophisticated IB answer.`,
      commonMisconceptions: [
        'The legal obligation to pay a tax does not determine who actually bears the economic burden. A supplier tax and a consumer tax of equal magnitude produce identical outcomes in equilibrium — the market equilibrium price and quantity are the same regardless of who writes the cheque to the government. Only elasticities determine the real incidence split.',
        'A per-unit tax does not shift the demand curve — it shifts the supply curve upward. Students sometimes draw the demand curve shifting left, which is incorrect. The tax affects the cost of supply, not the preferences of consumers. The consumer\'s higher price is the result of the supply shift, not a cause of any demand shift.',
        'The government revenue rectangle and the DWL triangle together constitute the original producer and consumer surplus that was lost due to the tax — but they are not the same thing. The revenue rectangle is a transfer from consumers and producers to the government (still within society); the DWL is genuinely destroyed and received by nobody. This distinction is critical for correctly assessing the net welfare impact of taxation.',
      ],
      examinerTip: `IB Paper 2 data-response questions on indirect taxes always award marks for a correctly drawn and labelled diagram. A complete IB tax diagram must show: (1) original S and D curves with equilibrium P* and Q*; (2) a new supply curve S_tax shifted upward by the tax amount, with the vertical gap labelled "tax per unit"; (3) the new equilibrium quantity Q_new; (4) P_consumer labelled on the vertical axis where D meets S_tax; (5) P_producer labelled on the vertical axis where S meets the vertical line at Q_new; (6) shaded areas for consumer burden, producer burden, and DWL. Practice drawing this diagram from memory in under three minutes, as it is one of the most frequently examined diagrams across both SL and HL papers.`,
      didYouKnow: `The concept of tax incidence dates to the physiocrats of 18th-century France, who argued that only the agricultural sector produced genuine surplus and that all taxes ultimately fell on landowners regardless of where they were formally levied. While the physiocrats were wrong about many things, their insight that the legal form of a tax differs from its economic incidence was centuries ahead of its time and remains central to modern public finance theory.`,
    },
    flashcards: [
      {
        id: 'ib3-l4-fc1',
        front: 'How does a per-unit tax appear on a supply-demand diagram, and what happens to price and quantity?',
        back: 'The supply curve shifts LEFT (upward) by the amount of the tax. The new equilibrium shows a higher consumer price (P_c), a lower producer net price (P_p = P_c − tax), and a lower quantity (Q_new). Government revenue = (P_c − P_p) × Q_new shown as a rectangle. A DWL triangle forms between Q_new and Q*, bounded by the original S and D curves.',
        tags: ['IB', 'tax', 'diagrams', 'DWL'],
      },
      {
        id: 'ib3-l4-fc2',
        front: 'How do elasticities determine who bears the greater burden of a tax?',
        back: 'The more inelastic side of the market bears the greater share of the tax burden. Inelastic demand → consumers bear more (they cannot reduce quantity easily, so price rises by close to the full tax). Inelastic supply → producers bear more (they cannot cut output easily, so net price falls by close to the full tax). The legal payer of the tax is irrelevant to real incidence.',
        tags: ['IB', 'tax-incidence', 'elasticity'],
      },
      {
        id: 'ib3-l4-fc3',
        front: 'Contrast the welfare effects of a per-unit tax when the market initially had a negative externality versus when it was already at the allocatively efficient output.',
        back: 'If the market was overproducing due to a negative externality, the tax corrects the market failure by reducing output toward the social optimum — DWL may decrease overall, improving welfare. If the market was already at the allocatively efficient output, the tax creates DWL by reducing Q below the optimum — welfare falls. The policy justification for a tax therefore depends on whether a pre-existing market failure exists.',
        tags: ['IB', 'tax', 'externalities', 'welfare'],
      },
    ],
    quiz: [
      {
        id: 'ib3-l4-q1',
        type: 'mcq',
        question: 'A per-unit tax of $4 is imposed on producers of soft drinks. The consumer price rises from $2 to $5 and the producer\'s net price falls from $2 to $1. Which statement correctly describes tax incidence?',
        options: [
          'Consumers bear $3 of the $4 tax and producers bear $1, because demand is more inelastic than supply in this market.',
          'Consumers and producers each bear $2 of the $4 tax, because the tax is split equally regardless of elasticities.',
          'Producers bear the entire $4 tax because they are legally required to pay it to the government.',
          'Consumers bear $1 of the $4 tax and producers bear $3, because supply is more inelastic than demand.',
        ],
        correctAnswer: 0,
        explanation: 'Consumer burden = P_c − P_original = $5 − $2 = $3. Producer burden = P_original − P_p = $2 − $1 = $1. Total = $4 = the full tax. Consumers bear 75% ($3) of the tax because demand is relatively inelastic in this market — consumers cannot easily reduce their quantity purchased, so most of the tax is passed on via a higher price. The legal obligation to remit tax to the government has no bearing on economic incidence.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l4-q2',
        type: 'mcq',
        question: 'A government introduces a per-unit subsidy on electric vehicles to encourage adoption. Which diagram correctly shows the welfare effects?',
        options: [
          'Supply shifts right; consumer price falls; producer effective price rises; government expenditure rectangle = subsidy × Q_new; if market was initially efficient, a DWL triangle appears reflecting overproduction.',
          'Demand shifts right; consumer price rises; producer price rises; no DWL because subsidies always improve welfare.',
          'Supply shifts left; consumer price rises; producer price falls; DWL appears from underproduction caused by the subsidy.',
          'Both supply and demand shift right; price is unchanged; quantity doubles; no government expenditure occurs.',
        ],
        correctAnswer: 0,
        explanation: 'A per-unit subsidy to producers shifts the supply curve rightward (downward) by the subsidy amount. The consumer price falls, the producer\'s effective price (market price plus subsidy) rises, and quantity increases. Government expenditure = subsidy per unit × new quantity. If the market was already at the allocatively efficient quantity, the additional output represents overproduction and a DWL triangle forms — the subsidy costs more than the welfare gain. However, if an underproduction externality existed, the subsidy may be welfare-improving by correcting the original market failure.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l4-q3',
        type: 'mcq',
        question: 'Which of the following best explains why a per-unit tax on cigarettes (which have inelastic demand) generates more government revenue but a smaller deadweight loss than the same tax on restaurant meals (which have elastic demand)?',
        options: [
          'Inelastic cigarette demand means quantity falls little when tax is imposed, keeping the tax base large and the DWL triangle small; elastic meal demand means quantity falls sharply, shrinking the tax base and creating a large DWL.',
          'Elastic demand for meals means consumers can easily afford the tax, while inelastic cigarette demand means consumers suffer more, generating more revenue.',
          'The DWL is larger for cigarettes because the tax burden falls almost entirely on consumers, creating a greater welfare loss.',
          'Government revenue is independent of demand elasticity; only supply elasticity affects how much revenue is collected.',
        ],
        correctAnswer: 0,
        explanation: 'With inelastic cigarette demand, the price rise from the tax causes only a small fall in quantity — the tax base (Q_new) remains large, so revenue (tax × Q_new) is high. The DWL triangle is also small because quantity falls only slightly from the original equilibrium. With elastic meal demand, the same tax causes a large quantity fall: the tax base shrinks (lower revenue) and the DWL triangle is large (many beneficial trades no longer occur). This is why governments raising revenue tend to prefer taxing inelastic goods, despite the equity concerns.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  {
    id: 'ib3-l5',
    moduleId: 'ib3-micro-b',
    title: 'Price Controls',
    description: 'Price ceilings — shortages and queuing; price floors — surpluses; the minimum wage debate with IB evaluation.',
    order: 5,
    estimatedMinutes: 42,
    tags: ['IB', 'price-controls', 'price-ceiling', 'price-floor', 'minimum-wage'],
    content: {
      isStub: false,
      conceptualExplanation: `A price ceiling is a legal maximum price set by the government below the free-market equilibrium price. Because the ceiling is below the price that would otherwise clear the market, quantity demanded at the ceiling price exceeds quantity supplied — a persistent shortage arises. The shortage quantity is the horizontal distance between Qs and Qd at the ceiling price. Common real-world examples include rent controls in cities (designed to keep housing affordable), fuel price caps during energy crises, and food price controls in some developing economies. The intended benefit is that those consumers who can obtain the good at the lower price enjoy a consumer surplus gain. However, the unintended consequences are significant: the shortage means some willing buyers cannot find the good at the legal price; non-price rationing mechanisms emerge (queuing, personal connections, rationing by sellers); quality may deteriorate as suppliers face reduced revenues and competition for the good intensifies; and black markets may develop where the good is illegally sold above the ceiling price.

A price floor is a legal minimum price set above the free-market equilibrium. Because the floor exceeds the market-clearing price, quantity supplied at the floor exceeds quantity demanded — a persistent surplus arises. The surplus quantity is the horizontal distance between Qs and Qd at the floor price. Classic examples include agricultural support prices (designed to protect farmers' incomes), minimum wage laws (designed to protect workers), and the EU's Common Agricultural Policy. Producers who sell at the floor price receive higher revenue per unit, but the surplus means not all output can be sold. Governments often respond to agricultural surpluses by purchasing and storing or destroying excess supply — a costly and controversial policy. Alternatively, they may implement production quotas to prevent the surplus from arising in the first place.

The minimum wage is the most politically prominent price floor in modern economies and a frequently examined IB topic. The minimum wage (W_min) is set above the equilibrium wage rate (W*) in the labour market. At W_min, the quantity of labour supplied (workers seeking employment at the higher wage) exceeds the quantity of labour demanded (jobs firms are willing to offer). This gap represents unemployment in the conventional model. However, the real-world evidence on minimum wage effects is more nuanced than the simple model suggests. Labour markets may exhibit monopsony power (a single dominant employer), in which case the minimum wage can paradoxically increase both wages and employment simultaneously. Furthermore, efficiency wage theory argues that higher wages can raise worker productivity, motivation, and retention — potentially reducing the net cost to employers. IB candidates are expected to present both sides of this debate with reference to theoretical frameworks and empirical evidence.`,
      realWorldHook: `New York City's rent control regime, dating back to World War II, illustrates both the intended and unintended consequences of price ceilings with unusual clarity. Apartments in stabilised buildings can be passed down through families and legally rented at far below market rates — one famous case involved a Manhattan two-bedroom apartment rented at $800 per month in a market where comparable units cost $6,000. The beneficiaries (sitting tenants) gain enormously; but the shortage of affordable housing for newcomers is severe. A 2019 Stanford study found that rent controls in San Francisco reduced rental housing supply by 15% as landlords converted properties to condos or allowed them to deteriorate, ultimately worsening affordability for the broader market — a textbook illustration of how well-intentioned price ceilings can undermine their own goals.`,
      interactiveElement: `Draw two separate diagrams. Left diagram — Price Ceiling: Draw a standard supply-demand diagram with equilibrium at P* and Q*. Draw a horizontal dashed line below P* labelled P_ceiling. Read off Q_s (where S meets the ceiling) and Q_d (where D meets the ceiling). Shade the shortage gap (Q_d − Q_s) along the quantity axis and label it "shortage." Annotate that the quantity traded is Q_s (the binding constraint is supply). Shade the consumer surplus gained by those who buy at P_ceiling (triangle/rectangle above P_ceiling and below D, to the left of Q_s). Right diagram — Price Floor (Minimum Wage): Draw a labour market with wage on the vertical axis and quantity of labour on the horizontal axis. Draw supply (upward-sloping — workers) and demand (downward-sloping — employers) curves intersecting at W* and L*. Draw a horizontal dashed line above W* labelled W_min. Read off L_s (labour supplied) and L_d (labour demanded). Shade the surplus gap (L_s − L_d) and label it "unemployment." Annotate the quantity of labour hired as L_d.`,
      vocabulary: [
        {
          term: 'Price ceiling',
          definition: 'A government-imposed maximum legal price set below the free-market equilibrium price, intended to keep goods affordable. Creates a persistent shortage because quantity demanded exceeds quantity supplied at the ceiling price.',
          example: 'A government caps bread prices at $1 per loaf when the market equilibrium is $1.80. At $1, consumers want 10,000 loaves per day but bakers are only willing to supply 6,000 — a shortage of 4,000 loaves arises daily.',
        },
        {
          term: 'Price floor',
          definition: 'A government-imposed minimum legal price set above the free-market equilibrium, intended to guarantee producers a higher income. Creates a persistent surplus because quantity supplied exceeds quantity demanded at the floor price.',
          example: 'An agricultural support price of $3 per kg for wheat when the equilibrium is $2.20 per kg causes farmers to supply 50,000 tonnes while buyers only demand 35,000 — a 15,000-tonne surplus must be purchased and stored by the government.',
        },
        {
          term: 'Minimum wage',
          definition: 'A legally mandated price floor in the labour market — the lowest hourly wage employers may legally pay workers. Set above the equilibrium wage to raise workers\' incomes, but predicted by the standard model to create unemployment if the labour market is competitive.',
          example: 'The UK National Living Wage was raised to £11.44 per hour in April 2024. At this floor, more workers seek employment than firms are willing to hire at the higher labour cost, creating potential unemployment — though real-world effects depend on employer market power and productivity gains.',
        },
      ],
      deeperDive: `The simple competitive model of the minimum wage predicts unemployment whenever W_min > W*. But this result depends critically on the assumption that the labour market is perfectly competitive — that many firms compete to hire workers who can freely move between employers. In reality, many local labour markets are dominated by a small number of large employers (oligopsony or monopsony), which gives them wage-setting power below the competitive wage. In a monopsonistic labour market, the employer pays workers less than their marginal revenue product and employs fewer workers than the efficient level. Introducing a minimum wage above the monopsony wage can simultaneously raise wages and increase employment up to a point, because it constrains the employer's ability to suppress wages. This theoretical result — that a price floor can increase rather than decrease quantity in an imperfect market — is among the most important insights in labour economics and is directly supported by influential empirical research, including David Card and Alan Krueger's landmark 1994 study comparing New Jersey and Pennsylvania fast-food employment following a minimum wage increase.

IB evaluation of minimum wage policy must go beyond the simple competitive model. Countervailing arguments include: the elasticity of labour demand matters enormously — if labour demand is inelastic, a minimum wage causes little unemployment even in competitive markets; employers may respond by reducing non-wage benefits (hours, flexibility, training) rather than cutting jobs; aggregate demand effects may offset job losses as low-paid workers spend a higher share of income; and distributional arguments (reducing income inequality) may justify some efficiency cost. A well-structured IB Paper 1 Part (b) essay will present the theoretical case against the minimum wage, then evaluate it using monopsony theory, empirical evidence, and equity considerations before reaching a justified conclusion.`,
      commonMisconceptions: [
        'A price ceiling does not cause a shortage because demand increases — it causes a shortage because quantity supplied falls and quantity demanded rises at the lower mandated price. The demand curve itself has not shifted; the market is simply operating at a price below equilibrium, creating a gap between the existing supply and demand at that price.',
        'A price floor does not always cause unemployment equal to the gap between L_s and L_d in the labour market. The actual employment reduction is L* − L_d (the fall in quantity demanded from equilibrium), not the full surplus gap. Workers who were employed at W* and are no longer employed at W_min represent the employment loss; the additional workers who enter the labour force seeking the higher wage (L_s − L*) were not previously employed and their inability to find jobs represents a rise in unemployment rather than a reduction in employment.',
        'Governments setting rent controls to make housing more affordable often find that the long-run effect is a reduction in rental housing supply, as landlords exit the market, convert properties to owner-occupation, or allow rental stock to deteriorate without reinvestment. This worsens affordability for new entrants to the market who cannot access controlled-rate units, illustrating that price ceilings can undermine their own stated objective over time.',
      ],
      examinerTip: `IB Paper 1 Part (b) questions on price controls frequently ask you to "evaluate the effectiveness of a price ceiling (or floor) in achieving the government's objective." A high-scoring response: (1) defines the control, draws the correct diagram with shortage or surplus clearly labelled; (2) states the intended benefit and shows it on the diagram (e.g., lower consumer price); (3) analyses at least two unintended consequences (shortages, black markets, reduced supply quality, or surpluses, government expenditure, overproduction); (4) evaluates using elasticity — a more inelastic supply curve means a price ceiling creates a smaller shortage; (5) reaches a conclusion about whether the policy achieves its objective, referencing a real-world example if possible. Never omit the diagram — it is worth dedicated marks in the mark scheme.`,
      didYouKnow: `During World War II, the United States government imposed comprehensive price ceilings on over 8 million different products through the Office of Price Administration to prevent wartime inflation from eroding the purchasing power of soldiers' families at home. The predictable result was widespread shortages and a thriving black market — economists estimate that black market prices for rationed goods ran at two to five times the legal ceiling in major cities by 1944. The episode remains one of the most extensively documented real-world demonstrations of price ceiling theory in economic history.`,
    },
    flashcards: [
      {
        id: 'ib3-l5-fc1',
        front: 'What is a price ceiling, what market condition does it create, and what are two unintended consequences?',
        back: 'A price ceiling is a maximum legal price set BELOW equilibrium. It creates a SHORTAGE (Qd > Qs at the ceiling price). Two unintended consequences: (1) non-price rationing (queuing, connections) replaces the price mechanism; (2) black markets emerge as buyers willing to pay above the ceiling find sellers willing to accept above-ceiling payments illegally.',
        tags: ['IB', 'price-ceiling', 'shortage'],
      },
      {
        id: 'ib3-l5-fc2',
        front: 'How does a price floor above equilibrium create a surplus, and what options does a government have to deal with it?',
        back: 'At the price floor (above P*), Qs > Qd — producers supply more than buyers demand, creating a surplus. Government options: (1) purchase and store the surplus (costly — used in EU agricultural policy); (2) destroy excess output; (3) export the surplus to world markets (may distort international prices); (4) introduce production quotas to prevent surplus arising in the first place.',
        tags: ['IB', 'price-floor', 'surplus', 'agricultural-policy'],
      },
      {
        id: 'ib3-l5-fc3',
        front: 'Why might a minimum wage increase employment in a monopsonistic labour market, contrary to the competitive model prediction?',
        back: 'In a monopsony, the single dominant employer pays workers below their competitive wage and hires fewer workers than the efficient level (to minimise labour costs). A minimum wage set between the monopsony wage and the competitive wage constrains the employer\'s wage-suppression ability — wages rise AND employment increases toward the competitive level. The competitive model\'s unemployment prediction only holds in competitive labour markets.',
        tags: ['IB', 'minimum-wage', 'monopsony', 'evaluation'],
      },
    ],
    quiz: [
      {
        id: 'ib3-l5-q1',
        type: 'mcq',
        question: 'A government sets a price ceiling on rental accommodation below the free-market equilibrium rent. Which of the following best describes the likely long-run outcome?',
        options: [
          'The housing shortage worsens over time as landlords exit the rental market, convert properties, or reduce maintenance investment, reducing the supply of rental units below even the short-run level.',
          'The housing shortage disappears in the long run as developers build more affordable housing in response to the government price signal.',
          'Rents rise above the ceiling in the long run as the market corrects itself automatically.',
          'Consumer surplus increases indefinitely as more households benefit from below-market rents with no adverse supply effects.',
        ],
        correctAnswer: 0,
        explanation: 'Price ceilings that reduce rents below the market-clearing rate discourage investment in rental housing. In the long run, landlords facing below-market returns sell properties to owner-occupiers, convert them to other uses, or allow quality to deteriorate. Supply of rental units shrinks, worsening the shortage beyond the initial short-run gap. This long-run supply reduction is more severe when supply is elastic in the long run (as in housing, where construction can respond over years). The price ceiling undermines its own objective of improving housing affordability for all renters.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l5-q2',
        type: 'mcq',
        question: 'In a competitive labour market, a minimum wage is set above the equilibrium wage. If the demand for labour is price inelastic, the effect on employment will be:',
        options: [
          'A relatively small fall in employment, because firms reduce quantity of labour demanded by proportionally less than the wage rise.',
          'A large fall in employment, because firms switch rapidly to capital as labour becomes more expensive.',
          'No change in employment, because inelastic labour demand means firms cannot adjust hiring.',
          'An increase in employment, because higher wages attract more workers into the labour market.',
        ],
        correctAnswer: 0,
        explanation: 'If labour demand is inelastic (|PED of labour| < 1), firms do not significantly reduce the quantity of labour they hire in response to a wage rise — perhaps because labour and capital are not easily substitutable, or because labour is a small share of total costs. The minimum wage still creates some unemployment (L_d falls below L*), but the reduction is proportionally smaller than the wage increase. This is a key evaluation point: the employment impact of a minimum wage depends critically on the elasticity of labour demand in that specific industry.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib3-l5-q3',
        type: 'mcq',
        question: 'A government introduces an agricultural price floor above the equilibrium price for dairy products. Which combination of effects is most likely?',
        options: [
          'Dairy farmers produce more milk than consumers demand at the floor price, creating a surplus; the government must either purchase the excess, impose production quotas, or allow farmers to export at potentially below-world-market prices.',
          'Dairy farmers produce less milk because the higher price reduces demand and signals lower production is needed.',
          'A shortage of dairy products arises as consumers rush to buy at the guaranteed higher price.',
          'The price floor has no effect because farmers will voluntarily supply only the quantity consumers demand.',
        ],
        correctAnswer: 0,
        explanation: 'A price floor above equilibrium creates a surplus (Qs > Qd). At the higher guaranteed price, dairy farmers are incentivised to produce more; simultaneously, consumers demand less at the higher price. The resulting surplus must be addressed by government policy: purchasing and storing the excess (as under EU dairy intervention schemes), imposing quotas to cap output, or subsidising exports (which can distort world markets and draw WTO objections). Shortages arise from price ceilings (below equilibrium), not price floors.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },
]

export const ib3MicroB: CurriculumModule = {
  ...moduleInfo,
  lessons,
}
