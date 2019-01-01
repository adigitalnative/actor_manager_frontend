import React, { Component } from 'react'
import { Table, Button, Form, Dropdown, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateProject } from '../redux/actions/projectActions'

class CompanyListingProjectListing extends Component {
  constructor() {
    super()
    this.state={
      name: "",
      showForm: false,
      projectResult: null
    }
  }

  componentDidMount() {
    const projectResult = this.props.project.result ? this.props.project.result.id : null
    this.setState({
      name: this.props.project.name,
      projectResult: projectResult
    })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleSubmit = () => {
    const project = {
      name: this.state.name,
      id: this.props.project.id,
      result_id: this.state.projectResult
    }

    this.props.updateProject(project)
    this.toggleForm()
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  formattedResultsForSelect = () => {
    return this.props.resultOptions.map(resultOption => {
      return {
        key: resultOption.id,
        text: resultOption.name,
        value: resultOption.id
      }
    })
  }

  castStatus = project => {
    if (project.result) {
      switch(project.result.name) {
        case "Offered Role":
          return <Label color="blue">Offered Role</Label>
        case "Accepted Role":
          return <Label color="green">Accepted Role</Label>
        case "Declined Role":
          return <Label color="grey">Declined Role</Label>
        case "Not Cast":
          return <Label>Not Cast</Label>
        default:
          return ""
      }
    }
    return null
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
            <Dropdown
              clearable
              placeholder="Audition result"
              fluid
              selection
              name="projectResult"
              options={this.formattedResultsForSelect()}
              onChange={this.handleChange}
              value={this.state.projectResult}
            />
          </Table.Cell>
          <Table.Cell>

            <Button.Group fluid size="mini">
              <Button onClick={this.toggleForm} color="grey">Cancel</Button>
              <Button onClick={this.handleSubmit} color="blue">Submit</Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
    )
  }

  renderCompany = () => {
    return(
      <Table.Row>
        <Table.Cell>{this.props.project.name}</Table.Cell>
        <Table.Cell>{this.castStatus(this.props.project)}</Table.Cell>
        <Table.Cell>
          <Button.Group fluid size="mini">
            <Button onClick={this.toggleForm}>Edit Project</Button>
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
