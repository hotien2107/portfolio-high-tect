import type React from 'react'
import { Link } from 'react-router-dom'
import { blogEntries } from '../../data/blog'
import ScrollReveal from '../animations/ScrollReveal'

const Blog: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Blog / Ghi chú
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Nơi lưu lại những gì mình học được
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Khu vực này được thiết kế để sau này bạn có thể viết lại những kỹ năng, kinh nghiệm
          và ghi chú kỹ thuật bằng Markdown. Hiện tại là các topic gợi ý để bạn bắt đầu.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {blogEntries.map((entry, index) => (
          <ScrollReveal
            key={entry.slug}
            delay={index * 100}
            className="flex flex-col justify-between rounded-2xl border border-foreground/10 bg-gradient-to-b from-white/5 via-black/60 to-black/90 p-5"
          >
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--text-secondary-color)]">
                Gợi ý bài viết
              </p>
              <h3 className="text-sm font-semibold">
                <Link
                  to={`/blog/${entry.slug}`}
                  className="transition hover:text-[--color-primary]"
                >
                  {entry.title}
                </Link>
              </h3>
              <p className="text-xs text-[color:var(--text-secondary-color)]">
                {entry.summary}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-foreground/60">
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
              {entry.planned && (
                <span className="text-[10px] uppercase tracking-[0.22em] text-[--color-primary]">
                  Đang lên kế hoạch
                </span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 text-[11px] text-[color:var(--text-secondary-color)]">
        <p>
          *Nhấn vào từng thẻ để xem chi tiết bài viết.
        </p>
        <Link
          to="/blog"
          className="uppercase tracking-[0.25em] text-[--color-primary]"
        >
          Xem thêm bài viết
        </Link>
      </div>
    </section>
  )
}

export default Blog

