'use strict';

var ColorList = [
    '#0097e6',
    '#e1b12c',
    '#8E44AD',
    '#c23616',
    '#40739e',
    '#273c75',
    '#8c7ae6',
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618',
    '#990099',
    '#3B3EAC',
    '#0099C6',
    '#DD4477',
    '#66AA00',
    '#B82E2E',
    '#316395',
    '#994499',
    '#22AA99',
    '#AAAA11',
    '#6633CC',
    '#E67300',
    '#8B0707',
    '#329262',
    '#5574A6',
];
var hashCode = function (a) {
    return String(a)
        .split('')
        .map(function (c) { return c.charCodeAt(0); })
        .reduce(function (hash, char) { return (31 * hash + char) | 0; }, 0);
};
var getColorByString = function (value) {
    return ColorList[((hashCode(value) % ColorList.length) + ColorList.length) % ColorList.length];
};

exports.getColorByString = getColorByString;
