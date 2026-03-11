import { useEffect, useState } from 'react'

interface Options {
  delay?: number
  once?: boolean
}

const useScrollReveal = (
  ref: React.RefObject<HTMLElement>,
  { delay = 0, once = true }: Options = {},
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let revealTimeout: number | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              revealTimeout = window.setTimeout(() => setIsVisible(true), delay)
            } else {
              setIsVisible(true)
            }

            if (once) {
              observer.unobserve(entry.target)
            }
            return
          }

          if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => {
      if (revealTimeout) {
        window.clearTimeout(revealTimeout)
      }
      observer.disconnect()
    }
  }, [ref, delay, once])

  return isVisible
}

export default useScrollReveal
