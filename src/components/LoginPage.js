import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInAction } from '../redux/actions'

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
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(user)
    this.setState({
      email: "",
      password: ""
    })
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

const mapDispatchToProps = dispatch => {
  return {
    login: user => {dispatch(signInAction(user))}
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
