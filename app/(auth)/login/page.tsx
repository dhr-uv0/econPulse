import type { Metadata } from 'next'
import { Suspense } from 'react'
import { LoginPage } from '@/components/auth/LoginPage'

export const metadata: Metadata = {
  title: 'Sign In · EconPulse',
  description: 'Sign in to EconPulse with your Google account.',
}

export default function Login() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  )
}
