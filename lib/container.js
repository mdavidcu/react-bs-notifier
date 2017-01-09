"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PropTypes = exports.EXIT_TIMEOUT = exports.ENTER_TIMEOUT = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require("react-addons-css-transition-group");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _toetag = require("toetag");

var _reactJssPresetCivicsource = require("react-jss-preset-civicsource");

var _reactJssPresetCivicsource2 = _interopRequireDefault(_reactJssPresetCivicsource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAGICAL_MAX_HEIGHT = "20em";
var ENTER_TIMEOUT = exports.ENTER_TIMEOUT = 500;
var EXIT_TIMEOUT = exports.EXIT_TIMEOUT = 300;

var styles = {
	container: {
		position: "fixed",
		paddingTop: _toetag.bootstrap.paddingBaseVertical,
		paddingRight: _toetag.bootstrap.paddingBaseHorizontal,
		paddingBottom: _toetag.bootstrap.paddingBaseVertical,
		paddingLeft: _toetag.bootstrap.paddingBaseHorizontal,
		zIndex: _toetag.bootstrap.zindexNavbarFixed + 1
	},
	"top-right": {
		top: 0,
		right: 0,
		textAlign: "right"
	},
	"top-left": {
		top: 0,
		left: 0
	},
	"bottom-right": {
		bottom: 0,
		right: 0,
		textAlign: "right"
	},
	"bottom-left": {
		bottom: 0,
		left: 0
	},
	enter: {
		opacity: 0.01,
		transform: "translateX(-25%)",
		maxHeight: 0,
		overflow: "hidden",
		transition: ".25s ease-in"
	},
	enterActive: {
		opacity: 1,
		transform: "translateX(0)",
		maxHeight: MAGICAL_MAX_HEIGHT
	},
	leave: {
		opacity: 1,
		transform: "translateX(0)",
		maxHeight: MAGICAL_MAX_HEIGHT,
		overflow: "hidden",
		transition: ".25s ease-out"
	},
	leaveActive: {
		opacity: 0.01,
		transform: "translateX(25%)",
		maxHeight: 0
	}
};

var AlertContainer = function AlertContainer(_ref) {
	var _ref$position = _ref.position,
	    position = _ref$position === undefined ? "top-right" : _ref$position,
	    children = _ref.children,
	    classes = _ref.sheet.classes;

	return _react2.default.createElement(
		"div",
		{ className: classes.container + " " + classes[position] },
		_react2.default.createElement(
			_reactAddonsCssTransitionGroup2.default,
			{ transitionName: classes, transitionEnterTimeout: ENTER_TIMEOUT, transitionLeaveTimeout: EXIT_TIMEOUT },
			children
		)
	);
};

var PropTypes = exports.PropTypes = {
	position: _react.PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

exports.default = (0, _reactJssPresetCivicsource2.default)(AlertContainer, styles);