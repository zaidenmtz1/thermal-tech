import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed, Lexend } from 'next/font/google'
import { AccessibilityWidget } from '@/components/site/accessibility-widget'
import { ScrollToTop } from '@/components/site/scroll-to-top'
import './globals.css'

const barlowText = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-text',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Thermal Tech Inc. | Pipe and Vessel Insulators in the Tri-Cities, WA',
    template: '%s | Thermal Tech Inc.',
  },
  description:
    'Thermal Tech Inc. installs pipe, vessel, duct, and equipment insulation for industrial and commercial projects. Based in the Tri-Cities, Washington.',
  keywords: [
    'pipe insulation',
    'vessel insulation',
    'industrial insulators',
    'commercial insulation',
    'metal jacketing',
    'Tri-Cities WA',
    'Kennewick',
    'Pasco',
    'Richland',
  ],
  openGraph: {
    title: 'Thermal Tech Inc. | Pipe and Vessel Insulators',
    description:
      'Industrial and commercial pipe, vessel, and equipment insulation based in the Tri-Cities, Washington.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thermal Tech Inc.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlowText.variable} ${barlow.variable} ${lexend.variable} bg-background`}
    >
      <body>
        <ScrollToTop />
        {children}
        <AccessibilityWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
