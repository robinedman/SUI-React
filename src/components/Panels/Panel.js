// Panel component
import React from "react"

const Panel = ({ title, className }) => {
  return (
    <aside className={`bc-link-panel-text ${className}`}>
      <a href="#" target="_blank" title={title}>
        <h2 className="bc-link-panel-text-title">{title}</h2>
      </a>
    </aside>
  )
}

export default Panel
