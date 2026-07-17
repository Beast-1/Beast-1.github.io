import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { otherWork, profile, projects } from '../../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './Projects.css'

const INITIAL_VISIBLE = 6

export function Projects() {
  const trackRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = projects.length > visibleCount

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, scrollWidth, clientWidth } = track
    setCanPrev(scrollLeft > 4)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      track.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows, visibleCount])

  function scrollByOne(direction) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.project-slide')
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0
    const step = card ? card.offsetWidth + gap : track.clientWidth
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <RevealOnScroll>
          <div className="projects-header">
            <div>
              <p className="eyebrow">03 · Selected Work</p>
              <h2 className="section-title">Projects</h2>
            </div>
            <a className="projects-view-all" href={profile.github} target="_blank" rel="noreferrer">
              View all projects
              <ArrowUpRight size={16} />
            </a>
          </div>
        </RevealOnScroll>

        <div className="projects-slider">
          <button
            type="button"
            className="slider-arrow slider-arrow-prev"
            onClick={() => scrollByOne(-1)}
            disabled={!canPrev}
            aria-label="Previous project"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="projects-track" ref={trackRef}>
            {visibleProjects.map((project) => (
              <div className="project-slide" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            onClick={() => scrollByOne(1)}
            disabled={!canNext}
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {hasMore && (
          <div className="projects-loadmore">
            <button type="button" className="btn btn-ghost" onClick={() => setVisibleCount(projects.length)}>
              Load more ({projects.length - visibleCount})
            </button>
          </div>
        )}

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
