import React, { Component } from 'react'
import { Container, Segment, Header, Divider, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { statesOptions } from '../redux/actions/settings.js'

import { updateUser } from '../redux/actions/userActions.js'

class SettingsPage extends Component {
  constructor() {
    super()
    this.state={
      firstName: "",
      lastName: "",
      auditionStates: []
    }
  }

  componentDidMount() {
    this.setState({
      firstName: this.props.user.first_name,
      lastName: this.props.user.last_name,
      auditionStates: this.props.user.states.map(state => state.name)
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      audition_states: this.state.auditionStates
    }

    this.props.updateUser(user)
  }

  render() {
    return (
      <Container>
        <Segment>
          <Header as='h2' textAlign="center">
            Settings
          </Header>
          <Divider />

          <Form loading={this.props.loading}>
            <Form.Group widths="equal">
              <Form.Input required label="First name" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} />
              <Form.Input required label="Last name" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} />
            </Form.Group>

            <Form.Dropdown
              multiple search selection
              placeholder="states"
              label="Audition Search States"
              options={statesOptions()}
              name="auditionStates"
              onChange={this.handleChange}
              value={this.state.auditionStates}
            />

            <Button.Group fluid>
              <Button color="red" as={Link} to="/dashboard">Cancel</Button>
              <Button onClick={this.handleSubmit}>Save</Button>
            </Button.Group>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {dispatch(updateUser(user))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
