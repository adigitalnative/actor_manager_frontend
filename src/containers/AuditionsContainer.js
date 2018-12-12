import React, { Fragment } from 'react'
import { Header, Item } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'

const AuditionsContainer = props => {
  return (
    <Fragment>
      <Header as="h2">Auditions</Header>
      <Item.Group divided>
        {props.auditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
      </Item.Group>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    auditions: state.auditions
  }
}

export default connect(mapStateToProps)(AuditionsContainer)
