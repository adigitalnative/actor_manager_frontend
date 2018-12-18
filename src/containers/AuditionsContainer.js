import React, { Component } from 'react'
import { Header, Item, Grid, Segment, Container } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'
import { fetchingAuditions, fetchingResultOptions, fetchingBook,
  fetchingCategories, fetchingProjects, fetchingCompanies } from '../redux/actions'
import LoadingSpinner from '../components/LoadingSpinner'
import AuditionForm from '../components/AuditionForm'

class AuditionsContainer extends Component {

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
            <Grid.Column>
              <Header as="h2">Auditions</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
              <AuditionForm buttonText="Add Audition"/>
            </Grid.Column>
          </Grid>
          {this.props.loading ? <LoadingSpinner message="Loading your auditions..."/> : (
            <Item.Group divided>
              {this.props.auditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
            </Item.Group>
          )}
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
