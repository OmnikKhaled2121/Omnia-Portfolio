import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { personal } from '../data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-fg-heading no-underline">
          {personal.name.split(' ')[0]}<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-fg-muted transition-colors hover:text-accent no-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            className="rounded-lg border border-border bg-transparent p-2 text-fg-muted transition-colors hover:text-accent cursor-pointer"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="rounded-lg border border-border bg-transparent p-2 text-fg-muted md:hidden cursor-pointer"
            aria-label="Menu"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-fg-muted transition-colors hover:text-accent no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
