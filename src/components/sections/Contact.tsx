import type React from 'react'
import ScrollReveal from '../animations/ScrollReveal'

const Contact: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Liên hệ
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Cùng trao đổi về dự án của bạn
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Nếu bạn đang cần một frontend developer để xây dựng giao diện ứng dụng, landing page
          hoặc tối ưu lại một sản phẩm sẵn có, hãy để lại thông tin – mình sẽ phản hồi sớm nhất có thể.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ScrollReveal className="rounded-2xl border border-foreground/10 bg-[var(--surface-color)] p-5 shadow-[0_0_35px_rgba(0,0,0,0.08)]">
          <form
            className="space-y-4 text-sm"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs text-foreground/70">
                  Họ và tên
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-foreground/10 bg-background/60 px-3 py-2 text-xs text-foreground outline-none ring-[--color-primary]/40 placeholder:text-foreground/30 focus:border-[--color-primary] focus:ring-1"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs text-foreground/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-foreground/10 bg-background/60 px-3 py-2 text-xs text-foreground outline-none ring-[--color-primary]/40 placeholder:text-foreground/30 focus:border-[--color-primary] focus:ring-1"
                  placeholder="email@company.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="topic" className="text-xs text-foreground/70">
                Chủ đề
              </label>
              <input
                id="topic"
                name="topic"
                className="w-full rounded-lg border border-foreground/10 bg-background/60 px-3 py-2 text-xs text-foreground outline-none ring-[--color-primary]/40 placeholder:text-foreground/30 focus:border-[--color-primary] focus:ring-1"
                placeholder="Ví dụ: Xây dựng landing page cho sản phẩm mới"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs text-foreground/70">
                Mô tả ngắn về dự án
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none rounded-lg border border-foreground/10 bg-background/60 px-3 py-2 text-xs text-foreground outline-none ring-[--color-primary]/40 placeholder:text-foreground/30 focus:border-[--color-primary] focus:ring-1"
                placeholder="Bạn đang cần hỗ trợ điều gì, deadline và phạm vi dự án ra sao?"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[--color-primary] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground shadow-[0_0_35px_rgba(141,255,105,0.6)] transition hover:shadow-[0_0_55px_rgba(141,255,105,0.9)]"
            >
              Gửi thông tin (demo)
            </button>

            <p className="pt-1 text-[11px] text-foreground/40">
              *Form này đang ở chế độ demo — bạn có thể tùy biến để kết nối với backend, dịch vụ email hoặc Google Forms.
            </p>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={120} className="space-y-4 text-sm text-foreground/70">
          <div className="rounded-2xl border border-foreground/10 bg-gradient-to-b from-white/5 via-black/70 to-black/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
              Thông tin liên hệ
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <p>
                <span className="text-foreground/40">Email: </span>
                <span className="text-foreground">ban-co-the-dien-email-cua-ban@domain.com</span>
                {' '}
                <span className="text-foreground/40">(hãy thay bằng email thật của bạn)</span>
              </p>
              <p>
                <span className="text-foreground/40">Địa điểm: </span>
                <span className="text-foreground">TP. Hồ Chí Minh, Việt Nam</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact

