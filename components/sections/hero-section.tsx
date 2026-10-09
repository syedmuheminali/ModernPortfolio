'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const orbY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  return (
    <section id="home" className="relative mx-auto flex min-h-[auto] max-w-6xl items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-[740px] lg:px-8">
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute right-[-5%] top-20 -z-0 size-[200px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(180,210,255,.55),rgba(231,218,255,.35)_32%,transparent_67%)] blur-2xl sm:size-[440px] sm:blur-3xl lg:size-[480px]"
      />
      <div className="grid w-full items-center gap-10 sm:gap-14 lg:grid-cols-[1.04fr_.96fr]">
        <div className="relative z-10 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground sm:mb-7"
          >
            <motion.span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-emerald-500"
              animate={prefersReducedMotion ? undefined : { scale: [1, 1.22, 1], opacity: [1, 0.55, 1] }}
              transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="truncate"
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
            className="text-[1.75rem] font-semibold leading-[1.12] tracking-[-.02em] sm:text-5xl sm:leading-[1.06] sm:tracking-[-.04em] md:text-6xl md:leading-[1.02] md:tracking-[-.06em] lg:text-7xl"
          >
            <span className="block">MERN Stack Developer</span>
            <span className="mt-1.5 block text-muted-foreground sm:mt-2">Building Scalable Web &amp; Mobile Applications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-base sm:leading-7 md:text-lg"
          >
            I build modern, scalable, and high-performance full-stack web and mobile applications using MongoDB, Express.js, React.js, Node.js (MERN), Next.js, and React Native.
          </motion.p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg shadow-black/10 transition hover:scale-[1.03]"
            >
              Discuss project{' '}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
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
            className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground sm:mt-12"
          >
            View my work <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[460px] pb-6 sm:pb-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#151515] p-3 shadow-2xl shadow-black/10 sm:rounded-[2rem] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#596a87,transparent_28%),radial-gradient(circle_at_20%_90%,#474747,transparent_35%)] opacity-80" />
            <div className="relative rounded-xl border border-white/10 bg-card/[.06] p-3 backdrop-blur-sm sm:rounded-[1.35rem] sm:p-5">
              <div className="flex items-center justify-between text-white/50">
                <span className="text-[10px] tracking-[.15em] sm:text-xs sm:tracking-[.2em]">developer.ts</span>
                <span className="flex gap-1.5">
                  <i className="size-2 rounded-full bg-red-300" />
                  <i className="size-2 rounded-full bg-yellow-300" />
                  <i className="size-2 rounded-full bg-green-300" />
                </span>
              </div>
              <pre className="mt-5 overflow-x-auto font-mono text-[10px] leading-5 text-white/75 sm:mt-10 sm:text-xs sm:leading-7">
                <code>{`const developer = {\n  role: "MERN Stack Developer",\n  stack: ["MongoDB", "Express",\n    "React", "Node.js"],\n  mobile: ["React Native", "Expo"],\n  status: "Available for Hire"\n}`}</code>
              </pre>
              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Native', 'TypeScript'].map(x => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-card/10 px-2 py-0.5 text-[9px] text-white/70 sm:px-3 sm:py-1 sm:text-[10px]"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-2 rounded-xl border border-border bg-card p-2.5 shadow-xl sm:-bottom-5 sm:-left-6 sm:rounded-2xl sm:p-4">
            <div className="mb-1 text-[10px] text-muted-foreground sm:mb-2 sm:text-xs">Currently building</div>
            <div className="flex items-center gap-2 text-[11px] font-medium sm:text-sm">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500" /> products that matter
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
