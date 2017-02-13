import React from 'react'
import Icon from './Icon'

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>Icon</h2>
        <Icon name="clock" />
        <Icon name="cog" spin="cw" />
        <Icon name="cycle" spin="ccw" />
      </div>
    )
  }
}
