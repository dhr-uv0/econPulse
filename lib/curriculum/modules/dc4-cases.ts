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
      isStub: false,
      conceptualExplanation:
        'Every DECA role-play, no matter the event category, presents you with a business situation containing a specific challenge. High-scoring competitors do not freestyle their response — they work from a repeatable framework. The most widely used structure is SPAR: Situation (what is the context?), Problem (what is the core issue the business faces?), Analysis (what economic and business principles explain why the problem exists and what the options are?), and Recommendation (what specific course of action should the firm take, and how do you justify it?). Internalising this structure means you never freeze during the 10-minute preparation period; instead, you systematically fill in each quadrant of your mental template and emerge with a coherent narrative.\n\nThe Analysis step is where economics earns you marks. Judges award points for connecting your recommendation to underlying principles — price elasticity if you are discussing a price change, opportunity cost if you are evaluating a capital investment, or market structure if you are advising on competitive positioning. A recommendation unsupported by analysis is merely opinion; one grounded in economic reasoning is a professional business judgement. Practise SPAR on past situations until the structure is automatic, then layer in increasingly precise economic vocabulary to elevate your score from proficient to exemplary.',
      thinkAboutIt: {
        question: `A competitor reads a role-play card, immediately says "I recommend the firm open a second location," and spends the rest of prep time rehearsing delivery. Where has this competitor broken the SPAR framework, and what specific damage will this do to their score even if the delivery is polished?`,
        answer: `The competitor has jumped straight to Recommendation while skipping Situation, Problem, and — most damagingly — Analysis entirely. Without first establishing the Situation, they risk proposing a solution that ignores key facts on the card, such as the firm's cash position or a stated capacity constraint. Without naming the Problem precisely, the recommendation may address a symptom (slow sales) rather than the actual root cause (say, an elastic-demand pricing error), making it technically irrelevant to what the judge is testing. The real cost, though, is in Analysis: judges score heavily on whether a recommendation is justified by economic or business reasoning, not merely stated. A polished delivery of an unsupported opinion will read as confident but shallow, and an experienced judge will probe with a follow-up question the competitor cannot answer because no analysis was ever done. The fix is disciplined time allocation — resist the urge to "solve" on first read, and force yourself through all four SPAR quadrants before locking in a recommendation.`,
      },
    },
    lessonAssignment: {
      prompt: `ROLE-PLAY: You are a business consultant meeting with the owner of a regional chain of 12 fitness studios. The studios have seen a 15% drop in new membership sign-ups over the past two quarters, while renewal rates for existing members remain stable. The owner is unsure whether to blame the economy, a new low-cost competitor that opened nearby, or the studios' own marketing.\n\n(a) Using the Situation and Problem steps of the SPAR framework, identify the specific business problem you would investigate first, and state two additional pieces of information you would ask the owner for before analysing further. [4 marks]\n\n(b) Using the Analysis step, propose two distinct economic explanations (e.g., substitute competition, income effects, marketing elasticity) for the drop in new sign-ups, and explain the reasoning behind each. [6 marks]\n\n(c) Using the Recommendation step, select the single most likely explanation and propose one specific, actionable recommendation the owner should implement in the next 90 days. [4 marks]\n\n(d) Explain how you would justify your recommendation to the owner in under two minutes, referencing the economic reasoning from part (b) without using jargon the owner would not understand. [6 marks]`,
      rubric: `(a) Correct identification that new sign-ups (not renewals) is the specific problem to isolate (2 pts). Two relevant follow-up questions, e.g. competitor's pricing/location or recent marketing spend changes (1 pt each). Total: 4 pts.\n\n(b) Two distinct, plausible economic explanations identified (2 pts each): e.g. cross-price elasticity (low-cost competitor as a substitute pulling away price-sensitive prospects) and reduced local income/discretionary spending. Explanation links the mechanism to the specific 15% sign-up drop (2 pts). Total: 6 pts.\n\n(c) Clear selection of the most likely single cause with brief justification for why it was chosen over the alternative (2 pts). Specific, actionable, time-bound recommendation (e.g., introduce a tiered price-matching trial membership) (2 pts). Total: 4 pts.\n\n(d) Recommendation is explained in plain, owner-friendly language (2 pts). Economic reasoning from (b) is present but simplified, not omitted (2 pts). Delivery is concise and would plausibly fit under two minutes (2 pts). Total: 6 pts.`,
      exampleTopics: [
        'Apply the SPAR framework in strict sequence: isolate the specific problem (new sign-ups, not renewals) before jumping to a recommendation.',
        'Generate multiple competing economic explanations (cross-price elasticity, income effects, marketing elasticity) rather than settling on the first plausible story.',
        'Select and justify a single recommendation using economic reasoning, showing the judge the "why" behind the "what."',
        'Translate technical economic vocabulary into owner-friendly language without losing analytical rigor — a core DECA presentation skill.',
      ],
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
      isStub: false,
      conceptualExplanation:
        'Pricing is the single most powerful lever a business controls — a 1% improvement in price typically generates more profit impact than a 1% reduction in cost or a 1% increase in volume. In a DECA role-play, pricing questions are almost always disguised as broader business problems: "sales are declining," "we need to grow revenue," or "a competitor just cut prices." Recognising that these are fundamentally pricing problems allows you to bring the right economic tools to bear. Price elasticity of demand (PED) is the cornerstone: if demand is inelastic (|PED| < 1), a price increase raises total revenue; if elastic (|PED| > 1), a price decrease is needed to grow revenue. Always begin your pricing analysis by estimating whether the relevant market is more elastic or inelastic before recommending a direction.\n\nBeyond basic elasticity, sophisticated DECA competitors know three additional strategies. Price discrimination — charging different prices to different customer segments based on their willingness to pay — is practiced by airlines (early vs. last-minute fares), software firms (student vs. enterprise licences), and theme parks (age-based pricing). Bundling combines products at a package price that captures consumer surplus while raising average transaction value. Dynamic pricing (surge pricing) adjusts prices in real time based on demand conditions, used by Uber, hotels, and Amazon. Each strategy has a condition: price discrimination requires separated markets, bundling works when products have correlated demand, and dynamic pricing requires real-time data infrastructure. Matching the right strategy to the firm\'s specific context is what separates a high-scoring DECA response from a generic one.',
      thinkAboutIt: {
        question: `A movie theater sells popcorn far above its production cost and offers a "combo" that bundles a large popcorn with a large soda at a price lower than buying both separately, even though soda margins are razor-thin. Is the theater practicing price discrimination, bundling, or both, and what would happen to theater profit if it were forced by regulation to sell every item only à la carte?`,
        answer: `This is bundling, not price discrimination in the classic sense — the theater is not charging different customers different prices for the identical combo; it is packaging two complementary items to raise the average transaction value and capture consumers who value the pair more than the sum of their individual willingness to pay. It also has an element of price discrimination through the menu itself: by offering multiple sizes and combo tiers, the theater lets customers self-select into a price/quantity tier that reveals how much they are willing to spend, which is a form of second-degree price discrimination. If forced to sell everything à la carte, the theater would likely lose the customers whose combined valuation of popcorn plus soda exceeded the combo price but fell short of the sum of the individual prices — those marginal high-volume consumers would either buy less or switch to one item only. Overall revenue and profit would likely fall, since the bundle is specifically engineered to convert consumer surplus that à la carte pricing would otherwise leave on the table. The theater would need to substantially cut individual prices to recover the lost volume, and given popcorn's near-zero marginal cost, this would be a costly and inefficient replacement for the current strategy.`,
      },
    },
    lessonAssignment: {
      prompt: `ROLE-PLAY: You are the new pricing manager for a mid-sized airline operating short-haul domestic routes. Leisure travelers who book more than 21 days in advance have a PED of −2.4 for your routes. Business travelers who book within 3 days of departure have a PED of −0.5. Currently, the airline charges every passenger the same $180 fare regardless of booking window, and load factors (percentage of seats filled) are stuck at 68%, well below the industry average of 82%.\n\n(a) Using PED, explain why charging a single uniform fare of $180 to both leisure and business travelers is economically inefficient, and identify which segment is most under-priced and which is most over-priced. [5 marks]\n\n(b) Design a two-tier fare structure (advance-purchase discount fare and last-minute business fare) that would improve total revenue. State approximate fare levels and briefly justify each using the respective PED. [6 marks]\n\n(c) Identify the two conditions required for this price discrimination strategy to work in practice, and explain how the airline enforces each one operationally. [5 marks]\n\n(d) Evaluate one risk this strategy poses to the airline's brand or customer relationships, and propose a way to mitigate it. [4 marks]`,
      rubric: `(a) Correct explanation that a single price fails to capture the different elasticities — leisure travelers (elastic, PED −2.4) are being over-charged relative to their price sensitivity and will avoid booking, while business travelers (inelastic, PED −0.5) are being under-charged relative to what they would pay (3 pts). Correct identification of over-priced (leisure) and under-priced (business) segments (2 pts). Total: 5 pts.\n\n(b) Advance leisure fare set below $180 (e.g., $130–150) with reasoning tied to elastic demand raising volume and revenue (3 pts). Last-minute business fare set above $180 (e.g., $240–280) with reasoning tied to inelastic demand tolerating a price rise without much volume loss (3 pts). Total: 6 pts.\n\n(c) Market power / ability to set price (not perfectly competitive) identified (1–2 pts). Segments must be separable and arbitrage-proof, with operational enforcement described (e.g., non-refundable advance tickets, name-locked bookings, booking-window restrictions preventing resale) (3 pts). Total: 5 pts.\n\n(d) Plausible risk identified, e.g., business travelers perceiving unfairness, brand reputation damage, or leisure travelers gaming the system (2 pts). Reasonable mitigation proposed, e.g., transparent fare-rules communication or loyalty perks (2 pts). Total: 4 pts.`,
      exampleTopics: [
        'Apply differing PED values to two customer segments to justify a two-tier pricing strategy rather than a single uniform price.',
        'Set specific numerical fare levels for each segment and justify the direction and magnitude of each price relative to elasticity.',
        'Explain the two structural conditions (market power, arbitrage-proof segmentation) that make airline price discrimination viable and how airlines enforce them.',
        'Weigh a business risk of price discrimination (perceived unfairness) against its revenue benefit, and propose a concrete mitigation.',
      ],
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
      isStub: false,
      conceptualExplanation:
        "Porter's Five Forces gives a DECA competitor a structured lens for assessing industry attractiveness before recommending a market entry. The five forces are: (1) Threat of new entrants — how easy is it for a rival to do what the firm is considering? High barriers (capital requirements, brand loyalty, regulation, economies of scale) reduce this threat and make the market more attractive. (2) Bargaining power of suppliers — if suppliers are concentrated, they can squeeze margins; a firm entering a market with powerful suppliers faces thin profits. (3) Bargaining power of buyers — concentrated or price-sensitive buyers can demand discounts, reducing the entrant's pricing power. (4) Threat of substitutes — if customers can easily switch to an alternative product or service, the entrant's ceiling price is constrained. (5) Intensity of rivalry — highly competitive markets with many similarly sized players compress margins and escalate marketing costs. Taken together, these five forces determine how much of the value a firm creates it will be able to capture as profit.\n\nMarket structure theory complements Porter by characterising the competitive environment. Entering a monopolistic competition market (e.g., fast casual dining) is relatively easy but delivers only normal profit in the long run. Entering an oligopoly (e.g., commercial aviation) requires overcoming enormous capital barriers but may yield supernormal profit if the entrant can carve out a sustainable niche. In your DECA role-play, always identify the structure, apply the relevant forces, and then make an explicit recommendation: enter, enter with a differentiation strategy, pursue a partnership instead of solo entry, or avoid the market entirely. Judges reward the specificity of your strategic reasoning.",
      thinkAboutIt: {
        question: `A firm evaluates entering an industry and finds that four of the five forces are favourable (low buyer power, low supplier power, few substitutes, low rivalry), but barriers to entry are also low, meaning the threat of new entrants is high. Should the firm still enter? Explain how the "threat of new entrants" force is different in character from the other four once the firm has actually entered the market.`,
        answer: `The firm should be cautious rather than simply reading four favourable scores as a green light, because low entry barriers mean any attractive profit the firm earns after entering will itself attract further entrants, eroding the very conditions that made the market appealing in the first place. The other four forces describe the ongoing bargaining environment the firm will operate within once inside the industry, but the threat of new entrants is forward-looking and self-correcting: high profits are the signal that invites the next wave of competitors, whether the firm is the incumbent or the new entrant itself. In effect, low barriers convert what looks like a permanently attractive market into a temporarily attractive one, since supernormal profits get competed away as more firms enter, in the same way they would under monopolistic competition or perfect competition. A sound recommendation would be to enter only if the firm can also do something to raise barriers on its own behalf after entering, such as building brand loyalty, securing exclusive supplier contracts, or achieving scale economies quickly, since these actions convert an initially unprotected profit opportunity into a more durable one.`,
      },
    },
    lessonAssignment: {
      prompt: `ROLE-PLAY: A mid-sized regional grocery chain is considering entering the meal-kit delivery market (pre-portioned ingredients with recipes, delivered weekly), currently dominated by two large national players (HelloFresh-style firms) who together hold roughly 65% market share. Entry requires significant investment in refrigerated logistics, but the chain already owns a regional distribution network from its grocery operations.\n\n(a) Apply Porter's Five Forces to this market entry decision, briefly rating each of the five forces (high/medium/low threat to a new entrant) with one sentence of justification each. [10 marks]\n\n(b) Identify the market structure that best describes the meal-kit delivery industry given the two-firm dominance described, and explain what this implies about likely competitive response if the grocery chain enters. [5 marks]\n\n(c) Recommend whether the chain should enter directly, enter through a differentiated niche strategy, or avoid the market, and justify your recommendation using at least two of the five forces from part (a). [5 marks]`,
      rubric: `(a) Each of the five forces rated with a plausible threat level and one-sentence justification specific to this case (2 pts each, 10 pts total): e.g. threat of new entrants (medium — logistics network is an advantage but capital-light rivals could still emerge), supplier power (low-medium — chain already has grocery supplier relationships), buyer power (medium-high — customers can easily cancel subscriptions), threat of substitutes (high — grocery shopping and takeout are close substitutes), rivalry (high — two dominant incumbents with brand recognition and lower per-unit costs from scale).\n\n(b) Correct identification of oligopoly (two dominant firms with ~65% combined share) (2 pts). Correct implication that incumbents are likely to respond aggressively (price cuts, marketing spend) to protect share, and that the entrant must avoid head-to-head price competition (3 pts). Total: 5 pts.\n\n(c) Clear, specific recommendation stated (2 pts). Justification explicitly ties back to at least two named forces from part (a), e.g. leveraging low supplier power (existing distribution network) while avoiding direct rivalry through a differentiated angle such as locally-sourced or allergen-specific kits (3 pts). Total: 5 pts.`,
      exampleTopics: [
        'Rate all five of Porter\'s forces individually with case-specific justification rather than a generic industry description.',
        'Identify oligopoly as the market structure from the two-firm dominance clue and connect it to likely competitive retaliation.',
        'Use the existing grocery distribution network as a concrete competitive advantage (lower supplier power / cost barrier) in the analysis.',
        'Recommend a differentiation-based entry strategy rather than head-to-head price competition against scaled incumbents.',
      ],
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
      isStub: false,
      conceptualExplanation:
        'Every business decision has a cost dimension, and DECA judges reward competitors who can quantify their recommendations. The fundamental distinction is between fixed costs — expenses that do not vary with output (rent, salaried staff, insurance) — and variable costs — expenses that rise with each additional unit produced or sold (materials, hourly labour, packaging). Total cost is the sum of both. Contribution margin (CM) is the amount each unit sold contributes toward covering fixed costs and, eventually, generating profit: CM = Selling Price − Variable Cost per Unit. A positive CM means every sale moves the business closer to breaking even; a negative CM means every sale deepens the loss and the product should be discontinued.\n\nThe break-even point (BEP) is the output level at which total revenue exactly equals total cost — neither profit nor loss. The formula is BEP (units) = Fixed Costs ÷ Contribution Margin per Unit. In a DECA role-play, the break-even calculation is your financial anchor: it tells a judge exactly how many units or how much revenue the firm must generate before a proposed investment pays off. For instance, if you recommend a $50,000 marketing campaign, you can immediately calculate how many additional units must be sold to justify that spend. Presenting this figure — rather than just asserting "the campaign will increase sales" — demonstrates financial literacy and dramatically elevates your score.',
      thinkAboutIt: {
        question: `A firm's break-even calculation says it needs to sell 5,000 units to cover fixed costs. It sells exactly 5,000 units this year. A competitor congratulates the owner on "breaking even and making a solid profit." Is the competitor's statement correct? What is the owner's actual profit at exactly the break-even point, and why is reaching break-even still a meaningful milestone even though it is not the same as profit?`,
        answer: `The competitor is incorrect: by definition, the break-even point is where total revenue exactly equals total cost, so profit at exactly 5,000 units is zero, not positive. The confusion likely arises because "breaking even" sounds like a success, and it is, but the specific financial meaning is that the firm has covered all its fixed and variable costs without yet generating a surplus. Reaching break-even is still meaningful because it marks the transition point: every unit sold beyond 5,000 contributes its full per-unit contribution margin directly to profit, since fixed costs are already fully recovered. This is why DECA competitors should present break-even not as an end goal but as a milestone within a larger financial narrative — for example, "the campaign needs 5,000 units to break even, and management projects 6,200 units in year one, implying a projected profit of contribution margin times 1,200 units." Presenting the break-even point alone, without discussing expected volume relative to it, leaves the financial analysis incomplete and invites exactly this kind of misunderstanding from a judge.`,
      },
    },
    lessonAssignment: {
      prompt: `ROLE-PLAY: You are advising the owner of an independent bakery who is considering adding a espresso bar inside the existing storefront. Fixed costs for the espresso bar (equipment lease, additional staffing, permits) are $2,400 per month. Each drink sells for $5.50 and costs $1.90 in ingredients, cups, and lids. The owner believes the bakery's existing foot traffic can support roughly 700 drinks per month but is unsure if the investment is worthwhile.\n\n(a) Calculate the contribution margin per drink and the monthly break-even quantity for the espresso bar. Show your work. [5 marks]\n\n(b) Given the owner's estimate of 700 drinks per month in foot traffic, calculate the projected monthly profit (or loss) from the espresso bar and state whether the investment appears financially justified. [4 marks]\n\n(c) Identify one way the owner could lower the break-even quantity without cutting the selling price, and explain the mechanism by which your suggestion achieves this. [5 marks]\n\n(d) The owner is worried that adding an espresso bar might cannibalize existing pastry sales (customers who used to buy a $4 pastry alone now buy only a $5.50 coffee). Explain how this concern should be incorporated into the financial analysis beyond the simple break-even calculation. [4 marks]`,
      rubric: `(a) CM per drink = $5.50 − $1.90 = $3.60 correctly calculated (2 pts). BEP = $2,400 ÷ $3.60 = 667 drinks (rounded appropriately), correctly calculated with formula shown (3 pts). Total: 5 pts.\n\n(b) Profit at 700 drinks = (700 − 667) × $3.60 ≈ $119, OR full calculation: Revenue $3,850 − Variable Cost $1,330 − Fixed Cost $2,400 = $120 (2 pts). Correct conclusion that the investment is only marginally profitable at the estimated volume, not a clear win (2 pts). Total: 4 pts.\n\n(c) Plausible fixed- or variable-cost-reducing suggestion identified, e.g. negotiating a lower equipment lease, cross-training existing bakery staff instead of hiring new staff, or buying beans in bulk to cut variable cost per drink (2 pts). Correct mechanism explained — reducing fixed costs directly lowers BEP; reducing variable cost per unit raises CM and also lowers BEP (3 pts). Total: 5 pts.\n\n(d) Recognition that cannibalization means some "new" coffee revenue is not truly incremental — it replaces pastry revenue that would have occurred anyway (2 pts). Explanation that true incremental profit must net out lost pastry contribution margin, not just add coffee profit on top (2 pts). Total: 4 pts.`,
      exampleTopics: [
        'Correctly apply the CM and break-even formulas with the bakery\'s specific numbers, showing full calculation work.',
        'Compare projected volume against break-even quantity to reach a financially grounded profit/loss conclusion, not just state the BEP in isolation.',
        'Distinguish between lowering fixed costs and raising contribution margin as two distinct levers for reducing break-even quantity.',
        'Recognize and correctly analyze revenue cannibalization as a hidden cost that a naive break-even calculation would miss.',
      ],
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
      isStub: false,
      conceptualExplanation:
        'The 2022–2024 inflation cycle was the most consequential macroeconomic event for businesses in four decades, with US CPI peaking at 9.1% in June 2022 before the Federal Reserve\'s aggressive rate-hiking campaign gradually pulled it back toward 3%. For DECA competitors, this period is a live case study in how macroeconomic forces translate into firm-level decisions. The core challenge: input costs (energy, raw materials, logistics) rose sharply while consumer spending power eroded, squeezing margins from both sides. Firms faced a painful choice — pass costs on to consumers (raising prices, risking volume loss if demand is elastic) or absorb costs (protecting volume but compressing profit margins). The elasticity of demand for the firm\'s product was the decisive variable. Companies selling necessities (grocery staples, utilities) successfully passed costs through; companies selling discretionary goods (fast casual dining, apparel) were forced to absorb more because customer defection was a real risk.\n\nThree strategic responses dominated the business headlines. First, shrinkflation — reducing product size or weight while maintaining the sticker price — allowed firms to raise the effective unit price without triggering the psychological resistance of a visible price increase. Second, supply chain diversification — reducing dependence on single-source suppliers or single geographies — became a priority as geopolitical risk and logistics bottlenecks compounded raw material cost volatility. Third, firms with pricing power locked in long-term supply contracts at fixed prices, transferring inflation risk to suppliers, while simultaneously moving to floating-rate pricing with customers. In a DECA role-play set in a high-inflation context, demonstrating awareness of these strategies and choosing among them based on the firm\'s demand elasticity, cost structure, and competitive position will separate a proficient response from an outstanding one.',
      thinkAboutIt: {
        question: `A firm selling a necessity good with inelastic demand decides it can simply "pass through" 100% of its cost increases to consumers indefinitely during an inflationary period, with no strategic risk. Is this reasoning sound? Identify at least one way this strategy could still backfire even though the good's demand is inelastic in the short run.`,
        answer: `The reasoning is incomplete because it treats elasticity as a fixed, permanent property, when in fact elasticity typically rises over the relevant time horizon as consumers find ways to adapt that were not available to them immediately. Even for a necessity, repeated price increases can push consumers toward substitutes that did not previously seem attractive, such as store brands instead of name brands, or reduced consumption of the good altogether, so what looks inelastic in the short run may prove considerably more elastic after several rounds of pass-through. There is also a reputational and political risk: repeated visible price increases on necessities can attract regulatory scrutiny, accusations of "greedflation," or reputational damage that a firm selling discretionary goods would not face to the same degree, since necessities are viewed as socially essential. Finally, if competitors in the same necessity market choose to absorb costs and hold prices instead, the fully-passing-through firm may lose market share even with genuinely inelastic aggregate demand, because inelastic demand for the category overall does not guarantee inelastic demand for one specific firm's brand within that category. A sound strategy would combine partial pass-through with cost-management efforts like shrinkflation or supply chain diversification, rather than relying on 100% pass-through as a permanent solution.`,
      },
    },
    lessonAssignment: {
      prompt: `ROLE-PLAY: You are the VP of Strategy for a mid-sized packaged snack food company. Over the past 18 months, input costs (wheat, palm oil, packaging, freight) have risen 22%, while the company has only raised retail prices by 9% so far, fearing consumer backlash. Market research shows the company's PED is −0.7 for its flagship product, but −1.9 for its private-label competitor sold by the same grocery chains.\n\n(a) Using the PED data given, explain why the company has room to raise prices further on its flagship product, and calculate the approximate revenue impact of an additional 8% price increase (assume current monthly revenue is $4.2 million and use the PED to estimate the resulting change in quantity demanded). [6 marks]\n\n(b) Identify and explain two non-price strategies (e.g., shrinkflation, supply chain diversification, reformulation) the company could use instead of, or alongside, further price increases to protect its margin. [6 marks]\n\n(c) The private-label competitor has a much higher PED (−1.9). Explain what this implies about the private-label brand's ability to raise its own prices during the same inflationary period, and how this affects the flagship product's competitive position. [4 marks]\n\n(d) Recommend a combined strategy (pricing plus at least one non-price lever) for the next two quarters, and justify why this combination is superior to relying on price increases alone. [4 marks]`,
      rubric: `(a) Correct reasoning that |PED| = 0.7 < 1 (inelastic) means a price rise increases total revenue with limited volume loss (2 pts). Reasonable quantitative estimate: 8% price rise × PED −0.7 ≈ 5.6% fall in quantity, so revenue rises by roughly 8% − 5.6% ≈ 2.4% net, i.e. an increase of roughly $100,000/month (accept reasonable approximations with correct method) (4 pts). Total: 6 pts.\n\n(b) Two distinct non-price strategies identified (1 pt each) with a clear mechanism explained for each specific to this snack company, e.g. shrinkflation (reduce bag weight 10% while holding price, raising effective unit price without visible sticker shock) and supply diversification (source palm oil from multiple regions to reduce exposure to a single volatile supplier) (2 pts each). Total: 6 pts.\n\n(c) Correct explanation that the private label's elastic demand (|PED| = 1.9 > 1) means it cannot easily raise price without losing significant volume, so it will likely under-price relative to cost increases, potentially widening the price gap and pulling price-sensitive consumers away from the flagship brand (4 pts). Total: 4 pts.\n\n(d) Combined strategy stated with a specific pricing action and specific non-price lever from part (b) (2 pts). Justification correctly notes that relying on price alone risks eventual consumer defection and reputational cost, while a combined approach spreads the burden and preserves both margin and volume (2 pts). Total: 4 pts.`,
      exampleTopics: [
        'Use the given PED values to quantitatively justify (not just assert) a specific pricing recommendation, including an approximate revenue calculation.',
        'Distinguish price-based and non-price-based inflation-response strategies and explain the specific mechanism of each (shrinkflation, diversification, reformulation).',
        'Compare two products\' elasticities to reason about relative competitive positioning during a shared cost shock.',
        'Justify a blended strategy over a single-lever strategy using the specific risks of over-relying on price increases alone.',
      ],
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
      isStub: false,
      conceptualExplanation:
        'Interest rates are the price of money, and when that price changes dramatically — as it did from 2022 to 2024, when the Federal Reserve raised the federal funds rate from near zero to 5.25–5.50% — the consequences ripple through every asset class and business model. The transmission mechanism works through three channels. First, the cost of debt rises: mortgages, business loans, and corporate bonds all become more expensive, directly raising the cost of capital for any investment that relies on borrowed funds. Second, the discount rate used to value future cash flows increases. This is particularly punishing for high-growth technology firms, whose valuations depend heavily on earnings projected far into the future — a higher discount rate shrinks the present value of those distant earnings dramatically, even if the earnings forecast itself is unchanged. Third, consumer and business borrowing falls as higher rates make credit less affordable, reducing aggregate demand.\n\nReal estate is the most rate-sensitive sector in the economy. As mortgage rates climbed from 3% to over 7% in 2022–2023, monthly payment costs on a median-priced US home roughly doubled, pricing millions of potential buyers out of the market and causing transaction volumes to collapse even as prices remained sticky (few existing owners were willing to give up their locked-in 3% mortgages by selling). For DECA role-plays involving real estate development, retail expansion requiring new leases, or any capital-intensive business considering a major investment, the interest rate environment is the first contextual factor to assess. A well-structured recommendation will acknowledge the rate cycle, assess whether rates are rising or falling, and adjust the timing and financing structure of the recommended investment accordingly.',
      thinkAboutIt: {
        question: `A small business owner says, "Interest rates don't affect my restaurant — I don't have any loans and I'm not planning to take one." Is the owner correct that rate changes are irrelevant to the business? Identify at least two indirect channels through which the interest rate cycle could still affect the restaurant even with zero debt.`,
        answer: `The owner is not correct — the absence of debt only shields the business from the direct cost-of-capital channel, but interest rates transmit through the economy via several indirect channels that reach every business regardless of its own balance sheet. First, higher rates reduce consumer discretionary spending, since consumers themselves face higher costs on mortgages, auto loans, and credit card balances, leaving less disposable income for dining out — a demand-side channel that directly reduces restaurant covers even though the restaurant itself borrowed nothing. Second, higher rates raise the opportunity cost of the restaurant's own cash reserves: money sitting idle in a bank account could instead be earning a materially higher risk-free return in a higher-rate environment, which changes the relative attractiveness of using retained cash for expansion versus other uses. Third, the restaurant's landlord, suppliers, and even its competitors are affected by rates, and their own cost pressures (e.g., a landlord refinancing a mortgage on the property at a higher rate) can be passed through as higher rent or higher wholesale food prices, indirectly raising the restaurant's costs. The lesson for a DECA competitor is that "the firm has no debt" is not sufficient grounds to dismiss interest rate context — a thorough analysis considers the whole transmission chain, not just the direct financing channel.`,
      },
    },
    lessonAssignment: {
      prompt: `ROLE-PLAY: You are advising the founder of a fast-growing direct-to-consumer furniture startup that has been profitable for two years and has zero debt. The founder is considering two options to fund a new warehouse and showroom expansion costing $3 million: (1) take out a bank loan at the current rate of 8.5% (up from 4.5% two years ago), or (2) raise equity financing by selling a 15% ownership stake to investors, which would dilute the founder's control but require no fixed repayment.\n\n(a) Explain how the rise in the interest rate from 4.5% to 8.5% affects the relative attractiveness of the loan option compared to two years ago, referencing the cost-of-debt channel specifically. [4 marks]\n\n(b) Calculate the annual interest cost of the $3 million loan at 8.5% (assume interest-only for simplicity) and explain what minimum level of additional annual profit the expansion must generate to justify this financing cost. [4 marks]\n\n(c) Identify one risk of the equity financing option that is unrelated to the interest rate environment, and one reason equity financing becomes relatively more attractive specifically because rates are high. [6 marks]\n\n(d) Recommend one of the two options (or a blended approach) and justify your recommendation using both the interest rate context and the founder's stated concern about control. [6 marks]`,
      rubric: `(a) Correct explanation that the near-doubling of the rate significantly raises the fixed cost of debt financing, making the loan option markedly less attractive than it would have been two years ago (4 pts).\n\n(b) Correct calculation: $3,000,000 × 8.5% = $255,000 annual interest (2 pts). Correct reasoning that the expansion must generate at least $255,000 in additional annual profit just to cover interest before any net benefit to the founder (2 pts). Total: 4 pts.\n\n(c) Non-rate-related equity risk correctly identified, e.g. loss of decision-making control or investor pressure for faster growth/exit (3 pts). Correct reasoning that high interest rates make debt relatively more expensive and risky (fixed repayment regardless of business performance), pushing capital-seeking firms toward equity even with its dilution cost (3 pts). Total: 6 pts.\n\n(d) Clear recommendation stated (2 pts). Justification explicitly references the elevated rate environment's effect on debt cost (2 pts) and explicitly addresses the founder's control concern in weighing the equity trade-off (2 pts). Total: 6 pts.`,
      exampleTopics: [
        'Explain the cost-of-debt transmission channel and how a near-doubling of rates changes the loan\'s relative attractiveness versus two years prior.',
        'Perform a concrete interest-cost calculation and translate it into a minimum required return threshold for the investment.',
        'Distinguish rate-driven risk from non-rate-driven risk when evaluating the equity financing alternative.',
        'Weigh a quantitative financing cost against a qualitative concern (control/dilution) to reach a justified, balanced recommendation.',
      ],
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
