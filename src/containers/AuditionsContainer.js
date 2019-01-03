import React, { Component } from 'react'
import { Header, Item, Grid, Segment, Container, Button } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchingBook } from '../redux/actions/bookActions'
import { fetchingAuditions } from '../redux/actions/auditionActions'
import { fetchingCategories } from '../redux/actions/categoryActions'
import { fetchingProjects } from '../redux/actions/projectActions'
import { fetchingCompanies } from '../redux/actions/companyActions'
import { fetchingResultOptions } from '../redux/actions/resultActions'
import LoadingSpinner from '../components/LoadingSpinner'
import AuditionForm from '../components/AuditionForm'

class AuditionsContainer extends Component {
  constructor() {
    super()
    this.state={
      searchString: ""
    }
  }

  componentDidMount() {
    this.props.fetchingAuditions()
    this.props.fetchingResultOptions()
    this.props.fetchingBook()
    this.props.fetchingCategories()
    this.props.fetchingProjects()
    this.props.fetchingCompanies()
  }

  render() {
    return (
      <Container>
        <Segment>
          <Grid stackable>
            <Grid.Column width={10}>
              <Header as="h2">Your Auditions</Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button.Group fluid>
                <Button as={Link} to='/opportunities' basic color="grey">Opportunities</Button>
                <AuditionForm buttonText="Add Audition"/>
              </Button.Group>
            </Grid.Column>
          </Grid>
          <Item.Group divided>
            {this.props.auditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
            {this.props.loading ? <LoadingSpinner message="Loading your auditions..." /> : null}
          </Item.Group>
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingAuditions: () => {dispatch(fetchingAuditions())},
    fetchingResultOptions: () => {dispatch(fetchingResultOptions())},
    fetchingBook: () => {dispatch(fetchingBook())},
    fetchingCategories: () => {dispatch(fetchingCategories())},
    fetchingProjects: () => {dispatch(fetchingProjects())},
    fetchingCompanies: () => {dispatch(fetchingCompanies())}
  }
}

const mapStateToProps = state => {
  return {
    auditions: state.auditions,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionsContainer)
