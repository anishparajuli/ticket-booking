import React, {
    Component
} from 'react';

import { Card, Icon} from 'semantic-ui-react';
/* ................................ 
.........Main App class ...........
..................................*/
               
class UserDetails extends Component {
               
               
    render() {
        
        return (   <Card>
            <Card.Content header='About Amy' />
            <Card.Content>Amy is a good girl.</Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              No Friends
            </Card.Content>
          </Card>
                
        );
    }
        
}


export default UserDetails;