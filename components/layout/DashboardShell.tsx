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
  children: React.ReactNode
}

export function DashboardShell({ profile, streak, user, children }: Props) {
  const { setProfile, setStreak, sidebarCollapsed } = useAppStore()

  useEffect(() => {
    setProfile(profile)
    setStreak(streak)
  }, [profile, streak, setProfile, setStreak])

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
