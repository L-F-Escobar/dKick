import React, { Component } from 'react';
import Layout from "../../components/Layout.js";
import Campaign from "../../ethereum/campaign.js";
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3.js'
import ContributeForm from "../../components/ContributeForm.js";
import { Link } from '../../routes.js'

class CampaignShow extends Component {
    static async getInitialProps(props) {
        // The wildcard in the URL :address
        const campaign = Campaign(props.query.address);

        // returns and objcet not an array
        const summary = await campaign.methods.getSummary().call();
        // console.log(summary);

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],            
        };
    }

    renderCampaignInfo() {
        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                description: 'The manager created this campaign and can create requests to withdraw money.',
                meta: 'Address of Manager',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                description: 'You must contribute at least this much wei to become an approver.',
                meta: 'Minimum Contribution (wei)'
            },           
            {
                header: requestCount,
                description: 'A request tries to withdraw money from the contract. Request must be approved by approvers.',
                meta: 'Number of Requests'
            },
            {
                header: approversCount,
                description: 'Number of people who have donated to this campaign.',
                meta: 'Number of Approvers'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                description: 'The balance is how much money this campaign has left to spend.',
                meta: 'Campaign balance (ether)'
            }
        ];

        return <Card.Group items={items}/>;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>

                    <Grid.Row>
                        <Grid.Column width={11}>
                            {this.renderCampaignInfo()}                            
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                        
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            </Layout>            
        );
    }
}

export default CampaignShow;