import React from 'react'
import { Segment, Container, Grid, Header, List, Divider } from 'semantic-ui-react'

const Footer = () => {
  return(
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 1' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 2' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 3' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as='h4' content='Want More Info?' />
          <p>
            Sign up for the Actio newsletter and be the first to find out when we update the platform!
          </p>
          <p>(Mailchimp form entry here)</p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />
      <List horizontal inverted divided link size='small'>
        <List.Item as='a' href='#'>
          Site Map
        </List.Item>
        <List.Item as='a' href='#'>
          Contact Us
        </List.Item>
        <List.Item as='a' href='#'>
          Terms and Conditions
        </List.Item>
        <List.Item as='a' href='#'>
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
  )
}

export default Footer
