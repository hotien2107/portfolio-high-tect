import type React from 'react'
import { skillCategories } from '../../data/skills'
import ScrollReveal from '../animations/ScrollReveal'

const Skills: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Kỹ năng
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Những gì mình làm tốt
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Mình tập trung xây dựng giao diện dễ dùng, dễ mở rộng và có tính ổn định lâu dài,
          kết hợp giữa thẩm mỹ và kỹ thuật.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <ScrollReveal
            key={category.id}
            delay={index * 100}
            className="rounded-2xl border border-foreground/10 bg-foreground/5/5 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-5"
          >
            <h3 className="text-sm font-semibold">
              {category.title}
            </h3>
            <p className="mt-2 text-xs text-[color:var(--text-secondary-color)]">
              {category.description}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-[color:var(--text-secondary-color)]">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-2">
                  <span>{skill.name}</span>
                  <span className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-[--color-primary]">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Skills

