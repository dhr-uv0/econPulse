'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Profile, Streak } from '@/lib/types'

interface AppState {
  profile: Profile | null
  streak: Streak | null
  sidebarCollapsed: boolean
  currentLessonId: string | null
  onboardingComplete: boolean
  setProfile: (profile: Profile | null) => void
  setStreak: (streak: Streak | null) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setCurrentLessonId: (id: string | null) => void
  setOnboardingComplete: (complete: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      profile: null,
      streak: null,
      sidebarCollapsed: false,
      currentLessonId: null,
      onboardingComplete: false,
      setProfile: (profile) => set({ profile }),
      setStreak: (streak) => set({ streak }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setCurrentLessonId: (id) => set({ currentLessonId: id }),
      setOnboardingComplete: (complete) => set({ onboardingComplete: complete }),
    }),
    {
      name: 'econpulse-store',
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        onboardingComplete: state.onboardingComplete,
      }),
    }
  )
)
