import React, { Component, Fragment } from 'react'
import { Form, Button, Table } from 'semantic-ui-react'
import CompanyListingProjectListing from './CompanyListingProjectListing'
import { connect } from 'react-redux'
import { updateCompany } from '../redux/actions/companyActions'

class CompanyListing extends Component {
  constructor() {
    super()
    this.state={
      showForm: false,
      name: "",
      projects: []
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.company.name,
      projects: this.props.company.projects
    })
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  cancelEdit = () => {
    // Toggle the form and reset the values
    this.setState({
      showForm: false,
      name: this.props.company.name
    })
  }

  handleSubmit = () => {
    const company = {
      name: this.state.name,
      id: this.props.company.id
    }

    this.props.updateCompany(company)
    this.toggleForm()
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  renderForm = () => (
    <Table.Row>
      <Table.HeaderCell>
        <Form>
          <Form.Input placeholder="Company" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
        </Form>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <Button.Group fluid size="small">
          <Button onClick={this.cancelEdit}>Cancel</Button>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Button.Group>
      </Table.HeaderCell>
    </Table.Row>
  )

  renderListing = () => (
    <Table.Row>
      <Table.HeaderCell>{this.props.company.name}</Table.HeaderCell>
      <Table.HeaderCell><Button size="small" fluid onClick={this.toggleForm}>Edit</Button></Table.HeaderCell>
    </Table.Row>
  )

  render() {

    return (
      <Fragment>
        <Table.Header>
          {this.state.showForm ? this.renderForm() : this.renderListing()}
        </Table.Header>
        {this.props.company.projects.map(project => <CompanyListingProjectListing project={project} key={project.id} />)}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCompany: company => {dispatch(updateCompany(company))}
  }
}

export default connect(null, mapDispatchToProps)(CompanyListing)
