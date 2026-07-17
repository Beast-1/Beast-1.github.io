import { Mail, MapPin, MessageCircle, Sparkle } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { LinkedinIcon } from '../ui/BrandIcons'
import { CodeWindow } from '../ui/CodeWindow'
import './Contact.css'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid">
        <RevealOnScroll>
          <div className="contact-copy">
            <p className="eyebrow">05 · Contact</p>
            <h2 className="contact-title">Let&apos;s work together.</h2>
            <p className="contact-lede">
              I&apos;m open to new projects and collaborations. Reach out however&apos;s easiest for you.
            </p>

            <div className="contact-rows">
              <a className="contact-row" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                <span>{profile.email}</span>
              </a>
              {profile.whatsapp && (
                <a className="contact-row" href={profile.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              )}
              <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <div className="contact-row contact-row-static">
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="contact-availability">
              <Sparkle size={14} />
              <span>Available for freelance</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <CodeWindow />
        </RevealOnScroll>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            &copy; {year} {profile.name}
          </span>
          <span>Built with React &amp; Vite, deployed on GitHub Pages.</span>
        </div>
      </footer>
    </section>
  )
}
