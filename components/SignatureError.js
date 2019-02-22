
import React, { Component } from 'react';
import { Dimmer, Header, Icon, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3.js';
import { Router } from '../routes.js';

class SignatureError extends Component {

    state = {
        isActive: false
    };

    handleClose = () => this.setState({ isActive: false })
    handleOpen = () => this.setState({ isActive: true })

    render() {
        return (
            <div>
                <Button content='Show' icon='plus' labelPosition='left' onClick={this.handleOpen} />

                <Dimmer page active={this.state.isActive} onClickOutside={this.handleClose}>
                    <Header as='h2' icon inverted>
                        <Icon name='heart' />
                        Dimmed Message!
                        <Header.Subheader>Dimmer sub-header</Header.Subheader>
                    </Header>
                </Dimmer>
            </div>
        );
    }
}
export default SignatureError;


// export default (props) => {
//     return(
//         <div>
//             <Dimmer page active={props.missingMetaMask}>
//                 <Header as='h2' icon inverted>
//                     <Icon name='heart' />
//                     Dimmed Message!
//                     <Header.Subheader>Dimmer sub-header</Header.Subheader>
//                 </Header>
//             </Dimmer>
//         </div>
//     );  
// };