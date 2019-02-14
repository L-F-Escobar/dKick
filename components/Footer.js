import React from 'react';
import { Menu, Image, Segment, List, Container } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
       <Segment inverted vertical style={{ margin: '20em 0em 0em', padding: '5em 0em' }}>

            <Container textAlign="center">
                <Image avatar centered size='small' src='../static/dPen.png' alt=" "/>
                <div style={{ marginTop: '10px' }}>
                    <List horizontal inverted divided  size='small'>
                        <List.Item>
                            <Link route="/">
                                <a>About Us</a>
                            </Link>
                        </List.Item>

                        <List.Item>
                            <Link route="/">
                                <a>Contact Us</a>
                            </Link>
                        </List.Item>
                        

                        <List.Item>
                            <Link route="/">
                                <a>Team</a>
                            </Link>
                        </List.Item>
                        
                    </List>
                </div>
            </Container>        

       </Segment>
    );  
};