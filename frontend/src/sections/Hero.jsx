import { useRef } from 'react'
import { LuArrowDown, LuArrowUpRight } from 'react-icons/lu'
import portrait from '../assets/about_img.png'
import { profile, socials } from '../data/content'
import { gsap, SplitText, useGSAP, prefersReducedMotion, scrollToTarget } from '../lib/motion'
import Magnetic from '../components/Magnetic'
import { Roll, SocialLinks } from '../components/ui'

const jump = (target) => (e) => {
  e.preventDefault()
  scrollToTarget(target)
}

const Hero = ({ ready }) => {
  const root = useRef(null)

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return

      const splits = gsap.utils
        .toArray('.hero-word')
        .map((el) => SplitText.create(el, { type: 'chars', charsClass: 'ch', mask: 'chars' }))

      const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.6 } })
      tl.from(splits[0].chars, { yPercent: 105, stagger: 0.045 })
        .from(splits[1].chars, { yPercent: 105, stagger: 0.045 }, 0.12)
        .from('.hero-photo', { scale: 0, rotate: -120, duration: 1.8 }, 0.25)
        .from('.hero-fade', { y: 24, opacity: 0, stagger: 0.07, duration: 1.2 }, 0.6)

      // Scroll-out: the two name lines drift apart, the portrait spins away
      const out = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      out.to('.hero-line-1', { xPercent: -12, ease: 'none' }, 0)
        .to('.hero-line-2', { xPercent: 10, ease: 'none' }, 0)
        .to('.hero-photo', { rotate: 200, scale: 0.6, ease: 'none' }, 0)
        .to('.hero-inner', { yPercent: 18, opacity: 0.2, ease: 'none' }, 0)
    },
    { dependencies: [ready], scope: root },
  )

  return (
    <section id="home" ref={root} className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="hero-inner mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between px-5 pt-24 pb-8 md:px-10 md:pt-28 md:pb-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="hero-fade label inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper/60 px-4 py-2">
            <span className="dot-ping relative inline-block size-2 rounded-full bg-live" />
            Available for work
          </span>
          <p className="hero-fade label hidden text-stone md:block">{profile.role}</p>
        </div>

        {/* Name */}
        <h1 className="my-10 select-none font-semibold uppercase leading-[0.82] tracking-[-0.055em] text-[clamp(4.25rem,19vw,19rem)] md:my-0 md:text-[clamp(4rem,17.5vw,18rem)]">
          <span className="sr-only">
            {profile.name}, {profile.role}
          </span>
          <span aria-hidden="true" className="hero-line-1 flex items-center gap-[0.04em]">
            <span className="hero-word">Furqan</span>
            <img
              src={portrait}
              alt=""
              className="hero-photo ml-[0.04em] inline-block size-[0.74em] shrink-0 rounded-full object-cover"
            />
          </span>
          <span aria-hidden="true" className="hero-line-2 flex justify-end">
            <span className="hero-word">Abbas</span>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-5">
          <p className="hero-fade max-w-md text-lg leading-relaxed text-ink/80 md:col-span-5">
            Hi, I'm {profile.name}. {profile.intro}
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-3 md:col-span-4">
            <Magnetic>
              <a
                href="#contact"
                onClick={jump('#contact')}
                className="group flex items-center gap-2.5 rounded-full bg-ink py-3.5 pr-5 pl-6 text-[0.95rem] font-medium text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                <Roll>Let's work together</Roll>
                <LuArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                onClick={jump('#projects')}
                className="group flex items-center gap-2.5 rounded-full border border-ink/20 py-3.5 pr-5 pl-6 text-[0.95rem] font-medium transition-colors hover:border-ink"
              >
                <Roll>View projects</Roll>
                <LuArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </div>

          <SocialLinks items={socials} className="hero-fade md:col-span-3 md:justify-end" />
        </div>
      </div>
    </section>
  )
}

export default Hero
