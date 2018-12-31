import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Header, Divider } from 'semantic-ui-react'
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
      <Divider horizontal>Projects & Auditions</Divider>
      <Table celled>
        {projects().map(project => <DashboardProjectRow project={project} key={project.id}/>)}
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
