import { useEffect, useState } from 'react'

import { Code2, Languages } from 'lucide-react'

import { useI18n } from '@/i18n/useI18n'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { messages, toggleLocale } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/70 border-border border-b backdrop-blur-xl' : 'bg-transparent'
      }`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display flex items-center gap-2 text-lg font-bold">
          <span className="bg-primary text-primary-foreground shadow-glow grid size-8 place-items-center rounded-md">
            <Code2 className="size-4" />
          </span>
          <span>{messages.navbar.brand}</span>
        </a>
        <ul className="hidden items-center gap-1 text-sm md:flex">
          {messages.navbar.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-md px-3 py-2 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleLocale}
          aria-label={messages.navbar.switchAriaLabel}
          className="hover:text-primary hover:bg-secondary/60 text-muted-foreground flex cursor-pointer items-center gap-x-1 rounded-lg bg-gray-800 px-3 py-2 text-sm shadow-lg transition-colors">
          <Languages className="size-4" />
          {messages.navbar.switchLabel}
        </button>
      </nav>
    </header>
  )
}
