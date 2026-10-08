'use client'

import { FormEvent, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Code2, ExternalLink, Mail } from 'lucide-react'
import { Reveal } from '@/components/common/reveal'
import { SectionLabel } from '@/components/common/section-label'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sendProgress, setSendProgress] = useState(15)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setSendProgress(20)
    setErrorMessage(null)

    const progressTimer = setInterval(() => {
      setSendProgress(prev => {
        if (prev >= 92) return prev
        return prev + Math.floor(Math.random() * 12) + 6
      })
    }, 200)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      const data = await response.json()
      clearInterval(progressTimer)

      if (data.success) {
        setSendProgress(100)
        setTimeout(() => {
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }, 300)
      } else {
        setErrorMessage(data.message || 'Something went wrong! Failed to send email.')
      }
    } catch (error) {
      clearInterval(progressTimer)
      console.error(error)
      setErrorMessage('Network error: Could not send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="mx-4 mb-8 overflow-hidden rounded-[2rem] bg-[#171717] text-white sm:mx-6 lg:mx-auto lg:max-w-6xl"
    >
      <div className="relative grid gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-[.8fr_1.2fr]">
        <div className="absolute right-0 top-0 size-80 rounded-full bg-[radial-gradient(circle,rgba(125,148,207,.32),transparent_68%)] blur-2xl" />
        <Reveal>
          <div className="relative">
            <SectionLabel>07 / Contact</SectionLabel>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-white/55">
              Looking for a developer who can turn ideas into production-ready products? Let&apos;s discuss your next opportunity.
            </p>
            <div className="mt-9 grid gap-3 text-sm text-white/70">
              <a
                href="https://mail.google.com/mail/?view=cm&amp;to=smuheminali%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail /> smuheminali@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <ExternalLink /> LinkedIn profile
              </a>
              <a
                href="https://github.com/syedmuheminali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Code2 /> GitHub profile
              </a>
              <span className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-emerald-400" /> Available for new opportunities
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="relative grid gap-4 rounded-3xl border border-white/10 bg-card/[.06] p-5 backdrop-blur-sm sm:p-7"
          >
            {/* Animated Loader while API is pending */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  key="form-loader"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-3xl bg-[#171717]/95 px-6 py-8 text-center backdrop-blur-md"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="mx-auto grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-2xl"
                  >
                    <Code2 className="size-7" />
                  </motion.div>
                  <p className="mt-6 text-sm font-semibold tracking-wide text-white">Syed Muhemin Ali</p>
                  <p className="mt-1 text-xs text-white/50">Sending your message...</p>

                  <div className="mt-7 h-1.5 w-52 max-w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-white transition-all duration-300"
                      style={{ width: `${sendProgress}%` }}
                    />
                  </div>

                  <div className="mt-3 flex w-52 max-w-full items-center justify-between text-[10px] font-medium tracking-[.16em] text-white/50">
                    <span>SENDING</span>
                    <span className="font-mono text-white">{String(sendProgress).padStart(2, '0')}%</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {submitted ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <div className="grid size-12 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Thanks for reaching out!</h3>
                <p className="mt-2 text-sm text-white/55">
                  Your message has been sent successfully. I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm underline transition hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs text-white/60">
                    Full name
                    <input
                      required
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      disabled={loading}
                      className="rounded-xl border border-white/10 bg-card/[.06] px-3 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40 disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-xs text-white/60">
                    Email address
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      disabled={loading}
                      className="rounded-xl border border-white/10 bg-card/[.06] px-3 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40 disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-xs text-white/60">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    disabled={loading}
                    className="resize-none rounded-xl border border-white/10 bg-card/[.06] px-3 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40 disabled:opacity-50"
                    placeholder="Tell me about your idea..."
                  />
                </label>

                {errorMessage && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-300">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#171717] shadow-sm transition hover:scale-[1.01] hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-60"
                >
                  Let&apos;s build something great <ArrowUpRight />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
