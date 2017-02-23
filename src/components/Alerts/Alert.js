import React from "react"
import classNames from "classnames"
import Icon from "../Icons/Icon"

/*
  <Alert /> is used as a base for other alerts, or directly when you need
  a more customisasble alert.
*/
const Alert = ({ children, onDismiss, dismissBtnLabel = "Close", className, ...rest }) => {
  const dismissBtn = (
    <button type="button" className="close" aria-label={dismissBtnLabel} onClick={onDismiss}>
      <Icon name="cancel-circled" aria-hidden="true" />
    </button>
  )

  const classes = classNames("alert fade in", {
    'alert-dismissible': onDismiss
  }, className)

  return (
    <div {...rest} className={classes} role="alert">
      {onDismiss && dismissBtn}
      {children}
    </div>
  )
}

Alert.propTypes = {
  onDismiss: React.PropTypes.func,
  dismissBtnLabel: React.PropTypes.string
}

export default Alert
