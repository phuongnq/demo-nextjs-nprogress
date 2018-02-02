'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _Theme = require('../components/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index3 = require('../styles/index.scss');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/phuongnq/github/demo-nextjs-nprogress/app/pages/index.js?entry';

// Straight away require/import scss/css just like in react.


var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _index2.default.onRouteChangeStart = function () {
            return _nprogress2.default.start();
        };
        _index2.default.onRouteChangeComplete = function () {
            return _nprogress2.default.stop();
        };
        _index2.default.onRouteChangeError = function () {
            return _nprogress2.default.stop();
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return (
                // Wrap your page inside <Theme> HOC to get bootstrap styling.
                // Theme can also be omitted if react-bootstrap components are not used.
                _react2.default.createElement(_Theme2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index4.default }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }), _react2.default.createElement('span', {
                    className: 'jsx-2722642510' + ' ' + 'heading',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, 'React.js | Next.js | Express.js | Bootstrap - SCSS'), _react2.default.createElement('span', {
                    className: 'jsx-2722642510' + ' ' + 'text',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, 'with SSR.'), _react2.default.createElement('div', {
                    className: 'jsx-2722642510' + ' ' + 'img-container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, _react2.default.createElement('img', { alt: '', src: '/icons/github.png', className: 'jsx-2722642510',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                })), _react2.default.createElement('span', {
                    className: 'jsx-2722642510' + ' ' + 'text',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, _react2.default.createElement('a', { href: 'https://github.com/MustansirZia/next-express-bootstrap-boilerplate', className: 'jsx-2722642510',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, 'Github')), _react2.default.createElement('br', {
                    className: 'jsx-2722642510',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }), _react2.default.createElement('div', {
                    className: 'jsx-2722642510' + ' ' + 'btn',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, _react2.default.createElement(_link2.default, { href: '/profile', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, 'Click Me'))), _react2.default.createElement(_style2.default, {
                    styleId: '2722642510',
                    css: '.btn.jsx-2722642510{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDRCLEFBR3NDLDBFQUNVLG1HQUMzQiIsImZpbGUiOiJhcHAvcGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGh1b25nbnEvZ2l0aHViL2RlbW8tbmV4dGpzLW5wcm9ncmVzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL2NvbXBvbmVudHMvVGhlbWUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTnByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5cbi8vIFN0cmFpZ2h0IGF3YXkgcmVxdWlyZS9pbXBvcnQgc2Nzcy9jc3MganVzdCBsaWtlIGluIHJlYWN0LlxuaW1wb3J0IGluZGV4U3R5bGUgZnJvbSAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOcHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5wcm9ncmVzcy5zdG9wKCk7XG4gICAgICAgIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOcHJvZ3Jlc3Muc3RvcCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyBXcmFwIHlvdXIgcGFnZSBpbnNpZGUgPFRoZW1lPiBIT0MgdG8gZ2V0IGJvb3RzdHJhcCBzdHlsaW5nLlxuICAgICAgICAgICAgLy8gVGhlbWUgY2FuIGFsc28gYmUgb21pdHRlZCBpZiByZWFjdC1ib290c3RyYXAgY29tcG9uZW50cyBhcmUgbm90IHVzZWQuXG4gICAgICAgICAgICA8VGhlbWU+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTZXQgaW5kZXhTdHlsaW5nIHZpYSBkYW5nZXJvdXNseVNldElubmVySFRNTC5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBzdGVwIHdpbGwgbWFrZSB0aGUgYmVsb3cgY2xhc3NlcyB0byB3b3JrLlxuICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpbmRleFN0eWxlIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+UmVhY3QuanMgfCBOZXh0LmpzIHwgRXhwcmVzcy5qcyB8IEJvb3RzdHJhcCAtIFNDU1M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPndpdGggU1NSLjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIHsvKiBBY3F1aXJlIHN0YXRpYyBhc3NldHMgZnJvbSBleHByZXNzIHN0YXRpYyBkaXJlY3RseS4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2ljb25zL2dpdGh1Yi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL011c3RhbnNpclppYS9uZXh0LWV4cHJlc3MtYm9vdHN0cmFwLWJvaWxlcnBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIEdpdGh1YlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiPkNsaWNrIE1lPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBTdHlsaW5nIHVzaW5nIHN0eWxlZC1qc3guICovfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L1RoZW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=app/pages/index.js?entry */'
                }))
            );
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVGhlbWUiLCJSb3V0ZXIiLCJOcHJvZ3Jlc3MiLCJpbmRleFN0eWxlIiwiSW5kZXgiLCJwcm9wcyIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwic3RvcCIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFDUCxBQUFTOzs7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFPLEFBQWdCOzs7Ozs7OztBQUR2Qjs7O0lBR00sQTttQ0FDRjs7bUJBQUEsQUFBWSxPQUFPOzRDQUFBOzt3SUFBQSxBQUNULEFBRU47O3dCQUFBLEFBQU8scUJBQXFCLFlBQUE7bUJBQU0sb0JBQU4sQUFBTSxBQUFVO0FBQTVDLEFBQ0E7d0JBQUEsQUFBTyx3QkFBd0IsWUFBQTttQkFBTSxvQkFBTixBQUFNLEFBQVU7QUFBL0MsQUFDQTt3QkFBQSxBQUFPLHFCQUFxQixZQUFBO21CQUFNLG9CQUFOLEFBQU0sQUFBVTtBQUw3QixBQUtmO2VBQ0g7Ozs7O2lDQUNRLEFBQ0w7QUFDSTtBQUNBO0FBQ0E7Z0NBQUEsQUFBQzs7a0NBQUQ7b0NBQUEsQUFPSTtBQVBKO0FBQUEsNERBT1cseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtrQ0FBMUM7b0NBUEosQUFPSSxBQUVBO0FBRkE7b0NBRUEsY0FBQTt3REFBQSxBQUFnQjs7a0NBQWhCO29DQUFBO0FBQUE7QUFBQSxtQkFUSixBQVNJLEFBQ0EsdUVBQUEsY0FBQTt3REFBQSxBQUFnQjs7a0NBQWhCO29DQUFBO0FBQUE7QUFBQSxtQkFWSixBQVVJLEFBR0EsOEJBQUEsY0FBQTt3REFBQSxBQUFlOztrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7QUFBQSwwREFDUyxLQUFMLEFBQVMsSUFBRyxLQUFaLEFBQWdCLGdDQUFoQjs7a0NBQUE7b0NBZFIsQUFhSSxBQUNJLEFBR0o7QUFISTtxQ0FHSixjQUFBO3dEQUFBLEFBQWdCOztrQ0FBaEI7b0NBQUEsQUFDSTtBQURKO0FBQUEsbUNBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxpRkFBUjs7a0NBQUE7b0NBQUE7QUFBQTttQkFsQlIsQUFpQkksQUFDSSxBQUlKOytCQUFBOztrQ0FBQTtvQ0F0QkosQUFzQkksQUFDQTtBQURBO0FBQUEsb0NBQ0EsY0FBQTt3REFBQSxBQUFlOztrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7QUFBQSxtQ0FDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztrQ0FBWDtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksQUFBQyx3Q0FBTyxTQUFSLEFBQWdCO2tDQUFoQjtvQ0FBQTtBQUFBO21CQXpCWixBQXVCSSxBQUNJLEFBQ0k7NkJBekJaO3lCQUhKLEFBR0ksQUF1Q1A7QUF2Q087Ozs7OztBQVpRLEEsQUFzRHBCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3BodW9uZ25xL2dpdGh1Yi9kZW1vLW5leHRqcy1ucHJvZ3Jlc3MifQ==