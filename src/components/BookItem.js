import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import EditBookItemForm from './EditBookItemForm'
import { connect } from 'react-redux'
import { deletingBookItem } from '../redux/actions/bookActions'

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
        {props.piece.author}
        </Card.Meta>
        <p>{props.piece.role}</p>
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
