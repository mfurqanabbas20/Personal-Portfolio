import { useRef } from 'react'
import { LuBriefcaseBusiness, LuCalendar } from 'react-icons/lu'
import { experience, experienceLead } from '../data/content'
import { gsap, useGSAP, prefersReducedMotion, revealHeading } from '../lib/motion'
import { SectionHeader } from '../components/ui'

const Experience = () => {
  const root = useRef(null)

  useGSAP(
    () => {
      revealHeading(root.current.querySelector('.sec-title'))
      if (prefersReducedMotion()) return

      // Progress rail that fills as you read through the roles
      gsap.fromTo(
        '.exp-rail',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.exp-list', start: 'top 70%', end: 'bottom 70%', scrub: true },
        },
      )

      gsap.utils.toArray('.exp-row').forEach((row) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 80%' } })
        tl.from(row.querySelector('.exp-rule'), { scaleX: 0, transformOrigin: 'left', duration: 1.4, ease: 'expo.inOut' })
          .from(row.querySelectorAll('.exp-fade'), { y: 30, opacity: 0, stagger: 0.07, duration: 1.1, ease: 'expo.out' }, 0.3)
      })
    },
    { scope: root },
  )

  return (
    <section id="experience" ref={root} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionHeader eyebrow="Experience" title="Where I've worked" lead={experienceLead} />

        <div className="exp-list relative mt-16 md:mt-24">
          <div className="absolute top-0 bottom-0 -left-3 hidden w-px bg-ink/10 md:-left-5 md:block">
            <div className="exp-rail h-full w-full origin-top bg-signal" />
          </div>

          {experience.map((job) => (
            <article key={job.name} className="exp-row relative py-10 md:py-12">
              <div className="exp-rule absolute inset-x-0 top-0 h-px bg-ink/80" />
              <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-5">
                <p className="exp-fade label flex items-center gap-2 text-stone md:col-span-3 md:items-start">
                  <LuCalendar className="size-4 shrink-0 md:mt-0.5" />
                  {job.date}
                </p>
                <div className="md:col-span-4">
                  <h3 className="exp-fade text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1] tracking-[-0.035em]">
                    {job.name}
                  </h3>
                  <p className="exp-fade mt-3 flex items-center gap-2 text-lg font-medium text-stone">
                    <LuBriefcaseBusiness className="size-4 shrink-0" />
                    {job.role}
                  </p>
                </div>
                <ul className="flex flex-col md:col-span-5">
                  {job.description.map((item) => (
                    <li key={item} className="exp-fade flex gap-3 border-b border-ink/10 py-3 leading-relaxed text-ink/80 first:pt-0">
                      <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="h-px w-full bg-ink/80" />
        </div>
      </div>
    </section>
  )
}

export default Experience
