
const Contact = () => {
  return (
    <div className='text-white py-10 bg-black px-10'>
        <p className='text-white text-center text-sm'>Feel free to contact me anytime</p>
        <h1 className='font-bold text-3xl text-white text-center'>Get in Touch</h1>
        <hr className='border-green-500 w-10 mx-auto my-3 border-2' />
        <div className="flex justify-between max-md:flex-col max-md:items-center">
        <div className="form w-7/12 max-md:w-full">
            <h1 className="font-semibold text-2xl text-white">Message Me</h1>
            <div className="flex gap-4 flex-wrap my-6">
            <input className="h-10 text-white opacity-80 p-4 outline-none outline-green-500 bg-zinc-900 flex-1" placeholder="Full Name" type="text" name="fullname" />
            <input className="h-10 text-white opacity-80 p-4 outline-none outline-green-500 bg-zinc-900 flex-1" placeholder="Email" type="text"name="email" />
            <input className="h-10 text-white opacity-80 p-4 outline-none outline-green-500 bg-zinc-900 w-full" placeholder="Subject" type="text" name="subject" />
            <input className="h-10 text-white opacity-80 p-4 outline-none outline-green-500 bg-zinc-900 w-full" placeholder="Message" type="text" name="message" />
            </div>
            <button className='bg-green-700 text-white w-40 rounded-full h-10 font-poppins text-sm'>Send Message</button>
        </div>
        <div className="contact-info w-4/12 flex flex-col gap-4 max-md:w-full max-md:mt-5">
            <h1 className="font-semibold text-2xl text-white">Contact Info</h1>
            <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a?</p>
            <div className="main-container bottom-contact flex gap-4 items-center">
             <div className="social-icons text-white flex flex-col text-lg gap-8">
               <i className="cursor-pointer fa-brands fa-facebook-f"></i>
               <i className="cursor-pointer fa-brands fa-twitter"></i>
               <i className="cursor-pointer fa-brands fa-github"></i>
               <i className="cursor-pointer fa-brands fa-instagram"></i>
             </div>
             <hr className="border-white border-1 h-full" />
             <div className="content font-poppins flex flex-col gap-2">
                <div>
                    <h1 className="font-bold text-md">Name</h1>
                    <p className="text-sm opacity-90">Muhammad Furqan Abbas</p>
                </div>
                <div>
                    <h1 className="font-bold text-md">Location</h1>
                    <p className="text-sm opacity-90">Gujrat, Punjab, Pakistan</p>
                </div>
                <div>
                    <h1 className="font-bold text-md">Call Me</h1>
                    <p className="text-sm opacity-90">0311-7879393</p>
                </div>
                <div>
                    <h1 className="font-bold text-md">Email</h1>
                    <p className="text-sm opacity-90">mfurqanabbas20@gmail.com</p>
                </div>
             </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact