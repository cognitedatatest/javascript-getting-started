'use strict';

var __chunk_1 = require('./chunk-1c8e2aef.js');

function clampNumber(v, minValue, maxValue) {
    return Math.max(Math.min(v, maxValue), minValue);
}
function sortStringsAlphabetically(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
function getCanvas(img, width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    return canvas;
}
function extractValidStrings(textAnnotations, maxLen, minLen) {
    if (textAnnotations === void 0) { textAnnotations = []; }
    if (maxLen === void 0) { maxLen = 20; }
    if (minLen === void 0) { minLen = 5; }
    var validStrings = textAnnotations
        .map(function (annotation) {
        return annotation.description ? annotation.description.trim() : '';
    })
        .filter(function (word) { return word.length > minLen && word.length < maxLen; });
    return __chunk_1.__spread(new Set(validStrings));
}

exports.extractValidStrings = extractValidStrings;
exports.sortStringsAlphabetically = sortStringsAlphabetically;
exports.getCanvas = getCanvas;
exports.clampNumber = clampNumber;
