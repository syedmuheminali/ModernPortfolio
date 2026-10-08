'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, ExternalLink, X } from 'lucide-react'
import { ProjectItem } from '@/components/data/portfolio-data'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
  activeImage: number
  setActiveImage: React.Dispatch<React.SetStateAction<number>>
}

export function ProjectModal({
  project,
  onClose,
  activeImage,
  setActiveImage,
}: ProjectModalProps) {
  const isOpen = Boolean(project)
  const images = project?.images || []
  const hasImages = images.length > 0
  const currentImage = hasImages ? images[activeImage] : null

  useEffect(() => {
    if (!isOpen || !project) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (hasImages && images.length > 1) {
        if (event.key === 'ArrowRight') {
          setActiveImage(index => (index + 1) % images.length)
        }
        if (event.key === 'ArrowLeft') {
          setActiveImage(index => (index - 1 + images.length) % images.length)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, project, hasImages, images.length, onClose, setActiveImage])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          key="project-details-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm sm:px-8"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={event => event.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  {project.type} • Project Details
                </p>
                <h2 id="project-modal-title" className="mt-1 text-lg font-semibold sm:text-xl">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project modal"
                className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <X />
              </button>
            </div>

            {/* Modal Body / Scrollable Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Media / Screenshots Section */}
              <div className="relative flex min-h-[220px] max-h-[60vh] items-center justify-center bg-black/5 p-3 sm:min-h-[320px] sm:p-6">
                {hasImages && currentImage ? (
                  <>
                    <Image
                      src={currentImage}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      priority={activeImage === 0}
                      className="max-h-[55vh] w-full object-contain"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImage(index => (index - 1 + images.length) % images.length)
                          }
                          aria-label="Show previous screenshot"
                          className="absolute left-4 grid size-10 place-items-center rounded-full border border-border bg-background/90 shadow-md transition hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        >
                          <ArrowLeft />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImage(index => (index + 1) % images.length)
                          }
                          aria-label="Show next screenshot"
                          className="absolute right-4 grid size-10 place-items-center rounded-full border border-border bg-background/90 shadow-md transition hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        >
                          <ArrowRight />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div
                    className={`relative flex min-h-[220px] w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${project.tone} p-8 text-center sm:min-h-[280px]`}
                  >
                    <div className="grid size-20 place-items-center rounded-2xl border border-white/80 bg-card/80 shadow-lg backdrop-blur-sm">
                      <project.icon className="text-[#393939]" strokeWidth={1.4} size={38} />
                    </div>
                    <p className="mt-4 text-base font-semibold text-foreground">{project.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Screenshots can be added in components/data/portfolio-data.ts
                    </p>
                  </div>
                )}
              </div>

              {/* Project Info & Overview */}
              <div className="border-t border-border px-5 py-5 sm:px-7">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Overview
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {project.modalDescription || project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {project.features.map(feature => (
                    <span
                      key={feature}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-emerald-600" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                {hasImages && images.length > 1 && (
                  <div
                    className="flex items-center gap-1.5"
                    aria-label={`Screenshot ${activeImage + 1} of ${images.length}`}
                  >
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`Show screenshot ${index + 1}`}
                        aria-current={activeImage === index ? 'true' : undefined}
                        className={`size-2.5 rounded-full transition ${
                          activeImage === index
                            ? 'bg-foreground'
                            : 'bg-muted-foreground/35 hover:bg-muted-foreground/65'
                        }`}
                      />
                    ))}
                  </div>
                )}
                {hasImages && (
                  <span className="text-xs text-muted-foreground">
                    {activeImage + 1} / {images.length}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    title="GitHub repository"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path d="M12 .297a12 12 0 0 0-3.797 23.4c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.496 11.496 0 0 1 6.006 0c2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .32.216.694.825.576A12.004 12.004 0 0 0 24 12.297c0-6.627-5.373-12-12-12Z" />
                    </svg>{' '}
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live preview`}
                    title="Live preview"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
