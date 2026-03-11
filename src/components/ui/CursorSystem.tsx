import { type ComponentType, useEffect, useMemo, useState } from 'react'
import { CircleDot, Hand, LocateFixed, Rocket, Sparkles, Undo2, Wand2 } from 'lucide-react'

type CursorMode = 'aurora' | 'rocket' | 'energy' | 'gesture' | 'dot' | 'comet'
type TrailPoint = { x: number; y: number; life: number }

const modes: { id: CursorMode; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { id: 'aurora', label: 'Aurora Trail', icon: Sparkles },
  { id: 'rocket', label: 'Rocket', icon: Rocket },
  { id: 'energy', label: 'Energy', icon: LocateFixed },
  { id: 'gesture', label: 'Gesture Hand', icon: Hand },
  { id: 'dot', label: 'Minimal Dot', icon: CircleDot },
  { id: 'comet', label: 'Comet', icon: Wand2 },
]

const CursorSystem = () => {
  const [mode, setMode] = useState<CursorMode>('aurora')
  const [enabled, setEnabled] = useState(true)
  const [panelOpen, setPanelOpen] = useState(false)
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const [trail, setTrail] = useState<TrailPoint[]>([])

  useEffect(() => {
    document.body.classList.toggle('cursor-hidden', enabled)
    return () => document.body.classList.remove('cursor-hidden')
  }, [enabled])

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setTrail((prev) => [{ x: event.clientX, y: event.clientY, life: 1 }, ...prev].slice(0, 14))

      const magneticEl = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-magnetic]')
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
        if (el !== magneticEl) el.style.transform = ''
      })

      if (magneticEl) {
        const bounds = magneticEl.getBoundingClientRect()
        magneticEl.style.transform = `translate3d(${(event.clientX - (bounds.left + bounds.width / 2)) * 0.08}px, ${(event.clientY - (bounds.top + bounds.height / 2)) * 0.08}px, 0)`
      }
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTrail((prev) => prev.map((t) => ({ ...t, life: t.life - 0.08 })).filter((t) => t.life > 0))
    }, 24)
    return () => window.clearInterval(timer)
  }, [])

  const ActiveIcon = useMemo(() => modes.find((item) => item.id === mode)?.icon ?? Sparkles, [mode])

  if (!enabled) return <button onClick={() => setEnabled(true)} className="fixed bottom-5 right-5 z-50 rounded-xl border border-white/20 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.16em]">Enable Cursor</button>

  return (
    <>
      <div className={`custom-cursor custom-cursor--${mode}`} style={{ left: position.x, top: position.y }}><ActiveIcon className="h-4 w-4" /></div>
      {(mode === 'aurora' || mode === 'comet') && <div className="pointer-events-none fixed inset-0 z-[70]">{trail.map((point, index) => <span key={`${point.x}-${point.y}-${index}`} className={`cursor-trail ${mode === 'comet' ? 'cursor-trail--comet' : ''}`} style={{ left: point.x, top: point.y, opacity: point.life, transform: `scale(${0.2 + point.life * 0.9})` }} />)}</div>}

      <div className="cockpit-panel fixed bottom-5 right-5 z-50 w-64 rounded-2xl p-3">
        <div className="mb-2 flex items-center justify-between"><p className="hud-label">Cursor Control</p><button onClick={() => setPanelOpen((p) => !p)} className="text-xs uppercase tracking-[0.14em] text-[--color-primary]">{panelOpen ? 'Hide' : 'Show'}</button></div>
        {panelOpen && <div className="space-y-2">{modes.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setMode(item.id)} className={`flex w-full items-center justify-between rounded-lg border px-2 py-1.5 text-xs ${mode === item.id ? 'border-[--color-primary] bg-[--color-primary]/20' : 'border-white/15 hover:border-[--color-primary]/55'}`}><span>{item.label}</span><Icon className="h-4 w-4" /></button> })}<div className="flex gap-2"><button onClick={() => setEnabled(false)} className="flex-1 rounded-lg border border-white/20 px-2 py-1 text-[10px] uppercase">Toggle</button><button onClick={() => setMode('aurora')} className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-white/20 px-2 py-1 text-[10px] uppercase"><Undo2 className="h-3 w-3" />Reset</button></div></div>}
      </div>
    </>
  )
}

export default CursorSystem
