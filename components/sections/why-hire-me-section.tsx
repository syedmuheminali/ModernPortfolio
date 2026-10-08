import { Zap } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { reasons } from '@/components/data/portfolio-data'

export function WhyHireMeSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <Reveal>
          <SectionLabel>04 / Why hire me</SectionLabel>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
            A developer who thinks beyond the interface.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {reasons.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-background p-6">
                <Zap className="mb-10 text-muted-foreground" />
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
