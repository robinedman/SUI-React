// Panel component
import React from "react"

const Panel = ({ title }) => {
  return (
    <aside className="bc-link-panel-text">
      <a href="#" target="_blank" title="Opens in a new tab or window." className="bc-external">
        <h2 className="bc-link-panel-text-title">{title}</h2>
      </a>
    </aside>
  )
}

export default Panel
