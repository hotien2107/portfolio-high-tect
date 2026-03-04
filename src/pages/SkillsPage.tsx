import type React from 'react'
import Skills from '../components/sections/Skills'

const SkillsPage: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Kỹ năng
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Bộ kỹ năng frontend & workflow mình đang sử dụng
        </h1>
        <p className="max-w-3xl text-sm text-[color:var(--text-secondary-color)]">
          Ở đây mình nhóm các kỹ năng theo mảng: frontend/UI, kiến trúc & chất lượng mã, và quy trình
          làm việc. Bạn có thể xem nhanh stack, mức độ và định hướng của mình.
        </p>
      </section>

      <Skills />
    </main>
  )
}

export default SkillsPage

