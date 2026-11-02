import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/site/button-link'
import { FooterNewsletter } from '@/components/site/footer-newsletter'
import { site } from '@/lib/site'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.2V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-current">
        <path d="M18.2 2H21l-6.5 7.4L22 22h-6.2l-4.8-6.3L5.6 22H2.8l7-8L2 2h6.3l4.4 5.8L18.2 2zm-1.1 18h1.7L7 3.9H5.2L17.1 20z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M22 12.1C22 6.5 17.5 2 11.9 2S1.8 6.5 1.8 12.1c0 5 3.7 9.2 8.4 10v-7H7.7v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 3h-2.4v7c4.7-.8 8.4-5 8.4-10z" />
      </svg>
    ),
  },
]

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request a quote', href: '/request-a-quote' },
    ],
  },
  {
    heading: 'Industrial',
    links: [
      { label: 'Industrial insulation', href: '/industrial' },
      { label: 'Pipe installation', href: '/industrial/pipe-installation' },
      { label: 'Vessels and tanks', href: '/industrial#vessels' },
      { label: 'Metal jacketing', href: '/industrial#jacketing' },
      { label: 'Refrigeration lines', href: '/industrial#refrigeration' },
    ],
  },
  {
    heading: 'Commercial',
    links: [
      { label: 'Commercial insulation', href: '/commercial' },
      { label: 'Ductwork', href: '/commercial#ductwork' },
      { label: 'Hydronic piping', href: '/commercial#piping' },
      { label: 'Mechanical rooms', href: '/commercial#mechanical-rooms' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'Projects', href: '/projects' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Company videos', href: '/#videos' },
    ],
  },
]

const linkClass = 'text-[15px] text-white/75 transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="bg-[#282c2f] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Thermal Tech Inc. home" className="shrink-0">
            <Image
              src="/logo-white.png"
              alt="Thermal Tech Inc. Pipe and Vessel Insulators"
              width={1024}
              height={341}
              className="h-[3.3rem] w-auto sm:h-[3.85rem]"
            />
          </Link>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href="/request-a-quote"
              arrow={false}
              className="h-11 bg-[#1a4ed8] px-5 hover:bg-[#1643b8]"
            >
              Request a quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" arrow={false} className="h-11 px-5">
              Contact us
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/15 py-12 sm:grid-cols-4">
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                {column.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {column.heading === 'Company' && (
                <div className="mt-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Follow us
                  </h2>
                  <ul className="mt-4 flex gap-2">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="flex size-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
                        >
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Newsletter
                  </h2>
                  <p className="mt-3 max-w-[16rem] text-[15px] leading-relaxed text-white/75">
                    Project notes, service updates, and company news.
                  </p>
                  <FooterNewsletter />
                </div>
              )}
              {column.heading === 'Resources' && (
                <div className="mt-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Contact
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    <li>
                      <a href={site.phoneHref} className={linkClass}>
                        {site.phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${site.email}`} className={linkClass}>
                        {site.email}
                      </a>
                    </li>
                    <li className="text-[15px] leading-relaxed text-white/75">
                      {site.location}. Serving Kennewick, Pasco, and Richland.
                    </li>
                  </ul>
                </div>
              )}
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name} All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="transition-colors hover:text-white">
                Accessibility
              </Link>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-white">
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
