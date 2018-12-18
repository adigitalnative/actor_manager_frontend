import React from 'react'
import {Segment, Header, Container, Icon } from 'semantic-ui-react'

const NotFoundPage = () => {
  console.log()
  return(
    <Container>
      <Segment>
        <Header as='h2' icon textAlign='center'>
        <Icon name='hand paper outline' />
        <Header.Content>404 Not Found</Header.Content>
        <Header.Subheader>Oh no! Stage management seems to have found a problem.</Header.Subheader>
        <Header.Subheader>Take a five and try again later.</Header.Subheader>
        </Header>
        <p></p>
      </Segment>
    </Container>
  )
}

export default NotFoundPage
