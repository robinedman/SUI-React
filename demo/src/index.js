import React from 'react'
import { render } from 'react-dom'

import Component from '../../src'

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
    return <div>
      <h1>sui-react Demo</h1>
      <Component/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
