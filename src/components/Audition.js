import React from 'react'
import { Item, Grid, Button } from 'semantic-ui-react'

const Audition = ({audition}) => {
  return(
    <Item>
      <Item.Content>
        <Item.Header>{audition.project} | {audition.category}</Item.Header>
        <Item.Meta>{audition.company}</Item.Meta>
        <Item.Description>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <p><b>Prepare:</b> {audition.prepare}</p>
                <p><b>Bring:</b> {audition.bring}</p>
              </Grid.Column>
              <Grid.Column>
                <Button.Group fluid size="mini">
                  <Button>Edit</Button>
                  <Button color="red">Delete</Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

export default Audition