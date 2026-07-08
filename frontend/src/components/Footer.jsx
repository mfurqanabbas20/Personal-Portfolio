const GITHUB_USER = 'mfurqanabbas20'

const statsCard = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=22c55e&icon_color=22c55e&text_color=ffffff&ring_color=22c55e`
const topLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&hide_border=true&bg_color=00000000&title_color=22c55e&text_color=ffffff&langs_count=8`

const quickLinks = [
  { label: 'About', tab: 'about' },
  { label: 'Work Experience', tab: 'workExperience' },
  { label: 'Services', tab: 'services' }, 
  { label: 'Projects', tab: 'projects' },
  { label: 'Contact', tab: 'contact' },
]

const socials = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/muhammad-furqan-abbas-870125233' },
  { icon: 'fa-brands fa-github', href: 'https://github.com/mfurqanabbas20' },
  { icon: 'fa-brands fa-upwork', href: 'https://www.upwork.com/freelancers/~017100bad51363e86d' },
  { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/malikmuhammadfurqan.abbas' },
]

const Footer = ({ setSelectedTab }) => {
  return (
    <footer className="bg-stone-900 border-t border-white/10 text-white font-poppins px-10 max-md:px-6 pt-12 pb-6">
      {/* GitHub activity */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-2xl text-white">My GitHub Activity</h2>
        <hr className="border-green-500 w-10 mx-auto my-3 border-2" />
        <p className="text-white/60 text-sm mb-6">A live snapshot of what I've been building.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">
            <img
              className="rounded-lg bg-[#292828] p-3 w-[400px] max-w-full hover:scale-[1.02] transition-transform"
              src={statsCard}
              alt="GitHub stats"
              loading="lazy"
            />
          </a>
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">
            <img
              className="rounded-lg bg-[#292828] p-3 w-[320px] max-w-full hover:scale-[1.02] transition-transform"
              src={topLangs}
              alt="Most used languages"
              loading="lazy"
            />
          </a>
        </div>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-sm text-green-400 hover:text-green-300 transition-colors"
        >
          <i className="fa-brands fa-github"></i> View full profile on GitHub
        </a>
      </div>

      {/* Bottom columns */}
      <div className="flex flex-wrap justify-between gap-8 border-t border-white/10 pt-8">
        <div className="w-full sm:w-[30%]">
          <h3 className="text-xl font-bold mb-2">
            Muhammad Furqan <span className="text-green-500">Abbas</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Full Stack Software Engineer building scalable, modern web applications. Always learning,
            always shipping.
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.tab}>
                <button
                  onClick={() => setSelectedTab(link.tab)}
                  className="text-white/60 hover:text-green-400 text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-auto">
          <h3 className="text-md font-semibold mb-3">Connect</h3>
          <div className="flex items-center gap-4 text-lg">
            {socials.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-green-500 transition-colors"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-4">
            <i className="fa-solid fa-envelope text-green-500 mr-2"></i>
            mfurqanabbas20@gmail.com
          </p>
        </div>
      </div>

      <hr className="border-white/10 my-5" />
      <p className="text-center text-white/50 text-xs">
        © 2026 Muhammad Furqan Abbas.
      </p>
    </footer>
  )
}

export default Footer
