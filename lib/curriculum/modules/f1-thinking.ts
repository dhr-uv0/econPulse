import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f1-thinking',
  title: 'The Economic Way of Thinking',
  description:
    'Develop the mental habits economists use to analyse every decision, from what to eat for lunch to how nations allocate resources.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 1,
  estimatedHours: 2,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: What Is Economics? ────────────────────────────────────────────
  {
    id: 'f1-l1',
    moduleId: 'f1-thinking',
    title: 'What Is Economics?',
    description:
      'Define economics as the study of scarcity-driven choice; distinguish microeconomics from macroeconomics and positive from normative statements.',
    order: 1,
    estimatedMinutes: 20,
    tags: ['foundations', 'scarcity', 'methodology'],
    content: {
      conceptualExplanation: `## What Is Economics?

Economics is the social science that studies how individuals, businesses, governments, and entire societies make decisions about allocating **scarce resources** to satisfy their wants and needs. At first glance that might sound dry, but think about the questions economics actually tries to answer: Why are some countries rich and others poor? Why does the price of your favourite coffee go up? Should the government spend more on schools or hospitals? These are all economic questions, and learning to think like an economist gives you powerful tools to approach all of them.

The central insight that unifies all of economics is simple but profound: **resources are scarce, but human wants are unlimited**. There is only so much land, labour, machinery, and entrepreneurial talent in the world at any given moment. Because we cannot have everything, every choice involves giving something up. Economics is, at its heart, the study of those choices and their consequences.

### Microeconomics vs Macroeconomics

Economists divide their subject into two broad branches. **Microeconomics** ("micro" meaning small) focuses on the decisions of individual units — a single consumer choosing between two products, a firm setting its price, or one market finding its equilibrium. If you want to understand why a cinema charges less for afternoon showings than evening ones, microeconomics is your toolkit.

**Macroeconomics** ("macro" meaning large) zooms out to examine the economy as a whole. It asks why a country's total output grows or shrinks, what causes inflation, why unemployment rises during recessions, and how government spending and central bank interest rates affect millions of people at once. Both branches rely on the same underlying logic — scarce resources, rational decision-makers, trade-offs — but they operate at very different scales.

### Positive vs Normative Statements

One of the most important methodological distinctions in economics is between **positive** and **normative** statements. A *positive statement* is a factual claim that can, in principle, be tested against evidence — for example, "Raising the minimum wage by 20% reduces teenage employment in the fast-food sector." You might agree or disagree with it, but you can investigate it empirically. A *normative statement*, by contrast, involves a value judgement: "The minimum wage *should* be higher." No amount of data can settle that question on its own, because it depends on what you think is fair or desirable. Keeping these two types of statements separate is essential for clear economic thinking.`,

      realWorldHook: `Think about the last time you chose to buy a coffee instead of saving that money. That tiny everyday decision — how much to spend, on what, and why — is exactly the kind of choice economists study. Now scale that up: governments make the same type of decision when they allocate billions of dollars across education, defence, and healthcare. Whether you are an individual or a nation, scarcity forces choices, and economics gives you a rigorous language for understanding them.`,

      vocabulary: [
        {
          term: 'Economics',
          definition:
            'The social science that studies how individuals and societies allocate scarce resources among competing uses to satisfy unlimited wants.',
          example:
            'When a student decides whether to spend their Saturday working a part-time job or studying, they are navigating an economic trade-off.',
        },
        {
          term: 'Scarcity',
          definition:
            'The condition that exists because human wants exceed the limited resources available to satisfy them; the fundamental economic problem.',
          example:
            'A city council faces scarcity when it has a fixed budget and must choose between repaving roads and expanding public parks.',
        },
        {
          term: 'Positive statement',
          definition:
            'An objective, fact-based claim about the way the world *is*, which can be tested or verified with evidence.',
          example:
            '"Countries with higher literacy rates tend to have higher GDP per capita" is a positive statement — it is empirically testable.',
        },
        {
          term: 'Normative statement',
          definition:
            'A value-based claim about the way the world *should* be; it involves opinions and cannot be settled by evidence alone.',
          example:
            '"The government should provide free university education for all citizens" is normative — it reflects a value judgement about fairness.',
        },
      ],

      deeperDive: `Economics did not spring into existence fully formed. The discipline traces its roots to thinkers like Adam Smith, whose 1776 work *The Wealth of Nations* asked why some nations prosper while others stagnate. Smith's key insight — that individuals pursuing self-interest can inadvertently benefit society through market mechanisms — laid the groundwork for modern microeconomics. Over the following two centuries, economists developed increasingly sophisticated mathematical and statistical tools, and the field split into the micro and macro branches we recognise today.

It is worth noting that economics overlaps with psychology, sociology, political science, and even biology. Behavioural economics, for instance, challenges the assumption of purely rational decision-makers by studying how cognitive biases systematically lead people to make choices that traditional models would not predict. This interdisciplinary spirit makes economics a living, evolving field — not a fixed set of truths, but an ongoing inquiry into how the world works.`,

      commonMisconceptions: [
        'Economics is only about money and finance. In fact, economists study any situation involving scarce resources and choice — including time, attention, environmental quality, and even relationships.',
        'Positive economics is "good" economics and normative economics is "bad" or unscientific. The terms simply describe *what is* versus *what ought to be*; both are legitimate and essential parts of economic discourse.',
        'Microeconomics and macroeconomics are completely separate fields with no connection. In reality, macroeconomic outcomes emerge from millions of microeconomic decisions; the two branches constantly inform each other.',
      ],

      examinerTip: `When a question asks you to "distinguish between positive and normative statements," always look for value-laden language — words like *should*, *ought*, *better*, or *fairer* signal a normative claim. If a statement can be investigated with data alone, it is positive. Give one clear example of each to show the examiner you understand the distinction, not just the definition.`,

      didYouKnow: `The word "economics" comes from the ancient Greek *oikonomia*, meaning "household management." The Greek philosopher Xenophon used it to describe the efficient running of an estate — proof that the core idea of managing scarce resources wisely is as old as civilisation itself.`,
    },

    flashcards: [
      {
        id: 'f1-l1-fc1',
        front: 'What is economics?',
        back: 'The social science studying how individuals and societies allocate scarce resources among competing uses to satisfy unlimited wants.',
        tags: ['foundations', 'definition'],
      },
      {
        id: 'f1-l1-fc2',
        front: 'What is the difference between microeconomics and macroeconomics?',
        back: 'Microeconomics studies individual decision-makers and markets (consumers, firms, single industries). Macroeconomics studies the economy as a whole (GDP, inflation, unemployment, national policy).',
        tags: ['foundations', 'methodology'],
      },
      {
        id: 'f1-l1-fc3',
        front: 'Give an example of a positive economic statement.',
        back: '"A 10% rise in cigarette taxes reduces teenage smoking by approximately 7%." It is testable with real-world data.',
        tags: ['methodology'],
      },
      {
        id: 'f1-l1-fc4',
        front: 'Give an example of a normative economic statement.',
        back: '"The government should ban zero-hours contracts." It expresses a value judgement and cannot be settled by evidence alone.',
        tags: ['methodology'],
      },
      {
        id: 'f1-l1-fc5',
        front: 'Why is scarcity considered the central economic problem?',
        back: 'Because human wants are unlimited but resources (land, labour, capital, entrepreneurship) are finite, every individual and society must make choices — and all economic questions flow from this constraint.',
        tags: ['foundations', 'scarcity'],
      },
    ],

    quiz: [
      {
        id: 'f1-l1-q1',
        type: 'mcq',
        question: 'Which of the following is a normative economic statement?',
        options: [
          'When the price of petrol rises, consumers buy less of it.',
          'The unemployment rate fell from 5% to 4.2% last year.',
          'The government should prioritise reducing income inequality over economic growth.',
          'An increase in the money supply tends to raise the price level over time.',
        ],
        correctAnswer: 2,
        explanation:
          'Option C contains the value judgement "should prioritise," making it normative. Options A, B, and D are factual claims that can be tested against evidence, so they are positive statements.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q2',
        type: 'mcq',
        question: 'Macroeconomics is best described as the branch of economics that studies:',
        options: [
          'How individual consumers decide what goods to purchase.',
          'The pricing decisions of a single monopoly firm.',
          'The overall performance of a national economy, including GDP and inflation.',
          'The cost structures of firms in a particular industry.',
        ],
        correctAnswer: 2,
        explanation:
          'Macroeconomics examines economy-wide aggregates such as national output (GDP), the general price level (inflation), and total employment. Options A, B, and D all describe microeconomic topics.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q3',
        type: 'mcq',
        question: 'The fundamental economic problem exists because:',
        options: [
          'Governments do not distribute income fairly across society.',
          'Human wants are unlimited while productive resources are scarce.',
          'Technology has not yet advanced enough to satisfy basic human needs.',
          'Free markets always produce too little of essential goods.',
        ],
        correctAnswer: 1,
        explanation:
          'Scarcity — the gap between unlimited wants and finite resources — is the universal starting point of economics. It applies regardless of a country\'s government type or technological level.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ── Lesson 2: Scarcity, Choice, and Opportunity Cost ────────────────────────
  {
    id: 'f1-l2',
    moduleId: 'f1-thinking',
    title: 'Scarcity, Choice, and Opportunity Cost',
    description:
      'Explain why unlimited wants collide with finite resources and why every real choice has a hidden cost — the next-best alternative forgone.',
    order: 2,
    estimatedMinutes: 25,
    tags: ['scarcity', 'opportunity-cost'],
    content: {
      conceptualExplanation: `## Scarcity, Choice, and Opportunity Cost

Scarcity is the starting gun that fires before every economic race. Because we cannot have everything we want, we must choose — and choosing one thing always means not choosing something else. This is such a powerful and universal insight that economists have given it a special name: **opportunity cost**. The opportunity cost of any decision is the value of the *next-best alternative* you give up when you make that choice.

Notice what opportunity cost is *not*. It is not every possible thing you could have done instead — only the single best alternative forgone. If you spend a Saturday afternoon at the cinema, your opportunity cost might be the nap you would have taken, or the study session you planned — whichever you would have chosen *second*. You cannot count both; opportunity cost is singular, not plural.

### Why "Free" Things Are Never Really Free

The concept of opportunity cost teaches us that even things that carry no price tag still have a cost. Attending a free outdoor concert costs you the time you could have spent on something else. Governments that spend money on a new highway "for free" (funded by taxes already collected) face an opportunity cost: the schools, hospitals, or tax rebates that money could have funded instead. Economists sometimes summarise this with the phrase **TANSTAAFL — There Ain't No Such Thing As A Free Lunch**.

### Scarcity Is Universal

It is tempting to think that very wealthy individuals or nations have escaped scarcity. They have not. A billionaire still has only 24 hours in a day. A wealthy country still has to decide how to allocate its skilled workers, its land, its environmental capacity. Scarcity is not primarily about poverty — it is a logical condition that follows from unlimited wants meeting finite resources. Even if everyone on Earth were comfortable and fed, we would still want cleaner air, more leisure, longer lives, and better art than we currently have.

### Three Fundamental Economic Questions

Because scarcity forces choice, every society — rich or poor, capitalist or socialist — must answer three questions: **What to produce?** (Which goods and services?) **How to produce it?** (Which combination of resources and technology?) **For whom to produce it?** (Who gets the output and in what quantities?) How a society answers these three questions defines its economic system. But regardless of the system, scarcity means there are always trade-offs.`,

      prerequisiteRecap: `You have seen how scarcity forces every individual and society to make choices — and that economics is the study of those choices. Now we dig into the hidden cost that accompanies every decision: opportunity cost, the value of the next-best alternative you give up whenever you choose.`,

      recallQuestions: [
        {
          id: 'f1-l2-recall-1',
          type: 'mcq' as const,
          question: 'Which of the following is a normative economic statement?',
          options: [
            'Raising the minimum wage increases unemployment among teenagers.',
            'GDP grew by 2.1% last year.',
            'The government should increase spending on renewable energy.',
            'A higher price leads to a lower quantity demanded, all else equal.',
          ],
          correctAnswer: 2,
          explanation:
            'Option C contains the value judgement "should," making it normative — it cannot be settled by evidence alone. The other options are factual claims that are testable with data (positive statements).',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `Imagine you have just been offered two summer internships: one at a prestigious bank paying £800 per week, and one at a small environmental charity paying £200 per week. You choose the charity. Your opportunity cost is not just the £600 weekly difference — it is the entire bank internship experience, the networking, and the higher pay, all bundled together. Every career decision, every purchase, every hour of your day carries this hidden cost. Once you start seeing opportunity costs everywhere, you cannot unsee them.`,

      vocabulary: [
        {
          term: 'Opportunity cost',
          definition:
            'The value of the next-best alternative forgone when a choice is made; the true cost of any decision.',
          example:
            'A student who spends an evening watching TV has an opportunity cost of the revision they could have done instead.',
        },
        {
          term: 'Trade-off',
          definition:
            'The situation in which gaining more of one thing requires accepting less of another, because of scarcity.',
          example:
            'A government faces a trade-off when increasing defence spending means reducing the budget available for education.',
        },
        {
          term: 'TANSTAAFL',
          definition:
            '"There Ain\'t No Such Thing As A Free Lunch" — the principle that every resource use has an opportunity cost, even when no money changes hands.',
          example:
            'A "free" NHS appointment has an opportunity cost: the time of doctors and nurses who could be treating other patients.',
        },
        {
          term: 'Factors of production',
          definition:
            'The scarce resources used to produce goods and services: land (natural resources), labour (human effort), capital (machinery and equipment), and enterprise (entrepreneurship).',
          example:
            'A bakery uses land (the shop premises), labour (bakers), capital (ovens), and enterprise (the owner\'s risk-taking and ideas).',
        },
      ],

      deeperDive: `Opportunity cost is deceptively simple but has profound implications. In business, it explains why a profitable firm might rationally shut down — if its resources could earn even more elsewhere, staying open is destroying value relative to the best alternative. This is why economists talk about *economic profit* (revenue minus all costs including opportunity cost) rather than just *accounting profit* (revenue minus cash expenses). A firm earning £50,000 in accounting profit but forgoing £80,000 it could earn elsewhere is economically making a loss.

For individuals, opportunity cost is why economists are sceptical when people say "I had nothing better to do." There is *always* an alternative use of time — sleep, socialising, learning a skill, earning money. Recognising this pushes us toward more honest and complete analysis of decisions. It also explains why economists focus so heavily on *incentives*: changing the opportunity cost of a behaviour (through taxes, subsidies, or information) changes what people choose to do.`,

      commonMisconceptions: [
        'Opportunity cost is the same as monetary cost. In fact, opportunity cost can apply to time, enjoyment, relationships, and any other scarce resource — not just money.',
        'Opportunity cost includes all the things you could have done. It is strictly the *single* next-best alternative, not a list of every possible option you declined.',
        'Wealthy people do not face opportunity costs because they can afford anything. Even billionaires face scarcity of time and must prioritise — every minute spent on one activity is a minute not spent on the next-best alternative.',
      ],

      examinerTip: `When calculating or describing opportunity cost, always name the *specific* next-best alternative — do not just say "what you gave up." Examiners award marks for precision: state what was chosen, what was sacrificed, and why that sacrifice is the opportunity cost. Avoid listing multiple alternatives; pick the single best one forgone.`,

      didYouKnow: `The phrase "There Ain't No Such Thing As A Free Lunch" was popularised by Nobel Prize-winning economist Milton Friedman, but it actually appeared in American saloons in the 1800s, where "free" bar snacks were offered to attract paying drinkers — proof that TANSTAAFL was understood long before economists gave it a name.`,
    },

    flashcards: [
      {
        id: 'f1-l2-fc1',
        front: 'What is opportunity cost?',
        back: 'The value of the next-best alternative forgone when a choice is made. It is the true economic cost of any decision.',
        tags: ['opportunity-cost', 'foundations'],
      },
      {
        id: 'f1-l2-fc2',
        front: 'Why is opportunity cost always the NEXT-BEST alternative, not all alternatives?',
        back: 'Because you can only give up the one thing you would have chosen second. All other options were already less preferred and therefore not the real sacrifice.',
        tags: ['opportunity-cost'],
      },
      {
        id: 'f1-l2-fc3',
        front: 'What are the four factors of production?',
        back: 'Land (natural resources), Labour (human effort and skills), Capital (man-made tools and machinery), and Enterprise (entrepreneurship — organising the other three and bearing risk).',
        tags: ['scarcity', 'foundations'],
      },
      {
        id: 'f1-l2-fc4',
        front: 'What does TANSTAAFL stand for and what does it mean?',
        back: '"There Ain\'t No Such Thing As A Free Lunch." Every resource use has an opportunity cost — even things with no price tag consume scarce time, effort, or other resources.',
        tags: ['opportunity-cost', 'scarcity'],
      },
      {
        id: 'f1-l2-fc5',
        front: 'What are the three fundamental economic questions every society must answer?',
        back: '1. What to produce? 2. How to produce it? 3. For whom to produce it? Scarcity makes these questions unavoidable for every economic system.',
        tags: ['scarcity', 'foundations'],
      },
    ],

    quiz: [
      {
        id: 'f1-l2-q1',
        type: 'mcq',
        question:
          'Maria gives up a £30,000 salary to study full-time for a master\'s degree that costs £15,000 in tuition. What is the opportunity cost of her decision?',
        options: [
          '£15,000 (tuition fees only)',
          '£30,000 (salary forgone only)',
          '£45,000 (tuition plus salary)',
          'Zero, because education is an investment',
        ],
        correctAnswer: 1,
        explanation:
          'Opportunity cost is the next-best alternative forgone — in this case the £30,000 salary she would have earned by working instead. Tuition is a monetary (accounting) cost, not the opportunity cost. Do not combine the two.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q2',
        type: 'mcq',
        question: 'Which statement best explains why scarcity applies even to very wealthy countries?',
        options: [
          'Wealthy countries have higher population growth, increasing demand faster than supply.',
          'Even rich nations have finite resources and face trade-offs in how they allocate them.',
          'Scarcity is caused by unfair distribution of wealth and disappears once redistribution occurs.',
          'Wealthy countries face scarcity only in non-renewable natural resources.',
        ],
        correctAnswer: 1,
        explanation:
          'Scarcity is a universal condition rooted in unlimited wants meeting finite resources — it is not caused by poverty or inequality. A wealthy country still has limited land, labour, capital, and enterprise and must make choices among competing uses.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q3',
        type: 'mcq',
        question: 'The principle of TANSTAAFL is best illustrated by which of the following?',
        options: [
          'A government offers citizens a tax refund funded by cutting arts subsidies.',
          'A supermarket reduces food prices by 50% to attract more customers.',
          'A student receives a full scholarship and pays no tuition fees but still spends four years in study.',
          'A firm raises wages to reduce staff turnover.',
        ],
        correctAnswer: 2,
        explanation:
          'Even with a full scholarship, the student bears the opportunity cost of four years that could have been spent working, gaining experience, or pursuing other goals. The "free" tuition does not eliminate the real cost of attending university.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ── Lesson 3: The Production Possibilities Frontier ─────────────────────────
  {
    id: 'f1-l3',
    moduleId: 'f1-thinking',
    title: 'The Production Possibilities Frontier',
    description:
      'Use the PPF diagram to visualise trade-offs, efficiency, opportunity cost, and what economic growth actually means.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['PPF', 'efficiency', 'growth'],
    content: {
      conceptualExplanation: `## The Production Possibilities Frontier

The **Production Possibilities Frontier (PPF)** — sometimes called the Production Possibilities Curve — is one of the most important diagrams in all of economics. It is a simple but powerful model that makes abstract ideas like scarcity, trade-offs, efficiency, and growth visible on a graph. The PPF shows the maximum combinations of two goods (or groups of goods) that an economy can produce when all its resources are fully and efficiently employed.

To build a PPF, imagine an economy that can produce only two things — say, consumer goods (phones, clothing, food) and capital goods (machines, factories, infrastructure). If every resource goes into consumer goods, you get a maximum amount of consumer goods and zero capital goods. If everything goes into capital goods, you get the reverse. In between, there is a whole range of possible combinations. Plot them all and you get the PPF: a curve that bows outward from the origin (concave to the origin), showing the trade-off between the two goods.

### Points On, Inside, and Outside the PPF

The location of a point relative to the PPF has precise economic meaning. A point **on** the PPF represents **productive efficiency** — the economy is using all its resources and cannot produce more of one good without sacrificing some of the other. A point **inside** the PPF (closer to the origin) represents **inefficiency** — resources are unemployed or misallocated, so more of both goods could be produced. A point **outside** the PPF is currently **unattainable** — it is beyond the economy's productive capacity given its current resources and technology.

### Why Is the PPF Curved?

The PPF bows outward because of the **law of increasing opportunity cost**. Resources are not perfectly adaptable between all uses. A farmland is better suited to agriculture than to manufacturing; a software engineer is more productive writing code than driving a tractor. As you shift resources from producing one good to producing another, you first reassign the resources that are *least suited* to their original use and *most suited* to the new use. Then you must start pulling resources that are progressively less well suited to the new use, making each additional unit more expensive in terms of the other good forgone. This increasing sacrifice gives the PPF its outward bow.

### Economic Growth and the PPF

Economic growth shifts the entire PPF **outward**, meaning the economy can now produce more of both goods simultaneously. This shift occurs when the quantity or quality of resources increases — through discoveries of new natural resources, population growth, capital accumulation, or technological progress. The *composition* of a country's output today matters for its growth tomorrow: an economy that produces more capital goods now will have a larger PPF in the future, because it is building the productive machinery needed for greater output.`,

      prerequisiteRecap: `You have explored how every choice carries an opportunity cost — the value of the next-best alternative forgone. The PPF makes that abstract idea concrete and visual: it plots every possible trade-off between two goods when resources are fully used, so you can literally see opportunity cost as the slope of the curve.`,

      recallQuestions: [
        {
          id: 'f1-l3-recall-1',
          type: 'mcq' as const,
          question:
            'Maria turns down a £30,000 salary to study full-time. What is the opportunity cost of her decision?',
          options: [
            'The tuition fees she pays for the course.',
            'The £30,000 salary she forgoes.',
            'The sum of tuition fees and the forgone salary.',
            'Zero, because education is an investment in her future.',
          ],
          correctAnswer: 1,
          explanation:
            'Opportunity cost is the single next-best alternative forgone — the £30,000 salary she would have earned by working. Tuition is a monetary (accounting) cost, not the opportunity cost.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f1-l3-recall-2',
          type: 'mcq' as const,
          question: 'Which principle does TANSTAAFL most directly illustrate?',
          options: [
            'Scarcity affects only poor individuals and nations.',
            'Every resource use has an opportunity cost, even when no money changes hands.',
            'Free markets always allocate resources efficiently.',
            'Opportunity cost includes every alternative you declined, not just the best one.',
          ],
          correctAnswer: 1,
          explanation:
            '"There Ain\'t No Such Thing As A Free Lunch" captures the idea that even things with no price tag consume scarce resources — time, effort, or money — meaning there is always an opportunity cost.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `During World War II, the United States rapidly shifted its PPF outward through massive investment in manufacturing capacity, while simultaneously moving along its existing PPF to dramatically increase military goods at the expense of consumer goods. Factories that had made refrigerators began making tanks. This real-world example shows how the PPF is not just a textbook abstraction — it captures the life-or-death resource allocation decisions that nations actually face in moments of crisis.`,

      vocabulary: [
        {
          term: 'Production Possibilities Frontier (PPF)',
          definition:
            'A curve showing the maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed.',
          example:
            'A PPF for guns and butter shows that producing more guns (military goods) means producing less butter (civilian goods), given fixed resources.',
        },
        {
          term: 'Productive efficiency',
          definition:
            'Producing at maximum output given available resources and technology; represented by a point on (not inside) the PPF.',
          example:
            'A factory running at full capacity with no idle workers or machines is productively efficient.',
        },
        {
          term: 'Law of increasing opportunity cost',
          definition:
            'As production of one good increases, the opportunity cost of each additional unit rises, because resources are not perfectly adaptable between uses.',
          example:
            'Shifting the first thousand workers from farming to manufacturing is cheap in lost food output; shifting the ten-thousandth worker costs far more food.',
        },
        {
          term: 'Economic growth',
          definition:
            'An outward shift of the entire PPF, indicating the economy can now produce more of all goods due to increased resources or improved technology.',
          example:
            'The invention of the steam engine shifted Britain\'s PPF outward during the Industrial Revolution, enabling far greater total production.',
        },
      ],

      deeperDive: `The PPF also illustrates an important insight about development strategy. Countries that invest heavily in capital goods today — accepting lower consumption now — can achieve a much larger PPF in the future. South Korea's remarkable economic transformation from the 1960s onward partly reflects this logic: high savings rates funded capital accumulation, which expanded productive capacity, which enabled higher consumption later. By contrast, an economy that devotes all its resources to immediate consumption may maintain living standards today but faces a PPF that grows slowly or not at all.

It is worth emphasising that the PPF is a *model* — a simplification. Real economies produce millions of goods, not just two. Resources are not always fully employed (the 2008 financial crisis left many economies operating well inside their PPFs). And the assumption of fixed technology, while useful for analysis, breaks down over longer time horizons when innovation is the main driver of growth. Understanding the PPF deeply means both appreciating what it reveals and recognising what it deliberately leaves out.`,

      commonMisconceptions: [
        'A point inside the PPF means the economy is producing efficiently but could grow more. Wrong — a point inside the PPF indicates *inefficiency* (idle or misallocated resources), not a growth situation.',
        'The PPF is a straight line. For most realistic scenarios it bows outward due to the law of increasing opportunity cost. A straight-line PPF only applies if resources are perfectly interchangeable between the two goods — a special case, not the general rule.',
        'Economic growth means moving along the PPF. Moving along the PPF is a trade-off within existing capacity. Economic growth is an *outward shift* of the entire PPF, reflecting increased productive capacity.',
      ],

      examinerTip: `In diagram questions, always label both axes clearly, mark the curve as "PPF" and show at least three points: one on the curve (efficient), one inside (inefficient/attainable), and one outside (unattainable). If asked about economic growth, draw a second PPF shifted outward and explain *why* it shifted (more resources, better technology). Do not confuse movement along the PPF (a trade-off) with a shift of the PPF (growth).`,

      didYouKnow: `The PPF concept was first formalised by economist Gottfried Haberler in 1936 to analyse international trade theory, but it has since become the universal first diagram of almost every introductory economics course worldwide — a testament to how much explanatory power a simple two-axis graph can carry.`,
    },

    flashcards: [
      {
        id: 'f1-l3-fc1',
        front: 'What does a point inside the PPF represent?',
        back: 'Productive inefficiency — the economy is not fully utilising its resources (e.g., there is unemployment or misallocation). More of both goods could be produced.',
        tags: ['PPF', 'efficiency'],
      },
      {
        id: 'f1-l3-fc2',
        front: 'What does a point outside the PPF represent?',
        back: 'An unattainable combination — the economy currently lacks the resources or technology to produce that much. It becomes attainable only if the PPF shifts outward (economic growth).',
        tags: ['PPF', 'growth'],
      },
      {
        id: 'f1-l3-fc3',
        front: 'Why does the PPF bow outward rather than being a straight line?',
        back: 'Because of the law of increasing opportunity cost: resources are not perfectly adaptable between uses, so shifting more and more production toward one good requires ever-larger sacrifices of the other.',
        tags: ['PPF', 'opportunity-cost'],
      },
      {
        id: 'f1-l3-fc4',
        front: 'What causes an outward shift of the entire PPF?',
        back: 'Economic growth — specifically, an increase in the quantity or quality of resources (more labour, more capital) or an improvement in technology that raises productive capacity.',
        tags: ['PPF', 'growth'],
      },
      {
        id: 'f1-l3-fc5',
        front: 'What is the difference between moving along the PPF and shifting the PPF?',
        back: 'Moving along the PPF is a trade-off within existing capacity (producing more of one good means less of the other). Shifting the PPF outward is economic growth — the economy can now produce more of both goods.',
        tags: ['PPF', 'efficiency', 'growth'],
      },
    ],

    quiz: [
      {
        id: 'f1-l3-q1',
        type: 'mcq',
        question:
          'An economy is currently producing at a point inside its PPF. This most likely indicates that:',
        options: [
          'The economy has experienced technological progress.',
          'Resources are unemployed or being used inefficiently.',
          'The economy is producing at its maximum potential output.',
          'The economy needs to shift its PPF outward to reach that point.',
        ],
        correctAnswer: 1,
        explanation:
          'A point inside the PPF signals productive inefficiency — some resources are idle (e.g., unemployed workers) or misallocated. The economy could produce more of both goods by using its resources more fully and effectively.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q2',
        type: 'mcq',
        question:
          'A country discovers large oil reserves and invests heavily in new technology. On a PPF diagram, this would most likely be shown as:',
        options: [
          'A movement from a point on the PPF to a point inside it.',
          'A movement along the PPF from one efficient combination to another.',
          'An outward shift of the entire PPF.',
          'No change to the PPF, because oil is a natural resource already owned by the country.',
        ],
        correctAnswer: 2,
        explanation:
          'New natural resources and improved technology increase the economy\'s productive capacity, shifting the entire PPF outward. This is the definition of economic growth — more of all goods can now be produced.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q3',
        type: 'mcq',
        question:
          'The law of increasing opportunity cost explains why the PPF is concave (bowed outward). This law states that:',
        options: [
          'As more of a good is produced, its price falls due to economies of scale.',
          'Each additional unit of a good produced requires giving up increasing amounts of the other good.',
          'Resources become more productive the longer they are used in a single industry.',
          'Opportunity cost is constant along any straight PPF.',
        ],
        correctAnswer: 1,
        explanation:
          'Resources are not perfectly interchangeable. As you reallocate more and more resources toward one good, you must eventually use resources increasingly ill-suited to producing it, so each extra unit costs more of the other good — increasing opportunity cost.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ── Lesson 4: Economic Systems ───────────────────────────────────────────────
  {
    id: 'f1-l4',
    moduleId: 'f1-thinking',
    title: 'Economic Systems: Markets, Command, and Mixed',
    description:
      'Compare how different societies answer the three fundamental questions and why no pure system exists in practice.',
    order: 4,
    estimatedMinutes: 25,
    tags: ['economic-systems', 'markets'],
    content: {
      conceptualExplanation: `## Economic Systems: Markets, Command, and Mixed

Every society must answer the same three fundamental economic questions — what to produce, how to produce it, and for whom to produce it. The answer lies in its **economic system**: the set of institutions, rules, and mechanisms a society uses to organise production and distribution. Economists traditionally identify three broad systems: the market economy, the command economy, and the mixed economy.

In a **market economy** (also called a free-market or capitalist economy), these three questions are answered primarily through the **price mechanism** — the interaction of supply and demand in voluntary exchanges. Prices act as signals: a rising price tells producers that more of a good is wanted and rewards them for supplying it; a falling price signals the opposite. Resources flow toward their most valued uses through millions of decentralised decisions made by consumers and firms pursuing their own interests. Adam Smith called this the "invisible hand." Strengths of the market system include efficiency, innovation, and consumer choice. Weaknesses include inequality, market failures (such as pollution or public goods under-provision), and instability.

In a **command economy** (also called a planned or centrally planned economy), the government — usually the state — makes most or all decisions about what to produce, how to produce it, and who receives the output. The classic examples are the Soviet Union under Stalin and Maoist China. Central planners set production targets for factories, allocate resources, and set prices administratively rather than allowing markets to operate. Potential advantages include the ability to pursue social goals (equality, rapid industrialisation) and to avoid the chaos of market cycles. In practice, command economies have struggled with information problems (planners cannot gather and process the information that millions of market prices convey) and weak incentives for innovation and quality.

### Mixed Economies: The Real World

In reality, **no pure market or command economy exists**. Every real-world economy is a **mixed economy** — one in which both market forces and government intervention play roles. The United States relies heavily on markets but regulates industries, provides public education and healthcare programmes, and levies taxes. Scandinavian countries combine market mechanisms with expansive welfare states. China maintains significant state ownership alongside vibrant private markets. The question is never "market or government?" but rather "what is the right *mix* for this society at this time?" — and that question is at the heart of most real political and economic debates.`,

      prerequisiteRecap: `The PPF showed us that every economy faces hard trade-offs between competing goods, and that a point inside the curve signals wasted resources. Now we ask: what institutional arrangements — markets, governments, or a mix — determine which point on the PPF a society actually chooses to occupy?`,

      recallQuestions: [
        {
          id: 'f1-l4-recall-1',
          type: 'mcq' as const,
          question:
            'On a Production Possibilities Frontier diagram, what does a point inside (below) the curve represent?',
          options: [
            'The economy is producing at maximum efficiency.',
            'The economy is producing an unattainable combination of goods.',
            'Resources are unemployed or misallocated — the economy is inefficient.',
            'The economy has experienced economic growth.',
          ],
          correctAnswer: 2,
          explanation:
            'A point inside the PPF indicates productive inefficiency: some resources are idle or poorly allocated, so the economy could produce more of both goods by using its resources fully and effectively.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f1-l4-recall-2',
          type: 'mcq' as const,
          question:
            'What causes the PPF to shift outward rather than simply move along the existing curve?',
          options: [
            'A decision to produce more of one good and less of another.',
            'An increase in the quantity or quality of resources, or improved technology.',
            'The law of increasing opportunity cost.',
            'A change in consumer preferences toward one of the two goods.',
          ],
          correctAnswer: 1,
          explanation:
            'An outward shift of the PPF represents economic growth — the economy can now produce more of all goods because of more or better resources (labour, capital, technology). Moving along the PPF is a trade-off within existing capacity.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `When Venezuela's government took control of food production and set prices below market rates in the 2010s, it was applying command-economy principles. The result — empty supermarket shelves despite the country sitting on the world's largest oil reserves — became a textbook example of the information and incentive problems that plague centrally planned systems. Meanwhile, Singapore's government owns major companies and directs housing policy, yet consistently ranks among the world's most economically free and prosperous nations. The lesson: labels like "market" and "command" matter far less than the quality of the specific institutions and policies a country chooses.`,

      vocabulary: [
        {
          term: 'Market economy',
          definition:
            'An economic system in which the three fundamental questions are answered primarily through the price mechanism — the interaction of supply and demand in free markets.',
          example:
            'In the US, most decisions about what coffee shops produce, how they produce it, and who buys it are determined by market prices and voluntary exchange.',
        },
        {
          term: 'Command economy',
          definition:
            'An economic system in which the government (central authority) makes most decisions about production, resource allocation, and distribution of output.',
          example:
            'The Soviet Union\'s Gosplan agency set annual production targets for steel, grain, and consumer goods across the entire economy.',
        },
        {
          term: 'Mixed economy',
          definition:
            'An economic system combining elements of both market and command economies; all real-world economies are mixed to varying degrees.',
          example:
            'The UK has private markets for most goods but also the government-run National Health Service and extensive regulation of financial markets.',
        },
        {
          term: 'Price mechanism',
          definition:
            'The system by which rising and falling prices automatically coordinate the decisions of buyers and sellers, allocating resources to their most valued uses.',
          example:
            'When a drought cuts wheat supply, rising wheat prices signal to farmers to grow more wheat and to bakers to use less of it — without any central coordinator.',
        },
      ],

      deeperDive: `The debate between market and command approaches is not merely academic — it defined much of the 20th century's geopolitical conflict. The collapse of the Soviet Union in 1991 is widely interpreted as evidence of the limits of central planning: the information problem (identified by Friedrich Hayek as early as 1945) meant that no planning authority could replicate the billions of simultaneous signals that decentralised price systems generate.

Yet the market system is not without its critics. The 2008 global financial crisis demonstrated that even sophisticated market economies can produce catastrophic instability. Market economies tend to generate inequality, under-provide public goods (like clean air or national defence), and overproduce goods with negative externalities (like carbon emissions). This is precisely why even the most market-oriented governments intervene — through regulation, taxation, spending, and provision of public services. Understanding *when and why* markets work well, and *when and why* they fail, is one of the central questions of economics.`,

      commonMisconceptions: [
        'The United States is a pure free-market economy. The US government spends roughly 35% of GDP, regulates industries extensively, and provides public goods such as national defence, roads, and public schools — making it unmistakably a mixed economy.',
        'Command economies are always inefficient. While historical command economies had serious problems, the degree of central planning and the quality of institutions both matter enormously. Some degree of planning exists in every economy.',
        'The "invisible hand" means markets always produce the best possible outcome for society. Adam Smith\'s insight was about competitive markets under certain conditions. When those conditions fail — monopoly power, externalities, information asymmetry — market outcomes can be far from socially optimal.',
      ],

      examinerTip: `When comparing economic systems, always evaluate *both* advantages and disadvantages of each, and link your argument to the three fundamental questions (what, how, for whom). Examiners reward balanced analysis over one-sided advocacy. Avoid the trap of dismissing command economies entirely — acknowledge what they *can* achieve (equality of outcome, coordinated industrialisation) before explaining their limitations.`,

      didYouKnow: `North Korea and Cuba are among the last countries that still operate economies close to the command model — yet even they have allowed informal or semi-formal market activity to emerge over time, illustrating how difficult it is to suppress market forces entirely when people have unmet wants and something to trade.`,
    },

    flashcards: [
      {
        id: 'f1-l4-fc1',
        front: 'What are the three fundamental economic questions every society must answer?',
        back: '1. What to produce? 2. How to produce it? 3. For whom to produce it? The economic system determines how these questions are answered.',
        tags: ['economic-systems', 'foundations'],
      },
      {
        id: 'f1-l4-fc2',
        front: 'How does a market economy answer the three fundamental questions?',
        back: 'Through the price mechanism: supply and demand in free markets signal what to produce, which production methods are cost-effective, and who can afford to buy the output.',
        tags: ['economic-systems', 'markets'],
      },
      {
        id: 'f1-l4-fc3',
        front: 'What is the main information problem facing command economies?',
        back: 'Central planners cannot gather or process the vast amount of dispersed information that millions of price signals automatically convey in a market system, leading to misallocation of resources.',
        tags: ['economic-systems'],
      },
      {
        id: 'f1-l4-fc4',
        front: 'Why do all real-world economies qualify as mixed economies?',
        back: 'Because every economy combines some degree of market activity (private enterprise, voluntary exchange) with some degree of government intervention (regulation, public spending, taxation). No purely market or purely command economy exists in practice.',
        tags: ['economic-systems', 'markets'],
      },
      {
        id: 'f1-l4-fc5',
        front: 'What is the "invisible hand"?',
        back: 'Adam Smith\'s metaphor for the way self-interested individuals acting in competitive markets inadvertently promote the broader good of society — as if guided by an unseen force — through the price mechanism.',
        tags: ['economic-systems', 'markets'],
      },
    ],

    quiz: [
      {
        id: 'f1-l4-q1',
        type: 'mcq',
        question:
          'In a pure market economy, the question "For whom to produce?" is primarily answered by:',
        options: [
          'Government planners who assess the needs of each social group.',
          'The ability and willingness of consumers to pay — determined by income and prices.',
          'A committee of firms that agree on fair distribution of output.',
          'Tradition and historical patterns of resource ownership.',
        ],
        correctAnswer: 1,
        explanation:
          'In a market economy, goods go to those who can and are willing to pay the market price. Distribution is therefore determined by income (purchasing power) and relative prices — not by government planning or tradition.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q2',
        type: 'mcq',
        question:
          'Which of the following is the most significant disadvantage of a command economy identified by economists?',
        options: [
          'Command economies always produce too much output, causing inflation.',
          'Central planners lack the information that market prices automatically generate, leading to resource misallocation.',
          'Command economies cannot produce public goods such as national defence.',
          'Workers in command economies are paid wages that are too high, reducing incentives to work.',
        ],
        correctAnswer: 1,
        explanation:
          'Friedrich Hayek\'s "knowledge problem" is the classic critique: no central authority can gather and process the dispersed, local information encoded in millions of market prices. This leads to chronic mismatches between what is planned and what consumers actually need.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q3',
        type: 'mcq',
        question: 'Which statement about mixed economies is most accurate?',
        options: [
          'Mixed economies are found only in developing countries transitioning between systems.',
          'All real-world economies are mixed, combining market forces with varying degrees of government intervention.',
          'A mixed economy always performs worse than a pure market economy.',
          'Mixed economies exist only where private and public firms compete directly in the same industry.',
        ],
        correctAnswer: 1,
        explanation:
          'Every functioning economy — from the United States to Sweden to Singapore — combines markets with government activity. The differences are in the degree and type of intervention, not in whether intervention exists at all.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ── Lesson 5: Thinking at the Margin ────────────────────────────────────────
  {
    id: 'f1-l5',
    moduleId: 'f1-thinking',
    title: 'Thinking at the Margin',
    description:
      'Introduce marginal analysis — why rational decision-making compares marginal benefit to marginal cost, not totals or averages.',
    order: 5,
    estimatedMinutes: 20,
    tags: ['marginal-analysis', 'rational-choice'],
    content: {
      conceptualExplanation: `## Thinking at the Margin

One of the most distinctive and powerful habits of economic thinking is analysing decisions **at the margin**. "At the margin" simply means "one more unit" — one more hour of work, one more slice of pizza, one more unit of output, one more dollar of spending. Economists argue that rational decision-makers do not ask "Should I work or not?" or "Should I eat or not?" — they ask "Should I work *one more hour* given what I would gain and what it would cost me?" This incremental approach is the essence of **marginal analysis**.

The key tool is comparing **marginal benefit (MB)** — the additional benefit gained from one more unit — to **marginal cost (MC)** — the additional cost incurred by producing or consuming that extra unit. The rational decision rule is simple: **take an action if MB ≥ MC; stop when MB = MC**. If the marginal benefit of one more unit exceeds its marginal cost, doing more adds to net benefit. If marginal cost exceeds marginal benefit, doing more subtracts from net benefit. The optimum is reached where the two are equal.

### Why Totals and Averages Can Mislead

A common mistake is to use total or average values to make marginal decisions. Suppose you have already eaten three slices of pizza and are deciding whether to have a fourth. The *total* enjoyment from all four slices might be enormous, and the *average* enjoyment per slice might be high — but neither of those figures tells you whether *this* fourth slice is worth eating. What matters is the marginal benefit of the fourth slice compared to its marginal cost (its price, or the discomfort of overeating). This is why economists say sunk costs — costs already incurred — should be ignored in forward-looking decisions. Only future marginal costs and benefits are relevant.

### Marginal Thinking in Everyday and Policy Decisions

Marginal analysis applies far beyond pizza. A firm deciding how many workers to hire asks: does the additional revenue this worker generates (marginal revenue product) exceed the wage I must pay (marginal cost)? A government deciding whether to build one more mile of motorway asks: does the additional value to road users (marginal benefit) exceed the construction and environmental cost (marginal cost)? A student deciding whether to study one more hour asks: does the expected improvement in my grade (marginal benefit) justify the time and effort (marginal cost)? In every case, the margin — not the total — is what drives the rational choice.`,

      realWorldHook: `Airlines use marginal thinking brilliantly. Once a flight is scheduled and the fixed costs (aircraft, crew, gate fees) are paid, the marginal cost of letting one more passenger on board is tiny — just a packet of peanuts and a fraction of fuel. So airlines will sell last-minute seats at steep discounts rather than fly with empty seats, because any price above marginal cost adds to profit. This is also why you can sometimes get a transatlantic flight for the price of a cinema ticket if you book at the last moment. Marginal analysis, not average cost, drives the pricing decision.`,

      vocabulary: [
        {
          term: 'Marginal analysis',
          definition:
            'The process of making decisions by comparing the additional (marginal) benefit of an action with its additional (marginal) cost.',
          example:
            'A baker uses marginal analysis when deciding whether to bake a 101st loaf: if the extra revenue exceeds the extra cost of ingredients and labour, baking it adds to profit.',
        },
        {
          term: 'Marginal benefit (MB)',
          definition:
            'The additional benefit — satisfaction, revenue, or utility — gained from consuming or producing one more unit of a good or service.',
          example:
            'The marginal benefit of a fifth cup of coffee is the extra alertness it provides, which is typically lower than the benefit of the first cup.',
        },
        {
          term: 'Marginal cost (MC)',
          definition:
            'The additional cost incurred by producing or consuming one more unit of a good or service.',
          example:
            'If producing 100 widgets costs £500 and producing 101 costs £506, the marginal cost of the 101st widget is £6.',
        },
        {
          term: 'Sunk cost',
          definition:
            'A cost that has already been incurred and cannot be recovered; rational decision-makers ignore sunk costs and focus only on future marginal costs and benefits.',
          example:
            'If you paid £20 for a concert ticket and feel ill on the night, the £20 is a sunk cost — your decision to attend or stay home should be based on your current wellbeing, not the money already spent.',
        },
      ],

      deeperDive: `The power of marginal analysis extends to some surprising places. The field of environmental economics uses it to design efficient pollution policy: the optimal level of pollution abatement is where the marginal cost of reducing one more unit of pollution equals the marginal benefit (damage avoided). The field of healthcare uses it to evaluate whether an additional medical test is worth its cost. In each case, focusing on the margin prevents over-provision (doing something whose costs exceed its benefits) and under-provision (stopping short of actions that would add value).

It is also worth understanding the relationship between marginal and average values. When the marginal value is above the average, the average rises; when the marginal is below the average, the average falls. This is a pure mathematical relationship — like how a student's average grade rises when a new mark above the current average is added, and falls when a mark below the average is added. This relationship is crucial in cost analysis (marginal cost curves intersect average cost curves at their minima) and in understanding diminishing marginal returns.`,

      commonMisconceptions: [
        'Rational people always maximise total benefit, so they should always do more of anything they enjoy. Rational decision-making maximises *net* benefit (total benefit minus total cost), which means stopping when marginal cost exceeds marginal benefit — not simply doing as much as possible.',
        'Sunk costs should influence future decisions because "you\'ve already paid for it." Sunk costs are gone regardless of what you do next. Including them in future decisions leads to the "sunk cost fallacy" — continuing a losing course of action just because of past investment.',
        'Marginal cost is always lower than average cost. Marginal cost can be above or below average cost depending on the stage of production. Marginal cost equals average cost at the minimum point of the average cost curve.',
      ],

      examinerTip: `When answering questions about marginal analysis, always state the decision rule explicitly: "A rational agent will continue as long as marginal benefit exceeds marginal cost, and stop where MB = MC." If you are given data in a table, calculate the marginal values column by column before drawing conclusions — never rely on totals or averages to make a marginal decision.`,

      didYouKnow: `The concept of "marginal utility" — the additional satisfaction from one more unit of a good — was independently developed in the early 1870s by three economists in three different countries: William Stanley Jevons (UK), Carl Menger (Austria), and Léon Walras (France/Switzerland). This simultaneous discovery is known as the "Marginal Revolution" and fundamentally transformed economics from a discipline focused on total value to one focused on incremental, margin-based reasoning.`,
    },

    flashcards: [
      {
        id: 'f1-l5-fc1',
        front: 'What is the rational decision rule in marginal analysis?',
        back: 'Take an action if marginal benefit (MB) ≥ marginal cost (MC). Continue expanding until MB = MC. Stop if MC > MB, as doing more would reduce net benefit.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
      {
        id: 'f1-l5-fc2',
        front: 'What is marginal cost?',
        back: 'The additional cost of producing or consuming one more unit of a good or service. It is calculated as the change in total cost when output increases by one unit.',
        tags: ['marginal-analysis'],
      },
      {
        id: 'f1-l5-fc3',
        front: 'What is a sunk cost, and why should it be ignored?',
        back: 'A sunk cost is money or resources already spent that cannot be recovered. It should be ignored in future decisions because it cannot be changed — only future marginal costs and benefits are relevant.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
      {
        id: 'f1-l5-fc4',
        front: 'Why does marginal benefit typically decrease as consumption increases?',
        back: 'Because of diminishing marginal utility: each additional unit of a good provides less extra satisfaction than the previous one, as the most pressing needs are satisfied first.',
        tags: ['marginal-analysis'],
      },
      {
        id: 'f1-l5-fc5',
        front: 'How does an airline apply marginal thinking to last-minute ticket pricing?',
        back: 'Once a flight\'s fixed costs are covered, the marginal cost of one more passenger is very low (minimal fuel and snacks). Any ticket price above that marginal cost adds to profit, so airlines discount unsold seats heavily rather than fly empty.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
    ],

    quiz: [
      {
        id: 'f1-l5-q1',
        type: 'mcq',
        question:
          'A student has already spent three hours revising for an exam. She is deciding whether to study a fourth hour. According to marginal analysis, she should study the fourth hour if:',
        options: [
          'Her total revision time will be four hours, which is more than most students.',
          'The average benefit per hour of revision is still positive.',
          'The expected improvement in her grade from the fourth hour exceeds the opportunity cost of that hour.',
          'She has already invested three hours and should not waste that effort.',
        ],
        correctAnswer: 2,
        explanation:
          'Marginal analysis compares the marginal benefit (improvement in grade from the 4th hour) to the marginal cost (opportunity cost of the time). Options A and B rely on total and average values, which are irrelevant to the marginal decision. Option D is the sunk cost fallacy.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q2',
        type: 'mcq',
        question:
          'A firm is producing 500 units per day. The marginal cost of the 501st unit is £12, and the marginal revenue (benefit) of selling it is £9. The firm should:',
        options: [
          'Produce the 501st unit, because marginal revenue is still positive.',
          'Produce the 501st unit if total profit is positive.',
          'Not produce the 501st unit, because marginal cost exceeds marginal benefit.',
          'Not produce the 501st unit, because the average cost is too high.',
        ],
        correctAnswer: 2,
        explanation:
          'When MC (£12) > MB (£9), producing the extra unit costs more than it earns, reducing net profit by £3. The rational decision is to stop at 500 units. Whether total profit is positive is irrelevant to the marginal decision.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q3',
        type: 'mcq',
        question:
          'James paid £50 for a non-refundable gym membership. After three weeks he finds he dislikes the gym. According to economic reasoning, James should:',
        options: [
          'Continue going to the gym to get value from the £50 already spent.',
          'Decide whether to keep going based on the future benefit of gym use versus the opportunity cost of his time.',
          'Stop going immediately since all future gym visits have a marginal cost above zero.',
          'Go to the gym exactly until the total benefit equals £50 to break even.',
        ],
        correctAnswer: 1,
        explanation:
          'The £50 is a sunk cost — it is gone and should not influence future decisions. James should compare only the marginal benefit of each future gym visit (health, enjoyment) against the marginal cost (time, discomfort). If MB < MC, he should stop going.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },
]
