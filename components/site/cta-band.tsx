import { ButtonLink } from '@/components/site/button-link'
import { Reveal } from '@/components/site/reveal'
import { site } from '@/lib/site'

export function CtaBand() {
  return (
    <section className="border-t border-border bg-background text-foreground">
      <Reveal className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-14">
        <div className="max-w-xl">
          <h2 className="font-sans text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Have a project coming up?
          </h2>
          <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
            Send us the scope and drawings. We will review them and get back to
            you with a clear quote.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/request-a-quote">Request a quote</ButtonLink>
          <ButtonLink href={site.phoneHref} variant="outlineDark">
            Call {site.phone}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
