import { useEffect } from 'react'

const DynamicBackgroundSystem = () => {
  useEffect(() => {
    let raf = 0
    const root = document.documentElement

    const updateScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const ratio = window.scrollY / maxScroll
      root.style.setProperty('--parallax-scroll', ratio.toFixed(4))
      raf = 0
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(updateScroll)
    }

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      root.style.setProperty('--cursor-x', x.toFixed(2))
      root.style.setProperty('--cursor-y', y.toFixed(2))
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

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-50"
        style={{
          transform: 'translate3d(0, calc(var(--parallax-scroll) * -60px), 0)',
          background:
            'radial-gradient(circle at 18% 20%, rgba(111,236,255,0.2), transparent 45%), radial-gradient(circle at 78% 24%, rgba(168,118,255,0.2), transparent 42%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-45"
        style={{
          transform: 'translate3d(calc((var(--cursor-x) - 50) * 0.12px), calc((var(--cursor-y) - 50) * 0.15px), 0)',
          background:
            'radial-gradient(520px circle at calc(var(--cursor-x) * 1%) calc(var(--cursor-y) * 1%), rgba(76,233,255,0.14), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
        style={{
          transform: 'translate3d(0, calc(var(--parallax-scroll) * -22px), 0)',
          backgroundImage:
            'radial-gradient(circle, rgba(147,229,255,0.45) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          opacity: 0.18,
        }}
      />
    </>
  )
}

export default DynamicBackgroundSystem
