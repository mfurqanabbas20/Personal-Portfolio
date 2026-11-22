import { useEffect, useRef, useState } from 'react'
import cv from '../assets/CV_Furqan.pdf'
import logo from '../assets/logo-nav.png'
import { navLinks, socials } from '../data/content'
import { gsap, ScrollTrigger, useGSAP, getLenis, scrollToTarget, prefersReducedMotion } from '../lib/motion'
import { LuDownload, LuMenu, LuX } from 'react-icons/lu'
import { Roll, SocialLinks } from './ui'

const go = (e, href, after) => {
  e.preventDefault()
  after?.()
  // The open menu stops Lenis (html gets overflow: clip), so resume before scrolling
  getLenis()?.start()
  scrollToTarget(href)
}

const Navbar = ({ ready }) => {
  const header = useRef(null)
  const menu = useRef(null)
  const menuTl = useRef(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Intro + hide-on-scroll-down / show-on-scroll-up
  useGSAP(
    () => {
      if (!ready) return
      if (!prefersReducedMotion())
        gsap.from('.nav-item', { yPercent: 120, opacity: 0, stagger: 0.06, duration: 1.2, ease: 'expo.out', delay: 0.5 })

      const show = gsap
        .from(header.current, { yPercent: -110, paused: true, duration: 0.5, ease: 'power3.out' })
        .progress(1)
      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          setScrolled(self.scroll() > 40)
          if (self.scroll() < 120 || self.direction === -1) show.play()
          else show.reverse()
        },
      })
    },
    { dependencies: [ready], scope: header },
  )

  // Mobile overlay timeline, built once and played/reversed
  useGSAP(
    () => {
      menuTl.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { display: 'flex' })
        .fromTo(
          menu.current,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' },
        )
        .from('.menu-link', { yPercent: 110, stagger: 0.06, duration: 0.9, ease: 'expo.out' }, '-=0.35')
        .from('.menu-foot', { opacity: 0, y: 20, duration: 0.6 }, '-=0.6')
    },
    { scope: menu },
  )

  // Only react to real toggles (StrictMode re-runs effects on mount)
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === open) return
    prevOpen.current = open
    const lenis = getLenis()
    if (open) {
      lenis?.stop()
      menuTl.current?.timeScale(1).play()
    } else {
      lenis?.start()
      menuTl.current?.timeScale(1.6).reverse()
    }
  }, [open])

  return (
    <>
      <header
        ref={header}
        className={`fixed inset-x-0 top-0 z-[70] border-b transition-colors duration-500 ${
          open
            ? 'border-transparent bg-transparent text-paper'
            : scrolled
              ? 'border-ink/10 bg-paper/80 text-ink backdrop-blur-md'
              : 'border-transparent bg-transparent text-ink'
        }`}
      >
        <nav className="mx-auto grid h-16 max-w-[1600px] grid-cols-2 items-center px-5 md:h-20 md:grid-cols-12 md:px-10">
          <div className="overflow-hidden md:col-span-3">
            <a
              href="#home"
              onClick={(e) => go(e, '#home', () => setOpen(false))}
              className="nav-item block"
              aria-label="Furqan Abbas, home"
            >
              <img src={logo} alt="Furqan Abbas" className="h-11 w-auto md:h-14" />
            </a>
          </div>

          <ul className="hidden items-center gap-7 overflow-hidden text-[0.95rem] md:col-span-9 md:flex md:justify-end">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} onClick={(e) => go(e, link.href)}>
                  <Roll>{link.label}</Roll>
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a
                href={cv}
                download
                className="group flex items-center gap-2 rounded-full bg-ink py-2.5 pr-4 pl-5 text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                <Roll>Resume</Roll>
                <LuDownload className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            </li>
          </ul>

          <div className="flex justify-end overflow-hidden md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`nav-item flex size-11 items-center justify-center rounded-full border transition-colors ${
                open ? 'border-paper/20' : 'border-ink/15'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        ref={menu}
        className="fixed inset-0 z-[60] hidden flex-col justify-between bg-ink px-5 pt-28 pb-8 text-paper md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href} className="overflow-hidden border-b border-paper/10">
              <a
                href={link.href}
                onClick={(e) => go(e, link.href, () => setOpen(false))}
                className="menu-link block py-4 text-[11vw] font-semibold leading-none tracking-[-0.035em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot flex items-center justify-between gap-4">
          <SocialLinks items={socials} tone="dark" />
          <a href={cv} download className="flex items-center gap-2 rounded-full bg-signal py-3 pr-4 pl-5 text-sm font-medium text-ink">
            Resume
            <LuDownload className="size-4" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
