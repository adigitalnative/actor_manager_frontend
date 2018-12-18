import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Header, Divider } from 'semantic-ui-react'
import AuditionsBigList from '../components/AuditionsBigList'
import { fetchingAuditions } from '../redux/actions.js'

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchingAuditions()
  }
  
  render() {
    return(
      <Container>
        <Segment>
          <Header as="h2" textAlign="center">
            Dashboard
          </Header>
          <Divider />

          <AuditionsBigList />
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingAuditions: () => {dispatch(fetchingAuditions())}
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
