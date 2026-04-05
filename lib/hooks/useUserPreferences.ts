'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { UserPreferences, LearningStyle, DifficultyMode } from '@/lib/types'

const DEFAULTS: Omit<UserPreferences, 'user_id' | 'updated_at'> = {
  learning_style: 'mixed',
  difficulty: 'standard',
  onboarding_completed: false,
  manual_override: false,
  behavior_signals: {
    skippedExplanationsCount: 0,
    hintRequestRate: 0,
    averageQuizScore: 0,
    averageTimeOnTextBlocks: 0,
    averageTimeOnVisuals: 0,
    extensionProblemAttemptRate: 0,
    sessionCount: 0,
  },
}

export function useUserPreferences() {
  const [prefs, setPrefs] = useState<UserPreferences | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    let cancelled = false
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setLoading(false); return }

      const { data } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (!cancelled) {
        if (data) {
          setPrefs(data as UserPreferences)
        } else {
          // First time — seed defaults
          const seed = { user_id: user.id, ...DEFAULTS, updated_at: new Date().toISOString() }
          await supabase.from('user_preferences').upsert(seed)
          setPrefs(seed)
        }
        setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const update = useCallback(async (patch: Partial<Pick<UserPreferences, 'learning_style' | 'difficulty' | 'onboarding_completed' | 'manual_override'>>) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !prefs) return

    const updated = { ...prefs, ...patch, manual_override: true, updated_at: new Date().toISOString() }
    setPrefs(updated)
    await supabase.from('user_preferences').upsert(updated)
  }, [prefs, supabase])

  const completeOnboarding = useCallback(async (style: LearningStyle, difficulty: DifficultyMode) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !prefs) return

    const updated = {
      ...prefs,
      learning_style: style,
      difficulty,
      onboarding_completed: true,
      manual_override: false,
      updated_at: new Date().toISOString(),
    }
    setPrefs(updated)
    await supabase.from('user_preferences').upsert(updated)
  }, [prefs, supabase])

  return { prefs, loading, update, completeOnboarding }
}
