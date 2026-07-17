import { CheckCircle2, FlaskConical, Hammer, Rocket, Search } from 'lucide-react'
import { processSteps } from '../../data/portfolio'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './HowIBuild.css'

const ICONS = {
  Search,
  FlaskConical,
  Hammer,
  CheckCircle2,
  Rocket,
}

export function HowIBuild() {
  return (
    <section id="process" className="how-i-build section">
      <div className="container">
        <RevealOnScroll>
          <p className="eyebrow">04 · Process</p>
          <h2 className="section-title">How I Build</h2>
        </RevealOnScroll>

        <div className="process-steps">
          {processSteps.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <RevealOnScroll key={step.number} delay={i * 0.06}>
                <div className="process-step">
                  <div className="process-icon">
                    <Icon size={20} />
                  </div>
                  <span className="process-number">{step.number}</span>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.description}</p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
