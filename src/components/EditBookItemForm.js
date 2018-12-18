import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal, Button, Form} from 'semantic-ui-react'
import { updatingBookItem } from '../redux/actions'

class EditBookItemForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      role: "",
      author: "",
      modalOpen: false
    }
  }

  componentDidMount() {
    let title, role, author

    if (this.props.piece.title) {
      title = this.props.piece.title
    } else {
      title = ""
    }

    if (this.props.piece.role) {
      role = this.props.piece.role
    } else {
      role = ""
    }

    if (this.props.piece.author) {
      author = this.props.piece.author
    } else {
      author = ""
    }

    this.setState({
      title: title,
      role: role,
      author: author
    })
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  clearState() {
    this.setState({
      title: "",
      role: "",
      author: ""
    })
  }

  handleSubmit = () => {
    const newBookItem = {
      title: this.state.title,
      role: this.state.role,
      author: this.state.author,
      id: this.props.piece.id
    }
    this.props.updatingBookItem(newBookItem)
    this.toggleModal()
  }



  render() {
    return(
      <Modal
        trigger={<Button onClick={this.toggleModal}>Edit</Button>}
        centered={false}
        open={this.state.modalOpen}
        onClose={this.toggleModal}
      >
        <Modal.Header>Add to your Book</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input label="Title" type="text" name="title" value={this.state.title} onChange={this.handleChange} required/>
            <Form.Input label="Role" type="text" name="role" value={this.state.role} onChange={this.handleChange} />
            <Form.Input label="Author" type="text" name="author" value={this.state.author} onChange={this.handleChange} />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updatingBookItem: bookItem => dispatch(updatingBookItem(bookItem))
  }
}

export default connect(null, mapDispatchToProps)(EditBookItemForm)
