import React, {
    Component
} from 'react';

import UserDetails from './UserDetails';
import UserSettings from './UserSettings';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'              
/* ................................ 
.........Main App class ...........
..................................*/
               
class User extends Component {
               
               
    render() {
        
        return ( <div>
                <Route exact path={this.props.match.path} component = {UserDetails}/>   
                <Route path={this.props.match.url+"/settings"} component = {UserSettings}/>   
                
                
          </div>
                
        );
    }
        
}


export default User;