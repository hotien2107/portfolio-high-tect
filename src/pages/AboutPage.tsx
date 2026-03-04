import type React from 'react'
import Hero from '../components/sections/Hero'

const AboutPage: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section>
        <Hero />
      </section>

      <section className="space-y-3 text-sm text-[color:var(--text-secondary-color)]">
        <h2 className="text-base font-semibold text-[var(--text-color)]">
          Về hành trình của mình
        </h2>
        <p>
          Mình bắt đầu với các bài tập thuật toán, sau đó chuyển dần sang web frontend với HTML/CSS,
          JavaScript và React. Mục tiêu hiện tại là trở thành một frontend developer có khả năng xây
          dựng những sản phẩm giao diện hoàn chỉnh, dễ bảo trì và thân thiện với người dùng.
        </p>
        <p>
          Portfolio này vừa là nơi tổng hợp các dự án đã làm, vừa là chỗ để mình thử nghiệm những
          ý tưởng về UI/UX, animation và kiến trúc frontend. Nếu bạn quan tâm đến việc hợp tác hoặc
          trao đổi thêm, hãy ghé phần Liên hệ để connect.
        </p>
      </section>
    </main>
  )
}

export default AboutPage

