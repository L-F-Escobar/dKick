'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3 = new Web3(window.web3.currentProvider);
// const web3 = new Web3(window.ethereum);
// window.ethereum.enable();

var web3 = void 0;

// Checking to see if code is on a server or a browser
// const Web3 = require('web3');
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    window.ethereum.enable();
    web3 = new _web2.default(window.web3.currentProvider);

    console.log('metamask enabled');
} else {
    // we are on the server or the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/746710de21c14a2aa6516d69dbd8246e');
    web3 = new _web2.default(provider);

    console.log('infura enabled!');
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7Ozs7O0FBRVA7QUFDQTtBQUNBOztBQUVBLElBQUksWUFBSjs7QUFFQTtBQVRBO0FBVUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFFckU7O1dBQUEsQUFBTyxTQUFQLEFBQWdCLEFBQ2hCO1dBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUU1Qjs7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBTkQsT0FNTyxBQUNIO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDYixBQUVKO1dBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFFaEI7O1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW5jaWVudGV2aWwvZEtpY2sifQ==