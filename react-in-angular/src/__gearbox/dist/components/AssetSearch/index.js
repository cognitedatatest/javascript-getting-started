'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
require('antd');
var React = require('react');
var React__default = _interopDefault(React);
require('styled-components');
var sdk = require('@cognite/sdk');
require('lodash');
var __chunk_11 = require('../../chunks/chunk-08a814fd.js');
require('uuid');

var defaultStrings = {
    searchPlaceholder: 'Search for an asset',
    emptyLiveSearch: 'Nothing found',
};
var AssetSearch = /** @class */ (function (_super) {
    __chunk_1.__extends(AssetSearch, _super);
    function AssetSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [],
            loading: false,
        };
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }
    AssetSearch.prototype.onSearch = function (query) {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var onError, assetQuery, items, e_1;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onError = this.props.onError;
                        if (!query.query && !query.advancedSearch) {
                            return [2 /*return*/, this.setState({ items: [] })];
                        }
                        this.setState({ loading: true });
                        assetQuery = {
                            query: query.query,
                            assetSubtrees: query.assetSubtrees || undefined,
                            description: (query.advancedSearch && query.advancedSearch.description) || undefined,
                            metadata: (query.advancedSearch &&
                                query.advancedSearch.metadata &&
                                query.advancedSearch.metadata.reduce(function (a, c) {
                                    var _a;
                                    return (__chunk_1.__assign({}, a, (_a = {}, _a[c.key] = c.value, _a)));
                                }, {})) ||
                                undefined,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sdk.Assets.search(assetQuery)];
                    case 2:
                        items = (_a.sent()).items;
                        this.setState({ items: items, loading: false });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (onError) {
                            onError(e_1);
                        }
                        this.setState({ items: [], loading: false });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AssetSearch.prototype.render = function () {
        var _a = this.props, onLiveSearchSelect = _a.onLiveSearchSelect, rootAssetSelect = _a.rootAssetSelect, advancedSearch = _a.advancedSearch, strings = _a.strings, styles = _a.styles;
        var resultStrings = __chunk_1.__assign({}, defaultStrings, strings);
        var _b = this.state, items = _b.items, loading = _b.loading;
        return (React__default.createElement(__chunk_11.Search, { liveSearch: true, onSearch: this.onSearch, liveSearchResults: items, onLiveSearchSelect: onLiveSearchSelect, strings: resultStrings, loading: loading, rootAssetSelect: rootAssetSelect, advancedSearch: advancedSearch, styles: styles }));
    };
    AssetSearch.defaultProps = {
        rootAssetSelect: false,
        advancedSearch: false,
    };
    return AssetSearch;
}(React__default.Component));

exports.defaultStrings = defaultStrings;
exports.AssetSearch = AssetSearch;
