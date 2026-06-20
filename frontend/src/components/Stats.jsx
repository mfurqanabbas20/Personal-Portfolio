import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CountUp = ({ end, duration = 1800, suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    let start
    const step = (timestamp) => {
      if (start === undefined) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { icon: 'fa-solid fa-laptop-code', end: 10, suffix: '+', label: 'Projects Completed' },
  { icon: 'fa-solid fa-layer-group', end: 15, suffix: '+', label: 'Technologies Used' },
  { icon: 'fa-solid fa-briefcase', end: 2, suffix: '+', label: 'Companies Worked' },
]

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="font-poppins w-full px-10 max-md:px-6 pb-4"
    >
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 py-5 px-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 min-w-[130px] flex flex-col items-center text-center gap-1 px-2"
          >
            <i className={`${stat.icon} text-green-500 text-2xl mb-1`}></i>
            <h2 className="text-white text-3xl font-extrabold max-sm:text-2xl">
              <CountUp end={stat.end} suffix={stat.suffix} />
            </h2>
            <p className="text-white/70 text-xs tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Stats
