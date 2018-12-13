import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div>
        <Header as='h2'>Sign In</Header>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input label="Email" type="text" name="email" onChange={this.handleChange}/>
            <Form.Input label="Password" type="password" name="password"  onChange={this.handleChange}/>
          </Form.Group>
          <Button as={Link} to='/signup'>Sign Up</Button>
          <Button type="submit" positive>Log In</Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage
