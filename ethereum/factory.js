import { web3, web3Errors } from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import CampaignFactoryAddress from './build/CampaignFactoryAddress.json'

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);
console.log('factory - web3Errors:', web3Errors);
console.log('factory - web3:', web3);

const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);

// export default instance;
export {
    instance,
    web3Errors
};