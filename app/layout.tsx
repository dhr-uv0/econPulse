import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Toaster } from '@/components/layout/Toaster'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'EconPulse — Economics Mastery Platform',
    template: '%s | EconPulse',
  },
  description:
    'Master economics from IB SL/HL to Olympiad level. AI-powered lessons, spaced repetition, interactive diagrams, and real-world case studies — the definitive economics education platform.',
  keywords: ['economics', 'IB economics', 'economics olympiad', 'DECA', 'AEO', 'IEO', 'study', 'education'],
  authors: [{ name: 'EconPulse' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'EconPulse',
  },
  openGraph: {
    title: 'EconPulse — Economics Mastery Platform',
    description: 'The definitive economics education platform for serious students.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${libreBaskerville.variable} h-full`}
    >
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
