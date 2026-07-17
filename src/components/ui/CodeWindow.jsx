import { profile } from '../../data/portfolio'
import './CodeWindow.css'

export function CodeWindow() {
  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window-bar">
        <span className="code-window-dot" />
        <span className="code-window-dot" />
        <span className="code-window-dot" />
        <span className="code-window-name">about-me.js</span>
      </div>
      <pre className="code-window-body">
        <code>
          <span className="tok-kw">const</span> <span className="tok-var">engineer</span> = {'{'}
          {'\n'}  <span className="tok-prop">name</span>: <span className="tok-str">'{profile.name}'</span>,
          {'\n'}  <span className="tok-prop">role</span>: <span className="tok-str">'{profile.roles[0]}'</span>,
          {'\n'}  <span className="tok-prop">location</span>: <span className="tok-str">'{profile.location}'</span>,
          {'\n'}  <span className="tok-prop">status</span>: <span className="tok-str">'shipping'</span>,
          {'\n'}
          {'}'};
        </code>
      </pre>
    </div>
  )
}
