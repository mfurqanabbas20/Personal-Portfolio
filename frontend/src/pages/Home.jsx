import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { initLenis, destroyLenis, ScrollTrigger } from '../lib/motion'
import Preloader from '../components/Preloader'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import About from '../sections/About'
import Services from '../sections/Services'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home = () => {
  const [ready, setReady] = useState(false)

  // Smooth scroll lives for the lifetime of the page; paused until the preloader finishes
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const lenis = initLenis()
    lenis.stop()

    // Fonts and late images change layout, so re-measure every ScrollTrigger once they land
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('load', refresh)
      destroyLenis()
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    initLenis().start()
    ScrollTrigger.refresh()
  }, [ready])

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Navbar ready={ready} />

      <main className="relative">
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Home
