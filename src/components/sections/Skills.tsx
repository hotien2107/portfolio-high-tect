import type React from 'react'
import { skillCategories } from '../../data/skills'
import ScrollReveal from '../animations/ScrollReveal'

const Skills: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="hud-label">Subsystem · Skills Matrix</p>
        <h2 className="font-tech text-xl md:text-2xl">Neural Systems Performance</h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Các năng lực được hiển thị như thông số hệ thống, phản ánh mức độ thành thạo và độ sẵn sàng triển khai.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 80} className="cockpit-panel rounded-2xl p-5 scanlines">
              <h3 className="font-tech text-sm text-[--color-primary]">{category.title}</h3>
              <p className="mt-2 text-xs text-[color:var(--text-secondary-color)]">{category.description}</p>
              <ul className="mt-4 space-y-3 text-xs">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-foreground/80">
                      <span>{skill.name}</span>
                      <span className="font-tech text-[10px] text-[--secondary-color]">{skill.level}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[--color-primary] via-[#4ce9ff] to-[--secondary-color]" />
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="cockpit-panel flex flex-col items-center justify-center rounded-2xl p-6">
          <div className="relative h-48 w-48 rounded-full border border-[--color-primary]/45">
            <div className="absolute inset-4 rounded-full border border-[--secondary-color]/45" />
            <div className="absolute inset-10 rounded-full border border-[--neon-blue]/45" />
            <div className="absolute left-1/2 top-1/2 h-1 w-20 -translate-x-1/2 -translate-y-1/2 origin-left rotate-12 rounded-full bg-[--color-primary] shadow-[0_0_12px_rgba(40,216,255,0.9)]" />
            <div className="absolute inset-0 animate-spin rounded-full border-t border-[--secondary-color]/65" style={{ animationDuration: '10s' }} />
          </div>
          <p className="mt-4 font-tech text-xs uppercase tracking-[0.2em] text-foreground/70">Adaptive Radar Index</p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Skills
