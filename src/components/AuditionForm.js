import React, { Component, Fragment } from 'react'
import { Modal, Form, Button, Select, Label } from 'semantic-ui-react'
import CreatableSelect from 'react-select/lib/Creatable'
import MultiSelect from 'react-select'
import { DateTimeInput } from 'semantic-ui-calendar-react'

import { connect } from 'react-redux'
import { fetchingProjects, fetchingCompanies } from '../redux/actions'
import { creatingAudition } from '../redux/actions/auditionActions'
import { fetchingCategories } from '../redux/actions/categoryActions'


class AuditionForm extends Component {

  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: "",
      auditionCategory: null,
      selectedProject: [],
      modalOpen: false,
      selectedCompany: [],
      editingExisting: false,
      projectError: false,
      pieces: [],
      dateTime: ""
    }
  }

  handleOpen = () => {
    this.props.fetchingProjects()
    this.setState({modalOpen: true})
  }

  handleClose = () => this.setState({modalOpen: false})


  componentDidMount() {
    this.props.fetchingCategories()
    this.props.fetchingProjects()
    this.props.fetchingCompanies()
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const hasCompany = this.state.selectedCompany !== []
    const hasNewCompany = this.state.selectedCompany ? !!this.state.selectedCompany.__isNew__ : false

    let audition = {
      bring: this.state.bring,
      prepare: this.state.prepare,
      category_id: this.state.auditionCategory,
      project_id: this.projectIsNew() ? null : parseInt(this.state.selectedProject.value),
      new_project_title: this.projectIsNew() ? this.state.selectedProject.value : null,
      book_item_ids: this.state.pieces.map(piece => piece.value),
      date_and_time: this.state.dateTime
    };

    if (hasCompany && hasNewCompany) {
      audition.new_company_title = this.state.selectedCompany.value
    } else if (hasCompany) {
      audition.company_id = this.state.selectedCompany.value
    }

    if (audition.project_id || audition.new_project_title) {
      this.props.createAudition(audition)
      this.setState({
        bring: "",
        prepare: "",
        auditionCategory: null,
        selectedProject: [],
        modalOpen: false,
        selectedCompany: [],
        dateTime: ""
      })
    } else {
      this.setState({
        projectError: true
      })
    }

  }

  formattedCategoriesForSelect = () => {
    return this.props.categories.map(category => {
      return {
        key: category.id,
        text: category.name,
        value: category.id
      }
    })
  }

  formattedProjectsForRSelect = () => {
    return this.props.projects.map(project => {
      return {
        value: String(project.id),
        label: project.company ? project.name + " (" + project.company.name + ")" : project.name
      }
    })
  }

  formattedBookForSelect = () => {
    return this.props.book.map(piece => {
      return {
        value: String(piece.id),
        label: piece.display_title
      }
    })
  }

  formattedCompaniesForRSelect = () => {
    return this.props.companies.map(company => {
      return {
        value: String(company.id),
        label: company.name
      }
    })
  }

  handleCreatableChange = (newValue: any, actionMeta: any) => {
    this.setState({
      selectedProject: newValue,
      projectError: false
    })

  };

  handleCompanyCreatableChange = (newValue: any, actionMeta: any) => {
    this.setState({selectedCompany: newValue})
  };

  handlePiecesSelectChange = (newValue: any, actionMeta: any) => {
    this.setState({
      pieces: newValue
    })
  }

  projectIsNew = () => this.state.selectedProject ? !!this.state.selectedProject.__isNew__ : false

  projectError = () => this.state.projectError ? (<Label pointing>You've got to be auditioning for SOMETHING...</Label>) : null


  render() {
    return(
      <Fragment>
      <Modal
        trigger={<Button primary basic fluid size="small" onClick={this.handleOpen}>{this.props.buttonText}</Button>}
        centered={false}
        dimmer='blurring'
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Create an Audition</Modal.Header>
        <Modal.Content>
          <Form onSubmit={event => this.handleSubmit(event)}>
            <label>Project <span style={{color: 'red'}}>*</span></label>
            <CreatableSelect
              isClearable
              onChange={this.handleCreatableChange}
              options={this.formattedProjectsForRSelect()}
            />
            {this.projectError()}

            {this.projectIsNew() ? (
              <div>
                <label>Company</label>
                <CreatableSelect isClearable onChange={this.handleCompanyCreatableChange} options={this.formattedCompaniesForRSelect()} />
              </div>
            ) : (
              <div className="disabled field">
                <label>Company</label>
                <CreatableSelect isClearable onChange={this.handleCompanyCreatableChange} options={this.formattedCompaniesForRSelect()} />
              </div>
            )}
            <Form.Group widths="equal">
              <Form.Field required control={Select} label='Category' options={this.formattedCategoriesForSelect()} placeholder='Audition Category' value={this.state.auditionCategory} name='auditionCategory' onChange={this.handleChange}/>
              <DateTimeInput
                name="dateTime"
                placeholder="Date Time"
                value={this.state.dateTime}
                iconPosition="left"
                onChange={this.handleChange}
                label="Date & Time"
                dateTimeFormat="ddd, MMM DD YYYY HH:mm"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input required label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring} placeholder="To Bring"/>
              <Form.Input required label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare} placeholder="To Prepare"/>
            </Form.Group>
            <MultiSelect isClearable isMulti options={this.formattedBookForSelect()} placeholder="Audition Pieces" onChange={this.handlePiecesSelectChange}/>
            <Button type="submit">Save Audition</Button>
          </Form>
        </Modal.Content>
      </Modal>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCategories: () => {dispatch(fetchingCategories())},
    fetchingProjects: () => {dispatch(fetchingProjects())},
    fetchingCompanies: () => {dispatch(fetchingCompanies())},
    createAudition: audition => {dispatch(creatingAudition(audition))}
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    projects: state.projects,
    companies: state.companies,
    book: state.book
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionForm)
