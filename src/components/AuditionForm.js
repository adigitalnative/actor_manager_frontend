import React, { Component, Fragment } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

class AuditionForm extends Component {
  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: ""
    }
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return(
      <Fragment>
        <Modal.Header>Create an Audition</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring}/>
              <Form.Input label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare}/>
            </Form.Group>
            <Button type="submit">Save Audition</Button>
          </Form>
        </Modal.Content>
      </Fragment>
    )
  }
}

export default AuditionForm
