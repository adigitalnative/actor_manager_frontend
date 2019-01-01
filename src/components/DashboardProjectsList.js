import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Header, Divider } from 'semantic-ui-react'
import DashboardProjectRow from './DashboardProjectRow'
import { fetchingResultOptions } from '../redux/actions/resultActions'


class DashboardProjectsList extends Component {
  componentDidMount() {
    this.props.fetchResultOptions()
  }

  projects = () => {
    if (this.props.dashboard.projects) {
      return this.props.dashboard.projects
    } else {
      return []
    }
  }

  render() {
    return(
      <Fragment>
        <Divider horizontal>Projects & Auditions</Divider>
        <Table celled>
          {this.projects().map(project => <DashboardProjectRow project={project} key={project.id}/>)}
        </Table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchResultOptions: () => {dispatch(fetchingResultOptions())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProjectsList)
