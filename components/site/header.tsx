'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { navItems, site, type NavItem } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ButtonLink } from '@/components/site/button-link'

const stripPath = (href: string) => href.split('#')[0] || '/'

function isActive(item: NavItem, pathname: string) {
  const path = stripPath(item.href)
  return path === '/' ? pathname === '/' : pathname.startsWith(path)
}

export function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setActiveMenu(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setActiveMenu(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const openItem = navItems.find((item) => item.label === activeMenu && item.groups)

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={() => setActiveMenu(null)}
        onBlur={(event) => {
          if (!headerRef.current?.contains(event.relatedTarget as Node | null)) {
            setActiveMenu(null)
          }
        }}
        className={cn(
          'sticky top-0 z-50 bg-background transition-shadow duration-300',
          scrolled && 'shadow-[0_10px_30px_-18px_rgb(0_0_0/0.4)]',
        )}
      >
        <div className="border-b border-border">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-stretch justify-between gap-6 px-5 sm:px-8 lg:h-24 2xl:gap-8">
            <Link
              href="/"
              aria-label="Thermal Tech Inc. home"
              className="flex shrink-0 items-center"
            >
              <Image
                src="/logo.webp"
                alt="Thermal Tech Inc. Pipe and Vessel Insulators"
                width={365}
                height={100}
                priority
                className="h-11 w-auto sm:h-12 lg:h-14 xl:h-12 2xl:h-14"
              />
            </Link>

            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex h-full items-stretch gap-1 2xl:gap-2">
                {navItems.map((item) => {
                  const active = isActive(item, pathname)
                  const open = activeMenu === item.label
                  return (
                    <li key={item.label} className="relative flex">
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        aria-haspopup={item.groups ? 'true' : undefined}
                        aria-expanded={item.groups ? open : undefined}
                        onMouseEnter={() => setActiveMenu(item.groups ? item.label : null)}
                        onFocus={() => setActiveMenu(item.groups ? item.label : null)}
                        className={cn(
                          'flex items-center gap-1 whitespace-nowrap px-2.5 text-sm font-semibold uppercase tracking-[0.05em] transition-colors 2xl:gap-1.5 2xl:px-4 2xl:text-[15px] 2xl:tracking-[0.07em]',
                          active || open ? 'text-primary' : 'text-foreground hover:text-primary',
                        )}
                      >
                        {item.label}
                      </Link>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-0 bottom-0 h-1 origin-left bg-primary transition-transform duration-300',
                          active || open ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
              >
                <Phone aria-hidden="true" className="size-4 text-primary" />
                {site.phone}
              </a>
              <ButtonLink href="/contact" className="h-12 px-5 2xl:px-7">
                Request a quote
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="relative -mr-2 flex size-12 items-center justify-center self-center xl:hidden"
            >
              <span
                className={cn(
                  'absolute h-0.5 w-7 bg-foreground transition-transform duration-300',
                  menuOpen ? 'rotate-45' : '-translate-y-1.5',
                )}
              />
              <span
                className={cn(
                  'absolute h-0.5 w-7 bg-foreground transition-transform duration-300',
                  menuOpen ? '-rotate-45' : 'translate-y-1.5',
                )}
              />
            </button>
          </div>
        </div>

        {openItem?.groups && (
          <div
            key={openItem.label}
            className="animate-menu absolute inset-x-0 top-full hidden border-b border-border bg-background shadow-[0_24px_40px_-24px_rgb(0_0_0/0.35)] xl:block"
          >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-12 px-8 py-12">
              <div>
                <p className="display text-5xl">{openItem.label}</p>
                {openItem.description && (
                  <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
                    {openItem.description}
                  </p>
                )}
                <Link
                  href={openItem.href}
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.08em] text-primary underline-offset-4 hover:underline"
                >
                  View {openItem.label.toLowerCase()}
                </Link>
              </div>
              <div
                className={cn(
                  'grid gap-12',
                  openItem.groups.length > 1 ? 'grid-cols-2' : 'grid-cols-1',
                )}
              >
                {openItem.groups.map((group) => (
                  <div key={group.heading}>
                    <h2 className="eyebrow border-b border-border pb-3 text-[11px] text-muted-foreground">
                      {group.heading}
                    </h2>
                    <ul className="mt-4 flex flex-col">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block py-2 text-base text-foreground transition-all hover:translate-x-1 hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-ink text-ink-foreground transition-all duration-300 xl:hidden',
          menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 pb-10 pt-2 sm:px-8">
          <ul>
            {navItems.map((item, index) => {
              const isOpen = expanded === item.label
              return (
                <li
                  key={item.label}
                  className="border-b border-white/10 transition-all duration-500"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(8px)',
                    transitionDelay: menuOpen ? `${index * 40}ms` : '0ms',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 py-4 font-display text-3xl font-bold uppercase tracking-tight"
                    >
                      {item.label}
                    </Link>
                    {item.groups && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label}`}
                        className="relative flex size-12 items-center justify-center"
                      >
                        <span className="absolute h-0.5 w-5 bg-ink-foreground" />
                        <span
                          className={cn(
                            'absolute h-0.5 w-5 bg-ink-foreground transition-transform duration-300',
                            isOpen ? 'rotate-0' : 'rotate-90',
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.groups && (
                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-300',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <ul className="overflow-hidden">
                        {item.groups
                          .flatMap((group) => group.links)
                          .map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                tabIndex={isOpen ? 0 : -1}
                                className="block py-2.5 pl-4 text-base text-ink-muted transition-colors hover:text-ink-foreground"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        <li className="pb-3" />
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href="/contact" className="w-full">
              Request a quote
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="flex h-12 items-center justify-center rounded-md border border-white/30 text-[15px] font-semibold tracking-wide transition-colors hover:bg-white/10"
            >
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
