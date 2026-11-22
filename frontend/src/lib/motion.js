// Central GSAP + Lenis setup. Lenis drives the scroll, GSAP's ticker drives Lenis,
// and every Lenis scroll event updates ScrollTrigger so pinned/scrubbed
// animations stay perfectly in sync with the smoothed scroll position.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export const EASE = 'expo.out'
gsap.defaults({ ease: 'power3.out', duration: 1 })

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis = null
let tick = null

export function initLenis() {
  if (lenis) return lenis
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion(),
  })
  lenis.on('scroll', ScrollTrigger.update)
  tick = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return lenis
}

export function destroyLenis() {
  if (!lenis) return
  gsap.ticker.remove(tick)
  lenis.destroy()
  lenis = null
}

export const getLenis = () => lenis

// Smooth-scroll to an in-page anchor (#about) or the top (0).
export function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (lenis) lenis.scrollTo(el ?? 0, { duration: 1.6 })
  else if (el?.scrollIntoView) el.scrollIntoView({ behavior: 'smooth' })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

export { gsap, ScrollTrigger, SplitText, useGSAP }

// Shared reveal for section headings: lines rise out of a mask on enter.
export function revealHeading(el) {
  if (!el || prefersReducedMotion()) return
  SplitText.create(el, {
    type: 'lines',
    linesClass: 'ln',
    mask: 'lines',
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 105,
        stagger: 0.1,
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }),
  })
}
