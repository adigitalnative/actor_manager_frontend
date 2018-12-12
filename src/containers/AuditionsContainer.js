import React, { Fragment, Component } from 'react'
import { Header, Item, Button, Grid, Modal } from 'semantic-ui-react'
import Audition from '../components/Audition'
import { connect } from 'react-redux'
import {fetchingAuditions} from '../redux/actions'
import LoadingSpinner from '../components/LoadingSpinner'
import AuditionForm from '../components/AuditionForm'

class AuditionsContainer extends Component {

  componentDidMount() {
    this.props.fetchingAuditions()
  }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column>
            <Header as="h2">Auditions</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
            <Modal
              trigger={<Button primary basic fluid size="small">Add Audition</Button>}
              centered={false}
              dimmer='blurring'
            >
              <AuditionForm />
            </Modal>
          </Grid.Column>
        </Grid>
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
