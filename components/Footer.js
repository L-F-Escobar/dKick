import React from 'react';
import { Menu, Image, Segment, List, Container } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
       <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>

            <Container textAlign="center">
                <Image avatar centered size='small' src={'../static/DencentralizedPenguin.png'} />
                <div >
                    <List horizontal inverted divided link size='small'>
                        <Link route="/">
                            <a>About Us</a>
                        </Link>
                        {/* <List.Item as='a'>
                            About Us
                        </List.Item> */}
                    </List>
                </div>
            </Container>        
       </Segment>
    );  
};