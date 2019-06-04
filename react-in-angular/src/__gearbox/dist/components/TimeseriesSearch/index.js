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
var __chunk_7 = require('../../chunks/chunk-cefd798e.js');
var lodash = require('lodash');
var __chunk_11 = require('../../chunks/chunk-08a814fd.js');
require('uuid');

var Container = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  background: white;\n  border: 'none';\n  border-radius: 3px;\n  display: inline-flex;\n  justify-content: space-between;\n  padding: 8px;\n  margin-right: 'inherit';\n  cursor: pointer;\n  margin-bottom: 4px;\n  width: 100%;\n  transition: 0.3s all;\n\n  &:hover {\n    background-color: #eeeeee;\n  }\n\n  &.active {\n    background-color: #f2f2f2;\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  label {\n    margin: auto 16px auto 32px;\n  }\n"], ["\n  background: white;\n  border: 'none';\n  border-radius: 3px;\n  display: inline-flex;\n  justify-content: space-between;\n  padding: 8px;\n  margin-right: 'inherit';\n  cursor: pointer;\n  margin-bottom: 4px;\n  width: 100%;\n  transition: 0.3s all;\n\n  &:hover {\n    background-color: #eeeeee;\n  }\n\n  &.active {\n    background-color: #f2f2f2;\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  label {\n    margin: auto 16px auto 32px;\n  }\n"])));
var defaultProps = {
    checkable: true,
    onContainerClick: null,
    disabled: false,
    checked: false,
    className: 'detail-checkbox',
};
var DetailCheckbox = function (_a) {
    var checked = _a.checked, description = _a.description, disabled = _a.disabled, onContainerClick = _a.onContainerClick, title = _a.title, className = _a.className, checkable = _a.checkable;
    return (React__default.createElement(Container, { className: className, onClick: disabled ? null : onContainerClick },
        React__default.createElement("div", { style: { wordBreak: 'break-all' } },
            React__default.createElement("span", { style: {
                    fontSize: '14px',
                } }, title),
            React__default.createElement("br", null),
            React__default.createElement("span", { style: {
                    fontSize: '12px',
                    opacity: 0.6,
                } }, description)),
        checkable && (React__default.createElement(antd.Checkbox, { checked: checked, disabled: disabled, onClick: function (e) { return e.preventDefault(); } }))));
};
DetailCheckbox.defaultProps = defaultProps;
var templateObject_1;

var Wrapper = styled__default.div(templateObject_1$1 || (templateObject_1$1 = __chunk_1.__makeTemplateObject(["\n  flex-directoin: row;\n  margin-bottom: 8px;\n"], ["\n  flex-directoin: row;\n  margin-bottom: 8px;\n"])));
var SelectedItems = /** @class */ (function (_super) {
    __chunk_1.__extends(SelectedItems, _super);
    function SelectedItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedItems.prototype.render = function () {
        var _a = this.props, selectedItems = _a.selectedItems, onItemClose = _a.onItemClose;
        return (React__default.createElement(Wrapper, null,
            React__default.createElement("span", { style: { marginRight: '8px' } },
                React__default.createElement("b", null, "Selected:")),
            selectedItems &&
                selectedItems.map(function (item) { return (React__default.createElement(antd.Tag, { key: item.id, onClose: function () { return onItemClose(item); }, closable: true, color: __chunk_7.getColorByString(item.id.toString()) }, item.name || '')); })));
    };
    SelectedItems.defaultProps = {
        selectedItems: [],
        onItemClose: null,
    };
    return SelectedItems;
}(React__default.Component));
var templateObject_1$1;

var Wrapper$1 = styled__default.div(templateObject_1$2 || (templateObject_1$2 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var TagList = styled__default.div(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n"])));
var CenteredSpin = styled__default(antd.Spin)(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  &.ant-spin-spinning {\n    min-height: 25px;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  &.ant-spin-spinning {\n    min-height: 25px;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
var ButtonRow = styled__default.div(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  margin-top: 5px;\n"], ["\n  margin-top: 5px;\n"])));
var SelectNoneButton = styled__default(function (props) { return (React__default.createElement(antd.Button, __chunk_1.__assign({}, props))); })(templateObject_5 || (templateObject_5 = __chunk_1.__makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
var defaultStrings = {
    searchPlaceholder: 'Search for timeseries',
    selectAll: 'Select all',
    selectNone: 'Select none',
    rootAssetSelectAll: __chunk_11.defaultStrings.all,
    rootAssetSelectLoading: __chunk_11.defaultStrings.loading,
};
var TimeseriesSearch = /** @class */ (function (_super) {
    __chunk_1.__extends(TimeseriesSearch, _super);
    function TimeseriesSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectAsset = function (assetId) {
            _this.setState({ assetId: assetId, searchResults: [] });
        };
        _this.onTimeSerieClicked = function (timeseries) {
            var _a = _this.props, allowStrings = _a.allowStrings, single = _a.single, onTimeserieSelectionChange = _a.onTimeserieSelectionChange;
            if (!allowStrings && timeseries.isString) {
                return;
            }
            var newTimeseries = [];
            if (single) {
                newTimeseries = [timeseries];
            }
            else if (!_this.isChecked(timeseries.id)) {
                newTimeseries = __chunk_1.__spread(_this.state.selectedTimeseries, [timeseries]);
            }
            else {
                newTimeseries = __chunk_1.__spread(_this.state.selectedTimeseries).filter(function (existing) { return existing.id !== timeseries.id; });
            }
            _this.setState({ selectedTimeseries: newTimeseries });
            onTimeserieSelectionChange(newTimeseries.map(function (x) { return x.id; }), timeseries);
        };
        _this.fetchTimeseries = function (apiQuery) {
            var query = apiQuery.query, assetSubtrees = apiQuery.assetSubtrees;
            var lastFetchId = _this.state.lastFetchId;
            lastFetchId += 1;
            var fetchId = lastFetchId;
            _this.setState({ fetching: true, lastFetchId: lastFetchId });
            if (!query) {
                _this.setState({
                    fetching: false,
                    searchResults: [],
                });
                return;
            }
            sdk.TimeSeries.search({
                assetSubtrees: assetSubtrees == null ? undefined : assetSubtrees,
                query: query,
                limit: 100,
            })
                .then(function (data) {
                if (fetchId !== _this.state.lastFetchId) {
                    // for fetch callback order
                    return;
                }
                var items = data.items;
                if (_this.props.filterRule) {
                    var resultsFiltered = items.filter(_this.props.filterRule);
                    _this.setState({
                        searchResults: resultsFiltered,
                        fetching: false,
                    });
                }
                else {
                    _this.setState({
                        searchResults: items,
                        fetching: false,
                    });
                }
            })
                .catch(function (error) {
                _this.setState({
                    fetching: false,
                });
                var onError = _this.props.onError;
                if (onError) {
                    onError(error);
                }
            });
        };
        _this.isChecked = function (id) {
            return _this.state.selectedTimeseries.findIndex(function (timeseries) { return timeseries.id === id; }) !== -1;
        };
        _this.onItemClose = function (item) {
            var selectedTimeseries = _this.state.selectedTimeseries;
            var closedTimeseries = selectedTimeseries.find(function (timeseries) { return timeseries.id === item.id; });
            if (closedTimeseries === undefined) {
                throw Error('Closing nonexisting timeseries should not be possible');
            }
            var newTimeseries = selectedTimeseries.filter(function (existing) { return existing.id !== item.id; });
            _this.setState({ selectedTimeseries: newTimeseries });
            if (_this.props.onTimeserieSelectionChange) {
                _this.props.onTimeserieSelectionChange(newTimeseries.map(function (x) { return x.id; }), closedTimeseries);
            }
        };
        _this.onKeyDown = function (e) {
            var _a = _this.state, cursor = _a.cursor, searchResults = _a.searchResults;
            if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
            if (!searchResults || searchResults.length === 0) {
                return;
            }
            // Arrow up
            if (e.keyCode === 38) {
                if (cursor === undefined || cursor === 0) {
                    _this.setState({ cursor: searchResults.length - 1 });
                }
                else {
                    _this.setState({ cursor: cursor - 1 });
                }
                return;
            }
            // Arrow down
            if (e.keyCode === 40) {
                if (cursor === undefined || cursor === searchResults.length - 1) {
                    _this.setState({ cursor: 0 });
                }
                else {
                    _this.setState({ cursor: cursor + 1 });
                }
                return;
            }
            // Enter
            if (e.keyCode === 13 && cursor !== undefined) {
                var item = searchResults[cursor];
                _this.onTimeSerieClicked(item);
            }
        };
        _this.onSelectAll = function () {
            var _a = _this.props, allowStrings = _a.allowStrings, onTimeserieSelectionChange = _a.onTimeserieSelectionChange;
            var _b = _this.state, searchResults = _b.searchResults, selectedTimeseries = _b.selectedTimeseries;
            var newTimeseries = searchResults.filter(function (result) {
                return !result.isString || (allowStrings && result.isString);
            });
            _this.setState({
                selectedTimeseries: __chunk_1.__spread(new Set(__chunk_1.__spread(selectedTimeseries, newTimeseries))),
            });
            onTimeserieSelectionChange(newTimeseries.map(function (x) { return x.id; }), null);
        };
        _this.onSelectNone = function () {
            var onTimeserieSelectionChange = _this.props.onTimeserieSelectionChange;
            _this.setState({ selectedTimeseries: [] });
            onTimeserieSelectionChange([], null);
        };
        _this.isAllSelected = function () {
            var searchResults = _this.state.searchResults;
            var allowStrings = _this.props.allowStrings;
            return searchResults.every(function (series) {
                var isAllowed = allowStrings || !series.isString;
                return !isAllowed || _this.isChecked(series.id);
            });
        };
        _this.state = {
            assetId: props.rootAsset || undefined,
            fetching: false,
            searchResults: [],
            selectedTimeseries: [],
            lastFetchId: 0,
        };
        _this.fetchTimeseries = lodash.debounce(_this.fetchTimeseries, 200, {
            leading: false,
            trailing: true,
        });
        return _this;
    }
    TimeseriesSearch.getDerivedStateFromProps = function (props, state) {
        if (props.rootAsset !== null && props.rootAsset !== state.assetId) {
            return { assetId: props.rootAsset };
        }
        return null;
    };
    TimeseriesSearch.prototype.componentDidMount = function () {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var selectedTimeseries, timeseries;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTimeseries = this.props.selectedTimeseries;
                        if (!(selectedTimeseries && selectedTimeseries.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sdk.TimeSeries.retrieveMultiple(selectedTimeseries)];
                    case 1:
                        timeseries = _a.sent();
                        this.setState({ selectedTimeseries: timeseries });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TimeseriesSearch.prototype.render = function () {
        var _this = this;
        var _a = this.props, allowStrings = _a.allowStrings, single = _a.single, hideSelected = _a.hideSelected, rootAssetSelect = _a.rootAssetSelect, styles = _a.styles, strings = _a.strings;
        var _b = this.state, assetId = _b.assetId, fetching = _b.fetching, searchResults = _b.searchResults, selectedTimeseries = _b.selectedTimeseries, cursor = _b.cursor;
        var lang = __chunk_1.__assign({}, defaultStrings, strings);
        return (React__default.createElement(Wrapper$1, null,
            !hideSelected && (React__default.createElement(SelectedItems, { selectedItems: selectedTimeseries.map(function (t) { return ({
                    id: t.id,
                    name: t.name,
                }); }), onItemClose: this.onItemClose })),
            React__default.createElement(__chunk_11.Search, { rootAssetSelect: rootAssetSelect, onAssetSelected: this.onSelectAsset, assetId: assetId || 0, onSearch: this.fetchTimeseries, strings: {
                    searchPlaceholder: lang.searchPlaceholder,
                    rootAssetSelectAll: lang.rootAssetSelectAll,
                    rootAssetSelectLoading: lang.rootAssetSelectLoading,
                }, onKeyDown: this.onKeyDown }),
            searchResults.length > 0 && !single ? (React__default.createElement(ButtonRow, { style: styles && styles.buttonRow },
                React__default.createElement(antd.Button, { htmlType: "button", onClick: this.onSelectAll, disabled: this.isAllSelected(), style: styles && styles.selectAllButton }, lang.selectAll),
                React__default.createElement(SelectNoneButton, { htmlType: "button", onClick: this.onSelectNone, disabled: selectedTimeseries.length === 0, style: styles && styles.selectNoneButton }, lang.selectNone))) : null,
            React__default.createElement(TagList, { style: styles && styles.list },
                fetching ? React__default.createElement(CenteredSpin, null) : null,
                searchResults.map(function (timeseries, index) { return (React__default.createElement(DetailCheckbox, { className: "tag-search-result result-" + timeseries.id + " " + (index === cursor ? 'active' : ''), key: "detail-checkbox--" + timeseries.id, title: timeseries.name || timeseries.id.toString(), description: timeseries.description || timeseries.name || 'No description', checkable: !single, checked: _this.isChecked(timeseries.id), onContainerClick: function () { return _this.onTimeSerieClicked(timeseries); }, disabled: !allowStrings && !!timeseries.isString })); }))));
    };
    TimeseriesSearch.defaultProps = {
        selectedTimeseries: [],
        strings: {},
        filterRule: undefined,
        hideSelected: false,
        allowStrings: false,
        rootAssetSelect: false,
        single: false,
        onError: undefined,
        rootAsset: undefined,
    };
    return TimeseriesSearch;
}(React__default.Component));
var templateObject_1$2, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

exports.defaultStrings = defaultStrings;
exports.TimeseriesSearch = TimeseriesSearch;
