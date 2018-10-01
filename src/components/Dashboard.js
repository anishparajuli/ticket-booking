import React, {Component} from 'react';
import '../App.css';
import {
    Button,
    Header,
    Image,
    Modal,
    Form,
    Dropdown,
    Sidebar,
    Menu,
    Icon,
    Segment
} from 'semantic-ui-react';
import axios from 'axios';
// import EventDetails from './EventDetails';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';


const API="https://ticketbooking-12.appspot.com/";
const events="events/"


class Dashboard extends Component{


    render(){
        return(
            <div>
                This is dashboard
            </div>
        );
    }

}

export default Dashboard;