import { useRef } from 'react'
import { skills } from '../data/content'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/motion'

// Infinite ticker that speeds up with scroll velocity and flips with scroll direction.
const Marquee = () => {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const loop = gsap.to('.mq-track', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const dir = self.direction
          const boost = gsap.utils.clamp(1, 6, Math.abs(self.getVelocity()) / 300)
          gsap.to(loop, { timeScale: dir * boost, duration: 0.2, overwrite: true })
          gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2, ease: 'power2.out' })
        },
      })
      gsap.to('.mq-star', { rotate: 360, duration: 6, repeat: -1, ease: 'none' })
    },
    { scope: root },
  )

  const row = skills.map((s) => (
    <span key={s.name} className="flex items-center gap-[0.4em] pr-[0.4em]">
      {s.name}
      <span className="mq-star inline-block text-[0.6em] text-signal" aria-hidden="true">
        ✳
      </span>
    </span>
  ))

  return (
    <div
      ref={root}
      className="relative z-[2] -rotate-2 overflow-hidden border-y border-ink bg-ink py-4 text-paper md:py-6"
      aria-label="Technologies I work with"
    >
      <div className="mq-track flex w-max whitespace-nowrap text-[9vw] font-semibold uppercase leading-none tracking-[-0.04em] md:text-[5.5vw]">
        <div className="flex">{row}</div>
        <div className="flex" aria-hidden="true">
          {row}
        </div>
      </div>
    </div>
  )
}

export default Marquee
