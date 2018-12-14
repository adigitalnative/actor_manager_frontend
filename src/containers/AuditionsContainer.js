import React, { Component } from 'react'
import { Header, Item, Grid, Segment } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'
import { fetchingAuditions } from '../redux/actions'
import LoadingSpinner from '../components/LoadingSpinner'
import AuditionForm from '../components/AuditionForm'

class AuditionsContainer extends Component {

  componentDidMount() {
    this.props.fetchingAuditions()
  }

  render() {
    return (
      <Segment>
        <Grid stackable>
          <Grid.Column>
            <Header as="h2">Auditions</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
            <AuditionForm />
          </Grid.Column>
        </Grid>
        {this.props.loading ? <LoadingSpinner message="Loading your auditions..."/> : (
          <Item.Group divided>
            {this.props.auditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
          </Item.Group>
        )}
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingAuditions: () => {dispatch(fetchingAuditions())}
  }
}

const mapStateToProps = state => {
  return {
    auditions: state.auditions,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionsContainer)
