import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Input} from 'semantic-ui-react';

const Header = () => (
    <Menu secondary>
        <Link to='/'><Menu.Item name='home' /></Link>
        <Link to='/movies'><Menu.Item name='movies' /></Link>
        <Link to='/sports'><Menu.Item name='sports' /></Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Link to='/login'><Menu.Item>Log in</Menu.Item></Link>
        </Menu.Menu>
      </Menu>
)

export default Header