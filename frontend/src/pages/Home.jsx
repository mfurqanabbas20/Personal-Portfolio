import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About.jsx";
import background_video from "../assets/background.mp4";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { Typewriter } from 'react-simple-typewriter'
import WorkExperience from "./Workexperience.jsx";
import Services from "./Services.jsx";
import Stats from "../components/Stats.jsx";
import Footer from "../components/Footer.jsx";
import SparkCursor from "../components/SparkCursor.jsx";


const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between h-[80vh] max-sm:h-[70vh]">
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
      <Stats />
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
    case "services":
      return <Services setSelectedTab={setSelectedTab} />
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

  // Scroll back to the top whenever the active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedTab]);

  return (
    <div className="bg-stone-900 min-h-screen relative overflow-x-hidden">
      {selectedTab === 'home' && <SparkCursor />}
      <video className={selectedTab === 'home' ? "opacity-60 w-full h-screen fixed top-0 left-0 object-cover z-0" : "hidden"} autoPlay muted loop>
        <source src={background_video} type="video/mp4" />
      </video>
      <div className="relative py-4 z-20 w-full min-h-screen flex flex-col">
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="flex-1">
          <RenderPage selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <Footer setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
};

export default Home;
