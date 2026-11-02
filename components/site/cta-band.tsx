import { ButtonLink } from '@/components/site/button-link'
import { Reveal } from '@/components/site/reveal'
import { site } from '@/lib/site'

export function CtaBand() {
  return (
    <section className="border-t-4 border-primary bg-surface text-foreground">
      <Reveal className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">Have a project coming up?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Send us the scope and drawings. We will review them and get back to
            you with a clear quote.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Request a quote</ButtonLink>
          <ButtonLink href={site.phoneHref} variant="outlineDark">
            Call {site.phone}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
