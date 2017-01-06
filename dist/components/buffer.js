(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "react-motion", "../util/constants", "../util/index", "../jPlayerConnect"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("react-motion"), require("../util/constants"), require("../util/index"), require("../jPlayerConnect"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.reactMotion, global.constants, global.index, global.jPlayerConnect);
        global.buffer = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _reactMotion, _constants, _index, _jPlayerConnect) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jPlayerConnect2 = _interopRequireDefault(_jPlayerConnect);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var mapJPlayerProps = function mapJPlayerProps(jPlayers, id) {
        return {
            bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
            duration: jPlayers[id].duration,
            bufferColour: jPlayers[id].bufferColour
        };
    };

    var Buffer = function (_React$Component) {
        _inherits(Buffer, _React$Component);

        function Buffer() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, Buffer);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Buffer.__proto__ || Object.getPrototypeOf(Buffer)).call.apply(_ref, [this].concat(args))), _this), _this.newCanvas = function (nextProps) {
                var modifier = _this.canvas.width / nextProps.duration;
                var context = _this.canvas.getContext("2d");

                nextProps.bufferedTimeRanges.forEach(function (bufferedTimeRange) {
                    var startX = bufferedTimeRange.start * modifier;
                    var endX = bufferedTimeRange.end * modifier;
                    var width = endX - startX;

                    context.fillStyle = _this.props.bufferColour;
                    context.fillRect(startX, 0, width, _this.canvas.height);
                });
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Buffer, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
                    this.newCanvas(nextProps);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement("canvas", _extends({ ref: function ref(_ref2) {
                        return _this2.canvas = _ref2;
                    }, className: _constants.classes.BUFFER_BAR }, this.props.attributes));
            }
        }]);

        return Buffer;
    }(_react2.default.Component);

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(Buffer, mapJPlayerProps));
});