import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import CampaignFactoryAddress from './build/CampaignFactoryAddress.json'

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);

const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);

export default instance;