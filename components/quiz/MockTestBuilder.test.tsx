import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MockTestBuilder } from './MockTestBuilder'
import { CURRICULUM } from '@/lib/curriculum/data'

const insertMock = vi.fn().mockResolvedValue({ error: null })
const rpcMock = vi.fn().mockResolvedValue({ error: null })

vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    from: () => ({ insert: insertMock }),
    rpc: rpcMock,
  }),
}))

describe('MockTestBuilder', () => {
  beforeEach(() => {
    insertMock.mockClear()
    rpcMock.mockClear()
  })

  it('renders the setup phase with every tier and difficulty option', () => {
    render(<MockTestBuilder modules={CURRICULUM} userId="u1" />)
    expect(screen.getByText('Build a Mock Test')).toBeInTheDocument()
    expect(screen.getByText('Foundations')).toBeInTheDocument()
    expect(screen.getByText('Easy')).toBeInTheDocument()
    expect(screen.getByText('Generate Mock Test')).toBeInTheDocument()
  })

  it('disables Generate Mock Test when no tier is selected', () => {
    render(<MockTestBuilder modules={CURRICULUM} userId="u1" />)
    fireEvent.click(screen.getByText('Foundations')) // deselect the default-selected tier
    expect(screen.getByText('Generate Mock Test').closest('button')).toBeDisabled()
  })

  it('generating a test moves to the taking phase with real questions', () => {
    render(<MockTestBuilder modules={CURRICULUM} userId="u1" />)
    fireEvent.click(screen.getByText('Generate Mock Test'))
    expect(screen.getByText(/Question 1 of/)).toBeInTheDocument()
  })

  it('submitting the test (unanswered is allowed) saves a quiz_results row and awards XP', async () => {
    render(<MockTestBuilder modules={CURRICULUM} userId="u1" />)
    fireEvent.click(screen.getByText('Generate Mock Test')) // defaults to 10 questions

    // Click through to the last question without answering (answering isn't
    // required to navigate), then submit.
    for (let i = 0; i < 9; i++) {
      fireEvent.click(screen.getByText('Next'))
    }
    fireEvent.click(screen.getByText('Submit Test'))

    await vi.waitFor(() => expect(insertMock).toHaveBeenCalled())
    expect(rpcMock).toHaveBeenCalledWith('add_xp', expect.objectContaining({ p_user_id: 'u1' }))
  })
})
