import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

const points = [
  'Insulation sized to line temperature, service, and spec',
  'Tight fits at elbows, tees, supports, and penetrations',
  'Sealed seams and clean metal jacketing on every run',
  'A crew that coordinates with your schedule and other trades',
]

export function Overview() {
  return (
    <section id="overview" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-primary">Overview</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Pipe insulation installed to spec.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thermal Tech Inc. installs insulation and jacketing on process piping
            for plants, processing facilities, and refrigeration systems across
            the Tri-Cities. We work from your drawings and specifications so the
            finished line holds temperature, resists moisture, and stands up to
            the environment it runs in.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <span className="text-base leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink">
            <Image
              src="/images/skid-install.webp"
              alt="Insulated piping, valves, and a heat exchanger on an equipment skid inside a service bay"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
