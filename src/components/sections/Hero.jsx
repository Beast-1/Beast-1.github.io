import { Mail } from 'lucide-react'
import { HERO_PHOTO, profile } from '../../data/portfolio'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import './Hero.css'

function joinRoles(roles) {
  if (roles.length < 2) return roles.join('')
  return `${roles.slice(0, -1).join(', ')} & ${roles[roles.length - 1]}`
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-photo-bleed">
        <img
          className="hero-photo"
          src={HERO_PHOTO}
          alt={`Portrait of ${profile.name}`}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="hero-overlay container">
        <RevealOnScroll y={24}>
          <h1 className="hero-name">{profile.name}</h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08} className="hero-intro">
          <p className="hero-roles">
            {joinRoles(profile.roles)}, based in {profile.location}
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
