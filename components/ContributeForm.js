import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react'
import Campaign from '../ethereum/campaign.js'
import { web3 } from '../ethereum/web3.js';
import { Router } from '../routes.js';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false,
        hidden: false
    };

    handleDismiss = () => {
        this.setState({ hidden: false });

        setTimeout( () => {
            this.setState({ errorMessage: "", hidden: true })
        }, 90);
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send(
                    { 
                      from: accounts[0], 
                      value: web3.utils.toWei(this.state.value, 'ether')
                    });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            if (this.state.value === "") {
                this.setState({ errorMessage: "Enter any amount of ether to contribute" });
            } else {
                this.setState({ errorMessage: err.message });
            }
        }

        this.setState({ loading: false, value: '' });

    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field error={!!this.state.errorMessage}>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                        label="ether"
                        labelPosition="right"
                    >
                    </Input>
                </Form.Field>    
                <Message error header="Opps" content={this.state.errorMessage} onDismiss={this.handleDismiss}></Message>
                <Button hidden={this.state.hidden} primary={true} loading={this.state.loading}>Contribute!</Button>           
            </Form>
        );
    }
}




export default ContributeForm;