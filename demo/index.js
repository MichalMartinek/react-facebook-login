import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import FacebookLogin from '../src/facebook';

const responseFacebook = (response) => {
  console.log(response);
};

class Base extends Component {

  constructor(props) {
    super(props);
    this.state = { autoLoad: false };
  }

  render() {
    return (
      <div>
        <Link to="/dummy">Route to dummy page</Link>
        <FacebookLogin
          appId="1955810814631617"
          autoLoad={this.state.autoLoad}
          callback={responseFacebook}
          icon="fa-facebook"
        />
        <button onClick={() => this.setState({ autoLoad: !this.state.autoLoad })}>Autoload {this.state.autoLoad ? 'yes' : 'no'}</button>
      </div>
    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>
          This is just a dummy page to test the button<br />
          <a href="https://github.com/keppelen/react-facebook-login/pull/76#issuecomment-262098946">
            survives back and forth routing
          </a>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
    <Route path="/dummy" component={Dummy}/>
  </Router>,
  document.getElementById('demo')
);
