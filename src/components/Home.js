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
import AddScreen from './Admin/AddScreen';
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
            
            <Header loggedIn={this.state.loggedIn} />
                <Switch>
                <Route exact path='/' component={Main}/>
                <Route path= '/events/:event_id/shows' component={EventDetail} />
                <Route path='/login' component={Login} loggedIn={this.state.loggedIn} />
                <Route path='/admin' component={Admin} />
                <Route path='/register/user' component={UserRegister} />
                <Route path='/profile/' component={User} />
                <Route path='/screens/add' component={AddScreen}/>
                <Redirect to='/'/>
                </Switch>
          </div>
                
        );
    }

    componentDidMount(){
        this.loginCheck();        
        
}
    loginCheck(){
        console.log("got upto here");
        if(localStorage.getItem('USER_TOKEN')){
            this.setState({loggedIn:true});
        }
        else
            this.setState({loggedIn:false});
    }
    }


export default Home;