'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var sdk = require('@cognite/sdk');
var __chunk_4 = require('../../chunks/chunk-2980b17c.js');
require('moment-timezone');
require('antd/lib/radio');
require('../TimeseriesChart/index.js');
require('@cognite/griff-react');
require('../../chunks/chunk-cefd798e.js');
require('antd/lib/collapse');
var __chunk_8 = require('../../chunks/chunk-86bfe67e.js');
require('../../chunks/chunk-b95c521d.js');
var __chunk_10 = require('../../chunks/chunk-4f0fd587.js');

var withTimeseries = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        __chunk_1.__extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.isComponentUnmounted = false;
            _this.state = {
                isLoading: true,
                timeseries: null,
                timeseriesId: props.timeseriesId,
            };
            return _this;
        }
        class_1.getDerivedStateFromProps = function (props, state) {
            if (props.timeseriesId !== state.timeseriesId) {
                return {
                    isLoading: true,
                    timeseries: null,
                    timeseriesId: props.timeseriesId,
                };
            }
            return null;
        };
        class_1.prototype.componentDidMount = function () {
            this.loadTimeseries();
        };
        class_1.prototype.componentWillUnmount = function () {
            this.isComponentUnmounted = true;
        };
        class_1.prototype.componentDidUpdate = function (prevProps) {
            if (prevProps.timeseriesId !== this.props.timeseriesId) {
                this.loadTimeseries();
            }
        };
        class_1.prototype.loadTimeseries = function () {
            return __chunk_1.__awaiter(this, void 0, void 0, function () {
                var timeseries, error_1;
                return __chunk_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, __chunk_4.connectPromiseToUnmountState(this, sdk.TimeSeries.retrieve(this.props.timeseriesId, true))];
                        case 1:
                            timeseries = _a.sent();
                            this.setState({
                                isLoading: false,
                                timeseries: timeseries,
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
            });
        };
        class_1.prototype.render = function () {
            var _a = this.state, isLoading = _a.isLoading, timeseries = _a.timeseries;
            if (isLoading) {
                return (React__default.createElement(SpinnerContainer, null,
                    React__default.createElement(__chunk_10.LoadingOverlay, { isLoading: true, backgroundColor: 'none' })));
            }
            if (timeseries) {
                return (React__default.createElement(WrapperComponent, __chunk_1.__assign({}, this.props, { timeseries: timeseries })));
            }
            return null;
        };
        return class_1;
    }(React__default.Component));
};
var SpinnerContainer = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  position: relative;\n  height: 300px;\n"], ["\n  position: relative;\n  height: 300px;\n"])));
var templateObject_1;

var TimeseriesChartMeta = withTimeseries(__chunk_8.TimeseriesChartMetaPure);

exports.TimeseriesChartMeta = TimeseriesChartMeta;
