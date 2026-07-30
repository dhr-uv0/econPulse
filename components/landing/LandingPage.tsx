'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import {
  TrendingUp, Brain, Zap, Target, BookOpen,
  BarChart3, ArrowRight, Check,
  ChevronRight, GraduationCap, Trophy, Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const TRACKS = [
  {
    icon: GraduationCap,
    title: 'IB Economics SL / HL',
    desc: 'All four units of the 2022+ syllabus. Paper 1, 2, and 3 practice with AI feedback.',
  },
  {
    icon: Trophy,
    title: 'AEO & IEO',
    desc: 'Advanced micro, game theory, consumer theory, and olympiad-level problem sets.',
  },
  {
    icon: Target,
    title: 'DECA',
    desc: 'American economic principles, personal finance, and business economics.',
  },
  {
    icon: BookOpen,
    title: 'Principles of Economics',
    desc: 'First-year university-level economics for students who want to go beyond the exam.',
  },
]

const FEATURES = [
  {
    icon: Brain,
    title: 'AI Tutor (Eco-Clippy)',
    desc: 'Ask anything, get it explained from first principles. Eco-Clippy grades your essays against real IB criteria and tells you exactly what to improve.',
  },
  {
    icon: BarChart3,
    title: 'Interactive Diagrams',
    desc: 'Move sliders to shift supply and demand curves, shock the AD-AS model, and see how equilibrium changes in real time.',
  },
  {
    icon: Zap,
    title: 'Spaced Repetition Flashcards',
    desc: "The SM-2 algorithm shows you each card right before you'd forget it. 10–15 minutes a day adds up fast.",
  },
  {
    icon: Layers,
    title: 'Structured Curriculum',
    desc: 'Every lesson has a clear explanation, a real-world example, a diagram, vocab cards, and a mini-quiz before you move on.',
  },
]

const CURRICULUM_PREVIEW = [
  { unit: 'Unit 1', title: 'Foundations', topics: ['Scarcity & Choice', 'Opportunity Cost', 'PPC', 'Economic Systems'] },
  { unit: 'Unit 2', title: 'Microeconomics', topics: ['Supply & Demand', 'Elasticities', 'Market Failure', 'Government Intervention'] },
  { unit: 'Unit 3', title: 'Macroeconomics', topics: ['GDP & Growth', 'AD-AS Model', 'Fiscal Policy', 'Inflation & Unemployment'] },
  { unit: 'Unit 4', title: 'International', topics: ['Comparative Advantage', 'Exchange Rates', 'Trade Policy', 'Development'] },
  { unit: 'Advanced', title: 'AEO / IEO Topics', topics: ['Consumer Theory', 'Game Theory', 'General Equilibrium', 'Mechanism Design'] },
  { unit: 'Applied', title: 'DECA & Principles', topics: ['Personal Finance', 'Business Economics', 'American Free Enterprise', 'Policy Debates'] },
]

const LESSON_STEPS = [
  { n: '1', title: 'Clear explanation',      desc: 'Written from first principles — no assumed knowledge.' },
  { n: '2', title: 'Real-world example',      desc: 'A recent event or case study connecting theory to the world.' },
  { n: '3', title: 'Interactive diagram',     desc: 'Sliders and controls so you can see the model respond in real time.' },
  { n: '4', title: 'Vocabulary flashcards',   desc: 'Key terms queued for spaced repetition review.' },
  { n: '5', title: 'Common mistakes',         desc: 'The errors students make most — flagged and corrected.' },
  { n: '6', title: 'Exam tip',               desc: 'How this topic shows up on IB or olympiad exams specifically.' },
  { n: '7', title: 'Deeper dive (optional)', desc: 'Mathematical extensions for those who want to go further.' },
  { n: '8', title: 'Mini-quiz',              desc: '3–5 questions before you move on, with instant feedback.' },
]

const GoogleIcon = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0')
            e.target.classList.remove('opacity-0', 'translate-y-6')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">

      {/* Nav — desktop only, hidden on mobile since mobile hero has logo */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)] lg:hidden">
        <nav className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[var(--accent)]">
              <TrendingUp className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-base font-bold tracking-tight text-[var(--fg)]">EconPulse</span>
          </div>
          <Link href="/login">
            <Button variant="gold" size="sm" className="gap-1.5">
              Get started <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">

        {/* Hero — two-column on lg+ */}
        <section className="flex flex-col lg:flex-row border-b border-[var(--border)]" style={{ minHeight: 'min(100vh, 800px)' }}>

          {/* Left: dark branding panel */}
          <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] flex-col justify-between p-12 xl:p-16 bg-[#0a0a0a]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[var(--accent)]">
                <TrendingUp className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-base font-bold text-white">EconPulse</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl xl:text-6xl font-bold text-white leading-[1.1]">
                Economics mastery<br />starts here.
              </h1>
              <p className="text-white/60 leading-relaxed max-w-sm">
                A student-built platform covering IB Economics, DECA, AEO/IEO, and Principles of Economics.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Structured path from beginner to olympiad',
                  'AI tutor that grades essays against IB criteria',
                  'Interactive diagrams and spaced repetition',
                  'Progress synced across all your devices',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="space-y-1">
              <p className="text-white/40 text-sm italic leading-relaxed">
                &ldquo;Economics is the science of thinking in terms of models, joined to the art of choosing models which are relevant to the contemporary world.&rdquo;
              </p>
              <cite className="text-white/30 text-xs not-italic">— John Maynard Keynes</cite>
            </blockquote>
          </div>

          {/* Right: CTA panel */}
          <div className="flex-1 flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-14 xl:px-18">
            <div className="max-w-md">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--muted-fg)]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Free to use · Built by a high schooler · Open to everyone
              </div>

              <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-[var(--fg)] leading-[1.1]">
                Learn economics{' '}
                <span className="text-[var(--accent)]">properly.</span>
              </h2>

              <p className="mb-8 text-[var(--muted-fg)] leading-relaxed">
                A self-study platform for high school students covering IB, DECA, AEO/IEO, and Principles of Economics — with AI explanations, interactive diagrams, and spaced repetition built in.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/login">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto gap-2">
                    <GoogleIcon /> Sign up with Google
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto gap-1.5">
                    See how it works <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-5 text-sm text-[var(--muted-fg)]">
                {['Free to start', 'No credit card', 'Works on any device'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[var(--accent)]" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div data-animate className="mb-12 opacity-0 translate-y-6 transition-all duration-500">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">How it works</p>
              <h2 className="text-2xl font-bold text-[var(--fg)] sm:text-3xl">Built around understanding, not memorization.</h2>
              <p className="mt-3 max-w-lg text-[var(--muted-fg)]">
                Every feature is there for a reason — to help concepts actually stick.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  data-animate
                  className="rounded-[12px] border border-[var(--border)] bg-[var(--card-bg)] opacity-0 translate-y-6 transition-all duration-500 p-6"
                  style={{ borderLeft: '3px solid var(--accent)' }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="h-4 w-4 text-[var(--muted-fg)] shrink-0" strokeWidth={1.5} />
                    <h3 className="font-semibold text-[var(--fg)]">{title}</h3>
                  </div>
                  <p className="text-sm text-[var(--muted-fg)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lesson structure */}
        <section className="border-y border-[var(--border)] px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div data-animate className="mb-10 opacity-0 translate-y-6 transition-all duration-500">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Every lesson</p>
              <h2 className="text-2xl font-bold text-[var(--fg)] sm:text-3xl">What you get in each lesson.</h2>
            </div>
            <div data-animate className="grid gap-3 sm:grid-cols-2 opacity-0 translate-y-6 transition-all duration-500">
              {LESSON_STEPS.map(({ n, title, desc }) => (
                <div
                  key={n}
                  className="flex gap-3 rounded-[12px] border border-[var(--border)] bg-[var(--card-bg)] p-4"
                  style={{ borderLeft: '3px solid var(--accent)' }}
                >
                  <div className="text-xl font-black text-[var(--accent)]/40 leading-none shrink-0 w-5">{n}</div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--fg)] mb-0.5">{title}</div>
                    <div className="text-xs text-[var(--muted-fg)] leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Tracks */}
        <section id="tracks" className="px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div data-animate className="mb-12 opacity-0 translate-y-6 transition-all duration-500">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Exam tracks</p>
              <h2 className="text-2xl font-bold text-[var(--fg)] sm:text-3xl">Pick your track — or study all of them.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TRACKS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  data-animate
                  className="rounded-[12px] border border-[var(--border)] bg-[var(--card-bg)] opacity-0 translate-y-6 transition-all duration-500 p-5"
                  style={{ borderLeft: '3px solid var(--accent)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4 text-[var(--muted-fg)] shrink-0" strokeWidth={1.5} />
                    <h3 className="text-sm font-bold text-[var(--fg)]">{title}</h3>
                  </div>
                  <p className="text-xs text-[var(--muted-fg)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum preview */}
        <section id="curriculum" className="border-y border-[var(--border)] px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div data-animate className="mb-12 opacity-0 translate-y-6 transition-all duration-500">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Curriculum</p>
              <h2 className="text-2xl font-bold text-[var(--fg)] sm:text-3xl">What you&apos;ll learn.</h2>
              <p className="mt-3 max-w-lg text-[var(--muted-fg)]">
                More topics are added regularly. Content is written to match real exam syllabuses.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CURRICULUM_PREVIEW.map(({ unit, title, topics }) => (
                <div
                  key={unit}
                  data-animate
                  className="rounded-[12px] border border-[var(--border)] bg-[var(--card-bg)] opacity-0 translate-y-6 transition-all duration-500 p-5"
                  style={{ borderLeft: '3px solid var(--accent)' }}
                >
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">{unit}</div>
                  <h3 className="mb-3 font-bold text-[var(--fg)]">{title}</h3>
                  <ul className="space-y-1.5">
                    {topics.map((t) => (
                      <li key={t} className="text-sm text-[var(--muted-fg)]">{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-2xl font-bold text-[var(--fg)] sm:text-3xl">Ready to start?</h2>
            <p className="mb-7 max-w-lg text-[var(--muted-fg)]">
              Sign up with Google and you can be in your first lesson in under a minute.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/login">
                <Button variant="gold" size="lg" className="gap-2">
                  <GoogleIcon /> Get started — it&apos;s free
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-xs text-[var(--muted-fg)]">No account setup needed · Sign in with Google · Free</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[var(--accent)]">
              <TrendingUp className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-sm text-[var(--fg)]">EconPulse</span>
          </div>
          <p className="text-xs text-[var(--muted-fg)]">A student-built economics learning platform. Free and open to everyone.</p>
        </div>
      </footer>
    </div>
  )
}
