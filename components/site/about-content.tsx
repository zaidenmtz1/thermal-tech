import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/site/button-link'
import { Reveal } from '@/components/site/reveal'

const index = [
  { label: 'The company', href: '#company' },
  { label: 'The work', href: '#work' },
  { label: 'Why crews call back', href: '#why' },
  { label: 'The crew', href: '#crew' },
  { label: 'Service area', href: '#service-area' },
]

const systems = [
  {
    name: 'Ammonia piping',
    detail: 'Insulation and jacketing on ammonia refrigeration lines for process and cold-storage work.',
  },
  {
    name: 'Hot, cold, and recirc water',
    detail: 'Piping that has to hold its temperature, from domestic runs to process loops.',
  },
  {
    name: 'Steam piping',
    detail: 'Distribution lines and steam equipment, insulated and finished so the heat stays in the pipe.',
  },
  {
    name: 'Chilled water',
    detail: 'Piping that serves chillers and air handlers, jacketed against condensation and damage.',
  },
  {
    name: 'Chiller tanks',
    detail: 'Tanks insulated and clad so the vessel holds temperature in a mechanical room or on a pad.',
  },
  {
    name: 'Steam vessels',
    detail: 'Pressure vessels on steam service, including heads, shells, and the piping that ties them in.',
  },
  {
    name: 'Holding tanks',
    detail: 'Process and storage tanks that need a jacket built for weather, washdown, and years of service.',
  },
  {
    name: 'Ductwork',
    detail: 'Commercial and industrial duct, including overhead runs inside the building.',
  },
]

export function AboutContent() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-12 sm:px-8 lg:pb-20 lg:pt-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                About
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-10 text-primary">Established February 2005</p>
          <h1 className="display mt-4 max-w-5xl text-5xl sm:text-6xl lg:text-7xl">
            Pipe and vessel insulators in the Tri-Cities.
          </h1>
          <div className="mt-6 h-1 w-16 bg-primary" />

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl lg:col-span-7">
              Thermal Tech Inc. installs insulation and metal jacketing on pipe, vessels, tanks, and
              ductwork. The company works industrial plants and commercial buildings from Kennewick,
              Pasco, and Richland, and has been on that work since February 2005.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9 lg:pt-1">
              It is a small crew. Most of the schedule comes from plants, contractors, and owners
              who have already stood next to a finished system and called back.
            </p>
          </div>
        </div>
      </header>

      <figure className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-8 lg:pt-14">
        <div className="relative aspect-[16/7] overflow-hidden bg-surface">
          <Image
            src="/images/crew.webp"
            alt="The Thermal Tech crew standing in front of stainless clad vessels they insulated"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
          <span>The crew, in front of vessels they insulated and jacketed.</span>
          <span>Tri-Cities, Washington</span>
        </figcaption>
      </figure>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <nav aria-label="On this page" className="lg:col-span-3 lg:self-start lg:sticky lg:top-28">
          <p className="eyebrow text-muted-foreground">Contents</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
            {index.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-8 lg:col-start-5">
          <section id="company" className="scroll-mt-28">
            <Reveal>
              <h2 className="display text-4xl sm:text-5xl">A small company with one standard.</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Thermal Tech Inc. was established in February 2005. From the first job, the aim
                  has been the same: high-quality insulation and straightforward customer service.
                  The name on the work is the name that answers the phone.
                </p>
                <p>
                  Since the start, the company has bought from one main supplier. Staying with a
                  single source keeps the insulation, the jacketing, and the product support the
                  same from one site to the next. Crews are not switching materials every time they
                  roll onto a job.
                </p>
                <p>
                  The company stayed small on purpose. A short crew can answer for the finished
                  surface. The schedule is built around the plant, the shutdown, or the other trades
                  already on site. Referrals carry the work, because a jacket that is straight,
                  sealed, and still holding temperature years later is what brings the next call.
                </p>
                <p>
                  Thermal Tech also gives 2% of its profit to local children in need. That is part
                  of how the company treats the Tri-Cities: do the job well, and put something back
                  into the community the work came from. The hope is a long relationship with the
                  people who hire the crew, and with the towns they work in.
                </p>
              </div>
            </Reveal>
          </section>

          <figure className="my-14 lg:my-16">
            <div className="relative aspect-[16/9] overflow-hidden bg-surface">
              <Image
                src="/images/stainless-vessels.webp"
                alt="Two stainless clad vessels with insulated piping beside an industrial building"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Stainless clad tanks. Insulation and metal jacketing on the vessels and the pipe that
              ties them in.
            </figcaption>
          </figure>

          <section id="work" className="scroll-mt-28">
            <Reveal>
              <h2 className="display text-4xl sm:text-5xl">What the crew installs.</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The trade is mechanical insulation. Thermal Tech insulates and jackets pipes and
                vessels, including pressure tanks, on industrial and commercial sites. Metal
                jacketing is the usual finish. It sheds weather and washdown and leaves a system a
                plant can maintain.
              </p>
              <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
                {systems.map((system) => (
                  <li key={system.name} className="border-t border-border py-4">
                    <h3 className="font-display text-xl font-semibold uppercase tracking-tight">
                      {system.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{system.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Pipe work, including fittings, valves, and refrigeration lines, is covered on the{' '}
                <Link href="/industrial/pipe-installation" className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                  pipe installation
                </Link>{' '}
                page. If you already have drawings, send them with a{' '}
                <Link href="/request-a-quote" className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                  quote request
                </Link>
                .
              </p>
            </Reveal>
          </section>

          <section id="why" className="scroll-mt-28 mt-16 border-t border-border pt-14 lg:mt-20 lg:pt-16">
            <Reveal>
              <h2 className="display text-4xl sm:text-5xl">Why plants and contractors call back.</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The reasons are plain. They are also the whole standard the company has used since
                2005.
              </p>
              <div className="mt-8 divide-y divide-border border-y border-border">
                <article className="py-6">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                    Product knowledge
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    The crew works hot, cold, steam, and ammonia systems. Knowing which insulation
                    and which jacket belongs on each one is the job. A steam line, a chilled-water
                    run, and an ammonia header are not the same detail, and they are not finished
                    the same way.
                  </p>
                </article>
                <article className="py-6">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                    Direct service
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    A small company means the person who planned the work stays close to the person
                    installing it. Questions about scope, access, or a change in the field get a
                    direct answer, from the crew that is on the job.
                  </p>
                </article>
                <article className="py-6">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                    Right the first time
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    Insulation and metal jacketing are finished on the first pass. Seams,
                    terminations, and the fit around valves, heads, and equipment are part of the
                    installation, not a punch-list item left for later.
                  </p>
                </article>
                <article className="py-6">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                    Built to last
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    The point of the work is energy efficiency that still holds years later. A
                    jacket that stays on, stays sealed, and keeps the system at temperature is the
                    finished product Thermal Tech stands behind.
                  </p>
                </article>
              </div>
            </Reveal>
          </section>
        </div>
      </div>

      <section id="crew" className="scroll-mt-28 border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-primary">The crew</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Accountable for the finished surface.</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Thermal Tech stays small so the people who install the insulation can answer for
                it. On a live plant, a new build, or a retrofit, the work is planned around
                shutdowns and the other trades already in the building.
              </p>
              <p>
                To see the crew and hear how they talk about the work, the{' '}
                <Link href="/#videos" className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                  company videos
                </Link>{' '}
                are on the homepage. To talk about a job, use{' '}
                <Link href="/contact" className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                  contact
                </Link>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="mt-12">
              <div className="relative aspect-[16/7] overflow-hidden bg-background">
                <Image
                  src="/images/skid-install.webp"
                  alt="Insulated heat exchanger and piping on a skid inside a service bay"
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Insulation and jacketing on a heat-exchanger skid, finished inside the bay before
                it ships.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section id="service-area" className="scroll-mt-28 border-t border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-primary">Service area</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Kennewick.
              <br />
              Pasco.
              <br />
              Richland.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Those three cities are the home range, along with the rest of the Tri-Cities and the
              surrounding region. The work is industrial sites, commercial buildings, mechanical
              rooms, and tank pads in that area.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              If a project sits outside that range, call and ask. Some jobs are worth the drive. A
              scope and a set of drawings is the fastest way to find out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a quote</ButtonLink>
              <ButtonLink href="/contact" variant="outlineDark">
                Contact the crew
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
