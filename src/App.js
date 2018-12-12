import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import Nav from './components/Nav'
import AuditionsContainer from './containers/AuditionsContainer'
import Footer from './components/Footer'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Container>
          <AuditionsContainer />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
