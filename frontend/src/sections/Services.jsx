import { useRef } from 'react'
import { LuCheck } from 'react-icons/lu'
import { services, servicesLead } from '../data/content'
import { gsap, useGSAP, prefersReducedMotion, revealHeading } from '../lib/motion'
import { SectionHeader } from '../components/ui'

const themes = [
  { card: 'bg-ink text-paper', tick: 'bg-paper/10 text-signal', line: 'border-paper/15' },
  { card: 'bg-white text-ink', tick: 'bg-ink/5 text-signal', line: 'border-ink/10' },
  { card: 'bg-signal text-ink', tick: 'bg-ink/10 text-ink', line: 'border-ink/15' },
  { card: 'bg-graphite text-paper', tick: 'bg-paper/10 text-signal', line: 'border-paper/15' },
]

const Services = () => {
  const root = useRef(null)

  useGSAP(
    () => {
      revealHeading(root.current.querySelector('.sec-title'))
      if (prefersReducedMotion()) return

      // As each next card slides over, the previous one recedes
      const cards = gsap.utils.toArray('.svc-card')
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        const st = { trigger: next, start: 'top bottom', end: 'top 15%', scrub: true }
        gsap.to(card, { scale: 0.92, ease: 'none', scrollTrigger: st })
        gsap.to(card.querySelector('.svc-shade'), { opacity: 0.5, ease: 'none', scrollTrigger: { ...st } })
      })

      cards.forEach((card) => {
        gsap.from(card.querySelectorAll('.svc-point'), {
          y: 20,
          opacity: 0,
          stagger: 0.07,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: card, start: 'top 60%' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="services" ref={root} className="relative pb-24 md:pb-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionHeader
          eyebrow="Services"
          title="What I can do for you"
          lead={servicesLead}
          className="border-t border-ink/10 pt-10"
        />

        <div className="mt-16 md:mt-20">
          {services.map((service, i) => {
            const t = themes[i % themes.length]
            return (
              <article
                key={service.title}
                className={`svc-card sticky mb-6 origin-top overflow-hidden rounded-3xl md:mb-10 ${t.card}`}
                style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}
              >
                <div className="svc-shade pointer-events-none absolute inset-0 z-10 bg-ink opacity-0" />
                <div className="relative grid min-h-[44svh] grid-rows-[1fr_auto] gap-8 p-6 md:min-h-[48svh] md:p-12">
                  <h3 className="self-end text-[clamp(2.25rem,5.5vw,5rem)] font-semibold leading-[1] tracking-[-0.035em]">
                    {service.title}
                  </h3>

                  <ul className={`grid gap-x-8 border-t pt-6 sm:grid-cols-2 ${t.line}`}>
                    {service.points.map((point) => (
                      <li key={point} className={`svc-point flex items-start gap-3 border-b py-3.5 text-base leading-snug md:text-lg ${t.line}`}>
                        <span className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${t.tick}`}>
                          <LuCheck className="size-3.5" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
