import type React from 'react'
import { useEffect, useRef } from 'react'
import type { ElementType } from 'react'
import { gsap } from 'gsap'
import useScrollReveal from '../../hooks/useScrollReveal'

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  delay?: number
  once?: boolean
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  as: Component = 'div',
  delay = 0,
  once = true,
  className = '',
  children,
  ...rest
}) => {
  const ref = useRef<HTMLElement | null>(null)
  const isVisible = useScrollReveal(ref as React.RefObject<HTMLElement>, { delay, once })

  useEffect(() => {
    const element = ref.current
    if (!element || !isVisible) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: delay ? delay / 1000 : 0,
        },
      )
    }, element)

    return () => {
      ctx.revert()
    }
  }, [isVisible, delay])

  return (
    <Component
      ref={ref as React.RefObject<any>}
      className={[
        'will-change-transform will-change-opacity',
        !isVisible ? 'opacity-0 translate-y-6' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal
