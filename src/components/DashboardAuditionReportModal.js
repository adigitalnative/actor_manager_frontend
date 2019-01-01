import React, {Component, Fragment} from 'react'
import { Modal, Label, Button, Divider, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateReportFromDashboard } from '../redux/actions/reportActions'

class DashboardAuditionReportModal extends Component {
  constructor() {
    super()
    this.state={
      displayForm: false,
      notes: "",
      auditors: "",
      people: ""
    }

  }

  componentDidMount() {
    let {audition} = this.props

    // If the audition has no report, default to displaying the form in the modal
    this.hasReport() ? (
      this.setState({
        notes: audition.report.notes,
        auditors: audition.report.auditors,
        people: audition.report.people
      })
    ) : (
      this.setState({
        notes: audition.report.notes,
        auditors: audition.report.auditors,
        people: audition.report.people,
        displayForm: true
      })

    )
  }

  toggleForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  renderReport = () => {
    let {audition} = this.props
    return (
      <Modal.Content>
        <Modal.Description>
          {audition.report.notes ? (
            <Fragment>
              <Divider horizontal>Notes</Divider>
              <p>{audition.report.notes}</p>
            </Fragment>
          ) : null }
          {audition.report.auditors ? (
            <Fragment>
              <Divider horizontal>Auditors</Divider>
              <p>{audition.report.auditors}</p>
            </Fragment>
          ) : null }
          {audition.report.people ? (
            <Fragment>
              <Divider horizontal>People</Divider>
              <p>{audition.report.people}</p>
            </Fragment>
          ) : null }
        </Modal.Description>
      </Modal.Content>
    )
  }

  renderForm = () => {
    return (
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Input label="Notes" onChange={this.handleChange} name="notes" value={this.state.notes}/>
            <Form.Input label="Auditors" onChange={this.handleChange} name="auditors" value={this.state.auditors}/>
            <Form.Input label="People" onChange={this.handleChange} name="people" value={this.state.people}/>
          </Form>
        </Modal.Description>
      </Modal.Content>
    )
  }

  hasReport = () => {
    let {report} = this.props.audition
    if(report.notes || report.people || report.auditors) {
      return true
    } else {
      return false
    }
  }

  handleSubmit = () => {
    const report = {
      notes: this.state.notes,
      auditors: this.state.auditors,
      people: this.state.people,
      audition_id: this.props.audition.id
    }
    console.log("Submit Report", report)

    this.props.updateReport(report)
    this.toggleForm()
  }

  render() {
    let {audition} = this.props

    return (
      <Modal
        trigger={this.hasReport() ? <Button fluid size="mini" >View Report</Button> : <Button  fluid size="mini" color="red">Write Report</Button>}
        centered={false}
        closeIcon
      >
        <Modal.Header>
          {audition.project_name}: {audition.category} {audition.date ? "on " + audition.date : null}
        </Modal.Header>
        {this.state.displayForm ? this.renderForm() : this.renderReport()}
        <Modal.Actions>
          {this.state.displayForm ? (
            <Fragment>
              <Button onClick={this.toggleForm}>Cancel</Button>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Fragment>
          ) : <Button onClick={this.toggleForm}>Edit</Button> }

        </Modal.Actions>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReport: report => {dispatch(updateReportFromDashboard(report))}
  }
}

export default connect(null, mapDispatchToProps)(DashboardAuditionReportModal)
