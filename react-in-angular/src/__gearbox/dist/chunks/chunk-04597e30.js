'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-1c8e2aef.js');
var React = require('react');
var React__default = _interopDefault(React);

/**
 * Input string should has {{ <key> }} structure to embed provided values
 * @param props <ComplexStringProps> – contain <input> property – string with <keys> to be replaced
 * @example { input: 'Hey, {{ developer }}', developer: 'Dude' }
 */
var ComplexString = function (props) {
    var input = props.input, rest = __chunk_1.__rest(props, ["input"]);
    var resultString = input;
    Object.keys(rest).forEach(function (key) {
        var regexp = new RegExp("{{\\s*" + key + "\\s*}}", 'gi');
        // @ts-ignore
        resultString = resultString.replace(regexp, typeof rest[key] !== 'undefined' ? rest[key].toString() : '');
    });
    return React__default.createElement("p", null, resultString);
};

exports.ComplexString = ComplexString;
