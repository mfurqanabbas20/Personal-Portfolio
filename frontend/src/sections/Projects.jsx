import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { LuArrowUpRight, LuCheck } from 'react-icons/lu'
import { profile, projects, projectsLead } from '../data/content'
import { gsap, useGSAP, revealHeading } from '../lib/motion'
import Magnetic from '../components/Magnetic'
import { Roll, SectionHeader } from '../components/ui'

// Media area: screenshot, or a logo centred on white
const Cover = ({ project }) => {
  if (project.imageFit === 'contain')
    return (
      <div className="pj-img absolute inset-y-0 -left-[8%] flex h-full w-[116%] items-center justify-center bg-white">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`object-contain ${project.logoClass || 'h-1/2 w-auto max-w-[60%]'}`}
        />
      </div>
    )
  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="pj-img absolute inset-y-0 -left-[8%] h-full w-[116%] max-w-none object-cover"
    />
  )
}

const ProjectCard = ({ project }) => {
  const primary = project.live || project.github
  const Media = primary ? 'a' : 'div'
  const mediaProps = primary
    ? { href: primary, target: '_blank', rel: 'noreferrer', 'aria-label': `Open ${project.title}` }
    : {}

  return (
    <article className="pj-card group w-full shrink-0 rounded-3xl border border-white/70 bg-white/60 p-2.5 shadow-[0_40px_80px_-40px_rgba(14,14,14,0.3)] backdrop-blur-xl md:p-3 lg:w-[min(58vw,92svh)] xl:w-[min(50vw,92svh)]">
      <Media {...mediaProps} className="relative block aspect-[16/9] overflow-hidden rounded-2xl bg-bone">
        <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]">
          <Cover project={project} />
        </div>
      </Media>

      <div className="grid gap-4 px-2 pt-5 pb-3 md:grid-cols-12 md:px-3">
        <div className="md:col-span-5">
          <p className="label text-stone">{project.category}</p>
          <h3 className="mt-1.5 text-[clamp(1.75rem,2.4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4 md:col-span-7">
          <p className="text-[0.95rem] leading-relaxed text-ink/75">{project.description}</p>
          {project.highlights && (
            <ul className="flex flex-col gap-2 text-sm leading-snug text-ink/70 lg:[@media(max-height:900px)]:hidden">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <LuCheck className="mt-0.5 size-4 shrink-0 text-signal" strokeWidth={2.5} />
                  {h}
                </li>
              ))}
            </ul>
          )}
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md bg-ink/[0.06] px-2 py-1 text-xs font-medium text-ink/70">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2.5 pt-1 text-sm font-medium">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-ink py-2 pr-3 pl-4 text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                <Roll>Live site</Roll>
                <LuArrowUpRight className="size-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink/15 py-2 pr-4 pl-3 transition-colors hover:border-ink"
              >
                <FaGithub className="size-4" />
                <Roll>Source code</Roll>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const root = useRef(null)

  useGSAP(
    () => {
      revealHeading(root.current.querySelector('.sec-title'))

      const mm = gsap.matchMedia()

      // Background glows: slow ambient drift, plus a scroll-linked sweep
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('.pj-glow').forEach((glow, i) => {
          gsap.to(glow, {
            xPercent: gsap.utils.random(-25, 25),
            yPercent: gsap.utils.random(-20, 20),
            scale: gsap.utils.random(0.85, 1.2),
            duration: 9 + i * 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          })
        })
        gsap.to('.pj-glows', {
          xPercent: -18,
          rotate: 12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })

      // Desktop: pin the rail and translate it horizontally while scrolling vertically
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const track = root.current.querySelector('.pj-track')
        const distance = () => track.scrollWidth - window.innerWidth

        const slide = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.pj-pin',
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        gsap.to('.pj-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.pj-pin', start: 'top top', end: () => `+=${distance()}`, scrub: true },
        })

        gsap.utils.toArray('.pj-card').forEach((card) => {
          gsap.fromTo(
            card.querySelector('.pj-img'),
            { xPercent: 6 },
            {
              xPercent: -6,
              ease: 'none',
              scrollTrigger: { trigger: card, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true },
            },
          )
        })
      })

      // Mobile / tablet: simple rise-in per card
      mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('.pj-card, .pj-end').forEach((card) => {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="projects" ref={root} className="relative bg-paper pt-24 text-ink md:pt-36">
      {/* Ambient backdrop: blurred colour glows over a faint dot grid. Sticky so it
          stays in view for the whole section, including the pinned rail. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div className="pj-glows absolute inset-[-10%]">
            <div className="pj-glow absolute top-[8%] left-[6%] aspect-square w-[42vw] rounded-full bg-signal/30 blur-[110px]" />
            <div className="pj-glow absolute top-[40%] right-[4%] aspect-square w-[38vw] rounded-full bg-[#ffc9a3]/60 blur-[110px]" />
            <div className="pj-glow absolute bottom-[4%] left-[30%] aspect-square w-[34vw] rounded-full bg-[#c9dbff]/60 blur-[110px]" />
          </div>
          <div className="absolute inset-0 [background-image:radial-gradient(rgb(14_14_14/0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionHeader eyebrow="Selected work" title="Featured projects" lead={projectsLead} />
      </div>

      <div className="pj-pin relative z-10 overflow-hidden py-16 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0">
        <div className="pj-track flex flex-col gap-12 px-5 md:px-10 lg:w-max lg:flex-row lg:items-center lg:gap-[4vw] lg:pr-[10vw] min-[1680px]:pl-[calc((100vw-1600px)/2+2.5rem)]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          <div className="pj-end flex shrink-0 flex-col items-start justify-center gap-5 lg:w-[24vw]">
            <h3 className="text-[clamp(1.75rem,2.4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              More on GitHub
            </h3>
            <p className="max-w-xs leading-relaxed text-ink/70">
              Explore more of my work and source code on my GitHub profile.
            </p>
            <Magnetic>
              <a
                href={`https://github.com/${profile.githubUser}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 rounded-full bg-ink py-3.5 pr-5 pl-5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                <FaGithub className="size-4" />
                <Roll>Browse all projects</Roll>
                <LuArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mx-5 mt-8 hidden h-px bg-ink/15 md:mx-10 lg:block">
          <div className="pj-progress h-full origin-left scale-x-0 bg-signal" />
        </div>
      </div>
    </section>
  )
}

export default Projects
