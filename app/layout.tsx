import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SkillForge | AI-Powered Career Simulation Platform',
  description: 'Experience your dream career before you land it. SkillForge uses AI to create immersive job simulations with virtual companies, real tasks, and personalized mentorship.',
  keywords: ['career simulation', 'AI mentor', 'job training', 'coding practice', 'interview prep', 'virtual internship'],
  authors: [{ name: 'SkillForge' }],
  creator: 'SkillForge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skillforge.app',
    siteName: 'SkillForge',
    title: 'SkillForge | AI-Powered Career Simulation Platform',
    description: 'Experience your dream career before you land it. AI-powered job simulations with virtual companies and personalized mentorship.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillForge | AI-Powered Career Simulation Platform',
    description: 'Experience your dream career before you land it.',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
