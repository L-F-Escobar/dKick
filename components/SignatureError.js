
// import React, { Component } from 'react';
// import { Dimmer, Header, Icon, Button } from 'semantic-ui-react';
// import { web3Errors } from '../ethereum/web3.js';
// import { Router } from '../routes.js';

// class SignatureError extends Component {

//     state = {
//         isActive: false,
//         web3Errors: web3Errors
//     };

//     static async getInitialProps(props) {
//         let web3Errors = props.query.web3Errors;
//         return { web3Errors: web3Errors };
//     }

//     handleClose = () => this.setState({ isActive: false })

//     handleOpen = () => this.setState({ isActive: true })

//     determineActive =  () => {
//         // return null;
//         console.log("\n\nin SigError props.query.web3Errors-->:", props.query.web3Errors);
//         console.log("in SigError web3Errors-->:", web3Errors);
//         console.log("in SigError this.props.web3Errors-->:", this.props.web3Errors);
//         return !web3Errors['signatureError'];
//     }

//     render() {
//         return (
//             <div>

//                 <Button content='Show' icon='plus' labelPosition='left' onClick={this.handleOpen} />

//                 {/* <Dimmer page active={this.state.isActive} onClickOutside={this.handleClose}> */}
//                 <Dimmer page active={web3Errors.signatureError} onClickOutside={this.handleClose}>
//                     <Header as='h2' icon inverted>
//                         <Icon name='heart' />
//                         {/* Dimmed Message! --> {this.state.web3Errors.missingMetaMask.toString()} */}
//                         Dimmed Message! --> 
//                         {web3Errors['signatureError'].toString()} 
//                         {web3Errors['missingMetaMask'].toString()}
//                         {web3Errors['msg']}
//                         <Header.Subheader>Dimmer sub-header</Header.Subheader>
//                     </Header>
//                 </Dimmer>
//             </div>
//         );
//     }
// }
// export default SignatureError;