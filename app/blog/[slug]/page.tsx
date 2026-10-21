import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  FolderGit2,
  BookmarkCheck,
  Share2,
  Lightbulb,
  MessageSquare,
  ArrowUpRight,
  Send,
  Layers,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { SectionLabel } from '@/components/common/section-label'
import { BLOG_POSTS, BlogPost } from '@/components/data/blog-data'
import { BlogDetailClient, ImageZoomTrigger } from '@/components/blog/blog-detail-client'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found | Syed Muhemin Ali',
    }
  }

  return {
    title: `${post.title} | Syed Muhemin Ali`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Related posts (excluding current)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <ScrollProgress />
      <Header />

      <main className="mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6 sm:pt-36 lg:px-8">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mt-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-foreground">
              <Sparkles className="size-3.5 text-amber-500 fill-amber-500" />
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" />
              <time dateTime={post.isoDate}>{post.date}</time>
            </div>
            <span className="text-xs text-muted-foreground">·</span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3.5 pt-2">
            <div className="relative size-11 overflow-hidden rounded-full border border-border">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          {/* Interactive Share & Save Bar */}
          <BlogDetailClient
            slug={post.slug}
            title={post.title}
            coverImage={post.coverImage}
          />
        </header>

        {/* Featured Visual Diagram Section */}
        <section className="mt-8 sm:mt-10">
          <ImageZoomTrigger
            src={post.coverImage}
            alt={`${post.title} architecture diagram`}
          />
          <p className="mt-2.5 text-center text-xs text-muted-foreground">
            Visual Guide: Modern backend architectural structure for scalable Node.js &amp; Express applications
          </p>
        </section>

        {/* Main Article Body */}
        <article className="mt-12 space-y-12 leading-relaxed">
          {/* Section 1: The Initial Focus */}
          <div className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              The Early Trap: Confusing Syntax with Engineering
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              I thought learning backend meant simply learning Node.js and Express.js.
              So I poured all my energy into:
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {post.content.initialFocus.map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5"
                >
                  <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: The Reality & Growing Pains */}
          <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-destructive font-semibold text-sm uppercase tracking-wider">
              <XCircle className="size-4" /> The Maintenance Nightmare
            </div>
            <h2 className="mt-2 text-lg sm:text-xl font-bold text-foreground">
              My APIs worked, but maintaining them was a nightmare.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              When business logic scales without proper architectural boundaries, technical debt
              multiplies exponentially:
            </p>

            <ul className="mt-5 space-y-3">
              {post.content.theProblems.map(problem => (
                <li
                  key={problem}
                  className="flex items-start gap-3 text-sm text-foreground/90 font-medium"
                >
                  <span className="text-destructive font-bold select-none shrink-0">❌</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: The Golden Realization */}
          <blockquote className="relative overflow-hidden rounded-3xl border-2 border-foreground/15 bg-gradient-to-br from-card to-muted p-6 sm:p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-foreground text-background shrink-0">
                <Lightbulb className="size-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  The Critical Mindset Shift
                </p>
                <p className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  &ldquo;Writing backend code is easy. Building a maintainable backend is the real
                  skill.&rdquo;
                </p>
              </div>
            </div>
          </blockquote>

          {/* Section 4: Architecture Directory Blueprint (Matching Image) */}
          <div>
            <div className="flex items-center gap-2">
              <FolderGit2 className="size-5 text-foreground" />
              <h2 className="text-2xl font-bold tracking-tight">
                The Clean Architecture Directory Blueprint
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Here is how enterprise backends break down responsibility so that files stay short,
              business logic is isolated, and databases remain decoupled from route handlers.
            </p>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {post.content.folderBreakdown.map(item => (
                <div
                  key={item.folder}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:border-foreground/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-foreground bg-muted px-2.5 py-1 rounded-md">
                      {item.folder}
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: The 5-Stage Roadmap */}
          <div>
            <div className="flex items-center gap-2">
              <Layers className="size-5 text-foreground" />
              <h2 className="text-2xl font-bold tracking-tight">
                The Backend Roadmap I Wish I Had Followed From Day 1 👇
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow this phased progression to master backend engineering from fundamentals to
              distributed systems.
            </p>

            <div className="mt-7 space-y-5">
              {post.content.roadmapStages.map((stage, idx) => (
                <div
                  key={stage.title}
                  className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:border-foreground/40 sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stage.stage}</span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {stage.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span className="text-muted-foreground font-mono select-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {stage.highlight && (
                    <div className="mt-4 rounded-xl border border-border/70 bg-muted/60 px-3.5 py-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Pro Tip: </span>
                      {stage.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Key Takeaways & Mindset */}
          <div className="rounded-3xl border border-border bg-card/80 p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight">
              Habits Over Speed
            </h2>

            <div className="mt-4 space-y-3">
              {post.content.takeaways.map((takeaway, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BookmarkCheck className="size-5 text-foreground shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/80 pt-5">
              <span className="text-xs font-semibold text-muted-foreground">Action items:</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                💾 Save this roadmap for your backend journey
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                🔁 Repost it with a developer who needs it
              </span>
            </div>
          </div>

          {/* Section 7: Discussion Question Box */}
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-muted/40 p-6 sm:p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <MessageSquare className="size-4" /> Question for backend developers
                </span>
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-foreground">
                  &ldquo;{post.content.discussionQuestion}&rdquo;
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Drop your answer on LinkedIn or send me your thoughts directly!
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition hover:scale-105 shrink-0"
              >
                Join the Discussion <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Section 8: Author Bio Card */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative size-20 sm:size-24 overflow-hidden rounded-2xl border-2 border-border shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 space-y-1.5">
                <h3 className="text-lg font-bold text-foreground">{post.author.name}</h3>
                <p className="text-xs font-medium text-muted-foreground">
                  Full Stack Developer, MERN &amp; React Native Specialist based in Karachi, Pakistan
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground pt-1">
                  I build scalable full-stack web applications, clean API architectures, and
                  high-performance mobile apps. Always excited to discuss architecture, system design,
                  and modern software engineering.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition hover:scale-105"
                  >
                    Get in touch <Send className="size-3" />
                  </Link>
                  <a
                    href="https://github.com/syedmuheminali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Section 9: Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 sm:mt-20 border-t border-border pt-12">
            <SectionLabel>More From The Blog</SectionLabel>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Keep Exploring</h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map(rel => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition hover:border-foreground/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{rel.category}</span>
                      <span>·</span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-foreground transition group-hover:underline underline-offset-4">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-foreground">
                    Read article <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
