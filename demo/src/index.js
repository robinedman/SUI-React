import React from 'react'
import { render } from 'react-dom'
import Icon from '../../src/Icon'

const htmlToElement = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

class Demo extends React.Component {
  componentDidMount() {
    // Load SVGs
    fetch('https://sui.live.solas.britishcouncil.digital/0.0.9/img/svg-defs.svg')
      .then(res => res.text())
      .then(svg => {
        const bodyNode = document.getElementsByTagName('body')[0];
        bodyNode.insertBefore(htmlToElement(svg), bodyNode.firstChild);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2>Icon</h2>
        <Icon name="clock" className="my-class" />
        <Icon name="cog" spin="qqw" />
        <Icon name="cycle" spin="ccw" />
        <Icon name="popup" aria-hidden="true" aria-label="Opens in a new window or tab" />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
