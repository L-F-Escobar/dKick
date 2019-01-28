//ignores MaxListenersExceededWarning:
require('events').EventEmitter.defaultMaxListeners = 0;

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                .deploy({ data: compiledFactory.bytecode })
                .send({ from: accounts[0], gas: '1000000' });
    
    await factory.methods.createCampaign('100')
        .send({ from: accounts[0], gas: '1000000' });

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];

    // instructing web3 about the existence of a contract
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});


describe('Campaigns', () => {

    // it('deploys a factory and a campaign', () => {
    //     assert.ok(factory.options.address);
    //     assert.ok(campaign.options.address);
    // });

    // it('marks caller as the campaign manager', async () => {
    //     const manager = await campaign.methods.manager().call();
    //     // (What we hope it is, what it actually is)
    //     assert.equal(accounts[0], manager);
    // });

    // it('allows contributions & marks approvers', async () => {
    //     // const initBalance = await web3.eth.getBalance(accounts[1]);

    //     await campaign.methods.contribute().send({ 
    //         from: accounts[1], 
    //         value: web3.utils.toWei('2', 'ether')
    //     });

    //     // const finalBalance = await web3.eth.getBalance(accounts[1]);

    //     const isContributor = await campaign.methods.approvers(accounts[1]).call();
    //     // assert.ok(finalBalance > initBalance);
    //     assert(isContributor);
    // });

    // it('requires minimum contribution', async () => {
    //     // const initBalance = await web3.eth.getBalance(accounts[1]);
    //     try {
    //         await campaign.methods.contribute().send({ 
    //             from: accounts[1], 
    //             value: '50'
    //         });   
    //         assert(false);
    //     } catch (err) {
    //         assert(err);
    //     }
    // });

    // it('allows a manager to make a payment request', async () => {
    //     try {
    //         await campaign.methods
    //         .createRequest("mocha test", 100, accounts[1])
    //         .send({ 
    //             from: accounts[0], 
    //             gas: '1000000' 
    //         });  

    //         const request = await campaign.methods.requests(0).call();

    //         assert.equal("mocha test", request.description);
    //         assert.equal(accounts[1], request.recipient);

    //     } catch (err) {
    //         assert(!err);
    //     }
    // });

    it('processes requests', async () => {
  
        // Send ether to the address of the smart contract
        await campaign.methods.contribute().send({ 
            from: accounts[1], 
            value: web3.utils.toWei('10', 'ether')
        });  

        // send 5 ether from the smart contract to account[1]
        await campaign.methods
        .createRequest("mocha test", web3.utils.toWei('5','ether'), accounts[1])
        .send({ 
            from: accounts[0], 
            gas: '1000000' 
        });  

        await campaign.methods.approveRequest(0)
        .send({ from: accounts[1], gas: '1000000' }); 

        await campaign.methods.finalizeRequest(0).send({ 
            from: accounts[0],
            gas: '1000000'
        });  

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        // console.log(balance);
        assert(balance > 93)
    });


});