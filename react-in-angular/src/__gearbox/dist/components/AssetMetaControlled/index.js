'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
require('antd');
var React = require('react');
var React__default = _interopDefault(React);
require('styled-components');
require('@cognite/sdk');
require('../../chunks/chunk-c64952bd.js');
require('../../chunks/chunk-3d06bc34.js');
require('../../chunks/chunk-2980b17c.js');
require('moment-timezone');
require('../../chunks/chunk-a09cc607.js');
require('../../chunks/chunk-a85eee5b.js');
var index = require('../AssetMeta/index.js');
require('antd/lib/radio');
require('../TimeseriesChart/index.js');
require('@cognite/griff-react');
require('../../chunks/chunk-cefd798e.js');
require('antd/lib/collapse');
require('../../chunks/chunk-86bfe67e.js');
require('../../chunks/chunk-b95c521d.js');
var rxjs = require('rxjs');
var operators = require('rxjs/operators');

var withObservable = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        __chunk_1.__extends(WithObservable, _super);
        function WithObservable(props) {
            var _this = _super.call(this, props) || this;
            _this.unmount$ = new rxjs.Subject();
            var observable = props.observable;
            _this.state = {};
            observable
                .pipe(operators.takeUntil(_this.unmount$))
                .subscribe(function (passedProps) { return _this.setState(__chunk_1.__assign({}, passedProps)); });
            return _this;
        }
        WithObservable.prototype.render = function () {
            return (React__default.createElement(React__default.Fragment, null, Object.keys(this.state).length ? (React__default.createElement(WrapperComponent, __chunk_1.__assign({}, this.state))) : null));
        };
        WithObservable.prototype.componentWillUnmount = function () {
            this.unmount$.next();
            this.unmount$.complete();
        };
        return WithObservable;
    }(React__default.Component));
};

var AssetMetaControlled = withObservable(index.AssetMeta);

exports.AssetMetaControlled = AssetMetaControlled;
