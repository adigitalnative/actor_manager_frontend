import React, { Fragment } from 'react'
import { Item, Grid, Button, Header, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteAudition } from '../redux/actions/auditionActions'
import EditAuditionForm from './EditAuditionForm'
import AuditionReport from './AuditionReport'
import Iframe from 'react-iframe'


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

  const renderPostListing = () => {
    return (
      <Modal
        trigger={<Button size="mini" fluid basic color='blue'>View Original Post</Button>}
        centered={false}
        size='large'
        basic
        closeIcon
      >
        <Modal.Content>
          <Iframe
            url={audition.url}
            width='95%'
            height='80vh'
          />
          <p>&nbsp;</p>
        </Modal.Content>
      </Modal>
    )
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item.Description>
        <Item.Extra>
          <Grid columns={2}>
            <Grid.Column>
              {audition.url ? renderPostListing() : null }
            </Grid.Column>
            <Grid.Column>
              <Button.Group fluid size="mini">
                <AuditionReport audition={audition} />
                <EditAuditionForm buttonText="Edit" audition={audition} />
                <Button color="red" onClick={handleDeleteClick}>Delete</Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Item.Extra>
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
