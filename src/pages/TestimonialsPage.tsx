import type React from 'react'
import Testimonials from '../components/sections/Testimonials'

const TestimonialsPage: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Đánh giá
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Một vài chia sẻ từ đồng nghiệp & khách hàng
        </h1>
        <p className="max-w-3xl text-sm text-[color:var(--text-secondary-color)]">
          Những phản hồi này giúp mình nhìn lại cách làm việc, giao tiếp và cải thiện chất lượng sản phẩm
          qua từng dự án.
        </p>
      </section>

      <Testimonials />
    </main>
  )
}

export default TestimonialsPage

