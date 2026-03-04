import type React from 'react'
import { timeline } from '../../data/timeline'
import ScrollReveal from '../animations/ScrollReveal'

const Timeline: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Hành trình
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Tóm tắt hành trình học & làm việc với lập trình
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Một vài cột mốc chính trong quá trình mình đến với frontend, từ những bài tập đầu tiên
          cho tới việc xây dựng các ứng dụng thực tế.
        </p>
      </div>

      <div className="relative border-l border-foreground/15 pl-4 md:pl-6">
        {timeline.map((item, index) => (
          <ScrollReveal
            key={item.id}
            delay={index * 80}
            className="relative mb-6 last:mb-0"
          >
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-background bg-[--color-primary] shadow-[0_0_18px_rgba(141,255,105,0.7)]" />
            <div className="ml-4 space-y-1 rounded-xl border border-foreground/10 bg-[var(--surface-color)] p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--text-secondary-color)]">
                {item.period}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>
                <span className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[--color-primary]">
                  {item.type}
                </span>
              </div>
              <p className="text-xs text-[color:var(--text-secondary-color)]">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Timeline

