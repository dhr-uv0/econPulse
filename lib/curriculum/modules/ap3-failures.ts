import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ap3-failures',
  title: 'AP Micro — Market Failures and Government',
  description: 'Cover every externality, public goods, and regulation question the AP exam uses.',
  tier: 'AP' as const,
  track: 'AP' as const,
  unit: 3,
  estimatedHours: 2,
  color: '#f59e0b',
  icon: 'Target',
}

export const lessons: Lesson[] = [
  {
    id: 'ap3-l1',
    moduleId: 'ap3-failures',
    title: 'Externalities — Welfare Analysis and Policy',
    description: 'Calculate the socially optimal output, the size of the externality, the Pigouvian tax/subsidy, and DWL.',
    order: 1,
    estimatedMinutes: 40,
    tags: ['externalities', 'Pigouvian-tax', 'welfare'],
    flashcards: [
      {
        id: 'fc-ap3-l1-1',
        front: 'What is a negative externality, and how does it distort the market outcome?',
        back: 'A cost imposed on third parties not reflected in the market price. MPC < MSC (marginal social cost includes the external cost), so the market overproduces relative to the social optimum. Corrected by a Pigouvian tax equal to the marginal external cost at the social optimum quantity.',
        tags: ['externalities', 'Pigouvian-tax'],
      },
      {
        id: 'fc-ap3-l1-2',
        front: 'What is a positive externality, and what policy corrects the market failure?',
        back: 'A benefit conferred on third parties not reflected in market demand. MPB < MSB (marginal social benefit exceeds private benefit), so the market underproduces. Corrected by a Pigouvian subsidy that raises effective demand to the social optimum.',
        tags: ['externalities', 'welfare'],
      },
      {
        id: 'fc-ap3-l1-3',
        front: 'What does the Coase Theorem state about externalities?',
        back: 'When property rights are well-defined and transaction costs are low, private bargaining between the affected parties will internalise externalities and reach the socially efficient outcome, regardless of the initial assignment of the property right.',
        tags: ['externalities', 'welfare'],
      },
    ],
    quiz: [
      {
        id: 'q-ap3-l1-1',
        type: 'mcq',
        question: 'The optimal Pigouvian tax on a negative externality equals:',
        options: [
          'The total external cost summed across all units of output',
          'The marginal external cost at the socially optimal quantity',
          'The market price of the good at the competitive equilibrium',
          'The difference between MPC and ATC at the profit-maximising output',
        ],
        correctAnswer: 1,
        explanation: 'The Pigouvian tax is set equal to the marginal external cost (MEC) evaluated at the social optimum quantity — not the market quantity. This shifts the MPC curve upward by exactly MEC, making private and social costs equal at the optimal output. Setting the tax at the market quantity would over-correct, pushing output too far below optimum.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'q-ap3-l1-2',
        type: 'mcq',
        question: 'A steel producer emits pollution that imposes external costs on nearby residents. Compared to the socially optimal output, the free market:',
        options: [
          'Underproduces steel because the pollution raises production costs for the firm',
          'Overproduces steel because MPC < MSC, so the market price is too low and quantity is too high',
          'Produces the efficient quantity because competition drives price equal to marginal cost',
          'Underproduces steel because consumers discount the price of goods associated with pollution',
        ],
        correctAnswer: 1,
        explanation: 'Pollution is a negative production externality. The firm does not bear the full social cost (MPC < MSC = MPC + MEC), so the market price is lower than the socially optimal price and quantity produced exceeds the social optimum. The deadweight loss is the triangle between MSC and demand, from the social optimum to the market quantity.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Externalities arise when a market transaction affects parties outside the transaction, and the external effect is not priced. In a market with a negative production externality (e.g., air pollution from a factory), the producer's marginal private cost (MPC) lies below the marginal social cost (MSC = MPC + marginal external cost). The market equates MPC with demand, producing more than the socially optimal quantity where MSC intersects demand. The deadweight loss is the triangle between the MSC and demand curves from the social optimum quantity to the market quantity — units where social cost exceeds social benefit but are produced anyway.

Correction tools include Pigouvian taxes (shifting MPC up to MSC, directing quantity to the social optimum), cap-and-trade permit markets (setting a quantity ceiling and letting firms trade permits to achieve the cheapest abatement), and Coasian bargaining (private negotiation when transaction costs are low). For positive externalities — where MSB exceeds MPB — the market underproduces, and Pigouvian subsidies or public provision raise output toward the optimum. AP students must be able to draw the four-curve diagram (MPC, MSC, MPB/D, and MSB where applicable), identify the market equilibrium and the social optimum, shade the deadweight loss triangle, and specify the Pigouvian tax or subsidy amount — reading it as the vertical gap between MSC and MPC at the social optimum.`,
      prerequisiteRecap: `AP Module 2 completed the survey of market structures and showed that in factor markets firms hire where MRP = Wage. Market failures covered in this module arise when prices fail to reflect full social costs or benefits — a different breakdown from the structural distortions (monopoly power, strategic interaction) examined in Module 2.`,
      recallQuestions: [
        {
          id: 'ap3-l1-recall-1',
          type: 'mcq' as const,
          question: 'A monopsonist hires fewer workers at a lower wage than a competitive labour market would. What is the direct cause of this under-hiring?',
          options: [
            'The monopsonist\'s marginal factor cost (MFC) exceeds the wage at every employment level, so hiring the MRP = MFC quantity is below the competitive level',
            'The monopsonist sets the wage above the competitive level, discouraging workers from entering the labour market',
            'The monopsonist faces a downward-sloping labour supply curve, reducing the number of available workers',
            'The monopsonist hires until MRP equals the wage, which coincides with the competitive equilibrium',
          ],
          correctAnswer: 0,
          explanation: 'A monopsonist faces an upward-sloping labour supply, so hiring an extra worker requires paying all existing workers more — making MFC > wage. The profit-maximising condition MRP = MFC produces a hiring level below the competitive outcome (where MRP = wage). The wage is then read off the supply curve at that lower employment, giving both lower employment and a lower wage than competition would produce.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ap3-l2',
    moduleId: 'ap3-failures',
    title: 'Public Goods and Asymmetric Information',
    description: 'Distinguish public goods, common resources, club goods; introduce adverse selection and moral hazard.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['public-goods', 'asymmetric-information'],
    flashcards: [
      {
        id: 'fc-ap3-l2-1',
        front: 'What two properties define a public good, and what problem do they cause?',
        back: 'Non-rival: one person\'s consumption does not reduce availability for others. Non-excludable: impossible or prohibitively costly to prevent non-payers from consuming. Together they cause the free-rider problem — private markets underprovide or do not provide public goods at all.',
        tags: ['public-goods'],
      },
      {
        id: 'fc-ap3-l2-2',
        front: 'What is adverse selection, and give an example?',
        back: 'A pre-contractual problem where one party has hidden information about their type, causing the uninformed party to attract a disproportionate share of high-risk counterparties. Example: in health insurance markets, sicker individuals are more likely to seek coverage, raising average costs and premiums in a potential "death spiral."',
        tags: ['asymmetric-information'],
      },
      {
        id: 'fc-ap3-l2-3',
        front: 'What is moral hazard, and how does it differ from adverse selection?',
        back: 'Moral hazard is a post-contractual change in behaviour when one party bears less than the full cost of their actions. Example: a driver takes more risks after purchasing comprehensive insurance. Unlike adverse selection (hidden type before contracting), moral hazard involves hidden actions after contracting.',
        tags: ['asymmetric-information'],
      },
    ],
    quiz: [
      {
        id: 'q-ap3-l2-1',
        type: 'mcq',
        question: 'National defence is classified as a public good because it is:',
        options: [
          'Provided by the government and funded through compulsory taxation',
          'Non-rival and non-excludable — one citizen\'s protection does not reduce others\', and non-payers cannot be excluded',
          'Free at the point of use and owned collectively by all citizens',
          'Underprovided by the private sector due to high fixed costs and natural monopoly characteristics',
        ],
        correctAnswer: 1,
        explanation: "National defence is non-rival (protecting one citizen doesn't reduce protection for others) and non-excludable (it is technically impossible to deny protection to any resident). These two properties, not government provision per se, define a public good. Government provision is the response to the resulting free-rider problem, not the definition.",
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'q-ap3-l2-2',
        type: 'mcq',
        question: 'A homeowner invests less in fire-prevention measures after purchasing comprehensive fire insurance. This is an example of:',
        options: [
          'Adverse selection — the homeowner revealed private information about fire risk by purchasing insurance',
          'Moral hazard — a post-contractual change in behaviour because the homeowner bears less of the financial risk of fire',
          'The Coase Theorem — the insurer and homeowner could bargain to reach the efficient level of fire prevention',
          'A positive externality — fire prevention benefits neighbours, so the homeowner under-invests without insurance',
        ],
        correctAnswer: 1,
        explanation: 'Moral hazard is a post-contractual hidden-action problem: after purchasing insurance, the homeowner changes behaviour because they bear less financial risk. This is distinct from adverse selection, which occurs before a contract is signed when high-risk individuals disproportionately self-select into insurance pools.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Public goods represent a specific category of market failure defined by two joint properties: non-rivalry (my consumption does not diminish yours — one more person watching a fireworks display costs nothing extra) and non-excludability (once provided, it is impossible or prohibitively expensive to exclude non-payers). Because non-payers can free-ride on others' contributions, private markets underprovide public goods or fail to provide them at all. Government provision funded by taxation solves the free-rider problem, though determining the optimal quantity requires estimating aggregate willingness to pay — notoriously difficult because individuals have incentives to understate their true preferences when they know provision is not contingent on their reported valuation.

Asymmetric information distorts markets in distinct ways depending on whether the information gap is pre- or post-contractual. Adverse selection occurs before a contract is signed: the less-informed party attracts a disproportionate share of high-risk counterparties. In Akerlof's "market for lemons," sellers know car quality but buyers do not; buyers discount all cars to expected average quality; sellers of high-quality cars withdraw, lowering average quality further. Solutions include signalling (sellers credibly signal quality through warranties) and screening (buyers design contracts to extract information). Moral hazard occurs after contracting when insured parties take greater risks because costs are partly borne by others — mitigated through deductibles, co-payments, and monitoring. Both problems illustrate why information is as important as prices in determining whether markets allocate resources efficiently.`,
      prerequisiteRecap: `Lesson 1 showed that a negative production externality drives a wedge between MPC and MSC, causing the market to overproduce and generating deadweight loss correctable by a Pigouvian tax. Public goods represent an extreme form of positive externality — benefits are shared by all simultaneously, so private markets provide far too little without government intervention.`,
      recallQuestions: [
        {
          id: 'ap3-l2-recall-1',
          type: 'mcq' as const,
          question: 'The optimal Pigouvian tax on a negative externality is set equal to the marginal external cost at the social optimum quantity, not at the market quantity. Why does this distinction matter?',
          options: [
            'Setting the tax at the market quantity would over-correct, pushing output below the social optimum where MSC exceeds MSB',
            'Setting the tax at the social optimum quantity would raise too little revenue to compensate harmed parties',
            'The marginal external cost is always larger at the market quantity than at the social optimum',
            'Both quantities yield the same optimal tax because marginal external cost is constant',
          ],
          correctAnswer: 0,
          explanation: 'The Pigouvian tax shifts MPC upward to equal MSC, redirecting the firm to produce at the social optimum. If the tax were calibrated to the market quantity (where output is too high), it would be set too large — pushing output past the social optimum into a range where social cost exceeds social benefit on net. The correct tax reads the MEC at the socially optimal output, not at the unregulated equilibrium.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ap3-l3',
    moduleId: 'ap3-failures',
    title: 'Antitrust and Regulation',
    description: 'Explain horizontal and vertical mergers, natural monopoly regulation, and the efficiency-profit tradeoff.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['antitrust', 'regulation', 'natural-monopoly'],
    flashcards: [
      {
        id: 'fc-ap3-l3-1',
        front: 'What is the primary goal of antitrust policy?',
        back: 'To promote competition by preventing monopolisation, blocking anti-competitive mergers, and prohibiting per se illegal practices such as price-fixing, bid-rigging, and market allocation agreements between rivals.',
        tags: ['antitrust'],
      },
      {
        id: 'fc-ap3-l3-2',
        front: 'What is the efficiency-profit tradeoff in natural monopoly regulation?',
        back: 'MC pricing (P = MC) achieves allocative efficiency but produces losses when LRAC is declining, requiring a subsidy. ATC pricing (P = ATC) is commercially viable (zero profit) but P > MC leaves allocative inefficiency. Neither fully solves both problems simultaneously.',
        tags: ['regulation', 'natural-monopoly'],
      },
      {
        id: 'fc-ap3-l3-3',
        front: 'What is regulatory capture?',
        back: 'When a regulatory agency comes to serve the interests of the industry it regulates rather than the public — a form of government failure. It can cause regulation to raise barriers to entry, protect incumbents, or allow above-normal profits, making regulation counterproductive.',
        tags: ['regulation'],
      },
    ],
    quiz: [
      {
        id: 'q-ap3-l3-1',
        type: 'mcq',
        question: 'Average-cost pricing (P = ATC) for a natural monopoly results in which combination of outcomes?',
        options: [
          'Allocative efficiency and positive economic profit for the regulated firm',
          'Zero economic profit for the firm but allocative inefficiency because P > MC',
          'Maximum consumer surplus because price is set as low as possible',
          'The same allocative outcome as marginal-cost pricing but with higher firm profits',
        ],
        correctAnswer: 1,
        explanation: 'At P = ATC the firm earns zero economic profit — commercially viable without a subsidy. However, because LRAC is still declining for a natural monopoly, MC < ATC at the regulated output, meaning P > MC. The firm produces less than the allocatively efficient quantity. This is a second-best outcome: better than unregulated monopoly, but not first-best.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'q-ap3-l3-2',
        type: 'mcq',
        question: 'Which of the following actions would most clearly violate antitrust law as a per se illegal practice?',
        options: [
          'A firm lowering its prices to attract customers away from a rival',
          'Two rival firms agreeing to divide sales territories so they do not compete with each other',
          'A firm acquiring a supplier through a vertical merger to secure inputs',
          'A firm earning large market share through superior product innovation and lower costs',
        ],
        correctAnswer: 1,
        explanation: 'Market allocation agreements between competitors — agreeing not to compete in each other\'s territories — are per se illegal under antitrust law. Per se violations do not require proof of actual harm; the anti-competitive intent is inherent in the practice. The other options are either pro-competitive (price cutting, innovation) or subject to case-by-case "rule of reason" analysis (vertical mergers).',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Antitrust policy aims to maintain competitive market structures and prevent firms from acquiring or abusing monopoly power. The Sherman Act (1890) prohibits restraint of trade and monopolisation; the Clayton Act (1914) targets mergers that substantially lessen competition. Horizontal mergers (between rivals) raise concentration and are scrutinised most heavily; vertical mergers (between suppliers and buyers) and conglomerate mergers receive less automatic suspicion but may still face review. Regulators use the Herfindahl-Hirschman Index (HHI = sum of squared market share percentages) to measure concentration — post-merger HHI above 2,500 in a market with a large increase triggers close scrutiny. Price-fixing, bid-rigging, and market allocation are per se violations requiring no proof of harm.

Where competition is not viable — natural monopolies such as electricity grids and water networks — regulation substitutes for market discipline. The fundamental trade-off is between allocative efficiency and commercial viability. Marginal-cost pricing (P = MC) achieves allocative efficiency but generates losses when average cost exceeds marginal cost, requiring subsidies. Average-cost pricing (P = ATC) achieves zero economic profit without a subsidy but leaves P > MC, creating residual allocative inefficiency. Rate-of-return regulation allows a "fair" return on capital but can incentivise over-investment in capital (the Averch-Johnson effect). Modern price-cap (RPI-X) regulation sets a ceiling that declines in real terms, forcing the firm to improve efficiency to maintain profitability — shifting the incentive structure without requiring regulators to monitor costs directly.`,
      prerequisiteRecap: `Lesson 2 established that public goods generate a free-rider problem causing private markets to underprovide, and that information asymmetries (adverse selection before contracting; moral hazard after) cause further market failures. Antitrust and regulation address a third category — concentrated market power — using the efficiency analysis of monopoly pricing from Module 2.`,
      recallQuestions: [
        {
          id: 'ap3-l3-recall-1',
          type: 'mcq' as const,
          question: 'A good is non-rival and non-excludable. Which market outcome does this most directly predict?',
          options: [
            'Private markets underprovide or do not provide the good at all, because non-payers cannot be excluded and free-riding undermines willingness to pay',
            'Private markets overprovide the good because non-rivalry means production costs are zero',
            'Private markets provide the efficient quantity because non-excludability ensures all consumers reveal their true preferences',
            'Private markets underprovide the good only if it also generates positive externalities for third parties',
          ],
          correctAnswer: 0,
          explanation: 'Non-excludability means free-riding is possible — individuals can consume the good without paying. Rational agents have no incentive to contribute voluntarily, so private producers cannot recover costs and will not supply the good. Non-rivalry means one person\'s consumption does not reduce availability for others — but this amplifies the free-rider problem rather than solving it. Government provision funded by taxation is the standard response.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
]
