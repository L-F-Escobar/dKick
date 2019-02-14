import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3.js';
import Campaign from '../ethereum/campaign.js';

class RequestRow extends Component {
    state ={
        loadingApprove: false,
        loadingFinalize: false,
        errorMessage: "",
        finalizeError: false,
        approveError: false
    };

    onApprove = async () => {
        this.setState({ loadingApprove: true, errorMessage: '', approveError: false });

        try {
            const campaign = Campaign(this.props.address);

            const accounts = await web3.eth.getAccounts();
            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({ errorMessage: err.message, approveError: true });
        }

        this.setState({ loadingApprove: false });
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    onFinalize = async () => {
        this.setState({ loadingFinalize: true, errorMessage: '', finalizeError: false });

        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.finalizeRequest(this.props.id).send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({ errorMessage: err.message, finalizeError: true});
        }
        this.setState({ loadingFinalize: false });
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props;
        const readyToFinalize = request.approvalCount > approversCount/2;

        return(
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount} | {(request.approvalCount/approversCount).toFixed(2)}%</Cell>
                <Cell error={this.state.approveError}>
                    {request.complete ? null : (
                        <Button loading={this.state.loadingApprove} color="green" basic onClick={this.onApprove}>Approver</Button>
                    )}
                </Cell>
                <Cell error={this.state.finalizeError}>
                    {request.complete ? null : (
                        <Button loading={this.state.loadingFinalize} color="teal" basic onClick={this.onFinalize}>Finalize</Button>
                    )}
                </Cell>
            </Row>
        );
    }
}




export default RequestRow;