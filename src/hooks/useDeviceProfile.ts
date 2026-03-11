import { useEffect, useMemo, useState } from 'react'

export type DeviceTier = 'mobile' | 'tablet' | 'desktop'

export type DeviceProfile = {
  tier: DeviceTier
  isTouch: boolean
  reducedMotion: boolean
  lowPowerMode: boolean
  animationScale: number
}

const getProfile = (): DeviceProfile => {
  const width = window.innerWidth
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const memoryBudget = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
  const cpuBudget = navigator.hardwareConcurrency ?? 4

  const tier: DeviceTier = width < 768 ? 'mobile' : width < 1120 ? 'tablet' : 'desktop'
  const lowPowerMode = reducedMotion || isTouch || memoryBudget <= 4 || cpuBudget <= 4

  return {
    tier,
    isTouch,
    reducedMotion,
    lowPowerMode,
    animationScale: tier === 'desktop' ? 1 : tier === 'tablet' ? 0.65 : 0.35,
  }
}

const useDeviceProfile = () => {
  const [profile, setProfile] = useState<DeviceProfile>(() => getProfile())

  useEffect(() => {
    const pointerMedia = window.matchMedia('(pointer: coarse)')
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')

    const refresh = () => setProfile(getProfile())

    window.addEventListener('resize', refresh)
    pointerMedia.addEventListener('change', refresh)
    motionMedia.addEventListener('change', refresh)

    return () => {
      window.removeEventListener('resize', refresh)
      pointerMedia.removeEventListener('change', refresh)
      motionMedia.removeEventListener('change', refresh)
    }
  }, [])

  return useMemo(() => profile, [profile])
}

export default useDeviceProfile
