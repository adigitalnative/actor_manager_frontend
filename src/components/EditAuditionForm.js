import React, { Component, Fragment } from 'react'
import { Modal, Form, Button, Select, Header } from 'semantic-ui-react'
import MultiSelect from 'react-select'
// import CreatableSelect from 'react-select/lib/Creatable'
import { connect } from 'react-redux'
import { updatingAudition } from '../redux/actions'


class EditAuditionForm extends Component {

  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: "",
      auditionCategory: null,
      selectedProject: [],
      modalOpen: false,
      selectedCompany: [],
      pieces: []
    }
  }

  handleOpen = () => {
    // this.props.fetchingProjects()
    this.setState({modalOpen: true})
  }

  handleClose = () => this.setState({
    modalOpen: false
  })


  componentDidMount() {
    let auditionCategory
    if (this.formattedCategoriesForSelect().length > 0) {
      auditionCategory = this.formattedCategoriesForSelect().find(category => category.text === this.props.audition.category).value
    } else {
      auditionCategory = null
    }
    const selectedProject = this.formattedProjectsForRSelect().find(company => company.label === this.formattedCompanyNameFromProps(this.props.audition.project, this.props.audition.company))
    const selectedPieces = this.formattedBookForSelect().filter(bookItem => {
      const pieces = this.props.audition.pieces.map(piece => piece.id)
      return pieces.includes(parseInt(bookItem.value))
    })

    this.setState({
      bring: this.props.audition.bring,
      prepare: this.props.audition.prepare,
      auditionCategory: auditionCategory,
      selectedProject: selectedProject,
      pieces: selectedPieces
    })
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = event => {
    event.preventDefault()

    // const hasCompany = this.state.selectedCompany !== []
    // const hasNewCompany = this.state.selectedCompany ? !!this.state.selectedCompany.__isNew__ : false

    let audition = {
      bring: this.state.bring,
      prepare: this.state.prepare,
      category_id: this.state.auditionCategory,
      id: this.props.audition.id,
      book_item_ids: this.state.pieces.map(piece => piece.value)
      // project_id: this.projectIsNew() ? null : parseInt(this.state.selectedProject.value),
      // new_project_title: this.projectIsNew() ? this.state.selectedProject.value : null,
    };
    // console.log("New Project?", this.projectIsNew())
    // console.log("selected project", this.state.selectedProject)


    // if (hasCompany && hasNewCompany) {
    //   audition.new_company_title = this.state.selectedCompany.value
    // } else if (hasCompany) {
    //   audition.company_id = this.state.selectedCompany.value
    // }

    // console.log("Audition: ", audition)

    this.props.updateAudition(audition)
    this.handleClose()
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

  formattedBookForSelect = () => {
    return this.props.book.map(piece => {
      return {
        value: String(piece.id),
        label: piece.display_title
      }
    })
  }

  handleCreatableChange = (newValue: any, actionMeta: any) => {
    this.setState({selectedProject: newValue})
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

  projectHeader = () => {
    const title = this.props.audition.company ? this.props.audition.project + " (" + this.props.audition.company + ")" : this.props.audition.project
    return <Header>{title}</Header>
  }

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
          <Modal.Header>Edit Audition</Modal.Header>
          <Modal.Content>
            <Form onSubmit={event => this.handleSubmit(event)}>
              {this.projectHeader()}
              <Form.Field control={Select} label='Category' options={this.formattedCategoriesForSelect()} placeholder='Audition Category' value={this.state.auditionCategory} name='auditionCategory' onChange={this.handleChange}/>
              <Form.Group widths="equal">
                <Form.Input label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring} placeholder="To Bring"/>
                <Form.Input label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare} placeholder="To Prepare"/>
              </Form.Group>
              <MultiSelect isClearable isMulti options={this.formattedBookForSelect()} placeholder="Audition Pieces" onChange={this.handlePiecesSelectChange} value={this.state.pieces}/>

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
    updateAudition: audition => {dispatch(updatingAudition(audition))}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditAuditionForm)


// Saving more complicated form inputs to figure out later
// <label>Project</label>
// <CreatableSelect
//   isClearable
//   onChange={this.handleCreatableChange}
//   options={this.formattedProjectsForRSelect()}
// />
// {this.projectIsNew() ? (
//   <div>
//     <label>Company</label>
//     <CreatableSelect isClearable onChange={this.handleCompanyCreatableChange} options={this.formattedCompaniesForRSelect()} />
//   </div>
// ) : (
//   <div className="disabled field">
//     <label>Company</label>
//     <CreatableSelect isClearable onChange={this.handleCompanyCreatableChange} options={this.formattedCompaniesForRSelect()} />
//   </div>
// )}
