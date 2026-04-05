import { Suspense } from 'react'
import { LearningStyleQuiz } from '@/components/onboarding/LearningStyleQuiz'

export default function OnboardingPage() {
  return (
    <Suspense>
      <LearningStyleQuiz />
    </Suspense>
  )
}
