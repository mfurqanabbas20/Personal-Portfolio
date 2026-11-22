import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'

// Pulls its child toward the pointer while hovered, then springs back.
const Magnetic = ({ children, strength = 0.35, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' })

    const move = (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const reset = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', reset)
    }
  }, [strength])

  return (
    <div ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  )
}

export default Magnetic
