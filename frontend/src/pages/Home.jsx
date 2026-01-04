import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About.jsx";
import background_video from "../assets/background.mp4";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { Typewriter } from 'react-simple-typewriter'
import WorkExperience from "./Workexperience.jsx";


const HomePage = () => {
  return (
    <div className="flex justify-between h-[80vh]">
      <div></div>
      <div className="text-white flex items-center justify-center flex-col gap-6 w-full">
        <h1 className="text-6xl font-extrabold font-poppins max-sm:text-3xl max-lg:text-center">
          Muhammad Furqan Abbas
        </h1>
        <span className="text-3xl font-poppins max-md:text-xl">
          I'm <span>
            <Typewriter
            words={['Software Engineer', 'Full Stack Developer', 'Learning Cloud Computing']}
             loop={false}
             />
          </span>
        </span>
      </div>
      <div className="social-icons text-white flex flex-col items-center text-lg gap-4 justify-end px-10 max-md:hidden">
        <a href="https://www.facebook.com/malikmuhammadfurqan.abbas" target="_blank"><i className="cursor-pointer fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/in/muhammad-furqan-abbas-870125233" target="_blank"><i className="cursor-pointer fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.upwork.com/freelancers/~017100bad51363e86d" target="_blank"><i className="fa-brands fa-upwork cursor-pointer"></i></a>
        <a href="https://github.com/mfurqanabbas20" target="_blank"><i className="cursor-pointer fa-brands fa-github"></i></a>
      </div>
    </div>
  );
};

const RenderPage = ({ selectedTab, setSelectedTab }) => {
  switch (selectedTab) {
    case "home":
      return <HomePage />;
    case "about":
      return <About setSelectedTab={setSelectedTab}/>;
    case "workExperience":
      return <WorkExperience setSelectedTab={setSelectedTab} />
    case "projects":
      return <Projects setSelectedTab={setSelectedTab}/>
    case "contact":
      return <Contact setSelectedTab={setSelectedTab}/>
    case "resume":
      return window.location.href="https://www.google.com"
    default:
      return <HomePage />;
  }
};

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className="bg-stone-900 h-screen">
      <video className={selectedTab === 'home' ? "opacity-60 w-full h-full fixed top-0 right-0 object-cover" : "hidden"} autoPlay muted loop>
        <source src={background_video} type="video/mp4" />
      </video>
      <div className={selectedTab === 'home' ? "fixed py-4 z-20 w-full h-full" : "py-4 z-20 w-full h-full"}>
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="h-full">
          <RenderPage selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
      </div>
    </div>
  );
};

export default Home;
