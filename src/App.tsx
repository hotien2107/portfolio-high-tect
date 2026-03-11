import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Hero from './components/sections/Hero'
import Timeline from './components/sections/Timeline'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import BlogSection from './components/sections/Blog'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import SystemDataPanel from './components/sections/SystemDataPanel'
import CursorSystem from './components/ui/CursorSystem'
import BootSequence from './components/ui/BootSequence'
import ThreeBackground from './components/backgrounds/ThreeBackground'
import DynamicBackgroundSystem from './components/backgrounds/DynamicBackgroundSystem'
import useSystemScrollAnimations from './hooks/useSystemScrollAnimations'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import AboutPage from './pages/AboutPage'
import TimelinePage from './pages/TimelinePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'

const HomePage = () => {
  useSystemScrollAnimations()

  return (
  <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-14 px-4 pb-12 pt-28 sm:gap-16 md:gap-20 md:px-8 lg:pt-32">
    <section id="hero" className="scroll-module">
      <Hero />
    </section>

    <section id="timeline" className="scroll-module">
      <Timeline />
    </section>

    <section id="skills" className="scroll-module">
      <Skills />
    </section>

    <section id="projects" className="scroll-module">
      <Projects />
    </section>

    <section id="system-data" className="scroll-module">
      <SystemDataPanel />
    </section>

    <section id="blog" className="scroll-module">
      <BlogSection />
    </section>

    <section id="testimonials" className="scroll-module">
      <Testimonials />
    </section>

    <section id="contact" className="scroll-module">
      <Contact />
    </section>
  </main>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <ThreeBackground />
      <DynamicBackgroundSystem />
      <BootSequence />
      <CursorSystem />

      <div className="relative z-10 flex min-h-screen flex-col aurora-flow">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App