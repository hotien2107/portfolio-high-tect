import { type ComponentType, useEffect, useMemo, useRef, useState } from 'react'
import { CircleDot, Hand, LocateFixed, Rocket, Sparkles, Undo2, Wand2 } from 'lucide-react'
import useDeviceProfile from '../../hooks/useDeviceProfile'

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
  const { isTouch, reducedMotion, tier } = useDeviceProfile()
  const shouldDisableHeavyCursor = isTouch || reducedMotion

  const [mode, setMode] = useState<CursorMode>('aurora')
  const [enabled, setEnabled] = useState(!shouldDisableHeavyCursor)
  const [panelOpen, setPanelOpen] = useState(false)
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const [trail, setTrail] = useState<TrailPoint[]>([])

  const positionRef = useRef(position)
  const trailRef = useRef<TrailPoint[]>([])
  const rafRef = useRef<number | null>(null)
  const frameRef = useRef(0)
  const activeMagneticRef = useRef<HTMLElement | null>(null)

  const isActive = enabled && !shouldDisableHeavyCursor

  useEffect(() => {
    document.body.classList.toggle('cursor-hidden', isActive)
    return () => document.body.classList.remove('cursor-hidden')
  }, [isActive])

  useEffect(() => {
    if (!isActive) return

    const onMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY }
      if (frameRef.current % (tier === 'desktop' ? 1 : 2) === 0) {
        const maxTrail = tier === 'desktop' ? 7 : 4
        trailRef.current = [{ x: event.clientX, y: event.clientY, life: 1 }, ...trailRef.current].slice(0, maxTrail)
      }
      frameRef.current += 1

      const magneticEl = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-magnetic]') ?? null
      if (activeMagneticRef.current && activeMagneticRef.current !== magneticEl) {
        activeMagneticRef.current.style.transform = ''
      }

      activeMagneticRef.current = magneticEl
      if (magneticEl) {
        const bounds = magneticEl.getBoundingClientRect()
        magneticEl.style.transform = `translate3d(${(event.clientX - (bounds.left + bounds.width / 2)) * 0.08}px, ${(event.clientY - (bounds.top + bounds.height / 2)) * 0.08}px, 0)`
      }

      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        setPosition(positionRef.current)
        setTrail(trailRef.current)
        rafRef.current = null
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (activeMagneticRef.current) {
        activeMagneticRef.current.style.transform = ''
      }
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [isActive, tier])

  useEffect(() => {
    if (!isActive) return

    let frameId = 0
    let lastFrame = performance.now()

    const decay = (time: number) => {
      const delta = Math.min((time - lastFrame) / 16.6, 2)
      lastFrame = time

      trailRef.current = trailRef.current.map((point) => ({
        ...point,
        life: point.life - (tier === 'desktop' ? 0.07 : 0.12) * delta,
      })).filter((point) => point.life > 0)

      setTrail(trailRef.current)
      frameId = window.requestAnimationFrame(decay)
    }

    frameId = window.requestAnimationFrame(decay)
    return () => window.cancelAnimationFrame(frameId)
  }, [isActive, tier])

  const ActiveIcon = useMemo(() => modes.find((item) => item.id === mode)?.icon ?? Sparkles, [mode])

  if (shouldDisableHeavyCursor) return null

  if (!enabled)
    return (
      <button onClick={() => setEnabled(true)} className="fixed bottom-5 right-5 z-50 rounded-xl border border-white/20 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.16em]">
        Enable Cursor
      </button>
    )

  return (
    <>
      <div className={`custom-cursor custom-cursor--${mode}`} style={{ left: position.x, top: position.y }}><ActiveIcon className="h-4 w-4" /></div>
      {(mode === 'aurora' || mode === 'comet') && !isTouch && <div className="pointer-events-none fixed inset-0 z-[70]">{trail.map((point, index) => <span key={`${point.x}-${point.y}-${index}`} className={`cursor-trail ${mode === 'comet' ? 'cursor-trail--comet' : ''}`} style={{ left: point.x, top: point.y, opacity: point.life, transform: `scale(${0.2 + point.life * 0.9})` }} />)}</div>}

      <div className="cockpit-panel fixed bottom-5 right-5 z-50 hidden w-64 rounded-2xl p-3 md:block">
        <div className="mb-2 flex items-center justify-between"><p className="hud-label">Cursor Control</p><button onClick={() => setPanelOpen((p) => !p)} className="text-xs uppercase tracking-[0.14em] text-[--color-primary]">{panelOpen ? 'Hide' : 'Show'}</button></div>
        {panelOpen && <div className="space-y-2">{modes.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setMode(item.id)} className={`flex w-full items-center justify-between rounded-lg border px-2 py-1.5 text-xs ${mode === item.id ? 'border-[--color-primary] bg-[--color-primary]/20' : 'border-white/15 hover:border-[--color-primary]/55'}`}><span>{item.label}</span><Icon className="h-4 w-4" /></button> })}<div className="flex gap-2"><button onClick={() => setEnabled(false)} className="flex-1 rounded-lg border border-white/20 px-2 py-1 text-[10px] uppercase">Toggle</button><button onClick={() => setMode('aurora')} className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-white/20 px-2 py-1 text-[10px] uppercase"><Undo2 className="h-3 w-3" />Reset</button></div></div>}
      </div>
    </>
  )
}

export default CursorSystem
