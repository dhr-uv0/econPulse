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

      thinkAboutIt: {
        question: 'You are stranded in a desert with no water and you encounter a vendor selling both bottled water and diamonds. You would pay almost anything for the first bottle of water, yet globally water sells for pennies while diamonds sell for thousands of pounds. How can something so essential to life be so cheap, while something so frivolous be so expensive? Does this mean markets get the "value" of things wrong?',
        answer: 'Markets price goods at their marginal utility, not their total utility. Water has immense total utility — it is essential for survival — but because it is abundant, the marginal utility of one more litre is very low, so its price is low. Diamonds have modest total utility but are extremely scarce, meaning each additional diamond yields high marginal utility to buyers who desire them, pushing price up. Markets are not "wrong": they efficiently allocate resources by equating price with marginal, not total, value. The paradox dissolves once you recognise that scarcity determines how much the next unit is worth, not how much all units combined are worth.',
      },
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
      {
        id: 'f4-l1-fc6',
        front: 'What is the diamond-water paradox, and how does marginal utility resolve it?',
        back: 'Water has enormous total utility (essential for life) but is cheap; diamonds have low total utility but are expensive. The paradox is resolved by recognising that price reflects marginal utility, not total utility. Water is abundant so its MU is low; diamonds are scarce so their MU is high.',
        hint: 'Price = marginal utility, not total utility.',
        tags: ['DMU', 'marginal-utility', 'paradox'],
      },
      {
        id: 'f4-l1-fc7',
        front: 'What is the difference between cardinal and ordinal utility?',
        back: 'Cardinal utility assumes satisfaction can be measured in exact numerical units ("utils"). Ordinal utility only requires that consumers can rank outcomes from most to least preferred — no specific numbers needed. Modern economics generally uses ordinal utility.',
        hint: 'Cardinal = exact numbers; ordinal = ranking only.',
        tags: ['utility', 'cardinal', 'ordinal'],
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
      {
        id: 'f4-l1-q4',
        type: 'mcq',
        question:
          'A consumer drinks cups of tea. The marginal utility of the 1st cup is 30 utils, the 2nd is 20 utils, the 3rd is 10 utils, and the 4th is 0 utils. What is the total utility after 4 cups, and what happens if they drink a 5th cup with MU = −5 utils?',
        options: [
          'TU after 4 cups = 60 utils; TU after 5 cups falls to 55 utils',
          'TU after 4 cups = 30 utils; TU after 5 cups rises to 35 utils',
          'TU after 4 cups = 60 utils; TU after 5 cups stays at 60 utils',
          'TU after 4 cups = 0 utils; TU after 5 cups = −5 utils',
        ],
        correctAnswer: 0,
        explanation:
          'TU after 4 cups = 30 + 20 + 10 + 0 = 60 utils. Adding the 5th cup with MU = −5 reduces TU to 60 + (−5) = 55 utils. TU falls when MU is negative, confirming that rational consumers stop at MU = 0.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q5',
        type: 'mcq',
        question:
          'Which of the following correctly describes the relationship between total utility and marginal utility when MU is positive but falling?',
        options: [
          'TU is rising at a decreasing rate',
          'TU is falling at a decreasing rate',
          'TU is constant',
          'TU is rising at an increasing rate',
        ],
        correctAnswer: 0,
        explanation:
          'When MU is positive but declining, each new unit still adds to total utility — so TU rises. But because each increment is smaller than the last, TU rises at a decreasing rate. This is the standard shape of the TU curve under the Law of Diminishing Marginal Utility.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q6',
        type: 'mcq',
        question:
          'The diamond-water paradox is resolved by noting that:',
        options: [
          'Price reflects the marginal utility of a good, not its total utility',
          'Diamonds are more useful than water in everyday life',
          'Water has lower total utility than diamonds because it is taken for granted',
          'Markets systematically undervalue essential goods like water',
        ],
        correctAnswer: 0,
        explanation:
          'Water has enormous total utility (essential for life) but very low marginal utility because it is abundant — the next litre adds little satisfaction. Diamonds have low total utility but high marginal utility due to scarcity. Since prices reflect MU, water is cheap and diamonds are expensive despite the apparent paradox.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q7',
        type: 'mcq',
        question:
          "A consumer's willingness to pay for the 1st unit of a good is £10, for the 2nd unit is £7, and for the 3rd unit is £4. If the market price is £7, how many units will the consumer buy?",
        options: [
          '2 units, because WTP ≥ price only for the first two units',
          '3 units, because WTP is positive for all three',
          '1 unit, because only the first unit generates surplus',
          '0 units, because the consumer cannot afford the good',
        ],
        correctAnswer: 0,
        explanation:
          'A rational consumer buys a unit whenever their WTP (marginal utility in money terms) is at least equal to the price. WTP for the 1st unit (£10) ≥ £7 ✓; WTP for the 2nd unit (£7) = £7 ✓ (indifferent, but buys); WTP for the 3rd unit (£4) < £7 ✗. So the consumer buys 2 units.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q8',
        type: 'mcq',
        question:
          'Why does the Law of Diminishing Marginal Utility not apply to a consumer buying their very first unit of a completely new good they have never tried before?',
        options: [
          'It does not — DMU applies from the very first unit onwards within a given consumption period, comparing unit 1 to unit 2, unit 2 to unit 3, and so on',
          'Because the consumer has no reference point and cannot feel satisfaction from a new good',
          'Because DMU only applies to inferior goods, not normal goods',
          'Because the first unit always has zero marginal utility by definition',
        ],
        correctAnswer: 0,
        explanation:
          'DMU is about how MU changes as successive units are consumed in the same period. It does not claim that MU of the first unit is low — indeed the first unit typically has the highest MU. The law simply states that MU of the 2nd unit is less than the 1st, the 3rd less than the 2nd, and so on. It applies from the first unit onwards in the sequence.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q9',
        type: 'mcq',
        question:
          'An economics student argues: "If I enjoy listening to music more and more the better I get at it, this violates the Law of Diminishing Marginal Utility." Is the student correct?',
        options: [
          'No — DMU applies to consuming successive units of a good within a short time period, not to skill development over months or years',
          'Yes — any increasing satisfaction over time disproves DMU',
          'Yes — DMU only applies to physical goods, not experiences',
          'No — the student is correct that music violates DMU, proving the law is false',
        ],
        correctAnswer: 0,
        explanation:
          'The Law of DMU applies to consuming successive units of a good within a given time period, holding everything else constant. Skill development over time changes the nature of the good itself — effectively shifting the MU curve rather than moving along it. Within a single listening session, DMU still applies: the 10th song you hear today gives less marginal utility than the 1st. The student conflates long-run learning with the short-run marginal utility concept.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l1-q10',
        type: 'mcq',
        question:
          'A consumer has £15 to spend. Good A costs £5 per unit and has MU values of 20, 15, 10 for units 1–3. Good B costs £5 per unit and has MU values of 18, 12, 6 for units 1–3. To maximise total utility, how should the consumer spend their £15?',
        options: [
          '2 units of A and 1 unit of B (MU sequence: 20, 18, 15 — the three highest marginal utilities)',
          '3 units of A only (total MU = 45)',
          '3 units of B only (total MU = 36)',
          '1 unit of A and 2 units of B (MU sequence: 20, 18, 12)',
        ],
        correctAnswer: 0,
        explanation:
          'With equal prices, the consumer maximises utility by buying units in descending order of MU: A1 (20), B1 (18), A2 (15). That uses 3 × £5 = £15. Total utility = 20 + 18 + 15 = 53 utils, which exceeds all other combinations (3A = 45, 3B = 36, 1A+2B = 20+18+12 = 50).',
        marks: 3,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Think of a good or activity you consume regularly — for example, watching episodes of a TV series, eating a favourite snack, or playing a video game. Describe how your marginal utility changes as you consume successive units in a single sitting. Identify the point at which your MU reached zero or became negative, and explain how this shaped your consumption decision. Then connect your experience to the water-diamond paradox: does the good you chose have high total utility but low marginal utility at typical quantities, or the reverse? Write 200–300 words.',
      rubric: 'Accurate use of TU and MU terminology (2 marks). Clear identification of the point of MU = 0 or negative MU with explanation (2 marks). Correct application of Law of Diminishing Marginal Utility to a real example (2 marks). Meaningful connection to the water-diamond paradox with correct reasoning about marginal vs total utility (2 marks). Clarity and coherence of writing (1 mark). Total: 9 marks.',
      exampleTopics: [
        'Episodes of a binge-watched TV series: high MU for episode 1, falling sharply by episode 5 in one sitting',
        'Cups of coffee during a study session: MU turns negative once caffeine causes anxiety',
        'Social media scrolling: MU near zero after the first few minutes yet total time spent is high',
        'Slices of pizza at a party: classic DMU example with a clear satiation point',
        'Songs played on repeat: high MU the first few times, declining rapidly with repetition',
      ],
    },
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

      thinkAboutIt: {
        question: 'You buy a pair of concert tickets for £40 each. You would have been willing to pay up to £120 per ticket. A friend offers to buy one of your tickets from you for £60 — the maximum she is willing to pay. Should you sell? And what is your consumer surplus before and after the sale if you accept?',
        answer: 'Before the sale you hold two tickets with total consumer surplus of (£120 − £40) × 2 = £160. If you sell one ticket for £60, you receive £60 cash but give up a ticket worth £120 to you — losing £60 of value relative to keeping it. Your net position on that ticket is £60 received minus £40 cost = £20 profit, but you lose £80 of consumer surplus (£120 WTP − £40 cost), so you are actually worse off by £60 by selling. You should not sell: consumer surplus reflects the personal value that exceeds price, and transferring the ticket at £60 destroys £60 of your welfare even though the transaction looks profitable on the surface.',
      },
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
      {
        id: 'f4-l2-fc6',
        front: 'How is the area of a consumer surplus triangle calculated on a linear demand diagram?',
        back: 'CS = ½ × base × height, where the base is the equilibrium quantity (Q*) and the height is the maximum willingness to pay (the demand curve intercept) minus the equilibrium price (P*). For example, if max WTP = £20, P* = £8, and Q* = 12, CS = ½ × 12 × (20 − 8) = £72.',
        hint: 'Half base times height: ½ × Q* × (max WTP − P*).',
        tags: ['consumer-surplus', 'calculation', 'diagram'],
      },
      {
        id: 'f4-l2-fc7',
        front: 'What is the difference between first-degree and third-degree price discrimination in terms of consumer surplus?',
        back: 'First-degree (perfect) price discrimination charges every buyer their exact reservation price, extracting all consumer surplus for the producer. Third-degree price discrimination splits buyers into groups (e.g., students vs adults) and charges each group a different price, capturing some but not all consumer surplus from each group.',
        hint: 'First-degree = zero CS left; third-degree = partial CS extraction by group.',
        tags: ['consumer-surplus', 'price-discrimination', 'welfare'],
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
      {
        id: 'f4-l2-q4',
        type: 'mcq',
        question:
          'A market has a linear demand curve. The maximum willingness to pay is £50, the equilibrium price is £20, and the equilibrium quantity is 60 units. Calculate the consumer surplus.',
        options: ['£900', '£1,200', '£600', '£1,800'],
        correctAnswer: 0,
        explanation:
          'CS = ½ × base × height = ½ × 60 × (£50 − £20) = ½ × 60 × £30 = £900.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q5',
        type: 'mcq',
        question:
          'Three buyers — Anna, Ben, and Cara — have willingness to pay of £40, £30, and £20 respectively for a single unit of a good. The market price is £25. How much total consumer surplus is generated?',
        options: [
          '£20 (only Anna £15 and Ben £5 buy; Cara does not)',
          '£45 (all three buyers generate surplus)',
          '£15 (only Anna buys)',
          '£0 (no consumer surplus at equilibrium)',
        ],
        correctAnswer: 0,
        explanation:
          'Only buyers whose WTP ≥ price will buy. Anna (WTP £40 ≥ £25) gains £15 CS; Ben (WTP £30 ≥ £25) gains £5 CS; Cara (WTP £20 < £25) does not buy. Total CS = £15 + £5 = £20.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q6',
        type: 'mcq',
        question:
          'A firm switches from a uniform price of £30 to perfect (first-degree) price discrimination, charging each buyer their exact reservation price. What happens to consumer surplus and total surplus?',
        options: [
          'CS falls to zero; total surplus remains unchanged (it is redistributed to the producer)',
          'CS rises because more consumers can now afford the good',
          'CS falls to zero; total surplus also falls due to deadweight loss',
          'CS is unaffected because total spending in the market is the same',
        ],
        correctAnswer: 0,
        explanation:
          'Under perfect price discrimination, every buyer pays exactly their WTP, leaving zero consumer surplus — all of it is transferred to the producer. However, all mutually beneficial trades still occur (the producer supplies up to the point where WTP = MC), so total surplus (CS + PS) is unchanged — it is the same efficient quantity, just all the benefit accrues to the producer.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q7',
        type: 'mcq',
        question:
          'Which of the following would cause total consumer surplus in a market to increase?',
        options: [
          'A rightward shift of the demand curve due to rising consumer incomes',
          'An increase in the equilibrium price caused by a supply reduction',
          'A government tax that raises the price paid by consumers',
          'A fall in the number of buyers in the market',
        ],
        correctAnswer: 0,
        explanation:
          'A rightward demand shift means consumers value the good more at every quantity — the demand curve rises, increasing the area of the CS triangle (higher intercept, and typically more buyers). Options B, C, and D all reduce CS: higher prices and fewer buyers shrink the triangle.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q8',
        type: 'mcq',
        question:
          'A linear demand curve has the equation P = 100 − 2Q. If the market price is £40, what is the equilibrium quantity and the consumer surplus?',
        options: [
          'Q = 30; CS = £900',
          'Q = 30; CS = £1,800',
          'Q = 20; CS = £400',
          'Q = 50; CS = £2,500',
        ],
        correctAnswer: 0,
        explanation:
          'At P = 40: 40 = 100 − 2Q → 2Q = 60 → Q = 30. Maximum WTP (where Q = 0) = 100. CS = ½ × 30 × (100 − 40) = ½ × 30 × 60 = £900.',
        marks: 3,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q9',
        type: 'mcq',
        question:
          'If a £10 tax is imposed on sellers, raising the market price from £30 to £38 and reducing equilibrium quantity from 100 to 80 units, which statement best describes the change in consumer surplus (assuming a linear demand curve with max WTP = £70)?',
        options: [
          'CS falls because the price rose and fewer units are traded, shrinking the CS triangle',
          'CS rises because producers now receive less revenue per unit',
          'CS is unchanged because the tax is paid by sellers, not buyers',
          'CS falls to zero because no buyer gains surplus when a tax exists',
        ],
        correctAnswer: 0,
        explanation:
          'Consumer surplus depends on the price consumers pay and the quantity traded. The price paid by buyers rose from £30 to £38 and quantity fell from 100 to 80, both of which shrink the CS triangle. The tax is ultimately shared between buyers and sellers depending on elasticities — even a seller tax raises the buyer price and reduces CS.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l2-q10',
        type: 'mcq',
        question:
          'A supermarket offers loyalty card members a £5 discount off a £20 product. Non-members pay £20. From a price discrimination perspective, what is the supermarket attempting to do?',
        options: [
          'Capture some consumer surplus from price-insensitive non-members while offering a lower price to more price-sensitive loyalty card holders',
          'Increase total consumer surplus in the market by lowering the average price',
          'Practise first-degree price discrimination by identifying every individual\'s WTP',
          'Reduce deadweight loss by moving closer to competitive equilibrium',
        ],
        correctAnswer: 0,
        explanation:
          'This is third-degree price discrimination: the supermarket separates buyers into groups (loyalty card holders, who tend to be more price-sensitive, and non-members) and charges each group a different price. The aim is to capture consumer surplus from non-members who are willing to pay £20 while still selling to price-sensitive shoppers at £15. It does not identify each individual\'s WTP (which would be first-degree), and it does not increase total CS — it transfers some CS to the producer.',
        marks: 2,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Identify a recent purchase where you experienced significant consumer surplus — that is, a product or service you would have been willing to pay considerably more for than you actually paid. Describe: (1) what the good or service was; (2) your estimated willingness to pay; (3) the actual price you paid; (4) your consumer surplus in pounds or as a percentage of your WTP; and (5) what factors determined your high WTP (urgency, scarcity, personal preferences). Then consider: if the seller had somehow known your exact WTP and charged you that amount, how would you feel, and what does this reveal about the relationship between consumer surplus and fairness? Write 250–350 words.',
      rubric: 'Clear identification of the good and a plausible, reasoned WTP estimate (2 marks). Correct calculation of consumer surplus (WTP − price paid) with explanation (2 marks). Insightful analysis of factors driving high WTP (urgency, scarcity, preferences — at least two factors) (2 marks). Thoughtful discussion of perfect price discrimination and its implications for fairness vs efficiency (2 marks). Quality of economic reasoning and use of terminology (1 mark). Total: 9 marks.',
      exampleTopics: [
        'A last-minute train ticket you needed urgently — you would have paid far more but the seat was unsold',
        'A textbook you bought second-hand for £5 that was essential for your course (WTP could be £30+)',
        'A streaming subscription that gives access to dozens of shows you love for a monthly flat fee',
        'A supermarket meal deal that bundles items you wanted at a price well below your individual WTP for each item',
        'A flight booked months in advance at a low fare before prices rose as the date approached',
      ],
    },
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

      thinkAboutIt: {
        question: 'An artisan candle maker has marginal costs of £4 per candle and sells them at a craft fair for £10 each. She sells 50 candles. Her fixed costs (stall rental, equipment) total £150. She tells a friend: "I made £300 producer surplus today — I\'m doing brilliantly!" Her friend, an economics student, says: "Actually, you might still be making a loss." Who is right, and why?',
        answer: 'Both are partially right, but they are measuring different things. The candle maker is correct that her producer surplus is £300: (£10 − £4) × 50 = £300. This measures revenue above her variable (marginal) costs. However, her friend is correct that producer surplus is not the same as economic profit. To calculate profit, she must also subtract her fixed costs: Economic profit = PS − Fixed costs = £300 − £150 = £150. In this case she is actually profitable, but the friend\'s point stands in principle — a firm can have positive PS and still incur a loss if fixed costs exceed that surplus. The distinction is crucial: PS measures the contribution to covering fixed costs and earning profit, but it is not profit itself.',
      },
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
      {
        id: 'f4-l3-fc6',
        front: 'How is the area of a producer surplus triangle calculated on a linear supply diagram?',
        back: 'PS = ½ × base × height, where the base is the equilibrium quantity (Q*) and the height is the equilibrium price (P*) minus the minimum supply price (the supply curve intercept). For example, if P* = £20, minimum supply price = £8, and Q* = 24, PS = ½ × 24 × (20 − 8) = £144.',
        hint: 'Half base times height: ½ × Q* × (P* − min supply price).',
        tags: ['producer-surplus', 'calculation', 'diagram'],
      },
      {
        id: 'f4-l3-fc7',
        front: 'Why do windfall profit taxes on energy firms target producer surplus specifically?',
        back: 'When oil or gas prices spike, existing producers earn much more revenue without incurring higher extraction costs on already-drilled wells — the entire price increase goes to PS. Because the surplus arises from luck (a price shock) rather than new investment, taxing it does not distort current production decisions, making it an efficient revenue source.',
        hint: 'Price spike → PS rises without MC rising → tax PS without distorting output.',
        tags: ['producer-surplus', 'policy', 'tax'],
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
      {
        id: 'f4-l3-q4',
        type: 'mcq',
        question:
          'A market has a linear supply curve. The minimum supply price (supply curve intercept) is £5, the equilibrium price is £25, and the equilibrium quantity is 40 units. Calculate the producer surplus.',
        options: ['£400', '£800', '£200', '£1,000'],
        correctAnswer: 0,
        explanation:
          'PS = ½ × base × height = ½ × 40 × (£25 − £5) = ½ × 40 × £20 = £400.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q5',
        type: 'mcq',
        question:
          'Three producers — X, Y, and Z — have minimum willingness to accept of £10, £18, and £30 respectively for a single unit. The market price is £22. What is the total producer surplus?',
        options: [
          '£16 (X earns £12, Y earns £4; Z does not sell)',
          '£36 (all three producers generate surplus)',
          '£12 (only X sells)',
          '£0 (no PS at equilibrium)',
        ],
        correctAnswer: 0,
        explanation:
          'Producers sell only if price ≥ WTA. X (WTA £10 ≤ £22) earns £12 PS; Y (WTA £18 ≤ £22) earns £4 PS; Z (WTA £30 > £22) does not sell. Total PS = £12 + £4 = £16.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q6',
        type: 'mcq',
        question:
          'A supply curve is perfectly elastic (horizontal) at a price of £15. If the market price rises to £15, what is the producer surplus?',
        options: [
          'Zero — producers receive exactly their minimum acceptable price on every unit',
          'Positive — producers earn surplus on every unit sold',
          'Infinite — all output is supplied at £15 regardless of quantity',
          'Negative — producers make a loss because price equals marginal cost',
        ],
        correctAnswer: 0,
        explanation:
          'A perfectly elastic supply curve means every unit costs exactly £15 to produce. The market price is also £15, so price = MC on every unit — there is no gap between price received and minimum WTA. PS = 0. This occurs in perfectly competitive industries with constant costs where free entry drives PS to zero in the long run.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q7',
        type: 'mcq',
        question:
          'The government introduces a minimum price (price floor) for wheat at £50 per tonne, above the equilibrium price of £35. What is the most likely effect on producer surplus for wheat farmers?',
        options: [
          'PS increases for farmers who can sell at the higher floor price',
          'PS falls to zero because price floors always eliminate producer surplus',
          'PS is unaffected because price floors only affect consumer surplus',
          'PS decreases because the higher price reduces the quantity farmers want to supply',
        ],
        correctAnswer: 0,
        explanation:
          'A price floor above equilibrium raises the price that farmers receive. For units that are sold, PS increases (each unit sold earns £50 − MC instead of £35 − MC). However, the higher price may also create a surplus of unsold wheat if supply exceeds demand at £50 — complicating the picture. At the unit level and for units actually sold, PS rises.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q8',
        type: 'mcq',
        question:
          'A linear supply curve has the equation P = 2 + 0.5Q. If the equilibrium price is £12, what is the equilibrium quantity and the producer surplus?',
        options: [
          'Q = 20; PS = £100',
          'Q = 20; PS = £200',
          'Q = 10; PS = £50',
          'Q = 28; PS = £140',
        ],
        correctAnswer: 0,
        explanation:
          'At P = 12: 12 = 2 + 0.5Q → 0.5Q = 10 → Q = 20. Minimum supply price (where Q = 0) = £2. PS = ½ × 20 × (12 − 2) = ½ × 20 × 10 = £100.',
        marks: 3,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q9',
        type: 'mcq',
        question:
          'Which of the following best explains why a firm might continue to operate in the short run even if it is making an economic loss?',
        options: [
          'As long as producer surplus (revenue above variable costs) is positive, the firm covers its variable costs and makes a contribution to fixed costs',
          'Because economic losses always disappear in the short run due to market adjustment',
          'Because fixed costs rise to match any losses, keeping the firm at break-even',
          'Because producer surplus and economic profit are always equal in the short run',
        ],
        correctAnswer: 0,
        explanation:
          'In the short run, fixed costs are sunk (unavoidable). A firm should keep operating as long as it can cover its variable costs — i.e., as long as PS ≥ 0. Shutting down saves variable costs but the fixed costs are still owed. Staying open with positive PS reduces the overall loss compared to shutting down.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l3-q10',
        type: 'mcq',
        question:
          'An oil producer has existing wells with extraction costs of £30 per barrel. The oil price rises from £60 to £90 per barrel due to a geopolitical shock. The producer sells 10,000 barrels. By how much does producer surplus increase, and why might a government consider taxing this gain?',
        options: [
          'PS increases by £300,000; the gain is "unearned" windfall from external events, not new investment or effort',
          'PS increases by £600,000; the government should always tax any increase in PS',
          'PS increases by £300,000; the government should not tax it as it will discourage future oil production',
          'PS is unchanged; price changes do not affect PS when extraction costs stay the same',
        ],
        correctAnswer: 0,
        explanation:
          'Before: PS per barrel = £60 − £30 = £30; total PS = £300,000. After: PS per barrel = £90 − £30 = £60; total PS = £600,000. Increase = £300,000. Governments consider windfall taxes because the gain arose from external factors (geopolitics), not new investment — taxing it does not discourage the production decisions already made, making it an efficient revenue source with limited deadweight loss.',
        marks: 3,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Choose a real-world producer — this could be a farmer, a small business owner, a freelancer, or a large company. Research or estimate: (1) their approximate marginal cost per unit (or per hour, per service); (2) the market price they typically receive; and (3) their producer surplus per unit. Then discuss what would happen to their producer surplus if the market price fell by 20% — would they continue producing? How does fixed cost affect whether they stay in business? Connect your analysis to the concept of the supply curve as a marginal cost schedule. Write 250–350 words.',
      rubric: 'Accurate identification and definition of producer surplus applied to a real producer (2 marks). Reasonable estimation of MC and market price with clear PS calculation (2 marks). Correct analysis of the impact of a 20% price fall on PS and production decisions (2 marks). Meaningful discussion of the role of fixed costs in the shutdown decision (2 marks). Use of economic terminology and logical structure (1 mark). Total: 9 marks.',
      exampleTopics: [
        'A coffee shop: espresso has low MC (beans + labour) but sells for £3.50 — large PS per cup, but high fixed rent costs',
        'A freelance graphic designer: their WTA per hour vs their actual hourly rate and how this shapes their decision to accept projects',
        'A wheat farmer during a period of low grain prices: how the price floor from agricultural policy affects their PS and decision to continue farming',
        'An oil producer: low extraction costs vs volatile market price and the concept of windfall PS during price spikes',
        'A market stall trader: marginal cost per item, pricing strategy, and whether they cover their stall hire (fixed cost) through PS',
      ],
    },
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

      thinkAboutIt: {
        question: 'A government wants to reduce sugar consumption and introduces a £0.50 per can sugar tax on fizzy drinks, raising the consumer price from £1.00 to £1.40 and the price received by producers to £0.90. Quantity sold falls from 10 million cans per week to 7 million. The government collects £3.5 million in tax revenue per week. A health economist says the policy is a success. A welfare economist says it creates deadweight loss and reduces total surplus. Can both be right at the same time?',
        answer: 'Yes, both can be right simultaneously because they are measuring different things. The health economist is correct that the tax reduces consumption and achieves its stated public health goal — fewer cans sold means less sugar consumed, which may reduce obesity and associated health costs that are not captured in the market price (a negative externality argument). The welfare economist is also correct: the tax drives a wedge between what buyers pay (£1.40) and what sellers receive (£0.90), reducing quantity below the private market equilibrium and destroying the surplus that would have been generated by the 3 million cans no longer traded. Whether the policy is desirable overall depends on whether the external health benefits (reduced NHS costs, better health outcomes) exceed the deadweight loss. This is precisely the equity-efficiency trade-off: the market equilibrium maximises total surplus in the narrow private sense, but if sugar consumption generates social costs, the competitive quantity is too high from a social standpoint — and a corrective tax moves output closer to the socially optimal level.',
      },
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
      {
        id: 'f4-l4-fc6',
        front: 'What is the First Fundamental Theorem of Welfare Economics?',
        back: 'Under conditions of perfect competition, no externalities, no public goods, and no information asymmetries, competitive markets produce a Pareto efficient outcome — one where it is impossible to make anyone better off without making someone else worse off. This is equivalent to maximising total surplus.',
        hint: 'Competitive markets = Pareto efficient = maximum TS, under strict conditions.',
        tags: ['allocative-efficiency', 'welfare', 'competitive-market'],
      },
      {
        id: 'f4-l4-fc7',
        front: 'How does a per-unit tax affect total surplus, consumer surplus, producer surplus, and government revenue?',
        back: 'A per-unit tax raises the buyer price and lowers the seller price, reducing quantity traded. CS falls (buyers pay more), PS falls (sellers receive less), but government collects tax revenue. Total surplus = CS + PS + government revenue, which is less than the pre-tax TS — the difference is deadweight loss, representing trades that no longer happen.',
        hint: 'Tax → CS↓, PS↓, govt revenue↑, but DWL means TS falls overall.',
        tags: ['deadweight-loss', 'tax', 'total-surplus', 'welfare'],
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
      {
        id: 'f4-l4-q4',
        type: 'mcq',
        question:
          'A linear demand curve has a maximum WTP of £80 and a linear supply curve has a minimum supply price of £20. Equilibrium price is £50 and equilibrium quantity is 60 units. Calculate total surplus.',
        options: [
          'TS = £1,800 (CS = £900 + PS = £900)',
          'TS = £3,600 (CS = £1,800 + PS = £1,800)',
          'TS = £900 (CS only)',
          'TS = £2,400 (CS = £1,200 + PS = £1,200)',
        ],
        correctAnswer: 0,
        explanation:
          'CS = ½ × 60 × (£80 − £50) = ½ × 60 × £30 = £900. PS = ½ × 60 × (£50 − £20) = ½ × 60 × £30 = £900. TS = £900 + £900 = £1,800.',
        marks: 3,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q5',
        type: 'mcq',
        question:
          'After a £10 per-unit tax, the buyer price rises from £40 to £46, the seller price falls to £36, and quantity falls from 100 to 80 units. CS was £500 before the tax. Which of the following correctly describes what happens to total surplus?',
        options: [
          'Total surplus falls because the tax creates deadweight loss on the 20 units no longer traded',
          'Total surplus rises because the government collects tax revenue that adds to overall welfare',
          'Total surplus is unchanged because the tax simply redistributes surplus from buyers and sellers to the government',
          'Total surplus falls to zero because no trades generate surplus when a tax exists',
        ],
        correctAnswer: 0,
        explanation:
          'A tax redistributes some CS and PS to the government as tax revenue, but also eliminates trades that would have been mutually beneficial (the 20 units no longer traded). The lost surplus on those 20 units is deadweight loss — genuine destruction of value that goes to nobody. Therefore total surplus (CS + PS + government revenue) falls.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q6',
        type: 'mcq',
        question:
          'A monopolist produces 50 units at a price of £60, while the competitive equilibrium would be 80 units at a price of £40. What does the triangle between quantity 50 and 80, bounded by the demand and supply curves, represent?',
        options: [
          'Deadweight loss — the surplus destroyed because the monopolist restricts output below the efficient level',
          'The monopolist\'s profit from charging above marginal cost',
          'Consumer surplus transferred from buyers to the monopolist',
          'The additional producer surplus the monopolist earns from a higher price',
        ],
        correctAnswer: 0,
        explanation:
          'The triangle between Q = 50 and Q = 80, bounded by the demand curve above and the supply curve below, is the deadweight loss of monopoly. It represents the surplus that would have been generated by the 30 units not produced — trades that would have benefited buyers (who value them above MC) that the monopolist blocks to maintain a higher price.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q7',
        type: 'mcq',
        question:
          'A government introduces a minimum wage above the competitive market wage in a labour market. Which of the following best describes the welfare effects?',
        options: [
          'Workers who keep their jobs gain PS (higher wage), but some workers lose jobs creating DWL, and the overall effect on total surplus is negative',
          'Total surplus rises because workers earning higher wages spend more, boosting demand',
          'Total surplus is unchanged because the minimum wage simply transfers surplus from employers to workers',
          'Allocative efficiency improves because MB = MC is now satisfied at the new wage',
        ],
        correctAnswer: 0,
        explanation:
          'The minimum wage above equilibrium raises wages for employed workers (increasing their producer surplus), but reduces employment below the efficient level. The workers who lose their jobs and the employers who would have hired them represent the deadweight loss — mutually beneficial trades that no longer occur. Total surplus falls by this DWL triangle, even though some workers are better off.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q8',
        type: 'mcq',
        question:
          'Competitive market equilibrium maximises total surplus because:',
        options: [
          'At Q*, all trades where MB ≥ MC occur, and no trades where MC > MB are forced; any other quantity either leaves surplus uncreated or forces value-destroying trades',
          'At Q*, all consumers pay the same price and all producers receive the same revenue',
          'At Q*, consumer surplus always equals producer surplus',
          'At Q*, the government collects maximum tax revenue without distorting output',
        ],
        correctAnswer: 0,
        explanation:
          'The efficiency of competitive equilibrium follows from the MB = MC condition at Q*. Below Q*, trades with MB > MC exist but do not happen (lost surplus). Above Q*, trades with MC > MB would occur (destroyed value). Only at Q* is total surplus maximised — every worthwhile trade happens and no wasteful ones do.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q9',
        type: 'mcq',
        question:
          'A policy maker argues: "We should cap rents at 50% of market rent to help low-income tenants." An economist responds that while this improves equity, it reduces allocative efficiency. What economic mechanism explains the efficiency loss?',
        options: [
          'The rent cap reduces the quantity of rental housing supplied below the efficient level, creating deadweight loss as mutually beneficial landlord-tenant trades no longer occur',
          'The rent cap increases allocative efficiency because it moves prices closer to marginal cost for landlords',
          'The efficiency loss arises because low-income tenants spend their savings on other goods, distorting other markets',
          'There is no efficiency loss because rent caps redistribute surplus from landlords to tenants without affecting total surplus',
        ],
        correctAnswer: 0,
        explanation:
          'A rent cap below equilibrium creates a price ceiling. Landlords reduce supply (quantity supplied at the lower rent falls below quantity demanded), so some mutually beneficial trades — tenants who would pay more than the landlord\'s minimum WTA — no longer occur. This gap between quantity supplied and demanded represents deadweight loss: real housing services that could have benefited both parties are not provided. The equity gain (lower rents for those who get housing) comes at a cost of reduced total surplus.',
        marks: 2,
        difficulty: 'foundation',
      },
      {
        id: 'f4-l4-q10',
        type: 'mcq',
        question:
          'A market has CS = £600 and PS = £400 at competitive equilibrium. A monopolist then restricts output, reducing CS to £250 and PS to £500, with a deadweight loss triangle of £100. What is total surplus under the monopoly, and what has happened to the missing value?',
        options: [
          'TS = £750; the £100 DWL is genuinely destroyed — it goes to nobody',
          'TS = £850; the DWL is transferred to the monopolist as extra profit',
          'TS = £1,000; total surplus is unchanged under monopoly',
          'TS = £650; DWL represents the consumer surplus transferred to the producer',
        ],
        correctAnswer: 0,
        explanation:
          'Under monopoly: TS = CS + PS = £250 + £500 = £750. Compare to competitive TS = £600 + £400 = £1,000. The difference is £250 — but note: PS rose from £400 to £500 (the monopolist captured £100 of what was CS), and DWL = £100 (genuinely destroyed). The £150 transferred from CS to PS is a redistribution, not a loss. The £100 DWL is the actual welfare destruction: surplus that nobody gets because those trades no longer happen.',
        marks: 3,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Choose a real-world policy that creates deadweight loss — for example, a tax on a specific good (sugar tax, cigarette tax, fuel duty), a price control (rent control, minimum wage, agricultural price support), or a trade restriction (tariff, import quota). Analyse the welfare effects using the total surplus framework: (1) identify the CS, PS, government revenue (if any), and DWL triangles; (2) explain who gains and who loses; (3) discuss whether the policy might still be justified on equity or externality grounds even though it creates DWL. Write 300–400 words and sketch a labelled supply-and-demand diagram if possible.',
      rubric: 'Accurate identification of the policy and its effect on equilibrium price and quantity (1 mark). Correct description of CS, PS, and DWL areas with reference to the diagram (3 marks). Clear explanation of who gains and who loses surplus, distinguishing transfers from genuine DWL (2 marks). Balanced evaluation of whether the policy is justified on equity or externality grounds, with specific reasoning (2 marks). Quality of economic reasoning and use of terminology (1 mark). Total: 9 marks.',
      exampleTopics: [
        'UK sugar levy on soft drinks: CS falls as consumers pay more, PS falls as producers receive less, government gains revenue, DWL from lost trades — but external health benefits may justify the policy',
        'Rent control in cities like New York or London: landlords reduce supply, tenants lucky enough to have controlled accommodation gain, but overall housing shortage creates DWL',
        'UK fuel duty: large tax wedge between pump price and producer price; evaluate who bears the burden given inelastic demand',
        'EU agricultural price supports (CAP intervention prices): farmers gain PS, consumers lose CS, taxpayers fund surplus purchases — is food security worth the efficiency cost?',
        'Minimum wage above equilibrium: employed workers gain, some workers lose jobs — evaluate using total surplus and equity arguments',
      ],
    },
  },
]
