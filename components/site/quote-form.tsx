'use client'

import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Form } from 'react-aria-components'
import { Input } from '@/components/base/input/input'
import { TextArea } from '@/components/base/textarea/textarea'
import { site } from '@/lib/site'

const fieldProps = {
  size: 'md' as const,
  validationBehavior: 'aria' as const,
}

function Field({ error, children }: { error?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {children}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  )
}

function buildMailto(fields: {
  name: string
  company: string
  email: string
  phone: string
  siteName: string
  details: string
}) {
  const subject = `Quote request from ${fields.name}`
  const body = [
    `Name: ${fields.name}`,
    `Company: ${fields.company || '—'}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Location: ${fields.siteName || '—'}`,
    '',
    fields.details,
  ].join('\n')

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type FieldErrors = {
  name?: string
  email?: string
  phone?: string
  details?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function QuoteForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [mailto, setMailto] = useState<string | null>(null)

  function clearError(field: keyof FieldErrors) {
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const details = String(data.get('details') ?? '').trim()
    const nextErrors: FieldErrors = {}

    if (name.length < 2) nextErrors.name = 'Enter your name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Enter a valid email.'
    if (phone.replace(/\D/g, '').length < 7) nextErrors.phone = 'Enter a phone number we can reach.'
    if (details.length < 12) nextErrors.details = 'Tell us what needs quoting.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const href = buildMailto({
      name,
      company: String(data.get('company') ?? '').trim(),
      email,
      phone,
      siteName: String(data.get('site') ?? '').trim(),
      details,
    })
    setMailto(href)
    window.location.href = href
  }

  if (mailto) {
    return (
      <div className="border border-border bg-background px-6 py-10 sm:px-10 sm:py-14" role="status">
        <div className="mb-6 h-1 w-16 bg-primary" />
        <h2 className="display text-4xl sm:text-5xl">Your draft is ready.</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          It is addressed to {site.email} and includes the details you entered. Send that
          message and we will review the scope.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto}
            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-primary px-7 text-[15px] font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
          >
            Open email draft
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/30 px-7 text-[15px] font-semibold uppercase tracking-[0.08em] text-foreground transition-colors duration-200 hover:border-foreground hover:bg-foreground/5"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    )
  }

  return (
    <Form onSubmit={onSubmit} className="border border-border bg-background px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div>
        <p className="eyebrow text-primary">Contact</p>
        <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">How to reach you</h2>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field error={errors.name}>
          <Input
            {...fieldProps}
            name="name"
            label="Name"
            placeholder="Your name"
            autoComplete="name"
            isRequired
            isInvalid={Boolean(errors.name)}
            onChange={() => clearError('name')}
          />
        </Field>
        <Input
          {...fieldProps}
          name="company"
          label="Company"
          placeholder="Company name"
          autoComplete="organization"
        />
        <Field error={errors.email}>
          <Input
            {...fieldProps}
            name="email"
            type="email"
            label="Email"
            placeholder="you@company.com"
            autoComplete="email"
            isRequired
            isInvalid={Boolean(errors.email)}
            onChange={() => clearError('email')}
          />
        </Field>
        <Field error={errors.phone}>
          <Input
            {...fieldProps}
            name="phone"
            type="tel"
            label="Phone"
            placeholder="509-000-0000"
            autoComplete="tel"
            isRequired
            isInvalid={Boolean(errors.phone)}
            onChange={() => clearError('phone')}
          />
        </Field>
      </div>

      <div className="mt-10">
        <p className="eyebrow text-primary">The job</p>
        <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">What needs quoting</h2>
      </div>

      <div className="mt-6 grid gap-5">
        <Input
          {...fieldProps}
          name="site"
          label="Location"
          placeholder="City, plant, or facility"
        />
        <Field error={errors.details}>
          <TextArea
            {...fieldProps}
            name="details"
            label="The work"
            placeholder="Pipe, vessels, or duct, and when you need us."
            rows={4}
            isRequired
            isInvalid={Boolean(errors.details)}
            onChange={() => clearError('details')}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          This opens an email to {site.email}. Attach drawings there if you have them.
        </p>
        <button
          type="submit"
          className="group inline-flex h-12 shrink-0 items-center justify-center gap-2.5 rounded-md bg-primary px-7 text-[15px] font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
        >
          Request a quote
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </Form>
  )
}
