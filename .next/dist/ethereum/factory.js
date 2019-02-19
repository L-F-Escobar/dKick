'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

var _CampaignFactoryAddress = require('./build/CampaignFactoryAddress.json');

var _CampaignFactoryAddress2 = _interopRequireDefault(_CampaignFactoryAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);
console.log('web3Errors:', _web.errors);

// if(web3) {
//     console.log("web3_666:", web3);
// } else {
//     console.log(`INFURIA IN FACTORY`);
// }

console.log("web3.currentProvider:", _web.web3.currentProvider);

var instance = new _web.web3.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), _CampaignFactoryAddress2.default['address']);

// const instance = async function() {
//     await new web3.eth.Contract( JSON.parse(CampaignFactory.interface), CampaignFactoryAddress['address']);
// };


exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsImVycm9ycyIsIndlYjNFcnJvcnMiLCJDYW1wYWlnbkZhY3RvcnkiLCJDYW1wYWlnbkZhY3RvcnlBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRQcm92aWRlciIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUFlLEFBQVUsQUFBekIsQUFBMkMsQUFBM0M7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW1DLEFBQW5DOzs7Ozs7QUFFQTtBQUNBLFFBQVEsQUFBUixJQUFZLEFBQVosQUFBMkIsQUFBM0I7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEFBQVIsSUFBWSxBQUFaLHlCQUFxQyxVQUFLLEFBQTFDOztBQUVBLElBQU0sV0FBVyxJQUFJLFVBQUssQUFBTCxJQUFTLEFBQWIsU0FBdUIsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBQXZCLFlBQThELGlDQUF1QixBQUF2QixBQUE5RCxBQUFqQjs7QUFFQTtBQUNBO0FBQ0EsQUFHQTs7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbmNpZW50ZXZpbC9kS2ljayJ9