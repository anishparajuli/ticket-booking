import React, {
    Component
} from 'react';
import '../App.css';
import App from './App';
import Featured from './Featured';
import axios from 'axios';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'              
/* ................................ 
.........Main App class ...........
..................................*/
               
class Main extends Component {
               
    constructor(props) {
    super(props);
    this.state = {
 
    };
  }
               
    render() {
        
        return ( <div>   
                <Featured />
                
          </div>
                
        );
    }
        
}


export default Main;