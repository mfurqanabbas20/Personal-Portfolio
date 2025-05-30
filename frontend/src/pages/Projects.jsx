import linkbridge from '../assets/linkbridge.png'

const ProjectCard = () => {
    return(
        <div className="w-96 text-white font-poppins flex flex-col gap-1">
            <img className='my-2' src={linkbridge} alt="" />
            <h1 className='text-2xl font-bold'>LinkBridge</h1>
            <p className='text-xs tracking-wide text-slate-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis tempora asperiores eius veniam voluptatibus corrupti repellat porro totam vitae eos, tempore maiores quasi saepe minima? In aliquam consectetur unde ipsa alias eum culpa omnis nemo. Molestiae magnam possimus vel ipsam.</p>
        </div>
    )
}


const Projects = () => {
  return (
    <div className='p-10 bg-black'>
        <p className='text-white text-center text-sm'>Check out my latest projects</p>
        <h1 className='font-bold text-3xl text-white text-center'>My Projects</h1>
        <hr className='border-green-500 w-10 mx-auto my-3 border-2' />
        <div className='flex flex-wrap justify-between gap-4 max-lg:justify-center'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
         </div>
    </div>
  )
}

export default Projects