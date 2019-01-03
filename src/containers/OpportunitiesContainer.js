import React, { Component } from 'react'
import { Container, Segment, Header, Grid, Button, Card, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOpportunities } from '../redux/actions/opportunityActions'
import { fetchingCompanies } from '../redux/actions/companyActions'
import { fetchingCategories } from '../redux/actions/categoryActions'
import { fetchingProjects } from '../redux/actions/projectActions'
import { fetchingBook } from '../redux/actions/bookActions'
import LoadingSpinner from '../components/LoadingSpinner'


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
    this.props.fetchingCompanies()
    this.props.fetchingProjects()
    this.props.fetchingCategories()
    this.props.fetchingBook()

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
            <Grid.Column width={10}>
              <Header as="h2">Your Opportunities</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Button.Group fluid>
                <Button as={Link} to='/auditions' basic color="blue">Auditions</Button>
                <Button basic color="grey" onClick={this.toggleArchived}>{this.state.showArchived ? "Hide Archived Opportunities" : "Show Archived Opportunities"}</Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
          <div style={{minHeight: '12px'}}>
            <Card.Group itemsPerRow={3}>
              {this.filteredOpportunities().map(lead => <Opportunity lead={lead} key={lead.id} />)}
              {this.filteredOpportunities().length === 0 ? (
                <Message style={{margin: '1em', width: '100%'}}>
                  <Message.Header>You don't have any opportunities to display!</Message.Header>
                  <p>If you haven't already, head on over to your <Link to='/settings'>settings</Link> and add a state or two to search.</p>
                  <p>(We've heard there are good pickings over in DC, MD, VA, NY, CA, and IL...)</p>
                  <p>Otherwise, it looks like you've archived all your opportunities. Keep prepping those monologues, because the next audition is always around the corner!</p>
                </Message>
              ) : null}
              {this.props.loading ? <LoadingSpinner message="Loading your opportunities..." /> : null}
            </Card.Group>
          </div>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    opportunities: state.opportunities,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOpportunities: () => {dispatch(fetchOpportunities())},
    fetchingCategories: () => {dispatch(fetchingCategories())},
    fetchingProjects: () => {dispatch(fetchingProjects())},
    fetchingCompanies: () => {dispatch(fetchingCompanies())},
    fetchingBook: () => {dispatch(fetchingBook())},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OpportunitiesContainer)
