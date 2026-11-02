import type { Metadata } from 'next'
import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
import { Materials } from '@/components/site/pipe/materials'
import { Overview } from '@/components/site/pipe/overview'
import { Process } from '@/components/site/pipe/process'
import { Systems } from '@/components/site/pipe/systems'

export const metadata: Metadata = {
  title: 'Pipe Installation',
  description:
    'Industrial pipe insulation and metal jacketing for hot, cold, and refrigeration lines. Thermal Tech Inc. serves plants and processing facilities across the Tri-Cities, Washington.',
  openGraph: {
    title: 'Industrial Pipe Installation | Thermal Tech Inc.',
    description:
      'Pipe insulation and jacketing for process piping, refrigeration lines, valves, and fittings in the Tri-Cities, Washington.',
  },
}

const anchors = [
  { label: 'Overview', title: 'What we do', href: '#overview' },
  { label: 'Systems', title: 'Lines we insulate', href: '#systems' },
  { label: 'Process', title: 'How we work', href: '#process' },
  { label: 'Materials', title: 'What we use', href: '#materials' },
]

export default function PipeInstallationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industrial', href: '/industrial' },
            { label: 'Pipe installation' },
          ]}
          title="Pipe installation"
          description="Insulation and metal jacketing for process piping, refrigeration lines, valves, and fittings. Installed to spec by a local crew."
          image="/images/stainless-vessels.webp"
          imageAlt="Stainless clad insulated piping running beside refrigeration vessels"
          anchors={anchors}
        />
        <Overview />
        <Systems />
        <Process />
        <Materials />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
