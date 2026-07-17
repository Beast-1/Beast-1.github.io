import './LaptopMockup.css'

export function LaptopMockup() {
  return (
    <div className="laptop-mockup" aria-hidden="true">
      <div className="laptop-screen">
        <div className="laptop-screen-bar" />
        <div className="laptop-screen-content">
          <span className="laptop-line laptop-line-title" />
          <span className="laptop-line" />
          <span className="laptop-line laptop-line-short" />
          <div className="laptop-blocks">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  )
}
