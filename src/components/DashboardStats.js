import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Statistic, Divider, Grid } from 'semantic-ui-react'

const DashboardStats = props => {

  return (
    <Fragment>
      <Divider horizontal>Stats</Divider>
      <Grid columns={5} textAlign='center'>
        <Grid.Row verticalAlign="bottom">
          <Grid.Column>
            <Statistic size="small">
              <Statistic.Value>{props.dashboard.project_count}</Statistic.Value>
              <Statistic.Label>Total Projects</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="small">
              <Statistic.Value>{props.dashboard.audition_count}</Statistic.Value>
              <Statistic.Label>Total Auditions</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic color="green">
              <Statistic.Value>{props.dashboard.percent_booked} %</Statistic.Value>
              <Statistic.Label>Projects Booked</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="small">
              <Statistic.Value>{props.dashboard.percent_reported} %</Statistic.Value>
              <Statistic.Label>Auditions Reported</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="small">
              <Statistic.Value>{props.dashboard.potential_bookings}</Statistic.Value>
              <Statistic.Label>Open Projects</Statistic.Label>
            </Statistic>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps)(DashboardStats)
