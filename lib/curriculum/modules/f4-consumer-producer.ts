import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f4-consumer-producer',
  title: 'Consumer and Producer Theory Basics',
  description: 'Understand the logic of utility for consumers and profit for producers at an introductory level.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 4,
  estimatedHours: 2,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 1 — Total and Marginal Utility
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f4-l1',
    moduleId: 'f4-consumer-producer',
    title: 'Total and Marginal Utility',
    description:
      'Introduce utility as a measure of satisfaction, define diminishing marginal utility, and connect it to the slope of demand.',
    order: 1,
    estimatedMinutes: 25,
    tags: ['utility', 'marginal-utility', 'DMU'],
    content: {
      conceptualExplanation: `Utility is economists' shorthand for satisfaction or benefit. When you buy a cup of coffee, you receive some amount of utility — a feeling of wellbeing that motivates the purchase in the first place. Economists do not try to measure utility in precise units; instead they use the concept to explain why people make the choices they do. Total utility (TU) is the cumulative satisfaction gained from consuming a given quantity of a good, while marginal utility (MU) is the additional satisfaction gained from consuming one more unit.

Imagine you sit down to eat slices of pizza after skipping lunch. The first slice is wonderful — your marginal utility is very high. The second slice is still enjoyable, though not quite as thrilling. By the third or fourth slice you are getting full, and each additional slice adds noticeably less to your overall happiness. This pattern — where each successive unit adds less satisfaction than the one before — is known as the Law of Diminishing Marginal Utility (DMU). It holds for virtually every normal good when enough units are consumed in a short period.

Mathematically, total utility rises so long as marginal utility is positive. If MU falls to zero, TU has reached its maximum — the consumer is completely satiated and would not bother consuming a further unit even if it were free. Should you somehow be forced to consume beyond that point (imagine a fifth slice when you are already stuffed), MU could become negative, meaning total utility would actually fall. Rational consumers stop consuming before that point under normal conditions.

The connection to demand is direct and powerful. A consumer is willing to pay for a unit only as long as the marginal utility of that unit is at least as large as the price. Because MU declines as quantity rises, the amount a consumer is willing to pay also declines — which is precisely why demand curves slope downward. In essence, the Law of Diminishing Marginal Utility provides the individual-level explanation for one of the most fundamental facts in all of economics: as price falls, quantity demanded rises.`,

      prerequisiteRecap: `The previous module on elasticity showed that price elasticity of supply depends on factors like spare capacity, time horizon, and storability — all of which affect how easily producers can expand output. Consumer theory now shifts attention to the buyer's side, explaining why demand curves slope downward through the law of diminishing marginal utility, which underpins the individual-level rationale for the demand relationships studied throughout module 2.`,

      recallQuestions: [
        {
          id: 'f4-l1-recall-1',
          type: 'mcq' as const,
          question: 'A factory is operating at 40% of its maximum capacity. Compared with a factory at 95% capacity, how does this affect its price elasticity of supply?',
          options: [
            'Supply is more inelastic because the factory has too many idle resources.',
            'Supply is more elastic because the factory can expand output quickly without significant new investment.',
            'Supply is perfectly inelastic because capacity limits always constrain supply.',
            'Supply elasticity is unaffected by spare capacity.',
          ],
          correctAnswer: 1,
          explanation: 'High spare capacity makes supply more elastic: a factory running at 40% capacity can increase output rapidly in response to a price rise without needing to build new facilities or wait for capital investment. A factory at 95% capacity would face serious constraints and have more inelastic supply.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook:
        'Streaming services know all about diminishing marginal utility. The first few episodes of a gripping new series feel unmissable, but by season four of a mediocre show, most subscribers have stopped watching. Platforms use viewing data as a proxy for marginal utility when deciding whether to renew a series — once audience engagement (a real-world MU signal) drops below a threshold, the show is cancelled.',

      vocabulary: [
        {
          term: 'Utility',
          definition:
            'A measure of the satisfaction or benefit a consumer derives from consuming a good or service.',
          example:
            'A student gains utility from buying textbooks because they help with exam preparation.',
        },
        {
          term: 'Total Utility (TU)',
          definition:
            'The overall satisfaction obtained from consuming all units of a good up to a given quantity.',
          example:
            'After drinking three glasses of lemonade on a hot day, your total utility is the sum of satisfaction from all three glasses.',
        },
        {
          term: 'Marginal Utility (MU)',
          definition:
            'The additional satisfaction gained from consuming one more unit of a good, holding everything else constant.',
          example:
            'The marginal utility of a fourth cookie is the extra satisfaction gained from that cookie alone, beyond what the first three provided.',
        },
        {
          term: 'Law of Diminishing Marginal Utility (DMU)',
          definition:
            'The principle that as a consumer consumes more units of a good in a given time period, each additional unit yields less extra satisfaction than the previous one.',
          example:
            'The first slice of birthday cake is delicious, but the fifth slice brings far less joy — sometimes none at all.',
        },
      ],

      deeperDive: `Cardinal versus ordinal utility is a distinction worth knowing. Early economists believed utility could be measured in exact numerical "utils" — this is cardinal utility. Modern economists generally prefer the ordinal approach, which only requires that consumers can rank bundles from most to least preferred without assigning specific numbers. The downward-sloping demand curve can be justified either way, but most intermediate courses rely on ordinal reasoning through indifference curve analysis.

Marginal utility also explains the diamond-water paradox that puzzled thinkers before economics matured. Water is essential for survival and has enormous total utility, yet it is cheap. Diamonds are frivolous luxuries with modest total utility, yet they are extremely expensive. The solution is that price reflects marginal, not total, utility. Water is so plentiful that its marginal utility — the value of one more litre — is very low. Diamonds are scarce, so each additional diamond commands high marginal utility, and consumers are willing to pay accordingly.`,

      commonMisconceptions: [
        'Diminishing marginal utility does not mean you dislike a good more over time — it just means each additional unit in the same sitting adds less satisfaction than the last. You can still love pizza; you just value the fifth slice less than the first.',
        'Total utility does not fall when marginal utility is diminishing. As long as MU is positive, TU is still rising — just at a slower rate. TU only falls when MU turns negative.',
        'Utility is not the same as price. A good can have high utility (like tap water) and a low price, or low utility (like a novelty item you rarely use) and a high price, depending on its scarcity.',
      ],

      examinerTip:
        'If asked to explain why demand curves slope downward, explicitly link it to the Law of Diminishing Marginal Utility: as a consumer buys more of a good, MU falls, so their willingness to pay falls — meaning lower prices are needed to induce each additional unit of purchase. Examiners award marks for this causal chain, not just a statement that "demand slopes down."',

      didYouKnow:
        'The concept of utility was introduced by the philosopher and economist Jeremy Bentham in the late 18th century as part of his theory of utilitarianism — the idea that good actions are those that maximise overall happiness. Economists borrowed the term but stripped it of its moral dimension, using it purely as a descriptive tool for explaining choice.',
    },
    flashcards: [
      {
        id: 'f4-l1-fc1',
        front: 'What is utility in economics?',
        back: 'Utility is a measure of the satisfaction or benefit a consumer derives from consuming a good or service. It explains why people are willing to pay for things.',
        hint: 'Think of it as a happiness score for consumption.',
        tags: ['utility', 'foundations'],
      },
      {
        id: 'f4-l1-fc2',
        front: 'What is the difference between total utility and marginal utility?',
        back: 'Total utility (TU) is the cumulative satisfaction from all units consumed so far. Marginal utility (MU) is the extra satisfaction from consuming one additional unit.',
        hint: 'Total = running sum; Marginal = the next one only.',
        tags: ['utility', 'marginal-utility'],
      },
      {
        id: 'f4-l1-fc3',
        front: 'State the Law of Diminishing Marginal Utility.',
        back: 'As a consumer consumes successive units of a good within a given time period, the marginal utility of each additional unit falls.',
        hint: 'More = less extra satisfaction each time.',
        tags: ['DMU', 'marginal-utility'],
      },
      {
        id: 'f4-l1-fc4',
        front: 'What happens to total utility when marginal utility reaches zero?',
        back: 'Total utility is at its maximum when MU = 0. The consumer is fully satiated; consuming another unit would not add any satisfaction.',
        hint: 'Zero MU → TU peaks.',
        tags: ['utility', 'DMU'],
      },
      {
        id: 'f4-l1-fc5',
        front: 'How does diminishing marginal utility explain the downward slope of a demand curve?',
        back: 'Because each additional unit of a good yields less satisfaction, consumers are only willing to pay a lower price for it. Lower willingness to pay at higher quantities produces a downward-sloping demand curve.',
        hint: 'Less MU → less willingness to pay → demand slopes down.',
        tags: ['DMU', 'demand', 'marginal-utility'],
      },
    ],
    quiz: [
      {
        id: 'f4-l1-q1',
        type: 'mcq',
        question:
          'A consumer eats three chocolate bars. The first gives 20 utils, the second 12 utils, and the third 5 utils of satisfaction. What is the total utility after three bars?',
        options: ['37 utils', '20 utils', '5 utils', '12 utils'],
        correctAnswer: 0,
        explanation:
          'Total utility is the sum of all marginal utilities: 20 + 12 + 5 = 37 utils.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q2',
        type: 'mcq',
        question:
          'According to the Law of Diminishing Marginal Utility, which of the following best explains why demand curves slope downward?',
        options: [
          'As consumers buy more of a good, each additional unit gives less satisfaction, so they are only willing to pay a lower price.',
          'As the price of a good rises, producers supply less of it.',
          'Consumers always prefer cheaper goods regardless of quantity.',
          'Total utility falls as more units are consumed.',
        ],
        correctAnswer: 0,
        explanation:
          'DMU means MU falls with each unit, reducing willingness to pay. Lower willingness to pay at higher quantities is precisely what a downward-sloping demand curve shows.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q3',
        type: 'mcq',
        question:
          'At which point does a rational consumer stop consuming more of a free good (price = 0)?',
        options: [
          'When marginal utility falls to zero',
          'When total utility is at its lowest',
          'When marginal utility equals price',
          'When total utility starts rising',
        ],
        correctAnswer: 0,
        explanation:
          'With a zero price, a rational consumer keeps consuming until MU = 0 (TU is maximised). Consuming beyond that would yield negative MU, reducing total utility.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 2 — Consumer Surplus — The Buyer's Bonus
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f4-l2',
    moduleId: 'f4-consumer-producer',
    title: "Consumer Surplus — The Buyer\'s Bonus",
    description:
      "Define consumer surplus as the gap between willingness to pay and actual price; show it as area under the demand curve above price.",
    order: 2,
    estimatedMinutes: 20,
    tags: ['consumer-surplus', 'welfare'],
    content: {
      prerequisiteRecap: `The previous lesson established that marginal utility falls with each additional unit consumed — the Law of Diminishing Marginal Utility — and that consumers are only willing to pay a price equal to the marginal utility of the unit. Consumer surplus is built directly on this: because MU exceeds price for most units purchased, buyers enjoy a welfare gain that can be measured and shown on a supply-and-demand diagram.`,

      recallQuestions: [
        {
          id: 'f4-l2-recall-1',
          type: 'mcq' as const,
          question: 'A consumer eats four slices of toast. The marginal utility of each slice is 10, 7, 4, and 1 utils respectively. What is the total utility after four slices?',
          options: [
            '22 utils',
            '10 utils',
            '1 utils',
            '40 utils',
          ],
          correctAnswer: 0,
          explanation: 'Total utility is the sum of all marginal utilities: 10 + 7 + 4 + 1 = 22 utils. Note that total utility is still rising (each MU is positive), but at a decreasing rate — consistent with the Law of Diminishing Marginal Utility.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f4-l2-recall-2',
          type: 'mcq' as const,
          question: 'According to the Law of Diminishing Marginal Utility, why does a consumer\'s willingness to pay fall as they consume more units of a good?',
          options: [
            'Because the quality of the good deteriorates with each successive unit.',
            'Because each additional unit provides less extra satisfaction, so the consumer is only prepared to pay a lower price for it.',
            'Because the consumer\'s income decreases as they spend more.',
            'Because the market price automatically falls as more units are sold.',
          ],
          correctAnswer: 1,
          explanation: 'Willingness to pay reflects marginal utility. As MU declines with each successive unit, the maximum price a consumer will pay for the next unit also falls — this is precisely why demand curves slope downward and why there is a gap between willingness to pay and actual price for early units.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `Imagine you are heading to a Saturday market and you would happily pay up to £10 for a jar of artisan honey. When you get there, the price is only £6. You hand over £6, pocket the jar, and walk away £4 better off in a very real sense — you received something worth £10 to you but only paid £6. That £4 difference is consumer surplus (CS). In formal terms, consumer surplus is the difference between the maximum amount a consumer is willing to pay for a good and the price they actually pay.

Consumer surplus can be visualised on a demand-and-supply diagram. The demand curve represents consumers' willingness to pay at every quantity. At the market equilibrium price (P*), all consumers who were willing to pay more than P* buy the good and enjoy a surplus. Graphically, consumer surplus is the triangular area below the demand curve and above the equilibrium price line, stretching from zero to the equilibrium quantity. The shape is a triangle because demand curves are typically drawn as straight lines for simplicity: its area equals ½ × base × height, where the base is the equilibrium quantity and the height is the maximum willingness to pay minus the equilibrium price.

The concept reveals something profound: markets generate value beyond the simple exchange of money for goods. Even at a single fixed price, different consumers value the good differently. High-value consumers — those who would have paid much more — capture large surpluses, while the marginal buyer (who valued it at exactly the market price) captures zero surplus but still chooses to buy. Summing these individual surpluses across all buyers gives total consumer surplus, a key measure of buyer welfare in a market.

Consumer surplus rises when price falls and falls when price rises, which is why consumers cheer for sales and wince at price hikes. It also grows when demand increases — if consumers value the good more highly at every quantity, the demand curve shifts outward, raising the area of the CS triangle. Conversely, taxes, price floors, or monopoly pricing that drive up the market price all reduce consumer surplus, shrinking buyer welfare and creating what economists call deadweight loss.`,

      realWorldHook:
        'Airline pricing is essentially a quest to eliminate consumer surplus. Airlines use dynamic pricing algorithms to charge each traveller as close to their maximum willingness to pay as possible — business travellers who book last-minute pay far more than holiday-makers who booked months ahead. Every time an airline succeeds, it transfers what would have been consumer surplus directly into its own revenue. Perfect price discrimination — charging every buyer their exact reservation price — would leave consumers with zero surplus and hand it all to the producer.',

      vocabulary: [
        {
          term: 'Consumer Surplus (CS)',
          definition:
            'The difference between the maximum price a consumer is willing to pay for a good and the price they actually pay.',
          example:
            'If you value a concert ticket at £80 but buy it for £50, your consumer surplus is £30.',
        },
        {
          term: 'Willingness to Pay (WTP)',
          definition:
            'The maximum price a consumer would be prepared to pay for a given unit of a good, reflecting its marginal utility to them.',
          example:
            "A coffee addict's WTP for a morning espresso may be £5, even if the café charges only £2.50.",
        },
        {
          term: 'Reservation Price',
          definition:
            'Another term for the maximum willingness to pay — the price at which a consumer is indifferent between buying and not buying.',
          example:
            'If your reservation price for a used bicycle is £150, you buy at any price at or below £150.',
        },
        {
          term: 'Deadweight Loss',
          definition:
            'The loss of total surplus (consumer surplus plus producer surplus) that occurs when a market is not at its competitive equilibrium, often caused by taxes, price controls, or monopoly pricing.',
          example:
            'A tax that raises the price of a good above equilibrium reduces the quantity traded, creating a deadweight loss triangle on the supply-demand diagram.',
        },
      ],

      deeperDive: `Consumer surplus is central to cost-benefit analysis and government policy. When governments evaluate whether to build a new road, they often estimate the consumer surplus generated for travellers — the difference between what drivers would be willing to pay for the time saved and the toll actually charged. If total consumer surplus plus other benefits exceed construction costs, the project passes the cost-benefit test.

Price discrimination is a strategy firms use to capture consumer surplus for themselves. A first-degree (perfect) price discriminating firm charges every buyer their exact reservation price, converting all consumer surplus into producer revenue and eliminating deadweight loss entirely — though this is a theoretical ideal. In practice, firms use second-degree discrimination (quantity discounts) and third-degree discrimination (student or senior discounts) to extract part of the surplus from groups with different willingness to pay, making pricing feel personalised even when it is systematic.`,

      commonMisconceptions: [
        "Consumer surplus is not a cash refund — the money stays in your pocket because you weren't asked to pay more. It is a measure of welfare gain, not a transfer of funds.",
        'A lower price always increases consumer surplus for those who continue to buy, but it may also attract new buyers who were previously priced out, expanding total CS further still — so the increase in CS from a price cut is larger than it first appears.',
        'Consumer surplus can exist even in a perfectly competitive market — indeed, competitive markets maximise it. CS is not a sign of market failure; its reduction or destruction is.',
      ],

      examinerTip:
        'When drawing consumer surplus on a diagram, always shade the correct area: the triangle (or relevant region) between the demand curve and the price line, to the left of the equilibrium quantity. Label it clearly as "CS." If the question asks about a change in CS (e.g., after a tax or subsidy), calculate or describe both the original and new areas and identify what happened to the difference.',

      didYouKnow:
        "The concept of consumer surplus was developed by the French engineer and economist Jules Dupuit in 1844, originally to evaluate the social benefit of public works like bridges and roads. The British economist Alfred Marshall later refined and popularised it in his 1890 masterwork Principles of Economics, which remained the dominant economics textbook for decades.",

    },
    flashcards: [
      {
        id: 'f4-l2-fc1',
        front: 'Define consumer surplus.',
        back: 'Consumer surplus is the difference between the maximum a consumer is willing to pay for a good and the price they actually pay. It measures the net benefit buyers receive from a transaction.',
        hint: 'WTP minus actual price.',
        tags: ['consumer-surplus', 'welfare'],
      },
      {
        id: 'f4-l2-fc2',
        front: 'On a supply-and-demand diagram, where is consumer surplus shown?',
        back: 'Consumer surplus is the triangular area below the demand curve and above the equilibrium (market) price, between zero and the equilibrium quantity.',
        hint: 'Below the demand curve, above the price line.',
        tags: ['consumer-surplus', 'diagram'],
      },
      {
        id: 'f4-l2-fc3',
        front: 'What happens to consumer surplus when the market price falls?',
        back: 'Consumer surplus increases. Existing buyers pay less and gain more surplus, and new buyers who were previously priced out enter the market, expanding total CS.',
        hint: 'Lower price → bigger triangle.',
        tags: ['consumer-surplus', 'price'],
      },
      {
        id: 'f4-l2-fc4',
        front: 'What is a reservation price?',
        back: 'The reservation price (or maximum willingness to pay) is the highest price at which a consumer will still choose to buy a good. Above this price, they walk away.',
        hint: 'The price at which you are just indifferent between buying and not buying.',
        tags: ['consumer-surplus', 'willingness-to-pay'],
      },
      {
        id: 'f4-l2-fc5',
        front: 'Why do airlines use dynamic pricing from a consumer surplus perspective?',
        back: 'Airlines use dynamic pricing to charge different customers prices closer to their individual reservation prices, capturing consumer surplus as revenue instead of letting buyers keep it.',
        hint: 'Price discrimination reduces the gap between WTP and price paid.',
        tags: ['consumer-surplus', 'price-discrimination'],
      },
    ],
    quiz: [
      {
        id: 'f4-l2-q1',
        type: 'mcq',
        question:
          'A consumer is willing to pay £25 for a book but buys it in a sale for £15. What is their consumer surplus?',
        options: ['£10', '£25', '£15', '£40'],
        correctAnswer: 0,
        explanation:
          'Consumer surplus = willingness to pay − price paid = £25 − £15 = £10.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q2',
        type: 'mcq',
        question:
          'On a standard demand-and-supply diagram, consumer surplus is represented by which area?',
        options: [
          'The triangle below the demand curve and above the market price',
          'The triangle above the supply curve and below the market price',
          'The rectangle between the equilibrium price and the x-axis',
          'The area to the right of the equilibrium quantity',
        ],
        correctAnswer: 0,
        explanation:
          'Consumer surplus is the area below the demand curve (representing willingness to pay) and above the price line (what is actually paid), up to the equilibrium quantity.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q3',
        type: 'mcq',
        question:
          'If the government imposes a price ceiling below the equilibrium price, what happens to consumer surplus?',
        options: [
          'It may rise for consumers who still manage to buy the good at the lower price',
          'It definitely increases for all consumers because the price is lower',
          'It is unaffected because consumer surplus depends only on the demand curve',
          'It falls to zero because no trades occur',
        ],
        correctAnswer: 0,
        explanation:
          'Buyers who succeed in purchasing at the lower ceiling price gain more CS. However, the quantity supplied falls, so some buyers are rationed out. The net effect on total CS is ambiguous — it depends on the size of the surplus gained per unit versus the units lost. Examiners expect you to note that some buyers gain while quantity traded falls.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 3 — Producer Surplus and Profit Basics
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f4-l3',
    moduleId: 'f4-consumer-producer',
    title: 'Producer Surplus and Profit Basics',
    description:
      'Define producer surplus and connect it to the idea of profit; show it as the area above the supply curve below price.',
    order: 3,
    estimatedMinutes: 20,
    tags: ['producer-surplus', 'profit'],
    content: {
      prerequisiteRecap: `The previous lesson showed that consumer surplus is the triangle below the demand curve and above the market price, reflecting the welfare buyers gain when they pay less than their willingness to pay. Producer surplus mirrors this concept on the supply side: just as buyers benefit when price is below their maximum, sellers benefit when the market price exceeds the minimum they would have accepted.`,

      recallQuestions: [
        {
          id: 'f4-l3-recall-1',
          type: 'mcq' as const,
          question: 'A consumer values a book at £20 but buys it for £14. What is their consumer surplus, and on which part of the supply-and-demand diagram is it represented?',
          options: [
            'CS = £6; represented by the triangle above the demand curve and below the price line.',
            'CS = £6; represented by the triangle below the demand curve and above the market price line.',
            'CS = £14; represented by the rectangle between the price and the x-axis.',
            'CS = £20; represented by the total area under the demand curve.',
          ],
          correctAnswer: 1,
          explanation: 'Consumer surplus = willingness to pay − price paid = £20 − £14 = £6. On the diagram, CS is the triangular area below the demand curve (which represents willingness to pay) and above the market price line, up to the equilibrium quantity.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `Just as consumers gain when they buy at prices below their willingness to pay, sellers gain when they sell at prices above their minimum acceptable price. Producer surplus (PS) is defined as the difference between the price a producer actually receives for a good and the minimum price they would have accepted — their minimum willingness to accept (WTA), which reflects the marginal cost of production. A farmer who would have been happy to sell a crate of strawberries for £8 but receives the market price of £12 enjoys £4 of producer surplus.

The supply curve is the key to understanding producer surplus graphically. Every point on the supply curve represents the marginal cost of producing that unit — the lowest price at which a producer will supply it. At the market equilibrium price (P*), any producer whose marginal cost is below P* earns surplus on each unit sold. Summing these surpluses across all units and all producers gives total producer surplus. On a diagram, PS is the triangular area above the supply curve and below the equilibrium price line, from zero to the equilibrium quantity.

Producer surplus is closely related to — but not identical to — economic profit. Economic profit equals total revenue minus total costs, including both explicit costs (wages, rent, materials) and implicit costs (the opportunity cost of the owner's time and capital). Producer surplus, by contrast, measures revenue above the variable cost of production as captured by the supply curve. In the short run with no fixed costs, producer surplus and profit are equivalent. In the long run, when fixed costs are included, producer surplus exceeds economic profit by the amount of fixed costs — a subtle but important distinction.

Like consumer surplus, producer surplus responds predictably to price changes. A higher market price increases PS: existing producers earn more on units they were already selling, and new higher-cost producers are now able to enter the market profitably. A lower price shrinks PS and may drive some producers out of the market entirely. This is why producers lobby for higher prices, complain about competition, and welcome tariffs that raise domestic prices above the world price.`,

      realWorldHook:
        'When oil prices spike, existing oil companies do not suddenly face higher drilling costs — their wells are already in the ground. Most of the revenue increase goes straight to producer surplus (and profit). This is why governments sometimes impose windfall profit taxes on energy companies during price spikes: the surplus is politically visible and economically easy to tax without distorting production decisions already made.',

      vocabulary: [
        {
          term: 'Producer Surplus (PS)',
          definition:
            'The difference between the price a producer receives for a good and the minimum price they would have accepted (their marginal cost of production).',
          example:
            'A baker whose minimum acceptable price for a loaf is £1.50 but who sells it for £2.50 earns £1.00 of producer surplus per loaf.',
        },
        {
          term: 'Minimum Willingness to Accept (WTA)',
          definition:
            'The lowest price at which a producer is willing to supply a given unit of a good, equal to the marginal cost of producing that unit.',
          example:
            'A taxi driver who values their time at £8 per hour will not accept a fare that pays less than that — £8 is their WTA.',
        },
        {
          term: 'Economic Profit',
          definition:
            'Total revenue minus all costs, including both explicit (out-of-pocket) costs and implicit (opportunity) costs. Different from accounting profit, which omits implicit costs.',
          example:
            'An entrepreneur who earns £60,000 running their own shop but could earn £55,000 working elsewhere makes only £5,000 of economic profit.',
        },
        {
          term: 'Marginal Cost (MC)',
          definition:
            'The additional cost of producing one more unit of a good. It determines the position of the supply curve and hence the size of producer surplus.',
          example:
            'If producing the 50th unit costs a factory £3 more than producing the 49th unit, the marginal cost of the 50th unit is £3.',
        },
      ],

      deeperDive: `The relationship between the supply curve and marginal cost is fundamental. In a competitive market, profit-maximising firms supply each unit up to the point where price equals marginal cost. This means the supply curve traces exactly the firms' marginal cost schedule. Units with low marginal costs are produced first (the left end of the supply curve), and progressively higher-cost units are added as price rises. Producer surplus is therefore the total amount by which revenue exceeds variable costs — the reward for efficiency and low-cost production.

When economists evaluate policies, they track what happens to both consumer and producer surplus simultaneously. A tariff on imported steel, for example, raises the domestic steel price. Domestic steel producers enjoy higher PS; consumers of steel and goods made from it suffer lower CS. Whether the policy is net beneficial depends on which effect dominates — and the government also collects tariff revenue, which adds another layer of analysis. This framework of splitting welfare effects into CS, PS, and government revenue changes is one of the most powerful tools in applied microeconomics.`,

      commonMisconceptions: [
        'Producer surplus is not the same as profit in the presence of fixed costs. PS measures revenue above variable (marginal) costs shown by the supply curve; profit also subtracts fixed costs. A firm with high fixed costs can have large PS but still make a loss.',
        'A firm with zero producer surplus on a unit is not losing money — it is exactly breaking even on that marginal unit. Breaking even is still a reason to produce; firms do not need PS on every unit to stay in business.',
        'The supply curve does not represent the price producers want to charge; it represents the minimum they will accept. Producers would love to charge far above the supply curve — PS is the bonus they receive when the market price happens to exceed their minimum.',
      ],

      examinerTip:
        'When a question asks you to show producer surplus on a diagram, draw the supply curve, mark the equilibrium price as a horizontal line, and shade the triangle above the supply curve and below the price line. If the supply curve is upward sloping (as usual), this is a triangle; if it is perfectly elastic (horizontal), PS is zero; if it is perfectly inelastic (vertical), PS equals total revenue.',

      didYouKnow:
        'Producer surplus has a direct policy application in agricultural economics. Many countries operate minimum price schemes (price floors) for farmers to guarantee them a surplus above market equilibrium. The EU Common Agricultural Policy (CAP) has historically used intervention prices above equilibrium to boost farmer PS — at the cost of consumer CS and often large budget expenditures to buy up excess supply.',

    },
    flashcards: [
      {
        id: 'f4-l3-fc1',
        front: 'Define producer surplus.',
        back: 'Producer surplus is the difference between the price a producer receives and the minimum price they would have accepted (their marginal cost). It represents the net benefit sellers gain from a transaction.',
        hint: 'Revenue above the minimum acceptable price.',
        tags: ['producer-surplus', 'welfare'],
      },
      {
        id: 'f4-l3-fc2',
        front: 'On a supply-and-demand diagram, where is producer surplus shown?',
        back: 'Producer surplus is the triangular area above the supply curve and below the equilibrium price line, between zero and the equilibrium quantity.',
        hint: 'Above the supply curve, below the price line.',
        tags: ['producer-surplus', 'diagram'],
      },
      {
        id: 'f4-l3-fc3',
        front: 'What does each point on the supply curve represent?',
        back: 'Each point on the supply curve represents the marginal cost of producing that particular unit — the minimum price at which a competitive producer will supply it.',
        hint: 'Supply curve = marginal cost schedule.',
        tags: ['producer-surplus', 'marginal-cost'],
      },
      {
        id: 'f4-l3-fc4',
        front: 'How does producer surplus differ from economic profit?',
        back: 'Producer surplus is revenue above variable (marginal) costs. Economic profit is revenue minus all costs, including fixed costs. In the short run with no fixed costs they are equal; when fixed costs exist, PS > economic profit.',
        hint: 'PS ignores fixed costs; profit does not.',
        tags: ['producer-surplus', 'profit'],
      },
      {
        id: 'f4-l3-fc5',
        front: 'What happens to producer surplus when the market price rises?',
        back: 'Producer surplus increases. Existing producers earn more surplus per unit, and new higher-cost producers can now enter the market profitably, expanding total PS.',
        hint: 'Higher price → bigger triangle above supply curve.',
        tags: ['producer-surplus', 'price'],
      },
    ],
    quiz: [
      {
        id: 'f4-l3-q1',
        type: 'mcq',
        question:
          'A furniture maker would accept a minimum of £200 for a chair but sells it at the market price of £280. What is the producer surplus on this chair?',
        options: ['£80', '£200', '£280', '£480'],
        correctAnswer: 0,
        explanation:
          'Producer surplus = price received − minimum willingness to accept = £280 − £200 = £80.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q2',
        type: 'mcq',
        question:
          'Which area on a supply-and-demand diagram correctly represents producer surplus?',
        options: [
          'The triangle above the supply curve and below the market price',
          'The triangle below the demand curve and above the market price',
          'The rectangle between the equilibrium price and the quantity axis',
          'The area to the right of the equilibrium quantity below the supply curve',
        ],
        correctAnswer: 0,
        explanation:
          'Producer surplus is the area above the supply curve (minimum prices suppliers will accept) and below the market price (what they actually receive), up to the equilibrium quantity.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q3',
        type: 'mcq',
        question:
          'A firm has a producer surplus of £500 but fixed costs of £600. What can be concluded about its economic profit?',
        options: [
          'The firm is making an economic loss of £100',
          'The firm is making an economic profit of £500',
          'The firm is making an economic profit of £1,100',
          'The firm breaks even because PS and fixed costs cancel out',
        ],
        correctAnswer: 0,
        explanation:
          'Economic profit = producer surplus − fixed costs = £500 − £600 = −£100. The firm covers its variable costs but not all its fixed costs, resulting in a loss.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 4 — Total Surplus and Allocative Efficiency
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f4-l4',
    moduleId: 'f4-consumer-producer',
    title: 'Total Surplus and Allocative Efficiency',
    description:
      'Combine CS and PS to define total surplus and show why competitive equilibrium maximises welfare.',
    order: 4,
    estimatedMinutes: 25,
    tags: ['total-surplus', 'allocative-efficiency', 'welfare'],
    content: {
      prerequisiteRecap: `The previous lesson defined producer surplus as the triangular area above the supply curve and below the market price, and distinguished it from economic profit by noting that PS omits fixed costs. Total surplus combines consumer and producer surplus to give a single measure of the market's total welfare — and asking whether that combined area is maximised leads directly to the concept of allocative efficiency.`,

      recallQuestions: [
        {
          id: 'f4-l4-recall-1',
          type: 'mcq' as const,
          question: 'A producer would accept a minimum of £30 for a unit but sells it at the market price of £45. The producer also has fixed costs of £20. What is the producer surplus on this unit, and what is the economic profit contribution from this unit?',
          options: [
            'PS = £15; economic profit contribution = £15.',
            'PS = £15; economic profit contribution = −£5 (a loss once fixed costs are included).',
            'PS = £25; economic profit contribution = £25.',
            'PS = £45; economic profit contribution = £15.',
          ],
          correctAnswer: 0,
          explanation: 'Producer surplus on this unit = price received − minimum WTA = £45 − £30 = £15. The economic profit on this unit, once fixed costs are allocated, would require knowing how fixed costs are spread across all units — but on a per-unit basis PS does not subtract fixed costs, while profit does. Here both figures happen to be £15 because fixed costs are separate from the MC captured by the supply curve.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f4-l4-recall-2',
          type: 'mcq' as const,
          question: 'On a supply-and-demand diagram, which area correctly represents producer surplus?',
          options: [
            'The triangle below the demand curve and above the market price.',
            'The triangle above the supply curve and below the market price.',
            'The rectangle between the equilibrium price and the quantity axis.',
            'The entire area under the supply curve up to the equilibrium quantity.',
          ],
          correctAnswer: 1,
          explanation: 'Producer surplus is the triangular area above the supply curve (which shows the minimum prices producers will accept — their marginal costs) and below the market price line, up to the equilibrium quantity. The triangle below the demand curve above the price is consumer surplus.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation: `Total surplus (TS), sometimes called social surplus or community surplus, is the sum of consumer surplus and producer surplus. It measures the total net benefit that both buyers and sellers receive from all trades in a market. If consumers collectively enjoy £1,000 of surplus and producers enjoy £600, total surplus is £1,600. This single number summarises how much value a market creates for the people participating in it — making it an essential indicator of market performance.

In a perfectly competitive market at equilibrium, total surplus is maximised. To see why, consider what happens at any quantity below equilibrium. There are buyers willing to pay more than the price sellers would accept, meaning mutually beneficial trades are left on the table — total surplus could be higher if these trades occurred. Conversely, at any quantity above equilibrium, some trades occur at prices where the buyer values the unit less than it costs to produce — these trades destroy value. Only at equilibrium, where the last unit traded has a buyer's value exactly equal to the seller\'s cost, is every trade worthwhile and no wasteful trade made.

This insight is formalised in the concept of allocative efficiency. An allocation is allocatively efficient when resources are distributed so that the marginal benefit of the last unit equals its marginal cost (MB = MC). In a competitive equilibrium this condition holds automatically: the price signals from millions of buyers and sellers guide production until MB = MC without any central authority. Adam Smith\'s "invisible hand" is essentially a description of how competitive markets achieve allocative efficiency, and hence maximum total surplus, through decentralised price-setting.

When markets deviate from competitive equilibrium — due to monopoly, externalities, taxes, or price controls — some mutually beneficial trades are blocked or some wasteful trades are forced, and total surplus falls. The lost surplus is called deadweight loss (DWL). A tax, for example, drives a wedge between the buyer\'s price and the seller\'s price, reducing quantity traded below the efficient level and creating a triangle of deadweight loss. Analysing DWL is one of the most common tasks in applied economics, used to evaluate everything from tariffs and minimum wages to pollution taxes and rent control.`,

      realWorldHook:
        'During the COVID-19 pandemic, many governments imposed price ceilings on hand sanitiser and face masks to prevent "price gouging." While well-intentioned, these controls reduced producer surplus so sharply that many producers stopped making or distributing these goods, leading to shortages. Total surplus fell, creating massive deadweight loss — the missing trades represented real harm to people who could not obtain supplies. The episode illustrates how well-meaning interventions can reduce overall welfare by blocking mutually beneficial transactions.',

      vocabulary: [
        {
          term: 'Total Surplus (TS)',
          definition:
            'The sum of consumer surplus and producer surplus in a market; the overall net benefit to all market participants from trade.',
          example:
            'If CS = £400 and PS = £300, total surplus = £700. This £700 represents the value created by the market above the costs of production.',
        },
        {
          term: 'Allocative Efficiency',
          definition:
            'A state in which resources are allocated such that marginal benefit equals marginal cost (MB = MC) for the last unit produced. At this point, no reallocation can make someone better off without making someone else worse off.',
          example:
            'A competitive market for apples is allocatively efficient when the price consumers pay (MB) equals the cost of growing the last apple (MC).',
        },
        {
          term: 'Deadweight Loss (DWL)',
          definition:
            'The reduction in total surplus caused by a market distortion (tax, subsidy, price control, monopoly) that prevents some mutually beneficial trades from occurring.',
          example:
            "A tax on cigarettes raises the buyer\'s price and lowers the seller\'s price. Some trades that would have benefited both parties no longer occur, creating a deadweight loss triangle.",
        },
        {
          term: 'Marginal Benefit = Marginal Cost (MB = MC)',
          definition:
            'The condition for allocative efficiency. Marginal benefit (reflected in the demand curve) equals marginal cost (reflected in the supply curve) only at the competitive equilibrium quantity.',
          example:
            'If the 100th unit costs £5 to produce (MC) and is worth exactly £5 to the buyer (MB), producing it is just worthwhile — but the 101st unit (MC £5.50, MB £4.80) would destroy value.',
        },
      ],

      deeperDive: `The First Fundamental Theorem of Welfare Economics formalises what Adam Smith observed intuitively: under certain conditions (no externalities, no public goods, no information asymmetries, perfect competition), competitive markets produce a Pareto efficient outcome — one in which it is impossible to make anyone better off without making someone else worse off. This is equivalent to maximising total surplus. The theorem is elegant and powerful, but its conditions are strict. Much of modern economics is devoted to understanding what happens when those conditions fail (market failures) and what policy interventions, if any, can restore efficiency.

Equity and efficiency are distinct concerns. Maximising total surplus (efficiency) says nothing about how that surplus is divided between consumers and producers, or between rich and poor. A market could be allocatively efficient while leaving all surplus in the hands of monopolistic producers and nothing for consumers, or vice versa. This is why economists distinguish between efficiency (the size of the economic "pie") and equity (how the pie is sliced). Many real-world policy debates — over minimum wages, progressive taxation, rent control — involve trading off some efficiency loss for a gain in equity, and vice versa.`,

      commonMisconceptions: [
        'Maximising total surplus does not mean everyone benefits equally — it only means the total net benefit is as large as possible. A policy that increases TS might still make one group worse off if it transfers surplus from them to another group.',
        'Deadweight loss is not a transfer — it is genuine destruction of value. When a tax creates DWL, the surplus lost does not go to the government; it simply vanishes. It represents trades that would have benefited buyers and sellers but did not happen.',
        'Allocative efficiency and productive efficiency are different things. Productive efficiency means producing at minimum cost (on the production possibility frontier). Allocative efficiency means producing the right quantity of goods. A firm can be productively efficient but allocatively inefficient if it charges a monopoly price above marginal cost.',
      ],

      examinerTip:
        'Exam questions often ask you to show DWL on a diagram after a tax, price floor, or monopoly. Always: (1) draw the competitive equilibrium; (2) show the new equilibrium after the distortion; (3) shade the triangle between the old and new quantity, bounded by the supply and demand curves — and label it "deadweight loss." The DWL triangle appears on the right side of the new quantity, between the two curves, because those are the trades that no longer take place.',

      didYouKnow:
        'The concept of deadweight loss was first systematically analysed by the French economist Arsène-Jules-Étienne-Juvénal Dupuit (the same person who developed consumer surplus) in his 1844 paper on the social benefits of infrastructure. He showed that tolls on bridges, if set too high, destroy more value for users than they generate in revenue — an early and crisp demonstration that taxes can impose costs beyond the revenue collected.',

    },
    flashcards: [
      {
        id: 'f4-l4-fc1',
        front: 'What is total surplus and how is it calculated?',
        back: 'Total surplus (social surplus) is the total net benefit from trade in a market. It equals consumer surplus plus producer surplus: TS = CS + PS.',
        hint: 'CS + PS = TS.',
        tags: ['total-surplus', 'welfare'],
      },
      {
        id: 'f4-l4-fc2',
        front: 'What condition defines allocative efficiency?',
        back: 'Allocative efficiency is achieved when marginal benefit equals marginal cost (MB = MC) for the last unit produced. In a competitive market, this occurs automatically at equilibrium.',
        hint: 'MB = MC at the equilibrium quantity.',
        tags: ['allocative-efficiency', 'equilibrium'],
      },
      {
        id: 'f4-l4-fc3',
        front: 'Why does a competitive market maximise total surplus?',
        back: 'At equilibrium, all mutually beneficial trades (where buyer value ≥ seller cost) occur, and no wasteful trades (where buyer value < seller cost) are forced. Every trade below equilibrium quantity would add to TS; no further trade adds to it — so TS is maximised.',
        hint: 'All worthwhile trades happen; no wasteful ones do.',
        tags: ['total-surplus', 'allocative-efficiency', 'competitive-market'],
      },
      {
        id: 'f4-l4-fc4',
        front: 'What is deadweight loss, and where does it appear on a diagram?',
        back: 'Deadweight loss (DWL) is the total surplus destroyed by a market distortion. On a diagram it is the triangle between the old equilibrium quantity and the new (distorted) quantity, bounded above by the demand curve and below by the supply curve.',
        hint: 'The triangle of lost trades to the right of the new quantity.',
        tags: ['deadweight-loss', 'welfare', 'diagram'],
      },
      {
        id: 'f4-l4-fc5',
        front: 'How do efficiency and equity differ as policy goals?',
        back: 'Efficiency (maximising total surplus) concerns the overall size of the economic benefit created. Equity concerns how that benefit is distributed. A policy can be efficient yet highly unequal, or equitable but inefficient — the two goals often trade off against each other.',
        hint: 'Efficiency = size of the pie; equity = how it is sliced.',
        tags: ['allocative-efficiency', 'equity', 'welfare'],
      },
    ],
    quiz: [
      {
        id: 'f4-l4-q1',
        type: 'mcq',
        question:
          'In a competitive market, consumer surplus is £500 and producer surplus is £350. What is total surplus?',
        options: ['£850', '£500', '£350', '£150'],
        correctAnswer: 0,
        explanation:
          'Total surplus = consumer surplus + producer surplus = £500 + £350 = £850.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q2',
        type: 'mcq',
        question:
          'Which of the following best describes allocative efficiency?',
        options: [
          'Resources are allocated so that marginal benefit equals marginal cost, maximising total surplus',
          'Goods are produced at the lowest possible average cost',
          'Every consumer receives the same quantity of goods',
          'Firms earn zero economic profit in the long run',
        ],
        correctAnswer: 0,
        explanation:
          'Allocative efficiency means MB = MC, so the right quantity of each good is produced. Producing at lowest cost is productive efficiency; zero long-run profit is a feature of perfect competition but is not the definition of allocative efficiency.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q3',
        type: 'mcq',
        question:
          'A government imposes a tax that reduces quantity traded in a market from 1,000 units to 700 units. The deadweight loss represents:',
        options: [
          'The total surplus lost on the 300 units that are no longer traded',
          'The tax revenue collected by the government',
          'The consumer surplus transferred to producers',
          'The increase in producer surplus from the higher buyer price',
        ],
        correctAnswer: 0,
        explanation:
          'Deadweight loss is the surplus that would have been created by the 300 trades that no longer happen. It is genuine value destruction, not a transfer — it does not go to the government, consumers, or producers.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },
]
