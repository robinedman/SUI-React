import React from "react";
import ReactDOM from "react-dom";
import RepoNavbar from "../../src/repo_components/navbar";
import Icon from "../../src/components/Icons/Icon";
import { Alert, NewsAlert, NoteAlert } from "../../src/components/Alerts";
import Linkpanel from "../../src/components/Panels/Linkpanel";
import "../../src/repo_components/typography.css";

const htmlToElement = html => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstChild;
};

class Demo extends React.Component {
  state = {
    isNewsAlertVisible: true,
    isBootstrapAlertVisible: true
  };

  componentDidMount() {
    // Load SVGs
    fetch(
      "https://sui-test.live.solas.britishcouncil.digital/0.0.10/img/svg-defs.svg"
    )
      .then(res => res.text())
      .then(svg => {
        const bodyNode = document.getElementsByTagName("body")[0];
        bodyNode.insertBefore(htmlToElement(svg), bodyNode.firstChild);
      })
      .catch(err => console.log(err));
  }

  render() {
    const newsAlert = (
      <NewsAlert onDismiss={() => this.setState({ isNewsAlertVisible: false })}>
        <a href="#">News alert!</a>
        {" "}
        This is an alert message which displays on the top of your page.
      </NewsAlert>
    );

    const bootstrapAlert = (
      <Alert
        className="alert-danger"
        onDismiss={() => this.setState({ isBootstrapAlertVisible: false })}
      >
        <p>
          We would like to make you
          {" "}
          <b>aware of something</b>
          , no idea what but we suggest that you read this message.
        </p>
      </Alert>
    );

    return (
      <div>
        <RepoNavbar />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="repo-header">SUI-React components</h1>
              <p>Solas UI React components with Solas UI styling.</p>

              <h2 className="repo-header">Alert</h2>
              {this.state.isNewsAlertVisible && newsAlert}

              <NoteAlert>
                <p>
                  If you have a disability and require a modified version of the test you must give the Test Centre 3 months notice.
                </p>
              </NoteAlert>

              {this.state.isBootstrapAlertVisible && bootstrapAlert}

              <h2 className="repo-header">Icon</h2>
              <Icon name="clock" className="my-class" />
              <Icon name="cog" spin="cw" />
              <Icon name="cycle" spin="ccw" />
              <Icon
                name="popup"
                aria-hidden="true"
                aria-label="Opens in a new window or tab"
              />

              <h2 className="repo-header">Linkpanel</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel icon="alert" title="Teacher training" href="#" />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel
                icon="globe"
                title="Teacher training"
                href="http://www.britishcouncil.org"
              />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel icon="alert" title="Teacher training" href="#" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel title="Choosing your course and university" href="#" />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel
                title="Choosing your course and university"
                href="http://www.britishcouncil.org"
              />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel title="Choosing your course and university" href="#" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel title="IELTS Test Dates 2017" href="#" />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel
                title="IELTS Test Dates 2017"
                href="http://www.britishcouncil.org"
              />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <Linkpanel title="IELTS Test Dates 2017" href="#" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector("#demo"));
