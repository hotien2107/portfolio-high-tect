import type React from 'react'
import { Menu, Moon, Sun } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const links = [
  { to: '/', label: 'Giới thiệu' },
  { to: '/timeline', label: 'Hành trình' },
  { to: '/skills', label: 'Kỹ năng' },
  { to: '/projects', label: 'Dự án' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Khách hàng' },
  { to: '/contact', label: 'Liên hệ' },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-foreground/10 bg-background/60 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[--color-primary] text-xs font-bold text-background">
            H
          </span>
          <span className="hidden sm:inline">HoTien.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          {links.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors hover:text-[--color-primary] ${isActive ? 'text-[--color-primary]' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-background/40 text-foreground/80 transition hover:border-[--color-primary] hover:text-[--color-primary]"
            aria-label="Chuyển chế độ sáng/tối"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <Link
            to="/contact"
            className="hidden rounded-full border border-[--color-primary]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-primary] shadow-[0_0_20px_rgba(141,255,105,0.4)] transition hover:bg-[--color-primary] hover:text-background md:inline-flex"
          >
            Liên hệ
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-foreground/10 p-2 text-foreground md:hidden"
          aria-label="Mở menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar