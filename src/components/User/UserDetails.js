import React, {
    Component
} from 'react';

import { Card, Icon,Grid} from 'semantic-ui-react';
/* ................................ 
.........Main App class ...........
..................................*/
               
class UserDetails extends Component {
               
               
    render() {
        
        return (
            <Grid columns={2}>
            <Grid.Column >
            <Card fluid>
            <Card.Content header='About Amy' />
            <Card.Content>Amy is a good girl.</Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              No Friends
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
            <Card.Content header='About Amy' />
            <Card.Content>Amy is a good girl.</Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              No Friends
            </Card.Content>
          </Card>
          </Grid.Column>
          </Grid>
        );
    }
        
}


export default UserDetails;