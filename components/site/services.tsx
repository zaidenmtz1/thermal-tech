import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/site/reveal'

const services = [
  {
    title: 'Industrial',
    body: 'Piping, vessels, heat exchangers, and process equipment insulated and jacketed for plants and processing facilities.',
    cta: 'Industrial services',
    href: '/industrial',
    image: '/images/skid-install.webp',
    alt: 'Insulated heat exchanger and piping on a skid inside a service bay',
  },
  {
    title: 'Commercial',
    body: 'Ductwork, mechanical rooms, and building systems insulated to spec on new construction and retrofit work.',
    cta: 'Commercial services',
    href: '/commercial',
    image: '/images/night-building.webp',
    alt: 'Steel frame commercial building at night with insulated ductwork overhead',
  },
  {
    title: 'Cold systems',
    body: 'Ammonia and refrigeration lines and vessels insulated and clad to hold temperature and keep moisture out.',
    cta: 'Refrigeration work',
    href: '/industrial',
    image: '/images/stainless-vessels.webp',
    alt: 'Two stainless clad refrigeration vessels with insulated piping beside a building',
  },
]

export function Services() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Services</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Insulation for every system on site.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From process piping to building ductwork, we install insulation and
            metal jacketing that is built to last.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 100} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col border border-border bg-background transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgb(0_0_0/0.4)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="display text-3xl">{service.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                    <div className="mt-6 flex justify-end border-t border-border pt-5">
                      <span className="eyebrow text-primary transition-transform duration-300 group-hover:-translate-x-1">
                        {service.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
