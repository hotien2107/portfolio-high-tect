import type React from 'react'
import Projects from '../components/sections/Projects'

const ProjectsPage: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Dự án
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Các dự án tiêu biểu mình đã thực hiện
        </h1>
        <p className="max-w-3xl text-sm text-[color:var(--text-secondary-color)]">
          Bao gồm cả project cá nhân và sản phẩm thực tế, tập trung vào bài toán quản lý công việc,
          landing page và dashboard thống kê. Mỗi dự án được tóm tắt về mô tả, điểm nổi bật và vai trò của mình.
        </p>
      </section>

      <Projects />
    </main>
  )
}

export default ProjectsPage

