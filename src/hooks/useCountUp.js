import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export function useCountUp(target, { duration = 1200 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const prefersReducedMotion = useReducedMotion()
  const numericTarget = typeof target === 'number' ? target : parseFloat(target)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView || Number.isNaN(numericTarget)) return

    if (prefersReducedMotion) {
      setValue(numericTarget)
      return
    }

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(numericTarget * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, numericTarget, duration, prefersReducedMotion])

  const display = Number.isNaN(numericTarget)
    ? target
    : Math.round(value) + String(target).replace(/^-?[\d.]+/, '')

  return { ref, display }
}
