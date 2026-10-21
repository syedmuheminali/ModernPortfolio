import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { SectionLabel } from '@/components/common/section-label'
import { Reveal } from '@/components/common/reveal'
import { BLOG_POSTS } from '@/components/data/blog-data'
import { BlogListClient } from '@/components/blog/blog-list-client'

export const metadata: Metadata = {
  title: 'Engineering Blog & Architectural Roadmaps | Syed Muhemin Ali',
  description:
    'Deep dives, practical roadmaps, and architectural lessons on Node.js, Express, MongoDB, Clean Architecture, React Native, and Next.js by Syed Muhemin Ali.',
  keywords: [
    'Backend Architecture',
    'Node.js Roadmap',
    'Express.js Clean Architecture',
    'MERN Stack Blog',
    'Software Architecture',
    'Full Stack Developer Karachi',
    'Syed Muhemin Ali Blog',
  ],
  openGraph: {
    title: 'Engineering Blog & Architectural Roadmaps | Syed Muhemin Ali',
    description:
      'Practical backend roadmaps, clean architecture patterns, and full-stack engineering guides.',
    url: 'https://syedmuheminali.vercel.app/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <ScrollProgress />
      <Header />

      <main className="mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 sm:pt-36 sm:pb-28 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <SectionLabel>Articles &amp; Engineering Notes</SectionLabel>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">
              Thoughts, Roadmaps &amp; Architecture.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hard-learned lessons from building scalable APIs, production-ready MERN backends, and
              high-performance applications.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-12">
          <BlogListClient initialPosts={BLOG_POSTS} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
