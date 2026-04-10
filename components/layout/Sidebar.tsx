'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import type { Profile } from '@/lib/types'
import { useAppStore } from '@/lib/store/useAppStore'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, BookOpen, Zap, ClipboardList, BarChart3,
  TrendingUp, User as UserIcon, Users, ChevronLeft, ChevronRight,
  Trophy,
} from 'lucide-react'

const NAV_ITEMS = [
  { href: '/dashboard',    icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/curriculum',   icon: BookOpen,         label: 'Curriculum' },
  { href: '/flashcards',   icon: Zap,              label: 'Flashcards' },
  { href: '/assignments',  icon: ClipboardList,    label: 'Assignments' },
  { href: '/progress',     icon: BarChart3,        label: 'Progress' },
  { href: '/leaderboard',  icon: Trophy,           label: 'Leaderboard' },
]

interface Props {
  profile: Profile | null
  user: User
}

export function Sidebar({ profile, user }: Props) {
  const pathname = usePathname()
  const { sidebarCollapsed, setSidebarCollapsed, mobileSidebarOpen, setMobileSidebarOpen } = useAppStore()

  const isTeacher = profile?.role === 'teacher' || profile?.role === 'admin'

  return (
    <>
      {/* Mobile overlay backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-30 bg-black/50 lg:hidden transition-opacity',
          mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileSidebarOpen(false)}
        aria-hidden
      />

      {/* Sidebar panel */}
      <aside
        data-tour="sidebar"
        className={cn(
          'fixed left-0 top-0 z-40 flex h-full flex-col border-r border-[var(--border)] bg-[var(--card-bg)] transition-all duration-300',
          // Mobile: slide based on mobileSidebarOpen
          mobileSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full',
          // Desktop: always visible, width based on sidebarCollapsed
          sidebarCollapsed ? 'lg:translate-x-0 lg:w-16' : 'lg:translate-x-0 lg:w-64'
        )}
      >
        {/* Logo */}
        <div className={cn(
          'flex items-center border-b border-[var(--border)] py-4',
          sidebarCollapsed ? 'lg:justify-center px-0' : 'gap-2.5 px-5'
        )}>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]">
            <TrendingUp className="h-4 w-4 text-[var(--accent-fg)]" strokeWidth={2.5} />
          </div>
          {!sidebarCollapsed && (
            <span className="text-base font-bold text-[var(--fg)] tracking-tight">EconPulse</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" aria-label="Main navigation">
          <ul className={cn('space-y-0.5', sidebarCollapsed ? 'px-2' : 'px-3')}>
            {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
              const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href))
              const tourAttr = href === '/curriculum' ? { 'data-tour': 'curriculum' } : {}
              return (
                <li key={href}>
                  <Link
                    href={href}
                    {...tourAttr}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                      active
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-semibold'
                        : 'text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)]',
                      sidebarCollapsed && 'lg:justify-center lg:px-2'
                    )}
                    title={sidebarCollapsed ? label : undefined}
                    aria-current={active ? 'page' : undefined}
                  >
                    <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={active ? 2.5 : 2} />
                    {!sidebarCollapsed && <span>{label}</span>}
                    {active && !sidebarCollapsed && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    )}
                  </Link>
                </li>
              )
            })}

            {/* Teacher section */}
            {isTeacher && (
              <>
                <li className={cn(
                  'pt-4 pb-1',
                  sidebarCollapsed ? 'lg:hidden' : ''
                )}>
                  <div className="px-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-fg)]">
                    Teaching
                  </div>
                </li>
                <li>
                  <Link
                    href="/teacher"
                    onClick={() => setMobileSidebarOpen(false)}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                      pathname.startsWith('/teacher')
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-semibold'
                        : 'text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)]',
                      sidebarCollapsed && 'lg:justify-center lg:px-2'
                    )}
                    title={sidebarCollapsed ? 'Teacher View' : undefined}
                  >
                    <Users className="h-4.5 w-4.5 shrink-0" />
                    {!sidebarCollapsed && <span>Teacher View</span>}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Bottom: Profile + Settings */}
        <div className={cn(
          'border-t border-[var(--border)] py-3 space-y-0.5',
          sidebarCollapsed ? 'px-2' : 'px-3'
        )}>
          <Link
            href="/profile"
            onClick={() => setMobileSidebarOpen(false)}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)] transition-all',
              sidebarCollapsed && 'lg:justify-center lg:px-2'
            )}
            title={sidebarCollapsed ? 'Profile' : undefined}
          >
            <UserIcon className="h-4.5 w-4.5 shrink-0" />
            {!sidebarCollapsed && (
              <span className="truncate">{profile?.full_name || user.email}</span>
            )}
          </Link>

          {/* Collapse toggle — desktop only */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={cn(
              'hidden lg:flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)] transition-all',
              sidebarCollapsed && 'justify-center px-2'
            )}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed
              ? <ChevronRight className="h-4 w-4 shrink-0" />
              : <><ChevronLeft className="h-4 w-4 shrink-0" /><span>Collapse</span></>
            }
          </button>
        </div>
      </aside>
    </>
  )
}
