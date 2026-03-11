import { useEffect, useState } from 'react'

const steps = [
  'Initializing interface...',
  'Loading navigation systems...',
  'Activating Aurora UI...',
  'Booting AI core...',
]

const BootSequence = () => {
  const [visible, setVisible] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((v) => {
        if (v >= steps.length - 1) {
          window.clearInterval(timer)
          window.setTimeout(() => setVisible(false), 800)
          return v
        }
        return v + 1
      })
    }, 600)

    return () => window.clearInterval(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#03060f]/95 backdrop-blur-md">
      <div className="cockpit-panel w-[min(92vw,520px)] rounded-2xl p-6">
        <p className="hud-label mb-3">SYSTEM BOOT</p>
        {steps.map((step, i) => (
          <p key={step} className={`terminal-reveal mb-2 text-sm text-foreground/90 ${i <= index ? 'opacity-100' : 'opacity-30'}`}>
            {i <= index ? step : '...'}
          </p>
        ))}
      </div>
    </div>
  )
}

export default BootSequence
