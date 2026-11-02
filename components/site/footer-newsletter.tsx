'use client'

import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'

export function FooterNewsletter() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get('email') || '').trim()
    if (!email) return
    const subject = 'Newsletter signup'
    const body = `Please add ${email} to the Thermal Tech newsletter.`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={onSubmit} className="mt-3 flex max-w-[16rem]">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className="h-11 min-w-0 flex-1 rounded-l-md border border-white/10 bg-black/25 px-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#1a4ed8]"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-r-md bg-[#1a4ed8] text-white transition-colors hover:bg-[#1643b8]"
      >
        <ArrowRight aria-hidden="true" className="size-4" />
      </button>
    </form>
  )
}
