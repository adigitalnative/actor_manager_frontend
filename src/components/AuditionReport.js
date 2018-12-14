import React, { Component } from 'react'
import { Button, Modal, Header, Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updatingReport } from '../redux/actions'

class AuditionReport extends Component {
  constructor() {
    super()
    this.state={
      modalOpen: false,
      displayFormFields: false,
      notes: "",
      auditors: "",
      people: ""
    }
  }

  componentDidMount() {
    if (this.props.audition.report) {
      this.setState({
        notes: this.props.audition.report.notes,
        auditors: this.props.audition.report.auditors,
        people: this.props.audition.report.people
      })
    }

  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({
    modalOpen: false,
    displayFormFields: false
  })

  auditionTitle = () => this.props.audition.project + " | " + this.props.audition.category

  toggleForm = () => {
    this.setState({
      displayFormFields: !this.state.displayFormFields,
      notes: this.props.audition.report.notes,
      auditors: this.props.audition.report.auditors,
      people: this.props.audition.report.people
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleReportUpdate = () => {
    const report = {
      notes: this.state.notes,
      auditors: this.state.auditors,
      people: this.state.people,
      audition_id: this.props.audition.id
    }
    this.props.updateReport(report)
    this.toggleForm()
  }

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
            <Form>
            <Grid columns={3} divided stackable textAlign="center">
              <Grid.Row>
                <Grid.Column>
                    {this.state.displayFormFields ? (
                      <Form.Input label="Notes" type="text" value={this.state.notes} name="notes" onChange={this.handleChange} />
                    ) : (
                      <div onClick={this.toggleForm}>
                        <Header as="h4">Notes</Header>
                        <p>{this.props.audition.report.notes}</p>
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    {this.state.displayFormFields ? (
                      <Form.Input label="Auditors" type="text" value={this.state.auditors} name="auditors" onChange={this.handleChange}/>
                    ) : (
                      <div onClick={this.toggleForm}>
                        <Header as="h4">Auditors</Header>
                        <p>{this.props.audition.report.auditors}</p>
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    {this.state.displayFormFields ? (
                      <Form.Input label="People" type="text" value={this.state.people} name="people" onChange={this.handleChange}/>
                    ) : (
                      <div onClick={this.toggleForm}>
                        <Header as="h4">People</Header>
                        <p>{this.props.audition.report.people}</p>
                      </div>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          ) : null}
        </Modal.Content>
        {this.state.displayFormFields ? (
          <Modal.Actions>
            <Button onClick={this.toggleForm}>Cancel</Button>
            <Button color='green' onClick={this.handleReportUpdate}>Save</Button>
          </Modal.Actions>
        ) : null}

      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReport: report => dispatch(updatingReport(report))
  }
}

export default connect(null, mapDispatchToProps)(AuditionReport)
