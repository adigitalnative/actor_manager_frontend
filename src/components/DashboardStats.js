import React from 'react'
import { connect } from 'react-redux'
import { Statistic } from 'semantic-ui-react'

const DashboardStats = props => {
  return (
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{props.dashboard.project_count}</Statistic.Value>
        <Statistic.Label>Projects</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{props.dashboard.audition_count}</Statistic.Value>
        <Statistic.Label>Auditions</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{props.dashboard.percent_booked} %</Statistic.Value>
        <Statistic.Label>Projects Booked</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  )
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps)(DashboardStats)
