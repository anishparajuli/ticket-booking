import React, {
    Component
} from 'react';
import '../App.css';
import Main from './Frontpage/Main';
import Admin from './Admin';
import Login from './Login';
import User from './User/User';
import UserRegister from './User/UserRegister';
import Header from './Header';
import Dashboard from './Dashboard';
import axios from 'axios';
import EventDetail from './Events/EventDetail';
import {Route, Link,Switch, Redirect} from 'react-router-dom'              
/* ................................ 
.........Main App class ...........
..................................*/
               
class Home extends Component {
               
    constructor(props) {
    super(props);
    this.state = {
        loggedIn:false
    };
  }
               
    render() {
        
        return ( <div>

            <Header />
                <Switch>
                <Route exact path='/' component={Main}/>
                <Route path= '/events/:event_id/shows' component={EventDetail} />
                <Route path='/login' component={Login}/>
                <Route path='/admin' component={Admin} />
                <Route path='/register/user' component={UserRegister} />
                <Route path='/user/:user_id' component={User} />
                <Redirect to='/'/>
                </Switch>
          </div>
                
        );
    }
        
}


export default Home;