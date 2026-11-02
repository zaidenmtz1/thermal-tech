import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
  light: 'bg-background text-foreground hover:bg-surface',
  outline:
    'border border-white/40 text-ink-foreground hover:border-white hover:bg-white/10',
  outlineDark:
    'border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5',
}

type ButtonLinkProps = {
  href: string
  variant?: keyof typeof variants
  className?: string
  arrow?: boolean
  children: React.ReactNode
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  arrow = true,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-md px-7 text-[15px] font-semibold uppercase tracking-[0.08em] transition-all duration-200',
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </Link>
  )
}
