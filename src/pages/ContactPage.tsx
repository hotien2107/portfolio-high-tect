import type React from 'react'
import Contact from '../components/sections/Contact'

const ContactPage: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Liên hệ
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Kết nối & trao đổi về dự án
        </h1>
        <p className="max-w-3xl text-sm text-[color:var(--text-secondary-color)]">
          Nếu bạn có dự án cần hỗ trợ về frontend, muốn tối ưu lại giao diện hiện tại hoặc chỉ đơn giản
          là muốn kết nối và trao đổi thêm, hãy gửi cho mình vài dòng mô tả ngắn trong form bên dưới.
        </p>
      </section>

      <Contact />
    </main>
  )
}

export default ContactPage

