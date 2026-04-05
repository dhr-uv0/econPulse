import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'dc4-cases',
  title: 'Business Case Analysis — Economics in the Wild',
  description: 'Develop the skills to analyse real business and policy cases quickly and present structured recommendations.',
  tier: 'DECA' as const,
  track: 'DECA' as const,
  unit: 4,
  estimatedHours: 3,
  color: '#06b6d4',
  icon: 'Briefcase',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: The Case Framework ─────────────────────────────────────────────
  {
    id: 'dc4-l1',
    moduleId: 'dc4-cases',
    title: 'The Case Framework — Situation, Problem, Analysis, Recommendation',
    description: 'Learn a consistent case-solving framework adaptable to any DECA role-play; practise with a worked example.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['DECA', 'case-framework', 'SPAR'],
    content: {
      isStub: true,
      conceptualExplanation:
        'Every DECA role-play, no matter the event category, presents you with a business situation containing a specific challenge. High-scoring competitors do not freestyle their response — they work from a repeatable framework. The most widely used structure is SPAR: Situation (what is the context?), Problem (what is the core issue the business faces?), Analysis (what economic and business principles explain why the problem exists and what the options are?), and Recommendation (what specific course of action should the firm take, and how do you justify it?). Internalising this structure means you never freeze during the 10-minute preparation period; instead, you systematically fill in each quadrant of your mental template and emerge with a coherent narrative.\n\nThe Analysis step is where economics earns you marks. Judges award points for connecting your recommendation to underlying principles — price elasticity if you are discussing a price change, opportunity cost if you are evaluating a capital investment, or market structure if you are advising on competitive positioning. A recommendation unsupported by analysis is merely opinion; one grounded in economic reasoning is a professional business judgement. Practise SPAR on past situations until the structure is automatic, then layer in increasingly precise economic vocabulary to elevate your score from proficient to exemplary.',
    },
    flashcards: [
      {
        id: 'dc4-l1-fc1',
        front: 'What does the SPAR framework stand for in DECA case analysis?',
        back: 'Situation, Problem, Analysis, Recommendation — a four-step structure for organising any business role-play response.',
        hint: 'Think of it as telling a complete story: context → issue → reasoning → solution.',
        tags: ['DECA', 'case-framework', 'SPAR'],
      },
      {
        id: 'dc4-l1-fc2',
        front: 'Why is the Analysis step the highest-value part of a DECA role-play response?',
        back: 'Judges award marks for linking recommendations to economic and business principles. Analysis transforms a personal opinion into a justified professional judgement.',
        hint: 'Without analysis, your recommendation has no evidence behind it.',
        tags: ['DECA', 'case-framework', 'analysis'],
      },
      {
        id: 'dc4-l1-fc3',
        front: 'During the 10-minute DECA prep period, how should you allocate your time using SPAR?',
        back: 'Spend roughly 2 min on Situation/Problem (reading and framing), 5 min on Analysis (identifying relevant concepts and options), and 3 min on Recommendation (crafting a clear, justified action plan).',
        hint: 'Analysis deserves the most time because it is the hardest and highest-scoring phase.',
        tags: ['DECA', 'case-framework', 'time-management'],
      },
    ],
    quiz: [
      {
        id: 'dc4-l1-q1',
        type: 'mcq',
        question: 'A DECA judge scores two competitors who give the same recommendation. Competitor A supports it with economic analysis; Competitor B does not. What is the most likely outcome?',
        options: [
          'Competitor A scores higher because economic reasoning demonstrates professional judgement.',
          'Competitor B scores higher because brevity shows confidence.',
          'Both score equally since the recommendation itself is what matters.',
          'The outcome depends solely on presentation style, not content.',
        ],
        correctAnswer: 0,
        explanation: 'DECA judging rubrics explicitly reward the ability to connect recommendations to underlying principles. Economic reasoning elevates a response from opinion to analysis, earning significantly more marks.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc4-l1-q2',
        type: 'mcq',
        question: 'Which component of SPAR should receive the most preparation time during a DECA role-play and why?',
        options: [
          'Analysis, because identifying relevant economic concepts and evaluating options is the most cognitively demanding and highest-scoring step.',
          'Recommendation, because the judge ultimately cares only about what action you suggest.',
          'Situation, because misunderstanding context invalidates everything that follows.',
          'Problem, because naming the issue clearly is sufficient for a top score.',
        ],
        correctAnswer: 0,
        explanation: 'Analysis is both the hardest to produce under time pressure and the most heavily weighted in rubrics. Investing the majority of prep time here yields the greatest score gains.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Pricing and Revenue Strategy ────────────────────────────────────
  {
    id: 'dc4-l2',
    moduleId: 'dc4-cases',
    title: 'Pricing and Revenue Strategy',
    description: 'Apply economic concepts (price elasticity, price discrimination, bundling, dynamic pricing) to business pricing decisions.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['DECA', 'pricing', 'revenue', 'price-elasticity'],
    content: {
      isStub: true,
      conceptualExplanation:
        'Pricing is the single most powerful lever a business controls — a 1% improvement in price typically generates more profit impact than a 1% reduction in cost or a 1% increase in volume. In a DECA role-play, pricing questions are almost always disguised as broader business problems: "sales are declining," "we need to grow revenue," or "a competitor just cut prices." Recognising that these are fundamentally pricing problems allows you to bring the right economic tools to bear. Price elasticity of demand (PED) is the cornerstone: if demand is inelastic (|PED| < 1), a price increase raises total revenue; if elastic (|PED| > 1), a price decrease is needed to grow revenue. Always begin your pricing analysis by estimating whether the relevant market is more elastic or inelastic before recommending a direction.\n\nBeyond basic elasticity, sophisticated DECA competitors know three additional strategies. Price discrimination — charging different prices to different customer segments based on their willingness to pay — is practiced by airlines (early vs. last-minute fares), software firms (student vs. enterprise licences), and theme parks (age-based pricing). Bundling combines products at a package price that captures consumer surplus while raising average transaction value. Dynamic pricing (surge pricing) adjusts prices in real time based on demand conditions, used by Uber, hotels, and Amazon. Each strategy has a condition: price discrimination requires separated markets, bundling works when products have correlated demand, and dynamic pricing requires real-time data infrastructure. Matching the right strategy to the firm\'s specific context is what separates a high-scoring DECA response from a generic one.',
    },
    flashcards: [
      {
        id: 'dc4-l2-fc1',
        front: 'If price elasticity of demand is −2.5, what happens to total revenue if the firm raises price by 10%?',
        back: 'Total revenue falls. With |PED| = 2.5 (elastic demand), a 10% price increase causes a 25% drop in quantity demanded, more than offsetting the higher price and reducing TR.',
        hint: 'Elastic demand: price and total revenue move in opposite directions.',
        tags: ['DECA', 'price-elasticity', 'revenue'],
      },
      {
        id: 'dc4-l2-fc2',
        front: 'What are the three conditions required for a firm to successfully price discriminate?',
        back: '(1) Market power — the firm must be a price setter, not a price taker. (2) Separable segments — groups must have different price elasticities and cannot easily resell to each other (arbitrage must be prevented). (3) Ability to identify and separate segments.',
        hint: 'Without market power and segment separation, discrimination collapses.',
        tags: ['DECA', 'price-discrimination', 'pricing'],
      },
      {
        id: 'dc4-l2-fc3',
        front: 'How does product bundling increase a firm\'s revenue compared with selling items individually?',
        back: 'Bundling aggregates consumers with different valuations for individual items. By packaging them together at a price below the sum of individual prices, the firm captures consumers who would not buy each item separately, raising total revenue and reducing surplus left with the consumer.',
        hint: 'Think of a software suite: each tool alone may not justify its price, but the bundle does.',
        tags: ['DECA', 'bundling', 'pricing', 'revenue'],
      },
    ],
    quiz: [
      {
        id: 'dc4-l2-q1',
        type: 'mcq',
        question: 'A boutique coffee chain finds that a 5% price increase leads to only a 2% drop in cups sold. What does this imply for revenue strategy?',
        options: [
          'The chain should raise prices further because demand is inelastic and total revenue will increase.',
          'The chain should lower prices because demand is elastic and higher volume will boost revenue.',
          'The chain should hold prices constant because any change reduces profit.',
          'Elasticity is irrelevant here; only cost data can inform the pricing decision.',
        ],
        correctAnswer: 0,
        explanation: 'PED = −2%/5% = −0.4, meaning |PED| < 1 — demand is inelastic. With inelastic demand, a price increase raises total revenue because the percentage gain in price exceeds the percentage loss in quantity.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc4-l2-q2',
        type: 'mcq',
        question: 'Which of the following is the most important prerequisite for a successful price discrimination strategy?',
        options: [
          'The ability to identify different customer segments with different price elasticities and prevent resale between them.',
          'Having the lowest cost structure in the industry.',
          'Operating in a perfectly competitive market with many buyers.',
          'Charging a uniform price to all customers to avoid legal risk.',
        ],
        correctAnswer: 0,
        explanation: 'Price discrimination requires market power plus identifiable, separable segments with different willingness to pay. Without the ability to prevent arbitrage (resale), high-paying customers would simply buy from low-paying ones, eliminating the price gap.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3: Market Entry and Competitive Analysis ───────────────────────────
  {
    id: 'dc4-l3',
    moduleId: 'dc4-cases',
    title: 'Market Entry and Competitive Analysis',
    description: "Use Porter's Five Forces alongside market structure theory to evaluate a firm's entry decision; practise with a sector case.",
    order: 3,
    estimatedMinutes: 30,
    tags: ['DECA', 'market-entry', 'Porters-Five-Forces', 'competitive-analysis'],
    content: {
      isStub: true,
      conceptualExplanation:
        "Porter's Five Forces gives a DECA competitor a structured lens for assessing industry attractiveness before recommending a market entry. The five forces are: (1) Threat of new entrants — how easy is it for a rival to do what the firm is considering? High barriers (capital requirements, brand loyalty, regulation, economies of scale) reduce this threat and make the market more attractive. (2) Bargaining power of suppliers — if suppliers are concentrated, they can squeeze margins; a firm entering a market with powerful suppliers faces thin profits. (3) Bargaining power of buyers — concentrated or price-sensitive buyers can demand discounts, reducing the entrant's pricing power. (4) Threat of substitutes — if customers can easily switch to an alternative product or service, the entrant's ceiling price is constrained. (5) Intensity of rivalry — highly competitive markets with many similarly sized players compress margins and escalate marketing costs. Taken together, these five forces determine how much of the value a firm creates it will be able to capture as profit.\n\nMarket structure theory complements Porter by characterising the competitive environment. Entering a monopolistic competition market (e.g., fast casual dining) is relatively easy but delivers only normal profit in the long run. Entering an oligopoly (e.g., commercial aviation) requires overcoming enormous capital barriers but may yield supernormal profit if the entrant can carve out a sustainable niche. In your DECA role-play, always identify the structure, apply the relevant forces, and then make an explicit recommendation: enter, enter with a differentiation strategy, pursue a partnership instead of solo entry, or avoid the market entirely. Judges reward the specificity of your strategic reasoning.",
    },
    flashcards: [
      {
        id: 'dc4-l3-fc1',
        front: "Name Porter's Five Forces and the central question each asks.",
        back: '(1) Threat of new entrants: How easy is it to enter? (2) Supplier power: Can suppliers squeeze our margins? (3) Buyer power: Can customers drive prices down? (4) Threat of substitutes: Can customers switch away? (5) Rivalry: How intense is competition among existing players?',
        hint: 'Think of the firm surrounded by five external pressures: new rivals, upstream, downstream, alternatives, and current peers.',
        tags: ['DECA', 'Porters-Five-Forces', 'market-entry'],
      },
      {
        id: 'dc4-l3-fc2',
        front: 'What market structure features make an industry more attractive to enter?',
        back: 'High barriers to entry (protecting incumbents), low supplier and buyer power (preserving margins), few substitutes (maintaining pricing power), and low rivalry intensity (reducing competitive pressure on prices). Together these allow a new entrant to earn supernormal profit.',
        hint: 'Fewer and weaker forces = more profit potential for a new entrant.',
        tags: ['DECA', 'market-entry', 'competitive-analysis'],
      },
      {
        id: 'dc4-l3-fc3',
        front: 'Why might a firm choose a joint venture or partnership over solo market entry?',
        back: 'When entry barriers are high (capital, regulatory approval, local knowledge), a partnership lets the firm share costs and risks, access an established partner\'s distribution network, and overcome barriers faster. It sacrifices some profit share but reduces the probability of failure.',
        hint: 'High barriers + limited resources = share the burden.',
        tags: ['DECA', 'market-entry', 'strategy'],
      },
    ],
    quiz: [
      {
        id: 'dc4-l3-q1',
        type: 'mcq',
        question: "According to Porter's Five Forces, which scenario indicates the LEAST attractive market for a new entrant?",
        options: [
          'High supplier concentration, strong buyer bargaining power, many substitutes, and fierce incumbent rivalry.',
          'Low capital requirements, fragmented suppliers, price-insensitive buyers, and few substitutes.',
          'Moderate rivalry, some supplier power, few substitutes, and high brand loyalty among existing customers.',
          'Government regulation that restricts new entrants but does not affect pricing.',
        ],
        correctAnswer: 0,
        explanation: 'When all five forces are unfavourable simultaneously — concentrated suppliers, powerful buyers, available substitutes, and intense rivalry — the industry destroys entrant value. This is the least attractive scenario for new entry.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc4-l3-q2',
        type: 'mcq',
        question: 'A tech startup plans to enter the cloud computing market dominated by three large incumbents. Which market structure best describes this industry and what does it imply for entry strategy?',
        options: [
          'Oligopoly — the startup should differentiate sharply (e.g., niche vertical focus) because price competition against larger incumbents with scale advantages would likely fail.',
          'Perfect competition — the startup can enter freely at the market price and earn normal profit.',
          'Monopoly — the market is closed to new entrants by definition.',
          'Monopolistic competition — the startup can enter easily because barriers are low and products are differentiated.',
        ],
        correctAnswer: 0,
        explanation: 'A market with three dominant players is an oligopoly. Incumbents have massive scale economies and established customer relationships. A new entrant cannot win on price; differentiation into an underserved niche is the only viable strategy.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4: Cost Analysis and Break-Even ────────────────────────────────────
  {
    id: 'dc4-l4',
    moduleId: 'dc4-cases',
    title: 'Cost Analysis and Break-Even',
    description: 'Calculate fixed costs, variable costs, break-even point, and contribution margin; use in role-play financial justifications.',
    order: 4,
    estimatedMinutes: 30,
    tags: ['DECA', 'break-even', 'contribution-margin', 'fixed-variable-costs'],
    content: {
      isStub: true,
      conceptualExplanation:
        'Every business decision has a cost dimension, and DECA judges reward competitors who can quantify their recommendations. The fundamental distinction is between fixed costs — expenses that do not vary with output (rent, salaried staff, insurance) — and variable costs — expenses that rise with each additional unit produced or sold (materials, hourly labour, packaging). Total cost is the sum of both. Contribution margin (CM) is the amount each unit sold contributes toward covering fixed costs and, eventually, generating profit: CM = Selling Price − Variable Cost per Unit. A positive CM means every sale moves the business closer to breaking even; a negative CM means every sale deepens the loss and the product should be discontinued.\n\nThe break-even point (BEP) is the output level at which total revenue exactly equals total cost — neither profit nor loss. The formula is BEP (units) = Fixed Costs ÷ Contribution Margin per Unit. In a DECA role-play, the break-even calculation is your financial anchor: it tells a judge exactly how many units or how much revenue the firm must generate before a proposed investment pays off. For instance, if you recommend a $50,000 marketing campaign, you can immediately calculate how many additional units must be sold to justify that spend. Presenting this figure — rather than just asserting "the campaign will increase sales" — demonstrates financial literacy and dramatically elevates your score.',
    },
    flashcards: [
      {
        id: 'dc4-l4-fc1',
        front: 'What is the formula for break-even point in units?',
        back: 'BEP (units) = Fixed Costs ÷ Contribution Margin per Unit, where Contribution Margin per Unit = Selling Price − Variable Cost per Unit.',
        hint: 'Fixed costs are the target; each unit\'s contribution margin is the progress toward that target.',
        tags: ['DECA', 'break-even', 'formula'],
      },
      {
        id: 'dc4-l4-fc2',
        front: 'A firm has fixed costs of $120,000, sells each unit for $40, and incurs $16 of variable cost per unit. What is the break-even quantity?',
        back: 'CM = $40 − $16 = $24. BEP = $120,000 ÷ $24 = 5,000 units.',
        hint: 'Calculate contribution margin first, then divide fixed costs by it.',
        tags: ['DECA', 'break-even', 'quantitative'],
      },
      {
        id: 'dc4-l4-fc3',
        front: 'Why should a DECA competitor calculate break-even when recommending a new investment?',
        back: 'Break-even converts a qualitative recommendation into a quantifiable target. Telling a judge "we need 5,000 units to recover our investment" demonstrates financial literacy and gives the recommendation credibility, lifting the score on the financial analysis criterion.',
        hint: 'Numbers anchor arguments; assertions without data are opinions.',
        tags: ['DECA', 'break-even', 'role-play'],
      },
    ],
    quiz: [
      {
        id: 'dc4-l4-q1',
        type: 'mcq',
        question: 'A food truck has monthly fixed costs of $6,000. Each meal sells for $12 and costs $4 in ingredients and packaging. What is the monthly break-even number of meals?',
        options: [
          '750 meals',
          '500 meals',
          '1,500 meals',
          '600 meals',
        ],
        correctAnswer: 0,
        explanation: 'CM per meal = $12 − $4 = $8. BEP = $6,000 ÷ $8 = 750 meals. The food truck must sell 750 meals per month before earning any profit.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc4-l4-q2',
        type: 'mcq',
        question: 'Which of the following correctly describes why contribution margin is more useful than gross profit for break-even analysis?',
        options: [
          'Contribution margin isolates the per-unit surplus after variable costs, making it directly divisible into fixed costs to find the break-even quantity.',
          'Contribution margin includes all costs and therefore provides a complete picture of profitability.',
          'Gross profit accounts for fixed costs per unit, making it the appropriate metric for break-even calculations.',
          'Contribution margin and gross profit are identical when the firm produces at capacity.',
        ],
        correctAnswer: 0,
        explanation: 'Contribution margin (Price − Variable Cost) measures what each unit contributes to fixed cost recovery. Dividing fixed costs by this per-unit figure gives the exact break-even quantity. Gross profit includes fixed cost allocations, making it unsuitable for this direct calculation.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5: Inflation and Business Strategy ─────────────────────────────────
  {
    id: 'dc4-l5',
    moduleId: 'dc4-cases',
    title: 'Economic Trends Case Study — Inflation and Business Strategy',
    description: 'Analyse how a firm should adjust pricing, sourcing, and financing strategy during a high-inflation environment — 2022-24 case material.',
    order: 5,
    estimatedMinutes: 35,
    tags: ['DECA', 'inflation', 'pricing-strategy', 'supply-chain'],
    content: {
      isStub: true,
      conceptualExplanation:
        'The 2022–2024 inflation cycle was the most consequential macroeconomic event for businesses in four decades, with US CPI peaking at 9.1% in June 2022 before the Federal Reserve\'s aggressive rate-hiking campaign gradually pulled it back toward 3%. For DECA competitors, this period is a live case study in how macroeconomic forces translate into firm-level decisions. The core challenge: input costs (energy, raw materials, logistics) rose sharply while consumer spending power eroded, squeezing margins from both sides. Firms faced a painful choice — pass costs on to consumers (raising prices, risking volume loss if demand is elastic) or absorb costs (protecting volume but compressing profit margins). The elasticity of demand for the firm\'s product was the decisive variable. Companies selling necessities (grocery staples, utilities) successfully passed costs through; companies selling discretionary goods (fast casual dining, apparel) were forced to absorb more because customer defection was a real risk.\n\nThree strategic responses dominated the business headlines. First, shrinkflation — reducing product size or weight while maintaining the sticker price — allowed firms to raise the effective unit price without triggering the psychological resistance of a visible price increase. Second, supply chain diversification — reducing dependence on single-source suppliers or single geographies — became a priority as geopolitical risk and logistics bottlenecks compounded raw material cost volatility. Third, firms with pricing power locked in long-term supply contracts at fixed prices, transferring inflation risk to suppliers, while simultaneously moving to floating-rate pricing with customers. In a DECA role-play set in a high-inflation context, demonstrating awareness of these strategies and choosing among them based on the firm\'s demand elasticity, cost structure, and competitive position will separate a proficient response from an outstanding one.',
    },
    flashcards: [
      {
        id: 'dc4-l5-fc1',
        front: 'What is "shrinkflation" and why do firms use it instead of explicit price increases?',
        back: 'Shrinkflation is reducing a product\'s quantity or size while keeping the price the same, effectively raising the price per unit. Firms use it to avoid the psychological resistance consumers feel toward visible price increases, preserving volume while recovering rising costs.',
        hint: 'A "same price, less product" strategy hides the real price increase.',
        tags: ['DECA', 'inflation', 'pricing-strategy'],
      },
      {
        id: 'dc4-l5-fc2',
        front: 'How does price elasticity of demand determine whether a firm can pass inflation costs to consumers?',
        back: 'If demand is inelastic (|PED| < 1), the firm can raise prices with minimal volume loss — cost pass-through is feasible. If demand is elastic (|PED| > 1), price increases cause significant volume loss, so the firm must absorb more of the cost increase to protect revenue.',
        hint: 'Elasticity is the filter between cost pressure and pricing action.',
        tags: ['DECA', 'inflation', 'price-elasticity'],
      },
      {
        id: 'dc4-l5-fc3',
        front: 'Name two supply chain strategies firms adopted during 2022–2024 inflation to protect margins.',
        back: '(1) Supplier diversification — sourcing from multiple geographies to reduce dependence on any single supplier and mitigate geopolitical and logistics risk. (2) Long-term fixed-price contracts — locking in input costs before further price increases, transferring inflation risk to the supplier.',
        hint: 'One strategy spreads the risk; the other freezes it.',
        tags: ['DECA', 'inflation', 'supply-chain'],
      },
    ],
    quiz: [
      {
        id: 'dc4-l5-q1',
        type: 'mcq',
        question: 'During the 2022 inflation surge, a grocery retailer successfully raised prices by 8% with only a 2% drop in units sold, while a fast-casual restaurant raised prices by 5% and saw a 12% drop in visits. What explains the difference?',
        options: [
          'Grocery items are necessities with inelastic demand; restaurant meals are discretionary with elastic demand, so consumers substituted away more readily.',
          'The grocery retailer had superior marketing, which offset the price increase effect.',
          'The restaurant faced more intense competition, which is unrelated to elasticity.',
          'Inflation affects necessity goods more than discretionary goods, so grocery prices rose more in absolute terms.',
        ],
        correctAnswer: 0,
        explanation: 'The key variable is price elasticity. Groceries are necessities — consumers must buy them regardless of price increases (inelastic demand). Restaurant meals are discretionary — consumers can easily substitute at-home cooking when prices rise (elastic demand). The demand response directly reflects this elasticity difference.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc4-l5-q2',
        type: 'mcq',
        question: 'A manufacturing firm faces rapidly rising raw material costs. Which financing strategy best protects its profit margin during a sustained inflation period?',
        options: [
          'Lock in long-term fixed-price supply contracts to cap input costs, and issue fixed-rate debt before rates rise further to control financing costs.',
          'Increase reliance on spot-market purchasing to benefit from potential future price drops.',
          'Expand production immediately using variable-rate debt to grow revenue faster than costs.',
          'Reduce inventory to zero to eliminate holding costs, relying on just-in-time supply.',
        ],
        correctAnswer: 0,
        explanation: 'Fixed-price supply contracts eliminate input cost uncertainty by transferring inflation risk to suppliers. Fixed-rate debt locks in borrowing costs before central bank rate hikes raise interest expenses. Together, these strategies protect margins on both the cost and financing dimensions during inflation.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 6: Interest Rate Cycle and Capital Allocation ──────────────────────
  {
    id: 'dc4-l6',
    moduleId: 'dc4-cases',
    title: 'Economic Trends Case Study — Interest Rate Cycle and Capital Allocation',
    description: 'Analyse how rising and falling interest rates affect real estate, tech growth stocks, and small business lending — 2023-24 case material.',
    order: 6,
    estimatedMinutes: 35,
    tags: ['DECA', 'interest-rates', 'capital-allocation', 'real-estate'],
    content: {
      isStub: true,
      conceptualExplanation:
        'Interest rates are the price of money, and when that price changes dramatically — as it did from 2022 to 2024, when the Federal Reserve raised the federal funds rate from near zero to 5.25–5.50% — the consequences ripple through every asset class and business model. The transmission mechanism works through three channels. First, the cost of debt rises: mortgages, business loans, and corporate bonds all become more expensive, directly raising the cost of capital for any investment that relies on borrowed funds. Second, the discount rate used to value future cash flows increases. This is particularly punishing for high-growth technology firms, whose valuations depend heavily on earnings projected far into the future — a higher discount rate shrinks the present value of those distant earnings dramatically, even if the earnings forecast itself is unchanged. Third, consumer and business borrowing falls as higher rates make credit less affordable, reducing aggregate demand.\n\nReal estate is the most rate-sensitive sector in the economy. As mortgage rates climbed from 3% to over 7% in 2022–2023, monthly payment costs on a median-priced US home roughly doubled, pricing millions of potential buyers out of the market and causing transaction volumes to collapse even as prices remained sticky (few existing owners were willing to give up their locked-in 3% mortgages by selling). For DECA role-plays involving real estate development, retail expansion requiring new leases, or any capital-intensive business considering a major investment, the interest rate environment is the first contextual factor to assess. A well-structured recommendation will acknowledge the rate cycle, assess whether rates are rising or falling, and adjust the timing and financing structure of the recommended investment accordingly.',
    },
    flashcards: [
      {
        id: 'dc4-l6-fc1',
        front: 'Why do rising interest rates hit high-growth technology firms harder than mature, cash-generating businesses?',
        back: 'Tech growth firms derive most of their value from future earnings discounted back to the present. A higher discount rate reduces the present value of those distant cash flows more steeply than it affects mature firms whose earnings are near-term and already being collected.',
        hint: 'The further away the cash flow, the more a higher discount rate shrinks it.',
        tags: ['DECA', 'interest-rates', 'valuation'],
      },
      {
        id: 'dc4-l6-fc2',
        front: 'How did rising mortgage rates in 2022–2023 create a "lock-in effect" in the US housing market?',
        back: 'Homeowners who had locked in 3% mortgages were unwilling to sell and take on a new mortgage at 7%+, dramatically reducing housing supply. Low supply kept prices elevated even as demand fell, resulting in a low-transaction, high-price freeze rather than the typical price correction rising rates would normally produce.',
        hint: 'Sellers who are also buyers face the same higher rates — so they simply stay put.',
        tags: ['DECA', 'interest-rates', 'real-estate'],
      },
      {
        id: 'dc4-l6-fc3',
        front: 'In a rising interest rate environment, how should a small business adjust its capital allocation strategy?',
        back: 'Prioritise projects with short payback periods (returns are near-term and less sensitive to discount rate changes), use fixed-rate financing if borrowing is unavoidable, delay capital-intensive discretionary investments, and build cash reserves to reduce dependence on expensive external credit.',
        hint: 'High rates punish long-horizon investments and reward cash efficiency.',
        tags: ['DECA', 'interest-rates', 'capital-allocation'],
      },
    ],
    quiz: [
      {
        id: 'dc4-l6-q1',
        type: 'mcq',
        question: 'A DECA role-play asks you to advise a commercial real estate developer on whether to begin a new office tower project. The central bank has just raised rates to a 15-year high. What is the most economically sound recommendation?',
        options: [
          'Delay the project: higher rates increase borrowing costs, reduce the present value of future rental income, and suppress demand from potential tenant firms also facing higher financing costs.',
          'Proceed immediately: rising rates signal a strong economy, which increases demand for office space.',
          'Proceed with maximum leverage to lock in current construction costs before they rise further.',
          'The interest rate environment is irrelevant to real estate decisions; occupancy rates are the only variable that matters.',
        ],
        correctAnswer: 0,
        explanation: 'High interest rates raise the cost of construction loans, increase the discount rate applied to future rental income (reducing project NPV), and constrain potential tenants\' own expansion budgets. All three effects point toward delaying or restructuring the project.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc4-l6-q2',
        type: 'mcq',
        question: 'Which type of firm\'s stock price is most negatively affected by an unexpected increase in interest rates, and why?',
        options: [
          'High-growth technology firms, because most of their value lies in future cash flows that are more heavily discounted when rates rise.',
          'Mature consumer staples firms, because they pay large dividends that become less attractive relative to bonds.',
          'Small-cap value firms, because they have the most debt relative to their assets.',
          'Export-oriented manufacturers, because a higher domestic interest rate always strengthens the currency and hurts export competitiveness.',
        ],
        correctAnswer: 0,
        explanation: 'High-growth tech firms are valued primarily on discounted future earnings. A higher interest rate raises the discount rate, reducing the present value of those distant cash flows far more than it affects firms whose earnings are concentrated in the near term. This is why tech stocks fell sharply in 2022 when the Fed tightened aggressively.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
