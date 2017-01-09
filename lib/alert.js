"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _toetag = require("toetag");

var _icon = require("./icon");

var _icon2 = _interopRequireDefault(_icon);

var _reactJssPresetCivicsource = require("react-jss-preset-civicsource");

var _reactJssPresetCivicsource2 = _interopRequireDefault(_reactJssPresetCivicsource);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	innerAlert: {
		marginBottom: _toetag.bootstrap.paddingBaseVertical,
		display: "inline-block",
		textAlign: "left"
	},
	msgContainer: {
		display: "inline-block"
	},
	icon: {
		verticalAlign: "top",
		fontSize: _toetag.bootstrap.fontSizeH4,
		paddingRight: _toetag.bootstrap.paddingLargeHorizontal,
		opacity: 0.2
	},
	headline: {
		margin: 0,
		marginBottom: _toetag.bootstrap.paddingBaseVertical
	},
	body: {
		maxWidth: "40em"
	}
};

var Alert = function Alert(_ref) {
	var _ref$type = _ref.type,
	    type = _ref$type === undefined ? "info" : _ref$type,
	    children = _ref.children,
	    headline = _ref.headline,
	    onDismiss = _ref.onDismiss,
	    _ref$dismissTitle = _ref.dismissTitle,
	    dismissTitle = _ref$dismissTitle === undefined ? "Dismiss" : _ref$dismissTitle,
	    classes = _ref.sheet.classes,
	    className = _ref.className,
	    _ref$showIcon = _ref.showIcon,
	    showIcon = _ref$showIcon === undefined ? true : _ref$showIcon;

	var isDismissable = !!onDismiss;
	var css = "alert " + (isDismissable ? "alert-dismissible" : "") + " alert-" + type + " " + classes.innerAlert;
	var dismiss = isDismissable ? _react2.default.createElement(
		"button",
		{ type: "button", className: "close", title: dismissTitle, onClick: onDismiss },
		"\xD7"
	) : null;

	return _react2.default.createElement(
		"div",
		null,
		" ",
		_react2.default.createElement(
			"div",
			{ className: (0, _classnames2.default)(className, css), role: "alert" },
			showIcon ? _react2.default.createElement(_icon2.default, { className: classes.icon, type: type }) : null,
			headline ? _react2.default.createElement(
				"span",
				{ "data-growl": "title" },
				" ",
				headline
			) : null,
			_react2.default.createElement(
				"span",
				{ "data-growl": "message" },
				children
			)
		)
	);
};

exports.default = (0, _reactJssPresetCivicsource2.default)(Alert, styles);