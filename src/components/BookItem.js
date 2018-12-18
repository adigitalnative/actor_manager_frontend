import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import EditBookItemForm from './EditBookItemForm'
import { connect } from 'react-redux'
import { deletingBookItem } from '../redux/actions.js'

const BookItem = props => {

  const handleDeletePiece = () => {
    props.deletingBookItem(props.piece.id)
  }

  return(
    <Card>
      <Card.Content>
        <Card.Header>
          {props.piece.title}
        </Card.Header>
        <Card.Meta>
        {props.piece.role}
        </Card.Meta>
        {props.piece.author}
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button disabled>View</Button>
        <EditBookItemForm piece={props.piece}>Edit</EditBookItemForm>
        <Button negative onClick={handleDeletePiece}>Delete</Button>
      </Card.Content>
    </Card>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deletingBookItem: bookItem => {dispatch(deletingBookItem(bookItem))}
  }
}

export default connect(null, mapDispatchToProps)(BookItem)