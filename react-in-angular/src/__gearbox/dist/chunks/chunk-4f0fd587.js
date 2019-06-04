'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-1c8e2aef.js');
var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

var SpinContainer = styled__default(antd.Spin)(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  background-color: ", ";\n  z-index: 100;\n\n  &:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  background-color: ", ";\n  z-index: 100;\n\n  &:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"])), function (_a) {
    var backgroundcolor = _a.backgroundcolor;
    return backgroundcolor;
});
SpinContainer.defaultProps = {
    backgroundcolor: 'rgba(0, 0, 0, 0.5)',
};
function LoadingOverlay(_a) {
    var isLoading = _a.isLoading, backgroundColor = _a.backgroundColor, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c;
    if (isLoading) {
        return (React__default.createElement(SpinContainer, { delay: delay, size: size, backgroundcolor: backgroundColor }));
    }
    return null;
}
var templateObject_1;

exports.LoadingOverlay = LoadingOverlay;
