'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var sdk = require('@cognite/sdk');
var __chunk_3 = require('../../chunks/chunk-3d06bc34.js');
var __chunk_4 = require('../../chunks/chunk-2980b17c.js');
var __chunk_7 = require('../../chunks/chunk-cefd798e.js');
var lodash = require('lodash');
var __chunk_12 = require('../../chunks/chunk-04597e30.js');
var reactDnd = require('react-dnd');
var HTML5Backend = _interopDefault(require('react-dnd-html5-backend'));
var reactSizeme = require('react-sizeme');
var numeral = _interopDefault(require('numeral'));
var Odometer = _interopDefault(require('react-odometerjs'));

var DragTargets;
(function (DragTargets) {
    DragTargets["Box"] = "infographic-box";
    DragTargets["Point"] = "infographic-point";
})(DragTargets || (DragTargets = {}));

/**
 * This is wrapper for react-odometerjs component that replaces
 * default odometer theme. Origin - https://github.com/HubSpot/odometer/blob/master/themes/odometer-theme-default.css
 * It's needed to avoid loading odometer theme CSS from CDN.
 */
var StyledOdometer = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit,\n  .odometer.odometer-theme-default .odometer-digit {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {\n    display: inline-block;\n    vertical-align: middle;\n    visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {\n    text-align: left;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon {\n    display: block;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {\n    display: block;\n    backface-visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-value,\n  .odometer.odometer-theme-default .odometer-digit .odometer-value {\n    display: block;\n    transform: translateZ(0);\n  }\n  .odometer.odometer-auto-theme\n    .odometer-digit\n    .odometer-value.odometer-last-value,\n  .odometer.odometer-theme-default\n    .odometer-digit\n    .odometer-value.odometer-last-value {\n    position: absolute;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n    transform: translateY(0);\n  }\n\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    font-family: 'Helvetica Neue', sans-serif;\n    line-height: 1.1em;\n  }\n  .odometer.odometer-auto-theme .odometer-value,\n  .odometer.odometer-theme-default .odometer-value {\n    text-align: center;\n  }\n"], ["\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit,\n  .odometer.odometer-theme-default .odometer-digit {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {\n    display: inline-block;\n    vertical-align: middle;\n    visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {\n    text-align: left;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon {\n    display: block;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {\n    display: block;\n    backface-visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-value,\n  .odometer.odometer-theme-default .odometer-digit .odometer-value {\n    display: block;\n    transform: translateZ(0);\n  }\n  .odometer.odometer-auto-theme\n    .odometer-digit\n    .odometer-value.odometer-last-value,\n  .odometer.odometer-theme-default\n    .odometer-digit\n    .odometer-value.odometer-last-value {\n    position: absolute;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n    transform: translateY(0);\n  }\n\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    font-family: 'Helvetica Neue', sans-serif;\n    line-height: 1.1em;\n  }\n  .odometer.odometer-auto-theme .odometer-value,\n  .odometer.odometer-theme-default .odometer-value {\n    text-align: center;\n  }\n"])));
var templateObject_1;

var HELLIP = String.fromCharCode(0x02026);
var Link = styled__default.a(templateObject_1$1 || (templateObject_1$1 = __chunk_1.__makeTemplateObject(["\n  color: 'white';\n  display: 'inherit';\n"], ["\n  color: 'white';\n  display: 'inherit';\n"])));
var Tag = styled__default.div(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  background: ", ";\n  border-radius: 30px;\n  color: white;\n  display: flex;\n  white-space: nowrap;\n  padding: 6px 4px;\n  transition: 0.3s all;\n  transform-origin: 24px 50%;\n  @media screen and (max-width: 1000px) {\n    transform: scale(0.75);\n  }\n"], ["\n  background: ", ";\n  border-radius: 30px;\n  color: white;\n  display: flex;\n  white-space: nowrap;\n  padding: 6px 4px;\n  transition: 0.3s all;\n  transform-origin: 24px 50%;\n  @media screen and (max-width: 1000px) {\n    transform: scale(0.75);\n  }\n"])), function (props) { return props.color; });
var TagValue = styled__default.div(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  font-size: 1.4rem;\n  display: flex;\n  position: relative;\n  top: -2px;\n"], ["\n  font-size: 1.4rem;\n  display: flex;\n  position: relative;\n  top: -2px;\n"])));
var TagUnit = styled__default.div(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  opacity: 0.8;\n  font-size: 0.8rem;\n  margin: 4px;\n"], ["\n  opacity: 0.8;\n  font-size: 0.8rem;\n  margin: 4px;\n"])));
var TagSettings = styled__default.div(templateObject_5 || (templateObject_5 = __chunk_1.__makeTemplateObject(["\n  color: white;\n  font-size: 1.1rem;\n  margin: auto 8px;\n  cursor: pointer;\n  padding-right: 4px;\n"], ["\n  color: white;\n  font-size: 1.1rem;\n  margin: auto 8px;\n  cursor: pointer;\n  padding-right: 4px;\n"])));
var TagName = styled__default.div(templateObject_6 || (templateObject_6 = __chunk_1.__makeTemplateObject(["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: 0;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 4px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"], ["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: 0;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 4px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"])), function (props) { return props.color; });
var TagDescription = styled__default.div(templateObject_7 || (templateObject_7 = __chunk_1.__makeTemplateObject(["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  margin-bottom: 36px;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 40px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"], ["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  margin-bottom: 36px;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 40px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"])), function (props) { return props.color; });
var TagError = styled__default.div(templateObject_8 || (templateObject_8 = __chunk_1.__makeTemplateObject(["\n  color: white;\n  position: absolute;\n  top: 100%;\n  opacity: 1;\n  align-items: center;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  margin-top: 6px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background-color: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  margin-top: 6px;\n\n  & > p {\n    margin: 2px;\n  }\n\n  &.hovering {\n    opacity: 1;\n    margin-top: 10;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"], ["\n  color: white;\n  position: absolute;\n  top: 100%;\n  opacity: 1;\n  align-items: center;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  margin-top: 6px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background-color: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  margin-top: 6px;\n\n  & > p {\n    margin: 2px;\n  }\n\n  &.hovering {\n    opacity: 1;\n    margin-top: 10;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"])), function (_a) {
    var alertColor = _a.alertColor;
    return alertColor;
});
var handleStyles = {
    width: 25,
    height: 25,
    borderRadius: '100%',
    margin: 'auto 8px',
    cursor: 'move',
    transform: 'translate(0, 0)',
    transition: '.5s background',
};
var boxSource = {
    beginDrag: function (props) {
        var id = props.id, left = props.left, top = props.top;
        return { id: id, left: left, top: top, type: 'box' };
    },
};
var flipStyle = {
    transform: 'rotate(180deg)',
    top: '2px',
};
var DraggableBox = /** @class */ (function (_super) {
    __chunk_1.__extends(DraggableBox, _super);
    function DraggableBox(props) {
        var _this = _super.call(this, props) || this;
        _this.isComponentUnmounted = false;
        _this.interval = null;
        _this.onMouseOver = function (e) {
            e.stopPropagation();
            _this.setState({
                hovering: true,
            });
        };
        _this.onMouseLeave = function (e) {
            e.stopPropagation();
            _this.setState({
                hovering: false,
            });
        };
        _this.onDragHandleDoubleClick = function () {
            var _a = _this.props, onDragHandleDoubleClick = _a.onDragHandleDoubleClick, id = _a.id;
            if (onDragHandleDoubleClick) {
                onDragHandleDoubleClick(id);
            }
        };
        _this.fetchTimeSeries = function (id) { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
            var timeserie, error_1;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __chunk_4.connectPromiseToUnmountState(this, sdk.TimeSeries.retrieve(id, true))];
                    case 1:
                        timeserie = _a.sent();
                        this.setState({
                            tag: timeserie,
                        });
                        if (this.interval) {
                            clearInterval(this.interval);
                            this.interval = null;
                        }
                        this.updateValue();
                        this.interval = setInterval(this.updateValue, this.props.refreshInterval);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof __chunk_4.CanceledPromiseException !== true) {
                            throw error_1;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.updateValue = function () { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
            var data, error_2;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __chunk_4.connectPromiseToUnmountState(this, sdk.Datapoints.retrieveLatest(this.state.tag.name))];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            this.setState({
                                dataPoint: null,
                            });
                            return [2 /*return*/];
                        }
                        if (this.state.dataPoint &&
                            data.timestamp < this.state.dataPoint.timestamp) {
                            return [2 /*return*/]; // got old data point - skip it
                        }
                        this.setState({
                            dataPoint: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2 instanceof __chunk_4.CanceledPromiseException !== true) {
                            throw error_2;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.handleClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick(_this.props.id);
            }
        };
        _this.handleSettingsClick = function (e) {
            if (_this.props.onSettingsClick) {
                e.stopPropagation();
                _this.props.onSettingsClick(_this.props.id);
            }
        };
        _this.handleLinkClick = function (e) {
            if (_this.props.onLinkClick) {
                e.stopPropagation();
                _this.props.onLinkClick(_this.props.id, _this.state.dataPoint || undefined);
            }
        };
        _this.isValid = function () {
            var minMaxRange = _this.props.minMaxRange;
            var dataPoint = _this.state.dataPoint;
            if (!dataPoint || typeof dataPoint.value !== 'number' || !minMaxRange) {
                return true;
            }
            else {
                return !((minMaxRange.min && dataPoint.value < minMaxRange.min) ||
                    (minMaxRange.max && dataPoint.value > minMaxRange.max));
            }
        };
        _this.getPercentDiff = function () {
            var strings = _this.props.strings;
            var _a = _this.props.minMaxRange, min = _a.min, max = _a.max;
            var value = _this.state.dataPoint.value;
            if (typeof value !== 'number') {
                return '';
            }
            if (min !== undefined && value < min) {
                var percent = (((min - value) / min) * 100).toFixed(2);
                return (React__default.createElement(__chunk_12.ComplexString, { input: strings.underPercentage, percent: percent, min: min }));
            }
            if (max !== undefined && value > max) {
                var percent = (((value - max) / max) * 100).toFixed(2);
                return (React__default.createElement(__chunk_12.ComplexString, { input: strings.overPercentage, percent: percent, max: max }));
            }
            return '';
        };
        _this.state = {
            hovering: false,
            tag: null,
            dataPoint: null,
        };
        return _this;
    }
    DraggableBox.prototype.componentDidMount = function () {
        this.fetchTimeSeries(this.props.id);
    };
    DraggableBox.prototype.componentWillUnmount = function () {
        this.isComponentUnmounted = true;
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    DraggableBox.prototype.componentDidUpdate = function (nextProps) {
        if (this.props.id !== nextProps.id) {
            this.fetchTimeSeries(nextProps.id);
        }
    };
    DraggableBox.prototype.renderValue = function () {
        var value = (this.state.dataPoint || { value: undefined }).value;
        if (value === undefined) {
            return HELLIP;
        }
        if (Number.isNaN(+value)) {
            return value;
        }
        return (React__default.createElement(StyledOdometer, { key: "odometer" },
            React__default.createElement(Odometer, { value: numeral(+value).format('0,0.[000000]'), duration: 250 })));
    };
    DraggableBox.prototype.renderTag = function () {
        var valueComponent = this.renderValue();
        var unit = (this.state.tag || { unit: undefined }).unit;
        return (React__default.createElement(Tag, { color: this.props.color, onMouseOver: this.onMouseOver, onMouseLeave: this.onMouseLeave, onClick: this.handleClick },
            this.props.isDraggable &&
                this.props.connectDragSource(React__default.createElement("div", { style: __chunk_1.__assign({}, handleStyles, { backgroundColor: this.isValid()
                            ? 'white'
                            : this.props.alertColor }), onDoubleClick: this.onDragHandleDoubleClick })),
            React__default.createElement(TagValue, { style: this.props.flipped ? flipStyle : {} }, this.props.onLinkClick ? (React__default.createElement(Link, { style: {
                    color: 'white',
                    display: 'inherit',
                }, onClick: this.handleLinkClick },
                valueComponent,
                unit && React__default.createElement(TagUnit, null, unit))) : (React__default.createElement(React__default.Fragment, null,
                valueComponent,
                unit && React__default.createElement(TagUnit, { key: "unit" }, unit)))),
            this.props.onSettingsClick ? (React__default.createElement(TagSettings, { onClick: this.handleSettingsClick },
                React__default.createElement(antd.Icon, { type: "setting" }))) : (React__default.createElement("div", { style: { width: 16, height: 16 } }))));
    };
    DraggableBox.prototype.renderError = function () {
        var hovering = this.state.hovering;
        var _a = this.props, alertColor = _a.alertColor, color = _a.color, sticky = _a.sticky, flipped = _a.flipped;
        return !this.isValid() ? (React__default.createElement(TagError, { alertColor: alertColor, color: color, className: (hovering || sticky ? 'hovering' : '') + " " + (flipped ? 'flipped' : '') }, this.getPercentDiff())) : null;
    };
    DraggableBox.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, color = _a.color, flipped = _a.flipped, isDragging = _a.isDragging, sticky = _a.sticky;
        var _b = this.state.tag || {
            description: undefined,
            name: undefined,
        }, description = _b.description, name = _b.name;
        var hovering = this.state.hovering;
        if (isDragging) {
            return null;
        }
        return (React__default.createElement("div", { style: {
                position: 'absolute',
                transition: 'transform .3s',
                left: left,
                top: top,
                transform: "translate3d(-24px, -24px, 0) rotate(" + (flipped ? '180' : '0') + "deg)",
                transformOrigin: '24px 50%',
                zIndex: hovering ? 1000 : 999,
                pointerEvents: 'auto',
            } },
            name && (React__default.createElement(TagName, { color: color, className: (hovering || sticky ? 'hovering' : '') + " " + (flipped ? 'flipped' : '') }, name)),
            description && (React__default.createElement(TagDescription, { color: color, className: (hovering || sticky ? 'hovering' : '') + " " + (flipped ? 'flipped' : '') }, description)),
            this.renderError(),
            this.renderTag()));
    };
    DraggableBox.defaultProps = {
        hovering: false,
        color: '',
        flipped: false,
        min: null,
        max: null,
        sticky: false,
        isDraggable: true,
        refreshInterval: 5000,
        strings: {
            underPercentage: '{{ percent }}% under the set limit of {{ min }}',
            overPercentage: '{{ percent }}% over the set limit of {{ max }}',
        },
        alertColor: '#e74c3c',
    };
    return DraggableBox;
}(React.Component));
var DraggableBox$1 = reactDnd.DragSource(DragTargets.Point, boxSource, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}); })(DraggableBox);
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var boxSource$1 = {
    beginDrag: function (props) {
        var id = props.id, left = props.left, top = props.top;
        return { id: id, left: left, top: top, type: 'point' };
    },
};
var DraggablePoint = /** @class */ (function (_super) {
    __chunk_1.__extends(DraggablePoint, _super);
    function DraggablePoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick(_this.props.id);
            }
        };
        _this.onDragHandleDoubleClick = function () {
            var _a = _this.props, onDragHandleDoubleClick = _a.onDragHandleDoubleClick, id = _a.id;
            if (onDragHandleDoubleClick) {
                onDragHandleDoubleClick(id);
            }
        };
        return _this;
    }
    DraggablePoint.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, connectDragSource = _a.connectDragSource, connectDragPreview = _a.connectDragPreview, isDragging = _a.isDragging, isDraggable = _a.isDraggable, color = _a.color;
        if (isDragging) {
            return null;
        }
        return connectDragPreview(connectDragSource(React__default.createElement("div", { style: {
                position: 'absolute',
                left: left,
                top: top,
                transform: "translate3d(-12px, -12px, 0)",
                cursor: isDraggable ? 'move' : 'auto',
                pointerEvents: isDraggable ? 'auto' : 'none',
            }, onClick: this.handleOnClick, onDoubleClick: this.onDragHandleDoubleClick },
            React__default.createElement("svg", { width: 24, height: 24 },
                React__default.createElement("circle", { cx: 12, cy: 12, r: 7, fill: color }),
                React__default.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: color, fill: "transparent" })))));
    };
    return DraggablePoint;
}(React.Component));
var DraggablePoint$1 = reactDnd.DragSource(DragTargets.Box, boxSource$1, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}); })(DraggablePoint);

var SvgLine = function (_a) {
    var box = _a.box;
    return (React__default.createElement("svg", { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        } },
        React__default.createElement("g", null,
            React__default.createElement("line", { x1: box.left, y1: box.top, x2: box.pointer.left, y2: box.pointer.top, style: { stroke: box.color, strokeWidth: 2 } }))));
};

var boxTarget = {
    hover: function (props, monitor, component) {
        var item = monitor.getItem();
        var delta = monitor.getDifferenceFromInitialOffset();
        if (delta &&
            (delta.x !== component.previousDelta.x ||
                delta.y !== component.previousDelta.y)) {
            var left = Math.round(item.left + delta.x);
            var top_1 = Math.round(item.top + delta.y);
            component.previousDelta = delta;
            var size = props.size;
            if (item.type === 'box') {
                component.moveBox(item.id, __chunk_3.clampNumber(left, 0, size.width - 1), __chunk_3.clampNumber(top_1, 0, size.height - 1));
            }
            else if (item.type === 'point') {
                component.movePoint(item.id, __chunk_3.clampNumber(left, 0, size.width - 1), __chunk_3.clampNumber(top_1, 0, size.height - 1));
            }
        }
    },
    /**
     * if props.onSensorPositionChange is defined - notify parent about sensor position change
     */
    drop: function (props, monitor, component) {
        if (props.onSensorPositionChange) {
            var item = monitor.getItem();
            component.notifyParentOnPositionChange(item.id);
        }
    },
};
var SensorOverlay = /** @class */ (function (_super) {
    __chunk_1.__extends(SensorOverlay, _super);
    function SensorOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.previousDelta = { x: 0, y: 0 };
        _this.onDragHandleDoubleClick = function (timeserieId) {
            var box = _this.state.boxes.find(function (b) { return b.id === timeserieId; });
            if (box) {
                var size = _this.props.size;
                var newPosition = {
                    left: box.left * size.width + 50,
                    top: box.top * size.height + 50,
                };
                _this.movePoint(timeserieId, newPosition.left, newPosition.top, true);
            }
        };
        _this.onAnchorDoubleClick = function (timeserieId) {
            var box = _this.state.boxes.find(function (b) { return b.id === timeserieId; });
            if (box) {
                var pointer = box.pointer;
                var size = _this.props.size;
                var newPosition = {
                    left: Math.max(20, pointer.left * size.width - 50),
                    top: Math.max(20, pointer.top * size.height - 50),
                };
                _this.moveBox(timeserieId, newPosition.left, newPosition.top, true);
            }
        };
        _this.moveBox = function (id, left, top, notifyParent) {
            if (notifyParent === void 0) { notifyParent = false; }
            _this.setState(function (state, props) {
                return {
                    boxes: state.boxes.map(function (box) {
                        return box.id === id
                            ? __chunk_1.__assign({}, box, { defaultSlot: null, left: left / props.size.width, top: top / props.size.height }) : box;
                    }),
                };
            }, function () { return notifyParent && _this.notifyParentOnPositionChange(id); });
        };
        _this.movePoint = function (id, left, top, notifyParent) {
            if (notifyParent === void 0) { notifyParent = false; }
            _this.setState(function (state, props) {
                return {
                    boxes: state.boxes.map(function (box) {
                        return box.id === id
                            ? __chunk_1.__assign({}, box, { pointer: {
                                    left: left / props.size.width,
                                    top: top / props.size.height,
                                } }) : box;
                    }),
                };
            }, function () { return notifyParent && _this.notifyParentOnPositionChange(id); });
        };
        _this.notifyParentOnPositionChange = function (id) {
            if (_this.props.onSensorPositionChange) {
                var box = _this.state.boxes.find(function (b) { return b.id === id; });
                if (box) {
                    _this.props.onSensorPositionChange(id, lodash.omit(box, ['id', 'defaultSlot']));
                }
            }
        };
        _this.state = SensorOverlay.getNewStateFromProps(props, {
            timeseriesIds: [],
            boxes: [],
            prevSize: {
                width: 0,
                height: 0,
            },
        });
        return _this;
    }
    SensorOverlay.getDerivedStateFromProps = function (props, state) {
        if (props.timeseriesIds !== state.timeseriesIds ||
            props.size.width !== state.prevSize.width ||
            props.size.height !== state.prevSize.height) {
            return SensorOverlay.getNewStateFromProps(props, state);
        }
        else {
            return null;
        }
    };
    SensorOverlay.getNewStateFromProps = function (props, state) {
        return props.size.width === 0 || props.size.height === 0
            ? {
                // container is empty
                timeseriesIds: props.timeseriesIds,
                boxes: [],
                prevSize: {
                    width: props.size.width,
                    height: props.size.height,
                },
            }
            : {
                timeseriesIds: props.timeseriesIds,
                boxes: SensorOverlay.makeBoxesList(state.boxes, props),
                prevSize: {
                    width: props.size.width,
                    height: props.size.height,
                },
            };
    };
    SensorOverlay.makeBoxesList = function (oldBoxes, props) {
        var closedSlots = oldBoxes
            .map(function (box) { return box.defaultSlot; })
            .filter(function (v) { return typeof v === 'number'; })
            .sort(function (a, b) { return a - b; });
        return props.timeseriesIds.map(function (id) {
            var oldBox = oldBoxes.find(function (box) { return box.id === id; });
            if (oldBox) {
                return oldBox;
            }
            else {
                var isDefaultPositionProvided = !!(props.defaultPositionMap && props.defaultPositionMap[id]);
                var defaultSlot = isDefaultPositionProvided
                    ? null
                    : SensorOverlay.findFirstFreeSlot(closedSlots);
                if (typeof defaultSlot === 'number') {
                    closedSlots.splice(lodash.sortedIndex(closedSlots, defaultSlot), 0, defaultSlot);
                }
                return __chunk_1.__assign({ id: id,
                    defaultSlot: defaultSlot, color: (props.colorMap && props.colorMap[id]) ||
                        __chunk_7.getColorByString(id.toString()) }, (isDefaultPositionProvided
                    ? props.defaultPositionMap[id]
                    : SensorOverlay.getDefaultPosition(defaultSlot, props.size)));
            }
        });
    };
    SensorOverlay.findFirstFreeSlot = function (closedSlots) {
        var e_1, _a;
        var freeSlot = 0;
        try {
            for (var closedSlots_1 = __chunk_1.__values(closedSlots), closedSlots_1_1 = closedSlots_1.next(); !closedSlots_1_1.done; closedSlots_1_1 = closedSlots_1.next()) {
                var slot = closedSlots_1_1.value;
                if (slot !== freeSlot) {
                    return freeSlot;
                }
                else {
                    freeSlot++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (closedSlots_1_1 && !closedSlots_1_1.done && (_a = closedSlots_1.return)) _a.call(closedSlots_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return freeSlot;
    };
    SensorOverlay.getDefaultPosition = function (defaultsSlot, size) {
        return {
            // default position of tag and pointer
            left: (100 + defaultsSlot * 40) / size.width,
            top: (40 + defaultsSlot * 20) / size.height,
            pointer: {
                left: (200 + defaultsSlot * 40) / size.width,
                top: (140 + defaultsSlot * 20) / size.height,
            },
        };
    };
    SensorOverlay.prototype.render = function () {
        var _this = this;
        var _a = this.props, size = _a.size, fixedWidth = _a.fixedWidth, colorMap = _a.colorMap, stickyMap = _a.stickyMap, minMaxMap = _a.minMaxMap, refreshInterval = _a.refreshInterval, strings = _a.strings, alertColor = _a.alertColor;
        return this.props.connectDropTarget(React__default.createElement("div", { style: {
                position: 'relative',
                display: 'block',
                width: fixedWidth || '100%',
                pointerEvents: 'auto',
            } },
            this.props.children,
            this.state.boxes.map(function (box) {
                var color = (colorMap && colorMap[box.id]) || box.color;
                return (React__default.createElement(React__default.Fragment, { key: box.id },
                    React__default.createElement(DraggableBox$1, { id: box.id, alertColor: alertColor, left: box.left * size.width, top: box.top * size.height, color: color, sticky: (stickyMap && stickyMap[box.id]) || false, onLinkClick: _this.props.linksMap ? _this.props.onLinkClick : undefined, isDraggable: _this.props.isTagDraggable, flipped: box.pointer.left > box.left, onDragHandleDoubleClick: _this.onDragHandleDoubleClick, onClick: _this.props.onClick, onSettingsClick: _this.props.onSettingsClick, refreshInterval: refreshInterval, minMaxRange: minMaxMap && minMaxMap[box.id], strings: strings }),
                    React__default.createElement(SvgLine, { box: {
                            color: color,
                            left: box.left * size.width,
                            top: box.top * size.height,
                            pointer: {
                                left: box.pointer.left * size.width,
                                top: box.pointer.top * size.height,
                            },
                        } }),
                    React__default.createElement(DraggablePoint$1, { id: box.id, left: box.pointer.left * size.width, top: box.pointer.top * size.height, color: color, isDraggable: _this.props.isPointerDraggable, onClick: _this.props.onClick, onDragHandleDoubleClick: _this.onAnchorDoubleClick })));
            })));
    };
    SensorOverlay.defaultProps = {
        isTagDraggable: true,
        isPointerDraggable: true,
    };
    return SensorOverlay;
}(React.Component));
var WrappedSensorOverlay = reactDnd.DropTarget([DragTargets.Box, DragTargets.Point], boxTarget, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(SensorOverlay);
var SizeWrapper = reactSizeme.withSize({ monitorHeight: true })(WrappedSensorOverlay);
var FinalSensorOverlay = reactDnd.DragDropContext(HTML5Backend)(SizeWrapper);
FinalSensorOverlay.displayName = 'SensorOverlay';

exports.SensorOverlay = FinalSensorOverlay;
