import React, {Component} from 'react';
import '../App.css';
import {
    Button,
    Header,
    Image,
    Modal,
    Form,
    Dropdown
} from 'semantic-ui-react';
import axios from 'axios';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const API="https://ticketbooking-12.appspot.com/";
const getevent="events/";

//main class for showing event details
class EventDetail extends Component{
    render() {
        
        return (
            <div>
                <h1>This is event details</h1>
            </div>
                
                
        );
    }


}

export default EventDetail;
