import React, {
    Component
} from 'react';
import '../App.css';
import App from './App';
import Main from './Main';
import Admin from './Admin';
import Login from './Login';
import User from './User';
import Header from './Header';
import Dashboard from './Dashboard';
import axios from 'axios';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'              
/* ................................ 
.........Main App class ...........
..................................*/
               
class Home extends Component {
               
    constructor(props) {
    super(props);
    this.state = {
 
    };
  }
               
    render() {
        
        return ( <div>

            <Header />
                <Route exact path='/' component={Main}/>
                <Route path='/App' component={App}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Admin' component={Admin} />
                <Route path='/User' component={User} />
            
          </div>
                
        );
    }
        
}


export default Home;