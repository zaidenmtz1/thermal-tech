import { CloudRain, Flame, Layers, Snowflake, Thermometer, Wrench } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

const systems = [
  {
    icon: Flame,
    title: 'Hot process piping',
    body: 'Steam, condensate, and hot process lines insulated for heat retention and personnel protection.',
  },
  {
    icon: Snowflake,
    title: 'Chilled and cold lines',
    body: 'Cold service piping built with continuous vapor barriers so condensation stays out of the insulation.',
  },
  {
    icon: Thermometer,
    title: 'Ammonia and refrigeration',
    body: 'Low temperature lines insulated and sealed to hold temperature and protect the system for the long term.',
  },
  {
    icon: Wrench,
    title: 'Valves, flanges, and fittings',
    body: 'Fitted and field fabricated pieces for the details that are easy to miss and hard to fix later.',
  },
  {
    icon: Layers,
    title: 'Metal jacketing',
    body: 'Aluminum and stainless cladding fabricated and fitted for protection, durability, and a clean finish.',
  },
  {
    icon: CloudRain,
    title: 'Outdoor and washdown',
    body: 'Weatherproof and washdown rated assemblies for lines exposed to rain, wind, and sanitation cycles.',
  },
]

export function Systems() {
  return (
    <section id="systems" className="scroll-mt-28 bg-surface py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Systems</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Every kind of line, covered.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hot or cold, indoors or out, we match the insulation system to the
            service so each line performs as designed.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {systems.map((system, index) => (
            <li key={system.title}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <div className="flex h-full flex-col border border-border bg-background p-6 sm:p-7">
                  <span className="flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <system.icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="display mt-6 text-3xl">{system.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {system.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
