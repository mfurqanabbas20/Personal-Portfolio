import { FaFacebookF, FaGithub, FaLinkedinIn, FaUpwork } from 'react-icons/fa6'

// Text that rolls up to a duplicate of itself on hover (see .roll in index.css)
export const Roll = ({ children }) => (
  <span className="roll">
    <span>{children}</span>
    <span aria-hidden="true">{children}</span>
  </span>
)

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Upwork: FaUpwork,
  Facebook: FaFacebookF,
}

// Round icon buttons for social profiles
export const SocialLinks = ({ items, className = '', tone = 'light' }) => (
  <ul className={`flex items-center gap-2 ${className}`}>
    {items.map((s) => {
      const Icon = socialIcons[s.label]
      return (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className={`flex size-10 items-center justify-center rounded-full border transition-colors duration-300 ${
              tone === 'dark'
                ? 'border-paper/15 text-paper hover:border-signal hover:bg-signal hover:text-ink'
                : 'border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper'
            }`}
          >
            <Icon className="size-4" />
          </a>
        </li>
      )
    })}
  </ul>
)

// One heading treatment for every section: small eyebrow, h2, optional lead.
export const SectionHeader = ({ eyebrow, title, lead, tone = 'light', className = '' }) => (
  <div className={`grid gap-y-6 md:grid-cols-12 md:gap-x-5 ${className}`}>
    <p className={`label md:col-span-3 md:pt-3 ${tone === 'dark' ? 'text-fog' : 'text-stone'}`}>{eyebrow}</p>
    <div className="md:col-span-9">
      <h2 className="sec-title max-w-[18ch] text-[clamp(2.5rem,5.6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
        {title}
      </h2>
      {lead && (
        <p className={`mt-6 max-w-xl text-lg leading-relaxed ${tone === 'dark' ? 'text-paper/70' : 'text-ink/70'}`}>
          {lead}
        </p>
      )}
    </div>
  </div>
)
