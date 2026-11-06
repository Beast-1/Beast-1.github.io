import { ArrowUpRight } from 'lucide-react'
import './ProjectCard.css'

const STATUS_CLASS = {
  Flagship: 'status-live',
  Live: 'status-live',
  'In Progress': 'status-progress',
  Complete: 'status-done',
}

export function ProjectCard({ project }) {
  const Wrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noreferrer' } : {}
  const statusClass = STATUS_CLASS[project.status] || 'status-done'

  return (
    <Wrapper className="project-card" {...wrapperProps}>
      <div className="project-cover">
        {project.image ? (
          <img className="project-cover-image" src={project.image} alt="" loading="lazy" />
        ) : (
          <div className="project-cover-fallback">
            <span className="project-cover-category">{project.category}</span>
          </div>
        )}
        {project.link && (
          <span className="project-arrow">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-row-heading">
          <h3 className="project-title">{project.title}</h3>
          <span className={`project-status ${statusClass}`}>
            <span className="project-status-dot" aria-hidden="true" />
            {project.status}
          </span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-card-footer">
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <span className="project-year">{project.year}</span>
        </div>
      </div>
    </Wrapper>
  )
}
