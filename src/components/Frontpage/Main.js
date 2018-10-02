import React, {
    Component
} from 'react';

import Featured from './Featured';
import EventList from './EventsList';
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
                   
                
                <EventList/>
                
                 
          </div>
                
        );
    }
        
}


export default Main;