'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Profile, Streak } from '@/lib/types'

interface AppState {
  profile: Profile | null
  streak: Streak | null
  // Desktop: true = icon-only sidebar; false = full sidebar. Persisted per-device.
  sidebarCollapsed: boolean
  // Mobile: true = sidebar drawer open. Never persisted (resets on each load).
  mobileSidebarOpen: boolean
  currentLessonId: string | null
  onboardingComplete: boolean
  setProfile: (profile: Profile | null) => void
  setStreak: (streak: Streak | null) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setMobileSidebarOpen: (open: boolean) => void
  setCurrentLessonId: (id: string | null) => void
  setOnboardingComplete: (complete: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      profile: null,
      streak: null,
      sidebarCollapsed: false,
      mobileSidebarOpen: false,
      currentLessonId: null,
      onboardingComplete: false,
      setProfile: (profile) => set({ profile }),
      setStreak: (streak) => set({ streak }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),
      setCurrentLessonId: (id) => set({ currentLessonId: id }),
      setOnboardingComplete: (complete) => set({ onboardingComplete: complete }),
    }),
    {
      name: 'econpulse-store',
      // mobileSidebarOpen intentionally excluded — always starts closed on fresh load
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        onboardingComplete: state.onboardingComplete,
      }),
    }
  )
)
