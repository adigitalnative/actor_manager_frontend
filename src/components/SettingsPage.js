import React, { Component } from 'react'
import { Container, Segment, Header, Divider, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateUser } from '../redux/actions/userActions.js'

class SettingsPage extends Component {
  constructor() {
    super()
    this.state={
      firstName: "",
      lastName: "",
      auditionStates: "" // This may look different before we are done.
    }
  }

  componentDidMount() {
    this.setState({
      firstName: this.props.user.first_name,
      lastName: this.props.user.last_name
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName
    }

    // console.log("User", user)
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

          <Form>
            <Form.Group widths="equal">
              <Form.Input required label="First name" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} />
              <Form.Input required label="Last name" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} />
            </Form.Group>

            <Form.Input label="States to search" name="auditionStates" placeholder="States to search for auditions" onChange={this.handleChange} value={this.state.auditionStates} />
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
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {dispatch(updateUser(user))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
