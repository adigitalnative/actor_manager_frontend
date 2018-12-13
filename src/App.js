import React, { Component, Fragment } from 'react';
import { Container, Message } from 'semantic-ui-react'
import {Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {authenticateToken} from './redux/actions'

import Nav from './components/Nav'
import Footer from './components/Footer'
import AuditionsContainer from './containers/AuditionsContainer'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import LoadingSpinner from './components/LoadingSpinner'

// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  authorizeFor = (Component, path) => {

    if (this.props.authenticated) {
      return <Component />
    } else {
      if(localStorage.token) {
        this.props.authenticate(localStorage.token)
        return <LoadingSpinner message="Hold for just a moment..."/>
      } else {
        return <Redirect to={{
          pathname: '/login',
          state: { from: path }
        }} />
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Nav />
          <Route exact path="/" component={WelcomePage} />
          <Container>
            <Route exact path="/auditions" render={() => this.authorizeFor(AuditionsContainer, '/auditions')} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Container>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.currentUser,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (token) => {dispatch(authenticateToken(token))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
