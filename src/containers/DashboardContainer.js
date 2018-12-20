import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Header, Divider } from 'semantic-ui-react'
import DashboardProjectsList from '../components/DashboardProjectsList'
import { fetchingDashboardData } from '../redux/actions/dashboard.js'

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchingDashboardData()
  }

  render() {
    return(
      <Container>
        <Segment>
          <Header as="h2" textAlign="center">
            Dashboard
          </Header>
          <Divider />

          <DashboardProjectsList />
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDashboardData: () => {dispatch(fetchingDashboardData())}
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
