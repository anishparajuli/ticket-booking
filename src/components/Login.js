import React, {
    Component
} from 'react';
import { Link,Redirect} from 'react-router-dom'; 
import { Form,Button, Grid, Segment, Divider} from 'semantic-ui-react';
import axios from 'axios';
/* ................................ 
.........Main App class ...........
..................................*/
               
class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        
        this.login=this.login.bind(this);
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    render() {
        const { username, password } = this.state;
        return ( 
        <Grid  centered >
        <Grid.Column width={5} >
        <Segment inverted >
        <Form inverted onSubmit={this.login}>
            <Form.Input label='Username' placeholder='Username' name="username" value={username} onChange={this.handleChange}/>
            <Form.Input label='Password' placeholder='Password' name="password" value={password} onChange={this.handleChange}/>
            
            <Button type='submit'>Login</Button>
            <Divider/>
            <Segment inverted textAlign='center'>
            Don't have an accout? <br/> <Link to='/User/Register'> Click here to register</Link>
            </Segment>
          </Form>
          </Segment>
          </Grid.Column>
          </Grid>  
        );
    }

    login(){
        
        axios({method:'post',url:'http://ticketbooking-12.appspot.com/user/login',data:this.state,
        config: { headers: {'Content-Type': 'application/json' }}})
          .then(function (response) {
            console.log(response);
            if(response.status==200){
                localStorage.setItem('USER_TOKEN', response.data.token);
                return(<Redirect to='/' />);
            }
            console.log(localStorage.getItem('USER_TOKEN'));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
        
}


export default Login;