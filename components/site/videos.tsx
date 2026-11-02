import { Reveal } from '@/components/site/reveal'
import { YouTubeFacade } from '@/components/site/youtube-facade'

const videos = [
  { id: 'z7lvLI7C_Ew', title: 'Richard Wall', label: 'Thermal Tech video' },
  { id: 'Pg1QEQDeV80', title: 'Rick Plath', label: 'Thermal Tech video' },
]

export function Videos() {
  return (
    <section id="videos" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Watch</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Hear it from our team.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A closer look at how we work, in the words of the people doing it.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {videos.map((video, index) => (
            <li key={video.id}>
              <Reveal delay={index * 100}>
                <YouTubeFacade id={video.id} title={video.title} />
                <p className="eyebrow mt-5 text-[11px] text-muted-foreground">
                  {video.label}
                </p>
                <h3 className="display mt-1 text-3xl">{video.title}</h3>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
