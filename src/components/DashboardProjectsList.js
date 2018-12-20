import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Header } from 'semantic-ui-react'
import DashboardProjectRow from './DashboardProjectRow'

const DashboardProjectsList = props => {

  const projects = () => {
    if (props.dashboard.projects) {
      return props.dashboard.projects
    } else {
      return []
    }
  }

  return(
    <Fragment>
      <Header as='h3'>Auditions</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Cast</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {projects().map(project => <DashboardProjectRow project={project} key={project.id}/>)}
        </Table.Body>
      </Table>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps)(DashboardProjectsList)
