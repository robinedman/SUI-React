import React from "react"
import classNames from "classnames"

const Icon = ({ name, spin, className, ...rest }) => {
  const optional = {
    [`bc-spin-${spin}`]: spin
  }
  const classes = classNames("bc-svg", `bc-svg-${name}`, optional, className)

  return ( 
    <svg {...rest} className={classes}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon
