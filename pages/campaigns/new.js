import React, {Component} from 'react';
import Layout from '../../components/Layout.js'
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import factory from '../../ethereum/factory.js'; 
import web3 from '../../ethereum/web3.js';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: "",
        errorMessage: "",
        hidden: true,
        loading: false,
        name: "",
        description: ""
    };

    handleDIsmiss = () => {
        this.setState({ hidden: false });

        setTimeout( () => {
            this.setState({ errorMessage: "", hidden: true })
        }, 90);
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ errorMessage: "", loading: true });
        // console.log('\n\nminimumContribution is:', this.state.minimumContribution, '\n\n');
        // console.log(typeof this.state.minimumContribution);

        if (this.state.minimumContribution !== '0' && this.state.minimumContribution !== '') {

            try {
                const accounts = await web3.eth.getAccounts();
                await factory.methods.createCampaign(this.state.minimumContribution, this.state.name, this.state.description)
                        .send({ from: accounts[0] });
                Router.pushRoute('/');
            } catch (err) { 
                this.setState({ errorMessage: err.message, hidden: false });
            }

        } else {
            this.setState({ errorMessage: 'Invalid minimum contribution', hidden: false });
        }

        this.setState({ loading: false });
    };

    render() {
        return(
            <Layout>

                <h3>Create a Campaign!</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

                    <Form.Field>
                        <label>Name</label>
                        <Input 
                            value={this.state.name}
                            onChange={ (event) => {
                                this.setState({ name: event.target.value });
                            }}>
                        </Input>
                    </Form.Field>

                    <Form.Field error={!!this.state.errorMessage}>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right" 
                            value={this.state.minimumContribution}
                            onChange={ (event) => {
                                this.setState({ minimumContribution: event.target.value });
                            }}>
                        </Input>
                    </Form.Field>

                    <Form.TextArea
                        autoHeight
                        rows={3}
                        label="Description"
                        placeholder="Tell us more about your campaign"
                        value={this.state.description}
                        onChange={ (event) => {
                            this.setState({ description: event.target.value });
                        }}
                    />

                    <Message error hidden={this.state.hidden} header="Opps!" content={this.state.errorMessage} onDismiss={this.handleDIsmiss}></Message>
                    <Button loading={this.state.loading} primary={true}>Create!</Button>
                </Form>

            </Layout>
        );
    }
}

export default CampaignNew;