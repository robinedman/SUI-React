import React from "react"
import classNames from "classnames"

const Alert = ({ children, onDismiss, closeBtnLabel = "Close", className, ...rest }) => {
  const classes = classNames("alert bc-alert-news fade in", {
    'alert-dismissible': onDismiss
  }, className)

  return (
    <div {...rest} className={classes} role="alert">
      {onDismiss && (
        <button type="button" className="close" aria-label={closeBtnLabel} onDismiss={onDismiss}>
          <svg className="bc-svg bc-svg-cancel-circled" aria-hidden="true">
            <use xlinkHref="#icon-cancel-circled"></use>
          </svg>
        </button>
      )}
      {children}
    </div>
  )
}

export default Alert