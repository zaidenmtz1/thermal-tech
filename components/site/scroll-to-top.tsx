'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

export function ScrollToTop() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useLayoutEffect(() => {
    if (window.location.hash) return

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)

    const frame = requestAnimationFrame(() => window.scrollTo(0, 0))
    const timer = window.setTimeout(() => {
      window.scrollTo(0, 0)
      root.style.scrollBehavior = previous
    }, 50)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
      root.style.scrollBehavior = previous
    }
  }, [pathname])

  return null
}
