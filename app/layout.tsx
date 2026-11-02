import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
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
    <html lang="en" className={`${barlowText.variable} ${barlow.variable} bg-background`}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
