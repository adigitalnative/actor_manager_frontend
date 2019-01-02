import React, { Component, Fragment } from 'react'
import { Card, Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { archiveLead } from '../redux/actions/opportunityActions'
import LeadAuditionForm from './LeadAuditionForm'

class Opportunity extends Component {

  handleArchive = () => {
    this.props.archiveLead(this.props.lead)
  }

  render() {
    return (
      <Card key={this.props.lead.id}>
        <Card.Content>
          {this.props.lead.archived ? <Label color="red" ribbon="right">Archived</Label> : null}
          <Card.Header>
            {this.props.lead.opportunity.title}
          </Card.Header>
          <Card.Meta>{this.props.lead.opportunity.company}</Card.Meta>
          <Card.Description>
            Source: {this.props.lead.opportunity.source}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui three buttons">
            {this.props.lead.archived ? (
              null
            ) : (
              <Fragment>
                <Button basic color="blue" size="mini" href={this.props.lead.opportunity.url} target="_blank">View Posting</Button>
                <LeadAuditionForm lead={this.props.lead}/>
              </Fragment>
            )}
            <Button basic color="red" size="mini" onClick={this.handleArchive}>{this.props.lead.archived ? "Show" : "Archive"}</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    archiveLead: lead => {dispatch(archiveLead(lead))}
  }
}

export default connect(null, mapDispatchToProps)(Opportunity)
