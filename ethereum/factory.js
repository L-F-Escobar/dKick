import { web3, web3Errors, getConnection } from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import CampaignFactoryAddress from './build/CampaignFactoryAddress.json'

// getConnection();
// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);
console.log('factory - web3Errors:', web3Errors);
// console.log('factory - web3:', web3);

// if(web3Errors.missingMetaMask === true && web3Errors.signatureError === true) {
//     const instance = "null";
// } else {
//     const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);
// }
const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address'] || null);

// export default instance;
export {
    instance,
    web3Errors
};