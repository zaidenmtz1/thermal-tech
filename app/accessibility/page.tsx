import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'How Thermal Tech Inc. supports access to this website, including the on-page accessibility menu, keyboard use, and how to request another format.',
}

const features = [
  {
    title: 'Profiles',
    text: 'Motor, low vision, color, dyslexia, cognitive, seizure, and ADHD profiles turn on a matching set of tools. Read aloud starts speaking the page.',
  },
  {
    title: 'Text and layout',
    text: 'Bigger text, text spacing, line height, alignment, a dyslexia-friendly font, and an oversized menu.',
  },
  {
    title: 'Vision',
    text: 'Smart contrast, high contrast, saturation, highlighted links, a large cursor, hidden images, and hover tooltips.',
  },
  {
    title: 'Motion and reading',
    text: 'Pause animations, a reading guide that follows the pointer, read aloud, and a list of the page headings.',
  },
  {
    title: 'Voice and dictionary',
    text: 'Voice navigation accepts phrases such as “go to contact”, “scroll down”, and “bigger text”. With the dictionary on, select a word to see a definition.',
  },
]

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                  <span aria-current="page" className="text-foreground">
                    Accessibility
                  </span>
                </li>
              </ol>
            </nav>
            <div className="mt-8 h-1 w-16 bg-primary" />
            <h1 className="display mt-6 max-w-3xl text-5xl sm:text-6xl">Accessibility</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Thermal Tech Inc. wants this site to be usable with a keyboard, a screen reader, and the
              tools in the accessibility menu. Settings stay on this browser until you reset them.
            </p>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)] lg:py-20">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight">Open the menu</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  Use the blue button at the bottom left of every page, or press Alt + A. Choose a
                  profile or a single tool. Reset all settings returns the site to its usual appearance.
                </p>
              </div>
              <ul className="grid gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature.title} className="border-t border-border pt-4">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{feature.text}</p>
                  </li>
                ))}
              </ul>
              <div>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight">Keyboard</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  Tab moves through links and controls. Enter or Space activates the focused control.
                  Escape closes the accessibility menu. Visible focus outlines stay on throughout the site.
                </p>
              </div>
            </div>
            <aside className="h-fit bg-[#282c2f] px-6 py-8 text-white sm:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Need another format</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                If a page is hard to use, call or email and we will help with the information another way.
              </p>
              <a href={site.phoneHref} className="mt-6 block text-2xl font-semibold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 block text-[15px] text-white/80 hover:text-white">
                {site.email}
              </a>
              <p className="mt-6 text-sm leading-relaxed text-white/60">
                Voice navigation and read aloud depend on your browser. Dictionary lookup needs a
                connection. The menu works on every page of this site.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
