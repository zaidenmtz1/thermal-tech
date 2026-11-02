import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/site/button-link'

const quickLinks = [
  { label: 'Industrial', title: 'Pipe and vessel work', href: '/industrial' },
  { label: 'Commercial', title: 'Ductwork and mechanical', href: '/commercial' },
  { label: 'Projects', title: 'See recent work', href: '/projects' },
  { label: 'Resources', title: 'Guides and answers', href: '/resources' },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-132px)]">
      <Image
        src="/images/vessel-closeup.webp"
        alt="Insulated vertical vessel with stainless jacketing and orange piping on a mechanical skid"
        fill
        priority
        sizes="100vw"
        className="animate-settle -z-20 object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-ink/70" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-end px-5 pb-12 pt-24 sm:px-8 lg:items-center lg:py-20">
        <div className="max-w-xl lg:max-w-[42rem]">
          <div
            className="animate-grow-x mb-6 h-1 w-16 bg-primary"
            style={{ '--delay': '100ms' } as React.CSSProperties}
          />
          <h1
            className="display animate-rise text-[2.9rem] sm:text-6xl lg:text-7xl xl:text-[5.75rem]"
            style={{ '--delay': '200ms' } as React.CSSProperties}
          >
            Precision insulation for pipe and vessels.
          </h1>
          <p
            className="animate-rise mt-6 max-w-lg text-base leading-relaxed text-ink-foreground/80 sm:text-lg"
            style={{ '--delay': '380ms' } as React.CSSProperties}
          >
            Thermal Tech Inc. insulates and jackets process piping, vessels, and
            mechanical systems for industrial and commercial projects across the
            Tri-Cities, Washington.
          </p>
          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ '--delay': '520ms' } as React.CSSProperties}
          >
            <ButtonLink href="/contact" className="h-14 px-8">
              Request a quote
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline" className="h-14 px-8">
              View projects
            </ButtonLink>
          </div>
        </div>
      </div>

      <nav aria-label="Quick links" className="relative border-t border-white/15 bg-ink/80 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item, index) => (
            <li
              key={item.href}
              className="animate-rise border-b border-white/15 last:border-b-0 even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-b-0 [&:nth-child(n+3)]:border-b-0"
              style={{ '--delay': `${700 + index * 80}ms` } as React.CSSProperties}
            >
              <Link
                href={item.href}
                className="group relative block h-full px-5 py-5 transition-colors duration-300 hover:bg-white/5 sm:px-8 lg:py-7"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <span className="eyebrow block text-[11px] text-ink-muted">{item.label}</span>
                <span className="mt-1 block font-display text-lg font-semibold uppercase tracking-tight sm:text-2xl">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
