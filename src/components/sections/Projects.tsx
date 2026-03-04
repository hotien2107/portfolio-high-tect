import type React from 'react'
import { projects } from '../../data/projects'
import ScrollReveal from '../animations/ScrollReveal'

const Projects: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Dự án
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Một vài dự án tiêu biểu
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Dưới đây là những dự án mình đã thực hiện hoặc tham gia, tập trung vào sản phẩm thực tế
          và những bài toán cụ thể.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={index * 120}
            className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-b from-white/5 via-black/60 to-black/90"
          >
            <div className="relative h-40 w-full overflow-hidden bg-background/60">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] text-foreground/70">
                <span className="rounded-full bg-background/60 px-3 py-1 uppercase tracking-[0.18em]">
                  {project.techStack.join(' · ')}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-sm font-semibold">
                {project.name}
              </h3>
              <p className="text-xs text-[color:var(--text-secondary-color)]">
                {project.description}
              </p>
              <p className="text-xs text-[--color-primary]">
                <span className="font-semibold">Điểm nổi bật: </span>
                {project.highlight}
              </p>
              <p className="mt-auto text-[11px] text-foreground/50">
                <span className="font-semibold text-foreground/70">Vai trò: </span>
                {project.role}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Projects

