import type { CurriculumModule, Lesson } from '@/lib/types'

// ── IB UNIT 1 — Introduction to Economics ────────────────────────────────────

const ib1Lessons: Lesson[] = [
  {
    id: 'ib1-l1', moduleId: 'ib1-intro', title: 'The Nature of Economics', description: 'Define economics, distinguish micro and macro, explain the economic problem with IB command-term precision.', order: 1, estimatedMinutes: 20, tags: ['IB', 'economics-definition', 'scarcity'],
    flashcards: [
      { id: 'fc-ib1-l1-1', front: 'Define "scarcity" in IB command-term language.', back: 'Scarcity is the fundamental economic problem that arises because human wants are unlimited while the resources available to satisfy those wants are finite, forcing individuals and societies to make choices.', hint: 'Think unlimited wants vs. limited resources.', tags: ['IB', 'scarcity'] },
      { id: 'fc-ib1-l1-2', front: 'Distinguish microeconomics from macroeconomics.', back: 'Microeconomics examines the decisions of individual consumers and firms and how markets allocate resources. Macroeconomics analyses the economy as a whole, focusing on aggregates such as GDP, inflation, and unemployment.', hint: 'Micro = individual agents; Macro = whole economy.', tags: ['IB', 'economics-definition'] },
      { id: 'fc-ib1-l1-3', front: 'What are the three fundamental economic questions?', back: 'What to produce? How to produce it? For whom to produce it? Every economic system must answer these three questions when allocating scarce resources.', hint: 'What / How / For whom.', tags: ['IB', 'scarcity'] },
    ],
    quiz: [
      { id: 'q-ib1-l1-1', type: 'mcq', question: 'Which of the following best illustrates the concept of scarcity?', options: ['A government chooses to build hospitals rather than motorways with a fixed budget.', 'A consumer buys more apples when their income rises.', 'A firm lowers its price to attract more customers.', 'A central bank raises interest rates to reduce inflation.'], correctAnswer: 0, explanation: 'Scarcity is illustrated when a fixed budget forces a choice between alternatives. The government cannot build both because resources are limited, so it must allocate them — the defining feature of scarcity.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib1-l1-2', type: 'mcq', question: 'An IB examiner asks you to "distinguish" microeconomics from macroeconomics. Which response would earn full marks?', options: ['Microeconomics studies individual markets and decision-makers, while macroeconomics analyses economy-wide aggregates such as GDP and inflation — they differ in scope and unit of analysis.', 'Microeconomics is about small businesses and macroeconomics is about large ones.', 'Microeconomics uses graphs and macroeconomics uses statistics.', 'Microeconomics concerns prices and macroeconomics concerns government policy.'], correctAnswer: 0, explanation: 'A "distinguish" command term requires a clear difference in both definition and scope. The correct answer identifies the unit of analysis (individual vs. aggregate) and gives concrete examples, satisfying IB marking criteria.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Economics begins with a single inescapable reality: resources — land, labour, capital, and enterprise — are finite, while human wants are effectively unlimited. This mismatch is called scarcity, and it compels every individual, firm, and government to make choices about how to allocate what is available. The discipline of economics is the systematic study of those choices. At the IB level, you must be precise about this definition: scarcity is not the same as poverty or shortage. A billionaire faces scarcity of time; a wealthy nation faces scarcity of skilled surgeons. The economic problem is universal, not confined to the poor. IB examiners reward answers that distinguish between scarcity as a condition (always present) and shortages as temporary market disequilibria (which can be resolved).\n\nWithin economics, two broad branches address different levels of analysis. Microeconomics examines the behaviour of individual decision-makers — consumers maximising utility, firms minimising costs, and the markets through which they interact. It asks how prices are determined, why some goods are over- or under-produced, and how government intervention changes outcomes. Macroeconomics zooms out to study the economy as an aggregate: what determines a nation's total output (GDP), why unemployment and inflation fluctuate, and how monetary and fiscal policy can stabilise the cycle. IB candidates must be comfortable moving between these levels, recognising that macroeconomic phenomena (e.g., a recession) are ultimately driven by millions of individual microeconomic decisions. Command terms such as "define," "distinguish," "explain," and "evaluate" carry precise meanings in IB marking schemes — always read the command term before constructing your answer.`,
      prerequisiteRecap: `This is the opening lesson of the IB Economics course. No prior IB economic theory is assumed, but you should bring general awareness that resources are limited and that societies must make allocation decisions — the universal starting point for all economic analysis.`,
      recallQuestions: [
        {
          id: 'ib1-l1-recall-1',
          type: 'mcq' as const,
          question: 'Which statement best captures the meaning of scarcity in economics?',
          options: [
            'Resources are finite relative to unlimited human wants, forcing choices about allocation.',
            'Only the poorest countries face scarcity because wealthy nations can afford everything they need.',
            'Scarcity refers to a temporary shortage caused by a supply disruption.',
            'Scarcity disappears once an economy achieves economic growth.',
          ],
          correctAnswer: 0,
          explanation: 'Scarcity is the universal condition that arises because resources — land, labour, capital, enterprise — are finite while human wants are unlimited. It applies to all economies regardless of wealth and is distinct from shortages, which are temporary and market-specific.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib1-l2', moduleId: 'ib1-intro', title: 'How Economists Approach the World', description: 'Explain the use of models, ceteris paribus, and the role of assumptions; distinguish positive from normative.', order: 2, estimatedMinutes: 25, tags: ['IB', 'models', 'positive-normative'],
    flashcards: [
      { id: 'fc-ib1-l2-1', front: 'What does "ceteris paribus" mean and why is it used in economics?', back: '"Ceteris paribus" is Latin for "all other things being equal." Economists use it to isolate the effect of one variable by holding all others constant, making models tractable and predictions testable.', hint: 'It is a simplifying assumption used in every economic model.', tags: ['IB', 'models'] },
      { id: 'fc-ib1-l2-2', front: 'Distinguish a positive statement from a normative statement.', back: 'A positive statement is a factual claim that can, in principle, be tested against evidence (e.g., "Raising the minimum wage reduces teen employment"). A normative statement expresses a value judgement that cannot be proven true or false (e.g., "The minimum wage should be raised").', hint: 'Positive = fact/testable; Normative = opinion/value judgement.', tags: ['IB', 'positive-normative'] },
      { id: 'fc-ib1-l2-3', front: 'Why do economists use simplified models rather than describing reality in full?', back: 'Reality is too complex to analyse directly. Models abstract away irrelevant details to highlight the key relationships between variables, generating clear predictions that can be tested empirically.', hint: 'Models are deliberate simplifications, not inaccuracies.', tags: ['IB', 'models'] },
    ],
    quiz: [
      { id: 'q-ib1-l2-1', type: 'mcq', question: 'Which of the following is a positive economic statement?', options: ['When the price of a good rises, the quantity demanded falls, ceteris paribus.', 'Governments should redistribute income to reduce inequality.', 'Free trade is better for society than protectionism.', 'Firms ought to pay a living wage to all workers.'], correctAnswer: 0, explanation: 'A positive statement describes what is or what would happen — it is testable. The law of demand (quantity demanded falls as price rises, all else equal) is an empirical claim that can be examined with data. The other options all contain value judgements ("should," "better," "ought to") making them normative.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib1-l2-2', type: 'mcq', question: 'An economic model assumes ceteris paribus. This means the model:', options: ['Is unrealistic and therefore useless for policy.', 'Isolates the relationship between specific variables by holding others constant.', 'Only applies in countries with stable economies.', 'Must include every variable that affects the outcome being studied.'], correctAnswer: 1, explanation: 'Ceteris paribus is a tool for analytical clarity, not a claim that other variables are unimportant. By holding other factors constant, the model isolates the causal relationship of interest — a necessary step before adding complexity back in.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Economists cannot run controlled laboratory experiments on entire economies, so they rely on models — simplified, abstract representations of economic relationships. A model strips away institutional detail, cultural nuance, and rare edge cases to focus on the core mechanism being studied. The demand-and-supply model, for example, assumes rational consumers and competitive markets, conditions that are never perfectly met in reality. Yet the model generates accurate predictions about price and quantity changes that have been confirmed across thousands of real-world markets. The usefulness of a model lies not in its descriptive completeness but in the clarity and accuracy of its predictions. When evaluating any economic model, IB students should ask: what assumptions does it make, and when are those assumptions likely to hold or break down?\n\nA crucial distinction in economic reasoning is between positive and normative analysis. Positive economics describes and predicts: "An increase in income tax will reduce hours worked" is a positive claim — right or wrong, it can be tested. Normative economics prescribes based on values: "Income tax should be increased to fund public services" is a normative claim — it depends on what you think governments ought to prioritise, and no amount of data can resolve it on its own. In practice, policy debates blend both layers: economists provide positive evidence about the consequences of a policy, while citizens and politicians make normative judgements about whether those consequences are desirable. IB examiners expect candidates to spot this distinction in unseen stimuli and to label statements correctly — confusing positive analysis with value judgements is one of the most common errors in Paper 1 essays.`,
      prerequisiteRecap: `In the previous lesson you established that scarcity — the mismatch between unlimited wants and finite resources — is the central economic problem, and that economics distinguishes between microeconomic and macroeconomic analysis. This lesson builds on that foundation by examining how economists construct models and the critical positive–normative distinction that underpins all policy debate.`,
      recallQuestions: [
        {
          id: 'ib1-l2-recall-1',
          type: 'mcq' as const,
          question: 'Which of the following is a positive economic statement?',
          options: [
            'A 10% rise in the minimum wage reduces teenage employment by approximately 3%, ceteris paribus.',
            'The government ought to raise the minimum wage to reduce inequality.',
            'Workers deserve a living wage that covers basic living costs.',
            'Society benefits most when wages are set by collective bargaining.',
          ],
          correctAnswer: 0,
          explanation: 'A positive statement is a testable, factual claim about what is or what would happen — it can in principle be verified or refuted with evidence. The other options all contain value judgements ("ought to", "deserve", "benefits most") and are therefore normative claims.',
          marks: 1,
          difficulty: 'standard' as const,
        },
        {
          id: 'ib1-l2-recall-2',
          type: 'mcq' as const,
          question: 'The assumption of ceteris paribus is used in economic models to:',
          options: [
            'Isolate the effect of one variable on another by holding all other factors constant.',
            'Ensure that economic models are always accurate descriptions of reality.',
            'Guarantee that supply and demand are always in equilibrium.',
            'Eliminate the need for empirical testing of economic predictions.',
          ],
          correctAnswer: 0,
          explanation: 'Ceteris paribus ("all other things being equal") is a simplifying device that allows economists to trace the relationship between two specific variables without confounding influences from other factors. It does not claim that other variables are unimportant — only that they are held constant for the purpose of the analysis.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib1-l3', moduleId: 'ib1-intro', title: 'The PPF — Efficiency, Growth, and Opportunity Cost', description: 'Draw and interpret the PPF; explain productive efficiency, allocative efficiency, and economic growth using the diagram.', order: 3, estimatedMinutes: 30, tags: ['IB', 'PPF', 'efficiency'],
    flashcards: [
      { id: 'fc-ib1-l3-1', front: 'What does a point inside the PPF indicate?', back: 'A point inside (below) the PPF indicates productive inefficiency — the economy is not fully utilising its available resources and could produce more of one or both goods without sacrificing any of the other.', hint: 'Inside = waste/underutilisation; on the curve = efficiency.', tags: ['IB', 'PPF'] },
      { id: 'fc-ib1-l3-2', front: 'How does the PPF illustrate opportunity cost?', back: 'Moving along the PPF to produce more of one good requires producing less of the other. The quantity of the second good sacrificed is the opportunity cost. The concave shape of the PPF reflects increasing opportunity costs as resources are reallocated.', hint: 'Slope of the PPF = opportunity cost of the good on the horizontal axis.', tags: ['IB', 'PPF', 'efficiency'] },
      { id: 'fc-ib1-l3-3', front: 'What causes an outward shift of the PPF?', back: 'Economic growth — an increase in the quantity or quality of factors of production (e.g., technological advance, capital accumulation, population growth, improved education) — shifts the PPF outward, expanding productive capacity.', hint: 'PPF shifts out = more resources or better technology.', tags: ['IB', 'PPF'] },
    ],
    quiz: [
      { id: 'q-ib1-l3-1', type: 'mcq', question: 'An economy moves from a point inside its PPF to a point on the PPF. This represents:', options: ['Economic growth requiring new resources.', 'An improvement in productive efficiency with no change in productive capacity.', 'A trade-off that increases the opportunity cost of production.', 'An outward shift of the PPF due to technological progress.'], correctAnswer: 1, explanation: 'Moving from inside to on the PPF does not require new resources — it represents better use of existing resources. Productive efficiency improves because the economy eliminates waste. Economic growth (an outward shift) would be needed to reach a point beyond the current PPF.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib1-l3-2', type: 'mcq', question: 'A concave (bowed-outward) PPF reflects:', options: ['Constant opportunity costs regardless of production mix.', 'Decreasing returns to scale in all industries.', 'Increasing opportunity costs as more resources are shifted toward one good.', 'The fact that some goods cannot be produced at all.'], correctAnswer: 2, explanation: 'Resources are not perfectly adaptable between uses. As an economy specialises more in one good, it must use increasingly unsuitable resources for that purpose, raising the opportunity cost of each additional unit. This increasing opportunity cost produces the concave (bowed-outward) shape.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The Production Possibility Frontier (PPF) is one of economics' most versatile diagrams because a single curve simultaneously illustrates scarcity, choice, opportunity cost, efficiency, and growth. The PPF plots all combinations of two goods (or categories of goods) that an economy can produce when using all its resources fully and efficiently. Any point on the curve is productively efficient — resources are fully employed and cannot be reallocated to produce more of one good without sacrificing some of the other. Points inside the curve represent productive inefficiency, perhaps caused by unemployment, underused capital, or poor organisation. Points beyond the curve are currently unattainable given the economy's resource endowment and technology. IB examiners regularly present scenarios — a recession, new immigration, a technological breakthrough — and ask candidates to show the correct PPF movement and explain what it represents.\n\nThe concave shape of a standard PPF encodes the law of increasing opportunity cost: as production of one good expands, successively larger amounts of the other must be sacrificed. This happens because resources are not perfectly mobile between industries. A nurse can be retrained as a builder, but at considerable cost in time and productivity, and a hospital is not easily converted into a factory. For the IB, it is essential to distinguish productive efficiency (operating on the PPF) from allocative efficiency (operating at the point on the PPF that best reflects society's preferences, where the marginal benefit of each good equals its opportunity cost). Economic growth shifts the PPF outward — but only if the economy acquires more or better resources, not merely if it eliminates waste. Candidates who confuse these two mechanisms frequently make avoidable diagram errors in Paper 2 data-response questions.`,
    },
  },
  {
    id: 'ib1-l4', moduleId: 'ib1-intro', title: 'Resource Allocation and Economic Systems', description: 'Compare free market, planned, and mixed economies through the lens of the three fundamental questions.', order: 4, estimatedMinutes: 25, tags: ['IB', 'economic-systems', 'price-mechanism'],
    flashcards: [
      { id: 'fc-ib1-l4-1', front: 'How does a free market economy answer the three fundamental economic questions?', back: 'Through the price mechanism: prices signal what consumers want (what to produce), profit motivates firms to use least-cost methods (how to produce), and income distribution determines who receives goods (for whom to produce).', hint: 'In a free market, prices do the answering.', tags: ['IB', 'price-mechanism'] },
      { id: 'fc-ib1-l4-2', front: 'What is the main advantage and main disadvantage of a centrally planned economy?', back: 'Advantage: the state can pursue social objectives (equity, full employment) directly without relying on markets. Disadvantage: central planners lack the price signals needed to allocate resources efficiently, leading to shortages, surpluses, and slow innovation.', hint: 'Planning can target equity but loses the information advantages of prices.', tags: ['IB', 'economic-systems'] },
      { id: 'fc-ib1-l4-3', front: 'Why do all real-world economies operate as mixed economies?', back: 'Pure free markets fail to provide public goods, generate externalities, and produce unacceptable inequality. Pure planned economies suffer from information failure and lack of incentives. Mixed economies combine market mechanisms with government intervention to address both sets of failures.', hint: 'Markets + government = mixed; both extremes have well-known failures.', tags: ['IB', 'economic-systems'] },
    ],
    quiz: [
      { id: 'q-ib1-l4-1', type: 'mcq', question: 'In a free market economy, rising prices for a good primarily act as a signal to:', options: ['Governments to increase regulation of the industry.', 'Producers to increase supply and consumers to reduce quantity demanded.', 'Workers to demand higher wages from firms in that industry.', 'Central planners to allocate more resources to that sector.'], correctAnswer: 1, explanation: 'In the price mechanism, a price rise performs three functions simultaneously: it signals profitability to producers (incentivising more supply), rations the good among consumers (reducing quantity demanded), and allocates resources toward the highest-valued use — all without central direction.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib1-l4-2', type: 'mcq', question: 'Which statement best explains why centrally planned economies typically underperform free markets in allocative efficiency?', options: ['Planned economies cannot produce goods that require advanced technology.', 'Central planners lack the dispersed price information generated by millions of market transactions, leading to systematic misallocation.', 'Workers in planned economies have no incentive to work hard regardless of pay.', 'Governments in planned economies always prioritise military production over consumer goods.'], correctAnswer: 1, explanation: 'The "knowledge problem" (associated with Hayek) is the core economic critique of central planning. Prices aggregate dispersed, tacit information about consumer preferences and production costs in real time — information no central planner can fully replicate. This causes chronic misallocation, not merely motivational problems.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Every economy must resolve three fundamental questions: what to produce, how to produce it, and for whom to produce it. The answers differ dramatically depending on the economic system in place. In a free market economy, these questions are answered decentrally through the price mechanism. When consumers want more of a good, they bid up its price, signalling firms that production is profitable. Firms compete to supply the good using the lowest-cost methods — answering the "how" question — and goods flow to those willing and able to pay, answering the "for whom" question through the income distribution. This system harnesses the self-interest of millions of agents to coordinate production without any central authority, and it generally achieves remarkable productive and allocative efficiency. However, it distributes outcomes unequally and fails systematically in the presence of externalities, public goods, and market power.\n\nAt the opposite extreme, a centrally planned economy delegates all three questions to the state. Planners set production targets, direct resources, and determine distribution according to social objectives. The appeal is equity and the ability to pursue collective goals directly. The historical record, however, reveals a fundamental weakness identified by economists as the "knowledge problem": no planning authority can replicate the information about individual preferences, local resource availability, and production costs that prices automatically aggregate in a market. The result is endemic shortages, surpluses, and stagnation. In practice, all economies today are mixed — they use markets as the primary allocation mechanism while governments intervene to correct market failures, provide public goods, and moderate inequality. IB candidates should evaluate any economic system by applying both efficiency and equity criteria, acknowledging trade-offs rather than asserting one system is universally superior.`,
    },
  },
]

export const ib1Intro: CurriculumModule = {
  id: 'ib1-intro',
  title: 'IB Unit 1 — Introduction to Economics',
  description: 'Cover the methodology, models, and central problem of economics as required by the IB Diploma Programme guide.',
  tier: 'IB' as const,
  track: 'IB_SL' as const,
  unit: 1,
  estimatedHours: 2,
  color: '#8b5cf6',
  icon: 'BookOpen',
  lessons: ib1Lessons,
}
