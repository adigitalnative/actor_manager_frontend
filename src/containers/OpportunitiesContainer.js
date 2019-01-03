import React, { Component } from 'react'
import { Container, Segment, Header, Grid, Button, Card } from 'semantic-ui-react'
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
