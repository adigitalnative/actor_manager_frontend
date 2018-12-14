import React, { Component, Fragment } from 'react'
import { Modal, Form, Button, Select } from 'semantic-ui-react'
import CreatableSelect from 'react-select/lib/Creatable'
import { connect } from 'react-redux'
import { fetchingCategories, fetchingProjects, creatingAudition, fetchingCompanies } from '../redux/actions'


class AuditionForm extends Component {

  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: "",
      auditionCategory: null,
      selectedProject: [],
      modalOpen: false,
    }
  }

  handleOpen = () => {
    this.props.fetchingProjects()
    this.setState({modalOpen: true})
  }

  handleClose = () => this.setState({
    modalOpen: false,
    bring: this.props.audition.bring,
    prepare: this.props.audition.prepare,
    auditionCategory: this.formattedCategoriesForSelect().find(category => category.text === this.props.audition.category).value,
    selectedProject: this.formattedProjectsForRSelect().find(company => company.label === this.formattedCompanyNameFromProps(this.props.audition.project, this.props.audition.company))
  })


  componentDidMount() {
    this.props.fetchingCategories()
    this.props.fetchingProjects()
    this.props.fetchingCompanies()

    const auditionCategory = this.formattedCategoriesForSelect().find(category => category.text === this.props.audition.category).value
    const selectedProject = this.formattedProjectsForRSelect().find(company => company.label === this.formattedCompanyNameFromProps(this.props.audition.project, this.props.audition.company))

    this.setState({
      bring: this.props.audition.bring,
      prepare: this.props.audition.prepare,
      auditionCategory: auditionCategory,
      selectedProject: selectedProject
      // for some reason this one thing isn't saving to state...
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //
  //   const hasCompany = this.state.selectedCompany !== []
  //   const hasNewCompany = this.state.selectedCompany ? !!this.state.selectedCompany.__isNew__ : false
  //
  //   let audition = {
  //     bring: this.state.bring,
  //     prepare: this.state.prepare,
  //     category_id: this.state.auditionCategory,
  //     project_id: this.projectIsNew() ? null : parseInt(this.state.selectedProject.value),
  //     new_project_title: this.projectIsNew() ? this.state.selectedProject.value : null,
  //   };
  //
  //   if (hasCompany && hasNewCompany) {
  //     audition.new_company_title = this.state.selectedCompany.value
  //   } else if (hasCompany) {
  //     audition.company_id = this.state.selectedCompany.value
  //   }
  //
  //   this.props.createAudition(audition)
  //
  //   this.setState({
  //     bring: "",
  //     prepare: "",
  //     auditionCategory: null,
  //     selectedProject: [],
  //     modalOpen: false,
  //     selectedCompany: []
  //   })
  //   // push to history so it stays in the URL
  // }

  formattedCategoriesForSelect = () => {
    return this.props.categories.map(category => {
      return {
        key: category.id,
        text: category.name,
        value: category.id
      }
    })
  }

  formattedCompanyName = project => project.company ? project.name + " (" + project.company.name + ")" : project.name
  formattedCompanyNameFromProps = (project, company) => company ? project + " (" + company + ")" : project

  formattedProjectsForRSelect = () => {
    return this.props.projects.map(project => {
      return {
        value: String(project.id),
        label: this.formattedCompanyName(project)
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
    this.setState({selectedProject: newValue})
  };

  handleCompanyCreatableChange = (newValue: any, actionMeta: any) => {
    this.setState({selectedCompany: newValue})
  };

  projectIsNew = () => this.state.selectedProject ? !!this.state.selectedProject.__isNew__ : false

  render() {
    return(
      <Fragment>
        <Modal
          trigger={<Button onClick={this.handleOpen}>{this.props.buttonText}</Button>}
          centered={false}
          dimmer='blurring'
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Create an Audition</Modal.Header>
          <Modal.Content>
            <Form onSubmit={event => this.handleSubmit(event)}>
              <label>Project</label>
              <CreatableSelect
                isClearable
                onChange={this.handleCreatableChange}
                options={this.formattedProjectsForRSelect()}
                value={this.state.selectedProject}
              />
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
              <Form.Field control={Select} label='Category' options={this.formattedCategoriesForSelect()} placeholder='Audition Category' value={this.state.auditionCategory} name='auditionCategory' onChange={this.handleChange}/>
              <Form.Group widths="equal">
                <Form.Input label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring} placeholder="To Bring"/>
                <Form.Input label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare} placeholder="To Prepare"/>
              </Form.Group>
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
    companies: state.companies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionForm)
