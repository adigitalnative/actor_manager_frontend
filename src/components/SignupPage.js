import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signupUser } from '../redux/actions'

class SignupPage extends Component {
  constructor() {
    super()
    this.state={
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirectToReferrer: false
    }
  }

  handleSubmit = () => {
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    this.props.signup(user)
    this.setState({
      redirectToReferrer: true
    })
    // Will need to redirect similar to in LoginPage
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    let { from } = { from: { pathname: "/"  } }
    let { redirectToReferrer } = this.state

    if (redirectToReferrer) return <Redirect to={from} />

    return(
      <div>
        <Header as='h2'>Sign Up</Header>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input label="First Name" type="text" name="firstName" onChange={this.handleChange} />
            <Form.Input label="Last Name" type="text" name="lastName" onChange={this.handleChange} />
          </Form.Group>
          <Form.Input label="Email" type="text" name="email" onChange={this.handleChange}/>
          <Form.Input label="Password" type="password" name="password"  onChange={this.handleChange}/>
          <Button as={Link} to='/login'>Sign In</Button>
          <Button type="submit" positive>Sign Up</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: user => {dispatch(signupUser(user))}
  }
}

export default connect(null, mapDispatchToProps)(SignupPage)
