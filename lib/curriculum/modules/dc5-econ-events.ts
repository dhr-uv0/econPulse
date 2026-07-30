import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'dc5-econ-events',
  title: 'DECA — Economics & Business Analysis',
  description: 'Economic indicators for business, global economics, written analysis prep, and DECA economics events.',
  tier: 'DECA' as const,
  track: 'DECA' as const,
  unit: 5,
  estimatedHours: 3,
  color: '#06b6d4',
  icon: 'Briefcase',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: Economic Indicators & Business Decisions ────────────────────────
  {
    id: 'dc5-l1',
    moduleId: 'dc5-econ-events',
    title: 'Economic Indicators & Business Decisions',
    description: 'How businesses use GDP, CPI, unemployment rate, and interest rates to make strategic decisions.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['DECA', 'economic-indicators', 'GDP', 'CPI', 'unemployment', 'interest-rates'],
    content: {
      isStub: false,
      conceptualExplanation:
        'Economic indicators are the vital signs of a national economy, and businesses that read them accurately gain a decisive strategic advantage over rivals who rely on intuition alone. Gross Domestic Product (GDP) measures the total market value of all final goods and services produced in a country over a given period, usually reported quarterly as an annualised growth rate. A rising GDP signals expanding consumer spending power, growing corporate revenues, and a healthy appetite for investment — conditions that favour aggressive hiring, capacity expansion, and new product launches. A contracting GDP, by contrast, triggers caution: firms trim inventories, freeze discretionary spending, and focus on protecting core customers rather than chasing new ones. GDP growth rate is the single most watched macro indicator in any DECA Economics event because it frames every other decision.\n\nThe Consumer Price Index (CPI) measures the average price change of a representative basket of consumer goods and services. When CPI rises faster than wages, purchasing power erodes and consumers trade down — good news for value retailers like Walmart, bad news for premium brands. The unemployment rate captures the share of the labour force actively seeking but unable to find work. Low unemployment (below 4%) signals a tight labour market: wages rise, recruitment costs climb, and employee retention becomes critical. High unemployment (above 6%) means abundant labour, but also depressed consumer spending since jobless households cut back sharply. Interest rates — set by the Federal Reserve in the US — determine the cost of borrowing for both businesses and consumers, cascading through mortgage payments, business loans, and credit card balances to shape aggregate demand.\n\nSophisticated businesses do not look at these indicators in isolation; they triangulate. A scenario of slow GDP growth + rising CPI + rising unemployment is stagflation — the worst combination, offering no easy policy or business response. A scenario of strong GDP growth + moderate CPI + low unemployment is the "Goldilocks" economy — ideal for expansion. In DECA events, you will frequently be given a snapshot of current economic data and asked to diagnose the economic phase and recommend an appropriate business strategy. Mastery of how each indicator behaves across the business cycle — and how they interact — is what separates a proficient competitor from a top scorer.',
      realWorldHook:
        'When the US Bureau of Labor Statistics released the January 2023 jobs report showing 517,000 new jobs added — far above the 185,000 forecast — Delta Air Lines immediately revised its capacity planning upward. The airline\'s chief commercial officer cited the strong labour market as evidence that consumer travel demand would remain robust despite elevated airfares, justifying a decision to add 100 new routes and accelerate aircraft deliveries. Delta\'s ability to translate a single macro data release into a specific capacity decision within 48 hours illustrates precisely the skill DECA Economics events test: reading macro signals and converting them into actionable business strategy.',
      interactiveElement:
        'Look up the most recent US economic data releases and complete the following analysis table. If current data is unavailable, use these hypothetical values: GDP growth = 1.2% (annualised), CPI year-over-year = 4.5%, unemployment rate = 5.8%, Federal Funds Rate = 5.25%.\n\n| Indicator | Current Value | Trend (vs. 6 months ago) | Implication for Business |\n|---|---|---|---|\n| GDP Growth Rate | | | |\n| CPI (YoY) | | | |\n| Unemployment Rate | | | |\n| Federal Funds Rate | | | |\n\nUsing the four indicators above: (1) Identify the current phase of the business cycle (expansion, peak, contraction, or trough). (2) List two business strategies appropriate for this phase. (3) Identify one sector that benefits and one that suffers in this environment. Justify each answer with reference to at least two indicators.',
      vocabulary: [
        {
          term: 'Gross Domestic Product (GDP)',
          definition: 'The total monetary value of all final goods and services produced within a country\'s borders in a specific time period, typically measured quarterly as an annualised growth rate.',
          example: 'If US GDP grows at 2.8% annualised in Q3, a retail chain may interpret this as sufficient consumer spending momentum to justify opening 20 new locations next year.',
        },
        {
          term: 'Consumer Price Index (CPI)',
          definition: 'A measure of the average price change over time for a fixed basket of consumer goods and services, used as the primary gauge of inflation experienced by households.',
          example: 'When CPI rose to 9.1% in June 2022, grocery chains accelerated private-label product launches, knowing inflation-weary consumers would trade down from branded goods.',
        },
        {
          term: 'Federal Funds Rate',
          definition: 'The interest rate at which banks lend reserve balances to each other overnight, set by the Federal Open Market Committee; it serves as the benchmark for virtually all borrowing costs in the economy.',
          example: 'When the Fed raised the federal funds rate from 0.25% to 5.25% in 2022–2023, the monthly payment on a $400,000 mortgage rose by over $1,000, cooling home-buying demand sharply.',
        },
      ],
      deeperDive:
        'Beyond the headline figures, businesses track leading, lagging, and coincident indicators to anticipate economic turning points rather than merely reacting to them. Leading indicators — such as the Conference Board Leading Economic Index, building permits, and new manufacturing orders — tend to turn before the overall economy does. A sustained decline in building permits, for instance, signals future weakness in construction, materials, furniture, and home appliances sectors months before GDP contracts. Lagging indicators — such as the unemployment rate and commercial loan balances — confirm a trend that is already well underway. Understanding this timing distinction allows firms to position inventory, staffing, and capital budgets ahead of the cycle rather than behind it.\n\nFor DECA Economics events specifically, the written analysis format often presents competitors with a multi-indicator economic snapshot and asks them to recommend a strategic response. A common trap is treating each indicator independently. The highest-scoring responses demonstrate systems thinking: recognising that low unemployment driving wage inflation (raising CPI) is simultaneously forcing the Fed to hold rates high (slowing credit growth), which will eventually suppress consumer spending (threatening GDP). This chain of causation — from labour market tightness through inflation to monetary tightening to demand contraction — is the kind of integrated macro narrative that earns top marks on the analysis criterion.',
      commonMisconceptions: [
        'GDP growth always means businesses are doing well. In reality, GDP can grow while specific sectors contract sharply — for example, residential construction collapsed in 2022 even as overall GDP remained positive, because rising interest rates hit that sector disproportionately hard.',
        'Low unemployment is always good for businesses. While it signals strong consumer spending, it also tightens the labour market, pushing wages up and increasing recruitment and retention costs — a significant margin pressure for labour-intensive industries like hospitality, retail, and healthcare.',
        'CPI is the only measure of inflation businesses need to track. The Producer Price Index (PPI) measures inflation at the wholesale/input level and often leads CPI by 3–6 months. A business that watches only CPI may be caught off-guard by rising input costs that have already been building in the supply chain.',
      ],
      examinerTip:
        'In DECA Economics events — particularly the Economics Challenge and Business Finance written analysis — always state the economic phase explicitly in your opening situation analysis, cite at least two specific indicators to support your diagnosis, and then link every strategic recommendation back to those indicators. Judges award marks for the coherence of the chain: indicator → economic condition → business implication → specific action. Vague statements like "the economy is challenging" score near zero; precise statements like "with GDP growth at 1.2% and CPI at 4.5%, the economy is in a stagflationary slowdown, which means pricing power is limited and cost control is the primary lever" score at the top of the rubric.',
      didYouKnow:
        'The "misery index" — invented by economist Arthur Okun — is simply the sum of the inflation rate and the unemployment rate. It peaked at 21.9 in June 1980, the highest in US postwar history. DECA competitors who cite this composite measure when diagnosing stagflation often impress judges with their breadth of economic knowledge.',
      thinkAboutIt: {
        question: `An economy posts a strong 4.1% annualised GDP growth rate for the quarter, comfortably above its historical trend. In the same report, the unemployment rate rises from 4.0% to 4.6%, and CPI holds steady at a tame 2.0%. A retail CEO calls this "unambiguously bullish" data and greenlights an aggressive 40-store expansion plan on the spot. Is the CEO's one-line read of the data justified? What could explain GDP rising while unemployment also rises, and how should that possibility change the expansion decision?`,
        answer: `The CEO's read is too hasty, because GDP and unemployment moving in the same direction (both up) is not the pattern a simple "Goldilocks expansion" story predicts — normally strong output growth pulls unemployment down as firms hire to meet demand. One explanation is a productivity-driven or "jobless" recovery: output is rising because existing workers are producing more per hour (automation, overtime, efficiency gains) rather than because firms are adding headcount, which can coincide with layoffs in specific sectors even as aggregate GDP climbs. Another explanation is a lag or composition effect — the GDP figure may be an early, revision-prone estimate, or growth may be concentrated in capital-intensive sectors (energy, tech infrastructure) that do not translate into broad-based consumer hiring. Since unemployment is a lagging indicator, a rising unemployment rate could also mean the labour market is still adjusting to a weaker patch from two quarters ago and has not yet caught up to the recent GDP rebound. Before committing to 40 new stores, the CEO should check whether the GDP strength is concentrated in a narrow set of industries unrelated to retail foot traffic, and whether rising unemployment signals softening consumer income in the specific regions targeted for expansion. A single strong headline number should never override the requirement to triangulate across indicators — this is precisely the "systems thinking" this lesson emphasises as the difference between a proficient and a top-scoring DECA response.`,
      },
    },
    flashcards: [
      {
        id: 'dc5-l1-fc1',
        front: 'If GDP growth is 0.8%, CPI is 5.2%, and unemployment is 6.1%, what economic phase does this most likely represent and what is the appropriate business strategy?',
        back: 'This is stagflation — simultaneous slow growth and high inflation. Appropriate strategies: cut discretionary costs, protect core customer relationships, avoid new debt, focus on value offerings, and lock in fixed-rate contracts to hedge against further inflation.',
        tags: ['DECA', 'economic-indicators', 'stagflation', 'business-strategy'],
      },
      {
        id: 'dc5-l1-fc2',
        front: 'How does a rise in the Federal Funds Rate affect a business\'s capital investment decisions?',
        back: 'Higher rates raise the cost of borrowing, increasing the hurdle rate for new investments. Projects that were profitable at 3% interest may be unprofitable at 6%. Businesses delay or cancel capital expenditures, shrink inventories, and favour short-payback projects to reduce exposure to expensive debt.',
        tags: ['DECA', 'interest-rates', 'capital-investment'],
      },
      {
        id: 'dc5-l1-fc3',
        front: 'What is the difference between a leading indicator and a lagging indicator? Give one example of each.',
        back: 'A leading indicator turns before the overall economy — e.g., building permits fall before a construction recession hits GDP. A lagging indicator confirms a trend already underway — e.g., the unemployment rate keeps rising for months after GDP has already bottomed and begun recovering.',
        tags: ['DECA', 'economic-indicators', 'leading-lagging'],
      },
    ],
    lessonAssignment: {
      prompt: `A national home-improvement retailer's economics team hands you the latest quarterly data snapshot ahead of a board meeting on 2026 capital spending: GDP growth = 2.1% (annualised), CPI (YoY) = 3.6%, Producer Price Index (PPI, YoY) = 5.9%, unemployment rate = 4.3% (up from 3.8% a year ago), and the Federal Funds Rate = 5.00% (unchanged for three consecutive Fed meetings).\n\n(a) Diagnose the current phase of the business cycle using at least three of the five data points provided, and explain your reasoning. [5 marks]\n\n(b) Recommend two specific business strategies the retailer should adopt in this environment, justifying each recommendation by citing a specific indicator. [6 marks]\n\n(c) The PPI (5.9%) is rising faster than the CPI (3.6%). Explain what this gap implies for the retailer's gross margin, and recommend one pricing or sourcing action to address it. [5 marks]\n\n(d) The Federal Funds Rate has been held steady for three meetings after a period of increases. Explain how this "pause" should factor into the retailer's capital investment (e.g., new store financing) decisions differently than if rates were still rising. [4 marks]`,
      rubric: `(a) Correct diagnosis (e.g., late-cycle slowdown / early contraction risk) supported by at least three indicators used together, not in isolation (3 pts). Explicit statement of the phase using business-cycle terminology (2 pts). Total: 5 pts.\n\n(b) Two distinct, actionable strategies (2 pts each = 4 pts). Each strategy explicitly tied to a named indicator and its implication (1 pt each = 2 pts). Total: 6 pts.\n\n(c) Correct identification of margin squeeze because input costs (PPI) are outpacing output prices (CPI), meaning full cost pass-through risks losing price-sensitive customers (3 pts). One specific, feasible action addressing the gap — e.g., renegotiating supplier contracts, shifting toward private-label lines, or selective price increases on inelastic categories (2 pts). Total: 5 pts.\n\n(d) Recognition that a rate "pause" (vs. active hikes) reduces — but does not eliminate — the urgency to delay financing, since borrowing costs have stabilised rather than fallen (2 pts). Sound recommendation on timing/structure of capital investment (e.g., locking in fixed-rate financing now rather than waiting speculatively for cuts) (2 pts). Total: 4 pts.`,
      exampleTopics: [
        'Combine GDP, CPI, unemployment, and PPI into one coherent business-cycle diagnosis rather than reading each indicator in isolation.',
        'Link the PPI-CPI gap directly to gross margin pressure and propose a concrete sourcing or pricing response.',
        'Explain the distinct role of the Federal Funds Rate as a forward-looking cost-of-capital signal in a capital investment decision.',
        'Use precise indicator-to-strategy language (indicator to economic condition to business implication to specific action) as modelled in the lesson\'s examiner tip.',
      ],
    },
    quiz: [
      {
        id: 'dc5-l1-q1',
        type: 'mcq',
        question: 'A national economy reports: GDP growth of 3.2%, CPI of 2.1%, and unemployment of 3.7%. Which business strategy is MOST appropriate in this environment?',
        options: [
          'Expand capacity, increase hiring, and launch new product lines to capture growing consumer demand.',
          'Reduce inventory levels, freeze hiring, and focus on cost-cutting to survive the downturn.',
          'Raise prices aggressively to offset high inflation eroding profit margins.',
          'Delay all capital investment until interest rates fall to near-zero levels.',
        ],
        correctAnswer: 0,
        explanation: 'Strong GDP growth (3.2%), low inflation (2.1%), and near-full employment (3.7%) describe a healthy expansion — the "Goldilocks" environment. Expanding capacity and hiring to meet rising consumer demand is the correct strategic response.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l1-q2',
        type: 'mcq',
        question: 'The unemployment rate is described as a "lagging indicator." What does this mean for a business trying to anticipate economic turning points?',
        options: [
          'The unemployment rate confirms trends already underway, so businesses should not wait for it to turn before adjusting strategy — they should use leading indicators like building permits or PMI instead.',
          'The unemployment rate is the most reliable indicator and should be the primary basis for all business planning.',
          'Lagging indicators have no practical value and can be safely ignored in strategic planning.',
          'A lagging indicator predicts future economic conditions more accurately than leading indicators.',
        ],
        correctAnswer: 0,
        explanation: 'Lagging indicators confirm trends after they are established. Unemployment typically keeps rising for 6–12 months after a recession has ended. Relying on it alone means businesses react too slowly. Leading indicators provide earlier signals and should anchor strategic planning.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l1-q3',
        type: 'mcq',
        question: 'A retail chain notices that CPI has risen 6% year-over-year while its own input costs (wholesale goods, logistics) have risen 9%. What does this imply for the firm\'s profit margin?',
        options: [
          'Margins are being squeezed because input costs are rising faster than consumer prices, making full cost pass-through impossible without losing price-sensitive customers.',
          'Margins are expanding because the firm can raise retail prices by 9% to match its cost increases.',
          'CPI rising 6% means the firm can automatically raise prices by 6% without any volume impact.',
          'The gap between input costs and CPI is irrelevant; only total revenue determines profitability.',
        ],
        correctAnswer: 0,
        explanation: 'When input costs (9%) rise faster than the general price level (6%), the firm faces a margin squeeze. It cannot fully pass costs to consumers — who are already experiencing 6% inflation — without risking volume loss. The firm must absorb part of the cost difference, compressing profitability.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Business Cycles & Strategic Planning ────────────────────────────
  {
    id: 'dc5-l2',
    moduleId: 'dc5-econ-events',
    title: 'Business Cycles & Strategic Planning',
    description: 'Recession-proofing strategies, expansionary opportunities, and inventory and hiring cycle management.',
    order: 2,
    estimatedMinutes: 35,
    tags: ['DECA', 'business-cycle', 'recession', 'expansion', 'strategic-planning', 'inventory'],
    content: {
      isStub: false,
      conceptualExplanation:
        'The business cycle describes the recurring pattern of expansion, peak, contraction, and trough that economies experience over time. Expansions are characterised by rising GDP, falling unemployment, growing consumer confidence, and increasing corporate revenues. Contractions (recessions) are defined by two consecutive quarters of negative GDP growth, rising unemployment, tightening credit conditions, and declining consumer and business spending. Each phase calls for a fundamentally different strategic posture, and the companies that consistently outperform their peers are those that anticipate phase transitions rather than reacting to them after the fact. The key strategic insight is that the seeds of recession survival are planted during the expansion — firms that overleverage during good times are the most vulnerable when conditions turn.\n\nInventory management is one of the most cycle-sensitive operational decisions a business makes. During expansion, firms build inventories to meet rising demand and protect against supply shortages. The danger is over-ordering near the peak, leaving the firm with high-cost inventory when demand suddenly contracts — precisely what happened to many retailers in 2021–2022, when pandemic-era over-ordering collided with the post-reopening demand slowdown. During contraction, the correct posture is lean inventory, just-in-time procurement, and a rapid shift toward essential SKUs. Hiring cycles mirror this pattern: expansion justifies aggressive recruitment and training investment; recession demands a hiring freeze and often layoffs, but firms that cut too deeply lose institutional knowledge and struggle to ramp up when recovery begins — the "scar tissue" problem.\n\nRecession-proofing is not a reactive measure; it is a deliberate strategic design choice made during good times. Recession-resilient firms share common characteristics: diversified revenue streams that do not all correlate with GDP, strong cash positions that allow them to invest opportunistically when asset prices fall, flexible cost structures with a high ratio of variable to fixed costs, and loyal core customer bases in inelastic demand categories. Counter-cyclical strategy during recessions includes acquiring distressed competitors at depressed valuations, locking in long-term contracts with suppliers at low cycle prices, and accelerating product development to position for the recovery. In DECA events, demonstrating awareness of where the economy sits in the business cycle and tailoring your recommendations to that phase is a hallmark of the highest-scoring responses.',
      realWorldHook:
        'When the 2008–2009 financial crisis hit, most automakers slashed investment. Toyota did the opposite: the company used the downturn to aggressively train its workforce and invest in the fuel-efficient Prius platform, anticipating that consumers emerging from the recession would prioritise fuel economy. By 2010, Toyota\'s global market share had risen to its highest-ever level, while US rivals General Motors and Chrysler required government bailouts. Toyota\'s counter-cyclical strategy — building capabilities during contraction to capture share during recovery — is the textbook example of business cycle mastery.',
      interactiveElement:
        'Using the business cycle phase descriptions below, complete the strategic planning matrix for a mid-size consumer electronics retailer.\n\n| Business Cycle Phase | GDP Trend | Unemployment | Appropriate Inventory Strategy | Appropriate Hiring Strategy | One Offensive Opportunity |\n|---|---|---|---|---|---|\n| Early Expansion | Rising | Falling | | | |\n| Peak | High/plateauing | Low | | | |\n| Early Contraction | Falling | Rising | | | |\n| Trough | Bottomed | High | | | |\n\nFor each phase: (1) Fill in the inventory and hiring strategies. (2) Identify one offensive opportunity that a well-capitalised retailer could exploit in each phase. (3) For the contraction phase specifically, list two costs the retailer should classify as "essential to protect" and two to cut immediately.',
      vocabulary: [
        {
          term: 'Business Cycle',
          definition: 'The recurring pattern of expansion (rising output and employment), peak (maximum output), contraction (falling output), and trough (minimum output) that characterises macroeconomic fluctuations over time.',
          example: 'A furniture retailer that recognises it is approaching a cyclical peak will start reducing inventory orders and building cash reserves rather than over-extending on new store leases.',
        },
        {
          term: 'Counter-Cyclical Strategy',
          definition: 'A deliberate business approach that moves opposite to the prevailing economic trend — investing, hiring, or acquiring during downturns to position for superior performance when the cycle turns up.',
          example: 'During the 2020 pandemic recession, several hotel chains bought distressed properties at 40–50% below pre-crisis valuations, generating enormous returns as travel demand recovered in 2021–2022.',
        },
        {
          term: 'Operating Leverage',
          definition: 'The degree to which a firm\'s cost structure is composed of fixed costs relative to variable costs. High operating leverage amplifies both profits in expansion and losses in contraction.',
          example: 'An airline has high operating leverage — aircraft leases and crew salaries are largely fixed — so a 10% drop in passengers causes a disproportionately large drop in operating income during recessions.',
        },
      ],
      deeperDive:
        'The concept of financial resilience separates businesses that merely survive recessions from those that emerge stronger. Financial resilience is built on three pillars: liquidity (sufficient cash or credit facilities to fund operations without forced asset sales), solvency (a debt load serviceable even at reduced revenue), and adaptability (the ability to pivot cost structure and product mix quickly as conditions change). Companies that enter a recession with low debt, strong cash flow, and flexible cost structures can do what their over-leveraged competitors cannot: acquire talent, intellectual property, and physical assets at distressed prices. Warren Buffett famously noted that recessions allow prepared firms to "be greedy when others are fearful."\n\nHiring strategy is particularly nuanced across the cycle. During contraction, the temptation is to conduct blanket layoffs to reduce costs quickly. However, research consistently shows that firms that retain their highest-skill employees through downturns outperform those that cut indiscriminately when recovery comes. The optimal recession workforce strategy distinguishes between "must-have" skills that are costly to replace (engineers, key account managers, proprietary process experts) and "discretionary" roles that can be temporarily scaled back. In DECA written analysis events, candidates who articulate this nuance — recommending targeted rather than indiscriminate cost reduction — demonstrate the kind of strategic sophistication that earns the highest marks on the analysis and recommendation criteria.',
      commonMisconceptions: [
        'Recessions are entirely bad for all businesses. In reality, counter-cyclical industries — discount retail, debt collection, bankruptcy law services, and repair shops — often grow during recessions as consumers trade down and defer big purchases. Identifying which demand is recession-resistant is a core strategic skill.',
        'The best time to expand is when the economy is already booming. Expansion decisions made at economic peaks typically involve paying peak prices for labour, real estate, and capital equipment. The most cost-effective expansion often happens during early-stage recoveries, when asset prices are still depressed but demand signals are clearly turning up.',
        'Cutting all costs equally during a recession is the safest strategy. Across-the-board cost cuts harm functions differently. Gutting marketing during a recession, for example, is a well-documented long-term revenue destroyer: brands that maintain or increase advertising share during downturns consistently gain market share when recovery arrives.',
      ],
      examinerTip:
        'In DECA Economics events, when a role-play or written analysis presents a firm facing a recession, structure your response around three time horizons: immediate (next 90 days — cash preservation, inventory reduction), medium-term (6–18 months — strategic cost restructuring, retention of key talent), and long-term (recovery phase — where to invest now to win market share post-recession). Judges consistently reward this temporal framework because it demonstrates that you understand business cycles as dynamic, not static, phenomena.',
      didYouKnow:
        'The average US economic expansion since World War II has lasted about 64 months, while the average contraction has lasted only 10 months. This asymmetry means businesses spend far more time in growth phases than in downturns — making preparation for the inevitable contraction all the more important, since managers may have years of expansion experience and limited recession experience when the downturn arrives.',
      thinkAboutIt: {
        question: `A consulting firm's standard crisis playbook tells every client to freeze all hiring and cut the marketing budget by 50% the moment a recession is declared, arguing this is the safest way to "protect cash at all costs." Using the concepts of operating leverage, counter-cyclical strategy, and the "scar tissue" problem from this lesson, is this advice appropriate for every firm? Under what conditions might it actually be harmful, and what would a better-differentiated response look like?`,
        answer: `Blanket advice to freeze hiring and slash marketing by the same percentage for every firm ignores that firms enter a recession from very different financial positions, and this lesson's core insight is that recession strategy must be tailored to a firm's operating leverage and balance-sheet strength, not applied uniformly. An over-leveraged firm with high fixed costs and thin cash reserves may genuinely need aggressive, indiscriminate cost-cutting to avoid insolvency, since its high operating leverage means falling revenue translates into a disproportionately large drop in operating income. A well-capitalised firm with low debt and strong cash flow, however, is exactly the kind of business the lesson identifies as positioned to pursue a counter-cyclical strategy — investing in talent, acquisitions, or marketing share precisely when competitors are retreating and prices are depressed. Applying the same 50% marketing cut to this firm would be actively harmful, since the lesson's misconception section notes that brands maintaining advertising during downturns typically gain market share once recovery arrives, while indiscriminate cuts here would simply cede ground for no cash-preservation benefit the firm did not already have. Similarly, a uniform hiring freeze risks the "scar tissue" problem — losing institutional knowledge and key talent that is costly to rebuild — when a more targeted approach would distinguish "must-have" skilled roles worth retaining or even hiring at cyclical-low wages from genuinely discretionary positions that can be scaled back. The better-differentiated response starts with an honest assessment of liquidity, solvency, and cost structure before deciding how aggressively — and where — to cut.`,
      },
    },
    flashcards: [
      {
        id: 'dc5-l2-fc1',
        front: 'What are the four phases of the business cycle in order, and what happens to GDP and unemployment in each?',
        back: 'Expansion: GDP rises, unemployment falls. Peak: GDP at maximum, unemployment at minimum. Contraction: GDP falls, unemployment rises. Trough: GDP at minimum, unemployment at maximum, before the next expansion begins.',
        tags: ['DECA', 'business-cycle', 'phases'],
      },
      {
        id: 'dc5-l2-fc2',
        front: 'What is a counter-cyclical business strategy and why does it typically generate superior long-term returns?',
        back: 'Counter-cyclical strategy involves investing — in assets, talent, or market share — during economic downturns when prices are depressed and competitors are retreating. It generates superior returns because assets are acquired cheaply, competition is reduced, and the firm is optimally positioned when the cycle turns up.',
        tags: ['DECA', 'counter-cyclical', 'business-cycle'],
      },
      {
        id: 'dc5-l2-fc3',
        front: 'Why is high operating leverage (mostly fixed costs) dangerous during an economic contraction?',
        back: 'With high fixed costs, total costs remain roughly constant even as revenue falls during a contraction. Each percentage drop in revenue translates to a larger percentage drop in operating income. Firms with high operating leverage can swing rapidly from profit to loss, risking insolvency if the contraction is prolonged.',
        tags: ['DECA', 'operating-leverage', 'recession'],
      },
    ],
    lessonAssignment: {
      prompt: `A regional chain of 60 fitness studios is entering what its CFO believes is an early-stage economic contraction: GDP growth has turned negative for one quarter, consumer confidence is falling, and membership cancellations are up 9% year-over-year. The chain has $4M in cash reserves, moderate debt (interest coverage ratio of 3.5x), and most costs are fixed (long-term facility leases and salaried trainers).\n\n(a) Using the business cycle framework, explain what specific inventory-equivalent (e.g., class capacity, equipment, staffing) and hiring adjustments the chain should make in early contraction, and why. [5 marks]\n\n(b) The chain's cost structure is described as mostly fixed. Explain how this level of operating leverage will affect its operating income if revenue falls another 10%, and recommend one structural change to reduce this risk going forward. [5 marks]\n\n(c) Identify one counter-cyclical opportunity this chain could pursue given its relatively strong cash position, and justify why it is a lower-risk move during a contraction than during a boom. [5 marks]\n\n(d) Recommend a workforce strategy that distinguishes between roles the chain should protect and roles it could scale back, avoiding the "scar tissue" problem described in this lesson. [5 marks]`,
      rubric: `(a) Correct application of early-contraction inventory/capacity logic (lean, just-in-time, protect essential offerings) (3 pts) with explicit link to hiring caution rather than immediate mass layoffs (2 pts). Total: 5 pts.\n\n(b) Correct explanation that high fixed costs mean a 10% revenue fall causes a proportionally larger fall in operating income (high operating leverage) (3 pts). One credible structural recommendation to increase the variable-cost share (e.g., renegotiating leases, moving some trainers to contract/commission pay) (2 pts). Total: 5 pts.\n\n(c) A specific, plausible counter-cyclical move (e.g., acquiring a distressed local competitor's lease/membership base, locking in low-cost equipment or lease contracts) (3 pts) justified with reference to depressed asset prices and reduced competition during downturns (2 pts). Total: 5 pts.\n\n(d) Clear distinction between "must-have" roles (e.g., senior trainers with client relationships) to protect or even hire cheaply, versus discretionary roles to scale back (3 pts), explicitly connected to avoiding the cost of rebuilding lost capability during recovery (2 pts). Total: 5 pts.`,
      exampleTopics: [
        'Apply the four business-cycle phases to a service business, translating "inventory strategy" into capacity, scheduling, and equipment decisions.',
        'Quantify how high operating leverage amplifies the impact of a revenue decline on operating income.',
        'Identify a genuine counter-cyclical opportunity and justify it using the "assets are cheap, competitors are retreating" logic from the lesson.',
        'Differentiate a targeted workforce strategy from an indiscriminate hiring freeze, explicitly addressing the "scar tissue" risk.',
      ],
    },
    quiz: [
      {
        id: 'dc5-l2-q1',
        type: 'mcq',
        question: 'A manufacturing firm is at the peak of the business cycle with full capacity utilisation and rising input costs. Which inventory strategy is MOST appropriate?',
        options: [
          'Begin reducing inventory build-up rates, shift toward just-in-time procurement, and avoid long-term fixed-price input contracts that lock in peak-cycle costs.',
          'Aggressively accumulate inventory at current prices before they rise further in the expansion.',
          'Immediately liquidate all inventory to generate cash reserves for the upcoming contraction.',
          'Expand warehouse capacity to accommodate maximum inventory levels for the foreseeable future.',
        ],
        correctAnswer: 0,
        explanation: 'At the peak, the risk of over-accumulation is highest. Contracting demand is on the horizon, and inventory bought at peak prices may need to be liquidated at lower prices. Reducing build-up rates and moving toward just-in-time procurement protects against being caught with excess inventory when demand contracts.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l2-q2',
        type: 'mcq',
        question: 'Which of the following businesses is most "recession-proof" and why?',
        options: [
          'A discount grocery chain, because food is a necessity with inelastic demand and consumers trade down to lower-cost options during recessions.',
          'A luxury car dealership, because wealthy customers are unaffected by economic downturns.',
          'A commercial real estate developer, because land values always hold steady.',
          'A high-end restaurant chain, because its brand loyalty protects revenue during contractions.',
        ],
        correctAnswer: 0,
        explanation: 'Discount grocery chains benefit from two recession effects: food is a necessity (inelastic demand) and consumers actively trade down from more expensive options. This combination makes them counter-cyclical — they often grow market share during recessions.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l2-q3',
        type: 'mcq',
        question: 'During the trough of a business cycle, what is the BEST strategic rationale for a well-capitalised firm to increase its hiring?',
        options: [
          'Talented workers are abundant and wages are at cyclical lows, allowing the firm to build human capital cheaply before the expansion drives up labour costs.',
          'Unemployment is high, so the government provides subsidies for any new hires during a trough.',
          'Consumer demand is rising rapidly at the trough, requiring immediate workforce expansion to meet orders.',
          'Hiring during a trough is always inadvisable because economic conditions are too uncertain.',
        ],
        correctAnswer: 0,
        explanation: 'At the trough, unemployment is high and wage pressure is minimal. A well-capitalised firm can recruit top talent at lower compensation than during expansion, building capabilities that will generate returns throughout the coming expansion at a below-average cost.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3: Global Economics for Business ───────────────────────────────────
  {
    id: 'dc5-l3',
    moduleId: 'dc5-econ-events',
    title: 'Global Economics for Business',
    description: 'Exchange rate impacts on business, supply chain strategy, offshoring vs nearshoring decisions, and political risk assessment.',
    order: 3,
    estimatedMinutes: 40,
    tags: ['DECA', 'global-economics', 'exchange-rates', 'supply-chain', 'offshoring', 'political-risk'],
    content: {
      isStub: false,
      conceptualExplanation:
        'Global economics introduces a layer of complexity — and opportunity — that purely domestic businesses never encounter. Exchange rates are the price of one currency in terms of another, and they have direct, quantifiable effects on business profitability. When a firm\'s home currency appreciates (rises in value), its exports become more expensive for foreign buyers, potentially cutting sales volume in international markets. Simultaneously, imported inputs become cheaper, reducing production costs for manufacturers who source globally. A US company exporting to Europe, for instance, faces a direct revenue hit whenever the dollar strengthens against the euro — the same product now costs Europeans more in their local currency, reducing competitiveness. Conversely, a stronger dollar helps US importers: the same amount of dollars buys more foreign goods, lowering input costs and potentially improving margins.\n\nGlobal supply chains are the infrastructure of international trade — the networks of suppliers, manufacturers, logistics providers, and distributors that move goods from raw material to end consumer across multiple countries. The 2020–2021 pandemic exposed the fragility of hyper-optimised single-source supply chains: when Chinese factories shut down, semiconductor production in Taiwan was disrupted, or shipping containers piled up at California ports, entire industries found themselves unable to build products. This experience triggered a fundamental reassessment of supply chain strategy, with firms weighing the cost efficiency of offshoring (moving production to low-cost countries) against the resilience of nearshoring (relocating production to nearby countries) or reshoring (bringing production back to the home country). The optimal choice depends on cost differentials, lead times, geopolitical risk, trade agreement status, and the strategic importance of the component or process.\n\nPolitical risk — the possibility that government actions, political instability, or regulatory changes in a foreign market will adversely affect business operations — is a factor that DECA Economics events increasingly incorporate into their scenarios. Political risk includes tariff increases (which raise import costs), export controls (which restrict access to critical inputs), currency controls (which prevent repatriation of profits), expropriation (government seizure of assets), and regulatory changes. Firms operating internationally must systematically assess these risks using frameworks like country risk scores, and they must build contingency strategies — diversified supplier bases, contractual protections, currency hedging, and political risk insurance — to manage exposure without forgoing the benefits of global markets.',
      realWorldHook:
        'Apple\'s "China plus one" supply chain pivot illustrates global economics in practice. For decades, over 90% of iPhones were assembled in China, primarily by Foxconn. After US-China trade tensions introduced tariff uncertainty and the COVID lockdowns in Shanghai disrupted production for weeks in 2022, Apple accelerated its diversification strategy. By 2024, approximately 14% of iPhone production had shifted to India (via Tata Electronics and Foxconn\'s Indian plants), with Vietnam absorbing AirPod and Apple Watch assembly. Apple\'s CFO explicitly cited exchange rate risk, political risk, and supply chain resilience — not pure cost minimisation — as the drivers of this reallocation, demonstrating exactly the multi-factor analysis DECA judges look for.',
      interactiveElement:
        'A US-based athletic footwear company currently manufactures 80% of its products in Vietnam (low labour costs, long lead times, moderate political risk) and 20% in Mexico (higher labour costs, short lead times, USMCA trade benefits, low political risk). The US dollar has appreciated 12% against the Vietnamese dong in the past year.\n\nComplete the following analysis:\n1. Currency impact: If the company sells shoes in the US for $120 and manufactures them in Vietnam for a cost that was $45 last year, what is the new dollar-equivalent cost after the dong depreciates 12%? (Hint: a weaker dong means Vietnamese costs are cheaper in dollar terms — calculate the new manufacturing cost.)\n2. Supply chain risk: List two political risks associated with heavy Vietnam concentration and two that apply to Mexico.\n3. Recommendation: Should the company shift more production to Mexico, further concentrate in Vietnam, or diversify to a third country? Justify using exchange rate trends, political risk, lead times, and trade agreement considerations.\n4. Table: | Factor | Vietnam | Mexico | Weight (1-5) | Weighted Score |',
      vocabulary: [
        {
          term: 'Exchange Rate',
          definition: 'The price at which one currency can be exchanged for another, expressed as units of one currency per unit of another. Exchange rates fluctuate continuously based on trade flows, interest rate differentials, and investor sentiment.',
          example: 'When the USD/EUR exchange rate rises from 1.05 to 1.15 (dollar strengthens), a US exporter selling a $100 product to Germany sees its euro price rise from €95 to €87 — actually cheaper for Europeans, making US goods more competitive abroad.',
        },
        {
          term: 'Nearshoring',
          definition: 'The practice of relocating business operations or manufacturing to a nearby country rather than a distant low-cost country, trading some cost efficiency for shorter lead times, reduced geopolitical risk, and often preferential trade agreement terms.',
          example: 'A US electronics firm moving assembly from China to Mexico gains USMCA tariff benefits, reduces lead times from 45 days to 5 days, and lowers political risk — at the cost of slightly higher Mexican labour rates.',
        },
        {
          term: 'Political Risk',
          definition: 'The probability that government actions, political instability, or policy changes in a foreign country will negatively impact a business\'s operations, assets, or profitability in that market.',
          example: 'When Russia invaded Ukraine in 2022, over 1,000 international firms faced sudden political risk materialisation — asset seizure, currency controls, and sanctions that made continued operations impossible, forcing rapid market exit.',
        },
      ],
      deeperDive:
        'Currency hedging is the primary financial tool businesses use to manage exchange rate risk. A company expecting to receive €10 million in 6 months from European sales can lock in today\'s EUR/USD exchange rate using a forward contract, eliminating the uncertainty of where rates will be at payment time. Options contracts provide similar protection with more flexibility. Natural hedging — matching revenues and costs in the same currency — is an operational alternative: a US firm that earns euros and also pays European suppliers in euros automatically offsets its exchange rate exposure. For DECA competitors, understanding that hedging has a cost (the forward premium) and that natural hedging requires operational restructuring demonstrates the kind of nuanced financial literacy that elevates written analysis scores.\n\nTariffs and trade agreements add a regulatory dimension to global supply chain decisions. The US-Mexico-Canada Agreement (USMCA) grants tariff-free access between member countries for qualifying goods, making Mexico a particularly attractive manufacturing base for US-bound products. The US-China trade war, which began in 2018 and intensified through 2025, imposed 25% tariffs on hundreds of billions of dollars of Chinese imports, fundamentally altering the cost calculus for sourcing from China. DECA scenarios frequently involve firms navigating this tariff landscape, and competitors who can quantify the tariff impact — "a 25% tariff on $50 input cost adds $12.50 per unit, raising break-even by 1,500 units" — demonstrate exactly the quantitative reasoning that distinguishes top scorers.',
      commonMisconceptions: [
        'A stronger home currency is always good for a country\'s businesses. It is good for importers (cheaper inputs) but harmful for exporters (their goods become more expensive for foreign buyers). The net effect depends entirely on whether the firm is a net importer or exporter.',
        'Offshoring to the lowest-cost country is always the optimal supply chain strategy. True cost includes not just labour rates but also transportation, lead times, quality control, tariff exposure, currency risk, and political risk. Many firms that "offshored" to China for 20 years are now discovering that the total cost of supply chain disruptions was never properly accounted for.',
        'Political risk only affects firms operating in developing countries. Even advanced economies impose regulatory changes, export controls, and sanctions that constitute political risk. US restrictions on semiconductor exports to China in 2022–2024 represented political risk materialisation for dozens of US and European firms that had built business models dependent on the Chinese chip market.',
      ],
      examinerTip:
        'When a DECA written analysis or role-play involves international operations, always address three dimensions explicitly: (1) Exchange rate exposure — is the firm a net importer or exporter, and what direction of currency movement hurts it? (2) Supply chain risk — what is the single-point-of-failure in the current sourcing model, and what would a disruption cost? (3) Regulatory/political risk — what tariff, trade agreement, or political stability factors affect the firm\'s chosen markets? Judges award the highest marks to responses that treat global economics as a multi-dimensional risk management problem, not just a cost optimisation exercise.',
      didYouKnow:
        'The "Big Mac Index," published by The Economist since 1986, uses the price of a McDonald\'s Big Mac in different countries to assess whether currencies are overvalued or undervalued relative to the US dollar. It is a simplified version of purchasing power parity (PPP) theory and is actually cited in academic economics literature as a useful informal exchange rate benchmark.',
      thinkAboutIt: {
        question: `A US company sells finished products to European retailers (earning revenue in euros) and also imports raw materials from a German supplier (paying costs in euros). When the euro strengthens sharply against the dollar, a junior analyst tells the CFO this is "bad news across the board" because European costs are rising. Is this a complete assessment? Use the concept of natural hedging to explain what additional information is needed before judging the net impact.`,
        answer: `The analyst's assessment is incomplete, because it only accounts for one side of the company's euro exposure — the cost side — while ignoring that the company also earns euro-denominated revenue from its European sales. When the euro strengthens against the dollar, the dollar value of both the euro costs (raw materials) and the euro revenues (product sales) rises simultaneously, which is exactly the natural-hedging mechanism described in this lesson: revenues and costs denominated in the same currency move together, offsetting each other. Whether the company is a net winner or net loser from the euro's appreciation depends entirely on the relative size of its euro receivables versus its euro payables, not on the direction of the currency move alone. If euro revenue significantly exceeds euro costs, a stronger euro is actually good news in dollar terms, since the larger revenue leg gains more than the smaller cost leg loses. If euro costs exceed euro revenue, the opposite holds and the analyst's warning is directionally correct, though understated as a "bad news across the board" claim. Before reaching a conclusion, the CFO needs to know the actual dollar magnitude of euro-denominated sales versus euro-denominated input purchases — the size of the natural hedge — rather than assuming that any currency movement is uniformly harmful just because it touches a cost line.`,
      },
    },
    flashcards: [
      {
        id: 'dc5-l3-fc1',
        front: 'A US exporter\'s home currency strengthens by 15% against its main export market\'s currency. What happens to the price of its goods in the foreign market, and how does this affect competitiveness?',
        back: 'The US goods become 15% more expensive in the foreign market (in local currency terms). This reduces competitiveness — foreign buyers may switch to local or third-country suppliers who have not experienced a similar currency appreciation.',
        tags: ['DECA', 'exchange-rates', 'exports'],
      },
      {
        id: 'dc5-l3-fc2',
        front: 'What is the difference between offshoring, nearshoring, and reshoring? When is each appropriate?',
        back: 'Offshoring: moving production to a distant low-cost country (e.g., China) — best when cost minimisation dominates and geopolitical risk is low. Nearshoring: moving to a nearby country (e.g., Mexico) — balances cost and lead time with lower risk. Reshoring: bringing production home — prioritises control and resilience over cost efficiency, justified when political risk or supply chain disruption costs are high.',
        tags: ['DECA', 'supply-chain', 'offshoring', 'nearshoring'],
      },
      {
        id: 'dc5-l3-fc3',
        front: 'What is natural hedging in the context of exchange rate risk management?',
        back: 'Natural hedging involves structuring operations so that revenues and costs are denominated in the same currency, creating an automatic offset. Example: a US firm that earns euros from European sales and also pays European suppliers in euros has naturally hedged its euro exposure — currency moves affect both sides simultaneously, reducing net risk.',
        tags: ['DECA', 'exchange-rates', 'hedging', 'global-economics'],
      },
    ],
    lessonAssignment: {
      prompt: `An athletic apparel company manufactures 70% of its products in Vietnam (labour cost advantage, 40-day lead time, moderate political risk) and sources 30% from a supplier in Mexico (higher labour cost, 6-day lead time, USMCA tariff-free access, low political risk). The US dollar has weakened 10% against the Vietnamese dong over the past year, and the US government has just announced a new 15% tariff on selected Southeast Asian textile imports that would apply to the Vietnamese-made goods.\n\n(a) Explain the combined effect of the weaker dollar and the new tariff on the dollar cost of the company's Vietnamese-made products. [5 marks]\n\n(b) Identify two political or regulatory risks associated with continued heavy reliance on Vietnam, and two advantages Mexico offers that mitigate those specific risks. [6 marks]\n\n(c) Recommend whether the company should shift additional production to Mexico, diversify to a third country, or maintain its current split — justifying your answer using exchange rate trends, tariff exposure, lead time, and trade agreement status. [6 marks]\n\n(d) Propose one currency or operational hedging approach the company could use to reduce its exposure to further dong or peso fluctuations. [3 marks]`,
      rubric: `(a) Correct recognition that a weaker dollar makes Vietnamese-sourced goods more expensive in dollar terms, and the new 15% tariff adds a further direct cost increase — the two effects compound rather than offset (3 pts). Attempt at quantifying or describing the combined cost impact directionally (2 pts). Total: 5 pts.\n\n(b) Two distinct Vietnam-specific risks (tariff/trade-policy exposure, longer lead times increasing disruption risk) (2 pts) and two Mexico-specific mitigating advantages (USMCA tariff protection, short lead times reducing disruption exposure) (2 pts), each with a brief justification (2 pts). Total: 6 pts.\n\n(c) A clear recommendation (shift to Mexico, diversify further, or maintain split) (2 pts) justified using at least three of the four required factors — exchange rate, tariff, lead time, trade agreement (3 pts) — with an internally consistent argument (1 pt). Total: 6 pts.\n\n(d) One specific, feasible hedging idea — e.g., forward contracts on the dong/peso, or natural hedging by increasing local-currency-denominated costs to match any local-currency revenue (3 pts). Total: 3 pts.`,
      exampleTopics: [
        'Combine an exchange rate movement and a tariff change into a single compounded cost impact rather than analysing them separately.',
        'Distinguish political/regulatory risk from currency risk when comparing two sourcing countries.',
        'Justify a sourcing recommendation using multiple factors (exchange rate, tariffs, lead time, trade agreements) rather than cost alone.',
        'Propose a concrete hedging mechanism (forward contract or natural hedge) rather than a vague "manage the risk" statement.',
      ],
    },
    quiz: [
      {
        id: 'dc5-l3-q1',
        type: 'mcq',
        question: 'A US car manufacturer sources steel from Japan. If the US dollar weakens significantly against the Japanese yen, what is the most immediate effect on the manufacturer\'s cost structure?',
        options: [
          'Steel costs rise in dollar terms, squeezing margins unless the manufacturer can pass costs to consumers or find alternative suppliers.',
          'Steel costs fall in dollar terms, improving margins automatically.',
          'The exchange rate has no effect on input costs for US manufacturers.',
          'A weaker dollar makes US exports cheaper, so overall revenue rises enough to offset any cost increase.',
        ],
        correctAnswer: 0,
        explanation: 'A weaker dollar means more dollars are needed to buy the same amount of yen. Since steel is priced in yen, the dollar cost of Japanese steel rises. This directly increases manufacturing costs, squeezing margins if the firm cannot pass the cost to buyers or switch suppliers.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l3-q2',
        type: 'mcq',
        question: 'A fashion retailer currently manufactures 90% of its goods in Bangladesh (very low labour cost, 45-day lead time, high political stability risk from climate-related disruption). Which supply chain adjustment best improves resilience without abandoning cost efficiency entirely?',
        options: [
          'Diversify by moving 30% of production to a nearby country with shorter lead times and different risk profile, such as Turkey or Morocco, while retaining Bangladesh for cost-efficient basics.',
          'Immediately reshore all production to the home country to eliminate all political risk.',
          'Concentrate production further in Bangladesh to maximise cost efficiency and use the savings to build larger inventory buffers.',
          'Outsource supply chain risk assessment to a third party and make no operational changes.',
        ],
        correctAnswer: 0,
        explanation: 'Geographic diversification is the standard resilience strategy. Moving 30% to Turkey or Morocco introduces a second production base with different risk characteristics and shorter lead times, reducing single-point-of-failure exposure while retaining Bangladesh\'s cost advantages for the remaining volume.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l3-q3',
        type: 'mcq',
        question: 'A US technology firm sells hardware to Chinese customers and sources components from Chinese suppliers. The US government announces a 25% tariff on Chinese imports. What is the net effect on the firm\'s economics?',
        options: [
          'The firm faces rising input costs (tariffed Chinese components) while potentially losing Chinese customers who retaliate by favouring domestic alternatives — a double squeeze on margins.',
          'The tariff only affects the firm\'s export revenues; input costs are unaffected.',
          'The firm benefits because the tariff makes Chinese competitors\' goods more expensive in the US market.',
          'Tariffs are absorbed entirely by the Chinese government and have no effect on the US firm.',
        ],
        correctAnswer: 0,
        explanation: 'The firm faces dual exposure: import tariffs raise its input costs from China, and Chinese retaliation (formal or informal) may reduce access to Chinese customers. The combination compresses margins from both the cost and revenue sides simultaneously.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4: Written Business Analysis ──────────────────────────────────────
  {
    id: 'dc5-l4',
    moduleId: 'dc5-econ-events',
    title: 'Written Business Analysis',
    description: 'How to structure a DECA written analysis: situation analysis, alternatives, recommendation, and implementation.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['DECA', 'written-analysis', 'situation-analysis', 'recommendations', 'implementation'],
    content: {
      isStub: false,
      conceptualExplanation:
        'The DECA written business analysis is a structured document — typically 15–20 pages — that requires competitors to demonstrate mastery of business and economic analysis within a defined case scenario. Unlike the role-play, where communication style and poise matter, the written analysis is judged entirely on the quality of thinking, the rigour of the analysis, and the feasibility of recommendations. The document follows a prescribed format: executive summary, situation analysis, problem statement, analysis of alternatives, recommendation, and implementation plan. Each section serves a distinct analytical purpose, and judges score each section separately — meaning a weak implementation plan can cost marks even if the preceding analysis was excellent.\n\nThe situation analysis is where you demonstrate your ability to synthesise information. It requires you to summarise the company\'s internal position (strengths, weaknesses, financial health, competitive advantages) and external environment (market trends, competitor landscape, economic conditions, regulatory factors). A SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) is the standard organising framework. The critical skill is selectivity: the situation analysis must highlight only the factors most relevant to the central problem, not enumerate everything. Judges penalise padding — including information that does not connect to the problem or recommendation. The problem statement that follows must be a single, precise sentence that captures the root cause of the business challenge, not a symptom. Confusing symptoms with root causes is one of the most common errors in DECA written analyses.\n\nThe analysis of alternatives is where economic and business reasoning earns the most marks. Competitors must identify at least two to three distinct courses of action the firm could take, evaluate each against clear criteria (financial impact, feasibility, risk, timeline), and explain why the recommended option is superior to the alternatives. The recommendation section then presents the chosen course of action with specific, quantifiable justification — break-even analysis, projected ROI, market share implications. The implementation plan closes the document with a realistic timeline, resource requirements, key performance indicators (KPIs), and contingency measures. A strong implementation plan demonstrates that the competitor understands not just what to do but how to execute it in the real world.',
      realWorldHook:
        'McKinsey & Company, the world\'s leading management consultancy, uses a strikingly similar structure for its client deliverables. Their "MECE" principle (Mutually Exclusive, Collectively Exhaustive) — ensuring that analytical categories do not overlap and collectively cover all relevant factors — mirrors the DECA written analysis requirement for distinct, comprehensive alternatives. McKinsey consultants earn starting salaries of $200,000+ specifically because they can produce rigorous written analyses under time pressure. DECA written analysis events are, in essence, a high school rehearsal for professional-grade strategy consulting.',
      interactiveElement:
        'Practice document: A regional coffee chain (47 locations, primarily in the Southeast US) has seen same-store sales decline 8% over two quarters. Mobile ordering now represents 60% of Starbucks orders nationally but only 12% at your chain. The company has $2.1M in available capital.\n\nWrite the following sections (aim for 150-200 words each):\n1. Situation Analysis: Identify 2 internal strengths, 2 internal weaknesses, 2 external opportunities, and 2 external threats.\n2. Problem Statement: Write one sentence identifying the root cause (not the symptom).\n3. Two Alternatives: (A) Invest $1.8M in a mobile ordering app and loyalty program. (B) Expand into 5 new locations in adjacent markets.\n4. Recommendation: Choose one alternative and justify it with at least two quantitative points.\n5. Implementation KPIs: List 3 measurable indicators you would track at 90 days and 12 months.\n\nAfter completing, review: Did your recommendation connect directly back to your problem statement? Are your KPIs measurable and time-bound?',
      vocabulary: [
        {
          term: 'SWOT Analysis',
          definition: 'A strategic framework that evaluates a company\'s internal Strengths and Weaknesses alongside external Opportunities and Threats, providing a structured overview of the firm\'s competitive position.',
          example: 'For a regional coffee chain, a SWOT might identify strong local brand loyalty (Strength), limited technology infrastructure (Weakness), growing demand for mobile ordering (Opportunity), and Starbucks\'s aggressive regional expansion (Threat).',
        },
        {
          term: 'MECE Principle',
          definition: 'Mutually Exclusive, Collectively Exhaustive — a logic framework ensuring that analytical categories do not overlap (mutually exclusive) and together cover all relevant possibilities (collectively exhaustive).',
          example: 'When presenting three strategic alternatives in a DECA written analysis, MECE requires that each alternative represents a genuinely different approach (no overlap) and that together the three options span the plausible decision space (nothing important is omitted).',
        },
        {
          term: 'Key Performance Indicator (KPI)',
          definition: 'A measurable value that demonstrates how effectively a company is achieving a key business objective, used to track progress against specific targets over defined time periods.',
          example: 'For a mobile ordering implementation, appropriate KPIs include: mobile order share (target: 35% within 12 months), average order value via app vs. in-store, and customer acquisition cost for new app users.',
        },
      ],
      deeperDive:
        'The executive summary is the most-read section of any written analysis and should be the last section written but the first section presented. It must stand alone — a reader who only reads the executive summary should understand the situation, the recommendation, and the expected impact. The executive summary is not an introduction; it is a compressed version of your entire argument. In DECA judging, executives often skim executive summaries first to calibrate their expectations for the rest of the document. An executive summary that is vague, padded, or fails to state the recommendation clearly signals a weak analysis before the judge has even read the body.\n\nQuantification is the most reliable differentiator between high-scoring and average DECA written analyses. Every claim should have a number attached wherever possible. "Implementing mobile ordering will likely increase sales" scores far lower than "Implementing mobile ordering with a loyalty program is projected to increase average transaction frequency by 1.4 visits per month based on Starbucks\'s published loyalty program data, generating approximately $3.2M in incremental annual revenue against a $1.8M investment — an 18-month payback period." This level of specificity requires research, estimation skill, and the confidence to commit to numbers — all of which can be practised in DECA preparation.',
      commonMisconceptions: [
        'The recommendation is the most important section of a written analysis. In DECA judging rubrics, the analysis of alternatives typically carries as much or more weight than the recommendation itself. A brilliant recommendation unsupported by rigorous evaluation of alternatives scores poorly; a well-reasoned alternatives analysis with a logical recommendation scores highly even if the chosen alternative is not the one the judge would personally select.',
        'More pages mean a better score. DECA written analyses are scored on the quality of thinking, not volume. A tightly written 15-page analysis with precise quantification outscores a padded 25-page submission full of generic background information and repetition. Judges are experienced enough to recognise filler and penalise it.',
        'The implementation plan is just a formality to include at the end. The implementation plan is where many competitors lose significant marks. Judges look for specificity: named responsible parties, realistic timelines, quantified resource requirements, and measurable KPIs. A vague "roll out the program over the next year" implementation plan signals that the competitor has not thought through execution, undermining the credibility of an otherwise strong recommendation.',
      ],
      examinerTip:
        'The single most common mistake in DECA written analyses is confusing symptoms with root causes in the problem statement. If sales are declining, "declining sales" is not the problem — it is a symptom. The root cause might be an eroding value proposition in the face of digital-native competitors, or a demographic shift in the customer base, or a pricing structure misaligned with consumer willingness to pay. Judges at the highest level of DECA competition specifically look for root-cause precision in the problem statement, because a misdiagnosed problem leads to recommendations that treat symptoms rather than causes — a fatal analytical error no matter how polished the rest of the document is.',
      didYouKnow:
        'The structured analytical approach used in DECA written analyses is almost identical to the framework taught in the first year of Harvard Business School\'s MBA program. The case method — reading a business scenario, diagnosing the problem, evaluating alternatives, and recommending a course of action — is the foundation of HBS pedagogy. DECA competitors are practising one of the most valued analytical skills in business education, years before their MBA-holding counterparts begin.',
      thinkAboutIt: {
        question: `Two DECA competitors submit written analyses on the same declining regional retailer. Competitor A's "Analysis of Alternatives" section proposes: (1) launch a basic mobile ordering app, and (2) launch a premium mobile ordering app with additional loyalty features. Competitor B proposes: (1) invest in mobile ordering and loyalty technology, (2) open new stores in adjacent markets, and (3) maintain the current model while cutting costs. Which set of alternatives better satisfies the MECE principle, and why would a judge dock marks from the weaker set even if both analyses are well written?`,
        answer: `Competitor B's alternative set better satisfies MECE, because its three options represent genuinely distinct strategic directions — investing in digital capability, physical expansion, and cost-focused stability — that do not overlap and together span a reasonably comprehensive range of plausible responses to declining sales. Competitor A's two alternatives fail the "mutually exclusive" test because they are not truly different strategies; a basic app and a premium app are two variations of the same underlying idea (invest in mobile ordering), differing only in scope and cost, not in strategic direction. This also weakens the "collectively exhaustive" side of MECE, since Competitor A never considers any alternative outside the mobile-technology space at all, leaving the reader unable to judge whether mobile investment is truly superior to other plausible options like expansion or cost discipline. A judge would dock marks from Competitor A's analysis regardless of how well-written the prose is, because the lesson explicitly frames the Analysis of Alternatives section as carrying as much or more weight than the recommendation itself — and a comparison between two versions of the same idea cannot demonstrate the rigorous, criteria-based decision-making the rubric is designed to reward. Well-written prose describing a false choice still produces a false choice; MECE is a structural requirement, not a stylistic one, and structural flaws in the alternatives section undermine the credibility of everything that follows, including the recommendation.`,
      },
    },
    flashcards: [
      {
        id: 'dc5-l4-fc1',
        front: 'What are the six standard sections of a DECA written business analysis in order?',
        back: '(1) Executive Summary, (2) Situation Analysis, (3) Problem Statement, (4) Analysis of Alternatives, (5) Recommendation, (6) Implementation Plan. Each section is scored separately — weakness in any one section costs marks regardless of the quality of others.',
        tags: ['DECA', 'written-analysis', 'structure'],
      },
      {
        id: 'dc5-l4-fc2',
        front: 'Why is the problem statement the most critical sentence in a DECA written analysis?',
        back: 'The problem statement defines the analytical lens for the entire document. If it misidentifies the root cause — treating a symptom as the problem — every subsequent alternative, recommendation, and implementation plan addresses the wrong issue. A precisely stated root-cause problem statement aligns the entire analysis.',
        tags: ['DECA', 'written-analysis', 'problem-statement'],
      },
      {
        id: 'dc5-l4-fc3',
        front: 'What does MECE mean and why is it important for the Analysis of Alternatives section?',
        back: 'MECE = Mutually Exclusive, Collectively Exhaustive. In alternatives analysis, it means each alternative must represent a genuinely distinct approach (no overlap) and together the alternatives must cover the meaningful decision space (no important option omitted). MECE alternatives ensure the recommendation reflects a true choice, not a comparison of identical options.',
        tags: ['DECA', 'written-analysis', 'MECE', 'alternatives'],
      },
    ],
    lessonAssignment: {
      prompt: `A regional chain of 30 mid-market gyms has lost 14% of its membership base over the past 18 months, largely to low-cost, no-frills competitors and app-based home fitness platforms. The chain has $1.5M in available capital and strong brand recognition among members over 40, but weak digital infrastructure (no app, paper-based check-in).\n\n(a) Write a situation analysis identifying two internal strengths, two internal weaknesses, two external opportunities, and two external threats. [6 marks]\n\n(b) Write a single-sentence problem statement that identifies the root cause of the membership decline rather than restating the symptom. [4 marks]\n\n(c) Propose two genuinely distinct (MECE) strategic alternatives the chain could pursue, and evaluate each against at least two explicit criteria (e.g., cost, feasibility, speed, risk). [7 marks]\n\n(d) State a recommendation with at least one quantified justification, and list three measurable, time-bound KPIs to track its success at 90 days and 12 months. [6 marks]`,
      rubric: `(a) SWOT correctly categorised with two items per quadrant, each specific to this scenario rather than generic (1 pt per correctly placed and justified item, up to 6 pts capped at the strongest 6). Total: 6 pts.\n\n(b) Problem statement identifies a root cause (e.g., "the chain's lack of digital engagement infrastructure has ceded convenience-focused younger members to app-based and low-cost competitors") rather than a symptom like "membership is declining" (4 pts; partial credit of 1-2 pts if the statement is directionally correct but still symptom-level). Total: 4 pts.\n\n(c) Two alternatives that are mutually exclusive and collectively span a reasonable decision space (3 pts). Each alternative evaluated against at least two explicit, named criteria (2 pts each = 4 pts, capped). Total: 7 pts.\n\n(d) Clear recommendation naming one of the alternatives (1 pt) with at least one quantified justification such as a cost, revenue, or membership-retention estimate (3 pts). Three KPIs that are specific, measurable, and time-bound at both the 90-day and 12-month checkpoints (2 pts). Total: 6 pts.`,
      exampleTopics: [
        'Select only SWOT factors that connect directly to the eventual problem statement rather than listing generic strengths and weaknesses.',
        'Write a problem statement that names a root cause, not a restated symptom ("declining membership").',
        'Ensure the two alternatives are genuinely distinct strategic directions (MECE), each evaluated against the same explicit criteria.',
        'Attach at least one number to the recommendation and set KPIs that are measurable and time-bound, not vague aspirations.',
      ],
    },
    quiz: [
      {
        id: 'dc5-l4-q1',
        type: 'mcq',
        question: 'A DECA written analysis on a declining retailer states the problem as: "The company\'s sales have declined 12% over two years." Why is this problem statement insufficient?',
        options: [
          'It describes a symptom (declining sales) rather than diagnosing the root cause (e.g., pricing misalignment, eroding value proposition, or digital disruption) — meaning the subsequent alternatives will address the wrong issue.',
          'It is too short; problem statements must be at least three sentences to be credible.',
          'It includes a specific percentage, which may be inaccurate and should be omitted.',
          'It is written in passive voice, which DECA judges penalise.',
        ],
        correctAnswer: 0,
        explanation: 'Declining sales is a symptom, not a root cause. A judge-quality problem statement would identify why sales are declining — e.g., "The firm\'s failure to develop a digital loyalty platform has ceded market share to mobile-native competitors among its core 25–40 demographic." This root-cause framing directs the alternatives toward solving the actual problem.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l4-q2',
        type: 'mcq',
        question: 'In the Analysis of Alternatives section, what is the primary purpose of evaluating alternatives against explicit criteria?',
        options: [
          'To demonstrate rigorous, objective reasoning and show that the recommendation emerges from comparative analysis rather than personal preference or assumption.',
          'To show judges that the competitor has read widely about the company and its industry.',
          'To increase the page count of the document and demonstrate thoroughness.',
          'To satisfy the DECA format requirement, since the content of the alternatives evaluation does not affect the score.',
        ],
        correctAnswer: 0,
        explanation: 'Explicit evaluation criteria (financial impact, feasibility, risk, alignment with strategy) make the comparative analysis transparent and defensible. Judges can see exactly why one alternative was preferred over another. Criteria-free alternatives evaluation reads as arbitrary opinion, scoring poorly on the analysis rubric.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l4-q3',
        type: 'mcq',
        question: 'Which of the following implementation plan KPIs is BEST for tracking the success of a new mobile ordering rollout at a coffee chain?',
        options: [
          'Mobile order share as a percentage of total transactions, measured monthly, with a target of 35% within 12 months.',
          'General customer satisfaction, measured annually through a survey.',
          'Total number of app downloads at launch, measured once.',
          'Whether the app was launched on time, reported as a yes/no metric.',
        ],
        correctAnswer: 0,
        explanation: 'A strong KPI is specific, measurable, time-bound, and directly tied to the strategic objective. Mobile order share (%) with a monthly tracking cadence and a 12-month target meets all four criteria. The other options are either too infrequent, too binary, or not connected to business outcome.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5: DECA Economics Events Prep ─────────────────────────────────────
  {
    id: 'dc5-l5',
    moduleId: 'dc5-econ-events',
    title: 'DECA Economics Events Prep',
    description: 'Format, judging rubrics, and preparation strategies for the Economics Challenge, Business Finance, and Business Law & Ethics events.',
    order: 5,
    estimatedMinutes: 30,
    tags: ['DECA', 'economics-challenge', 'business-finance', 'business-law', 'event-prep', 'judging-rubric'],
    content: {
      isStub: false,
      conceptualExplanation:
        'DECA\'s economics-focused events test a distinct combination of academic knowledge and professional application that differs meaningfully from the firm-level strategy emphasis of most role-play events. The Economics Challenge (previously called the Economic Research Event) requires competitors to demonstrate deep understanding of macroeconomic and microeconomic theory, current economic data, and the ability to apply both to real-world policy and business situations. It typically involves a written component (research paper or case analysis), a team round where competitors answer economic questions collaboratively, and an individual knowledge round. The content spans all major areas of AP-level economics: supply and demand, elasticity, market structures, GDP and national income accounting, monetary and fiscal policy, international trade, and economic development.\n\nBusiness Finance events — including the Accounting Applications Series and the Financial Services Marketing Series — require competitors to demonstrate financial literacy in a business context. Unlike pure economics events, Business Finance integrates accounting principles (income statements, balance sheets, cash flow statements) with economic reasoning to evaluate business decisions. Competitors may be asked to interpret a set of financial statements, calculate profitability ratios, assess investment alternatives using net present value, or recommend financing structures for a business expansion. The judging rubric heavily weights the ability to connect financial analysis to strategic conclusions — knowing the numbers is necessary but not sufficient; explaining what the numbers mean for business decisions is what earns top marks.\n\nBusiness Law & Ethics events test knowledge of commercial law, business ethics frameworks, and their application to realistic business scenarios. Competitors must understand contract law (offer, acceptance, consideration, breach), employment law, intellectual property, consumer protection, and corporate governance. The ethics dimension requires applying frameworks like stakeholder analysis, the utilitarian calculus, and deontological principles to business dilemmas. In the role-play format, judges present a scenario where a business faces a legal or ethical challenge — discriminatory hiring, contract breach, intellectual property infringement, environmental compliance — and competitors must diagnose the legal issues, recommend a legally and ethically sound course of action, and explain their reasoning.',
      realWorldHook:
        'DECA alumni in senior business roles consistently cite their DECA Economics and Finance event preparation as disproportionately valuable relative to other high school activities. A study by DECA Inc. found that alumni who competed in economics-focused events were significantly more likely to major in economics or finance and to enter careers in investment banking, consulting, and corporate strategy. The demanding preparation required for the Economics Challenge — reading Federal Reserve publications, following BEA data releases, and studying AP and college-level economic theory — creates a knowledge base that directly accelerates performance in university economics coursework.',
      interactiveElement:
        'Event simulation: Complete the following three mini-rounds modelled on actual DECA event formats.\n\nROUND 1 — Economics Challenge (Individual Knowledge):\nAnswer these questions in 60 seconds each:\n(a) What is the difference between M1 and M2 money supply?\n(b) If the MPC (marginal propensity to consume) is 0.75, what is the fiscal multiplier?\n(c) Define the J-curve effect in international trade.\n\nROUND 2 — Business Finance (Financial Statement Analysis):\nA firm reports: Revenue $5M, COGS $2M, Operating Expenses $1.5M, Interest Expense $0.3M, Tax Rate 25%.\n(a) Calculate Gross Profit Margin, Operating Margin, and Net Profit Margin.\n(b) If the firm\'s total assets are $8M and total equity is $3.2M, what is the Debt-to-Equity ratio?\n(c) Is this firm financially healthy? Justify with two specific metrics.\n\nROUND 3 — Business Law & Ethics (Role-Play Prep):\nScenario: Your company\'s sales manager has been offering undisclosed cash payments to procurement officers at client firms in exchange for contracts. You discover this and must decide how to proceed.\n(a) Identify two specific legal violations.\n(b) Apply stakeholder analysis: who is harmed, and how?\n(c) Recommend a specific course of action with legal and ethical justification.',
      vocabulary: [
        {
          term: 'Economics Challenge',
          definition: 'A DECA competitive event testing macroeconomic and microeconomic knowledge through written analysis, team rounds, and individual questions, requiring mastery of AP-level economic theory and current economic data.',
          example: 'In an Economics Challenge team round, competitors might be asked to explain how a Federal Reserve rate cut affects bond prices, the dollar\'s exchange rate, and consumer spending simultaneously — requiring integrated macro knowledge.',
        },
        {
          term: 'Judging Rubric',
          definition: 'The scoring framework judges use to evaluate DECA competitor performance, typically divided into content criteria (knowledge, analysis, feasibility of recommendations) and presentation criteria (organisation, communication, professional image).',
          example: 'A DECA Business Finance judging rubric might allocate 40 points to financial analysis accuracy, 30 points to strategic recommendation quality, 20 points to implementation feasibility, and 10 points to presentation clarity.',
        },
        {
          term: 'Stakeholder Analysis',
          definition: 'A business ethics framework that identifies all parties affected by a decision (employees, customers, shareholders, community, government) and evaluates how each stakeholder is impacted, used to assess the ethical dimensions of business choices.',
          example: 'In a Business Law & Ethics event, a competitor analysing a factory closure decision would use stakeholder analysis to assess impacts on laid-off workers, shareholders benefiting from cost reduction, suppliers losing contracts, and the local community losing tax revenue.',
        },
      ],
      deeperDive:
        'Preparation strategy for economics-focused DECA events requires a different approach than for role-play events. Role-play preparation is dominated by practising the framework and communication skills. Economics event preparation requires genuine academic mastery — there is no framework substitute for knowing what the money multiplier formula is, how to calculate price elasticity from a demand schedule, or what the difference is between fiscal and monetary policy transmission mechanisms. The most effective preparation combines systematic content review (AP Economics curriculum is the ideal foundation), regular engagement with current economic data (reading Federal Reserve meeting minutes, BEA press releases, and CBO economic outlooks), and timed practice with past event materials.\n\nFor the Business Law & Ethics event specifically, competitors benefit enormously from learning the structure of legal reasoning: identify the relevant law or principle, apply it to the facts of the case, and derive a conclusion. This IRAC method (Issue, Rule, Application, Conclusion) mirrors the analytical structure used by practising lawyers and provides a repeatable framework for navigating novel legal scenarios under time pressure. Judges at Business Law & Ethics events consistently report that the gap between high and low scorers is not legal knowledge per se but the ability to apply legal principles systematically to unfamiliar scenarios — exactly what timed IRAC practice develops.',
      commonMisconceptions: [
        'The Economics Challenge is just a trivia contest about economic facts. While factual knowledge is necessary, the highest-scoring responses in Economics Challenge demonstrate the ability to synthesise multiple economic concepts into a coherent analysis of a real-world situation. Knowing that the multiplier is 1/(1-MPC) is table stakes; explaining how it interacts with the crowding-out effect during a deficit-financed stimulus program is what separates top competitors.',
        'Business Finance events only require accounting knowledge. DECA Business Finance events are explicitly designed to test the integration of financial analysis with strategic business reasoning. Calculating a ratio correctly earns baseline marks; explaining what that ratio implies for the firm\'s competitive strategy, financing decisions, or operational priorities is where most of the marks are won.',
        'Business Law & Ethics events reward memorisation of specific laws. Judges design scenarios to test application of legal principles to novel situations, not recall of specific statutes. A competitor who understands contract law principles well enough to apply them to a scenario they have never seen before will outscore one who has memorised specific laws but cannot reason through a new fact pattern.',
      ],
      examinerTip:
        'For all DECA economics-focused events, master the skill of "citing the theory, then applying it." When a judge asks about fiscal policy, do not just define it — immediately follow with a specific application: "Expansionary fiscal policy — increasing government spending or cutting taxes — shifts aggregate demand rightward. In the current environment with output gap of approximately 1.5%, a $500B stimulus package would have a multiplied effect of approximately $2T on GDP assuming a multiplier of 4, though this would be partially offset by the crowding-out effect as government borrowing raises interest rates." This pattern of theory → specific application → quantified impact → complicating factor is the hallmark of Economics Challenge responses that score in the top decile.',
      didYouKnow:
        'DECA\'s Economics Challenge event is one of the few high school competitions that explicitly requires competitors to engage with real-time economic data. In some years, competitors have been asked about economic data released within the past 30 days — making it perhaps the only academic competition where reading that morning\'s Bureau of Labor Statistics release could directly contribute to a winning score.',
      thinkAboutIt: {
        question: `In an Economics Challenge individual knowledge round, a competitor is asked to explain the effect of a Federal Reserve interest rate hike. She responds: "Contractionary monetary policy raises interest rates, which reduces the money supply and slows the economy." The answer is factually correct and clearly stated. According to the theory → mechanism → quantified impact → complication pattern this lesson identifies as the hallmark of top-decile responses, why might this answer still land in the middle of the rubric rather than the top, and what two things should she add?`,
        answer: `The answer would likely score in the middle of the rubric because it stops at the theory level — correctly naming and defining contractionary monetary policy — without progressing through the mechanism, quantified impact, or complication stages that this lesson identifies as distinguishing top-decile Economics Challenge responses. It never explains the transmission channel: how a higher federal funds rate raises borrowing costs for mortgages, business loans, and credit cards, which in turn reduces consumer spending and business investment, which is what actually slows aggregate demand — simply saying "slows the economy" skips over the causal chain a judge is listening for. It also contains no quantified or applied element, such as citing an approximate size of the rate move, referencing current inflation or output data, or estimating how a given rate change might affect a specific spending category. To reach the top of the rubric, she should add: (1) the specific transmission mechanism connecting the rate hike to reduced consumer and business spending, ideally referencing a concrete channel like mortgage rates or business loan costs, and (2) a complicating factor or quantified estimate — for example, noting that the effect operates with a lag of several quarters, that it may disproportionately hit interest-rate-sensitive sectors like housing and autos, or citing an approximate multiplier or elasticity — since the lesson explicitly identifies "theory, then applying it" with a quantified, nuanced follow-through as the pattern that separates good from exceptional Economics Challenge answers.`,
      },
    },
    flashcards: [
      {
        id: 'dc5-l5-fc1',
        front: 'What are the three main DECA economics-focused event categories and what distinguishes each?',
        back: 'Economics Challenge: tests macro/micro theory and economic data application. Business Finance: integrates financial statement analysis with strategic business reasoning. Business Law & Ethics: applies legal principles and ethics frameworks to business scenarios. Each requires both domain knowledge and the ability to apply it to novel situations.',
        tags: ['DECA', 'economics-challenge', 'business-finance', 'business-law'],
      },
      {
        id: 'dc5-l5-fc2',
        front: 'What is the IRAC method and how does it apply to DECA Business Law & Ethics events?',
        back: 'IRAC = Issue, Rule, Application, Conclusion. Identify the legal Issue presented, state the relevant Rule or legal principle, Apply the rule to the specific facts of the scenario, and state a Conclusion. This framework provides a repeatable structure for analysing novel legal scenarios under time pressure — exactly what Business Law & Ethics events require.',
        tags: ['DECA', 'business-law', 'IRAC', 'legal-reasoning'],
      },
      {
        id: 'dc5-l5-fc3',
        front: 'In a DECA Economics Challenge, how do you structure a high-scoring response about monetary policy?',
        back: 'Follow the pattern: Theory (define monetary policy and the tool used) → Mechanism (explain the transmission chain: rate cut → cheaper borrowing → more investment + consumer spending → AD shifts right) → Quantified impact (cite specific data or estimates) → Complication (e.g., crowding-out, liquidity trap, or inflation risk). Theory alone scores at baseline; the full chain earns top marks.',
        tags: ['DECA', 'economics-challenge', 'monetary-policy', 'presentation'],
      },
    ],
    lessonAssignment: {
      prompt: `You are preparing for a combined DECA economics-focused competition day covering all three event types from this lesson.\n\n(a) Economics Challenge: A judge asks, "The government cuts taxes by $300 billion and the MPC is 0.7. What happens to GDP?" Write a top-decile response following the theory → mechanism → quantified impact → complication structure. [6 marks]\n\n(b) Business Finance: A firm reports a quick ratio of 0.6 (down from 1.1 last year) while revenue grew 8%. Interpret this metric fully, including what it implies about the firm's liquidity and one plausible explanation for the ratio falling even as revenue grew. [6 marks]\n\n(c) Business Law & Ethics: A sales director signs a contract promising delivery "as soon as reasonably possible," then later argues this was never a binding deadline when a client sues for late delivery. Apply the IRAC method (Issue, Rule, Application, Conclusion) to analyse this dispute. [6 marks]\n\n(d) Across all three rounds, identify one common judging-rubric element this lesson identifies that separates high scorers from average scorers in ALL three event types, and explain why it applies equally to economics, finance, and legal reasoning. [2 marks]`,
      rubric: `(a) Correct multiplier calculation using tax-multiplier logic (spending multiplier applied to the MPC-driven portion) with a stated GDP impact figure (2 pts). Explicit transmission mechanism described (tax cut leads to higher disposable income leads to higher consumption leads to higher aggregate demand) (2 pts). A complicating factor named, such as partial saving of the tax cut, crowding-out, or time lags (2 pts). Total: 6 pts.\n\n(b) Correct interpretation that a quick ratio of 0.6 signals the firm cannot cover current liabilities with its most liquid assets, a liquidity concern (3 pts). One plausible, specific explanation for the ratio falling despite revenue growth — e.g., inventory or receivables growing faster than cash, or short-term debt increasing to fund growth (3 pts). Total: 6 pts.\n\n(c) Issue correctly identified (whether "as soon as reasonably possible" constitutes a binding, enforceable delivery obligation) (1.5 pts). Relevant rule/principle stated (contract interpretation of ambiguous terms, good-faith performance) (1.5 pts). Application to the specific facts (1.5 pts). Reasoned conclusion (1.5 pts). Total: 6 pts.\n\n(d) Identification of a valid shared element (e.g., moving from stating a rule/fact to applying it with specific, quantified or fact-based justification) (1 pt) with a clear explanation of why it transfers across economics, finance, and legal reasoning (1 pt). Total: 2 pts.`,
      exampleTopics: [
        'Apply the theory to mechanism to quantified impact to complication pattern to an Economics Challenge fiscal policy question.',
        'Interpret a financial ratio with both a diagnosis (liquidity risk) and a plausible causal explanation, not just a numeric restatement.',
        'Use the IRAC method to structure a legal analysis of an ambiguous contract term.',
        'Recognise that all three DECA economics-focused events reward the same underlying skill: moving from stated knowledge to specific, justified application.',
      ],
    },
    quiz: [
      {
        id: 'dc5-l5-q1',
        type: 'mcq',
        question: 'In a DECA Economics Challenge individual knowledge round, you are asked: "If the marginal propensity to consume is 0.8, what is the fiscal multiplier and what does it mean?" Which response earns the highest marks?',
        options: [
          'The fiscal multiplier is 5 (= 1/(1−0.8)). This means a $1 increase in government spending generates $5 of total GDP impact as each round of spending creates income that is 80% re-spent, cascading through the economy.',
          'The fiscal multiplier is 5.',
          'The fiscal multiplier is calculated using the MPC formula and results in a number greater than 1.',
          'Government spending has a multiplied effect on GDP because people spend their income.',
        ],
        correctAnswer: 0,
        explanation: 'Option A includes the formula, the calculated value, the economic mechanism (income re-spending), and the real-world interpretation. The other options lack at least one of: correct value, formula derivation, or economic mechanism. DECA Economics Challenge rubrics award marks for each of these elements.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l5-q2',
        type: 'mcq',
        question: 'In a DECA Business Finance event, a competitor calculates that a firm has a current ratio of 0.7. What is the MOST complete and high-scoring interpretation of this metric?',
        options: [
          'A current ratio of 0.7 means the firm has only $0.70 of current assets for every $1.00 of current liabilities, indicating a potential liquidity risk. The firm may struggle to meet short-term obligations without additional financing or asset liquidation — a concern especially if credit markets tighten.',
          'The current ratio is 0.7, which is below 1.',
          'The firm is illiquid.',
          'The firm should increase its current assets to improve the ratio.',
        ],
        correctAnswer: 0,
        explanation: 'Option A defines the metric, provides the specific implication (liquidity risk), explains the consequence (difficulty meeting short-term obligations), and adds context (credit market conditions). This multi-layered interpretation — value → meaning → implication → strategic context — is the standard for top-scoring Business Finance responses.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc5-l5-q3',
        type: 'mcq',
        question: 'A DECA Business Law & Ethics role-play presents this scenario: a manager offers a client a verbal promise of a 20% discount that contradicts the signed written contract. Which legal principle is MOST directly relevant?',
        options: [
          'The parol evidence rule, which generally bars oral agreements that contradict or add to a fully integrated written contract — meaning the verbal promise is likely unenforceable and the written contract governs.',
          'Breach of contract, because any unfulfilled promise is automatically a breach.',
          'Promissory estoppel, because the client relied on the verbal promise and must be compensated.',
          'The statute of frauds, which requires all business discounts to be in writing.',
        ],
        correctAnswer: 0,
        explanation: 'The parol evidence rule is the directly applicable doctrine: when parties have a fully integrated written contract, prior or contemporaneous oral agreements that contradict it are generally inadmissible. Demonstrating knowledge of this specific rule — and applying it to the facts — is exactly what Business Law & Ethics judges reward.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
