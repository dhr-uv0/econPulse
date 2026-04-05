import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'dc6-entrepreneurship',
  title: 'DECA — Entrepreneurship',
  description: 'Entrepreneurial mindset, business planning, startup funding, and DECA entrepreneurship event preparation.',
  tier: 'DECA' as const,
  track: 'DECA' as const,
  unit: 6,
  estimatedHours: 3,
  color: '#06b6d4',
  icon: 'Briefcase',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: The Entrepreneurial Mindset ─────────────────────────────────────
  {
    id: 'dc6-l1',
    moduleId: 'dc6-entrepreneurship',
    title: 'The Entrepreneurial Mindset',
    description: 'Explore opportunity recognition, risk tolerance, creativity, and resilience — the core traits that distinguish successful entrepreneurs from the rest.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['DECA', 'entrepreneurship', 'mindset', 'opportunity-recognition'],
    content: {
      isStub: false,
      conceptualExplanation:
        'The entrepreneurial mindset is not a personality type reserved for a lucky few — it is a collection of learnable cognitive habits and behavioural dispositions that allow individuals to spot and act on opportunities others overlook. At its core, opportunity recognition is the ability to perceive a gap between what currently exists in the market and what customers actually need or desire. Successful entrepreneurs train themselves to observe friction in daily life — a process that is slow, a product that breaks, a service that frustrates — and ask the systematic question: "Could this be done better, and is there a profitable way to do it?" This habit of deliberate observation, combined with broad exposure to industries and consumer behaviour, is what produces the pattern-recognition that experienced entrepreneurs describe as instinct but is really accumulated, structured attention.\n\nRisk tolerance is frequently misunderstood as recklessness. In reality, high-performing entrepreneurs are not indifferent to risk — they are skilled at disaggregating it. They distinguish between risks they can control (execution quality, team selection, product design) and risks they cannot (macroeconomic shocks, competitor responses), and they focus their energy on reducing controllable uncertainty while accepting and planning for uncontrollable uncertainty. This nuanced relationship with risk is fundamentally different from gambling; it is closer to an engineer\'s approach to failure modes — identify what can go wrong, mitigate what you can, and build resilience buffers for what you cannot. Research by Saras Sarasvathy on expert entrepreneurs shows they use "effectuation" logic: rather than planning toward a fixed goal, they work from available means and acceptable loss thresholds, adapting continuously.\n\nCreativity and resilience are the operating system on which opportunity recognition and risk management run. Creativity in entrepreneurship is not artistic expression — it is the capacity to combine existing resources, ideas, or technologies in novel ways that produce new value. The most transformative businesses in recent decades (Airbnb, Uber, Spotify) did not invent fundamentally new technologies; they creatively recombined existing infrastructure (cars, smartphones, internet bandwidth) around a new organisational logic. Resilience, meanwhile, is what allows entrepreneurs to absorb the inevitable setbacks of the innovation process — rejected pitches, failed product launches, lost customers — without abandoning the venture. Psychologists studying entrepreneurial resilience find that it is not simply toughness; it involves cognitive reframing (interpreting failure as information rather than verdict) and a strong sense of mission that provides motivation independent of short-term outcomes.',
      realWorldHook:
        'When Sara Blakely invented Spanx in 2000, she was a 27-year-old fax-machine saleswoman with no fashion industry connections and $5,000 in savings. Every hosiery mill she approached rejected her idea. Rather than abandoning the concept, she drove to North Carolina herself, walked into mills, and eventually persuaded one manufacturer to take a chance after his daughters tried the prototype and loved it. Blakely cold-called the buyer at Neiman Marcus, secured a meeting, and demonstrated the product in the dressing room — securing a purchase order on the spot. She went on to become the youngest self-made female billionaire in history without taking a single dollar of outside investment. Her story is a textbook example of opportunity recognition (cutting the feet off pantyhose for a smoother look under slacks), calculated risk (investing her entire savings, no more), relentless creativity (demo-ing the product live), and resilience (absorbing dozens of rejections before breaking through).',
      interactiveElement:
        'Entrepreneurial Mindset Audit: For each of the four traits below, rate yourself 1–5 and write one specific piece of evidence (a real situation from your life) that supports your rating. Then identify one concrete action you could take in the next 30 days to strengthen the trait where you scored lowest.\n\n(1) Opportunity Recognition — Do you regularly notice problems or inefficiencies and imagine solutions?\n(2) Risk Tolerance — Can you make decisions with incomplete information without being paralysed by uncertainty?\n(3) Creativity — Do you generate novel combinations of ideas, or do you default to conventional approaches?\n(4) Resilience — When you face rejection or failure, do you recover quickly and extract lessons rather than quitting?\n\nAfter completing your audit, share your lowest-rated trait and your 30-day action plan with a classmate and hold each other accountable.',
      vocabulary: [
        {
          term: 'Opportunity Recognition',
          definition: 'The cognitive process by which an entrepreneur identifies a gap between current market offerings and unmet customer needs, and evaluates whether that gap can be exploited profitably.',
          example: 'Howard Schultz recognised that Americans wanted a European-style espresso bar experience that did not yet exist at scale in the United States — the gap between Italian café culture and American coffee shops became the founding insight of Starbucks.',
        },
        {
          term: 'Effectuation',
          definition: 'A decision-making logic used by expert entrepreneurs in which actions are driven by available means (who I am, what I know, whom I know) and acceptable loss rather than by a fixed predicted outcome.',
          example: 'Instead of writing a detailed five-year plan, a founder using effectuation might say: "I have $10,000, a network of restaurant owners, and culinary training — what can I create with these resources that I would be comfortable losing if it fails?"',
        },
        {
          term: 'Resilience',
          definition: 'The capacity to recover from setbacks, adapt to adverse conditions, and persist toward a goal despite obstacles — characterised in entrepreneurs by cognitive reframing of failure as actionable information.',
          example: 'James Dyson built 5,126 failed prototypes of his bagless vacuum cleaner over 15 years before producing the model that worked; he reframed each failure as a data point that narrowed the solution space rather than as evidence that the idea was flawed.',
        },
      ],
      deeperDive:
        'For DECA competitors preparing for Entrepreneurship events, the entrepreneurial mindset is not merely background knowledge — it is directly tested in role-play scenarios. Judges frequently present situations where a fictional entrepreneur must respond to an unexpected obstacle: a key supplier drops out, a competitor launches a similar product, or a regulatory change threatens the business model. Competitors who demonstrate genuine resilience and adaptive thinking in their response — rather than reciting a memorised framework — score in the Advanced Exemplary band. Practise by taking real startup post-mortems (CB Insights publishes hundreds) and role-playing how the founder should have responded at key decision points. This builds the instinct for adaptive reasoning that judges recognise immediately.\n\nAt a deeper theoretical level, scholars distinguish between two dominant models of entrepreneurial cognition. The "causation" model — taught in most business schools — begins with a desired outcome and works backward to identify the resources and actions needed to achieve it. The "effectuation" model, developed by Saras Sarasvathy through research with expert entrepreneurs, begins with available means and works forward to imagine what outcomes are achievable. Neither is universally superior: causation logic works well in stable, predictable environments where data is available; effectuation is more robust in highly uncertain early-stage environments where the market does not yet exist. Understanding which mode to apply — and being able to articulate the choice in a DECA presentation — signals the kind of sophisticated business reasoning that elevates scores from proficient to exemplary.',
      commonMisconceptions: [
        'Entrepreneurs are born, not made — risk tolerance and opportunity recognition are fixed personality traits. In reality, both are cognitive skills developed through deliberate practice, structured observation, and exposure to diverse industries and failure experiences.',
        'Risk tolerance means being comfortable with high probability of failure. In reality, successful entrepreneurs are skilled risk managers who actively work to reduce uncertainty and set explicit loss limits — they are not gamblers but calculated decision-makers operating under unavoidable uncertainty.',
        'Resilience is simply stubbornness — continuing to pursue a failing idea regardless of evidence. True entrepreneurial resilience involves cognitive flexibility: persisting on the mission while being willing to pivot the strategy when evidence demands it, distinguishing between a bad idea and a bad execution.',
      ],
      examinerTip:
        'In DECA Entrepreneurship role-plays, judges look for competitors who can name specific entrepreneurial traits and immediately connect them to the scenario at hand — not just list them abstractly. If the scenario involves a founder facing a funding rejection, explicitly say: "This situation calls for resilience — the entrepreneur should reframe this rejection as feedback, identify the specific objection the investor raised, and address it in the next pitch." That kind of precise, applied language scores at Advanced Exemplary because it demonstrates that you understand the concept deeply enough to deploy it in a novel context.',
      didYouKnow:
        'According to the Kauffman Foundation, the average age of a successful startup founder at the time of founding is 45 — not the twenty-something tech prodigy that dominates popular culture. Research published in the Harvard Business Review found that founders in their forties have roughly triple the success rate of twenty-year-old founders, largely because domain expertise, professional networks, and pattern recognition — all products of experience — are stronger predictors of startup success than youth or raw creativity.',
    },
    flashcards: [
      {
        id: 'dc6-l1-fc1',
        front: 'What is opportunity recognition, and what cognitive habit underlies it in successful entrepreneurs?',
        back: 'Opportunity recognition is the ability to perceive a gap between current market offerings and unmet customer needs. It is underpinned by deliberate observation — the habit of noticing friction in daily life and systematically asking whether that friction can be resolved profitably.',
        tags: ['DECA', 'entrepreneurship', 'mindset', 'opportunity-recognition'],
      },
      {
        id: 'dc6-l1-fc2',
        front: 'What is effectuation, and how does it differ from causation logic in entrepreneurial decision-making?',
        back: 'Effectuation begins with available means (skills, network, resources) and acceptable loss, working forward to possible outcomes. Causation begins with a fixed desired outcome and works backward to required resources. Effectuation is better suited to high-uncertainty, early-stage ventures; causation works better in stable, data-rich environments.',
        tags: ['DECA', 'entrepreneurship', 'mindset', 'effectuation'],
      },
      {
        id: 'dc6-l1-fc3',
        front: 'How do high-performing entrepreneurs manage risk differently from the common perception of risk-taking?',
        back: 'They disaggregate risk into controllable and uncontrollable components, aggressively reducing controllable uncertainty (execution quality, team, product design) while setting explicit loss limits for uncontrollable uncertainty. They are calculated risk managers, not gamblers.',
        tags: ['DECA', 'entrepreneurship', 'mindset', 'risk-tolerance'],
      },
    ],
    quiz: [
      {
        id: 'dc6-l1-q1',
        type: 'mcq',
        question: 'Which of the following best describes how successful entrepreneurs approach risk, according to research on entrepreneurial cognition?',
        options: [
          'They accept uncertainty without analysis, trusting that passion and persistence will overcome any obstacle.',
          'They disaggregate risk into controllable and uncontrollable components, reducing controllable uncertainty while setting explicit acceptable-loss limits.',
          'They avoid all forms of risk by conducting exhaustive market research before committing any resources.',
          'They rely exclusively on intuition built through prior startup experience, ignoring formal risk-assessment frameworks.',
        ],
        correctAnswer: 1,
        explanation: 'Research shows that experienced entrepreneurs are sophisticated risk managers who distinguish between what they can and cannot control. They work to reduce controllable uncertainty (execution, team, product design) while accepting and planning for uncontrollable uncertainty — this is fundamentally different from reckless risk-taking or risk avoidance.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l1-q2',
        type: 'mcq',
        question: 'A DECA judge presents a scenario in which a startup founder has just been rejected by ten angel investors. Which response most clearly demonstrates Advanced Exemplary understanding of entrepreneurial resilience?',
        options: [
          '"The founder should give up and reconsider whether the business idea is viable."',
          '"The founder should reframe each rejection as actionable feedback, identify the specific objection pattern across the ten rejections, revise the pitch to address that objection, and target investors whose portfolio focus aligns more closely with the startup\'s sector."',
          '"The founder should raise the valuation to signal confidence and approach the same investors again."',
          '"The founder should immediately pivot to a completely different business model to avoid further rejection."',
        ],
        correctAnswer: 1,
        explanation: 'Advanced Exemplary resilience involves cognitive reframing (failure as information, not verdict), systematic extraction of lessons, and adaptive action — not quitting, not repeating the same approach, and not wholesale abandonment of the concept. The correct answer demonstrates all three elements.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l1-q3',
        type: 'mcq',
        question: 'Which statement about opportunity recognition is most accurate?',
        options: [
          'It is a fixed trait present only in naturally creative individuals and cannot be developed through practice.',
          'It requires inventing entirely new technologies; improving existing products does not qualify.',
          'It is a learnable cognitive skill developed through deliberate observation of market friction and structured exposure to diverse industries.',
          'It is most reliably developed by studying economic theory in isolation from real-world consumer behaviour.',
        ],
        correctAnswer: 2,
        explanation: 'Opportunity recognition is a trainable cognitive skill, not a fixed personality trait. Research consistently shows it develops through deliberate practice: systematically observing friction, studying consumer behaviour, and accumulating cross-industry pattern recognition — not through purely theoretical study or innate creative talent.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Business Models & Value Propositions ────────────────────────────
  {
    id: 'dc6-l2',
    moduleId: 'dc6-entrepreneurship',
    title: 'Business Models & Value Propositions',
    description: 'Master the Business Model Canvas, revenue streams, cost structure, and competitive advantage — the architecture of a profitable venture.',
    order: 2,
    estimatedMinutes: 40,
    tags: ['DECA', 'entrepreneurship', 'business-model-canvas', 'value-proposition'],
    content: {
      isStub: false,
      conceptualExplanation:
        'A business model is the architecture of how a firm creates, delivers, and captures value. The most widely used tool for mapping this architecture is the Business Model Canvas (BMC), developed by Alexander Osterwalder. The BMC organises a business into nine interdependent building blocks: Customer Segments (who are you serving?), Value Propositions (what problem do you solve, and why is your solution better?), Channels (how do customers find, buy, and receive your product?), Customer Relationships (how do you acquire, retain, and grow the customer relationship?), Revenue Streams (how does the firm earn money from each customer segment?), Key Resources (what assets are essential to delivering the value proposition?), Key Activities (what must the firm do exceptionally well?), Key Partnerships (what can be outsourced or co-created to reduce cost or risk?), and Cost Structure (what are the major cost drivers, and are they fixed or variable?). Understanding all nine blocks — and more importantly, the dependencies between them — is the foundation of strategic business thinking.\n\nThe value proposition is the pivot on which the entire canvas turns. A compelling value proposition answers three questions simultaneously: What job is the customer trying to get done? What pain does the customer experience in trying to get it done today? And what gain does the customer hope for but not currently receive? A strong value proposition resolves the pain and delivers the gain in a way that is meaningfully differentiated from alternatives. This is distinct from a product feature list — it is a customer-centric statement of the transformation the product enables. The classic test is the "so what" filter: for every feature you claim as a benefit, ask "so what does that mean for the customer\'s life?" until you reach an emotional or economic outcome they actually care about. Products that fail to pass this test accumulate features without creating value, which is the most common cause of startup failure.\n\nRevenue streams and cost structure are the economic engine that determines whether a business model is commercially viable. Revenue streams can take many forms: one-time sales, recurring subscriptions, usage-based fees, licensing, advertising, or transaction commissions. The choice of revenue model has profound implications for cash flow predictability, customer lifetime value, and scalability. Cost structure analysis distinguishes between fixed costs (which do not vary with output — rent, salaries, software licences) and variable costs (which scale with output — raw materials, shipping, payment processing fees). The ratio of fixed to variable costs determines a firm\'s operating leverage: high-fixed-cost businesses (airlines, hotels) suffer disproportionately when revenue falls but generate outsized profit when revenue exceeds the break-even point. Understanding this leverage is essential for evaluating the risk profile of any business model.',
      realWorldHook:
        'When Netflix launched in 1997 as a DVD-by-mail service, its Business Model Canvas looked entirely different from Blockbuster\'s — and that difference was existential. Blockbuster\'s revenue stream depended heavily on late fees (nearly $800 million annually by 2000), which were a pain point for customers rather than a value driver. Netflix\'s subscription model eliminated late fees entirely, building its revenue stream around predictable monthly recurring revenue and customer satisfaction rather than customer frustration. When Netflix pivoted to streaming in 2007, it simply updated its Key Resources (broadband infrastructure instead of physical inventory) and Channels (internet instead of mail) while preserving the same core value proposition: convenient, affordable access to entertainment without penalty. Blockbuster\'s failure to redesign its business model in response — despite having the brand, the customer base, and the capital to do so — remains one of the most studied examples of incumbent blindness in business history.',
      interactiveElement:
        'Fill in the 9 blocks of the Business Model Canvas for your school\'s student store. Be specific — avoid generic answers.\n\n(1) Customer Segments — Who specifically shops at the student store? (Students only? Teachers? Which grade levels most actively?)\n(2) Value Propositions — Why do students buy there rather than ordering online or going off-campus? (Convenience? Price? Specific products?)\n(3) Channels — How do students discover, purchase, and receive products? (In-store only? Online pre-order? Delivery to classrooms?)\n(4) Customer Relationships — How does the store build loyalty? (Punch cards? Student staff who know regulars? School spirit alignment?)\n(5) Revenue Streams — What does the store sell, and at what margin? Are there any non-product revenue sources (advertising, sponsorships)?\n(6) Key Resources — What physical, financial, and human assets are essential? (Inventory, POS system, student staff, school funding?)\n(7) Key Activities — What must the store do exceptionally well to deliver on its value proposition? (Inventory management, staffing, marketing?)\n(8) Key Partnerships — Who does the store depend on externally? (Suppliers, school administration, parent boosters?)\n(9) Cost Structure — What are the main fixed and variable costs? Which costs are largest, and are they fixed or variable?\n\nAfter completing all nine blocks, identify the single biggest weakness in the current business model and propose one specific change that would strengthen it.',
      vocabulary: [
        {
          term: 'Business Model Canvas (BMC)',
          definition: 'A strategic management template developed by Alexander Osterwalder that maps a business across nine interconnected building blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure.',
          example: 'Airbnb\'s BMC shows that its Key Resource is not hotels (which it does not own) but the two-sided marketplace platform; its Value Proposition to hosts is income from idle space, and to guests it is affordable, local, authentic accommodation — two distinct propositions for two distinct customer segments on one canvas.',
        },
        {
          term: 'Value Proposition',
          definition: 'A clear statement of the specific benefit a product or service delivers to a defined customer segment, why it is meaningfully better than alternatives, and the transformation it enables in the customer\'s situation.',
          example: 'Slack\'s value proposition to professional teams is not "a messaging app" (a feature) but "the elimination of internal email chaos and the creation of searchable, organised team communication" — an outcome-based statement that explains why companies pay for it rather than using free alternatives.',
        },
        {
          term: 'Operating Leverage',
          definition: 'The degree to which a firm\'s cost structure is composed of fixed versus variable costs; high operating leverage means fixed costs dominate, so profits rise and fall sharply relative to changes in revenue.',
          example: 'A software company with $1 million in fixed development costs and near-zero variable costs per additional user has high operating leverage — the 10,000th subscriber generates almost pure profit, while a catering company with mostly variable food and labour costs has low operating leverage and scales more linearly.',
        },
      ],
      deeperDive:
        'For DECA Entrepreneurship events, the Business Model Canvas is the single most powerful analytical tool you can bring to a written business plan or an Innovation Plan role-play. Judges on the Entrepreneurship Team Decision Making (ETDM) and Start-up Business Plan events are trained to look for evidence that competitors understand how the nine blocks fit together — not just as a list, but as a system. When one block changes, others must change with it: if you switch from a one-time sale revenue model to a subscription model, your Customer Relationships block must shift from transactional to relationship-oriented, your Key Activities must include retention and churn management, and your Cost Structure must account for customer success infrastructure. Demonstrating this systemic thinking — explicitly naming these ripple effects in your presentation — is what separates Advanced Exemplary responses from merely proficient ones.\n\nThe concept of competitive advantage sits at the intersection of the Value Proposition and the business model as a whole. Michael Porter identified three generic strategies: cost leadership (being the lowest-cost producer in the market), differentiation (offering a product with attributes sufficiently unique that customers will pay a premium), and focus (serving a narrow niche better than broad competitors). A business model achieves durable competitive advantage when its structure makes the advantage hard to replicate — for example, when network effects (each additional user makes the product more valuable for all users) are embedded in the Key Resources and Customer Relationships blocks. For DECA, being able to name the competitive advantage embedded in a business model, explain what makes it defensible, and identify what could erode it under competitive pressure is a hallmark of exemplary performance.',
      commonMisconceptions: [
        'A business model is the same as a business plan. In reality, a business model describes the logic of how value is created and captured (the "what" and "why"), while a business plan is an operational document describing how the model will be executed (the "how," "when," and "with what resources") — the plan serves the model, not the other way around.',
        'Revenue is the same as profit, so a high-revenue business is automatically viable. Revenue is the top line; profit is what remains after subtracting all costs. A business with $10 million in revenue but $12 million in costs is losing money. Sustainable viability requires that revenue streams exceed the full cost structure — a distinction that judges will probe directly in DECA business plan events.',
        'A value proposition is a list of product features. A genuine value proposition is a customer-outcome statement: it describes the transformation in the customer\'s situation, not the product\'s specifications. "Our app has 50 features" is a feature list; "Our app saves the average small business owner 8 hours per week on invoicing" is a value proposition.',
      ],
      examinerTip:
        'In DECA written business plan events (Start-up Business Plan, Innovation Plan), judges frequently deduct points from teams that describe business model elements in isolation without showing how they connect. When presenting your canvas, always explicitly link at least three blocks: for example, "Because our Customer Segment is price-sensitive teenagers, our Value Proposition emphasises affordability, which forces our Cost Structure to be lean — we use a drop-shipping model to eliminate inventory holding costs." That chain of logic — segment drives proposition drives cost structure — signals systems-level business thinking and consistently scores at the top of the rubric.',
      didYouKnow:
        'The Business Model Canvas was published in Alexander Osterwalder\'s 2010 book "Business Model Generation," which was itself funded through a crowdfunded pre-sale of 470 co-authors who each paid $24 — making the book about business models a demonstration of an innovative business model. It has since been downloaded more than 5 million times and is used by corporations including Mastercard, Ericsson, and 3M as a standard strategic planning tool.',
    },
    flashcards: [
      {
        id: 'dc6-l2-fc1',
        front: 'What are the nine building blocks of the Business Model Canvas, and which one is considered the pivot of the entire canvas?',
        back: 'The nine blocks are: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure. The Value Proposition is the pivot — it defines what is being delivered to whom, and all other blocks exist to support or enable it.',
        tags: ['DECA', 'entrepreneurship', 'business-model-canvas'],
      },
      {
        id: 'dc6-l2-fc2',
        front: 'What is the difference between a feature list and a value proposition?',
        back: 'A feature list describes what a product does or has. A value proposition describes the transformation in the customer\'s situation — the specific pain resolved or gain delivered — and why that outcome is meaningfully better than alternatives. Judges and investors respond to the latter, not the former.',
        tags: ['DECA', 'entrepreneurship', 'value-proposition'],
      },
      {
        id: 'dc6-l2-fc3',
        front: 'What is operating leverage, and why does it matter when evaluating a business model\'s risk profile?',
        back: 'Operating leverage is the proportion of fixed to variable costs in a firm\'s cost structure. High operating leverage means profits swing dramatically with changes in revenue — outsize upside when revenue grows, outsize downside when revenue falls. Understanding leverage helps predict how a business model performs across economic cycles.',
        tags: ['DECA', 'entrepreneurship', 'cost-structure', 'operating-leverage'],
      },
    ],
    quiz: [
      {
        id: 'dc6-l2-q1',
        type: 'mcq',
        question: 'A DECA team is presenting a business plan for a software startup. They claim their value proposition is "an app with real-time analytics, a mobile-first interface, and API integrations." What is the primary weakness of this value proposition statement?',
        options: [
          'It describes product features rather than the customer outcome or transformation the product enables, failing the "so what" test.',
          'It is too short — a strong value proposition must be at least three sentences.',
          'It focuses too heavily on the customer, when judges want to hear about the product\'s technical architecture.',
          'It does not mention the price point, which is the most important element of a value proposition.',
        ],
        correctAnswer: 0,
        explanation: 'A genuine value proposition is a customer-outcome statement, not a feature list. Features like "real-time analytics" only become value propositions when connected to the outcome they enable — for example, "helps operations managers identify production bottlenecks within minutes, preventing costly downtime." The "so what" test requires asking what the feature means for the customer\'s life until you reach an outcome they care about.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l2-q2',
        type: 'mcq',
        question: 'A startup switches its revenue model from one-time product sales to an annual subscription. Which of the following Business Model Canvas blocks would most likely need to be updated as a direct consequence of this change?',
        options: [
          'Only the Revenue Streams block, since the product itself is unchanged.',
          'Revenue Streams, Customer Relationships, Key Activities, and Cost Structure — because subscription logic requires retention infrastructure, ongoing customer engagement, and support operations that did not exist in a transactional model.',
          'Only the Cost Structure block, since subscriptions reduce customer acquisition costs.',
          'The Key Partnerships block, since subscription billing requires a new payment processor.',
        ],
        correctAnswer: 1,
        explanation: 'The BMC is a system — changing one block ripples through others. A subscription model requires: Customer Relationships to shift from transactional to ongoing (retention and renewal management), Key Activities to include customer success and churn reduction, and Cost Structure to absorb new support and retention infrastructure costs. Identifying these interdependencies is the hallmark of systems-level business model thinking.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l2-q3',
        type: 'mcq',
        question: 'Which of the following businesses has the highest operating leverage?',
        options: [
          'A catering company that hires temporary staff and purchases food supplies per event.',
          'A streaming music platform with high fixed technology infrastructure costs and near-zero cost per additional subscriber.',
          'A freelance consulting firm that bills clients hourly with no fixed overhead.',
          'A farmers\' market vendor who pays no rent and has costs that scale directly with produce sold.',
        ],
        correctAnswer: 1,
        explanation: 'Operating leverage is the ratio of fixed to variable costs. A streaming platform pays nearly the same infrastructure cost whether it has 1 million or 10 million subscribers — most costs are fixed, so each additional subscriber generates nearly pure marginal profit. The other options have predominantly variable cost structures that scale proportionally with revenue, resulting in low operating leverage.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3: Startup Funding & Venture Capital ───────────────────────────────
  {
    id: 'dc6-l3',
    moduleId: 'dc6-entrepreneurship',
    title: 'Startup Funding & Venture Capital',
    description: 'Navigate the full funding spectrum — bootstrapping, angel investors, venture capital, crowdfunding, pitch decks, and valuation basics.',
    order: 3,
    estimatedMinutes: 40,
    tags: ['DECA', 'entrepreneurship', 'venture-capital', 'startup-funding', 'pitch-deck'],
    content: {
      isStub: false,
      conceptualExplanation:
        'Startup funding follows a lifecycle that mirrors the maturation of risk in a new venture. At the earliest stage — often called the pre-seed or idea stage — most founders rely on bootstrapping: funding the business from personal savings, revenue from early customers, or income from a separate job. Bootstrapping forces capital discipline and preserves full ownership, but it limits the speed at which the business can scale. When a startup has demonstrated initial market validation (early users, a working prototype, some revenue), it becomes attractive to angel investors — high-net-worth individuals who invest their own money, typically between $25,000 and $500,000, in exchange for equity. Angels bring not just capital but networks, mentorship, and credibility. The seed round formalises this external funding and is often led by a small group of angels or a seed-stage venture fund.\n\nVenture capital (VC) enters at the Series A stage and beyond, once a startup has demonstrated meaningful traction — typically evidence of product-market fit, measurable user growth, and a pathway to scale. VC firms pool capital from institutional investors (pension funds, university endowments, family offices) into a fund and deploy it into startups in exchange for preferred equity. The VC model is predicated on power-law returns: most investments will fail or return modest multiples, but one or two "unicorn" investments in the portfolio will return 50x to 100x — covering all losses and generating the fund\'s returns. This means VCs are specifically seeking companies with the potential for explosive growth in very large markets, not merely good businesses. A startup with $10 million in annual revenue growing at 10% annually is a fine business but a poor VC investment; the same company growing at 300% annually in a $100 billion market is precisely what VC is designed to fund.\n\nCrowdfunding has democratised access to startup capital along two distinct pathways. Rewards-based crowdfunding (Kickstarter, Indiegogo) allows entrepreneurs to pre-sell products or experiences to backers in exchange for early access, bypassing the need for investor equity. It simultaneously validates market demand, generates cash, and builds a community of early advocates. Equity crowdfunding (Republic, Wefunder) — made possible in the US by the JOBS Act of 2012 — allows non-accredited investors to purchase small equity stakes in startups, broadening the funding base beyond professional investors. For DECA purposes, the critical skill is matching the funding source to the startup\'s stage and strategic needs — there is no universally best funding mechanism, and the wrong choice can be as damaging as no funding at all.',
      realWorldHook:
        'When Brian Chesky and Joe Gebbia launched Airbnb in 2008, they were so financially desperate that they sold novelty cereal boxes themed around the presidential election ("Obama O\'s" and "Cap\'n McCain\'s") to fund their fledgling home-sharing startup — raising $30,000 and keeping the company alive long enough to apply to Y Combinator. Y Combinator, a seed accelerator, invested $20,000 for 6% equity — valuing the company at roughly $333,000. Four years later, Sequoia Capital led a Series B round valuing Airbnb at $1.3 billion. By its 2020 IPO, Airbnb was valued at $47 billion — a 141,000x return on the original Y Combinator investment. The funding journey from cereal boxes to IPO illustrates every stage of the startup funding lifecycle and the extraordinary power-law mathematics that make venture capital compelling to institutional investors.',
      interactiveElement:
        'Funding Stage Matching Exercise: For each of the five startup scenarios below, identify the most appropriate funding source (bootstrapping, angel investment, seed VC, Series A VC, or equity crowdfunding) and write a two-sentence justification.\n\n(1) A high-school student has built a working app that lets classmates trade class notes; it has 200 active users but no revenue, and she needs $15,000 to hire a part-time developer over the summer.\n(2) A former restaurant chef has a proven meal-kit recipe subscription earning $8,000 per month, growing 20% month-over-month, and needs $500,000 to scale production and marketing.\n(3) A team of two engineers has a concept for an AI-powered legal document review tool but has not yet built a prototype; they have $40,000 in personal savings and want to test the idea before seeking outside capital.\n(4) A consumer hardware startup has a fully tested product, a 10,000-person waitlist from a viral social media campaign, and needs $2 million to fund the first production run — but wants to turn their waitlist into investors.\n(5) A B2B SaaS startup has $2 million in annual recurring revenue, 150% net revenue retention, and is growing 200% year-over-year; it needs $15 million to triple its sales team and expand internationally.',
      vocabulary: [
        {
          term: 'Venture Capital (VC)',
          definition: 'A form of private equity financing in which professionally managed funds invest institutional capital into early-stage, high-growth-potential startups in exchange for preferred equity, typically targeting power-law returns across a diversified portfolio.',
          example: 'Andreessen Horowitz (a16z) invested $250,000 in Instagram\'s seed round in 2010; when Facebook acquired Instagram for $1 billion in 2012, that investment returned approximately 312x in under two years — a single deal that more than justified the entire fund\'s existence.',
        },
        {
          term: 'Pre-Money Valuation',
          definition: 'The estimated value of a startup before a new round of investment is received, used to determine what percentage of equity an investor receives in exchange for their capital.',
          example: 'If a startup has a $4 million pre-money valuation and raises $1 million from an angel investor, the post-money valuation is $5 million, and the investor owns 20% ($1M ÷ $5M) of the company after the investment.',
        },
        {
          term: 'Product-Market Fit',
          definition: 'The degree to which a product satisfies strong market demand — evidenced by high organic growth, strong retention, and users who would be "very disappointed" if the product disappeared, as measured by Sean Ellis\'s survey benchmark of 40%+.',
          example: 'Slack knew it had product-market fit when it acquired 8,000 paying customers in 24 hours after public launch in 2013 with essentially no marketing spend — the product spread virally because teams genuinely needed it and recommended it to colleagues unprompted.',
        },
      ],
      deeperDive:
        'For DECA Entrepreneurship event role-plays involving funding, competitors frequently encounter scenarios where a judge asks why a particular funding source was chosen over others. The strongest responses demonstrate fluency with the trade-offs: bootstrapping preserves equity and builds capital discipline but limits speed; angel capital adds mentorship and networks but introduces investor reporting obligations and dilution; VC accelerates growth at the cost of significant equity dilution, board seats for investors, and pressure to achieve the hyper-growth trajectory required to generate fund-level returns. A startup founder who raises VC for a business growing at 20% annually has likely made a mismatched funding choice — the investor\'s return requirements demand growth that the business cannot deliver, creating misalignment that can become toxic. Being able to articulate this matching logic in a role-play demonstrates the kind of nuanced business judgment that separates Advanced Exemplary scores from merely proficient ones.\n\nPitch deck construction is a direct performance indicator in DECA Entrepreneurship events, and judges know the canonical structure well. A strong pitch deck covers: (1) the Problem — a crisp statement of the pain experienced by a large, identifiable group of people; (2) the Solution — how your product resolves that pain, with a live demo or compelling screenshot; (3) the Market — addressable market size (TAM/SAM/SOM) with sourced data; (4) the Business Model — how you make money and at what margin; (5) Traction — evidence of market validation (users, revenue, retention, partnerships); (6) the Team — why this specific group of people is uniquely qualified to win this market; (7) the Ask — how much capital you are raising, at what valuation, and what milestones that capital will achieve. Judges mark down decks that skip traction (inflating confidence without evidence) or inflate the market size without demonstrating the addressable slice relevant to the business.',
      commonMisconceptions: [
        'Raising more money is always better for a startup. In reality, raising too much capital at too high a valuation creates expectations for growth that may be impossible to meet, leads to wasteful spending ("death by overfunding"), and can make future down-rounds — where a company raises capital at a lower valuation than the previous round — catastrophically damaging to the team\'s morale, ownership structure, and public perception.',
        'Venture capital is available to any startup with a good idea. VCs specifically seek businesses with the potential to return 50–100x on the investment, which requires massive addressable markets (billions of dollars), defensible competitive advantages, and exponential growth potential. The vast majority of good small businesses are simply not VC-investable by design — they are better served by bank loans, angel investment, or bootstrapping.',
        'Equity crowdfunding is the same as donation-based crowdfunding. Rewards crowdfunding (Kickstarter) gives backers a product or experience; equity crowdfunding (Republic, Wefunder) gives backers an actual ownership stake in the company, with corresponding regulatory requirements under SEC Regulation Crowdfunding. The two mechanisms have entirely different legal, financial, and strategic implications.',
      ],
      examinerTip:
        'DECA judges for Entrepreneurship events pay close attention to how competitors discuss valuation. Avoid the common mistake of stating a valuation figure without explaining the methodology behind it. Instead, briefly name your valuation approach — comparables (comparing to similar funded startups), revenue multiples (applying an industry-standard multiple to ARR or projected revenue), or discounted cash flow for more mature projections — and state the key assumption driving the number. Saying "We are seeking $500,000 at a $2 million pre-money valuation, benchmarked against comparable pre-revenue consumer app seed rounds in 2024 that averaged 4–6x projected first-year revenue" is a response that scores at Advanced Exemplary. A bare number with no methodology is a response that invites a skeptical follow-up question you may not be prepared for.',
      didYouKnow:
        'The term "unicorn" — a startup valued at $1 billion or more — was coined by venture capitalist Aileen Lee in a 2013 TechCrunch article in which she calculated that only 0.07% of US software and internet companies founded between 2003 and 2013 ever achieved a $1 billion valuation. As of early 2025, there are more than 1,200 unicorn companies globally — far more than when Lee coined the term, though each individual startup\'s odds of reaching that milestone remain extremely slim.',
    },
    flashcards: [
      {
        id: 'dc6-l3-fc1',
        front: 'What is the difference between pre-money and post-money valuation, and how do they determine investor equity?',
        back: 'Pre-money valuation is the company\'s estimated value before the investment. Post-money valuation = pre-money valuation + the investment amount. Investor equity percentage = investment amount ÷ post-money valuation. Example: $4M pre-money + $1M investment = $5M post-money; investor owns 20%.',
        tags: ['DECA', 'entrepreneurship', 'startup-funding', 'valuation'],
      },
      {
        id: 'dc6-l3-fc2',
        front: 'Why is venture capital an inappropriate funding source for most small businesses, even profitable ones?',
        back: 'VC funds require power-law returns — one investment must return 50–100x to cover all losses across the portfolio. This requires hyper-growth in enormous addressable markets. A stable, profitable small business growing at 15% annually cannot deliver the scale of return VC economics demand, making the funding mismatched regardless of the business\'s quality.',
        tags: ['DECA', 'entrepreneurship', 'venture-capital'],
      },
      {
        id: 'dc6-l3-fc3',
        front: 'What are the seven components of a canonical startup pitch deck, in order?',
        back: '(1) Problem, (2) Solution, (3) Market Size (TAM/SAM/SOM), (4) Business Model, (5) Traction, (6) Team, (7) The Ask (capital amount, valuation, milestones). Traction and Team are the sections judges and VCs scrutinise most closely.',
        tags: ['DECA', 'entrepreneurship', 'pitch-deck'],
      },
    ],
    quiz: [
      {
        id: 'dc6-l3-q1',
        type: 'mcq',
        question: 'A startup raises $2 million at a $8 million pre-money valuation. What percentage of the company does the investor own after the investment?',
        options: [
          '20%',
          '25%',
          '33%',
          '80%',
        ],
        correctAnswer: 0,
        explanation: 'Post-money valuation = $8M pre-money + $2M investment = $10M. Investor equity = $2M ÷ $10M = 20%. This is the standard equity dilution calculation for any funding round and a foundational skill for DECA Entrepreneurship events.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l3-q2',
        type: 'mcq',
        question: 'Which of the following startup characteristics would make it most suitable for venture capital investment?',
        options: [
          'A profitable local bakery with 15% annual revenue growth and no plans to expand beyond one city.',
          'A B2B software platform with $1.5M ARR growing 250% year-over-year, serving a $50 billion market, with 130% net revenue retention.',
          'A freelance design agency generating $400,000 annually with stable but modest growth.',
          'A restaurant franchise with proven unit economics but whose growth is limited to one new location per year.',
        ],
        correctAnswer: 1,
        explanation: 'VC requires hyper-growth in massive addressable markets. The B2B SaaS platform shows 250% year-over-year growth in a $50 billion market with exceptional retention — precisely the profile that can generate 50–100x returns. The other options are good businesses but are structurally unsuited to VC because their market size or growth trajectories cannot produce fund-level returns.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l3-q3',
        type: 'mcq',
        question: 'What is the primary strategic advantage of rewards-based crowdfunding (such as Kickstarter) over equity crowdfunding for an early-stage hardware startup?',
        options: [
          'Rewards crowdfunding generates more capital than equity crowdfunding in every scenario.',
          'Rewards crowdfunding simultaneously validates market demand, generates pre-sale revenue, and builds a community of early advocates without requiring the founder to give up any equity.',
          'Rewards crowdfunding is legally simpler because it is regulated by the SEC under Regulation Crowdfunding.',
          'Rewards crowdfunding guarantees product delivery timelines because backers hold the company legally accountable.',
        ],
        correctAnswer: 1,
        explanation: 'The key advantage of rewards crowdfunding is the combination of market validation + non-dilutive capital + community building in a single campaign. Founders raise money without giving up equity, and a successful campaign proves that real customers will pay for the product before a single unit is manufactured. Equity crowdfunding does involve SEC regulation, not rewards crowdfunding — and no crowdfunding platform guarantees delivery.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4: DECA Entrepreneurship Event Formats ─────────────────────────────
  {
    id: 'dc6-l4',
    moduleId: 'dc6-entrepreneurship',
    title: 'DECA Entrepreneurship Event Formats',
    description: 'Master the structure, rubrics, and strategy for Entrepreneurship Team Decision Making, Start-up Business Plan, and Innovation Plan events.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['DECA', 'entrepreneurship', 'ETDM', 'business-plan', 'innovation-plan', 'event-formats'],
    content: {
      isStub: false,
      conceptualExplanation:
        'DECA offers three primary entrepreneurship-focused competitive events, each testing a distinct set of skills and producing a different kind of deliverable. The Entrepreneurship Team Decision Making (ETDM) event pairs two competitors who receive a business scenario and must collaboratively develop and present a recommendation — combining the team dynamics of a consulting engagement with the time pressure of a role-play. ETDM tests analytical speed, collaborative communication, and the ability to construct a coherent joint recommendation without duplicating each other\'s points or visibly disagreeing in front of the judge. The event format typically includes a 30-minute preparation period, followed by a 10-minute presentation to a judge playing the role of a company executive, with a 5-minute question period. Partners must agree on a division of the presentation before entering the room and must execute that plan seamlessly, with each partner\'s section reinforcing the other\'s.\n\nThe Start-up Business Plan (SBPL) event requires a comprehensive written business plan submitted in advance, followed by an oral presentation to a panel of judges who have read the plan. Unlike a role-play, which is improvised, the SBPL rewards depth of prior preparation: the written plan is judged against a rubric that assesses every section from executive summary to financial projections, and the oral presentation is an opportunity to highlight key findings and demonstrate responsiveness to judge questions about the plan. Competitors are evaluated on both documents — a brilliant oral presentation cannot compensate for a weak written plan, and vice versa. SBPL plans typically follow a prescribed outline that includes executive summary, company description, industry analysis, target market, marketing plan, operations plan, management team, and financial plan with three-year projections.\n\nThe Innovation Plan (IP) event focuses specifically on the design and implementation of a new product, service, or process — it may be within an existing company or as a standalone startup concept. The IP event rewards creative problem-solving and feasibility analysis. Competitors submit a written plan documenting the innovation, the market need it addresses, the implementation pathway, and the financial case for adoption. A judging panel then evaluates both the written document and an oral presentation. The distinguishing feature of IP versus SBPL is the emphasis on innovation itself: judges specifically look for evidence that the concept is genuinely novel, that competitors understand the technical and operational feasibility of implementation, and that the financial case for the innovation is grounded in realistic assumptions.',
      realWorldHook:
        'In the 2019 DECA ICDC, a team from Texas won the Entrepreneurship Team Decision Making event with a scenario involving a sustainable fashion startup facing a supply chain disruption. Their winning strategy was notable not for the novelty of their solution but for the precision of their economic analysis: they quantified the cost of the disruption using real textile industry cost benchmarks, proposed two alternatives with distinct risk profiles, and recommended one based on an explicit decision criterion the judge had not asked them to define. That level of analytical discipline — bringing a rigorous framework to an open-ended scenario — is what the rubric\'s Advanced Exemplary band is designed to reward, and it is directly replicable through structured practice.',
      interactiveElement:
        'Event Format Comparison Exercise: Complete this table for all three DECA Entrepreneurship events, based on what you have learned. Then use it to decide which event best matches your strengths.\n\n| Criterion | ETDM | Start-up Business Plan | Innovation Plan |\n|---|---|---|---|\n| Individual or team? | | | |\n| Written component required? | | | |\n| Role-play or panel presentation? | | | |\n| Primary skill tested | | | |\n| Time pressure level (1–5) | | | |\n| Best suited to a competitor who... | | | |\n\nAfter completing the table, write a two-sentence argument for which event you would enter and why, citing at least two specific criteria from the table.',
      vocabulary: [
        {
          term: 'Entrepreneurship Team Decision Making (ETDM)',
          definition: 'A DECA paired team event in which two competitors jointly analyse a written entrepreneurship scenario and present a collaborative recommendation to a judge, tested on analytical quality, teamwork, and professional communication.',
          example: 'An ETDM scenario might describe a food truck startup facing a decision about whether to open a brick-and-mortar location — competitors must jointly analyse the financial trade-offs, customer segment implications, and operational risks, then present a unified recommendation within 10 minutes.',
        },
        {
          term: 'Start-up Business Plan (SBPL)',
          definition: 'A DECA comprehensive written business plan event covering all functional areas of a new venture — market analysis, marketing strategy, operations, management, and three-year financial projections — evaluated by both a written rubric and an oral presentation panel.',
          example: 'An SBPL entry might present a complete business plan for a student-run app-based tutoring marketplace, including industry analysis citing EdTech market data, a customer acquisition funnel, a unit economics model, and a proforma income statement showing break-even in month 14.',
        },
        {
          term: 'Innovation Plan (IP)',
          definition: 'A DECA written and oral event focused specifically on designing a novel product, service, or process — evaluated on the originality of the innovation, feasibility of implementation, and financial justification for adoption.',
          example: 'An Innovation Plan might propose integrating AI-powered personalised reading recommendations into a school library system, including a technology feasibility analysis, a pilot implementation timeline, a cost-benefit analysis, and a plan for measuring student reading outcomes.',
        },
      ],
      deeperDive:
        'For ETDM competitors, the single most commonly cited reason for losing a round that was otherwise well-analysed is poor partner coordination visible to the judge. Common failure modes include: one partner presenting for 8 of the 10 minutes while the other stands silently; partners explicitly contradicting each other on a recommendation point; and partners failing to build on each other\'s sections, making the presentation feel like two separate monologues rather than a unified argument. The solution is a strict pre-competition protocol: agree on the exact division of the presentation (who introduces, who handles problem definition, who presents analysis, who delivers the recommendation, who closes), practise the handoffs between sections, and develop a set of agreed responses to likely judge questions so that when the judge addresses the question to one partner, the other knows whether to add, defer, or redirect. Judges explicitly score on "team effectiveness" — and teams that demonstrate practised, natural coordination outperform analytically stronger teams that cannot execute cleanly.\n\nFor SBPL and Innovation Plan events, the financial projections section is the most common source of score variability between the good and the exemplary. Most DECA teams can write a competent narrative about their market and product. Far fewer can construct a credible, internally consistent three-year financial model. A common error is building the revenue projection from the top down ("the market is $1 billion and we will capture 1%") rather than from the bottom up ("we project acquiring 50 customers in month one at an average sale of $500, growing 15% per month, with a 90% gross margin"). Bottom-up projections are more credible because they force the team to think through the specific assumptions underlying each revenue driver. Judges who are practising business professionals can immediately spot the difference, and they probe the assumptions aggressively in the oral presentation. Building a genuine bottom-up model — and being able to defend every assumption under questioning — is the highest-leverage preparation investment for written DECA events.',
      commonMisconceptions: [
        'In ETDM, whichever partner knows more should do most of the presenting to maximise the quality of the analysis delivered to the judge. In reality, judges explicitly score team effectiveness as a separate criterion — a presentation in which one partner dominates while the other contributes minimally will lose points on that criterion regardless of the quality of the analysis, because effective professional collaboration requires balanced contribution.',
        'The written business plan in SBPL is less important than the oral presentation because judges make their final decision after seeing the competitors in person. Both components are scored separately and combined into the final total — there is no weighting that makes the oral more important than the written document. A compelling presentation cannot overcome a weak plan if the written rubric accounts for a significant portion of points.',
        'Innovation Plan judges primarily reward technical sophistication and creative originality. While novelty matters, IP judges equally weight feasibility and financial justification. An innovative concept that lacks a credible implementation pathway or realistic financial model will consistently score below a more modest innovation that is thoroughly analysed and financially grounded.',
      ],
      examinerTip:
        'In all three DECA Entrepreneurship event formats, judges have a rubric in front of them with specific performance indicators they are required to assess. Before your presentation — whether oral or written — explicitly map your content to those indicators. In an SBPL oral presentation, you might say: "I\'ll begin by summarising our competitive analysis, which directly addresses the industry and market sections of our plan." This signals to the judge that you know what is being evaluated, which builds credibility and ensures the judge\'s attention is directed to your strongest content at the right moment. Do not assume judges will infer the connection between your content and the rubric — make it explicit.',
      didYouKnow:
        'DECA\'s Entrepreneurship events have produced real companies. Ben Kaplan, a former DECA competitor, used his DECA business plan experience to co-found a company that was later acquired by a Fortune 500 firm. DECA maintains a record of former members who have gone on to found notable startups, and several state DECA chapters have established relationships with local angel investor networks to provide real funding opportunities to ICDC-qualifying business plan competitors — meaning the pitch you deliver at DECA ICDC could attract actual investor interest.',
    },
    flashcards: [
      {
        id: 'dc6-l4-fc1',
        front: 'What are the three primary DECA Entrepreneurship competitive events, and what is the key deliverable that distinguishes each one?',
        back: 'ETDM (Entrepreneurship Team Decision Making): a paired team role-play with a joint oral recommendation. Start-up Business Plan (SBPL): a comprehensive written business plan plus oral panel presentation. Innovation Plan (IP): a written plan for a novel product/service/process plus oral panel presentation focused on originality and feasibility.',
        tags: ['DECA', 'entrepreneurship', 'event-formats'],
      },
      {
        id: 'dc6-l4-fc2',
        front: 'What is the most common error ETDM teams make that costs them points on the "team effectiveness" criterion?',
        back: 'One partner dominating the presentation while the other contributes minimally — or partners visibly contradicting each other or failing to build cohesively on each other\'s sections. Judges score team effectiveness as a distinct criterion; imbalanced or uncoordinated delivery loses points regardless of analytical quality.',
        tags: ['DECA', 'entrepreneurship', 'ETDM', 'team-effectiveness'],
      },
      {
        id: 'dc6-l4-fc3',
        front: 'Why do DECA judges prefer bottom-up financial projections over top-down projections in SBPL and Innovation Plan events?',
        back: 'Bottom-up projections (built from specific assumptions about customer acquisition, average transaction value, and growth rates) are more credible because they force teams to think through each revenue driver explicitly and defend concrete assumptions. Top-down projections ("we\'ll capture 1% of a $1 billion market") are easy to construct and hard to defend under judge questioning.',
        tags: ['DECA', 'entrepreneurship', 'business-plan', 'financial-projections'],
      },
    ],
    quiz: [
      {
        id: 'dc6-l4-q1',
        type: 'mcq',
        question: 'Which DECA Entrepreneurship event would be most appropriate for a competitor who excels at in-depth written research and financial modelling but prefers a prepared oral presentation to an improvised role-play?',
        options: [
          'Entrepreneurship Team Decision Making (ETDM)',
          'Start-up Business Plan (SBPL)',
          'Business Law and Ethics Team Decision Making (BLTDM)',
          'Principles of Entrepreneurship (PE)',
        ],
        correctAnswer: 1,
        explanation: 'SBPL rewards deep written preparation — a comprehensive business plan submitted in advance — combined with an oral presentation to a panel that has already read the plan. It is specifically suited to competitors who invest in thorough research and financial modelling and prefer the predictability of a prepared presentation over an improvised role-play scenario.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l4-q2',
        type: 'mcq',
        question: 'In an ETDM presentation, Partner A presents the problem analysis and Partner B is about to deliver the recommendation. What technique best demonstrates effective team coordination to the judge?',
        options: [
          'Partner B begins immediately after Partner A finishes, without acknowledging the handoff, to maintain presentation momentum.',
          'Partner B explicitly bridges from Partner A\'s analysis to the recommendation with a transitional sentence (e.g., "Building on the market dynamics Maya just outlined, our recommendation is..."), signalling a coordinated and unified argument.',
          'Partner A summarises Partner B\'s recommendation after B delivers it, to reinforce the key point.',
          'Both partners deliver the recommendation simultaneously to demonstrate agreement.',
        ],
        correctAnswer: 1,
        explanation: 'An explicit transitional bridge between partners\' sections signals to the judge that the team has practised the handoff and is presenting a unified argument, not two separate monologues. This directly addresses the team effectiveness criterion. Simultaneous delivery is difficult to execute clearly; silent handoffs miss the opportunity to connect the analysis to the recommendation visibly.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l4-q3',
        type: 'mcq',
        question: 'What distinguishes the Innovation Plan (IP) event from the Start-up Business Plan (SBPL) event in terms of the primary criterion judges emphasise?',
        options: [
          'IP events are scored only on the oral presentation; SBPL events are scored only on the written plan.',
          'IP events specifically emphasise the novelty of the innovation, feasibility of implementation, and financial justification for adoption; SBPL events focus on the comprehensive viability of a complete new venture across all functional areas.',
          'IP events require two competitors while SBPL events are individual competitions.',
          'IP events use a role-play format while SBPL events use a panel presentation format.',
        ],
        correctAnswer: 1,
        explanation: 'Both events include written and oral components, and both can be individual or team. The distinguishing focus of IP is the innovation itself — originality, technical feasibility, and financial case for the specific innovation — while SBPL covers all aspects of a complete new venture\'s viability. A strong IP presentation explicitly demonstrates why the concept is genuinely novel and why the implementation plan is credible.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5: Pitch Competition Mastery ───────────────────────────────────────
  {
    id: 'dc6-l5',
    moduleId: 'dc6-entrepreneurship',
    title: 'Pitch Competition Mastery',
    description: 'Build a compelling executive summary, master the problem/solution/market/financials structure, handle judge Q&A with confidence, and deliver with professional presence.',
    order: 5,
    estimatedMinutes: 38,
    tags: ['DECA', 'entrepreneurship', 'pitch', 'presentation-skills', 'Q&A'],
    content: {
      isStub: false,
      conceptualExplanation:
        'A pitch competition is a high-stakes, time-constrained performance in which an entrepreneur must distil months of work into a presentation compelling enough to earn a judge\'s conviction — and capital. The executive summary is the foundation of every pitch: a one-to-two paragraph statement that answers four questions simultaneously: What is the problem? Who experiences it? How does your solution solve it? And why is now the right moment? The executive summary should be written last but presented first, because it only becomes possible to write it compellingly once you have done the full analysis and understand the business deeply. A weak executive summary — vague, jargon-heavy, or failing to state the problem with specificity — signals to judges that the team has not yet achieved clarity about what they are building, and it colours every subsequent section of the pitch negatively. The goal is to make a judge say, within the first 60 seconds, "I understand exactly what this is and why it matters."\n\nThe canonical pitch structure — Problem, Solution, Market, Business Model, Traction, Team, Ask — is not arbitrary. Each section is positioned to answer the specific question a rational investor asks at that point in their evaluation. After hearing the problem, the investor\'s question is "Does a real solution exist?" — so Solution follows immediately. After understanding the solution, the question is "How big is the opportunity?" — so Market follows. The business model section answers "How do you make money?" and traction answers "Have you proved this in the real world?" The team section, positioned late, answers "Can this specific group execute?" — a question that only becomes relevant once the investor believes the opportunity and solution are real. Deviating from this structure without a deliberate reason confuses judges and signals that the team does not understand the investor\'s decision-making process.\n\nHandling judge Q&A is the moment that most clearly separates good pitches from great ones. Q&A questions fall into three categories: clarification (the judge did not understand something), challenge (the judge disagrees with an assumption), and exploration (the judge is genuinely curious about a dimension you did not cover). Each requires a different response strategy. Clarification questions should be answered directly and briefly, then confirmed with "Does that answer your question?" Challenge questions should be acknowledged respectfully, then defended with evidence if you have it, or conceded gracefully if you do not — "That\'s a fair challenge; here\'s the data we relied on, and you\'re right that X is a risk we\'re monitoring." Exploration questions are gifts: the judge is interested and wants to go deeper. Respond with enthusiasm, more detail, and a connection back to why that dimension strengthens your investment thesis.',
      realWorldHook:
        'In 2006, a 22-year-old Mark Zuckerberg pitched Facebook to Sequoia Capital — and reportedly arrived 45 minutes late in pajamas, delivered a slide deck titled "The 10 Reasons Not to Invest in Facebook," and dismissed the meeting as a waste of time. Sequoia passed. Three years later, Accel Partners invested $12.7 million at a $98 million valuation — a stake worth roughly $9 billion at Facebook\'s 2012 IPO. The story is entertaining, but the real lesson for DECA competitors is the inverse: Accel\'s success came not from a theatrical pitch but from a rigorous analysis of network effects, user engagement data, and competitive moat. For every Zuckerberg who succeeded despite a terrible pitch, there are thousands of founders with great ideas who failed to communicate them clearly and lost funding as a result. The pitch is the medium through which the business must prove itself — mastering it is not optional.',
      interactiveElement:
        'Two-Minute Pitch Sprint: Choose a business idea — real or hypothetical — and construct a two-minute verbal pitch using the exact structure below. Record yourself delivering it, then evaluate your recording against the checklist.\n\nSTRUCTURE (allocate time as shown):\n(1) Problem [20 seconds] — State the specific pain, who experiences it, and how frequently.\n(2) Solution [20 seconds] — What your product does and why it resolves the problem better than alternatives.\n(3) Market [20 seconds] — One specific, sourced market size figure and your target customer segment.\n(4) Business Model [15 seconds] — How you make money and at what margin.\n(5) Traction [15 seconds] — One concrete proof point (users, revenue, pilot results, letters of intent).\n(6) Ask [10 seconds] — What you need and what milestone it will achieve.\n\nSELF-EVALUATION CHECKLIST:\n[ ] Did I state the problem in one sentence without jargon?\n[ ] Did I name a specific customer segment (not "everyone")?\n[ ] Did I source my market size figure?\n[ ] Did I state a specific revenue mechanism (not "we will make money by selling things")?\n[ ] Did I include at least one real traction proof point?\n[ ] Did I make the Ask specific (amount + milestone)?\n[ ] Did I finish within two minutes?\n\nRepeat until all seven boxes are checked.',
      vocabulary: [
        {
          term: 'Executive Summary',
          definition: 'A concise opening statement of a pitch or business plan that captures the problem, target customer, solution, and market opportunity in enough specificity to establish immediate clarity and credibility — typically one to two paragraphs or 60–90 seconds verbally.',
          example: 'A strong executive summary for a food waste startup might read: "Forty percent of all food produced in the US is wasted, costing consumers $1,500 per household annually. FreshRoute connects grocery stores with surplus inventory to food banks and discount buyers via a real-time marketplace app, reducing waste by 60% in pilot trials while generating a 25% gross margin on every transaction facilitated."',
        },
        {
          term: 'Total Addressable Market (TAM)',
          definition: 'The total revenue opportunity available if a company achieved 100% market share in its target market — a theoretical ceiling used to illustrate the scale of the opportunity, typically accompanied by Serviceable Addressable Market (SAM) and Serviceable Obtainable Market (SOM) to show realistic capture potential.',
          example: 'A telehealth startup might cite a TAM of $500 billion (all global healthcare spending), a SAM of $50 billion (US telehealth market), and a SOM of $500 million (the realistic 1% capture achievable within five years given their geographic focus and service scope).',
        },
        {
          term: 'Traction',
          definition: 'Quantitative evidence that a startup\'s product or service is creating real value for real customers — measured through metrics such as monthly active users, revenue growth rate, customer retention, net promoter score, or strategic partnerships signed.',
          example: 'A DECA business plan team might demonstrate traction by stating: "In our 60-day school pilot, 340 students used the platform weekly, 78% returned in week two, and the principal has agreed to expand to all grade levels next semester" — three distinct traction signals (adoption, retention, expansion).',
        },
      ],
      deeperDive:
        'For DECA competitors, the judge Q&A period is where competitions are won or lost more consistently than in any other phase. The most common mistake is treating a challenging question as an attack to be deflected rather than an opportunity to demonstrate depth. When a DECA judge says "Your financial projections assume 30% month-over-month growth — what is that based on?", the deflecting answer is "We believe the market is large enough to support that growth." The exemplary answer is: "That projection is benchmarked against three comparable EdTech startups — Duolingo, Quizlet, and Khan Academy — which each achieved 25–40% month-over-month growth in their first year of viral adoption. Our viral coefficient, based on our pilot\'s referral rate of 2.3, supports the lower end of that range. We\'d be comfortable revising to 20% in a conservative scenario." That level of prepared specificity under pressure is what Advanced Exemplary scoring is designed to reward, and it can only come from having genuinely built and stress-tested your model rather than reverse-engineered a number from a desired outcome.\n\nPresentation skills in DECA pitch events are evaluated holistically across verbal and non-verbal dimensions. Verbally, judges assess clarity of explanation, use of precise business and economic vocabulary, absence of filler words (um, uh, like, you know), and the ability to modulate pacing — slowing down for critical financial points, accelerating for background context. Non-verbally, judges assess eye contact (distributed across multiple judges, not fixed on slides), posture (open and confident, not defensive or slumped), gesture (purposeful and proportionate, not fidgeting), and recovery from disruption (a judge interrupting mid-sentence, a slide failing to advance, or a question that requires abandoning the planned script). These non-verbal signals are particularly influential in the first 30 seconds of a presentation, during which judges form an initial impression of competence and confidence that colours their evaluation of subsequent content. Practise the opening 90 seconds of your pitch until you can deliver it without any cognitive load — it should be automatic enough that your full attention can be directed to reading the room.',
      commonMisconceptions: [
        'A longer pitch is more persuasive because it gives judges more information about the business. In reality, time-constrained pitches (3–10 minutes in most DECA events) are evaluated on information density and clarity, not volume. A pitch that covers all seven canonical sections concisely and precisely will consistently outperform a pitch that spends 5 of 10 minutes on a detailed company history that judges did not ask for.',
        'Acknowledging a weakness or risk in your business model during a pitch shows the judges that the team is not confident in the business. In reality, proactively naming and addressing risks is a hallmark of Advanced Exemplary pitches because it demonstrates that the team has thought deeply about the business and is not hiding from reality. Judges who discover an unacknowledged risk through a Q&A question will penalise far more severely than they would if the team had named the risk and described their mitigation plan.',
        'Market size should always be stated in terms of the largest possible number to impress judges. Using an inflated TAM without segmenting to a realistic SOM signals that the team does not understand their actual customer or the competitive landscape. A $500 billion TAM for a hyperlocal food delivery app looks unsophisticated; a $2 billion SOM for that same app — the urban millennial food delivery market in the 10 cities where the product will launch — looks credible and defensible.',
      ],
      examinerTip:
        'DECA pitch competition judges — especially at state and ICDC levels — include practising entrepreneurs, venture capitalists, and senior business executives. They evaluate pitches against the same mental framework they use in professional settings. The single phrase that most reliably elevates a DECA pitch from good to exceptional is "Here\'s our assumption, and here\'s the evidence behind it." For every key claim — market size, growth rate, gross margin, customer acquisition cost — state the assumption explicitly and name the source or methodology. This signals intellectual honesty, analytical rigour, and the kind of prepared credibility that makes judges feel safe recommending your team for recognition.',
      didYouKnow:
        'The world\'s most famous three-minute pitch was delivered by Steve Jobs at the original Macintosh launch in 1984 — but it was never actually a fundraising pitch. The pitch format as a formal venture fundraising institution became mainstream only in the early 2000s with the rise of Y Combinator\'s Demo Days, where dozens of startups each deliver a three-minute pitch to a room of investors simultaneously. YC Demo Days have since generated hundreds of billions of dollars in subsequent funding for alumni companies, establishing the three-minute pitch as one of the highest-value communication formats in the history of business.',
    },
    flashcards: [
      {
        id: 'dc6-l5-fc1',
        front: 'What four questions must a strong executive summary answer simultaneously, and why is it best written last but delivered first?',
        back: 'The four questions: What is the problem? Who experiences it? How does your solution solve it? Why is now the right moment? It is written last because full analytical clarity about the business only emerges through the process of building the complete plan — but delivered first because it frames everything that follows and determines whether judges engage with the rest of the pitch.',
        tags: ['DECA', 'entrepreneurship', 'pitch', 'executive-summary'],
      },
      {
        id: 'dc6-l5-fc2',
        front: 'What are the three categories of judge Q&A questions, and what is the appropriate response strategy for each?',
        back: 'Clarification: answer directly and confirm understanding. Challenge: acknowledge respectfully, then defend with evidence or concede gracefully with a risk-mitigation response. Exploration: respond with enthusiasm and depth, connecting the answer back to the investment thesis. Never deflect any category — judges penalise evasion more than admitted uncertainty.',
        tags: ['DECA', 'entrepreneurship', 'pitch', 'Q&A'],
      },
      {
        id: 'dc6-l5-fc3',
        front: 'What is the difference between TAM, SAM, and SOM, and why do judges prefer SOM-based revenue projections over TAM-based ones?',
        back: 'TAM = total market if you had 100% share. SAM = the segment your product can realistically serve given its current scope. SOM = the realistic capture within your target timeframe. Judges prefer SOM because it demonstrates that the team understands their actual customer, competitive position, and growth constraints — rather than inflating credibility with an unrealistically large number.',
        tags: ['DECA', 'entrepreneurship', 'pitch', 'market-sizing'],
      },
    ],
    quiz: [
      {
        id: 'dc6-l5-q1',
        type: 'mcq',
        question: 'In a DECA pitch competition, a judge interrupts during the market sizing section and says: "Your TAM of $200 billion seems extremely large for a student productivity app. How did you arrive at that number?" Which response best demonstrates Advanced Exemplary performance?',
        options: [
          '"We believe the student market is very large and $200 billion is a conservative estimate based on our research."',
          '"That\'s a fair observation. Our TAM represents the full US K-12 and higher education software market. Our SAM is $4 billion — the mobile productivity app segment for college students specifically — and our SOM for the next three years is $40 million, based on capturing 1% of our SAM through a direct-to-campus sales model. We\'re happy to walk through the underlying assumptions."',
          '"We apologise for the confusion — we will revise that figure before our next presentation."',
          '"The $200 billion figure comes from a Gartner report on global education technology, which we believe is the most relevant benchmark for our business."',
        ],
        correctAnswer: 1,
        explanation: 'The exemplary response immediately segements the TAM into SAM and SOM, provides the specific methodology for each, and offers to defend the assumptions — demonstrating that the team understands market sizing frameworks and has genuinely done the analytical work. Citing a single large report number without segmentation, or apologising without providing data, signals surface-level preparation.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l5-q2',
        type: 'mcq',
        question: 'Why does the canonical pitch structure place the Team section after Market Size, Business Model, and Traction rather than at the beginning?',
        options: [
          'Because judges are not interested in team background until they have heard the financial projections.',
          'Because the team section is the least important component of a pitch and should be de-emphasised.',
          'Because the team\'s credibility only becomes relevant to a rational investor once they believe the opportunity is real, the solution is viable, and the business model can generate returns — information delivered in the prior sections.',
          'Because DECA rubrics require this specific order and penalise pitches that deviate from it.',
        ],
        correctAnswer: 2,
        explanation: 'The canonical pitch sequence mirrors the rational investor\'s decision tree: opportunity must be established before team credibility matters. Placing the team first is a common mistake that asks judges to evaluate whether a team can execute before establishing what they would be executing on. Once the opportunity and model are credible, "Can this team win?" becomes the final and decisive question — which is why Team is positioned as the penultimate section before the Ask.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc6-l5-q3',
        type: 'mcq',
        question: 'A DECA team proactively mentions in their pitch that their primary risk is customer acquisition cost exceeding their current projection, and outlines two mitigation strategies. A classmate argues this makes the team look unconfident. Which response is most accurate?',
        options: [
          'The classmate is correct — pitches should only highlight strengths to maximise judge confidence.',
          'Proactively naming and addressing risks demonstrates analytical depth and intellectual honesty; judges who discover an unacknowledged risk through Q&A penalise far more severely than they would if the team had named and mitigated it upfront.',
          'Risks should only be mentioned if the judge specifically asks about them during Q&A.',
          'The team should remove the risk disclosure from the pitch but prepare a detailed answer in case the judge raises it independently.',
        ],
        correctAnswer: 1,
        explanation: 'Advanced Exemplary pitches proactively name risks because it signals that the team has done rigorous thinking and is not hiding from reality. Judges — especially those with professional investment experience — will identify major risks regardless; finding an unacknowledged risk is far more damaging to credibility than a team that surfaces and addresses it themselves. Proactive risk disclosure combined with mitigation planning is a hallmark of sophisticated entrepreneurial thinking.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
