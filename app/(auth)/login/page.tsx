import type { Metadata } from 'next'
import { LoginPage } from '@/components/auth/LoginPage'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to EconPulse with your Google account.',
}

export default function Login() {
  return <LoginPage />
}
