import { certifications, skills } from '../../data/portfolio'
import { SkillPill } from '../ui/SkillPill'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './EducationSkills.css'

export function EducationSkills() {
  return (
    <section id="about" className="edu-skills section">
      <div className="container edu-skills-grid">
        <RevealOnScroll>
          <div>
            <p className="eyebrow">01 · Education</p>
            <h2 className="section-title">Certifications</h2>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.title} className="cert-item">
                  <span className="cert-title">{cert.title}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div id="skills">
            <p className="eyebrow">02 · Skills</p>
            <h2 className="section-title">What I work with</h2>
            <div className="skill-groups">
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
      </div>
    </section>
  )
}
