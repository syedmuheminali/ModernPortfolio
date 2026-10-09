'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { services } from '@/components/data/portfolio-data'

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionLabel>06 / Capabilities</SectionLabel>
          <h2 className="mt-5 max-w-lg text-3xl font-semibold tracking-[-.04em] sm:text-5xl sm:tracking-[-.045em]">
            What I can build for you.
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, body, Icon], i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                className="flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-[0_4px_20px_rgb(0,0,0,.025)]"
              >
                <Icon className="mb-6 size-6 text-muted-foreground transition group-hover:rotate-6 sm:mb-8" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{body}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:underline sm:mt-7">
                  Learn more <ArrowUpRight className="size-3.5" />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
