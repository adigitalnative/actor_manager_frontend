import React, { Fragment } from 'react'
import { Container, Segment, Header, List, Divider } from 'semantic-ui-react'
import Nav from './Nav'

const RoadmapPage = () => {
  return(
    <Fragment>
      <Nav />
      <Container>
        <Segment>
          <Header>Actio Software Roadmap</Header>
          <Divider />
          <p>Like good art, software is always growing and changing based on the stimulus of the world around it.</p>
          <p>That's why these roadmap items are <i>ideas</i> that we're thinking about implementing, not feature promises.</p>

          <Divider />

          <List>
            <List.Item>
              <List.Header>Audition Opportunities from outside sources</List.Header>
              <List.Description>Auditions will be pulled daily from one or more sources. Actors can turn leads into projects & auditions.</List.Description>
            </List.Item>
            <List.Item>
              <List.Header>Photos</List.Header>
              <List.Description>You'll be able to post a photo of yourself at the audition, or just after - so that when they call you back in, you can keep track of not only what you did, but what you wore.</List.Description>
            </List.Item>
            <List.Item>
              <List.Header>Your Book</List.Header>
              <List.Description>Keep copies of all your monologues and songs stored digitally, so you can always pull it up if you need it.</List.Description>
            </List.Item>
            <List.Item>
              <List.Header>Crunching the Numbers</List.Header>
              <List.Description>New, useful ways to crunch all of the data you are putting into the system. Which monologues serve you best? When did you last chat with that theatre or casting director? What types of characters or auditions are netting you callbacks and castings? Do any of your headshots perform better than others? We'll be looking at how to leverage the data you give us to help make all this and more possible.</List.Description>
            </List.Item>
            <List.Item>
              <List.Header>Design and interface changes</List.Header>
              <List.Description>Through it all, we'll be tweaking the interface to make it more useful, friendly, and intiutive. We might change the layout or design. This app is still being heavily modified, so don't get too attached to things - but if you really like how something works, or a feature went away that you were using regularly, definitely let us know!</List.Description>
            </List.Item>
          </List>
        </Segment>
      </Container>
    </Fragment>
  )
}

const PrivacyPolicyPage = () => {
  return(
    <Fragment>
      <Nav />
      <Container>
        <Segment>
          <Header>Actio Privacy Policy</Header>
          <Divider />
          <p>Actio is a new thing, so it's a little difficult to know exactly what privacy policy to put in place at the start. That said, here's the groundplan:</p>

          <Divider horizontal>Your Data</Divider>
          <p>Your data = your data. Period.</p>

          <p>We won't sell your information, or share it with other people without your say-so. We won't go prying into it, except as necessary for troubleshooting and occasions where it might help us figure out how to make the software better for your use.</p>

          <p>You'll always have the right to delete your account and its associated information from our system.</p>

          <p>If any of this changes, we'll let you know and give you a chance to remove/deactivate your account BEFORE the change.</p>
        </Segment>
      </Container>
    </Fragment>
  )
}

export { RoadmapPage, PrivacyPolicyPage }
