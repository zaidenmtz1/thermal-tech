import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ButtonLink } from '@/components/site/button-link'

type Crumb = { label: string; href?: string }
type Anchor = { label: string; title: string; href: string }

type PageHeroProps = {
  crumbs: Crumb[]
  title: string
  description: string
  image: string
  imageAlt: string
  anchors: Anchor[]
}

export function PageHero({ crumbs, title, description, image, imageAlt, anchors }: PageHeroProps) {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-ink text-ink-foreground">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-settle -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/75" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:pb-20 lg:pt-24">
        <nav aria-label="Breadcrumb" className="animate-rise">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
            {crumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight aria-hidden="true" className="size-3.5" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-ink-foreground">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink-foreground">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 max-w-3xl lg:mt-14">
          <div
            className="animate-grow-x mb-6 h-1 w-16 bg-primary"
            style={{ '--delay': '100ms' } as React.CSSProperties}
          />
          <h1
            className="display animate-rise text-5xl sm:text-6xl lg:text-7xl xl:text-[5.75rem]"
            style={{ '--delay': '200ms' } as React.CSSProperties}
          >
            {title}
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg"
            style={{ '--delay': '360ms' } as React.CSSProperties}
          >
            {description}
          </p>
          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ '--delay': '500ms' } as React.CSSProperties}
          >
            <ButtonLink href="/request-a-quote" className="h-14 px-8">
              Request a quote
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline" className="h-14 px-8">
              View projects
            </ButtonLink>
          </div>
        </div>
      </div>

      <nav aria-label="On this page" className="relative border-t border-white/15 bg-ink/80">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {anchors.map((item, index) => (
            <li
              key={item.href}
              className="animate-rise border-b border-white/15 even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 [&:nth-child(n+3)]:border-b-0"
              style={{ '--delay': `${650 + index * 80}ms` } as React.CSSProperties}
            >
              <a
                href={item.href}
                className="group relative block h-full px-5 py-5 transition-colors duration-300 hover:bg-white/5 sm:px-8 lg:py-6"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <span className="eyebrow block text-[11px] text-ink-muted">{item.label}</span>
                <span className="mt-1 block font-display text-lg font-semibold uppercase tracking-tight sm:text-2xl">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
