import { useState } from 'react'
import { Command, Download, Menu, X } from 'lucide-react'
import { navigation, profile, RESUME_PATH } from '../../data/portfolio'
import { ThemeToggle } from './ThemeToggle'
import './Navbar.css'

export function Navbar({ theme, onToggleTheme, onOpenPalette }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          {profile.name.split(' ')[0]}
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="navbar-palette-hint" onClick={onOpenPalette} aria-label="Open command palette">
            <Command size={14} />
            <span>K</span>
          </button>
          <a className="navbar-resume" href={RESUME_PATH} download>
            <Download size={14} />
            <span>Résumé</span>
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="navbar-mobile" aria-label="Mobile">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
