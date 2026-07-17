import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { CommandPalette } from './components/CommandPalette'
import { Hero } from './components/sections/Hero'
import { StatStrip } from './components/sections/StatStrip'
import { EducationSkills } from './components/sections/EducationSkills'
import { Projects } from './components/sections/Projects'
import { HowIBuild } from './components/sections/HowIBuild'
import { Philosophy } from './components/sections/Philosophy'
import { Contact } from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} onToggleTheme={toggle} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <StatStrip />
        <EducationSkills />
        <Projects />
        <HowIBuild />
        <Philosophy />
        <Contact />
      </main>
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        theme={theme}
        onToggleTheme={toggle}
      />
    </MotionConfig>
  )
}

export default App
