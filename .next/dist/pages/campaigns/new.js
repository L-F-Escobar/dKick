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

var _Layout = require('../../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory.js');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ancientevil/dKick/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: "",
            errorMessage: "",
            hidden: true,
            loading: false,
            name: "",
            description: "",
            nameError: false,
            miniContributionError: false,
            descriptionError: false
        }, _this.handleDismiss = function () {
            _this.setState({ hidden: false });

            setTimeout(function () {
                _this.setState({ errorMessage: "", hidden: true });
            }, 90);
        }, _this.handleDescription = function () {
            if (_this.state.description.length > 1 && _this.state.description !== '') {
                return false;
            }
            var errMsg = _this.state.errorMessage + "\nInvalid Description value.";
            _this.setState({ errorMessage: errMsg });
            return true;
        }, _this.handleContribution = function () {
            if (_this.state.minimumContribution !== '0' && _this.state.minimumContribution !== '') {
                return false;
            }
            var errMsg = _this.state.errorMessage + "\nInvalid Minimum Contribution value.";
            _this.setState({ errorMessage: errMsg });
            return true;
        }, _this.handleName = function () {
            if (_this.state.name.length > 1 && _this.state.name !== '') {
                return false;
            }
            var errMsg = _this.state.errorMessage + "\nInvalid Name value.";
            _this.setState({ errorMessage: errMsg });
            return true;
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.next = 3;
                                return _this.setState({ errorMessage: "",
                                    loading: true,
                                    miniContributionError: false,
                                    nameError: false,
                                    descriptionError: false
                                });

                            case 3:
                                _context.next = 5;
                                return _this.setState({ nameError: _this.handleName(),
                                    descriptionError: _this.handleDescription(),
                                    miniContributionError: _this.handleContribution()
                                });

                            case 5:
                                if (!(_this.state.errorMessage === "")) {
                                    _context.next = 20;
                                    break;
                                }

                                _context.prev = 6;
                                _context.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context.sent;
                                _context.next = 12;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.name, _this.state.description).send({ from: accounts[0] });

                            case 12:
                                _routes.Router.pushRoute('/');
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](6);

                                _this.setState({ errorMessage: _context.t0.message, hidden: false });

                            case 18:
                                _context.next = 21;
                                break;

                            case 20:
                                _this.setState({ hidden: false });

                            case 21:

                                _this.setState({ loading: false });

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, 'Create a Campaign!'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { error: !!this.state.nameError, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, 'Name'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.name,
                onChange: function onChange(event) {
                    _this3.setState({ name: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { error: !!this.state.miniContributionError, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    _this3.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            })), _react2.default.createElement(_semanticUiReact.Form.TextArea, {
                error: !!this.state.descriptionError,
                autoHeight: true,
                rows: 3,
                label: 'Description',
                placeholder: 'Tell us more about your campaign',
                value: this.state.description,
                onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, hidden: this.state.hidden, header: 'Opps!', content: this.state.errorMessage, onDismiss: this.handleDismiss, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImhpZGRlbiIsImxvYWRpbmciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJuYW1lRXJyb3IiLCJtaW5pQ29udHJpYnV0aW9uRXJyb3IiLCJkZXNjcmlwdGlvbkVycm9yIiwiaGFuZGxlRGlzbWlzcyIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImhhbmRsZURlc2NyaXB0aW9uIiwibGVuZ3RoIiwiZXJyTXNnIiwiaGFuZGxlQ29udHJpYnV0aW9uIiwiaGFuZGxlTmFtZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDRjtpQ0FBUSxBQUNpQixBQUNyQjswQkFGSSxBQUVVLEFBQ2Q7b0JBSEksQUFHSSxBQUNSO3FCQUpJLEFBSUssQUFDVDtrQkFMSSxBQUtFLEFBQ047eUJBTkksQUFNUyxBQUNiO3VCQVBJLEFBT08sQUFDWDttQ0FSSSxBQVFtQixBQUN2Qjs4QixBQVRJ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Q3JEO0FBTkw7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBVUo7QUFWSTtBQUNJLCtDQVNSLEFBQUMsc0JBQUQsQUFBTTt1QkFDSyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCOzRCQUZKLEFBR0k7c0JBSEosQUFHVSxBQUNOO3VCQUpKLEFBSVUsQUFDTjs2QkFMSixBQUtnQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQU5oQixBQU1zQixBQUNsQjswQkFBVyxrQkFBQSxBQUFDLE9BQVUsQUFDbEI7MkJBQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxNQUFBLEFBQU0sT0FBbkMsQUFBYyxBQUE0QixBQUM3QztBQVRMOzs4QkFBQTtnQ0F4QkosQUF3QkksQUFZQTtBQVpBO0FBQ0ksZ0NBV0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBUSxLQUFBLEFBQUssTUFBNUIsQUFBa0MsUUFBUSxRQUExQyxBQUFpRCxTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQXZFLEFBQTZFLGNBQWMsV0FBVyxLQUF0RyxBQUEyRzs4QkFBM0c7Z0NBcENKLEFBb0NJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckMsQUFBOEM7OEJBQTlDO2dDQUFBO0FBQUE7ZUF6Q1osQUFDSSxBQUdJLEFBcUNJLEFBS2Y7Ozs7O0EsQUExSXFCLEFBNkkxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYW5jaWVudGV2aWwvZEtpY2sifQ==