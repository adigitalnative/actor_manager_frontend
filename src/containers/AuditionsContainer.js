import React, { Fragment, Component } from 'react'
import { Header, Item } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'
import {fetchingAuditions} from '../redux/actions'
import LoadingSpinner from '../components/LoadingSpinner'

class AuditionsContainer extends Component {

  componentDidMount() {
    this.props.fetchingAuditions()
  }

  render() {
    return (
      <Fragment>
        <Header as="h2">Auditions</Header>
        {this.props.loading ? <LoadingSpinner message="Loading your auditions..."/> : (
          <Item.Group divided>
            {this.props.auditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
          </Item.Group>
        )}

      </Fragment>
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
