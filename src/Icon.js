import React from "react"
import classNames from "classnames"

const Icon = ({ name, spin }) => {
  const classes = classNames("bc-svg", `bc-svg-${name}`, {
    "bc-spin-cw": spin === "cw", 
    "bc-spin-ccw": spin === "ccw"
  })
  return ( 
    <svg className={classes} aria-hidden="true">
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon
