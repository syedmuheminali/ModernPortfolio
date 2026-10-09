import { Zap } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { reasons } from '@/components/data/portfolio-data'

export function WhyHireMeSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionLabel>04 / Why hire me</SectionLabel>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-.04em] sm:text-5xl sm:tracking-[-.045em]">
            A developer who thinks beyond the interface.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {reasons.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-background p-5 sm:p-6">
                <Zap className="mb-6 size-6 text-muted-foreground sm:mb-8" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
