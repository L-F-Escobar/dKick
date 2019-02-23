
import React, { Component } from 'react';
import { Dimmer, Header, Icon, Button } from 'semantic-ui-react';
import { web3Errors } from '../ethereum/web3.js';
import { Router } from '../routes.js';

class SignatureError extends Component {

    state = {
        isActive: false,
        web3Errors: web3Errors
    };

    // static async getInitialProps(props) {
    //     let web3Errors = props.query.web3Errors;
    //     console.log("\nin SigError -->:", props.query.web3Errors)
    //     return { web3Errors: web3Errors };
    // }

    handleClose = () => this.setState({ isActive: false })

    handleOpen = () => this.setState({ isActive: true })

    determineActive =  () => {

        return web3Errors.missingMetaMask;
    }

    render() {
        return (
            <div>

                <Button content='Show' icon='plus' labelPosition='left' onClick={this.handleOpen} />

                {/* <Dimmer page active={this.state.isActive} onClickOutside={this.handleClose}> */}
                <Dimmer page active={this.determineActive()} onClickOutside={this.handleClose}>
                    <Header as='h2' icon inverted>
                        <Icon name='heart' />
                        {/* Dimmed Message! --> {this.state.web3Errors.missingMetaMask.toString()} */}
                        Dimmed Message! --> {(this.determineActive() === false).toString()}
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