import React, {Component} from 'react';
import factory from '../ethereum/factory.js';
import Campaign from '../ethereum/campaign.js';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns: campaigns };
    }
    
   renderCampaigns() {
        // pass a function into map() that exectures once per element in the array
        const items = this.props.campaigns.map( (address) => {
            // let name;
            // (async() => {
            //     let single_campaign = await Campaign(address);
            //     name = await single_campaign.methods.campaignName().call();
            //     console.log("\n\nNAME:", name);
            // })();

            // let single_campaign = Campaign(address);
            // let name = single_campaign.methods.campaignName().call().then( (name) => {
            //     console.log('name in function: ', name)
            //     return name;
            // });
            // console.log("\n\nNAME:", name);

            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>                    
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return(
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button 
                                floated='right'
                                content="Create Campaign"
                                icon="add circle"
                                primary={true}
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;