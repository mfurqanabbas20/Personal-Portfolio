import { useEffect, useRef } from 'react'

// A lightweight canvas spark/particle trail that follows the cursor.
// Rendered full-screen, click-through (pointer-events-none).
const SparkCursor = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let particles = []
    let raf

    const colors = ['#22c55e', '#4ade80', '#86efac', '#bbf7d0', '#ffffff']

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const spawn = (x, y) => {
      const count = 3
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 2 + 0.4
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.6,
          life: 1,
          decay: Math.random() * 0.03 + 0.015,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const handleMove = (e) => spawn(e.clientX, e.clientY)

    const loop = () => {
      ctx.clearRect(0, 0, width, height)
      particles = particles.filter((p) => p.life > 0)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.045 // gravity
        p.vx *= 0.99
        p.life -= p.decay
        ctx.globalAlpha = Math.max(p.life, 0)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 10
        ctx.shadowColor = p.color
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('resize', handleResize)
    loop()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}

export default SparkCursor
