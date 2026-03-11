import { Download } from 'lucide-react'

const logs = [
  '>> PROFILE MATRIX SYNCHRONIZED',
  '>> EXPERIENCE MODULES INDEXED',
  '>> RESEARCH LOGS VALIDATED',
  '>> SKILL MATRIX CALIBRATED',
]

const bars = [
  ['SYSTEM PROFILE', 98],
  ['PERSONAL DATA', 92],
  ['EXPERIENCE MODULES', 95],
  ['RESEARCH LOGS', 88],
  ['SKILL MATRIX', 97],
] as const

const SystemDataPanel = () => {
  return (
    <section className="space-y-5">
      <div>
        <p className="hud-label">SYSTEM DATA LOADER</p>
        <h2 className="mt-2 text-2xl font-semibold">Curriculum Vitae // Mission Archive</h2>
      </div>

      <div className="cockpit-panel scanlines holo-card rounded-2xl p-5">
        <div className="mb-5 grid gap-3 md:grid-cols-2">
          {bars.map(([label, value]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <span className="data-bar block h-full rounded-full" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-black/30 p-3 font-tech text-xs text-[--color-primary]">
          {logs.map((log) => (
            <p key={log} className="terminal-reveal mb-1 max-w-fit">{log}</p>
          ))}
        </div>

        <a
          href="/cv.pdf"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[--color-primary]/55 bg-[--color-primary]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-primary]"
          data-magnetic
        >
          <Download className="h-4 w-4" /> EXPORT SYSTEM DATA
        </a>
      </div>
    </section>
  )
}

export default SystemDataPanel
