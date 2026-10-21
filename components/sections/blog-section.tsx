'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'
import { BLOG_POSTS } from '@/components/data/blog-data'

export function BlogSection() {
  const featuredPost = BLOG_POSTS[0]
  const otherPosts = BLOG_POSTS.slice(1, 3)

  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <SectionLabel>07 / Technical Writing</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-5xl sm:tracking-[-.045em]">
              Articles &amp; Architecture.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Practical guides, engineering lessons, and backend blueprints from real-world development.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline underline-offset-4 shrink-0"
          >
            View all articles <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-12">
        {/* Featured Card */}
        {featuredPost && (
          <Reveal className="lg:col-span-7">
            <motion.article
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-card/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
                    <Sparkles className="size-3 text-amber-500 fill-amber-500" />
                    Featured
                  </span>
                </div>
              </Link>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{featuredPost.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="transition group-hover:underline underline-offset-4"
                    >
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-xs text-muted-foreground">{featuredPost.date}</span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition group-hover:translate-x-1"
                  >
                    Read Roadmap <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </Reveal>
        )}

        {/* Secondary Posts */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {otherPosts.map((post, i) => (
            <Reveal key={post.id} delay={0.1 * (i + 1)} className="flex-1">
              <motion.article
                whileHover={{ y: -3 }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-md bg-muted px-2 py-0.5 font-medium text-foreground">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-foreground sm:text-lg">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition group-hover:underline underline-offset-4"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition group-hover:translate-x-1"
                  >
                    Read Article <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
