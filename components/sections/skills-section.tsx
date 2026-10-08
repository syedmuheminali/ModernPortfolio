import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { skills } from '@/components/data/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <Reveal>
          <SectionLabel>02 / Expertise</SectionLabel>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Tools of the trade.</h2>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              A versatile toolkit for taking products from first sketch to a resilient production system.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-background p-6">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-semibold">{category}</span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-2 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
