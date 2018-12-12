import React, { Fragment } from 'react'
import { Header, Item } from 'semantic-ui-react'
import Audition from '../components/Audition'

const AuditionsContainer = () => {
  const starterAuditions = [
        {
          "id": 1,
          "bring": "Headshot and resume",
          "prepare": "1 classical 3-5 m monologue",
          "project": "King John",
          "company": "Folger Shakespeare Library",
          "category": "Invited Audition"
        },
        {
          "id": 2,
          "bring": "Headshot and resume",
          "prepare": "1 classical 3-5 m monologue",
          "project": "King John",
          "company": "Folger Shakespeare Library",
          "category": "Callback"
        }
      ]

  return (
    <Fragment>
      <Header as="h2">Auditions</Header>
      <Item.Group divided>
        {starterAuditions.map(audition => <Audition audition={audition} key={audition.id}/>)}
      </Item.Group>
    </Fragment>
  )
}

export default AuditionsContainer
