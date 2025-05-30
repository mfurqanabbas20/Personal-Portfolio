import logo from '../assets/logo.png'

const Navbar = ({setSelectedTab}) => {
  return (
    <div className='flex items-center justify-between px-10 font-poppins'>
        <div className="logo ">
            <img onClick={() => setSelectedTab('home')} className='w-14 object-contain cursor-pointer' src={logo} alt="" />
        </div>
        <div className='text-white min-[500px]:hidden'>
          <i>Ham</i>
        </div>
        <div className="nav-items max-[500px]:hidden">
            <ul className='flex items-center gap-8 text-white'>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('about')}>About</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('projects')}>Projects</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('resume')}>Resume</li>
              </div>
              <div className='hover:border-b-2 border-green-600 transition-all'>
                <li className='cursor-pointer' onClick={() => setSelectedTab('contact')}>Contact</li>
              </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar