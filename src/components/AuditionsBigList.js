import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Header, Icon } from 'semantic-ui-react'


const AuditionsBigList = props => {

  console.log(props.auditions)

  const hasReport = audition => {
    return !!audition.report.auditors || !!audition.report.notes || !!audition.report.people || !!audition.report.result
  }

  const castingStatus = audition => {
    if (audition.report.result) {
      switch(audition.report.result.name) {
        case "Offered Role":
          return "cast"
        case "Declined Role":
          return "declined"
        case "Not Cast":
          return "not"
        default:
          return null
      }
    }
    return null
  }

  const renderCastingStatus = audition => {
    switch (castingStatus(audition)) {
      case "cast":
        return(<Icon name="star" color="blue" />)
      case "declined":
        return (
          <Icon name="star" color="gray" />
        )
      default:
        return null
    }
  }

  const notCast = audition => castingStatus(audition) === "not" ? true : false

  const auditionRow = audition => {
    return(
      <Table.Row key={audition.id} disabled={notCast(audition)}>
        <Table.Cell>{audition.category}</Table.Cell>
        <Table.Cell>{audition.project}</Table.Cell>
        <Table.Cell>{audition.company}</Table.Cell>
        <Table.Cell textAlign="center">
          {hasReport(audition) ? (
            <Icon name="check" color="green"/>
          ) : null}
        </Table.Cell>
        <Table.Cell>
          {renderCastingStatus(audition)}
        </Table.Cell>

      </Table.Row>
    )
  }

  return(
    <Fragment>
      <Header as="h3">Auditions</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Report</Table.HeaderCell>
            <Table.HeaderCell>Cast</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.auditions.map(audition => auditionRow(audition))}
        </Table.Body>
      </Table>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    auditions: state.auditions
  }
}

export default connect(mapStateToProps)(AuditionsBigList)
