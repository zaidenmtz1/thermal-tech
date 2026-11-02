'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ButtonLink } from '@/components/site/button-link'
import { Reveal } from '@/components/site/reveal'

const items = [
  {
    title: 'Process piping',
    body: 'Hot and cold lines insulated and jacketed, including elbows, tees, and supports.',
    href: '/industrial',
    image: '/images/stainless-vessels.webp',
    alt: 'Stainless clad piping runs beside refrigeration vessels',
  },
  {
    title: 'Vessels and tanks',
    body: 'Shells, heads, and nozzles wrapped and clad with clean, sealed seams.',
    href: '/industrial',
    image: '/images/tank-top.webp',
    alt: 'Top of an insulated tank with radial jacketing seams and an ammonia line',
  },
  {
    title: 'Heat exchangers',
    body: 'Removable and fixed insulation sized for service access and thermal performance.',
    href: '/industrial',
    image: '/images/white-vessel.webp',
    alt: 'White jacketed heat exchanger in a mechanical room',
  },
  {
    title: 'Ammonia and refrigeration',
    body: 'Low temperature systems built with vapor barriers to keep moisture out.',
    href: '/industrial',
    image: '/images/vessel-closeup.webp',
    alt: 'Insulated vessel and piping on a refrigeration skid',
  },
  {
    title: 'Ductwork',
    body: 'Supply, return, and exhaust duct insulated on new commercial construction.',
    href: '/commercial',
    image: '/images/night-building.webp',
    alt: 'Large ductwork running through a steel building frame at night',
  },
  {
    title: 'Valves and fittings',
    body: 'Fitted covers and field fabricated pieces for the details that are easy to miss.',
    href: '/industrial',
    image: '/images/skid-install.webp',
    alt: 'Valves and fittings on an insulated equipment skid',
  },
  {
    title: 'Metal jacketing',
    body: 'Aluminum and stainless cladding fabricated and fitted for protection and finish.',
    href: '/industrial',
    image: '/images/stainless-vessels.webp',
    alt: 'Stainless jacketing on horizontal vessels',
  },
]

export function Scope() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {items.map((item, index) => (
          <Image
            key={item.title}
            src={item.image}
            alt=""
            fill
            sizes="100vw"
            className={cn(
              'object-cover transition-opacity duration-700',
              active === index ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-5 lg:self-center">
          <p className="eyebrow text-ink-muted">What we insulate</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
            Every line. Every vessel.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            Hover or tap a system to see the work. Each scope is detailed for
            temperature, environment, and how your crew needs to reach it later.
          </p>
          <ButtonLink href="/request-a-quote" className="mt-8 w-full sm:w-auto">
            Request a quote
          </ButtonLink>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <ul className="border-t border-white/15">
            {items.map((item, index) => {
              const isActive = active === index
              return (
                <li key={item.title} className="border-b border-white/15">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={cn(
                      'group relative block py-4 pl-5 pr-2 transition-colors duration-300 sm:py-5',
                      isActive ? 'bg-white/5' : 'hover:bg-white/[0.03]',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute inset-y-0 left-0 w-0.5 origin-top bg-primary transition-transform duration-300',
                        isActive ? 'scale-y-100' : 'scale-y-0',
                      )}
                    />
                    <span className="flex items-center justify-between gap-4">
                      <span
                        className={cn(
                          'font-display text-3xl font-bold uppercase tracking-tight transition-colors duration-300 sm:text-4xl',
                          isActive ? 'text-ink-foreground' : 'text-ink-muted/70',
                        )}
                      >
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          'eyebrow hidden text-[11px] text-ink-foreground transition-opacity duration-300 sm:block',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      >
                        View
                      </span>
                    </span>
                    <span
                      className={cn(
                        'grid transition-all duration-300',
                        isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="block max-w-lg pt-2 text-[15px] leading-relaxed text-ink-muted">
                          {item.body}
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
