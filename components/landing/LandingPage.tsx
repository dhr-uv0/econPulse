'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  TrendingUp, Brain, Zap, Target, Globe, Award, BookOpen,
  BarChart3, Layers, ArrowRight, Check, Star, Flame,
  ChevronRight, GraduationCap, FlaskConical, Trophy,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ── Static data ─────────────────────────────────────────────────────────── */
const TRACKS = [
  { icon: GraduationCap, label: 'IB SL / HL',   color: 'text-blue-500',   bg: 'bg-blue-500/10'  },
  { icon: Trophy,        label: 'AEO / IEO',     color: 'text-gold-500',   bg: 'bg-yellow-500/10'},
  { icon: Target,        label: 'DECA',           color: 'text-green-500',  bg: 'bg-green-500/10' },
  { icon: BookOpen,      label: 'Principles',     color: 'text-purple-500', bg: 'bg-purple-500/10'},
]

const FEATURES = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description:
      'Every lesson adapts to your pace. Our AI assistant Eco-Clippy explains concepts from first principles, draws diagrams on demand, and gives personalized feedback on your essays — scored against real IB criteria.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: BarChart3,
    title: 'Interactive Diagrams',
    description:
      'Don\'t just read about supply and demand — manipulate it. Shift curves with sliders, shock the AD-AS model, run Solow growth simulations, and build game theory matrices in real time.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Zap,
    title: 'Spaced Repetition',
    description:
      'The SM-2 algorithm schedules your flashcard reviews at the scientifically optimal moment — right before you\'d forget. 15-minute daily sessions that compound into mastery over weeks.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Globe,
    title: 'Real-World Economics',
    description:
      'Connect theory to the world. Weekly current affairs digests auto-generated from live news. "Economics in the Wild" portfolio assignments. Tycoon Mode simulations responding to real shocks.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: Layers,
    title: 'Complete Curriculum',
    description:
      'From opportunity cost to the Slutsky equation. Every IB topic, every AEO/IEO concept, game theory, econometrics, financial economics, development economics — nothing left out.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: Target,
    title: 'Exam-Focused Practice',
    description:
      'MCQ, data response, extended essay, diagram reconstruction, quantitative problem sets, and Olympiad-level challenge problems. Every question type, graded against real exam rubrics.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
]

const CURRICULUM_PREVIEW = [
  { unit: 'Unit 1', title: 'Foundations of Economics', topics: ['Scarcity & Choice', 'Opportunity Cost', 'Economic Systems', 'Incentives & Models'] },
  { unit: 'Unit 2', title: 'Microeconomics', topics: ['Supply & Demand', 'Elasticities', 'Market Failure', 'Game Theory'] },
  { unit: 'Unit 3', title: 'Macroeconomics', topics: ['GDP & Growth', 'AD-AS Model', 'Fiscal Policy', 'Monetary Policy'] },
  { unit: 'Unit 4', title: 'International Economics', topics: ['Comparative Advantage', 'Exchange Rates', 'Trade Policy', 'Development'] },
  { unit: 'Advanced', title: 'Olympiad Topics', topics: ['Consumer Theory', 'General Equilibrium', 'Mechanism Design', 'Econometrics'] },
  { unit: 'Applied', title: 'Frontier Economics', topics: ['Behavioral Economics', 'Climate Economics', 'Health Economics', 'Platform Markets'] },
]

const STATS = [
  { value: '600+', label: 'Lessons', icon: BookOpen },
  { value: '4,000+', label: 'Flashcards', icon: Zap },
  { value: '2,000+', label: 'Practice Questions', icon: Target },
  { value: '6', label: 'Exam Tracks', icon: Award },
]

const TESTIMONIALS = [
  {
    quote: 'EconPulse is the only resource that got me to actually understand the IS-LM model — not just memorise it. The interactive diagrams changed everything.',
    name: 'Priya S.',
    context: 'IB HL Student · 7/7 Predicted',
    stars: 5,
  },
  {
    quote: 'I went from knowing nothing about game theory to solving Nash equilibria in a week. The spiral learning method is genuinely brilliant.',
    name: 'Marcus T.',
    context: 'AEO Finalist',
    stars: 5,
  },
  {
    quote: 'Eco-Clippy graded my essay better than my teacher did — and gave more specific feedback. I actually understand what "evaluate" means in IB terms now.',
    name: 'Amara K.',
    context: 'IB SL Student',
    stars: 5,
  },
]

/* ── Component ────────────────────────────────────────────────────────────── */
export function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0')
            e.target.classList.remove('opacity-0', 'translate-y-8')
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
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]">
              <TrendingUp className="h-4 w-4 text-[var(--accent-fg)]" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-[var(--fg)]">EconPulse</span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-[var(--muted-fg)] md:flex">
            <a href="#features" className="hover:text-[var(--fg)] transition-colors">Features</a>
            <a href="#curriculum" className="hover:text-[var(--fg)] transition-colors">Curriculum</a>
            <a href="#tracks" className="hover:text-[var(--fg)] transition-colors">Exam Tracks</a>
          </div>
          <Link href="/login">
            <Button variant="gold" size="sm" className="gap-1.5">
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="hero-gradient relative overflow-hidden px-4 pt-20 pb-24 sm:pt-32 sm:pb-36">
          {/* Background decorative elements */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-3xl" />
            <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
            {/* Animated grid */}
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] animate-fade-in">
              <FlaskConical className="h-3.5 w-3.5" />
              IB · DECA · AEO · IEO · Principles — all in one place
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--fg)] sm:text-6xl lg:text-7xl">
              Master Economics{' '}
              <span className="gradient-text">the right way.</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up delay-100 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted-fg)] sm:text-xl">
              From scarcity and opportunity cost to Nash equilibria and the Solow growth model —
              EconPulse is the definitive platform for serious students preparing for{' '}
              <strong className="text-[var(--fg)] font-semibold">IB, DECA, AEO, and IEO</strong>.
              Built around genuine mastery, not test-prep shortcuts.
            </p>

            {/* CTA */}
            <div className="animate-fade-up delay-200 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/login">
                <Button
                  variant="gold"
                  size="xl"
                  className="w-full sm:w-auto gap-2 shadow-lg hover:shadow-xl hover:shadow-[var(--accent)]/20 transition-all"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" size="xl" className="w-full sm:w-auto gap-1.5">
                  See how it works <ChevronRight className="h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted-fg)]">
              {['No credit card required', 'Free to start', 'Cross-device sync'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[var(--accent)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────────────────────────── */}
        <section className="border-y border-[var(--border)] bg-[var(--card-bg)] px-4 py-12">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                data-animate
                className="flex flex-col items-center gap-2 text-center opacity-0 translate-y-8 transition-all duration-500"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15">
                  <Icon className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-[var(--fg)]">{value}</div>
                <div className="text-sm text-[var(--muted-fg)]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exam Tracks ─────────────────────────────────────────────────── */}
        <section id="tracks" className="px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div
              data-animate
              className="mb-14 text-center opacity-0 translate-y-8 transition-all duration-500"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                Four Complete Tracks
              </div>
              <h2 className="text-3xl font-extrabold text-[var(--fg)] sm:text-4xl">
                One platform. Every economics exam.
              </h2>
              <p className="mt-4 mx-auto max-w-xl text-[var(--muted-fg)]">
                Whether you&apos;re targeting a 7 on IB HL or a medal at the International Economics Olympiad,
                EconPulse has a complete, purpose-built curriculum for you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: GraduationCap,
                  title: 'IB Economics SL / HL',
                  desc: 'Complete 2022+ syllabus. All four units. Paper 1, 2, 3. AI essay grading against real IB criteria.',
                  color: 'text-blue-500',
                  bg: 'bg-blue-500/10',
                  border: 'border-blue-500/20',
                },
                {
                  icon: Trophy,
                  title: 'AEO & IEO',
                  desc: 'Advanced micro, game theory, general equilibrium, econometrics, and every Olympiad topic in depth.',
                  color: 'text-amber-500',
                  bg: 'bg-amber-500/10',
                  border: 'border-amber-500/20',
                },
                {
                  icon: Target,
                  title: 'DECA',
                  desc: 'American economic principles, personal finance, business economics, and competition prep.',
                  color: 'text-green-500',
                  bg: 'bg-green-500/10',
                  border: 'border-green-500/20',
                },
                {
                  icon: BookOpen,
                  title: 'Principles of Economics',
                  desc: 'University-level introductory economics — Mankiw\'s ten principles through macro policy debates.',
                  color: 'text-purple-500',
                  bg: 'bg-purple-500/10',
                  border: 'border-purple-500/20',
                },
              ].map(({ icon: Icon, title, desc, color, bg, border }) => (
                <div
                  key={title}
                  data-animate
                  className={`card-surface card-hover opacity-0 translate-y-8 transition-all duration-500 p-6 border ${border}`}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className="mb-2 font-bold text-[var(--fg)]">{title}</h3>
                  <p className="text-sm text-[var(--muted-fg)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────────────────── */}
        <section id="features" className="bg-[var(--secondary)] px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div
              data-animate
              className="mb-14 text-center opacity-0 translate-y-8 transition-all duration-500"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                How EconPulse Works
              </div>
              <h2 className="text-3xl font-extrabold text-[var(--fg)] sm:text-4xl">
                Engineered for genuine mastery.
              </h2>
              <p className="mt-4 mx-auto max-w-xl text-[var(--muted-fg)]">
                Every feature is designed around one goal: deep, lasting understanding —
                not memorization, not shortcuts.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
                <div
                  key={title}
                  data-animate
                  className="card-surface card-hover bg-[var(--card-bg)] opacity-0 translate-y-8 transition-all duration-500 p-6"
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className="mb-2 font-bold text-[var(--fg)]">{title}</h3>
                  <p className="text-sm text-[var(--muted-fg)] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curriculum Preview ───────────────────────────────────────────── */}
        <section id="curriculum" className="px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div
              data-animate
              className="mb-14 text-center opacity-0 translate-y-8 transition-all duration-500"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                The Curriculum
              </div>
              <h2 className="text-3xl font-extrabold text-[var(--fg)] sm:text-4xl">
                Nothing left out.
              </h2>
              <p className="mt-4 mx-auto max-w-xl text-[var(--muted-fg)]">
                The most comprehensive high-school economics curriculum ever assembled —
                from first principles to frontier research.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CURRICULUM_PREVIEW.map(({ unit, title, topics }) => (
                <div
                  key={unit}
                  data-animate
                  className="card-surface opacity-0 translate-y-8 transition-all duration-500 p-5"
                >
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                    {unit}
                  </div>
                  <h3 className="mb-3 font-bold text-[var(--fg)]">{title}</h3>
                  <ul className="space-y-1.5">
                    {topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-[var(--muted-fg)]">
                        <ChevronRight className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                        {t}
                      </li>
                    ))}
                    <li className="pt-1 text-xs text-[var(--muted-fg)] italic">+ many more topics…</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lesson Structure ─────────────────────────────────────────────── */}
        <section className="bg-[var(--secondary)] px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <div
              data-animate
              className="mb-12 text-center opacity-0 translate-y-8 transition-all duration-500"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                Every Lesson Includes
              </div>
              <h2 className="text-3xl font-extrabold text-[var(--fg)] sm:text-4xl">
                Eight layers of depth.
              </h2>
            </div>

            <div
              data-animate
              className="grid gap-3 sm:grid-cols-2 opacity-0 translate-y-8 transition-all duration-500"
            >
              {[
                { n: '01', title: 'Conceptual Explanation',    desc: 'Built from first principles, expert-written, zero assumed prior knowledge.' },
                { n: '02', title: 'Real-World Hook',           desc: 'A live news case study connecting theory to what\'s happening right now.' },
                { n: '03', title: 'Interactive Diagram',       desc: 'Manipulate sliders and observe supply curves, AD shocks, or Nash equilibria shift in real time.' },
                { n: '04', title: 'Vocabulary Flashcards',     desc: 'Every key term defined, exemplified, and queued for spaced repetition.' },
                { n: '05', title: 'Deeper Dive',               desc: 'Optional mathematical and theoretical extensions for the seriously curious.' },
                { n: '06', title: 'Common Misconceptions',     desc: 'The exact errors examiners see most — explained and corrected.' },
                { n: '07', title: 'Examiner Tip',              desc: 'How this topic appears on real IB and Olympiad exams, and what graders reward.' },
                { n: '08', title: 'Post-Lesson Mini-Quiz',     desc: '3–5 questions that must be passed before proceeding. Immediate feedback.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="card-surface bg-[var(--card-bg)] p-4 flex gap-4">
                  <div className="flex-shrink-0 text-2xl font-black text-[var(--accent)]/30 leading-none">{n}</div>
                  <div>
                    <div className="font-semibold text-[var(--fg)] text-sm mb-0.5">{title}</div>
                    <div className="text-xs text-[var(--muted-fg)] leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────────── */}
        <section className="px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div
              data-animate
              className="mb-12 text-center opacity-0 translate-y-8 transition-all duration-500"
            >
              <h2 className="text-3xl font-extrabold text-[var(--fg)] sm:text-4xl">
                Students who mastered it.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {TESTIMONIALS.map(({ quote, name, context, stars }) => (
                <div
                  key={name}
                  data-animate
                  className="card-surface opacity-0 translate-y-8 transition-all duration-500 p-6 flex flex-col gap-4"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--fg)] leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-sm text-[var(--fg)]">{name}</div>
                    <div className="text-xs text-[var(--muted-fg)]">{context}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[var(--navy-900,#0f1729)]" />
            <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)] animate-pulse-glow">
                <Flame className="h-8 w-8 text-[var(--accent-fg)]" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              Start your streak today.
            </h2>
            <p className="mb-8 text-lg text-white/70">
              The best economists didn&apos;t memorize their way to understanding.
              They built it, concept by concept. Let&apos;s build yours.
            </p>
            <Link href="/login">
              <Button
                variant="gold"
                size="xl"
                className="gap-2 shadow-lg hover:shadow-2xl hover:shadow-[var(--accent)]/30 transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Begin mastering economics — free
              </Button>
            </Link>
            <p className="mt-4 text-sm text-white/50">Sign in with Google · No credit card · Works on mobile</p>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--accent)]">
              <TrendingUp className="h-3.5 w-3.5 text-[var(--accent-fg)]" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-[var(--fg)]">EconPulse</span>
          </div>
          <p className="text-xs text-[var(--muted-fg)]">
            The definitive economics education platform. Built for students who want mastery, not shortcuts.
          </p>
        </div>
      </footer>
    </div>
  )
}
