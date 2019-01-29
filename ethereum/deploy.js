
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const campaignFactory = require('./build/CampaignFactory.json');
const fs = require('fs-extra');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');

//@dev Using Infuria node and Chrome metamask rinkeby wallet.
const provider = new HDWalletProvider(
    'crane soap simple disorder glue normal cute faint height catch farm glue',
    'https://rinkeby.infura.io/v3/746710de21c14a2aa6516d69dbd8246e'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('\nDeploying from account:', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
        .deploy({ data: '0x' + campaignFactory.bytecode})
        .send({ from: accounts[0], gas: '5000000' });
    
    makeAddressFile(result);

    console.log('Interface:', campaignFactory.interface);
    console.log('\nContract deployed to:', result.options.address);
    // console.log('Retreived accounts:', accounts);
    // console.log('\nbytecode: ', bytecode);
};

async function makeAddressFile(result) {
    try {
        const file = (buildPath + '/CampaignFactoryAddress.json')

        fs.outputJsonSync(
            path.resolve(file),
            {"address": result.options.address}
        );
    } catch (err) {
        console.error(err)
    }
}

deploy();