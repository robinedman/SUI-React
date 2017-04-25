// Linkpanel component
import React from "react";
import Icon from "../Icons/Icon";

const Linkpanel = ({ title, className, href, icon, image, text, target }) => {
  target = target || href.includes("http") ? "_blank" : "";

  const imageOrText = image ? "image" : "text";
  const imageOrIcon = imageOrText === "image"
    ? image
    : icon && <span className="bc-svg-circle"><Icon name={icon} /></span>;

  return (
    <aside className={`bc-link-panel-${imageOrText} ${className}`}>
      <a href={href} target={target} title={title}>
        {imageOrIcon}
        <h2 className={`bc-link-panel-${imageOrText}-title`}>
          {title}
          {target === "_blank" && <Icon name="popup" />}
        </h2>
        {text && <p className={`bc-link-panel-${imageOrText}-desc`}>{text}</p>}
      </a>
    </aside>
  );
};

Linkpanel.propTypes = {
  href: React.PropTypes.string.isRequired
};

export default Linkpanel;
