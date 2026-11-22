import { useRef } from 'react'
import { LuDownload, LuMail, LuPhone } from 'react-icons/lu'
import portrait from '../assets/abou_img.jpg'
import cv from '../assets/CV_Furqan.pdf'
import { about, profile, skills, stats } from '../data/content'
import { gsap, SplitText, useGSAP, prefersReducedMotion } from '../lib/motion'
import Magnetic from '../components/Magnetic'
import { Roll } from '../components/ui'

const About = () => {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // Statement: words fill in as you scroll through it
      SplitText.create('.about-statement', {
        type: 'words',
        autoSplit: true,
        onSplit: (self) =>
          gsap.fromTo(
            self.words,
            { opacity: 0.15 },
            {
              opacity: 1,
              stagger: 0.1,
              ease: 'none',
              scrollTrigger: { trigger: '.about-statement', start: 'top 80%', end: 'bottom 45%', scrub: true },
            },
          ),
      })

      // Portrait: clip-path wipe in, inner image parallax
      gsap.fromTo(
        '.about-frame',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.6,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: '.about-frame', start: 'top 80%' },
        },
      )
      gsap.fromTo(
        '.about-img',
        { yPercent: -10, scale: 1.2 },
        {
          yPercent: 10,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: { trigger: '.about-frame', start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )

      SplitText.create('.about-body', {
        type: 'lines',
        linesClass: 'ln',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 100,
            stagger: 0.08,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: { trigger: '.about-body', start: 'top 85%' },
          }),
      })

      gsap.utils.toArray('.stat-num').forEach((el) => {
        const end = Number(el.dataset.end)
        const obj = { v: 0 }
        el.textContent = '0'
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => (el.textContent = Math.round(obj.v)),
        })
      })

      gsap.from('.stat-rule', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.4,
        stagger: 0.12,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: '.stats', start: 'top 85%' },
      })

      gsap.from('.skill-tile', {
        y: 30,
        opacity: 0,
        stagger: 0.03,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.skills-grid', start: 'top 88%' },
      })
    },
    { scope: root },
  )

  return (
    <section id="about" ref={root} className="relative pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-5">
          <p className="label text-stone md:col-span-3 md:pt-3">About me</p>
          <h2 className="about-statement text-[clamp(1.9rem,4vw,4rem)] font-medium leading-[1.12] tracking-[-0.03em] md:col-span-9">
            {about.statement}
          </h2>
        </div>

        <div className="mt-20 grid gap-y-14 md:mt-28 md:grid-cols-12 md:gap-x-5">
          <figure className="md:col-span-5">
            <div className="about-frame relative aspect-[4/5] overflow-hidden rounded-2xl bg-bone">
              <img
                src={portrait}
                alt={profile.name}
                className="about-img absolute inset-0 h-full w-full object-cover object-[46%_center] grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
            </div>
          </figure>

          <div className="flex flex-col gap-12 md:col-span-6 md:col-start-7">
            <p className="about-body text-lg leading-relaxed text-ink/80 md:text-xl">{about.body}</p>

            <div className="stats grid grid-cols-3 gap-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-rule mb-4 h-px w-full bg-ink/80" />
                  <p className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.04em]">
                    <span className="stat-num" data-end={s.end}>
                      {s.end}
                    </span>
                    {s.suffix}
                  </p>
                  <p className="label mt-3 text-stone">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={profile.phoneHref} className="group flex items-center gap-3 hover:text-signal">
                    <span className="flex size-9 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-signal">
                      <LuPhone className="size-4" />
                    </span>
                    <Roll>{profile.phone}</Roll>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 hover:text-signal">
                    <span className="flex size-9 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-signal">
                      <LuMail className="size-4" />
                    </span>
                    <Roll>{profile.email}</Roll>
                  </a>
                </li>
              </ul>
              <Magnetic className="self-start sm:self-auto">
                <a
                  href={cv}
                  download
                  className="group flex items-center gap-2.5 rounded-full bg-ink py-3.5 pr-5 pl-6 text-[0.95rem] font-medium text-paper transition-colors hover:bg-signal hover:text-ink"
                >
                  <Roll>Download CV</Roll>
                  <LuDownload className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
            </div>

            <div>
              <p className="label mb-4 text-stone">Tools &amp; technologies</p>
              <ul className="skills-grid grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-6">
                {skills.map((s) => (
                  <li
                    key={s.name}
                    className="skill-tile group relative flex aspect-square flex-col items-center justify-center bg-paper transition-colors duration-500 hover:bg-white"
                    title={s.name}
                  >
                    <img
                      src={s.icon}
                      alt=""
                      className="size-8 object-contain transition-transform duration-500 group-hover:-translate-y-2.5 [@media(hover:none)]:-translate-y-2.5"
                    />
                    <span className="absolute bottom-2.5 text-xs font-medium text-stone opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
