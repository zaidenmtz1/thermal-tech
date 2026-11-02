import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ContactForm } from '@/components/site/contact-form'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Call or email Thermal Tech Inc. for pipe, vessel, and mechanical insulation in the Tri-Cities, Washington.',
  openGraph: {
    title: 'Contact | Thermal Tech Inc.',
    description:
      'Reach Thermal Tech Inc. by phone or email. Based in the Tri-Cities, serving Kennewick, Pasco, and Richland.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border bg-ink text-ink-foreground">
          <Image
            src="/images/crew.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 -z-10 bg-ink/70" />
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-ink-foreground">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                  <span aria-current="page" className="text-ink-foreground">
                    Contact
                  </span>
                </li>
              </ol>
            </nav>

            <div className="mt-8 h-1 w-16 bg-primary" />
            <h1 className="display mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Contact</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
              Call, email, or send a short note. We work across the Tri-Cities and will get back to you.
            </p>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(17rem,0.7fr)] lg:items-start lg:gap-10 lg:py-16">
            <ContactForm />

            <aside className="bg-[#282c2f] px-6 py-8 text-ink-foreground sm:px-8 lg:sticky lg:top-[calc(var(--header-height)+1.25rem)]">
              <p className="eyebrow text-ink-muted">Reach us</p>
              <dl className="mt-6 flex flex-col gap-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="font-display text-3xl font-semibold tracking-tight transition-colors hover:text-ink-foreground/80"
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
                      className="break-all text-[15px] text-ink-foreground/85 transition-colors hover:text-ink-foreground"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">Service area</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-ink-foreground/85">
                    {site.location}. Kennewick, Pasco, Richland, and the surrounding region.
                  </dd>
                </div>
              </dl>

              <div className="mt-10 border-t border-white/15 pt-8">
                <h2 className="eyebrow text-[11px] text-ink-muted">Need a price?</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-foreground/85">
                  Send the scope, footage, and drawings on the quote page.
                </p>
                <Link
                  href="/request-a-quote"
                  className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Request a quote
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
