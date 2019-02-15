'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ancientevil/dKick/components/Layout.js';

exports.default = function (props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '100px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('link', { rel: 'icon', type: 'image/x-icon', href: '../static/favicon.ico', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'dKick')), props.children), _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiSGVhZCIsIkNvbnRhaW5lciIsInByb3BzIiwibWFyZ2luVG9wIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBSVQ7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBVSxBQUN0QjsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQURKLEFBQ0ksQUFFQTtBQUZBO0FBQUEsd0JBRUEsQUFBQyw0Q0FBVSxPQUFPLEVBQUUsV0FBcEIsQUFBa0IsQUFBYTtzQkFBL0I7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO3NCQUE1Qjt3QkFESixBQUNJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQixnQkFBZSxNQUFyQyxBQUEwQztzQkFBMUM7d0JBRkosQUFFSSxBQUdBO0FBSEE7d0JBR0EsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BTlIsQUFDSSxBQUtJLEFBRUgsaUJBWFQsQUFHSSxBQVFXLEFBR1gsMkJBQUEsQUFBQzs7c0JBQUQ7d0JBZlIsQUFDSSxBQWNJLEFBR1g7QUFIVztBQUFBO0FBaEJaIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbmNpZW50ZXZpbC9kS2ljayJ9