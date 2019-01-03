import React, {Component, Fragment} from 'react'
import { Button, Modal, Grid, Form, Dropdown, Select, Message } from 'semantic-ui-react'
import Iframe from 'react-iframe'
import { DateTimeInput } from 'semantic-ui-calendar-react'


import { connect } from 'react-redux'
import { createAuditionFromOpportunity } from '../redux/actions/auditionActions'



class LeadAuditionForm extends Component {
  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: "",
      auditionCategory: null,
      selectedProject: null,
      selectedCompany: null,
      newCompany: false,
      newProject: false,
      editingExisting: false,
      projectError: false,
      pieces: [],
      dateTime: "",
      error: ""
    }
  }

  componentDidMount() {
    // Come back to this - it will work without pre-selecting.
    // const matching_company = this.props.companies.find(company => company.name.downcase() === this.props.lead.opportunity.company)
    // // If a company's name is the same as the opportunity name
    // if (matching_company) { this.setState({ selectedCompany: matching_company.id})}
    // // Set selectedCompany to the company's id
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    let audition = {
      bring: this.state.bring,
      prepare: this.state.prepare,
      book_item_ids: this.state.pieces,
      date_and_time: this.state.dateTime,
      category_id: this.state.auditionCategory,
      lead_id: this.props.lead.id
    }

    // If there is an existing project
    //  send the project id
    // otherwise if there is an existing company
    //  send the company ID and the project name
    // otherwise
    //  send the new company & new project

    // If there is an existing project
    if (!this.state.newProject) {
      // include the project ID
      audition.project_id = this.state.selectedProject
    } else if(!this.state.newCompany) {
      // If there is an existing company but no existing project
      // Set the company id to the company and project title to new title
      audition.company_id = this.state.selectedCompany
      audition.new_project_title = this.state.newProject
    } else {
      audition.new_company_title = this.state.newCompany
      audition.new_project_title = this.state.newProject
    }

    if (audition.project_id || (audition.company_id && audition.new_project_title) || (audition.new_company_title && audition.new_project_title)) {
      this.props.createAudition(audition)
    } else {
      this.setState({error: "Must have company and project to save"})
    }

    // console.log(audition)

  }

  companyOptions = () => {
    let options = this.props.companies.map(company => {
      return {
        key: company.id,
        text: company.name,
        value: company.id
      }
    })
    if (this.state.newCompany) {
      options.push({
        key: this.state.newCompany,
        text: this.state.newCompany,
        value: this.state.newCompany
      })
    }
    return options
  }

  handleCompanyAddition = (e, { value }) => {
    this.setState({
      newCompany: value
    })
  }

  projectOptions = () => {
    let options = this.props.projects.filter(project => project.company.id === this.state.selectedCompany)
    options = options.map(option => {
      return {
        key: option.id,
        text: option.name,
        value: option.id
      }
    })
    if (this.state.newProject) {
      options.push({
        key: this.state.newProject,
        text: this.state.newProject,
        value: this.state.newProject
      })
    }
    return options
  }

  handleProjectAddition = (e, { value }) => {
    this.setState({
      newProject: value
    })
  }

  renderProjectDropdown = () => {
    if (this.state.selectedCompany) {
      return (
        <Fragment>
        <label><strong>Company *</strong></label>

        <Dropdown
                placeholder="Choose or create project"
                name="selectedProject"
                options={this.projectOptions()}
                search
                selection
                fluid
                allowAdditions
                clearable
                value={this.state.selectedProject}
                onAddItem={this.handleProjectAddition}
                onChange={this.handleChange}
                required
              />
        </Fragment>
      )
    }
    return <Form.Input placeholder="Project" label="Project" disabled required/>
  }

  formattedBookForSelect = () => {
    return this.props.book.map(piece => {
      return {
        value: String(piece.id),
        text: piece.display_title,
        key: piece.display_title
      }
    })
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

  shouldBeDisplayed = () => {
    return this.lead.audition ? false : true
  }

  render() {
    return(
      <Modal
        trigger={<Button basic color="green"
        size="mini">Create Audition</Button>}
        centered={false}
      >
        <Modal.Header>Build Audition from Opportunity:</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row columns={2}>

              <Grid.Column>
                <Iframe
                  url={this.props.lead.opportunity.url}
                  width='95%'
                  height='100%'
                />
              </Grid.Column>
              <Grid.Column>
              {this.state.error ? <Message>{this.state.error}</Message> : null}
                <Form loading={this.props.loading}>
                  <label><strong>Company *</strong></label>
                  <Dropdown
                    placeholder="Choose or create company"
                    name="selectedCompany"
                    options={this.companyOptions()}
                    search
                    selection
                    fluid
                    allowAdditions
                    clearable
                    value={this.state.selectedCompany}
                    onAddItem={this.handleCompanyAddition}
                    onChange={this.handleChange}
                    required
                  />
                  {this.renderProjectDropdown()}
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
                  <Form.Input required label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring} placeholder="To Bring"/>
                  <Form.Input required label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare} placeholder="To Prepare"/>
                  <Dropdown
                    placeholder="Audition Pieces"
                    selection
                    fluid
                    multiple
                    search
                    onChange={this.handleChange}
                    name="pieces"
                    options={this.formattedBookForSelect()}
                  />
                  <Button fluid onClick={this.handleSubmit}>Save Audition</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAudition: audition => {dispatch(createAuditionFromOpportunity(audition))}
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    projects: state.projects,
    companies: state.companies,
    book: state.book,
    loading: state.loading
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeadAuditionForm)

// <Form onSubmit={event => this.handleSubmit(event)}>
//   <label>Project <span style={{color: 'red'}}>*</span></label>
//   <CreatableSelect
//     isClearable
//     onChange={this.handleCreatableChange}
//     options={this.formattedProjectsForRSelect()}
//   />
//   {this.projectError()}
//
//   {this.projectIsNew() ? (
//     <div>
//       <label>Company</label>
//       <CreatableSelect isClearable onChange={this.handleCompanyCreatableChange} options={this.formattedCompaniesForRSelect()} />
//     </div>
//   ) : (
//     <div className="disabled field">
//       <label>Company</label>
//       <CreatableSelect isClearable onChange={this.handleCompanyCreatableChange} options={this.formattedCompaniesForRSelect()} />
//     </div>
//   )}
//   <Form.Group widths="equal">
//     <Form.Field required control={Select} label='Category' options={this.formattedCategoriesForSelect()} placeholder='Audition Category' value={this.state.auditionCategory} name='auditionCategory' onChange={this.handleChange}/>
//     <DateTimeInput
//       name="dateTime"
//       placeholder="Date Time"
//       value={this.state.dateTime}
//       iconPosition="left"
//       onChange={this.handleChange}
//       label="Date & Time"
//       dateTimeFormat="ddd, MMM DD YYYY HH:mm"
//     />
//   </Form.Group>
//   <Form.Group widths="equal">
//     <Form.Input required label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring} placeholder="To Bring"/>
//     <Form.Input required label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare} placeholder="To Prepare"/>
//   </Form.Group>
//   <Dropdown
//     placeholder="Audition Pieces"
//     selection
//     fluid
//     multiple
//     search
//     onChange={this.handleChange}
//     name="pieces"
//     options={this.formattedBookForSelect()}
//   />
//   <Button type="submit">Save Audition</Button>
// </Form>
