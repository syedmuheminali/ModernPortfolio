'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { navItems } from '@/components/data/portfolio-data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/80 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,.04)] backdrop-blur-xl sm:px-5">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-foreground text-sm text-background">
            M.
          </span>
          <span className="hidden sm:block">Syed Muhemin Ali</span>
        </a>

        <div className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>

        <ThemeToggle />

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:scale-[1.03] md:flex"
        >
          Let&apos;s talk <ArrowUpRight data-icon="inline-end" />
        </a>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full p-2 md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card p-4 shadow-lg md:hidden"
        >
          {navItems.map(item => (
            <a
              onClick={() => setMenuOpen(false)}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-muted"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}
