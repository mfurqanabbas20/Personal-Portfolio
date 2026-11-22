import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/motion'
import { profile } from '../data/content'

// Full-screen intro: name, a counter from 0 to 100, then the panel wipes up.
const Preloader = ({ onDone }) => {
  const root = useRef(null)
  const count = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.to(root.current, { autoAlpha: 0, duration: 0.3, onComplete: onDone })
        return
      }

      const counter = { v: 0 }
      const tl = gsap.timeline({ defaults: { ease: 'expo.inOut' } })

      tl.from('.pl-name', { yPercent: 110, duration: 1.1, ease: 'expo.out' })
        .to(
          counter,
          {
            v: 100,
            duration: 2,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (count.current) count.current.textContent = Math.round(counter.v)
            },
          },
          0,
        )
        .to('.pl-bar', { scaleX: 1, duration: 2, ease: 'power2.inOut' }, 0)
        .to('.pl-fade', { autoAlpha: 0, y: -16, duration: 0.5, stagger: 0.04, ease: 'power3.in' }, '+=0.1')
        .to(root.current, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.1 }, '-=0.2')
        // Hand over to the hero slightly before the wipe finishes for overlap
        .call(() => onDone?.(), null, '-=0.75')
        .set(root.current, { display: 'none' })
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-5 text-paper md:p-10"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      aria-hidden="true"
    >
      <div className="pl-fade overflow-hidden">
        <p className="pl-name text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
          {profile.name}
          <span className="mt-1 block text-base font-medium tracking-normal text-fog">{profile.role}</span>
        </p>
      </div>

      <div>
        <div className="pl-fade flex items-end justify-end">
          <span className="text-[22vw] font-semibold leading-[0.8] tracking-[-0.05em] tabular-nums md:text-[14vw]">
            <span ref={count}>0</span>
            <span className="text-signal">%</span>
          </span>
        </div>
        <div className="pl-fade mt-6 h-px w-full bg-paper/15">
          <div className="pl-bar h-full origin-left scale-x-0 bg-signal" />
        </div>
      </div>
    </div>
  )
}

export default Preloader
