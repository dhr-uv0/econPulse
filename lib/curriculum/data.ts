import type { CurriculumModule, Lesson } from '@/lib/types'

// ── IB Unit 1: Introduction to Economics ─────────────────────────────────────
const ibIntroLessons: Lesson[] = [
  {
    id: 'ib-intro-01',
    moduleId: 'ib-intro',
    title: 'What Is Economics?',
    description: 'The scope of economics, positive vs. normative statements, and why scarcity is the central problem.',
    order: 1,
    estimatedMinutes: 20,
    tags: ['foundations', 'scarcity', 'definition'],
    flashcards: [
      { id: 'fc-ib-intro-01-1', front: 'What is economics?', back: 'The social science that studies how individuals, firms, governments, and societies allocate scarce resources to satisfy unlimited wants.', tags: ['foundations'] },
      { id: 'fc-ib-intro-01-2', front: 'Positive economics', back: 'Objective, fact-based statements that can be tested or verified (e.g., "Raising the minimum wage increases unemployment among teenagers"). Describes what IS.', tags: ['methodology'] },
      { id: 'fc-ib-intro-01-3', front: 'Normative economics', back: 'Value-based statements that involve opinions and cannot be objectively verified (e.g., "The minimum wage should be higher"). Describes what OUGHT TO BE.', tags: ['methodology'] },
      { id: 'fc-ib-intro-01-4', front: 'Scarcity', back: 'The fundamental economic problem: human wants are unlimited, but the resources to satisfy them are finite. This makes choice necessary.', tags: ['scarcity'] },
    ],
    quiz: [
      {
        id: 'q-ib-intro-01-1',
        type: 'mcq',
        question: 'Which of the following is a normative economic statement?',
        options: [
          'A 10% increase in the money supply leads to a 10% rise in the price level in the long run.',
          'The government should increase spending on healthcare.',
          'When price rises, quantity demanded falls, ceteris paribus.',
          'GDP grew by 3.2% in the last quarter.',
        ],
        correctAnswer: 1,
        explanation: 'Normative statements involve value judgements — "should" is the key word. Options A, C, and D are positive statements that can be verified empirically.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'q-ib-intro-01-2',
        type: 'mcq',
        question: 'The central economic problem arises because:',
        options: [
          'Human wants are limited but resources are unlimited.',
          'Human wants are unlimited but resources are scarce.',
          'Resources are scarce and human wants are also scarce.',
          'Governments fail to distribute resources fairly.',
        ],
        correctAnswer: 1,
        explanation: 'Scarcity exists because wants are unlimited while resources (land, labour, capital, enterprise) are finite. This forces every economic agent to make choices.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    content: {
      conceptualExplanation: `## What Is Economics?

Economics is the study of how society manages its scarce resources. At its core, every economic question traces back to one inescapable reality: **scarcity**. Human beings want more than they can have. We want better healthcare, faster transport, tastier food, cleaner environments — all simultaneously, and in greater quantities than nature and our productive capacity allow.

This gap between unlimited wants and limited resources is what forces every individual, firm, and government to make **choices**. And wherever there are choices, there is economics.

### The Two Branches of Economics

**Microeconomics** examines the behaviour of individual units — consumers, firms, and markets. How does a consumer decide what to buy? How does a firm decide how much to produce? Why do some markets fail?

**Macroeconomics** examines the economy as a whole. Why does unemployment rise in recessions? How does monetary policy control inflation? What drives long-run economic growth?

### Positive vs. Normative Statements

A critical methodological distinction:

- **Positive statements** are objective and testable: *"A 1% increase in the interest rate reduces investment by approximately 0.5% of GDP."* You can gather data and test this.
- **Normative statements** involve value judgements: *"The central bank should raise interest rates to curb inflation."* This reflects a view about what ought to be done — reasonable economists can disagree.

IB examiners frequently ask you to distinguish these. Watch for the words *should*, *ought to*, *better*, *fairer* — these signal normative content.`,

      realWorldHook: `**March 2024 — The UK Cost-of-Living Crisis.** When UK inflation hit 11.1% in 2022, economists asked both positive questions ("What caused this?") and normative ones ("Should the government cap energy prices?"). Understanding this distinction is essential for evaluating any policy debate.`,

      interactiveElement: 'scarcity-slider',

      deeperDive: `### The Methodology of Economics

Economists build and test **models** — simplified representations of reality that isolate key relationships. A good model is not "realistic" in every detail; it is useful for making predictions.

The philosopher Milton Friedman argued (in *Essays in Positive Economics*, 1953) that a model should be judged not by the realism of its assumptions but by the accuracy of its predictions. This remains contested — behavioural economists like Richard Thaler argue that unrealistic assumptions (like perfect rationality) lead to systematically wrong predictions.

**Ceteris paribus** ("all else equal") is the core methodological tool. When we say demand curves slope downward, we mean: holding all other factors constant, a rise in price reduces quantity demanded. This allows us to isolate the effect of one variable.`,

      commonMisconceptions: [
        '"Economics is just about money." — Economics is about resource allocation broadly: time, land, attention, clean air are all economic goods.',
        '"Positive statements are true; normative statements are false." — Positive statements can be false (and often are). The distinction is about testability, not truth.',
        '"Microeconomics is small-scale; macroeconomics is large-scale." — The distinction is about the unit of analysis, not the size of the phenomenon.',
      ],

      examinerTip: `**IB Paper 1 tip:** When asked to "distinguish between positive and normative statements," always give one clear example of each and explain why the classification holds. Examiners want to see the word *testable* or *objective* for positive, and *value judgement* or *subjective* for normative. Never just say "positive = fact, normative = opinion" — this is imprecise.`,

      didYouKnow: `Paul Samuelson's textbook *Economics* (1948) has sold over 4 million copies and defined how economics is taught for 70 years. He introduced the famous "guns vs. butter" Production Possibility Frontier to explain scarcity and trade-offs — a diagram you'll master in the next lesson.`,

      vocabulary: [
        { term: 'Scarcity', definition: 'The condition in which human wants exceed the available resources to satisfy them.', example: 'Oil is scarce; a government must decide whether to use it for heating homes or fuelling vehicles.' },
        { term: 'Opportunity cost', definition: 'The value of the next best alternative foregone when a choice is made.', example: 'If you spend an hour studying economics, the opportunity cost is the hour you could have spent on maths.' },
        { term: 'Positive statement', definition: 'An objective, fact-based statement that can in principle be tested against evidence.', example: '"The unemployment rate is currently 4.2%."' },
        { term: 'Normative statement', definition: 'A statement based on value judgements that cannot be objectively verified.', example: '"The unemployment rate is too high and the government should intervene."' },
        { term: 'Ceteris paribus', definition: 'A Latin phrase meaning "all other things being equal," used to isolate the effect of one variable.', example: 'Demand curves assume ceteris paribus — all other factors affecting demand are held constant.' },
      ],
    },
  },
  {
    id: 'ib-intro-02',
    moduleId: 'ib-intro',
    title: 'Opportunity Cost & the PPC',
    description: 'The Production Possibility Curve, trade-offs, and the opportunity cost of every economic decision.',
    order: 2,
    estimatedMinutes: 25,
    tags: ['ppc', 'opportunity-cost', 'scarcity', 'foundations'],
    flashcards: [
      { id: 'fc-ib-intro-02-1', front: 'Opportunity cost', back: 'The value of the next best alternative foregone when a choice is made. The true cost of any decision.', tags: ['foundations'] },
      { id: 'fc-ib-intro-02-2', front: 'Production Possibility Curve (PPC)', back: 'A curve showing all combinations of two goods an economy can produce when using all resources fully and efficiently. Points inside = inefficient. Points outside = currently unattainable.', tags: ['ppc'] },
      { id: 'fc-ib-intro-02-3', front: 'Why is the PPC concave (bowed outward)?', back: 'Because resources are not perfectly adaptable between uses. As you produce more of one good, you must use increasingly less suitable resources, raising the opportunity cost. This is the Law of Increasing Opportunity Cost.', tags: ['ppc'] },
      { id: 'fc-ib-intro-02-4', front: 'What causes an outward shift of the PPC?', back: 'Economic growth: improvements in technology, increase in quantity/quality of resources (labour, capital, land), or better education and training. The economy can now produce more of both goods.', tags: ['ppc', 'growth'] },
    ],
    quiz: [
      {
        id: 'q-ib-intro-02-1',
        type: 'mcq',
        question: 'An economy produces only food and clothing. If it currently operates at a point inside the PPC, this indicates:',
        options: [
          'It has reached maximum possible output.',
          'Resources are being used inefficiently or are unemployed.',
          'It is producing beyond its productive capacity.',
          'It must be experiencing economic growth.',
        ],
        correctAnswer: 1,
        explanation: 'A point inside the PPC represents productive inefficiency — the economy is not using all its resources, or is using them in an inefficient combination. This is common during recessions.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    content: {
      conceptualExplanation: `## The Production Possibility Curve

The **Production Possibility Curve (PPC)** — also called the Production Possibility Frontier (PPF) — is the foundational diagram of economics. It captures, in a single curve, the concepts of scarcity, choice, opportunity cost, efficiency, and growth.

Imagine an economy that produces only two goods: **healthcare** (H) and **education** (E). If all resources go to healthcare, maximum H is produced. If all go to education, maximum E is produced. The PPC traces every possible combination in between.

### Key Points on the PPC

| Position | Meaning |
|----------|---------|
| **On the curve** | Productively efficient — all resources fully and efficiently employed |
| **Inside the curve** | Productively inefficient — unemployment or misallocation of resources |
| **Outside the curve** | Currently unattainable — beyond present productive capacity |

### The Concave Shape and Opportunity Cost

The PPC is typically drawn as **concave to the origin** (bowed outward). This reflects the **Law of Increasing Opportunity Cost**: as you produce more of one good, the opportunity cost of each additional unit increases.

Why? Resources are not perfectly adaptable. Teachers are better at education than at performing surgery. As you shift resources from education to healthcare, you first use the most suitable resources (e.g., qualified doctors). Then you must use increasingly less suitable ones — giving up more and more education per additional unit of healthcare.`,

      realWorldHook: `**The COVID-19 vaccine trade-off.** When governments poured resources into vaccine development in 2020, the opportunity cost was research into other diseases (cancer, Alzheimer's). This is a live PPC trade-off: moving along the curve from "other medical research" toward "pandemic response."`,

      interactiveElement: 'ppc-slider',

      deeperDive: `### The PPC and Economic Systems

The PPC tells us *what* can be produced, but not *what should* be produced. Three fundamental questions remain:
1. **What** to produce? (Which point on the PPC?)
2. **How** to produce it? (Which combination of resources?)
3. **For whom** to produce? (Who gets the output?)

Different economic systems answer these differently. A **free market** uses the price mechanism. A **command economy** uses government planning. A **mixed economy** uses both.

### PPC and Comparative Advantage

Two countries with different PPCs can gain from **specialisation and trade** — a key idea we'll revisit in Unit 4. Each should produce what it has a comparative advantage in, allowing both to consume outside their individual PPCs.`,

      commonMisconceptions: [
        '"A point outside the PPC is impossible forever." — It is unattainable *now* but may become attainable with economic growth (outward shift of the PPC).',
        '"A straight-line PPC means constant opportunity cost." — Correct. A concave PPC means increasing opportunity cost. A convex (inward-bowed) PPC would mean decreasing opportunity cost (unusual).',
        '"Moving along the PPC means economic growth." — No. Movement along a fixed PPC is a reallocation. Economic growth shifts the entire PPC outward.',
      ],

      examinerTip: `**Drawing the PPC in IB exams:** Always label both axes clearly with specific goods, label the axes "Quantity of [Good A]" not just letters. Mark points on, inside, and outside the curve. When asked to "show the effect of economic growth," shift the entire curve outward — do not just move a point. For HL, be ready to discuss a biased outward shift if technology improves in only one sector.`,

      didYouKnow: `The canonical "guns vs. butter" PPC example dates to WWII. Economists advised governments that every tank produced meant fewer consumer goods. Paul Samuelson immortalised this in his 1948 textbook. Today, modern versions use healthcare vs. education, or consumer vs. capital goods.`,

      vocabulary: [
        { term: 'Production Possibility Curve (PPC)', definition: 'A graph showing all combinations of two goods an economy can produce when all resources are fully and efficiently employed.', example: 'An economy on its PPC between fighter jets and food is allocatively choosing how to split resources.' },
        { term: 'Productive efficiency', definition: 'Producing at the lowest possible cost — occurring at any point on the PPC.', example: 'A factory operating on the PPC wastes no resources.' },
        { term: 'Allocative efficiency', definition: 'Resources are distributed to produce the combination of goods that maximises societal welfare — a specific point on the PPC.', example: 'A society that values healthcare highly should be near the healthcare-heavy end of its PPC.' },
        { term: 'Law of Increasing Opportunity Cost', definition: 'As production of a good increases, the opportunity cost of each additional unit rises, because resources must be diverted from increasingly productive alternative uses.', example: 'The 1,000th tonne of wheat requires diverting land better suited to cattle, raising the opportunity cost.' },
      ],
    },
  },
  {
    id: 'ib-intro-03',
    moduleId: 'ib-intro',
    title: 'Factors of Production',
    description: 'Land, labour, capital, and enterprise — the four resources that power every economy.',
    order: 3,
    estimatedMinutes: 15,
    tags: ['factors-of-production', 'foundations'],
    flashcards: [
      { id: 'fc-ib-intro-03-1', front: 'Land (factor of production)', back: 'All natural resources used in production: farmland, forests, minerals, water, fish stocks. Reward = rent.', tags: ['factors'] },
      { id: 'fc-ib-intro-03-2', front: 'Labour (factor of production)', back: 'The physical and mental effort of human beings used in production. Reward = wages.', tags: ['factors'] },
      { id: 'fc-ib-intro-03-3', front: 'Capital (factor of production)', back: 'Man-made resources used in production: machinery, tools, factories, infrastructure. NOT money. Reward = interest.', tags: ['factors'] },
      { id: 'fc-ib-intro-03-4', front: 'Enterprise (factor of production)', back: 'The willingness to take risk, combine other factors, and manage a business. Entrepreneurs spot opportunities and bear uncertainty. Reward = profit.', tags: ['factors'] },
    ],
    quiz: [
      {
        id: 'q-ib-intro-03-1',
        type: 'mcq',
        question: 'A factory building used in the production of cars is an example of which factor of production?',
        options: ['Land', 'Labour', 'Capital', 'Enterprise'],
        correctAnswer: 2,
        explanation: 'Capital refers to man-made physical assets used in production, including factories, machinery, and infrastructure. The factory is not a natural resource (land) nor human effort (labour).',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    content: {
      conceptualExplanation: `## Factors of Production

Every good and service produced in the world requires inputs. Economists classify these inputs into four **factors of production**:

### 1. Land
All **natural resources** — not just agricultural land, but everything nature provides: minerals, oil, forests, fisheries, water, wind, solar energy. The reward for land is called **rent**.

### 2. Labour
The **physical and mental effort** of human beings in the production process. A surgeon, a factory worker, a programmer, a teacher — all are providing labour. The reward for labour is called **wages**.

### 3. Capital
**Man-made productive resources**: machinery, factories, tools, computers, roads, ports. Critical distinction: in economics, capital does NOT mean money. Money is a medium of exchange; capital is a productive asset. The reward for capital is called **interest**.

### 4. Enterprise
The willingness to **take risks**, organise the other three factors, make decisions, and bear the consequences of failure. Entrepreneurs spot market opportunities and combine land, labour, and capital to create value. The reward for enterprise is **profit**.`,

      realWorldHook: `**Tesla's Gigafactory.** Land (Nevada desert), Labour (10,000+ workers), Capital (the factory, robots, machinery), Enterprise (Elon Musk's vision to reorganise EV production). Every production decision involves allocating these four factors.`,

      interactiveElement: 'factors-explorer',

      deeperDive: `### Human Capital

Economists distinguish between raw labour and **human capital** — the stock of skills, knowledge, and health that workers accumulate through education and training. Investing in human capital (education, healthcare, on-the-job training) shifts the PPC outward because it increases the productive capacity of labour.

This is central to **endogenous growth theory** (explored at AEO/IEO level), which argues that long-run economic growth is driven by investment in human capital and ideas.`,

      commonMisconceptions: [
        '"Capital = money." — In economics, capital specifically means man-made physical productive assets. Money is just a medium of exchange.',
        '"Land only means farmland." — Land includes all natural resources: oil fields, fish stocks, wind energy, minerals.',
        '"Labour is always unskilled work." — Labour encompasses all human productive effort, from manual labour to surgeons and software engineers.',
      ],

      examinerTip: `IB often tests whether students confuse capital (man-made productive assets) with financial capital (money). In an exam, if asked to classify a factor of production, always state whether it is land (natural), labour (human effort), capital (man-made productive asset), or enterprise (risk-taking coordination).`,

      didYouKnow: `Some modern economists argue for a **fifth factor of production: data or information**. In the digital economy, data increasingly drives production decisions. The EU's General Data Protection Regulation (GDPR) is partly an attempt to regulate who "owns" this factor.`,

      vocabulary: [
        { term: 'Factors of production', definition: 'The inputs used in the production of goods and services: land, labour, capital, and enterprise.', example: 'A bakery uses land (flour, wheat field), labour (bakers), capital (ovens, mixers), and enterprise (owner\'s vision).' },
        { term: 'Human capital', definition: 'The skills, knowledge, experience, and health embedded in workers, accumulated through education and training.', example: 'A doctor\'s medical degree and clinical experience represent a large stock of human capital.' },
        { term: 'Rent', definition: 'The return to the factor of production: land.', example: 'A farmer pays rent to use agricultural land.' },
        { term: 'Profit', definition: 'The return to the factor of production: enterprise. Calculated as total revenue minus total costs.', example: 'If Apple earns $100bn in revenue and has $60bn in costs, profit = $40bn.' },
      ],
    },
  },
]

// ── IB Unit 2: Microeconomics ────────────────────────────────────────────────
const ibMicroLessons: Lesson[] = [
  {
    id: 'ib-micro-01',
    moduleId: 'ib-micro',
    title: 'Demand: The Law and Its Determinants',
    description: 'What drives consumer demand, why demand curves slope downward, and what shifts them.',
    order: 1,
    estimatedMinutes: 25,
    tags: ['demand', 'microeconomics', 'price-theory'],
    flashcards: [
      { id: 'fc-ib-micro-01-1', front: 'Law of Demand', back: 'There is an inverse relationship between price and quantity demanded, ceteris paribus. As price rises, quantity demanded falls; as price falls, quantity demanded rises.', tags: ['demand'] },
      { id: 'fc-ib-micro-01-2', front: 'Non-price determinants of demand (PIRATE)', back: 'P - Prices of related goods\nI - Income\nR - Related goods (substitutes/complements)\nA - Advertising/tastes\nT - Tastes and preferences\nE - Expectations\n(Also: number of buyers)', tags: ['demand'] },
      { id: 'fc-ib-micro-01-3', front: 'Change in quantity demanded vs. change in demand', back: 'Change in QUANTITY demanded: movement ALONG the curve due to a price change.\nChange in DEMAND: SHIFT of the entire curve due to a non-price determinant changing.', tags: ['demand'] },
      { id: 'fc-ib-micro-01-4', front: 'Substitute goods', back: 'Goods that can be used in place of each other (e.g., butter and margarine). A rise in the price of one increases demand for the other.', tags: ['demand', 'related-goods'] },
      { id: 'fc-ib-micro-01-5', front: 'Complementary goods', back: 'Goods consumed together (e.g., cars and petrol, printers and ink). A rise in the price of one decreases demand for the other.', tags: ['demand', 'related-goods'] },
    ],
    quiz: [
      {
        id: 'q-ib-micro-01-1',
        type: 'mcq',
        question: 'An increase in consumers\' income causes the demand curve for a normal good to:',
        options: [
          'Shift to the left',
          'Shift to the right',
          'Become steeper (rotate)',
          'Move along the curve to a higher point',
        ],
        correctAnswer: 1,
        explanation: 'For a normal good, income and demand are positively related. Higher income → higher demand → rightward shift of the demand curve. Note: this is a shift, not a movement along the curve.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'q-ib-micro-01-2',
        type: 'quantitative',
        question: 'The price of petrol rises from $1.50 to $2.00 per litre. The quantity of car journeys demanded falls from 1,200 to 900 per day. Is this a change in demand or a change in quantity demanded? Explain.',
        options: [],
        correctAnswer: 'change in quantity demanded — movement along the demand curve due to a price change',
        explanation: 'A change in the price of the good itself causes a movement ALONG the existing demand curve — this is a change in quantity demanded, not a shift in demand.',
        marks: 2,
        difficulty: 'standard',
      },
    ],
    content: {
      conceptualExplanation: `## Demand

**Demand** in economics has a precise meaning: it is not just desire. Demand is the **willingness and ability** to purchase a good at a given price. A student wanting a Ferrari has desire; only someone both wanting and able to pay for one creates demand.

### The Law of Demand

The **Law of Demand** states: *as the price of a good rises, the quantity demanded falls, ceteris paribus.*

Why? Two reinforcing reasons:

1. **Substitution effect**: When the price of X rises, other goods become relatively cheaper. Consumers substitute away from X towards alternatives.
2. **Income effect**: When price rises, your real purchasing power falls. You can afford less — so you buy less of most goods.

### The Demand Curve

The demand curve slopes downward from left to right, reflecting this inverse relationship. **Price** is on the vertical axis; **quantity demanded** is on the horizontal axis.

### Critical Distinction: Movement vs. Shift

| What changes | Effect | Terminology |
|---|---|---|
| **Price** of the good | Movement along the curve | Change in **quantity demanded** |
| **Anything else** | Shift of the entire curve | Change in **demand** |

### Non-Price Determinants (Demand Shifters)

- **Income**: For normal goods, ↑ income → ↑ demand. For inferior goods, ↑ income → ↓ demand.
- **Price of related goods**: ↑ price of substitute → ↑ demand. ↑ price of complement → ↓ demand.
- **Tastes/preferences**: Fashion, advertising, health trends.
- **Expectations**: If consumers expect price to rise next month, demand rises now.
- **Number of buyers**: Population growth or new market entrants.`,

      realWorldHook: `**EV adoption surge (2023–2024).** Tesla price cuts shifted the supply curve right, but simultaneously, rising petrol prices, government subsidies, and improved battery range shifted the *demand* curve right. Understanding which factors are price effects vs. demand shifters is essential for policy analysis.`,

      interactiveElement: 'demand-curve-shifter',

      deeperDive: `### Giffen Goods: A Famous Exception?

A Giffen good violates the Law of Demand: as price rises, quantity demanded *also* rises. This sounds impossible, but it requires a very large negative income effect that overwhelms the substitution effect.

Robert Giffen allegedly observed this with bread in 19th-century Ireland: as bread prices rose, poor families could no longer afford meat, so they ate even *more* bread (their only affordable food). Recent field experiments in China by Jensen & Miller (2008) found evidence of Giffen behaviour in rice and wheat among poor rural households.

However, Giffen goods remain theoretically consistent with consumer theory — they require an inferior good where the income effect dominates.

### Mathematical Demand Function

In more formal analysis: $Q_d = f(P, P_s, P_c, Y, T, E, N)$
where P = own price, $P_s$ = price of substitutes, $P_c$ = price of complements, Y = income, T = tastes, E = expectations, N = number of buyers.`,

      commonMisconceptions: [
        '"Demand increased because price fell." — Price changes cause movements ALONG the curve, not shifts. If you want to say demand changed, it must be due to a non-price factor.',
        '"Higher price always means less is bought." — Not for Veblen/Giffen goods. But these are exceptions; for normal goods the Law of Demand holds.',
        '"Demand = how much people want." — Economics defines demand as willingness AND ability to pay. Desire without purchasing power is not economic demand.',
      ],

      examinerTip: `**Most common IB error on demand:** Confusing a movement along the curve (change in quantity demanded) with a shift of the curve (change in demand). In essays and data response questions, always be precise: "The demand curve shifts to the right" vs. "There is an extension of demand along the curve." Examiners lose patience with vague language like "demand goes up."`,

      didYouKnow: `Alfred Marshall formalised demand curves in his *Principles of Economics* (1890), but they were actually introduced by Antoine Augustin Cournot in 1838 — 52 years earlier. Marshall got the credit partly because he wrote in English and Cournot in French.`,

      vocabulary: [
        { term: 'Demand', definition: 'The willingness and ability to buy a good or service at various prices, over a given time period.', example: 'At £2/litre, 800 people want petrol AND can afford it → effective demand.' },
        { term: 'Law of Demand', definition: 'Inverse relationship between price and quantity demanded, ceteris paribus.', example: 'When coffee prices rise, people switch to tea (substitution effect).' },
        { term: 'Normal good', definition: 'A good for which demand increases as consumer income rises.', example: 'Restaurant meals, flights, luxury cars.' },
        { term: 'Inferior good', definition: 'A good for which demand decreases as consumer income rises.', example: 'Bus travel, instant noodles, second-hand clothes.' },
        { term: 'Ceteris paribus', definition: '"All else equal" — isolating the effect of one variable by holding all others constant.', example: 'The Law of Demand holds ceteris paribus — it breaks down if incomes rise at the same time as prices.' },
      ],
    },
  },
]

// ── DECA Module ───────────────────────────────────────────────────────────────
const decaLessons: Lesson[] = [
  {
    id: 'deca-01',
    moduleId: 'deca',
    title: 'The American Free Enterprise System',
    description: 'Private property rights, competition, and the foundations of the US market economy.',
    order: 1,
    estimatedMinutes: 20,
    tags: ['free-enterprise', 'deca', 'american-economy'],
    flashcards: [
      { id: 'fc-deca-01-1', front: 'Free enterprise system', back: 'An economic system in which individuals are free to own property, operate businesses with minimal government interference, and profit from their activities. Competition and the price mechanism coordinate decisions.', tags: ['deca', 'free-enterprise'] },
      { id: 'fc-deca-01-2', front: 'Private property rights', back: 'The legal right of individuals and businesses to own, use, and dispose of property. Fundamental to a market economy — provides incentives for investment and efficient use of resources.', tags: ['deca'] },
      { id: 'fc-deca-01-3', front: 'Profit motive', back: 'The incentive for businesses and individuals to earn a financial gain from their economic activities. Drives innovation, efficiency, and risk-taking in a free enterprise economy.', tags: ['deca', 'incentives'] },
    ],
    quiz: [
      {
        id: 'q-deca-01-1',
        type: 'mcq',
        question: 'Which characteristic is MOST fundamental to a free enterprise system?',
        options: [
          'Government ownership of major industries',
          'Centrally planned production targets',
          'Private ownership of property and means of production',
          'Equal distribution of income among all citizens',
        ],
        correctAnswer: 2,
        explanation: 'Private ownership of property and the means of production is the defining feature of a free enterprise system. This enables individuals and firms to make independent economic decisions.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    content: {
      conceptualExplanation: `## The American Free Enterprise System

The United States operates under a **free enterprise system** (also called market capitalism or a market economy), characterised by private ownership, competition, and the price mechanism.

### Five Pillars of Free Enterprise

1. **Private property rights** — Individuals and businesses can own and control productive resources. This incentivises investment because owners capture the returns.

2. **Freedom of choice** — Consumers choose what to buy; producers choose what to make; workers choose where to work.

3. **Profit motive** — The expectation of profit drives entrepreneurs to innovate, take risks, and organise resources efficiently.

4. **Competition** — Multiple sellers compete for consumers, driving down prices and improving quality. The Sherman Antitrust Act (1890) and Clayton Act (1914) protect competition.

5. **Limited government** — While the US government does regulate (FDA, EPA, SEC), the system relies primarily on market forces rather than government directives.

### How the Price Mechanism Works

Prices serve as **signals** in a free enterprise economy:
- High prices signal profit opportunities → attract new producers
- Low prices signal oversupply → encourage consumers to buy more
- This "invisible hand" (Adam Smith, 1776) coordinates millions of decisions without central planning`,

      realWorldHook: `**DECA Case Study — Amazon vs. Antitrust.** In 2023, the FTC sued Amazon, alleging it illegally maintained monopoly power. This illustrates the tension in free enterprise: competition is foundational, but dominant firms may suppress it. DECA competition questions frequently test this tension.`,

      interactiveElement: 'price-mechanism-simulator',

      deeperDive: `### The Mixed Economy Reality

No modern economy is purely free enterprise. The US government:
- Provides public goods (national defence, interstate highways)
- Regulates externalities (Clean Air Act)
- Provides a social safety net (Medicare, Medicaid, Social Security)
- Conducts monetary policy (Federal Reserve)

The degree of government involvement is a central normative debate in American economics and DECA competitions.`,

      commonMisconceptions: [
        '"Free enterprise means no government." — All modern free enterprise economies have significant government roles, especially in market failure correction.',
        '"Profit is the only goal of businesses." — Increasingly, stakeholder theory argues firms have obligations to employees, communities, and the environment, not just shareholders.',
      ],

      examinerTip: `**DECA exam tip:** Questions on free enterprise often contrast it with command/planned economies. Know the key differences: resource allocation (market vs. central planning), ownership (private vs. state), incentives (profit vs. directives). For DECA presentations, always tie abstract principles to current US policy examples.`,

      didYouKnow: `Adam Smith's *The Wealth of Nations* (1776) — published the same year as the Declaration of Independence — argued that individuals pursuing self-interest in competitive markets would, as if guided by an "invisible hand," promote the public good. Smith himself was not uncritical of markets; he was deeply suspicious of monopolists and rent-seekers.`,

      vocabulary: [
        { term: 'Free enterprise', definition: 'An economic system characterised by private ownership, profit motivation, competition, and limited government interference.', example: 'The US system allows anyone to start a business and keep the profits.' },
        { term: 'Invisible hand', definition: 'Adam Smith\'s metaphor for how self-interested decisions in competitive markets can lead to socially beneficial outcomes.', example: 'A bakery produces bread to make profit, but in doing so, feeds the community — serving the social good unintentionally.' },
        { term: 'Antitrust', definition: 'Laws and regulations designed to prevent monopolistic behaviour and promote competition.', example: 'The Sherman Antitrust Act broke up Standard Oil in 1911.' },
      ],
    },
  },
]

// ── IB Unit 3: Macroeconomics ─────────────────────────────────────────────────
const ibMacroLessons: Lesson[] = [
  {
    id: 'ib-macro-01',
    moduleId: 'ib-macro',
    title: 'Measuring Economic Activity: GDP',
    description: 'How GDP is measured, what it includes and excludes, and why it matters.',
    order: 1,
    estimatedMinutes: 25,
    tags: ['GDP', 'national income', 'measurement'],
    flashcards: [
      { id: 'fc-macro-01-1', front: 'GDP (Gross Domestic Product)', back: 'The total market value of all final goods and services produced within a country\'s borders in a given time period.', tags: ['GDP'] },
      { id: 'fc-macro-01-2', front: 'Three approaches to measuring GDP', back: '1. Expenditure approach: GDP = C + I + G + (X–M)\n2. Income approach: sum of all factor incomes\n3. Output approach: sum of value added at each stage of production', tags: ['GDP'] },
      { id: 'fc-macro-01-3', front: 'Nominal vs. Real GDP', back: 'Nominal GDP is measured at current prices. Real GDP adjusts for inflation using a base-year price index, making it a better measure of actual output growth.', tags: ['GDP'] },
      { id: 'fc-macro-01-4', front: 'GDP per capita', back: 'GDP divided by population. A rough measure of average living standards. Ignores income distribution, unpaid work, and non-material wellbeing.', tags: ['GDP', 'living standards'] },
      { id: 'fc-macro-01-5', front: 'GDP limitations as a welfare measure', back: 'GDP excludes: income inequality, informal economy, unpaid domestic work, environmental degradation, leisure, and subjective happiness. The Human Development Index (HDI) is a broader alternative.', tags: ['living standards'] },
    ],
    quiz: [
      {
        id: 'q-macro-01-1', type: 'mcq',
        question: 'Which of the following is included in GDP using the expenditure approach?',
        options: [
          'The sale of a used car between two individuals',
          'Government spending on a new highway',
          'A stock purchase on the NYSE',
          'Unpaid childcare provided by a parent',
        ],
        correctAnswer: 1,
        explanation: 'GDP counts final goods and services produced. Government spending on infrastructure (G) is included. Used goods, financial transactions, and unpaid work are excluded.',
        marks: 1, difficulty: 'foundation',
      },
      {
        id: 'q-macro-01-2', type: 'mcq',
        question: 'If nominal GDP rises by 6% and the GDP deflator rises by 4%, real GDP has:',
        options: ['Risen by 10%', 'Risen by approximately 2%', 'Fallen by 4%', 'Risen by 6%'],
        correctAnswer: 1,
        explanation: 'Real GDP growth ≈ Nominal GDP growth − Inflation rate = 6% − 4% = ~2%. Real GDP strips out the price-level effect to show actual output change.',
        marks: 1, difficulty: 'standard',
      },
    ],
    content: {
      conceptualExplanation: `## Measuring Economic Activity: GDP

**Gross Domestic Product (GDP)** is the most widely used measure of economic size and activity. It equals the total market value of all **final** goods and services produced within a country's borders during a specific period (usually one year or quarter).

### The Three Approaches

All three methods, correctly applied, yield identical results — they are simply different windows onto the same economy.

**1. Expenditure Approach** (most common)
$$GDP = C + I + G + (X - M)$$
- **C** — Household consumption (food, rent, Netflix)
- **I** — Business investment (factories, software, inventory)
- **G** — Government spending on goods and services (NOT transfers like benefits)
- **X − M** — Net exports (exports minus imports)

**2. Income Approach**
Sum all factor incomes: wages + rent + interest + profit. This equals GDP because every dollar of spending becomes someone's income.

**3. Output (Value-Added) Approach**
Sum the **value added** at each stage of production to avoid double counting. A car includes steel, rubber, and labour — we count only the final value, not each intermediate input.

### Nominal vs. Real GDP

**Nominal GDP** values output at current prices. A rise in nominal GDP could reflect more output *or* just higher prices.

**Real GDP** adjusts for inflation using a base year price index. It is the preferred measure for comparing economic growth over time.

$$\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100$$`,

      realWorldHook: `**2023 India overtakes UK.** India's nominal GDP surpassed the UK's in 2023, making it the world's 5th largest economy. But India's GDP *per capita* (÷1.4 billion people) is roughly $2,500 vs. the UK's ~$45,000 — a reminder that aggregate GDP and living standards are very different things.`,

      interactiveElement: 'price-mechanism',

      vocabulary: [
        { term: 'GDP', definition: 'Total market value of all final goods and services produced within a country\'s borders in a given period.', example: 'US GDP in 2023 was approximately $27 trillion.' },
        { term: 'Real GDP', definition: 'GDP adjusted for inflation using base-year prices, measuring actual output growth.', example: 'If prices doubled but output stayed the same, real GDP is unchanged while nominal GDP doubles.' },
        { term: 'GDP per capita', definition: 'GDP divided by population — a rough measure of average living standards.', example: 'Luxembourg has a higher GDP per capita than the US despite having a much smaller total GDP.' },
        { term: 'GDP deflator', definition: 'A price index used to convert nominal GDP to real GDP; broader than CPI as it covers all domestically produced goods.', example: 'A GDP deflator of 110 means price levels are 10% above the base year.' },
      ],

      deeperDive: `### What GDP Misses

GDP is powerful but incomplete as a welfare measure:

1. **Income distribution** — A country could have high GDP with extreme inequality. The Gini coefficient measures this separately.
2. **Informal economy** — Unreported economic activity (estimated at 25–65% of GDP in many developing nations) is invisible to national accounts.
3. **Negative externalities** — Pollution-generating production *adds* to GDP, even though it reduces welfare.
4. **Non-market activity** — Unpaid domestic work, volunteering, and leisure are excluded despite creating real value.
5. **Subjective wellbeing** — Bhutan famously tracks Gross National Happiness instead.

### Alternative Measures
- **HDI** (Human Development Index): combines GDP per capita, life expectancy, and education
- **Genuine Progress Indicator (GPI)**: adjusts GDP for inequality, crime, pollution
- **Material Living Standards vs. Quality of Life**: IB examiners often ask you to distinguish these`,

      commonMisconceptions: [
        'GDP includes transfer payments (pensions, unemployment benefits) — FALSE. These are not payments for current production and are excluded from G in the expenditure approach.',
        'A higher GDP per capita always means better living standards — FALSE. It ignores distribution, environmental quality, work hours, and non-material factors.',
        'Imports reduce a country\'s GDP — FALSE. Imports are subtracted in (X−M) only to avoid counting foreign production; domestic spending that happens to be on imports is still in C or I.',
      ],

      examinerTip: `For IB Paper 1, always distinguish **nominal from real GDP** when discussing growth. If asked to evaluate GDP as a measure of living standards, structure your answer around what GDP includes vs. what it omits, and offer HDI as an alternative. For HL, know the formula GDP = C + I + G + (X−M) and be able to calculate real GDP from nominal + deflator data.`,

      didYouKnow: `The concept of GDP was developed by economist Simon Kuznets for the US Congress in 1934, during the Great Depression. Kuznets himself warned against using it as a measure of welfare — a warning economists have been repeating ever since.`,
    },
  },
  {
    id: 'ib-macro-02',
    moduleId: 'ib-macro',
    title: 'Aggregate Demand and Aggregate Supply',
    description: 'The AD-AS model: what shifts each curve and how equilibrium determines output and price level.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['AD', 'AS', 'macroeconomic equilibrium', 'AD-AS model'],
    flashcards: [
      { id: 'fc-macro-02-1', front: 'Aggregate Demand (AD)', back: 'The total spending on a country\'s output at different price levels. AD = C + I + G + (X−M). AD slopes downward because of the wealth effect, interest rate effect, and international trade effect.', tags: ['AD'] },
      { id: 'fc-macro-02-2', front: 'Shifters of AD', back: 'Anything that changes C, I, G, or (X−M) other than the price level: consumer confidence, interest rates, government fiscal policy, exchange rates, trading partner incomes.', tags: ['AD'] },
      { id: 'fc-macro-02-3', front: 'Short-Run Aggregate Supply (SRAS)', back: 'Upward-sloping. Shows the total output firms are willing to produce at different price levels when input costs are fixed. Shifts if costs of production change (wages, oil prices, taxes on firms).', tags: ['AS'] },
      { id: 'fc-macro-02-4', front: 'Long-Run Aggregate Supply (LRAS)', back: 'Vertical at the full-employment level of output (potential GDP). In the long run, wages and prices are fully flexible, so output is determined by factor quantities and technology, not the price level.', tags: ['AS'] },
      { id: 'fc-macro-02-5', front: 'Inflationary gap', back: 'When actual output (AD) exceeds potential output (LRAS). Unemployment is below the natural rate; upward pressure on wages and prices. Self-corrects via rising SRAS in the long run.', tags: ['gaps'] },
      { id: 'fc-macro-02-6', front: 'Deflationary (recessionary) gap', back: 'When actual output is below potential output. Unemployment is above the natural rate; downward pressure on wages. Self-corrects via falling SRAS — but slowly, since wages are sticky downward.', tags: ['gaps'] },
    ],
    quiz: [
      {
        id: 'q-macro-02-1', type: 'mcq',
        question: 'A rise in business confidence is most likely to cause:',
        options: [
          'A leftward shift of AD',
          'A rightward shift of AD',
          'A rightward shift of LRAS',
          'A leftward shift of SRAS',
        ],
        correctAnswer: 1,
        explanation: 'Higher business confidence increases investment (I), which is a component of AD. This shifts AD rightward, increasing both output and the price level in the short run.',
        marks: 1, difficulty: 'foundation',
      },
      {
        id: 'q-macro-02-2', type: 'mcq',
        question: 'An economy is producing above its potential output. In the long run, without government intervention:',
        options: [
          'SRAS shifts right as workers demand higher wages',
          'SRAS shifts left as workers demand higher wages',
          'AD shifts left automatically',
          'LRAS shifts right to accommodate higher output',
        ],
        correctAnswer: 1,
        explanation: 'Above potential output, labour markets are tight. Workers bargain for higher wages (input costs rise), shifting SRAS leftward. This restores equilibrium at the LRAS but at a higher price level — the self-correction mechanism.',
        marks: 1, difficulty: 'standard',
      },
    ],
    content: {
      conceptualExplanation: `## The AD-AS Model

The AD-AS model is macroeconomics' central analytical framework — the equivalent of supply and demand but for the *entire economy*. It explains fluctuations in real GDP and the price level.

### Aggregate Demand (AD)

**AD** is the total demand for a country's output at different overall price levels.

$$AD = C + I + G + (X - M)$$

**Why does AD slope downward?** Three effects:
1. **Wealth effect** — Higher prices erode the real value of financial assets, reducing consumption
2. **Interest rate effect** — Higher prices raise the demand for money, pushing up interest rates and crowding out investment
3. **International trade effect** — Higher domestic prices make exports less competitive and imports more attractive, worsening net exports

**AD Shifters** (moves the whole curve):
- Consumer/business confidence
- Interest rates (monetary policy)
- Government spending and taxes (fiscal policy)
- Exchange rates
- Foreign income levels

### Aggregate Supply

**Short-Run Aggregate Supply (SRAS)** slopes *upward*. When prices rise, firms are (temporarily) more profitable because output prices rise faster than sticky input costs, incentivising more production.

SRAS shifts if *costs of production* change: wages, oil prices, indirect taxes, import costs.

**Long-Run Aggregate Supply (LRAS)** is *vertical* at the potential output level (Y*). In the long run, all prices — including wages — are fully flexible. Output is determined by the quantity and quality of factors of production, not the price level.

### Macroeconomic Equilibrium

Short-run equilibrium: where AD = SRAS → determines real GDP and price level.
Long-run equilibrium: where AD = SRAS = LRAS → at potential output with no inflationary/deflationary pressure.

### Output Gaps

| Gap | Output vs. Potential | Unemployment | Price Pressure |
|-----|---------------------|--------------|----------------|
| Inflationary | Above Y* | Below natural rate | Upward (wages rise) |
| Deflationary | Below Y* | Above natural rate | Downward (wages sticky) |`,

      realWorldHook: `**COVID-19 as an AD-AS shock (2020).** The pandemic was a simultaneous AD shock (consumers stopped spending) AND an AS shock (supply chains collapsed). This produced a fall in output but ambiguous price effects — which is exactly what the model predicts when both curves shift left simultaneously.`,

      interactiveElement: 'supply-demand-shifter',

      vocabulary: [
        { term: 'Aggregate Demand (AD)', definition: 'Total spending on a nation\'s output at different price levels: C + I + G + (X−M).', example: 'A tax cut boosts household consumption, shifting AD rightward.' },
        { term: 'SRAS', definition: 'Short-Run Aggregate Supply — upward sloping because input costs are fixed in the short run.', example: 'A rise in oil prices shifts SRAS leftward, causing stagflation.' },
        { term: 'LRAS', definition: 'Long-Run Aggregate Supply — vertical at potential GDP. In the long run, output depends on factor inputs, not prices.', example: 'An improvement in technology shifts LRAS rightward, enabling higher sustainable output.' },
        { term: 'Output gap', definition: 'The difference between actual GDP and potential GDP.', example: 'During the 2008 recession, the US output gap reached −6% of GDP.' },
        { term: 'Stagflation', definition: 'Simultaneous high inflation and high unemployment/low growth — caused by a leftward SRAS shift (supply-side shock).', example: 'The 1973 OPEC oil embargo caused stagflation across Western economies.' },
      ],

      deeperDive: `### The Keynesian vs. Classical Debate

The shape of LRAS is contested:

**Classical/Monetarist** view: LRAS is vertical; markets self-correct quickly. Policy intervention is mostly ineffective or counterproductive.

**Keynesian** view: The long run may be very long ("In the long run, we are all dead" — Keynes). Prices and wages are sticky downward. In a deep recession, the self-correction mechanism is too slow — government intervention is needed.

This debate underlies every major policy argument: austerity vs. stimulus, quantitative easing vs. sound money, etc.

### The Multiplier Effect

A change in autonomous expenditure (e.g., government spending) causes a *larger* change in equilibrium GDP. If the government spends $1 billion on roads, workers earn income, spend some of it, creating further income rounds.

$$\\text{Multiplier} = \\frac{1}{1 - MPC} = \\frac{1}{MPS + MPT + MPM}$$

The larger the marginal propensity to consume (MPC), the larger the multiplier.`,

      commonMisconceptions: [
        'A movement along AD is a "shift" — FALSE. A change in the price level causes movement along AD. Only changes in C, I, G, or (X−M) due to non-price factors shift the curve.',
        'LRAS can never shift — FALSE. Long-run supply grows when the quantity or quality of factors of production increases (better education, more capital, technological progress).',
        'Stagflation is impossible in the AD-AS model — FALSE. It occurs when SRAS shifts left: prices rise while output falls.',
      ],

      examinerTip: `AD-AS diagrams are the most tested diagrams in IB macroeconomics. Always label axes (Price Level on Y, Real GDP on X), show LRAS as vertical, and use arrows to show the shift direction and new equilibrium. For 4-mark questions, show the diagram + explain the transmission mechanism. For 8-mark evaluate questions, contrast short-run and long-run effects.`,

      didYouKnow: `The AD-AS framework as taught today is a synthesis developed in the 1970s–80s. Keynes himself never drew it this way — his original General Theory used different diagrams. The modern AD-AS model was largely built by economists trying to reconcile Keynesian and monetarist insights.`,
    },
  },
  {
    id: 'ib-macro-03',
    moduleId: 'ib-macro',
    title: 'Inflation and Unemployment',
    description: 'Types of inflation, causes, consequences, the Phillips Curve, and the natural rate of unemployment.',
    order: 3,
    estimatedMinutes: 28,
    tags: ['inflation', 'unemployment', 'Phillips Curve', 'CPI'],
    flashcards: [
      { id: 'fc-macro-03-1', front: 'Inflation', back: 'A sustained rise in the general price level, measured by the Consumer Price Index (CPI) or GDP deflator. Reduces purchasing power of money.', tags: ['inflation'] },
      { id: 'fc-macro-03-2', front: 'Demand-pull inflation', back: 'Inflation caused by excess AD — "too much money chasing too few goods." Arises when the economy is operating above potential output. Shown as AD shifting right in AD-AS.', tags: ['inflation'] },
      { id: 'fc-macro-03-3', front: 'Cost-push inflation', back: 'Inflation caused by rising production costs (wages, oil, raw materials) shifting SRAS leftward. Leads to stagflation: higher prices AND lower output simultaneously.', tags: ['inflation'] },
      { id: 'fc-macro-03-4', front: 'Natural Rate of Unemployment (NRU)', back: 'The unemployment rate consistent with stable inflation; composed of frictional + structural unemployment. Also called NAIRU (Non-Accelerating Inflation Rate of Unemployment).', tags: ['unemployment'] },
      { id: 'fc-macro-03-5', front: 'Phillips Curve', back: 'Short-run inverse relationship between inflation and unemployment. When unemployment falls, inflation rises (and vice versa). In the long run, the curve is vertical at the NRU — there is no inflation-unemployment trade-off.', tags: ['Phillips Curve'] },
      { id: 'fc-macro-03-6', front: 'Types of unemployment', back: 'Frictional: between jobs (normal); Structural: skills mismatch; Cyclical (demand-deficient): due to recession; Seasonal: predictable patterns. Only cyclical can be reduced by demand-side policy.', tags: ['unemployment'] },
    ],
    quiz: [
      {
        id: 'q-macro-03-1', type: 'mcq',
        question: 'A sudden doubling of global oil prices is most likely to cause:',
        options: [
          'Demand-pull inflation and rising output',
          'Cost-push inflation and falling output (stagflation)',
          'A rightward shift of AD',
          'A rightward shift of LRAS',
        ],
        correctAnswer: 1,
        explanation: 'Rising oil prices increase production costs across the economy, shifting SRAS leftward. This produces higher prices AND lower output simultaneously — the definition of stagflation. Cost-push inflation, not demand-pull.',
        marks: 1, difficulty: 'standard',
      },
      {
        id: 'q-macro-03-2', type: 'mcq',
        question: 'The long-run Phillips Curve is vertical because:',
        options: [
          'Inflation always equals zero in the long run',
          'There is no trade-off between inflation and unemployment in the long run',
          'Unemployment cannot be reduced by any policy',
          'Wages are perfectly sticky in the long run',
        ],
        correctAnswer: 1,
        explanation: 'In the long run, attempts to reduce unemployment below the NRU just raise inflation — workers adjust their expectations and demand higher wages, returning unemployment to the NRU at a higher price level. Hence no lasting trade-off.',
        marks: 1, difficulty: 'higher',
      },
    ],
    content: {
      conceptualExplanation: `## Inflation and Unemployment

### Inflation

**Inflation** is a sustained increase in the average price level. It is measured using the **Consumer Price Index (CPI)** — a weighted basket of goods and services representative of typical household spending.

#### Two Main Causes

**Demand-pull inflation**: Triggered by excessive AD growth
- Economy operating above potential → tight labour markets → wages rise → prices follow
- Occurs in booms; shown as AD shifting rightward past LRAS
- "Too much money chasing too few goods"

**Cost-push inflation**: Triggered by rising input costs
- Oil price spike, wage increases, supply chain disruptions
- Shifts SRAS leftward → higher prices AND lower output (**stagflation**)
- Cannot be easily fixed — any policy to reduce inflation worsens unemployment and vice versa

#### Consequences of Inflation
- **Redistribution**: debtors gain (real debt falls), creditors and savers lose
- **Menu costs**: firms incur costs updating prices
- **Shoe-leather costs**: wasted time economising on cash holdings
- **Uncertainty**: discourages investment and long-term contracts
- **International competitiveness**: exports become more expensive

### Unemployment

**Unemployment rate** = (Unemployed / Labour force) × 100

Types:
| Type | Cause | Policy |
|------|-------|--------|
| Frictional | Job search time | Labour market information |
| Structural | Skills mismatch, automation | Retraining, education |
| Cyclical | Low AD in recession | Demand-side stimulus |
| Seasonal | Predictable seasonal patterns | None needed |

The **Natural Rate of Unemployment (NRU)** = frictional + structural unemployment. This is the floor below which policy cannot push unemployment without accelerating inflation.

### The Phillips Curve

Short run: inverse relationship between inflation and unemployment.
Long run: vertical at the NRU — no lasting trade-off exists.

The Friedman-Phelps expectation-augmented Phillips Curve showed in the 1960s that if governments try to exploit the short-run trade-off, workers eventually adjust their inflation expectations, shifting the short-run curve up and returning unemployment to the NRU at a permanently higher inflation rate.`,

      realWorldHook: `**The Great Inflation (1970s) proved Friedman right.** Post-WWII governments believed they could permanently reduce unemployment by tolerating higher inflation. The 1970s oil shocks + loose monetary policy produced double-digit inflation AND high unemployment simultaneously — "stagflation" — shattering the simple Phillips Curve model and validating Friedman's critique.`,

      interactiveElement: 'price-mechanism',

      vocabulary: [
        { term: 'CPI', definition: 'Consumer Price Index — a measure of average changes in prices paid by urban consumers for a representative basket of goods and services.', example: 'If CPI rises from 100 to 103, inflation is 3%.' },
        { term: 'Stagflation', definition: 'Combination of high inflation and high unemployment (low growth), caused by a supply-side shock.', example: 'The 1973 oil embargo caused stagflation across developed economies.' },
        { term: 'NAIRU', definition: 'Non-Accelerating Inflation Rate of Unemployment — the unemployment rate consistent with stable (non-rising) inflation.', example: 'The US NAIRU is estimated at around 4-5%.' },
        { term: 'Phillips Curve', definition: 'Short-run inverse relationship between inflation and unemployment. Vertical in the long run at the NRU.', example: 'Moving along the short-run Phillips Curve, a government can trade higher inflation for lower unemployment — but only temporarily.' },
      ],

      deeperDive: `### Inflation Targeting

Since the 1990s, most central banks (Fed, ECB, Bank of England) use explicit **inflation targets** (typically 2%) as their primary monetary policy anchor. Why 2%?

- Low enough to prevent distortions
- High enough to give room to cut real interest rates in recessions (avoids the zero lower bound problem)
- Provides credibility and anchors inflation expectations

When inflation expectations become **unanchored** (as in the 2021–2023 post-COVID surge), even supply shocks can cause self-fulfilling wage-price spirals. This is why central banks communicate aggressively about their commitment to the target.`,

      commonMisconceptions: [
        'Deflation is always good because prices fall — FALSE. Deflation can be deeply harmful: consumers delay purchases expecting further price falls, investment collapses, and debt burdens rise in real terms (the "debt-deflation spiral" described by Irving Fisher).',
        'Unemployment = 0 is the policy target — FALSE. Some frictional and structural unemployment is natural and even beneficial (workers find better-matched jobs). The target is the NRU, not zero.',
        'High inflation only harms the poor — FALSE. It harms all fixed-income earners and savers. It actually *benefits* debtors whose real debt burden falls.',
      ],

      examinerTip: `For IB essays on inflation, always distinguish demand-pull from cost-push — they have different AD-AS diagrams and different policy responses. The Phillips Curve question almost always appears in HL Paper 2: draw BOTH the short-run (downward sloping) and long-run (vertical) curves, with the NRU clearly marked. Show how expectations shifts the SRPC upward when the government tries to exploit the trade-off.`,

      didYouKnow: `The highest inflation ever recorded was in Hungary in 1946, when prices doubled every 15 hours. The peak monthly inflation rate was 41.9 quadrillion percent. Zimbabwe's 2008 hyperinflation peaked at 79.6 billion percent per month — the government eventually abandoned its currency altogether.`,
    },
  },
]

// ── AEO/IEO: Advanced Microeconomics ─────────────────────────────────────────
const aeoMicroLessons: Lesson[] = [
  {
    id: 'aeo-micro-01',
    moduleId: 'aeo-micro',
    title: 'Consumer Theory: Utility, Indifference Curves & Budget Constraints',
    description: 'The formal theory of consumer choice: utility maximisation, indifference curves, and the budget constraint.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['consumer theory', 'utility', 'indifference curves', 'AEO'],
    flashcards: [
      { id: 'fc-aeo-01-1', front: 'Marginal Utility (MU)', back: 'The additional utility (satisfaction) from consuming one more unit of a good. Formally: MU = dU/dQ. Diminishing marginal utility states that MU eventually decreases as consumption increases.', tags: ['utility'] },
      { id: 'fc-aeo-01-2', front: 'Consumer optimum condition', back: 'Utility is maximised when MU_x/P_x = MU_y/P_y for all pairs of goods. Equivalently, the marginal rate of substitution (MRS) equals the price ratio P_x/P_y.', tags: ['utility', 'optimisation'] },
      { id: 'fc-aeo-01-3', front: 'Marginal Rate of Substitution (MRS)', back: 'The rate at which a consumer is willing to exchange one good for another while remaining on the same indifference curve. MRS = −dY/dX along IC = MU_x/MU_y. Diminishing MRS gives ICs their convex shape.', tags: ['indifference curves'] },
      { id: 'fc-aeo-01-4', front: 'Budget constraint', back: 'P_x·X + P_y·Y = I, where I is income. The slope is −P_x/P_y. A rise in income shifts BC out parallel; a price change rotates it.', tags: ['budget constraint'] },
      { id: 'fc-aeo-01-5', front: 'Income and substitution effects', back: 'Price fall → substitution effect (good cheaper relative to others → consume more) + income effect (real purchasing power rises → consume more if normal good). For Giffen goods, income effect > substitution effect and demand curves slope upward.', tags: ['consumer theory'] },
    ],
    quiz: [
      {
        id: 'q-aeo-01-1', type: 'mcq',
        question: 'At consumer equilibrium with two goods X and Y, which condition must hold?',
        options: [
          'MU_x = MU_y',
          'MU_x / P_x = MU_y / P_y',
          'P_x / MU_x > P_y / MU_y',
          'MRS = P_x + P_y',
        ],
        correctAnswer: 1,
        explanation: 'The utility-maximising consumer equates the marginal utility per dollar spent across all goods. MU_x/P_x = MU_y/P_y means the last dollar on X yields the same utility as the last dollar on Y — no reallocation can improve welfare.',
        marks: 2, difficulty: 'olympiad',
      },
      {
        id: 'q-aeo-01-2', type: 'mcq',
        question: 'A consumer has income of $100 and P_x = $5, P_y = $10. If they currently consume 10 units of X and 5 units of Y, and MU_x = 20 and MU_y = 30, they should:',
        options: [
          'Consume more X and less Y',
          'Consume more Y and less X',
          'Maintain current consumption — it is optimal',
          'Consume less of both goods',
        ],
        correctAnswer: 0,
        explanation: 'MU_x/P_x = 20/5 = 4. MU_y/P_y = 30/10 = 3. Since the last dollar on X yields more utility (4 > 3), shift spending from Y to X until MU_x/P_x = MU_y/P_y.',
        marks: 2, difficulty: 'olympiad',
      },
    ],
    content: {
      conceptualExplanation: `## Consumer Theory: Utility Maximisation

AEO/IEO economics requires the *formal* theory of consumer choice — not just "demand slopes down," but *why*, with mathematical precision.

### Utility and Preferences

A consumer's **utility function** U(X, Y) assigns a number to every consumption bundle, with higher numbers representing preferred bundles. We assume:
- **Completeness**: the consumer can rank all bundles
- **Transitivity**: if A ≻ B and B ≻ C, then A ≻ C
- **Monotonicity**: more is preferred to less (non-satiation)

### Indifference Curves

An **indifference curve (IC)** connects all bundles giving equal utility. Properties:
1. **Downward sloping** (monotonicity — to keep utility constant, less of one requires more of another)
2. **Convex to origin** (diminishing MRS — as you give up Y for X, you require increasing amounts of X to compensate)
3. **Cannot cross** (would violate transitivity)
4. **Higher ICs = higher utility**

The slope of an IC = **−MRS = −MU_x/MU_y**

### The Budget Constraint

With income I and prices P_x, P_y:
$$P_x \\cdot X + P_y \\cdot Y = I$$

Slope = **−P_x/P_y** (the market rate of exchange between goods)

### Consumer Optimum

The consumer maximises utility where the IC is *tangent* to the budget constraint:

$$MRS = \\frac{P_x}{P_y} \\quad \\Leftrightarrow \\quad \\frac{MU_x}{P_x} = \\frac{MU_y}{P_y}$$

**Intuition**: if MU_x/P_x > MU_y/P_y, reallocate a dollar from Y to X — it increases utility. Keep reallocating until equality holds.

### Income and Substitution Effects

A **price decrease for good X** has two components:
- **Substitution effect**: X is now cheaper relative to Y → substitute toward X (always positive for a price decrease)
- **Income effect**: real purchasing power increases → for normal goods, consume more X; for inferior goods, consume less X

For **Giffen goods** (extremely rare): income effect dominates and is negative, causing an upward-sloping demand curve.`,

      realWorldHook: `**Why do diamond prices stay high even when no one "needs" diamonds?** Veblen goods and status consumption challenge standard utility theory. Thorstein Veblen argued that for certain luxury goods, utility itself rises with price — consuming them *signals* wealth. This creates an upward-sloping demand curve that isn't a Giffen good but rather a preference for conspicuous consumption.`,

      interactiveElement: 'supply-demand-shifter',

      vocabulary: [
        { term: 'Utility', definition: 'A numerical representation of a consumer\'s preferences — higher utility = more preferred bundle.', example: 'U(2 apples, 3 oranges) = 12 > U(1 apple, 2 oranges) = 6 means the first bundle is preferred.' },
        { term: 'Indifference curve', definition: 'A curve showing all consumption bundles that give a consumer equal utility.', example: 'A consumer is indifferent between (4 apples, 1 orange) and (2 apples, 3 oranges) if both lie on the same IC.' },
        { term: 'MRS (Marginal Rate of Substitution)', definition: 'The rate at which a consumer can trade one good for another while remaining equally well off. Equals MU_x/MU_y.', example: 'MRS = 3 means the consumer will give up 3 units of Y to get 1 unit of X and stay on the same IC.' },
        { term: 'Giffen good', definition: 'A highly inferior good for which demand increases as price rises, because the income effect outweighs the substitution effect.', example: 'Robert Giffen observed 19th-century Irish peasants buying more potatoes when their price rose — potatoes were so large a share of their budget that the price rise effectively made them poorer, forcing them to buy even more of the cheap staple.' },
      ],

      deeperDive: `### Revealed Preference Theory

Paul Samuelson's **revealed preference** approach avoids cardinality assumptions entirely. If a consumer chooses bundle A when bundle B was affordable, A is *revealed preferred* to B. From these choices, we can derive demand theory without ever observing utility directly.

**Weak Axiom of Revealed Preference (WARP)**: If A is revealed preferred to B, then B should never be chosen when A is available (no contradictions in behaviour).

### Duality: Expenditure Minimisation

The dual of utility maximisation: minimise expenditure P_x·X + P_y·Y subject to achieving utility Ū. This yields the **expenditure function** e(P_x, P_y, Ū) — the minimum cost of reaching utility level Ū.

**Shephard's Lemma**: ∂e/∂P_x = X^h (Hicksian/compensated demand) — the derivative of the expenditure function with respect to price gives the compensated demand for that good.`,

      commonMisconceptions: [
        'Utility is measured in absolute units — FALSE. Utility is ordinal (rankings matter, not magnitudes). Doubling utility numbers doesn\'t mean you\'re "twice as happy." Only ordinal properties matter for demand theory.',
        'Indifference curves can never be straight lines — FALSE. Linear ICs represent perfect substitutes (e.g., one-dollar bills and two-dollar bills at a 2:1 ratio). L-shaped ICs represent perfect complements (left and right shoes).',
        'The substitution effect can be negative — FALSE. By definition, the substitution effect is always negative for a price increase (Slutsky substitution): as a good becomes more expensive, holding utility constant, you always consume less of it.',
      ],

      examinerTip: `AEO/IEO questions on consumer theory often require you to: (1) find the optimal bundle algebraically given a utility function and budget constraint, (2) derive demand functions, or (3) decompose a price change into income and substitution effects. Practice with specific functional forms: U = X·Y (Cobb-Douglas) and U = min(X, Y) (Leontief/perfect complements).`,

      didYouKnow: `The concept of diminishing marginal utility was independently discovered by three economists in 1871 — William Stanley Jevons (England), Carl Menger (Austria), and Léon Walras (France/Switzerland) — each unaware of the others' work. This "marginal revolution" is one of the most remarkable cases of simultaneous discovery in intellectual history.`,
    },
  },
]

// ── Module Definitions ────────────────────────────────────────────────────────
export const CURRICULUM: CurriculumModule[] = [
  {
    id: 'ib-intro',
    title: 'IB: Introduction to Economics',
    description: 'The nature of economics, scarcity, choice, opportunity cost, PPC, and economic systems.',
    track: 'IB_SL',
    unit: 1,
    lessons: ibIntroLessons,
    estimatedHours: 12,
    color: '#3b82f6',
    icon: 'BookOpen',
  },
  {
    id: 'ib-micro',
    title: 'IB: Microeconomics',
    description: 'Supply and demand, elasticities, market failure, government intervention.',
    track: 'IB_SL',
    unit: 2,
    lessons: ibMicroLessons,
    estimatedHours: 30,
    color: '#6366f1',
    icon: 'TrendingUp',
  },
  {
    id: 'ib-macro',
    title: 'IB: Macroeconomics',
    description: 'GDP, AD-AS model, fiscal & monetary policy, unemployment, inflation.',
    track: 'IB_SL',
    unit: 3,
    lessons: ibMacroLessons,
    estimatedHours: 30,
    color: '#8b5cf6',
    icon: 'BarChart3',
  },
  {
    id: 'ib-intl',
    title: 'IB: International Economics',
    description: 'Trade, exchange rates, balance of payments, development economics.',
    track: 'IB_SL',
    unit: 4,
    lessons: [],
    estimatedHours: 25,
    color: '#7c3aed',
    icon: 'Globe',
  },
  {
    id: 'aeo-micro',
    title: 'AEO/IEO: Advanced Microeconomics',
    description: 'Consumer theory, game theory, market structures, mechanism design.',
    track: 'AEO_IEO',
    unit: 1,
    lessons: aeoMicroLessons,
    estimatedHours: 40,
    color: '#f59e0b',
    icon: 'Zap',
  },
  {
    id: 'aeo-macro',
    title: 'AEO/IEO: Advanced Macroeconomics',
    description: 'IS-LM, Mundell-Fleming, Solow growth model, monetary theory.',
    track: 'AEO_IEO',
    unit: 2,
    lessons: [],
    estimatedHours: 35,
    color: '#d97706',
    icon: 'Activity',
  },
  {
    id: 'deca',
    title: 'DECA Economics',
    description: 'American free enterprise, personal finance, business economics, competition prep.',
    track: 'DECA',
    unit: 1,
    lessons: decaLessons,
    estimatedHours: 20,
    color: '#10b981',
    icon: 'Award',
  },
  {
    id: 'principles',
    title: 'Principles of Economics',
    description: "Mankiw's 10 principles through macroeconomic policy debates — first-year university level.",
    track: 'PRINCIPLES',
    unit: 1,
    lessons: [],
    estimatedHours: 35,
    color: '#14b8a6',
    icon: 'GraduationCap',
  },
]

export function getLessonById(lessonId: string): Lesson | null {
  for (const module of CURRICULUM) {
    const lesson = module.lessons.find((l) => l.id === lessonId)
    if (lesson) return lesson
  }
  return null
}

export function getModuleById(moduleId: string): CurriculumModule | null {
  return CURRICULUM.find((m) => m.id === moduleId) ?? null
}
