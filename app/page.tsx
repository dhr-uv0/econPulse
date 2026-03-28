import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing/LandingPage'

export const metadata: Metadata = {
  title: 'EconPulse — Master Economics from IB to Olympiad',
  description:
    'The definitive economics mastery platform. AI-powered lessons, spaced repetition, interactive diagrams, and real-world case studies for IB, DECA, AEO, and IEO students.',
}

export default function Home() {
  return <LandingPage />
}
