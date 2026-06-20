import linkbridge from '../assets/linkbridge.png'
import jpw from '../assets/jpw.png'
import food_delivery from '../assets/food-delivery.png'
import java_swing from '../assets/java-swing.png'
import sql from '../assets/sql-server.jpg'
import { motion } from 'framer-motion'

const projects = [
  {
    image: linkbridge,
    title: 'LinkBridge',
    featured: true,
    description:
      'An innovative AI-powered platform that connects students with industry professionals. Teachers can track final year project progress, with AI-driven FYP idea suggestions, an NLP-based peer review system, resource sharing and real-time communication.',
    stack: ['MongoDB', 'Express', 'React', 'Node', 'AI / NLP'],
    live: 'https://linkbridgeweb.vercel.app',
  },
  {
    image: jpw,
    title: 'JPW',
    description:
      'A UK-based pressure washer store built with the MERN stack. Customers can browse and buy products online with a secure Stripe payment integration.',
    stack: ['MongoDB', 'Express', 'React', 'Node', 'Stripe'],
    github: 'https://github.com/mfurqanabbas20/JPW',
  },
  {
    image: food_delivery,
    title: 'Food Delivery Shop',
    description:
      'An online food store where customers browse by category, place orders and pay securely at checkout. Admins manage products and update order tracking status.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/mfurqanabbas20/Food-App',
  },
  {
    image: sql,
    title: 'Pharmaceutical System',
    description:
      'A semester project modelling a complete pharmacy database with relational schema design, queries and stored procedures using MS SQL Server.',
    stack: ['SQL', 'MS SQL Server'],
    github: 'https://github.com/mfurqanabbas20',
  },
  {
    image: java_swing,
    title: 'Shop Management System',
    description:
      'A desktop application that helps shopkeepers manage their inventory, products and customers efficiently. Built with Java Swing and a MySQL backend.',
    stack: ['Java Swing', 'MySQL'],
    github: 'https://github.com/mfurqanabbas20/Shop-Management-System',
  },
]

const ProjectCard = ({ image, title, description, stack, live, github, featured, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
    className="group w-full sm:w-[46%] lg:w-[31%] bg-[#292828] rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-green-500/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-900/30 transition-all duration-300 font-poppins"
  >
    <div className="relative overflow-hidden h-52">
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
      {featured && (
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-green-600 text-white px-2.5 py-1 rounded-full font-semibold">
          ⭐ Featured
        </span>
      )}
      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm px-4 py-2 rounded-full transition-colors"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm px-4 py-2 rounded-full transition-colors"
          >
            <i className="fa-brands fa-github"></i> Code
          </a>
        )}
      </div>
    </div>
    <div className="p-5 flex flex-col gap-2 flex-1">
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <p className="text-xs text-white/70 leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5 pt-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] text-green-400 bg-green-500/10 border border-green-500/30 rounded-full px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Projects = ({ setSelectedTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.9 }}
      className="py-10 bg-stone-900"
    >
      <div className="relative">
        <p className="text-white text-center text-sm">Check out my latest projects</p>
        <i
          onClick={() => setSelectedTab('home')}
          className="fa-solid fa-xmark text-white absolute right-6 -top-5 text-xl cursor-pointer"
        ></i>
      </div>
      <h1 className="font-bold text-3xl text-white text-center">My Projects</h1>
      <hr className="border-green-500 w-10 mx-auto my-3 border-2 hover:w-20 transition-all" />
      <div className="flex flex-wrap justify-center gap-5 px-10 max-md:px-6 pt-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
