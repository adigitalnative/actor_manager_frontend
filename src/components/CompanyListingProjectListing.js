import React, { Component } from 'react'
import { Table, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateProject } from '../redux/actions/projectActions'

class CompanyListingProjectListing extends Component {
  constructor() {
    super()
    this.state={
      name: "",
      showForm: false
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.project.name
    })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleSubmit = () => {
    const project = {
      name: this.state.name,
      id: this.props.project.id
    }

    this.props.updateProject(project)
    this.toggleForm()
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  renderForm = () => {
    return(
        <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form>
          </Table.Cell>
          <Table.Cell>
            <Button.Group fluid size="mini">
              <Button onClick={this.toggleForm}>Cancel</Button>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
    )
  }

  renderCompany = () => {
    return(
      <Table.Row>
        <Table.Cell>{this.props.project.name}</Table.Cell>
        <Table.Cell>
          <Button.Group fluid size="mini">
            <Button onClick={this.toggleForm}>Edit</Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    )
  }

  render() {
    return(
      <Table.Body>
        {this.state.showForm ? this.renderForm() : this.renderCompany()}
      </Table.Body>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => {dispatch(updateProject(project))}
  }
}

export default connect(null, mapDispatchToProps)(CompanyListingProjectListing)
