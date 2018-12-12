import React, { Component, Fragment } from 'react'
import { Modal, Form, Button, Select } from 'semantic-ui-react'
import RSelect from 'react-select'
import { connect } from 'react-redux'
import { fetchingCategories, fetchingProjects, creatingAudition } from '../redux/actions'


class AuditionForm extends Component {

  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: "",
      auditionCategory: null,
      project: null,
      modalOpen: false
    }
  }

  handleOpen = () => this.setState({modalOpen: true})
  handleClose = () => this.setState({modalOpen: false})


  componentDidMount() {
    this.props.fetchingCategories()
    this.props.fetchingProjects()
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = event => {
    event.preventDefault()
    let audition = {
      bring: this.state.bring,
      prepare: this.state.prepare,
      category_id: this.state.auditionCategory,
      project_id: this.state.project
    };
    this.props.createAudition(audition)
    this.setState({
      bring: "",
      prepare: "",
      auditionCategory: null,
      project: null,
      modalOpen: false,
      selectedProject: null
    })
    // push to history so it stays in the URL
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
        value: project.id,
        label: project.name
      }
    })
  }

  handleRProjectChange = (selectedProject) => {
    this.setState({ project: selectedProject.value })
  }

  render() {
    return(
      <Fragment>
      <Modal
        trigger={<Button primary basic fluid size="small" onClick={this.handleOpen}>Add Audition</Button>}
        centered={false}
        dimmer='blurring'
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Create an Audition</Modal.Header>
        <Modal.Content>
          <Form onSubmit={event => this.handleSubmit(event)}>
            <RSelect
              value={this.state.selectedProject}
              onChange={this.handleRProjectChange}
              options={this.formattedProjectsForRSelect()}
              placeholder="Project"
              name="project"
            />
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
    createAudition: audition => {dispatch(creatingAudition(audition))}
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    projects: state.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionForm)