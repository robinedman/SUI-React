import React from 'react'

const Icon = ({ name }) => {
  return ( 
    <svg className={"bc-svg bc-svg-" + name} aria-hidden="true">
      <use xlinkHref={"#icon-" + name}></use>
    </svg>
  )
}

export default Icon