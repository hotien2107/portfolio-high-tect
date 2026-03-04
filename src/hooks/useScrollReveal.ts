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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              setTimeout(() => setIsVisible(true), delay)
            } else {
              setIsVisible(true)
            }
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, delay, once])

  return isVisible
}

export default useScrollReveal
