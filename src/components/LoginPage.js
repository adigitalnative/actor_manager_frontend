import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Input label="Email" type="text" name="email" onChange={this.handleChange}/>
          <Form.Input label="Password" type="password" name="password"  onChange={this.handleChange}/>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage
