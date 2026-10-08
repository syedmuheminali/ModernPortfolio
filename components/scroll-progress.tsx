'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-foreground"
    />
  )
}
