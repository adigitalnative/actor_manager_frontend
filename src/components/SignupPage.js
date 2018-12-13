import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SignupPage extends Component {
  constructor() {
    super()
    this.state={
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
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

export default SignupPage
