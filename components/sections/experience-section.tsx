import { ArrowUpRight, BriefcaseBusiness, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { experience } from '@/components/data/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <Reveal>
            <SectionLabel>05 / Experience</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
              A little history.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="mt-9 overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative overflow-hidden bg-[#171717] p-6 text-white sm:p-7">
                <div aria-hidden="true" className="absolute -right-12 -top-16 size-40 rounded-full border border-white/10" />
                <div aria-hidden="true" className="absolute -right-5 -top-9 size-28 rounded-full border border-white/10" />
                <div className="relative flex items-center gap-2 text-xs font-medium text-white/65">
                  <span className="size-2 rounded-full bg-emerald-400" /> Open to opportunities
                </div>
                <p className="relative mt-6 text-2xl font-semibold tracking-tight">
                  Frontend &amp; React Native Engineer
                </p>
                <p className="relative mt-2 text-sm text-white/55">
                  2+ years building web and mobile products
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <div className="grid gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                    <span>Frontend, React Native &amp; MERN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe2 aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React Native', 'React.js', 'Next.js', 'TypeScript', 'Node.js'].map(skill => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:opacity-85"
                >
                  Let&apos;s talk about your team <ArrowUpRight className="size-4" />
                </a>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="grid gap-6">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.08}>
              <article className="relative rounded-3xl border border-border bg-card p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="absolute -left-1.5 top-8 hidden size-3 rounded-full bg-foreground ring-4 ring-background lg:block"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{job.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{job.description}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                  {job.highlights.map(highlight => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
