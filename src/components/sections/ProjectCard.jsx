import { ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

const CARD_BACKGROUNDS = {
  argus:
    'radial-gradient(circle at 20% 20%, var(--color-accent-soft), transparent 60%), linear-gradient(135deg, var(--color-bg-elevated), var(--color-bg))',
  neva: 'conic-gradient(from 45deg, var(--color-accent-soft), transparent 40%, var(--color-accent-soft) 80%)',
  ocr: 'linear-gradient(160deg, var(--color-bg-elevated) 0%, var(--color-accent-soft) 100%)',
  'bike-inventory':
    'radial-gradient(circle at 80% 30%, var(--color-accent-soft), transparent 55%), linear-gradient(200deg, var(--color-bg-elevated), var(--color-bg))',
}

export function ProjectCard({ project }) {
  const Wrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Wrapper className="project-card" {...wrapperProps}>
      <div className="project-card-bg" style={{ background: CARD_BACKGROUNDS[project.id] }} />
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="project-arrow">
        <ArrowUpRight size={18} />
      </div>
    </Wrapper>
  )
}
