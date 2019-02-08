import React, {Component} from 'react';
import factory from '../ethereum/factory.js';
import Campaign from '../ethereum/campaign.js';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes';
import campaign from '../ethereum/campaign.js';

class CampaignIndex extends Component {
    state = {
        name: "TESTING FROM STATE",
        description: []
    };

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        const campaign_names = [];

        campaigns.forEach( async function(address) {
            let single_campaign = await Campaign(address);
            let name = await single_campaign.methods.campaignName().call();

            console.log("\nFOR EACH address", address)
            console.log("\nFOR EACH name", name)
            campaign_names.push(name);
        });

        // campaigns.map( (address) => {
        //     let single_campaign = Campaign(address);
        //     // let name = await single_campaign.methods.campaignName().call();
        //     let name = single_campaign.methods.campaignName().call().then( (campName) => {
        //         console.log('campName in function: ', campName)
        //     });
        //     campaign_names.push(name);
        //     console.log("\nNAME:", name);
        //     console.log("\ncampaign_names:", campaign_names);
        // });
       

        return { campaigns: campaigns, campaign_names: campaign_names };
    }

//    renderCampaigns() {
//         // pass a function into map() that exectures once per element in the array
//         const items = this.props.campaigns.map( (address) => {
//             return {
//                 header: address,
//                 description: (
//                     <Link route={`/campaigns/${address}`}>
//                         <a>View Campaign</a>
//                     </Link>                    
//                 ),
//                 fluid: true
//             };
//         });
//         return <Card.Group items={items} />;
//     }

    renderCampaigns = () => {
        // const items = new Array();
        // console.log('this.props.campaigns.length:', this.props.campaigns.length);

        // let name;
        // (async() => {
        //     let single_campaign = await Campaign(address);
        //     name = await single_campaign.methods.campaignName().call();
        //     console.log("\n\nNAME INSUDE:", name);
        // })();
        // console.log("\n\nNAME OUTSIDE:", name);

        // let single_campaign = Campaign(address);
        // let name = single_campaign.methods.campaignName().call().then( (name) => {
        //     console.log('name in function: ', name)
        //     return name;
        // });
        // console.log("\n\nNAME:", name);

        // pass a function into map() that exectures once per element in the array
        console.log("\ncampaigns ___ 666:", this.props.campaigns);
        console.log("\ncampaign_names ___ 666:", this.props.campaign_names);

        const items = this.props.campaigns.map( (address) => {

            // let single_campaign = Campaign(address);
            // let name = single_campaign.methods.campaignName().call().then( (name) => {
            //     console.log('name in function: ', name)
            //     // return name;
            // });
            // console.log("\n\nNAME:", name);

            return {
                // header: this.props.campaign_names[0],
                meta: address,
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