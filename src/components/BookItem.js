import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import EditBookItemForm from './EditBookItemForm'

const BookItem = props => {
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
        <Button negative>Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default BookItem
