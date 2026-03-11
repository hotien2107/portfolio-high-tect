import type React from 'react'
import { projects } from '../../data/projects'
import ScrollReveal from '../animations/ScrollReveal'

const Projects: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="hud-label">Subsystem · Project Modules</p>
        <h2 className="font-tech text-xl md:text-2xl">Mission-ready Engineering Pods</h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Mỗi dự án được trình bày như một module kỹ thuật: có hệ thống, có chỉ số và có mục tiêu vận hành rõ ràng.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={index * 120}
            className="cockpit-panel group flex flex-col overflow-hidden rounded-2xl transition hover:shadow-[0_0_35px_rgba(151,71,255,0.28)]"
          >
            <div className="relative h-44 w-full overflow-hidden bg-background/60">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b17] via-[#060b1710] to-transparent" />
              <span className="hud-label absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-2 py-1">
                MODULE_{project.id}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-tech text-sm text-[--color-primary]">{project.name}</h3>
              <p className="text-xs text-[color:var(--text-secondary-color)]">{project.description}</p>
              <p className="text-[11px] text-[--secondary-color]">
                <span className="font-semibold">Highlight //</span> {project.highlight}
              </p>
              <p className="mt-auto text-[11px] text-foreground/55">
                <span className="font-semibold text-foreground/75">Role:</span> {project.role}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
