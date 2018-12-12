import React, { Fragment, Component } from 'react'
import { Header, Item } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'
import {fetchingAuditions} from '../redux/actions'

class AuditionsContainer extends Component {

  componentDidMount() {
    this.props.fetchingAuditions()
  }

  render() {
    return (
      <Fragment>
        <Header as="h2">Auditions</Header>
        <Item.Group divided>
          {this.props.auditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
        </Item.Group>
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
    auditions: state.auditions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionsContainer)
