import React from 'react';
import {motion} from 'framer-motion';
import profilePic from "../assets/profilePic.png";

const companies = [
	{name: "Stack360", role: "Associate Software Engineer", date: "July 2025 - Present", description: [
		"Working on SaaS-based multi-tenant applications with focus on scalability and performance.",
		"Developing and maintaining frontend using Next.js and Tailwind CSS.",
		"Collaborating with cross-functional teams to deliver secure and modular solutions.",
		"Leveraging Docker for efficient deployment and Git for collaborative version control",
	]},
	{name: "KryptoMind", role: "Frontend Developer Intern", date: "Jun 2025 - July 2025", description: [
		"Developed and maintained responsive web interfaces using React.js, HTML, CSS, and JavaScript.",
		"Collaborated with the backend team to integrate RESTful APIs and ensure seamless data flow.",
		"Worked with Git for version control and participated in team-based Agile development.",
	]
	},
]

const WorkExperience = ({setSelectedTab}) => {
return (
	<motion.div
		initial={{opacity: 0, y: -500}}
		animate={{opacity: 100, y: 1}}
		transition={{duration: 0.9}}
		className='py-8 bg-stone-900 h-screen'>
		<div className='relative'>
			<i onClick={() => setSelectedTab('home')} className="fa-solid fa-xmark text-white absolute right-6 -top-5 text-xl cursor-pointer"></i>
		</div>
		<h1 className='font-bold text-3xl text-white text-center -mt-2'>Work Experience</h1>
		<hr className='border-green-500 w-10 mx-auto my-3 border-2 hover:w-20 transition-all' />
		<div className="content flex px-10 gap-10 justify-between">
			<div className="left-container w-[40%] flex justify-between items-center flex-col">
				<img className='w-[50%] tobject-contain -mt-10' src={profilePic} alt="" />
				<div className="content-container text-white px-8 bg-[#292828] rounded-lg py-5 w-full mt-4">
			    <h1 className='text-xl font-semibold'>Muhammad Furqan Abbas</h1>
			    <h4 className='text-md opacity-70 mb-4'>Associate Software Engineer @ Stack360</h4>
					<div className="data flex flex-col gap-2">
						<div className="single-data flex justify-between">
							<p className='text-sm'>Email</p>
							<p className='opacity-70 text-sm'>mfurqanabbas20@gmail.com</p>
						</div>
						<div className="single-data text-sm flex justify-between">
								<p>Phone</p>
								<p className='opacity-70'>+92 311 7879393</p>
						</div>
						<div className="social-icons">

						</div>
					</div>
				</div>
			</div>
			<div className="right-container w-[60%]">
				<div className='text-white'>
					<div className="card-container flex flex-col gap-8">
						{companies.map((item) => (
						  <div className="card">
								<div className='flex items-center justify-between'>
									<h4 className='text-white opacity-80 text-sm'>{item.name}</h4>
									<p className='text-sm opacity-80'>{item.date}</p>
								</div>
						  	<h1 className='text-lg font-semibold'>{item.role}</h1>
						  	<p className='text-sm opacity-80 my-1.5 pl-4'>
									<ul className='list-disc'>
										{item.description.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								</p>
						</div>
						))}
					</div>
					<div className="stack-container">
						<div className="stack">

						</div>
					</div>
				</div>
			</div>
		</div>
	</motion.div>
	)
	}

export default WorkExperience;
