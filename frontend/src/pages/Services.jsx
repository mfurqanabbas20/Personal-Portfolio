import { motion } from 'framer-motion'

const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'Frontend Development',
    description:
      'Crafting responsive, pixel-perfect interfaces with React.js and Next.js, styled using Tailwind CSS for a fast, modern user experience.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend & API Development',
    description:
      'Building secure, scalable REST APIs and server-side logic with Node.js and Express — authentication, data flow and clean business logic.',
    tags: ['Node.js', 'Express', 'REST'],
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full-Stack Web Apps',
    description:
      'Delivering end-to-end MERN stack applications, from database design to deployment, that solve real-world problems with clean architecture.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Database Design',
    description:
      'Designing efficient schemas and queries across NoSQL and SQL systems, ensuring data integrity, performance and scalability.',
    tags: ['MongoDB', 'SQL Server', 'MySQL'],
  },
  {
    icon: 'fa-brands fa-docker',
    title: 'Cloud & DevOps',
    description:
      'Containerizing applications with Docker and exploring cloud computing to ship reliable, reproducible and collaborative deployments.',
    tags: ['Docker', 'Git', 'CI/CD'],
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Responsive UI/UX',
    description:
      'Translating ideas into intuitive, mobile-first designs that look and feel great on every screen size and every device.',
    tags: ['UI/UX', 'Mobile-first', 'Accessibility'],
  },
]

const ServiceCard = ({ icon, title, description, tags, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group w-full sm:w-[46%] lg:w-[31%] bg-[#292828] rounded-xl p-6 border border-transparent hover:border-green-500 hover:-translate-y-2 transition-all duration-300 font-poppins"
  >
    <div className="w-14 h-14 rounded-full bg-green-700/20 flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
      <i className={`${icon} text-green-500 group-hover:text-white text-2xl transition-colors duration-300`}></i>
    </div>
    <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
    <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] text-green-400 bg-green-500/10 border border-green-500/30 rounded-full px-2.5 py-0.5"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
)

const Services = ({ setSelectedTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.9 }}
      className="py-10 bg-stone-900"
    >
      <div className="relative">
        <p className="text-white text-center text-sm">What I can do for you</p>
        <i
          onClick={() => setSelectedTab('home')}
          className="fa-solid fa-xmark text-white absolute right-6 -top-5 text-xl cursor-pointer"
        ></i>
      </div>
      <h1 className="font-bold text-3xl text-white text-center">My Services</h1>
      <hr className="border-green-500 w-10 mx-auto my-3 border-2 hover:w-20 transition-all" />
      <div className="flex flex-wrap justify-center gap-5 px-10 max-md:px-6 pt-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-white/70 text-sm mb-3">Have a project in mind? Let's build it together.</p>
        <button
          onClick={() => setSelectedTab('contact')}
          className="bg-green-700 hover:bg-green-600 text-white px-8 rounded-full h-11 font-poppins text-sm cursor-pointer transition-colors"
        >
          Let's Talk
        </button>
      </div>
    </motion.div>
  )
}

export default Services
