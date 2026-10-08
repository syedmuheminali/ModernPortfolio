'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [loaderProgress, setLoaderProgress] = useState(1)
  const prefersReducedMotion = useReducedMotion()

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

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background px-6 text-foreground"
        >
          <div className="w-full max-w-xs text-center">
            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto grid size-16 place-items-center rounded-2xl border border-border bg-card shadow-lg"
            >
              <Code2 className="size-7" />
            </motion.div>
            <p className="mt-6 text-sm font-semibold tracking-wide">Syed Muhemin Ali</p>
            <p className="mt-1 text-xs text-muted-foreground">Building digital experiences</p>
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-foreground"
                style={{ width: `${loaderProgress}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] font-medium tracking-[.16em] text-muted-foreground">
              <span>LOADING</span>
              <span className="font-mono text-foreground">{String(loaderProgress).padStart(2, '0')}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
