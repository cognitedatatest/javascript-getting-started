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
require('moment-timezone');
var __chunk_5 = require('../../chunks/chunk-a09cc607.js');
var __chunk_12 = require('../../chunks/chunk-04597e30.js');

var EventTitle = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  font-size: 1.4rem;\n  padding-bottom: 16px;\n"], ["\n  font-size: 1.4rem;\n  padding-bottom: 16px;\n"])));
var EventType = styled__default.div(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  font-size: 1.2rem;\n  color: #40a9ff;\n  padding-bottom: 8px;\n"], ["\n  font-size: 1.2rem;\n  color: #40a9ff;\n  padding-bottom: 8px;\n"])));
var EventDetailsBlock = styled__default.div(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  font-size: 1.1rem;\n  padding-bottom: 16px;\n  p {\n    margin: 0;\n  }\n"], ["\n  font-size: 1.1rem;\n  padding-bottom: 16px;\n  p {\n    margin: 0;\n  }\n"])));
var Container = styled__default.div(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  color: rgba(0, 0, 0, 0.45);\n  padding: 16px;\n  width: 300px;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  margin-top: 32px;\n"], ["\n  color: rgba(0, 0, 0, 0.45);\n  padding: 16px;\n  width: 300px;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  margin-top: 32px;\n"])));
var defaultStrings = {
    noDescription: 'No description',
    start: 'Start',
    end: 'End',
    noStartTime: 'Unknown',
    noEndTime: 'Ongoing',
    details: 'Explore event details',
    metadataSummary: 'Contains {{count}} additional pieces of data',
};
var EventPreviewView = function (_a) {
    var onShowDetails = _a.onShowDetails, event = _a.event, _b = _a.strings, strings = _b === void 0 ? {} : _b, _c = _a.hideProperties, hideProperties = _c === void 0 ? [] : _c, _d = _a.styles, styles = _d === void 0 ? {} : _d;
    var lang = __chunk_1.__assign({}, defaultStrings, strings);
    var startTime = event.startTime, endTime = event.endTime, type = event.type, subtype = event.subtype, description = event.description, metadata = event.metadata;
    var noDescription = lang.noDescription, start = lang.start, end = lang.end, details = lang.details, metadataSummary = lang.metadataSummary, noStartTime = lang.noStartTime, noEndTime = lang.noEndTime;
    var startDate = __chunk_5.formatDatetime(startTime, noStartTime);
    var endDate = __chunk_5.formatDatetime(endTime, noEndTime);
    var metadataCount = metadata ? Object.keys(metadata).length : 0;
    return (React__default.createElement(Container, { key: "container", style: styles.wrapper },
        React__default.createElement(EventType, { style: styles.eventType }, [
            hideProperties.includes('type') ? '' : type,
            hideProperties.includes('subtype') ? '' : subtype,
        ]
            .filter(Boolean)
            .join(' / ')),
        !hideProperties.includes('description') && (React__default.createElement(EventTitle, { style: styles.description }, description || noDescription)),
        React__default.createElement(EventDetailsBlock, { style: styles.times },
            !hideProperties.includes('startTime') && (React__default.createElement("p", null,
                start,
                ": ",
                startDate)),
            !hideProperties.includes('endTime') && (React__default.createElement("p", null,
                end,
                ": ",
                endDate))),
        !hideProperties.includes('metadata') && (React__default.createElement(EventDetailsBlock, { style: styles.metadata },
            React__default.createElement(__chunk_12.ComplexString, { input: metadataSummary, count: metadataCount }))),
        onShowDetails && (React__default.createElement(antd.Button, { htmlType: "button", type: "primary", onClick: function () { return onShowDetails(event); }, style: styles.button }, details))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var SpinContainer = styled__default.div(templateObject_1$1 || (templateObject_1$1 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n"])));
var LoadingSpinner = function () { return (React__default.createElement(SpinContainer, null,
    React__default.createElement(antd.Spin, null))); };
var EventPreview = /** @class */ (function (_super) {
    __chunk_1.__extends(EventPreview, _super);
    function EventPreview(props) {
        var _this = _super.call(this, props) || this;
        _this.isComponentUnmount = false;
        _this.state = {
            event: null,
        };
        return _this;
    }
    EventPreview.prototype.componentDidMount = function () {
        this.loadEvent();
    };
    EventPreview.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.eventId !== this.props.eventId) {
            this.setState({ event: null });
            this.loadEvent();
        }
    };
    EventPreview.prototype.componentWillUnmount = function () {
        this.isComponentUnmount = true;
    };
    EventPreview.prototype.loadEvent = function () {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var event;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sdk.Events.retrieve(this.props.eventId)];
                    case 1:
                        event = _a.sent();
                        if (!this.isComponentUnmount) {
                            this.setState({ event: event });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EventPreview.prototype.render = function () {
        var _a = this.props, hideLoadingSpinner = _a.hideLoadingSpinner, onShowDetails = _a.onShowDetails, hideProperties = _a.hideProperties, strings = _a.strings, styles = _a.styles;
        var event = this.state.event;
        if (!event) {
            return hideLoadingSpinner ? null : React__default.createElement(LoadingSpinner, null);
        }
        return (React__default.createElement(EventPreviewView, { styles: styles, event: event, onShowDetails: onShowDetails, hideProperties: hideProperties, strings: strings }));
    };
    return EventPreview;
}(React__default.Component));
var templateObject_1$1;

exports.EventPreview = EventPreview;
