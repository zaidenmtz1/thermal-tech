'use client'

import { useState } from 'react'
import Image from 'next/image'

type YouTubeFacadeProps = {
  id: string
  title: string
}

export function YouTubeFacade({ id, title }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 block size-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-ink/30 transition-colors duration-300 group-hover:bg-ink/10" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-hover sm:size-20">
            <svg viewBox="0 0 24 24" className="ml-1 size-6 fill-primary-foreground sm:size-7" aria-hidden="true">
              <path d="M6 4.5v15l13-7.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
