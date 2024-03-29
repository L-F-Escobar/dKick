import React, {Component} from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign.js';
import { web3 } from '../../../ethereum/web3.js';
import { Link, Router } from '../../../routes.js';
import Layout from '../../../components/Layout.js';

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false
    };
    
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address: address };
    }

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        const campaign = Campaign(this.props.address);
        try{
            const accounts = await web3.eth.getAccounts();

            await campaign.methods.createRequest(
                this.state.description, 
                web3.utils.toWei(this.state.value, 'ether'), 
                this.state.recipient)
            .send({
                from: accounts[0]
            });
            
            // Router.pushRoute(`/campaigns/${this.props.address}/requests`);
            Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    };

    render() {
        return(
            <Layout>
                <div>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                            value={this.state.recipient}
                            onChange={event => this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field>
                    <Message error header="Opps" content={this.state.errorMessage}></Message>
                    <Button primary loading={this.state.loading}>Create!</Button>

                </Form>
                </div>
            </Layout>
        );
    }
}


export default RequestNew;