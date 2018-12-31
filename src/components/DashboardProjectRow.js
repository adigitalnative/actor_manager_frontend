import React, { Component, Fragment } from 'react'
import { Table, Label } from 'semantic-ui-react'

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

  renderAuditions = () => {
    return(
      <Table.Body>
        {this.props.project.auditions.map(audition => (
          <Table.Row key={audition.id}>
            <Table.Cell>{audition.date ? audition.date : <i>Not Yet Scheduled</i>}</Table.Cell>
            <Table.Cell>{audition.category}</Table.Cell>
            <Table.Cell>{this.hasReport(audition) ? <Label>Reported</Label> : <Label color="red">Needs Report</Label> }</Table.Cell>
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
          <Table.Row
            key={this.props.project.id}
            onClick={this.toggleAuditions}
            active={this.state.displayAuditions}
            disabled={!this.hasAuditions()}
          >
            <Table.HeaderCell>{this.props.project.name}</Table.HeaderCell>
            <Table.HeaderCell>{this.company(this.props.project)}</Table.HeaderCell>
            <Table.HeaderCell>{this.castStatus(this.props.project)}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.state.displayAuditions ? this.renderAuditions() : null }
      </Fragment>
    )
  }

  // render() {
  //   return(
  //     <Fragment>
  //       <Table.Row
  //         key={this.props.project.id}
  //         onClick={this.toggleAuditions}
  //         active={this.state.displayAuditions}
  //         disabled={!this.hasAuditions()}
  //       >
  //         <Table.Cell>{this.props.project.name}</Table.Cell>
  //         <Table.Cell>{this.company(this.props.project)}</Table.Cell>
  //         <Table.Cell>{this.castStatus(this.props.project)}</Table.Cell>
  //       </Table.Row>
  //       {this.state.displayAuditions ? this.renderAuditions() : null }
  //     </Fragment>
  //   )
  // }
}

export default DashboardProjectRow
