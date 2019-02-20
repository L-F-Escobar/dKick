'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory.js');

var _campaign = require('../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ancientevil/dKick/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            web3Errors: _factory.web3Errors
        }, _this.renderCampaigns = function () {
            // const items = new Array();
            // console.log('this.props.campaigns.length:', this.props.campaigns.length);

            // let name;
            // (async() => {
            //     let single_campaign = await Campaign(address);
            //     name = await single_campaign.methods.campaignName().call();
            //     console.log("\n\nNAME INSUDE:", name);
            // })();
            // console.log("\n\nNAME OUTSIDE:", name);

            // let single_campaign = Campaign(address);
            // let name = single_campaign.methods.campaignName().call().then( (name) => {
            //     console.log('name in function: ', name)
            //     return name;
            // });
            // console.log("\n\nNAME:", name);

            // console.log("\ncampaigns ___ 666:", this.props.campaigns);
            // console.log("\ncampaign_names ___ 666:", this.props.campaign_names);

            // pass a function into map() that exectures once per element in the array
            var items = _this.props.campaigns.map(function (address, index) {

                // console.log("\n\nindex:", index);

                return {
                    header: _this.props.campaign_names[index],
                    meta: address,
                    description: _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    }, _react2.default.createElement('p', { align: 'center', style: { marginTop: 10, fontSize: 15 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    }, _this.props.campaign_descriptions[index]), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    }, 'View Campaign'))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, (0, _extends3.default)({}, this.state.web3Errors, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns, campaign_names, campaign_descriptions, single_campaign, name, description, i;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory.factoryInstance.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                campaign_names = [];
                                campaign_descriptions = [];
                                // const j = campaigns.length;

                                single_campaign = void 0;
                                name = void 0;
                                description = void 0;
                                i = 0;

                            case 9:
                                if (!(i < campaigns.length)) {
                                    _context.next = 24;
                                    break;
                                }

                                _context.next = 12;
                                return (0, _campaign2.default)(campaigns[i]);

                            case 12:
                                single_campaign = _context.sent;
                                _context.next = 15;
                                return single_campaign.methods.campaignName().call();

                            case 15:
                                name = _context.sent;
                                _context.next = 18;
                                return single_campaign.methods.campaignDescription().call();

                            case 18:
                                description = _context.sent;

                                campaign_names.push(name);
                                campaign_descriptions.push(description);
                            // console.log(`Name at index ${i} is ${name}`);

                            case 21:
                                i++;
                                _context.next = 9;
                                break;

                            case 24:

                                console.log("PAGES/LANDING web3Errors:", _factory.web3Errors);

                                return _context.abrupt('return', { campaigns: campaigns, campaign_names: campaign_names, campaign_descriptions: campaign_descriptions });

                            case 26:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeUluc3RhbmNlIiwid2ViM0Vycm9ycyIsIkNhbXBhaWduIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbkluZGV4Iiwic3RhdGUiLCJyZW5kZXJDYW1wYWlnbnMiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiYWRkcmVzcyIsImluZGV4IiwiaGVhZGVyIiwiY2FtcGFpZ25fbmFtZXMiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImNhbXBhaWduX2Rlc2NyaXB0aW9ucyIsImZsdWlkIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsInNpbmdsZV9jYW1wYWlnbiIsIm5hbWUiLCJpIiwibGVuZ3RoIiwiY2FtcGFpZ25OYW1lIiwiY2FtcGFpZ25EZXNjcmlwdGlvbiIsInB1c2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBaUIsQUFBa0I7O0FBQzVDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7Ozs7OzhOLEFBQ0Y7QSxBQUFRLEFBQ1M7QUFEVCxBQUNKLGlCLEFBNkJKLGtCQUFrQixZQUFNLEFBQ3BCO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtnQkFBTSxjQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSyxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFFeEQ7O0FBRUE7Ozs0QkFDWSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBRGhCLEFBQ0ssQUFBMEIsQUFDbEM7MEJBRkcsQUFFRyxBQUNOO2lEQUVJLGNBQUE7O3NDQUFBO3dDQUFBLEFBQ0k7QUFESjtBQUFBLHFCQUFBLGtCQUNJLGNBQUEsT0FBRyxPQUFILEFBQVMsVUFBUyxPQUFPLEVBQUUsV0FBRixBQUFhLElBQUksVUFBMUMsQUFBeUIsQUFBMkI7c0NBQXBEO3dDQUFBLEFBQTJEO0FBQTNEOzZCQUEyRCxBQUFLLE1BQUwsQUFBVyxzQkFEMUUsQUFDSSxBQUEyRCxBQUFpQyxBQUM1Rix5QkFBQSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUNJO0FBREo7dUNBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQVJULEFBS0MsQUFFSSxBQUNJLEFBSVo7MkJBWkosQUFBTyxBQVlJLEFBRWQ7QUFkVSxBQUNIO0FBTFIsQUFBYyxBQW9CZCxhQXBCYzs7aURBb0JQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7QTs7Ozs7aUNBR0YsQUFDTDttQ0FDSSxBQUFDLDJEQUFXLEtBQUEsQUFBSyxNQUFqQixBQUF1Qjs7OEJBQXZCO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGNBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFHSTtBQUhKO0FBQUEsK0JBR0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBQ1ksQUFDUjt5QkFGSixBQUVZLEFBQ1I7c0JBSEosQUFHUyxBQUNMO3lCQUpKLEFBSWE7OzhCQUpiO2dDQU5aLEFBSUksQUFDSSxBQUNJLEFBUVA7QUFSTztBQUNJLHVCQVR4QixBQUNJLEFBQ0ksQUFjSyxBQUFLLEFBS3JCOzs7Ozs7Ozs7Ozs7dUNBNUYyQix5QkFBQSxBQUFnQixRQUFoQixBQUF3Qix1QixBQUF4QixBQUErQzs7aUNBQWpFO0EscURBQ0E7QSxpRCxBQUFpQixBQUNqQjtBLHdEQUNOLEEsQUFEOEI7QUFHMUI7O0EsdURBQ0E7QSw0Q0FDQTtBLG1EQUVLO0Esb0MsQUFBSTs7O3NDQUFHLElBQUksVSxBQUFVOzs7Ozs7dUNBQ0Ysd0JBQVMsVSxBQUFULEFBQVMsQUFBVTs7aUNBQTNDO0E7O3VDQUNhLGdCQUFBLEFBQWdCLFFBQWhCLEFBQXdCLGUsQUFBeEIsQUFBdUM7O2lDQUFwRDtBOzt1Q0FDb0IsZ0JBQUEsQUFBZ0IsUUFBaEIsQUFBd0Isc0IsQUFBeEIsQUFBOEM7O2lDQUFsRTtBLHVEQUVBOzsrQ0FBQSxBQUFlLEtBQWYsQUFBb0IsQUFDcEI7c0RBQUEsQUFBc0IsS0FBdEIsQUFBMkIsQUFDM0I7OztpQ0FQa0M7QTs7OztpQ0FVdEM7O3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQTZCOztpRUFFbEMsRUFBRSxXQUFGLEFBQWEsV0FBVyxnQkFBeEIsQUFBd0MsZ0JBQWdCLHVCLEFBQXhELEFBQStFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEU5RixBLEFBdEc0Qjs7a0JBc0c1QixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FuY2llbnRldmlsL2RLaWNrIn0=