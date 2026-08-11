import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { AboutGrid } from './components/sections/AboutGrid'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} onToggleTheme={toggle} />
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
