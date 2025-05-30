import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About.jsx";
import background_video from "../assets/background.mp4";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const HomePage = () => {
  return (
    <div className="flex justify-between h-[80vh]">
      <div></div>
      <div className="text-white flex items-center justify-center flex-col gap-6">
        <h1 className="text-6xl font-extrabold font-poppins">
          Muhammad Furqan Abbas
        </h1>
        <span className="text-3xl font-poppins">
          I'm a <span>Developer</span>
        </span>
      </div>
      <div className="social-icons text-white flex flex-col items-center text-lg gap-4 justify-end">
        <i className="cursor-pointer fa-brands fa-facebook-f"></i>
        <i className="cursor-pointer fa-brands fa-twitter"></i>
        <i className="cursor-pointer fa-brands fa-linkedin-in"></i>
        <i className="cursor-pointer fa-brands fa-github"></i>
        <i className="cursor-pointer fa-brands fa-instagram"></i>
      </div>
    </div>
  );
};

const RenderPage = ({ selectedTab }) => {
  switch (selectedTab) {
    case "home":
      return <HomePage />;
    case "about":
      return <About />;
    case "projects":
      return <Projects/>
    case "contact":
      return <Contact/>
    case "resume":
      return window.location.href="https://www.google.com"
    default:
      return <HomePage />;
  }
};

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className=" bg-black h-screen">
      <video className={selectedTab === 'home' ? "fixed top-0 right-0" : "hidden"} autoPlay muted loop>
        <source src={background_video} type="video/mp4" />
      </video>
      <div className={selectedTab === 'home' ? "fixed py-4 z-20 w-full h-full" : "py-4 z-20 w-full h-full"}>
        <Navbar setSelectedTab={setSelectedTab} />
        <div className="h-full">
          <RenderPage selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default Home;
