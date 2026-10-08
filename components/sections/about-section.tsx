'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Braces, Database, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <SectionLabel>01 / About me</SectionLabel>
          <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">
            Turning ideas into scalable products.
          </h2>
          <div className="relative mx-auto mt-10 w-full max-w-[340px] sm:mt-12">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full border border-dashed border-foreground/20"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={prefersReducedMotion ? undefined : { duration: 36, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full border border-transparent border-t-foreground/60 border-r-foreground/20"
              animate={prefersReducedMotion ? undefined : { rotate: -360 }}
              transition={prefersReducedMotion ? undefined : { duration: 22, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="relative aspect-square overflow-hidden rounded-full border-[6px] border-background bg-muted shadow-xl shadow-black/10 ring-1 ring-border"
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/profile-photo.jpeg"
                alt="Syed Muhemin Ali"
                className="size-full object-cover object-[center_28%]"
              />
            </motion.div>
            <div
              className="absolute -left-4 top-10 grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md"
              title="TypeScript"
            >
              <Braces aria-label="TypeScript" className="size-5" />
            </div>
            <div
              className="absolute -right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md"
              title="React Native"
            >
              <Smartphone aria-label="React Native" className="size-5" />
            </div>
            <div
              className="absolute bottom-14 -left-4 grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md"
              title="APIs and backend"
            >
              <Database aria-label="APIs and backend" className="size-5" />
            </div>
            <div className="absolute bottom-2 right-0 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur">
              <span className="size-2 rounded-full bg-emerald-500" /> React Native &amp; Frontend
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-xl leading-8 text-muted-foreground">
              I&apos;m a React Native and frontend developer who cares about the details. I build responsive, scalable, and user-friendly mobile and web applications that turn ambitious ideas into products people love to use.
            </p>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-muted-foreground">
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Specialized in end-to-end React Native development with TypeScript, Expo, Redux Toolkit, RTK Query, MMKV, Firebase, and full App Store &amp; Google Play release management.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Professional React.js and Next.js experience across web products, including REST API integration, responsive UI, performance optimization, and clean component architecture.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Hands-on with advanced mobile integrations: push notifications, in-app purchases, Stripe payments, deep linking, WebSockets, video streaming, social login, and geolocation.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Supporting backend experience with Node.js and Express.js endpoint development, MongoDB operations, and debugging API request and response flows.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Experience coordinating cross-functional teams of junior mobile and backend developers, QA, and UI/UX professionals on production projects.
              </li>
            </ul>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
              I&apos;m working full-time while continuously strengthening my technical skills and foundation. My goal is to build reliable, maintainable, and user-focused products, with an emphasis on real performance, honest engineering, and solutions that work effectively in production and provide long-term value.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              ['2+', 'Years experience'],
              ['10+', 'Projects shipped'],
              ['∞', 'Curiosity'],
            ].map(([value, label], i) => (
              <Reveal key={label} delay={0.15 + i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-3xl font-semibold">{value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
