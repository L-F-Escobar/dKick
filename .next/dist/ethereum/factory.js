'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

var _CampaignFactoryAddress = require('./build/CampaignFactoryAddress.json');

var _CampaignFactoryAddress2 = _interopRequireDefault(_CampaignFactoryAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('CampaignFactoryAddress:', CampaignFactoryAddress['address']);

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), _CampaignFactoryAddress2.default['address']);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsIkNhbXBhaWduRmFjdG9yeUFkZHJlc3MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBbUMsQUFBbkM7Ozs7OztBQUVBOztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBdUIsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBQXZCLFlBQThELGlDQUF1QixBQUF2QixBQUE5RCxBQUFqQixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW5jaWVudGV2aWwvZEtpY2sifQ==