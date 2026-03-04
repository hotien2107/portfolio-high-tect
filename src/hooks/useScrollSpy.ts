import { useEffect, useState } from 'react'

export interface SectionConfig {
  id: string
  offset?: number
}

const useScrollSpy = (sections: SectionConfig[], defaultActiveId?: string) => {
  const [activeId, setActiveId] = useState<string | undefined>(defaultActiveId)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      let currentId = defaultActiveId

      sections.forEach(({ id, offset = 120 }) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.offsetTop - offset
        if (scrollPosition >= top) {
          currentId = id
        }
      })

      setActiveId(currentId)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, defaultActiveId])

  return activeId
}

export default useScrollSpy
