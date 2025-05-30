import about_img from '../assets/about_img.jpg'
const About = () => {
  return (
    <div className='py-10 bg-black transition-all'>
        <p className='text-white text-center text-sm'>Get to know me</p>
        <h1 className='font-bold text-3xl text-white text-center'>About Me</h1>
        <hr className='border-green-500 w-10 mx-auto my-3 border-2 hover:w-20 transition-all' />
        <div className='flex pt-6 gap-14 px-10'>
            <div className="image-container w-5/12">
              <img className='object-cover' src={about_img} alt="" />
            </div>
            <div className="about-content-container w-7/12 flex flex-col gap-2">
                <p className='text-xl text-green-600 font-semibold font-poppins'>Who am i?</p>
                <p className='text-2xl font-bold font-poppins text-white'>I'm Muhammad Furqan Abbas, a Full Stack Software Engineer</p>
                <p className='text-white opacity-80 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, eligendi ratione optio corporis voluptatum dolorum libero eos, tenetur sit animi exercitationem similique quas est debitis molestias ea magni sapiente a quisquam dolorem in. Quibusdam architecto, eligendi animi nisi porro quae tempora cupiditate, labore, aliquid nobis veritatis corporis inventore consectetur fuga aperiam autem excepturi a dolorem veniam aliquam eius. Voluptas, officia.</p>
                <hr className='border-white my-3 opacity-60'/>
                <div className="info-container text-white text-sm font-poppins my-4">
                    {/* make two sections in one line */}
                    <div className='flex justify-between my-2'>
                      <p className='w-1/2'>Name: <span className='opacity-70'>Muhammad Furqan Abbas</span></p>
                      <p className='w-1/2'>Email: <span className='opacity-70'>mfurqanabbas20@gmail.com</span></p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='w-1/2'>Age: <span className='opacity-70'>22</span></p>
                      <p className='w-1/2'>From: <span className='opacity-70'>Gujrat, Pakistan</span></p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                <button className='bg-green-700 text-white w-40 rounded-full h-10 font-poppins text-sm'>Download CV</button>
                <hr className='border-white w-14 opacity-80' />
                <div className="social-icons text-white flex items-center text-lg gap-4 justify-end">
                  <i className="cursor-pointer fa-brands fa-facebook-f"></i>
                  <i className="cursor-pointer fa-brands fa-twitter"></i>
                  <i className="cursor-pointer fa-brands fa-linkedin-in"></i>
                  <i className="cursor-pointer fa-brands fa-github"></i>
                  <i className="cursor-pointer fa-brands fa-instagram"></i>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About