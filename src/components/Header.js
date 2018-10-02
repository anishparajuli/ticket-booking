import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {Menu, Input} from 'semantic-ui-react';
import config from 'react-global-configuration';


class Header extends Component{


  render(){
return(
    <Menu secondary>
        <Link to='/'><Menu.Item name='home' /></Link>
        <Link to='/movies'><Menu.Item name='movies' /></Link>
        <Link to='/sports'><Menu.Item name='sports' /></Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {this.loginCheck()}
        </Menu.Menu>
      </Menu>
);
  }

  loginCheck(){
    if(!this.props.loggedIn){
      return(
        <Link to='/login'><Menu.Item>Log in</Menu.Item></Link>);
    }
    else{
      return(
      <Link to={'/profile'}><Menu.Item>Hi! {localStorage.getItem('username')}</Menu.Item></Link>);
    }
  } 
  
}
export default Header