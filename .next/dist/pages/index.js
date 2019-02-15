'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory2 = _interopRequireDefault(_factory);

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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderCampaigns = function () {
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
                            lineNumber: 81
                        }
                    }, _react2.default.createElement('p', { align: 'center', style: { marginTop: 10, fontSize: 15 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    }, _this.props.campaign_descriptions[index]), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    }, 'View Campaign'))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns, campaign_names, campaign_descriptions, j, single_campaign, name, description, i;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                campaign_names = [];
                                campaign_descriptions = [];
                                j = campaigns.length;
                                single_campaign = void 0;
                                name = void 0;
                                description = void 0;
                                i = 0;

                            case 10:
                                if (!(i < j)) {
                                    _context.next = 25;
                                    break;
                                }

                                _context.next = 13;
                                return (0, _campaign2.default)(campaigns[i]);

                            case 13:
                                single_campaign = _context.sent;
                                _context.next = 16;
                                return single_campaign.methods.campaignName().call();

                            case 16:
                                name = _context.sent;
                                _context.next = 19;
                                return single_campaign.methods.campaignDescription().call();

                            case 19:
                                description = _context.sent;

                                campaign_names.push(name);
                                campaign_descriptions.push(description);
                            // console.log(`Name at index ${i} is ${name}`);

                            case 22:
                                i++;
                                _context.next = 10;
                                break;

                            case 25:
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

        //    renderCampaigns() {
        //         // pass a function into map() that exectures once per element in the array
        //         const items = this.props.campaigns.map( (address) => {
        //             return {
        //                 header: address,
        //                 description: (
        //                     <Link route={`/campaigns/${address}`}>
        //                         <a>View Campaign</a>
        //                     </Link>                    
        //                 ),
        //                 fluid: true
        //             };
        //         });
        //         return <Card.Group items={items} />;
        //     }

    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhbXBhaWduIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbkluZGV4IiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJpbmRleCIsImhlYWRlciIsImNhbXBhaWduX25hbWVzIiwibWV0YSIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJjYW1wYWlnbl9kZXNjcmlwdGlvbnMiLCJmbHVpZCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJqIiwibGVuZ3RoIiwic2luZ2xlX2NhbXBhaWduIiwibmFtZSIsImkiLCJjYW1wYWlnbk5hbWUiLCJjYW1wYWlnbkRlc2NyaXB0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs4TixBQXlDRixrQkFBa0IsWUFBTSxBQUNwQjtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7Z0JBQU0sY0FBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUssVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBRXhEOztBQUVBOzs7NEJBQ1ksTUFBQSxBQUFLLE1BQUwsQUFBVyxlQURoQixBQUNLLEFBQTBCLEFBQ2xDOzBCQUZHLEFBRUcsQUFDTjtpREFFSSxjQUFBOztzQ0FBQTt3Q0FBQSxBQUNJO0FBREo7QUFBQSxxQkFBQSxrQkFDSSxjQUFBLE9BQUcsT0FBSCxBQUFTLFVBQVMsT0FBTyxFQUFFLFdBQUYsQUFBYSxJQUFJLFVBQTFDLEFBQXlCLEFBQTJCO3NDQUFwRDt3Q0FBQSxBQUEyRDtBQUEzRDs2QkFBMkQsQUFBSyxNQUFMLEFBQVcsc0JBRDFFLEFBQ0ksQUFBMkQsQUFBaUMsQUFDNUYseUJBQUEsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQ0FBM0I7d0NBQUEsQUFDSTtBQURKO3VDQUNJLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFSVCxBQUtDLEFBRUksQUFDSSxBQUlaOzJCQVpKLEFBQU8sQUFZSSxBQUVkO0FBZFUsQUFDSDtBQUxSLEFBQWMsQUFvQmQsYUFwQmM7O2lEQW9CUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBO0E7Ozs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7eUJBQUQsQUFDWSxBQUNSO3lCQUZKLEFBRVksQUFDUjtzQkFISixBQUdTLEFBQ0w7eUJBSkosQUFJYTs7OEJBSmI7Z0NBSlosQUFFSSxBQUNJLEFBQ0ksQUFRUDtBQVJPO0FBQ0ksdUJBUHhCLEFBQ0ksQUFDSSxBQVlLLEFBQUssQUFJckI7Ozs7Ozs7Ozs7Ozt1Q0F2RzJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7aUNBQXpEO0EscURBQ0E7QSxpREFDQSxBLEFBRGlCO0Esd0RBRWpCLEEsQUFEd0I7QSxvQ0FDcEIsVSxBQUFVLEFBRWhCO0EsdURBQ0E7QSw0Q0FDQTtBLG1EQUVLO0Esb0MsQUFBSTs7O3NDQUFHLEksQUFBSTs7Ozs7O3VDQUNRLHdCQUFTLFUsQUFBVCxBQUFTLEFBQVU7O2lDQUEzQztBOzt1Q0FDYSxnQkFBQSxBQUFnQixRQUFoQixBQUF3QixlLEFBQXhCLEFBQXVDOztpQ0FBcEQ7QTs7dUNBQ29CLGdCQUFBLEFBQWdCLFFBQWhCLEFBQXdCLHNCLEFBQXhCLEFBQThDOztpQ0FBbEU7QSx1REFFQTs7K0NBQUEsQUFBZSxLQUFmLEFBQW9CLEFBQ3BCO3NEQUFBLEFBQXNCLEtBQXRCLEFBQTJCLEFBQzNCOzs7aUNBUG1CO0E7Ozs7O2lFQVVoQixFQUFFLFdBQUYsQUFBYSxXQUFXLGdCQUF4QixBQUF3QyxnQkFBZ0IsdUIsQUFBeEQsQUFBK0U7Ozs7Ozs7Ozs7Ozs7OztBQUc5Rjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFzRUEsQSxBQTdHNEI7O2tCQTZHNUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbmNpZW50ZXZpbC9kS2ljayJ9