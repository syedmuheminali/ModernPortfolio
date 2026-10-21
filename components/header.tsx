'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Blog']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const getHref = (item: string) => {
    if (item === 'Blog') return '/blog'
    return isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`
  }

  const isItemActive = (item: string) => {
    if (item === 'Blog' && pathname?.startsWith('/blog')) return true
    return false
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/80 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,.04)] backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          aria-label="Syed Muhemin Ali - Home"
          className="flex items-center gap-2 font-semibold tracking-tight transition hover:opacity-80"
        >
          <span className="grid size-8 place-items-center rounded-full bg-foreground text-sm text-background font-bold">
            M.
          </span>
          <span className="text-sm font-semibold sm:text-base">Syed Muhemin Ali</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {navItems.map(item => {
            const active = isItemActive(item)
            return (
              <Link
                key={item}
                href={getHref(item)}
                className={`transition-colors hover:text-foreground ${
                  active ? 'font-medium text-foreground' : ''
                }`}
              >
                {item}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href={isHome ? '#contact' : '/#contact'}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:scale-[1.03]"
          >
            Let&apos;s talk <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-foreground transition hover:bg-muted"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card p-4 shadow-lg md:hidden"
        >
          <div className="grid gap-1">
            {navItems.map(item => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={item}
                href={getHref(item)}
                className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-muted hover:text-foreground ${
                  isItemActive(item) ? 'bg-muted text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-border pt-3">
            <Link
              onClick={() => setMenuOpen(false)}
              href={isHome ? '#contact' : '/#contact'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
