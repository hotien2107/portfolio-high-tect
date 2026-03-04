import type React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogEntries } from '../data/blog'

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const entry = blogEntries.find((b) => b.slug === slug)

  if (!entry) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
        <p className="text-sm text-[color:var(--text-secondary-color)]">
          Không tìm thấy bài viết.{' '}
          <Link to="/blog" className="underline decoration-[--color-primary]/60 underline-offset-4">
            Quay lại danh sách blog
          </Link>
          .
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--text-secondary-color)]">
          Blog / Ghi chú
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          {entry.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-[color:var(--text-secondary-color)]">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article className="space-y-4 text-sm leading-relaxed text-[color:var(--text-secondary-color)]">
        <p>
          Đây là trang chi tiết cho bài viết <strong>{entry.title}</strong>. Hiện tại nội dung đang
          sử dụng phần mô tả tóm tắt, nhưng bạn có thể mở rộng cấu trúc dữ liệu để lưu thêm nội dung
          Markdown chi tiết cho từng bài.
        </p>
        <p>{entry.summary}</p>
        <p>
          Gợi ý: bạn có thể tạo thư mục
          {' '}
          <code className="rounded bg-foreground/10 px-1">content/blog</code>
          {' '}
          và lưu các file
          {' '}
          <code className="rounded bg-foreground/10 px-1">.md</code>
          {' '}
          theo đúng
          {' '}
          <code className="rounded bg-foreground/10 px-1">{entry.slug}.md</code>
          , sau đó dùng một thư viện như
          {' '}
          <code className="rounded bg-foreground/10 px-1">react-markdown</code>
          {' '}
          để render nội dung.
        </p>
      </article>

      <div className="pt-2 text-sm">
        <Link
          to="/blog"
          className="text-[11px] uppercase tracking-[0.25em] text-[--color-primary]"
        >
          ← Quay lại danh sách blog
        </Link>
      </div>
    </main>
  )
}

export default BlogDetail

