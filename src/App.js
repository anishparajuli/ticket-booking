import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Grid, Header, Popup } from 'semantic-ui-react';


/* ................................ 
............Billing class ............
..................................*/

class Billing extends Component{
    
    render(){
        return(
            <Grid.Row centered columns={3}>
                <Grid.Column textAlign='center'>
                  No. of Seats: {this.props.number_of_seats}
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  Total Price: {this.props.total_amount}
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button negative disabled={!this.props.number_of_seats} onClick={()=>this.props.onClick()}>CANCEL</Button>
                </Grid.Column>
                </Grid.Row>
              
            );
    }
}

/* ................................ ..............
............Submit class .....................
......Submit user's choice of seats to server.......
................................................*/

class Submit extends Component{
    render(){
        return(
            <Grid.Row centered  >
            <Button positive onClick={this.sendDetails()} disabled={!this.props.value.length}>Buy</Button>
            <Button color="yellow" onClick={this.sendDetails()} disabled={!this.props.value.length}>Book</Button>
            </Grid.Row>
        );
    }
    
    sendDetails(){
        
    }
}


/* ................................ 
............Seat class ............
..................................*/

class Seat extends Component{
    

    
    render(){
        return(
            
            <Popup trigger={
            <Button icon inverted  disabled={this.props.data.status!=4} 
            onClick={()=>this.props.onClick()}
            color={( this.props.data.status==0)?"green":"grey"}
            ></Button>
            } content={"Price: Rs. "+this.props.data.price} />
            
        );
    }
}


/* ................................ 
.........Screen layout class ...........
..................................*/


class ScreenLayout extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        loaded: false,
        data: null,
        
        selected: [],
        total_price: 0
    };
   
  }
    
    /*this function is used for creating the 
    screen grid and seats
    */
    
    createTable = (row,column,screen_seats) => {
        let table = []

    // Outer loop to create parent
    for (let i = 0; i < row; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < column; j++) {
          
          var data="";
          
          /*
          var length=screen_seats.length;
          for(let k=0;k<screen_seats.length;k++){
              console.log(screen_seats[k].column);
              if((screen_seats[k].row==(j+1)) && (screen_seats[k].column==(i+1))){
                  visibility="visible";
                  data=screen_seats[k];
                  
              }
          }
          */
          var key=(i+1).toString()+"-"+(j+1).toString();
          
          if(screen_seats[key]){
              
              
              data=screen_seats[key];
              
              children.push(<td><Seat data={data} onClick={()=> this.handleSeatClicks((i+1).toString()+"-"+(j+1).toString())} />
                            </td>);
          }
          
          else{
                console.log("no seat");
            children.push(<td><Button icon className="invisible" />
            </td>);
            }
      }
      table.push(<tr>{children}</tr>);
    }
    return table
    }
                      
                          
    handleSeatClicks(key){
                
                let newState = Object.assign({}, this.state.data);
                newState.screen_seats[key].status=0;
                this.setState(newState);
                
                this.setState({selected:[...this.state.selected,key]});
                
                this.setState({total_price:this.state.total_price+this.state.data.screen_seats[key].price});
                
                console.log(this.state.selected.length);
                console.log(this.state.total_price);
            }

    onCancelClick(){
        
        for(var key of this.state.selected){
            let newState = Object.assign({}, this.state.data);
                newState.screen_seats[key].status=4;
                this.setState(newState);
        }
        
        this.setState({selected:[]});
                
        this.setState({total_price:0});
    }          
              
                          
    render() {
          if(!this.state.loaded){
            return(<Button loading primary></Button>);
          }
          
          else{
              
        var max_row_col=this.state.data.screen_max_row_col;
        var screen_seats=this.state.data.screen_seats;

        return (
            <Grid>  
                <Billing total_amount={this.state.total_price} number_of_seats={this.state.selected.length} onClick={()=>this.onCancelClick()}/>
                <Submit value={this.state.selected}/>
            <Grid.Row centered>
            <table className="screen">
                <tbody>
             {this.createTable(max_row_col[0],max_row_col[1],screen_seats)}
                </tbody>
            </table>
                
                </Grid.Row>
                </Grid>
        );
      }
    }
        
    componentDidMount() {
      var context=this;
        axios.get('https://ticketbooking-12.appspot.com/events/1/shows/5702167830724608') //5630121163620352
  .then(function (response) {
    // handle success
    context.setState({loaded:true, data:response.data});
    

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
    }

  componentWillUnmount() {

  }
}

               
/* ................................ 
.........Main App class ...........
..................................*/
               
class App extends Component {
               
    constructor(props) {
    super(props);
    this.state = {
 
    };
  }
               
    render() {
        
        return ( <div className = "App" >
                <Header as="h1">Show Booking</Header>
                <ScreenLayout/>
                </div>
                
                
        );
    }
        
}


export default App;