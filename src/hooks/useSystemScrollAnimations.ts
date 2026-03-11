import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useSystemScrollAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sections = gsap.utils.toArray<HTMLElement>('.scroll-module')
    const cards = gsap.utils.toArray<HTMLElement>('.holo-card')

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        const dir = index % 3
        const from =
          dir === 0 ? { x: -70, rotate: -2 } : dir === 1 ? { x: 70, rotate: 1.8 } : { y: 70, rotate: 1.4 }

        gsap.fromTo(
          section,
          { autoAlpha: 0, ...from },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
              invalidateOnRefresh: true,
              onEnter: () => section.classList.add('module-active'),
              onEnterBack: () => section.classList.add('module-active'),
              onLeave: () => section.classList.remove('module-active'),
              onLeaveBack: () => section.classList.remove('module-active'),
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
            scrollTrigger: { trigger: card, start: 'top 88%' },
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
