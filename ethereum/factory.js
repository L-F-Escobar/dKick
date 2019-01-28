import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract( JSON.parse(CampaignFactory.interface),
                    '0x61B2E7f555b0cf612CD2c154d8b4b9739fdFAbE0'
);


export default instance;