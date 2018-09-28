import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {Menu, Input} from 'semantic-ui-react';



class Header extends Component{

  constructor(props){
    super(props);
    this.state={
      loggedIn:false
    };

    // this.loginCheck=this.loginCheck.bind(this);
  }

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
          <Link to='/login'><Menu.Item>Log in</Menu.Item></Link>
        </Menu.Menu>
      </Menu>
);
  }

  // loginCheck(){
  //   if(!localStorage.getItem('USER_TOKEN')){
  //    this.setState({loggedIn:true});
  //     return(
  //       <Link to='/login'><Menu.Item>Log in</Menu.Item></Link>);
  //   }
  //   return;
  // } 
  
}
export default Header