// Linkpanel component
import React from "react";
import Icon from "../Icons/Icon";

const Linkpanel = ({ title, className, href, icon, text, target }) => {
  target = target || href.includes("http") ? "_blank" : "";

  return (
    <aside className={`bc-link-panel-text ${className}`}>
      <a href={href} target={target} title={title}>
        {icon && <span className="bc-svg-circle"><Icon name={icon} /></span>}
        <h2 className="bc-link-panel-text-title">
          {title}
          {target === "_blank" && <Icon name="popup" />}
        </h2>
        {text && <p className="bc-link-panel-text-desc">{text}</p>}
      </a>
    </aside>
  );
};

Linkpanel.propTypes = {
  href: React.PropTypes.string.isRequired
};

export default Linkpanel;
