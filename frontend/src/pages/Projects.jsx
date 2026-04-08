import linkbridge from '../assets/linkbridge.png'
import jpw from '../assets/jpw.png'
import food_delivery from '../assets/food-delivery.png'
import java_swing from '../assets/java-swing.png';
import fisar from '../assets/fisar.png'
import alertia from '../assets/alertia.png'
import {motion} from 'framer-motion';

const ProjectCard = ({stack, image, title, description, link, images}) => {
    return(
        <div className="w-96 lg:w-[32%] text-white font-poppins flex flex-col gap-1 relative">
          <div className="image-container relative w-full group">
            <img className='my-2 h-48 object-cover rounded-md w-full' src={image} alt="" />
            <a target='_blank' className='text-white absolute top-5/12 left-5/12 bg-stone-900/60 p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md' href={link}><i className="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;&nbsp;Link</a>
          </div>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-xs tracking-wide text-slate-200'>{description}</p>
        </div>
    )
}

const Projects = ({setSelectedTab}) => {
  return (
    <motion.div
    initial={{opacity: 0, y: -500}}
    animate={{opacity: 100, y: 1}}
    transition={{duration: 0.9}}
    className='py-10 bg-stone-900'>
      <div className='relative'>
        <p className='text-white text-center text-sm'>Check out my latest projects</p>
        <i onClick={() => setSelectedTab('home')} className="fa-solid fa-xmark text-white absolute right-6 -top-5 text-xl cursor-pointer"></i>
      </div>
        <h1 className='font-bold text-3xl text-white text-center'>My Projects</h1>
        <hr className='border-green-500 w-10 mx-auto my-3 border-2 hover:w-20 transition-all' />
        <div className='flex flex-wrap justify-start w-x gap-4 max-lg:justify-center px-10 max-md:px-6'>
        <ProjectCard 
          image={fisar} 
          title={'FiSAR'} 
          description={'Developed and maintained the frontend of FiSAR, a SaaS-based compliance platform for automating Subject Access Request (SAR) processing. Built user interfaces to support secure data aggregation, structured redaction workflows, and audit-ready delivery. Collaborated with cross-functional teams to enhance performance and usability, contributing to the reduction of SAR processing time from weeks to minutes while ensuring alignment with UK GDPR compliance standards.'}
          link={'https://staging.fisar.co.uk'} />
        <ProjectCard 
          image={alertia} 
          title={'Alertia'} 
          description={'Alertia is a multi-tenant guard management platform designed for Mexico’s REPSE compliance. It enables security companies to manage guards by storing fixed and SAT documents, generating monthly compliance reports, assigning guards to clients, and securely uploading and tracking all required documentation from a single system.'}
          link={'https://cumpleconrepse.com/'} />
        <ProjectCard 
          stack={'MERN Stack'} 
          image={linkbridge} 
          title={'LinkBridge'} 
          description={'An Innovative AI-Powered platform that connects student with industry professionals. Teachers can track their students final year projects progress. Key features includes, AI-Powered FYP ideas suggestion, NLP based peer review system, resource sharing, tracking and showcasing projects and real time communication.'} 
          link={'https://linkbridgeweb.vercel.app'} />
        <ProjectCard 
          stack={'MERN Stack'} 
          image={jpw}
          title={'JPW'} 
          description={'An UK Based Pressure Washer store built using MERN Stack. This platform helps customer to buy pressures online with secure payment integration using stripe.'} link={'https://github.com/mfurqanabbas20/JPW'}  />
        <ProjectCard 
          stack={'MERN Stack'} 
          image={food_delivery} 
          title={'Food Delivery Shop'} 
          description={'Online food store that enables customers to buy their favourite food, filter products based on category, place order and secure payment checkout for payment. Admin can manage products and change tracking status of products. '} 
          link={'https://github.com/mfurqanabbas20/Food-App'} />
        <ProjectCard 
          stack={'Java Swing'} 
          image={java_swing} 
          title={'Shop Management System'} 
          description={'Semester project that helps shop keepers to manage their shop effectively, managing products and customers. This system is built using java swing and mysql.'} 
          link={'https://github.com/mfurqanabbas20/Shop-Management-System'} />
         </div>
    </motion.div>
  )
}

export default Projects