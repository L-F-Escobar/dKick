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
                            lineNumber: 83
                        }
                    }, _react2.default.createElement('p', { align: 'center', style: { marginTop: 10, fontSize: 15 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    }, _this.props.campaign_descriptions[index]), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        }
                    }, 'View Campaign'))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
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
                    lineNumber: 99
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
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
                                return _factory2.default.methods.getDeployedCampaigns().call();

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
                                return _context.abrupt('return', { campaigns: campaigns, campaign_names: campaign_names, campaign_descriptions: campaign_descriptions });

                            case 25:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhbXBhaWduIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbkluZGV4IiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJpbmRleCIsImhlYWRlciIsImNhbXBhaWduX25hbWVzIiwibWV0YSIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJjYW1wYWlnbl9kZXNjcmlwdGlvbnMiLCJmbHVpZCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJzaW5nbGVfY2FtcGFpZ24iLCJuYW1lIiwiaSIsImxlbmd0aCIsImNhbXBhaWduTmFtZSIsImNhbXBhaWduRGVzY3JpcHRpb24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7Ozs7OzhOLEFBMENGLGtCQUFrQixZQUFNLEFBQ3BCO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtnQkFBTSxjQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSyxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFFeEQ7O0FBRUE7Ozs0QkFDWSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBRGhCLEFBQ0ssQUFBMEIsQUFDbEM7MEJBRkcsQUFFRyxBQUNOO2lEQUVJLGNBQUE7O3NDQUFBO3dDQUFBLEFBQ0k7QUFESjtBQUFBLHFCQUFBLGtCQUNJLGNBQUEsT0FBRyxPQUFILEFBQVMsVUFBUyxPQUFPLEVBQUUsV0FBRixBQUFhLElBQUksVUFBMUMsQUFBeUIsQUFBMkI7c0NBQXBEO3dDQUFBLEFBQTJEO0FBQTNEOzZCQUEyRCxBQUFLLE1BQUwsQUFBVyxzQkFEMUUsQUFDSSxBQUEyRCxBQUFpQyxBQUM1Rix5QkFBQSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUNJO0FBREo7dUNBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQVJULEFBS0MsQUFFSSxBQUNJLEFBSVo7MkJBWkosQUFBTyxBQVlJLEFBRWQ7QUFkVSxBQUNIO0FBTFIsQUFBYyxBQW9CZCxhQXBCYzs7aURBb0JQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7QTs7Ozs7aUNBR0YsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNZLEFBQ1I7eUJBRkosQUFFWSxBQUNSO3NCQUhKLEFBR1MsQUFDTDt5QkFKSixBQUlhOzs4QkFKYjtnQ0FKWixBQUVJLEFBQ0ksQUFDSSxBQVFQO0FBUk87QUFDSSx1QkFQeEIsQUFDSSxBQUNJLEFBWUssQUFBSyxBQUtyQjs7Ozs7Ozs7Ozs7O3VDQXhHMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOztpQ0FBekQ7QSxxREFDQTtBLGlEQUNBLEEsQUFEaUI7QSx3REFDTyxBQUM5QixBO0FBRUk7O0EsdURBQ0E7QSw0Q0FDQTtBLG1EQUVLO0Esb0MsQUFBSTs7O3NDQUFHLElBQUksVSxBQUFVOzs7Ozs7dUNBQ0Ysd0JBQVMsVSxBQUFULEFBQVMsQUFBVTs7aUNBQTNDO0E7O3VDQUNhLGdCQUFBLEFBQWdCLFFBQWhCLEFBQXdCLGUsQUFBeEIsQUFBdUM7O2lDQUFwRDtBOzt1Q0FDb0IsZ0JBQUEsQUFBZ0IsUUFBaEIsQUFBd0Isc0IsQUFBeEIsQUFBOEM7O2lDQUFsRTtBLHVEQUVBOzsrQ0FBQSxBQUFlLEtBQWYsQUFBb0IsQUFDcEI7c0RBQUEsQUFBc0IsS0FBdEIsQUFBMkIsQUFDM0I7OztpQ0FQa0M7QTs7Ozs7aUVBVS9CLEVBQUUsV0FBRixBQUFhLFdBQVcsZ0JBQXhCLEFBQXdDLGdCQUFnQix1QixBQUF4RCxBQUErRTs7Ozs7Ozs7Ozs7Ozs7O0FBRzlGOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQXVFQSxBLEFBL0c0Qjs7a0JBK0c1QixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FuY2llbnRldmlsL2RLaWNrIn0=