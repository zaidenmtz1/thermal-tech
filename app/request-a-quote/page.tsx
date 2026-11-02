import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { QuoteForm } from '@/components/site/quote-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request a pipe, vessel, or mechanical insulation quote from Thermal Tech Inc. Share the scope and we will review it. Based in the Tri-Cities, Washington.',
  openGraph: {
    title: 'Request a Quote | Thermal Tech Inc.',
    description:
      'Send the scope for industrial or commercial insulation and metal jacketing. Thermal Tech Inc. serves the Tri-Cities, Washington.',
  },
}

const quoteNotes = [
  'System and service, hot or cold',
  'Approximate footage or vessel count',
  'Drawings or a line list, if you have them',
  'Site location and schedule',
]

const quoteFaqs = [
  {
    question: 'What should I include?',
    answer:
      'The system, roughly how much pipe or how many vessels, the site, and when you need the work. A short note is enough to start.',
  },
  {
    question: 'Do you need drawings?',
    answer:
      'No. Send what you have. If you have drawings or a line list, attach them to the email that opens after you submit.',
  },
  {
    question: 'How soon will you reply?',
    answer: 'We review the request and get back by phone or email. If the job is urgent, call us.',
  },
  {
    question: 'Where do you work?',
    answer: 'The Tri-Cities and the surrounding region, including Kennewick, Pasco, and Richland.',
  },
  {
    question: 'Is the quote free?',
    answer: 'Yes. We review the scope and send a clear quote at no cost.',
  },
]

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border bg-ink text-ink-foreground">
          <Image
            src="/images/quote-pipes.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[center_40%]"
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
                    Request a quote
                  </span>
                </li>
              </ol>
            </nav>

            <div className="mt-8 h-1 w-16 bg-primary" />
            <h1 className="display mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Request a quote</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
              Send us the scope and drawings. We will review them and get back to you with a clear quote.
            </p>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(17rem,0.7fr)] lg:items-start lg:gap-10 lg:py-16">
            <QuoteForm />

            <aside className="bg-[#282c2f] px-6 py-8 text-ink-foreground sm:px-8 lg:sticky lg:top-[calc(var(--header-height)+1.25rem)] lg:max-h-[calc(100svh-var(--header-height)-2rem)] lg:overflow-y-auto">
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

              <h2 className="eyebrow mt-10 border-t border-white/15 pt-8 text-[11px] text-ink-muted">
                What helps a quote
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {quoteNotes.map((note) => (
                  <li key={note} className="flex gap-3 text-[15px] leading-snug text-ink-foreground/85">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-primary" />
                    {note}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/15">
                {quoteFaqs.map((item) => (
                  <details key={item.question} className="group border-b border-white/15">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-[15px] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span aria-hidden="true" className="relative size-3 shrink-0">
                        <span className="absolute inset-x-0 top-1/2 h-px bg-current" />
                        <span className="absolute inset-y-0 left-1/2 w-px origin-center bg-current transition-transform duration-200 group-open:scale-y-0" />
                      </span>
                    </summary>
                    <p className="pb-4 text-sm leading-relaxed text-ink-foreground/75">{item.answer}</p>
                  </details>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
