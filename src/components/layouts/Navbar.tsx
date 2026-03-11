import type React from 'react'
import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Mail, Menu, Moon, Sun, UserRound, Volume2, VolumeX, Wifi, Wrench } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const links = [
  { to: '/', label: 'Command', icon: UserRound },
  { to: '/skills', label: 'Systems', icon: Wrench },
  { to: '/projects', label: 'Modules', icon: BriefcaseBusiness },
  { to: '/contact', label: 'Transmit', icon: Mail },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [clock, setClock] = useState(new Date())
  const [soundOn, setSoundOn] = useState(false)
  const [uptimeSec, setUptimeSec] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClock(new Date())
      setUptimeSec((v) => v + 1)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const min = String(Math.floor(uptimeSec / 60)).padStart(2, '0')
  const sec = String(uptimeSec % 60).padStart(2, '0')
  const uptime = `${min}:${sec}`

  const playBeep = () => {
    if (!soundOn) return
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 680
    gain.gain.value = 0.018
    osc.start()
    osc.stop(ctx.currentTime + 0.05)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-20 px-3 pt-3 md:px-8">
      <nav className="cockpit-panel mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 text-[11px] uppercase tracking-[0.16em] md:px-5">
        <Link to="/" className="flex items-center gap-2 font-tech text-[10px] tracking-[0.22em] text-foreground" data-magnetic>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[--color-primary]/60 bg-[--color-primary]/20 text-[--color-primary]">H</span>
          AURORA MISSION HUD
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((item) => {
            const isActive = location.pathname === item.to
            const Icon = item.icon
            return (
              <Link key={item.to} to={item.to} data-magnetic className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition ${isActive ? 'border-[--color-primary]/60 bg-[--color-primary]/20 text-[--color-primary] shadow-[0_0_18px_rgba(40,216,255,0.35)]' : 'border-white/10 text-foreground/70 hover:border-[--color-primary]/40 hover:text-[--color-primary]'}`}>
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3 text-[10px] text-foreground/75">
          <div className="hidden items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-3 py-1.5 md:flex">
            <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />ONLINE</span>
            <span className="inline-flex items-center gap-1"><Wifi className="h-3 w-3" />LINK 98%</span>
            <span>ENERGY 92%</span>
            <span>UPTIME {uptime}</span>
            <span>{clock.toLocaleTimeString()}</span>
            <span className="radar-mini" />
          </div>

          <button type="button" onClick={() => { setSoundOn((v) => !v); playBeep() }} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground/80">
            {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => { toggleTheme(); playBeep() }} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground/80">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button type="button" className="inline-flex items-center justify-center rounded-full border border-foreground/20 p-2 text-foreground lg:hidden" aria-label="Mở menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
