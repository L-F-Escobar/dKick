import Web3 from 'web3';
const seed = require('../secrets/seed.json');

let web3;

let errors = {
    signatureError: false,
    missingMetaMask: false
}

// Checking to see if code is on a server or a browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    web3 = new Web3(window.web3.currentProvider || window['ethereum']);

    window.ethereum.enable()
    .then( function (accounts) {
        console.log("accounts", accounts);
    })
    .catch(function (reason) {
        console.log("User rejected provider access:", reason);
        errors.signatureError = true;
    });

    console.log('metamask enabled:', window.ethereum.isMetaMask);
    console.log('selected address::', window.ethereum.selectedAddress);
    // console.log('selected address::', web3.eth.getAccounts);
}
 else {
    
    const provider = new Web3.providers.HttpProvider(
        `https://rinkeby.infura.io/v3/${seed["rinkebyProjectId"]}` 
    );
    web3 = new Web3(provider);

    console.log('infura enabled!');
    console.log(`rinkebyProjectId[""]): ${seed["rinkebyProjectId"]}`);
    errors.missingMetaMask = true;
}

// export default web3;
export {
    errors,
    web3
};