'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import type { Profile, Streak } from '@/lib/types'
import { useAppStore } from '@/lib/store/useAppStore'
import { createClient } from '@/lib/supabase/client'
import { cn, getInitials } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/lib/hooks/useToast'
import { Menu, Flame, Sun, Moon, LogOut, User as UserIcon, Bell } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

interface Props {
  profile: Profile | null
  streak: Streak | null
  user: User
}

export function TopBar({ profile, streak, user }: Props) {
  const router = useRouter()
  const { sidebarCollapsed, setSidebarCollapsed, mobileSidebarOpen, setMobileSidebarOpen } = useAppStore()
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
    toast.success('Signed out', 'See you next time!')
  }

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center border-b border-[var(--border)] bg-[var(--card-bg)]/80 backdrop-blur-xl px-4 gap-3">
      {/* Mobile menu toggle */}
      <button
        className="flex lg:hidden h-8 w-8 items-center justify-center rounded-lg text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)] transition-colors"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        aria-label="Toggle navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[var(--accent-fg)] focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Streak indicator */}
      {streak && streak.current_streak > 0 && (
        <div data-tour="streak" className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1">
          <Flame className="h-3.5 w-3.5 text-orange-500" />
          <span className="text-xs font-bold text-[var(--fg)]">{streak.current_streak}</span>
          <span className="hidden text-xs text-[var(--muted-fg)] sm:block">day streak</span>
        </div>
      )}

      {/* XP badge */}
      {profile && (
        <Badge data-tour="xp" variant="gold" className="gap-1">
          ✦ {profile.xp_points.toLocaleString()} XP
        </Badge>
      )}

      <div className="flex-1" />

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="h-8 w-8 flex items-center justify-center rounded-lg text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)] transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      {/* Notifications placeholder */}
      <button
        className="h-8 w-8 flex items-center justify-center rounded-lg text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)] transition-colors"
        aria-label="Notifications"
      >
        <Bell className="h-4 w-4" />
      </button>

      {/* Avatar dropdown */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 rounded-lg p-1 hover:bg-[var(--muted)] transition-colors"
          aria-label="User menu"
          aria-expanded={menuOpen}
        >
          <Avatar className="h-7 w-7">
            <AvatarImage src={profile?.avatar_url ?? undefined} alt={profile?.full_name ?? 'User'} />
            <AvatarFallback className="text-xs">
              {getInitials(profile?.full_name ?? user.email ?? null)}
            </AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium text-[var(--fg)] sm:block max-w-[120px] truncate">
            {profile?.full_name || user.email}
          </span>
        </button>

        {menuOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} aria-hidden />
            <div className="absolute right-0 top-full mt-2 z-20 w-48 card-surface py-1 shadow-lg">
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--fg)] hover:bg-[var(--muted)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <UserIcon className="h-4 w-4 text-[var(--muted-fg)]" />
                Profile & Settings
              </Link>
              <div className="my-1 h-px bg-[var(--border)]" />
              <button
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-[var(--muted)] transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
