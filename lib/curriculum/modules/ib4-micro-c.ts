import type { CurriculumModule, Lesson } from '@/lib/types'

const lessons: Lesson[] = [
  {
    id: 'ib4-l1', moduleId: 'ib4-micro-c', title: 'Costs of Production — All Curves (HL)', description: 'Derive and graph all short-run and long-run cost curves; explain shape of each; connect to diminishing returns and economies of scale.', order: 1, estimatedMinutes: 45, tags: ['IB', 'HL', 'cost-curves', 'LRAC'],
    flashcards: [
      { id: 'fc-ib4-l1-1', front: 'Why is the MC curve U-shaped?', back: 'Initially, adding variable inputs raises marginal product (increasing returns), so MC falls. Eventually diminishing marginal returns set in — each extra unit of the variable input adds less output — driving MC upward.', hint: 'Think about what happens to the extra output of each additional worker.', tags: ['IB', 'HL', 'cost-curves'] },
      { id: 'fc-ib4-l1-2', front: 'What is the relationship between the MC curve and AVC and ATC?', back: 'MC intersects both AVC and ATC at their minimum points. When MC is below an average curve the average is falling; when MC is above it the average is rising. This is the marginal-average relationship.', hint: 'Think of your GPA: a grade below your average pulls it down.', tags: ['IB', 'HL', 'cost-curves'] },
      { id: 'fc-ib4-l1-3', front: 'What determines the shape of the Long-Run Average Cost (LRAC) curve?', back: 'The LRAC is the envelope of all possible short-run ATC curves. It falls due to economies of scale (specialisation, bulk purchasing, indivisible capital), reaches a minimum at the minimum efficient scale, and rises due to diseconomies of scale (managerial inefficiency, coordination failures).', hint: 'LRAC reflects choices over plant size — all inputs are variable in the long run.', tags: ['IB', 'HL', 'LRAC'] },
    ],
    quiz: [
      { id: 'q-ib4-l1-1', type: 'mcq', question: 'A firm\'s total fixed cost is $500 and its total variable cost at 50 units of output is $750. What is the average total cost at 50 units?', options: ['$15.00', '$25.00', '$10.00', '$50.00'], correctAnswer: 1, explanation: 'ATC = TC / Q = ($500 + $750) / 50 = $1,250 / 50 = $25.00.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l1-2', type: 'mcq', question: 'Which of the following is consistent with a firm experiencing economies of scale?', options: ['Long-run average cost rises as output doubles', 'Long-run average cost falls as output doubles', 'Marginal cost exceeds average total cost at all output levels', 'Average fixed cost rises as output expands'], correctAnswer: 1, explanation: 'Economies of scale exist when long-run average cost falls as the scale of production increases. This is caused by factors such as specialisation, bulk-buying advantages, and the spreading of indivisible capital costs.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `In the short run at least one input — typically capital — is fixed, so firms adjust output by varying labour and materials. This gives rise to the full family of short-run cost curves. Total fixed cost (TFC) is a horizontal line because it does not change with output. Total variable cost (TVC) rises with output, first at a decreasing rate (as the variable input is used more efficiently alongside the fixed input) then at an increasing rate once diminishing marginal returns take hold. Total cost (TC) is simply TFC + TVC. From these three totals, all the average and marginal curves are derived: AFC = TFC/Q (a continuously falling hyperbola), AVC = TVC/Q (U-shaped), ATC = TC/Q = AFC + AVC (U-shaped, reaching its minimum to the right of AVC's minimum), and MC = ΔTC/ΔQ (U-shaped, intersecting both AVC and ATC at their lowest points).\n\nIn the long run all inputs are variable and firms choose their optimal scale of plant. The long-run average cost (LRAC) curve is the envelope of all feasible short-run ATC curves, tracing the lowest attainable average cost at each output level when plant size is fully adjustable. The LRAC typically falls at low output levels (economies of scale driven by specialisation and indivisibilities), flattens at the minimum efficient scale, and may rise at very large scales (diseconomies of scale from managerial complexity). IB HL candidates must be able to draw and label all these curves with precise intersections, connect the shape of MC to the law of diminishing marginal returns, and link the shape of LRAC to the concept of returns to scale — a common Paper 3 extended-response requirement.`,
      prerequisiteRecap: `Monopolistic competition (the last topic in ib3) showed that firms with differentiated products face downward-sloping demand and earn only normal profit in the long run due to free entry; understanding cost curves now gives us the tools to explain precisely why that long-run equilibrium forms where the demand curve is tangent to ATC.`,
      recallQuestions: [
        {
          id: 'ib4-l1-recall-1',
          type: 'mcq' as const,
          question: 'In long-run equilibrium, a monopolistically competitive firm produces where its demand curve is tangent to ATC because:',
          options: [
            'Free entry eliminates economic profit, so price equals average total cost at the profit-maximising output',
            'The government regulates price to equal average total cost',
            'Firms collude to set price equal to minimum ATC',
            'Marginal cost equals average total cost at all output levels',
          ],
          correctAnswer: 0,
          explanation: 'Free entry drives economic profit to zero, meaning P = ATC. Because the firm faces a downward-sloping demand curve, the tangency occurs to the left of minimum ATC, creating excess capacity — a key feature distinguishing monopolistic competition from perfect competition.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib4-l2', moduleId: 'ib4-micro-c', title: 'Revenue Concepts and Profit Maximisation (HL)', description: 'Define AR, MR, TR for perfect competition and monopoly; derive the MR=MC profit-maximisation rule.', order: 2, estimatedMinutes: 40, tags: ['IB', 'HL', 'revenue', 'profit-maximisation'],
    flashcards: [
      { id: 'fc-ib4-l2-1', front: 'Why is MR < AR (Price) for a monopolist?', back: 'To sell one more unit the monopolist must lower the price on all previous units. The revenue gained from the extra unit is partly offset by the price reduction on all other units, so MR falls below price (AR). For a linear demand curve, MR has the same intercept but twice the slope.', hint: 'The monopolist faces the whole downward-sloping market demand curve.', tags: ['IB', 'HL', 'revenue'] },
      { id: 'fc-ib4-l2-2', front: 'State the profit-maximisation rule and explain why it works.', back: 'A firm maximises profit by producing where MR = MC (with MC rising). If MR > MC, producing one more unit adds more revenue than cost — profit rises. If MR < MC, producing one more unit costs more than it earns — profit falls. Only at MR = MC is there no further gain from changing output.', hint: 'Think of MR and MC as the "extra revenue" and "extra cost" of the next unit.', tags: ['IB', 'HL', 'profit-maximisation'] },
      { id: 'fc-ib4-l2-3', front: 'Under perfect competition, what is the relationship between P, AR, MR, and the demand curve facing the firm?', back: 'In perfect competition the firm is a price taker, so it faces a perfectly elastic (horizontal) demand curve at the market price P. Because price is constant for every unit sold, AR = P and MR = P. The firm\'s demand, AR, and MR curves are all the same horizontal line.', hint: 'A price taker cannot influence price, so extra revenue per unit is always equal to price.', tags: ['IB', 'HL', 'revenue'] },
    ],
    quiz: [
      { id: 'q-ib4-l2-1', type: 'mcq', question: 'A monopolist faces the demand schedule: Q = 10 at P = $50; Q = 11 at P = $48. What is the marginal revenue of the 11th unit?', options: ['$48', '$28', '$50', '$22'], correctAnswer: 1, explanation: 'TR at Q=10 is $500; TR at Q=11 is $528. MR = ΔTR/ΔQ = $528 − $500 = $28. MR is less than the new price ($48) because price was reduced on all 10 previous units.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l2-2', type: 'mcq', question: 'A profit-maximising firm is currently producing where MR = $20 and MC = $14. To maximise profit it should:', options: ['Reduce output until MR = MC', 'Increase output until MR = MC', 'Shut down, as MR exceeds MC', 'Keep output constant, since revenue exceeds cost'], correctAnswer: 1, explanation: 'When MR > MC, each additional unit adds more to revenue than to cost, so expanding output raises profit. The firm should increase output until MR falls to equal MC (or MC rises to meet MR).', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Revenue analysis begins with three related concepts. Total revenue (TR) is simply price multiplied by quantity: TR = P × Q. Average revenue (AR) is TR/Q = P, so the AR curve is identical to the demand curve faced by the firm. Marginal revenue (MR) is the change in total revenue from selling one additional unit. For a perfectly competitive firm that is a price taker, price does not change with quantity, so MR = AR = P — all three coincide as a horizontal line. For a monopolist that faces a downward-sloping demand curve, increasing output requires a price reduction on all units, making MR fall faster than AR. For a linear inverse demand P = a − bQ, TR = aQ − bQ², and MR = a − 2bQ: the MR curve has the same y-intercept as demand but twice the gradient.\n\nThe profit-maximisation rule — produce where MR = MC — is universal across all market structures. Its logic is purely marginal: if selling one more unit adds more to revenue than to cost (MR > MC), profit rises and the firm should expand; if MR < MC, the extra unit destroys profit and the firm should contract. Profit is maximised at the output where these two marginals are exactly equal and MC is rising. On IB HL diagrams, the price is then read off the demand (AR) curve at that quantity. For a perfect competitor this is trivially the market price; for a monopolist it is the point on the downward-sloping demand curve directly above the MR = MC intersection, which is always above both MR and MC at that quantity.`,
      prerequisiteRecap: `The previous lesson derived all short-run and long-run cost curves, including the U-shaped MC curve rooted in diminishing marginal returns; revenue analysis now pairs with those cost concepts to yield the universal profit-maximisation rule MR = MC.`,
      recallQuestions: [
        {
          id: 'ib4-l2-recall-1',
          type: 'mcq' as const,
          question: 'Why is the marginal cost (MC) curve U-shaped in the short run?',
          options: [
            'Initially diminishing marginal returns cause MC to fall, then diminishing returns set in and MC rises as more variable input is added',
            'Fixed costs spread over more units initially lower MC, then variable costs raise it',
            'The firm switches from labour-intensive to capital-intensive production midway through output expansion',
            'Government taxes on inputs create a kink in the cost curve at minimum efficient scale',
          ],
          correctAnswer: 0,
          explanation: 'In the short run, adding more of the variable input (labour) to a fixed input (capital) first raises marginal product — lowering MC — but eventually diminishing marginal returns set in: each additional worker adds less output, so the cost per extra unit rises, producing the U-shape.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib4-l3', moduleId: 'ib4-micro-c', title: 'Perfect Competition — Short Run and Long Run (HL)', description: 'Analyse firm and industry equilibrium in both runs; show zero-profit long-run equilibrium; assess efficiency outcomes.', order: 3, estimatedMinutes: 40, tags: ['IB', 'HL', 'perfect-competition'],
    flashcards: [
      { id: 'fc-ib4-l3-1', front: 'What are the four conditions for perfect competition?', back: '1. Many buyers and sellers (no single agent has market power). 2. Homogeneous (identical) products. 3. Perfect information about prices and costs. 4. Free entry and exit in the long run. These conditions make each firm a price taker facing horizontal demand at the market price.', hint: 'Focus on what makes no individual firm able to influence price.', tags: ['IB', 'HL', 'perfect-competition'] },
      { id: 'fc-ib4-l3-2', front: 'Why is long-run equilibrium price equal to minimum ATC in perfect competition?', back: 'Economic profits attract new entrants (free entry), increasing market supply and driving price down. Economic losses cause exit, reducing supply and raising price. This process stops only when economic profit equals zero — i.e., when P = ATC. At this point P also equals minimum ATC because MR = MC and P = ATC must both hold simultaneously.', hint: 'Ask: what stops entry or exit?', tags: ['IB', 'HL', 'perfect-competition'] },
      { id: 'fc-ib4-l3-3', front: 'How does perfect competition achieve both allocative and productive efficiency in the long run?', back: 'Allocative efficiency: P = MC, meaning the value consumers place on the last unit equals its cost of production — resources are optimally allocated. Productive efficiency: firms produce at minimum ATC, minimising per-unit cost. Both hold simultaneously only in long-run perfectly competitive equilibrium.', hint: 'Allocative = right quantity; productive = right cost per unit.', tags: ['IB', 'HL', 'efficiency'] },
    ],
    quiz: [
      { id: 'q-ib4-l3-1', type: 'mcq', question: 'In the short run, a perfectly competitive firm is earning economic losses but continues to produce. This is rational when:', options: ['Price exceeds average total cost', 'Price exceeds average variable cost but is below average total cost', 'Price equals marginal cost', 'Average fixed cost is rising'], correctAnswer: 1, explanation: 'If P > AVC, the firm covers all variable costs and contributes to fixed costs. Producing minimises the loss compared to shutting down (where the entire fixed cost is lost). The firm continues until the long run when it can exit.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l3-2', type: 'mcq', question: 'Which of the following correctly describes the long-run equilibrium of a perfectly competitive firm?', options: ['P > MC = MR = ATC (minimum)', 'P = MR = MC = ATC (minimum)', 'P = ATC > MC = MR', 'P = MR > MC = ATC (minimum)'], correctAnswer: 1, explanation: 'In long-run equilibrium: (i) the firm profit-maximises so MR = MC; (ii) for a price taker P = MR; (iii) zero economic profit requires P = ATC; (iv) the tangency of P = ATC with MC at minimum ATC ensures productive efficiency. All four equalities hold simultaneously.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `A perfectly competitive market is characterised by many price-taking firms selling an identical product with free entry and exit. Each firm faces a perfectly elastic demand curve at the market-determined price, meaning P = AR = MR. In the short run, a firm produces where P = MC (the profit-maximising rule simplified for a price taker). Depending on where P sits relative to ATC and AVC, the firm can earn economic profit (P > ATC), a loss it minimises by producing (AVC < P < ATC), or will shut down (P < AVC). Short-run industry supply is the horizontal sum of all individual firms' MC curves above AVC.\n\nThe long run is where perfect competition displays its most powerful properties. Economic profits trigger entry: new firms join the industry, supply increases, price falls, and profits erode. Economic losses trigger exit: firms leave, supply decreases, price rises, and losses diminish. This self-correcting mechanism drives the industry inexorably to a long-run equilibrium in which price equals minimum average total cost and economic profit equals zero. At this point, P = MC (allocative efficiency — resources are directed to their most valued use) and P = minimum ATC (productive efficiency — goods are produced at the lowest possible cost). IB examiners frequently ask for a two-panel diagram showing the industry market on the left and the representative firm on the right, with the adjustment process narrated step by step.`,
      prerequisiteRecap: `The previous lesson established that profit is maximised where MR = MC and that price is read off the demand (AR) curve at that quantity; perfect competition is now the first market structure where we apply this rule, with the simplification that P = MR = AR because the firm is a price taker.`,
      recallQuestions: [
        {
          id: 'ib4-l3-recall-1',
          type: 'mcq' as const,
          question: 'For a perfectly competitive firm, which of the following is true about marginal revenue (MR)?',
          options: [
            'MR equals the market price at every level of output, because the firm can sell any quantity without affecting price',
            'MR lies below the demand curve, because the firm must lower price to sell additional units',
            'MR equals zero when total revenue is maximised and the firm is profit-maximising',
            'MR equals average total cost at the profit-maximising output level',
          ],
          correctAnswer: 0,
          explanation: 'A perfectly competitive firm is a price taker facing a horizontal demand curve at the market price P. Because price does not fall as output rises, every additional unit sold adds exactly P to total revenue, so MR = P = AR at all output levels.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib4-l4', moduleId: 'ib4-micro-c', title: 'Monopoly — Diagrams, Efficiency, Regulation (HL)', description: 'Draw single-price monopoly equilibrium; calculate DWL; evaluate price regulation and nationalisation.', order: 4, estimatedMinutes: 40, tags: ['IB', 'HL', 'monopoly', 'regulation'],
    flashcards: [
      { id: 'fc-ib4-l4-1', front: 'How does a monopolist determine its profit-maximising price and output?', back: 'Step 1: Find Q* where MR = MC. Step 2: Read the monopoly price P* off the demand (AR) curve at Q*. P* > MR = MC because demand slopes down. The profit is the rectangle (P* − ATC) × Q*.', hint: 'Never read price off the MR curve — always go up to demand.', tags: ['IB', 'HL', 'monopoly'] },
      { id: 'fc-ib4-l4-2', front: 'What is deadweight loss (DWL) under monopoly and why does it arise?', back: 'DWL is the loss of total surplus that occurs because the monopolist produces less than the socially optimal (competitive) output. It is the triangle between the demand curve and MC between the monopoly quantity Q* and the competitive quantity Qc. Trades that would benefit both consumers and society are not made because P > MC.', hint: 'DWL = unrealised gains from trade foregone by restricting output.', tags: ['IB', 'HL', 'monopoly', 'DWL'] },
      { id: 'fc-ib4-l4-3', front: 'Compare average-cost pricing and marginal-cost pricing as regulatory responses to monopoly.', back: 'Average-cost pricing (P = ATC): price falls, output rises, DWL is reduced, and the firm earns zero economic profit — commercially viable but still P > MC. Marginal-cost pricing (P = MC): achieves allocative efficiency (P = MC) but, for a natural monopoly with falling LRAC, P < ATC, so the firm makes losses and requires a government subsidy.', hint: 'The trade-off is between efficiency and commercial viability.', tags: ['IB', 'HL', 'regulation'] },
    ],
    quiz: [
      { id: 'q-ib4-l4-1', type: 'mcq', question: 'Compared to a competitive market with the same costs, a single-price profit-maximising monopolist will:', options: ['Produce the same output but at a higher price', 'Produce less output and charge a higher price, creating deadweight loss', 'Produce more output and charge a lower price', 'Produce less output and charge a lower price'], correctAnswer: 1, explanation: 'The monopolist restricts output to Q* < Qc (where MR = MC rather than P = MC) and charges P* > Pc. This restriction transfers some consumer surplus to producer surplus and destroys the triangle of deadweight loss.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l4-2', type: 'mcq', question: 'A government regulates a natural monopoly by setting price equal to marginal cost. Which of the following is a likely consequence?', options: ['The firm earns a large economic profit', 'The firm incurs losses and may require a government subsidy', 'Deadweight loss increases compared to the unregulated monopoly', 'The firm produces below the competitive output level'], correctAnswer: 1, explanation: 'For a natural monopoly, LRAC is falling, so MC < ATC at all relevant output levels. Setting P = MC means P < ATC — the firm covers marginal cost but not average cost, earning economic losses. A subsidy is required to keep it operating.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `A monopoly exists when a single firm supplies the entire market and faces the downward-sloping industry demand curve. Because the monopolist must lower price to sell more, its marginal revenue lies below its average revenue (demand) at every output level. The firm profit-maximises by setting MR = MC, yielding quantity Q* and reading price P* off the demand curve above. This produces a price above both MR and MC, meaning the last unit sold is worth more to consumers (P*) than it costs to produce (MC), yet further units that consumers would value above their cost go unproduced. This gap defines the deadweight loss triangle — foregone social surplus — which is the central welfare critique of monopoly power.\n\nRegulatory responses each involve trade-offs. A price cap at average cost (P = ATC) eliminates economic profit and expands output closer to the competitive level, but stops short of full allocative efficiency since P > MC. A price cap at marginal cost (P = MC) achieves allocative efficiency but, for a natural monopoly where LRAC is continuously declining, results in losses requiring a taxpayer subsidy. Nationalisation transfers ownership to the state so that profit motives can be subordinated to social welfare objectives, but risks productive inefficiency from weakened incentives. IB HL students must evaluate all three policy options using diagram evidence, and also consider dynamic arguments: monopolies may invest profits in R&D, yielding long-run benefits that partially offset short-run welfare losses.`,
      prerequisiteRecap: `Perfect competition (the previous lesson) achieves allocative efficiency (P = MC) and productive efficiency (P = min ATC) in the long run through free entry and exit; monopoly now shows what happens when entry is blocked — the firm restricts output, raises price above MC, and generates deadweight loss.`,
      recallQuestions: [
        {
          id: 'ib4-l4-recall-1',
          type: 'mcq' as const,
          question: 'In a perfectly competitive long-run equilibrium, which conditions hold simultaneously?',
          options: [
            'P = MR = MC = minimum ATC, meaning both allocative and productive efficiency are achieved',
            'P = MC = MR, but P > minimum ATC because firms earn normal profit',
            'P > MC = MR = minimum ATC, because barriers to entry prevent full competition',
            'P = minimum ATC only, with no requirement that MC equals price',
          ],
          correctAnswer: 0,
          explanation: 'In long-run perfect competition, free entry/exit drives economic profit to zero (P = ATC), and profit maximisation requires P = MR = MC. These conditions are simultaneously satisfied only at minimum ATC, yielding both allocative (P = MC) and productive (P = min ATC) efficiency.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib4-l5', moduleId: 'ib4-micro-c', title: 'Monopolistic Competition (HL)', description: 'Graph short-run and long-run equilibria; explain excess capacity and non-price competition.', order: 5, estimatedMinutes: 35, tags: ['IB', 'HL', 'monopolistic-competition'],
    flashcards: [
      { id: 'fc-ib4-l5-1', front: 'What features distinguish monopolistic competition from perfect competition and monopoly?', back: 'Like perfect competition: many firms, free entry and exit, zero long-run economic profit. Like monopoly: differentiated products give each firm a downward-sloping demand curve and some degree of pricing power. Unlike monopoly: no barriers to entry mean long-run profits are competed away.', hint: 'It combines elements of both extremes.', tags: ['IB', 'HL', 'monopolistic-competition'] },
      { id: 'fc-ib4-l5-2', front: 'Explain the concept of excess capacity in monopolistic competition.', back: 'In long-run equilibrium, the demand curve is tangent to ATC to the left of ATC\'s minimum. The firm produces at the tangency quantity, which is less than the minimum-ATC output. The gap between the minimum-ATC quantity and actual output is called excess capacity — the firm could lower unit costs by producing more but does not because it would lose money.', hint: 'Draw the tangency point and mark where minimum ATC occurs.', tags: ['IB', 'HL', 'efficiency'] },
      { id: 'fc-ib4-l5-3', front: 'Why do monopolistically competitive firms engage in non-price competition?', back: 'Because products are differentiated and demand curves are downward-sloping, firms can increase demand and reduce elasticity by strengthening brand loyalty through advertising, quality improvements, and innovation. Non-price competition shifts the firm\'s demand curve rightward and makes it steeper, raising potential profit without cutting price.', hint: 'Non-price competition works on the demand curve, not the cost curves.', tags: ['IB', 'HL', 'monopolistic-competition'] },
    ],
    quiz: [
      { id: 'q-ib4-l5-1', type: 'mcq', question: 'In long-run equilibrium, a monopolistically competitive firm differs from a perfectly competitive firm in that it:', options: ['Earns positive economic profit in the long run', 'Produces at an output level below the minimum efficient scale, creating excess capacity', 'Sets MR equal to MC to maximise profit', 'Faces perfectly elastic demand'], correctAnswer: 1, explanation: 'Both firms earn zero economic profit in the long run and both set MR = MC. The key difference is that the monopolistic competitor faces a downward-sloping demand curve, so the long-run tangency equilibrium occurs to the left of minimum ATC — excess capacity — whereas the perfect competitor produces at minimum ATC.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l5-2', type: 'mcq', question: 'A monopolistically competitive firm earns short-run economic profit. Which sequence best describes the long-run adjustment?', options: ['Exit of firms → supply decreases → price rises → profit remains positive', 'Entry of firms → each firm\'s demand shifts left → profit falls to zero', 'Entry of firms → each firm\'s demand shifts right → profit rises further', 'Exit of firms → each firm\'s demand shifts left → profit falls to zero'], correctAnswer: 1, explanation: 'Positive economic profit attracts new entrants offering similar but differentiated products. Each incumbent firm loses customers to newcomers, shifting its demand curve leftward (and making it more elastic) until the demand curve is tangent to ATC at zero economic profit.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Monopolistic competition describes markets where many firms sell differentiated products — restaurants, clothing brands, smartphone apps — with free entry and exit. Because each firm's product is distinct, it faces a downward-sloping demand curve for its own variety rather than the perfectly flat demand of a price taker. In the short run the firm profit-maximises at MR = MC and may earn positive or negative economic profit. Positive profits attract new entrants who offer rival substitutes, gradually eroding each incumbent's customer base. In the long run, entry continues until the firm's demand curve has shifted left enough to be exactly tangent to its ATC curve, yielding zero economic profit.\n\nThe long-run tangency equilibrium has two efficiency implications. First, because the demand curve slopes down at the tangency point, MR < P, so MR = MC implies P > MC — allocative inefficiency persists. Second, the tangency occurs on the downward-sloping portion of ATC, to the left of minimum ATC — the firm operates with excess capacity, meaning it could reduce per-unit costs by producing more. These inefficiencies are the price society pays for product variety. IB evaluations should acknowledge the consumer benefit of differentiated choice while quantifying the welfare cost, and should discuss how advertising — a key form of non-price competition — can either reinforce differentiation and increase demand or inflate costs and reduce efficiency.`,
      prerequisiteRecap: `Monopoly (the previous lesson) generates deadweight loss and allocative inefficiency because a single firm with no entry faces a gap between price and marginal cost; monopolistic competition now introduces product differentiation and free entry, showing how partial market power and zero long-run profit coexist.`,
      recallQuestions: [
        {
          id: 'ib4-l5-recall-1',
          type: 'mcq' as const,
          question: 'A single-price monopolist produces less than the competitive output and charges a price above MC. The resulting welfare loss is called:',
          options: [
            'Deadweight loss — the triangle of foregone consumer and producer surplus from trades that do not occur because output is restricted below the competitive level',
            'Excess capacity — the gap between the monopolist\'s output and the minimum-ATC output',
            'X-inefficiency — the cost increase from weak competitive pressure on management',
            'Consumer surplus — the area above price and below the demand curve',
          ],
          correctAnswer: 0,
          explanation: 'Deadweight loss (DWL) is the loss of total surplus when the monopolist restricts output to Q* < Qc. It equals the triangle between the demand curve and MC between Q* and Qc — transactions that would benefit both parties but do not occur because P > MC.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib4-l6', moduleId: 'ib4-micro-c', title: 'Oligopoly — Interdependence and Collusion (HL)', description: 'Explain kinked demand curve, collusion, cartels, and game theory in oligopolistic behaviour.', order: 6, estimatedMinutes: 40, tags: ['IB', 'HL', 'oligopoly', 'cartels', 'game-theory'],
    flashcards: [
      { id: 'fc-ib4-l6-1', front: 'Why does the kinked demand curve produce price rigidity in oligopoly?', back: 'Rivals match price cuts (preventing demand from rising much, so demand is inelastic below current price) but do not match price rises (so the firm loses many customers, making demand elastic above current price). This creates a kink in demand at the prevailing price and a discontinuous gap in the MR curve. MC can shift within the gap without changing the profit-maximising price or output.', hint: 'Draw the kink and trace what happens to MR at the quantity of the kink.', tags: ['IB', 'HL', 'oligopoly'] },
      { id: 'fc-ib4-l6-2', front: 'What conditions make a cartel more likely to form and sustain itself?', back: 'More likely when: few firms (easier coordination), homogeneous products (uniform pricing), high barriers to entry (no outside competition), inelastic demand (price rises generate large revenue gains), and effective monitoring of members. Sustainability requires credible punishment for cheating and repeated interaction so future cooperation is valued.', hint: 'OPEC is the classic real-world example.', tags: ['IB', 'HL', 'cartels'] },
      { id: 'fc-ib4-l6-3', front: 'State and explain the Nash equilibrium in a two-firm Prisoners\' Dilemma pricing game.', back: 'Each firm has a dominant strategy to undercut (or produce more than the cartel quota) regardless of the rival\'s choice. When both play their dominant strategies the Nash equilibrium is reached: both defect, prices are lower (or output is higher) than the cooperative outcome, and combined profits are lower — yet neither firm can improve by unilaterally changing strategy.', hint: 'A Nash equilibrium is stable because no single player can gain by deviating alone.', tags: ['IB', 'HL', 'game-theory'] },
    ],
    quiz: [
      { id: 'q-ib4-l6-1', type: 'mcq', question: 'The kinked demand curve model of oligopoly predicts that prices will be sticky because:', options: ['All firms have identical marginal cost curves', 'There is a gap in the marginal revenue curve over which moderate cost changes leave price unchanged', 'Firms always collude to set the monopoly price', 'Government regulation prevents price changes'], correctAnswer: 1, explanation: 'The kink in the demand curve at the prevailing price creates a vertical discontinuity in MR. As long as MC intersects MR within this gap, the profit-maximising output and price remain unchanged even if costs shift — explaining observed price rigidity in oligopolistic markets.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l6-2', type: 'mcq', question: 'In a game-theory payoff matrix, if Firm A has a dominant strategy to advertise regardless of Firm B\'s choice, and Firm B also has a dominant strategy to advertise, the Nash equilibrium is:', options: ['Neither firm advertises', 'Only Firm A advertises', 'Both firms advertise, even if joint profit is lower than if neither advertised', 'Firms take turns advertising to maximise joint profit'], correctAnswer: 2, explanation: 'When each player has a dominant strategy, the Nash equilibrium is for both to play it. Even if mutual non-advertising would generate higher combined profits (the cooperative outcome), the dominant strategy logic drives both firms to advertise — a classic Prisoners\' Dilemma result.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Oligopoly is defined by a small number of interdependent firms where each firm's decisions on price, output, or advertising directly affect rivals and provoke reactions. This strategic interdependence makes oligopoly far more complex to model than other market structures. The kinked demand curve model offers one explanation for observed price stability: a firm raising its price finds rivals do not follow, so it loses many customers (elastic demand above the kink); a firm cutting price finds rivals immediately match the cut, so it gains few extra customers (inelastic demand below the kink). The kink produces a discontinuity in the MR curve, creating a range over which shifts in MC leave the profit-maximising price unchanged.\n\nGame theory provides a richer analytical framework. In a two-firm payoff matrix, a dominant strategy — one that is best regardless of the rival's choice — simplifies the prediction: both firms play their dominant strategy, reaching a Nash equilibrium from which neither can profitably deviate alone. Applied to cartel behaviour, game theory reveals why collusion is inherently unstable: each member has an incentive to cheat on the agreed output quota (producing more earns extra profit if rivals comply), making defection a dominant strategy. The Nash equilibrium is competitive overproduction, eroding the cartel's monopoly profits. IB HL assessments require students to construct and read payoff matrices, identify dominant strategies and Nash equilibria, and evaluate the conditions under which repeated interaction might sustain cooperation.`,
      prerequisiteRecap: `Monopolistic competition (the previous lesson) combines differentiated products with free entry, yielding zero long-run economic profit and excess capacity; oligopoly now introduces a small number of interdependent firms where strategic interaction — not entry alone — determines market outcomes.`,
      recallQuestions: [
        {
          id: 'ib4-l6-recall-1',
          type: 'mcq' as const,
          question: 'In the long-run equilibrium of a monopolistically competitive firm, which of the following is true?',
          options: [
            'The firm earns zero economic profit and produces with excess capacity, because the demand curve is tangent to ATC to the left of its minimum',
            'The firm earns zero economic profit and produces at minimum ATC, achieving productive efficiency',
            'The firm earns positive economic profit because product differentiation provides sustained market power',
            'The firm produces where P = MC, achieving allocative efficiency despite product differentiation',
          ],
          correctAnswer: 0,
          explanation: 'Free entry erodes economic profit to zero (demand tangent to ATC), but because demand slopes down, the tangency lies to the left of minimum ATC — excess capacity. P > MC at this output, so allocative inefficiency remains. This distinguishes monopolistic competition from perfect competition, where zero profit occurs at minimum ATC.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib4-l7', moduleId: 'ib4-micro-c', title: 'Price Discrimination — All Three Degrees (HL)', description: 'Explain conditions required, types with diagrams, and welfare effects of price discrimination.', order: 7, estimatedMinutes: 35, tags: ['IB', 'HL', 'price-discrimination'],
    flashcards: [
      { id: 'fc-ib4-l7-1', front: 'What three conditions are necessary for price discrimination to be possible?', back: '1. Market power: the firm must be a price setter (downward-sloping demand), not a price taker. 2. Market separation: the firm must be able to identify and separate consumers with different price elasticities of demand. 3. No resale: consumers in the lower-price segment must not be able to resell to consumers in the higher-price segment (preventing arbitrage).', hint: 'Without all three, discrimination unravels.', tags: ['IB', 'HL', 'price-discrimination'] },
      { id: 'fc-ib4-l7-2', front: 'Distinguish first-, second-, and third-degree price discrimination.', back: 'First degree (perfect): each unit sold at the consumer\'s exact maximum willingness to pay — producer captures all consumer surplus, no DWL. Second degree: price varies with quantity purchased (e.g., bulk discounts) — different prices for different quantities, not different consumers. Third degree: different prices for different consumer groups based on elasticity (e.g., student discounts, peak/off-peak fares) — most common in practice.', hint: 'First = per person per unit; second = per unit bought; third = per group.', tags: ['IB', 'HL', 'price-discrimination'] },
      { id: 'fc-ib4-l7-3', front: 'How does third-degree price discrimination affect allocative efficiency and output compared to single-price monopoly?', back: 'Output rises (the discriminating monopolist serves groups that would have been priced out under a single price), moving closer to the competitive quantity — potentially improving allocative efficiency. However, consumer surplus is redistributed to the producer and may be reduced overall. Whether total welfare rises depends on whether the output increase outweighs the redistribution loss; this is ambiguous in theory and empirical in practice.', hint: 'Think about who gains and who loses when the firm segments markets.', tags: ['IB', 'HL', 'price-discrimination'] },
    ],
    quiz: [
      { id: 'q-ib4-l7-1', type: 'mcq', question: 'An airline charges business travellers $800 and leisure travellers $300 for identical routes. This is an example of:', options: ['First-degree price discrimination', 'Second-degree price discrimination', 'Third-degree price discrimination', 'Predatory pricing'], correctAnswer: 2, explanation: 'Third-degree price discrimination charges different prices to different identifiable consumer groups (business vs. leisure travellers) based on their differing price elasticities of demand. Business travellers have more inelastic demand and are charged a higher price.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib4-l7-2', type: 'mcq', question: 'Under perfect (first-degree) price discrimination, compared to single-price monopoly:', options: ['Deadweight loss increases and consumer surplus is unchanged', 'Deadweight loss is eliminated but all consumer surplus is captured by the producer', 'Consumer surplus increases and producer surplus decreases', 'Output falls and deadweight loss increases'], correctAnswer: 1, explanation: 'A perfect price discriminator charges each consumer their exact willingness to pay, so no consumer surplus remains — it is entirely appropriated as producer surplus. Because the firm sells every unit where willingness to pay ≥ MC (including down to the competitive quantity), deadweight loss is fully eliminated and output equals the competitive level.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Price discrimination occurs when a firm with market power charges different prices for the same product based on differences in consumers' willingness to pay, not differences in cost. Three conditions must simultaneously hold: the firm must be a price maker (market power), it must be able to identify and separate consumer groups with different price elasticities, and resale between segments must be prevented (otherwise low-price buyers would arbitrage by reselling to high-price buyers, collapsing the price difference). These conditions explain why price discrimination is common in services (haircuts, airline tickets, medical treatment) where resale is physically impossible or legally restricted, but rare in standardised goods markets.\n\nThe welfare analysis of price discrimination requires careful segment-by-segment reasoning. Third-degree discrimination — the most prevalent type — charges lower prices to elastic-demand groups (students, off-peak users) and higher prices to inelastic groups (business travellers, peak users). Relative to a single monopoly price, elastic-demand consumers who were previously priced out of the market now gain access, increasing output and partially reducing deadweight loss. Inelastic-demand consumers pay more, losing consumer surplus. The net welfare effect is theoretically ambiguous. First-degree (perfect) discrimination is unambiguously efficient — all mutually beneficial trades occur and DWL disappears — but consumers receive none of the surplus. IB HL evaluations should draw separate diagrams for each market segment in third-degree discrimination, show the profit-maximisation condition (MR = MC) in each segment, and compare outcomes to the single-price monopoly baseline.`,
      prerequisiteRecap: `Oligopoly (the previous lesson) showed that strategic interdependence — modelled through kinked demand and game theory — can sustain prices above MC without formal collusion; price discrimination now explores how a firm with market power can further increase profit by extracting consumer surplus across different segments.`,
      recallQuestions: [
        {
          id: 'ib4-l7-recall-1',
          type: 'mcq' as const,
          question: 'In the kinked demand curve model of oligopoly, why does a gap appear in the marginal revenue curve at the prevailing price?',
          options: [
            'Rivals match price cuts but not price rises, creating a kink in demand and a discontinuity in MR at the current price',
            'The government imposes a price floor at the prevailing price, preventing further price cuts',
            'Firms in oligopoly always face perfectly inelastic demand, making MR undefined',
            'The kink arises because MC equals MR at two different output levels simultaneously',
          ],
          correctAnswer: 0,
          explanation: 'When a firm raises price, rivals do not follow — demand is elastic above the kink. When it cuts price, rivals match — demand is inelastic below the kink. This asymmetry creates a kink at the prevailing price and a vertical gap in the MR curve, so moderate cost changes do not alter the profit-maximising price.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
]

export const ib4MicroC: CurriculumModule = {
  id: 'ib4-micro-c',
  title: 'IB Unit 2C — Theory of the Firm (HL)',
  description: 'Cover the full HL content: cost curves, revenue analysis, all four market structures, and price discrimination.',
  tier: 'IB' as const,
  track: 'IB_HL' as const,
  unit: 4,
  estimatedHours: 6,
  color: '#8b5cf6',
  icon: 'BookOpen',
  lessons,
}
