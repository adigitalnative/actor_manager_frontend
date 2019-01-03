import React, { Component, Fragment } from 'react';
import {Route, Redirect, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import { authenticateToken } from './redux/actions/authActions'

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
import SettingsPage from './components/SettingsPage'
import CompaniesProjectsContainer from './containers/CompaniesProjectsContainer'
import {RoadmapPage, PrivacyPolicyPage } from './components/StaticPages'
import OpportunitiesContainer from './containers/OpportunitiesContainer'
import MobileView from './components/mobileView'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    if(localStorage.token) {
      this.props.authenticate(localStorage.token)
    }
  }

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
        <div style={{marginTop: '9em', minHeight: '70vh'}} >
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/roadmap" component={RoadmapPage} />
            <Route exact path="/privacy" component={PrivacyPolicyPage} />
            <Route exact path="/mobile" component={MobileView} />
            <Route exact path="/auditions" render={() => this.authorizeFor(AuditionsContainer, '/auditions')} />
            <Route exact path="/book" render={() => this.authorizeFor(BookContainer, '/book')} />
            <Route exact path="/dashboard" render={() => this.authorizeFor(Dashboard, '/dashboard')} />
            <Route exact path="/settings" render={() => this.authorizeFor(SettingsPage, '/settings')} />
            <Route exact path="/companies_and_projects" render={() => this.authorizeFor(CompaniesProjectsContainer, '/companies_and_projects')} />
            <Route exact path="/opportunities" render={() => this.authorizeFor(OpportunitiesContainer, '/opportunities')} />
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
