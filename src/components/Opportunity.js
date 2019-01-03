import React, { Component, Fragment } from 'react'
import { Card, Button, Label, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { archiveLead } from '../redux/actions/opportunityActions'
import LeadAuditionForm from './LeadAuditionForm'
import Iframe from 'react-iframe'


class Opportunity extends Component {

  handleArchive = () => {
    this.props.archiveLead(this.props.lead)
  }

  renderPostListing = () => {
    return (
      <Modal
        trigger={<Button size="mini" fluid basic color='blue'>View Post</Button>}
        centered={false}
        size='large'
        basic
        closeIcon
      >
        <Modal.Content>
          <Iframe
            url={this.props.lead.opportunity.url}
            width='95%'
            height='80vh'
          />
          <p>&nbsp;</p>
        </Modal.Content>
      </Modal>
    )
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
                {this.renderPostListing()}
                {this.props.lead.audition ? null : <LeadAuditionForm lead={this.props.lead}/>}
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
