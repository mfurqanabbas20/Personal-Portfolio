import { useRef } from 'react'
import { LuArrowUp, LuMail } from 'react-icons/lu'
import logo from '../assets/logo-footer.png'
import { navLinks, profile, socials } from '../data/content'
import { gsap, SplitText, useGSAP, prefersReducedMotion, scrollToTarget } from '../lib/motion'
import { Roll, SocialLinks } from '../components/ui'

const Footer = () => {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      SplitText.create('.ft-mark', {
        type: 'chars',
        charsClass: 'ch',
        mask: 'chars',
        onSplit: (self) =>
          gsap.from(self.chars, {
            yPercent: 100,
            stagger: 0.05,
            duration: 1.6,
            ease: 'expo.out',
            scrollTrigger: { trigger: '.ft-mark', start: 'top 95%' },
          }),
      })

      gsap.from('.ft-col', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ft-cols', start: 'top 90%' },
      })
    },
    { scope: root },
  )

  return (
    <footer ref={root} className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="ft-cols grid grid-cols-2 gap-y-12 border-t border-paper/10 pt-12 md:grid-cols-12 md:gap-x-5">
          <div className="ft-col col-span-2 md:col-span-4">
            <img src={logo} alt="Furqan Abbas" className="h-20 w-auto" />
            <p className="mt-5 max-w-xs leading-relaxed text-paper/60">
              Full-stack software engineer building scalable, modern web applications. Always learning, always shipping.
            </p>
          </div>

          <div className="ft-col md:col-span-2 md:col-start-6">
            <p className="label mb-4 text-fog">Menu</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToTarget(link.href)
                    }}
                    className="text-paper/85 hover:text-signal"
                  >
                    <Roll>{link.label}</Roll>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col col-span-2 md:col-span-4">
            <p className="label mb-4 text-fog">Get in touch</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2.5 text-paper/85 hover:text-signal">
              <LuMail className="size-4 shrink-0" />
              <Roll>{profile.email}</Roll>
            </a>
            <SocialLinks items={socials} tone="dark" className="mt-5" />
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="mt-20 select-none px-3 md:px-6" aria-hidden="true">
        <p className="ft-mark whitespace-nowrap text-center text-[21vw] font-semibold uppercase leading-[0.8] tracking-[-0.06em] text-paper/95">
          Furqan<span className="ml-[0.04em] inline-block size-[0.13em] rounded-full bg-signal" />
        </p>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 border-t border-paper/10 px-5 py-6 md:px-10">
        <p className="label text-fog">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <button
          onClick={() => scrollToTarget(0)}
          className="label group flex items-center gap-2 text-paper/85 hover:text-signal"
        >
          <Roll>Back to top</Roll>
          <span className="flex size-8 items-center justify-center rounded-full border border-paper/15 transition-colors group-hover:border-signal">
            <LuArrowUp className="size-4" />
          </span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
