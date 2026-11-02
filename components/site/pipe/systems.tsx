import { Reveal } from '@/components/site/reveal'

const systems = [
  {
    title: 'Hot process piping',
    body: 'Steam, condensate, and hot process lines insulated for heat retention and personnel protection.',
  },
  {
    title: 'Chilled and cold lines',
    body: 'Cold service piping built with continuous vapor barriers so condensation stays out of the insulation.',
  },
  {
    title: 'Ammonia and refrigeration',
    body: 'Low temperature lines insulated and sealed to hold temperature and protect the system for the long term.',
  },
  {
    title: 'Valves, flanges, and fittings',
    body: 'Fitted and field fabricated pieces for the details that are easy to miss and hard to fix later.',
  },
  {
    title: 'Metal jacketing',
    body: 'Aluminum and stainless cladding fabricated and fitted for protection, durability, and a clean finish.',
  },
  {
    title: 'Outdoor and washdown',
    body: 'Weatherproof and washdown rated assemblies for lines exposed to rain, wind, and sanitation cycles.',
  },
]

export function Systems() {
  return (
    <section id="systems" className="scroll-mt-28 bg-surface py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Systems</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Every kind of line, covered.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hot or cold, indoors or out, we match the insulation system to the
            service so each line performs as designed.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-x-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {systems.map((system, index) => (
            <li key={system.title} className="border-t border-border py-6">
              <Reveal delay={(index % 3) * 80}>
                <h3 className="font-sans text-lg font-semibold tracking-tight">
                  {system.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {system.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
