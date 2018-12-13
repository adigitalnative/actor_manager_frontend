import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import {Route} from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import AuditionsContainer from './containers/AuditionsContainer'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
          <Route exact path="/" component={WelcomePage} />
          <Container>
            <Route exact path="/auditions" component={AuditionsContainer} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
