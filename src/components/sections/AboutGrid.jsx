import { certifications, philosophy, processSteps, profile, skills } from '../../data/portfolio'
import { SkillPill } from '../ui/SkillPill'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './AboutGrid.css'

export function AboutGrid() {
  return (
    <section id="about" className="about-grid section">
      <div className="container about-grid-columns">
        <RevealOnScroll>
          <div className="about-col">
            <p className="eyebrow">Certifications</p>
            <h2 className="about-col-title">Certifications &amp; Skills</h2>

            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.title} className="cert-item">
                  <span className="cert-title">{cert.title}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>

            <div id="skills" className="skill-groups">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="skill-group">
                  <span className="skill-group-label">{group}</span>
                  <div className="skill-group-pills">
                    {items.map((skill) => (
                      <SkillPill key={skill}>{skill}</SkillPill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div id="process" className="about-col">
            <p className="eyebrow">Process</p>
            <h2 className="about-col-title">How I Build</h2>

            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number} className="process-item">
                  <span className="process-number">{step.number}</span>
                  <div>
                    <span className="process-item-title">{step.title}</span>
                    <p className="process-item-desc">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="quote-card">
            <p className="quote-text">&ldquo;{philosophy.text}&rdquo;</p>
            <span className="quote-signature">{profile.name}</span>
            <a className="btn btn-primary quote-cta" href="#contact">
              Let&apos;s create something together
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
