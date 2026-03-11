import type React from 'react'
import { BriefcaseBusiness, Mail, Menu, Moon, Sun, UserRound, Wrench } from 'lucide-react'
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

  return (
    <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4 md:px-8">
      <nav className="cockpit-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 text-[11px] uppercase tracking-[0.18em] md:px-6">
        <Link to="/" className="flex items-center gap-2 font-tech text-[10px] tracking-[0.26em] text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[--color-primary]/60 bg-[--color-primary]/20 text-[--color-primary]">
            H
          </span>
          AURORA CONSOLE
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((item) => {
            const isActive = location.pathname === item.to
            const Icon = item.icon
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition ${
                  isActive
                    ? 'border-[--color-primary]/60 bg-[--color-primary]/20 text-[--color-primary] shadow-[0_0_18px_rgba(40,216,255,0.35)]'
                    : 'border-white/10 text-foreground/70 hover:border-[--color-primary]/40 hover:text-[--color-primary]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground/80 transition hover:border-[--color-primary] hover:text-[--color-primary]"
            aria-label="Chuyển chế độ sáng/tối"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 p-2 text-foreground md:hidden"
            aria-label="Mở menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
