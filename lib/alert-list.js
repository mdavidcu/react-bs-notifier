"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _container = require("./container");

var _container2 = _interopRequireDefault(_container);

var _alertTimer = require("./alert-timer");

var _alertTimer2 = _interopRequireDefault(_alertTimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AlertList = function AlertList(_ref) {
	var position = _ref.position,
	    alerts = _ref.alerts,
	    onDismiss = _ref.onDismiss,
	    props = _objectWithoutProperties(_ref, ["position", "alerts", "onDismiss"]);

	return _react2.default.createElement(
		_container2.default,
		{ position: position },
		alerts.map(function (item) {
			var dismiss = onDismiss ? function () {
				return onDismiss(item);
			} : null;

			var message = item.message,
			    alertProps = _objectWithoutProperties(item, ["message"]);

			return _react2.default.createElement(
				_alertTimer2.default,
				_extends({ key: item.id }, props, alertProps, { onDismiss: dismiss }),
				message
			);
		})
	);
};

AlertList.propTypes = _extends({}, _container.PropTypes, {
	alerts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		id: _react.PropTypes.any.isRequired,
		type: _alertTimer.PropTypes.type,
		headline: _alertTimer.PropTypes.headline,
		message: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node, _react.PropTypes.object]).isRequired
	})).isRequired,
	onDismiss: _react.PropTypes.func,
	timeout: _alertTimer.PropTypes.timeout
});

exports.default = AlertList;