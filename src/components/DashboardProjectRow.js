import React, { Component, Fragment } from 'react'
import { Table, Icon, Label } from 'semantic-ui-react'

class DashboardProjectRow extends Component {
  constructor() {
    super()
    this.state = {
      displayAuditions: false
    }
  }

  company = project => {
    return project.company ? project.company.name : ""
  }

  shouldBeDisabled = project => project.result && project.result.name === "Not Cast" ? true : false

  castStatus = project => {
    if (project.result) {
      switch(project.result.name) {
        case "Offered Role":
          return(<Icon name="star" color="blue" />)
        case "Declined Role":
          return(<Icon name="star" color="grey" />)
        case "Not Cast":
          return ""
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

  renderAuditions = () => {
    return(
      <Fragment>
        {this.props.project.auditions.map(audition => (
          <Table.Row key={audition.id}>
            <Table.Cell>{audition.date}</Table.Cell>
            <Table.Cell>{audition.category}</Table.Cell>
            <Table.Cell>{this.hasReport(audition) ? <Label>Reported</Label> : <Label color="red">Needs Report</Label> }</Table.Cell>
          </Table.Row>
        ))}

      </Fragment>
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
        <Table.Row
          key={this.props.project.id}
          onClick={this.toggleAuditions}
          active={this.state.displayAuditions}
          disabled={this.shouldBeDisabled(this.props.project)}
        >
          <Table.Cell>{this.props.project.name}</Table.Cell>
          <Table.Cell>{this.company(this.props.project)}</Table.Cell>
          <Table.Cell>{this.castStatus(this.props.project)}</Table.Cell>
        </Table.Row>
        {this.state.displayAuditions ? this.renderAuditions() : null }
      </Fragment>
    )
  }
}

export default DashboardProjectRow
