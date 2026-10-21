'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Share2,
  Copy,
  Check,
  ZoomIn,
  X,
  Bookmark,
  Sparkles,
} from 'lucide-react'

interface BlogDetailClientProps {
  slug: string
  title: string
  coverImage: string
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  )
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
    </svg>
  )
}

export function BlogDetailClient({ slug, title, coverImage }: BlogDetailClientProps) {
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const [isZoomOpen, setIsZoomOpen] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://syedmuheminali.vercel.app/blog/${slug}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback
    }
  }

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${title}" by @syedmuheminali\n\n`)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Check out this backend roadmap: ${title}\n${shareUrl}`)
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  return (
    <>
      {/* Interactive Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-border/80 py-3.5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSaved(!saved)
            }}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
              saved
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card hover:bg-muted text-foreground'
            }`}
          >
            <Bookmark className={`size-3.5 ${saved ? 'fill-current' : ''}`} />
            {saved ? 'Saved for later' : 'Save roadmap'}
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-500" />
                <span className="text-emerald-500">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="flex items-center gap-1.5">
          <span className="mr-1 text-xs text-muted-foreground">Share:</span>
          <button
            onClick={handleShareLinkedIn}
            aria-label="Share on LinkedIn"
            className="rounded-full border border-border bg-card p-2 text-foreground transition hover:bg-[#0077B5] hover:text-white"
          >
            <LinkedInIcon className="size-3.5" />
          </button>
          <button
            onClick={handleShareTwitter}
            aria-label="Share on X"
            className="rounded-full border border-border bg-card p-2 text-foreground transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <XTwitterIcon className="size-3.5" />
          </button>
          <button
            onClick={handleShareWhatsApp}
            aria-label="Share on WhatsApp"
            className="rounded-full border border-border bg-card p-2 text-foreground transition hover:bg-[#25D366] hover:text-white"
          >
            <WhatsAppIcon className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox / Zoom Modal for Architecture Diagram */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-4xl overflow-auto rounded-3xl border border-white/20 bg-card p-2 sm:p-4 shadow-2xl"
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close enlarged diagram"
              className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-2 text-white hover:bg-black transition"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-[4/5] sm:aspect-[4/5] w-full max-w-2xl mx-auto min-h-[420px] sm:min-h-[640px]">
              <Image
                src={coverImage}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Production Node.js &amp; Express Clean Architecture Folder Structure
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export function ImageZoomTrigger({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition hover:shadow-xl"
      >
        <div className="relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/3] w-full max-h-[680px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Hover zoom pill overlay */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition group-hover:scale-105">
          <ZoomIn className="size-3.5" />
          <span>Click to Enlarge</span>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-3xl w-full overflow-hidden rounded-3xl border border-white/20 bg-background/95 p-3 shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-20 rounded-full bg-foreground p-2 text-background shadow-lg transition hover:opacity-80"
            >
              <X className="size-5" />
            </button>
            <div className="relative h-[80vh] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center py-2 text-xs text-muted-foreground">
              Node.js &amp; Express Architecture: controllers, middlewares, models, routes, services, utils, config, env
            </div>
          </div>
        </div>
      )}
    </>
  )
}
