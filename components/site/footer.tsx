import Link from 'next/link'
import { site } from '@/lib/site'

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Industrial insulation', href: '/industrial' },
      { label: 'Commercial insulation', href: '/commercial' },
      { label: 'Metal jacketing', href: '/industrial#jacketing' },
      { label: 'Request a quote', href: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Company videos', href: '/#videos' },
    ],
  },
]

const linkClass =
  'inline-block text-[15px] text-ink-foreground/80 transition-all duration-200 hover:translate-x-1 hover:text-ink-foreground'

export function Footer() {
  return (
    <footer>
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 border-b border-white/15 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              aria-label="Thermal Tech Inc. home"
              className="flex w-fit items-center gap-4"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 rotate-45 items-center justify-center bg-primary"
              >
                <span className="-rotate-45 font-display text-lg font-bold tracking-tight text-primary-foreground">
                  TTI
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-3xl font-bold uppercase tracking-tight">
                  Thermal Tech Inc.
                </span>
                <span className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  Pipe &amp; Vessel Insulators
                </span>
              </span>
            </Link>
            <p className="display max-w-sm text-2xl sm:text-right">
              Insulation that keeps industry running.
            </p>
          </div>

          <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.3fr)] lg:gap-10">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="eyebrow border-b border-white/15 pb-3 text-[11px] text-ink-muted">
                  {column.heading}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="eyebrow border-b border-white/15 pb-3 text-[11px] text-ink-muted">
                Contact
              </h2>
              <dl className="mt-5 flex flex-col gap-5 text-[15px]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="font-display text-2xl font-semibold tracking-tight transition-colors hover:text-ink-foreground/80"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-ink-foreground/85 transition-colors hover:text-ink-foreground"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">Service area</dt>
                  <dd className="mt-1 leading-relaxed text-ink-foreground/85">
                    {site.location}. Serving Kennewick, Pasco, Richland, and the surrounding region.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {site.name} All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-ink-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-ink-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-ink-foreground">
                  Back to top
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
