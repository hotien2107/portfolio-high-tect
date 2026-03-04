import type React from 'react'
import Timeline from '../components/sections/Timeline'

const TimelinePage: React.FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:pt-28">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--color-primary]">
          Hành trình
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">
          Hành trình đến với frontend & lập trình web
        </h1>
        <p className="max-w-3xl text-sm text-[color:var(--text-secondary-color)]">
          Trang này tổng hợp chi tiết hơn về các cột mốc quan trọng trong quá trình mình học và làm việc
          với lập trình, đặc biệt là mảng frontend.
        </p>
      </section>

      <Timeline />
    </main>
  )
}

export default TimelinePage

