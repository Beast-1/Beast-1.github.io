import './WordmarkBackground.css'

export function WordmarkBackground({ word }) {
  return (
    <div className="wordmark-bg" aria-hidden="true">
      {word}
    </div>
  )
}
