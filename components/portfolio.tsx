'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight, Braces, BriefcaseBusiness, Check, Code2, Database, ExternalLink, Globe2, Layers3, Mail, Menu, Moon, Server, Smartphone, Sparkles, Sun, X, Zap } from 'lucide-react'
import genAiImage1 from './ProjectImages/GenAiPorject/image1.png'
import genAiImage2 from './ProjectImages/GenAiPorject/image2.png'
import genAiImage3 from './ProjectImages/GenAiPorject/image3.png'
import genAiImage4 from './ProjectImages/GenAiPorject/image4.png'
import genAiImage5 from './ProjectImages/GenAiPorject/image5.png'
import genAiImage6 from './ProjectImages/GenAiPorject/image6.png'
import genAiImage7 from './ProjectImages/GenAiPorject/image7.png'
import genAiImage8 from './ProjectImages/GenAiPorject/image8.png'
import genAiImage9 from './ProjectImages/GenAiPorject/image9.png'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']
const stack = ['React Native', 'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git', 'REST APIs']
const skills = { Frontend: ['React.js', 'Next.js', "React Native", 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', "Material UI", "SASS", "NativeWind"], Backend: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase'], 'Tools & Technologies': ['Git', 'GitHub', 'Redux Toolkit', "Context Api", 'Axios', 'Cloudinary', 'Stripe', 'Docker', "Api Integration", "AsyncStorage", "Location / Maps", "Push Notifications", "Camera", "WebSocket / Socket.IO"] }
const genAiImages = [genAiImage1, genAiImage2, genAiImage3, genAiImage4, genAiImage5, genAiImage6, genAiImage7, genAiImage8, genAiImage9]
const genAiGithubUrl = 'https://github.com/syedmuheminali/Gemani-Project'
const genAiLiveUrl = 'https://gemani-project.vercel.app'
const projects = [
  { title: 'Gen AI + Full Stack Web Development Project | React, Node, JWT, Gemini', type: 'AI / SaaS', tags: ['Vite', 'SASS', 'Node.js','Express.js','Mongodb',"Gemini Api"], features: ['Authentication', 'Download Resume', 'Generate Interview Strategy'], tone: 'from-violet-100 via-white to-sky-100', icon: Code2 },
  { title: 'E-Commerce Platform', type: 'Commerce', description: 'A conversion-focused shopping experience with fast discovery and seamless checkout.', tags: ['React', 'Node.js', 'Stripe'], features: ['Authentication', 'Payment integration', 'Admin dashboard'], tone: 'from-orange-100 via-white to-rose-100', icon: Globe2 },
  { title: 'School Management System', type: 'Productivity', description: 'A thoughtful command center for students, teachers, and administrators.', tags: ['Next.js', 'MongoDB', 'Charts'], features: ['Role-based access', 'Analytics', 'REST API'], tone: 'from-emerald-100 via-white to-teal-100', icon: Layers3 },
  { title: 'MotorCar Service Platform', type: 'Marketplace', description: 'A service booking platform connecting drivers with trusted automotive experts.', tags: ['TypeScript', 'Express', 'Maps'], features: ['Booking flow', 'Provider profiles', 'Location search'], tone: 'from-slate-200 via-white to-blue-100', icon: BriefcaseBusiness },
]
const services = [['Web Development', 'Modern, responsive and high-performance websites.', Globe2], ['Mobile & Web Applications', 'Modern React Native and frontend applications built for scale.', Layers3], ['SaaS Products', 'Authentication, dashboards, APIs and resilient architecture.', Sparkles], ['API & Backend Development', 'Secure REST APIs and backend systems that stay dependable.', Server]] as const
const reasons = [['Modern development', 'I build applications using modern technologies and scalable architecture.'], ['Clean & maintainable code', 'Reusable components, clear structure and a codebase your team can own.'], ['Business-focused development', 'I connect technical decisions to the real problem the product needs to solve.'], ['Performance & user experience', 'Fast, responsive and accessible digital experiences across devices.']]
const experience = [
  {
    company: 'Enkelbok',
    location: 'Karachi, Pakistan',
    role: 'Mid-Level Developer',
    dates: 'February 2024 — Present',
    description: 'A digital accounting and bookkeeping platform helping small and medium-sized businesses manage invoices, expenses, payroll, and financial reporting.',
    highlights: [
      'Implemented English and Swedish localization across the application for international users.',
      'Developed a real-time chat module connecting support accounts and users.',
      'Built deadline reminders with automated email alerts and in-app notifications.',
      'Migrated legacy React Table to TanStack Table v8, improving sorting, filtering, pagination, and state management.',
      'Refactored layouts for responsive behavior and cross-browser compatibility.',
      'Built reusable React components and integrated REST APIs with Axios and reusable hooks.',
      'Optimized frontend rendering and resolved UI, API integration, and stability issues.',
    ],
  },
  {
    company: 'TecStik',
    location: 'Karachi, Pakistan',
    role: 'Associate Software Engineer',
    dates: 'May 2023 — January 2024',
    description: 'Delivered modern JavaScript web and mobile solutions for startup and enterprise clients.',
    highlights: [
      'Delivered web and mobile client features within agreed timelines and project requirements.',
      'Built full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
      'Developed responsive Android application interfaces using React Native.',
      'Integrated REST APIs across web and mobile applications with RTK Query and Axios.',
      'Implemented application state architecture with Redux Toolkit.',
      'Translated client requirements into functional UI and collaborated with the team on delivery.',
      'Resolved frontend, API integration, and UI issues to maintain application quality.',
    ],
  },
  {
    company: 'Deskwork Solution',
    location: 'Karachi, Pakistan',
    role: 'MERN Stack Developer Intern',
    dates: 'January 2023 — March 2023',
    description: 'Completed a hands-on internship building full-stack web applications with the MERN stack.',
    highlights: [
      'Worked on full-stack web application features using MongoDB, Express.js, React.js, and Node.js.',
      'Developed reusable, responsive frontend components in React.js.',
      'Assisted with backend development using Node.js and Express.js.',
      'Integrated APIs and managed application data using MongoDB.',
      'Collaborated with senior developers to deliver scalable web applications.',
    ],
  },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .6, delay, ease: [0.22, 1, .36, 1] }}>{children}</motion.div>
}
function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground">{children}</p> }

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  return <button type="button" suppressHydrationWarning onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'} className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground md:size-8">{isDark ? <Sun data-icon="inline-start" /> : <Moon data-icon="inline-start" />}</button>
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isGenAiModalOpen, setIsGenAiModalOpen] = useState(false)
  const [activeGenAiImage, setActiveGenAiImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loaderProgress, setLoaderProgress] = useState(1)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const orbY = useTransform(scrollYProgress, [0, .4], [0, -80])
  useEffect(() => {
    if (!isGenAiModalOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsGenAiModalOpen(false)
      if (event.key === 'ArrowRight') setActiveGenAiImage(index => (index + 1) % genAiImages.length)
      if (event.key === 'ArrowLeft') setActiveGenAiImage(index => (index - 1 + genAiImages.length) % genAiImages.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isGenAiModalOpen])
  useEffect(() => {
    let startTime: number | null = null
    let animationFrame = 0
    let finishTimer: ReturnType<typeof setTimeout> | undefined
    const duration = prefersReducedMotion ? 450 : 1400

    function updateProgress(timestamp: number) {
      if (startTime === null) startTime = timestamp
      const fraction = Math.min((timestamp - startTime) / duration, 1)
      setLoaderProgress(Math.max(1, Math.ceil(fraction * 100)))

      if (fraction < 1) {
        animationFrame = requestAnimationFrame(updateProgress)
      } else {
        finishTimer = setTimeout(() => setIsLoading(false), 180)
      }
    }

    animationFrame = requestAnimationFrame(updateProgress)
    return () => {
      cancelAnimationFrame(animationFrame)
      if (finishTimer) clearTimeout(finishTimer)
    }
  }, [prefersReducedMotion])
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true) }

  return <div className="min-h-screen overflow-hidden bg-background text-foreground">
    <AnimatePresence>
      {isLoading && <motion.div key="page-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: prefersReducedMotion ? 0 : .35 }} className="fixed inset-0 z-[100] grid place-items-center bg-background px-6 text-foreground">
        <div className="w-full max-w-xs text-center">
          <motion.div animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="mx-auto grid size-16 place-items-center rounded-2xl border border-border bg-card shadow-lg">
            <Code2 className="size-7" />
          </motion.div>
          <p className="mt-6 text-sm font-semibold tracking-wide">Syed Muhemin Ali</p>
          <p className="mt-1 text-xs text-muted-foreground">Building digital experiences</p>
          <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-muted">
            <motion.div className="h-full rounded-full bg-foreground" style={{ width: `${loaderProgress}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] font-medium tracking-[.16em] text-muted-foreground">
            <span>LOADING</span>
            <span className="font-mono text-foreground">{String(loaderProgress).padStart(2, '0')}%</span>
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>
    <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-foreground" />
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8"><nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/80 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,.04)] backdrop-blur-xl sm:px-5"><a href="#home" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-full bg-foreground text-sm text-background">M.</span><span className="hidden sm:block">Syed Muhemin Ali</span></a><div className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-foreground">{item}</a>)}</div><ThemeToggle /><a href="#contact" className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:scale-[1.03] md:flex">Let&apos;s talk <ArrowUpRight data-icon="inline-end" /></a><button aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 md:hidden">{menuOpen ? <X /> : <Menu />}</button></nav>{menuOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card p-4 shadow-lg md:hidden">{navItems.map(item => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-muted">{item}</a>)}</motion.div>}</header>

    <main>
      <section id="home" className="relative mx-auto flex min-h-[780px] max-w-6xl items-center px-6 pb-20 pt-36 lg:px-8"><motion.div style={{ y: orbY }} className="pointer-events-none absolute right-[-10%] top-28 -z-0 size-[480px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(180,210,255,.55),rgba(231,218,255,.35)_32%,transparent_67%)] blur-2xl" /><div className="grid w-full items-center gap-14 lg:grid-cols-[1.04fr_.96fr]"><div className="relative z-10"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"><motion.span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" animate={prefersReducedMotion ? undefined : { scale: [1, 1.22, 1], opacity: [1, 0.55, 1] }} transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} /><motion.span animate={prefersReducedMotion ? undefined : { opacity: [1, .94, 1] }} transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>Available for new opportunities</motion.span></motion.div><motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-7xl"><span className="block">React Native &amp; Frontend Developer</span><span className="mt-2 block text-muted-foreground">Building Mobile &amp; Web Applications</span></motion.h1><motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">I build modern, responsive, and high-performance mobile and web applications using React Native, React.js, Next.js, and modern frontend technologies.</motion.p><div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg shadow-black/10 transition hover:scale-[1.03]">Discuss project <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="/Syed_Muhemin_Ali_Resume.pdf" download="Syed_Muhemin_Ali_Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted">Download CV</a></div><a href="#projects" className="mt-12 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground">View my work <ArrowUpRight /></a></div><motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-[460px]"><div className="relative overflow-hidden rounded-[2rem] bg-[#151515] p-5 shadow-2xl shadow-black/10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#596a87,transparent_28%),radial-gradient(circle_at_20%_90%,#474747,transparent_35%)] opacity-80" /><div className="relative rounded-[1.35rem] border border-white/10 bg-card/[.06] p-5 backdrop-blur-sm"><div className="flex items-center justify-between text-white/50"><span className="text-xs tracking-[.2em]">developer.ts</span><span className="flex gap-1.5"><i className="size-2 rounded-full bg-red-300" /><i className="size-2 rounded-full bg-yellow-300" /><i className="size-2 rounded-full bg-green-300" /></span></div><pre className="mt-10 overflow-x-auto font-mono text-xs leading-7 text-white/75"><code>{`const developer = {\n  role: "React Native & Frontend Developer",\n  frontend: ["React Native", "React.js", "Next.js"],\n  backend: ["Node.js", "Express"],\n  database: ["MongoDB"],\n  status: "Available"\n}`}</code></pre><div className="mt-8 flex flex-wrap gap-2">{['React.js', 'Next.js', 'Node.js', 'TypeScript'].map(x => <span key={x} className="rounded-full border border-white/10 bg-card/10 px-3 py-1.5 text-[10px] text-white/70">{x}</span>)}</div></div></div><div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8"><div className="mb-2 text-xs text-muted-foreground">Currently building</div><div className="flex items-center gap-2 text-sm font-medium"><span className="size-2 rounded-full bg-emerald-500" /> products that matter</div></div></motion.div></div></section>

      <section className="border-y border-border bg-card py-10"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="mb-5 text-center text-xs font-medium uppercase tracking-[.14em] text-muted-foreground">Technologies I work with</div><div className="flex flex-nowrap justify-start gap-2.5 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">{stack.map(item => <span key={item} className="shrink-0 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:text-foreground">{item}</span>)}</div></div></section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-28 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><SectionLabel>01 / About me</SectionLabel><h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Turning ideas into scalable products.</h2><div className="relative mx-auto mt-10 w-full max-w-[340px] sm:mt-12"><motion.div aria-hidden="true" className="absolute -inset-3 rounded-full border border-dashed border-foreground/20" animate={prefersReducedMotion ? undefined : { rotate: 360 }} transition={prefersReducedMotion ? undefined : { duration: 36, repeat: Infinity, ease: 'linear' }} /><motion.div aria-hidden="true" className="absolute -inset-3 rounded-full border border-transparent border-t-foreground/60 border-r-foreground/20" animate={prefersReducedMotion ? undefined : { rotate: -360 }} transition={prefersReducedMotion ? undefined : { duration: 22, repeat: Infinity, ease: 'linear' }} /><motion.div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-background bg-muted shadow-xl shadow-black/10 ring-1 ring-border" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={prefersReducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}><img src="/profile-photo.jpeg" alt="Syed Muhemin Ali" className="size-full object-cover object-[center_28%]" /></motion.div><div className="absolute -left-4 top-10 grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md" title="TypeScript"><Braces aria-label="TypeScript" className="size-5" /></div><div className="absolute -right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md" title="React Native"><Smartphone aria-label="React Native" className="size-5" /></div><div className="absolute bottom-14 -left-4 grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground shadow-md" title="APIs and backend"><Database aria-label="APIs and backend" className="size-5" /></div><div className="absolute bottom-2 right-0 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur"><span className="size-2 rounded-full bg-emerald-500" /> React Native &amp; Frontend</div></div></Reveal><div><Reveal delay={.1}><p className="max-w-2xl text-xl leading-8 text-muted-foreground">I&apos;m a React Native and frontend developer who cares about the details. I build responsive, scalable, and user-friendly mobile and web applications that turn ambitious ideas into products people love to use.</p><ul className="mt-6 grid gap-4 text-sm leading-7 text-muted-foreground"><li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">Specialized in end-to-end React Native development with TypeScript, Expo, Redux Toolkit, RTK Query, MMKV, Firebase, and full App Store &amp; Google Play release management.</li><li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">Professional React.js and Next.js experience across web products, including REST API integration, responsive UI, performance optimization, and clean component architecture.</li><li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">Hands-on with advanced mobile integrations: push notifications, in-app purchases, Stripe payments, deep linking, WebSockets, video streaming, social login, and geolocation.</li><li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">Supporting backend experience with Node.js and Express.js endpoint development, MongoDB operations, and debugging API request and response flows.</li><li className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-foreground">Experience coordinating cross-functional teams of junior mobile and backend developers, QA, and UI/UX professionals on production projects.</li></ul>
      <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">I&apos;m working full-time while continuously strengthening my technical skills and foundation. My goal is to build reliable, maintainable, and user-focused products, with an emphasis on real performance, honest engineering, and solutions that work effectively in production and provide long-term value.</p></Reveal><div className="mt-12 grid gap-3 sm:grid-cols-3">{[['2+', 'Years experience'], ['10+', 'Projects shipped'], ['∞', 'Curiosity']].map(([value, label], i) => <Reveal key={label} delay={.15 + i * .08}><div className="rounded-2xl border border-border bg-card p-5"><div className="text-3xl font-semibold">{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div></Reveal>)}</div></div></div></section>

      <section id="skills" className="border-y border-border bg-card"><div className="mx-auto max-w-6xl px-6 py-28 lg:px-8"><Reveal><SectionLabel>02 / Expertise</SectionLabel><div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Tools of the trade.</h2><p className="max-w-xs text-sm leading-6 text-muted-foreground">A versatile toolkit for taking products from first sketch to a resilient production system.</p></div></Reveal><div className="mt-14 grid gap-4 md:grid-cols-3">{Object.entries(skills).map(([category, items], i) => <Reveal key={category} delay={i * .1}><div className="h-full rounded-3xl border border-border bg-background p-6"><div className="mb-7 flex items-center justify-between"><span className="text-sm font-semibold">{category}</span><span className="text-xs text-muted-foreground">0{i + 1}</span></div><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-border bg-card px-3 py-2 text-xs text-muted-foreground">{item}</span>)}</div></div></Reveal>)}</div></div></section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-28 lg:px-8"><Reveal><SectionLabel>03 / Selected work</SectionLabel><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Real products, thoughtfully built.</h2><p className="mt-4 max-w-md text-muted-foreground">Real-world applications built with modern technologies and a bias toward useful details.</p></Reveal><div className="mt-14 grid gap-5 md:grid-cols-2">{projects.map((project, i) => { const Icon = project.icon; const isGenAiProject = i === 0; return <Reveal key={project.title} delay={i * .08}><motion.article whileHover={{ y: -5 }} className="group overflow-hidden rounded-3xl border border-border bg-card"><div className={`relative aspect-[1.45] overflow-hidden bg-gradient-to-br ${project.tone} p-6`}>{isGenAiProject && <Image src={genAiImage6} alt="Gen AI interview strategy project preview" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />}<div className="absolute right-6 top-6 z-10 rounded-full bg-card/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-muted-foreground">{project.type}</div>{!isGenAiProject && <div className="flex h-full items-center justify-center"><div className="grid size-28 place-items-center rounded-[2rem] border border-white/80 bg-card/60 shadow-xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"><Icon className="text-[#393939]" strokeWidth={1.3} /></div></div>}</div><div className="p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{project.description}</p></div>{isGenAiProject ? <button type="button" onClick={() => { setActiveGenAiImage(0); setIsGenAiModalOpen(true) }} aria-label={`View ${project.title} screenshots`} className="shrink-0 rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" /></button> : <ArrowUpRight className="shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1" />}</div><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-[11px] text-muted-foreground">{tag}</span>)}</div><div className="mt-5 grid gap-2 sm:grid-cols-3">{project.features.map(feature => <span key={feature} className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Check className="text-emerald-600" />{feature}</span>)}</div></div></motion.article></Reveal> })}</div><a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-medium hover:underline">View all projects <ArrowUpRight /></a></section>

      <section className="border-y border-border bg-card"><div className="mx-auto max-w-6xl px-6 py-28 lg:px-8"><Reveal><SectionLabel>04 / Why hire me</SectionLabel><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">A developer who thinks beyond the interface.</h2></Reveal><div className="mt-14 grid gap-4 sm:grid-cols-2">{reasons.map(([title, body], i) => <Reveal key={title} delay={i * .08}><div className="rounded-3xl border border-border bg-background p-6"><Zap className="mb-10 text-muted-foreground" /><h3 className="font-semibold">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{body}</p></div></Reveal>)}</div></div></section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-28 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><Reveal><SectionLabel>05 / Experience</SectionLabel><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">A little history.</h2></Reveal><Reveal delay={.1}><aside className="mt-9 overflow-hidden rounded-3xl border border-border bg-card"><div className="relative overflow-hidden bg-[#171717] p-6 text-white sm:p-7"><div aria-hidden="true" className="absolute -right-12 -top-16 size-40 rounded-full border border-white/10" /><div aria-hidden="true" className="absolute -right-5 -top-9 size-28 rounded-full border border-white/10" /><div className="relative flex items-center gap-2 text-xs font-medium text-white/65"><span className="size-2 rounded-full bg-emerald-400" /> Open to opportunities</div><p className="relative mt-6 text-2xl font-semibold tracking-tight">Frontend &amp; React Native Engineer</p><p className="relative mt-2 text-sm text-white/55">2+ years building web and mobile products</p></div><div className="p-6 sm:p-7"><div className="grid gap-4 text-sm"><div className="flex items-center gap-3"><BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" /><span>Frontend, React Native &amp; MERN</span></div><div className="flex items-center gap-3"><Globe2 aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" /><span>Karachi, Pakistan</span></div></div><div className="mt-6 flex flex-wrap gap-2">{['React Native', 'React.js', 'Next.js', 'TypeScript', 'Node.js'].map(skill => <span key={skill} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">{skill}</span>)}</div><a href="#contact" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:opacity-85">Let&apos;s talk about your team <ArrowUpRight className="size-4" /></a></div></aside></Reveal></div><div className="grid gap-6">{experience.map((job, index) => <Reveal key={job.company} delay={index * .08}><article className="relative rounded-3xl border border-border bg-card p-6 sm:p-7"><span aria-hidden="true" className="absolute -left-1.5 top-8 hidden size-3 rounded-full bg-foreground ring-4 ring-background lg:block" /><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="text-xl font-semibold">{job.company}</h3><p className="mt-1 text-sm font-medium text-muted-foreground">{job.role}</p><p className="mt-1 text-xs text-muted-foreground">{job.location}</p></div><span className="w-fit shrink-0 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">{job.dates}</span></div><p className="mt-5 text-sm leading-6 text-muted-foreground">{job.description}</p><ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">{job.highlights.map(highlight => <li key={highlight} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />{highlight}</li>)}</ul></article></Reveal>)}</div></div></section>

      <section id="services" className="border-y border-border bg-card"><div className="mx-auto max-w-6xl px-6 py-28 lg:px-8"><Reveal><SectionLabel>06 / Capabilities</SectionLabel><h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-.045em] sm:text-5xl">What I can build for you.</h2></Reveal><div className="mt-14 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, body, Icon], i) => <Reveal key={title} delay={i * .08} className="h-full"><motion.div whileHover={{ y: -5 }} className="flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-[0_4px_20px_rgb(0,0,0,.025)]"><Icon className="mb-10 text-muted-foreground transition group-hover:rotate-6" /><h3 className="font-semibold">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{body}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-medium">Learn more <ArrowUpRight /></a></motion.div></Reveal>)}</div></div></section>

      <section id="contact" className="mx-4 mb-8 overflow-hidden rounded-[2rem] bg-[#171717] text-white sm:mx-6 lg:mx-auto lg:max-w-6xl"><div className="relative grid gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-[.8fr_1.2fr]"><div className="absolute right-0 top-0 size-80 rounded-full bg-[radial-gradient(circle,rgba(125,148,207,.32),transparent_68%)] blur-2xl" /><Reveal><div className="relative"><SectionLabel>07 / Contact</SectionLabel><h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Let&apos;s work together.</h2><p className="mt-5 max-w-md leading-7 text-white/55">Looking for a developer who can turn ideas into production-ready products? Let&apos;s discuss your next opportunity.</p>
      <div className="mt-9 grid gap-3 text-sm text-white/70">
      <a href="https://mail.google.com/mail/?view=cm&amp;to=smuheminali%40gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><Mail /> smuheminali@gmail.com</a>
      <a href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><ExternalLink /> LinkedIn profile</a><a href="https://github.com/syedmuheminali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><Code2 /> GitHub profile</a><span className="flex items-center gap-3"><span className="size-2 rounded-full bg-emerald-400" /> Available for new opportunities</span></div></div></Reveal><Reveal delay={.1}><form onSubmit={handleSubmit} className="relative grid gap-4 rounded-3xl border border-white/10 bg-card/[.06] p-5 backdrop-blur-sm sm:p-7">{submitted ? <div className="flex min-h-[340px] flex-col items-center justify-center text-center"><div className="grid size-12 place-items-center rounded-full bg-emerald-400/15 text-emerald-300"><Check /></div><h3 className="mt-5 text-xl font-semibold">Thanks for reaching out.</h3><p className="mt-2 text-sm text-white/55">Your message is ready to be connected to your preferred email service.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm underline">Send another message</button></div> : <><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-xs text-white/60">Full name<input required name="name" className="rounded-xl border border-white/10 bg-card/[.06] px-3 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40" placeholder="Your name" /></label><label className="grid gap-2 text-xs text-white/60">Email address<input required type="email" name="email" className="rounded-xl border border-white/10 bg-card/[.06] px-3 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40" placeholder="you@example.com" /></label></div><label className="grid gap-2 text-xs text-white/60">Message<textarea required name="message" rows={4} className="resize-none rounded-xl border border-white/10 bg-card/[.06] px-3 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/40" placeholder="Tell me about your idea..." /></label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#171717] shadow-sm transition hover:scale-[1.01] hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Let&apos;s build something great <ArrowUpRight /></button></>}</form></Reveal></div></section>
    </main>
    <AnimatePresence>
      {isGenAiModalOpen && <motion.div key="gen-ai-project-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} onClick={() => setIsGenAiModalOpen(false)} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm sm:px-8">
        <motion.div role="dialog" aria-modal="true" aria-labelledby="gen-ai-modal-title" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ duration: .2 }} onClick={event => event.stopPropagation()} className="w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">Project screenshots</p>
              <h2 id="gen-ai-modal-title" className="mt-1 text-lg font-semibold sm:text-xl">Gen AI + Full Stack Web Development Project</h2>
            </div>
            <button type="button" onClick={() => setIsGenAiModalOpen(false)} aria-label="Close project screenshots" className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><X /></button>
          </div>
          <div className="relative flex min-h-[220px] max-h-[70vh] items-center justify-center bg-black/5 p-3 sm:min-h-[320px] sm:p-6">
            <Image src={genAiImages[activeGenAiImage]} alt={`Gen AI project screenshot ${activeGenAiImage + 1} of ${genAiImages.length}`} priority={activeGenAiImage === 0} className="max-h-[62vh] w-full object-contain" />
            {genAiImages.length > 1 && <>
              <button type="button" onClick={() => setActiveGenAiImage(index => (index - 1 + genAiImages.length) % genAiImages.length)} aria-label="Show previous screenshot" className="absolute left-4 grid size-10 place-items-center rounded-full border border-border bg-background/90 shadow-md transition hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><ArrowLeft /></button>
              <button type="button" onClick={() => setActiveGenAiImage(index => (index + 1) % genAiImages.length)} aria-label="Show next screenshot" className="absolute right-4 grid size-10 place-items-center rounded-full border border-border bg-background/90 shadow-md transition hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><ArrowRight /></button>
            </>}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              {genAiImages.length > 1 && <div className="flex items-center gap-1.5" aria-label={`Screenshot ${activeGenAiImage + 1} of ${genAiImages.length}`}>
                {genAiImages.map((image, index) => <button key={image.src} type="button" onClick={() => setActiveGenAiImage(index)} aria-label={`Show screenshot ${index + 1}`} aria-current={activeGenAiImage === index ? 'true' : undefined} className={`size-2.5 rounded-full transition ${activeGenAiImage === index ? 'bg-foreground' : 'bg-muted-foreground/35 hover:bg-muted-foreground/65'}`} />)}
              </div>}
              <span className="text-xs text-muted-foreground">{activeGenAiImage + 1} / {genAiImages.length}</span>
            </div>
            <div className="flex items-center gap-3">
              <a href={genAiGithubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Gen AI project GitHub repository" title="GitHub repository" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 .297a12 12 0 0 0-3.797 23.4c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.496 11.496 0 0 1 6.006 0c2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .32.216.694.825.576A12.004 12.004 0 0 0 24 12.297c0-6.627-5.373-12-12-12Z" /></svg> GitHub</a>
              <a href={genAiImages[activeGenAiImage].src} target="_blank" rel="noopener noreferrer" aria-label="Open current screenshot in a new tab" title="Open current screenshot" className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><ExternalLink className="size-4" /></a>
            </div>
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
    <footer className="mx-auto flex max-w-6xl flex-col gap-5 px-6 pb-10 pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><span className="font-semibold text-foreground">Syed Muhemin Ali</span><span className="mx-2">·</span>Building with intent.</div><div className="flex items-center gap-4"><a aria-label="Email" href="https://mail.google.com/mail/?view=cm&amp;to=smuheminali%40gmail.com" target="_blank" rel="noopener noreferrer"><Mail /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/syedmuheminali/?isSelfProfile=true" target="_blank" rel="noopener noreferrer"><ExternalLink /></a><a aria-label="GitHub" href="https://github.com/syedmuheminali" target="_blank" rel="noopener noreferrer"><Code2 /></a><span className="ml-2 text-xs">© 2026</span></div></footer>
  </div>
}

export default Portfolio
