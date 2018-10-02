
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
import Dashboard from './Dashboard';

import Events from './Events';
import Shows from './Shows';

const API = "https://ticketbooking-12.appspot.com/";
const events = "events/"



class Admin extends Component {

constructor(props) {
    super(props)

    this.state = {
        renderTab: 'dashboard'
    }
  
}



changeTab(tabName) {
    this.setState({ renderTab: tabName })
}

render() {
    const { renderTab } = this.state
    const styles={
        sideicon:{
            float:'left',
            marginRight:20,
            marginLeft:-5
        },
        sidebaradmin:{
            position:'absolute',
            height:'100%',
            width:'100%',
        }
    }
               
               

    return(
        <Sidebar.Pushable  as={Segment} style={styles.sidebaradmin}> 
            <Sidebar as={Menu} visible vertical >
                <Menu.Item onClick={() => this.changeTab('dashboard')} as='a' name='home'>
                <Icon name='home' style={styles.sideicon} />

                    Dashboard
                </Menu.Item>
                <Menu.Item onClick={() => this.changeTab('events')} as='a' name='events'>
                <Icon name='home' style={styles.sideicon}/>
                    Events
                </Menu.Item>

                <Menu.Item onClick={() => this.changeTab('shows')} as='a' name='shows'>
                <Icon name='home' style={styles.sideicon}/>
                    Shows
                </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher style={{
                position:'absolute',
                width:'80%',
                left:20,
                top:20,
            }}> 
                <RenderedContent tabName={renderTab} />
            </Sidebar.Pusher> 
        </Sidebar.Pushable> 
    )
}
}

const RenderedContent = ({ tabName }) => {
if (tabName === 'dashboard') {
    return (<Dashboard />)
}
if (tabName === 'events') {
    return (<Events />)
}
if(tabName==='shows'){
    return (<Shows/>)
}
}



export default Admin;