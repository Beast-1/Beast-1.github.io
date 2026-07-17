import { otherWork, projects } from '../../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <RevealOnScroll>
          <p className="eyebrow">03 · Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </RevealOnScroll>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
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
        </RevealOnScroll>
      </div>
    </section>
  )
}
