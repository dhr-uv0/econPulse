'use client'

import { useState } from 'react'
import type { Assignment, AssignmentType } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Newspaper, Scale, Eye,
  FileText, Globe, Plus, ArrowRight,
  Clock, Check, Lightbulb,
  Briefcase, PenLine, Layers,
} from 'lucide-react'

interface Props {
  assignments: Assignment[]
  userId: string
}

// Generic assignments only (lesson-specific ones live inside lessons)
type GenericAssignmentType = Exclude<AssignmentType, 'lesson_practice'>

const GENERIC_ASSIGNMENTS: {
  type: GenericAssignmentType
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bg: string
  border: string
  estimatedMins: number
  prompt: string
  rubric: string
}[] = [
  {
    type: 'econ_in_wild',
    label: 'Economics in the Wild',
    description: 'Find a real news article and write a structured commentary applying economic concepts — scarcity, incentives, opportunity cost, or systems. Build your analytical portfolio.',
    icon: Newspaper,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    estimatedMins: 50,
    prompt: `Find a recent news article (published within the last month) about an economic event, policy, or business decision. In your response:

1. Briefly summarise the article in 2-3 sentences and provide the source/headline.
2. Identify which economic concepts from Module 1 are illustrated (scarcity, opportunity cost, incentives, economic systems, marginal thinking, PPF).
3. Apply at least two of these concepts explicitly — explain how they help understand the event.
4. Evaluate: does the event suggest the economic system is working well, or is there a failure? Explain.
5. Conclude with one policy or personal insight the economic analysis suggests.

Aim for 400-600 words. Use precise economic vocabulary throughout.`,
    rubric: `Grade on:
- Quality of article chosen and accuracy of summary (1 pt)
- Correct identification and application of at least 2 Module 1 concepts (4 pts — 2 each)
- Depth of economic analysis beyond surface description (2 pts)
- Evaluation quality — is the reasoning balanced, evidence-based? (2 pts)
- Economic vocabulary used correctly and consistently (1 pt)
A strong response scores 8-9. Outstanding = novel insight, precise vocabulary, substantive evaluation. Weak = summarising without applying theory.`,
  },
  {
    type: 'policy_debate',
    label: 'Policy Debate',
    description: 'Evaluate a real economic policy using the concepts from Module 1. Argue both sides and reach a reasoned conclusion.',
    icon: Scale,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    estimatedMins: 45,
    prompt: `Evaluate the following policy proposal: "The government should introduce a £2-per-litre tax on petrol to reduce carbon emissions and fund public transport."

In your evaluation:
1. Apply opportunity cost analysis: what does this policy cost consumers, firms, and government?
2. Consider incentives: how does the tax change behaviour for drivers, car manufacturers, and public transport users?
3. Apply PPF thinking: does this policy move the economy's resource allocation toward or away from efficiency?
4. Argue FOR the policy (at least 2 strong arguments).
5. Argue AGAINST the policy (at least 2 strong arguments).
6. Reach a reasoned conclusion: on balance, should this policy be implemented? Why?

Aim for 500-700 words. You must engage with economic theory, not just list opinions.`,
    rubric: `Grade on:
- Opportunity cost analysis applied correctly to at least one stakeholder group (2 pts)
- Incentives analysis — how the tax changes behaviour for at least two groups (2 pts)
- At least 2 genuine arguments for AND 2 genuine arguments against (2 pts)
- Quality of conclusion — is it reasoned from the analysis, not just asserted? (2 pts)
- Economic vocabulary and precision (1 pt)
- Balance — does the student engage seriously with both sides? (1 pt)`,
  },
  {
    type: 'research_brief',
    label: 'Research Brief',
    description: 'Investigate a real-world economic situation in depth and write a policy recommendation memo applying Module 1 concepts.',
    icon: FileText,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    estimatedMins: 60,
    prompt: `The situation: A mid-sized city is deciding between two projects for its annual infrastructure budget of £500 million:

Option A: Build a new sports arena (expected to generate tourism revenue and 2,000 construction jobs).
Option B: Expand the public transport network (expected to reduce commute times for 400,000 residents and lower carbon emissions).

You are an economic adviser to the city council. Write a policy brief that:
1. Analyses the opportunity cost of each option — what is given up by choosing the other?
2. Considers the incentive effects on residents, businesses, and the government.
3. Applies PPF thinking: which option better expands or moves toward the productive frontier?
4. Identifies which fundamental economic question (what/how/for whom to produce) this decision primarily involves and why.
5. Makes a clear, evidence-based recommendation with a justification grounded in economic reasoning.

Aim for 600-800 words. This should read like a professional policy document, not a personal opinion piece.`,
    rubric: `Grade on:
- Opportunity cost of each option analysed correctly and specifically (2 pts)
- Incentive effects identified for at least two stakeholder groups (2 pts)
- PPF analysis: which option better uses or expands productive capacity? (1.5 pts)
- Correct application of the "what/how/for whom" framework (1.5 pts)
- Recommendation quality: is it clear, well-reasoned, and grounded in the analysis? (2 pts)
- Professional tone, economic vocabulary, and structured argument (1 pt)`,
  },
  {
    type: 'current_affairs',
    label: 'Current Affairs Digest',
    description: 'Analyse three recent economic events using Module 1 concepts. Identify the economics at work and propose a response.',
    icon: Globe,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    estimatedMins: 45,
    prompt: `Below are three recent economic situations. For each, write a focused analysis (150-200 words each):

Event 1: Global chip shortage — microchip manufacturers cannot keep up with demand from carmakers, electronics firms, and AI data centres. Prices are rising.

Event 2: A major supermarket chain announces it will sell food at cost price (zero profit margin) on 200 basic items to help customers during a cost-of-living crisis.

Event 3: A government announces it will build 300,000 new homes per year by rezoning land and subsidising construction firms.

For each event, your analysis must:
- Identify which Module 1 concept(s) the event most clearly illustrates (scarcity, incentives, opportunity cost, PPF, economic systems, marginal thinking).
- Explain the economic mechanism at work in 2-3 sentences.
- Propose one policy or personal action that responds to the situation, justified with economic reasoning.

Total: 450-600 words across all three events. Precision and economic vocabulary matter more than length.`,
    rubric: `Grade on:
- For each event: correct identification of concept(s) and accurate explanation of mechanism (2 pts × 3 = 6 pts)
- Quality of policy/personal responses — are they economically grounded? (1 pt × 3 = 3 pts)
- Economic vocabulary accuracy across the whole response (1 pt)
Deduct for: misidentifying concepts, vague explanations that don't apply economic theory, generic responses not tied to the specific event.`,
  },
  {
    type: 'peer_prediction',
    label: 'Economic Prediction',
    description: 'Make and justify economic predictions before seeing the outcome — then reflect on whether your reasoning was sound.',
    icon: Eye,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    estimatedMins: 45,
    prompt: `You are going to make predictions about economic situations using the concepts from Module 1. For each scenario, predict the outcome AND explain the economic reasoning behind your prediction.

Scenario 1: A city bans single-use plastic bags and charges 30p per paper bag at checkouts. Predict: how will consumer behaviour change? What will happen to plastic bag production? Use incentive and opportunity cost reasoning.

Scenario 2: A government offers free university tuition for all students (funded by a 2% income tax rise on graduates). Predict: how will university enrolment change? What happens to opportunity cost of attending university? What happens to incentives for universities to compete on quality?

Scenario 3: A country's government, facing high unemployment, moves its PPF outward. Predict: what specific policy could achieve this, and why would it work? What would the trade-off be during the transition?

For each prediction: state your prediction clearly, explain the economic mechanism, and acknowledge one thing that might make your prediction wrong.

Aim for 500-700 words total.`,
    rubric: `Grade on:
- Prediction clarity — is it specific and falsifiable? (1 pt × 3 = 3 pts)
- Economic mechanism explanation — is it correctly grounded in Module 1 concepts? (2 pts × 3 = 6 pts)
- Acknowledgement of uncertainty/counterarguments — does the student show intellectual honesty? (1 pt)
Strong responses apply economic theory directly to the prediction rather than relying on "common sense" alone.`,
  },
  {
    type: 'tycoon_mode',
    label: 'Tycoon Mode',
    description: 'Run a small business through a sequence of resource-allocation decisions and a market shock — narrate and justify every call using Module 1 economics.',
    icon: Briefcase,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    estimatedMins: 55,
    prompt: `You are the founder of a food truck business with a £10,000 starting budget and three scarce resources: cash, your own working hours (max 60/week), and one truck with fixed capacity. Play through the following decisions, narrating your choice and reasoning at each step:

Decision 1 — Menu: Choose a focused menu (2-3 items) or a broad menu (6+ items). State the opportunity cost of your choice in terms of ingredient variety, prep time, and what you're giving up.

Decision 2 — Location: Choose between a high-footfall city-centre pitch (£150/day fee, high demand) or a free suburban pitch (low footfall, no fee). Use marginal thinking: at what daily customer count does the city-centre pitch pay for itself?

Decision 3 — Pricing: Set a price for your signature item. Explain how you expect customers to respond, and what determines that responsiveness (do not assume you know the term "elasticity" — reason it out from incentives).

Market shock: A new food-truck rival sets up 50 metres from your city-centre pitch, selling a similar item for 20% less. Decide how you respond (price war, differentiate, relocate, or hold) and justify it using opportunity cost and incentive reasoning.

Close with a 1-paragraph reflection: which of your four decisions involved the sharpest trade-off, and why?

Aim for 500-700 words total.`,
    rubric: `Grade on:
- Decision 1: opportunity cost of the menu choice correctly identified and specific (not generic) (2 pts)
- Decision 2: marginal/break-even reasoning applied to the location choice, with an attempt at a concrete number or threshold (2 pts)
- Decision 3: pricing reasoning grounded in how incentives shape customer behaviour, even without using technical vocabulary (2 pts)
- Market shock response: a genuine trade-off is weighed (not just "I would lower my price"), referencing scarcity of the responder's own resources (cash, time, capacity) (2 pts)
- Reflection: correctly identifies which decision had the sharpest trade-off with a reasoned justification (1 pt)
- Economic vocabulary and specificity throughout (1 pt)
A strong response treats each decision as a genuine constrained choice with a real cost, not a costless "obviously correct" answer.`,
  },
  {
    type: 'build_a_model',
    label: 'Build-a-Model',
    description: 'Construct and fully explain an economic diagram for a scenario — labelling every axis, curve, and shift, then interpreting what it shows.',
    icon: PenLine,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    estimatedMins: 40,
    prompt: `Choose ONE of the following scenarios and build a fully-labelled economic model (described in words/ASCII, since you cannot draw here) that represents it, then interpret what the model shows:

Scenario A: A country decides to reallocate resources from consumer-goods production toward capital-goods production (factories, machinery) to boost future growth. Model this using a Production Possibility Frontier (PPF) — describe both axes, the initial point, the new point, and what economic concept explains why you can't have more of both without a shift in the frontier itself.

Scenario B: A severe frost destroys a large share of a country's coffee harvest. Model this using a supply-and-demand diagram — describe both axes, which curve shifts and in which direction, and the new equilibrium price and quantity compared to the old one.

For your chosen scenario:
1. Describe the model precisely: axis labels, the curve(s) involved, and their starting position.
2. Describe exactly what changes (a movement along a curve, or a shift of a curve — these are different and you must say which) and why, in terms of the underlying economic cause.
3. State the new equilibrium/outcome and interpret it in plain English for someone who has never seen the diagram.
4. Identify one real-world limitation of your model — a simplifying assumption it makes that might not hold in reality.

Aim for 400-600 words.`,
    rubric: `Grade on:
- Model correctly and precisely specified: axes named correctly, curve(s) identified, starting position clear (2 pts)
- Correct distinction between a MOVEMENT ALONG a curve versus a SHIFT OF a curve, applied accurately to the scenario (3 pts — this is the most commonly confused concept and the core skill being tested)
- New equilibrium/outcome correctly derived and clearly interpreted in plain English (2 pts)
- A genuine, specific model limitation identified (not a generic "models are simplified") (2 pts)
- Precision and correct use of economic vocabulary (1 pt)
Award full marks only when the student demonstrates they understand WHY the curve moves the way it does, not just that it does.`,
  },
  {
    type: 'debate_flashcard',
    label: 'Debate Flashcards',
    description: 'Build a set of claim / counter-claim flashcards on a contested economic question, each backed by real economic reasoning on both sides.',
    icon: Layers,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    estimatedMins: 40,
    prompt: `Choose ONE contested question below and build FIVE flashcard pairs — each pair has a CLAIM (a one-sentence position) and a COUNTER-CLAIM (a one-sentence rebuttal), followed by 2-3 sentences of economic reasoning explaining why the counter-claim has force, not just that it exists.

Question A: "A government should always intervene to fix a market failure."
Question B: "Free markets always allocate resources more efficiently than government planning."
Question C: "Economic growth should be prioritised over environmental protection in developing economies."

Format each of your 5 flashcards exactly like this:
CLAIM: [one sentence]
COUNTER-CLAIM: [one sentence]
REASONING: [2-3 sentences explaining, using Module 1 concepts — scarcity, opportunity cost, incentives, PPF, economic systems — why the counter-claim is a serious challenge to the claim, not just a contrary opinion]

Your 5 flashcards should cover 5 DIFFERENT angles on the question (e.g. not five variations of the same point) — think about efficiency, equity, incentives, information, and time horizon as possible distinct angles.

Aim for 400-600 words total across all 5 flashcards.`,
    rubric: `Grade on:
- Five genuinely distinct angles covered (not five restatements of one idea) (2 pts)
- Each claim and counter-claim is a clear, specific, single-sentence position (1 pt)
- Reasoning sections are grounded in real economic mechanisms (opportunity cost, incentives, information problems, etc.), not just assertion (5 pts — 1 per flashcard)
- Balance: counter-claims are genuinely strong challenges, not straw men easily dismissed (1 pt)
- Economic vocabulary and precision (1 pt)
Strong responses show the student can argue AGAINST a position as rigorously as for it — this is the core skill of applied economic reasoning under uncertainty.`,
  },
]

export function AssignmentsHub({ assignments, userId }: Props) {
  const supabase = createClient()
  const [creating, setCreating] = useState<GenericAssignmentType | null>(null)
  const [activeAssignment, setActiveAssignment] = useState<Assignment | null>(null)
  const [submissionText, setSubmissionText] = useState('')
  const [grading, setGrading] = useState(false)

  const genericSubmitted = assignments.filter(
    (a) => a.submitted_at && a.assignment_type !== 'lesson_practice'
  )
  const completedCount = genericSubmitted.length

  async function startAssignment(type: GenericAssignmentType) {
    setCreating(type)
    const def = GENERIC_ASSIGNMENTS.find((a) => a.type === type)!
    const { data, error } = await supabase
      .from('assignments')
      .insert({
        user_id: userId,
        assignment_type: type,
        unit_id: 'f1-thinking',
        title: def.label,
        prompt: def.prompt,
        rubric: def.rubric,
      })
      .select()
      .single()

    if (!error && data) {
      setActiveAssignment(data)
      setCreating(null)
    } else {
      toast.error('Could not start assignment', 'Please try again.')
      setCreating(null)
    }
  }

  async function submitAssignment() {
    if (!activeAssignment || !submissionText.trim()) return
    setGrading(true)

    try {
      const res = await fetch('/api/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assignmentType: activeAssignment.assignment_type,
          prompt: activeAssignment.prompt,
          rubric: activeAssignment.rubric,
          submission: submissionText,
          moduleId: 'f1-thinking',
        }),
      })

      const body = await res.json()
      if (!res.ok) {
        throw new Error(body.error ?? 'Grading service unavailable.')
      }
      const { feedback, score } = body as { feedback: string; score: number }

      await supabase
        .from('assignments')
        .update({
          submission_text: submissionText,
          ai_feedback: feedback,
          ai_score: score,
          submitted_at: new Date().toISOString(),
        })
        .eq('id', activeAssignment.id)

      // Award XP for completing a full assignment
      await supabase.rpc('add_xp', { p_user_id: userId, p_amount: 75 })

      toast.success('Assignment submitted!', `AI feedback ready. Score: ${score}/10 · +75 XP`)
      setGrading(false)
      setActiveAssignment(null)
      setSubmissionText('')
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Please try again.'
      toast.error('Grading failed', msg)
      setGrading(false)
    }
  }

  // ── Active assignment writer ──────────────────────────────────────────────────
  if (activeAssignment) {
    const def = GENERIC_ASSIGNMENTS.find((a) => a.type === activeAssignment.assignment_type)
    const wordCount = submissionText.trim().split(/\s+/).filter(Boolean).length
    const minWords = 150

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setActiveAssignment(null)}>
            ← Back
          </Button>
          <Badge variant="muted" className="text-[10px]">{def?.label}</Badge>
          <Badge variant="outline" className="text-[10px]">
            <Clock className="inline h-3 w-3 mr-1" />{def?.estimatedMins} min
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              {def && <def.icon className={`h-5 w-5 ${def.color}`} />}
              {def?.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Prompt */}
            <div className={`rounded-xl border p-4 ${def?.bg} ${def?.border}`}>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-3.5 w-3.5 text-[var(--muted-fg)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-fg)]">Assignment Prompt</span>
              </div>
              <p className="text-sm text-[var(--fg)] leading-relaxed whitespace-pre-wrap">{activeAssignment.prompt}</p>
            </div>

            {/* Response */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Your Response</label>
              <textarea
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
                placeholder="Write your response here. Use economic vocabulary from the lesson and engage directly with the prompt."
                rows={16}
                className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors leading-relaxed"
              />
              <div className="flex items-center justify-between text-xs text-[var(--muted-fg)]">
                <span>{wordCount} words</span>
                <span className={wordCount < minWords ? 'text-red-400' : 'text-green-500'}>
                  {wordCount < minWords ? `Minimum ~${minWords} words (${minWords - wordCount} more)` : 'Ready to submit'}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setActiveAssignment(null)}>
                Save & exit
              </Button>
              <Button
                variant="gold"
                onClick={submitAssignment}
                disabled={wordCount < minWords || grading}
                className="gap-1.5 flex-1"
              >
                {grading ? 'Grading…' : 'Submit for AI feedback'}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ── Assignment hub ────────────────────────────────────────────────────────────
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Assignments</h1>
        <p className="text-[var(--muted-fg)] mt-1">
          Extended economics practice · AI-graded · 45–60 min each · {completedCount} submitted
        </p>
        <p className="text-xs text-[var(--muted-fg)] mt-1 border border-[var(--border)] rounded-lg px-3 py-2 inline-block bg-[var(--muted)] mt-2">
          <strong className="text-[var(--fg)]">Note:</strong> Lesson assignments (shorter, topic-specific) live inside each lesson in the Curriculum.
        </p>
      </div>

      {/* Submitted */}
      {genericSubmitted.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold text-[var(--muted-fg)] uppercase tracking-widest mb-3">Submitted</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {genericSubmitted.map((a) => {
              const def = GENERIC_ASSIGNMENTS.find((t) => t.type === a.assignment_type)
              return (
                <Card key={a.id} className="p-4 flex items-start gap-3">
                  {def && (
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${def.bg}`}>
                      <def.icon className={`h-4 w-4 ${def.color}`} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--fg)] truncate">{def?.label}</span>
                      {a.ai_score !== null && (
                        <Badge variant="gold" className="text-[10px] shrink-0">{a.ai_score}/10</Badge>
                      )}
                    </div>
                    {a.ai_feedback && (
                      <p className="text-xs text-[var(--muted-fg)] mt-0.5 line-clamp-2">{a.ai_feedback}</p>
                    )}
                    <div className="flex items-center gap-1 mt-1">
                      <Check className="h-3 w-3 text-green-500" />
                      <span className="text-[10px] text-[var(--muted-fg)]">Submitted · +75 XP</span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Available assignments */}
      <div>
        <h2 className="text-xs font-semibold text-[var(--muted-fg)] uppercase tracking-widest mb-3">Start New Assignment</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GENERIC_ASSIGNMENTS.map(({ type, label, description, icon: Icon, color, bg, border, estimatedMins }) => {
            const alreadyDone = assignments.some((a) => a.assignment_type === type && a.submitted_at)
            return (
              <Card key={type} className={`border ${border} flex flex-col`}>
                <CardContent className="pt-5 flex flex-col flex-1 gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[var(--fg)] text-sm">{label}</h3>
                      {alreadyDone && <Badge variant="success" className="text-[10px] gap-0.5"><Check className="h-2.5 w-2.5" />Done</Badge>}
                    </div>
                    <p className="text-xs text-[var(--muted-fg)] leading-relaxed">{description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] text-[var(--muted-fg)]">
                      <Clock className="h-3 w-3" />
                      {estimatedMins} min · +75 XP
                    </div>
                    <Button
                      size="sm"
                      variant={alreadyDone ? 'outline' : 'gold'}
                      className="gap-1 text-xs h-7"
                      onClick={() => startAssignment(type)}
                      disabled={creating === type}
                    >
                      <Plus className="h-3 w-3" />
                      {alreadyDone ? 'Redo' : 'Start'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
