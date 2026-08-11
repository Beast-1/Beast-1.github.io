import { ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

export function ProjectCard({ project }) {
  const Wrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Wrapper className="project-card" {...wrapperProps}>
      <div className="project-image">
        <span className="project-monogram" aria-hidden="true">
          {project.title.charAt(0)}
        </span>
        <span className="project-number">{project.number}</span>
        {project.link && (
          <span className="project-arrow">
            <ArrowUpRight size={18} />
          </span>
        )}
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
