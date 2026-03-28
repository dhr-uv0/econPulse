'use client'

import { useState } from 'react'
import type { Assignment, AssignmentType } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Newspaper, Scale, Gamepad2, Eye, PenLine,
  FileText, Swords, Globe, Plus, ArrowRight,
  Clock, Check,
} from 'lucide-react'

interface Props {
  assignments: Assignment[]
  userId: string
}

const ASSIGNMENT_TYPES: {
  type: AssignmentType
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bg: string
  border: string
  estimatedMins: number
}[] = [
  {
    type: 'econ_in_wild',
    label: 'Economics in the Wild',
    description: 'Find a real news article and write an IB-style commentary applying economic theory. Build your personal portfolio.',
    icon: Newspaper,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    estimatedMins: 45,
  },
  {
    type: 'policy_debate',
    label: 'Policy Debate',
    description: 'Evaluate a two-sided economic policy question using IB command terms. Develop balanced, evidence-based arguments.',
    icon: Scale,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    estimatedMins: 30,
  },
  {
    type: 'tycoon_mode',
    label: 'Tycoon Mode',
    description: 'Manage a virtual economy responding to supply shocks, recessions, and trade disputes. Apply theory in real time.',
    icon: Gamepad2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    estimatedMins: 20,
  },
  {
    type: 'peer_prediction',
    label: 'Peer Prediction',
    description: 'Forecast economic outcomes before they are revealed. Build your economic intuition and calibration.',
    icon: Eye,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    estimatedMins: 15,
  },
  {
    type: 'build_a_model',
    label: 'Build-a-Model',
    description: 'Construct economic diagrams from scratch — label axes, draw curves, mark equilibrium. Drag-and-drop interface.',
    icon: PenLine,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    estimatedMins: 25,
  },
  {
    type: 'research_brief',
    label: 'Research Brief',
    description: 'The AI generates a briefing on a live macroeconomic situation. Write a policy recommendation memo citing theory.',
    icon: FileText,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    estimatedMins: 35,
  },
  {
    type: 'debate_flashcard',
    label: 'Debate Flashcard Battle',
    description: 'Given a position to argue, select the strongest arguments from a shuffled card set. Master evaluative thinking.',
    icon: Swords,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    estimatedMins: 20,
  },
  {
    type: 'current_affairs',
    label: 'Current Affairs Digest',
    description: 'Weekly AI digest of three economic events. Identify concepts illustrated and recommend policy responses.',
    icon: Globe,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    estimatedMins: 25,
  },
]

export function AssignmentsHub({ assignments, userId }: Props) {
  const supabase = createClient()
  const [creating, setCreating] = useState<AssignmentType | null>(null)
  const [activeAssignment, setActiveAssignment] = useState<Assignment | null>(null)
  const [submissionText, setSubmissionText] = useState('')
  const [grading, setGrading] = useState(false)

  const completedCount = assignments.filter((a) => a.submitted_at).length

  async function startAssignment(type: AssignmentType) {
    setCreating(type)
    const { data, error } = await supabase
      .from('assignments')
      .insert({
        user_id: userId,
        assignment_type: type,
        unit_id: 'ib-micro',
        title: ASSIGNMENT_TYPES.find((a) => a.type === type)?.label,
        prompt: generatePrompt(type),
      })
      .select()
      .single()

    if (!error && data) {
      setActiveAssignment(data)
      setCreating(null)
    }
  }

  async function submitAssignment() {
    if (!activeAssignment || !submissionText.trim()) return
    setGrading(true)

    const res = await fetch('/api/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        assignmentId: activeAssignment.id,
        assignmentType: activeAssignment.assignment_type,
        prompt: activeAssignment.prompt,
        submission: submissionText,
      }),
    })

    const { feedback, score } = await res.json()

    await supabase
      .from('assignments')
      .update({
        submission_text: submissionText,
        ai_feedback: feedback,
        ai_score: score,
        submitted_at: new Date().toISOString(),
      })
      .eq('id', activeAssignment.id)

    toast.success('Assignment submitted!', `AI feedback ready. Score: ${score}/10`)
    setGrading(false)
    setActiveAssignment(null)
    setSubmissionText('')
  }

  // Active assignment writer
  if (activeAssignment) {
    const typeDef = ASSIGNMENT_TYPES.find((a) => a.type === activeAssignment.assignment_type)
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setActiveAssignment(null)}>
            ← Back
          </Button>
          <Badge variant="muted" className="text-[10px]">{typeDef?.label}</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {typeDef && <typeDef.icon className={`h-5 w-5 ${typeDef.color}`} />}
              {typeDef?.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`rounded-xl border p-4 ${typeDef?.bg} ${typeDef?.border}`}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'inherit' }}>
                Prompt
              </div>
              <p className="text-sm text-[var(--fg)] leading-relaxed">{activeAssignment.prompt}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Your Response</label>
              <textarea
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
                placeholder="Write your response here…"
                rows={12}
                className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors font-mono leading-relaxed"
              />
              <div className="text-xs text-[var(--muted-fg)] text-right">
                {submissionText.length} characters · ~{Math.ceil(submissionText.split(' ').length / 200)} min read
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setActiveAssignment(null)}>
                Save & exit
              </Button>
              <Button
                variant="gold"
                onClick={submitAssignment}
                loading={grading}
                disabled={submissionText.length < 50}
                className="gap-1.5"
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

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">Assignments</h1>
          <p className="text-[var(--muted-fg)] mt-1">
            Eight creative learning modalities · {completedCount} submitted
          </p>
        </div>
      </div>

      {/* Completed assignments */}
      {assignments.filter((a) => a.submitted_at).length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-[var(--muted-fg)] uppercase tracking-widest mb-3">
            Submitted
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {assignments.filter((a) => a.submitted_at).map((a) => {
              const typeDef = ASSIGNMENT_TYPES.find((t) => t.type === a.assignment_type)
              return (
                <Card key={a.id} className="p-4 flex items-start gap-3">
                  {typeDef && (
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${typeDef.bg}`}>
                      <typeDef.icon className={`h-4 w-4 ${typeDef.color}`} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--fg)] truncate">{typeDef?.label}</span>
                      {a.ai_score && <Badge variant="gold" className="text-[10px] shrink-0">{a.ai_score}/10</Badge>}
                    </div>
                    {a.ai_feedback && (
                      <p className="text-xs text-[var(--muted-fg)] mt-0.5 line-clamp-2">{a.ai_feedback}</p>
                    )}
                    <div className="flex items-center gap-1 mt-1">
                      <Check className="h-3 w-3 text-green-500" />
                      <span className="text-[10px] text-[var(--muted-fg)]">Submitted</span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Assignment types */}
      <div>
        <h2 className="text-sm font-semibold text-[var(--muted-fg)] uppercase tracking-widest mb-3">
          Start New Assignment
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ASSIGNMENT_TYPES.map(({ type, label, description, icon: Icon, color, bg, border, estimatedMins }) => (
            <Card key={type} className={`card-hover border ${border} flex flex-col`}>
              <CardContent className="pt-5 flex flex-col flex-1 gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--fg)] text-sm mb-1">{label}</h3>
                  <p className="text-xs text-[var(--muted-fg)] leading-relaxed">{description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] text-[var(--muted-fg)]">
                    <Clock className="h-3 w-3" />
                    {estimatedMins} min
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1 text-xs h-7"
                    onClick={() => startAssignment(type)}
                    loading={creating === type}
                  >
                    <Plus className="h-3 w-3" />
                    Start
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function generatePrompt(type: AssignmentType): string {
  const prompts: Record<AssignmentType, string> = {
    econ_in_wild: 'Find a recent news article (published within the last month) about an economic event or policy. Paste the URL below and write a structured IB-style commentary (approximately 650 words) applying at least two economic concepts from the curriculum. Your commentary should: (1) briefly describe the economic event, (2) apply relevant economic theory with reference to at least one diagram, (3) evaluate the short-run and long-run implications, and (4) consider stakeholder impacts.',
    policy_debate: 'The central bank is considering raising interest rates by 150 basis points to combat inflation currently at 6.2%. Evaluate this policy decision. Use IB command term "evaluate" correctly — discuss arguments for and against, consider short-run and long-run effects, examine impacts on different stakeholders (households, businesses, government, foreign investors), and reach a reasoned conclusion about whether the policy is justified.',
    tycoon_mode: 'You are the Finance Minister of Exconomia, a small open economy. A global commodity price shock has caused inflation to jump to 8% while GDP growth has slowed to 0.5%. Unemployment is rising. Write a policy memorandum explaining: (1) what is causing this stagflation scenario, (2) why conventional policy tools are ineffective, (3) your recommended policy mix with specific measures, and (4) the trade-offs involved.',
    peer_prediction: 'The Federal Reserve has just announced an unexpected 50 basis point interest rate cut. Before reading any analysis: (1) Predict the immediate effect on the USD exchange rate and explain your reasoning using exchange rate theory. (2) Predict the effect on the US current account over the next 12 months, explaining the J-curve. (3) Predict the effect on inflation 18 months from now. Submit your predictions, then check against the economic consensus.',
    build_a_model: 'Using economic diagrams, illustrate and explain the complete chain of effects from a negative supply shock (e.g., a significant rise in oil prices) through to the final macroeconomic equilibrium. Your answer should include: (1) a cost-push inflation diagram, (2) an AD-AS diagram showing the short-run and long-run effects, (3) a Phillips curve diagram showing the stagflation scenario, and (4) written explanation connecting all three diagrams.',
    research_brief: 'Prepare a 400-word policy brief on the following situation: China\'s economy is experiencing a property market crisis with major developers defaulting on bonds, consumer confidence falling, and deflationary pressures building. As a policy adviser, what combination of fiscal and monetary policy measures would you recommend? Cite specific economic theory (Keynesian multiplier, liquidity trap, balance sheet recession) to justify your recommendations.',
    debate_flashcard: 'You must argue IN FAVOUR of free trade and against protectionism. From the arguments below, select the FIVE strongest arguments for your position and rank them in order of persuasiveness. For each, write one sentence explaining why it is compelling. Then select the TWO strongest counter-arguments you must overcome and explain how you would respond.',
    current_affairs: 'This week\'s three economic events: (1) The ECB paused rate hikes citing slowing growth. (2) Germany entered a technical recession (two consecutive quarters of negative GDP growth). (3) The Eurozone inflation rate fell to 2.4% from a peak of 10.6%. For each event: identify which economic concepts it illustrates, explain the mechanism, and recommend one specific policy response with justification.',
  }
  return prompts[type]
}
