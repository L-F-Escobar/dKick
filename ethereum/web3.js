// const Web3 = require('web3');
import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
// const web3 = new Web3(window.ethereum);
// window.ethereum.enable();

let web3;

// Checking to see if code is on a server or a browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    window.ethereum.enable();
    web3 = new Web3(window.web3.currentProvider);

    console.log('metamask enabled');
} else {
    // we are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/746710de21c14a2aa6516d69dbd8246e'
    );
    web3 = new Web3(provider);

    console.log('infura enabled!');
}

export default web3;