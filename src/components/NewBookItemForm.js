import React, { Component } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { creatingBookItem } from '../redux/actions/bookActions'

class NewBookItemForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      role: "",
      author: "",
      modalOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    const newBookItem = {
      title: this.state.title,
      role: this.state.role,
      author: this.state.author
    }
    this.props.creatingBookItem(newBookItem)
    this.clearState()
    this.toggleModal()
  }

  clearState() {
    this.setState({
      title: "",
      role: "",
      author: ""
    })
  }

  render() {
    return(
      <Modal
        trigger={<Button onClick={this.toggleModal} fluid primary basic>Add Piece</Button>}
        centered={false}
        open={this.state.modalOpen}
        onClose={this.toggleModal}
      >
        <Modal.Header>Add to your Book</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input label="Title" type="text" name= "title" value={this.state.title} onChange={this.handleChange} required/>
            <Form.Input label="Role" type="text" name= "role" value={this.state.role} onChange={this.handleChange} />
            <Form.Input label="Author" type="text" name= "author" value={this.state.author} onChange={this.handleChange} />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    creatingBookItem: bookItem => dispatch(creatingBookItem(bookItem))
  }
}

export default connect(null, mapDispatchToProps)(NewBookItemForm)
