import React, {Component} from 'react';
import factory from '../ethereum/factory.js';
import Campaign from '../ethereum/campaign.js';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const t0 = performance.now();

        const campaigns = await factory.methods.getDeployedCampaigns().call();
        const campaign_names = [];
        const campaign_descriptions = [];
        // const j = campaigns.length;

        let single_campaign;
        let name;
        let description;

        for( let i = 0; i < campaigns.length; i++) {
            single_campaign = await Campaign(campaigns[i]);
            name = await single_campaign.methods.campaignName().call();
            description = await single_campaign.methods.campaignDescription().call();

            campaign_names.push(name);
            campaign_descriptions.push(description);
            // console.log(`Name at index ${i} is ${name}`);
        }

        const t1 = performance.now();
        const timerResult = t1 - t0;
        console.log("\n\nCall to getInitialProps took " + (t1 - t0) + " milliseconds.");

        return { campaigns: campaigns, campaign_names: campaign_names, campaign_descriptions: campaign_descriptions, timerResult: timerResult };
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

        // console.log("\ncampaigns ___ 666:", this.props.campaigns);
        // console.log("\ncampaign_names ___ 666:", this.props.campaign_names);

        // pass a function into map() that exectures once per element in the array
        const items = this.props.campaigns.map( (address, index) => {

            // console.log("\n\nindex:", index);

            return {
                header: this.props.campaign_names[index],
                meta: address,
                description: 
                (
                    <div>
                        <p align="center" style={{ marginTop: 10, fontSize: 15 }}>{this.props.campaign_descriptions[index]}</p>
                        <Link route={`/campaigns/${address}`}>                    
                            <a>View Campaign</a>
                        </Link>  
                    </div> 
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
                <h2>Call to getInitialProps took {this.props.timerResult} milliseconds</h2>
            </Layout>
        );
    }
}

export default CampaignIndex;