import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {Button, Modal, Form, Label, Grid,Image, LabelDetail} from 'semantic-ui-react';
import ApiHandler from './ApiHandler';
/*  ................................
.........Main App class ...........
.......
 * ...........................
 */
const APIURL = "http://192.168.0.105:8080";
const clientevents = "/listevents";
const clientscreen="/listscreens";
const screencategory="/categories"; //{screen_id}/categories;
const ctoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjExNTM4MTIxNjgwf' +
        'Q.hSa8tiEWRqpOChnS0HODzKnIsiKbz2cvwuwFCOkzcds';

// const myApi=new ApiHandler();
var context;
class Events extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            eventData: [],
            neweventform: false,
            eventId: null,
            eventname:null,
            eventdescription:null,
            eventduration:null,
          
            uploadedimage: null,
            
        }
        this.handleFormChange=this.handleFormChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    toggleNewEventForm = () => {
        this.setState({
            neweventform: !this.state.neweventform,
            
            uploadedimage: null,
            categoryDate: []
        })
    }

    handleUploadImage = (event) => {
        this.setState({
            uploadedimage: URL.createObjectURL(event.target.files[0])
        })

    }

    handleFormChange(event){
        this.setState({
            [event.target.name]:event.target.value,
        });
        console.log(event.target.value);
    }

    handleSubmit(event){
        event.preventDefault();
        //console.log(this.state.eventname+''+this.state.eventdescription);
        var context=this;
        axios({
            method: 'post',
            url: APIURL+'/events/add',
            data:{
                
                'name':this.state.eventname,
                'description':this.state.eventdescription,
                'duration':this.state.eventduration ,
            },
            headers: {
                'USER_TOKEN': ctoken,
            },
            //withCredentials:true,
            

        })
        // .get('http://workonclick.com/api/alllabors')
        // .get(APIURL+clientevents,{headers: {'USER_TOKEN': ctoken} })
            .then(function (response) {
                console.log(response.data);
                context.setState({
                    neweventform:false,
                });
                // handle success
               // context.setState({eventData: response.data, isLoading: false})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }

    render() {
        const {isLoading, eventData, neweventform} = this.state;
        return (
            <div>

                <Button primary="primary" onClick={this.toggleNewEventForm}>Add New Event</Button>

                <h1 align='center'>Event List</h1>
                {
                    !isLoading
                        ? (
                            <div>
                                
                                {/* {eventData} */}


                                 {this.state.eventData.map(event => {
                                        const {id,name,description,duration} = event;
                                        return (
                                            <div key={id}>
                                                <p>Name: {name}</p>
                                                <p>Description: {description}</p>
                                                <p>Duration:{duration}
                                                </p>
                                                
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                        : (<Grid columns={12} >
                            
                            <Grid.Column width={3} align="center">
                              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                              {/* <label>Event Name</label> */}
                              
                              <label>Event Name</label><br></br>
                              <label style={{
                                  fontSize:'1em',
                                  color:'black',
                                  opacity:0.4
                              }}>Lorem Ipsum</label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={3}>
                              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column >
                            
                            
                          </Grid>)
                }

                <Modal dimmer='blurring' open={neweventform} onClose={this.toggleNewEventForm}>
                    <Modal.Header>Add New Event</Modal.Header>
                    <Modal.Content >
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <div
                                    style={{
                                        width: '50%'
                                    }}>
                                    <Form.Field>
                                        <label>Event Name</label>
                                        <input name="eventname" placeholder='Event Name' onChange={this.handleFormChange}/>
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Event Description</label>
                                        <input name="eventdescription" placeholder='Event Description' onChange={this.handleFormChange}/>
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Event Duration</label>
                                        <input type='number' name="eventduration" placeholder="Duration in minutes" onChange={this.handleFormChange}></input>
                                    </Form.Field>
                                </div>
                                <div >
                                    <Form.Field >
                                        <Label as="label" basic="basic" htmlFor="upload">
                                            <Button
                                                icon="upload"
                                                label={{
                                                    basic: true,
                                                    content: 'Select file(s)'
                                                }}
                                                labelPosition="right"/>
                                            <input
                                                hidden="hidden"
                                                id="upload"
                                                multiple="multiple"
                                                type="file"
                                                accept="image/jpeg,image/png"
                                                onChange={this.handleUploadImage}/>

                                        </Label>
                                    </Form.Field>
                                    <img height="200px" width="200px" src={this.state.uploadedimage}/>
                                </div>
                            </Form.Group>
                        </Form>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={this.toggleNewEventForm}>
                            Cancel
                        </Button>
                        <Button
                            positive="positive"
                            icon='checkmark'
                            labelPosition='right'
                            content="Submit"
                            onClick={this.handleSubmit}/>
                    </Modal.Actions>
                </Modal>

                {/* {error ? <p>{error.message}</p> : null} */}
                {/*
      {!isLoading ? (
        eventsdata.map(event => {
          const { username, name, email } = user;
          return (
            <div key={username}>
              <p>Name: {name}</p>
              <p>Email Address: {email}</p>
              <hr />
            </div>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )} */
                }

            </div>

        );
    }

    // fetchEvents() {}
    // fetchScreen(){

    // }
    // fetchCategory(cid){
        
    // }

    componentDidMount() {
        var context=this;
        // Make a request for a user with a given ID
        axios({
            method: 'get',
            url: APIURL+'/client/listevents',
            headers: {
                'USER_TOKEN': ctoken,
            },
            //withCredentials:true,
            

        })
        // .get('http://workonclick.com/api/alllabors')
        // .get(APIURL+clientevents,{headers: {'USER_TOKEN': ctoken} })
            .then(function (response) {
                console.log(response.data);

                // handle success
                context.setState({eventData: response.data, isLoading: false})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

            // fetch('http://workonclick.com/api/alllabors') .then(response =>
            // response.json()) .then(data => this.setState({eventData: data, isLoading:
            // false})) .catch(error => console.log(error))
        }

}

export default Events;