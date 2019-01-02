import React, { Component } from 'react'
import { Container, Segment, Header, Grid, Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOpportunities } from '../redux/actions/opportunityActions'
import Opportunity from '../components/Opportunity'

class OpportunitiesContainer extends Component {
  constructor() {
    super()
    this.state={
      showArchived: false
    }
  }

  componentDidMount() {
    this.props.fetchOpportunities()
  }

  filteredOpportunities = () => (
    this.state.showArchived ? this.props.opportunities : this.props.opportunities.filter(opportunity => opportunity.archived === false)
  )

  toggleArchived = () => {
    this.setState({ showArchived: !this.state.showArchived })
  }

  render() {
    return(
      <Container>
        <Segment>
          <Grid stackable>
            <Grid.Column width={12}>
              <Header as="h2">Your Opportunities</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
              <Button as={Link} to='/auditions' fluid basic color="blue">Auditions</Button>
              <Button fluid basic color="grey" onClick={this.toggleArchived}>{this.state.showArchived ? "Hide Archived Opportunities" : "Show Archived Opportunities"}</Button>
            </Grid.Column>
          </Grid>

          <Card.Group>
            {this.filteredOpportunities().map(lead => <Opportunity lead={lead} key={lead.id} />)}
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    opportunities: state.opportunities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOpportunities: () => {dispatch(fetchOpportunities())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OpportunitiesContainer)
