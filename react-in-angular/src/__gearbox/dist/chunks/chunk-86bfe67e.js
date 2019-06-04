'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-1c8e2aef.js');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var sdk = require('@cognite/sdk');
var __chunk_4 = require('./chunk-2980b17c.js');
var moment = _interopDefault(require('moment-timezone'));
var Radio = _interopDefault(require('antd/lib/radio'));
var index = require('../components/TimeseriesChart/index.js');
var Collapse = _interopDefault(require('antd/lib/collapse'));
var __chunk_9 = require('./chunk-b95c521d.js');

var TimeseriesMetaInfo = function (_a) {
    var metaInfo = _a.metaInfo;
    var metaList = Object.keys(metaInfo).map(function (key) { return ({
        property: key,
        value: metaInfo[key],
    }); });
    return (React__default.createElement(CollapseContainer, null,
        React__default.createElement(PanelWrapper, { header: 'Metadata', key: 'timeseries-metadata' },
            React__default.createElement(Table, null, metaList.map(function (entry) { return (React__default.createElement(TableRow, { key: entry.property },
                React__default.createElement(TableProperty, null, entry.property),
                React__default.createElement(TableValue, null, entry.value))); })))));
};
var Table = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  display: table;\n"], ["\n  display: table;\n"])));
var TableRow = styled__default.div(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  display: table-row;\n"], ["\n  display: table-row;\n"])));
var TableProperty = styled__default.div(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  display: table-cell;\n  font-weight: bold;\n  min-width: 200px;\n"], ["\n  display: table-cell;\n  font-weight: bold;\n  min-width: 200px;\n"])));
var TableValue = styled__default.div(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  display: table-cell;\n  padding-left: 10px;\n"], ["\n  display: table-cell;\n  padding-left: 10px;\n"])));
var PanelWrapper = styled__default(Collapse.Panel)(templateObject_5 || (templateObject_5 = __chunk_1.__makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var CollapseContainer = styled__default(Collapse)(templateObject_6 || (templateObject_6 = __chunk_1.__makeTemplateObject(["\n  && {\n    margin-top: 14px;\n    min-width: 600px;\n    max-width: 800px;\n  }\n"], ["\n  && {\n    margin-top: 14px;\n    min-width: 600px;\n    max-width: 800px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var TimeseriesValue = /** @class */ (function (_super) {
    __chunk_1.__extends(TimeseriesValue, _super);
    function TimeseriesValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isComponentUnmounted = false;
        _this.state = {
            value: null,
            lastTimestamp: null,
        };
        _this.interval = null;
        _this.getLatestDatapoint = function () { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
            var datapoint, error_1;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __chunk_4.connectPromiseToUnmountState(this, sdk.Datapoints.retrieveLatest(this.props.timeseriesName))];
                    case 1:
                        datapoint = _a.sent();
                        if (!datapoint) {
                            this.setState({
                                value: null,
                                lastTimestamp: null,
                            });
                            return [2 /*return*/];
                        }
                        if (this.state.lastTimestamp !== null &&
                            datapoint.timestamp < this.state.lastTimestamp) {
                            return [2 /*return*/]; // old data point - skip it
                        }
                        this.setState({
                            value: typeof datapoint.value === 'number'
                                ? datapoint.value.toFixed(3)
                                : datapoint.value || null,
                            lastTimestamp: datapoint.timestamp,
                        });
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
        return _this;
    }
    TimeseriesValue.prototype.componentDidMount = function () {
        this.getLatestDatapoint();
        if (this.props.liveUpdate) {
            this.interval = setInterval(this.getLatestDatapoint, this.props.updatePeriodMillis);
        }
    };
    TimeseriesValue.prototype.componentWillUnmount = function () {
        this.isComponentUnmounted = true;
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    TimeseriesValue.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeseriesName !== this.props.timeseriesName) {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.getLatestDatapoint();
            this.interval = setInterval(this.getLatestDatapoint, this.props.updatePeriodMillis);
        }
    };
    TimeseriesValue.prototype.render = function () {
        return (React__default.createElement(Container, null,
            React__default.createElement(Value, null,
                this.state.value,
                this.props.unit && React__default.createElement("sup", null, this.props.unit)),
            React__default.createElement(Description, null, this.props.timeseriesDescription)));
    };
    TimeseriesValue.defaultProps = {
        liveUpdate: true,
        timeseriesDescription: '',
        updatePeriodMillis: 5000,
    };
    return TimeseriesValue;
}(React__default.PureComponent));
var Container = styled__default.div(templateObject_1$1 || (templateObject_1$1 = __chunk_1.__makeTemplateObject(["\n  max-width: 230px;\n  text-align: left;\n"], ["\n  max-width: 230px;\n  text-align: left;\n"])));
var Value = styled__default.div(templateObject_2$1 || (templateObject_2$1 = __chunk_1.__makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n"], ["\n  font-size: 14px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
Value.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var Description = styled__default.div(templateObject_3$1 || (templateObject_3$1 = __chunk_1.__makeTemplateObject(["\n  font-size: 12px;\n  color: ", ";\n"], ["\n  font-size: 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColorSecondary;
});
Description.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var templateObject_1$1, templateObject_2$1, templateObject_3$1;

var timeScales = {
    lastYear: {
        unit: 'year',
        number: 1,
    },
    lastMonth: {
        unit: 'month',
        number: 1,
    },
    lastWeek: {
        unit: 'week',
        number: 1,
    },
    lastDay: {
        unit: 'day',
        number: 1,
    },
    lastHour: {
        unit: 'hour',
        number: 1,
    },
    last15minutes: {
        unit: 'minutes',
        number: 15,
    },
};
var TimeseriesChartMetaPure = /** @class */ (function (_super) {
    __chunk_1.__extends(TimeseriesChartMetaPure, _super);
    function TimeseriesChartMetaPure(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePeriodChange = function (e) {
            var key = e.target.value;
            _this.setState({
                basePeriod: _this.getBasePeriod(key),
                timePeriod: key,
            });
        };
        _this.state = {
            timePeriod: props.defaultBasePeriod ? '-' : props.defaultTimePeriod,
            basePeriod: props.defaultBasePeriod || _this.getBasePeriod(props.defaultTimePeriod),
        };
        return _this;
    }
    TimeseriesChartMetaPure.prototype.getBasePeriod = function (period) {
        var _a = timeScales[period], substructNumber = _a.number, unit = _a.unit;
        return {
            // @ts-ignore
            startTime: +moment().subtract(substructNumber, unit),
            endTime: +moment(),
        };
    };
    TimeseriesChartMetaPure.prototype.render = function () {
        var _a = this.props, liveUpdate = _a.liveUpdate, showDescription = _a.showDescription, showPeriods = _a.showPeriods, showChart = _a.showChart, showDatapoint = _a.showDatapoint, showMetadata = _a.showMetadata, timeseries = _a.timeseries, updateIntervalMillis = _a.updateIntervalMillis;
        var _b = this.state, basePeriod = _b.basePeriod, timePeriod = _b.timePeriod;
        if (!timeseries) {
            return null;
        }
        return (React__default.createElement(Container$1, null,
            showDescription && React__default.createElement(Description$1, null, timeseries.description),
            showPeriods && (React__default.createElement(CenterWrapper, null,
                React__default.createElement(Radio.Group, { value: timePeriod, onChange: this.handlePeriodChange }, Object.keys(timeScales).map(function (key) { return (React__default.createElement(Radio.Button, { key: key, value: key }, timeScales[key].number + " " + timeScales[key].unit)); })))),
            showChart && (React__default.createElement(index.TimeseriesChart, { timeseriesIds: [timeseries.id], liveUpdate: liveUpdate, updateIntervalMillis: updateIntervalMillis, startTime: basePeriod.startTime, endTime: basePeriod.endTime })),
            showDatapoint && (React__default.createElement(CenterWrapper, null,
                React__default.createElement(TimeseriesValue, { timeseriesName: timeseries.name, timeseriesDescription: timeseries.description, liveUpdate: liveUpdate, updatePeriodMillis: updateIntervalMillis, unit: timeseries.unit }))),
            showMetadata && (React__default.createElement(CenterWrapper, null,
                React__default.createElement(TimeseriesMetaInfo, { metaInfo: timeseries.metadata || {} })))));
    };
    TimeseriesChartMetaPure.defaultProps = {
        liveUpdate: true,
        updateIntervalMillis: 5000,
        defaultTimePeriod: 'lastHour',
        showDescription: true,
        showPeriods: true,
        showChart: true,
        showDatapoint: true,
        showMetadata: true,
    };
    return TimeseriesChartMetaPure;
}(React__default.PureComponent));
var Container$1 = styled__default.div(templateObject_1$2 || (templateObject_1$2 = __chunk_1.__makeTemplateObject(["\n  display: block;\n  width: 100%;\n"], ["\n  display: block;\n  width: 100%;\n"])));
var Description$1 = styled__default.p(templateObject_2$2 || (templateObject_2$2 = __chunk_1.__makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var CenterWrapper = styled__default.div(templateObject_3$2 || (templateObject_3$2 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"], ["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2;

exports.TimeseriesChartMetaPure = TimeseriesChartMetaPure;
