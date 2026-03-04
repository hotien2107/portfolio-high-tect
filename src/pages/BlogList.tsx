import type React from 'react'
import { Link } from 'react-router-dom'
import { blogEntries } from '../data/blog'
import ScrollReveal from '../components/animations/ScrollReveal'

const BlogList: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Blog / Ghi chú
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Tổng hợp bài viết & ghi chú kỹ thuật
        </h1>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Đây là nơi bạn có thể lưu lại những gì mình đã học được: từ React, TypeScript, TailwindCSS
          cho tới những kinh nghiệm thực tế trong quá trình làm việc.
        </p>
      </section>

      <section className="space-y-4">
        <div className="grid gap-5 md:grid-cols-2">
          {blogEntries.map((entry, index) => (
            <ScrollReveal
              key={entry.slug}
              delay={index * 80}
              className="flex flex-col justify-between rounded-2xl border border-foreground/10 bg-[var(--surface-color)] p-5"
            >
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--text-secondary-color)]">
                  Ghi chú
                </p>
                <h2 className="text-sm font-semibold">
                  <Link
                    to={`/blog/${entry.slug}`}
                    className="transition hover:text-[--color-primary]"
                  >
                    {entry.title}
                  </Link>
                </h2>
                <p className="text-xs text-[color:var(--text-secondary-color)]">
                  {entry.summary}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${entry.slug}`}
                  className="text-[10px] uppercase tracking-[0.22em] text-[--color-primary]"
                >
                  Xem chi tiết
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}

export default BlogList

