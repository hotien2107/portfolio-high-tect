import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useSystemScrollAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sections = gsap.utils.toArray<HTMLElement>('.scroll-module')
    const cards = gsap.utils.toArray<HTMLElement>('.holo-card')

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              once: true,
            },
          },
        )
      })

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0.65, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay: (index % 4) * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          },
        )
      })
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

export default useSystemScrollAnimations
