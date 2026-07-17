import { stats } from '../../data/portfolio'
import { useGithubStats } from '../../hooks/useGithubStats'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './StatStrip.css'

export function StatStrip() {
  const publicRepos = useGithubStats()

  const tiles = publicRepos
    ? [...stats, { label: 'Public Repos', value: publicRepos }]
    : stats

  return (
    <section className="stat-strip">
      <div className="container stat-strip-grid">
        {tiles.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 0.08}>
            <div className="stat-tile">
              <div className="stat-value">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
