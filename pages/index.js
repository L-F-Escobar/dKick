import React, {Component} from 'react';
import { instance, web3Errors } from '../ethereum/factory.js';
import Campaign from '../ethereum/campaign.js';
import { Card, Button, Popup, Image, Dimmer, Header, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes';
import { getConnection, getMetamask } from "../ethereum/web3.js";
import SignatureError from '../components/SignatureError.js';


class CampaignIndex extends Component {
    state = {
        web3Errors : {},
        loading: false,
        outsideClickView : false
    };

    static async getInitialProps() {

        if (instance !== "null")
        {
            const campaigns = await instance.methods.getDeployedCampaigns().call();
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
    
            console.log("\n\nPAGES/LANDING web3Errors:", web3Errors);
    
            return { campaigns: campaigns, campaign_names: campaign_names, campaign_descriptions: campaign_descriptions, web3Errors:web3Errors };
        } else {
            console.log("\n\nPAGES/LANDING else");
            return {};
        }
    }

    renderCampaigns = () => {

        console.log("\n\nrenderCampaigns web3Errors:", web3Errors);
        console.log("renderCampaigns this.props.web3Errors:", this.props.web3Errors);
        console.log("renderCampaigns this.state.web3Errors:", this.state.web3Errors);


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


    handleOutside = () => {
        let boolHolder = this.state.outsideClickView;
        this.setState({ outsideClickView: !boolHolder });
    };

    render() {
        return(
            <Layout>
            {/* <Layout {...this.state.web3Errors}> */}
                
                {/* <Dimmer page active={this.state.web3Errors.signatureError} onClickOutside={this.handleOutside}>                    
                    <Header as='h2' icon inverted>
                        <Icon name='heart' />
                        Dimmed Message! --> {this.state.web3Errors.missingMetaMask.toString()}
                        Metamask required. --> {(this.state.web3Errors.signatureError === true).toString()}
                        <Header.Subheader>Without a metamask connection, website may not function as expected.</Header.Subheader>
                    </Header>
                    <Button onClick={getConnection} fluid negative content="Metamask connection" >
                        <Image avatar src="../static/metamask.png"></Image>
                        Request Metamask connection
                    </Button>
                </Dimmer> */}

                <div>
                {/* <div style={{ visibility: web3Errors.missingMetaMask ? 'visible': 'hidden'}}>test {web3Errors.missingMetaMask.toString()} */}
                    {!web3Errors.missingMetaMask ? null : (
                        <div>
                            <h3 align="center">Metamask required! Website may not function as intended.</h3>
                            <Popup
                                // on="click"
                                // open={"false"}
                                // hidden={!this.state.web3Errors.missingMetaMask}
                                header="Metamask"
                                size="small" 
                                content="Metamask is required to access the Ethereum network." 
                                trigger={
                                    <div>
                                        <Link >
                                            <a href={"https://metamask.io/"} target="_blank">
                                                <Button fluid negative content="Get metamask">
                                                    <Image avatar src="../static/metamask.png"></Image>
                                                    Get Metamask extension
                                                </Button>
                                            </a>
                                        </Link>
                                    </div>
                                } 
                            >
                            </Popup>
                        </div>
                    )}
                </div>

                <div>
                    {!web3Errors.signatureError ? null : (
                        <div>
                            <h3 align="center">Metamask connection required!</h3>
                            <Popup
                                header="Metamask Connection"
                                size="small" 
                                content="Metamask connection needed. " 
                                isOpen="false"
                                trigger={
                                    <div>
                                        <Button onClick={getConnection} fluid negative content="Metamask connection" >
                                            <Image avatar src="../static/metamask.png"></Image>
                                            Request Metamask connection
                                        </Button>
                                    </div>
                                } 
                            >
                            </Popup>
                        </div>
                    )} 
                </div>
                <div style={{ marginTop: '50px' }}></div>

                <div>
                    {/* <h2>Web3 missingMetaMask --> {this.state.web3Errors.missingMetaMask.toString()}</h2>
                    <h2>Web3 signatureError --> {this.state.web3Errors.signatureError.toString()}</h2> */}
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