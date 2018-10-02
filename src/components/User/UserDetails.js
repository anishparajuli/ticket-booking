import React, {
    Component
} from 'react';
import config from 'react-global-configuration';
import axios from 'axios';

import { Card, Icon,Grid,Loader,Header} from 'semantic-ui-react';
/* ................................ 
.........Main App class ...........
..................................*/
               
class UserDetails extends Component {
               
  constructor (props){
    super(props);
    this.state={
      loaded:false,
    }

  }
               
    render() {
        if(!this.state.loaded){
          return(<Loader active inline='centered' />);
        }

        return (
            <Grid columns={2}>
            <Grid.Column >
            <Card fluid>
            <Card.Content><Header>{this.state.details.first_name} {this.state.details.last_name}</Header></Card.Content>
            <Card.Content>Description: {this.state.details.description}</Card.Content>
            <Card.Content><Icon name='envelope' />{this.state.details.email}</Card.Content>
            
            <Card.Content extra>
              <Icon name='phone' />
              {this.state.details.contact}
            </Card.Content>
          </Card>
          </Grid.Column>
          
          </Grid>
        );
    }
        
    componentDidMount() {
      var context=this;
      axios.get(config.get('base_url')+this.props.match.url,{headers: {'USER_TOKEN': localStorage.getItem('USER_TOKEN')}}) //5630121163620352
      .then(function (response) {
        // handle success
        console.log(response.status);
          if(response.status==200){
              context.setState({details:response.data,loaded:true});
              console.log(response.data);
          }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    }
}


export default UserDetails;