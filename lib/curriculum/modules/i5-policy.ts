import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'i5-policy',
  title: 'Fiscal and Monetary Policy',
  description: 'Understand the two main levers governments and central banks use to stabilise the economy.',
  tier: 'INTERMEDIATE' as const,
  track: 'INTERMEDIATE' as const,
  unit: 5,
  estimatedHours: 3,
  color: '#3b82f6',
  icon: 'TrendingUp',
}

export const lessons: Lesson[] = [
  // ── Lesson 1 ────────────────────────────────────────────────────────────────
  {
    id: 'i5-l1',
    moduleId: 'i5-policy',
    title: 'Fiscal Policy — Tools and Mechanisms',
    description:
      'Distinguish expansionary from contractionary fiscal policy; analyse effects of government spending changes and tax cuts on GDP.',
    order: 1,
    estimatedMinutes: 30,
    tags: ['fiscal-policy', 'government-spending', 'taxes'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous module concluded by deriving the Keynesian spending multiplier: an initial injection of spending generates a chain of re-spending rounds, so that ΔY = k × ΔAutonomous Spending, where k = 1/(1 − MPC). Fiscal policy deliberately harnesses this multiplier — using government spending and taxation to shift aggregate demand and close output gaps.`,
      recallQuestions: [
        {
          id: 'i5-l1-recall-1',
          type: 'mcq' as const,
          question: 'An economy has a marginal propensity to consume of 0.8. What is the spending multiplier, and how much will GDP change if government spending rises by £100 billion?',
          options: [
            'Multiplier = 5; GDP rises by £500 billion.',
            'Multiplier = 1.25; GDP rises by £125 billion.',
            'Multiplier = 0.2; GDP rises by £20 billion.',
            'Multiplier = 4; GDP rises by £400 billion.',
          ],
          correctAnswer: 0,
          explanation: 'MPS = 1 − MPC = 1 − 0.8 = 0.2. Multiplier k = 1 / 0.2 = 5. ΔY = 5 × £100 billion = £500 billion. A higher MPC means a larger multiplier because more of each income round is re-spent rather than saved.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'When the US economy collapsed in 2008, Congress passed the American Recovery and Reinvestment Act — an $831 billion package of spending and tax cuts. Supporters argued it saved millions of jobs. Critics called it wasteful. At the heart of that debate sits a single question economists have wrestled with for nearly a century: does government spending actually move GDP?',
      conceptualExplanation:
        'Fiscal policy is the use of government spending (G) and taxation (T) to influence the level of aggregate demand in the economy. When policymakers want to stimulate a sluggish economy they pursue expansionary fiscal policy: increasing G, cutting T, or both. These actions inject money into the circular flow of income. Because households and firms then spend a share of the extra income they receive, the initial injection multiplies through the economy — a phenomenon called the multiplier effect. The size of the multiplier depends on the marginal propensity to consume (MPC): a higher MPC means each round of spending triggers more further spending.\n\nContractionary fiscal policy works in reverse. To cool an overheating economy — one where demand is outstripping supply and inflation is rising — governments raise taxes or cut spending. This withdraws purchasing power from the circular flow, reducing aggregate demand and putting downward pressure on the price level. The trade-off is clear: the same mechanism that reduces inflation also dampens economic growth and can raise unemployment in the short run.\n\nA key distinction exists between discretionary and automatic fiscal policy. Discretionary policy involves deliberate legislative decisions — a new infrastructure programme, a pandemic relief payment, or a tax reform. These take time to design, pass through parliament, and reach the economy (implementation lags can stretch to 12–18 months). Automatic fiscal policy, explored in the next lesson, kicks in without new legislation, smoothing cycles passively.',
      vocabulary: [
        {
          term: 'Expansionary Fiscal Policy',
          definition:
            'Government action to increase aggregate demand by raising spending, cutting taxes, or both, typically used when the economy is in a recession.',
          example:
            'A government announces a $200 billion infrastructure programme during a downturn, hiring construction workers and boosting demand for materials.',
        },
        {
          term: 'Multiplier Effect',
          definition:
            'The process by which an initial change in spending leads to a larger final change in GDP, because income earned is re-spent in subsequent rounds.',
          example:
            'A $100 million government grant to a region with MPC = 0.8 ultimately raises regional GDP by $500 million as the money circulates.',
        },
        {
          term: 'Contractionary Fiscal Policy',
          definition:
            'Government action to reduce aggregate demand by cutting spending or raising taxes, typically used when inflation is too high.',
          example:
            'To reduce a budget deficit and cool inflation, a government freezes public sector pay and raises the top income-tax rate.',
        },
      ],
      examinerTip:
        'Examiners award marks for identifying the direction of the policy (expansionary/contractionary), the mechanism (how G or T change AD), and the trade-offs (inflation vs. growth, short run vs. long run). Always evaluate: does the economy have a positive or negative output gap? Fiscal policy that is appropriate in a recession can be destabilising in a boom.',
    },
    flashcards: [
      {
        id: 'i5-l1-fc1',
        front: 'What is the difference between expansionary and contractionary fiscal policy?',
        back: 'Expansionary fiscal policy increases G or cuts T to raise AD; contractionary fiscal policy cuts G or raises T to reduce AD. They are used in opposite phases of the business cycle.',
        hint: 'Think about what happens to the government budget in each case.',
        tags: ['fiscal-policy'],
      },
      {
        id: 'i5-l1-fc2',
        front: 'What is the multiplier effect and what determines its size?',
        back: 'The multiplier effect is the process by which an initial injection of spending creates a larger final increase in GDP. Its size is determined by MPC: multiplier = 1 / (1 − MPC). Higher MPC → larger multiplier.',
        hint: 'MPC stands for marginal propensity to consume.',
        tags: ['multiplier', 'fiscal-policy'],
      },
      {
        id: 'i5-l1-fc3',
        front: 'Give two reasons why discretionary fiscal policy suffers from time lags.',
        back: '1. Recognition lag — policymakers must first identify that the economy is in a recession. 2. Implementation lag — new spending programmes or tax changes require legislation and administration before money reaches the economy.',
        hint: 'Consider what has to happen between identifying a problem and spending reaching households.',
        tags: ['fiscal-policy', 'government-spending'],
      },
      {
        id: 'i5-l1-fc4',
        front: 'How does a tax cut stimulate GDP according to Keynesian analysis?',
        back: 'A tax cut raises disposable income for households. They spend a share (MPC) of the extra income, increasing consumption (C), which raises AD. Via the multiplier, GDP rises by more than the initial tax cut.',
        hint: 'Start with disposable income, then trace through to C, then AD.',
        tags: ['taxes', 'fiscal-policy'],
      },
    ],
    quiz: [
      {
        id: 'i5-l1-q1',
        type: 'mcq',
        question:
          'A government increases spending on public works by £50 billion during a recession. If the marginal propensity to consume is 0.75, what is the value of the spending multiplier?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 2,
        explanation:
          'The multiplier = 1 / (1 − MPC) = 1 / (1 − 0.75) = 1 / 0.25 = 4. The £50 billion injection will ultimately raise GDP by £200 billion if the multiplier operates fully.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l1-q2',
        type: 'mcq',
        question: 'Which of the following is an example of contractionary fiscal policy?',
        options: [
          'Cutting income tax rates to boost consumer spending',
          'Increasing unemployment benefit payments',
          'Raising corporation tax to reduce the budget deficit',
          'Issuing government bonds to finance new schools',
        ],
        correctAnswer: 2,
        explanation:
          'Raising corporation tax withdraws money from the circular flow, reducing firms\' after-tax profits and thus investment, which decreases AD. The other options are all expansionary measures.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l1-q3',
        type: 'mcq',
        question:
          'Which type of fiscal policy lag refers to the delay between a policy being enacted and its effects being felt in the economy?',
        options: ['Recognition lag', 'Decision lag', 'Implementation lag', 'Impact lag'],
        correctAnswer: 3,
        explanation:
          'The impact lag (also called the effectiveness lag) is the delay between a policy being implemented and its full effects materialising in GDP, employment, and prices. Recognition lag is about identifying the problem; decision and implementation lags relate to agreeing and deploying the policy.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2 ────────────────────────────────────────────────────────────────
  {
    id: 'i5-l2',
    moduleId: 'i5-policy',
    title: 'Automatic Stabilisers',
    description:
      'Explain how progressive taxes and unemployment benefits automatically dampen business cycle swings.',
    order: 2,
    estimatedMinutes: 20,
    tags: ['automatic-stabilisers', 'built-in-stabilisers'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson distinguished expansionary fiscal policy (raising G or cutting T to increase AD) from contractionary fiscal policy (cutting G or raising T), and highlighted that discretionary policy suffers from recognition, implementation, and impact lags that can delay or misdirect stimulus. Automatic stabilisers solve the timing problem by reacting instantly to changes in income and employment without any new legislation.`,
      recallQuestions: [
        {
          id: 'i5-l2-recall-1',
          type: 'mcq' as const,
          question: 'A government increases spending on public works by £40 billion during a recession. If MPC = 0.75, what is the value of the spending multiplier?',
          options: [
            '4',
            '3',
            '1.33',
            '0.75',
          ],
          correctAnswer: 0,
          explanation: 'MPS = 1 − MPC = 1 − 0.75 = 0.25. Multiplier k = 1 / 0.25 = 4. The £40 billion injection will ultimately raise GDP by £160 billion if the multiplier operates fully, assuming no leakages from taxation or imports.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'During the Covid-19 recession of 2020, US GDP fell sharply — yet consumer spending held up better than most economists predicted. One underappreciated reason: automatic stabilisers quietly funnelled hundreds of billions in unemployment insurance payments to laid-off workers without a single congressional vote. The system was working exactly as designed.',
      conceptualExplanation:
        'Automatic stabilisers are features of the tax and benefit system that moderate business cycle swings without the need for new legislation or policy decisions. They operate through two main channels. First, progressive income taxes mean that as incomes rise in a boom, tax bills rise faster than income — damping consumption growth. Conversely, when incomes fall in a recession, tax bills fall proportionally more, cushioning disposable income and thus consumption. The government\'s take from the economy automatically shrinks in bad times and grows in good times.\n\nThe second channel is transfer payments, particularly unemployment benefits. When the economy enters recession, unemployment rises automatically, and so does government spending on benefits — injecting income directly into the hands of households with a high propensity to consume. This supports AD precisely when private demand is weakest. When the economy recovers and employment rises, benefit payments fall automatically, reducing the fiscal stimulus and preventing the economy from overheating.\n\nAutomatic stabilisers are valued by economists because they act with zero implementation lag — they respond instantly to changes in income and employment. They do not, however, eliminate business cycles: they merely reduce their amplitude. Very generous stabilisers (high replacement rates, broadly progressive tax systems) dampen cycles more effectively but may also slow recovery if high taxes blunt investment incentives or if generous benefits reduce job-search effort.',
      vocabulary: [
        {
          term: 'Automatic Stabiliser',
          definition:
            'A fiscal mechanism that automatically increases government spending or reduces tax revenue during a downturn (and vice versa during a boom) without explicit policy action.',
          example:
            'When a factory closes and 500 workers are laid off, unemployment benefit payments rise immediately, supporting local spending.',
        },
        {
          term: 'Progressive Taxation',
          definition:
            'A tax system in which the effective tax rate rises as taxable income increases, so higher earners pay a larger share of their income in tax.',
          example:
            'A worker earning $30,000 pays 10% income tax; one earning $300,000 pays 35% — as incomes rise in a boom, tax revenue grows faster than GDP.',
        },
        {
          term: 'Transfer Payments',
          definition:
            'Government payments to individuals that are not in exchange for goods or services, such as unemployment insurance, pensions, and welfare benefits.',
          example:
            'During a recession, rising jobless claims automatically trigger higher welfare spending, putting money in the hands of households most likely to spend it.',
        },
      ],
      examinerTip:
        'A common exam mistake is confusing automatic stabilisers with discretionary policy. Make clear that stabilisers require no new legislation — they are "built in" to the system. Also note the distinction between reducing the amplitude of a cycle (what stabilisers do) and ending a recession (which may need additional discretionary action).',
    },
    flashcards: [
      {
        id: 'i5-l2-fc1',
        front: 'Define automatic stabilisers and give one example.',
        back: 'Automatic stabilisers are fiscal mechanisms that moderate business cycle swings automatically, without new legislation. Example: progressive income tax — as incomes fall in a recession, tax bills fall proportionally more, protecting disposable income.',
        hint: 'Think: what happens to tax revenue when GDP falls, with no new policy?',
        tags: ['automatic-stabilisers'],
      },
      {
        id: 'i5-l2-fc2',
        front: 'How do unemployment benefits act as an automatic stabiliser?',
        back: 'When recession strikes and unemployment rises, benefit payments automatically increase, injecting income into the economy and supporting consumer spending without any policy decision. When recovery occurs, benefit payments fall, withdrawing the stimulus.',
        hint: 'Follow the chain: recession → unemployment rises → benefits rise → AD supported.',
        tags: ['automatic-stabilisers', 'built-in-stabilisers'],
      },
      {
        id: 'i5-l2-fc3',
        front: 'Why are automatic stabilisers considered superior to discretionary policy in terms of timing?',
        back: 'Automatic stabilisers have zero implementation lag — they respond instantly as incomes and employment change. Discretionary policy suffers recognition, decision, and implementation lags that can mean stimulus arrives too late, potentially amplifying rather than dampening the cycle.',
        hint: 'Think about the lags associated with passing new legislation.',
        tags: ['automatic-stabilisers'],
      },
      {
        id: 'i5-l2-fc4',
        front: 'What is a limitation of automatic stabilisers?',
        back: 'They reduce the amplitude of business cycles but cannot eliminate them. A deep recession may require additional discretionary fiscal stimulus because stabilisers alone cannot restore full employment. Very generous stabilisers may also reduce incentives to work or invest.',
        hint: 'Stabilisers dampen cycles — they do not end them.',
        tags: ['automatic-stabilisers', 'built-in-stabilisers'],
      },
    ],
    quiz: [
      {
        id: 'i5-l2-q1',
        type: 'mcq',
        question: 'Which of the following best describes how progressive income tax acts as an automatic stabiliser during a boom?',
        options: [
          'The government cuts tax rates to redistribute income to lower earners',
          'As incomes rise, tax bills rise proportionally faster, dampening consumption growth',
          'The central bank raises interest rates to offset the fiscal expansion',
          'Unemployment benefit payments automatically increase, boosting spending',
        ],
        correctAnswer: 1,
        explanation:
          'With a progressive tax system, higher incomes push households into higher marginal tax brackets, so tax revenue rises faster than GDP during a boom. This automatically withdraws purchasing power, moderating the expansion without any new legislation.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l2-q2',
        type: 'mcq',
        question: 'Which characteristic most clearly distinguishes automatic stabilisers from discretionary fiscal policy?',
        options: [
          'Automatic stabilisers always result in a budget surplus',
          'Automatic stabilisers only affect monetary aggregates',
          'Automatic stabilisers operate without requiring new legislation or policy decisions',
          'Automatic stabilisers are only effective in developed economies',
        ],
        correctAnswer: 2,
        explanation:
          'The defining feature of automatic stabilisers is that they react to changes in economic conditions (income, employment) automatically through pre-existing rules, with no need for new laws or deliberate decisions by policymakers.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l2-q3',
        type: 'mcq',
        question:
          'During a recession, which combination of automatic stabiliser effects occurs simultaneously?',
        options: [
          'Tax revenue rises and benefit payments fall',
          'Tax revenue falls and benefit payments rise',
          'Tax revenue rises and benefit payments rise',
          'Tax revenue falls and benefit payments fall',
        ],
        correctAnswer: 1,
        explanation:
          'In a recession, falling incomes mean households pay less tax (tax revenue falls), while rising unemployment means more benefit claims (transfer payments rise). Both effects work in the same direction: supporting household incomes and AD.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3 ────────────────────────────────────────────────────────────────
  {
    id: 'i5-l3',
    moduleId: 'i5-policy',
    title: 'Government Debt and Deficits — Sustainability',
    description:
      'Define budget deficit, national debt, and debt-to-GDP ratio; assess Keynesian and classical views on fiscal sustainability.',
    order: 3,
    estimatedMinutes: 25,
    tags: ['national-debt', 'deficit', 'crowding-out'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed that automatic stabilisers — progressive taxes and unemployment benefits — moderate business cycle swings by automatically withdrawing purchasing power in booms and injecting it in recessions, without new legislation. Government debt and deficits are the natural fiscal consequence: running deficits during downturns accumulates debt that must eventually be serviced, raising questions of sustainability.`,
      recallQuestions: [
        {
          id: 'i5-l3-recall-1',
          type: 'mcq' as const,
          question: 'Which characteristic most clearly distinguishes automatic stabilisers from discretionary fiscal policy?',
          options: [
            'Automatic stabilisers operate without requiring new legislation or policy decisions.',
            'Automatic stabilisers always result in a budget surplus.',
            'Automatic stabilisers only affect monetary aggregates.',
            'Automatic stabilisers are only effective in developed economies.',
          ],
          correctAnswer: 0,
          explanation: 'The defining feature of automatic stabilisers is that they react to changes in economic conditions through pre-existing rules — progressive taxes and benefit systems — without any new laws or deliberate policy decisions. This gives them zero implementation lag, unlike discretionary fiscal measures.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'Japan\'s national debt exceeds 250% of its GDP — the highest of any major economy — yet Japan continues to borrow at near-zero interest rates and has never missed a debt payment. Meanwhile, Greece\'s debt peaked at around 180% of GDP and triggered a devastating crisis requiring international bailouts. Why does debt that is sustainable for one country prove catastrophic for another? The answer involves currency, growth, interest rates, and credibility.',
      conceptualExplanation:
        'A budget deficit occurs when government spending exceeds tax revenue in a given year. The national debt (or public debt) is the cumulative stock of all past deficits minus surpluses — the total amount the government owes to creditors. A key metric for sustainability is the debt-to-GDP ratio, which measures the size of the debt relative to the economy\'s capacity to service it. A country with a large but fast-growing economy may find a high debt level perfectly manageable; a stagnant economy with the same nominal debt may struggle.\n\nKeynesians argue that borrowing to finance productive government spending is not inherently unsustainable. If borrowed funds generate economic growth — through infrastructure, education, or counter-cyclical stimulus — the resulting expansion in the tax base can allow the government to service and eventually reduce the debt-to-GDP ratio even without primary surpluses. The crucial comparison is between the interest rate on debt (r) and the growth rate of the economy (g): if g > r, the debt-to-GDP ratio falls automatically even with moderate deficits.\n\nClassical and "crowding-out" critics raise three concerns. First, high government borrowing competes with private borrowers for loanable funds, pushing up interest rates and reducing private investment — crowding out. Second, if markets lose confidence in fiscal sustainability, they may demand higher yields on government bonds, triggering a debt spiral. Third, the expectation of future tax rises (Ricardian equivalence) may cause households to save more now, offsetting any stimulative effect of deficits. The debate remains live: the appropriate level of public debt depends on prevailing interest rates, growth prospects, and the quality of spending.',
      vocabulary: [
        {
          term: 'Budget Deficit',
          definition:
            'The shortfall when government expenditure in a period exceeds government tax revenue, requiring the difference to be financed by borrowing.',
          example:
            'If a government spends $5 trillion but collects only $4 trillion in taxes, the annual budget deficit is $1 trillion.',
        },
        {
          term: 'Debt-to-GDP Ratio',
          definition:
            'National debt expressed as a percentage of GDP, used to assess a country\'s capacity to service its debt relative to the size of the economy.',
          example:
            'A country with $10 trillion in debt and $20 trillion GDP has a 50% debt-to-GDP ratio, widely considered a cautious threshold.',
        },
        {
          term: 'Crowding Out',
          definition:
            'The reduction in private sector investment caused by government borrowing that raises interest rates, making it more expensive for firms to finance capital expenditure.',
          example:
            'Heavy government bond issuance pushes up long-term interest rates from 3% to 5%, causing a retailer to shelve plans for a new distribution centre.',
        },
      ],
      examinerTip:
        'When evaluating fiscal sustainability, always bring in the r vs. g comparison (interest rate vs. growth rate). Examiners reward nuance: a deficit that is unsustainable for a developing country with high borrowing costs may be perfectly sustainable for a country borrowing in its own currency at very low rates. Address both Keynesian and classical perspectives before forming a judgement.',
    },
    flashcards: [
      {
        id: 'i5-l3-fc1',
        front: 'Distinguish between a budget deficit and national debt.',
        back: 'A budget deficit is a flow: the excess of government spending over tax revenue in a single year. National debt is a stock: the cumulative total of all past deficits minus surpluses — what the government currently owes in total.',
        hint: 'Think of a deficit as the water flowing in each year; national debt as the total water in the tank.',
        tags: ['deficit', 'national-debt'],
      },
      {
        id: 'i5-l3-fc2',
        front: 'What is the debt-to-GDP ratio and why is it a better measure of debt sustainability than the absolute debt level?',
        back: 'Debt-to-GDP = (national debt / GDP) × 100%. It is more meaningful than absolute debt because it measures the debt relative to the economy\'s productive capacity and tax base. A $2 trillion debt is very different for a $5 trillion economy than for a $20 trillion one.',
        hint: 'Consider: can a large economy service a large debt more easily than a small economy?',
        tags: ['national-debt', 'deficit'],
      },
      {
        id: 'i5-l3-fc3',
        front: 'Explain the crowding-out effect of government borrowing.',
        back: 'When the government borrows heavily it competes for loanable funds in financial markets, pushing up interest rates. Higher interest rates raise the cost of borrowing for private firms, reducing their investment. This "crowds out" private capital formation, potentially reducing long-run growth.',
        hint: 'Supply and demand for loanable funds — what happens when a large new borrower enters the market?',
        tags: ['crowding-out', 'national-debt'],
      },
      {
        id: 'i5-l3-fc4',
        front: 'What is the Keynesian condition under which a government can run persistent deficits without the debt-to-GDP ratio rising?',
        back: 'If the real growth rate of the economy (g) exceeds the real interest rate on government debt (r), the economy grows faster than the debt, so the debt-to-GDP ratio falls over time even with modest deficits. This is sometimes written as the g > r condition.',
        hint: 'Compare how fast the economy grows with how fast debt compounds.',
        tags: ['deficit', 'national-debt'],
      },
    ],
    quiz: [
      {
        id: 'i5-l3-q1',
        type: 'mcq',
        question:
          'A government has a national debt of $4 trillion and a GDP of $20 trillion. What is the debt-to-GDP ratio?',
        options: ['5%', '20%', '25%', '80%'],
        correctAnswer: 1,
        explanation:
          'Debt-to-GDP = (4 / 20) × 100% = 20%. This is considered a low ratio by international standards. Many advanced economies carry ratios above 60–90%.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l3-q2',
        type: 'mcq',
        question: 'The crowding-out effect argues that expansionary fiscal policy is less effective because:',
        options: [
          'Government spending directly reduces exports by appreciating the exchange rate',
          'Higher government borrowing raises interest rates, reducing private investment',
          'Progressive taxation automatically withdraws stimulus as incomes rise',
          'Central banks are legally required to raise rates when deficits increase',
        ],
        correctAnswer: 1,
        explanation:
          'Crowding out occurs when government borrowing drives up interest rates in financial markets, making it more expensive for private firms to borrow and invest. The increase in G is partially offset by a fall in private I, reducing the net impact on AD.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l3-q3',
        type: 'mcq',
        question:
          'According to Keynesian analysis, under which condition is a high national debt most likely to be sustainable in the long run?',
        options: [
          'When the real interest rate on debt (r) exceeds the real growth rate (g)',
          'When the budget is balanced every single year',
          'When the real growth rate (g) exceeds the real interest rate on debt (r)',
          'When the central bank monetises all new government borrowing',
        ],
        correctAnswer: 2,
        explanation:
          'If g > r, the economy grows faster than the debt accumulates, causing the debt-to-GDP ratio to fall over time. This is the standard Keynesian argument for why moderate persistent deficits can be consistent with long-run fiscal sustainability.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4 ────────────────────────────────────────────────────────────────
  {
    id: 'i5-l4',
    moduleId: 'i5-policy',
    title: 'Monetary Policy — Central Banks and Interest Rates',
    description:
      'Explain how central banks set policy rates, the transmission mechanism to investment and consumption.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['monetary-policy', 'central-bank', 'interest-rates'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson defined the budget deficit (annual shortfall of revenue below spending) and the national debt (cumulative stock of past deficits), and introduced the crowding-out effect — heavy government borrowing pushes up interest rates, raising costs for private firms and potentially reducing investment. Monetary policy is the central bank's alternative lever, using interest rates rather than the government's budget to influence aggregate demand.`,
      recallQuestions: [
        {
          id: 'i5-l4-recall-1',
          type: 'mcq' as const,
          question: 'The crowding-out effect argues that expansionary fiscal policy is less effective because:',
          options: [
            'Higher government borrowing raises interest rates, reducing private investment.',
            'Government spending directly reduces exports by appreciating the exchange rate.',
            'Progressive taxation automatically withdraws stimulus as incomes rise.',
            'Central banks are legally required to raise rates when deficits increase.',
          ],
          correctAnswer: 0,
          explanation: 'Crowding out occurs when government borrowing drives up interest rates in financial markets, making private borrowing more expensive. The increase in G is partially offset by a fall in private investment (I), reducing the net impact on AD.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'In March 2022 the US Federal Reserve raised its benchmark interest rate for the first time since 2018 — and over the following 16 months lifted it from near zero to over 5%. Mortgage rates doubled. Car loan costs soared. Inflation, which had hit 9%, gradually fell back toward 2%. The episode was the most dramatic demonstration in a generation of how a single central bank decision can ripple through the entire economy.',
      conceptualExplanation:
        'Monetary policy is the management of a country\'s money supply and interest rates by its central bank to achieve macroeconomic objectives — typically low, stable inflation and sustainable growth. Most central banks operate a corridor system: they set a policy (base) interest rate that becomes the floor for all other borrowing costs in the economy. In the UK, the Bank of England sets Bank Rate; in the US, the Federal Reserve sets the Federal Funds Rate; in the Eurozone, the European Central Bank sets three key rates.\n\nThe transmission mechanism describes the channels through which a change in the policy rate affects the broader economy. When the central bank raises the base rate: (1) commercial banks increase their lending rates, raising the cost of borrowing for firms and households; (2) investment falls because projects that were profitable at lower rates are no longer viable; (3) consumption falls because mortgages, car loans, and credit card rates rise while saving becomes more attractive; (4) the exchange rate may appreciate as higher domestic interest rates attract foreign capital, reducing export competitiveness; (5) asset prices (equities, property) tend to fall, reducing the wealth effect on consumption. The net result is lower AD and downward pressure on inflation.\n\nCentral banks typically operate under an explicit inflation target — 2% in many advanced economies — and are granted operational independence from government to pursue it. Independence is valued because it removes the temptation for elected governments to pursue short-term stimulative policy that creates long-run inflation. Evidence suggests that countries with more independent central banks tend to achieve lower average inflation with smaller output costs.',
      vocabulary: [
        {
          term: 'Policy (Base) Interest Rate',
          definition:
            'The interest rate set by a central bank that serves as the reference rate for the entire financial system, influencing all other borrowing and saving rates in the economy.',
          example:
            'When the Bank of England raises Bank Rate from 4.5% to 5%, high-street banks swiftly raise mortgage and savings rates accordingly.',
        },
        {
          term: 'Transmission Mechanism',
          definition:
            'The channels through which a change in monetary policy (the policy rate) affects economic variables such as investment, consumption, the exchange rate, and ultimately inflation and GDP.',
          example:
            'A Fed rate rise makes US bonds more attractive, appreciating the dollar, which makes US exports pricier abroad and reduces net exports.',
        },
        {
          term: 'Central Bank Independence',
          definition:
            'The degree to which a central bank can set monetary policy without direct political interference from the government, intended to anchor inflation expectations.',
          example:
            'The European Central Bank\'s mandate is price stability; governments of member states cannot legally order it to cut rates before an election.',
        },
      ],
      examinerTip:
        'In exam answers on monetary policy, always trace the transmission mechanism step by step: policy rate change → commercial interest rates → investment and consumption → AD → inflation and GDP. Marks are typically awarded for each link in the chain. Also address the time lag: monetary policy typically takes 12–24 months to have its full effect on inflation.',
    },
    flashcards: [
      {
        id: 'i5-l4-fc1',
        front: 'What is the policy interest rate and why is it a powerful tool?',
        back: 'The policy rate is the rate set by the central bank (e.g., Fed Funds Rate, Bank Rate) that anchors all other interest rates in the economy. Because it affects borrowing costs for mortgages, business loans, and consumer credit simultaneously, a small change ripples through trillions of dollars of economic activity.',
        hint: 'Think about how many financial contracts reference the central bank rate.',
        tags: ['monetary-policy', 'interest-rates'],
      },
      {
        id: 'i5-l4-fc2',
        front: 'List three channels of the monetary policy transmission mechanism.',
        back: '1. Bank lending channel — policy rate changes affect commercial lending rates, altering investment and consumption. 2. Exchange rate channel — higher rates attract foreign capital, appreciating the currency and reducing exports. 3. Asset price channel — higher rates depress equity and property prices, reducing household wealth and consumption.',
        hint: 'Each channel links the policy rate to a component of AD.',
        tags: ['monetary-policy', 'central-bank'],
      },
      {
        id: 'i5-l4-fc3',
        front: 'Why do economists argue central banks should be independent of government?',
        back: 'Politicians face electoral incentives to cut interest rates before elections to boost growth, even if this creates inflation. An independent central bank can pursue its inflation mandate without such pressure, anchoring long-run inflation expectations and reducing the cost of achieving price stability.',
        hint: 'Think about the political business cycle — the temptation to stimulate before elections.',
        tags: ['central-bank', 'monetary-policy'],
      },
      {
        id: 'i5-l4-fc4',
        front: 'How does a rise in interest rates affect business investment?',
        back: 'Higher interest rates raise the cost of borrowing for firms and increase the opportunity cost of using retained profits for investment (since returns on saving rise). Marginal investment projects that were profitable at lower rates become unprofitable, so firms cut capital expenditure, reducing the I component of AD.',
        hint: 'Consider both the cost of debt finance and the opportunity cost of equity finance.',
        tags: ['interest-rates', 'monetary-policy'],
      },
    ],
    quiz: [
      {
        id: 'i5-l4-q1',
        type: 'mcq',
        question:
          'The central bank raises its policy interest rate. Which of the following is the most likely immediate effect through the transmission mechanism?',
        options: [
          'Government tax revenues increase, reducing the fiscal deficit',
          'Commercial banks raise borrowing rates, reducing investment and consumption',
          'The money supply expands, lowering long-term bond yields',
          'Export volumes increase as the domestic currency depreciates',
        ],
        correctAnswer: 1,
        explanation:
          'The primary and most direct transmission channel is from the policy rate to commercial interest rates. Banks raise mortgage and business loan rates, making borrowing costlier, which reduces household consumption and firm investment — the core mechanism for cooling demand and inflation.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l4-q2',
        type: 'mcq',
        question: 'Why is central bank independence from government considered beneficial for price stability?',
        options: [
          'It allows the central bank to set tax rates independently',
          'It prevents politicians from pursuing short-term rate cuts before elections that could fuel long-run inflation',
          'It ensures the central bank controls both fiscal and monetary policy',
          'It guarantees that interest rates remain constant regardless of economic conditions',
        ],
        correctAnswer: 1,
        explanation:
          'Politicians have incentives to stimulate the economy before elections. An independent central bank removes this political pressure, allowing it to maintain an anti-inflationary stance even when this is unpopular. Evidence shows more independent central banks achieve lower average inflation.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l4-q3',
        type: 'mcq',
        question:
          'Which of the following describes the exchange rate channel of monetary policy transmission?',
        options: [
          'Higher interest rates reduce bank profitability, causing credit rationing',
          'Higher interest rates attract foreign capital inflows, appreciating the exchange rate and reducing export competitiveness',
          'Higher interest rates increase government debt interest payments, crowding out public investment',
          'Higher interest rates reduce consumer confidence, leading to precautionary saving',
        ],
        correctAnswer: 1,
        explanation:
          'When domestic interest rates rise, foreign investors seek higher returns by buying domestic assets, increasing demand for the domestic currency. The resulting appreciation makes exports more expensive abroad and imports cheaper at home, reducing net exports and AD.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5 ────────────────────────────────────────────────────────────────
  {
    id: 'i5-l5',
    moduleId: 'i5-policy',
    title: 'Quantitative Easing and Unconventional Tools',
    description:
      'Describe QE, forward guidance, and negative interest rates — tools developed after the 2008 financial crisis.',
    order: 5,
    estimatedMinutes: 25,
    tags: ['QE', 'quantitative-easing', 'unconventional-policy'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson explained that central banks set a policy (base) interest rate and traced the transmission mechanism through commercial lending rates, investment, consumption, the exchange rate, and asset prices — ultimately influencing AD and inflation. Quantitative easing and other unconventional tools become necessary when the policy rate reaches the zero lower bound and conventional rate cuts can no longer provide stimulus.`,
      recallQuestions: [
        {
          id: 'i5-l5-recall-1',
          type: 'mcq' as const,
          question: 'The central bank raises its policy interest rate. Which of the following is the most likely immediate effect through the transmission mechanism?',
          options: [
            'Commercial banks raise borrowing rates, reducing investment and consumption.',
            'Government tax revenues increase, reducing the fiscal deficit.',
            'The money supply expands, lowering long-term bond yields.',
            'Export volumes increase as the domestic currency depreciates.',
          ],
          correctAnswer: 0,
          explanation: 'The primary and most direct channel is from the policy rate to commercial interest rates. Banks raise mortgage and business loan rates, making borrowing costlier, which reduces household consumption and firm investment — the core mechanism for cooling demand and inflation.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'After Lehman Brothers collapsed in September 2008, the Federal Reserve cut its policy rate to essentially zero — and then found it needed to do more. Conventional monetary policy had run out of road. What followed — quantitative easing — was an experiment that central banks had never tried at scale in peacetime. By 2021 the Fed\'s balance sheet had swollen from $900 billion to $8.9 trillion. Economists still debate whether it worked.',
      conceptualExplanation:
        'When the policy interest rate reaches its effective lower bound (around zero), conventional monetary policy loses its primary instrument. Central banks have responded with a toolkit of unconventional measures. Quantitative easing (QE) involves the central bank creating new money electronically and using it to buy financial assets — typically government bonds and, in some programmes, corporate bonds or mortgage-backed securities — from commercial banks and other institutions. By purchasing these assets, the central bank pushes up their prices and pushes down their yields (since price and yield move inversely). Lower yields on government bonds ripple out, reducing borrowing costs across the economy and encouraging risk-taking.\n\nForward guidance is a communication strategy in which the central bank commits to keeping interest rates low (or following a particular path) for an extended period, conditional on certain economic outcomes. By shaping expectations about future rates, forward guidance can lower long-term interest rates today — even when the short rate cannot fall further. If businesses and households believe rates will stay low for three years, they are more willing to borrow and invest now.\n\nNegative interest rates — charging banks for parking reserves at the central bank rather than paying them interest — have been tried in the Eurozone, Japan, Sweden, Switzerland, and Denmark. The theory is that negative rates push banks to lend their reserves rather than hoard them. In practice, the effect has been modest and controversial: very negative rates can squeeze bank profit margins, potentially reducing lending (the "reversal rate" problem), and they are politically unpopular with savers.',
      vocabulary: [
        {
          term: 'Quantitative Easing (QE)',
          definition:
            'An unconventional monetary policy tool in which the central bank creates new money to purchase financial assets, expanding its balance sheet and lowering long-term interest rates.',
          example:
            'The Bank of England purchased £895 billion of government bonds through QE between 2009 and 2021, lowering gilts yields and reducing mortgage rates.',
        },
        {
          term: 'Forward Guidance',
          definition:
            'A central bank communication strategy that signals the future path of interest rates to manage expectations and influence long-term borrowing costs today.',
          example:
            'The Fed stated it would not raise rates until unemployment fell below 6.5%, anchoring business expectations and encouraging investment.',
        },
        {
          term: 'Zero Lower Bound (ZLB)',
          definition:
            'The constraint that nominal interest rates cannot fall significantly below zero, limiting the effectiveness of conventional monetary policy in a severe downturn.',
          example:
            'With the policy rate at 0.1%, the Bank of England could not cut further without negative rates; it turned to QE and forward guidance instead.',
        },
      ],
      examinerTip:
        'When explaining QE in an exam, describe the mechanism precisely: central bank buys bonds → bond prices rise → yields fall → borrowing costs across the economy fall → investment and consumption rise. Avoid the common error of saying QE "prints money and gives it to banks" — the new reserves stay on bank balance sheets and the transmission depends on portfolio rebalancing and wealth effects, not direct cash handouts.',
    },
    flashcards: [
      {
        id: 'i5-l5-fc1',
        front: 'What is quantitative easing and why do central banks use it?',
        back: 'QE is an unconventional monetary policy in which the central bank creates new money and uses it to buy financial assets (mainly government bonds). It is used when the policy rate is at or near the zero lower bound and conventional rate cuts are no longer possible. Buying bonds lowers their yields, reducing long-term borrowing costs across the economy.',
        hint: 'Why can\'t a central bank just keep cutting interest rates forever?',
        tags: ['QE', 'quantitative-easing'],
      },
      {
        id: 'i5-l5-fc2',
        front: 'How does QE transmit stimulus to the wider economy?',
        back: 'QE raises bond prices → lowers bond yields → long-term interest rates across the economy fall → borrowing becomes cheaper for firms and households → investment and consumption rise. Additionally, portfolio rebalancing pushes investors into riskier assets (equities, corporate bonds), lowering their yields and boosting wealth and the cost of capital.',
        hint: 'Remember the inverse relationship between bond prices and yields.',
        tags: ['QE', 'unconventional-policy'],
      },
      {
        id: 'i5-l5-fc3',
        front: 'What is forward guidance and how does it extend the reach of monetary policy?',
        back: 'Forward guidance is a central bank commitment to a future policy path — e.g., "rates will remain low until unemployment falls below X%." By anchoring expectations of future short-term rates, it lowers long-term rates today. This extends monetary stimulus beyond the current period without any actual rate change.',
        hint: 'Long-term interest rates are influenced by expected future short-term rates.',
        tags: ['unconventional-policy', 'QE'],
      },
      {
        id: 'i5-l5-fc4',
        front: 'What is the "reversal rate" problem with negative interest rates?',
        back: 'If interest rates become sufficiently negative, bank profit margins on lending are squeezed (they cannot easily charge depositors negative rates). This reduces bank profitability and can actually cause banks to cut lending rather than expand it — the opposite of the intended effect. This threshold is called the reversal rate.',
        hint: 'At what point does a "stimulative" policy become contractionary?',
        tags: ['unconventional-policy'],
      },
    ],
    quiz: [
      {
        id: 'i5-l5-q1',
        type: 'mcq',
        question: 'What is the primary mechanism through which quantitative easing lowers long-term interest rates?',
        options: [
          'The central bank directly instructs commercial banks to reduce mortgage rates',
          'The central bank buys bonds, raising their prices and thereby lowering their yields',
          'The central bank cuts the reserve requirement, freeing banks to lend more',
          'The government issues fewer bonds, reducing supply and raising prices',
        ],
        correctAnswer: 1,
        explanation:
          'QE works through asset purchases: buying bonds in large quantities pushes up their price. Since bond yield and price move inversely (yield = coupon / price), rising prices mean falling yields. Lower government bond yields reduce benchmark rates across the economy, lowering borrowing costs for firms and households.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l5-q2',
        type: 'mcq',
        question: 'Why is forward guidance described as a monetary policy tool that works through expectations?',
        options: [
          'It requires banks to lend at rates below the policy rate',
          'It commits the central bank to a future policy path, lowering long-term rates today by anchoring expectations',
          'It involves the central bank buying foreign exchange to depreciate the currency',
          'It directs fiscal authorities to coordinate spending with monetary easing',
        ],
        correctAnswer: 1,
        explanation:
          'Long-term interest rates reflect expectations about future short-term rates. If the central bank credibly commits to keeping rates low for several years, long-term rates fall immediately — before any actual rate change. This is the power of forward guidance: it expands the central bank\'s toolkit without moving the current policy rate.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l5-q3',
        type: 'mcq',
        question: 'Which of the following represents a potential drawback of negative interest rate policy?',
        options: [
          'It increases the cost of government borrowing significantly',
          'It immediately causes hyperinflation by expanding the money supply too rapidly',
          'It may squeeze bank profit margins so much that banks reduce lending — the reversal rate problem',
          'It strengthens the exchange rate, reducing the competitiveness of exports',
        ],
        correctAnswer: 2,
        explanation:
          'The reversal rate problem occurs when negative rates become so deeply negative that the squeeze on bank profitability causes banks to cut lending, reversing the stimulative intent. Banks struggle to pass negative rates on to depositors (who can hold cash), but their lending revenues fall, compressing margins.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 6 ────────────────────────────────────────────────────────────────
  {
    id: 'i5-l6',
    moduleId: 'i5-policy',
    title: 'Fiscal vs. Monetary Policy — Tradeoffs and Coordination',
    description:
      'Compare effectiveness in different scenarios and assess the case for policy coordination.',
    order: 6,
    estimatedMinutes: 30,
    tags: ['policy-coordination', 'liquidity-trap', 'crowding-out'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson introduced quantitative easing — the central bank buying bonds to push down long-term yields when the policy rate is at the zero lower bound — along with forward guidance and negative interest rates. This final policy lesson evaluates when fiscal policy is superior, when monetary policy is superior, and how coordinating the two can amplify stabilisation efforts.`,
      recallQuestions: [
        {
          id: 'i5-l6-recall-1',
          type: 'mcq' as const,
          question: 'What is the primary mechanism through which quantitative easing lowers long-term interest rates?',
          options: [
            'The central bank buys bonds, raising their prices and thereby lowering their yields.',
            'The central bank directly instructs commercial banks to reduce mortgage rates.',
            'The central bank cuts the reserve requirement, freeing banks to lend more.',
            'The government issues fewer bonds, reducing supply and raising prices.',
          ],
          correctAnswer: 0,
          explanation: 'QE works through asset purchases: buying bonds in large quantities pushes up their price. Since bond yield and price move inversely (yield = coupon / price), rising prices mean falling yields. Lower government bond yields reduce benchmark borrowing costs across the economy.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'During the Covid-19 pandemic, the world\'s major economies deployed both fiscal and monetary policy simultaneously and at unprecedented scale. Governments spent trillions; central banks cut rates to zero and launched massive QE programmes. The coordinated response was unlike anything since World War II — and it largely prevented a depression. But it also left a legacy of high debt and, eventually, the worst inflation in 40 years. The episode raised a fundamental question: when should the two levers work together, and when should they pull in opposite directions?',
      conceptualExplanation:
        'Fiscal and monetary policy each have comparative advantages in different macroeconomic situations. Monetary policy operates quickly through financial markets — rate decisions take effect within days — but its transmission depends on the functioning of the banking system and the sensitivity of investment to interest rates. Fiscal policy can target specific sectors or income groups but is slow to implement and may crowd out private investment if financed by borrowing.\n\nThe liquidity trap is the scenario in which monetary policy loses effectiveness entirely. When interest rates are already at or near zero and economic sentiment is deeply pessimistic, households and firms may prefer to hold cash rather than spend or invest regardless of how cheap borrowing is. In this situation, "pushing on a string" — cutting rates further — has little effect, and fiscal policy becomes the indispensable tool. Keynes himself identified this problem during the 1930s Depression; it resurfaced in Japan in the 1990s and in advanced economies after 2008.\n\nPolicy coordination — running fiscal and monetary policy together toward the same goal — can amplify the impact of both. When a central bank credibly commits to low rates while the government expands spending, crowding-out is minimised (low rates keep private borrowing cheap) and the multiplier is larger. Conversely, policy conflict — tight fiscal policy alongside loose monetary policy, or vice versa — creates contradictory signals. The UK in the early 1980s (tight monetary, mixed fiscal) and the Eurozone after 2010 (fiscal austerity alongside constrained monetary policy) are often cited as cases where insufficient coordination deepened recessions. The risk of coordination is that it can blur accountability and erode central bank independence if governments pressure central banks to finance deficits.',
      vocabulary: [
        {
          term: 'Liquidity Trap',
          definition:
            'A situation in which interest rates are at or near zero and monetary policy becomes ineffective because additional money creation does not stimulate spending — people prefer to hold cash.',
          example:
            'Japan in the 1990s and 2000s: despite near-zero interest rates and repeated QE, deflation persisted and consumer spending remained stagnant.',
        },
        {
          term: 'Policy Coordination',
          definition:
            'The deliberate alignment of fiscal and monetary policy to reinforce each other in achieving macroeconomic goals such as stabilising output or reducing inflation.',
          example:
            'In 2020, central banks held rates at zero while governments ran large deficits; low rates ensured government borrowing remained affordable and amplified the multiplier.',
        },
        {
          term: 'Policy Mix',
          definition:
            'The specific combination of fiscal stance (expansionary/contractionary) and monetary stance (loose/tight) in use at a given time, and its overall effect on aggregate demand.',
          example:
            'A loose fiscal + tight monetary mix (high government spending, high interest rates) raises AD but crowds out private investment and may appreciate the exchange rate.',
        },
      ],
      examinerTip:
        'A top-band answer on fiscal vs. monetary policy will not simply list advantages and disadvantages in isolation — it will compare them in specific contexts. Key scenarios to master: (1) liquidity trap → fiscal policy dominant; (2) hyperinflation → monetary tightening more credible and faster; (3) supply-side recession → neither tool directly addresses the root cause; (4) coordination → amplifies both but risks inflation and erodes central bank credibility. Always conclude with a reasoned judgement that depends on context.',
    },
    flashcards: [
      {
        id: 'i5-l6-fc1',
        front: 'What is a liquidity trap and which policy tool remains effective within it?',
        back: 'A liquidity trap occurs when interest rates are near zero and further monetary easing fails to stimulate spending — firms and households hold cash regardless of borrowing costs. In a liquidity trap, fiscal policy (government spending) becomes the primary effective tool because it directly injects demand into the economy without relying on the interest rate mechanism.',
        hint: 'If you cannot lower interest rates further, which lever still works?',
        tags: ['liquidity-trap', 'policy-coordination'],
      },
      {
        id: 'i5-l6-fc2',
        front: 'Give one advantage of monetary policy and one advantage of fiscal policy as stabilisation tools.',
        back: 'Monetary policy advantage: speed — the central bank can change the policy rate within hours of a meeting, and financial markets respond immediately. Fiscal policy advantage: targeting — government spending can be directed to specific sectors, regions, or income groups where the stimulus is most needed.',
        hint: 'Think about implementation speed and precision of impact.',
        tags: ['policy-coordination', 'crowding-out'],
      },
      {
        id: 'i5-l6-fc3',
        front: 'How does policy coordination between fiscal and monetary authorities amplify stimulus?',
        back: 'When the central bank commits to keeping rates low while the government increases spending, private borrowing costs remain depressed, minimising crowding-out. The fiscal multiplier is larger because the interest rate does not rise to offset the expansion. Both levers reinforce rather than contradict each other.',
        hint: 'Think about what happens to crowding-out when the central bank holds rates steady during a fiscal expansion.',
        tags: ['policy-coordination'],
      },
      {
        id: 'i5-l6-fc4',
        front: 'What risk does close policy coordination pose to central bank credibility?',
        back: 'If the government expects the central bank to keep rates low to finance large deficits (fiscal dominance), markets may believe the central bank will tolerate higher inflation to avoid raising rates and increasing debt-servicing costs. This erodes inflation-fighting credibility, potentially causing inflation expectations to become unanchored.',
        hint: 'What if markets think the central bank is subordinate to the Treasury?',
        tags: ['policy-coordination', 'crowding-out'],
      },
    ],
    quiz: [
      {
        id: 'i5-l6-q1',
        type: 'mcq',
        question:
          'In a liquidity trap, why does expansionary monetary policy fail to stimulate aggregate demand?',
        options: [
          'The central bank is prohibited by law from cutting rates below 2%',
          'Interest rates are already near zero, so further cuts have negligible effect on borrowing costs or spending decisions',
          'Commercial banks refuse to lend because reserve requirements are too high',
          'Government debt is so large that households expect future tax rises and save instead of spending',
        ],
        correctAnswer: 1,
        explanation:
          'In a liquidity trap, the policy rate is already at or near its lower bound. Further reductions cannot meaningfully lower already-negligible borrowing costs. Additionally, with deeply pessimistic expectations, households and firms prefer to hold cash regardless of low rates — monetary policy loses its transmission channel.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l6-q2',
        type: 'mcq',
        question:
          'Which policy mix is most likely to minimise crowding-out while providing fiscal stimulus?',
        options: [
          'Expansionary fiscal policy combined with contractionary monetary policy (rising rates)',
          'Expansionary fiscal policy combined with accommodative monetary policy (low, stable rates)',
          'Contractionary fiscal policy combined with expansionary monetary policy (rate cuts)',
          'Both fiscal and monetary policy tightened simultaneously',
        ],
        correctAnswer: 1,
        explanation:
          'Crowding-out occurs when government borrowing drives up interest rates, raising the cost of private borrowing and reducing investment. If the central bank keeps rates low (accommodative monetary policy) while the government increases spending, interest rates do not rise, crowding-out is minimised, and the fiscal multiplier is larger.',
        marks: 2,
        difficulty: 'standard',
      },
      {
        id: 'i5-l6-q3',
        type: 'mcq',
        question:
          'An economy faces a supply-side recession caused by a sudden rise in oil prices. Why are both fiscal and monetary policy limited in their effectiveness in this scenario?',
        options: [
          'Both policies can only affect the demand side of the economy, not the supply side; stimulating demand risks worsening inflation while doing little for output',
          'Central banks are legally prevented from acting during supply shocks',
          'Fiscal policy cannot be implemented quickly enough to affect supply-side factors',
          'Monetary policy is only effective when inflation is below the central bank\'s target',
        ],
        correctAnswer: 0,
        explanation:
          'A supply-side shock reduces productive capacity and raises costs simultaneously (stagflation). Expansionary demand-side policies (loose fiscal or monetary) can support output but at the risk of fuelling inflation. Contractionary policies can contain inflation but deepen the output loss. Neither tool addresses the root cause — the cost of energy — directly.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
  },
]
