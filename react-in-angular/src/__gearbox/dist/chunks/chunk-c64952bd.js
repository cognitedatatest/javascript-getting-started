'use strict';

var __chunk_1 = require('./chunk-1c8e2aef.js');
var sdk = require('@cognite/sdk');
var __chunk_3 = require('./chunk-3d06bc34.js');

function getAssetList(_a) {
    var query = _a.query, _b = _a.fuzziness, fuzziness = _b === void 0 ? 0 : _b, _c = _a.fuzzLimit, fuzzLimit = _c === void 0 ? 3 : _c;
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return __chunk_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, sdk.Assets.list({
                        name: query,
                        fuzziness: fuzziness,
                    })];
                case 1:
                    response = _d.sent();
                    if (response.items.length < 1 && fuzziness < fuzzLimit) {
                        return [2 /*return*/, getAssetList({
                                query: query,
                                fuzziness: fuzziness + 1,
                            })];
                    }
                    return [2 /*return*/, response.items];
            }
        });
    });
}
function fetch3DModelRevision(modelId, revisionId) {
    return sdk.ThreeD.retrieveRevision(modelId, revisionId);
}
function retrieveAsset(sdkInstance, assetId) {
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        return __chunk_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Assets.retrieve(assetId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getAssetEvent(sdkInstance, query) {
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return __chunk_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Events.list(query)];
                case 1:
                    response = _a.sent();
                    if (response.items && response.items.length > 0) {
                        return [2 /*return*/, response.items];
                    }
                    return [2 /*return*/, []];
            }
        });
    });
}
function getAssetFiles(sdkInstance, query) {
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return __chunk_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Files.list(query)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.items];
            }
        });
    });
}
function getAssetTimeseries(sdkInstance, query) {
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return __chunk_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.TimeSeries.list(query)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.items];
            }
        });
    });
}

var ocrVisionURL = 'https://vision.googleapis.com/v1/images:annotate';
function ocrRecognize(_a) {
    var image = _a.image, key = _a.key, extractOcrStrings = _a.extractOcrStrings;
    return __chunk_1.__awaiter(this, void 0, void 0, function () {
        var headers, ocrUrl, body, options, response, status_1, errorResponse, message, result;
        return __chunk_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    headers = new Headers();
                    headers.append('Content-Type', 'application/json');
                    ocrUrl = "" + ocrVisionURL + (key ? '?key=' + key : '');
                    body = {
                        requests: [
                            {
                                image: {
                                    content: image,
                                },
                                features: [
                                    {
                                        type: 'TEXT_DETECTION',
                                    },
                                ],
                            },
                        ],
                    };
                    options = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body),
                    };
                    return [4 /*yield*/, fetch(ocrUrl, options)];
                case 1:
                    response = _b.sent();
                    if (!(response.status !== 200)) return [3 /*break*/, 3];
                    status_1 = response.status;
                    return [4 /*yield*/, response.json()];
                case 2:
                    errorResponse = _b.sent();
                    message = errorResponse.error ? errorResponse.error.message : '';
                    throw { error: response, status: status_1, message: message };
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    result = _b.sent();
                    return [2 /*return*/, extractOcrStrings
                            ? extractOcrStrings(result)
                            : __chunk_3.extractValidStrings(result.responses[0].textAnnotations)];
            }
        });
    });
}

exports.retrieveAsset = retrieveAsset;
exports.getAssetEvent = getAssetEvent;
exports.getAssetFiles = getAssetFiles;
exports.getAssetTimeseries = getAssetTimeseries;
exports.getAssetList = getAssetList;
exports.ocrRecognize = ocrRecognize;
exports.fetch3DModelRevision = fetch3DModelRevision;
