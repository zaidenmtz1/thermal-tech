import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
import { projects } from '@/lib/work'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Recent pipe, vessel, and duct insulation work by Thermal Tech Inc. in the Tri-Cities, Washington.',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: 'Projects' },
          ]}
          title="Projects"
          description="Recent insulation and jacketing on process piping, vessels, and commercial mechanical systems."
          image="/images/stainless-vessels.webp"
          imageAlt="Two horizontal stainless clad vessels with insulated piping"
          anchors={[
            { label: 'Work', title: 'Recent projects', href: '#work' },
            { label: 'Gallery', title: 'All photos', href: '/gallery' },
            { label: 'Industrial', title: 'Pipe and vessels', href: '/industrial' },
            { label: 'Quote', title: 'Start a project', href: '/request-a-quote' },
          ]}
        />
        <section id="work" className="scroll-mt-28 bg-background py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <ul className="grid gap-10 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.title}>
                  <Link href="/gallery" className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <p className="eyebrow mt-4 text-[11px] text-muted-foreground">{project.type}</p>
                    <h2 className="mt-1 font-sans text-xl font-semibold tracking-tight">
                      {project.title}
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
