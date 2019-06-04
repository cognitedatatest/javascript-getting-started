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
var griffReact = require('@cognite/griff-react');
var __chunk_7 = require('../../chunks/chunk-cefd798e.js');

var _this = undefined;
var SERIES_GETTERS = new Map();
var timeseries = {
    results: new Map(),
    requests: new Map(),
};
var yAccessor = function (d) {
    if (d.value !== undefined) {
        return +d.value;
    }
    if (d.stepInterpolation !== undefined) {
        return +d.stepInterpolation;
    }
    if (d.average !== undefined) {
        return +d.average;
    }
    // We can get here if we ask for a stepInterpolation
    // and there's no points in the range [0, t1]
    // where the domain asked for is [t0, t1]
    console.warn('No obvious y accessor for', d);
    return 0;
};
var y0Accessor = function (data) {
    return data.min ? data.min : yAccessor(data);
};
var y1Accessor = function (data) {
    return data.max ? data.max : yAccessor(data);
};
var calculateGranularity = function (domain, pps) {
    var diff = domain[1] - domain[0];
    for (var i = 1; i <= 60; i += 1) {
        var points = diff / (1000 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "s";
        }
    }
    for (var i = 1; i <= 60; i += 1) {
        var points = diff / (1000 * 60 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "m";
        }
    }
    for (var i = 1; i < 24; i += 1) {
        var points = diff / (1000 * 60 * 60 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "h";
        }
    }
    for (var i = 1; i < 100; i += 1) {
        var points = diff / (1000 * 60 * 60 * 24 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "day";
        }
    }
    return 'day';
};
var getTimeSeries = function (id) {
    if (timeseries.requests.has(id)) {
        // @ts-ignore - We're checking for undefined with the "has" check.
        return timeseries.requests.get(id);
    }
    if (timeseries.results.has(id)) {
        // @ts-ignore - We're checking for undefined with the "has" check.
        return timeseries.results.get(id);
    }
    var promise = sdk.TimeSeries.retrieve(id).then(function (timeserie) {
        timeseries.results = timeseries.results.set(id, Promise.resolve(timeserie));
        timeseries.requests.delete(id);
        return timeserie;
    });
    timeseries.requests = timeseries.requests.set(id, promise);
    return promise;
};
var getRawDataPoints = function (_a) {
    var id = _a.id, step = _a.step, start = _a.start, end = _a.end, limit = _a.limit;
    return sdk.Datapoints.retrieve(id, { start: start, end: end, limit: limit }).then(function (data) {
        return data.datapoints.map(function (d) {
            var _a;
            return (_a = {},
                _a["" + (step ? 'stepInterpolation' : 'average')] = d.value,
                _a.timestamp = d.timestamp,
                _a);
        });
    });
};
var mergeInsert = function (base, toInsert, xAccessor, subDomain) {
    if (toInsert.length === 0) {
        return base;
    }
    // Remove the points from base within the subdoconstn
    var strippedBase = base.filter(function (point) { return xAccessor(point) < subDomain[0] || xAccessor(point) > subDomain[1]; });
    return __chunk_1.__spread(strippedBase, toInsert).sort(function (a, b) { return xAccessor(a) - xAccessor(b); });
};
var requestsInFlight = {};
var cogniteloader = function (_a) {
    var id = _a.id, timeDomain = _a.timeDomain, timeSubDomain = _a.timeSubDomain, pointsPerSeries = _a.pointsPerSeries, oldSeries = _a.oldSeries, reason = _a.reason;
    return __chunk_1.__awaiter(_this, void 0, void 0, function () {
        var baseDomain, subDomain, fetchDomain, granularity, startTime, xAccessor, oldData, step, requestPromise, newDatapoints, seriesInfo;
        var _this = this;
        return __chunk_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    baseDomain = timeDomain;
                    subDomain = timeSubDomain;
                    fetchDomain = (reason === 'MOUNTED' ? baseDomain : subDomain).map(Math.round);
                    granularity = calculateGranularity(fetchDomain, pointsPerSeries);
                    if (!(reason === 'INTERVAL')) return [3 /*break*/, 2];
                    if (requestsInFlight[id]) {
                        return [2 /*return*/, oldSeries];
                    }
                    requestsInFlight[id] = true;
                    startTime = baseDomain[0];
                    xAccessor = oldSeries.xAccessor, oldData = oldSeries.data;
                    if (oldData && oldData.length > 0) {
                        startTime = xAccessor(oldData[oldData.length - 1]) + 1;
                    }
                    step = oldSeries.step;
                    requestPromise = oldSeries.drawPoints
                        ? getRawDataPoints({
                            id: id,
                            start: startTime,
                            end: Date.now(),
                            step: step,
                        })
                        : sdk.Datapoints.retrieve(id, {
                            start: startTime,
                            end: Date.now(),
                            granularity: granularity,
                            aggregates: "min,max," + (step ? 'stepInterpolation' : 'average'),
                        }).then(function (data) { return data.datapoints; });
                    return [4 /*yield*/, requestPromise];
                case 1:
                    newDatapoints = _b.sent();
                    requestsInFlight[id] = false;
                    if (oldData) {
                        return [2 /*return*/, __chunk_1.__assign({}, oldSeries, { data: __chunk_1.__spread(oldData, newDatapoints) })];
                    }
                    return [2 /*return*/, __chunk_1.__assign({}, oldSeries, { data: newDatapoints })];
                case 2:
                    seriesInfo = SERIES_GETTERS.get(id) || {
                        firstSeries: [],
                        subDomain: subDomain,
                        granularity: granularity,
                    };
                    if (fetchDomain[1] - fetchDomain[0] < 100) {
                        // Zooming REALLY far in (1 ms end to end)
                        return [2 /*return*/, oldSeries];
                    }
                    return [2 /*return*/, getTimeSeries(id).then(function (timeseriesResponse) {
                            var step = timeseriesResponse.isStep;
                            return (sdk.Datapoints.retrieve(id, {
                                granularity: granularity,
                                aggregates: (step ? 'step' : 'avg') + ",count,min,max",
                                start: fetchDomain[0],
                                end: fetchDomain[1],
                                limit: pointsPerSeries,
                            })
                                .then(function (items) { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
                                var points, result, data;
                                return __chunk_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            points = items.datapoints;
                                            if (!(points.reduce(function (p, c) { return p + (c.count || 0); }, 0) <
                                                pointsPerSeries / 2)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, getRawDataPoints({
                                                    id: id,
                                                    step: step,
                                                    start: fetchDomain[0],
                                                    end: fetchDomain[1],
                                                    limit: pointsPerSeries,
                                                })];
                                        case 1:
                                            result = _a.sent();
                                            data = result;
                                            if (step && points.length) {
                                                // Use the last-known value from step-interpolation to create a fake point at the left-boundary
                                                if (data.length && points[0].timestamp < data[0].timestamp) {
                                                    data = __chunk_1.__spread([points[0]], data);
                                                }
                                                else if (!data.length) {
                                                    data = [points[0]];
                                                }
                                            }
                                            return [2 /*return*/, {
                                                    data: data,
                                                    drawPoints: true,
                                                    step: !!step,
                                                }];
                                        case 2: return [2 /*return*/, { data: points, step: !!step }];
                                    }
                                });
                            }); })
                                .then(function (newSeries) {
                                var firstSeries = seriesInfo.firstSeries;
                                var xAccessor = oldSeries.xAccessor;
                                if (reason === 'UPDATE_SUBDOMAIN') {
                                    var val = SERIES_GETTERS.get(id);
                                    SERIES_GETTERS.set(id, __chunk_1.__assign({}, val, { firstSeries: val ? val.firstSeries : [], subDomain: subDomain,
                                        granularity: granularity }));
                                    var data = mergeInsert(firstSeries, newSeries.data, xAccessor, subDomain);
                                    return __chunk_1.__assign({}, newSeries, { data: data });
                                }
                                return newSeries;
                            })
                                .then(function (newSeries) {
                                if (reason === 'MOUNTED') {
                                    var val = SERIES_GETTERS.get(id);
                                    SERIES_GETTERS.set(id, __chunk_1.__assign({}, val, { firstSeries: newSeries.data, subDomain: subDomain,
                                        granularity: granularity }));
                                }
                                return __chunk_1.__assign({}, newSeries, { yAccessor: yAccessor });
                            })
                                // Do not crash the app in case of error, just return no data
                                .catch(function () {
                                return { data: [], step: step };
                            }));
                        })];
            }
        });
    });
};

var countDecimals = function (num) {
    if (!Number.isNaN(num) && Math.floor(num) !== num) {
        return num.toString().split('.')[1].length || 0;
    }
    return 0;
};
var findMaxDecimals = function (array) {
    return array.reduce(function (max, current) { return Math.max(max, countDecimals(current)); }, 0);
};
var decimalTickFormatter = function (tick, ticks) {
    return tick.toFixed(findMaxDecimals(ticks));
};

var Wrapper = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  height: 500px;\n  width: 100%;\n"], ["\n  height: 500px;\n  width: 100%;\n"])));
// Don't allow updating faster than every 1000ms.
var MINIMUM_UPDATE_FREQUENCY_MILLIS = 1000;
var TimeseriesChart = /** @class */ (function (_super) {
    __chunk_1.__extends(TimeseriesChart, _super);
    function TimeseriesChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loaded: false,
        };
        _this.onFetchData = function () {
            if (!_this.state.loaded) {
                _this.setState({ loaded: true });
            }
        };
        return _this;
    }
    TimeseriesChart.prototype.render = function () {
        var _a = this.props, startTime = _a.startTime, endTime = _a.endTime, pointsPerSeries = _a.pointsPerSeries, 
        // @ts-ignore
        timeseriesIds = _a.timeseriesIds, 
        // @ts-ignore
        series = _a.series, collections = _a.collections, updateIntervalMillis = _a.updateIntervalMillis, zoomable = _a.zoomable, crosshair = _a.crosshair, contextChart = _a.contextChart, xAxisHeight = _a.xAxisHeight, timeseriesColors = _a.timeseriesColors, yAxisDisplayMode = _a.yAxisDisplayMode, styles = _a.styles, liveUpdate = _a.liveUpdate, yAxisPlacement = _a.yAxisPlacement, hiddenSeries = _a.hiddenSeries, annotations = _a.annotations, ruler = _a.ruler, height = _a.height, width = _a.width, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onBlur = _a.onBlur, onFetchDataError = _a.onFetchDataError;
        var loaded = this.state.loaded;
        var griffSeries = series
            ? series.map(function (s) { return (__chunk_1.__assign({}, s, { id: s.id, color: s.color ||
                    timeseriesColors[s.id] ||
                    __chunk_7.getColorByString(s.id.toString()), yAxisDisplayMode: s.yAxisDisplayMode || griffReact.AxisDisplayMode[yAxisDisplayMode], hidden: s.hidden || hiddenSeries[s.id], yAccessor: s.yAccessor || yAccessor, y0Accessor: s.y0Accessor || y0Accessor, y1Accessor: s.y1Accessor || y1Accessor })); })
            : timeseriesIds.map(function (id) { return ({
                id: id,
                color: timeseriesColors[id] || __chunk_7.getColorByString(id.toString()),
                yAxisDisplayMode: griffReact.AxisDisplayMode[yAxisDisplayMode],
                hidden: hiddenSeries[id],
                yAccessor: yAccessor,
                y0Accessor: y0Accessor,
                y1Accessor: y1Accessor,
            }); });
        return (griffSeries.length !== 0 && (React__default.createElement(antd.Spin, { spinning: !loaded },
            React__default.createElement(Wrapper, { style: styles && styles.container },
                React__default.createElement(griffReact.DataProvider, { defaultLoader: cogniteloader, onFetchData: this.onFetchData, pointsPerSeries: pointsPerSeries, series: griffSeries, collections: __chunk_1.__spread(new Set(Object.values(collections))).map(function (unit) { return ({
                        id: unit,
                        color: __chunk_7.getColorByString(unit.toString()),
                        yAxisDisplayMode: griffReact.AxisPlacement[yAxisPlacement],
                    }); }), timeDomain: [+startTime, +endTime], onFetchDataError: onFetchDataError, updateInterval: liveUpdate
                        ? Math.max(updateIntervalMillis, MINIMUM_UPDATE_FREQUENCY_MILLIS)
                        : 0 },
                    React__default.createElement(griffReact.LineChart, { zoomable: zoomable, crosshair: crosshair, annotations: annotations, contextChart: {
                            visible: contextChart,
                            height: 100,
                            isDefault: true,
                        }, height: height, width: width, ruler: ruler, yAxisFormatter: decimalTickFormatter, yAxisPlacement: griffReact.AxisPlacement[yAxisPlacement], xAxisHeight: xAxisHeight, onMouseMove: onMouseMove, onMouseOut: onMouseOut, onBlur: onBlur }))))));
    };
    TimeseriesChart.defaultProps = {
        startTime: Date.now() - 60 * 60 * 1000,
        endTime: Date.now(),
        pointsPerSeries: 600,
        updateIntervalMillis: 5000,
        zoomable: false,
        contextChart: false,
        crosshair: false,
        yAxisDisplayMode: 'ALL',
        liveUpdate: false,
        yAxisPlacement: 'RIGHT',
        height: undefined,
        width: undefined,
        timeseriesColors: {},
        hiddenSeries: {},
        annotations: [],
        xAxisHeight: 50,
        collections: {},
        ruler: undefined,
        onFetchDataError: function (e) {
            throw e;
        },
    };
    return TimeseriesChart;
}(React__default.Component));
var templateObject_1;

exports.TimeseriesChart = TimeseriesChart;
