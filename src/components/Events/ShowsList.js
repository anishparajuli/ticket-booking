import React, {
    Component
} from 'react';
import axios from 'axios';

import { Card,Loader, Image, Grid,Button} from 'semantic-ui-react';
import config from 'react-global-configuration';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'              
/* ................................ 
.........Main App class ...........
..................................*/
               
class ShowsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        shows:[]
    };
  }       
    showCard = details =>{
    return(
      
      <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>{details.client_name}</Card.Header>
              <Card.Meta>
                <span >{details.datetime}</span>
              </Card.Meta>
              <Card.Meta>
                <span ><Link to={`/events/${this.props.match.params.event_id}/shows/${details.show_id}`}><Button>Buy tickets</Button></Link></span>
              </Card.Meta>
              
            </Card.Content>
          </Card>
    );
    }
               
    render() {
        if(this.state.shows.length==0){
          return(<Loader active inline='centered' />);
        }
        return ( <div>
              <Grid columns={5}>
              {this.state.shows.map((show) =>
        <li>{this.showCard(show)}</li>

      )}
                </Grid>
          </div>
                
        );
    }

    componentDidMount() {
        var context=this;
          axios.get(config.get('base_url')+'/events/'+context.props.match.params.event_id+'/shows') //5630121163620352
    .then(function (response) {
      // handle success
      console.log(response.status);
      context.setState({shows:response.data});
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
      }
        
}


export default ShowsList;