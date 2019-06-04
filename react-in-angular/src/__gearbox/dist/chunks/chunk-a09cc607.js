'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var moment = _interopDefault(require('moment-timezone'));

function formatDatetime(time, defaultValue, timezone, format) {
    if (defaultValue === void 0) { defaultValue = ''; }
    if (timezone === void 0) { timezone = ''; }
    if (format === void 0) { format = 'MMM D, YYYY HH:mm:ss'; }
    return time
        ? moment(time)
            .tz(timezone || moment.tz.guess())
            .format(format)
        : defaultValue;
}
function momentFromTimestamp(timestamp) {
    return moment(timestamp).tz('utc');
}
var mapMetaData = function (metaObject) {
    return Object.keys(metaObject).map(function (dp) { return ({
        key: dp,
        name: dp,
        value: metaObject[dp],
    }); });
};

exports.mapMetaData = mapMetaData;
exports.momentFromTimestamp = momentFromTimestamp;
exports.formatDatetime = formatDatetime;
