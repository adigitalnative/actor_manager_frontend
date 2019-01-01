import React, { Component, Fragment } from 'react'
import { Table, Label, Modal, Button, Form, Dropdown } from 'semantic-ui-react'
import DashboardAuditionReportModal from './DashboardAuditionReportModal'
import { connect } from 'react-redux'
import { updateProjectFromDashboard } from '../redux/actions/projectActions'

class DashboardProjectRow extends Component {
  constructor() {
    super()
    this.state = {
      displayAuditions: false,
      displayForm: false,
      projectResult: null
    }
  }

  componentDidMount() {
    let { project } = this.props

    if (project.result) {
      this.setState({
        projectResult: this.props.project.result.id
      })
    }
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

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  company = project => {
    return project.company ? project.company.name : ""
  }

  hasAuditions = () => this.props.project.auditions.length > 0 ? true : false

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

  toggleAuditions = () => {
    this.setState({
      displayAuditions: !this.state.displayAuditions
    })
  }

  toggleForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  renderProject = () => {
    return(
      <Table.Row
        key={this.props.project.id}
        active={this.state.displayAuditions}
        disabled={!this.hasAuditions()}
      >
        <Table.HeaderCell>{this.castStatus(this.props.project)}</Table.HeaderCell>
        <Table.HeaderCell>{this.props.project.name}</Table.HeaderCell>
        <Table.HeaderCell>{this.company(this.props.project)}</Table.HeaderCell>
        <Table.HeaderCell>
          <Button.Group size="small" fluid basic>
            <Button onClick={this.toggleForm}>Update Status</Button>
            <Button onClick={this.toggleAuditions}>{this.state.displayAuditions ? "Hide Auditions" : "List Auditions"}</Button>
          </Button.Group>
        </Table.HeaderCell>
      </Table.Row>
    )
  }

  handleSubmit = () => {
    const project = {
      id: this.props.project.id,
      result_id: this.state.projectResult
    }

    this.props.updateProject(project)
    this.toggleForm()
  }

  renderForm = () => {
    return (
        <Table.Row
          key={this.props.project.id}
          active={this.state.displayAuditions}
        >
          <Table.HeaderCell>
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
          </Table.HeaderCell>
          <Table.HeaderCell>{this.props.project.name}</Table.HeaderCell>
          <Table.HeaderCell>{this.company(this.props.project)}</Table.HeaderCell>
          <Table.HeaderCell>
            <Button.Group size="small" fluid>
              <Button onClick={this.toggleForm}>Cancel</Button>
              <Button onClick={this.handleSubmit}>Save</Button>

            </Button.Group>
          </Table.HeaderCell>
        </Table.Row>
    )
  }

  renderAuditions = () => {
    return(
      <Table.Body>
        {this.props.project.auditions.map(audition => (
          <Table.Row key={audition.id}>
            <Table.Cell>{audition.date ? audition.date : <i>Not Yet Scheduled</i>}</Table.Cell>
            <Table.Cell colSpan={2}>{audition.category}</Table.Cell>
            <Table.Cell>
              <DashboardAuditionReportModal audition={audition} />
            </Table.Cell>
          </Table.Row>
        ))}

      </Table.Body>
    )
  }

  hasReport = audition => {
    const report = audition.report
    if(report.notes || report.people || report.auditors) {
      return true
    } else {
      return false
    }
  }

  render() {
    return(
      <Fragment>
        <Table.Header>
          {this.state.displayForm ? this.renderForm() : this.renderProject()}
        </Table.Header>
        {this.state.displayAuditions ? this.renderAuditions() : null }
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    resultOptions: state.resultOptions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => {dispatch(updateProjectFromDashboard(project))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProjectRow)
