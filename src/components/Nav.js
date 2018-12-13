import React from 'react'
import { Menu, Button, Image } from 'semantic-ui-react'
import logo_v1 from '../images/Logo_V1.png'

const Nav = () => {
  return(
    <Menu>
      <Menu.Item>
        <Image src={logo_v1} size="tiny"/>
      </Menu.Item>
      <Menu.Item
        name="auditions"
        as="a"
        />
      <Menu.Item position="right">
        <Button basic color="red">Sign Out</Button>
      </Menu.Item>
    </Menu>
  )
}

export default Nav
