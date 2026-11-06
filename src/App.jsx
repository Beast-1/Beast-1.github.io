import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { AboutGrid } from './components/sections/AboutGrid'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <AboutGrid />
        <Projects />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
