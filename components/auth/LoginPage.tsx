'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { TrendingUp, BookOpen, Zap, Award, ArrowLeft, ChevronRight, AlertCircle, Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const BENEFITS = [
  { icon: BookOpen, text: 'Structured path from beginner to olympiad' },
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

const ERROR_MESSAGES: Record<string, string> = {
  auth_callback_failed: 'Sign-in failed during redirect. Please try again.',
  provider_not_configured: 'Google sign-in is not yet configured. Contact the site owner.',
  access_denied: 'Access was denied. Please try again.',
}

type AuthTab = 'signup' | 'signin'
type AuthMethod = 'google' | 'email'

export function LoginPage() {
  const [tab, setTab] = useState<AuthTab>('signup')
  const [method, setMethod] = useState<AuthMethod>('google')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  const searchParams = useSearchParams()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const errParam = searchParams.get('error')
    const errDesc  = searchParams.get('error_description')
    if (errParam) {
      setError(ERROR_MESSAGES[errParam] ?? errDesc ?? 'An error occurred. Please try again.')
    }
  }, [searchParams])

  // ── Google OAuth ────────────────────────────────────────────────────────────
  async function handleGoogle() {
    setError(null)
    setLoading(true)
    try {
      const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/callback`,
          queryParams: { access_type: 'offline', prompt: 'consent' },
          skipBrowserRedirect: true,
        },
      })
      if (oauthError || !data?.url) {
        setError(oauthError?.message ?? 'Could not start Google sign-in. Try email/password instead.')
        setLoading(false)
        return
      }
      const dest = new URL(data.url)
      if (!dest.hostname.endsWith('.google.com') && !dest.hostname.endsWith('.supabase.co')) {
        setError('OAuth misconfiguration — unexpected redirect URL.')
        setLoading(false)
        return
      }
      window.location.href = data.url
    } catch {
      setError('An unexpected error occurred.')
      setLoading(false)
    }
  }

  // ── Email sign-up ───────────────────────────────────────────────────────────
  async function handleEmailSignUp(e: React.FormEvent) {
    e.preventDefault()
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setError(null)
    setLoading(true)
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({ email, password })
      if (signUpError) { setError(signUpError.message); setLoading(false); return }

      const user = data.user
      if (user) {
        // Create profile + streak (auto-confirm is on, so user is immediately active)
        await supabase.from('profiles').upsert({
          id: user.id,
          full_name: name || email.split('@')[0],
          role: 'student',
          xp_points: 0,
          badges: [],
          weekly_study_goal_hours: 5,
        }, { onConflict: 'id' })

        await supabase.from('streaks').upsert({
          user_id: user.id,
          current_streak: 0,
          longest_streak: 0,
        }, { onConflict: 'user_id' })

        router.push('/onboarding')
      }
    } catch {
      setError('An unexpected error occurred.')
      setLoading(false)
    }
  }

  // ── Email sign-in ───────────────────────────────────────────────────────────
  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
      if (signInError) {
        setError(signInError.message === 'Invalid login credentials'
          ? 'Incorrect email or password.'
          : signInError.message)
        setLoading(false)
        return
      }
      router.push('/dashboard')
    } catch {
      setError('An unexpected error occurred.')
      setLoading(false)
    }
  }

  const isEmailMode = method === 'email'

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-[#111113] relative overflow-hidden">
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
            <TrendingUp className="h-5 w-5 text-[#111113]" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-white">EconPulse</span>
        </div>
        <div className="relative space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Economics mastery{' '}
            <span className="text-[var(--accent)]">starts here.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-sm">
            A student-built platform for anyone who wants to genuinely understand economics — not just pass the test.
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

      {/* Right panel — auth */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-16 sm:px-10">
        {/* Mobile logo */}
        <div className="mb-10 flex items-center gap-2 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]">
            <TrendingUp className="h-4 w-4 text-[var(--accent-fg)]" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-[var(--fg)]">EconPulse</span>
        </div>

        <div className="w-full max-w-md space-y-5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>

          {/* Sign up / Sign in tabs */}
          <div className="flex rounded-xl bg-[var(--muted)] p-1 gap-1">
            {(['signup', 'signin'] as AuthTab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(null); setSuccess(null) }}
                className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${
                  tab === t
                    ? 'bg-[var(--card-bg)] text-[var(--fg)] shadow-sm'
                    : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
                }`}
              >
                {t === 'signup' ? 'Create account' : 'Sign in'}
              </button>
            ))}
          </div>

          {/* Error / success banners */}
          {error && (
            <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
              <span>{success}</span>
            </div>
          )}

          {/* Auth card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 space-y-4">

            {/* Method switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => { setMethod('google'); setError(null) }}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg border py-2 text-xs font-semibold transition-all ${
                  method === 'google'
                    ? 'border-[var(--accent)]/60 bg-[var(--accent)]/8 text-[var(--fg)]'
                    : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/30'
                }`}
              >
                <GoogleIcon /> Google
              </button>
              <button
                onClick={() => { setMethod('email'); setError(null) }}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg border py-2 text-xs font-semibold transition-all ${
                  method === 'email'
                    ? 'border-[var(--accent)]/60 bg-[var(--accent)]/8 text-[var(--fg)]'
                    : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/30'
                }`}
              >
                <Mail className="h-4 w-4" /> Email
              </button>
            </div>

            {/* Google flow */}
            {!isEmailMode && (
              <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-bold text-[var(--accent-fg)] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                    Redirecting to Google…
                  </span>
                ) : (
                  <><GoogleIcon /> {tab === 'signup' ? 'Sign up' : 'Sign in'} with Google <ChevronRight className="h-4 w-4 ml-auto" /></>
                )}
              </button>
            )}

            {/* Email flow */}
            {isEmailMode && (
              <form onSubmit={tab === 'signup' ? handleEmailSignUp : handleEmailSignIn} className="space-y-3">
                {tab === 'signup' && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-fg)]" />
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] pl-9 pr-4 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-fg)]" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] pl-9 pr-4 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-fg)]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={tab === 'signup' ? 'Password (min 8 characters)' : 'Password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] pl-9 pr-10 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-fg)] hover:text-[var(--fg)]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-bold text-[var(--accent-fg)] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      {tab === 'signup' ? 'Creating account…' : 'Signing in…'}
                    </span>
                  ) : (
                    tab === 'signup' ? 'Create account' : 'Sign in'
                  )}
                </button>
              </form>
            )}
          </div>

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
