import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes.js';
import Layout from '../../../components/Layout.js';
import Campaign from '../../../ethereum/campaign.js';
import RequestRow from '../../../components/RequestRow.js';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const {address} = props.query;
        const campaign =  Campaign(address);
        const requestCount = await  campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests =await Promise.all(
            Array(parseInt(requestCount)).fill().map( (element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        return { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount};
    }

    renderRow() {
        return this.props.requests.map( (request, index) => {
            return <RequestRow 
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                approversCount={this.props.approversCount}
            />
        });
    }

    render() {
        // ES2015 destructoring
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}`}>
                    <a>back</a>
                </Link>
                <h3>Request List</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
                    </a>
                </Link>
                < Table>
                    <Header>
                        <Row>
                            <HeaderCell>Id</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount (eth)</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderRow()}</Body>
                </Table>
                <div>Found {this.props.requestCount} requests.</div>
            </Layout>        
        );
    }
}

export default RequestIndex;