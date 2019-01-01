import React from 'react'
import { Segment, Container, Grid, Header, List, Divider } from 'semantic-ui-react'

const Footer = () => {
  return(
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }} className="footer">
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='About Actio' />
          <List link inverted>
            <List.Item as='a'>Support</List.Item>
            <List.Item as='a'>History</List.Item>
            <List.Item as='a'>Roadmap</List.Item>
            <List.Item as='a'>Have a suggestion?</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='The Native Foundry' />
          <List link inverted>
            <List.Item as='a' href="http://nativefoundry.com">The Foundry</List.Item>
            <List.Item as='a' href="http://www.jacquelinechenault.com">The Actor</List.Item>
            <List.Item as='a' href="http://www.flatironschool.com">Flatiron School</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Resources' />
          <List link inverted>
            <List.Item as='a' href="http://www.actorsequity.com">Actor's Equity</List.Item>
            <List.Item as='a' href="http://www.playbill.com">Playbill</List.Item>
            <List.Item as='a' href="http://www.backstage.com">Backstage</List.Item>
            <List.Item as='a' href="http://actorscenter.org">Actor's Center [DC]</List.Item>
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
