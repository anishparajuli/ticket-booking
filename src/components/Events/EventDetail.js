import React, {
    Component
} from 'react';
import {Route} from 'react-router-dom'
import ShowsList from './ShowsList';
import App from './App';
/* ................................ 
.........Main App class ...........
..................................*/
               
class EventDetail extends Component {
               
    render() {
      
        return ( <div>
            <Route exact path={this.props.match.path} component={ShowsList}/>
            <Route path={this.props.match.url+"/:show_id/"} component={App}/>
          </div>
                
        );
    }
        
}


export default EventDetail;