import { ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

const CARD_BACKGROUNDS = {
  argus:
    'radial-gradient(circle at 30% 20%, var(--color-accent-soft), transparent 60%), linear-gradient(150deg, var(--color-bg-elevated) 0%, #1a0a0a 100%)',
  neva: 'conic-gradient(from 120deg at 70% 30%, var(--color-accent-soft), transparent 40%, var(--color-accent-soft) 80%), linear-gradient(150deg, var(--color-bg-elevated), var(--color-bg))',
  ocr: 'linear-gradient(160deg, var(--color-bg-elevated) 0%, var(--color-accent-soft) 60%, var(--color-bg) 100%)',
  'bike-inventory':
    'radial-gradient(circle at 75% 25%, var(--color-accent-soft), transparent 55%), linear-gradient(200deg, var(--color-bg-elevated), #140505)',
}

export function ProjectCard({ project }) {
  const Wrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Wrapper className="project-card" {...wrapperProps}>
      <div className="project-image" style={{ background: CARD_BACKGROUNDS[project.id] }}>
        <span className="project-number">{project.number}</span>
        <span className="project-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="project-card-body">
        <div className="project-card-heading">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-status">{project.status}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
