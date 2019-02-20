import { web3, web3Errors } from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import CampaignFactoryAddress from './build/CampaignFactoryAddress.json'

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);
console.log('factory - web3Errors:', web3Errors);

// if(web3) {
//     console.log("web3_666:", web3);
// } else {
//     console.log(`INFURIA IN FACTORY`);
// }

const factoryInstance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);

// export default instance;
export {
    factoryInstance,
    web3Errors
};