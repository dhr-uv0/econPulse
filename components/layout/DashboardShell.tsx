'use client'

import { useEffect } from 'react'
import type { User } from '@supabase/supabase-js'
import type { Profile, Streak } from '@/lib/types'
import { useAppStore } from '@/lib/store/useAppStore'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'
import { EcoClippy } from '@/components/ai/EcoClippy'
import { OnboardingTour } from '@/components/onboarding/OnboardingTour'
import { PageTransition } from '@/components/layout/PageTransition'
import { Suspense } from 'react'

interface Props {
  profile: Profile | null
  streak: Streak | null
  user: User
  onboardingCompleted: boolean
  children: React.ReactNode
}

export function DashboardShell({ profile, streak, user, onboardingCompleted, children }: Props) {
  const { setProfile, setStreak, setOnboardingComplete, sidebarCollapsed } = useAppStore()

  useEffect(() => {
    setProfile(profile)
    setStreak(streak)
    // Sync onboarding state from DB so it's consistent across all devices
    if (onboardingCompleted) setOnboardingComplete(true)
  }, [profile, streak, onboardingCompleted, setProfile, setStreak, setOnboardingComplete])

  return (
    <div className="flex min-h-screen bg-[var(--bg)]">
      {/* Sidebar */}
      <Sidebar profile={profile} user={user} />

      {/* Main area */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        }`}
      >
        <TopBar profile={profile} streak={streak} user={user} />
        <main
          id="main-content"
          className="flex-1 p-4 sm:p-6 lg:p-8"
          tabIndex={-1}
        >
          <PageTransition>{children}</PageTransition>
        </main>
      </div>

      {/* AI Assistant */}
      <EcoClippy />

      {/* Onboarding tour (shown once after first login) */}
      <Suspense>
        <OnboardingTour />
      </Suspense>
    </div>
  )
}
