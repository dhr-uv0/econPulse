'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, BookOpen, Zap, Award, ArrowLeft, ChevronRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'

const BENEFITS = [
  { icon: BookOpen, text: '600+ lessons across all exam tracks' },
  { icon: Zap,      text: 'AI-powered spaced repetition' },
  { icon: Award,    text: 'Progress synced across all devices' },
]

const GoogleIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

export function LoginPage() {
  const [loading, setLoading] = useState<'signin' | 'signup' | null>(null)
  const supabase = createClient()

  async function handleAuth(mode: 'signin' | 'signup') {
    setLoading(mode)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/callback`,
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    })
    if (error) {
      toast.error('Authentication failed', error.message)
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ── Left panel: branding ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-[#0f1729] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-lg" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-lg)" />
          </svg>
        </div>
        <div className="relative flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]">
            <TrendingUp className="h-5 w-5 text-[#0f1729]" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-white">EconPulse</span>
        </div>
        <div className="relative space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Economics mastery{' '}
            <span className="gradient-text">starts here.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-sm">
            The platform built for students who want to truly understand economics — not just pass the exam.
          </p>
          <ul className="space-y-3">
            {BENEFITS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-white/80 text-sm">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/15">
                  <Icon className="h-4 w-4 text-[var(--accent)]" />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <blockquote className="text-white/40 text-sm italic">
            &ldquo;Economics is the science of thinking in terms of models, joined to the art of choosing models which are relevant to the contemporary world.&rdquo;
          </blockquote>
          <cite className="mt-2 block text-white/30 text-xs not-italic">— John Maynard Keynes</cite>
        </div>
      </div>

      {/* ── Right panel: auth ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-16 sm:px-10">
        {/* Mobile logo */}
        <div className="mb-10 flex items-center gap-2 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]">
            <TrendingUp className="h-4 w-4 text-[var(--accent-fg)]" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-[var(--fg)]">EconPulse</span>
        </div>

        <div className="w-full max-w-md space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-extrabold text-[var(--fg)] tracking-tight">Get started</h1>
            <p className="mt-2 text-[var(--muted-fg)]">Choose how you&apos;d like to continue.</p>
          </div>

          {/* Sign Up card */}
          <div className="rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--card-bg)] p-6 space-y-4 hover:border-[var(--accent)]/60 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-1">New here?</div>
                <h2 className="text-lg font-bold text-[var(--fg)]">Create an account</h2>
                <p className="text-sm text-[var(--muted-fg)] mt-0.5">Join EconPulse and start your journey.</p>
              </div>
              <div className="h-10 w-10 shrink-0 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-[var(--accent)]" />
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-[var(--muted-fg)]">
              {['600+ lessons across IB, DECA, AEO/IEO', 'AI tutor, flashcards & spaced repetition', 'XP, streaks, badges & leaderboard'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleAuth('signup')}
              disabled={loading !== null}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-bold text-[var(--accent-fg)] hover:opacity-90 transition-all disabled:opacity-60"
            >
              {loading === 'signup' ? (
                <span className="animate-pulse">Redirecting…</span>
              ) : (
                <><GoogleIcon /> Sign up with Google <ChevronRight className="h-4 w-4 ml-auto" /></>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--muted-fg)]">Already have an account?</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Sign In row */}
          <button
            onClick={() => handleAuth('signin')}
            disabled={loading !== null}
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3 text-sm font-semibold text-[var(--fg)] hover:border-[var(--accent)]/50 hover:bg-[var(--muted)] transition-all disabled:opacity-60"
          >
            {loading === 'signin' ? (
              <span className="animate-pulse">Redirecting…</span>
            ) : (
              <><GoogleIcon /> Sign in with Google</>
            )}
          </button>

          <p className="text-center text-xs text-[var(--muted-fg)]">
            By continuing, you agree to our{' '}
            <a href="#" className="underline hover:text-[var(--fg)]">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-[var(--fg)]">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
