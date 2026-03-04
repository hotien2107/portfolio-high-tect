import type React from 'react'

const RadialGradientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-32 top-[-10%] h-72 w-72 rounded-full bg-[--color-primary] opacity-20 blur-3xl md:-left-24 md:h-96 md:w-96" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-[--color-primary] opacity-15 blur-3xl md:bottom-[-15%] md:right-[-5%] md:h-[28rem] md:w-[28rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[--color-primary]/20 bg-gradient-radial from-[--color-primary]/12 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(141,255,105,0.12),_transparent_55%)] opacity-50" />
    </div>
  )
}

export default RadialGradientBackground