import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InteractiveDiagram, LESSON_DIAGRAM_MAP } from './InteractiveDiagram'

const COMING_SOON_TEXT = /interactive diagram for this lesson is coming soon/i

describe('InteractiveDiagram wiring', () => {
  const uniqueWidgetKeys = [...new Set(Object.values(LESSON_DIAGRAM_MAP))]

  it('LESSON_DIAGRAM_MAP is non-trivially populated', () => {
    expect(Object.keys(LESSON_DIAGRAM_MAP).length).toBeGreaterThan(100)
    expect(uniqueWidgetKeys.length).toBeGreaterThan(50)
  })

  it.each(Object.entries(LESSON_DIAGRAM_MAP))(
    'lessonId "%s" -> widget key "%s" resolves to a real widget, not the fallback placeholder',
    (lessonId) => {
      render(<InteractiveDiagram lessonId={lessonId} diagramType={undefined} />)
      expect(screen.queryByText(COMING_SOON_TEXT)).not.toBeInTheDocument()
    }
  )

  it('an unmapped lesson id with no diagramType falls through to the "coming soon" placeholder', () => {
    render(<InteractiveDiagram lessonId="totally-unmapped-lesson-id" diagramType={undefined} />)
    expect(screen.getByText(COMING_SOON_TEXT)).toBeInTheDocument()
  })

  it('an unmapped lesson id WITH a diagramType shows that text as a paper-exercise fallback, not "coming soon"', () => {
    render(<InteractiveDiagram lessonId="totally-unmapped-lesson-id" diagramType="Sketch the PPF for this scenario." />)
    expect(screen.queryByText(COMING_SOON_TEXT)).not.toBeInTheDocument()
    expect(screen.getByText(/sketch the ppf for this scenario/i)).toBeInTheDocument()
  })
})
