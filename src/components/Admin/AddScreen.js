import React, {
    Component,createRef   
} from 'react';
import axios from 'axios';
import { Button, Grid, Divider,Input, Label, Form, FormField} from 'semantic-ui-react';
import config from 'react-global-configuration';
import Categories from './Categories';
/* ................................ 
............Billing class ............
..................................*/

class Billing extends Component{
    
    render(){
        return(
            <Grid columns={3}>
                <Grid.Column textAlign='center'>
                  Seats selected: {this.props.number_of_seats}
                </Grid.Column>
                
                <Grid.Column textAlign='center'>
                  <Button negative disabled={!this.props.number_of_seats} onClick={()=>this.props.onClick()}>CANCEL</Button>
                </Grid.Column>
                </Grid>
              
            );
    }
}

/* ................................ ..............
............Submit class .....................
......Submit user's choice of seats to server.......
................................................*/

class Submit extends Component{

    constructor(props){
        super(props);
        this.sendDetails=this.sendDetails.bind(this);
    }

    render(){
        return(
            <Grid.Row centered  >
            <Button positive onClick={()=>this.sendDetails("buyseat")} disabled={!this.props.value.length}>Buy</Button>
            <Button color="yellow" onClick={()=>this.sendDetails("bookseat")} disabled={!this.props.value.length}>Book</Button>
            </Grid.Row>
        );
    }
    
    sendDetails(purchaseType){
        
        console.log(this.props.url);


            axios.post(config.get('base_url')+this.props.url+'/'+purchaseType,{"seat_no":this.props.value},{headers: {'USER_TOKEN': localStorage.getItem('USER_TOKEN')}}) //5630121163620352
            .then(function (response) {
              // handle success
              console.log(response.status);
              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
    }
}


/* ................................ 
............Seat class ............
..................................*/

class Seat extends Component{
    

    
    render(){
        return(
            <Button icon inverted color= {(this.props.status==2)?"green":"grey"} disabled={this.props.status==3} onClick={()=>this.props.onClick()} />  
        );
    }
}

/* ................................ 
.........Screen layout class ...........
..................................*/


class AddScreen extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        max_rows:null,
    max_columns:null,
    seats:{},
    categories:[],
    categoryMap:{},
    selected:[]
    
    };

    this.handleSeatClicks=this.handleSeatClicks.bind(this);
    this.onCancelClick=this.onCancelClick.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

    /*this function is used for creating the 
    screen grid and seats
    */
   
    createTable = (row,column) => {
        let table = []
  
    // Outer loop to create parent
    for (let i = 0; i < row; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < column; j++) {
          
         
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
              children.push(<td><Seat status={this.state.seats[(i+1).toString()+"-"+(j+1).toString()]} onClick={()=> this.handleSeatClicks((i+1).toString()+"-"+(j+1).toString())} />
                            </td>);
          
          
      }
      table.push(<tr>{children}</tr>);
    }
    return table
    }
                      
                          
    handleSeatClicks(key){
                
                let newState = Object.assign({}, this.state);
                newState.seats[key]=2;
                this.setState(newState);
                

                this.setState({selected:[...this.state.selected,key]});
                
            }

    onCancelClick(){
        
        for(var key of this.state.selected){
            let newState = Object.assign({}, this.state);
                newState.seats[key]=0;
                this.setState(newState);
        }
        
        this.setState({selected:[]});
    }          
    
    handleSubmit = newCategory => {
        
        this.setState({categories:[...this.state.categories,newCategory]});
      }
    
    assignCategory = selectedCategory =>{
            
            for(let category of this.state.categories){
                if(category.name==selectedCategory){
                    let newState = Object.assign({}, this.state);
                newState.categoryMap[category.name]=this.state.selected;
                this.setState(newState);    
                }
            }

            for(let key of this.state.selected){
                let newState = Object.assign({}, this.state);
                newState.seats[key]=3;
                this.setState(newState);
                
            }
            this.setState({selected:[]});
        
    }

    handleChange=(e,{name,value})=>{
        
        this.setState({[name]:value});
    }
                          
    render() {
          
              
        
        var name,location;
        const max_rows=this.state.max_rows;
        const max_columns=this.state.max_columns;

        return (
            <Grid celled verticalAlign='middle' columns={2}>
            <Grid.Column width={4}>
            <Form>
            <FormField>
            <Label >Screen name</Label>
            <Input placeholder='Screen name' name='name' value={name} onChange={this.handleChange} />
            </FormField>
            <FormField>
            <Label >Location</Label>
            <Input placeholder='Location' name='location' value={location} onChange={this.handleChange} />
            </FormField>
            <FormField>
            <Label >Dimensions</Label>
            
            <Input placeholder="rows" fluid name='max_rows' value={max_rows} onChange={this.handleChange} />
            <Input placeholder="columns" fluid name='max_columns' value={max_columns} onChange={this.handleChange} />
            </FormField>
            </Form>
            <Divider/>
            <Billing number_of_seats={this.state.selected.length} onClick={()=>this.onCancelClick()}/>
            
            <Divider/>
            <Categories categories={this.state.categories} handleSubmit={this.handleSubmit}
            assignCategory={this.assignCategory}/>
            <Divider/>
            <Button positive onClick={()=>this.submitScreen()}>Submit</Button>
            </Grid.Column>
            <Grid.Column width={4}>
            <table className="screen">
                <tbody>
             {this.createTable(max_rows,max_columns)}
                </tbody>
            </table>
            </Grid.Column>
            
            
            </Grid>
        );
      }

      submitScreen=()=>{
          var payload={
              name:this.state.name,
              location:this.state.location,
              max_rows:parseInt(this.state.max_rows),
              max_columns:parseInt(this.state.max_columns),
                    };
        let categories = this.state.categories.slice(0);
        console.log(categories);
        for(let i in this.state.categories){
        
            categories[i].seats=this.state.categoryMap[categories[i].name];
        }
        payload.categories=categories;
        console.log(payload);
      
        axios.post(config.get('base_url')+"/screens/add",payload,{headers: {'USER_TOKEN': localStorage.getItem('USER_TOKEN')}}) //5630121163620352
            .then(function (response) {
              // handle success
              console.log(response.status);
                if(response.status==200){
                    console.log(response.data);
                }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });

    }

      
    
}

               
export default AddScreen;