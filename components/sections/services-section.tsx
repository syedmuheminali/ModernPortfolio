'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { services } from '@/components/data/portfolio-data'

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <Reveal>
          <SectionLabel>06 / Capabilities</SectionLabel>
          <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
            What I can build for you.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, body, Icon], i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                className="flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-[0_4px_20px_rgb(0,0,0,.025)]"
              >
                <Icon className="mb-10 text-muted-foreground transition group-hover:rotate-6" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{body}</p>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-medium">
                  Learn more <ArrowUpRight />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
