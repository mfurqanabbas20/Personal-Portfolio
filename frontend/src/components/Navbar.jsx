import logo from '../assets/logo.png'
import cv from '../../public/CV_Furqan.pdf'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Navbar = ({selectedTab, setSelectedTab}) => {
  const [isHamMenu, setIsHamMenu] = useState(false)

  const handleSmallScreenMenu = (tab) => {
    setSelectedTab(tab)
    setIsHamMenu(false)
  }

  return (
    <div className='z-0 relative flex items-center justify-between px-10 font-poppins'>
        <div className="logo ">
            <img onClick={() => setSelectedTab('home')} className='w-14 object-contain cursor-pointer' src={logo} alt="" />
        </div>
        <div className='text-white min-[500px]:hidden'>
          <i className={isHamMenu || selectedTab !== 'home'  ? 'hidden' : 'block'} onClick={() => setIsHamMenu(true)}><i class="fa-solid fa-bars"></i></i>
        </div>
        <div className="nav-items max-[500px]:hidden">
            <ul className='flex items-center gap-8 text-white'>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('about')}>About</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('workExperience')}>Work Experience</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('projects')}>Projects</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => window.location.href=cv}>Resume</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('contact')}>Contact</li>
              </div>
            </ul>
        </div>
        {
          isHamMenu 
          ?
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 100}}
        transition={{duration: 1.4}}
        className=''>
        <i onClick={() => setIsHamMenu(false)} className="fa-solid fa-xmark text-white text-2xl"></i>
        <div className="ham-menu fixed left-0 my-2 py-10 z-10 top-20 min-w-screen bg-black/80">
          <ul className='flex flex-col items-center gap-8 text-white'>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => handleSmallScreenMenu('about')}>About</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => handleSmallScreenMenu('projects')}>Projects</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => window.location.href=cv}>Resume</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => handleSmallScreenMenu('contact')}>Contact</li>
              </div>
            </ul>
        </div>
        </motion.div>
        :
        ""
        }
       
    </div>
  )
}

export default Navbar