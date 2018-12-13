import React from 'react'
import { Menu, Button, Image } from 'semantic-ui-react'
import logo_v1 from '../images/Logo_V1.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <Menu>
      <Menu.Item>
        <Image src={logo_v1} size="tiny" as={Link} to='/'/>
      </Menu.Item>
      <Menu.Item
        name="auditions"
        as={Link}
        to='/auditions'
        />
      <Menu.Item position="right">
        <Button basic color="red">Sign Out</Button>
      </Menu.Item>
    </Menu>
  )
}

export default Nav
