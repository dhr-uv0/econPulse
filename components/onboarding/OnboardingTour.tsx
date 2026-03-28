'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/lib/store/useAppStore'
import { cn } from '@/lib/utils'

interface Step {
  target: string       // CSS selector for the highlighted element
  title: string
  body: string
  placement: 'top' | 'bottom' | 'left' | 'right'
}

const STEPS: Step[] = [
  {
    target: '[data-tour="sidebar"]',
    title: 'Your Learning Hub',
    body: 'Everything is in the sidebar: Curriculum, Flashcards, Practice Quizzes, Assignments, and your Progress dashboard.',
    placement: 'right',
  },
  {
    target: '[data-tour="streak"]',
    title: 'Keep Your Streak',
    body: 'Study every day to build your streak. Streaks are one of the biggest predictors of exam success — consistency beats cramming every time.',
    placement: 'bottom',
  },
  {
    target: '[data-tour="xp"]',
    title: 'Earn XP & Level Up',
    body: 'Complete lessons, ace quizzes, and review flashcards to earn XP. You\'ll rise from Curious Novice to Grand Economist across 11 levels.',
    placement: 'bottom',
  },
  {
    target: '[data-tour="curriculum"]',
    title: 'Start Learning',
    body: 'Head to Curriculum to begin your first lesson. Every lesson has explanations, interactive diagrams, vocab flashcards, and a quiz.',
    placement: 'right',
  },
  {
    target: '[data-tour="eco-clippy"]',
    title: 'Meet Eco-Clippy',
    body: 'Stuck on a concept? Click the chat bubble anytime. Eco-Clippy is your personal economics tutor — ask anything.',
    placement: 'top',
  },
]

function getElementRect(selector: string): DOMRect | null {
  try {
    const el = document.querySelector(selector)
    if (!el) return null
    return el.getBoundingClientRect()
  } catch {
    return null
  }
}

const PADDING = 8

export function OnboardingTour() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { onboardingComplete, setOnboardingComplete } = useAppStore()
  const [step, setStep] = useState(0)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [visible, setVisible] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  const shouldShow = searchParams.get('onboarding') === 'true' && !onboardingComplete

  const updateRect = useCallback(() => {
    if (!shouldShow) return
    const r = getElementRect(STEPS[step]?.target)
    setRect(r)
  }, [step, shouldShow])

  useEffect(() => {
    if (!shouldShow) return
    setVisible(true)
    updateRect()
    window.addEventListener('resize', updateRect)
    return () => window.removeEventListener('resize', updateRect)
  }, [shouldShow, updateRect])

  const dismiss = () => {
    setVisible(false)
    setOnboardingComplete(true)
    router.replace('/dashboard', { scroll: false })
  }

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1)
    } else {
      dismiss()
    }
  }

  const prev = () => setStep((s) => Math.max(0, s - 1))

  if (!visible || !shouldShow) return null

  const currentStep = STEPS[step]

  // Calculate popover position based on target rect
  const popoverStyle: React.CSSProperties = {}
  if (rect && popoverRef.current) {
    const pw = 320
    const ph = 160
    switch (currentStep.placement) {
      case 'right':
        popoverStyle.top = rect.top + rect.height / 2 - ph / 2
        popoverStyle.left = rect.right + PADDING + 12
        break
      case 'left':
        popoverStyle.top = rect.top + rect.height / 2 - ph / 2
        popoverStyle.right = window.innerWidth - rect.left + PADDING + 12
        break
      case 'bottom':
        popoverStyle.top = rect.bottom + PADDING + 12
        popoverStyle.left = Math.min(rect.left, window.innerWidth - pw - 16)
        break
      case 'top':
      default:
        popoverStyle.bottom = window.innerHeight - rect.top + PADDING + 12
        popoverStyle.left = Math.min(rect.left, window.innerWidth - pw - 16)
    }
  } else {
    // Fallback: center of screen
    popoverStyle.top = '50%'
    popoverStyle.left = '50%'
    popoverStyle.transform = 'translate(-50%, -50%)'
  }

  return (
    <>
      {/* Dimmed overlay with spotlight cutout */}
      <div className="fixed inset-0 z-[9998] pointer-events-none">
        {rect ? (
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <mask id="spotlight">
                <rect width="100%" height="100%" fill="white" />
                <rect
                  x={rect.left - PADDING}
                  y={rect.top - PADDING}
                  width={rect.width + PADDING * 2}
                  height={rect.height + PADDING * 2}
                  rx="8"
                  fill="black"
                />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(0,0,0,0.55)"
              mask="url(#spotlight)"
            />
          </svg>
        ) : (
          <div className="absolute inset-0 bg-black/55" />
        )}
      </div>

      {/* Highlight ring around target */}
      {rect && (
        <div
          className="fixed z-[9999] pointer-events-none rounded-lg ring-2 ring-[var(--accent)] ring-offset-0 transition-all duration-300"
          style={{
            top: rect.top - PADDING,
            left: rect.left - PADDING,
            width: rect.width + PADDING * 2,
            height: rect.height + PADDING * 2,
          }}
        />
      )}

      {/* Popover */}
      <div
        ref={popoverRef}
        className="fixed z-[10000] w-80 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-2xl p-5"
        style={popoverStyle}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--accent)] shrink-0" />
            <span className="font-bold text-[var(--fg)]">{currentStep.title}</span>
          </div>
          <button
            onClick={dismiss}
            className="text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors shrink-0"
            aria-label="Skip tour"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-sm text-[var(--muted-fg)] leading-relaxed mb-4">
          {currentStep.body}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === step ? 'w-4 bg-[var(--accent)]' : 'w-1.5 bg-[var(--border)]'
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {step > 0 && (
              <button
                onClick={prev}
                className="text-xs text-[var(--muted-fg)] hover:text-[var(--fg)] flex items-center gap-0.5 transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Back
              </button>
            )}
            <Button variant="gold" onClick={next} className="h-8 px-4 text-xs gap-1">
              {step < STEPS.length - 1 ? (
                <>Next <ChevronRight className="h-3.5 w-3.5" /></>
              ) : (
                'Get started!'
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
