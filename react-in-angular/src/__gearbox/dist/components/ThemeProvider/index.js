'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var __chunk_9 = require('../../chunks/chunk-b95c521d.js');

var ThemeProvider = function (props) {
    var theme = {
        gearbox: __chunk_1.__assign({}, __chunk_9.defaultTheme, props.theme),
    };
    return (React__default.createElement(styled.ThemeProvider, { theme: theme }, props.children));
};

exports.ThemeProvider = ThemeProvider;
