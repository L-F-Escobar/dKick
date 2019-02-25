import Web3 from 'web3';
const seed = require('../secrets/seed.json');

let web3;
let web3Errors = {
    signatureError: false,
    missingMetaMask: false
}

// const getWeb3 = () => {
//     if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//         const web3 = new Web3(window.web3.currentProvider || window['ethereum']);
//         // window.ethereum.enable()
//         // .then( function (accounts) {
//         //     console.log("MetaMask Signature Enabled");
//         //     web3Errors.signatureError = true;
//         // })
//         // .catch(function (reason) {
//         //     console.log("MetaMask Signature Disabled", reason);
//         //     web3Errors.signatureError = true;
//         // });
//         console.log('metamask enabled:', window.ethereum.isMetaMask);
//         console.log('selected address::', window.ethereum.selectedAddress);
//         // console.log('selected address::', web3.eth.getAccounts);
//         return web3;
//     } 
//     else {
//         const provider = new Web3.providers.HttpProvider(
//             `https://rinkeby.infura.io/v3/${seed["rinkebyProjectId"]}` 
//         );
//         const web3 = new Web3(provider);
//         console.log('infura enabled!');
//         console.log(`rinkebyProjectId[""]): ${seed["rinkebyProjectId"]}`);
//         web3Errors.missingMetaMask = true;
//         web3Errors.signatureError = true;
//         return web3;
//     }
// };

// web3 = getWeb3();
// console.log('web3.js web3Errors:', web3Errors);
// console.log('web3.js web3:', web3);
// console.log('metamask enabled:', window.ethereum.isMetaMask);
// console.log('selected address::', window.ethereum.selectedAddress);

//Checking to see if code is on a server or a browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider || window['ethereum']);
    window.ethereum.enable()
    .then( function (accounts) {
        console.log("MetaMask Signature Enabled");
        web3Errors.signatureError = true;
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
    web3Errors.signatureError = true;
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
        console.log("async function getConnection() Error:", err.error);
        web3Errors.signatureError = true;
    }
}

