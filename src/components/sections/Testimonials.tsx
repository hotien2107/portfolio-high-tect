import type React from 'react'
import { testimonials } from '../../data/testimonials'
import ScrollReveal from '../animations/ScrollReveal'

const Testimonials: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Đánh giá
        </p>
        <h2 className="text-xl font-semibold md:text-2xl">
          Một vài chia sẻ từ đồng nghiệp & khách hàng
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Mình luôn cố gắng giao tiếp rõ ràng, chủ động đề xuất giải pháp và bàn giao đúng cam kết.
        </p>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
        {testimonials.map((item, index) => (
          <ScrollReveal
            key={item.id}
            delay={index * 80}
            className="min-w-[260px] max-w-xs flex-1 rounded-2xl border border-foreground/10 bg-gradient-to-b from-white/5 via-black/60 to-black/90 p-5"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">
                  {item.name}
                </p>
                <p className="text-[11px] text-[color:var(--text-secondary-color)]">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-[color:var(--text-secondary-color)]">
              “{item.quote}”
            </p>

            <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[--color-primary]">
              Đánh giá: {item.rating}/5
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

