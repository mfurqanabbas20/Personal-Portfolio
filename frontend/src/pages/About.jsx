import about_img from '../assets/about_img.png'
import {motion} from 'framer-motion'
import cv from '../../src/assets/CV_Furqan.pdf';
import SkillsSection from '../components/SkillsSection';


const About = ({setSelectedTab}) => {

  return (
    <motion.div
    initial={{opacity: 0, y: -500}}
    animate={{opacity: 100, y: 1}}
    transition={{duration: 0.9}}
    className='py-8 bg-stone-900'>
      <div className='relative'>
        <p className='text-white text-center text-sm'>Get to know me</p>
        <i onClick={() => setSelectedTab('home')} className="fa-solid fa-xmark text-white absolute right-6 -top-5 text-xl cursor-pointer"></i>
      </div>
        <h1 className='font-bold text-3xl text-white text-center'>About Me</h1>
        <hr className='border-green-500 w-10 mx-auto my-3 border-2 hover:w-20 transition-all' />
        <div className='flex pt-6 justify-between px-10 max-md:flex-wrap max-md:px-6'>
          <div>
          </div>
            <div className="image-container w-3/12 max-md:w-full">
              <img className='object-cover rounded-lg' src={about_img} alt=""  />
            </div>
            <div className="about-content-container w-7/12 flex flex-col gap-2 max-md:w-full">
                <p className='text-xl text-green-600 font-semibold font-poppins'>Who am i?</p>
                <p className='text-2xl font-bold font-poppins text-white'>I'm Muhammad Furqan Abbas, a Full Stack Software Engineer</p>
                <p className='text-white opacity-80 text-[13px]'>I'm a passionate full stack developer with a strong foundation in both frontend and backend technologies. With a degree in Software Engineering and hands-on experience in developing scalable web applications, I specialize in building robust digital solutions that solve real-world problems. I love turning ideas into reality through clean, efficient code and intuitive user experiences.</p>
                <div className='flex items-center gap-4 mt-2'>
                <button onClick={() => window.location.href=cv} className='bg-green-700 text-white w-40 rounded-full h-10 font-poppins text-sm cursor-pointer'>Download CV</button>
                <hr className='border-white w-14 opacity-80' />
                <div className="social-icons text-white flex items-center text-lg gap-4 justify-end">
                  <a href="https://www.facebook.com/malikmuhammadfurqan.abbas" target="_blank"><i className="cursor-pointer fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/muhammad-furqan-abbas-870125233" target="_blank"><i className="cursor-pointer fa-brands fa-linkedin-in"></i></a>
                  <a href="https://www.upwork.com/freelancers/~017100bad51363e86d" target="_blank"><i className="fa-brands fa-upwork cursor-pointer"></i></a>
                  <a href="https://github.com/mfurqanabbas20" target="_blank"><i className="cursor-pointer fa-brands fa-github"></i></a>
                </div>
                </div>
                <SkillsSection />
            </div>
        </div>
    </motion.div>
  )
}

export default About