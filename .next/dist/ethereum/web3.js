'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.web3 = exports.web3Errors = undefined;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seed = require('../secrets/seed.json');

var web3 = void 0;

var web3Errors = {
    signatureError: false,
    missingMetaMask: false

    // Checking to see if code is on a server or a browser
};if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    exports.web3 = web3 = new _web2.default(window.web3.currentProvider || window['ethereum']);

    window.ethereum.enable().then(function (accounts) {
        console.log("MetaMask Signature Enabled");
    }).catch(function (reason) {
        console.log("MetaMask Signature Disabled", reason);
        web3Errors.signatureError = true;
    });

    console.log('metamask enabled:', window.ethereum.isMetaMask);
    console.log('selected address::', window.ethereum.selectedAddress);
    // console.log('selected address::', web3.eth.getAccounts);
} else {

    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/' + seed["rinkebyProjectId"]);
    exports.web3 = web3 = new _web2.default(provider);

    console.log('infura enabled!');
    console.log('rinkebyProjectId[""]): ' + seed["rinkebyProjectId"]);
    web3Errors.missingMetaMask = true;
}

// export default web3;
exports.web3Errors = web3Errors;
exports.web3 = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInNlZWQiLCJyZXF1aXJlIiwid2ViMyIsIndlYjNFcnJvcnMiLCJzaWduYXR1cmVFcnJvciIsIm1pc3NpbmdNZXRhTWFzayIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsImV0aGVyZXVtIiwiZW5hYmxlIiwidGhlbiIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwicmVhc29uIiwiaXNNZXRhTWFzayIsInNlbGVjdGVkQWRkcmVzcyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBQ1AsSUFBTSxPQUFPLFFBQWIsQUFBYSxBQUFROztBQUVyQixJQUFJLFlBQUo7O0FBRUEsSUFBSTtvQkFBYSxBQUNHLEFBQ2hCO3FCQUFpQixBQUdyQjs7QUFMQSxBQUFpQjtBQUFBLEFBQ2IsTUFLQSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFFckU7OzBCQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQVAsQUFBWSxtQkFBbUIsT0FBL0MsQUFBTyxBQUF3QyxBQUFPLEFBRXREOztXQUFBLEFBQU8sU0FBUCxBQUFnQixTQUFoQixBQUNDLEtBQU0sVUFBQSxBQUFVLFVBQVUsQUFDdkI7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUhELE9BQUEsQUFJQyxNQUFNLFVBQUEsQUFBVSxRQUFRLEFBQ3JCO2dCQUFBLEFBQVEsSUFBUixBQUFZLCtCQUFaLEFBQTJDLEFBQzNDO21CQUFBLEFBQVcsaUJBQVgsQUFBNEIsQUFDL0I7QUFQRCxBQVNBOztZQUFBLEFBQVEsSUFBUixBQUFZLHFCQUFxQixPQUFBLEFBQU8sU0FBeEMsQUFBaUQsQUFDakQ7WUFBQSxBQUFRLElBQVIsQUFBWSxzQkFBc0IsT0FBQSxBQUFPLFNBQXpDLEFBQWtELEFBQ2xEO0FBQ0g7QUFoQkQsQ0FBQSxNQWlCTSxBQUVGOztRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQiwrQ0FDQSxLQURwQyxBQUFpQixBQUNtQixBQUFLLEFBRXpDOzBCQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBRWhCOztZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7WUFBQSxBQUFRLGdDQUE4QixLQUF0QyxBQUFzQyxBQUFLLEFBQzNDO2VBQUEsQUFBVyxrQkFBWCxBQUE2QixBQUNoQzs7O0FBRUQsQUFDQTtRQUFBLEFBQ0k7UUFESixBQUVJIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW5jaWVudGV2aWwvZEtpY2sifQ==