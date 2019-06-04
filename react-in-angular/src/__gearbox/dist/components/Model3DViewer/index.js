'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
var React = require('react');
var React__default = _interopDefault(React);
var sdk = require('@cognite/sdk');
var __chunk_2 = require('../../chunks/chunk-c64952bd.js');
require('../../chunks/chunk-3d06bc34.js');
var _3dViewer = require('@cognite/3d-viewer');

var ViewerEventTypes;
(function (ViewerEventTypes) {
    ViewerEventTypes["progress"] = "progress";
    ViewerEventTypes["complete"] = "complete";
    ViewerEventTypes["error"] = "error";
})(ViewerEventTypes || (ViewerEventTypes = {}));
function setCameraPosition(viewer, model, revision, boundingBox) {
    var Vector3 = _3dViewer.THREE.Vector3;
    var camera = revision.camera;
    if (!camera) {
        return;
    }
    if (boundingBox && !boundingBox.isEmpty()) {
        // todo: matrix property doesn't present in Cognite3DModel
        // @ts-ignore
        boundingBox.applyMatrix4(model.matrix);
        viewer.fitCameraToBoundingBox(boundingBox, 0);
    }
    else if (Array.isArray(camera.target) && Array.isArray(camera.position)) {
        // Set default camera position
        var cameraPosition = new (Vector3.bind.apply(Vector3, __chunk_1.__spread([void 0], camera.position)))();
        var cameraTarget = new (Vector3.bind.apply(Vector3, __chunk_1.__spread([void 0], camera.target)))();
        // Camera position and target are defined in model space, transform to world space
        // @ts-ignore
        cameraPosition.applyMatrix4(model.matrix);
        // @ts-ignore
        cameraTarget.applyMatrix4(model.matrix);
        viewer.setCameraPosition(cameraPosition);
        viewer.setCameraTarget(cameraTarget);
    }
    else {
        viewer.fitCameraToModel(model, 0);
    }
}
function createViewer(_a) {
    var modelId = _a.modelId, revisionId = _a.revisionId, boundingBox = _a.boundingBox, cache = _a.cache, domElement = _a.domElement;
    var _b;
    var hash = hashGenerator(modelId, revisionId, boundingBox);
    var progress = ViewerEventTypes.progress, complete = ViewerEventTypes.complete, error = ViewerEventTypes.error;
    if (cache && cache[hash]) {
        cache[hash].fromCache = true;
        // @ts-ignore
        domElement.parentNode.replaceChild(cache[hash].viewer.domElement, domElement);
        return __chunk_1.__assign({}, cache[hash], { domElement: cache[hash].viewer.domElement });
    }
    var revisionPromise = __chunk_2.fetch3DModelRevision(modelId, revisionId);
    var viewer = new _3dViewer.Cognite3DViewer({ domElement: domElement });
    var listeners = (_b = {},
        _b[progress] = [],
        _b[complete] = [],
        _b[error] = [],
        _b);
    var onProgress = function (progressEvent) {
        listeners[progress].forEach(function (callback) { return callback(progressEvent); });
    };
    var onComplete = function () {
        listeners[complete].forEach(function (callback) { return callback(); });
    };
    var modelPromise = viewer.addModel({
        modelId: modelId,
        revisionId: revisionId,
        geometryFilter: { boundingBox: boundingBox },
        onProgress: onProgress,
        onComplete: onComplete,
    });
    var response = {
        domElement: domElement,
        viewer: viewer,
        modelPromise: modelPromise,
        revisionPromise: revisionPromise,
        addEvent: addEvent.bind(null, listeners),
        removeEvent: removeEvent.bind(null, listeners),
    };
    if (cache) {
        cache[hash] = response;
    }
    return response;
}
function addEvent(listeners, events) {
    events.forEach(function (_a) {
        var _b = __chunk_1.__read(_a, 2), type = _b[0], callback = _b[1];
        listeners[type].push(callback);
    });
}
function removeEvent(listeners, events) {
    if (events) {
        events.forEach(function (_a) {
            var _b = __chunk_1.__read(_a, 2), type = _b[0], callback = _b[1];
            var index = listeners[type].indexOf(callback);
            if (index === -1) {
                return;
            }
            listeners[type].splice(index, 1);
        });
        return;
    }
    for (var key in ViewerEventTypes) {
        if (ViewerEventTypes[key]) {
            listeners[ViewerEventTypes[key]] = [];
        }
    }
}
function hashGenerator(modelId, revisionId, boundingBox) {
    var boundingBoxString;
    if (boundingBox) {
        var boundingBoxMinString = boundingBox.min.toArray().join(',');
        var boundingBoxMaxString = boundingBox.max.toArray().join(',');
        boundingBoxString = "[" + boundingBoxMinString + ", " + boundingBoxMaxString + "]";
    }
    return modelId + "/" + revisionId + (boundingBoxString ? '?boundingBox=' + boundingBoxString : '');
}

var createViewer$1 = createViewer;
function mockCreateViewer(mockFunction) {
    createViewer$1 = mockFunction || createViewer;
}
var Model3DViewer = /** @class */ (function (_super) {
    __chunk_1.__extends(Model3DViewer, _super);
    function Model3DViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.disposeCalls = [];
        _this.divWrapper = React__default.createRef();
        _this.inputWrapper = React__default.createRef();
        _this.model = null;
        _this.revision = null;
        _this.viewer = null;
        _this.nodes = [];
        _this.addDisposeCall = function (func) {
            _this.disposeCalls.push(func);
        };
        _this.dispose = function () {
            _this.disposeCalls.forEach(function (func) {
                func();
            });
        };
        _this.resetCameraPosition = function () {
            var _a = _this, viewer = _a.viewer, model = _a.model, revision = _a.revision, boundingBox = _a.props.boundingBox;
            if (!viewer || !model || !revision) {
                return;
            }
            setCameraPosition(viewer, model, revision, boundingBox);
        };
        _this.onContainerClick = function () {
            if (_this.inputWrapper.current) {
                _this.inputWrapper.current.focus();
            }
        };
        _this.onBlur = function () {
            if (_this.viewer) {
                _this.viewer.disableKeyboardNavigation();
            }
        };
        _this.onFocus = function () {
            if (_this.viewer && _this.props.enableKeyboardNavigation) {
                _this.viewer.enableKeyboardNavigation();
            }
        };
        _this.onClickHandlerBounded = _this.onClickHandler.bind(_this);
        _this.onCompleteBounded = _this.onComplete.bind(_this);
        return _this;
    }
    Model3DViewer.prototype.componentDidMount = function () {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, modelId, revisionId, cache, boundingBox, useDefaultCameraPosition, onProgress, onReady, onCameraChange, onError, progress, complete, _c, viewer, addEvent, removeEvent, revisionPromise, modelPromise, fromCache, domElement, model, revision, nodes, e_1;
            var _this = this;
            return __chunk_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.divWrapper.current || !this.inputWrapper.current) {
                            return [2 /*return*/];
                        }
                        _b = this.props, modelId = _b.modelId, revisionId = _b.revisionId, cache = _b.cache, boundingBox = _b.boundingBox, useDefaultCameraPosition = _b.useDefaultCameraPosition, onProgress = _b.onProgress, onReady = _b.onReady, onCameraChange = _b.onCameraChange, onError = _b.onError;
                        progress = ViewerEventTypes.progress, complete = ViewerEventTypes.complete;
                        _c = createViewer$1({
                            modelId: modelId,
                            revisionId: revisionId,
                            boundingBox: boundingBox,
                            cache: cache,
                            domElement: this.divWrapper.current,
                        }), viewer = _c.viewer, addEvent = _c.addEvent, removeEvent = _c.removeEvent, revisionPromise = _c.revisionPromise, modelPromise = _c.modelPromise, fromCache = _c.fromCache, domElement = _c.domElement;
                        this.viewer = viewer;
                        // Looks like replaceChild looses onClick event handler, so adding it this way instead
                        domElement.addEventListener('click', this.onContainerClick);
                        if (onProgress) {
                            addEvent([[progress, onProgress]]);
                        }
                        addEvent([[complete, this.onCompleteBounded]]);
                        this.addDisposeCall(function () {
                            domElement.removeEventListener('click', _this.onContainerClick);
                            removeEvent();
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                modelPromise,
                                revisionPromise,
                                this.findMappedNodes(),
                            ])];
                    case 2:
                        _a = __chunk_1.__read.apply(void 0, [_d.sent(), 3]), model = _a[0], revision = _a[1], nodes = _a[2];
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
                        if (onError) {
                            onError(e_1);
                        }
                        this.dispose();
                        return [2 /*return*/];
                    case 4:
                        this.model = model;
                        this.revision = revision;
                        this.nodes = nodes;
                        if (useDefaultCameraPosition && !fromCache) {
                            this.resetCameraPosition();
                        }
                        if (onReady) {
                            onReady(viewer, model, revision);
                        }
                        viewer.on('click', this.onClickHandlerBounded);
                        if (onCameraChange) {
                            viewer.on('cameraChange', onCameraChange);
                        }
                        this.addDisposeCall(function () {
                            viewer.off('click', _this.onClickHandlerBounded);
                            if (onCameraChange) {
                                viewer.off('cameraChange', onCameraChange);
                            }
                        });
                        if (fromCache) {
                            this.highlightNodes();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Model3DViewer.prototype.componentDidUpdate = function (prevProps) {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var _a, onError, assetId, pAssetId, _b, error_1;
            return __chunk_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, onError = _a.onError, assetId = _a.assetId;
                        pAssetId = prevProps.assetId;
                        if (assetId === pAssetId) {
                            return [2 /*return*/];
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = this;
                        return [4 /*yield*/, this.findMappedNodes()];
                    case 2:
                        _b.nodes = _c.sent();
                        this.highlightNodes();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Model3DViewer.prototype.componentWillUnmount = function () {
        this.dispose();
    };
    Model3DViewer.prototype.onClickHandler = function (_a) {
        var offsetX = _a.offsetX, offsetY = _a.offsetY;
        var onClick = this.props.onClick;
        if (!this.viewer || !onClick) {
            return;
        }
        var intersection = this.viewer.getIntersectionFromPixel(offsetX, offsetY);
        if (intersection === null) {
            onClick(null);
        }
        else {
            onClick(intersection.nodeId);
        }
    };
    Model3DViewer.prototype.render = function () {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("input", { type: "text", onBlur: this.onBlur, onFocus: this.onFocus, ref: this.inputWrapper, style: { opacity: 0, position: 'absolute', pointerEvents: 'none' } }),
            React__default.createElement("div", { style: { width: '100%', height: '100%', fontSize: 0 }, ref: this.divWrapper })));
    };
    Model3DViewer.prototype.findMappedNodes = function () {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var _a, assetId, modelId, revisionId, items;
            return __chunk_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, assetId = _a.assetId, modelId = _a.modelId, revisionId = _a.revisionId;
                        if (!assetId) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        return [4 /*yield*/, sdk.ThreeD.listAssetMappings(modelId, revisionId, {
                                assetId: assetId,
                            })];
                    case 1:
                        items = (_b.sent()).items;
                        return [2 /*return*/, items];
                }
            });
        });
    };
    Model3DViewer.prototype.highlightNodes = function () {
        var _this = this;
        var length = this.nodes.length;
        if (!this.model || !this.viewer) {
            return;
        }
        this.model.deselectAllNodes();
        if (length === 1) {
            var nodeId = this.nodes[0].nodeId;
            this.model.updateMatrixWorld();
            var reusableBox = new _3dViewer.THREE.Box3();
            var bb = this.model.getBoundingBox(nodeId, reusableBox);
            this.model.selectNode(nodeId);
            if (!bb.isEmpty()) {
                this.viewer.fitCameraToBoundingBox(bb);
            }
        }
        else {
            this.nodes.forEach(function (node) {
                // @ts-ignore
                return _this.model.selectNode(node.nodeId);
            });
        }
    };
    Model3DViewer.prototype.onComplete = function () {
        var onComplete = this.props.onComplete;
        if (onComplete) {
            onComplete();
        }
    };
    Model3DViewer.defaultProps = {
        enableKeyboardNavigation: true,
        useDefaultCameraPosition: true,
    };
    return Model3DViewer;
}(React__default.Component));

exports.mockCreateViewer = mockCreateViewer;
exports.Model3DViewer = Model3DViewer;
