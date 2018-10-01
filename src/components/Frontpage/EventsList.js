import React, {
    Component
} from 'react';
import axios from 'axios';
import { Card,Loader, Image, Grid} from 'semantic-ui-react';
import config from 'react-global-configuration';
import { Link} from 'react-router-dom'              
/* ................................ 
.........Main App class ...........
..................................*/
               
class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        events:[]
    };
  }       
    eventCard = details =>{
    return(
      <Link to={`/events/${details.event_id}/shows`}>
      
    <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>{details.name}</Card.Header>
      <Card.Meta>
        <span >{details.client_name}</span>
      </Card.Meta>
      <Card.Description>{details.description}</Card.Description>
    </Card.Content>
  </Card>
  </Link>
    );
    }
               
    render() {
        if(this.state.events.length==0){
          return(<Loader active inline='centered' />);
        }
        return ( <div>
              <Grid columns={5}>
              {this.state.events.map((event) =>
        <li>{this.eventCard(event)}</li>

      )}
                </Grid>
          </div>
                
        );
    }

    componentDidMount() {
      var context=this;
        axios.get(config.get('base_url')+'/events') //5630121163620352
  .then(function (response) {
    // handle success
    context.setState({events:response.data});
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
    }
        
}


export default EventList;