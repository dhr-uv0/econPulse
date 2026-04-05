import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f5-government',
  title: 'The Role of Government in Markets',
  description: 'Learn why markets sometimes fail and how governments respond with taxes, subsidies, price controls, and regulation.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 5,
  estimatedHours: 2,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 1 — Market Failure: An Overview
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f5-l1',
    moduleId: 'f5-government',
    title: 'Market Failure — An Overview',
    description:
      'Define market failure as situations where free markets misallocate resources; preview the four main causes.',
    order: 1,
    estimatedMinutes: 20,
    tags: ['market-failure', 'externalities', 'public-goods'],
    content: {
      realWorldHook:
        'In 2010 the Deepwater Horizon oil spill released nearly five million barrels of oil into the Gulf of Mexico. BP made decisions that were profitable for the company, yet the costs borne by fishers, coastal communities, and the ecosystem were enormous. No market transaction compensated those harmed. This gap — between what the market delivered and what society needed — is the essence of market failure.',
      prerequisiteRecap: `The previous module established that competitive markets maximise total surplus (consumer plus producer surplus) at the allocative efficiency condition MB = MC, with any deviation creating deadweight loss. Market failure arises precisely when the free market fails to reach this socially optimal outcome — producing too much or too little — so understanding what total surplus is and why it matters is the essential foundation for this module.`,

      recallQuestions: [
        {
          id: 'f5-l1-recall-1',
          type: 'mcq' as const,
          question: 'In a competitive market, total surplus is maximised at equilibrium. What does "deadweight loss" represent when a market moves away from this equilibrium?',
          options: [
            'The tax revenue transferred from consumers and producers to the government.',
            'The surplus transferred from consumers to producers due to a price rise.',
            'The total surplus that is permanently destroyed because mutually beneficial trades no longer take place.',
            'The fall in consumer surplus alone when prices rise above equilibrium.',
          ],
          correctAnswer: 2,
          explanation: 'Deadweight loss is a genuine destruction of value, not a transfer. It represents the total surplus that would have been created by trades between willing buyers and sellers but no longer occurs because the market is not at its efficient equilibrium. Neither consumers nor producers receive this lost welfare — it simply disappears.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'A free market works beautifully when prices send accurate signals about scarcity and value. Buyers and sellers, each acting in self-interest, coordinate through the price mechanism to allocate resources efficiently. Economists call this outcome allocative efficiency: output sits at the level where the additional benefit of one more unit exactly equals its additional cost. But this ideal breaks down in predictable ways.\n\nMarket failure occurs whenever the free market, left to its own devices, produces a quantity of a good or service that diverges from the socially optimal quantity. The market is still functioning — buyers and sellers still transact — but the resulting allocation wastes potential welfare. Economists identify four main categories of market failure: externalities, public goods, information asymmetry, and market power (monopoly).\n\nExternalities arise when the actions of a buyer or seller impose costs or confer benefits on third parties who are not part of the transaction. If the third-party effect is negative (like pollution), the market over-produces; if positive (like education), it under-produces. Because the price fails to capture these spillover effects, the market signal is distorted.\n\nPublic goods and information failures complete the picture. Some goods are inherently difficult to sell because excluding non-payers is impossible or because one person\'s use does not reduce availability for others. Private firms have little incentive to supply such goods even when society greatly values them. Meanwhile, when one party to a transaction knows far more than the other — a dynamic called information asymmetry — markets for insurance, healthcare, and used cars can collapse or deliver poor outcomes. Together these four causes explain why governments intervene, and they form the roadmap for this entire module.',
      vocabulary: [
        {
          term: 'Market failure',
          definition:
            'A situation in which the free market allocates resources inefficiently, producing an outcome that diverges from the social optimum.',
          example:
            'A factory that pollutes a river without paying for the damage creates a market failure because the cost of pollution is not reflected in the price of the factory\'s output.',
        },
        {
          term: 'Allocative efficiency',
          definition:
            'The condition in which resources are distributed such that the last unit produced generates marginal benefit equal to its marginal cost, maximising total welfare.',
          example:
            'A competitive market for wheat achieves allocative efficiency when the price of wheat equals the cost of producing one additional tonne.',
        },
        {
          term: 'Social optimum',
          definition:
            'The quantity of output that maximises total welfare for society, accounting for all costs and benefits including those not captured by market prices.',
          example:
            'The social optimum for car journeys is fewer than the market equilibrium number because driving imposes congestion and pollution costs on non-drivers.',
        },
        {
          term: 'Information asymmetry',
          definition:
            'A situation in which one party to a transaction possesses more or better information than the other, potentially leading to adverse selection or moral hazard.',
          example:
            'A used-car seller knows whether a vehicle has hidden faults; the buyer does not, which can drive quality cars off the market as buyers only offer low prices.',
        },
      ],
      deeperDive:
        'Economists measure the cost of market failure using the concept of deadweight loss — the reduction in total surplus (consumer plus producer) that results when output is not at the socially optimal level. On a supply-and-demand diagram, deadweight loss appears as a triangle between the social supply or demand curve and the market equilibrium point. The larger this triangle, the more severe the market failure and the greater the potential gain from corrective government policy.\n\nIt is important to recognise that market failure does not automatically justify government intervention. Government policy carries its own risks of failure — bureaucratic inefficiency, unintended consequences, rent-seeking by special interests, and the difficulty of measuring external costs precisely. The case for intervention is strongest when the deadweight loss of market failure is large, the information needed to design policy is available, and the cost of intervention is low. This cost–benefit logic underlies every policy tool examined in the lessons that follow.',
      commonMisconceptions: [
        'Market failure does not mean a market has "broken down" or stopped working. Goods are still bought and sold; the problem is that the resulting quantity is not socially optimal.',
        'Not every bad market outcome is a market failure. High prices due to genuine scarcity, or businesses that earn low profits, reflect the market working correctly — not failing.',
        'Market failure does not automatically prove that government intervention will improve things. Policy must be evaluated on whether its benefits exceed its costs and risks of government failure.',
      ],
      examinerTip:
        'In any essay or data-response question about market failure, always state clearly: (1) what the market failure is, (2) whether the market over- or under-produces relative to the social optimum, and (3) what government response might correct it. Examiners award marks for explicitly linking cause to policy recommendation.',
      didYouKnow:
        'The term "market failure" was popularised by economist Francis Bator in a landmark 1958 article in the Quarterly Journal of Economics, where he systematically catalogued the ways competitive markets could fall short of efficiency. His framework remains the backbone of welfare economics taught in schools and universities worldwide.',
    },
    flashcards: [
      {
        id: 'f5-l1-fc1',
        front: 'What is market failure?',
        back: 'A situation in which the free market misallocates resources, producing an output level that diverges from the social optimum and results in a net welfare loss.',
        hint: 'Think about when prices send the wrong signals.',
        tags: ['market-failure'],
      },
      {
        id: 'f5-l1-fc2',
        front: 'What are the four main causes of market failure?',
        back: '1. Externalities (positive and negative)\n2. Public goods (non-excludable, non-rival)\n3. Information asymmetry\n4. Market power (monopoly / imperfect competition)',
        hint: 'Remember: E-P-I-M.',
        tags: ['market-failure'],
      },
      {
        id: 'f5-l1-fc3',
        front: 'What is allocative efficiency?',
        back: 'The condition where resources are allocated so that marginal benefit equals marginal cost for the last unit produced, maximising total social welfare.',
        hint: 'MB = MC at the optimal output.',
        tags: ['market-failure', 'efficiency'],
      },
      {
        id: 'f5-l1-fc4',
        front: 'What is deadweight loss?',
        back: 'The reduction in total surplus (consumer plus producer surplus) caused by a market not operating at its socially optimal output level.',
        hint: 'It is shown as a triangle on a supply-and-demand diagram.',
        tags: ['market-failure', 'deadweight-loss'],
      },
      {
        id: 'f5-l1-fc5',
        front: 'Why does market failure not automatically justify government intervention?',
        back: 'Because government intervention itself can fail through inefficiency, poor information, unintended consequences, or rent-seeking, potentially making outcomes worse than the original market failure.',
        hint: 'Think about government failure as the counterpart to market failure.',
        tags: ['market-failure', 'government-failure'],
      },
    ],
    quiz: [
      {
        id: 'f5-l1-q1',
        type: 'mcq',
        question: 'Which of the following best defines market failure?',
        options: [
          'A situation where the free market produces a quantity that differs from the socially optimal level, resulting in a welfare loss.',
          'A situation where a market completely stops functioning and no goods are traded.',
          'A situation where the government sets prices above the market equilibrium.',
          'A situation where consumers are unable to afford a good at its market price.',
        ],
        correctAnswer: 0,
        explanation:
          'Market failure refers to allocative inefficiency — the market still operates but produces too much or too little relative to the social optimum, creating deadweight loss. The market does not need to collapse for failure to occur.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l1-q2',
        type: 'mcq',
        question: 'Which of the following is NOT one of the four main causes of market failure?',
        options: [
          'High market prices caused by genuine resource scarcity.',
          'Negative externalities such as pollution.',
          'Public goods that are non-excludable and non-rival.',
          'Information asymmetry between buyers and sellers.',
        ],
        correctAnswer: 0,
        explanation:
          'High prices due to genuine scarcity reflect the market working correctly — they signal that a resource is scarce and encourage conservation and substitution. This is not a market failure. The other three options are recognised causes of market failure.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l1-q3',
        type: 'mcq',
        question:
          'A factory legally dumps waste into a river, harming local fishers. This is best described as an example of:',
        options: [
          'A negative externality leading to over-production relative to the social optimum.',
          'Allocative efficiency because the factory is minimising its private costs.',
          'A public good problem because the river is non-excludable.',
          'Information asymmetry between the factory and its customers.',
        ],
        correctAnswer: 0,
        explanation:
          'The factory imposes costs on third parties (fishers) not reflected in its production costs or output price. This negative externality means the factory over-produces from society\'s perspective, a classic example of market failure through negative externalities.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 2 — Externalities and Corrective Policy
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f5-l2',
    moduleId: 'f5-government',
    title: 'Externalities and Corrective Policy',
    description:
      'Define positive and negative externalities, show the welfare triangles of deadweight loss, and explain Pigouvian taxes and subsidies.',
    order: 2,
    estimatedMinutes: 35,
    tags: ['externalities', 'Pigouvian-tax', 'deadweight-loss'],
    content: {
      realWorldHook:
        'Every time someone lights a cigarette in a shared space, nearby non-smokers inhale second-hand smoke. The smoker pays for the cigarettes — but not for the health costs imposed on others. Economists Arthur Pigou and later colleagues argued that the solution is elegantly simple: add a tax equal to that external cost, so the price the smoker faces reflects the full social cost. Today, cigarette excise taxes in many countries run to several dollars per pack, and the evidence shows they reduce consumption significantly. This is Pigouvian policy in action.',
      prerequisiteRecap: `The previous lesson introduced market failure as any situation where the free market produces a quantity that diverges from the socially optimal level, creating deadweight loss, and identified four main causes including externalities. This lesson deepens the externality category, showing precisely why cost-benefit spillovers to third parties distort the price mechanism and how Pigouvian taxes and subsidies correct them.`,

      recallQuestions: [
        {
          id: 'f5-l2-recall-1',
          type: 'mcq' as const,
          question: 'Which of the following is NOT one of the four main causes of market failure identified in the overview lesson?',
          options: [
            'Externalities (positive and negative spillover effects).',
            'High market prices resulting from genuine scarcity of resources.',
            'Public goods that are non-excludable and non-rival.',
            'Information asymmetry between buyers and sellers.',
          ],
          correctAnswer: 1,
          explanation: 'High prices due to genuine scarcity reflect the market working correctly — prices signal that a resource is scarce and encourage conservation and substitution. This is not a market failure. The four recognised causes are externalities, public goods, information asymmetry, and market power (monopoly).',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f5-l2-recall-2',
          type: 'mcq' as const,
          question: 'Market failure is best described as a situation where:',
          options: [
            'The market completely stops functioning and no goods are traded.',
            'The free market allocates resources inefficiently, producing an output level that diverges from the social optimum.',
            'The government sets prices above the market equilibrium.',
            'Consumers cannot afford goods at their market price.',
          ],
          correctAnswer: 1,
          explanation: 'Market failure does not mean the market has broken down — goods are still bought and sold. It means the resulting quantity is not socially optimal: either too much or too little is produced relative to the level that maximises total welfare, creating deadweight loss.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'An externality exists whenever the production or consumption of a good affects parties outside the market transaction, and those effects are not captured in the market price. When the effect is harmful — pollution, noise, congestion, second-hand smoke — it is a negative externality. When it is beneficial — vaccinations that protect the unvaccinated, education that produces a more informed citizenry, research whose findings spill over to other firms — it is a positive externality.\n\nFor negative externalities in production, the firm\'s private marginal cost (PMC) is below the true social marginal cost (SMC), which includes the external damage. Because the firm ignores the external cost, it produces more than the social optimum. On a diagram, SMC lies above the supply curve (which reflects PMC). The market equilibrium sits where demand crosses PMC, generating a quantity above the socially optimal point where demand crosses SMC. The area between these two equilibria — the deadweight loss triangle — represents welfare destroyed by over-production.\n\nFor positive externalities in consumption, the private marginal benefit (PMB) understates the true social marginal benefit (SMB). Buyers only count the benefit to themselves, ignoring the spillover to others. The market under-produces relative to the social optimum, again creating a deadweight loss triangle, this time representing the net welfare gain that is never realised.\n\nCorrective policy aims to close the gap between private and social incentives. A Pigouvian tax on a negative externality raises the producer\'s effective cost by exactly the amount of the external damage per unit, shifting the supply curve up until it aligns with SMC and driving the market to the social optimum. A Pigouvian subsidy on a positive externality lowers the buyer\'s effective price or raises the producer\'s effective revenue, shifting the market toward the socially optimal higher quantity. In theory, these instruments eliminate the deadweight loss entirely. In practice, accurately measuring external costs and benefits is extremely difficult.',
      vocabulary: [
        {
          term: 'Negative externality',
          definition:
            'A cost imposed on a third party by the production or consumption of a good, not reflected in the market price.',
          example:
            'A cement plant emitting dust that increases respiratory illness costs for nearby residents — costs the plant does not pay.',
        },
        {
          term: 'Positive externality',
          definition:
            'A benefit enjoyed by a third party as a result of the production or consumption of a good, not reflected in the market price.',
          example:
            'A household installing a rooftop garden reduces urban heat and improves air quality for neighbours who pay nothing for these benefits.',
        },
        {
          term: 'Pigouvian tax',
          definition:
            'A per-unit tax set equal to the marginal external cost of a negative externality, designed to align private incentives with social costs and restore the social optimum.',
          example:
            'A carbon tax of £50 per tonne of CO₂ emissions that forces firms to internalise the climate damage of burning fossil fuels.',
        },
        {
          term: 'Pigouvian subsidy',
          definition:
            'A per-unit payment to producers or consumers of a good with positive externalities, designed to increase output toward the social optimum.',
          example:
            'A government grant covering half the cost of flu vaccinations, encouraging more people to get vaccinated and reducing transmission to vulnerable non-vaccinated individuals.',
        },
      ],
      deeperDive:
        'Ronald Coase offered an alternative perspective in his 1960 paper "The Problem of Social Cost." He argued that if property rights are well-defined and transaction costs are zero, private parties can negotiate their way to the social optimum without government intervention. A factory and its downstream fishing village could reach an agreement — perhaps the factory pays the fishers compensation, or the fishers pay the factory to reduce pollution — that internalises the externality privately. This "Coase theorem" is theoretically elegant but practically limited: in the real world, transaction costs are rarely zero, affected parties are often numerous and anonymous (think global carbon emissions), and property rights over resources like clean air are poorly defined.\n\nThis is why Pigouvian taxes remain a central policy tool. Carbon pricing schemes — whether as direct carbon taxes (as in Canada and Scandinavia) or cap-and-trade systems (as in the EU Emissions Trading System) — are modern applications of Pigou\'s insight. Economists across the political spectrum generally regard carbon pricing as one of the most cost-effective ways to reduce greenhouse gas emissions, precisely because it harnesses market incentives rather than fighting them.',
      commonMisconceptions: [
        'A Pigouvian tax does not aim to eliminate the activity entirely — it aims to reduce it to the socially optimal level. Some pollution or some driving may still be welfare-maximising; the tax ensures society gets the right amount, not zero.',
        'Positive externalities do not mean a good is free. The market does provide goods with positive externalities — just less than the socially optimal quantity. Education, for instance, is privately purchased by millions, but government subsidies push enrolment toward the social optimum.',
        'Externalities are not the same as public goods. A good can have externalities (like a loud concert next door) while still being excludable and rival. Public goods are a separate category of market failure defined by non-excludability and non-rivalry.',
      ],
      examinerTip:
        'When drawing externality diagrams, always label both the PMC/SMC or PMB/SMB curves clearly and shade the deadweight loss triangle. State explicitly whether the market over- or under-produces and by how much in relation to the social optimum. For the corrective policy, show the tax or subsidy shifting the relevant curve to the social optimum. Examiners give credit for the diagram, the explanation, and a brief evaluation of the policy\'s limitations.',
      didYouKnow:
        'Arthur Pigou never used the phrase "Pigouvian tax" himself — the term was coined by later economists in his honour. His 1920 book The Economics of Welfare laid out the case for corrective taxation and subsidies so clearly that the framework bears his name to this day, over a century later.',
    },
    flashcards: [
      {
        id: 'f5-l2-fc1',
        front: 'What is a negative externality?',
        back: 'A cost imposed on a third party who is not involved in the market transaction, not reflected in the market price — causing the market to over-produce relative to the social optimum.',
        hint: 'Think pollution — someone outside the transaction bears the cost.',
        tags: ['externalities'],
      },
      {
        id: 'f5-l2-fc2',
        front: 'What is a positive externality?',
        back: 'A benefit enjoyed by a third party who is not involved in the market transaction, not reflected in the market price — causing the market to under-produce relative to the social optimum.',
        hint: 'Think vaccination — non-vaccinated people benefit when others get vaccinated.',
        tags: ['externalities'],
      },
      {
        id: 'f5-l2-fc3',
        front: 'How does a Pigouvian tax correct a negative externality?',
        back: 'It adds a per-unit tax equal to the marginal external cost, raising producers\' effective costs so the supply curve shifts up to the social marginal cost curve, reducing output to the social optimum.',
        hint: 'The tax makes the private cost equal to the social cost.',
        tags: ['Pigouvian-tax', 'externalities'],
      },
      {
        id: 'f5-l2-fc4',
        front: 'What does deadweight loss represent in an externality diagram?',
        back: 'The welfare loss (net loss of total surplus) caused by the market producing at a quantity different from the social optimum — shown as a triangle between the market equilibrium and the socially optimal quantity.',
        hint: 'It is the welfare that is lost because the market fails.',
        tags: ['deadweight-loss', 'externalities'],
      },
      {
        id: 'f5-l2-fc5',
        front: 'What is the Coase theorem and why is it limited in practice?',
        back: 'The Coase theorem states that if property rights are clearly defined and transaction costs are zero, private parties will negotiate to the social optimum without government intervention. In practice, transaction costs are rarely zero, affected parties are often numerous, and property rights over resources like clean air are poorly defined.',
        hint: 'Ronald Coase, 1960 — elegant theory, real-world constraints.',
        tags: ['externalities', 'Pigouvian-tax'],
      },
    ],
    quiz: [
      {
        id: 'f5-l2-q1',
        type: 'mcq',
        question:
          'A chemical plant discharges untreated waste into a river. Which diagram best represents this negative externality?',
        options: [
          'The social marginal cost (SMC) curve lies above the private marginal cost (PMC) curve, and the market equilibrium output exceeds the social optimum.',
          'The social marginal cost (SMC) curve lies below the private marginal cost (PMC) curve, and the market equilibrium output is below the social optimum.',
          'The social marginal benefit (SMB) curve lies above the private marginal benefit (PMB) curve, and the market equilibrium output is below the social optimum.',
          'The supply and demand curves shift left simultaneously, reducing both price and quantity.',
        ],
        correctAnswer: 0,
        explanation:
          'A negative externality in production means the firm\'s private cost ignores the external damage it causes, so SMC > PMC. The market equilibrium, where demand meets PMC (supply), is to the right of the social optimum where demand meets SMC — the market over-produces.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l2-q2',
        type: 'mcq',
        question:
          'The government imposes a per-unit tax on carbon emissions equal to the estimated marginal external cost. What is the intended effect?',
        options: [
          'To raise firms\' effective marginal cost so output falls to the socially optimal level, internalising the external cost.',
          'To raise government revenue without affecting the quantity of carbon emissions produced.',
          'To eliminate all carbon emissions by making production unprofitable.',
          'To lower consumers\' effective price for carbon-intensive goods, reducing demand.',
        ],
        correctAnswer: 0,
        explanation:
          'A Pigouvian carbon tax shifts the supply curve (private marginal cost) upward by the amount of the tax, bringing it into alignment with the social marginal cost. The market then settles at the socially optimal quantity — not zero, but at the level where SMC equals demand. The goal is the right amount of the activity, not elimination.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l2-q3',
        type: 'mcq',
        question:
          'A government subsidises flu vaccinations, reducing the cost to individuals. This policy is justified on the grounds that:',
        options: [
          'Vaccinations generate positive externalities — unvaccinated people benefit from reduced transmission — so the free market under-provides them relative to the social optimum.',
          'Vaccinations are a public good because no one can be excluded from herd immunity.',
          'The government needs to raise revenue by taxing the pharmaceutical companies that supply vaccines.',
          'Private demand for vaccines already reflects the full social benefit, so no correction is needed.',
        ],
        correctAnswer: 0,
        explanation:
          'Flu vaccinations have positive externalities: when enough people are vaccinated, even non-vaccinated individuals benefit from reduced disease transmission (herd immunity). Because private buyers ignore this spillover benefit, private demand (PMB) understates social benefit (SMB), and the market under-provides vaccines. A subsidy corrects this by moving output toward the social optimum.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 3 — Price Ceilings and Price Floors
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f5-l3',
    moduleId: 'f5-government',
    title: 'Price Ceilings and Price Floors',
    description:
      'Analyse rent controls (ceiling) and minimum wages (floor) — who gains, who loses, and what shortages or surpluses result.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['price-ceiling', 'price-floor', 'rent-control', 'minimum-wage'],
    content: {
      realWorldHook:
        'In 2019, Berlin introduced one of Europe\'s most ambitious rent caps — the Mietendeckel ("rent brake") — freezing rents for around 1.5 million apartments. Tenants already in rent-controlled apartments celebrated. But landlords quickly withdrew properties from the rental market, converted flats into owner-occupied homes, or let them sit vacant. The supply of rental housing shrank dramatically, and the waiting lists for controlled apartments grew to years. In 2021 Germany\'s Constitutional Court struck down the law. The Berlin rent cap is a vivid real-world lesson in the economics of price ceilings.',
      prerequisiteRecap: `The previous lesson showed that externalities cause markets to produce at the wrong quantity relative to the social optimum, and that Pigouvian taxes and subsidies correct this by aligning private and social incentives. Price controls take a different government approach — instead of correcting prices through taxes, they directly cap or prop up prices — but as this lesson shows, they too create distortions and deadweight loss.`,

      recallQuestions: [
        {
          id: 'f5-l3-recall-1',
          type: 'mcq' as const,
          question: 'A Pigouvian tax on a negative externality is set equal to the marginal external cost. What is the intended effect on market output?',
          options: [
            'To eliminate the activity entirely, reducing output to zero.',
            'To raise the producer\'s effective cost so output falls to the socially optimal level.',
            'To transfer all producer surplus to the government as tax revenue.',
            'To shift the demand curve to the left, reducing consumer purchases.',
          ],
          correctAnswer: 1,
          explanation: 'A Pigouvian tax shifts the supply curve upward by the amount of the external cost per unit, making the private marginal cost equal to the social marginal cost. The market then settles at the socially optimal quantity — not zero, but the level where social MC equals demand. The goal is the right amount of the activity, not elimination.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'Governments sometimes decide that a market-clearing price is undesirable — too high for consumers to afford, or too low for workers to live on. They respond by imposing legal price controls: either a maximum price (ceiling) or a minimum price (floor). Understanding the economic consequences requires careful diagram analysis.\n\nA price ceiling is a legal maximum price set below the market equilibrium. Because the ceiling is below the price at which quantity supplied equals quantity demanded, it creates a persistent shortage: at the controlled price, consumers want to buy more than producers are willing to supply. Rent controls are the classic example. Tenants who secure a rent-controlled apartment gain — they pay below-market rent — but the overall rental housing stock shrinks as landlords exit the market or convert properties. New renters face years-long waiting lists. Economists note that rent controls also reduce the incentive to maintain properties, as landlords cannot recoup investment through higher rents.\n\nA price floor is a legal minimum price set above the market equilibrium. Because the floor is above the clearing price, it creates a persistent surplus: producers want to sell more than consumers want to buy at the elevated price. The minimum wage is the most widely debated price floor. Workers already employed at or above the minimum wage gain from the floor. However, at a higher wage, employers may hire fewer workers, creating unemployment (a surplus of labour). The size of this unemployment effect depends on the elasticity of labour demand — if demand for labour is inelastic (as when workers perform tasks that are hard to automate), the employment loss is small; if demand is elastic, it is large.\n\nIn both cases, price controls generate deadweight loss — a welfare triangle representing transactions that would have been mutually beneficial at the market price but do not occur because of the control. A ceiling prevents some high-value buyers from being matched with willing sellers; a floor prevents some high-value matches between low-wage workers and employers willing to hire at the equilibrium wage.',
      vocabulary: [
        {
          term: 'Price ceiling',
          definition:
            'A government-imposed maximum price that is set below the market equilibrium price, causing quantity demanded to exceed quantity supplied and creating a shortage.',
          example:
            'A city caps monthly apartment rent at $1,200 when the market equilibrium rent is $1,800, leading to a shortage of rental housing.',
        },
        {
          term: 'Price floor',
          definition:
            'A government-imposed minimum price that is set above the market equilibrium price, causing quantity supplied to exceed quantity demanded and creating a surplus.',
          example:
            'A national minimum wage of $15 per hour set above the market-clearing wage of $12 leads to a surplus of labour (unemployment) in low-skill job markets.',
        },
        {
          term: 'Shortage',
          definition:
            'A situation in which quantity demanded exceeds quantity supplied at the prevailing price; a feature of effective price ceilings.',
          example:
            'Under rent control, thousands of households seek apartments but too few units are available at the controlled rent — a housing shortage.',
        },
        {
          term: 'Surplus',
          definition:
            'A situation in which quantity supplied exceeds quantity demanded at the prevailing price; a feature of effective price floors.',
          example:
            'EU agricultural price supports kept grain prices above equilibrium, leading to the famous "butter mountains" and "grain lakes" of unsold farm produce in the 1980s.',
        },
      ],
      deeperDive:
        'A key insight from price control analysis is the distinction between intended and unintended consequences. A rent ceiling is intended to help low-income renters — but it harms those who cannot access controlled units, reduces housing supply, lowers housing quality, and may create black markets where landlords extract informal payments. Similarly, a minimum wage is intended to help low-paid workers — but disemployment effects, if significant, harm the very workers the policy aims to assist. Economists call this the law of unintended consequences: interventions in complex systems often produce outcomes their designers did not anticipate.\n\nThe empirical evidence on minimum wage disemployment is genuinely contested. Influential research by economists David Card and Alan Krueger (1994) found little employment effect from a New Jersey minimum wage increase, challenging the standard competitive model. More recent meta-analyses suggest that modest minimum wage increases (within a range close to the market-clearing wage) cause small disemployment effects, while very large increases carry more risk. The size of the effect depends critically on labour market structure — in markets where employers have monopsony power (a single dominant buyer of labour), a minimum wage can actually increase both wages and employment, because it counteracts the employer\'s ability to suppress wages below competitive levels.',
      commonMisconceptions: [
        'A price ceiling only creates a shortage if it is set below the equilibrium price. A ceiling set above equilibrium is non-binding — it has no effect because the market price is already below the ceiling.',
        'A price floor only creates a surplus if it is set above the equilibrium price. A floor set below equilibrium is non-binding and has no effect.',
        'Not all minimum wage increases cause unemployment. When employers have monopsony power in the labour market, a minimum wage can increase both wages and employment by counteracting the monopsonist\'s wage suppression.',
      ],
      examinerTip:
        'Diagrams are essential for price control questions. Draw the supply and demand diagram, mark the equilibrium price and quantity, then draw the ceiling or floor as a horizontal line. Shade the shortage (for a ceiling) or surplus (for a floor) clearly. Identify who gains — consumers for a ceiling, producers/workers for a floor — and who loses. Always note the deadweight loss triangle and briefly evaluate: is the policy achieving its intended goal? What are the unintended consequences?',
      didYouKnow:
        'Ancient Rome imposed some of history\'s earliest recorded price controls. Emperor Diocletian\'s Edict on Maximum Prices in 301 CE set maximum prices for over 1,000 goods and services. Contemporary accounts describe merchants hiding their goods rather than selling at the controlled prices — a shortage effect that would look familiar to any economics student today.',
    },
    flashcards: [
      {
        id: 'f5-l3-fc1',
        front: 'What is a price ceiling and what does it cause?',
        back: 'A legal maximum price set below the market equilibrium. It causes a shortage because quantity demanded exceeds quantity supplied at the controlled price.',
        hint: 'Ceiling = maximum = below equilibrium = shortage.',
        tags: ['price-ceiling'],
      },
      {
        id: 'f5-l3-fc2',
        front: 'What is a price floor and what does it cause?',
        back: 'A legal minimum price set above the market equilibrium. It causes a surplus because quantity supplied exceeds quantity demanded at the controlled price.',
        hint: 'Floor = minimum = above equilibrium = surplus.',
        tags: ['price-floor'],
      },
      {
        id: 'f5-l3-fc3',
        front: 'Who gains and who loses from rent control (a price ceiling on housing)?',
        back: 'Gainers: existing tenants in rent-controlled properties (pay below-market rent). Losers: landlords (lower revenue), new renters (face shortages and long waiting lists), and all renters over time (reduced housing supply and quality).',
        hint: 'Short-run beneficiaries vs. long-run consequences.',
        tags: ['price-ceiling', 'rent-control'],
      },
      {
        id: 'f5-l3-fc4',
        front: 'Under what condition is a price ceiling or floor non-binding?',
        back: 'A price ceiling is non-binding if set above the equilibrium price. A price floor is non-binding if set below the equilibrium price. In both cases the control has no effect on the market outcome.',
        hint: 'Non-binding controls do not intersect with the equilibrium.',
        tags: ['price-ceiling', 'price-floor'],
      },
      {
        id: 'f5-l3-fc5',
        front: 'How can monopsony power affect the impact of a minimum wage?',
        back: 'When an employer has monopsony power, they suppress wages below the competitive level. A minimum wage can offset this, raising both wages and employment — the opposite of the standard competitive model prediction.',
        hint: 'Single dominant employer = monopsonist. Minimum wage can increase employment here.',
        tags: ['price-floor', 'minimum-wage'],
      },
    ],
    quiz: [
      {
        id: 'f5-l3-q1',
        type: 'mcq',
        question:
          'A government sets a maximum rent of $900 per month. The market equilibrium rent is $1,400. What is the most likely immediate consequence?',
        options: [
          'A housing shortage, as the quantity of apartments demanded at $900 exceeds the quantity landlords are willing to supply.',
          'A housing surplus, as landlords rush to supply more apartments at the guaranteed $900 rent.',
          'No effect, because the ceiling is set below the equilibrium price.',
          'A rise in the market price to $1,400 because landlords refuse to rent at $900.',
        ],
        correctAnswer: 0,
        explanation:
          'Because the ceiling ($900) is below the equilibrium ($1,400), it is binding. At $900 more renters want apartments than landlords want to supply, creating a shortage. Landlords cannot legally charge more, so some simply withdraw supply from the market.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l3-q2',
        type: 'mcq',
        question:
          'A minimum wage is set at $18 per hour. The market-clearing wage is $14 per hour. In a competitive labour market, what is the expected result?',
        options: [
          'A surplus of labour (unemployment), as the quantity of labour supplied at $18 exceeds the quantity demanded by employers.',
          'A shortage of labour, as employers demand more workers at the higher wage.',
          'No change in employment, because the minimum wage is below the equilibrium wage.',
          'A fall in consumer prices as firms reduce costs to compensate for higher wages.',
        ],
        correctAnswer: 0,
        explanation:
          'In a competitive labour market, a minimum wage above equilibrium ($18 > $14) acts as a binding price floor. At $18, more workers want to work than employers want to hire, creating a surplus of labour — unemployment. The size of this effect depends on the elasticity of labour demand.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l3-q3',
        type: 'mcq',
        question:
          'A government sets a price floor on wheat at $2.00 per bushel. The equilibrium price is $2.50 per bushel. What happens?',
        options: [
          'The floor has no effect, because it is set below the equilibrium price and is therefore non-binding.',
          'A shortage of wheat develops because demand exceeds supply at $2.00.',
          'A surplus of wheat develops because producers supply more than consumers demand at $2.00.',
          'The equilibrium price falls to $2.00 as the government forces prices down.',
        ],
        correctAnswer: 0,
        explanation:
          'A price floor is only binding if set above the equilibrium. Here the floor ($2.00) is below the equilibrium ($2.50), so the market price remains at $2.50. The floor is non-binding and has no effect on the market outcome.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 4 — Taxes and Subsidies — Effects on Markets
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f5-l4',
    moduleId: 'f5-government',
    title: 'Taxes and Subsidies — Effects on Markets',
    description:
      'Trace the full effect of a per-unit tax or subsidy on equilibrium price, quantity, consumer and producer surplus, and deadweight loss.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['taxes', 'subsidies', 'deadweight-loss'],
    content: {
      realWorldHook:
        'In 2018 the United Kingdom introduced a "sugar tax" — technically the Soft Drinks Industry Levy — charging manufacturers up to 24 pence per litre on drinks with high sugar content. Within a year, manufacturers had reformulated more than 50% of their products to reduce sugar content and avoid the tax. Sales of high-sugar drinks fell. Government revenue from the levy helped fund school sports programmes. The sugar tax is a clean real-world experiment in how a per-unit tax reshapes market outcomes.',
      prerequisiteRecap: `The previous lesson showed that price ceilings set below equilibrium create persistent shortages and price floors set above equilibrium create persistent surpluses — both generating deadweight loss by blocking mutually beneficial trades. Per-unit taxes and subsidies work differently: rather than fixing the price directly, they shift the supply or demand curve, allowing the market to find a new equilibrium while still creating a wedge between what buyers pay and sellers receive.`,

      recallQuestions: [
        {
          id: 'f5-l4-recall-1',
          type: 'mcq' as const,
          question: 'A rent ceiling is set below the market equilibrium rent. Which of the following is an expected consequence?',
          options: [
            'A housing surplus, as landlords rush to supply more apartments at the guaranteed low rent.',
            'A housing shortage, as quantity of housing demanded at the controlled price exceeds quantity supplied.',
            'No change in the housing market because the ceiling does not affect landlords\' incentives.',
            'A rise in the equilibrium rent as landlords compensate for lost revenue.',
          ],
          correctAnswer: 1,
          explanation: 'A price ceiling set below equilibrium is binding. At the controlled rent, more renters want to rent apartments than landlords are willing to supply, creating a shortage. Landlords cannot legally charge more, so some withdraw supply from the market entirely.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f5-l4-recall-2',
          type: 'mcq' as const,
          question: 'A minimum wage is set above the market-clearing wage. In a competitive labour market, which market outcome does this most closely resemble?',
          options: [
            'A price ceiling creating a shortage of labour.',
            'A price floor creating a surplus of labour (unemployment).',
            'A Pigouvian tax correcting a negative externality in the labour market.',
            'A price ceiling creating a surplus of labour.',
          ],
          correctAnswer: 1,
          explanation: 'A minimum wage above equilibrium acts as a price floor in the labour market. At the higher wage, quantity of labour supplied exceeds quantity demanded by employers — this excess supply of labour is unemployment, analogous to the agricultural surplus created by price floors in product markets.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'A per-unit tax is a fixed amount charged per unit of a good sold — for example, $0.50 per litre of petrol or $1.00 per pack of cigarettes. Regardless of whether the tax is legally collected from producers (a supply-side tax) or consumers (a demand-side tax), the economic incidence — who actually bears the burden — is split between buyers and sellers according to the relative elasticities of supply and demand. This is one of the most important and counter-intuitive results in basic economics.\n\nWhen a per-unit tax is imposed on producers, it raises their marginal cost of supplying each unit by the amount of the tax. The supply curve shifts upward (leftward) by exactly the tax amount. The new equilibrium has a higher price and lower quantity. Consumers pay more than before; producers receive less after paying the tax. The difference between the new price consumers pay and the price producers keep equals the tax per unit. The share of the tax burden borne by consumers versus producers depends on elasticities: the more inelastic is demand relative to supply, the more consumers bear; the more inelastic is supply relative to demand, the more producers bear.\n\nThe tax also affects surpluses. Consumer surplus shrinks because consumers now pay a higher price for fewer units. Producer surplus shrinks because producers receive a lower after-tax price on fewer units. Part of this lost surplus is transferred to the government as tax revenue (the tax wedge multiplied by the new quantity). But a portion of the original surplus — the deadweight loss triangle — is simply destroyed. It represents transactions that would have been mutually beneficial at the no-tax price but no longer occur.\n\nA per-unit subsidy works in the opposite direction. A subsidy to producers lowers their effective cost by the subsidy amount, shifting the supply curve downward (rightward). The new equilibrium has a lower consumer price, a higher producer price (after receiving the subsidy), and a higher quantity. Consumer and producer surplus both rise. But the government must finance the subsidy, and the total subsidy expenditure (subsidy per unit × new quantity) exceeds the combined gain in consumer and producer surplus — the difference is again a deadweight loss triangle, representing the inefficiency of inducing production beyond the free-market equilibrium.',
      vocabulary: [
        {
          term: 'Per-unit tax',
          definition:
            'A fixed tax charged on each unit of a good produced or sold, which shifts the supply curve upward by the tax amount, raising consumer prices and lowering producer receipts.',
          example:
            'A $1.50 per-pack excise tax on cigarettes raises what smokers pay and reduces what tobacco companies keep per pack sold.',
        },
        {
          term: 'Tax incidence',
          definition:
            'The division of the tax burden between buyers and sellers, determined by the relative price elasticities of supply and demand rather than by who legally pays the tax.',
          example:
            'If demand for petrol is very inelastic, most of a fuel duty falls on consumers even though it is legally paid by suppliers.',
        },
        {
          term: 'Tax wedge',
          definition:
            'The difference between the price consumers pay and the price producers receive after a tax, equal to the per-unit tax amount.',
          example:
            'If consumers pay $3.00 and producers keep $2.30 after a fuel tax, the tax wedge is $0.70 per litre.',
        },
        {
          term: 'Per-unit subsidy',
          definition:
            'A fixed payment per unit from the government to producers or consumers, which shifts the supply curve downward by the subsidy amount, lowering consumer prices and raising producer receipts.',
          example:
            'A $500 subsidy per electric vehicle sold lowers the price consumers pay and incentivises manufacturers to supply more EVs.',
        },
      ],
      deeperDive:
        'The elasticity rule for tax incidence can be stated precisely: the consumer\'s share of the tax burden equals the price elasticity of supply divided by the sum of the absolute elasticities of supply and demand. Equivalently, if supply is perfectly inelastic (a vertical supply curve), producers bear 100% of the tax because they cannot reduce quantity; consumers get the good at the same price. If demand is perfectly inelastic, consumers bear 100% because they will pay any price rather than go without. This mathematical relationship explains why governments tax goods with inelastic demand — cigarettes, alcohol, fuel — when they want to raise revenue with minimal quantity reduction (and minimal deadweight loss per dollar raised).\n\nSubsidy analysis reveals an important tension in policy: subsidies always create deadweight loss. Even when the subsidised good generates positive externalities (justifying the subsidy on welfare grounds), the subsidy induces some production whose social cost exceeds its social benefit. The optimal Pigouvian subsidy exactly offsets the external benefit, but any larger subsidy creates net inefficiency. In practice, many agricultural subsidies in rich countries far exceed any plausible estimate of external benefit, representing transfers to politically powerful farming lobbies at the expense of taxpayers and efficient resource allocation.',
      commonMisconceptions: [
        'The legal incidence (who writes the cheque to the government) has nothing to do with the economic incidence (who bears the burden). Whether a sales tax is collected from the seller or added at the checkout counter paid by the buyer, the market outcome — price, quantity, and burden sharing — is identical.',
        'A tax does not always hurt producers more than consumers. If demand is very inelastic (as for cigarettes or insulin), consumers end up bearing most of the tax burden even though they did not "pay" the tax to the government.',
        'A subsidy does not guarantee that consumers receive all the benefit. If supply is very inelastic, producers capture most of the subsidy as higher producer prices rather than passing it on to consumers through lower prices.',
      ],
      examinerTip:
        'For tax/subsidy questions, draw the before-and-after diagrams carefully. Mark the original equilibrium (P₀, Q₀), the new equilibrium (P₁, Q₁), the price consumers pay (Pc), and the price producers receive (Pp). Show the tax wedge (Pc − Pp = tax) or subsidy wedge (Pp − Pc = subsidy). Shade the government revenue rectangle and the deadweight loss triangle separately. State which party bears more of the burden and link this explicitly to relative elasticities.',
      didYouKnow:
        'The concept of tax incidence dates to the French Physiocrats of the 18th century, who argued that all taxes ultimately fall on land regardless of who nominally pays them. Modern economists have extended the analysis enormously: incidence depends on mobility of capital and labour across sectors, time horizons, and even international trade patterns.',
    },
    flashcards: [
      {
        id: 'f5-l4-fc1',
        front: 'What happens to a supply curve when a per-unit tax is imposed on producers?',
        back: 'The supply curve shifts upward (leftward) by the exact amount of the per-unit tax, because the tax adds to the producers\' marginal cost for every unit supplied.',
        hint: 'Tax on producers raises their cost → supply shifts up.',
        tags: ['taxes'],
      },
      {
        id: 'f5-l4-fc2',
        front: 'What determines how the tax burden is shared between consumers and producers?',
        back: 'The relative price elasticities of supply and demand. The more inelastic demand is relative to supply, the more consumers bear; the more inelastic supply is relative to demand, the more producers bear.',
        hint: 'Inelastic party bears more of the tax.',
        tags: ['taxes', 'tax-incidence'],
      },
      {
        id: 'f5-l4-fc3',
        front: 'What is the tax wedge?',
        back: 'The difference between the price consumers pay (Pc) and the price producers receive after the tax (Pp). It equals the per-unit tax: Tax = Pc − Pp.',
        hint: 'Wedge = gap between what buyer pays and what seller keeps.',
        tags: ['taxes'],
      },
      {
        id: 'f5-l4-fc4',
        front: 'Does a per-unit subsidy always benefit consumers through lower prices?',
        back: 'Not entirely. If supply is very inelastic, producers capture most of the subsidy as higher after-subsidy prices rather than passing savings on to consumers. The benefit split depends on relative elasticities.',
        hint: 'Inelastic supply = producers keep more of the subsidy.',
        tags: ['subsidies'],
      },
      {
        id: 'f5-l4-fc5',
        front: 'Why does a per-unit tax or subsidy always create deadweight loss?',
        back: 'A tax reduces quantity below the free-market equilibrium, preventing mutually beneficial transactions. A subsidy raises quantity above the social optimum, inducing production where marginal cost exceeds marginal benefit. Both destroy net welfare.',
        hint: 'Any quantity away from the free-market (or social) optimum creates deadweight loss.',
        tags: ['taxes', 'subsidies', 'deadweight-loss'],
      },
    ],
    quiz: [
      {
        id: 'f5-l4-q1',
        type: 'mcq',
        question:
          'A $2 per-unit tax is imposed on suppliers of soft drinks. Demand for soft drinks is relatively inelastic. Which outcome is most likely?',
        options: [
          'Consumers bear most of the tax burden because inelastic demand means they are unwilling to reduce purchases significantly even at higher prices.',
          'Producers bear most of the tax burden because they are legally required to pay the tax to the government.',
          'Consumers and producers share the burden equally regardless of elasticities.',
          'The tax has no effect on price because producers absorb the full cost through lower profits.',
        ],
        correctAnswer: 0,
        explanation:
          'Tax incidence depends on elasticities, not on who legally pays. When demand is inelastic, consumers are not very responsive to price increases, so sellers can pass most of the tax on through higher prices. The legal obligation of suppliers to pay the tax does not determine who ultimately bears the burden.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l4-q2',
        type: 'mcq',
        question:
          'After a per-unit tax is imposed on a market, which areas on the supply-and-demand diagram represent government tax revenue?',
        options: [
          'The rectangle between the price consumers pay (Pc) and the price producers receive (Pp), spanning the new equilibrium quantity.',
          'The triangle between the original equilibrium and the new equilibrium, below the demand curve.',
          'The entire area of original consumer surplus before the tax.',
          'The area below the supply curve up to the new quantity traded.',
        ],
        correctAnswer: 0,
        explanation:
          'Government tax revenue equals the per-unit tax (Pc − Pp, the tax wedge) multiplied by the new quantity sold. This is represented by a rectangle on the diagram. The triangle lost from consumer and producer surplus that does not go to the government is the deadweight loss.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l4-q3',
        type: 'mcq',
        question:
          'A government provides a $500 per-unit subsidy to electric vehicle manufacturers. Which of the following is an unintended cost of this policy?',
        options: [
          'A deadweight loss, because the subsidy induces some EV production where the social cost of production exceeds the social benefit.',
          'A fall in government tax revenue, because EVs are now exempt from all sales taxes.',
          'A reduction in EV production, because manufacturers respond to the lower effective price.',
          'A rise in the price consumers pay for EVs, because manufacturers keep the subsidy as profit.',
        ],
        correctAnswer: 0,
        explanation:
          'Any subsidy pushes quantity beyond the free-market equilibrium. For the additional units produced with the subsidy, the cost of production exceeds the value consumers place on them (absent any externality justification). This generates deadweight loss — an efficiency cost borne by taxpayers. A Pigouvian subsidy justified by positive externalities can still be welfare-enhancing overall, but it still creates this inefficiency triangle.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 5 — Public Goods and the Free-Rider Problem
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'f5-l5',
    moduleId: 'f5-government',
    title: 'Public Goods and the Free-Rider Problem',
    description:
      'Define non-excludable, non-rival goods and explain why private markets under-provide them, justifying government provision.',
    order: 5,
    estimatedMinutes: 25,
    tags: ['public-goods', 'free-rider', 'non-excludable'],
    content: {
      realWorldHook:
        'In 1961, Economist Paul Samuelson described the fundamental problem of public goods: you cannot force people to pay for a lighthouse. A ship either is warned away from rocks or it isn\'t — there is no way to let paying ships benefit while leaving non-payers to founder. Today the lighthouse example has been complicated by GPS and private maritime signals, but the logic lives on in everything from national defence to flood barriers to basic scientific research. These are goods society desperately needs but private markets predictably fail to provide at the socially optimal level.',
      prerequisiteRecap: `The previous lesson showed that per-unit taxes shift the supply curve, create a tax wedge between buyer and seller prices, and split the burden according to relative elasticities — always generating some deadweight loss. Public goods present a fundamentally different market failure: the problem is not that goods are priced incorrectly but that non-excludability makes it impossible for private firms to charge for them at all, removing the revenue incentive to supply them.`,

      recallQuestions: [
        {
          id: 'f5-l5-recall-1',
          type: 'mcq' as const,
          question: 'Demand for cigarettes is price inelastic (|PED| = 0.4). A $1 per-pack tax is imposed. Who bears the larger share of the tax burden, and why?',
          options: [
            'Producers bear the larger share because they are legally required to pay the tax.',
            'Consumers bear the larger share because inelastic demand means they are unwilling to reduce purchases significantly even at higher prices.',
            'The burden is always split equally regardless of elasticity.',
            'Consumers bear the larger share only if the tax is collected from consumers directly.',
          ],
          correctAnswer: 1,
          explanation: 'Tax incidence depends on relative elasticities, not on who legally pays. When demand is inelastic, consumers are not very responsive to price increases, so sellers can pass most of the tax on as a higher consumer price with little loss in sales. Inelastic demand → consumers bear the larger share.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'Economists classify goods along two dimensions: rivalry and excludability. A good is rival if one person\'s consumption reduces the amount available for others — eating an apple is the classic example. A good is excludable if it is possible to prevent non-payers from using it — a cinema ticket grants entry; without it you are turned away. Most familiar goods are both rival and excludable (private goods). But some goods are neither.\n\nA public good is both non-rival and non-excludable. Non-rival means that one person\'s enjoyment of the good does not diminish the amount available to others — a fireworks display enjoyed by a thousand people simultaneously is just as enjoyable as one enjoyed by ten. Non-excludable means it is impossible (or prohibitively costly) to prevent anyone from consuming the good once it is provided — national defence protects every resident of a country whether they pay taxes or not. Classic examples include national defence, flood control systems, street lighting, public broadcasting, and basic scientific knowledge.\n\nThe free-rider problem arises directly from non-excludability. If you cannot be excluded from enjoying a good whether or not you pay, rational self-interest dictates that you should not pay — you can "free ride" on others\' contributions. If everyone reasons this way, the good goes unprovided or severely under-provided by private markets, even when its total value to society greatly exceeds its cost of provision. The free-rider problem is a coordination failure: each individual acting rationally produces a collectively irrational outcome.\n\nThe standard solution is government provision financed by compulsory taxation. Because taxation is compulsory, the free-rider problem is solved by fiat — everyone contributes regardless of individual preferences. The government then provides the public good at a level intended to reflect the aggregate demand of citizens. This is why national defence, public health programmes, street lighting, and basic research are almost universally government-funded across countries at all stages of development.',
      vocabulary: [
        {
          term: 'Non-rival good',
          definition:
            'A good whose consumption by one person does not reduce the quantity or quality available to others.',
          example:
            'A public fireworks display — one person watching does not diminish the spectacle for anyone else.',
        },
        {
          term: 'Non-excludable good',
          definition:
            'A good from which it is impossible or prohibitively costly to exclude non-paying consumers once it has been provided.',
          example:
            'National flood defences — once a levee is built, it protects all residents in the flood plain whether they paid for it or not.',
        },
        {
          term: 'Public good',
          definition:
            'A good that is simultaneously non-rival and non-excludable, leading private markets to under-provide it because of the free-rider problem.',
          example:
            'National defence is the textbook public good: it is non-rival (protecting one citizen does not reduce protection for others) and non-excludable (all residents benefit regardless of tax payments).',
        },
        {
          term: 'Free-rider problem',
          definition:
            'The tendency of individuals to consume a non-excludable good without paying for it, because they cannot be excluded from its benefits, leading to under-provision by private markets.',
          example:
            'If street lighting were privately funded by voluntary subscription, many households would wait for their neighbours to pay and enjoy the light for free — resulting in too little street lighting being installed.',
        },
      ],
      deeperDive:
        'The classification of goods is not always as clean as the textbook suggests. Some goods are impure public goods — they satisfy one criterion but not the other. A congested motorway is non-excludable (in the absence of tolls) but is rival because each additional driver slows others down. Economists call such goods common resources or common-pool resources; they are subject to overuse (the "tragedy of the commons") rather than under-provision. A cable TV signal is non-rival but excludable (you need a subscription); economists call this a club good. Understanding these distinctions matters for policy: the solutions to common-resource overuse (quotas, privatisation, community regulation) differ from the solutions to public-good under-provision (government provision, subsidies).\n\nMoreover, the boundary between public and private goods can shift with technology. Lighthouses were once considered paradigmatic public goods because excluding non-payers was impractical. Ronald Coase showed in 1974 that British lighthouses were historically financed privately through port fees — ships that did not put into port could not be charged, but most ships did. Similarly, GPS navigation — originally a public good provided by the US military — has spawned a flourishing private market in apps and services that layer excludable content on top of the non-excludable satellite signal. Technology and institutional innovation constantly reshape the boundary of what markets can and cannot provide.',
      commonMisconceptions: [
        'Public goods are not the same as goods provided by the government. The government provides many rival and excludable goods (such as postal services or state-owned airlines) that are not public goods in the economic sense. Conversely, some public goods (like open-source software) are provided privately.',
        'Non-rival does not mean free to produce. A fireworks display costs real resources — labour, materials, permits. Non-rivalry means one more viewer costs nothing additional, not that the good itself is costless to produce.',
        'The free-rider problem does not mean no one will ever voluntarily contribute to a public good. Voluntary contributions, social norms, and small community sizes can support some public good provision privately. The problem is that voluntary provision typically falls far below the socially optimal level.',
      ],
      examinerTip:
        'In exams, always define non-rival and non-excludable separately before defining public good — do not just say "a good provided by the government." Then explain the free-rider problem as the market failure mechanism: because exclusion is impossible, individuals have no incentive to reveal their willingness to pay or to contribute voluntarily, so private firms cannot profit from providing the good. The justification for government provision follows directly. For evaluation, consider whether government provision is necessarily at the right level and whether technological change could transform a public good into a private one.',
      didYouKnow:
        'Open-source software is a fascinating modern example that blurs the boundaries. Linux, the operating system kernel powering most of the world\'s servers and Android devices, is non-rival and largely non-excludable — yet it is produced and maintained by thousands of volunteer programmers and firms who contribute because they also benefit from improvements or gain reputational rewards. It challenges the simple conclusion that non-excludable goods must be government-provided.',
    },
    flashcards: [
      {
        id: 'f5-l5-fc1',
        front: 'What are the two defining characteristics of a public good?',
        back: '1. Non-rival: one person\'s consumption does not reduce availability for others.\n2. Non-excludable: it is impossible or prohibitively costly to prevent non-payers from consuming the good.',
        hint: 'Non-rival + Non-excludable = Public good.',
        tags: ['public-goods'],
      },
      {
        id: 'f5-l5-fc2',
        front: 'What is the free-rider problem?',
        back: 'Because non-excludable goods cannot withhold benefits from non-payers, rational individuals have an incentive to consume without contributing. If everyone free-rides, the good goes unprovided or severely under-provided, even when its total value exceeds its cost.',
        hint: 'Why pay when you can\'t be excluded from the benefits?',
        tags: ['free-rider', 'public-goods'],
      },
      {
        id: 'f5-l5-fc3',
        front: 'Give two examples of public goods and explain why each qualifies.',
        back: '1. National defence — non-rival (protecting one citizen does not reduce protection for others) and non-excludable (all residents are protected regardless of individual tax contributions).\n2. Street lighting — non-rival (one pedestrian\'s use of light does not dim it for others) and non-excludable (anyone on the street benefits).',
        hint: 'Think: can I exclude you? Does your use reduce mine?',
        tags: ['public-goods'],
      },
      {
        id: 'f5-l5-fc4',
        front: 'What is the difference between a public good and a common resource?',
        back: 'A public good is non-rival AND non-excludable. A common resource (common-pool resource) is rival but non-excludable. Common resources are subject to overuse (the tragedy of the commons), not under-provision. Examples: ocean fish stocks, public grazing land.',
        hint: 'Public good = both non-rival + non-excludable. Common resource = rival but non-excludable.',
        tags: ['public-goods', 'non-excludable'],
      },
      {
        id: 'f5-l5-fc5',
        front: 'Why does the government finance public goods through compulsory taxation rather than voluntary contribution?',
        back: 'Voluntary contributions fail because of the free-rider problem — individuals rationally choose not to pay since they cannot be excluded. Compulsory taxation forces everyone to contribute, solving the free-rider coordination failure and enabling the socially optimal level of provision.',
        hint: 'Compulsion solves the coordination failure that voluntary markets cannot.',
        tags: ['public-goods', 'free-rider'],
      },
    ],
    quiz: [
      {
        id: 'f5-l5-q1',
        type: 'mcq',
        question:
          'Which of the following best describes a public good?',
        options: [
          'A good that is simultaneously non-rival (one person\'s use does not reduce availability) and non-excludable (non-payers cannot be prevented from consuming it).',
          'Any good or service that is provided by the government, including postal services and public hospitals.',
          'A good that is free to consume at zero price, such as a gift or charitable donation.',
          'A good that is rival in consumption but provided free of charge to all citizens.',
        ],
        correctAnswer: 0,
        explanation:
          'A public good has two specific economic properties: non-rivalry and non-excludability. Government provision alone does not make something a public good — governments provide many rival and excludable services. The key is the economic characteristics, not the provider.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l5-q2',
        type: 'mcq',
        question:
          'Why would a private firm be unwilling to supply national defence, even if citizens value it highly?',
        options: [
          'Because defence is non-excludable, the firm cannot charge citizens for its protection — anyone who benefits from it cannot be denied service for non-payment, making it impossible to earn revenue.',
          'Because national defence is a rival good and there is not enough of it to go around.',
          'Because citizens do not value national defence highly enough to pay market prices for it.',
          'Because governments have a legal monopoly on military force that prevents private firms from entering.',
        ],
        correctAnswer: 0,
        explanation:
          'The fundamental market failure behind public goods is non-excludability combined with the free-rider problem. A private firm supplying defence cannot charge those who benefit because it cannot exclude non-payers — everyone in the country is protected regardless of payment. Without a revenue mechanism, no private firm can profitably supply the good even when its social value is enormous.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f5-l5-q3',
        type: 'mcq',
        question:
          'A congested motorway (with no tolls) is best classified as:',
        options: [
          'A common resource — it is rival (each additional driver slows others) but non-excludable (drivers cannot be prevented from using it without tolls).',
          'A public good — it is both non-rival and non-excludable.',
          'A private good — it is both rival and excludable.',
          'A club good — it is non-rival but excludable.',
        ],
        correctAnswer: 0,
        explanation:
          'A toll-free motorway is non-excludable (no mechanism to prevent entry) but rival in the sense that congestion means one more driver imposes a cost on all other drivers. This makes it a common resource, subject to the tragedy of the commons (overuse), not a public good (which requires non-rivalry as well).',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },
]
