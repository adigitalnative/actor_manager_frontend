import React, { Fragment } from 'react'
import { Item, Grid, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteAudition } from '../redux/actions'
import EditAuditionForm from './EditAuditionForm'
import AuditionReport from './AuditionReport'

const Audition = ({audition, deleteAudition}) => {

  const handleDeleteClick = () => {
    deleteAudition(audition.id)
  }

  const renderPlannedPieces = () => {
    if (audition.pieces && audition.pieces.length > 0) {
      return(
        <Fragment>
          <Header as="h4">Planned Pieces</Header>
          <ul>
            {audition.pieces.map(piece => <li key={piece.id}>{piece.display_title}</li>)}
          </ul>
        </Fragment>
      )
    } else {
      return null
    }
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
                <p>{audition.dateTime}</p>
                <p><b>Prepare:</b> {audition.prepare}</p>
                <p><b>Bring:</b> {audition.bring}</p>
              </Grid.Column>
              <Grid.Column>
              {renderPlannedPieces()}

                <Button.Group fluid size="mini">
                  <AuditionReport audition={audition} />
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
