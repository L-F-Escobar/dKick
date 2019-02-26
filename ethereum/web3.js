import Web3 from 'web3';
const seed = require('../secrets/seed.json');

const isClient = () => {
    return typeof window !== 'undefined';
};

let web3;
let web3Errors = {
    signatureError: false,
    missingMetaMask: true,
    msg: ""
}

//Checking to see if code is on a server or a browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    web3 = new Web3(window.web3.currentProvider || window['ethereum']);
    web3Errors.missingMetaMask = false;
    web3Errors.msg = "";

    window.ethereum.enable()
    .then( function (accounts) {
        console.log("MetaMask Signature Enabled");
        web3Errors.signatureError = false;
    })
    .catch(function (err) {
        console.log("MetaMask Signature Disabled", err);
        web3Errors.signatureError = true;
        web3Errors.msg = err;
    });

    console.log('metamask enabled:', window.ethereum.isMetaMask);
    console.log('selected address::', window.ethereum.selectedAddress);
} 
else {
    const provider = new Web3.providers.HttpProvider(
        `https://rinkeby.infura.io/v3/${seed["rinkebyProjectId"]}` 
    );
    web3 = new Web3(provider);
    web3Errors.missingMetaMask = true;
    web3Errors.signatureError = false;
    web3Errors.msg = "Missing metamask";

    console.log('infura enabled!');
    console.log(`rinkebyProjectId[""]): ${seed["rinkebyProjectId"]}`);
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
        web3Errors.msg = "";
    } catch (err) {
        console.log("async function getConnection() Error:", err);
        web3Errors.signatureError = true;
        web3Errors.msg = err;
    }
}