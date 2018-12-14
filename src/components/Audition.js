import React from 'react'
import { Item, Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteAudition } from '../redux/actions'
import EditAuditionForm from './EditAuditionForm'

const Audition = ({audition, deleteAudition}) => {

  const handleDeleteClick = () => {
    deleteAudition(audition.id)
  }

  return(
    <Item>
      <Item.Content>
        <Item.Header>{audition.project} | {audition.category}</Item.Header>
        <Item.Meta>{audition.company}</Item.Meta>
        <Item.Description>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <p><b>Prepare:</b> {audition.prepare}</p>
                <p><b>Bring:</b> {audition.bring}</p>
              </Grid.Column>
              <Grid.Column>
                <Button.Group fluid size="mini">
                  <Button color="blue">Report</Button>
                  <EditAuditionForm buttonText="Edit" audition={audition} />
                  <Button color="red" onClick={handleDeleteClick}>Delete</Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteAudition: audition => {dispatch(deleteAudition(audition))}
  }
}

export default connect(null, mapDispatchToProps)(Audition)
