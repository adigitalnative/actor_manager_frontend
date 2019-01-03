import React, { Fragment } from 'react'
import { Menu, Button, Image } from 'semantic-ui-react'
import logo_v1 from '../images/Logo_V1.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/authActions'

const Nav = props => {
  const renderUserLinks = () => {
    return (
      <Fragment>
        <Menu.Item name="auditions" as={Link} to='/auditions' />
        <Menu.Item name="opportunities" as={Link} to='/opportunities' />
        <Menu.Item name="yourBook" as={Link} to='/book' />
        <Menu.Item name="dashboard" as={Link} to='/dashboard' />
        <Menu.Item as={Link} to='/companies_and_projects'>Companies & Projects</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="Settings" as={Link} to='/settings'/>
          <Menu.Item>
            <Button basic color="red" onClick={props.logout}>Sign Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Fragment>
    )
  }
  return(
    <Menu fixed='top'>
      <Menu.Item>
        <Image src={logo_v1} size="tiny" as={Link} to='/'/>
      </Menu.Item>
      { props.currentUser ? renderUserLinks() : null }
    </Menu>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {dispatch(logoutUser())}
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
