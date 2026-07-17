import { Mail, Sparkle } from 'lucide-react'
import { HERO_PHOTO, HERO_WORDMARK, profile, stats } from '../../data/portfolio'
import { WordmarkBackground } from '../ui/WordmarkBackground'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { useGithubStats } from '../../hooks/useGithubStats'
import './Hero.css'

export function Hero() {
  const publicRepos = useGithubStats()
  const heroStats = publicRepos ? [...stats, { label: 'Public Repos', value: publicRepos }] : stats

  return (
    <section id="top" className="hero">
      <WordmarkBackground word={HERO_WORDMARK} />

      <div className="hero-top-meta">
        <div className="hero-meta-left">
          <span>{profile.roles[0]}</span>
          <span>{profile.roles[1] ?? profile.roles[0]}</span>
        </div>
        <div className="hero-meta-right">
          <Sparkle size={14} />
          <span>Available for work</span>
        </div>
      </div>

      <div className="container hero-main">
        <div className="hero-intro">
          <RevealOnScroll y={16}>
            <p className="hero-script">Hello, I&apos;m</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <h1 className="hero-name">{profile.name}</h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="hero-roles">{profile.roles.join(' & ')}</p>
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

        <div className="hero-photo-col">
          <img
            className="hero-photo"
            src={HERO_PHOTO}
            alt={profile.name}
            width={210}
            height={377}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <RevealOnScroll delay={0.3} y={0}>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
