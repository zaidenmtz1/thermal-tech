import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'

const steps = [
  {
    title: 'Review',
    body: 'We go through your scope, drawings, and specifications and confirm the service for each line.',
  },
  {
    title: 'Prepare',
    body: 'We verify field conditions, plan access, and stage materials before work starts.',
  },
  {
    title: 'Install',
    body: 'Insulation is applied in the specified thickness with staggered joints and sealed vapor barriers.',
  },
  {
    title: 'Jacket',
    body: 'Metal jacketing is cut, fitted, and secured with sealed seams to shed water and resist damage.',
  },
  {
    title: 'Inspect',
    body: 'We walk the work, correct any punch list items, and hand the system back clean.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative isolate scroll-mt-28 overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/images/vessel-closeup.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/90" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ink-muted">Our process</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            From drawings to finished line.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 90} className="h-full border-t border-white/20 pt-6">
                <span className="mb-5 block h-1 w-10 bg-primary" aria-hidden="true" />
                <p className="eyebrow text-[11px] text-ink-muted">Step {index + 1}</p>
                <h3 className="display mt-2 text-3xl">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
