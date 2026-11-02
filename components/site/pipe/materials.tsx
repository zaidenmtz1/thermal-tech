import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'

const insulation = [
  { name: 'Mineral wool', use: 'High temperature and fire rated lines' },
  { name: 'Cellular glass', use: 'Cold service and below grade runs' },
  { name: 'Calcium silicate', use: 'Hot process piping' },
  { name: 'Fiberglass', use: 'General hot and chilled water lines' },
  { name: 'Elastomeric foam', use: 'Refrigerant and condensate lines' },
]

const jacketing = [
  { name: 'Aluminum', use: 'Lightweight weather protection' },
  { name: 'Stainless steel', use: 'Washdown and corrosive areas' },
  { name: 'PVC', use: 'Indoor and sanitary finish' },
]

type Row = { name: string; use: string }

function SpecList({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <h3 className="eyebrow text-primary">{title}</h3>
      <dl className="mt-4 border-t border-border">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="font-display text-2xl font-semibold uppercase tracking-tight">{row.name}</dt>
            <dd className="text-[15px] text-muted-foreground sm:text-right">{row.use}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Materials() {
  return (
    <section id="materials" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:sticky lg:top-36">
            <Image
              src="/images/tank-top.webp"
              alt="Top of an insulated tank with radial jacketing seams and an ammonia line"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <p className="eyebrow text-primary">Materials</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            The right material for the service.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We install to your specification. Where the spec is open, we help
            select insulation and jacketing for the temperature, environment,
            and access the line needs.
          </p>
          <div className="mt-10 flex flex-col gap-10">
            <SpecList title="Insulation" rows={insulation} />
            <SpecList title="Jacketing" rows={jacketing} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
