'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var __chunk_9 = require('../../chunks/chunk-b95c521d.js');

/**
 * Convert input into a safe CDP project name format ([a-z0-9\-]+)
 *
 * @param input possible CDP project name
 *
 * @return the sanitized CDP project name
 */
var sanitizeTenant = function (input) {
    return input
        // CDP projects cannot have upper-case characters
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, '');
};
/**
 * Check if input empty, consist of spaces or its a number
 * @param input – checked value
 * @return <true> if input empty, <false> otherwise
 */
function isEmptyString(input) {
    return typeof input === 'number'
        ? false
        : !Boolean(input && input.replace(/\s/gi, ''));
}

var Panel = antd.Collapse.Panel;
var TenantValidity;
(function (TenantValidity) {
    TenantValidity[TenantValidity["CHECKING"] = 0] = "CHECKING";
    TenantValidity[TenantValidity["INVALID"] = 1] = "INVALID";
    TenantValidity[TenantValidity["UNKNOWN"] = 2] = "UNKNOWN";
})(TenantValidity || (TenantValidity = {}));
var TenantSelector = /** @class */ (function (_super) {
    __chunk_1.__extends(TenantSelector, _super);
    function TenantSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onTenantChange = function (e) {
            _this.setState({
                tenant: sanitizeTenant(e.target.value),
                validity: TenantValidity.UNKNOWN,
            });
        };
        _this.checkTenantValidity = function () { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
            var _a, onInvalidTenant, onTenantSelected, validateTenant, _b, tenant, advanced, advancedOptions, isTenantValid, _c, e_1;
            return __chunk_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, onInvalidTenant = _a.onInvalidTenant, onTenantSelected = _a.onTenantSelected, validateTenant = _a.validateTenant;
                        _b = this.state, tenant = _b.tenant, advanced = _b.advanced;
                        advancedOptions = Object.keys(advanced).length
                            ? this.getNonEmptyAdvancedFields(advanced)
                            : null;
                        if (tenant.length === 0) {
                            this.setState({
                                validity: TenantValidity.INVALID,
                            });
                            if (onInvalidTenant) {
                                onInvalidTenant(tenant);
                            }
                            return [2 /*return*/];
                        }
                        this.setState({
                            validity: TenantValidity.CHECKING,
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 5, , 6]);
                        if (!validateTenant) return [3 /*break*/, 3];
                        return [4 /*yield*/, validateTenant(tenant, advancedOptions)];
                    case 2:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _c = true;
                        _d.label = 4;
                    case 4:
                        isTenantValid = _c;
                        if (isTenantValid) {
                            onTenantSelected(tenant, advancedOptions);
                        }
                        else {
                            throw new Error('Tenant is invalid');
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _d.sent();
                        this.setState({
                            validity: TenantValidity.INVALID,
                        });
                        if (onInvalidTenant) {
                            onInvalidTenant(tenant);
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        var advancedOptions = props.advancedOptions;
        _this.state = {
            tenant: sanitizeTenant(props.initialTenant || ''),
            validity: TenantValidity.UNKNOWN,
            advanced: Object.assign({}, advancedOptions),
        };
        return _this;
    }
    TenantSelector.prototype.renderAdvancedOptions = function () {
        var _this = this;
        var advanced = this.state.advanced;
        var styles = this.props.styles;
        var keys = Object.keys(advanced);
        if (!keys.length) {
            return null;
        }
        var inputs = keys.map(function (option) {
            return (React__default.createElement(antd.Form.Item, { key: option },
                React__default.createElement(Input, { style: styles && styles.input, name: option, onChange: function (e) { return _this.onAdvancedOptionChange(e, option); }, value: advanced[option], placeholder: option })));
        });
        return (React__default.createElement(CollapseWrapper, { bordered: false, "data-id": "collapse-container", style: styles && styles.collapseWrapper },
            React__default.createElement(Panel, { key: '0', header: 'Advanced options' }, inputs)));
    };
    TenantSelector.prototype.render = function () {
        var _a = this.props, header = _a.header, loginText = _a.loginText, placeholder = _a.placeholder, title = _a.title, unknownMessage = _a.unknownMessage, styles = _a.styles;
        var _b = this.state, tenant = _b.tenant, validity = _b.validity;
        var checkingValidity = validity === TenantValidity.CHECKING;
        var invalidTenant = validity === TenantValidity.INVALID;
        var formItemProps = {};
        if (validity === TenantValidity.INVALID) {
            formItemProps.validateStatus = 'error';
            formItemProps.help =
                unknownMessage || 'This is an unknown configuration.';
        }
        return (React__default.createElement(LoginWrapper, { style: styles && styles.wrapper },
            React__default.createElement(Title, { style: styles && styles.title }, title),
            header && typeof header !== 'string' ? (header) : (React__default.createElement(SubTitle, { style: styles && styles.subTitle }, header || 'Enter your company name')),
            React__default.createElement(antd.Form, null,
                React__default.createElement(antd.Form.Item, __chunk_1.__assign({ hasFeedback: true }, formItemProps),
                    React__default.createElement(Input, { style: styles && styles.input, "data-id": "tenant-input", autoFocus: true, onChange: this.onTenantChange, onPressEnter: this.checkTenantValidity, value: tenant, defaultValue: tenant, placeholder: placeholder || 'cognite' })),
                this.renderAdvancedOptions()),
            React__default.createElement(LoginButton, { style: styles && styles.button, htmlType: "button", disabled: checkingValidity || invalidTenant || tenant === '', onClick: this.checkTenantValidity }, checkingValidity ? React__default.createElement(antd.Spin, { size: "small" }) : loginText || 'Login')));
    };
    TenantSelector.prototype.onAdvancedOptionChange = function (e, option) {
        var advanced = Object.assign({}, this.state.advanced);
        advanced[option] = e.target.value;
        this.setState({
            advanced: advanced,
        });
    };
    TenantSelector.prototype.getNonEmptyAdvancedFields = function (advanced) {
        var advancedOptions = Object.assign({}, advanced);
        Object.keys(advanced).forEach(function (option) {
            var value = advanced[option];
            if (isEmptyString(value)) {
                delete advancedOptions[option];
            }
        });
        return Object.keys(advancedOptions).length ? advancedOptions : null;
    };
    TenantSelector.defaultProps = {
        advancedOptions: {},
    };
    return TenantSelector;
}(React__default.Component));
var LoginWrapper = styled__default.div(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: initial;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  max-width: 400px;\n  box-shadow: ", ";\n  background-color: ", ";\n  margin: auto;\n  padding: 45px;\n  overflow: auto;\n"], ["\n  display: flex;\n  flex-wrap: initial;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  max-width: 400px;\n  box-shadow: ", ";\n  background-color: ", ";\n  margin: auto;\n  padding: 45px;\n  overflow: auto;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.lightShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.containerColor;
});
LoginWrapper.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var Title = styled__default.h1(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
Title.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var SubTitle = styled__default.h3(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
SubTitle.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var Input = styled__default(function (props) { return React__default.createElement(antd.Input, __chunk_1.__assign({}, props)); })(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  && {\n    border: none;\n    background-color: ", ";\n    font-weight: bold;\n    border-radius: 0;\n    height: 48px;\n    border-bottom: 2px solid ", ";\n    margin-bottom: 8px;\n    color: ", ";\n    &:focus,\n    &:active {\n      box-shadow: none;\n      border-bottom: 2px solid ", ";\n    }\n    &:hover {\n      border-bottom: 2px solid ", ";\n    }\n    &::placeholder {\n      color: ", " !important;\n    }\n  }\n"], ["\n  && {\n    border: none;\n    background-color: ", ";\n    font-weight: bold;\n    border-radius: 0;\n    height: 48px;\n    border-bottom: 2px solid ", ";\n    margin-bottom: 8px;\n    color: ", ";\n    &:focus,\n    &:active {\n      box-shadow: none;\n      border-bottom: 2px solid ", ";\n    }\n    &:hover {\n      border-bottom: 2px solid ", ";\n    }\n    &::placeholder {\n      color: ", " !important;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.lightGrey;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.lightGrey;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.primaryColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.primaryColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColorDisabled;
});
Input.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var LoginButton = styled__default(function (props) { return React__default.createElement(antd.Button, __chunk_1.__assign({}, props)); })(templateObject_5 || (templateObject_5 = __chunk_1.__makeTemplateObject(["\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 0;\n  min-height: 45px;\n  margin: 15px 0;\n  border-color: ", ";\n\n  &:not([disabled]) {\n    cursor: pointer;\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    &:hover {\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  &:disabled,\n  &:disabled:hover {\n    border-color: ", " !important;\n    background-color: ", " !important;\n    color: ", ";\n  }\n"], ["\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 0;\n  min-height: 45px;\n  margin: 15px 0;\n  border-color: ", ";\n\n  &:not([disabled]) {\n    cursor: pointer;\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    &:hover {\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  &:disabled,\n  &:disabled:hover {\n    border-color: ", " !important;\n    background-color: ",
    " !important;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.buttonBorderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.primaryColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.buttonBorderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.primaryColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.primaryColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.buttonBorderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.buttonDisabledColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColorDisabled;
});
LoginButton.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var CollapseWrapper = styled__default(antd.Collapse)(templateObject_6 || (templateObject_6 = __chunk_1.__makeTemplateObject(["\n  .ant-collapse-item {\n    border-bottom: none !important;\n  }\n  .ant-collapse-content {\n    background-color: ", " !important;\n  }\n  .ant-collapse-header {\n    font-size: 1.17em;\n    font-weight: 500;\n    color: ", " !important;\n    padding-left: 20px !important;\n    background-color: ", ";\n\n    .ant-collapse-arrow {\n      left: 0 !important;\n      color: ", " !important;\n    }\n  }\n  .ant-collapse-content-box {\n    padding: 5px 0 0 0 !important;\n  }\n"], ["\n  .ant-collapse-item {\n    border-bottom: none !important;\n  }\n  .ant-collapse-content {\n    background-color: ", " !important;\n  }\n  .ant-collapse-header {\n    font-size: 1.17em;\n    font-weight: 500;\n    color: ", " !important;\n    padding-left: 20px !important;\n    background-color: ", ";\n\n    .ant-collapse-arrow {\n      left: 0 !important;\n      color: ", " !important;\n    }\n  }\n  .ant-collapse-content-box {\n    padding: 5px 0 0 0 !important;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.containerColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.containerColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
CollapseWrapper.defaultProps = {
    theme: {
        gearbox: __chunk_9.defaultTheme,
    },
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

exports.TenantSelector = TenantSelector;
