import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Github, Linkedin, Radar } from 'lucide-react'
import useDeviceProfile from '../../hooks/useDeviceProfile'

const Hero: React.FC = () => {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const nextTiltRef = useRef({ x: 0, y: 0 })
  const { isTouch, tier } = useDeviceProfile()

  const handleMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const panel = panelRef.current
    if (!panel) return

    const bounds = panel.getBoundingClientRect()
    const px = (event.clientX - bounds.left) / bounds.width
    const py = (event.clientY - bounds.top) / bounds.height

    nextTiltRef.current = {
      x: (0.5 - py) * (tier === 'desktop' ? 8 : 5),
      y: (px - 0.5) * (tier === 'desktop' ? 9 : 6),
    }

    if (rafRef.current) return
    rafRef.current = window.requestAnimationFrame(() => {
      setTilt(nextTiltRef.current)
      rafRef.current = null
    })
  }

  useEffect(() => () => {
    if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-6">
        <p className="hud-label">STARSHIP PROFILE · HO HOANG VIET TIEN</p>

        <h1 className="font-tech text-balance text-3xl font-medium leading-tight md:text-5xl">
          SYSTEM INITIALIZING:
          <span className="mt-2 block aurora-text">AI Researcher / Engineer / Builder</span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-[color:var(--text-secondary-color)] md:text-base">
          Tôi thiết kế và phát triển trải nghiệm số như một bảng điều khiển phi thuyền: chính xác,
          trực quan và giàu dữ liệu. Mỗi giao diện đều cân bằng giữa hiệu năng kỹ thuật và cảm xúc thị giác.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[--color-primary]/65 bg-[--color-primary]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[--color-primary] shadow-[0_0_26px_rgba(40,216,255,0.35)] transition hover:bg-[--color-primary]/25"
          >
            Open Modules
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80 transition hover:border-[--secondary-color] hover:text-[--secondary-color]"
          >
            Start Transmission
          </a>
        </div>

        <div className="grid max-w-xl gap-3 sm:grid-cols-3">
          {[
            ['03+', 'Years navigating frontend systems'],
            ['15+', 'Mission-ready product deployments'],
            ['24/7', 'Design + Engineering integration'],
          ].map(([stat, label]) => (
            <div key={stat} className="cockpit-panel holo-card rounded-xl p-3 scanlines">
              <p className="font-tech text-lg text-[--color-primary]">{stat}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/60">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={panelRef}
        onPointerMove={isTouch ? undefined : handleMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        className="cockpit-panel holo-card relative rounded-[30px] p-5 transition-transform duration-400"
        style={{ transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full border border-[--secondary-color]/40" />
        <div className="scanlines relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6">
          <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            <span>Neural Operator</span>
            <span>UTC+7</span>
          </div>

          <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full border border-[--color-primary]/40 bg-[radial-gradient(circle_at_center,rgba(56,166,255,0.2),rgba(9,14,32,0.35)_58%,transparent)]">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[--secondary-color]/60 text-[--secondary-color] shadow-[0_0_30px_rgba(155,107,255,0.45)]">
              <Radar className="h-10 w-10 animate-pulse" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-foreground/70">
            <span className="font-tech">Github</span>
            <a href="https://github.com/hotien2107" target="_blank" rel="noreferrer" className="hover:text-[--color-primary]"><Github className="h-4 w-4" /></a>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-foreground/70">
            <span className="font-tech">LinkedIn</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[--secondary-color]"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
