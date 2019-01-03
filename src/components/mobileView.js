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

const MobileView = props => {

  return(
    <div style={backgroundImageDivStyle}>
      <Image src={logo} centered style={logoStyle}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(MobileView)
