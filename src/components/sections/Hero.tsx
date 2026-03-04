import type React from 'react'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Hồ Hoàng Việt Tiến · Frontend Developer
        </p>

        <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          Xây dựng giao diện web
          <span className="block text-[--color-primary]">
            hiện đại, mượt mà và tối ưu trải nghiệm.
          </span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-[color:var(--text-secondary-color)] md:text-base">
          Mình là <span className="font-semibold">Hồ Hoàng Việt Tiến</span> – Frontend Developer
          yêu thích JavaScript, React và việc xây dựng những giao diện gọn gàng, dễ dùng. Mình thường
          chia sẻ và lưu trữ các project cá nhân trên{' '}
          <a
            href="https://github.com/hotien2107"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[--color-primary]/60 decoration-dotted underline-offset-4 hover:text-[--color-primary]"
          >
            Github
          </a>
          , từ các bài tập nhỏ đến những ứng dụng web hoàn chỉnh.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-[--color-primary] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground shadow-[0_0_35px_rgba(141,255,105,0.6)] transition hover:shadow-[0_0_55px_rgba(141,255,105,0.9)]"
          >
            Xem dự án
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/80 transition hover:border-[--color-primary] hover:text-[--color-primary]"
          >
            Liên hệ hợp tác
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[color:var(--text-secondary-color)]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-[--color-primary]">
              <span className="text-sm font-semibold">3+</span>
            </span>
            <span className="max-w-[140px] text-[11px] leading-snug uppercase tracking-[0.18em]">
              Năm kinh nghiệm
              <br />
              Frontend & UI
            </span>
          </div>

          <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />

          <div className="flex gap-3">
            <a
              href="https://github.com/hotien2107"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground transition hover:border-[--color-primary] hover:text-[--color-primary]"
              aria-label="Github của Hồ Hoàng Việt Tiến"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground transition hover:border-[--color-primary] hover:text-[--color-primary]"
              aria-label="LinkedIn (bạn có thể cập nhật link thật)"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative hidden justify-end md:flex">
        <div className="relative h-64 w-64 rounded-[32px] border border-foreground/10 bg-[radial-gradient(circle_at_top,_rgba(141,255,105,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_55%)] p-[1px] shadow-[0_0_80px_rgba(0,0,0,0.9)] md:h-72 md:w-72 lg:h-80 lg:w-80">
          <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-br from-black via-zinc-950 to-neutral-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(141,255,105,0.22),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(141,255,105,0.12),transparent_55%)] opacity-80" />

            <div className="relative flex h-full flex-col justify-between p-5">
              <div className="flex items-center justify-between text-xs text-foreground/70">
                <span className="rounded-full bg-foreground/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                  Available for freelance
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                  UTC+7 · Vietnam
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/40">
                  Stack chính
                </p>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-background/60 px-3 py-1 text-foreground/80">
                    React / TypeScript
                  </span>
                  <span className="rounded-full bg-background/60 px-3 py-1 text-foreground/80">
                    TailwindCSS
                  </span>
                  <span className="rounded-full bg-background/60 px-3 py-1 text-foreground/80">
                    UI/UX
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-foreground/60">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    Hoàn thành
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    15+ dự án
                  </p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    Mức độ tập trung
                  </p>
                  <p className="text-sm font-semibold text-[--color-primary]">
                    100%
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(141,255,105,0.16),transparent_55%)] opacity-60 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero