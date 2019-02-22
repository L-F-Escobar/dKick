import Web3 from 'web3';
const seed = require('../secrets/seed.json');

let web3;

let web3Errors = {
    signatureError: false,
    missingMetaMask: false
}

// Checking to see if code is on a server or a browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    web3 = new Web3(window.web3.currentProvider || window['ethereum']);

    window.ethereum.enable()
    .then( function (accounts) {
        console.log("MetaMask Signature Enabled");
    })
    .catch(function (reason) {
        console.log("MetaMask Signature Disabled", reason);
        web3Errors.signatureError = true;
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
    web3Errors.missingMetaMask = true;
}

// export default web3;
export {
    web3Errors,
    web3
}

export async function getConnection() {
    try {
        await window.ethereum.enable();
        web3Errors.signatureError = false;
    } catch (err) {
        console.log("Errror:", err.error)
    }
}

