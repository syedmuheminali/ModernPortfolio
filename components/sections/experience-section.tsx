import { ArrowUpRight, BriefcaseBusiness, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { experience } from '@/components/data/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
        <div>
          <Reveal>
            <SectionLabel>05 / Experience</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-5xl sm:tracking-[-.045em]">
              A little history.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="mt-8 overflow-hidden rounded-3xl border border-border bg-card sm:mt-9 lg:sticky lg:top-28">
              <div className="relative overflow-hidden bg-[#171717] p-5 text-white sm:p-7">
                <div aria-hidden="true" className="absolute -right-12 -top-16 size-40 rounded-full border border-white/10" />
                <div aria-hidden="true" className="absolute -right-5 -top-9 size-28 rounded-full border border-white/10" />
                <div className="relative flex items-center gap-2 text-xs font-medium text-white/65">
                  <span className="size-2 rounded-full bg-emerald-400" /> Open to opportunities
                </div>
                <p className="relative mt-5 text-xl font-semibold tracking-tight sm:mt-6 sm:text-2xl">
                  MERN Stack &amp; Mobile Engineer
                </p>
                <p className="relative mt-2 text-xs text-white/55 sm:text-sm">
                  2+ years building web and mobile products
                </p>
              </div>

              <div className="p-5 sm:p-7">
                <div className="grid gap-3 text-sm sm:gap-4">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                    <span>MERN Stack, React Native &amp; Next.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe2 aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Native', 'Next.js', 'TypeScript'].map(skill => (
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
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:opacity-85 sm:mt-7"
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
              <article className="relative rounded-3xl border border-border bg-card p-5 sm:p-7">
                <span
                  aria-hidden="true"
                  className="absolute -left-1.5 top-8 hidden size-3 rounded-full bg-foreground ring-4 ring-background lg:block"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">{job.company}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{job.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5">{job.description}</p>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground sm:mt-5">
                  {job.highlights.map(highlight => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                      <span>{highlight}</span>
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
