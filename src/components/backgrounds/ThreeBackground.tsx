import type React from 'react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import RadialGradientBackground from './RadialGradientBackground'

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    )
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    let primaryColor = new THREE.Color()

    const group = new THREE.Group()
    scene.add(group)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x38a6ff, 0.9, 25)
    pointLight.position.set(3.5, 3.5, 8)
    scene.add(pointLight)

    const aspect = window.innerWidth / window.innerHeight
    const radius = Math.max(5.5, 3.5 * aspect)

    const particleGeometry = new THREE.BufferGeometry()
    const PARTICLE_COUNT = 350
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const particleBase: THREE.Vector3[] = []

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const angle = Math.random() * Math.PI * 2
      const r = radius * (0.3 + Math.random() * 0.9)
      const x = Math.cos(angle) * r * 0.9
      const y = (Math.random() - 0.5) * 3.4
      const z = Math.sin(angle) * r * 0.6 - 1

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      particleBase.push(new THREE.Vector3(x, y, z))
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x6ad8ff,
      size: 0.04,
      transparent: true,
      opacity: 0.2, // significantly reduced for subtlety
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)
    
    // High Tech Neural Network Lines
    const linesGeometry = new THREE.BufferGeometry()
    const MAX_LINES = 1500
    const linePositions = new Float32Array(MAX_LINES * 6)
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    linesGeometry.setDrawRange(0, 0)
    
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x38a6ff,
      transparent: true,
      opacity: 0.04, // highly reduced
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(linesMesh)

    // Helper to sync theme colors
    const syncThemeColors = () => {
      const rootStyle = getComputedStyle(document.documentElement)
      const primaryStr = rootStyle.getPropertyValue('--primary-color').trim() || '#8dff69'
      primaryColor.set(primaryStr)
      
      pointLight.color.copy(primaryColor)
      particleMaterial.color.copy(primaryColor).lerp(new THREE.Color(0xffffff), 0.2)
      linesMaterial.color.copy(primaryColor)
      
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'
      if (isLight) {
        linesMaterial.opacity = 0.08 // better visibility on light background but still subtle
        particleMaterial.opacity = 0.35
      } else {
        linesMaterial.opacity = 0.04
        particleMaterial.opacity = 0.2
      }
    }

    syncThemeColors()

    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          syncThemeColors()
        }
      })
    })
    themeObserver.observe(document.documentElement, { attributes: true })

    let frameId: number
    const clock = new THREE.Clock()

    const mouse = new THREE.Vector2(0, 0)
    const targetRotation = { x: -0.18, y: 0.18 }

    const animate = () => {
      const elapsed = clock.getElapsedTime()

      targetRotation.x = -0.2 + mouse.y * 0.25
      targetRotation.y = 0.25 + mouse.x * 0.4

      group.rotation.x += (targetRotation.x - group.rotation.x) * 0.06
      group.rotation.y += (targetRotation.y - group.rotation.y) * 0.08

      const positionsAttr = particleGeometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const base = particleBase[i]
        let px = base.x
        let py = base.y

        const nx = base.x / (radius * 1.2)
        const ny = base.y / 3.5

        const dx = nx - mouse.x
        const dy = ny - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const falloff = THREE.MathUtils.clamp(1.4 - dist * 1.8, 0, 1)

        const attract = 0.25 * falloff
        px += (-dx * attract)
        py += (-dy * attract * 0.7)

        px += Math.sin(elapsed * 1.1 + i * 0.3) * 0.03
        py += Math.cos(elapsed * 1.0 + i * 0.2) * 0.03

        positionsAttr.setXYZ(i, px, py, base.z)
      }
      positionsAttr.needsUpdate = true

      // Update Neural Network connections
      let lineIndex = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p1x = positionsAttr.getX(i)
        const p1y = positionsAttr.getY(i)
        const p1z = positionsAttr.getZ(i)
        
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const p2x = positionsAttr.getX(j)
          const p2y = positionsAttr.getY(j)
          const p2z = positionsAttr.getZ(j)
          
          const distSq = (p1x - p2x) ** 2 + (p1y - p2y) ** 2 + (p1z - p2z) ** 2
          if (distSq < 2.0 && lineIndex < MAX_LINES) {
            const linesPos = linesGeometry.attributes.position as THREE.BufferAttribute
            linesPos.setXYZ(lineIndex * 2, p1x, p1y, p1z)
            linesPos.setXYZ(lineIndex * 2 + 1, p2x, p2y, p2z)
            lineIndex++
          }
        }
      }
      linesGeometry.setDrawRange(0, lineIndex * 2)
      ;(linesGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true

      pointLight.position.x = 4 + mouse.x * 2.4
      pointLight.position.y = 3 + mouse.y * 1.8

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      mouse.x = x
      mouse.y = -y
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      cancelAnimationFrame(frameId)
      themeObserver.disconnect()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      linesGeometry.dispose()
      linesMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <RadialGradientBackground />
    </div>
  )
}

export default ThreeBackground

