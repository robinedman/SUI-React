import React from "react"
import classNames from "classnames"
import Icon from "../Icons/Icon"

const Alert = ({ children, onDismiss, closeBtnLabel = "Close", className, ...rest }) => {
  const classes = classNames("alert fade in", {
    'alert-dismissible': onDismiss
  }, className)

  const dismissBtn = (
    <button type="button" className="close" aria-label={closeBtnLabel} onClick={onDismiss}>
      <Icon name="cancel-circled" aria-hidden="true" />
    </button>
  )

  return (
    <div {...rest} className={classes} role="alert">
      {onDismiss && dismissBtn}
      {children}
    </div>
  )
}

export default Alert
