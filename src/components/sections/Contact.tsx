import type React from 'react'
import ScrollReveal from '../animations/ScrollReveal'

const Contact: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="hud-label">Subsystem · Communication Dock</p>
        <h2 className="font-tech text-xl md:text-2xl">Initiate Contact Protocol</h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary-color)]">
          Gửi tín hiệu hợp tác thông qua giao diện truyền dữ liệu. Mình sẽ phản hồi khi nhận được gói tin.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ScrollReveal className="cockpit-panel scanlines rounded-2xl p-5">
          <form className="space-y-4 text-sm" onSubmit={(e) => e.preventDefault()}>
            <p className="terminal-reveal font-tech text-xs tracking-[0.18em] text-[--color-primary]">// uplink.form :: secure_channel.active</p>
            <div className="grid gap-4 md:grid-cols-2">
              <input id="name" name="name" className="input-surface rounded-lg px-3 py-2 text-xs outline-none transition focus:border-[--color-primary]" placeholder="NAME" />
              <input id="email" name="email" type="email" className="input-surface rounded-lg px-3 py-2 text-xs outline-none transition focus:border-[--color-primary]" placeholder="EMAIL" />
            </div>
            <input id="topic" name="topic" className="input-surface w-full rounded-lg px-3 py-2 text-xs outline-none transition focus:border-[--secondary-color]" placeholder="MISSION SUBJECT" />
            <textarea id="message" name="message" rows={4} className="input-surface w-full resize-none rounded-lg px-3 py-2 text-xs outline-none transition focus:border-[--secondary-color]" placeholder="TRANSMISSION PAYLOAD..." />

            <button type="submit" className="inline-flex items-center justify-center rounded-full border border-[--color-primary]/70 bg-[--color-primary]/10 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[--color-primary] shadow-[0_0_24px_rgba(40,216,255,0.34)] transition hover:bg-[--color-primary]/20 hover:shadow-[0_0_34px_rgba(40,216,255,0.55)]">
              Send Signal
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={120} className="space-y-4 text-sm text-foreground/70">
          <div className="cockpit-panel rounded-2xl p-5">
            <p className="font-tech text-xs uppercase tracking-[0.22em] text-foreground/55">System Status</p>
            <div className="mt-4 space-y-3 text-xs">
              <p><span className="text-foreground/45">Operator:</span> Ho Hoang Viet Tien</p>
              <p><span className="text-foreground/45">Location:</span> Ho Chi Minh City, Vietnam</p>
              <p><span className="text-foreground/45">Preferred Channel:</span> email / product collab</p>
            </div>
            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[color:color-mix(in_oklab,var(--text-color)_14%,transparent)]">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[--color-primary] to-[--secondary-color]" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
