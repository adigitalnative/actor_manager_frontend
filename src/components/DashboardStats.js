import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Statistic, Divider} from 'semantic-ui-react'

const DashboardStats = props => {
  return (
    <Fragment>
      <Divider horizontal>Stats</Divider>
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
        <Statistic>
          <Statistic.Value>{props.dashboard.percent_reported} %</Statistic.Value>
          <Statistic.Label>Projects Reported</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{props.dashboard.potential_bookings}</Statistic.Value>
          <Statistic.Label>Potential Bookings</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps)(DashboardStats)
