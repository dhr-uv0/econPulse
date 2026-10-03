import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { AdminDashboard, type AdminUserRow } from './AdminDashboard'

vi.mock('@/lib/hooks/useToast', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}))

const fetchMock = vi.fn()
vi.stubGlobal('fetch', fetchMock)

function makeUser(overrides: Partial<AdminUserRow> = {}): AdminUserRow {
  return {
    id: 'u1',
    full_name: 'Ada Lovelace',
    email: 'ada@example.com',
    role: 'student',
    xp_points: 120,
    current_streak: 3,
    longest_streak: 10,
    lessons_completed: 5,
    quizzes_passed: 2,
    assignments_submitted: 1,
    leaderboard_opted_in: true,
    leaderboard_display_name: 'AdaL',
    created_at: '2026-01-01T00:00:00.000Z',
    school: 'Test High',
    grade: 11,
    target_exam: 'IB_HL',
    ...overrides,
  }
}

describe('AdminDashboard', () => {
  beforeEach(() => {
    fetchMock.mockReset()
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) })
  })

  it('renders every user in the table', () => {
    const users = [makeUser(), makeUser({ id: 'u2', full_name: 'Grace Hopper', email: 'grace@example.com' })]
    render(<AdminDashboard users={users} currentUserId="admin1" />)
    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('Grace Hopper')).toBeInTheDocument()
  })

  it('filters the table by search query', () => {
    const users = [makeUser(), makeUser({ id: 'u2', full_name: 'Grace Hopper', email: 'grace@example.com' })]
    render(<AdminDashboard users={users} currentUserId="admin1" />)
    fireEvent.change(screen.getByPlaceholderText(/Search name/), { target: { value: 'grace' } })
    expect(screen.queryByText('Ada Lovelace')).not.toBeInTheDocument()
    expect(screen.getByText('Grace Hopper')).toBeInTheDocument()
  })

  it("shows the current admin's own row as a non-editable badge, not a role dropdown", () => {
    render(<AdminDashboard users={[makeUser({ id: 'admin1' })]} currentUserId="admin1" />)
    expect(screen.getByText('You')).toBeInTheDocument()
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
  })

  it('changing a role calls the update-role API and reflects the change', async () => {
    render(<AdminDashboard users={[makeUser()]} currentUserId="admin1" />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'teacher' } })

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledWith(
      '/api/admin/update-role',
      expect.objectContaining({ method: 'POST' })
    ))
  })

  it('opening user detail shows their stats and a reset-progress control gated by typed confirmation', () => {
    render(<AdminDashboard users={[makeUser()]} currentUserId="admin1" />)
    fireEvent.click(screen.getByTitle('View details'))

    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByText('Ada Lovelace')).toBeInTheDocument()

    fireEvent.click(within(dialog).getByText(/Reset this user's progress/))
    const confirmButton = within(dialog).getByText('Confirm reset').closest('button')
    expect(confirmButton).toBeDisabled()
  })
})
