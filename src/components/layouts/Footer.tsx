import type React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-foreground/10 bg-[var(--surface-color)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-[color:var(--text-secondary-color)] md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} HoTien.dev. All rights reserved.</p>
        <p className="text-[10px] uppercase tracking-[0.25em]">
          Built with React · Vite · TailwindCSS
        </p>
      </div>
    </footer>
  )
}

export default Footer