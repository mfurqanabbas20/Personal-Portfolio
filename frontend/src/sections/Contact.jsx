import { useRef, useState } from 'react'
import { LuChevronDown, LuLoaderCircle, LuMail, LuPhone, LuSend } from 'react-icons/lu'
import { toast } from 'react-toastify'
import { contactServices, profile, socials } from '../data/content'
import { gsap, useGSAP, prefersReducedMotion, revealHeading } from '../lib/motion'
import Magnetic from '../components/Magnetic'
import { Roll, SectionHeader, SocialLinks } from '../components/ui'

const empty = { fullname: '', email: '', subject: '', message: '' }
const toastOptions = { position: 'bottom-left', autoClose: 2500, theme: 'dark' }

const Field = ({ label, children }) => (
  <label className="ct-field block">
    <span className="label mb-2 block text-paper/80">{label}</span>
    {children}
  </label>
)

const Contact = () => {
  const root = useRef(null)
  const [data, setData] = useState(empty)
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!data.fullname || !data.email || !data.subject || !data.message) {
      toast.error('Complete all fields', toastOptions)
      return
    }

    setIsSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (res.ok && result.success) {
        toast.success('Message sent successfully', toastOptions)
        setData(empty)
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.', toastOptions)
      }
    } catch {
      toast.error('Could not reach the server. Please try again later.', toastOptions)
    } finally {
      setIsSending(false)
    }
  }

  useGSAP(
    () => {
      revealHeading(root.current.querySelector('.sec-title'))
      if (prefersReducedMotion()) return

      gsap.from('.ct-field', {
        y: 30,
        opacity: 0,
        stagger: 0.07,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ct-form', start: 'top 80%' },
      })
      gsap.from('.ct-info > *', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.ct-info', start: 'top 85%' },
      })
    },
    { scope: root },
  )

  return (
    <section id="contact" ref={root} className="relative bg-ink pt-24 pb-24 text-paper md:pt-36 md:pb-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionHeader
          tone="dark"
          eyebrow="Contact"
          title="Let's work together."
          lead="Got a project in mind? Let's build something impactful together — whether it's your product, your website, or your next big idea. I usually reply within a day."
        />

        <div className="mt-16 grid gap-y-14 md:mt-24 md:grid-cols-12 md:gap-x-5">
          <div className="ct-info flex flex-col gap-4 md:col-span-4 md:col-start-1">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-paper/10 p-4 transition-colors hover:border-signal"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper/[0.06] text-signal">
                <LuMail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="label block text-fog">Email</span>
                <span className="block truncate text-lg">{profile.email}</span>
              </span>
            </a>
            <a
              href={profile.phoneHref}
              className="group flex items-center gap-4 rounded-2xl border border-paper/10 p-4 transition-colors hover:border-signal"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper/[0.06] text-signal">
                <LuPhone className="size-5" />
              </span>
              <span>
                <span className="label block text-fog">Phone</span>
                <span className="block text-lg">{profile.phone}</span>
              </span>
            </a>
            <div className="pt-4">
              <p className="label mb-3 text-fog">Find me online</p>
              <SocialLinks items={socials} tone="dark" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="ct-form flex flex-col gap-5 rounded-3xl border border-paper/10 bg-graphite p-5 md:col-span-7 md:col-start-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input value={data.fullname} onChange={handleChange} className="field" placeholder="John Doe" type="text" name="fullname" autoComplete="name" />
              </Field>
              <Field label="Email">
                <input value={data.email} onChange={handleChange} className="field" placeholder="john@company.com" type="email" name="email" autoComplete="email" />
              </Field>
            </div>

            <Field label="Service needed">
              <div className="relative">
                <select
                  value={data.subject}
                  onChange={handleChange}
                  name="subject"
                  className={`field cursor-pointer appearance-none pr-10 ${data.subject === '' ? 'text-paper/35' : ''}`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {contactServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <LuChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-paper/50" />
              </div>
            </Field>

            <Field label="Message">
              <textarea
                value={data.message}
                onChange={handleChange}
                className="field h-40 resize-none"
                placeholder="What can I help you with..."
                name="message"
                data-lenis-prevent
              />
            </Field>

            <div className="ct-field pt-2">
              <Magnetic strength={0.25}>
                <button
                  type="submit"
                  disabled={isSending}
                  className="group flex items-center gap-2.5 rounded-full bg-signal py-3.5 pr-5 pl-6 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Roll>{isSending ? 'Sending…' : 'Send message'}</Roll>
                  {isSending ? (
                    <LuLoaderCircle className="size-4 animate-spin" />
                  ) : (
                    <LuSend className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
