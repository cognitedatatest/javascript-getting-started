'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);

var _this = undefined;
var TreeNode = antd.Tree.TreeNode;
var cursorApiRequest = function (assetId, params, data, sdkInstance) {
    if (data === void 0) { data = []; }
    return __chunk_1.__awaiter(_this, void 0, void 0, function () {
        var result, cursor;
        return __chunk_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Assets.listDescendants(assetId, params)];
                case 1:
                    result = _a.sent();
                    cursor = result.nextCursor;
                    if (result.nextCursor) {
                        return [2 /*return*/, cursorApiRequest(assetId, __chunk_1.__assign({}, params, { cursor: cursor }), __chunk_1.__spread(data, result.items), sdkInstance)];
                    }
                    return [2 /*return*/, __chunk_1.__spread(data, result.items)];
            }
        });
    });
};
var AssetTree = /** @class */ (function (_super) {
    __chunk_1.__extends(AssetTree, _super);
    function AssetTree(props) {
        var _this = _super.call(this, props) || this;
        _this.onLoadData = function (treeNode) { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
            var sdkInstance, eventKey, assetId, query, loadedData_1;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sdkInstance = this.props.sdkInstance;
                        if (treeNode.props.children) {
                            return [2 /*return*/];
                        }
                        eventKey = treeNode.props.eventKey;
                        assetId = eventKey ? Number.parseInt(eventKey, 10) : undefined;
                        if (!(assetId && !Number.isNaN(assetId))) return [3 /*break*/, 2];
                        query = {
                            depth: 2,
                            limit: 1000,
                        };
                        return [4 /*yield*/, cursorApiRequest(assetId, query, [], sdkInstance)];
                    case 1:
                        loadedData_1 = _a.sent();
                        if (loadedData_1.length > 1) {
                            treeNode.props.dataRef.children = loadedData_1
                                .slice(1)
                                // @ts-ignore
                                .sort(function (a, b) { return a.name.localeCompare(b.name); })
                                .filter(function (x) { return x.parentId && x.parentId === treeNode.props.dataRef.key; })
                                .map(function (x) { return ({
                                title: x.name + " " + (x.description ? ':' : '') + " " + (x.description ||
                                    ''),
                                key: x.id,
                                node: x,
                                isLeaf: loadedData_1.filter(function (y) { return y.parentId === x.id; }).length <= 0,
                            }); });
                            this.setState({
                                treeData: __chunk_1.__spread(this.state.treeData),
                            });
                        }
                        else {
                            treeNode.props.dataRef.isLeaf = true;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.onSelectNode = function (returnAsset) {
            var onSelect = _this.props.onSelect;
            if (onSelect) {
                onSelect(returnAsset);
            }
        };
        _this.onExpand = function (expandedKeys) {
            _this.setState({
                expandedKeys: AssetTree.toKeys(expandedKeys.map(function (key) { return Number.parseInt(key, 10); })),
            });
        };
        _this.renderTreeNode = function (nodes) {
            return nodes.map(function (item) {
                if (item.children) {
                    return (React__default.createElement(TreeNode, { title: item.title, key: item.key, dataRef: item }, _this.renderTreeNode(item.children)));
                }
                return React__default.createElement(TreeNode, { title: item.title, key: item.key, dataRef: item });
            });
        };
        var defaultExpandedKeys = props.defaultExpandedKeys;
        _this.state = {
            assets: [],
            treeData: [],
            expandedKeys: defaultExpandedKeys
                ? AssetTree.toKeys(defaultExpandedKeys)
                : {},
        };
        return _this;
    }
    AssetTree.mapDataAssets = function (assets) {
        var nodes = {};
        assets.forEach(function (asset) {
            nodes[asset.id] = AssetTree.returnPretty(asset);
        });
        var addedAsChildren = [];
        assets.forEach(function (asset) {
            var parentId = asset.parentId;
            var node = nodes[parentId]; // casting is not a problem. It will return undefined if not found
            if (!node) {
                return;
            }
            if (node.children) {
                node.children.push(nodes[asset.id]);
            }
            else {
                node.children = [nodes[asset.id]];
            }
            addedAsChildren.push(asset.id);
            node.isLeaf = false;
        });
        addedAsChildren.forEach(function (id) {
            delete nodes[id];
        });
        return Object.keys(nodes).map(function (id) {
            return nodes[id];
        });
    };
    AssetTree.returnPretty = function (asset) {
        return {
            title: asset.name + ": " + asset.description,
            key: asset.id,
            node: asset,
            isLeaf: true,
        };
    };
    AssetTree.toKeys = function (path, initial) {
        if (initial === void 0) { initial = {}; }
        return path.reduce(function (acc, i) {
            var _a;
            return (__chunk_1.__assign({}, acc, (_a = {}, _a[i] = true, _a)));
        }, initial);
    };
    AssetTree.prototype.componentDidMount = function () {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var sdkInstance, assets;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sdkInstance = this.props.sdkInstance;
                        return [4 /*yield*/, sdkInstance.Assets.list({ depth: 1 })];
                    case 1:
                        assets = _a.sent();
                        this.setState({
                            assets: assets.items,
                            treeData: assets && assets.items.length > 0
                                ? AssetTree.mapDataAssets(assets.items)
                                : [],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AssetTree.prototype.render = function () {
        var _this = this;
        var _a = this.state, treeData = _a.treeData, expandedKeys = _a.expandedKeys;
        return (React__default.createElement(antd.Tree, { loadData: this.onLoadData, onSelect: function (_, e) { return _this.onSelectNode(e.node.props.dataRef); }, expandedKeys: Object.keys(expandedKeys), onExpand: this.onExpand }, this.renderTreeNode(treeData)));
    };
    return AssetTree;
}(React.Component));

exports.AssetTree = AssetTree;
