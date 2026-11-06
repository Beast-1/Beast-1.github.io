import { useEffect, useRef, useState } from 'react'
import './RevealOnScroll.css'

export function RevealOnScroll({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={['reveal', visible && 'is-visible', className].filter(Boolean).join(' ')}
      style={{ '--reveal-y': `${y}px`, '--reveal-delay': `${delay}s` }}
    >
      {children}
    </div>
  )
}
