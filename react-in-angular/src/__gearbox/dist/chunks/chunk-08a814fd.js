'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-1c8e2aef.js');
var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var sdk = require('@cognite/sdk');
var lodash = require('lodash');
var uuid = require('uuid');

function getRootAssetList() {
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        var apiAssets;
        return __chunk_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.Assets.list({ depth: 0 })];
                case 1:
                    apiAssets = _a.sent();
                    return [2 /*return*/, apiAssets.items
                            ? apiAssets.items.map(function (apiAsset) {
                                return {
                                    id: apiAsset.id,
                                    name: apiAsset.name || '',
                                    description: apiAsset.description,
                                    path: apiAsset.path,
                                    depth: apiAsset.depth,
                                    metadata: apiAsset.metadata,
                                    parentId: apiAsset.parentId,
                                    createdTime: apiAsset.createdTime,
                                    lastUpdatedTime: apiAsset.lastUpdatedTime,
                                };
                            })
                            : []];
            }
        });
    });
}
var defaultStrings = {
    loading: 'Loading',
    all: '-- All --',
};
var RootAssetSelect = /** @class */ (function (_super) {
    __chunk_1.__extends(RootAssetSelect, _super);
    function RootAssetSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectAsset = function (selectedAssetId) {
            var onAssetSelected = _this.props.onAssetSelected;
            _this.setState({ current: selectedAssetId });
            if (onAssetSelected) {
                onAssetSelected(selectedAssetId);
            }
        };
        var assetId = props.assetId;
        _this.state = {
            current: assetId,
            assets: null,
        };
        return _this;
    }
    RootAssetSelect.prototype.componentDidMount = function () {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var assets;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getRootAssetList()];
                    case 1:
                        assets = _a.sent();
                        this.setState({ assets: assets });
                        return [2 /*return*/];
                }
            });
        });
    };
    RootAssetSelect.prototype.render = function () {
        var _a = this.props, allowAll = _a.allowAll, className = _a.className, strings = _a.strings, styles = _a.styles;
        var _b = this.state, current = _b.current, assets = _b.assets;
        var lang = __chunk_1.__assign({}, defaultStrings, strings);
        var all = lang.all, loading = lang.loading;
        return assets === null || !assets.length ? (React__default.createElement(antd.Select, { value: 0, className: className, dropdownMatchSelectWidth: false, loading: true },
            React__default.createElement(antd.Select.Option, { key: "global:loading", value: 0 }, loading))) : (React__default.createElement(antd.Select, { value: current, className: className, onChange: this.onSelectAsset, dropdownMatchSelectWidth: false, style: styles && styles.select },
            allowAll && (React__default.createElement(antd.Select.Option, { key: "all", value: 0 }, all)),
            assets.map(function (asset) { return (React__default.createElement(antd.Select.Option, { key: asset.id, value: asset.id }, asset.description || asset.name || asset.id)); })));
    };
    RootAssetSelect.defaultProps = {
        allowAll: true,
        assetId: 0,
        className: '',
        strings: {},
    };
    return RootAssetSelect;
}(React__default.Component));

var formItemLayout = {
    labelCol: {
        sm: { span: 6 },
    },
    wrapperCol: {
        sm: { span: 15, offset: 1 },
    },
};
var formItemLayoutWithoutLabel = {
    labelCol: {
        sm: { span: 0 },
    },
    wrapperCol: {
        sm: { span: 15, offset: 7 },
    },
};
var defaultStrings$1 = {
    metadataLabel: 'Metadata',
    metadataKey: 'Key',
    metadataValue: 'Value',
    nameField: 'Name',
    descriptionField: 'Description',
    addMetadata: 'Add more metadata to search',
    search: 'Search',
};
var SearchForm = function (_a) {
    var onSubmit = _a.onSubmit, form = _a.form, onPressEnter = _a.onPressEnter, styles = _a.styles, _b = _a.strings, strings = _b === void 0 ? {} : _b;
    var getFieldDecorator = form.getFieldDecorator, getFieldValue = form.getFieldValue, setFieldsValue = form.setFieldsValue;
    var lang = __chunk_1.__assign({}, defaultStrings$1, strings);
    var metadataLabel = lang.metadataLabel, metadataKey = lang.metadataKey, metadataValue = lang.metadataValue, nameField = lang.nameField, descriptionField = lang.descriptionField, addMetadata = lang.addMetadata, search = lang.search;
    var submit = function (e) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(__chunk_1.__assign({}, form.getFieldsValue()));
        }
    };
    var onAddMetadata = function () {
        var keys = form.getFieldValue('metadata');
        var nextKeys = __chunk_1.__spread(keys, [{ id: uuid.v4(), key: '', value: '' }]);
        form.setFieldsValue({
            metadata: nextKeys,
        });
    };
    var onRemoveMetadata = function (id) {
        var keys = form.getFieldValue('metadata');
        if (keys.length === 1) {
            return;
        }
        form.setFieldsValue({
            metadata: keys.filter(function (data) { return data.id !== id; }),
        });
    };
    var pressEnter = function (e) {
        e.preventDefault();
        if (onPressEnter) {
            onPressEnter();
        }
    };
    var onChangeInput = function (key, index) { return function (e) {
        var md = metadata.map(function (field, i) {
            var _a;
            var target = e.target;
            return i === index ? __chunk_1.__assign({}, field, (_a = {}, _a[key] = target.value, _a)) : field;
        });
        setFieldsValue({ metadata: md });
    }; };
    getFieldDecorator('metadata', {
        initialValue: [{ id: uuid.v4(), key: '', value: '' }],
    });
    var metadata = getFieldValue('metadata').length === 0
        ? [{ id: uuid.v4(), key: '', value: '' }]
        : getFieldValue('metadata');
    var metadataFields = metadata.map(function (data, index) { return (React__default.createElement(antd.Form.Item, __chunk_1.__assign({}, (index === 0 ? formItemLayout : formItemLayoutWithoutLabel), { label: index === 0 ? metadataLabel : '', required: false, key: data.id }),
        React__default.createElement(antd.Input.Group, { compact: true, style: { display: 'flex' } },
            React__default.createElement(antd.Input, { className: "meta-key " + data.id, style: { width: '45%', borderRight: 0 }, placeholder: metadataKey, value: data.key, onPressEnter: pressEnter, onChange: onChangeInput('key', index) }),
            React__default.createElement(antd.Input, { style: {
                    width: '10%',
                    borderLeft: 0,
                    pointerEvents: 'none',
                    backgroundColor: '#fff',
                }, value: ":", disabled: true }),
            React__default.createElement(antd.Input, { className: "meta-value " + data.id, style: { width: '45%', borderLeft: 0 }, value: data.value, placeholder: metadataValue, onPressEnter: pressEnter, onChange: onChangeInput('value', index) }),
            metadata.length > 1 ? (React__default.createElement(antd.Icon, { type: "minus-circle-o", style: {
                    position: 'absolute',
                    right: -32,
                    top: '50%',
                    transform: 'translateY(-50%)',
                }, onClick: function () { return onRemoveMetadata(data.id); } })) : null))); });
    return (React__default.createElement(antd.Form, { layout: "horizontal", onSubmit: submit, style: styles && styles.container },
        React__default.createElement(antd.Form.Item, __chunk_1.__assign({ label: nameField }, formItemLayout), getFieldDecorator('name')(React__default.createElement(antd.Input, { className: "name", name: "name", maxLength: 50, placeholder: nameField, onPressEnter: pressEnter }))),
        React__default.createElement(antd.Form.Item, __chunk_1.__assign({ label: descriptionField }, formItemLayout), getFieldDecorator('description')(React__default.createElement(antd.Input, { className: "description", name: "description", maxLength: 500, placeholder: descriptionField, onPressEnter: pressEnter }))),
        metadataFields,
        React__default.createElement(antd.Form.Item, __chunk_1.__assign({}, formItemLayoutWithoutLabel),
            React__default.createElement(antd.Button, { htmlType: "button", type: "dashed", className: "add-more-metadata", onClick: onAddMetadata, style: __chunk_1.__assign({ width: '100%' }, (styles && styles.addMoreMetadataButton)) },
                React__default.createElement(antd.Icon, { type: "plus", style: { marginRight: 8 } }),
                addMetadata)),
        onSubmit && (React__default.createElement(antd.Form.Item, __chunk_1.__assign({}, formItemLayoutWithoutLabel),
            React__default.createElement(antd.Button, { htmlType: "submit", className: "submit", type: "primary", style: { float: 'right' } }, search)))));
};
var SearchFormHOC = antd.Form.create({
    name: 'asset-search',
    onValuesChange: function (props, _, allValues) {
        if (allValues === void 0) { allValues = {}; }
        var onChange = props.onChange;
        if (onChange) {
            onChange(allValues);
        }
    },
    mapPropsToFields: function (props) {
        if (!props.value) {
            return {};
        }
        var _a = props.value, name = _a.name, description = _a.description, metadata = _a.metadata;
        return {
            name: antd.Form.createFormField({ value: name }),
            description: antd.Form.createFormField({ value: description }),
            metadata: antd.Form.createFormField({
                value: metadata,
            }),
        };
    },
})(SearchForm);
SearchFormHOC.displayName = 'SearchForm';

var InputGroup = styled__default(antd.Input.Group)(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  display: flex !important;\n  flex-grow: 1;\n  overflow: visible;\n  position: relative;\n\n  > span {\n    z-index: 1;\n  }\n"], ["\n  display: flex !important;\n  flex-grow: 1;\n  overflow: visible;\n  position: relative;\n\n  > span {\n    z-index: 1;\n  }\n"])));
var ChangeSearchButton = styled__default(function (props) { return (React__default.createElement(antd.Button, __chunk_1.__assign({}, props))); })(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var RootAssetSelectStyled = styled__default(RootAssetSelect)(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  width: 35%;\n"], ["\n  width: 35%;\n"])));
var LiveSearchWrapper = styled__default.div(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 0;\n\n  > ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    line-height: 1.9;\n\n    > li {\n      padding: 0 10px;\n      cursor: pointer;\n      &:hover {\n        background-color: #eeeeee;\n      }\n\n      &.active {\n        background-color: #f2f2f2;\n        &:hover {\n          background-color: #e0e0e0;\n        }\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 0;\n\n  > ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    line-height: 1.9;\n\n    > li {\n      padding: 0 10px;\n      cursor: pointer;\n      &:hover {\n        background-color: #eeeeee;\n      }\n\n      &.active {\n        background-color: #f2f2f2;\n        &:hover {\n          background-color: #e0e0e0;\n        }\n      }\n    }\n  }\n"])));
var defaultStrings$2 = {
    changeSearch: 'Change search',
    clear: 'Clear',
    searchPlaceholder: 'Search for an asset',
    search: 'Search',
    emptyLiveSearch: 'Nothing found',
    rootAssetSelectLoading: defaultStrings.loading,
    rootAssetSelectAll: defaultStrings.all,
};
var Search = /** @class */ (function (_super) {
    __chunk_1.__extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearch = lodash.debounce(_this.debouncedSearch.bind(_this), _this.props.debounceTime);
        _this.onFilterIconClick = function () {
            var onFilterIconClick = _this.props.onFilterIconClick;
            if (onFilterIconClick) {
                onFilterIconClick();
            }
            _this.setState({
                isModalOpen: true,
            });
        };
        _this.onModalCancel = function () {
            _this.setState({
                advancedSearchQuery: null,
                isModalOpen: false,
                query: '',
            });
        };
        _this.onModalOk = function () {
            _this.setState({ isModalOpen: false }, _this.onSearch);
        };
        _this.onAssetSelected = function (assetId) {
            var onAssetSelected = _this.props.onAssetSelected;
            if (onAssetSelected) {
                onAssetSelected(assetId);
            }
            _this.setState({ assetId: assetId }, _this.onSearch);
        };
        _this.onSearchChange = function (value) {
            return _this.setState({ advancedSearchQuery: value, query: '' });
        };
        _this.onSearchQueryInput = function (e) {
            var target = e.target;
            _this.setState({ query: target.value, liveSearchShow: false }, _this.onSearch);
        };
        _this.onKeyDown = function (e) {
            var _a = _this.props, liveSearch = _a.liveSearch, onKeyDown = _a.onKeyDown;
            var _b = _this.state, cursor = _b.cursor, liveSearchResults = _b.liveSearchResults, liveSearchShow = _b.liveSearchShow;
            if (onKeyDown) {
                onKeyDown(e);
            }
            if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
            if (!liveSearch || !liveSearchShow) {
                return;
            }
            // Arrow up
            if (e.keyCode === 38) {
                if (cursor === undefined || cursor === 0) {
                    _this.setState({ cursor: liveSearchResults.length - 1 });
                }
                else {
                    _this.setState({ cursor: cursor - 1 });
                }
                return;
            }
            // Arrow down
            if (e.keyCode === 40) {
                if (cursor === undefined || cursor === liveSearchResults.length - 1) {
                    _this.setState({ cursor: 0 });
                }
                else {
                    _this.setState({ cursor: cursor + 1 });
                }
                return;
            }
            // Enter
            if (e.keyCode === 13 && cursor !== undefined) {
                var item = liveSearchResults[cursor];
                _this.onLiveSearchClick(item);
            }
        };
        _this.state = {
            assetId: props.assetId || 0,
            query: '',
            isModalOpen: false,
            advancedSearchQuery: null,
            liveSearchResults: [],
            liveSearchShow: false,
        };
        _this.onSearchBlurBounded = _this.onSearchBlur.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        return _this;
    }
    Search.getDerivedStateFromProps = function (props, state) {
        var liveSearch = props.liveSearch, propsSearchResults = props.liveSearchResults;
        var stateSearchResults = state.liveSearchResults, query = state.query, advancedSearchQuery = state.advancedSearchQuery;
        if (!liveSearch) {
            return null;
        }
        if (propsSearchResults !== stateSearchResults) {
            return {
                liveSearchResults: propsSearchResults,
                liveSearchShow: !!query || !!advancedSearchQuery,
            };
        }
        return null;
    };
    Search.prototype.debouncedSearch = function () {
        var _a = this.props, onSearch = _a.onSearch, fetchingLimit = _a.fetchingLimit;
        var _b = this.state, query = _b.query, advancedSearchQuery = _b.advancedSearchQuery, assetId = _b.assetId;
        var assetSubtrees = assetId ? [assetId] : null;
        var apiQuery = {
            advancedSearch: advancedSearchQuery,
            fetchingLimit: fetchingLimit,
            assetSubtrees: assetSubtrees,
            query: query,
        };
        if (onSearch) {
            onSearch(apiQuery);
        }
    };
    Search.prototype.render = function () {
        var _a = this.state, assetId = _a.assetId, query = _a.query, isModalOpen = _a.isModalOpen, advancedSearchQuery = _a.advancedSearchQuery;
        var _b = this.props, advancedSearch = _b.advancedSearch, rootAssetSelect = _b.rootAssetSelect, strings = _b.strings, styles = _b.styles;
        var lang = __chunk_1.__assign({}, defaultStrings$2, strings);
        var changeSearch = lang.changeSearch, clear = lang.clear, searchPlaceholder = lang.searchPlaceholder, search = lang.search, rootAssetSelectLoading = lang.rootAssetSelectLoading, rootAssetSelectAll = lang.rootAssetSelectAll;
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(InputGroup, { compact: true },
                rootAssetSelect && (React__default.createElement(RootAssetSelectStyled, { onAssetSelected: this.onAssetSelected, assetId: assetId, strings: {
                        loading: rootAssetSelectLoading,
                        all: rootAssetSelectAll,
                    }, styles: {
                        select: styles && styles.rootAssetSelect,
                    } })),
                advancedSearchQuery ? (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(ChangeSearchButton, { style: styles && styles.advancedSearchButton, type: "primary", onClick: this.onFilterIconClick }, changeSearch),
                    React__default.createElement(antd.Button, { htmlType: "button", onClick: this.onModalCancel }, clear))) : (React__default.createElement(React__default.Fragment, null, advancedSearch ? (React__default.createElement(antd.Input, { placeholder: searchPlaceholder, disabled: !!advancedSearchQuery, value: query, onChange: this.onSearchQueryInput, allowClear: true, onBlur: this.onSearchBlurBounded, onKeyDown: this.onKeyDown, suffix: this.toggleInputIcon('filter', query, this.onFilterIconClick) })) : (React__default.createElement(antd.Input, { placeholder: searchPlaceholder, disabled: !!advancedSearchQuery, value: query, onChange: this.onSearchQueryInput, allowClear: true, onBlur: this.onSearchBlurBounded, onKeyDown: this.onKeyDown, suffix: this.toggleInputIcon('search', query) })))),
                this.renderLiveSearch(lang)),
            React__default.createElement(antd.Modal, { visible: isModalOpen, onCancel: this.onModalCancel, bodyStyle: styles && styles.advancedSearch && styles.advancedSearch.modalBody, footer: [
                    React__default.createElement(antd.Button, { htmlType: "button", key: "cancel", onClick: this.onModalCancel, style: styles &&
                            styles.advancedSearch &&
                            styles.advancedSearch.clearButton }, clear),
                    React__default.createElement(antd.Button, { htmlType: "button", key: "search", type: "primary", onClick: this.onModalOk, style: styles &&
                            styles.advancedSearch &&
                            styles.advancedSearch.searchButton }, search),
                ] },
                React__default.createElement(SearchFormHOC, { value: advancedSearchQuery, onPressEnter: this.onModalOk, onChange: this.onSearchChange, styles: styles &&
                        styles.advancedSearch &&
                        styles.advancedSearch.searchForm }))));
    };
    Search.prototype.onSearchBlur = function () {
        this.setState({ liveSearchShow: false });
    };
    Search.prototype.renderLiveSearch = function (strings) {
        var _this = this;
        var _a = this.props, liveSearch = _a.liveSearch, liveSearchResults = _a.liveSearchResults, styles = _a.styles;
        var _b = this.state, liveSearchShow = _b.liveSearchShow, cursor = _b.cursor;
        var emptyLiveSearch = strings.emptyLiveSearch;
        if (!liveSearch || !liveSearchShow) {
            return null;
        }
        var list = liveSearchResults.length ? (liveSearchResults.map(function (item, index) { return (React__default.createElement("li", { onMouseDown: function () { return _this.onLiveSearchClick(item); }, key: index, className: cursor === index ? 'active' : undefined, style: styles &&
                styles.searchResultList &&
                styles.searchResultList.listItem }, item.name || 'NaN')); })) : (React__default.createElement("li", null,
            React__default.createElement("i", null, emptyLiveSearch)));
        return (React__default.createElement(LiveSearchWrapper, { style: styles && styles.searchResultList && styles.searchResultList.container },
            React__default.createElement("ul", { "data-id": 'live-search-list' }, list)));
    };
    Search.prototype.toggleInputIcon = function (iconType, searchQuery, onClick) {
        var loading = this.props.loading;
        return searchQuery ? (loading ? (React__default.createElement(antd.Icon, { type: "loading", style: { marginLeft: 8 } })) : null) : (React__default.createElement(antd.Icon, { type: iconType, style: { opacity: 0.6, marginLeft: 8 }, onClick: onClick }));
    };
    Search.prototype.onLiveSearchClick = function (item) {
        var onLiveSearchSelect = this.props.onLiveSearchSelect;
        if (onLiveSearchSelect) {
            onLiveSearchSelect(item);
        }
        this.setState({
            query: item.name,
            liveSearchShow: false,
            cursor: undefined,
        });
    };
    Search.defaultProps = {
        liveSearchResults: [],
        fetchingLimit: 25,
        debounceTime: 200,
        loading: false,
        advancedSearch: false,
        rootAssetSelect: false,
        liveSearch: false,
        strings: {},
    };
    return Search;
}(React__default.Component));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.Search = Search;
exports.defaultStrings = defaultStrings;
