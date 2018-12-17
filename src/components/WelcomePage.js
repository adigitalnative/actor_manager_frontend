import React from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo_inverse_V1.png'
import {connect} from 'react-redux'

const backgroundImageDivStyle = {
  minHeight: '700px'
}

const logoStyle = {
  paddingTop: '2em',
  paddingBottom: '2em'
}

const WelcomePage = props => {

  return(
    <div style={backgroundImageDivStyle}>
      <Image src={logo} centered style={logoStyle}/>
      {props.currentUser ? null : (
        <Grid columns={4} stackable>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Button as={Link} to='/login' primary size="massive" fluid>Login</Button>
            </Grid.Column>
            <Grid.Column>
              <Button as={Link} to='/signup' secondary size="massive" fluid>Sign Up</Button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(WelcomePage)
