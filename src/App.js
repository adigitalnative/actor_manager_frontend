import React, { Component, Fragment } from 'react';
import {Route, Redirect, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {authenticateToken} from './redux/actions'

import Nav from './components/Nav'
import Footer from './components/Footer'
import AuditionsContainer from './containers/AuditionsContainer'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import LoadingSpinner from './components/LoadingSpinner'
import NotFoundPage from './components/NotFoundPage'
import BookContainer from './containers/BookContainer'
import Dashboard from './containers/DashboardContainer'

// import logo from './logo.svg';
import './App.css';

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
        {this.props.authenticated ? <Nav /> : null}
        <div style={{marginTop: '9em'}} >
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/auditions" render={() => this.authorizeFor(AuditionsContainer, '/auditions')} />
            <Route exact path="/book" render={() => this.authorizeFor(BookContainer, '/book')} />
            <Route exact path="/dashboard" render={() => this.authorizeFor(Dashboard, '/dashboard')} />
            <Route render={() => this.authorizeFor(NotFoundPage, '/not_found')} />
          </Switch>
          </div>
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
