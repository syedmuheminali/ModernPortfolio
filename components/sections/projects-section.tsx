'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { ProjectItem, projects } from '@/components/data/portfolio-data'

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
      <Reveal>
        <SectionLabel>03 / Selected work</SectionLabel>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
          Real products, thoughtfully built.
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          Real-world applications built with modern technologies and a bias toward useful details.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => {
          const Icon = project.icon

          return (
            <Reveal key={project.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                {/* Visual Header / Cover Image */}
                <div
                  onClick={() => onSelectProject(project)}
                  className={`relative aspect-[1.45] cursor-pointer overflow-hidden bg-gradient-to-br ${project.tone} p-6`}
                >
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="grid size-28 place-items-center rounded-[2rem] border border-white/80 bg-card/60 shadow-xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                        <Icon className="text-[#393939]" strokeWidth={1.3} />
                      </div>
                    </div>
                  )}
                  <div className="absolute right-6 top-6 z-10 rounded-full bg-card/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-muted-foreground backdrop-blur-sm">
                    {project.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="cursor-pointer text-xl font-semibold transition hover:text-foreground/80"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      aria-label={`View ${project.title} details & screenshots`}
                      className="shrink-0 rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-[11px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {project.features.map(feature => (
                      <span key={feature} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Check className="text-emerald-600" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          )
        })}
      </div>

      <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-medium hover:underline">
        View all projects <ArrowUpRight />
      </a>
    </section>
  )
}
