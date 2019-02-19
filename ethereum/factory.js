import { web3, errors as web3Errors } from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import CampaignFactoryAddress from './build/CampaignFactoryAddress.json'

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);
console.log('web3Errors:', web3Errors);


// if(web3) {
//     console.log("web3_666:", web3);
// } else {
//     console.log(`INFURIA IN FACTORY`);
// }

console.log("web3.currentProvider:", web3.currentProvider);

const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);

// const instance = async function() {
//     await new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);
// };


export default instance;