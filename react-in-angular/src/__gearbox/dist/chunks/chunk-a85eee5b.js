'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-1c8e2aef.js');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var __chunk_5 = require('./chunk-a09cc607.js');

var DL = styled__default('dl')(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  text-align: left;\n\n  dl,\n  dt {\n    border: 1px solid #e8e8e8;\n    border-bottom: unset;\n    padding: 16px;\n    width: 50%;\n    margin: 0;\n    background-color: white;\n  }\n\n  dl:last-of-type,\n  dt:last-of-type {\n    border-bottom: 1px solid #e8e8e8;\n  }\n\n  dt {\n    border-right: unset;\n    font-weight: 500;\n  }\n\n  @media only screen and (max-width: 840px) {\n    dl,\n    dt {\n      width: 100%;\n      border: 1px solid #e8e8e8;\n      border-bottom: unset;\n    }\n\n    dt {\n      background-color: #ececec;\n    }\n\n    dt:last-of-type {\n      border-bottom: unset;\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  text-align: left;\n\n  dl,\n  dt {\n    border: 1px solid #e8e8e8;\n    border-bottom: unset;\n    padding: 16px;\n    width: 50%;\n    margin: 0;\n    background-color: white;\n  }\n\n  dl:last-of-type,\n  dt:last-of-type {\n    border-bottom: 1px solid #e8e8e8;\n  }\n\n  dt {\n    border-right: unset;\n    font-weight: 500;\n  }\n\n  @media only screen and (max-width: 840px) {\n    dl,\n    dt {\n      width: 100%;\n      border: 1px solid #e8e8e8;\n      border-bottom: unset;\n    }\n\n    dt {\n      background-color: #ececec;\n    }\n\n    dt:last-of-type {\n      border-bottom: unset;\n    }\n  }\n"])));
var NoData = styled__default('p')(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  border: 1px solid #e8e8e8;\n  padding: 16px;\n  text-align: center;\n"], ["\n  border: 1px solid #e8e8e8;\n  padding: 16px;\n  text-align: center;\n"])));
var DescriptionList = function (props) {
    var description = props.description, valueSet = props.valueSet;
    var arrayValues = __chunk_5.mapMetaData(valueSet);
    return (React__default.createElement(React__default.Fragment, null,
        description && (React__default.createElement("p", { id: description.descriptionId }, description.descriptionText)),
        arrayValues.length >= 1 ? (React__default.createElement(DL, { style: props.styles, "aria-describedby": description ? description.descriptionId : '' }, arrayValues.map(function (valSet) { return (React__default.createElement(React__default.Fragment, { key: valSet.key || valSet.name },
            React__default.createElement("dt", null, valSet.name),
            React__default.createElement("dl", null, valSet.value))); }))) : (React__default.createElement(NoData, null, "No data"))));
};
DescriptionList.displayName = 'DescriptionList';
var templateObject_1, templateObject_2;

exports.DescriptionList = DescriptionList;
