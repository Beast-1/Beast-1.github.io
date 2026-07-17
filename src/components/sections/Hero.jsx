import { Mail } from 'lucide-react'
import { HERO_PHOTO, HERO_WORDMARK, profile } from '../../data/portfolio'
import { WordmarkBackground } from '../ui/WordmarkBackground'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <WordmarkBackground word={HERO_WORDMARK} />

      <div className="container hero-inner">
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src={HERO_PHOTO}
            alt={profile.name}
            width={280}
            height={280}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <RevealOnScroll y={16}>
          <p className="eyebrow">Available for work</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h1 className="hero-title">{profile.name}</h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="hero-roles">{profile.roles.join(' · ')}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="hero-tagline">{profile.tagline}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
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
