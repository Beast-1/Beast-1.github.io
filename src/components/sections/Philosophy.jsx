import { philosophy } from '../../data/portfolio'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import './Philosophy.css'

export function Philosophy() {
  return (
    <section className="philosophy section">
      <div className="container">
        <RevealOnScroll>
          <p className="philosophy-quote">&ldquo;{philosophy.text}&rdquo;</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
