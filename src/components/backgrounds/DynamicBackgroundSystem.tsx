import { useEffect, useRef } from 'react'

type Meteor = {
  id: number
  x: number
  y: number
  size: number
  angle: number
  duration: number
  delay: number
  large?: boolean
}

const random = (min: number, max: number) => Math.random() * (max - min) + min

const DynamicBackgroundSystem = () => {
  const starCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const meteorLayerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let raf = 0
    const root = document.documentElement

    const updateScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      root.style.setProperty('--parallax-scroll', (window.scrollY / maxScroll).toFixed(4))
      raf = 0
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(updateScroll)
    }

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty('--cursor-x', ((event.clientX / window.innerWidth) * 100).toFixed(2))
      root.style.setProperty('--cursor-y', ((event.clientY / window.innerHeight) * 100).toFixed(2))
    }

    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  useEffect(() => {
    const canvas = starCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const stars = Array.from({ length: 1000 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: random(0.2, 1.4),
      alpha: random(0.2, 0.9),
      velocity: random(0.002, 0.012),
    }))

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    let frame = 0
    let animationId = 0

    const draw = () => {
      frame += 1
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const star of stars) {
        star.alpha += Math.sin(frame * star.velocity) * 0.003
        star.alpha = Math.min(1, Math.max(0.1, star.alpha))
        ctx.beginPath()
        ctx.fillStyle = `rgba(190,225,255,${star.alpha})`
        ctx.arc(star.x * window.innerWidth, star.y * window.innerHeight, star.r, 0, Math.PI * 2)
        ctx.fill()
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const layer = meteorLayerRef.current
    if (!layer) return

    let meteorId = 0
    let disposed = false
    let cometTimeout: number | undefined

    const spawnMeteor = (large = false) => {
      const meteor: Meteor = {
        id: meteorId++,
        x: random(-10, 70),
        y: random(-20, 40),
        size: large ? random(200, 360) : random(80, 180),
        angle: random(14, 25),
        duration: large ? random(9000, 13000) : random(1500, 3000),
        delay: 0,
        large,
      }

      const el = document.createElement('span')
      el.className = `meteor ${large ? 'meteor--comet' : ''}`
      el.style.left = `${meteor.x}%`
      el.style.top = `${meteor.y}%`
      el.style.setProperty('--meteor-size', `${meteor.size}px`)
      el.style.setProperty('--meteor-angle', `${meteor.angle}deg`)
      el.style.setProperty('--meteor-duration', `${meteor.duration}ms`)
      el.style.animationDelay = `${meteor.delay}ms`
      layer.appendChild(el)

      window.setTimeout(() => {
        el.remove()
      }, meteor.duration + 200)
    }

    const queueMeteor = () => {
      if (disposed) return
      spawnMeteor(false)
      window.setTimeout(queueMeteor, random(1500, 5200))
    }

    const queueComet = () => {
      if (disposed) return
      spawnMeteor(true)
      cometTimeout = window.setTimeout(queueComet, random(26000, 46000))
    }

    const timer = window.setTimeout(queueMeteor, 1200)
    cometTimeout = window.setTimeout(queueComet, random(12000, 24000))

    return () => {
      disposed = true
      window.clearTimeout(timer)
      if (cometTimeout) window.clearTimeout(cometTimeout)
    }
  }, [])

  return (
    <>
      <canvas ref={starCanvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] opacity-70" />

      <div aria-hidden="true" className="aurora-layer pointer-events-none fixed inset-0 z-[1]" />
      <div aria-hidden="true" className="holographic-particles pointer-events-none fixed inset-0 z-[1]" />
      <div ref={meteorLayerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-45"
        style={{
          transform: 'translate3d(calc((var(--cursor-x) - 50) * 0.12px), calc((var(--cursor-y) - 50) * 0.15px), 0)',
          background: 'radial-gradient(520px circle at calc(var(--cursor-x) * 1%) calc(var(--cursor-y) * 1%), rgba(76,233,255,0.14), transparent 70%)',
        }}
      />
    </>
  )
}

export default DynamicBackgroundSystem
