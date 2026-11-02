'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  AlignLeft,
  BookOpen,
  Brain,
  Contrast,
  Eye,
  EyeOff,
  Focus,
  ImageOff,
  Link2,
  List,
  Mic,
  MousePointer2,
  Palette,
  Pause,
  PersonStanding,
  RotateCcw,
  Space,
  Sparkles,
  Type,
  Volume2,
  X,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'tti-a11y'

type Contrast = 'off' | 'smart' | 'high'
type Align = 'start' | 'center' | 'right' | 'justify'
type Saturation = 'normal' | 'low' | 'high' | 'mono'

type Settings = {
  profile: string | null
  textScale: number
  spacing: 0 | 1 | 2
  leading: 0 | 1 | 2
  contrast: Contrast
  links: boolean
  motion: boolean
  hideImages: boolean
  dyslexia: boolean
  cursor: boolean
  tooltips: boolean
  align: Align
  saturation: Saturation
  guide: boolean
  dictionary: boolean
  oversized: boolean
}

const defaults: Settings = {
  profile: null,
  textScale: 1,
  spacing: 0,
  leading: 0,
  contrast: 'off',
  links: false,
  motion: false,
  hideImages: false,
  dyslexia: false,
  cursor: false,
  tooltips: false,
  align: 'start',
  saturation: 'normal',
  guide: false,
  dictionary: false,
  oversized: false,
}

const textSteps = [1, 1.125, 1.25, 1.5]

const profiles: { id: string; label: string; patch: Partial<Settings>; icon: ReactNode }[] = [
  { id: 'motor', label: 'Motor impaired', icon: <PersonStanding className="size-4" />, patch: { textScale: 1.25, cursor: true, motion: true, spacing: 1 } },
  { id: 'read', label: 'Blind', icon: <EyeOff className="size-4" />, patch: { links: true } },
  { id: 'color', label: 'Color blind', icon: <Palette className="size-4" />, patch: { links: true, contrast: 'smart', saturation: 'high' } },
  { id: 'dyslexia', label: 'Dyslexia', icon: <Type className="size-4" />, patch: { dyslexia: true, spacing: 1, leading: 1 } },
  { id: 'vision', label: 'Low vision', icon: <Eye className="size-4" />, patch: { textScale: 1.5, contrast: 'high', cursor: true, links: true } },
  { id: 'cognitive', label: 'Cognitive', icon: <Brain className="size-4" />, patch: { dyslexia: true, motion: true, links: true, leading: 1, guide: true } },
  { id: 'seizure', label: 'Seizure', icon: <Zap className="size-4" />, patch: { motion: true, saturation: 'low' } },
  { id: 'adhd', label: 'ADHD', icon: <Focus className="size-4" />, patch: { guide: true, motion: true, links: true } },
]

function applySettings(settings: Settings) {
  const root = document.documentElement
  root.style.fontSize = settings.textScale === 1 ? '' : `${settings.textScale * 100}%`
  const filters = [
    settings.contrast === 'smart' ? 'contrast(1.25)' : '',
    settings.saturation === 'low' ? 'saturate(0.35)' : '',
    settings.saturation === 'high' ? 'saturate(1.85)' : '',
    settings.saturation === 'mono' ? 'grayscale(1)' : '',
  ].filter(Boolean)
  root.style.filter = filters.join(' ')
  root.dataset.a11ySpacing = String(settings.spacing)
  root.dataset.a11yLeading = String(settings.leading)
  root.dataset.a11yContrast = settings.contrast
  root.dataset.a11yLinks = String(settings.links)
  root.dataset.a11yMotion = String(settings.motion)
  root.dataset.a11yHideImages = String(settings.hideImages)
  root.dataset.a11yDyslexia = String(settings.dyslexia)
  root.dataset.a11yCursor = String(settings.cursor)
  root.dataset.a11yAlign = settings.align
}

function loadSettings(): Settings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return { ...defaults, ...JSON.parse(saved) }
  } catch {
    /* ignore broken storage */
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { ...defaults, motion: true }
  }
  return defaults
}

type SpeechRec = {
  lang: string
  continuous: boolean
  interimResults: boolean
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
}

function createRecognizer(): SpeechRec | null {
  const Ctor = (
    window as unknown as { SpeechRecognition?: new () => SpeechRec; webkitSpeechRecognition?: new () => SpeechRec }
  ).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: new () => SpeechRec }).webkitSpeechRecognition
  if (!Ctor) return null
  const rec = new Ctor()
  rec.lang = 'en-US'
  rec.continuous = true
  rec.interimResults = false
  return rec
}

export function AccessibilityWidget() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(defaults)
  const [ready, setReady] = useState(false)
  const [status, setStatus] = useState('Adjust how this site looks and reads.')
  const [speaking, setSpeaking] = useState(false)
  const [listening, setListening] = useState(false)
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [showHeadings, setShowHeadings] = useState(false)
  const [definition, setDefinition] = useState<{ word: string; text: string } | null>(null)
  const [guideY, setGuideY] = useState(120)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const settingsRef = useRef(settings)
  const listeningRef = useRef(false)

  useEffect(() => {
    settingsRef.current = settings
  }, [settings])

  useEffect(() => {
    const next = loadSettings()
    setSettings(next)
    applySettings(next)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    applySettings(settings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings, ready])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 'a' && !event.metaKey && !event.ctrlKey) {
        event.preventDefault()
        setOpen((value) => !value)
      }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusable = panel?.querySelector<HTMLElement>('button, a, input')
    focusable?.focus()
  }, [open])

  useEffect(() => {
    if (!settings.tooltips) return
    const tip = document.createElement('div')
    tip.setAttribute('role', 'tooltip')
    tip.className =
      'pointer-events-none fixed z-[80] hidden max-w-xs rounded-md bg-[#282c2f] px-2.5 py-1.5 text-sm text-white shadow-lg'
    document.body.appendChild(tip)
    const show = (event: MouseEvent) => {
      const el = (event.target as HTMLElement | null)?.closest('a, button, summary, input, textarea')
      if (!el || el.closest('[data-a11y-widget]')) {
        tip.classList.add('hidden')
        return
      }
      const name = el.getAttribute('aria-label') || el.textContent?.replace(/\s+/g, ' ').trim() || ''
      if (!name) {
        tip.classList.add('hidden')
        return
      }
      tip.textContent = name.slice(0, 90)
      tip.classList.remove('hidden')
      tip.style.left = `${Math.min(event.clientX + 14, window.innerWidth - 220)}px`
      tip.style.top = `${event.clientY + 18}px`
    }
    const hide = () => tip.classList.add('hidden')
    document.addEventListener('mousemove', show)
    document.addEventListener('mouseleave', hide)
    return () => {
      document.removeEventListener('mousemove', show)
      document.removeEventListener('mouseleave', hide)
      tip.remove()
    }
  }, [settings.tooltips])

  useEffect(() => {
    if (!settings.dictionary) return
    const onUp = () => {
      const word = window.getSelection()?.toString().trim() ?? ''
      if (!/^[A-Za-z][A-Za-z'-]{1,30}$/.test(word)) return
      setStatus(`Looking up “${word}”`)
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .then((data: { meanings?: { definitions?: { definition: string }[] }[] }[]) => {
          const text = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition
          setDefinition({ word, text: text || 'No definition found.' })
          setStatus(text ? `Definition ready for ${word}.` : `No definition for ${word}.`)
        })
        .catch(() => {
          setDefinition({ word, text: 'No definition found.' })
          setStatus(`No definition for ${word}.`)
        })
    }
    document.addEventListener('mouseup', onUp)
    return () => document.removeEventListener('mouseup', onUp)
  }, [settings.dictionary])

  useEffect(() => {
    if (!settings.guide) return
    const move = (event: MouseEvent) => setGuideY(event.clientY)
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [settings.guide])

  function update(patch: Partial<Settings>, message: string) {
    setSettings((current) => ({ ...current, profile: null, ...patch }))
    setStatus(message)
  }

  function toggleProfile(id: string) {
    const profile = profiles.find((item) => item.id === id)
    if (!profile) return
    if (settings.profile === id) {
      const next = { ...defaults, oversized: settings.oversized }
      setSettings(next)
      window.speechSynthesis?.cancel()
      setSpeaking(false)
      setStatus('Profile turned off.')
      return
    }
    const next = { ...defaults, oversized: settings.oversized, ...profile.patch, profile: id }
    setSettings(next)
    setStatus(`${profile.label} profile is on.`)
    if (id === 'read') speak()
  }

  function speak() {
    const synth = window.speechSynthesis
    if (!synth) {
      setStatus('Read aloud is not available in this browser.')
      return
    }
    if (synth.speaking) {
      synth.cancel()
      setSpeaking(false)
      setStatus('Reading stopped.')
      return
    }
    const text = document.querySelector('main')?.textContent?.replace(/\s+/g, ' ').trim()
    if (!text) {
      setStatus('Nothing on this page to read.')
      return
    }
    const utterance = new SpeechSynthesisUtterance(text.slice(0, 3500))
    utterance.onend = () => setSpeaking(false)
    synth.cancel()
    synth.speak(utterance)
    setSpeaking(true)
    setStatus('Reading the page.')
  }

  function handleVoice(transcript: string) {
    const said = transcript.toLowerCase()
    const go = (href: string, label: string) => {
      setStatus(`Opening ${label}.`)
      router.push(href)
    }
    if (said.includes('home')) return go('/', 'home')
    if (said.includes('quote')) return go('/request-a-quote', 'quote')
    if (said.includes('contact')) return go('/contact', 'contact')
    if (said.includes('about')) return go('/about', 'about')
    if (said.includes('industrial')) return go('/industrial', 'industrial')
    if (said.includes('commercial')) return go('/commercial', 'commercial')
    if (said.includes('resource')) return go('/resources', 'resources')
    if (said.includes('faq') || said.includes('questions')) return go('/faq', 'FAQ')
    if (said.includes('accessibility')) return go('/accessibility', 'accessibility')
    if (said.includes('scroll down')) {
      window.scrollBy({ top: 500, behavior: settingsRef.current.motion ? 'auto' : 'smooth' })
      setStatus('Scrolled down.')
      return
    }
    if (said.includes('scroll up') || said.includes('back to top')) {
      window.scrollTo({ top: 0, behavior: settingsRef.current.motion ? 'auto' : 'smooth' })
      setStatus('Scrolled up.')
      return
    }
    if (said.includes('bigger')) {
      const scale = textSteps[Math.min(textSteps.indexOf(settingsRef.current.textScale) + 1, textSteps.length - 1)]
      update({ textScale: scale }, 'Text is bigger.')
      return
    }
    if (said.includes('smaller')) {
      update({ textScale: 1 }, 'Text size reset.')
      return
    }
    if (said.includes('reset')) {
      reset()
      return
    }
    if (said.includes('read')) {
      speak()
      return
    }
    if (said.includes('stop')) {
      window.speechSynthesis?.cancel()
      setSpeaking(false)
      stopListening()
      setStatus('Stopped.')
    }
  }

  function startListening() {
    const rec = createRecognizer()
    if (!rec) {
      setStatus('Voice navigation needs a browser that supports speech recognition.')
      return
    }
    rec.onresult = (event) => {
      const last = event.results[event.results.length - 1]
      handleVoice(last?.[0]?.transcript ?? '')
    }
    rec.onerror = () => {
      listeningRef.current = false
      setListening(false)
      setStatus('Microphone access was blocked or unavailable.')
    }
    rec.onend = () => {
      if (listeningRef.current) {
        try {
          rec.start()
        } catch {
          listeningRef.current = false
          setListening(false)
        }
      }
    }
    try {
      rec.start()
      listeningRef.current = true
      setListening(true)
      setStatus('Listening. Try “go to contact”, “scroll down”, or “bigger text”.')
      ;(window as unknown as { __ttiVoice?: SpeechRec }).__ttiVoice = rec
    } catch {
      setStatus('Voice navigation could not start.')
    }
  }

  function stopListening() {
    listeningRef.current = false
    const rec = (window as unknown as { __ttiVoice?: SpeechRec }).__ttiVoice
    rec?.stop()
    setListening(false)
  }

  function showStructure() {
    const items = Array.from(document.querySelectorAll('main h1, main h2, main h3')).map((node, index) => {
      const el = node as HTMLElement
      if (!el.id) el.id = `a11y-heading-${index}`
      return { id: el.id, text: el.textContent?.trim() || 'Heading', level: Number(el.tagName[1]) }
    })
    setHeadings(items)
    setShowHeadings(true)
    setStatus(items.length ? 'Page headings are listed.' : 'No headings found on this page.')
  }

  function reset() {
    window.speechSynthesis?.cancel()
    stopListening()
    setSpeaking(false)
    setShowHeadings(false)
    setDefinition(null)
    setSettings(defaults)
    setStatus('Accessibility settings reset.')
  }

  const wide = settings.oversized

  return (
    <div data-a11y-widget="">
      {settings.guide && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 z-[65] h-12 border-y-2 border-[#1a4ed8] bg-[#1a4ed8]/15"
          style={{ top: guideY - 24 }}
        />
      )}
      {definition && (
        <div
          role="status"
          className="fixed bottom-24 left-5 z-[75] w-[min(22rem,calc(100vw-2.5rem))] rounded-lg bg-[#282c2f] p-4 text-white shadow-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Dictionary</p>
          <p className="mt-1 font-semibold">{definition.word}</p>
          <p className="mt-1 text-sm leading-relaxed text-white/80">{definition.text}</p>
          <button type="button" className="mt-3 text-sm text-[#8eb0ff]" onClick={() => setDefinition(null)}>
            Close
          </button>
        </div>
      )}
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="accessibility-menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'fixed bottom-5 left-5 z-[70] flex size-14 items-center justify-center rounded-full bg-[#1a4ed8] text-white shadow-lg transition-colors hover:bg-[#1643b8]',
          open && 'pointer-events-none opacity-0',
        )}
      >
        <PersonStanding aria-hidden="true" className="size-7" />
        <span className="sr-only">{open ? 'Close accessibility menu' : 'Open accessibility menu'}</span>
      </button>
      {open && (
        <button
          type="button"
          aria-label="Close accessibility menu"
          className="fixed inset-0 z-[70] bg-black/45"
          onClick={() => {
            setOpen(false)
            buttonRef.current?.focus()
          }}
        />
      )}
      <div
        ref={panelRef}
        id="accessibility-menu"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        inert={!open}
        aria-label="Accessibility menu"
        className={cn(
          'fixed inset-y-0 left-0 z-[71] flex h-dvh flex-col bg-[#f4f5f7] text-[#1c1f23] shadow-[12px_0_40px_rgb(0_0_0/0.22)] transition-transform duration-300',
          wide ? 'w-[min(32rem,100vw)] text-base' : 'w-[min(24.5rem,100vw)] text-sm',
          open ? 'translate-x-0' : 'pointer-events-none -translate-x-full',
        )}
      >
          <div className="flex items-center justify-between bg-[#1a4ed8] px-5 py-4 text-white">
            <div>
              <p className="text-lg font-semibold">Accessibility menu</p>
              <p className="text-xs text-white/80">Alt + A</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                buttonRef.current?.focus()
              }}
              className="flex size-9 items-center justify-center rounded-md hover:bg-white/15"
            >
              <X aria-hidden="true" className="size-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <p className="sr-only" role="status">
              {status}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b727a]">Accessibility profiles</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  aria-pressed={settings.profile === profile.id}
                  onClick={() => toggleProfile(profile.id)}
                  className={cn(
                    'flex min-h-12 items-center gap-2 rounded-lg border bg-white px-3 py-2 text-left font-medium shadow-sm',
                    settings.profile === profile.id
                      ? 'border-[#1a4ed8] text-[#1a4ed8]'
                      : 'border-black/10 hover:border-[#1a4ed8]',
                  )}
                >
                  {profile.icon}
                  {profile.label}
                </button>
              ))}
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b727a]">Tools</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <Tool
                label="Contrast"
                pressed={settings.contrast !== 'off'}
                onClick={() => {
                  const order: Contrast[] = ['off', 'smart', 'high']
                  const next = order[(order.indexOf(settings.contrast) + 1) % order.length]
                  update({ contrast: next }, next === 'off' ? 'Contrast off.' : next === 'smart' ? 'Smart contrast on.' : 'High contrast on.')
                }}
                icon={<Contrast className="size-4" />}
              />
              <Tool
                label="Pause motion"
                pressed={settings.motion}
                onClick={() => update({ motion: !settings.motion }, settings.motion ? 'Motion on.' : 'Animations paused.')}
                icon={<Pause className="size-4" />}
              />
              <Tool
                label={speaking ? 'Stop reading' : 'Read aloud'}
                pressed={speaking}
                onClick={speak}
                icon={<Volume2 className="size-4" />}
              />
              <Tool
                label={listening ? 'Stop voice' : 'Voice'}
                pressed={listening}
                onClick={() => (listening ? stopListening() : startListening())}
                icon={<Mic className="size-4" />}
              />
              <Tool
                label="Highlight links"
                pressed={settings.links}
                onClick={() => update({ links: !settings.links }, settings.links ? 'Link highlight off.' : 'Links highlighted.')}
                icon={<Link2 className="size-4" />}
              />
              <Tool
                label="Bigger text"
                pressed={settings.textScale > 1}
                onClick={() => {
                  const index = textSteps.indexOf(settings.textScale)
                  const next = textSteps[(index + 1) % textSteps.length]
                  update({ textScale: next }, next === 1 ? 'Text size reset.' : 'Text is bigger.')
                }}
                icon={<Type className="size-4" />}
              />
              <Tool
                label="Text spacing"
                pressed={settings.spacing > 0}
                onClick={() => {
                  const next = ((settings.spacing + 1) % 3) as 0 | 1 | 2
                  update({ spacing: next }, next === 0 ? 'Spacing reset.' : 'Text spacing increased.')
                }}
                icon={<Space className="size-4" />}
              />
              <Tool
                label="Hide images"
                pressed={settings.hideImages}
                onClick={() => update({ hideImages: !settings.hideImages }, settings.hideImages ? 'Images shown.' : 'Images hidden.')}
                icon={<ImageOff className="size-4" />}
              />
              <Tool
                label="Dyslexia font"
                pressed={settings.dyslexia}
                onClick={() => update({ dyslexia: !settings.dyslexia }, settings.dyslexia ? 'Dyslexia font off.' : 'Readable font on.')}
                icon={<Sparkles className="size-4" />}
              />
              <Tool
                label="Big cursor"
                pressed={settings.cursor}
                onClick={() => update({ cursor: !settings.cursor }, settings.cursor ? 'Cursor reset.' : 'Large cursor on.')}
                icon={<MousePointer2 className="size-4" />}
              />
              <Tool
                label="Tooltips"
                pressed={settings.tooltips}
                onClick={() => update({ tooltips: !settings.tooltips }, settings.tooltips ? 'Tooltips off.' : 'Tooltips on.')}
                icon={<Eye className="size-4" />}
              />
              <Tool label="Page structure" pressed={showHeadings} onClick={showStructure} icon={<List className="size-4" />} />
              <Tool
                label="Line height"
                pressed={settings.leading > 0}
                onClick={() => {
                  const next = ((settings.leading + 1) % 3) as 0 | 1 | 2
                  update({ leading: next }, next === 0 ? 'Line height reset.' : 'Line height increased.')
                }}
                icon={<AlignLeft className="size-4" />}
              />
              <Tool
                label="Text align"
                pressed={settings.align !== 'start'}
                onClick={() => {
                  const order: Align[] = ['start', 'center', 'right', 'justify']
                  const next = order[(order.indexOf(settings.align) + 1) % order.length]
                  update({ align: next }, next === 'start' ? 'Alignment reset.' : `Text aligned ${next}.`)
                }}
                icon={<AlignLeft className="size-4" />}
              />
              <Tool
                label="Dictionary"
                pressed={settings.dictionary}
                onClick={() =>
                  update(
                    { dictionary: !settings.dictionary },
                    settings.dictionary ? 'Dictionary off.' : 'Select a word to look it up.',
                  )
                }
                icon={<BookOpen className="size-4" />}
              />
              <Tool
                label="Saturation"
                pressed={settings.saturation !== 'normal'}
                onClick={() => {
                  const order: Saturation[] = ['normal', 'low', 'high', 'mono']
                  const next = order[(order.indexOf(settings.saturation) + 1) % order.length]
                  update({ saturation: next }, next === 'normal' ? 'Saturation reset.' : `Saturation set to ${next}.`)
                }}
                icon={<Contrast className="size-4" />}
              />
            </div>
            {showHeadings && (
              <ul className="mt-3 flex flex-col gap-1">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="block rounded-md px-2 py-1.5 hover:bg-black/5"
                      style={{ paddingLeft: `${(heading.level - 1) * 12 + 8}px` }}
                      onClick={() => setOpen(false)}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-t border-black/10 bg-white px-4 py-4">
            <label className="flex items-center justify-between gap-3">
              <span className="font-medium">XL oversized menu</span>
              <input
                type="checkbox"
                checked={settings.oversized}
                onChange={(event) => update({ oversized: event.target.checked }, event.target.checked ? 'Menu enlarged.' : 'Menu size reset.')}
                className="size-5 accent-[#1a4ed8]"
              />
            </label>
            <button
              type="button"
              onClick={reset}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1a4ed8] px-3 py-3 font-semibold text-white hover:bg-[#1643b8]"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              Reset all settings
            </button>
            <Link href="/accessibility" className="mt-3 inline-block text-[#1a4ed8] underline-offset-2 hover:underline">
              Accessibility statement
            </Link>
          </div>
      </div>
    </div>
  )
}

function Tool({
  label,
  pressed,
  onClick,
  icon,
}: {
  label: string
  pressed: boolean
  onClick: () => void
  icon: ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        'flex min-h-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-lg border bg-white px-1 py-2 text-center text-[11px] font-medium leading-tight shadow-sm',
        pressed ? 'border-[#1a4ed8] text-[#1a4ed8]' : 'border-black/10 hover:border-[#1a4ed8]',
      )}
    >
      {icon}
      {label}
    </button>
  )
}
