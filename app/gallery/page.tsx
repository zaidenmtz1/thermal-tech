import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { PageHero } from '@/components/site/page-hero'
import { gallery } from '@/lib/work'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos of pipe, vessel, and mechanical insulation installed by Thermal Tech Inc. in the Tri-Cities, Washington.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: 'Gallery' },
          ]}
          title="Gallery"
          description="Finished insulation and metal jacketing from industrial and commercial jobs."
          image="/images/vessel-closeup.webp"
          imageAlt="Insulated vertical vessel with stainless jacketing and orange piping"
          anchors={[
            { label: 'Photos', title: 'Job photos', href: '#photos' },
            { label: 'Projects', title: 'Recent work', href: '/projects' },
            { label: 'Industrial', title: 'Pipe and vessels', href: '/industrial' },
            { label: 'Quote', title: 'Start a project', href: '/request-a-quote' },
          ]}
        />
        <section id="photos" className="scroll-mt-28 bg-background py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((photo) => (
                <li key={photo.image}>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-muted-foreground">
                      {photo.title}
                    </figcaption>
                  </figure>
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
