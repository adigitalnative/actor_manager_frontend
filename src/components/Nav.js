import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const Nav = () => {
  return(
    <Menu>
      <Menu.Item header>Actio</Menu.Item>
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
