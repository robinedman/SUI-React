import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../src/components/Icons/Icon'
import { Alert, NewsAlert, NoteAlert } from '../../src/components/Alerts'
import Panel from '../../src/components/Panels/Panel'

const htmlToElement = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

class Demo extends React.Component {
  state = {
    isNewsAlertVisible: true,
    isBootstrapAlertVisible: true
  }

  componentDidMount() {
    // Load SVGs
    fetch('https://sui-test.live.solas.britishcouncil.digital/0.0.10/img/svg-defs.svg')
      .then(res => res.text())
      .then(svg => {
        const bodyNode = document.getElementsByTagName('body')[0];
        bodyNode.insertBefore(htmlToElement(svg), bodyNode.firstChild);
      })
      .catch(err => console.log(err))
  }

  render() {
    const newsAlert = (
      <NewsAlert onDismiss={() => this.setState({ isNewsAlertVisible: false })}>
        <a href="#">News alert!</a> This is an alert message which displays on the top of your page.
      </NewsAlert>
    )

    const bootstrapAlert = (
      <Alert className="alert-danger" onDismiss={() => this.setState({ isBootstrapAlertVisible: false })}>
        <p>We would like to make you <b>aware of something</b>, no idea what but we suggest that you read this message.</p>
      </Alert>
    )

    return (
      <div>
        <h2>Icon</h2>
        <Icon name="clock" className="my-class" />
        <Icon name="cog" spin="cw" />
        <Icon name="cycle" spin="ccw" />
        <Icon name="popup" aria-hidden="true" aria-label="Opens in a new window or tab" />

        <h2>Textual link panel</h2>
        <Panel title="Textual link panel, which is alingned center and has only heading." className="blas"></Panel>
        
        <h2>Alert</h2>
        {this.state.isNewsAlertVisible && newsAlert}

        <NoteAlert>
          <p>If you have a disability and require a modified version of the test you must give the Test Centre 3 months notice.</p>
        </NoteAlert>

        {this.state.isBootstrapAlertVisible && bootstrapAlert}
      </div>
    )
  }
}

ReactDOM.render(<Demo/>, document.querySelector('#demo'))
