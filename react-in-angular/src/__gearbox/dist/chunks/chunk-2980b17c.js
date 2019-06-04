'use strict';

var CanceledPromiseException = /** @class */ (function () {
    function CanceledPromiseException() {
    }
    return CanceledPromiseException;
}());
function connectPromiseToUnmountState(component, promise) {
    return promise.then(function (results) {
        if (!component || component.isComponentUnmounted) {
            throw new CanceledPromiseException();
        }
        else {
            return results;
        }
    });
}

exports.connectPromiseToUnmountState = connectPromiseToUnmountState;
exports.CanceledPromiseException = CanceledPromiseException;
