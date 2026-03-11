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
import ThreeBackground from './components/backgrounds/ThreeBackground'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import AboutPage from './pages/AboutPage'
import TimelinePage from './pages/TimelinePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'

const HomePage = () => (
  <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-24 px-4 pb-16 pt-32 md:px-8 lg:pt-32">
    <section id="hero">
      <Hero />
    </section>

    <section id="timeline">
      <Timeline />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="blog">
      <BlogSection />
    </section>

    <section id="testimonials">
      <Testimonials />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </main>
)

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <ThreeBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
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