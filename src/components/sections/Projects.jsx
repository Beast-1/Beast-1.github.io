import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { otherWork, profile, projectCategories, projects } from '../../data/portfolio'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  )

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <a className="projects-view-all" href={profile.github} target="_blank" rel="noreferrer">
            View all on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="projects-filters" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((category) => {
            const count =
              category === 'All' ? projects.length : projects.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                type="button"
                className={`filter-pill${activeCategory === category ? ' is-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <span className="filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="projects-list">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        <div className="other-work">
          <span className="other-work-label">Other work</span>
          <ul className="other-work-list">
            {otherWork.map((item) => (
              <li key={item.title}>
                <span>{item.title}</span>
                <span className="other-work-note">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
