'use client'

import { useState } from 'react'
import { PageLoader } from '@/components/page-loader'
import { ScrollProgress } from '@/components/scroll-progress'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { WhyHireMeSection } from '@/components/sections/why-hire-me-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ContactSection } from '@/components/sections/contact-section'
import { ProjectModal } from '@/components/project-modal'
import { Footer } from '@/components/footer'
import { ProjectItem } from '@/components/data/portfolio-data'

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project)
    setActiveImageIndex(0)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <PageLoader />
      <ScrollProgress />
      <Header />

      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <WhyHireMeSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        activeImage={activeImageIndex}
        setActiveImage={setActiveImageIndex}
      />

      <Footer />
    </div>
  )
}

export default Portfolio
