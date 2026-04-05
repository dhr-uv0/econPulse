import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'i2-market-structures',
  title: 'Market Structures',
  description: 'Analyse the spectrum from perfect competition to monopoly and understand how structure shapes price, output, and efficiency.',
  tier: 'INTERMEDIATE' as const,
  track: 'INTERMEDIATE' as const,
  unit: 2,
  estimatedHours: 4,
  color: '#3b82f6',
  icon: 'TrendingUp',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: Perfect Competition ────────────────────────────────────────────
  {
    id: 'i2-l1',
    moduleId: 'i2-market-structures',
    title: 'Perfect Competition — Ideal Benchmark',
    description: 'Describe the five conditions for perfect competition and derive firm equilibrium in short and long run.',
    order: 1,
    estimatedMinutes: 40,
    tags: ['perfect-competition', 'zero-profit'],
    content: {
      isStub: false,
      realWorldHook:
        'Walk through a busy agricultural commodity exchange — wheat, corn, or soybeans — and you witness perfect competition almost in real time. Hundreds of buyers and sellers trade a standardised product at a single market price that no single participant can move. The individual wheat farmer is the textbook price taker: she checks the board, accepts the price, and decides only how many bushels to sell.',
      prerequisiteRecap: `The previous module concluded with the universal profit-maximising rule: a firm maximises profit by producing where MR = MC, then reads the price off the demand (AR) curve. Perfect competition applies this rule to a specific market structure where MR equals the market price at every unit, making profit-maximisation particularly transparent.`,
      recallQuestions: [
        {
          id: 'i2-l1-recall-1',
          type: 'mcq' as const,
          question: 'A firm\'s marginal revenue is £45 and its marginal cost is £30 at its current output. What should the firm do to maximise profit?',
          options: [
            'Increase output, because MR > MC and each additional unit adds to profit.',
            'Decrease output, because the firm is already earning positive profit.',
            'Keep output the same, because the difference between MR and MC is already at its widest.',
            'Increase output until MR equals zero.',
          ],
          correctAnswer: 0,
          explanation: 'When MR exceeds MC, producing one more unit adds more to revenue than to cost, so profit rises. The firm should expand output until MR = MC — the universal profit-maximising rule derived in the previous module.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'Perfect competition rests on five conditions: (1) many buyers and sellers, each too small to influence the market price; (2) a homogeneous (identical) product so consumers have no preference for one seller over another; (3) perfect information, meaning all participants know current prices and production techniques; (4) free entry and exit, so capital and labour flow without restriction; and (5) no externalities or government distortions. Together these conditions force every firm to be a price taker — it faces a perfectly elastic (horizontal) demand curve at the market price P, and its marginal revenue MR equals P at every unit.\n\nIn the short run a firm maximises profit by producing where MR = MC. Because P = MR, this also means P = MC. If market price exceeds average total cost (ATC) at that output, the firm earns economic profit; if P falls below ATC but stays above average variable cost (AVC), the firm covers variable costs and continues operating at a loss; if P drops below AVC the firm shuts down. Crucially, the short-run supply curve of a perfectly competitive firm is the portion of its MC curve that lies above AVC.\n\nIn the long run, economic profit attracts new entrants who shift the market supply curve right, pushing price down until profit is eliminated. Conversely, losses cause exit, reducing supply and raising price back toward zero profit. The long-run equilibrium settles where P = MC = minimum ATC, the point of both allocative and productive efficiency. This self-correcting mechanism makes perfect competition the welfare benchmark against which all other structures are judged.',
      vocabulary: [
        {
          term: 'Price taker',
          definition: 'A firm that accepts the market price as given and cannot influence it through its own output decisions.',
          example: 'A small wheat farmer sells at the Chicago Board of Trade price — if she charges a penny more, she sells nothing.',
        },
        {
          term: 'Normal profit',
          definition: 'The minimum return needed to keep a firm in its current industry; equivalent to zero economic profit, where total revenue equals total (explicit + implicit) cost.',
          example: 'When a restaurant earns exactly enough to cover the owner\'s forgone salary and all other costs, it earns normal profit and stays open.',
        },
        {
          term: 'Long-run supply curve',
          definition: 'The relationship between price and quantity supplied after all firms have fully adjusted; perfectly elastic (horizontal) in a constant-cost industry.',
          example: 'If the corn farming industry has constant input costs, a rise in corn demand eventually raises output but not the long-run price.',
        },
      ],
      examinerTip:
        'Examiners frequently ask you to draw both the market diagram and the individual firm diagram side by side. Remember: the market diagram shows a downward-sloping demand curve and an upward-sloping supply curve, while the firm diagram shows a flat (perfectly elastic) demand/MR line at the market price. Earn full marks by labelling both clearly and showing where P = MR = MC = min ATC in long-run equilibrium.',
    },
    flashcards: [
      {
        id: 'i2-l1-fc1',
        front: 'What is the profit-maximising rule for a perfectly competitive firm?',
        back: 'Produce where MR = MC. Because P = MR for a price taker, this simplifies to P = MC.',
        hint: 'Think about the point where the cost of making one more unit equals the revenue it brings.',
        tags: ['perfect-competition', 'profit-maximisation'],
      },
      {
        id: 'i2-l1-fc2',
        front: 'Why do firms enter a perfectly competitive market when economic profits exist?',
        back: 'Free entry allows new firms to join. Their entry increases market supply, drives price down, and eliminates economic profit, restoring zero-profit long-run equilibrium.',
        hint: 'No barriers = no lasting profit.',
        tags: ['perfect-competition', 'long-run', 'entry'],
      },
      {
        id: 'i2-l1-fc3',
        front: 'What is the shut-down condition in the short run?',
        back: 'A firm shuts down if price falls below average variable cost (P < AVC), because it cannot even cover its variable costs. It continues operating at a loss if P ≥ AVC.',
        hint: 'Fixed costs are sunk; variable costs are avoidable.',
        tags: ['perfect-competition', 'shut-down', 'AVC'],
      },
      {
        id: 'i2-l1-fc4',
        front: 'State the three equalities that hold at long-run perfectly competitive equilibrium.',
        back: 'P = MR = MC = minimum ATC. This triple equality means the market achieves both allocative efficiency (P = MC) and productive efficiency (min ATC).',
        hint: 'All three curves — demand/MR, MC, and ATC — meet at a single point on the firm diagram.',
        tags: ['perfect-competition', 'efficiency', 'long-run'],
      },
    ],
    quiz: [
      {
        id: 'i2-l1-q1',
        type: 'mcq',
        question: 'In perfect competition, a firm\'s marginal revenue (MR) is equal to which of the following?',
        options: [
          'Average total cost (ATC)',
          'Market price (P)',
          'Average variable cost (AVC)',
          'Marginal cost minus average fixed cost',
        ],
        correctAnswer: 1,
        explanation: 'Because each unit is sold at the same market price, MR = P for every unit produced. This horizontal demand curve also equals MR at every output level.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l1-q2',
        type: 'mcq',
        question: 'A perfectly competitive firm is earning economic profit in the short run. What is the long-run outcome predicted by the model?',
        options: [
          'The government imposes a price ceiling to protect consumers.',
          'Existing firms raise prices to maintain their profit.',
          'New firms enter the market, increasing supply and driving price down to the zero-profit level.',
          'The firm expands indefinitely, becoming a natural monopoly.',
        ],
        correctAnswer: 2,
        explanation: 'Free entry is a defining condition of perfect competition. Economic profit signals opportunity; new entrants increase supply, lower the market price, and eliminate profit until P = min ATC.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l1-q3',
        type: 'mcq',
        question: 'Which condition ensures that a perfectly competitive firm is a price taker?',
        options: [
          'The firm sells a differentiated product.',
          'There are many small firms each selling a homogeneous product.',
          'The government sets a minimum price above equilibrium.',
          'Entry into the industry requires a government licence.',
        ],
        correctAnswer: 1,
        explanation: 'With many small sellers of an identical product, no individual firm\'s output decision can affect the market price — making every participant a price taker by definition.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Monopoly ────────────────────────────────────────────────────────
  {
    id: 'i2-l2',
    moduleId: 'i2-market-structures',
    title: 'Monopoly — Price, Profit, and Deadweight Loss',
    description: "Analyse a monopolist's equilibrium, show the deadweight loss triangle, and distinguish natural from artificial monopoly.",
    order: 2,
    estimatedMinutes: 40,
    tags: ['monopoly', 'deadweight-loss', 'market-power'],
    content: {
      isStub: false,
      realWorldHook:
        'In the early twentieth century, Standard Oil controlled roughly 90 % of U.S. oil refining. It set prices above competitive levels, earned enormous profits, and restricted output — the textbook monopoly playbook. The U.S. Supreme Court broke it up in 1911, creating dozens of successor companies. The case remains a vivid illustration of how unchecked market power harms consumers and society.',
      prerequisiteRecap: `The previous lesson established that in perfect competition the firm is a price taker, so MR = P, and free entry drives long-run profit to zero at P = MC = minimum ATC — the triple efficiency condition. Monopoly breaks each of these conditions: the single seller sets price above MC, earns persistent supernormal profit, and generates a deadweight loss.`,
      recallQuestions: [
        {
          id: 'i2-l2-recall-1',
          type: 'mcq' as const,
          question: 'In perfect competition, which three equalities hold simultaneously at long-run equilibrium?',
          options: [
            'P = MR = MC = minimum ATC',
            'P = ATC and P > MC',
            'MR = MC and P > ATC',
            'P = MC and P > minimum ATC',
          ],
          correctAnswer: 0,
          explanation: 'At long-run perfectly competitive equilibrium, free entry eliminates profit so P = ATC; the price-taker condition gives P = MR; and profit-maximisation gives MR = MC. The firm produces at minimum ATC, achieving both allocative (P = MC) and productive (min ATC) efficiency simultaneously.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'A monopoly exists when a single firm is the sole supplier of a good with no close substitutes, protected by barriers to entry such as patents, exclusive government licences, control of a key resource, or overwhelming economies of scale. Unlike a price taker, the monopolist faces the entire downward-sloping market demand curve, so it is a price maker: to sell more it must lower price on all units, making marginal revenue (MR) fall faster than price. The MR curve lies below the demand curve for all positive quantities (except the very first unit).\n\nThe monopolist maximises profit by setting output where MR = MC — exactly the same rule as any firm. It then charges the price consumers are willing to pay for that quantity, read off the demand curve. This price exceeds MR = MC, meaning the monopolist earns economic profit in both the short and long run (barriers block entry). The gap between price and marginal cost creates a deadweight loss: units that consumers value more than they cost to produce are not made, because the monopolist finds it unprofitable to lower price to sell them. This triangle of lost surplus — the deadweight loss — is the core social cost of monopoly power.\n\nNatural monopoly arises when a firm\'s long-run average cost (LRAC) falls continuously over the relevant range of demand, meaning one firm can supply the entire market more cheaply than two or more firms. Utilities such as water distribution and electricity transmission are classic examples. Because breaking up a natural monopoly raises average costs, regulators typically allow the single firm to operate but regulate its price — often at average cost (to allow normal profit) or at marginal cost (to achieve allocative efficiency, though this requires a subsidy if MC < ATC). Artificial monopoly, by contrast, results from deliberate barriers such as patents or predatory pricing strategies.',
      vocabulary: [
        {
          term: 'Marginal revenue (monopoly)',
          definition: 'The additional revenue from selling one more unit; for a monopolist it is less than price because lowering price applies to all units sold, not just the extra one.',
          example: 'If a monopolist cuts price from $10 to $9 to sell a fifth unit, MR = $9 − $4 (lost revenue on four existing units) = $5, well below the $9 price.',
        },
        {
          term: 'Deadweight loss',
          definition: 'The net loss of total surplus (consumer + producer) resulting from output being below the socially optimal level; represented by a triangle between the demand curve, the MC curve, and the monopoly output level.',
          example: 'A monopolist produces 50 units instead of the competitive 80; the value of those 30 "missing" units to consumers exceeds the cost of making them — that gap is deadweight loss.',
        },
        {
          term: 'Natural monopoly',
          definition: 'A market situation where one firm can supply the entire market at lower average cost than multiple competing firms, due to large economies of scale relative to demand.',
          example: 'A city\'s water pipe network: it is cheaper for one firm to lay pipes to every home than for two firms each to lay a parallel set of pipes.',
        },
      ],
      examinerTip:
        'When drawing a monopoly diagram, avoid the common error of marking profit at the MR = MC intersection. Profit per unit is P − ATC at the profit-maximising output, and total profit is that rectangle. The deadweight loss triangle sits between the monopoly output and the competitive output (where P = MC), bounded above by the demand curve and below by the MC curve. Label all six key points clearly.',
    },
    flashcards: [
      {
        id: 'i2-l2-fc1',
        front: 'Why does a monopolist\'s MR curve lie below its demand curve?',
        back: 'To sell an extra unit, the monopolist must cut price on all previous units (not just the new one). The revenue lost on those units makes MR < P for every unit beyond the first.',
        hint: 'Think about what happens to total revenue when you sell one more unit at a lower price.',
        tags: ['monopoly', 'MR', 'demand'],
      },
      {
        id: 'i2-l2-fc2',
        front: 'Where on a diagram is the deadweight loss of monopoly located?',
        back: 'It is the triangle between the monopoly output (Q_m) and the competitive output (Q_c), bounded by the demand curve above and the MC curve below. These are units whose value to consumers exceeds their production cost but the monopolist does not produce.',
        hint: 'The triangle points toward the intersection of demand and MC — the competitive equilibrium.',
        tags: ['monopoly', 'deadweight-loss', 'diagram'],
      },
      {
        id: 'i2-l2-fc3',
        front: 'What distinguishes a natural monopoly from an artificial monopoly?',
        back: 'A natural monopoly arises from structural cost advantages — continuously falling LRAC — making one firm the most efficient supplier. An artificial monopoly is created by deliberate barriers (patents, licences, predatory pricing) rather than inherent cost structure.',
        hint: 'One is driven by technology/cost; the other by strategy or law.',
        tags: ['monopoly', 'natural-monopoly', 'barriers'],
      },
      {
        id: 'i2-l2-fc4',
        front: 'Why can a monopolist sustain economic profit in the long run while a perfectly competitive firm cannot?',
        back: 'Barriers to entry prevent rival firms from entering the market. Without new entrants, there is no additional supply to drive the price down to the zero-profit level.',
        hint: 'Barriers are the key — no entry means no competitive pressure on profit.',
        tags: ['monopoly', 'barriers-to-entry', 'long-run'],
      },
    ],
    quiz: [
      {
        id: 'i2-l2-q1',
        type: 'mcq',
        question: 'A profit-maximising monopolist sets output where MR = MC and charges a price of $20. If MC = $12 at that output, the price is above MC by $8. What does this gap primarily represent?',
        options: [
          'The average fixed cost per unit.',
          'Consumer surplus transferred to the government.',
          'The monopolist\'s markup reflecting market power, which contributes to allocative inefficiency.',
          'The productive efficiency gain from large-scale production.',
        ],
        correctAnswer: 2,
        explanation: 'When P > MC, units that consumers value more than they cost to produce go unsold — creating allocative inefficiency and deadweight loss. The $8 markup is the hallmark of monopoly market power.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l2-q2',
        type: 'mcq',
        question: 'Which of the following best explains why regulators often allow natural monopolies to exist rather than breaking them up?',
        options: [
          'Natural monopolies always charge lower prices than competitive firms.',
          'One firm can supply the entire market at lower average cost than multiple firms, so splitting the market raises costs.',
          'Natural monopolies generate no deadweight loss because they operate at minimum ATC.',
          'Governments benefit financially from allowing a single large taxpayer to dominate the market.',
        ],
        correctAnswer: 1,
        explanation: 'The defining feature of a natural monopoly is continuously falling LRAC over the range of market demand. Two firms, each serving half the market, would operate at higher average costs — making fragmentation economically wasteful.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l2-q3',
        type: 'mcq',
        question: 'Compared with a perfectly competitive equilibrium, a monopoly results in:',
        options: [
          'Lower price, higher output, and a deadweight loss.',
          'Higher price, lower output, and a deadweight loss.',
          'Higher price, higher output, and no deadweight loss.',
          'The same output but a higher price, leaving total surplus unchanged.',
        ],
        correctAnswer: 1,
        explanation: 'A monopolist restricts output below the competitive level (where P = MC) and raises price above MC. The resulting deadweight loss represents value destroyed relative to the competitive benchmark.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3: Monopolistic Competition ───────────────────────────────────────
  {
    id: 'i2-l3',
    moduleId: 'i2-market-structures',
    title: 'Monopolistic Competition — Differentiation and Waste',
    description: 'Explain product differentiation, excess capacity, and why firms earn zero economic profit in the long run despite market power.',
    order: 3,
    estimatedMinutes: 35,
    tags: ['monopolistic-competition', 'product-differentiation', 'excess-capacity'],
    content: {
      isStub: false,
      realWorldHook:
        'Think about the neighbourhood café market in any large city. Hundreds of coffee shops compete fiercely, yet each cultivates a distinct identity: artisan roasts, an indie playlist, a minimalist interior, or a signature cold brew. None controls the market, but each faces a mildly downward-sloping demand curve because some customers are loyal enough to pay a slight premium. This is monopolistic competition — ubiquitous, colourful, and theoretically fascinating.',
      prerequisiteRecap: `The previous lesson showed that a monopolist restricts output to where MR = MC and charges a price above MC, creating a deadweight loss triangle and earning persistent supernormal profit protected by barriers to entry. Monopolistic competition retains the monopolist's downward-sloping demand curve but removes the barriers, so entry eventually erodes that profit.`,
      recallQuestions: [
        {
          id: 'i2-l3-recall-1',
          type: 'mcq' as const,
          question: 'Compared with a perfectly competitive equilibrium, a monopoly results in:',
          options: [
            'Higher price, lower output, and a deadweight loss.',
            'Lower price, higher output, and a deadweight loss.',
            'Higher price, higher output, and no deadweight loss.',
            'The same output but a higher price, leaving total surplus unchanged.',
          ],
          correctAnswer: 0,
          explanation: 'A monopolist sets MR = MC at an output below the competitive level and charges the price consumers are willing to pay, which exceeds MC. The "missing" units — valued by consumers above their production cost — generate a deadweight loss triangle between monopoly output and the competitive output.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'Monopolistic competition combines elements of both perfect competition and monopoly. Like perfect competition it has many firms and free entry and exit. Like monopoly each firm sells a differentiated product — real or perceived differences in quality, branding, location, or service — so each faces a downward-sloping demand curve and has some pricing power. The key insight of Edward Chamberlin\'s 1933 model is that this pricing power is temporary: economic profit attracts entry, which shifts each incumbent firm\'s demand curve leftward (stealing customers) until profit is eliminated.\n\nIn short-run equilibrium the firm behaves like a mini-monopolist: it sets MR = MC, charges above MC, and may earn positive economic profit. In long-run equilibrium, free entry erodes profit until the demand curve is tangent to the ATC curve at the firm\'s chosen output. At this tangency point: P = ATC (zero economic profit), but P > MC (allocative inefficiency persists). Because the tangency occurs on the downward-sloping portion of ATC — not at its minimum — the firm produces less than the minimum-ATC output. This gap between actual output and minimum-ATC output is called excess capacity.\n\nThe welfare interpretation is mixed. Consumers value variety — the wide range of differentiated products generates consumer utility that a single standardised product could not. But they pay for it through a price above marginal cost and firms operating with idle capacity. Economists debate whether this "waste" is the legitimate cost of diversity or an unnecessary inefficiency. Advertising and brand investment reinforce differentiation but also raise costs, further widening the gap between price and marginal cost.',
      vocabulary: [
        {
          term: 'Product differentiation',
          definition: 'Real or perceived differences between the goods or services of competing firms, giving each firm some degree of pricing power even in a market with many rivals.',
          example: 'Nike and Adidas both sell running shoes, but brand image, design, and athlete endorsements differentiate them sufficiently that consumers pay different prices for comparable quality.',
        },
        {
          term: 'Excess capacity',
          definition: 'The difference between the output a firm produces in long-run monopolistic-competition equilibrium and the output at which average total cost is minimised; the "idle" productive capacity the firm carries.',
          example: 'A café with seating for 60 that typically serves 30 customers at a time operates with excess capacity of 30 seats — it could serve more people at lower average cost if it chose to.',
        },
        {
          term: 'Tangency condition',
          definition: 'In long-run monopolistic competition equilibrium, the demand curve facing the firm is tangent to (just touches) the ATC curve at the profit-maximising output, ensuring zero economic profit.',
          example: 'When the demand curve touches but does not cross the ATC curve, the firm earns exactly normal profit — raising or lowering output would increase average cost above price.',
        },
      ],
      examinerTip:
        'The most common diagram error is drawing the demand curve crossing, rather than being tangent to, the ATC curve in long-run equilibrium. A crossing would imply the firm could earn profit at some output levels — contradicting the zero-profit condition. Make sure the demand curve gently kisses the ATC curve at one point, and mark that point clearly as Q* with P* on the vertical axis, noting P > MC and P = ATC.',
    },
    flashcards: [
      {
        id: 'i2-l3-fc1',
        front: 'What happens in the long run when firms in monopolistic competition earn economic profit?',
        back: 'New firms enter and offer differentiated substitutes, shifting each existing firm\'s demand curve leftward and making it more elastic, until economic profit is eliminated and P = ATC.',
        hint: 'Entry works the same way as in perfect competition — but via demand shifts, not just price falls.',
        tags: ['monopolistic-competition', 'long-run', 'entry'],
      },
      {
        id: 'i2-l3-fc2',
        front: 'Define excess capacity in the context of monopolistic competition.',
        back: 'Excess capacity is the gap between the long-run equilibrium output (where the demand curve is tangent to ATC) and the minimum-ATC output. The firm could produce more at lower average cost but chooses not to because demand would not support the price.',
        hint: 'The tangency point is always to the left of minimum ATC on a U-shaped cost curve.',
        tags: ['monopolistic-competition', 'excess-capacity', 'ATC'],
      },
      {
        id: 'i2-l3-fc3',
        front: 'Why does P > MC persist in long-run monopolistic competition equilibrium?',
        back: 'Each firm faces a downward-sloping demand curve, so MR < P. Setting MR = MC means P > MC. Free entry eliminates profit (P = ATC) but cannot eliminate the gap between P and MC as long as demand curves slope downward.',
        hint: 'Zero profit requires P = ATC, but allocative efficiency requires P = MC — these two conditions cannot both be satisfied on a downward-sloping demand curve unless it is tangent to ATC at minimum ATC, which requires perfect competition.',
        tags: ['monopolistic-competition', 'allocative-inefficiency', 'MR'],
      },
      {
        id: 'i2-l3-fc4',
        front: 'Name two similarities and two differences between monopolistic competition and perfect competition.',
        back: 'Similarities: many firms; free entry and exit in the long run. Differences: (1) products are differentiated (not homogeneous); (2) firms face a downward-sloping demand curve (not a flat one), so P > MC and excess capacity exists in long-run equilibrium.',
        hint: 'Start from the four conditions of perfect competition and ask which ones change.',
        tags: ['monopolistic-competition', 'perfect-competition', 'comparison'],
      },
    ],
    quiz: [
      {
        id: 'i2-l3-q1',
        type: 'mcq',
        question: 'In the long-run equilibrium of a monopolistically competitive firm, which of the following conditions holds?',
        options: [
          'P = MC = minimum ATC',
          'P = ATC and P > MC',
          'P > ATC and MR > MC',
          'P = MC and P < ATC',
        ],
        correctAnswer: 1,
        explanation: 'Free entry drives economic profit to zero, so P = ATC. But differentiated products mean each firm faces a downward-sloping demand curve, keeping P above MC even at zero profit. This is the hallmark of monopolistic competition.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l3-q2',
        type: 'mcq',
        question: 'What causes the excess capacity result in monopolistic competition?',
        options: [
          'Firms deliberately hold back output to raise prices above the competitive level.',
          'Government regulation limits firm output.',
          'The zero-profit tangency occurs on the downward-sloping portion of the ATC curve, to the left of its minimum.',
          'Barriers to entry prevent firms from achieving minimum efficient scale.',
        ],
        correctAnswer: 2,
        explanation: 'When the demand curve is tangent to the falling portion of ATC (not at its minimum), the firm is producing below the least-cost output. This structural outcome — not deliberate restriction — produces excess capacity.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l3-q3',
        type: 'mcq',
        question: 'A market has many small firms, differentiated products, and free entry. A new firm enters attracted by economic profits. Which of the following best describes the adjustment process?',
        options: [
          'Market price rises until the new entrant earns normal profit.',
          'Each existing firm\'s demand curve shifts left and becomes more elastic until economic profit falls to zero.',
          'The new entrant undercuts all rivals with a lower price, becoming a dominant monopoly.',
          'Existing firms collude to raise price and maintain their profits.',
        ],
        correctAnswer: 1,
        explanation: 'In monopolistic competition, entry introduces more substitutes. Customers spread across more options, shifting each firm\'s demand curve leftward and making it more elastic, reducing profit until P = ATC.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4: Oligopoly ───────────────────────────────────────────────────────
  {
    id: 'i2-l4',
    moduleId: 'i2-market-structures',
    title: 'Oligopoly — Interdependence and Strategy',
    description: 'Introduce mutual interdependence, the kinked demand curve model, and price leadership.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['oligopoly', 'interdependence', 'game-theory'],
    content: {
      isStub: false,
      realWorldHook:
        'In 2017, major airlines were caught in a classic oligopoly bind. When one carrier announced a sale, rivals faced an instant decision: match the lower fare and preserve market share, or hold firm and risk losing customers. Within hours every major airline matched the promotional price — a real-world demonstration of the mutual interdependence that defines oligopoly. The carriers were playing a simultaneous-move game, and their behaviour fit the kinked demand curve model almost perfectly.',
      prerequisiteRecap: `The previous lesson showed that in monopolistic competition, free entry shifts each firm's demand curve leftward until the demand curve is tangent to ATC at zero economic profit — but P still exceeds MC (allocative inefficiency) and the firm produces with excess capacity. Oligopoly differs fundamentally because a small number of large firms are mutually interdependent, making strategic behaviour — not just entry — the central analytical challenge.`,
      recallQuestions: [
        {
          id: 'i2-l4-recall-1',
          type: 'mcq' as const,
          question: 'In the long-run equilibrium of a monopolistically competitive firm, which condition holds?',
          options: [
            'P = ATC and P > MC, with the demand curve tangent to ATC.',
            'P = MC = minimum ATC, with zero economic profit.',
            'P > ATC, generating persistent supernormal profit.',
            'MR > MC, so the firm should expand output further.',
          ],
          correctAnswer: 0,
          explanation: 'Free entry eliminates profit so P = ATC (demand tangent to ATC). However, because each firm faces a downward-sloping demand curve, it sets MR = MC where MR < P, so P > MC persists. The tangency occurs on the falling portion of ATC, leaving excess capacity.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'An oligopoly is a market dominated by a small number of large firms, each of which is large enough that its decisions materially affect rivals and provoke reactions. This mutual interdependence is the defining characteristic: an oligopolist cannot choose price or output in isolation — it must anticipate rivals\' responses. Barriers to entry (economies of scale, brand loyalty, control of key inputs, regulatory requirements) protect incumbents and keep the number of firms small.\n\nThe kinked demand curve model, proposed by Paul Sweezy in 1939, offers one explanation for price rigidity in oligopoly. It assumes rivals will match a price cut (to avoid losing market share) but will not match a price increase (happy to steal customers from the firm that raises prices). This asymmetry creates a "kink" in the demand curve at the current price: demand is relatively elastic above the current price (rivals don\'t follow increases) and relatively inelastic below it (rivals do follow cuts). The corresponding MR curve has a vertical gap (discontinuity) directly beneath the kink. As long as MC passes through this vertical gap, the profit-maximising output and price remain unchanged even if costs shift — explaining observed price stickiness in oligopolistic industries.\n\nAlternatively, oligopolists may coordinate through price leadership: one dominant firm (or a barometric firm with good market intelligence) announces a price change and rivals follow without explicit communication. A more formal arrangement is a cartel, where firms collude to set price and output as a joint monopolist — illegal in most jurisdictions. Game theory, particularly the Prisoner\'s Dilemma, shows why cartels are inherently unstable: each member has an incentive to cheat by secretly undercutting the agreed price, and when all members reason the same way the cartel unravels.',
      vocabulary: [
        {
          term: 'Mutual interdependence',
          definition: 'The situation in oligopoly where each firm\'s pricing and output decisions directly affect rivals and are made in anticipation of rivals\' reactions.',
          example: 'When Samsung announces a new smartphone price, Apple\'s strategy team immediately models the likely market-share impact and considers a response — each firm\'s decision depends on the other\'s.',
        },
        {
          term: 'Kinked demand curve',
          definition: 'A model of oligopoly price rigidity assuming rivals match price cuts but not price increases, creating a demand curve with a kink at the current price and a discontinuous MR curve below it.',
          example: 'A petrol station on a busy road hesitates to raise its price because the other station across the street will not follow, but both instantly match each other\'s price cuts to retain passing drivers.',
        },
        {
          term: 'Price leadership',
          definition: 'An informal form of oligopolistic coordination where one firm (the price leader) announces a price change and rivals follow without explicit agreement.',
          example: 'For decades, U.S. Steel set steel prices and smaller producers adjusted their list prices within days — no meeting was required; the pattern was the coordination mechanism.',
        },
      ],
      examinerTip:
        'When drawing the kinked demand curve, make sure the MR curve has a clear vertical gap (discontinuity) directly below the kink. Then draw your MC curve passing through that gap and explain verbally why this implies price rigidity. Examiners also award marks for discussing why the kinked demand model does not explain how the original price was determined — it only explains why prices are sticky once set.',
    },
    flashcards: [
      {
        id: 'i2-l4-fc1',
        front: 'What is mutual interdependence in oligopoly, and why does it matter?',
        back: 'Each firm\'s decisions on price and output directly affect rivals, who react in ways that bounce back on the original firm. This feedback loop means oligopolists must think strategically — like chess players — rather than independently.',
        hint: 'Unlike perfect competition (no single firm matters) or monopoly (no rivals), oligopolists are simultaneously interdependent.',
        tags: ['oligopoly', 'interdependence'],
      },
      {
        id: 'i2-l4-fc2',
        front: 'Explain the key assumption behind the kinked demand curve and its implication for price.',
        back: 'Rivals match price cuts (making demand inelastic below current price) but do not match price rises (making demand elastic above current price). This creates a kink, a discontinuous MR, and price rigidity — prices tend to stay at the kink even when costs change moderately.',
        hint: 'The asymmetry in rival behaviour is everything — ask "what do rivals do when I raise vs. cut?"',
        tags: ['oligopoly', 'kinked-demand', 'price-rigidity'],
      },
      {
        id: 'i2-l4-fc3',
        front: 'Why are cartels considered inherently unstable according to game theory?',
        back: 'Each member has a dominant strategy to cheat by selling more than its agreed quota at the cartel price (higher revenue). When all members reason this way — the Prisoner\'s Dilemma — the cartel collapses to a non-cooperative outcome with lower prices and profits.',
        hint: 'The cheating incentive exists regardless of what other members do, making defection a dominant strategy.',
        tags: ['oligopoly', 'cartel', 'game-theory', 'prisoners-dilemma'],
      },
      {
        id: 'i2-l4-fc4',
        front: 'What is a criticism of the kinked demand curve model?',
        back: 'It explains why prices are sticky once set but does not explain how the initial price is determined. It also lacks strong empirical support — price cuts by rivals are not always matched in every oligopolistic industry.',
        hint: 'A model that starts at "the current price" without explaining it is incomplete.',
        tags: ['oligopoly', 'kinked-demand', 'critique'],
      },
    ],
    quiz: [
      {
        id: 'i2-l4-q1',
        type: 'mcq',
        question: 'According to the kinked demand curve model, why are prices in oligopoly often rigid (sticky)?',
        options: [
          'Government price controls prevent firms from changing their prices.',
          'Rivals match price cuts but not price rises, creating a demand kink and a vertical gap in MR through which MC can shift without changing the optimal price.',
          'All firms in oligopoly collude to maintain a fixed price at the competitive level.',
          'Each firm faces a perfectly elastic demand curve, so price changes have no effect on quantity demanded.',
        ],
        correctAnswer: 1,
        explanation: 'The asymmetric rival response creates a kink in demand and a discontinuity in MR. Cost changes that keep MC within this vertical gap do not alter the profit-maximising price — explaining observed price stickiness.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l4-q2',
        type: 'mcq',
        question: 'In a Prisoner\'s Dilemma applied to a two-firm cartel, both firms agree to restrict output. What is the likely long-run outcome?',
        options: [
          'Both firms honour the agreement because cooperation maximises joint profit.',
          'One firm defects immediately while the other complies, splitting total profit unevenly.',
          'Both firms eventually cheat on the agreement, leading to higher output and lower prices than the cartel intended.',
          'The government enforces the agreement and both firms maintain cartel output forever.',
        ],
        correctAnswer: 2,
        explanation: 'Each firm has a dominant strategy to cheat — higher output yields more revenue regardless of what the rival does. When both firms cheat, the cartel collapses. This is the Nash equilibrium of the game: mutual defection.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l4-q3',
        type: 'mcq',
        question: 'Which characteristic most clearly distinguishes oligopoly from monopolistic competition?',
        options: [
          'Oligopolists sell differentiated products while monopolistic competitors sell homogeneous products.',
          'In oligopoly there is significant mutual interdependence among firms; in monopolistic competition each firm acts largely independently.',
          'Oligopoly has free entry and exit while monopolistic competition has high barriers to entry.',
          'Firms in oligopoly always earn zero economic profit while monopolistically competitive firms earn positive profit.',
        ],
        correctAnswer: 1,
        explanation: 'Mutual interdependence — the need to anticipate and react to rivals\' strategic decisions — is the hallmark of oligopoly. Monopolistically competitive firms are too numerous and too small to materially affect one another.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5: Price Discrimination ───────────────────────────────────────────
  {
    id: 'i2-l5',
    moduleId: 'i2-market-structures',
    title: 'Price Discrimination — First, Second, Third Degree',
    description: 'Define the three degrees of price discrimination, conditions required, and welfare effects.',
    order: 5,
    estimatedMinutes: 30,
    tags: ['price-discrimination'],
    content: {
      isStub: false,
      realWorldHook:
        'Next time you book a flight, check the price for the exact same seat from a different device in an incognito window — and then check what a business traveller booking the same seat one day before departure would pay. You might find the same Economy seat sold for $89 or $689 depending on who is buying, when, and how. Airlines are masters of price discrimination, dividing their customers into segments by purchase timing, flexibility, and willingness to pay — a live laboratory for all three degrees.',
      prerequisiteRecap: `The previous lesson introduced oligopoly's defining feature — mutual interdependence — and the kinked demand curve model, which explains price rigidity: rivals match price cuts but not price increases, creating a discontinuous MR curve through which MC can shift without changing the profit-maximising price. Price discrimination is a strategy available to any firm with market power, including oligopolists and monopolists, to extract more surplus from consumers.`,
      recallQuestions: [
        {
          id: 'i2-l5-recall-1',
          type: 'mcq' as const,
          question: 'According to the kinked demand curve model, why are prices in oligopoly often rigid (sticky)?',
          options: [
            'Rivals match price cuts but not price rises, creating a kink in demand and a vertical gap in MR through which MC can shift without changing the profit-maximising price.',
            'Government price controls prevent firms from changing their prices.',
            'All oligopolists collude to maintain a fixed price at the competitive level.',
            'Each oligopolist faces a perfectly elastic demand curve, so price changes have no effect on quantity.',
          ],
          correctAnswer: 0,
          explanation: 'The asymmetric rival response — matching cuts but not rises — creates a kink at the current price and a discontinuity in the MR curve. As long as MC passes through this vertical gap, a firm has no incentive to change price even if its costs shift moderately.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'Price discrimination occurs when a firm charges different prices to different customers (or in different markets) for the same good, where the price difference does not reflect a difference in cost. Three conditions must hold: the firm must have market power (be a price maker); it must be able to identify groups or individuals with different price elasticities of demand; and it must be able to prevent resale between groups (arbitrage), otherwise low-price buyers would resell to high-price buyers, eliminating the differential.\n\nFirst-degree (perfect) price discrimination: the firm charges every customer exactly their reservation price — the maximum they are willing to pay. All consumer surplus is captured by the producer. There is no deadweight loss because every unit that generates a surplus is sold. This is a theoretical ideal; in practice it requires perfect information about each buyer\'s willingness to pay. Online platforms using personalised pricing algorithms approximate it.\n\nSecond-degree price discrimination: the firm charges different prices based on the quantity purchased, not on who the buyer is. Block pricing (lower price per unit for larger purchases) and versioning (economy vs. business class, standard vs. premium software tiers) are examples. Consumers self-select into tiers based on their preferences — the firm does not need to identify individuals.\n\nThird-degree price discrimination: the firm separates identifiable groups with different demand elasticities and charges each group a different price. The profit-maximising rule is MR_A = MR_B = MC: charge the higher price to the group with lower price elasticity. Examples include student discounts, peak vs. off-peak rail fares, and pharmaceutical pricing across countries. This is the most common form in practice. Third-degree discrimination typically transfers surplus from consumers to the producer and may increase or decrease welfare depending on whether it enables output to reach markets that would otherwise be unserved.',
      vocabulary: [
        {
          term: 'Reservation price',
          definition: 'The maximum price a consumer is willing to pay for a unit of a good; under first-degree price discrimination the firm captures this entire amount, leaving the consumer with zero surplus.',
          example: 'If you would pay up to $50 for a concert ticket and the seller knows this, they charge you exactly $50 — your reservation price.',
        },
        {
          term: 'Arbitrage',
          definition: 'The practice of buying a good at a lower price in one market and reselling it at a higher price in another; price discrimination breaks down if arbitrage is possible.',
          example: 'If students resold discounted software licences to business users, the firm\'s ability to maintain a student discount would collapse.',
        },
        {
          term: 'Third-degree price discrimination',
          definition: 'Charging different prices to identifiable groups of consumers based on their differing price elasticities of demand; higher price to the less elastic group.',
          example: 'Cinemas charge adult and child ticket prices — children have more elastic demand (more leisure alternatives, less income), so they pay less; adults pay the higher adult price.',
        },
      ],
      examinerTip:
        'A key formula for third-degree price discrimination: MR_A = MR_B = MC. The group with the less elastic demand (lower |PED|) is charged the higher price. Show this with two separate demand diagrams for the two market segments, each with its own MR curve, and a single MC line at the same level in both. Examiners reward candidates who can explain both the condition for price discrimination (market power + identifiable segments + no arbitrage) and its welfare effects (ambiguous for third degree).',
    },
    flashcards: [
      {
        id: 'i2-l5-fc1',
        front: 'State the three conditions necessary for price discrimination to be feasible.',
        back: '(1) The firm must have market power (price-making ability). (2) It must identify consumers or groups with different price elasticities of demand. (3) It must prevent resale (arbitrage) between groups.',
        hint: 'Market power + segmentation + no arbitrage.',
        tags: ['price-discrimination', 'conditions'],
      },
      {
        id: 'i2-l5-fc2',
        front: 'How does first-degree price discrimination affect consumer surplus and deadweight loss?',
        back: 'All consumer surplus is converted into producer surplus — the firm captures the entire area under the demand curve down to MC. Deadweight loss is eliminated because every unit valued above MC is sold.',
        hint: 'Perfect discrimination is "perfectly efficient" but perfectly bad for consumers.',
        tags: ['price-discrimination', 'first-degree', 'consumer-surplus'],
      },
      {
        id: 'i2-l5-fc3',
        front: 'In third-degree price discrimination, which group is charged the higher price and why?',
        back: 'The group with the lower (less elastic) price elasticity of demand pays the higher price. Less elastic consumers are less sensitive to price changes, so the firm can raise their price with a smaller loss in quantity — maximising revenue from that segment.',
        hint: 'Inelastic demand = less price-sensitive = higher price.',
        tags: ['price-discrimination', 'third-degree', 'PED'],
      },
      {
        id: 'i2-l5-fc4',
        front: 'Give one example each of second-degree and third-degree price discrimination.',
        back: 'Second-degree: bulk discounts at a wholesale club (the more you buy, the lower the unit price) — consumers self-select by volume. Third-degree: student rail fares vs. adult fares — the firm identifies groups by age/student status and charges the less elastic group (adults) more.',
        hint: 'Second-degree = quantity-based; third-degree = group-based.',
        tags: ['price-discrimination', 'second-degree', 'third-degree', 'examples'],
      },
    ],
    quiz: [
      {
        id: 'i2-l5-q1',
        type: 'mcq',
        question: 'A pharmaceutical company sells the same drug at $5 per pill in low-income countries and $50 per pill in high-income countries. Which type of price discrimination is this, and why?',
        options: [
          'First-degree, because the firm knows each patient\'s reservation price.',
          'Second-degree, because the price depends on the quantity purchased.',
          'Third-degree, because the firm charges different prices to identifiable groups (countries) with different demand elasticities.',
          'No price discrimination, because the cost of supplying the drug differs by country.',
        ],
        correctAnswer: 2,
        explanation: 'The firm separates identifiable markets (countries) with different elasticities — low-income patients have more elastic demand — and charges each group accordingly. This is classic third-degree price discrimination.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l5-q2',
        type: 'mcq',
        question: 'Why does price discrimination require the prevention of arbitrage?',
        options: [
          'Arbitrage would allow the firm to charge even higher prices.',
          'If low-price buyers can resell to high-price buyers, the price differential collapses and discrimination becomes impossible.',
          'Arbitrage always reduces the firm\'s market power.',
          'Governments require firms to prevent arbitrage before allowing price discrimination.',
        ],
        correctAnswer: 1,
        explanation: 'Arbitrage allows cheaper goods to flow to higher-price markets, equalising prices. If consumers can freely resell, the firm cannot maintain two prices — discrimination requires segmented, leak-proof markets.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l5-q3',
        type: 'mcq',
        question: 'First-degree price discrimination is sometimes called "perfectly efficient" because:',
        options: [
          'It minimises the firm\'s average total cost of production.',
          'All deadweight loss is eliminated — every unit for which a consumer\'s willingness to pay exceeds MC is produced and sold.',
          'It results in equal prices for all consumers, satisfying the equity principle.',
          'The firm cannot earn economic profit, ensuring resources are allocated fairly.',
        ],
        correctAnswer: 1,
        explanation: 'By charging each consumer their exact reservation price, the monopolist sells every unit that generates a net surplus, eliminating deadweight loss. "Efficient" here means no value is wasted — though all surplus goes to the producer rather than consumers.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 6: Comparing Market Structures ────────────────────────────────────
  {
    id: 'i2-l6',
    moduleId: 'i2-market-structures',
    title: 'Comparing Market Structures — Efficiency Scorecard',
    description: 'Synthesise allocative, productive, and dynamic efficiency across all four structures.',
    order: 6,
    estimatedMinutes: 25,
    tags: ['efficiency', 'market-structures', 'comparison'],
    content: {
      isStub: false,
      realWorldHook:
        'Policymakers debating broadband regulation face exactly this comparison problem. A single fibre provider might be a natural monopoly (efficient in scale) but charges above-cost prices (allocatively inefficient). Breaking it up into regional competitors could improve pricing but sacrifice the cost advantages of scale. Adding a third player might generate dynamic innovation but leave all three with excess capacity. The "right" market structure depends entirely on which efficiency dimension the regulator prioritises — and real policy reflects this tension every day.',
      prerequisiteRecap: `The previous lesson analysed price discrimination — a strategy by which a firm with market power charges different prices to different consumer groups based on their price elasticity of demand, capturing consumer surplus. This lesson synthesises all four market structures through the lens of allocative, productive, and dynamic efficiency, asking which structures best serve consumer and social welfare.`,
      recallQuestions: [
        {
          id: 'i2-l6-recall-1',
          type: 'mcq' as const,
          question: 'In third-degree price discrimination, which group is charged the higher price and why?',
          options: [
            'The group with the lower (less elastic) price elasticity of demand, because they are less sensitive to price changes.',
            'The group with the higher (more elastic) price elasticity of demand, because they respond more strongly to price incentives.',
            'Both groups are charged the same price to maximise total revenue.',
            'The group with higher income, regardless of their price elasticity.',
          ],
          correctAnswer: 0,
          explanation: 'Profit maximisation requires MR_A = MR_B = MC across market segments. Because MR = P(1 − 1/|PED|), the group with lower |PED| (less elastic demand) has higher MR at any given price, so the firm charges them more. Inelastic consumers are less price-sensitive and cannot easily switch to alternatives.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'Economists use three efficiency criteria to evaluate market structures. Allocative efficiency requires P = MC: the price consumers pay equals the marginal cost of production, meaning no unit goes unsold that consumers value more than it costs to make, and no unit is produced that costs more than consumers value. Productive efficiency requires production at minimum average total cost: resources are not wasted, and the firm uses the least-cost combination of inputs. Dynamic efficiency concerns long-run innovation — the extent to which firms invest in R&D, process improvement, and new products over time.\n\nPerfect competition achieves allocative efficiency (P = MC) and productive efficiency (min ATC) in long-run equilibrium — the gold standard on both static criteria. However, firms earn zero profit and face intense price competition, giving them little incentive or financial capacity for R&D. Dynamic efficiency is often weak. Monopolistic competition achieves zero profit in the long run (P = ATC) but falls short on both allocative (P > MC) and productive efficiency (min ATC not reached, excess capacity). Firms differentiate products and may innovate in non-price dimensions, but the efficiency losses are real.\n\nMonopoly is the worst performer on static efficiency: P > MC (allocative failure), and without competitive pressure the firm may not minimise cost (productive failure through "X-inefficiency"). However, monopoly profits fund R&D — the Schumpeterian argument — and patent protection incentivises innovation. Some argue natural monopolies and pharmaceutical giants innovate precisely because monopoly rents reward risk-taking. Oligopoly sits between extremes: prices are above competitive levels and may be rigid (kinked demand), but oligopolists — especially in technology markets — invest heavily in innovation to maintain or erode rivals\' competitive advantage. The net welfare assessment depends on the specific industry, the height of barriers, and the effectiveness of regulation.',
      vocabulary: [
        {
          term: 'Allocative efficiency',
          definition: 'Achieved when resources are distributed so that P = MC: every unit whose value to consumers equals or exceeds its production cost is produced, and no unit that costs more than it is worth is made.',
          example: 'In a perfectly competitive wheat market, wheat is produced up to the point where the price farmers receive equals the marginal cost of growing one more bushel — no mutually beneficial trade is missed.',
        },
        {
          term: 'Productive efficiency',
          definition: 'Achieved when a firm produces at the lowest possible average total cost — at the minimum point of the ATC curve — using the best available technology.',
          example: 'A steel mill running at its optimal capacity, with no idle equipment or surplus workers, is productively efficient — it cannot produce the same output more cheaply.',
        },
        {
          term: 'X-inefficiency',
          definition: 'The tendency for firms without competitive pressure (especially monopolies) to operate at costs above the theoretical minimum, due to managerial slack, over-staffing, or lack of incentive to cut costs.',
          example: 'A nationalised postal monopoly that employs more staff than necessary and delays investment in automation because there is no rival threatening its customers exhibits X-inefficiency.',
        },
      ],
      examinerTip:
        'Construct a comparison table in your answer: rows = four market structures; columns = allocative efficiency, productive efficiency, dynamic efficiency, and profit in the long run. Fill in each cell with "yes/no/partial" and one brief reason. This structured approach demonstrates command of the material and earns evaluation marks in data-response and essay questions. Always conclude with a nuanced judgment: no single structure dominates on all three dimensions.',
    },
    flashcards: [
      {
        id: 'i2-l6-fc1',
        front: 'Which market structure achieves both allocative and productive efficiency in long-run equilibrium, and what conditions enable this?',
        back: 'Perfect competition: P = MC (allocative) and production at minimum ATC (productive). Free entry, homogeneous products, and price-taking behaviour drive prices down to minimum average cost and ensure no wedge between price and marginal cost.',
        hint: 'The triple equality P = MC = min ATC is unique to perfectly competitive long-run equilibrium.',
        tags: ['efficiency', 'perfect-competition', 'long-run'],
      },
      {
        id: 'i2-l6-fc2',
        front: 'What is X-inefficiency and under which market structure is it most likely?',
        back: 'X-inefficiency is operating above the minimum possible cost due to lack of competitive pressure — managerial slack, overstaffing, or failure to adopt cost-saving technology. It is most common in monopoly, where no rival threatens to steal customers from a high-cost firm.',
        hint: 'No competition = no pressure to be lean and efficient.',
        tags: ['efficiency', 'monopoly', 'X-inefficiency'],
      },
      {
        id: 'i2-l6-fc3',
        front: 'State the Schumpeterian argument for why monopoly may be dynamically efficient.',
        back: 'Joseph Schumpeter argued that monopoly profits provide both the incentive and the financial resources to invest in innovation. The prospect of temporary monopoly rents through patents and first-mover advantage encourages firms to take on the risk of R&D — a process he called "creative destruction."',
        hint: 'Big profits fund big research budgets — at least in theory.',
        tags: ['efficiency', 'monopoly', 'dynamic-efficiency', 'schumpeter'],
      },
      {
        id: 'i2-l6-fc4',
        front: 'Summarise how monopolistic competition performs on all three efficiency criteria.',
        back: 'Allocative: fails (P > MC). Productive: fails (excess capacity; production is left of min ATC). Dynamic: mixed — firms invest in product differentiation and brand innovation, but not usually in breakthrough technology R&D. Long-run profit is zero, limiting financial capacity for large-scale innovation.',
        hint: 'Monopolistic competition is a "middle ground" market — neither efficient nor dramatically inefficient, but not innovative in the deep technological sense.',
        tags: ['efficiency', 'monopolistic-competition', 'comparison'],
      },
    ],
    quiz: [
      {
        id: 'i2-l6-q1',
        type: 'mcq',
        question: 'Allocative efficiency is achieved when:',
        options: [
          'A firm produces at the minimum point of its average total cost curve.',
          'Price equals marginal cost, ensuring every unit whose value exceeds its cost is produced.',
          'The firm earns zero economic profit in the long run.',
          'There is no deadweight loss from taxation.',
        ],
        correctAnswer: 1,
        explanation: 'Allocative efficiency (P = MC) ensures resources flow to their highest-valued use — no unit that consumers value more than it costs is left unproduced, and no unit that costs more than its value is made. This is about the right quantity, not the lowest cost.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l6-q2',
        type: 'mcq',
        question: 'Which of the following is the strongest argument that monopoly can be dynamically efficient?',
        options: [
          'Monopolists produce at minimum ATC because they have the largest scale of production.',
          'Monopoly profits provide the incentive and financial resources to invest in R&D and innovation.',
          'Without rivals, monopolists have no reason to advertise, saving resources for investment.',
          'Monopolists always charge P = MC because they want to maximise consumer goodwill.',
        ],
        correctAnswer: 1,
        explanation: 'The Schumpeterian argument: the prospect of monopoly rents — even temporary ones via patents — incentivises firms to innovate. Large retained profits also provide internal financing for costly R&D that smaller competitive firms cannot sustain.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i2-l6-q3',
        type: 'mcq',
        question: 'A student claims: "Monopolistic competition is worse than monopoly because firms have excess capacity." Evaluate this claim.',
        options: [
          'The claim is correct — excess capacity in monopolistic competition wastes more resources than monopoly\'s deadweight loss.',
          'The claim is incorrect — monopolistic competition achieves zero economic profit in the long run, while monopoly sustains economic profit; monopoly\'s market power causes greater allocative harm and redistribution of surplus to the producer.',
          'The claim is correct — monopoly always produces at minimum ATC, making it productively efficient unlike monopolistic competition.',
          'The claim is incorrect because monopolistic competition has no deadweight loss, unlike monopoly.',
        ],
        correctAnswer: 1,
        explanation: 'Monopolistic competition does have excess capacity, but monopoly performs worse overall: it sustains economic profit (redistributing surplus from consumers to the producer), creates a larger deadweight loss (all units between Q_m and Q_c are unsold despite being valued above MC), and may suffer X-inefficiency. The zero-profit condition of monopolistic competition is a significant consumer-protection advantage.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
