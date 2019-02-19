'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.web3 = exports.errors = undefined;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seed = require('../secrets/seed.json');

var web3 = void 0;

var errors = {
    signatureError: false,
    missingMetaMask: false

    // Checking to see if code is on a server or a browser
};if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    exports.web3 = web3 = new _web2.default(window.web3.currentProvider || window['ethereum']);

    window.ethereum.enable().then(function (accounts) {
        console.log("accounts", accounts);
    }).catch(function (reason) {
        console.log("User rejected provider access:", reason);
        errors.signatureError = true;
    });

    console.log('metamask enabled:', window.ethereum.isMetaMask);
    console.log('selected address::', window.ethereum.selectedAddress);
    // console.log('selected address::', web3.eth.getAccounts);
} else {

    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/' + seed["rinkebyProjectId"]);
    exports.web3 = web3 = new _web2.default(provider);

    console.log('infura enabled!');
    console.log('rinkebyProjectId[""]): ' + seed["rinkebyProjectId"]);
    errors.missingMetaMask = true;
}

// export default web3;
exports.errors = errors;
exports.web3 = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInNlZWQiLCJyZXF1aXJlIiwid2ViMyIsImVycm9ycyIsInNpZ25hdHVyZUVycm9yIiwibWlzc2luZ01ldGFNYXNrIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiZXRoZXJldW0iLCJlbmFibGUiLCJ0aGVuIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJyZWFzb24iLCJpc01ldGFNYXNrIiwic2VsZWN0ZWRBZGRyZXNzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFDUCxJQUFNLE9BQU8sUUFBYixBQUFhLEFBQVE7O0FBRXJCLElBQUksWUFBSjs7QUFFQSxJQUFJO29CQUFTLEFBQ08sQUFDaEI7cUJBQWlCLEFBR3JCOztBQUxBLEFBQWE7QUFBQSxBQUNULE1BS0EsT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBRXJFOzswQkFBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUFQLEFBQVksbUJBQW1CLE9BQS9DLEFBQU8sQUFBd0MsQUFBTyxBQUV0RDs7V0FBQSxBQUFPLFNBQVAsQUFBZ0IsU0FBaEIsQUFDQyxLQUFNLFVBQUEsQUFBVSxVQUFVLEFBQ3ZCO2dCQUFBLEFBQVEsSUFBUixBQUFZLFlBQVosQUFBd0IsQUFDM0I7QUFIRCxPQUFBLEFBSUMsTUFBTSxVQUFBLEFBQVUsUUFBUSxBQUNyQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxrQ0FBWixBQUE4QyxBQUM5QztlQUFBLEFBQU8saUJBQVAsQUFBd0IsQUFDM0I7QUFQRCxBQVNBOztZQUFBLEFBQVEsSUFBUixBQUFZLHFCQUFxQixPQUFBLEFBQU8sU0FBeEMsQUFBaUQsQUFDakQ7WUFBQSxBQUFRLElBQVIsQUFBWSxzQkFBc0IsT0FBQSxBQUFPLFNBQXpDLEFBQWtELEFBQ2xEO0FBQ0g7QUFoQkQsQ0FBQSxNQWlCTSxBQUVGOztRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQiwrQ0FDQSxLQURwQyxBQUFpQixBQUNtQixBQUFLLEFBRXpDOzBCQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBRWhCOztZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7WUFBQSxBQUFRLGdDQUE4QixLQUF0QyxBQUFzQyxBQUFLLEFBQzNDO1dBQUEsQUFBTyxrQkFBUCxBQUF5QixBQUM1Qjs7O0FBRUQsQUFDQTtRQUFBLEFBQ0k7UUFESixBQUVJIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW5jaWVudGV2aWwvZEtpY2sifQ==