import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import background_image from '../images/folger_H5_stage.jpg'

const backgroundImageDivStyle = {
  backgroundImage: `url(${background_image})`,
  backgroundSize: 'cover',
  minHeight: '400px'
}

const WelcomePage = () => {
  return(
    <div style={backgroundImageDivStyle}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Button.Group basic inverted fluid size="massive" >
              <Button as={Link} to='/login'>Login</Button>
              <Button.Or />
              <Button as={Link} to='/signup'>Sign Up</Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default WelcomePage
