import React, { Component, Fragment } from 'react'
import { Button, Modal, Header, Icon, Grid } from 'semantic-ui-react'

class AuditionReport extends Component {
  constructor() {
    super()
    this.state={
      modalOpen: false
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  auditionTitle = () => this.props.audition.project + " | " + this.props.audition.category

  render() {
    return(
      <Modal
        trigger={<Button color="blue" onClick={this.handleOpen}>Report</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        centered={false}
        closeIcon
      >
        <Header>Audition Report</Header>
        <Modal.Content>

          <Header as='h3' textAlign='center'>
          {this.auditionTitle()}
          {this.props.audition.company ? <Header.Subheader>{this.props.audition.company}</Header.Subheader> : null }
          </Header>
          {this.props.audition.report ? (
            <Grid columns={3} divided stackable textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  <Header as="h4">Notes</Header>
                  <p>{this.props.audition.report.notes}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h4">Auditors</Header>
                  <p>{this.props.audition.report.auditors}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h4">People</Header>
                  <p>{this.props.audition.report.people}</p>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          ) : null}
          {console.log(this.props.audition.report)}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>

    )
  }
}

export default AuditionReport
