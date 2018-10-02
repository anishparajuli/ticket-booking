import React,{Component} from 'react'
import { Menu, Divider, Input, Button, Form, Grid, GridColumn} from 'semantic-ui-react'

class Categories extends Component{
    
    constructor(props){
        super(props);
        this.state={
            name:''
        };
    }

    handleChange=(e,{name,value})=>{
        
        this.setState({name:value});
    }


    render(){
        var newCategory;
        return(
            <Menu text vertical>
        <Menu.Item header>Categories:</Menu.Item>
        <Divider/>
      {this.props.categories.map((category) =>
        <Menu.Item onClick={()=>this.props.assignCategory(category.name)}>
        {category.name}
        </Menu.Item>
      )}
        <Divider/>
        <Form>
        <Form.Group>
          <Form.Input placeholder='Add category' name='name' value={newCategory} onChange={this.handleChange} />
          <Form.Button icon='add' size='small' onClick={()=>this.props.handleSubmit(this.state)}/>
        </Form.Group>
      </Form>
        
      </Menu>
          );
    }
} 
  
  export default Categories;