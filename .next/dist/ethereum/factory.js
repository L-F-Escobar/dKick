'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.web3Errors = exports.factoryInstance = undefined;

var _web = require('./web3');

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

var _CampaignFactoryAddress = require('./build/CampaignFactoryAddress.json');

var _CampaignFactoryAddress2 = _interopRequireDefault(_CampaignFactoryAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);
console.log('factory - web3Errors:', _web.web3Errors);

// if(web3) {
//     console.log("web3_666:", web3);
// } else {
//     console.log(`INFURIA IN FACTORY`);
// }

var factoryInstance = new _web.web3.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), _CampaignFactoryAddress2.default['address']);

// export default instance;
exports.factoryInstance = factoryInstance;
exports.web3Errors = _web.web3Errors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIndlYjNFcnJvcnMiLCJDYW1wYWlnbkZhY3RvcnkiLCJDYW1wYWlnbkZhY3RvcnlBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImZhY3RvcnlJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBQWUsQUFBZixBQUFpQyxBQUFqQzs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBbUMsQUFBbkM7Ozs7OztBQUVBO0FBQ0EsUUFBUSxBQUFSLElBQVksQUFBWixBQUFxQyxBQUFyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU0sa0JBQWtCLElBQUksVUFBSyxBQUFMLElBQVMsQUFBYixTQUF1QixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFBdkIsWUFBOEQsaUNBQXVCLEFBQXZCLEFBQTlELEFBQXhCOztBQUVBLEFBQ0E7UUFDSSxBQURKO1FBRUksQUFGSiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FuY2llbnRldmlsL2RLaWNrIn0=