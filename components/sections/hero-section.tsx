'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const orbY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  return (
    <section id="home" className="relative mx-auto flex min-h-[780px] max-w-6xl items-center px-6 pb-20 pt-36 lg:px-8">
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute right-[-10%] top-28 -z-0 size-[480px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(180,210,255,.55),rgba(231,218,255,.35)_32%,transparent_67%)] blur-2xl"
      />
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <motion.span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-emerald-500"
              animate={prefersReducedMotion ? undefined : { scale: [1, 1.22, 1], opacity: [1, 0.55, 1] }}
              transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              animate={prefersReducedMotion ? undefined : { opacity: [1, 0.94, 1] }}
              transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              Available for Hire • Karachi, Pakistan &amp; Remote Worldwide
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-7xl"
          >
            <span className="block">React Native &amp; Frontend Developer</span>
            <span className="mt-2 block text-muted-foreground">Building Mobile &amp; Web Applications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg"
          >
            I build modern, responsive, and high-performance mobile (iOS &amp; Android) and web applications using React Native, React.js, Next.js, and TypeScript.
          </motion.p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg shadow-black/10 transition hover:scale-[1.03]"
            >
              Discuss project{' '}
              <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="/Syed_Muhemin_Ali_Resume.pdf"
              download="Syed_Muhemin_Ali_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted"
            >
              Download CV
            </a>
          </div>

          <a
            href="#projects"
            className="mt-12 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            View my work <ArrowUpRight />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[#151515] p-5 shadow-2xl shadow-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#596a87,transparent_28%),radial-gradient(circle_at_20%_90%,#474747,transparent_35%)] opacity-80" />
            <div className="relative rounded-[1.35rem] border border-white/10 bg-card/[.06] p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between text-white/50">
                <span className="text-xs tracking-[.2em]">developer.ts</span>
                <span className="flex gap-1.5">
                  <i className="size-2 rounded-full bg-red-300" />
                  <i className="size-2 rounded-full bg-yellow-300" />
                  <i className="size-2 rounded-full bg-green-300" />
                </span>
              </div>
              <pre className="mt-10 overflow-x-auto font-mono text-xs leading-7 text-white/75">
                <code>{`const developer = {\n  role: "React Native & Frontend Developer",\n  frontend: ["React Native", "React.js", "Next.js"],\n  backend: ["Node.js", "Express"],\n  database: ["MongoDB"],\n  status: "Available"\n}`}</code>
              </pre>
              <div className="mt-8 flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Node.js', 'TypeScript'].map(x => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-card/10 px-3 py-1.5 text-[10px] text-white/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8">
            <div className="mb-2 text-xs text-muted-foreground">Currently building</div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="size-2 rounded-full bg-emerald-500" /> products that matter
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
