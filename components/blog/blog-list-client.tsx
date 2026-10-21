'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  X,
  Calendar,
  Clock,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Tag,
  Filter,
} from 'lucide-react'
import { BlogPost, BLOG_CATEGORIES } from '@/components/data/blog-data'

interface BlogListClientProps {
  initialPosts: BlogPost[]
}

export function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    initialPosts.forEach(post => {
      post.tags.forEach(t => tagSet.add(t))
    })
    return Array.from(tagSet)
  }, [initialPosts])

  // Filtered posts based on query, category, and tag
  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      // Category filter
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false
      }

      // Tag filter
      if (selectedTag && !post.tags.includes(selectedTag)) {
        return false
      }

      // Search query
      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase().trim()
      const inTitle = post.title.toLowerCase().includes(query)
      const inExcerpt = post.excerpt.toLowerCase().includes(query)
      const inCategory = post.category.toLowerCase().includes(query)
      const inTags = post.tags.some(tag => tag.toLowerCase().includes(query))
      const inRoadmap = post.content.roadmapStages.some(
        s =>
          s.title.toLowerCase().includes(query) ||
          s.points.some(p => p.toLowerCase().includes(query))
      )
      const inFolders = post.content.folderBreakdown.some(
        f =>
          f.folder.toLowerCase().includes(query) ||
          f.role.toLowerCase().includes(query)
      )

      return inTitle || inExcerpt || inCategory || inTags || inRoadmap || inFolders
    })
  }, [initialPosts, searchQuery, selectedCategory, selectedTag])

  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedTag(null)
  }

  const isFiltered = searchQuery !== '' || selectedCategory !== 'All' || selectedTag !== null

  return (
    <div className="space-y-10">
      {/* Search Bar & Controls Box */}
      <div className="rounded-3xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-xl sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, keywords, tech stack (Node.js, Express, Clean Architecture, MongoDB)..."
            className="w-full rounded-2xl border border-border bg-background/80 py-3.5 pl-12 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Filter className="size-3.5" /> Category:
          </span>
          {BLOG_CATEGORIES.map(category => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? 'bg-foreground text-background shadow-sm'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Popular Tech Tags */}
        <div className="mt-3.5 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-3.5">
          <span className="mr-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Tag className="size-3.5" /> Tags:
          </span>
          {allTags.map(tag => {
            const isTagActive = selectedTag === tag
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(isTagActive ? null : tag)}
                className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition ${
                  isTagActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border/80 bg-background/50 text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                #{tag}
              </button>
            )
          })}

          {isFiltered && (
            <button
              onClick={clearAllFilters}
              className="ml-auto text-xs font-medium text-destructive underline-offset-4 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <p>
          Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span>{' '}
          {filteredPosts.length === 1 ? 'article' : 'articles'}
          {selectedCategory !== 'All' && (
            <span>
              {' '}
              in <span className="font-semibold text-foreground">{selectedCategory}</span>
            </span>
          )}
          {selectedTag && (
            <span>
              {' '}
              tagged <span className="font-semibold text-foreground">#{selectedTag}</span>
            </span>
          )}
        </p>

        {isFiltered && (
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px]">Filtered</span>
        )}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border p-12 text-center">
          <BookOpen className="mx-auto size-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-base font-semibold">No articles found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We couldn&apos;t find any posts matching &ldquo;{searchQuery}&rdquo;. Try another
            search term or reset your filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:scale-105"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => {
              const isFirstFeatured = index === 0 && post.featured && !isFiltered

              return (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1.5 hover:shadow-xl ${
                    isFirstFeatured ? 'md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12' : ''
                  }`}
                >
                  {/* Card Image Area */}
                  <div
                    className={`relative overflow-hidden bg-muted ${
                      isFirstFeatured
                        ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[280px]'
                        : 'aspect-[16/10] w-full'
                    }`}
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes={
                        isFirstFeatured
                          ? '(max-width: 1024px) 100vw, 60vw'
                          : '(max-width: 768px) 100vw, 33vw'
                      }
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute left-4 top-4 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-card/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
                        {post.featured && <Sparkles className="size-3 text-amber-500 fill-amber-500" />}
                        {post.category}
                      </span>
                    </div>

                    {/* Read Time on image */}
                    <div className="absolute bottom-3 left-4 z-10 flex items-center gap-3 text-xs text-white/90 drop-shadow">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {post.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`flex flex-1 flex-col justify-between p-6 sm:p-7 ${
                      isFirstFeatured ? 'lg:col-span-5' : ''
                    }`}
                  >
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3
                        className={`mt-3 font-bold tracking-tight text-foreground transition group-hover:text-foreground/80 ${
                          isFirstFeatured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                        }`}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:underline underline-offset-4"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer / Read link */}
                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                      <div className="flex items-center gap-2.5">
                        <div className="relative size-7 overflow-hidden rounded-full border border-border">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-foreground">
                          {post.author.name}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition group-hover:translate-x-1"
                      >
                        Read Article <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
