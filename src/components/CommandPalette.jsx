import { useEffect, useMemo, useRef, useState } from 'react'
import { Mail, MoonStar, Navigation2, SunMedium } from 'lucide-react'
import { navigation, profile, RESUME_PATH } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import './CommandPalette.css'

export function CommandPalette({ isOpen, onClose, theme, onToggleTheme }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)

  const commands = useMemo(
    () => [
      ...navigation.map((item) => ({
        id: `nav-${item.href}`,
        label: `Go to ${item.label}`,
        icon: Navigation2,
        run: () => {
          window.location.hash = item.href
        },
      })),
      {
        id: 'theme',
        label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
        icon: theme === 'dark' ? SunMedium : MoonStar,
        run: onToggleTheme,
      },
      {
        id: 'email',
        label: 'Copy email address',
        icon: Mail,
        run: () => navigator.clipboard?.writeText(profile.email),
      },
      {
        id: 'github',
        label: 'Open GitHub profile',
        icon: GithubIcon,
        run: () => window.open(profile.github, '_blank', 'noreferrer'),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn profile',
        icon: LinkedinIcon,
        run: () => window.open(profile.linkedin, '_blank', 'noreferrer'),
      },
      {
        id: 'resume',
        label: 'Download résumé',
        icon: Navigation2,
        run: () => {
          const link = document.createElement('a')
          link.href = RESUME_PATH
          link.download = ''
          link.click()
        },
      },
    ],
    [theme, onToggleTheme]
  )

  const filtered = useMemo(
    () => commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
    [commands, query]
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIndex(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [isOpen])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const command = filtered[activeIndex]
      if (command) {
        command.run()
        onClose()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="palette-input"
          type="text"
          placeholder="Type a command…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul className="palette-list">
          {filtered.length === 0 && <li className="palette-empty">No matching commands</li>}
          {filtered.map((command, i) => {
            const Icon = command.icon
            return (
              <li
                key={command.id}
                className={i === activeIndex ? 'palette-item active' : 'palette-item'}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  command.run()
                  onClose()
                }}
              >
                <Icon size={16} />
                <span>{command.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
