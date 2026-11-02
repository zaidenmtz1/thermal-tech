import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/site/button-link'
import { Reveal } from '@/components/site/reveal'

const projects = [
  {
    title: 'Stainless clad vessels',
    type: 'Industrial',
    image: '/images/stainless-vessels.webp',
    alt: 'Two horizontal stainless clad vessels with insulated piping',
  },
  {
    title: 'Vessel head jacketing',
    type: 'Refrigeration',
    image: '/images/tank-top.webp',
    alt: 'Top of an insulated tank with radial jacketing seams',
  },
  {
    title: 'Heat exchanger cladding',
    type: 'Industrial',
    image: '/images/white-vessel.webp',
    alt: 'White jacketed heat exchanger and piping in a mechanical room',
  },
  {
    title: 'Overhead ductwork',
    type: 'Commercial',
    image: '/images/night-building.webp',
    alt: 'Insulated ductwork inside a steel frame building at night',
  },
]

export function Projects() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Projects</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Work that speaks for itself.
            </h2>
          </div>
          <ButtonLink href="/projects" variant="outlineDark" className="w-full md:w-auto">
            All projects
          </ButtonLink>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {projects.map((project, index) => (
            <li key={project.title}>
              <Reveal delay={index * 90}>
                <Link
                  href="/projects"
                  className="group relative block aspect-[3/4] overflow-hidden bg-ink"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-ink/85 p-4 text-ink-foreground sm:p-5">
                    <p className="eyebrow text-[10px] text-ink-muted sm:text-[11px]">
                      {project.type}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold uppercase leading-tight tracking-tight sm:text-2xl">
                      {project.title}
                    </p>
                    <span className="mt-3 block h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-16" />
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
