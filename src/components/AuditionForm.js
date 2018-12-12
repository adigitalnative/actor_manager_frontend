import React, { Component, Fragment } from 'react'
import { Modal, Form, Button, Select } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingCategories } from '../redux/actions'


const categoryOptions = [
  {key: "1", text: "Open Call", value: "1"},
  {key: "2", text: "EPA", value: "2"},
  {key: "4", text: "Callback", value: "4"},
]

class AuditionForm extends Component {

  constructor() {
    super()
    this.state = {
      bring: "",
      prepare: "",
      auditionCategory: null
    }
  }


  componentDidMount() {
    this.props.fetchingCategories()
  }

  handleChange = (e, {name, value }) => {
    this.setState({ [name] : value })
  }

  handleSubmit = () => {
    console.log(this.state)
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

  render() {

    return(
      <Fragment>
        <Modal.Header>Create an Audition</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={Select} label='Category' options={this.formattedCategoriesForSelect()} placeholder='Audition Category' value={this.state.auditionCategory} name='auditionCategory' onChange={this.handleChange}/>
            <Form.Group widths="equal">
              <Form.Input label="Bring" type="text" name="bring" onChange={this.handleChange} value={this.state.bring}/>
              <Form.Input label="Prepare" type="text" name="prepare" onChange={this.handleChange} value={this.state.prepare}/>
            </Form.Group>
            <Button type="submit">Save Audition</Button>
          </Form>
        </Modal.Content>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCategories: () => {dispatch(fetchingCategories())}
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditionForm)
