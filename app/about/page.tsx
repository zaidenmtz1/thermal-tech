import type { Metadata } from 'next'
import { AboutContent } from '@/components/site/about-content'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pipe and Vessel Insulation Contractor in the Tri-Cities',
  description:
    'Thermal Tech Inc. has insulated and metal-jacketed pipe, vessels, tanks, and ductwork for industrial and commercial sites in Kennewick, Pasco, and Richland since February 2005.',
  keywords: [
    'Thermal Tech Inc.',
    'pipe insulation contractor',
    'vessel insulation',
    'metal jacketing',
    'industrial insulation Tri-Cities',
    'commercial insulation Kennewick',
    'ammonia piping insulation',
    'steam pipe insulation Pasco',
    'chilled water insulation Richland',
  ],
  openGraph: {
    title: 'About Thermal Tech Inc. | Tri-Cities Pipe and Vessel Insulators',
    description:
      'A small Tri-Cities crew insulating and jacketing pipe, vessels, tanks, and duct since February 2005. Referral-based, with 2% of profit given to local children in need.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description:
    'Industrial and commercial pipe, vessel, tank, and duct insulation with metal jacketing. Based in the Tri-Cities, Washington, since February 2005.',
  email: site.email,
  telephone: site.phoneHref.replace('tel:', ''),
  foundingDate: '2005-02',
  areaServed: [
    { '@type': 'City', name: 'Kennewick', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'City', name: 'Pasco', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'City', name: 'Richland', containedInPlace: { '@type': 'State', name: 'Washington' } },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tri-Cities',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Pipe insulation',
    'Vessel insulation',
    'Metal jacketing',
    'Ammonia piping',
    'Steam piping',
    'Chilled water piping',
    'Duct insulation',
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
