'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTextCollapse = function (_Component) {
  _inherits(ReactTextCollapse, _Component);

  function ReactTextCollapse(props) {
    _classCallCheck(this, ReactTextCollapse);

    var _this = _possibleConstructorReturn(this, (ReactTextCollapse.__proto__ || Object.getPrototypeOf(ReactTextCollapse)).call(this, props));

    _this.toggleAction = function () {
      _this.setState(function (state) {
        return { collapse: !state.collapse };
      });
    };

    var collapse = _this.props.options.collapse;

    _this.state = {
      collapse: collapse ? collapse : true
    };
    return _this;
  }

  _createClass(ReactTextCollapse, [{
    key: 'renderHelperText',
    value: function renderHelperText() {
      var _props$options = this.props.options,
          collapseText = _props$options.collapseText,
          expandText = _props$options.expandText,
          textStyle = _props$options.textStyle;
      var collapse = this.state.collapse;


      if (collapse) {
        return _react2.default.createElement(
          'div',
          { style: _extends({ float: 'left' }, textStyle) },
          collapseText
        );
      }

      return _react2.default.createElement(
        'div',
        { style: _extends({ float: 'left' }, textStyle) },
        expandText
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$options2 = _props.options,
          minHeight = _props$options2.minHeight,
          maxHeight = _props$options2.maxHeight,
          contentStyle = _props$options2.contentStyle,
          children = _props.children;
      var collapse = this.state.collapse;

      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          defaultStyle: { h: 0 },
          style: { h: (0, _reactMotion.spring)(collapse ? minHeight : maxHeight) } },
        function () {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              {
                style: _extends({}, contentStyle, {
                  display: 'block'
                }) },
              children
            ),
            _react2.default.createElement(
              'div',
              { onClick: _this2.toggleAction },
              _this2.renderHelperText()
            )
          );
        }
      );
    }
  }]);

  return ReactTextCollapse;
}(_react.Component);

ReactTextCollapse.propTypes = {
  children: _propTypes2.default.node.isRequired,
  options: _propTypes2.default.object.isRequired
};
exports.default = ReactTextCollapse;
//# sourceMappingURL=ReactTextCollapse.js.map