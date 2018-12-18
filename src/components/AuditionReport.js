import React, { Component } from 'react'
import { Button, Modal, Header, Grid, Form, Label } from 'semantic-ui-react'
import Select from 'react-select'
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
      people: "",
      result: null
    }
  }

  componentDidMount() {
    const result = this.props.audition.report.result ? (this.formattedResultsForSelect().find(result => result.value === this.props.audition.report.result.id)) : null

    this.setState({
      notes: this.props.audition.report.notes ? this.props.audition.report.notes : "",
      auditors: this.props.audition.report.auditors ? this.props.audition.report.auditors : "",
      people: this.props.audition.report.people ? this.props.audition.report.auditors : "",
      result: result
    })
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true,
    })
  }

  handleClose = () => this.setState({
    modalOpen: false,
    displayFormFields: false
  })

  auditionTitle = () => this.props.audition.project + " | " + this.props.audition.category

  toggleForm = () => {
    const result = this.props.audition.report.result ? (this.formattedResultsForSelect().find(result => result.value === this.props.audition.report.result.id)) : null

    this.setState({
      displayFormFields: !this.state.displayFormFields,
      notes: this.props.audition.report.notes ? this.props.audition.report.notes : "",
      auditors: this.props.audition.report.auditors ? this.props.audition.report.auditors : "",
      people: this.props.audition.report.people ? this.props.audition.report.auditors : "",
      result: result
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    const report = {
      notes: this.state.notes,
      auditors: this.state.auditors,
      people: this.state.people,
      audition_id: this.props.audition.id,
    }

    const hasResult = !!this.state.result

    if (hasResult) {
      report.result_id = this.state.result.value
    } else {
      report.result_id = null
    }
    this.props.updateReport(report)
    this.toggleForm()
  }

  resultCornerLabel = () => {
    if (!!this.props.audition.report.result) {
      if (this.props.audition.report.result.name === "Offered Role") {
        return (
          <Label as='a' color='blue' corner='right' icon="star"/>
        )
      } else if (this.props.audition.report.result.name === "Declined Role") {
        return (
          <Label as='a' color='grey' corner='right' icon="star"/>
        )
      }
    }
    if (!!this.props.audition.report.result && this.props.audition.report.result.name === "Offered Role") {
      return (
        <Label as='a' color='blue' corner='right' icon="star"/>
      )
    }
  }

  resultTitleLabel = () => {
    if(!!this.props.audition.report.result) {
      return <Label color="blue" size="mini">{this.props.audition.report.result.name}</Label>
    }
  }

  formattedResultsForSelect = () => {
    return this.props.resultOptions.map(resultOption => {
      return {
        key: resultOption.id,
        label: resultOption.name,
        value: resultOption.id
      }
    })
  }

  handleResultChange = (newValue: any, actionMeta: any) => {
    this.setState({result: newValue})
  };

  render() {
    return(
      <Modal
        trigger={<Button color="blue" onClick={this.handleOpen}>Report</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        centered={false}
        closeIcon
      >

        {this.resultCornerLabel()}

        <Header>Audition Report</Header>

        <Modal.Content>
          <Header as='h3' textAlign='center'>
            {this.auditionTitle()}
            {this.resultTitleLabel()}
            {this.props.audition.company ? <Header.Subheader>{this.props.audition.company}</Header.Subheader> : null }
          </Header>

            <Form>
            <Grid columns={3} divided stackable textAlign="center">
              <Grid.Row>
                <Grid.Column>
                    {this.state.displayFormFields ? (
                      <Form.TextArea label="Notes" type="text" value={this.state.notes} name="notes" onChange={this.handleChange} />
                    ) : (
                      <div onClick={this.toggleForm}>
                        <Header as="h4">Notes</Header>
                        <p>{this.props.audition.report.notes}</p>
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    {this.state.displayFormFields ? (
                      <Form.TextArea label="Auditors" type="text" value={this.state.auditors} name="auditors" onChange={this.handleChange}/>
                    ) : (
                      <div onClick={this.toggleForm}>
                        <Header as="h4">Auditors</Header>
                        <p>{this.props.audition.report.auditors}</p>
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    {this.state.displayFormFields ? (
                      <Form.TextArea label="People" type="text" value={this.state.people} name="people" onChange={this.handleChange}/>
                    ) : (
                      <div onClick={this.toggleForm}>
                        <Header as="h4">People</Header>
                        <p>{this.props.audition.report.people}</p>
                      </div>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              {this.state.displayFormFields ? (
                <div>
                  <Select
                    isClearable
                    isSearchable
                    defaultValue={this.state.result}
                    options={this.formattedResultsForSelect()}
                    onChange={this.handleResultChange}
                  />
                </div>
              ) : null}
            </Form>
        </Modal.Content>
        {this.state.displayFormFields ? (
          <Modal.Actions>
            <Button onClick={this.toggleForm}>Cancel</Button>
            <Button color='green' onClick={this.handleSubmit}>Save</Button>
          </Modal.Actions>
        ) : null}

      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    resultOptions: state.resultOptions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReport: report => dispatch(updatingReport(report)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionReport)
