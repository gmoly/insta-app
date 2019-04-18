import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Instagram from './auth/Instagram';
import Auth from './auth/Auth';
import SignOut from './auth/SignOut';
import ContentItem from './components/ContentItem';

import './App.css';

class App extends Component {

  state = {
    authToken: null
  }

  componentDidMount() {
    this.setState({
      authToken: localStorage.authToken
    });
  }

  render() {

    return (
      <div>
        <Instagram />
        <Route path="/auth-instagram" exect component={Auth}/>
        <Route path="/sign-out" exect component={SignOut}/>
        <ContentItem authToken={this.state.authToken} />
      </div>
    );
  }
}

export default App;
