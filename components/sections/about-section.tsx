'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Braces, Database, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <SectionLabel>01 / About me</SectionLabel>
          <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl sm:tracking-[-.045em]">
            Turning ideas into scalable products.
          </h2>
          <div className="relative mx-auto mt-8 w-full max-w-[270px] sm:mt-12 sm:max-w-[320px] md:max-w-[340px]">
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
              className="absolute -left-2 top-8 grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md sm:-left-4 sm:top-10 sm:size-11"
              title="TypeScript & Node.js"
            >
              <Braces aria-label="TypeScript" className="size-4 sm:size-5" />
            </div>
            <div
              className="absolute -right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md sm:-right-4 sm:size-11"
              title="React Native & React"
            >
              <Smartphone aria-label="React Native" className="size-4 sm:size-5" />
            </div>
            <div
              className="absolute -left-2 bottom-10 grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md sm:-left-4 sm:bottom-14 sm:size-11"
              title="MongoDB & Backend APIs"
            >
              <Database aria-label="MongoDB and backend" className="size-4 sm:size-5" />
            </div>
            <div className="absolute bottom-1 right-0 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur sm:bottom-2 sm:-right-2 sm:px-3 sm:py-2 sm:text-xs">
              <span className="size-2 rounded-full bg-emerald-500" /> MERN Stack &amp; Mobile
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I&apos;m a MERN Stack and React Native developer who cares about the details. I build responsive, scalable, and user-friendly full-stack web and mobile applications that turn ambitious ideas into products people love to use.
            </p>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-muted-foreground">
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Full-stack MERN engineering with MongoDB, Express.js, React.js, and Node.js alongside Next.js, building clean RESTful APIs, database models, and secure authentication flows.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Specialized in cross-platform React Native development with TypeScript, Expo, Redux Toolkit, RTK Query, MMKV, Firebase, and full App Store &amp; Google Play release management.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Advanced integrations: Stripe payments, real-time WebSockets, push notifications, in-app purchases, deep linking, video streaming, and geolocation services.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Engineering excellence: high-performance UI rendering, TanStack Table v8, automated email triggers, modular components, and mobile-first responsive architecture.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">
                Collaborative execution: experience coordinating cross-functional teams of mobile and backend developers, QA, and UI/UX designers to ship reliable products on time.
              </li>
            </ul>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              I&apos;m working full-time while continuously strengthening my technical skills and foundation. My goal is to build reliable, maintainable, and user-focused products, with an emphasis on real performance, honest engineering, and solutions that work effectively in production and provide long-term value.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-2.5 sm:mt-12 sm:gap-4">
            {[
              ['2+', 'Years experience'],
              ['10+', 'Projects shipped'],
              ['∞', 'Curiosity'],
            ].map(([value, label], i) => (
              <Reveal key={label} delay={0.15 + i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-3.5 text-center sm:p-5 sm:text-left">
                  <div className="text-2xl font-semibold sm:text-3xl">{value}</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
