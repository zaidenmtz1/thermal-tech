import Image from 'next/image'
import { ButtonLink } from '@/components/site/button-link'
import { Reveal } from '@/components/site/reveal'

const facts = [
  { term: 'Based in', detail: 'Tri-Cities, Washington' },
  { term: 'Work', detail: 'Industrial and commercial projects' },
  { term: 'Specialty', detail: 'Pipe, vessel, and equipment insulation' },
]

export function About() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src="/images/crew.webp"
              alt="The Thermal Tech crew standing in front of stainless clad vessels they insulated"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-primary">About</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Insulators who show up and finish the job.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Thermal Tech Inc. is a pipe and vessel insulation contractor working
              out of the Tri-Cities. Our crews install insulation and metal
              jacketing on live plants, new builds, and retrofits, and we plan the
              work around your schedule.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Clean lines, tight seams, and finished work that stands up to
              weather, washdown, and years of service.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {facts.map((fact) => (
                <div key={fact.term} className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]">
                  <dt className="eyebrow pt-0.5 text-[11px] text-muted-foreground">
                    {fact.term}
                  </dt>
                  <dd className="font-medium">{fact.detail}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/about" className="mt-8 w-full sm:w-auto">
              About Thermal Tech
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
