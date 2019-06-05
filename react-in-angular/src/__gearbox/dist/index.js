'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var sdk = require('@cognite/sdk');
var moment = _interopDefault(require('moment-timezone'));
var Radio = _interopDefault(require('antd/lib/radio'));
var griffReact = require('@cognite/griff-react');
var Collapse = _interopDefault(require('antd/lib/collapse'));
var rxjs = require('rxjs');
var operators = require('rxjs/operators');
var lodash = require('lodash');
var uuid = require('uuid');
var _3dViewer = require('@cognite/3d-viewer');
var reactDnd = require('react-dnd');
var HTML5Backend = _interopDefault(require('react-dnd-html5-backend'));
var reactSizeme = require('react-sizeme');
var numeral = _interopDefault(require('numeral'));
var Odometer = _interopDefault(require('react-odometerjs'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function getAssetList(_a) {
    var query = _a.query, _b = _a.fuzziness, fuzziness = _b === void 0 ? 0 : _b, _c = _a.fuzzLimit, fuzzLimit = _c === void 0 ? 3 : _c;
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, sdk.Assets.list({
                        name: query,
                        fuzziness: fuzziness,
                    })];
                case 1:
                    response = _d.sent();
                    if (response.items.length < 1 && fuzziness < fuzzLimit) {
                        return [2 /*return*/, getAssetList({
                                query: query,
                                fuzziness: fuzziness + 1,
                            })];
                    }
                    return [2 /*return*/, response.items];
            }
        });
    });
}
function fetch3DModelRevision(modelId, revisionId) {
    return sdk.ThreeD.retrieveRevision(modelId, revisionId);
}
function retrieveAsset(sdkInstance, assetId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Assets.retrieve(assetId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getAssetEvent(sdkInstance, query) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Events.list(query)];
                case 1:
                    response = _a.sent();
                    if (response.items && response.items.length > 0) {
                        return [2 /*return*/, response.items];
                    }
                    return [2 /*return*/, []];
            }
        });
    });
}
function getAssetFiles(sdkInstance, query) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Files.list(query)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.items];
            }
        });
    });
}
function getAssetTimeseries(sdkInstance, query) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.TimeSeries.list(query)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.items];
            }
        });
    });
}

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
    return __spread(new Set(validStrings));
}

var ocrVisionURL = 'https://vision.googleapis.com/v1/images:annotate';
function ocrRecognize(_a) {
    var image = _a.image, key = _a.key, extractOcrStrings = _a.extractOcrStrings;
    return __awaiter(this, void 0, void 0, function () {
        var headers, ocrUrl, body, options, response, status_1, errorResponse, message, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    headers = new Headers();
                    headers.append('Content-Type', 'application/json');
                    ocrUrl = "" + ocrVisionURL + (key ? '?key=' + key : '');
                    body = {
                        requests: [
                            {
                                image: {
                                    content: image,
                                },
                                features: [
                                    {
                                        type: 'TEXT_DETECTION',
                                    },
                                ],
                            },
                        ],
                    };
                    options = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body),
                    };
                    return [4 /*yield*/, fetch(ocrUrl, options)];
                case 1:
                    response = _b.sent();
                    if (!(response.status !== 200)) return [3 /*break*/, 3];
                    status_1 = response.status;
                    return [4 /*yield*/, response.json()];
                case 2:
                    errorResponse = _b.sent();
                    message = errorResponse.error ? errorResponse.error.message : '';
                    throw { error: response, status: status_1, message: message };
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    result = _b.sent();
                    return [2 /*return*/, extractOcrStrings
                            ? extractOcrStrings(result)
                            : extractValidStrings(result.responses[0].textAnnotations)];
            }
        });
    });
}

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

var DL = styled__default('dl')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  text-align: left;\n\n  dl,\n  dt {\n    border: 1px solid #e8e8e8;\n    border-bottom: unset;\n    padding: 16px;\n    width: 50%;\n    margin: 0;\n    background-color: white;\n  }\n\n  dl:last-of-type,\n  dt:last-of-type {\n    border-bottom: 1px solid #e8e8e8;\n  }\n\n  dt {\n    border-right: unset;\n    font-weight: 500;\n  }\n\n  @media only screen and (max-width: 840px) {\n    dl,\n    dt {\n      width: 100%;\n      border: 1px solid #e8e8e8;\n      border-bottom: unset;\n    }\n\n    dt {\n      background-color: #ececec;\n    }\n\n    dt:last-of-type {\n      border-bottom: unset;\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  text-align: left;\n\n  dl,\n  dt {\n    border: 1px solid #e8e8e8;\n    border-bottom: unset;\n    padding: 16px;\n    width: 50%;\n    margin: 0;\n    background-color: white;\n  }\n\n  dl:last-of-type,\n  dt:last-of-type {\n    border-bottom: 1px solid #e8e8e8;\n  }\n\n  dt {\n    border-right: unset;\n    font-weight: 500;\n  }\n\n  @media only screen and (max-width: 840px) {\n    dl,\n    dt {\n      width: 100%;\n      border: 1px solid #e8e8e8;\n      border-bottom: unset;\n    }\n\n    dt {\n      background-color: #ececec;\n    }\n\n    dt:last-of-type {\n      border-bottom: unset;\n    }\n  }\n"])));
var NoData = styled__default('p')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 1px solid #e8e8e8;\n  padding: 16px;\n  text-align: center;\n"], ["\n  border: 1px solid #e8e8e8;\n  padding: 16px;\n  text-align: center;\n"])));
var DescriptionList = function (props) {
    var description = props.description, valueSet = props.valueSet;
    var arrayValues = mapMetaData(valueSet);
    return (React__default.createElement(React__default.Fragment, null,
        description && (React__default.createElement("p", { id: description.descriptionId }, description.descriptionText)),
        arrayValues.length >= 1 ? (React__default.createElement(DL, { style: props.styles, "aria-describedby": description ? description.descriptionId : '' }, arrayValues.map(function (valSet) { return (React__default.createElement(React__default.Fragment, { key: valSet.key || valSet.name },
            React__default.createElement("dt", null, valSet.name),
            React__default.createElement("dl", null, valSet.value))); }))) : (React__default.createElement(NoData, null, "No data"))));
};
DescriptionList.displayName = 'DescriptionList';
var templateObject_1, templateObject_2;

var AssetEventsPanel = /** @class */ (function (_super) {
    __extends(AssetEventsPanel, _super);
    function AssetEventsPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.renderEventDetails = function (event) { return (React__default.createElement(EventDetails, { key: "event-detail" },
            React__default.createElement("div", { key: "event-type" },
                React__default.createElement("strong", null,
                    event.type,
                    ","),
                " ",
                event.subtype),
            event.description && (React__default.createElement("div", { className: "description" }, event.description)),
            React__default.createElement("div", { key: "event-time", className: "times" },
                React__default.createElement("span", null, event.start),
                React__default.createElement("span", null,
                    React__default.createElement(antd.Icon, { type: "right" })),
                React__default.createElement("span", { style: { textAlign: 'right' } }, event.end)))); };
        _this.renderEventMetadata = function (event) { return (React__default.createElement(EventMetadataList, { key: "event-metadata" }, Object.keys(event.metadata || {}).map(function (key) { return (React__default.createElement("div", { key: key, className: "event-metadata" },
            React__default.createElement("strong", null, key),
            " ",
            React__default.createElement("br", null),
            React__default.createElement("span", null, event.metadata && event.metadata[key]))); }))); };
        _this.mapEvent = function (event) { return (__assign({}, event, { typeAndSubtype: (React__default.createElement("span", null,
                React__default.createElement("strong", { style: { display: 'block' } }, event.type),
                React__default.createElement("span", { style: { fontSize: 12, opacity: 0.8 } }, event.subtype))), description: event.description || 'No description', start: typeof event.startTime === 'number'
                ? momentFromTimestamp(event.startTime).format('LLL')
                : '-', end: typeof event.endTime === 'number'
                ? momentFromTimestamp(event.endTime).format('LLL')
                : 'Ongoing' })); };
        _this.onEventClick = function (id) {
            var events = _this.props.events;
            if (!events) {
                return;
            }
            var selectedEvent = events.find(function (e) { return e.id === id; });
            if (!selectedEvent) {
                return;
            }
            _this.setState({
                selectedEvent: _this.mapEvent(selectedEvent),
            });
        };
        _this.state = {
            selectedEvent: null,
        };
        return _this;
    }
    AssetEventsPanel.prototype.getTableComponents = function () {
        var _this = this;
        var styles = this.props.styles;
        return {
            body: {
                row: function (props) {
                    return (React__default.createElement(StyledRow, { style: styles && styles.tableRow, onClick: function () { return _this.onEventClick(props['data-row-key']); } }, props.children));
                },
                cell: function (props) {
                    return (React__default.createElement(StyledCell, { style: styles && styles.tableCell }, props.children));
                },
            },
        };
    };
    AssetEventsPanel.prototype.render = function () {
        var _this = this;
        var defaultColumns = [
            {
                title: 'Type / Subtype',
                dataIndex: 'typeAndSubtype',
                key: 'typeAndSubtype',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Start',
                dataIndex: 'start',
                key: 'start',
            },
            {
                title: 'End',
                dataIndex: 'end',
                key: 'end',
            },
        ];
        var _a = this.props, _b = _a.columns, columns = _b === void 0 ? defaultColumns : _b, _c = _a.events, events = _c === void 0 ? [] : _c, _d = _a.pagination, pagination = _d === void 0 ? { pageSize: 12 } : _d, scroll = _a.scroll, _e = _a.bordered, bordered = _e === void 0 ? false : _e, _f = _a.showHeader, showHeader = _f === void 0 ? true : _f, styles = _a.styles;
        var selectedEvent = this.state.selectedEvent;
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(StyledTable, { key: "styleTable", columns: columns, dataSource: events.map(this.mapEvent), rowKey: "id", showHeader: showHeader, pagination: pagination, scroll: scroll, bordered: bordered, components: this.getTableComponents(), style: styles && styles.table }),
            !!selectedEvent && (React__default.createElement(antd.Modal, { key: "Modal", visible: !!selectedEvent, footer: null, onCancel: function () { return _this.setState({ selectedEvent: null }); } }, !!selectedEvent && [
                this.renderEventDetails(selectedEvent),
                this.renderEventMetadata(selectedEvent),
            ]))));
    };
    return AssetEventsPanel;
}(React.Component));
var StyledTable = styled__default(antd.Table)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([""], [""])));
var StyledRow = styled__default.tr(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background: white;\n  cursor: pointer;\n  &:nth-child(2n) {\n    background: #fafafa;\n  }\n"], ["\n  background: white;\n  cursor: pointer;\n  &:nth-child(2n) {\n    background: #fafafa;\n  }\n"])));
var StyledCell = styled__default.td(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 500px;\n"], ["\n  max-width: 500px;\n"])));
var EventDetails = styled__default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .description {\n    font-size: 18px;\n    padding-top: 16px;\n  }\n  .times {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 16px;\n  }\n"], ["\n  .description {\n    font-size: 18px;\n    padding-top: 16px;\n  }\n  .times {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 16px;\n  }\n"])));
var EventMetadataList = styled__default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 32px;\n  max-height: calc(100vh - 400px);\n  overflow: auto;\n  .event-metadata {\n    padding: 16px;\n    &:nth-child(2n) {\n      background: #fbfbfb;\n    }\n  }\n"], ["\n  margin-top: 32px;\n  max-height: calc(100vh - 400px);\n  overflow: auto;\n  .event-metadata {\n    padding: 16px;\n    &:nth-child(2n) {\n      background: #fbfbfb;\n    }\n  }\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5;

var AA = "Accounting";
var AB = "Administration (Project management)";
var AF = "Templates – used by contractor (not economic documentation)";
var CA = "Analysis, tests and calculations";
var DS = "Data sheets";
var FA = "Project manual, e.g. principal decisions";
var FB = "Project strategy";
var FD = "Project design criteria";
var FE = "Engineering query";
var FQ = "Concession requests";
var GA = "Authorities documentation";
var HA = "Hazop actions.";
var IR = "Interface report";
var KA = "Procedures";
var KH = "Commissioning procedures";
var KY = "System operation procedures";
var KZ = "System description";
var LA = "Lists, registers and indexes";
var LC = "User manual content lists";
var LD = "Supplier master document/information registers";
var LF = "Legends and typical";
var MA = "Equipment user manual, including technical descriptions";
var MB = "Operation and maintenance instructions/manuals";
var MC = "Parts and Spare parts lists";
var MG = "Equipment handling instructions";
var MH = "Lubrication schedules";
var MZ = "Overall Life Cycle Information (LCI)";
var OT = "Training Documentation, Course Material";
var QA = "Technical Query";
var SI = "Site instructions";
var SQ = "Site Query";
var PA = "Purchase order";
var PB = "Blanket order and frame agreements";
var PC = "Call off orders";
var PD = "Contracts";
var PJ = "Material handling reports";
var PE = "Commercial Bid Evaluation for Budget Inquiry";
var PK = "Over, shortage and damage reports";
var PG = "(Hold) Appendix E Technical Requisition";
var PH = "Technical Bid Evaluation";
var PM = "Evaluation Matrix";
var PN = "Inquiry Documents (Procurement)";
var PO = "Bid Opening and Shortlisting Report";
var PR = "Recommendation for Award";
var PS = "Package Procurement Strategy";
var PT = "Screening";
var PV = "Pre-Qualification Questionnaire";
var PQ = "Invitation to Tender (Budget)";
var PX = "Budget Inquiry";
var PZ = "Technical Bid Evaluation for Budget Inquiry ";
var PL = "Disputed variation order";
var RA = "Reports – not covered by other codes";
var RB = "Risk analysis reports";
var RC = "Non-conformance reports";
var RD = "System and design reports";
var RE = "Design Fabrication Installation-resumes";
var RF = "Verification reports";
var RG = "Application for Deviation";
var RH = "Deviation report";
var RK = "Application for Exemption (Deviation require authority approval) ";
var RS = "Studies Reports";
var SA = "Standards (amendment to Norsok)";
var SP = "Specifications - not covered by other codes";
var TA = "Plans and schedules";
var TB = "Work plans";
var TD = "Cable and cable transit schedules";
var TE = "Estimates";
var TF = "Work packages";
var TG = "Spring schedules";
var TR = "Transmittal";
var VA = "Manufacturing and verifying document, including material traceability, weld and Non- Destructive Examination (NDE) doc, third party verification and also photos of submerged structures and equipment.";
var VD = "Fabrication records (see DN02-DN-Z-KA-0003 ch 5.152) ";
var VB = "Certificates";
var VM = "Mechanical completion and commissioning dossiers";
var WM = "Inspection and maintenance isometrics";
var WN = "Inspection videos";
var XA = "Flow diagrams";
var XB = "P&ID";
var XC = "D&ID";
var XD = "General arrangements";
var XE = "Layout drawings";
var XF = "Location drawings and plot plans";
var XG = "Structural information, including main structural steel, second/outfitting steel, structural fire protection and acoustic/thermal insulation and fire protection";
var XH = "Free span calculations structural information, secondary steel";
var XI = "System topology, block diagrams and SCD";
var XJ = "Single line diagrams";
var XK = "Circuit diagrams";
var XL = "Logic diagrams";
var XM = "Level diagrams";
var XN = "Isometric drawings, including fabrication, heat tracing. NOTE: This code is replaced by codes starting with \"Y\". Drawings already issued with code \"XN\" may not be reissued.";
var XO = "Pipe supports";
var XP = "Termination drawings for external connections ";
var XQ = "Pneumatic/hydraulic connection drawings";
var XR = "Cause and effects";
var XS = "Detail cross sectional drawings";
var XT = "Wiring diagrams";
var XU = "Loop diagrams";
var XV = "Structural information, outfitting steel";
var XW = "Stress isometric";
var XX = "Miscellaneous drawings";
var XY = "Hook up drawings";
var XZ = "Material Selection Datasheet (MSD)";
var YA = "Design isometric ";
var YB = "Fabrication isometric ";
var YC = "Heat trace isometric ";
var YD = "Nodal diagram";
var ZA = "EDP-documentation general";
var ZB = "Software documentation";
var ZC = "System documentation";
var ZD = "VDU-pictures";
var ZE = "Graphical reports from 3D Computer Aided Design (CAD) models";
var ZF = "3D CAD view models";
var docTypes = {
	AA: AA,
	AB: AB,
	AF: AF,
	CA: CA,
	DS: DS,
	FA: FA,
	FB: FB,
	FD: FD,
	FE: FE,
	FQ: FQ,
	GA: GA,
	HA: HA,
	IR: IR,
	KA: KA,
	KH: KH,
	KY: KY,
	KZ: KZ,
	LA: LA,
	LC: LC,
	LD: LD,
	LF: LF,
	MA: MA,
	MB: MB,
	MC: MC,
	MG: MG,
	MH: MH,
	MZ: MZ,
	OT: OT,
	QA: QA,
	SI: SI,
	SQ: SQ,
	PA: PA,
	PB: PB,
	PC: PC,
	PD: PD,
	PJ: PJ,
	PE: PE,
	PK: PK,
	PG: PG,
	PH: PH,
	PM: PM,
	PN: PN,
	PO: PO,
	PR: PR,
	PS: PS,
	PT: PT,
	PV: PV,
	PQ: PQ,
	PX: PX,
	PZ: PZ,
	PL: PL,
	RA: RA,
	RB: RB,
	RC: RC,
	RD: RD,
	RE: RE,
	RF: RF,
	RG: RG,
	RH: RH,
	RK: RK,
	RS: RS,
	SA: SA,
	SP: SP,
	TA: TA,
	TB: TB,
	TD: TD,
	TE: TE,
	TF: TF,
	TG: TG,
	TR: TR,
	VA: VA,
	VD: VD,
	VB: VB,
	VM: VM,
	WM: WM,
	WN: WN,
	XA: XA,
	XB: XB,
	XC: XC,
	XD: XD,
	XE: XE,
	XF: XF,
	XG: XG,
	XH: XH,
	XI: XI,
	XJ: XJ,
	XK: XK,
	XL: XL,
	XM: XM,
	XN: XN,
	XO: XO,
	XP: XP,
	XQ: XQ,
	XR: XR,
	XS: XS,
	XT: XT,
	XU: XU,
	XV: XV,
	XW: XW,
	XX: XX,
	XY: XY,
	XZ: XZ,
	YA: YA,
	YB: YB,
	YC: YC,
	YD: YD,
	ZA: ZA,
	ZB: ZB,
	ZC: ZC,
	ZD: ZD,
	ZE: ZE,
	ZF: ZF
};

var maxDocumentTitleLength = 56;
var documentTypesOptions = ['DOC_TYPE', 'doc_type'];
var documentTitleOptions = ['DOC_TITLE', 'title'];
var getPriorityObjectFromArray = function (list) {
    return list.reduce(function (acc, p, i) {
        var _a;
        return (__assign({}, acc, (_a = {}, _a[p] = i + 1, _a)));
    }, {});
};
var sortDocsByPriority = function (a, b, priority) {
    return ((priority[a] || Number.MAX_SAFE_INTEGER) -
        (priority[b] || Number.MAX_SAFE_INTEGER));
};
var getValueFromObject = function (metadata, arr) {
    if (!metadata || !arr) {
        return '';
    }
    var data = objKeysToLowerCase(metadata);
    return arr.reduce(function (acc, name) {
        if (!acc) {
            return data[name.toLowerCase()]
                ? data[name.toLowerCase()].toString()
                : '';
        }
        return acc;
    }, '');
};
var objKeysToLowerCase = function (obj) {
    return obj
        ? Object.keys(obj).reduce(function (acc, key) {
            acc[key.toLowerCase()] = obj[key];
            return acc;
        }, {})
        : {};
};
var getDocumentType = function (metadata, documentTypeField) {
    var names = documentTypeField ? [documentTypeField] : documentTypesOptions;
    return getValueFromObject(metadata, names);
};
var getCategoryName = function (keyList, unknownCategoryName, types) {
    if (unknownCategoryName === void 0) { unknownCategoryName = 'Unknown document type'; }
    if (types === void 0) { types = docTypes; }
    var key = keyList.find(function (item) { return !!types[item]; }) || '';
    return {
        key: key,
        description: types[key] || unknownCategoryName,
    };
};
var getCategoryByPriority = function (docsByCat, priorityList, customSort) {
    if (priorityList === void 0) { priorityList = []; }
    var e_1, _a;
    var priorityObject = getPriorityObjectFromArray(priorityList);
    var prioritizedCategories = [];
    var regularCategories = [];
    try {
        for (var _b = __values(Object.keys(docsByCat)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var category = _c.value;
            if (priorityObject[category] !== undefined) {
                prioritizedCategories.push(category);
            }
            else {
                regularCategories.push(category);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var sortFunction = customSort || sortStringsAlphabetically;
    return {
        categories: prioritizedCategories
            .sort(function (a, b) { return sortDocsByPriority(a, b, priorityObject); })
            .concat(regularCategories.sort(function (a, b) {
            return sortFunction(docsByCat[a].description, docsByCat[b].description);
        })),
        prioritizedCount: prioritizedCategories.length,
    };
};
var getDocumentsByCategory = function (docs, unknownCategoryName, types, documentTypeField) {
    if (types === void 0) { types = docTypes; }
    return docs.reduce(function (acc, doc) {
        var _a;
        var keyList = __spread([
            getDocumentType(doc.metadata, documentTypeField)
        ], doc.fileName.split('-'));
        var _b = getCategoryName(keyList, unknownCategoryName, types), key = _b.key, description = _b.description;
        var documents = acc[key] ? acc[key].documents : [];
        return __assign({}, acc, (_a = {}, _a[key] = __assign({}, acc[key], { description: description, documents: __spread(documents, [doc]) }), _a));
    }, {});
};
var getDocumentTitle = function (metadata, documentTitleField) {
    var names = documentTitleField
        ? [documentTitleField]
        : documentTitleOptions;
    return getValueFromObject(metadata, names);
};
var getShortDescription = function (description) {
    return description.length > maxDocumentTitleLength
        ? description.substring(0, maxDocumentTitleLength) + "..."
        : description;
};

var Panel = antd.Collapse.Panel;
var DocumentTable = /** @class */ (function (_super) {
    __extends(DocumentTable, _super);
    function DocumentTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderDocument = function (category, description) { return function (document, i, all) {
            var documentRenderer = _this.props.documentRenderer;
            if (documentRenderer) {
                return documentRenderer(document, i, all);
            }
            var _a = _this.props, documentTitleField = _a.documentTitleField, handleDocumentClick = _a.handleDocumentClick, styles = _a.styles;
            return (React__default.createElement(LinkContainer, { key: document.id, style: styles && styles.fileContainer },
                React__default.createElement(LinkStyle, { key: document.id, "data-test-id": "file-name", onClick: function () {
                        return handleDocumentClick
                            ? handleDocumentClick(document, category, description)
                            : null;
                    }, tabIndex: -1, style: styles && styles.fileLink }, document.fileName),
                React__default.createElement(TextContainerTop, { "data-test-id": "document-title", style: styles && styles.fileTitle }, getDocumentTitle(document.metadata, documentTitleField))));
        }; };
        return _this;
    }
    DocumentTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, docs = _a.docs, categoryPriorityList = _a.categoryPriorityList, unknownCategoryName = _a.unknownCategoryName, documentTypeField = _a.documentTypeField, docTypes = _a.docTypes, noDocumentsSign = _a.noDocumentsSign, collapseProps = _a.collapseProps, customCategorySort = _a.customCategorySort, styles = _a.styles;
        var documentsByCategory = getDocumentsByCategory(docs || [], unknownCategoryName, docTypes, documentTypeField);
        var _b = getCategoryByPriority(documentsByCategory, categoryPriorityList, customCategorySort), categories = _b.categories, prioritizedCount = _b.prioritizedCount;
        if (!categories.length) {
            return (React__default.createElement(NoDocuments, { "data-test-id": "no-documents" }, "" + (noDocumentsSign
                ? noDocumentsSign
                : 'No documents linked to this asset')));
        }
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(TableWrapper, null,
                React__default.createElement(CollapseContainer, __assign({}, collapseProps), categories.map(function (category, i) {
                    var _a = documentsByCategory[category], description = _a.description, documents = _a.documents;
                    var header = getShortDescription(description) + " (" + documents.length + ")";
                    return (React__default.createElement(PanelWrapper, { header: header, key: category, delimiter: prioritizedCount === i + 1 &&
                            prioritizedCount !== categories.length, style: styles && styles.wrapper }, documents.map(_this.renderDocument(category, description))));
                })))));
    };
    DocumentTable.defaultProps = {
        handleDocumentClick: function () { return null; },
        categoryPriorityList: ['XB', 'XL'],
    };
    return DocumentTable;
}(React__default.PureComponent));
var TableWrapper = styled__default.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"], ["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"])));
var LinkContainer = styled__default.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  margin: 10px 0;\n  white-space: nowrap;\n"], ["\n  display: flex;\n  margin: 10px 0;\n  white-space: nowrap;\n"])));
var CollapseContainer = styled__default(antd.Collapse)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  background-color: green;\n  width: 100%;\n"], ["\n  background-color: green;\n  width: 100%;\n"])));
var TextContainerTop = styled__default.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n"], ["\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n"])));
var PanelWrapper = styled__default(Panel)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  text-align: left;\n  ", "\n"], ["\n  text-align: left;\n  ",
    "\n"])), function (_a) {
    var delimiter = _a.delimiter;
    return delimiter ? 'border-bottom: 2px solid #CFCFCF !important;' : '';
});
var LinkStyle = styled__default.a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 1.125em;\n  margin-right: 10px;\n"], ["\n  font-size: 1.125em;\n  margin-right: 10px;\n"])));
var NoDocuments = styled__default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 16px;\n"], ["\n  padding: 16px;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6, templateObject_7;

var _this = undefined;
var SERIES_GETTERS = new Map();
var timeseries = {
    results: new Map(),
    requests: new Map(),
};
var yAccessor = function (d) {
    if (d.value !== undefined) {
        return +d.value;
    }
    if (d.stepInterpolation !== undefined) {
        return +d.stepInterpolation;
    }
    if (d.average !== undefined) {
        return +d.average;
    }
    // We can get here if we ask for a stepInterpolation
    // and there's no points in the range [0, t1]
    // where the domain asked for is [t0, t1]
    console.warn('No obvious y accessor for', d);
    return 0;
};
var y0Accessor = function (data) {
    return data.min ? data.min : yAccessor(data);
};
var y1Accessor = function (data) {
    return data.max ? data.max : yAccessor(data);
};
var calculateGranularity = function (domain, pps) {
    var diff = domain[1] - domain[0];
    for (var i = 1; i <= 60; i += 1) {
        var points = diff / (1000 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "s";
        }
    }
    for (var i = 1; i <= 60; i += 1) {
        var points = diff / (1000 * 60 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "m";
        }
    }
    for (var i = 1; i < 24; i += 1) {
        var points = diff / (1000 * 60 * 60 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "h";
        }
    }
    for (var i = 1; i < 100; i += 1) {
        var points = diff / (1000 * 60 * 60 * 24 * i);
        if (points < pps) {
            return (i === 1 ? '' : i) + "day";
        }
    }
    return 'day';
};
var getTimeSeries = function (id) {
    if (timeseries.requests.has(id)) {
        // @ts-ignore - We're checking for undefined with the "has" check.
        return timeseries.requests.get(id);
    }
    if (timeseries.results.has(id)) {
        // @ts-ignore - We're checking for undefined with the "has" check.
        return timeseries.results.get(id);
    }
    var promise = sdk.TimeSeries.retrieve(id).then(function (timeserie) {
        timeseries.results = timeseries.results.set(id, Promise.resolve(timeserie));
        timeseries.requests.delete(id);
        return timeserie;
    });
    timeseries.requests = timeseries.requests.set(id, promise);
    return promise;
};
var getRawDataPoints = function (_a) {
    var id = _a.id, step = _a.step, start = _a.start, end = _a.end, limit = _a.limit;
    return sdk.Datapoints.retrieve(id, { start: start, end: end, limit: limit }).then(function (data) {
        return data.datapoints.map(function (d) {
            var _a;
            return (_a = {},
                _a["" + (step ? 'stepInterpolation' : 'average')] = d.value,
                _a.timestamp = d.timestamp,
                _a);
        });
    });
};
var mergeInsert = function (base, toInsert, xAccessor, subDomain) {
    if (toInsert.length === 0) {
        return base;
    }
    // Remove the points from base within the subdoconstn
    var strippedBase = base.filter(function (point) { return xAccessor(point) < subDomain[0] || xAccessor(point) > subDomain[1]; });
    return __spread(strippedBase, toInsert).sort(function (a, b) { return xAccessor(a) - xAccessor(b); });
};
var requestsInFlight = {};
var cogniteloader = function (_a) {
    var id = _a.id, timeDomain = _a.timeDomain, timeSubDomain = _a.timeSubDomain, pointsPerSeries = _a.pointsPerSeries, oldSeries = _a.oldSeries, reason = _a.reason;
    return __awaiter(_this, void 0, void 0, function () {
        var baseDomain, subDomain, fetchDomain, granularity, startTime, xAccessor, oldData, step, requestPromise, newDatapoints, seriesInfo;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    baseDomain = timeDomain;
                    subDomain = timeSubDomain;
                    fetchDomain = (reason === 'MOUNTED' ? baseDomain : subDomain).map(Math.round);
                    granularity = calculateGranularity(fetchDomain, pointsPerSeries);
                    if (!(reason === 'INTERVAL')) return [3 /*break*/, 2];
                    if (requestsInFlight[id]) {
                        return [2 /*return*/, oldSeries];
                    }
                    requestsInFlight[id] = true;
                    startTime = baseDomain[0];
                    xAccessor = oldSeries.xAccessor, oldData = oldSeries.data;
                    if (oldData && oldData.length > 0) {
                        startTime = xAccessor(oldData[oldData.length - 1]) + 1;
                    }
                    step = oldSeries.step;
                    requestPromise = oldSeries.drawPoints
                        ? getRawDataPoints({
                            id: id,
                            start: startTime,
                            end: Date.now(),
                            step: step,
                        })
                        : sdk.Datapoints.retrieve(id, {
                            start: startTime,
                            end: Date.now(),
                            granularity: granularity,
                            aggregates: "min,max," + (step ? 'stepInterpolation' : 'average'),
                        }).then(function (data) { return data.datapoints; });
                    return [4 /*yield*/, requestPromise];
                case 1:
                    newDatapoints = _b.sent();
                    requestsInFlight[id] = false;
                    if (oldData) {
                        return [2 /*return*/, __assign({}, oldSeries, { data: __spread(oldData, newDatapoints) })];
                    }
                    return [2 /*return*/, __assign({}, oldSeries, { data: newDatapoints })];
                case 2:
                    seriesInfo = SERIES_GETTERS.get(id) || {
                        firstSeries: [],
                        subDomain: subDomain,
                        granularity: granularity,
                    };
                    if (fetchDomain[1] - fetchDomain[0] < 100) {
                        // Zooming REALLY far in (1 ms end to end)
                        return [2 /*return*/, oldSeries];
                    }
                    return [2 /*return*/, getTimeSeries(id).then(function (timeseriesResponse) {
                            var step = timeseriesResponse.isStep;
                            return (sdk.Datapoints.retrieve(id, {
                                granularity: granularity,
                                aggregates: (step ? 'step' : 'avg') + ",count,min,max",
                                start: fetchDomain[0],
                                end: fetchDomain[1],
                                limit: pointsPerSeries,
                            })
                                .then(function (items) { return __awaiter(_this, void 0, void 0, function () {
                                var points, result, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            points = items.datapoints;
                                            if (!(points.reduce(function (p, c) { return p + (c.count || 0); }, 0) <
                                                pointsPerSeries / 2)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, getRawDataPoints({
                                                    id: id,
                                                    step: step,
                                                    start: fetchDomain[0],
                                                    end: fetchDomain[1],
                                                    limit: pointsPerSeries,
                                                })];
                                        case 1:
                                            result = _a.sent();
                                            data = result;
                                            if (step && points.length) {
                                                // Use the last-known value from step-interpolation to create a fake point at the left-boundary
                                                if (data.length && points[0].timestamp < data[0].timestamp) {
                                                    data = __spread([points[0]], data);
                                                }
                                                else if (!data.length) {
                                                    data = [points[0]];
                                                }
                                            }
                                            return [2 /*return*/, {
                                                    data: data,
                                                    drawPoints: true,
                                                    step: !!step,
                                                }];
                                        case 2: return [2 /*return*/, { data: points, step: !!step }];
                                    }
                                });
                            }); })
                                .then(function (newSeries) {
                                var firstSeries = seriesInfo.firstSeries;
                                var xAccessor = oldSeries.xAccessor;
                                if (reason === 'UPDATE_SUBDOMAIN') {
                                    var val = SERIES_GETTERS.get(id);
                                    SERIES_GETTERS.set(id, __assign({}, val, { firstSeries: val ? val.firstSeries : [], subDomain: subDomain,
                                        granularity: granularity }));
                                    var data = mergeInsert(firstSeries, newSeries.data, xAccessor, subDomain);
                                    return __assign({}, newSeries, { data: data });
                                }
                                return newSeries;
                            })
                                .then(function (newSeries) {
                                if (reason === 'MOUNTED') {
                                    var val = SERIES_GETTERS.get(id);
                                    SERIES_GETTERS.set(id, __assign({}, val, { firstSeries: newSeries.data, subDomain: subDomain,
                                        granularity: granularity }));
                                }
                                return __assign({}, newSeries, { yAccessor: yAccessor });
                            })
                                // Do not crash the app in case of error, just return no data
                                .catch(function () {
                                return { data: [], step: step };
                            }));
                        })];
            }
        });
    });
};

var countDecimals = function (num) {
    if (!Number.isNaN(num) && Math.floor(num) !== num) {
        return num.toString().split('.')[1].length || 0;
    }
    return 0;
};
var findMaxDecimals = function (array) {
    return array.reduce(function (max, current) { return Math.max(max, countDecimals(current)); }, 0);
};
var decimalTickFormatter = function (tick, ticks) {
    return tick.toFixed(findMaxDecimals(ticks));
};

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

var Wrapper = styled__default.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  height: 500px;\n  width: 100%;\n"], ["\n  height: 500px;\n  width: 100%;\n"])));
// Don't allow updating faster than every 1000ms.
var MINIMUM_UPDATE_FREQUENCY_MILLIS = 1000;
var TimeseriesChart = /** @class */ (function (_super) {
    __extends(TimeseriesChart, _super);
    function TimeseriesChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loaded: false,
        };
        _this.onFetchData = function () {
            if (!_this.state.loaded) {
                _this.setState({ loaded: true });
            }
        };
        return _this;
    }
    TimeseriesChart.prototype.render = function () {
        var _a = this.props, startTime = _a.startTime, endTime = _a.endTime, pointsPerSeries = _a.pointsPerSeries, 
        // @ts-ignore
        timeseriesIds = _a.timeseriesIds, 
        // @ts-ignore
        series = _a.series, collections = _a.collections, updateIntervalMillis = _a.updateIntervalMillis, zoomable = _a.zoomable, crosshair = _a.crosshair, contextChart = _a.contextChart, xAxisHeight = _a.xAxisHeight, timeseriesColors = _a.timeseriesColors, yAxisDisplayMode = _a.yAxisDisplayMode, styles = _a.styles, liveUpdate = _a.liveUpdate, yAxisPlacement = _a.yAxisPlacement, hiddenSeries = _a.hiddenSeries, annotations = _a.annotations, ruler = _a.ruler, height = _a.height, width = _a.width, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onBlur = _a.onBlur, onFetchDataError = _a.onFetchDataError;
        var loaded = this.state.loaded;
        var griffSeries = series
            ? series.map(function (s) { return (__assign({}, s, { id: s.id, color: s.color ||
                    timeseriesColors[s.id] ||
                    getColorByString(s.id.toString()), yAxisDisplayMode: s.yAxisDisplayMode || griffReact.AxisDisplayMode[yAxisDisplayMode], hidden: s.hidden || hiddenSeries[s.id], yAccessor: s.yAccessor || yAccessor, y0Accessor: s.y0Accessor || y0Accessor, y1Accessor: s.y1Accessor || y1Accessor })); })
            : timeseriesIds.map(function (id) { return ({
                id: id,
                color: timeseriesColors[id] || getColorByString(id.toString()),
                yAxisDisplayMode: griffReact.AxisDisplayMode[yAxisDisplayMode],
                hidden: hiddenSeries[id],
                yAccessor: yAccessor,
                y0Accessor: y0Accessor,
                y1Accessor: y1Accessor,
            }); });
        return (griffSeries.length !== 0 && (React__default.createElement(antd.Spin, { spinning: !loaded },
            React__default.createElement(Wrapper, { style: styles && styles.container },
                React__default.createElement(griffReact.DataProvider, { defaultLoader: cogniteloader, onFetchData: this.onFetchData, pointsPerSeries: pointsPerSeries, series: griffSeries, collections: __spread(new Set(Object.values(collections))).map(function (unit) { return ({
                        id: unit,
                        color: getColorByString(unit.toString()),
                        yAxisDisplayMode: griffReact.AxisPlacement[yAxisPlacement],
                    }); }), timeDomain: [+startTime, +endTime], onFetchDataError: onFetchDataError, updateInterval: liveUpdate
                        ? Math.max(updateIntervalMillis, MINIMUM_UPDATE_FREQUENCY_MILLIS)
                        : 0 },
                    React__default.createElement(griffReact.LineChart, { zoomable: zoomable, crosshair: crosshair, annotations: annotations, contextChart: {
                            visible: contextChart,
                            height: 100,
                            isDefault: true,
                        }, height: height, width: width, ruler: ruler, yAxisFormatter: decimalTickFormatter, yAxisPlacement: griffReact.AxisPlacement[yAxisPlacement], xAxisHeight: xAxisHeight, onMouseMove: onMouseMove, onMouseOut: onMouseOut, onBlur: onBlur }))))));
    };
    TimeseriesChart.defaultProps = {
        startTime: Date.now() - 60 * 60 * 1000,
        endTime: Date.now(),
        pointsPerSeries: 600,
        updateIntervalMillis: 5000,
        zoomable: false,
        contextChart: false,
        crosshair: false,
        yAxisDisplayMode: 'ALL',
        liveUpdate: false,
        yAxisPlacement: 'RIGHT',
        height: undefined,
        width: undefined,
        timeseriesColors: {},
        hiddenSeries: {},
        annotations: [],
        xAxisHeight: 50,
        collections: {},
        ruler: undefined,
        onFetchDataError: function (e) {
            throw e;
        },
    };
    return TimeseriesChart;
}(React__default.Component));
var templateObject_1$3;

var TimeseriesMetaInfo = function (_a) {
    var metaInfo = _a.metaInfo;
    var metaList = Object.keys(metaInfo).map(function (key) { return ({
        property: key,
        value: metaInfo[key],
    }); });
    return (React__default.createElement(CollapseContainer$1, null,
        React__default.createElement(PanelWrapper$1, { header: 'Metadata', key: 'timeseries-metadata' },
            React__default.createElement(Table, null, metaList.map(function (entry) { return (React__default.createElement(TableRow, { key: entry.property },
                React__default.createElement(TableProperty, null, entry.property),
                React__default.createElement(TableValue, null, entry.value))); })))));
};
var Table = styled__default.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: table;\n"], ["\n  display: table;\n"])));
var TableRow = styled__default.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: table-row;\n"], ["\n  display: table-row;\n"])));
var TableProperty = styled__default.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  display: table-cell;\n  font-weight: bold;\n  min-width: 200px;\n"], ["\n  display: table-cell;\n  font-weight: bold;\n  min-width: 200px;\n"])));
var TableValue = styled__default.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: table-cell;\n  padding-left: 10px;\n"], ["\n  display: table-cell;\n  padding-left: 10px;\n"])));
var PanelWrapper$1 = styled__default(Collapse.Panel)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var CollapseContainer$1 = styled__default(Collapse)(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  && {\n    margin-top: 14px;\n    min-width: 600px;\n    max-width: 800px;\n  }\n"], ["\n  && {\n    margin-top: 14px;\n    min-width: 600px;\n    max-width: 800px;\n  }\n"])));
var templateObject_1$4, templateObject_2$3, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$1;

var defaultTheme = {
    // ant design colors
    primaryColor: '#1890ff',
    infoColor: '#1890ff',
    successColor: '#1890ff',
    processingColor: '#1890ff',
    errorColor: '#f5222d',
    highlightColor: '#f5222d',
    warningColor: '#faad14',
    normalColor: '#d9d9d9',
    white: '#fff',
    black: '#000',
    textColor: 'rgba(0,0,0, 0.65)',
    textColorSecondary: 'rgba(0,0,0, 0.45)',
    textColorInverse: '#fff',
    // gearbox colors and styles
    lightGrey: '#f5f5f5',
    lightShadow: 'rgba(0, 0, 0, 0.05) 1px 6px 20px 8px, rgba(0, 0, 0, 0.11) 0px 6px 6px',
    containerColor: '#fff',
    textColorDisabled: 'rgba(0,0,0, 0.25)',
    buttonBorderColor: '#d9d9d9',
    buttonDisabledColor: '#f5f5f5',
};

var TimeseriesValue = /** @class */ (function (_super) {
    __extends(TimeseriesValue, _super);
    function TimeseriesValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isComponentUnmounted = false;
        _this.state = {
            value: null,
            lastTimestamp: null,
        };
        _this.interval = null;
        _this.getLatestDatapoint = function () { return __awaiter(_this, void 0, void 0, function () {
            var datapoint, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, connectPromiseToUnmountState(this, sdk.Datapoints.retrieveLatest(this.props.timeseriesName))];
                    case 1:
                        datapoint = _a.sent();
                        if (!datapoint) {
                            this.setState({
                                value: null,
                                lastTimestamp: null,
                            });
                            return [2 /*return*/];
                        }
                        if (this.state.lastTimestamp !== null &&
                            datapoint.timestamp < this.state.lastTimestamp) {
                            return [2 /*return*/]; // old data point - skip it
                        }
                        this.setState({
                            value: typeof datapoint.value === 'number'
                                ? datapoint.value.toFixed(3)
                                : datapoint.value || null,
                            lastTimestamp: datapoint.timestamp,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof CanceledPromiseException !== true) {
                            throw error_1;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    TimeseriesValue.prototype.componentDidMount = function () {
        this.getLatestDatapoint();
        if (this.props.liveUpdate) {
            this.interval = setInterval(this.getLatestDatapoint, this.props.updatePeriodMillis);
        }
    };
    TimeseriesValue.prototype.componentWillUnmount = function () {
        this.isComponentUnmounted = true;
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    TimeseriesValue.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeseriesName !== this.props.timeseriesName) {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.getLatestDatapoint();
            this.interval = setInterval(this.getLatestDatapoint, this.props.updatePeriodMillis);
        }
    };
    TimeseriesValue.prototype.render = function () {
        return (React__default.createElement(Container, null,
            React__default.createElement(Value, null,
                this.state.value,
                this.props.unit && React__default.createElement("sup", null, this.props.unit)),
            React__default.createElement(Description, null, this.props.timeseriesDescription)));
    };
    TimeseriesValue.defaultProps = {
        liveUpdate: true,
        timeseriesDescription: '',
        updatePeriodMillis: 5000,
    };
    return TimeseriesValue;
}(React__default.PureComponent));
var Container = styled__default.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  max-width: 230px;\n  text-align: left;\n"], ["\n  max-width: 230px;\n  text-align: left;\n"])));
var Value = styled__default.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n"], ["\n  font-size: 14px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
Value.defaultProps = {
    theme: {
        gearbox: defaultTheme,
    },
};
var Description = styled__default.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  font-size: 12px;\n  color: ", ";\n"], ["\n  font-size: 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColorSecondary;
});
Description.defaultProps = {
    theme: {
        gearbox: defaultTheme,
    },
};
var templateObject_1$5, templateObject_2$4, templateObject_3$3;

var timeScales = {
    lastYear: {
        unit: 'year',
        number: 1,
    },
    lastMonth: {
        unit: 'month',
        number: 1,
    },
    lastWeek: {
        unit: 'week',
        number: 1,
    },
    lastDay: {
        unit: 'day',
        number: 1,
    },
    lastHour: {
        unit: 'hour',
        number: 1,
    },
    last15minutes: {
        unit: 'minutes',
        number: 15,
    },
};
var TimeseriesChartMetaPure = /** @class */ (function (_super) {
    __extends(TimeseriesChartMetaPure, _super);
    function TimeseriesChartMetaPure(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePeriodChange = function (e) {
            var key = e.target.value;
            _this.setState({
                basePeriod: _this.getBasePeriod(key),
                timePeriod: key,
            });
        };
        _this.state = {
            timePeriod: props.defaultBasePeriod ? '-' : props.defaultTimePeriod,
            basePeriod: props.defaultBasePeriod || _this.getBasePeriod(props.defaultTimePeriod),
        };
        return _this;
    }
    TimeseriesChartMetaPure.prototype.getBasePeriod = function (period) {
        var _a = timeScales[period], substructNumber = _a.number, unit = _a.unit;
        return {
            // @ts-ignore
            startTime: +moment().subtract(substructNumber, unit),
            endTime: +moment(),
        };
    };
    TimeseriesChartMetaPure.prototype.render = function () {
        var _a = this.props, liveUpdate = _a.liveUpdate, showDescription = _a.showDescription, showPeriods = _a.showPeriods, showChart = _a.showChart, showDatapoint = _a.showDatapoint, showMetadata = _a.showMetadata, timeseries = _a.timeseries, updateIntervalMillis = _a.updateIntervalMillis;
        var _b = this.state, basePeriod = _b.basePeriod, timePeriod = _b.timePeriod;
        if (!timeseries) {
            return null;
        }
        return (React__default.createElement(Container$1, null,
            showDescription && React__default.createElement(Description$1, null, timeseries.description),
            showPeriods && (React__default.createElement(CenterWrapper, null,
                React__default.createElement(Radio.Group, { value: timePeriod, onChange: this.handlePeriodChange }, Object.keys(timeScales).map(function (key) { return (React__default.createElement(Radio.Button, { key: key, value: key }, timeScales[key].number + " " + timeScales[key].unit)); })))),
            showChart && (React__default.createElement(TimeseriesChart, { timeseriesIds: [timeseries.id], liveUpdate: liveUpdate, updateIntervalMillis: updateIntervalMillis, startTime: basePeriod.startTime, endTime: basePeriod.endTime })),
            showDatapoint && (React__default.createElement(CenterWrapper, null,
                React__default.createElement(TimeseriesValue, { timeseriesName: timeseries.name, timeseriesDescription: timeseries.description, liveUpdate: liveUpdate, updatePeriodMillis: updateIntervalMillis, unit: timeseries.unit }))),
            showMetadata && (React__default.createElement(CenterWrapper, null,
                React__default.createElement(TimeseriesMetaInfo, { metaInfo: timeseries.metadata || {} })))));
    };
    TimeseriesChartMetaPure.defaultProps = {
        liveUpdate: true,
        updateIntervalMillis: 5000,
        defaultTimePeriod: 'lastHour',
        showDescription: true,
        showPeriods: true,
        showChart: true,
        showDatapoint: true,
        showMetadata: true,
    };
    return TimeseriesChartMetaPure;
}(React__default.PureComponent));
var Container$1 = styled__default.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n"], ["\n  display: block;\n  width: 100%;\n"])));
var Description$1 = styled__default.p(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var CenterWrapper = styled__default.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"], ["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"])));
var templateObject_1$6, templateObject_2$5, templateObject_3$4;

var TimeseriesPanel = /** @class */ (function (_super) {
    __extends(TimeseriesPanel, _super);
    function TimeseriesPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeseriesPanel.prototype.render = function () {
        var _a = this.props, strings = _a.strings, timeseries = _a.timeseries, rest = __rest(_a, ["strings", "timeseries"]);
        if (!timeseries || !timeseries.length) {
            return (React__default.createElement(NoTimeseries, { "data-test-id": "no-timeseries" }, "" + strings.noTimeseriesSign));
        }
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(TableWrapper$1, null,
                React__default.createElement(CollapseContainer$2, null, timeseries &&
                    timeseries.map(function (ts) { return (React__default.createElement(PanelWrapper$2, { header: ts.name, key: ts.id.toString() },
                        React__default.createElement(TimeseriesChartMetaPure, __assign({ key: ts.id, timeseries: ts }, rest)))); })))));
    };
    TimeseriesPanel.defaultProps = {
        strings: {
            noTimeseriesSign: 'No timeseries linked to this asset',
        },
    };
    return TimeseriesPanel;
}(React__default.PureComponent));
var PanelWrapper$2 = styled__default(antd.Collapse.Panel)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var TableWrapper$1 = styled__default.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"], ["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"])));
var CollapseContainer$2 = styled__default(antd.Collapse)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var NoTimeseries = styled__default.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  padding: 16px;\n"], ["\n  padding: 16px;\n"])));
var templateObject_1$7, templateObject_2$6, templateObject_3$5, templateObject_4$3;

var SpinContainer = styled__default.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"])));
var TabPane = antd.Tabs.TabPane;
var AssetMeta = /** @class */ (function (_super) {
    __extends(AssetMeta, _super);
    function AssetMeta(props) {
        var _this = _super.call(this, props) || this;
        _this.loadAll = function (assetId) { return __awaiter(_this, void 0, void 0, function () {
            var _a, eventProps, docsProps, timeseriesProps, sdkInstance, query, promises, _b, asset, events, docs, timeseries, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, eventProps = _a.eventProps, docsProps = _a.docsProps, timeseriesProps = _a.timeseriesProps, sdkInstance = _a.sdkInstance;
                        query = { assetId: assetId, limit: 1000 };
                        promises = [
                            retrieveAsset(sdkInstance, assetId),
                            this.includesPanel('events')
                                ? getAssetEvent(sdkInstance, query)
                                : Promise.resolve(null),
                            this.includesPanel('documents')
                                ? getAssetFiles(sdkInstance, query)
                                : Promise.resolve(null),
                            this.includesPanel('timeseries')
                                ? getAssetTimeseries(sdkInstance, query)
                                : Promise.resolve(null),
                        ];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, connectPromiseToUnmountState(this, Promise.all(promises))];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 4]), asset = _b[0], events = _b[1], docs = _b[2], timeseries = _b[3];
                        this.setState({
                            isLoading: false,
                            asset: asset || null,
                            assetEvents: events ? __assign({}, eventProps, { events: events }) : null,
                            docs: docs ? __assign({}, docsProps, { docs: docs }) : null,
                            timeseries: timeseries ? __assign({}, timeseriesProps, { timeseries: timeseries }) : null,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        if (error_1 instanceof CanceledPromiseException !== true) {
                            throw error_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.tabStyle = function (tab, contentLen) {
            return contentLen > 0 ? (React__default.createElement("span", null, tab)) : (React__default.createElement(EmptyPane, { style: _this.props.styles && _this.props.styles.emptyTab },
                "(",
                tab,
                ")"));
        };
        _this.includesPanel = function (pane) {
            return _this.props.hidePanels ? _this.props.hidePanels.indexOf(pane) < 0 : true;
        };
        _this.isComponentUnmounted = false;
        _this.state = {
            asset: null,
            assetEvents: null,
            docs: null,
            timeseries: null,
            isLoading: true,
        };
        return _this;
    }
    AssetMeta.prototype.componentDidMount = function () {
        var assetId = this.props.assetId;
        if (assetId) {
            this.loadAll(assetId);
        }
        else {
            this.setState({
                isLoading: false,
            });
            return;
        }
    };
    AssetMeta.prototype.componentWillUnmount = function () {
        this.isComponentUnmounted = true;
    };
    AssetMeta.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.assetId !== this.props.assetId) {
            this.setState({
                isLoading: true,
            });
            this.loadAll(this.props.assetId);
        }
    };
    AssetMeta.prototype.renderDetails = function () {
        var styles = this.props.styles;
        var asset = this.state.asset;
        if (!asset || !asset.metadata || !this.includesPanel('details')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Details', Object.keys(asset.metadata).length), key: "details" },
            React__default.createElement(DescriptionList, { valueSet: asset.metadata, styles: styles && styles.details })));
    };
    AssetMeta.prototype.renderTimeseries = function () {
        var timeseries = this.state.timeseries;
        if (!timeseries || !this.includesPanel('timeseries')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Timeseries', timeseries && timeseries.timeseries ? timeseries.timeseries.length : 0), key: "timeseries" },
            React__default.createElement(TimeseriesPanel, __assign({}, timeseries))));
    };
    AssetMeta.prototype.renderDocuments = function () {
        var styles = this.props.styles;
        var docs = this.state.docs;
        if (!docs || !this.includesPanel('documents')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Documents', docs.docs.length), key: "documents" },
            React__default.createElement(DocumentTable, __assign({}, docs, { styles: styles && styles.documents }))));
    };
    AssetMeta.prototype.renderEvents = function () {
        var styles = this.props.styles;
        var assetEvents = this.state.assetEvents;
        if (!assetEvents || !this.includesPanel('events')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Events', assetEvents.events ? assetEvents.events.length : 0), key: "events" },
            React__default.createElement(AssetEventsPanel, __assign({}, assetEvents, { styles: styles && styles.events }))));
    };
    AssetMeta.prototype.render = function () {
        var _a = this.props, styles = _a.styles, propsTab = _a.tab, onPaneChange = _a.onPaneChange;
        var _b = this.state, asset = _b.asset, isLoading = _b.isLoading;
        if (isLoading) {
            return (React__default.createElement(SpinContainer, null,
                React__default.createElement(antd.Spin, null)));
        }
        var tab = propsTab === 'documents' || propsTab === 'events' ? propsTab : 'details';
        return asset ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { style: styles && styles.header },
                React__default.createElement("h3", null, asset.name ? asset.name : asset.id),
                asset.description && React__default.createElement("p", null, asset.description)),
            React__default.createElement(antd.Tabs, { defaultActiveKey: tab, onChange: onPaneChange },
                this.renderDetails(),
                this.renderTimeseries(),
                this.renderDocuments(),
                this.renderEvents()))) : (React__default.createElement("p", null, "no Asset"));
    };
    return AssetMeta;
}(React__default.Component));
var EmptyPane = styled__default.span(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  color: #9b9b9b;\n"], ["\n  color: #9b9b9b;\n"])));
var templateObject_1$8, templateObject_2$7;

var withObservable = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        __extends(WithObservable, _super);
        function WithObservable(props) {
            var _this = _super.call(this, props) || this;
            _this.unmount$ = new rxjs.Subject();
            var observable = props.observable;
            _this.state = {};
            observable
                .pipe(operators.takeUntil(_this.unmount$))
                .subscribe(function (passedProps) { return _this.setState(__assign({}, passedProps)); });
            return _this;
        }
        WithObservable.prototype.render = function () {
            return (React__default.createElement(React__default.Fragment, null, Object.keys(this.state).length ? (React__default.createElement(WrapperComponent, __assign({}, this.state))) : null));
        };
        WithObservable.prototype.componentWillUnmount = function () {
            this.unmount$.next();
            this.unmount$.complete();
        };
        return WithObservable;
    }(React__default.Component));
};

var AssetMetaControlled = withObservable(AssetMeta);

var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes["ERROR"] = "error";
    NotificationTypes["WARNING"] = "warning";
    NotificationTypes["INFO"] = "info";
    NotificationTypes["SUCCESS"] = "success";
})(NotificationTypes || (NotificationTypes = {}));
var notification = function (_a) {
    var _b = _a.type, type = _b === void 0 ? NotificationTypes.INFO : _b, message = _a.message, description = _a.description, props = __rest(_a, ["type", "message", "description"]);
    antd.notification[type](__assign({ message: message, key: message, description: description }, props));
};
var ocrError = {
    type: NotificationTypes.ERROR,
    message: 'Network error',
    description: "Check developer's console for more info",
};
var ocrNoTextFound = {
    type: NotificationTypes.WARNING,
    message: 'Failed to find any text in the image',
    description: 'Low lighting and worn tags might cause this',
};
var ocrAssetNotFind = {
    type: NotificationTypes.WARNING,
    message: 'Oops, could not match the text in that picture to any tag',
    description: 'Worn tags, low lighting might cause poor tag matching. Please try again!',
};
var ocrSuccess = {
    type: NotificationTypes.SUCCESS,
    message: 'Found text in image',
    description: "Querying the Cognite data platform for matches",
};
var ocrAssetFind = {
    type: NotificationTypes.SUCCESS,
    message: 'Assets have been found',
    description: "Few assets have been found on recognized image",
};
var ocrErrorVideo = {
    type: NotificationTypes.WARNING,
    message: 'Camera access has been denied',
    description: 'Please, allow application to use camera on your device',
};

var SpinContainer$1 = styled__default(antd.Spin)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  background-color: ", ";\n  z-index: 100;\n\n  &:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  background-color: ", ";\n  z-index: 100;\n\n  &:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"])), function (_a) {
    var backgroundcolor = _a.backgroundcolor;
    return backgroundcolor;
});
SpinContainer$1.defaultProps = {
    backgroundcolor: 'rgba(0, 0, 0, 0.5)',
};
function LoadingOverlay(_a) {
    var isLoading = _a.isLoading, backgroundColor = _a.backgroundColor, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c;
    if (isLoading) {
        return (React__default.createElement(SpinContainer$1, { delay: delay, size: size, backgroundcolor: backgroundColor }));
    }
    return null;
}
var templateObject_1$9;

var StyledVideo = styled__default.video(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n"], ["\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n"])));
function hasGetUserMedia() {
    return !!(navigator.getUserMedia ||
        // @ts-ignore
        navigator.webkitGetUserMedia ||
        // @ts-ignore
        navigator.mozGetUserMedia ||
        // @ts-ignore
        navigator.msGetUserMedia ||
        (navigator.mediaDevices && navigator.mediaDevices.getUserMedia));
}
var Webcam = /** @class */ (function (_super) {
    __extends(Webcam, _super);
    function Webcam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasUserMedia: false,
            src: '',
        };
        _this.video = null;
        _this.stream = null;
        return _this;
    }
    Webcam.prototype.componentDidMount = function () {
        if (!hasGetUserMedia()) {
            return;
        }
        Webcam.mountedInstances.push(this);
        if (!this.state.hasUserMedia && !Webcam.userMediaRequested) {
            this.requestUserMedia();
        }
    };
    Webcam.prototype.componentWillUpdate = function (nextProps) {
        if (nextProps.videoSource !== this.props.videoSource ||
            nextProps.audioSource !== this.props.audioSource) {
            this.requestUserMedia();
        }
    };
    Webcam.prototype.componentWillUnmount = function () {
        var index = Webcam.mountedInstances.indexOf(this);
        Webcam.mountedInstances.splice(index, 1);
        if (Webcam.mountedInstances.length === 0 &&
            this.state.hasUserMedia &&
            this.stream) {
            if (this.stream.stop) {
                this.stream.stop();
            }
            else {
                if (this.stream.getVideoTracks) {
                    this.stream.getVideoTracks().forEach(function (track) { return track.stop(); });
                }
                if (this.stream.getAudioTracks) {
                    this.stream.getAudioTracks().forEach(function (track) { return track.stop(); });
                }
            }
            Webcam.userMediaRequested = false;
            window.URL.revokeObjectURL(this.state.src);
        }
    };
    Webcam.prototype.requestUserMedia = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, audioSource_1, videoSource_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.props.audioSource && this.props.videoSource)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sourceSelected(this.props.audioSource, this.props.videoSource)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!('mediaDevices' in navigator)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 4:
                        devices = _a.sent();
                        audioSource_1 = '';
                        videoSource_1 = '';
                        devices.forEach(function (device) {
                            if (device.kind === 'audioinput') {
                                audioSource_1 = device.deviceId;
                            }
                            else if (device.kind === 'videoinput') {
                                videoSource_1 = device.deviceId;
                            }
                        });
                        if (this.props.audioSource) {
                            audioSource_1 = this.props.audioSource;
                        }
                        if (this.props.videoSource) {
                            videoSource_1 = this.props.videoSource;
                        }
                        return [4 /*yield*/, this.sourceSelected(audioSource_1, videoSource_1)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        // todo: add error handling
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7:
                        Webcam.userMediaRequested = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Webcam.prototype.handleUserMedia = function (stream, error) {
        if (error) {
            this.setState({
                hasUserMedia: false,
            });
            return;
        }
        try {
            this.stream = stream;
            if (this.video) {
                this.video.srcObject = stream;
            }
            this.setState({
                hasUserMedia: true,
            });
        }
        catch (err) {
            var src = window.URL.createObjectURL(stream);
            this.stream = stream;
            this.setState({
                hasUserMedia: true,
                src: src,
            });
        }
    };
    Webcam.prototype.render = function () {
        var _this = this;
        var _a = this.props, isDesktop = _a.isDesktop, setRef = _a.setRef;
        var videoStyles = isDesktop ? {} : { objectFit: 'cover' };
        return (React__default.createElement(StyledVideo, { autoPlay: true, muted: this.props.audio, className: this.props.className, style: __assign({}, videoStyles), ref: function (ref) {
                _this.video = ref;
                if (setRef) {
                    setRef(ref);
                }
            } }));
    };
    Webcam.prototype.sourceSelected = function (audioSource, videoSource) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, onError, audio, width, height, constraints, stream_1, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onError = _a.onError, audio = _a.audio;
                        if (!this.video) {
                            return [2 /*return*/];
                        }
                        width = 0;
                        height = 0;
                        if (this.video.clientWidth > this.video.clientHeight) {
                            width = this.video.clientWidth;
                            height = this.video.clientHeight;
                        }
                        else {
                            width = this.video.clientHeight;
                            height = this.video.clientWidth;
                        }
                        constraints = {
                            video: {
                                facingMode: 'environment',
                                width: width,
                                height: height,
                                deviceId: videoSource,
                            },
                            audio: audio
                                ? {
                                    deviceId: audioSource,
                                }
                                : false,
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                    case 2:
                        stream_1 = _b.sent();
                        Webcam.mountedInstances.forEach(function (instance) {
                            return instance.handleUserMedia(stream_1);
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        Webcam.mountedInstances.forEach(function (instance) {
                            return instance.handleUserMedia(null, e_1);
                        });
                        if (onError) {
                            onError(e_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Webcam.mountedInstances = [];
    Webcam.userMediaRequested = false;
    Webcam.defaultProps = {
        audio: false,
        className: '',
        height: 480,
        width: 640,
        audioSource: null,
        videoSource: null,
        isDesktop: true,
    };
    return Webcam;
}(React.Component));
var templateObject_1$a;

var Wrapper$1 = styled__default.img(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  min-width: 150px;\n  top: 50%;\n  transform: translate(0, -50%);\n"], ["\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  min-width: 150px;\n  top: 50%;\n  transform: translate(0, -50%);\n"])));
function WebcamScreenshot(_a) {
    var src = _a.src, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React__default.createElement(Wrapper$1, { src: "data:image/png;base64," + src, alt: "Captured from webcam", id: "freezeFrame", className: className }));
}
var templateObject_1$b;

var CameraButton = styled__default.button(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  border-radius: 100%;\n  width: 75px;\n  height: 75px;\n  outline: none;\n  transform: translateY(-50%);\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: .9\n  font-weight: 600;\n  :hover {\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  border-radius: 100%;\n  width: 75px;\n  height: 75px;\n  outline: none;\n  transform: translateY(-50%);\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: .9\n  font-weight: 600;\n  :hover {\n    opacity: 1;\n  }\n"])));
var Wrapper$2 = styled__default.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"], ["\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"])));
var defaultStrings = {
    reset: 'Reset',
};
function WebcamScanner(_a) {
    var capture = _a.capture, imageSrc = _a.imageSrc, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, setRef = _a.setRef, onReset = _a.onReset, styles = _a.styles, _c = _a.strings, strings = _c === void 0 ? {} : _c, onError = _a.onError, button = _a.button;
    var onCaptureClick = function () {
        if (!imageSrc && capture) {
            capture();
        }
        else if (imageSrc && onReset) {
            onReset();
        }
    };
    var resultStrings = __assign({}, defaultStrings, strings);
    return (React__default.createElement(Wrapper$2, null,
        React__default.createElement(LoadingOverlay, { size: 'large', isLoading: isLoading }),
        imageSrc && React__default.createElement(WebcamScreenshot, { src: imageSrc }),
        React__default.createElement(Webcam, { audio: false, setRef: setRef, className: "camera", onError: onError }),
        !isLoading &&
            (button ? (button(onCaptureClick, imageSrc)) : (React__default.createElement(CameraButton, { onClick: onCaptureClick, "data-test-id": "scanner-camera-button", style: styles && styles.button }, imageSrc ? resultStrings.reset : '')))));
}
var templateObject_1$c, templateObject_2$8;

var Wrapper$3 = styled__default.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n"], ["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n"])));
var ASNotifyTypes;
(function (ASNotifyTypes) {
    ASNotifyTypes["recognizeSuccess"] = "recognizeSuccess";
    ASNotifyTypes["recognizeFails"] = "recognizeFails";
    ASNotifyTypes["assetsFind"] = "assetsFind";
    ASNotifyTypes["assetsEmpty"] = "assetsEmpty";
    ASNotifyTypes["errorVideoAccess"] = "errorVideoAccess";
    ASNotifyTypes["errorOccurred"] = "errorOccurred";
})(ASNotifyTypes || (ASNotifyTypes = {}));
var AssetScanner = /** @class */ (function (_super) {
    __extends(AssetScanner, _super);
    function AssetScanner(props) {
        var _this = _super.call(this, props) || this;
        _this.notification = _this.prepareNotifications();
        _this.state = {
            isLoading: false,
            scannedImageSrc: '',
        };
        _this.video = null;
        _this.setRefBound = _this.setRef.bind(_this);
        _this.captureBound = _this.capture.bind(_this);
        _this.resetSearchBound = _this.resetSearch.bind(_this);
        return _this;
    }
    AssetScanner.prototype.componentDidMount = function () {
        this.resetSearch();
    };
    AssetScanner.prototype.setRef = function (video) {
        this.video = video;
    };
    AssetScanner.prototype.resetSearch = function () {
        var onImageReset = this.props.onImageReset;
        if (!this.video) {
            return;
        }
        if (onImageReset) {
            onImageReset();
        }
        this.setState({
            scannedImageSrc: '',
            isLoading: false,
        });
    };
    AssetScanner.prototype.capture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, onImageRecognizeFinish, onImageRecognizeStart, onImageRecognizeEmpty, onAssetFetchResult, recognizeSuccess, recognizeFails, imageString, imageSrc, strings, assets;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onImageRecognizeFinish = _a.onImageRecognizeFinish, onImageRecognizeStart = _a.onImageRecognizeStart, onImageRecognizeEmpty = _a.onImageRecognizeEmpty, onAssetFetchResult = _a.onAssetFetchResult;
                        recognizeSuccess = ASNotifyTypes.recognizeSuccess, recognizeFails = ASNotifyTypes.recognizeFails;
                        this.startLoading();
                        return [4 /*yield*/, this.getImageFromCanvas()];
                    case 1:
                        imageString = _b.sent();
                        if (!imageString) {
                            this.endLoading();
                            return [2 /*return*/];
                        }
                        if (onImageRecognizeStart) {
                            onImageRecognizeStart(imageString);
                        }
                        imageSrc = imageString.split(',')[1];
                        this.setScannedImageSrc(imageSrc);
                        return [4 /*yield*/, this.recognizeImage(imageSrc)];
                    case 2:
                        strings = _b.sent();
                        if (onImageRecognizeFinish) {
                            onImageRecognizeFinish(strings);
                        }
                        if (!(strings !== null && strings.length >= 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getAssetsHandler(strings)];
                    case 3:
                        assets = _b.sent();
                        this.endLoading();
                        this.notification(recognizeSuccess);
                        if (onAssetFetchResult) {
                            onAssetFetchResult(assets);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (strings !== null) {
                            this.endLoading();
                            this.notification(recognizeFails);
                            if (onImageRecognizeEmpty) {
                                onImageRecognizeEmpty();
                            }
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AssetScanner.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, scannedImageSrc = _a.scannedImageSrc;
        var _b = this.props, styles = _b.styles, strings = _b.strings, onError = _b.onError, button = _b.button;
        return (React__default.createElement(Wrapper$3, null,
            React__default.createElement(WebcamScanner, { isLoading: isLoading, imageSrc: scannedImageSrc, capture: this.captureBound, setRef: this.setRefBound, onReset: this.resetSearchBound, strings: strings, styles: styles, onError: onError, button: button })));
    };
    AssetScanner.prototype.startLoading = function () {
        var onStartLoading = this.props.onStartLoading;
        if (this.video) {
            this.video.pause();
        }
        this.setState({ isLoading: true });
        if (onStartLoading) {
            onStartLoading();
        }
    };
    AssetScanner.prototype.endLoading = function () {
        var onEndLoading = this.props.onEndLoading;
        if (this.video) {
            this.video.play();
        }
        this.setState({ isLoading: false });
        if (onEndLoading) {
            onEndLoading();
        }
    };
    AssetScanner.prototype.setScannedImageSrc = function (scannedImageSrc) {
        if (scannedImageSrc === void 0) { scannedImageSrc = ''; }
        this.setState({ scannedImageSrc: scannedImageSrc });
    };
    AssetScanner.prototype.prepareNotifications = function () {
        var _a = this.props, customNotification = _a.customNotification, enableNotification = _a.enableNotification;
        if (!enableNotification) {
            return function () { return false; };
        }
        return customNotification || this.embeddedNotification;
    };
    AssetScanner.prototype.embeddedNotification = function (type) {
        var _a;
        var notifications = (_a = {},
            _a[ASNotifyTypes.recognizeSuccess] = function () { return notification(ocrSuccess); },
            _a[ASNotifyTypes.recognizeFails] = function () { return notification(ocrNoTextFound); },
            _a[ASNotifyTypes.assetsFind] = function () { return notification(ocrAssetFind); },
            _a[ASNotifyTypes.assetsEmpty] = function () { return notification(ocrAssetNotFind); },
            _a[ASNotifyTypes.errorVideoAccess] = function () { return notification(ocrErrorVideo); },
            _a[ASNotifyTypes.errorOccurred] = function () { return notification(ocrError); },
            _a);
        return notifications[type]();
    };
    AssetScanner.prototype.getAssets = function (strings) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(strings.map(function (s) { return getAssetList({ query: s }); }))];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(function (asset) { return asset.length; })
                            .reduce(function (res, current) { return res.concat(current); })];
                }
            });
        });
    };
    // Made async to provide better UX for component
    AssetScanner.prototype.getImageFromCanvas = function () {
        var errorVideoAccess = ASNotifyTypes.errorVideoAccess;
        if (!this.video) {
            this.notification(errorVideoAccess);
            return Promise.resolve('');
        }
        var aspectRatio = this.video.videoWidth / this.video.videoHeight;
        var canvas = getCanvas(this.video, this.video.clientWidth, this.video.clientWidth / aspectRatio);
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(canvas.toDataURL()); }, 0);
        });
    };
    AssetScanner.prototype.recognizeImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ocrKey, onOcrError, extractOcrStrings, ocrRequest, errorOccurred, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, ocrKey = _a.ocrKey, onOcrError = _a.onOcrError, extractOcrStrings = _a.extractOcrStrings, ocrRequest = _a.ocrRequest;
                        errorOccurred = ASNotifyTypes.errorOccurred;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ocrRequest({
                                image: image,
                                key: ocrKey,
                                extractOcrStrings: extractOcrStrings,
                            })];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_1 = _b.sent();
                        if (onOcrError) {
                            onOcrError(error_1);
                        }
                        this.notification(errorOccurred);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AssetScanner.prototype.getAssetsHandler = function (strings) {
        return __awaiter(this, void 0, void 0, function () {
            var onError, errorOccurred, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onError = this.props.onError;
                        errorOccurred = ASNotifyTypes.errorOccurred;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getAssets(strings)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        this.notification(errorOccurred);
                        if (onError) {
                            onError(error_2);
                        }
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AssetScanner.defaultProps = {
        ocrRequest: ocrRecognize,
        enableNotification: false,
    };
    return AssetScanner;
}(React__default.Component));
var templateObject_1$d;

function getRootAssetList() {
    return __awaiter(this, void 0, void 0, function () {
        var apiAssets;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.Assets.list({ depth: 0 })];
                case 1:
                    apiAssets = _a.sent();
                    return [2 /*return*/, apiAssets.items
                            ? apiAssets.items.map(function (apiAsset) {
                                return {
                                    id: apiAsset.id,
                                    name: apiAsset.name || '',
                                    description: apiAsset.description,
                                    path: apiAsset.path,
                                    depth: apiAsset.depth,
                                    metadata: apiAsset.metadata,
                                    parentId: apiAsset.parentId,
                                    createdTime: apiAsset.createdTime,
                                    lastUpdatedTime: apiAsset.lastUpdatedTime,
                                };
                            })
                            : []];
            }
        });
    });
}
var defaultStrings$1 = {
    loading: 'Loading',
    all: '-- All --',
};
var RootAssetSelect = /** @class */ (function (_super) {
    __extends(RootAssetSelect, _super);
    function RootAssetSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectAsset = function (selectedAssetId) {
            var onAssetSelected = _this.props.onAssetSelected;
            _this.setState({ current: selectedAssetId });
            if (onAssetSelected) {
                onAssetSelected(selectedAssetId);
            }
        };
        var assetId = props.assetId;
        _this.state = {
            current: assetId,
            assets: null,
        };
        return _this;
    }
    RootAssetSelect.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var assets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getRootAssetList()];
                    case 1:
                        assets = _a.sent();
                        this.setState({ assets: assets });
                        return [2 /*return*/];
                }
            });
        });
    };
    RootAssetSelect.prototype.render = function () {
        var _a = this.props, allowAll = _a.allowAll, className = _a.className, strings = _a.strings, styles = _a.styles;
        var _b = this.state, current = _b.current, assets = _b.assets;
        var lang = __assign({}, defaultStrings$1, strings);
        var all = lang.all, loading = lang.loading;
        return assets === null || !assets.length ? (React__default.createElement(antd.Select, { value: 0, className: className, dropdownMatchSelectWidth: false, loading: true },
            React__default.createElement(antd.Select.Option, { key: "global:loading", value: 0 }, loading))) : (React__default.createElement(antd.Select, { value: current, className: className, onChange: this.onSelectAsset, dropdownMatchSelectWidth: false, style: styles && styles.select },
            allowAll && (React__default.createElement(antd.Select.Option, { key: "all", value: 0 }, all)),
            assets.map(function (asset) { return (React__default.createElement(antd.Select.Option, { key: asset.id, value: asset.id }, asset.description || asset.name || asset.id)); })));
    };
    RootAssetSelect.defaultProps = {
        allowAll: true,
        assetId: 0,
        className: '',
        strings: {},
    };
    return RootAssetSelect;
}(React__default.Component));

var formItemLayout = {
    labelCol: {
        sm: { span: 6 },
    },
    wrapperCol: {
        sm: { span: 15, offset: 1 },
    },
};
var formItemLayoutWithoutLabel = {
    labelCol: {
        sm: { span: 0 },
    },
    wrapperCol: {
        sm: { span: 15, offset: 7 },
    },
};
var defaultStrings$2 = {
    metadataLabel: 'Metadata',
    metadataKey: 'Key',
    metadataValue: 'Value',
    nameField: 'Name',
    descriptionField: 'Description',
    addMetadata: 'Add more metadata to search',
    search: 'Search',
};
var SearchForm = function (_a) {
    var onSubmit = _a.onSubmit, form = _a.form, onPressEnter = _a.onPressEnter, styles = _a.styles, _b = _a.strings, strings = _b === void 0 ? {} : _b;
    var getFieldDecorator = form.getFieldDecorator, getFieldValue = form.getFieldValue, setFieldsValue = form.setFieldsValue;
    var lang = __assign({}, defaultStrings$2, strings);
    var metadataLabel = lang.metadataLabel, metadataKey = lang.metadataKey, metadataValue = lang.metadataValue, nameField = lang.nameField, descriptionField = lang.descriptionField, addMetadata = lang.addMetadata, search = lang.search;
    var submit = function (e) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(__assign({}, form.getFieldsValue()));
        }
    };
    var onAddMetadata = function () {
        var keys = form.getFieldValue('metadata');
        var nextKeys = __spread(keys, [{ id: uuid.v4(), key: '', value: '' }]);
        form.setFieldsValue({
            metadata: nextKeys,
        });
    };
    var onRemoveMetadata = function (id) {
        var keys = form.getFieldValue('metadata');
        if (keys.length === 1) {
            return;
        }
        form.setFieldsValue({
            metadata: keys.filter(function (data) { return data.id !== id; }),
        });
    };
    var pressEnter = function (e) {
        e.preventDefault();
        if (onPressEnter) {
            onPressEnter();
        }
    };
    var onChangeInput = function (key, index) { return function (e) {
        var md = metadata.map(function (field, i) {
            var _a;
            var target = e.target;
            return i === index ? __assign({}, field, (_a = {}, _a[key] = target.value, _a)) : field;
        });
        setFieldsValue({ metadata: md });
    }; };
    getFieldDecorator('metadata', {
        initialValue: [{ id: uuid.v4(), key: '', value: '' }],
    });
    var metadata = getFieldValue('metadata').length === 0
        ? [{ id: uuid.v4(), key: '', value: '' }]
        : getFieldValue('metadata');
    var metadataFields = metadata.map(function (data, index) { return (React__default.createElement(antd.Form.Item, __assign({}, (index === 0 ? formItemLayout : formItemLayoutWithoutLabel), { label: index === 0 ? metadataLabel : '', required: false, key: data.id }),
        React__default.createElement(antd.Input.Group, { compact: true, style: { display: 'flex' } },
            React__default.createElement(antd.Input, { className: "meta-key " + data.id, style: { width: '45%', borderRight: 0 }, placeholder: metadataKey, value: data.key, onPressEnter: pressEnter, onChange: onChangeInput('key', index) }),
            React__default.createElement(antd.Input, { style: {
                    width: '10%',
                    borderLeft: 0,
                    pointerEvents: 'none',
                    backgroundColor: '#fff',
                }, value: ":", disabled: true }),
            React__default.createElement(antd.Input, { className: "meta-value " + data.id, style: { width: '45%', borderLeft: 0 }, value: data.value, placeholder: metadataValue, onPressEnter: pressEnter, onChange: onChangeInput('value', index) }),
            metadata.length > 1 ? (React__default.createElement(antd.Icon, { type: "minus-circle-o", style: {
                    position: 'absolute',
                    right: -32,
                    top: '50%',
                    transform: 'translateY(-50%)',
                }, onClick: function () { return onRemoveMetadata(data.id); } })) : null))); });
    return (React__default.createElement(antd.Form, { layout: "horizontal", onSubmit: submit, style: styles && styles.container },
        React__default.createElement(antd.Form.Item, __assign({ label: nameField }, formItemLayout), getFieldDecorator('name')(React__default.createElement(antd.Input, { className: "name", name: "name", maxLength: 50, placeholder: nameField, onPressEnter: pressEnter }))),
        React__default.createElement(antd.Form.Item, __assign({ label: descriptionField }, formItemLayout), getFieldDecorator('description')(React__default.createElement(antd.Input, { className: "description", name: "description", maxLength: 500, placeholder: descriptionField, onPressEnter: pressEnter }))),
        metadataFields,
        React__default.createElement(antd.Form.Item, __assign({}, formItemLayoutWithoutLabel),
            React__default.createElement(antd.Button, { htmlType: "button", type: "dashed", className: "add-more-metadata", onClick: onAddMetadata, style: __assign({ width: '100%' }, (styles && styles.addMoreMetadataButton)) },
                React__default.createElement(antd.Icon, { type: "plus", style: { marginRight: 8 } }),
                addMetadata)),
        onSubmit && (React__default.createElement(antd.Form.Item, __assign({}, formItemLayoutWithoutLabel),
            React__default.createElement(antd.Button, { htmlType: "submit", className: "submit", type: "primary", style: { float: 'right' } }, search)))));
};
var SearchFormHOC = antd.Form.create({
    name: 'asset-search',
    onValuesChange: function (props, _, allValues) {
        if (allValues === void 0) { allValues = {}; }
        var onChange = props.onChange;
        if (onChange) {
            onChange(allValues);
        }
    },
    mapPropsToFields: function (props) {
        if (!props.value) {
            return {};
        }
        var _a = props.value, name = _a.name, description = _a.description, metadata = _a.metadata;
        return {
            name: antd.Form.createFormField({ value: name }),
            description: antd.Form.createFormField({ value: description }),
            metadata: antd.Form.createFormField({
                value: metadata,
            }),
        };
    },
})(SearchForm);
SearchFormHOC.displayName = 'SearchForm';

var InputGroup = styled__default(antd.Input.Group)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex !important;\n  flex-grow: 1;\n  overflow: visible;\n  position: relative;\n\n  > span {\n    z-index: 1;\n  }\n"], ["\n  display: flex !important;\n  flex-grow: 1;\n  overflow: visible;\n  position: relative;\n\n  > span {\n    z-index: 1;\n  }\n"])));
var ChangeSearchButton = styled__default(function (props) { return (React__default.createElement(antd.Button, __assign({}, props))); })(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var RootAssetSelectStyled = styled__default(RootAssetSelect)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  width: 35%;\n"], ["\n  width: 35%;\n"])));
var LiveSearchWrapper = styled__default.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 0;\n\n  > ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    line-height: 1.9;\n\n    > li {\n      padding: 0 10px;\n      cursor: pointer;\n      &:hover {\n        background-color: #eeeeee;\n      }\n\n      &.active {\n        background-color: #f2f2f2;\n        &:hover {\n          background-color: #e0e0e0;\n        }\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 0;\n\n  > ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    line-height: 1.9;\n\n    > li {\n      padding: 0 10px;\n      cursor: pointer;\n      &:hover {\n        background-color: #eeeeee;\n      }\n\n      &.active {\n        background-color: #f2f2f2;\n        &:hover {\n          background-color: #e0e0e0;\n        }\n      }\n    }\n  }\n"])));
var defaultStrings$3 = {
    changeSearch: 'Change search',
    clear: 'Clear',
    searchPlaceholder: 'Search for an asset',
    search: 'Search',
    emptyLiveSearch: 'Nothing found',
    rootAssetSelectLoading: defaultStrings$1.loading,
    rootAssetSelectAll: defaultStrings$1.all,
};
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearch = lodash.debounce(_this.debouncedSearch.bind(_this), _this.props.debounceTime);
        _this.onFilterIconClick = function () {
            var onFilterIconClick = _this.props.onFilterIconClick;
            if (onFilterIconClick) {
                onFilterIconClick();
            }
            _this.setState({
                isModalOpen: true,
            });
        };
        _this.onModalCancel = function () {
            _this.setState({
                advancedSearchQuery: null,
                isModalOpen: false,
                query: '',
            });
        };
        _this.onModalOk = function () {
            _this.setState({ isModalOpen: false }, _this.onSearch);
        };
        _this.onAssetSelected = function (assetId) {
            var onAssetSelected = _this.props.onAssetSelected;
            if (onAssetSelected) {
                onAssetSelected(assetId);
            }
            _this.setState({ assetId: assetId }, _this.onSearch);
        };
        _this.onSearchChange = function (value) {
            return _this.setState({ advancedSearchQuery: value, query: '' });
        };
        _this.onSearchQueryInput = function (e) {
            var target = e.target;
            _this.setState({ query: target.value, liveSearchShow: false }, _this.onSearch);
        };
        _this.onKeyDown = function (e) {
            var _a = _this.props, liveSearch = _a.liveSearch, onKeyDown = _a.onKeyDown;
            var _b = _this.state, cursor = _b.cursor, liveSearchResults = _b.liveSearchResults, liveSearchShow = _b.liveSearchShow;
            if (onKeyDown) {
                onKeyDown(e);
            }
            if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
            if (!liveSearch || !liveSearchShow) {
                return;
            }
            // Arrow up
            if (e.keyCode === 38) {
                if (cursor === undefined || cursor === 0) {
                    _this.setState({ cursor: liveSearchResults.length - 1 });
                }
                else {
                    _this.setState({ cursor: cursor - 1 });
                }
                return;
            }
            // Arrow down
            if (e.keyCode === 40) {
                if (cursor === undefined || cursor === liveSearchResults.length - 1) {
                    _this.setState({ cursor: 0 });
                }
                else {
                    _this.setState({ cursor: cursor + 1 });
                }
                return;
            }
            // Enter
            if (e.keyCode === 13 && cursor !== undefined) {
                var item = liveSearchResults[cursor];
                _this.onLiveSearchClick(item);
            }
        };
        _this.state = {
            assetId: props.assetId || 0,
            query: '',
            isModalOpen: false,
            advancedSearchQuery: null,
            liveSearchResults: [],
            liveSearchShow: false,
        };
        _this.onSearchBlurBounded = _this.onSearchBlur.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        return _this;
    }
    Search.getDerivedStateFromProps = function (props, state) {
        var liveSearch = props.liveSearch, propsSearchResults = props.liveSearchResults;
        var stateSearchResults = state.liveSearchResults, query = state.query, advancedSearchQuery = state.advancedSearchQuery;
        if (!liveSearch) {
            return null;
        }
        if (propsSearchResults !== stateSearchResults) {
            return {
                liveSearchResults: propsSearchResults,
                liveSearchShow: !!query || !!advancedSearchQuery,
            };
        }
        return null;
    };
    Search.prototype.debouncedSearch = function () {
        var _a = this.props, onSearch = _a.onSearch, fetchingLimit = _a.fetchingLimit;
        var _b = this.state, query = _b.query, advancedSearchQuery = _b.advancedSearchQuery, assetId = _b.assetId;
        var assetSubtrees = assetId ? [assetId] : null;
        var apiQuery = {
            advancedSearch: advancedSearchQuery,
            fetchingLimit: fetchingLimit,
            assetSubtrees: assetSubtrees,
            query: query,
        };
        if (onSearch) {
            onSearch(apiQuery);
        }
    };
    Search.prototype.render = function () {
        var _a = this.state, assetId = _a.assetId, query = _a.query, isModalOpen = _a.isModalOpen, advancedSearchQuery = _a.advancedSearchQuery;
        var _b = this.props, advancedSearch = _b.advancedSearch, rootAssetSelect = _b.rootAssetSelect, strings = _b.strings, styles = _b.styles;
        var lang = __assign({}, defaultStrings$3, strings);
        var changeSearch = lang.changeSearch, clear = lang.clear, searchPlaceholder = lang.searchPlaceholder, search = lang.search, rootAssetSelectLoading = lang.rootAssetSelectLoading, rootAssetSelectAll = lang.rootAssetSelectAll;
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(InputGroup, { compact: true },
                rootAssetSelect && (React__default.createElement(RootAssetSelectStyled, { onAssetSelected: this.onAssetSelected, assetId: assetId, strings: {
                        loading: rootAssetSelectLoading,
                        all: rootAssetSelectAll,
                    }, styles: {
                        select: styles && styles.rootAssetSelect,
                    } })),
                advancedSearchQuery ? (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(ChangeSearchButton, { style: styles && styles.advancedSearchButton, type: "primary", onClick: this.onFilterIconClick }, changeSearch),
                    React__default.createElement(antd.Button, { htmlType: "button", onClick: this.onModalCancel }, clear))) : (React__default.createElement(React__default.Fragment, null, advancedSearch ? (React__default.createElement(antd.Input, { placeholder: searchPlaceholder, disabled: !!advancedSearchQuery, value: query, onChange: this.onSearchQueryInput, allowClear: true, onBlur: this.onSearchBlurBounded, onKeyDown: this.onKeyDown, suffix: this.toggleInputIcon('filter', query, this.onFilterIconClick) })) : (React__default.createElement(antd.Input, { placeholder: searchPlaceholder, disabled: !!advancedSearchQuery, value: query, onChange: this.onSearchQueryInput, allowClear: true, onBlur: this.onSearchBlurBounded, onKeyDown: this.onKeyDown, suffix: this.toggleInputIcon('search', query) })))),
                this.renderLiveSearch(lang)),
            React__default.createElement(antd.Modal, { visible: isModalOpen, onCancel: this.onModalCancel, bodyStyle: styles && styles.advancedSearch && styles.advancedSearch.modalBody, footer: [
                    React__default.createElement(antd.Button, { htmlType: "button", key: "cancel", onClick: this.onModalCancel, style: styles &&
                            styles.advancedSearch &&
                            styles.advancedSearch.clearButton }, clear),
                    React__default.createElement(antd.Button, { htmlType: "button", key: "search", type: "primary", onClick: this.onModalOk, style: styles &&
                            styles.advancedSearch &&
                            styles.advancedSearch.searchButton }, search),
                ] },
                React__default.createElement(SearchFormHOC, { value: advancedSearchQuery, onPressEnter: this.onModalOk, onChange: this.onSearchChange, styles: styles &&
                        styles.advancedSearch &&
                        styles.advancedSearch.searchForm }))));
    };
    Search.prototype.onSearchBlur = function () {
        this.setState({ liveSearchShow: false });
    };
    Search.prototype.renderLiveSearch = function (strings) {
        var _this = this;
        var _a = this.props, liveSearch = _a.liveSearch, liveSearchResults = _a.liveSearchResults, styles = _a.styles;
        var _b = this.state, liveSearchShow = _b.liveSearchShow, cursor = _b.cursor;
        var emptyLiveSearch = strings.emptyLiveSearch;
        if (!liveSearch || !liveSearchShow) {
            return null;
        }
        var list = liveSearchResults.length ? (liveSearchResults.map(function (item, index) { return (React__default.createElement("li", { onMouseDown: function () { return _this.onLiveSearchClick(item); }, key: index, className: cursor === index ? 'active' : undefined, style: styles &&
                styles.searchResultList &&
                styles.searchResultList.listItem }, item.name || 'NaN')); })) : (React__default.createElement("li", null,
            React__default.createElement("i", null, emptyLiveSearch)));
        return (React__default.createElement(LiveSearchWrapper, { style: styles && styles.searchResultList && styles.searchResultList.container },
            React__default.createElement("ul", { "data-id": 'live-search-list' }, list)));
    };
    Search.prototype.toggleInputIcon = function (iconType, searchQuery, onClick) {
        var loading = this.props.loading;
        return searchQuery ? (loading ? (React__default.createElement(antd.Icon, { type: "loading", style: { marginLeft: 8 } })) : null) : (React__default.createElement(antd.Icon, { type: iconType, style: { opacity: 0.6, marginLeft: 8 }, onClick: onClick }));
    };
    Search.prototype.onLiveSearchClick = function (item) {
        var onLiveSearchSelect = this.props.onLiveSearchSelect;
        if (onLiveSearchSelect) {
            onLiveSearchSelect(item);
        }
        this.setState({
            query: item.name,
            liveSearchShow: false,
            cursor: undefined,
        });
    };
    Search.defaultProps = {
        liveSearchResults: [],
        fetchingLimit: 25,
        debounceTime: 200,
        loading: false,
        advancedSearch: false,
        rootAssetSelect: false,
        liveSearch: false,
        strings: {},
    };
    return Search;
}(React__default.Component));
var templateObject_1$e, templateObject_2$9, templateObject_3$6, templateObject_4$4;

var defaultStrings$4 = {
    searchPlaceholder: 'Search for an asset',
    emptyLiveSearch: 'Nothing found',
};
var AssetSearch = /** @class */ (function (_super) {
    __extends(AssetSearch, _super);
    function AssetSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [],
            loading: false,
        };
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }
    AssetSearch.prototype.onSearch = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var onError, assetQuery, items, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onError = this.props.onError;
                        if (!query.query && !query.advancedSearch) {
                            return [2 /*return*/, this.setState({ items: [] })];
                        }
                        this.setState({ loading: true });
                        assetQuery = {
                            query: query.query,
                            assetSubtrees: query.assetSubtrees || undefined,
                            description: (query.advancedSearch && query.advancedSearch.description) || undefined,
                            metadata: (query.advancedSearch &&
                                query.advancedSearch.metadata &&
                                query.advancedSearch.metadata.reduce(function (a, c) {
                                    var _a;
                                    return (__assign({}, a, (_a = {}, _a[c.key] = c.value, _a)));
                                }, {})) ||
                                undefined,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sdk.Assets.search(assetQuery)];
                    case 2:
                        items = (_a.sent()).items;
                        this.setState({ items: items, loading: false });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (onError) {
                            onError(e_1);
                        }
                        this.setState({ items: [], loading: false });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AssetSearch.prototype.render = function () {
        var _a = this.props, onLiveSearchSelect = _a.onLiveSearchSelect, rootAssetSelect = _a.rootAssetSelect, advancedSearch = _a.advancedSearch, strings = _a.strings, styles = _a.styles;
        var resultStrings = __assign({}, defaultStrings$4, strings);
        var _b = this.state, items = _b.items, loading = _b.loading;
        return (React__default.createElement(Search, { liveSearch: true, onSearch: this.onSearch, liveSearchResults: items, onLiveSearchSelect: onLiveSearchSelect, strings: resultStrings, loading: loading, rootAssetSelect: rootAssetSelect, advancedSearch: advancedSearch, styles: styles }));
    };
    AssetSearch.defaultProps = {
        rootAssetSelect: false,
        advancedSearch: false,
    };
    return AssetSearch;
}(React__default.Component));

var _this$1 = undefined;
var TreeNode = antd.Tree.TreeNode;
var cursorApiRequest = function (assetId, params, data, sdkInstance) {
    if (data === void 0) { data = []; }
    return __awaiter(_this$1, void 0, void 0, function () {
        var result, cursor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdkInstance.Assets.listDescendants(assetId, params)];
                case 1:
                    result = _a.sent();
                    cursor = result.nextCursor;
                    if (result.nextCursor) {
                        return [2 /*return*/, cursorApiRequest(assetId, __assign({}, params, { cursor: cursor }), __spread(data, result.items), sdkInstance)];
                    }
                    return [2 /*return*/, __spread(data, result.items)];
            }
        });
    });
};
var AssetTree = /** @class */ (function (_super) {
    __extends(AssetTree, _super);
    function AssetTree(props) {
        var _this = _super.call(this, props) || this;
        _this.onLoadData = function (treeNode) { return __awaiter(_this, void 0, void 0, function () {
            var sdkInstance, eventKey, assetId, query, loadedData_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sdkInstance = this.props.sdkInstance;
                        if (treeNode.props.children) {
                            return [2 /*return*/];
                        }
                        eventKey = treeNode.props.eventKey;
                        assetId = eventKey ? Number.parseInt(eventKey, 10) : undefined;
                        if (!(assetId && !Number.isNaN(assetId))) return [3 /*break*/, 2];
                        query = {
                            depth: 2,
                            limit: 1000,
                        };
                        return [4 /*yield*/, cursorApiRequest(assetId, query, [], sdkInstance)];
                    case 1:
                        loadedData_1 = _a.sent();
                        if (loadedData_1.length > 1) {
                            treeNode.props.dataRef.children = loadedData_1
                                .slice(1)
                                // @ts-ignore
                                .sort(function (a, b) { return a.name.localeCompare(b.name); })
                                .filter(function (x) { return x.parentId && x.parentId === treeNode.props.dataRef.key; })
                                .map(function (x) { return ({
                                title: x.name + " " + (x.description ? ':' : '') + " " + (x.description ||
                                    ''),
                                key: x.id,
                                node: x,
                                isLeaf: loadedData_1.filter(function (y) { return y.parentId === x.id; }).length <= 0,
                            }); });
                            this.setState({
                                treeData: __spread(this.state.treeData),
                            });
                        }
                        else {
                            treeNode.props.dataRef.isLeaf = true;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.onSelectNode = function (returnAsset) {
            var onSelect = _this.props.onSelect;
            if (onSelect) {
                onSelect(returnAsset);
            }
        };
        _this.onExpand = function (expandedKeys) {
            _this.setState({
                expandedKeys: AssetTree.toKeys(expandedKeys.map(function (key) { return Number.parseInt(key, 10); })),
            });
        };
        _this.renderTreeNode = function (nodes) {
            return nodes.map(function (item) {
                if (item.children) {
                    return (React__default.createElement(TreeNode, { title: item.title, key: item.key, dataRef: item }, _this.renderTreeNode(item.children)));
                }
                return React__default.createElement(TreeNode, { title: item.title, key: item.key, dataRef: item });
            });
        };
        var defaultExpandedKeys = props.defaultExpandedKeys;
        _this.state = {
            assets: [],
            treeData: [],
            expandedKeys: defaultExpandedKeys
                ? AssetTree.toKeys(defaultExpandedKeys)
                : {},
        };
        return _this;
    }
    AssetTree.mapDataAssets = function (assets) {
        var nodes = {};
        assets.forEach(function (asset) {
            nodes[asset.id] = AssetTree.returnPretty(asset);
        });
        var addedAsChildren = [];
        assets.forEach(function (asset) {
            var parentId = asset.parentId;
            var node = nodes[parentId]; // casting is not a problem. It will return undefined if not found
            if (!node) {
                return;
            }
            if (node.children) {
                node.children.push(nodes[asset.id]);
            }
            else {
                node.children = [nodes[asset.id]];
            }
            addedAsChildren.push(asset.id);
            node.isLeaf = false;
        });
        addedAsChildren.forEach(function (id) {
            delete nodes[id];
        });
        return Object.keys(nodes).map(function (id) {
            return nodes[id];
        });
    };
    AssetTree.returnPretty = function (asset) {
        return {
            title: asset.name + ": " + asset.description,
            key: asset.id,
            node: asset,
            isLeaf: true,
        };
    };
    AssetTree.toKeys = function (path, initial) {
        if (initial === void 0) { initial = {}; }
        return path.reduce(function (acc, i) {
            var _a;
            return (__assign({}, acc, (_a = {}, _a[i] = true, _a)));
        }, initial);
    };
    AssetTree.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sdkInstance, assets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sdkInstance = this.props.sdkInstance;
                        return [4 /*yield*/, sdkInstance.Assets.list({ depth: 1 })];
                    case 1:
                        assets = _a.sent();
                        this.setState({
                            assets: assets.items,
                            treeData: assets && assets.items.length > 0
                                ? AssetTree.mapDataAssets(assets.items)
                                : [],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AssetTree.prototype.render = function () {
        var _this = this;
        var _a = this.state, treeData = _a.treeData, expandedKeys = _a.expandedKeys;
        return (React__default.createElement(antd.Tree, { loadData: this.onLoadData, onSelect: function (_, e) { return _this.onSelectNode(e.node.props.dataRef); }, expandedKeys: Object.keys(expandedKeys), onExpand: this.onExpand }, this.renderTreeNode(treeData)));
    };
    return AssetTree;
}(React.Component));

/**
 * Input string should has {{ <key> }} structure to embed provided values
 * @param props <ComplexStringProps> – contain <input> property – string with <keys> to be replaced
 * @example { input: 'Hey, {{ developer }}', developer: 'Dude' }
 */
var ComplexString = function (props) {
    var input = props.input, rest = __rest(props, ["input"]);
    var resultString = input;
    Object.keys(rest).forEach(function (key) {
        var regexp = new RegExp("{{\\s*" + key + "\\s*}}", 'gi');
        // @ts-ignore
        resultString = resultString.replace(regexp, typeof rest[key] !== 'undefined' ? rest[key].toString() : '');
    });
    return React__default.createElement("p", null, resultString);
};

var EventTitle = styled__default.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  font-size: 1.4rem;\n  padding-bottom: 16px;\n"], ["\n  font-size: 1.4rem;\n  padding-bottom: 16px;\n"])));
var EventType = styled__default.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  font-size: 1.2rem;\n  color: #40a9ff;\n  padding-bottom: 8px;\n"], ["\n  font-size: 1.2rem;\n  color: #40a9ff;\n  padding-bottom: 8px;\n"])));
var EventDetailsBlock = styled__default.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  font-size: 1.1rem;\n  padding-bottom: 16px;\n  p {\n    margin: 0;\n  }\n"], ["\n  font-size: 1.1rem;\n  padding-bottom: 16px;\n  p {\n    margin: 0;\n  }\n"])));
var Container$2 = styled__default.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  color: rgba(0, 0, 0, 0.45);\n  padding: 16px;\n  width: 300px;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  margin-top: 32px;\n"], ["\n  color: rgba(0, 0, 0, 0.45);\n  padding: 16px;\n  width: 300px;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  margin-top: 32px;\n"])));
var defaultStrings$5 = {
    noDescription: 'No description',
    start: 'Start',
    end: 'End',
    noStartTime: 'Unknown',
    noEndTime: 'Ongoing',
    details: 'Explore event details',
    metadataSummary: 'Contains {{count}} additional pieces of data',
};
var EventPreviewView = function (_a) {
    var onShowDetails = _a.onShowDetails, event = _a.event, _b = _a.strings, strings = _b === void 0 ? {} : _b, _c = _a.hideProperties, hideProperties = _c === void 0 ? [] : _c, _d = _a.styles, styles = _d === void 0 ? {} : _d;
    var lang = __assign({}, defaultStrings$5, strings);
    var startTime = event.startTime, endTime = event.endTime, type = event.type, subtype = event.subtype, description = event.description, metadata = event.metadata;
    var noDescription = lang.noDescription, start = lang.start, end = lang.end, details = lang.details, metadataSummary = lang.metadataSummary, noStartTime = lang.noStartTime, noEndTime = lang.noEndTime;
    var startDate = formatDatetime(startTime, noStartTime);
    var endDate = formatDatetime(endTime, noEndTime);
    var metadataCount = metadata ? Object.keys(metadata).length : 0;
    return (React__default.createElement(Container$2, { key: "container", style: styles.wrapper },
        React__default.createElement(EventType, { style: styles.eventType }, [
            hideProperties.includes('type') ? '' : type,
            hideProperties.includes('subtype') ? '' : subtype,
        ]
            .filter(Boolean)
            .join(' / ')),
        !hideProperties.includes('description') && (React__default.createElement(EventTitle, { style: styles.description }, description || noDescription)),
        React__default.createElement(EventDetailsBlock, { style: styles.times },
            !hideProperties.includes('startTime') && (React__default.createElement("p", null,
                start,
                ": ",
                startDate)),
            !hideProperties.includes('endTime') && (React__default.createElement("p", null,
                end,
                ": ",
                endDate))),
        !hideProperties.includes('metadata') && (React__default.createElement(EventDetailsBlock, { style: styles.metadata },
            React__default.createElement(ComplexString, { input: metadataSummary, count: metadataCount }))),
        onShowDetails && (React__default.createElement(antd.Button, { htmlType: "button", type: "primary", onClick: function () { return onShowDetails(event); }, style: styles.button }, details))));
};
var templateObject_1$f, templateObject_2$a, templateObject_3$7, templateObject_4$5;

var SpinContainer$2 = styled__default.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n"])));
var LoadingSpinner = function () { return (React__default.createElement(SpinContainer$2, null,
    React__default.createElement(antd.Spin, null))); };
var EventPreview = /** @class */ (function (_super) {
    __extends(EventPreview, _super);
    function EventPreview(props) {
        var _this = _super.call(this, props) || this;
        _this.isComponentUnmount = false;
        _this.state = {
            event: null,
        };
        return _this;
    }
    EventPreview.prototype.componentDidMount = function () {
        this.loadEvent();
    };
    EventPreview.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.eventId !== this.props.eventId) {
            this.setState({ event: null });
            this.loadEvent();
        }
    };
    EventPreview.prototype.componentWillUnmount = function () {
        this.isComponentUnmount = true;
    };
    EventPreview.prototype.loadEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var event;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sdk.Events.retrieve(this.props.eventId)];
                    case 1:
                        event = _a.sent();
                        if (!this.isComponentUnmount) {
                            this.setState({ event: event });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EventPreview.prototype.render = function () {
        var _a = this.props, hideLoadingSpinner = _a.hideLoadingSpinner, onShowDetails = _a.onShowDetails, hideProperties = _a.hideProperties, strings = _a.strings, styles = _a.styles;
        var event = this.state.event;
        if (!event) {
            return hideLoadingSpinner ? null : React__default.createElement(LoadingSpinner, null);
        }
        return (React__default.createElement(EventPreviewView, { styles: styles, event: event, onShowDetails: onShowDetails, hideProperties: hideProperties, strings: strings }));
    };
    return EventPreview;
}(React__default.Component));
var templateObject_1$g;

var ViewerEventTypes;
(function (ViewerEventTypes) {
    ViewerEventTypes["progress"] = "progress";
    ViewerEventTypes["complete"] = "complete";
    ViewerEventTypes["error"] = "error";
})(ViewerEventTypes || (ViewerEventTypes = {}));
function setCameraPosition(viewer, model, revision, boundingBox) {
    var Vector3 = _3dViewer.THREE.Vector3;
    var camera = revision.camera;
    if (!camera) {
        return;
    }
    if (boundingBox && !boundingBox.isEmpty()) {
        // todo: matrix property doesn't present in Cognite3DModel
        // @ts-ignore
        boundingBox.applyMatrix4(model.matrix);
        viewer.fitCameraToBoundingBox(boundingBox, 0);
    }
    else if (Array.isArray(camera.target) && Array.isArray(camera.position)) {
        // Set default camera position
        var cameraPosition = new (Vector3.bind.apply(Vector3, __spread([void 0], camera.position)))();
        var cameraTarget = new (Vector3.bind.apply(Vector3, __spread([void 0], camera.target)))();
        // Camera position and target are defined in model space, transform to world space
        // @ts-ignore
        cameraPosition.applyMatrix4(model.matrix);
        // @ts-ignore
        cameraTarget.applyMatrix4(model.matrix);
        viewer.setCameraPosition(cameraPosition);
        viewer.setCameraTarget(cameraTarget);
    }
    else {
        viewer.fitCameraToModel(model, 0);
    }
}
function createViewer(_a) {
    var modelId = _a.modelId, revisionId = _a.revisionId, boundingBox = _a.boundingBox, cache = _a.cache, domElement = _a.domElement;
    var _b;
    var hash = hashGenerator(modelId, revisionId, boundingBox);
    var progress = ViewerEventTypes.progress, complete = ViewerEventTypes.complete, error = ViewerEventTypes.error;
    if (cache && cache[hash]) {
        cache[hash].fromCache = true;
        // @ts-ignore
        domElement.parentNode.replaceChild(cache[hash].viewer.domElement, domElement);
        return __assign({}, cache[hash], { domElement: cache[hash].viewer.domElement });
    }
    var revisionPromise = fetch3DModelRevision(modelId, revisionId);
    var viewer = new _3dViewer.Cognite3DViewer({ domElement: domElement });
    var listeners = (_b = {},
        _b[progress] = [],
        _b[complete] = [],
        _b[error] = [],
        _b);
    var onProgress = function (progressEvent) {
        listeners[progress].forEach(function (callback) { return callback(progressEvent); });
    };
    var onComplete = function () {
        listeners[complete].forEach(function (callback) { return callback(); });
    };
    var modelPromise = viewer.addModel({
        modelId: modelId,
        revisionId: revisionId,
        geometryFilter: { boundingBox: boundingBox },
        onProgress: onProgress,
        onComplete: onComplete,
    });
    var response = {
        domElement: domElement,
        viewer: viewer,
        modelPromise: modelPromise,
        revisionPromise: revisionPromise,
        addEvent: addEvent.bind(null, listeners),
        removeEvent: removeEvent.bind(null, listeners),
    };
    if (cache) {
        cache[hash] = response;
    }
    return response;
}
function addEvent(listeners, events) {
    events.forEach(function (_a) {
        var _b = __read(_a, 2), type = _b[0], callback = _b[1];
        listeners[type].push(callback);
    });
}
function removeEvent(listeners, events) {
    if (events) {
        events.forEach(function (_a) {
            var _b = __read(_a, 2), type = _b[0], callback = _b[1];
            var index = listeners[type].indexOf(callback);
            if (index === -1) {
                return;
            }
            listeners[type].splice(index, 1);
        });
        return;
    }
    for (var key in ViewerEventTypes) {
        if (ViewerEventTypes[key]) {
            listeners[ViewerEventTypes[key]] = [];
        }
    }
}
function hashGenerator(modelId, revisionId, boundingBox) {
    var boundingBoxString;
    if (boundingBox) {
        var boundingBoxMinString = boundingBox.min.toArray().join(',');
        var boundingBoxMaxString = boundingBox.max.toArray().join(',');
        boundingBoxString = "[" + boundingBoxMinString + ", " + boundingBoxMaxString + "]";
    }
    return modelId + "/" + revisionId + (boundingBoxString ? '?boundingBox=' + boundingBoxString : '');
}

var createViewer$1 = createViewer;
var Model3DViewer = /** @class */ (function (_super) {
    __extends(Model3DViewer, _super);
    function Model3DViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.disposeCalls = [];
        _this.divWrapper = React__default.createRef();
        _this.inputWrapper = React__default.createRef();
        _this.model = null;
        _this.revision = null;
        _this.viewer = null;
        _this.nodes = [];
        _this.addDisposeCall = function (func) {
            _this.disposeCalls.push(func);
        };
        _this.dispose = function () {
            _this.disposeCalls.forEach(function (func) {
                func();
            });
        };
        _this.resetCameraPosition = function () {
            var _a = _this, viewer = _a.viewer, model = _a.model, revision = _a.revision, boundingBox = _a.props.boundingBox;
            if (!viewer || !model || !revision) {
                return;
            }
            setCameraPosition(viewer, model, revision, boundingBox);
        };
        _this.onContainerClick = function () {
            if (_this.inputWrapper.current) {
                _this.inputWrapper.current.focus();
            }
        };
        _this.onBlur = function () {
            if (_this.viewer) {
                _this.viewer.disableKeyboardNavigation();
            }
        };
        _this.onFocus = function () {
            if (_this.viewer && _this.props.enableKeyboardNavigation) {
                _this.viewer.enableKeyboardNavigation();
            }
        };
        _this.onClickHandlerBounded = _this.onClickHandler.bind(_this);
        _this.onCompleteBounded = _this.onComplete.bind(_this);
        return _this;
    }
    Model3DViewer.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, modelId, revisionId, cache, boundingBox, useDefaultCameraPosition, onProgress, onReady, onCameraChange, onError, progress, complete, _c, viewer, addEvent, removeEvent, revisionPromise, modelPromise, fromCache, domElement, model, revision, nodes, e_1;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.divWrapper.current || !this.inputWrapper.current) {
                            return [2 /*return*/];
                        }
                        _b = this.props, modelId = _b.modelId, revisionId = _b.revisionId, cache = _b.cache, boundingBox = _b.boundingBox, useDefaultCameraPosition = _b.useDefaultCameraPosition, onProgress = _b.onProgress, onReady = _b.onReady, onCameraChange = _b.onCameraChange, onError = _b.onError;
                        progress = ViewerEventTypes.progress, complete = ViewerEventTypes.complete;
                        _c = createViewer$1({
                            modelId: modelId,
                            revisionId: revisionId,
                            boundingBox: boundingBox,
                            cache: cache,
                            domElement: this.divWrapper.current,
                        }), viewer = _c.viewer, addEvent = _c.addEvent, removeEvent = _c.removeEvent, revisionPromise = _c.revisionPromise, modelPromise = _c.modelPromise, fromCache = _c.fromCache, domElement = _c.domElement;
                        this.viewer = viewer;
                        // Looks like replaceChild looses onClick event handler, so adding it this way instead
                        domElement.addEventListener('click', this.onContainerClick);
                        if (onProgress) {
                            addEvent([[progress, onProgress]]);
                        }
                        addEvent([[complete, this.onCompleteBounded]]);
                        this.addDisposeCall(function () {
                            domElement.removeEventListener('click', _this.onContainerClick);
                            removeEvent();
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                modelPromise,
                                revisionPromise,
                                this.findMappedNodes(),
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_d.sent(), 3]), model = _a[0], revision = _a[1], nodes = _a[2];
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
                        if (onError) {
                            onError(e_1);
                        }
                        this.dispose();
                        return [2 /*return*/];
                    case 4:
                        this.model = model;
                        this.revision = revision;
                        this.nodes = nodes;
                        if (useDefaultCameraPosition && !fromCache) {
                            this.resetCameraPosition();
                        }
                        if (onReady) {
                            onReady(viewer, model, revision);
                        }
                        viewer.on('click', this.onClickHandlerBounded);
                        if (onCameraChange) {
                            viewer.on('cameraChange', onCameraChange);
                        }
                        this.addDisposeCall(function () {
                            viewer.off('click', _this.onClickHandlerBounded);
                            if (onCameraChange) {
                                viewer.off('cameraChange', onCameraChange);
                            }
                        });
                        if (fromCache) {
                            this.highlightNodes();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Model3DViewer.prototype.componentDidUpdate = function (prevProps) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, onError, assetId, pAssetId, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, onError = _a.onError, assetId = _a.assetId;
                        pAssetId = prevProps.assetId;
                        if (assetId === pAssetId) {
                            return [2 /*return*/];
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = this;
                        return [4 /*yield*/, this.findMappedNodes()];
                    case 2:
                        _b.nodes = _c.sent();
                        this.highlightNodes();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Model3DViewer.prototype.componentWillUnmount = function () {
        this.dispose();
    };
    Model3DViewer.prototype.onClickHandler = function (_a) {
        var offsetX = _a.offsetX, offsetY = _a.offsetY;
        var onClick = this.props.onClick;
        if (!this.viewer || !onClick) {
            return;
        }
        var intersection = this.viewer.getIntersectionFromPixel(offsetX, offsetY);
        if (intersection === null) {
            onClick(null);
        }
        else {
            onClick(intersection.nodeId);
        }
    };
    Model3DViewer.prototype.render = function () {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("input", { type: "text", onBlur: this.onBlur, onFocus: this.onFocus, ref: this.inputWrapper, style: { opacity: 0, position: 'absolute', pointerEvents: 'none' } }),
            React__default.createElement("div", { style: { width: '100%', height: '100%', fontSize: 0 }, ref: this.divWrapper })));
    };
    Model3DViewer.prototype.findMappedNodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, assetId, modelId, revisionId, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, assetId = _a.assetId, modelId = _a.modelId, revisionId = _a.revisionId;
                        if (!assetId) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        return [4 /*yield*/, sdk.ThreeD.listAssetMappings(modelId, revisionId, {
                                assetId: assetId,
                            })];
                    case 1:
                        items = (_b.sent()).items;
                        return [2 /*return*/, items];
                }
            });
        });
    };
    Model3DViewer.prototype.highlightNodes = function () {
        var _this = this;
        var length = this.nodes.length;
        if (!this.model || !this.viewer) {
            return;
        }
        this.model.deselectAllNodes();
        if (length === 1) {
            var nodeId = this.nodes[0].nodeId;
            this.model.updateMatrixWorld();
            var reusableBox = new _3dViewer.THREE.Box3();
            var bb = this.model.getBoundingBox(nodeId, reusableBox);
            this.model.selectNode(nodeId);
            if (!bb.isEmpty()) {
                this.viewer.fitCameraToBoundingBox(bb);
            }
        }
        else {
            this.nodes.forEach(function (node) {
                // @ts-ignore
                return _this.model.selectNode(node.nodeId);
            });
        }
    };
    Model3DViewer.prototype.onComplete = function () {
        var onComplete = this.props.onComplete;
        if (onComplete) {
            onComplete();
        }
    };
    Model3DViewer.defaultProps = {
        enableKeyboardNavigation: true,
        useDefaultCameraPosition: true,
    };
    return Model3DViewer;
}(React__default.Component));

var DragTargets;
(function (DragTargets) {
    DragTargets["Box"] = "infographic-box";
    DragTargets["Point"] = "infographic-point";
})(DragTargets || (DragTargets = {}));

/**
 * This is wrapper for react-odometerjs component that replaces
 * default odometer theme. Origin - https://github.com/HubSpot/odometer/blob/master/themes/odometer-theme-default.css
 * It's needed to avoid loading odometer theme CSS from CDN.
 */
var StyledOdometer = styled__default.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit,\n  .odometer.odometer-theme-default .odometer-digit {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {\n    display: inline-block;\n    vertical-align: middle;\n    visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {\n    text-align: left;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon {\n    display: block;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {\n    display: block;\n    backface-visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-value,\n  .odometer.odometer-theme-default .odometer-digit .odometer-value {\n    display: block;\n    transform: translateZ(0);\n  }\n  .odometer.odometer-auto-theme\n    .odometer-digit\n    .odometer-value.odometer-last-value,\n  .odometer.odometer-theme-default\n    .odometer-digit\n    .odometer-value.odometer-last-value {\n    position: absolute;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n    transform: translateY(0);\n  }\n\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    font-family: 'Helvetica Neue', sans-serif;\n    line-height: 1.1em;\n  }\n  .odometer.odometer-auto-theme .odometer-value,\n  .odometer.odometer-theme-default .odometer-value {\n    text-align: center;\n  }\n"], ["\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit,\n  .odometer.odometer-theme-default .odometer-digit {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {\n    display: inline-block;\n    vertical-align: middle;\n    visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {\n    text-align: left;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon {\n    display: block;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,\n  .odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {\n    display: block;\n    backface-visibility: hidden;\n  }\n  .odometer.odometer-auto-theme .odometer-digit .odometer-value,\n  .odometer.odometer-theme-default .odometer-digit .odometer-value {\n    display: block;\n    transform: translateZ(0);\n  }\n  .odometer.odometer-auto-theme\n    .odometer-digit\n    .odometer-value.odometer-last-value,\n  .odometer.odometer-theme-default\n    .odometer-digit\n    .odometer-value.odometer-last-value {\n    position: absolute;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n  }\n  .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-up.odometer-animating\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down\n    .odometer-ribbon-inner {\n    transform: translateY(-100%);\n  }\n  .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner,\n  .odometer.odometer-theme-default.odometer-animating-down.odometer-animating\n    .odometer-ribbon-inner {\n    transition: transform 2s;\n    transform: translateY(0);\n  }\n\n  .odometer.odometer-auto-theme,\n  .odometer.odometer-theme-default {\n    font-family: 'Helvetica Neue', sans-serif;\n    line-height: 1.1em;\n  }\n  .odometer.odometer-auto-theme .odometer-value,\n  .odometer.odometer-theme-default .odometer-value {\n    text-align: center;\n  }\n"])));
var templateObject_1$h;

var HELLIP = String.fromCharCode(0x02026);
var Link = styled__default.a(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  color: 'white';\n  display: 'inherit';\n"], ["\n  color: 'white';\n  display: 'inherit';\n"])));
var Tag = styled__default.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 30px;\n  color: white;\n  display: flex;\n  white-space: nowrap;\n  padding: 6px 4px;\n  transition: 0.3s all;\n  transform-origin: 24px 50%;\n  @media screen and (max-width: 1000px) {\n    transform: scale(0.75);\n  }\n"], ["\n  background: ", ";\n  border-radius: 30px;\n  color: white;\n  display: flex;\n  white-space: nowrap;\n  padding: 6px 4px;\n  transition: 0.3s all;\n  transform-origin: 24px 50%;\n  @media screen and (max-width: 1000px) {\n    transform: scale(0.75);\n  }\n"])), function (props) { return props.color; });
var TagValue = styled__default.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  font-size: 1.4rem;\n  display: flex;\n  position: relative;\n  top: -2px;\n"], ["\n  font-size: 1.4rem;\n  display: flex;\n  position: relative;\n  top: -2px;\n"])));
var TagUnit = styled__default.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  opacity: 0.8;\n  font-size: 0.8rem;\n  margin: 4px;\n"], ["\n  opacity: 0.8;\n  font-size: 0.8rem;\n  margin: 4px;\n"])));
var TagSettings = styled__default.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  color: white;\n  font-size: 1.1rem;\n  margin: auto 8px;\n  cursor: pointer;\n  padding-right: 4px;\n"], ["\n  color: white;\n  font-size: 1.1rem;\n  margin: auto 8px;\n  cursor: pointer;\n  padding-right: 4px;\n"])));
var TagName = styled__default.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: 0;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 4px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"], ["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: 0;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 4px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"])), function (props) { return props.color; });
var TagDescription = styled__default.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  margin-bottom: 36px;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 40px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"], ["\n  color: white;\n  position: absolute;\n  bottom: 100%;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  margin-bottom: 36px;\n  right: auto;\n  margin-right: 0;\n  pointer-events: none;\n\n  &.hovering {\n    opacity: 1;\n    margin-bottom: 40px;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"])), function (props) { return props.color; });
var TagError = styled__default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: white;\n  position: absolute;\n  top: 100%;\n  opacity: 1;\n  align-items: center;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  margin-top: 6px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background-color: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  margin-top: 6px;\n\n  & > p {\n    margin: 2px;\n  }\n\n  &.hovering {\n    opacity: 1;\n    margin-top: 10;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"], ["\n  color: white;\n  position: absolute;\n  top: 100%;\n  opacity: 1;\n  align-items: center;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  margin-top: 6px;\n  white-space: nowrap;\n  border-radius: 30px;\n  background-color: ", ";\n  transition: 0.3s margin-right, 0.3s opacity, 0.3s margin-bottom;\n  opacity: 0;\n  right: auto;\n  margin-right: 0;\n  margin-top: 6px;\n\n  & > p {\n    margin: 2px;\n  }\n\n  &.hovering {\n    opacity: 1;\n    margin-top: 10;\n  }\n  &.flipped {\n    transform: rotate(180deg);\n    margin-right: -42px;\n  }\n"])), function (_a) {
    var alertColor = _a.alertColor;
    return alertColor;
});
var handleStyles = {
    width: 25,
    height: 25,
    borderRadius: '100%',
    margin: 'auto 8px',
    cursor: 'move',
    transform: 'translate(0, 0)',
    transition: '.5s background',
};
var boxSource = {
    beginDrag: function (props) {
        var id = props.id, left = props.left, top = props.top;
        return { id: id, left: left, top: top, type: 'box' };
    },
};
var flipStyle = {
    transform: 'rotate(180deg)',
    top: '2px',
};
var DraggableBox = /** @class */ (function (_super) {
    __extends(DraggableBox, _super);
    function DraggableBox(props) {
        var _this = _super.call(this, props) || this;
        _this.isComponentUnmounted = false;
        _this.interval = null;
        _this.onMouseOver = function (e) {
            e.stopPropagation();
            _this.setState({
                hovering: true,
            });
        };
        _this.onMouseLeave = function (e) {
            e.stopPropagation();
            _this.setState({
                hovering: false,
            });
        };
        _this.onDragHandleDoubleClick = function () {
            var _a = _this.props, onDragHandleDoubleClick = _a.onDragHandleDoubleClick, id = _a.id;
            if (onDragHandleDoubleClick) {
                onDragHandleDoubleClick(id);
            }
        };
        _this.fetchTimeSeries = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var timeserie, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, connectPromiseToUnmountState(this, sdk.TimeSeries.retrieve(id, true))];
                    case 1:
                        timeserie = _a.sent();
                        this.setState({
                            tag: timeserie,
                        });
                        if (this.interval) {
                            clearInterval(this.interval);
                            this.interval = null;
                        }
                        this.updateValue();
                        this.interval = setInterval(this.updateValue, this.props.refreshInterval);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof CanceledPromiseException !== true) {
                            throw error_1;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.updateValue = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, connectPromiseToUnmountState(this, sdk.Datapoints.retrieveLatest(this.state.tag.name))];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            this.setState({
                                dataPoint: null,
                            });
                            return [2 /*return*/];
                        }
                        if (this.state.dataPoint &&
                            data.timestamp < this.state.dataPoint.timestamp) {
                            return [2 /*return*/]; // got old data point - skip it
                        }
                        this.setState({
                            dataPoint: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2 instanceof CanceledPromiseException !== true) {
                            throw error_2;
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.handleClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick(_this.props.id);
            }
        };
        _this.handleSettingsClick = function (e) {
            if (_this.props.onSettingsClick) {
                e.stopPropagation();
                _this.props.onSettingsClick(_this.props.id);
            }
        };
        _this.handleLinkClick = function (e) {
            if (_this.props.onLinkClick) {
                e.stopPropagation();
                _this.props.onLinkClick(_this.props.id, _this.state.dataPoint || undefined);
            }
        };
        _this.isValid = function () {
            var minMaxRange = _this.props.minMaxRange;
            var dataPoint = _this.state.dataPoint;
            if (!dataPoint || typeof dataPoint.value !== 'number' || !minMaxRange) {
                return true;
            }
            else {
                return !((minMaxRange.min && dataPoint.value < minMaxRange.min) ||
                    (minMaxRange.max && dataPoint.value > minMaxRange.max));
            }
        };
        _this.getPercentDiff = function () {
            var strings = _this.props.strings;
            var _a = _this.props.minMaxRange, min = _a.min, max = _a.max;
            var value = _this.state.dataPoint.value;
            if (typeof value !== 'number') {
                return '';
            }
            if (min !== undefined && value < min) {
                var percent = (((min - value) / min) * 100).toFixed(2);
                return (React__default.createElement(ComplexString, { input: strings.underPercentage, percent: percent, min: min }));
            }
            if (max !== undefined && value > max) {
                var percent = (((value - max) / max) * 100).toFixed(2);
                return (React__default.createElement(ComplexString, { input: strings.overPercentage, percent: percent, max: max }));
            }
            return '';
        };
        _this.state = {
            hovering: false,
            tag: null,
            dataPoint: null,
        };
        return _this;
    }
    DraggableBox.prototype.componentDidMount = function () {
        this.fetchTimeSeries(this.props.id);
    };
    DraggableBox.prototype.componentWillUnmount = function () {
        this.isComponentUnmounted = true;
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    DraggableBox.prototype.componentDidUpdate = function (nextProps) {
        if (this.props.id !== nextProps.id) {
            this.fetchTimeSeries(nextProps.id);
        }
    };
    DraggableBox.prototype.renderValue = function () {
        var value = (this.state.dataPoint || { value: undefined }).value;
        if (value === undefined) {
            return HELLIP;
        }
        if (Number.isNaN(+value)) {
            return value;
        }
        return (React__default.createElement(StyledOdometer, { key: "odometer" },
            React__default.createElement(Odometer, { value: numeral(+value).format('0,0.[000000]'), duration: 250 })));
    };
    DraggableBox.prototype.renderTag = function () {
        var valueComponent = this.renderValue();
        var unit = (this.state.tag || { unit: undefined }).unit;
        return (React__default.createElement(Tag, { color: this.props.color, onMouseOver: this.onMouseOver, onMouseLeave: this.onMouseLeave, onClick: this.handleClick },
            this.props.isDraggable &&
                this.props.connectDragSource(React__default.createElement("div", { style: __assign({}, handleStyles, { backgroundColor: this.isValid()
                            ? 'white'
                            : this.props.alertColor }), onDoubleClick: this.onDragHandleDoubleClick })),
            React__default.createElement(TagValue, { style: this.props.flipped ? flipStyle : {} }, this.props.onLinkClick ? (React__default.createElement(Link, { style: {
                    color: 'white',
                    display: 'inherit',
                }, onClick: this.handleLinkClick },
                valueComponent,
                unit && React__default.createElement(TagUnit, null, unit))) : (React__default.createElement(React__default.Fragment, null,
                valueComponent,
                unit && React__default.createElement(TagUnit, { key: "unit" }, unit)))),
            this.props.onSettingsClick ? (React__default.createElement(TagSettings, { onClick: this.handleSettingsClick },
                React__default.createElement(antd.Icon, { type: "setting" }))) : (React__default.createElement("div", { style: { width: 16, height: 16 } }))));
    };
    DraggableBox.prototype.renderError = function () {
        var hovering = this.state.hovering;
        var _a = this.props, alertColor = _a.alertColor, color = _a.color, sticky = _a.sticky, flipped = _a.flipped;
        return !this.isValid() ? (React__default.createElement(TagError, { alertColor: alertColor, color: color, className: (hovering || sticky ? 'hovering' : '') + " " + (flipped ? 'flipped' : '') }, this.getPercentDiff())) : null;
    };
    DraggableBox.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, color = _a.color, flipped = _a.flipped, isDragging = _a.isDragging, sticky = _a.sticky;
        var _b = this.state.tag || {
            description: undefined,
            name: undefined,
        }, description = _b.description, name = _b.name;
        var hovering = this.state.hovering;
        if (isDragging) {
            return null;
        }
        return (React__default.createElement("div", { style: {
                position: 'absolute',
                transition: 'transform .3s',
                left: left,
                top: top,
                transform: "translate3d(-24px, -24px, 0) rotate(" + (flipped ? '180' : '0') + "deg)",
                transformOrigin: '24px 50%',
                zIndex: hovering ? 1000 : 999,
                pointerEvents: 'auto',
            } },
            name && (React__default.createElement(TagName, { color: color, className: (hovering || sticky ? 'hovering' : '') + " " + (flipped ? 'flipped' : '') }, name)),
            description && (React__default.createElement(TagDescription, { color: color, className: (hovering || sticky ? 'hovering' : '') + " " + (flipped ? 'flipped' : '') }, description)),
            this.renderError(),
            this.renderTag()));
    };
    DraggableBox.defaultProps = {
        hovering: false,
        color: '',
        flipped: false,
        min: null,
        max: null,
        sticky: false,
        isDraggable: true,
        refreshInterval: 5000,
        strings: {
            underPercentage: '{{ percent }}% under the set limit of {{ min }}',
            overPercentage: '{{ percent }}% over the set limit of {{ max }}',
        },
        alertColor: '#e74c3c',
    };
    return DraggableBox;
}(React.Component));
var DraggableBox$1 = reactDnd.DragSource(DragTargets.Point, boxSource, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}); })(DraggableBox);
var templateObject_1$i, templateObject_2$b, templateObject_3$8, templateObject_4$6, templateObject_5$3, templateObject_6$2, templateObject_7$1, templateObject_8;

var boxSource$1 = {
    beginDrag: function (props) {
        var id = props.id, left = props.left, top = props.top;
        return { id: id, left: left, top: top, type: 'point' };
    },
};
var DraggablePoint = /** @class */ (function (_super) {
    __extends(DraggablePoint, _super);
    function DraggablePoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function () {
            if (_this.props.onClick) {
                _this.props.onClick(_this.props.id);
            }
        };
        _this.onDragHandleDoubleClick = function () {
            var _a = _this.props, onDragHandleDoubleClick = _a.onDragHandleDoubleClick, id = _a.id;
            if (onDragHandleDoubleClick) {
                onDragHandleDoubleClick(id);
            }
        };
        return _this;
    }
    DraggablePoint.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, connectDragSource = _a.connectDragSource, connectDragPreview = _a.connectDragPreview, isDragging = _a.isDragging, isDraggable = _a.isDraggable, color = _a.color;
        if (isDragging) {
            return null;
        }
        return connectDragPreview(connectDragSource(React__default.createElement("div", { style: {
                position: 'absolute',
                left: left,
                top: top,
                transform: "translate3d(-12px, -12px, 0)",
                cursor: isDraggable ? 'move' : 'auto',
                pointerEvents: isDraggable ? 'auto' : 'none',
            }, onClick: this.handleOnClick, onDoubleClick: this.onDragHandleDoubleClick },
            React__default.createElement("svg", { width: 24, height: 24 },
                React__default.createElement("circle", { cx: 12, cy: 12, r: 7, fill: color }),
                React__default.createElement("circle", { cx: 12, cy: 12, r: 10, stroke: color, fill: "transparent" })))));
    };
    return DraggablePoint;
}(React.Component));
var DraggablePoint$1 = reactDnd.DragSource(DragTargets.Box, boxSource$1, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}); })(DraggablePoint);

var SvgLine = function (_a) {
    var box = _a.box;
    return (React__default.createElement("svg", { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        } },
        React__default.createElement("g", null,
            React__default.createElement("line", { x1: box.left, y1: box.top, x2: box.pointer.left, y2: box.pointer.top, style: { stroke: box.color, strokeWidth: 2 } }))));
};

var boxTarget = {
    hover: function (props, monitor, component) {
        var item = monitor.getItem();
        var delta = monitor.getDifferenceFromInitialOffset();
        if (delta &&
            (delta.x !== component.previousDelta.x ||
                delta.y !== component.previousDelta.y)) {
            var left = Math.round(item.left + delta.x);
            var top_1 = Math.round(item.top + delta.y);
            component.previousDelta = delta;
            var size = props.size;
            if (item.type === 'box') {
                component.moveBox(item.id, clampNumber(left, 0, size.width - 1), clampNumber(top_1, 0, size.height - 1));
            }
            else if (item.type === 'point') {
                component.movePoint(item.id, clampNumber(left, 0, size.width - 1), clampNumber(top_1, 0, size.height - 1));
            }
        }
    },
    /**
     * if props.onSensorPositionChange is defined - notify parent about sensor position change
     */
    drop: function (props, monitor, component) {
        if (props.onSensorPositionChange) {
            var item = monitor.getItem();
            component.notifyParentOnPositionChange(item.id);
        }
    },
};
var SensorOverlay = /** @class */ (function (_super) {
    __extends(SensorOverlay, _super);
    function SensorOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.previousDelta = { x: 0, y: 0 };
        _this.onDragHandleDoubleClick = function (timeserieId) {
            var box = _this.state.boxes.find(function (b) { return b.id === timeserieId; });
            if (box) {
                var size = _this.props.size;
                var newPosition = {
                    left: box.left * size.width + 50,
                    top: box.top * size.height + 50,
                };
                _this.movePoint(timeserieId, newPosition.left, newPosition.top, true);
            }
        };
        _this.onAnchorDoubleClick = function (timeserieId) {
            var box = _this.state.boxes.find(function (b) { return b.id === timeserieId; });
            if (box) {
                var pointer = box.pointer;
                var size = _this.props.size;
                var newPosition = {
                    left: Math.max(20, pointer.left * size.width - 50),
                    top: Math.max(20, pointer.top * size.height - 50),
                };
                _this.moveBox(timeserieId, newPosition.left, newPosition.top, true);
            }
        };
        _this.moveBox = function (id, left, top, notifyParent) {
            if (notifyParent === void 0) { notifyParent = false; }
            _this.setState(function (state, props) {
                return {
                    boxes: state.boxes.map(function (box) {
                        return box.id === id
                            ? __assign({}, box, { defaultSlot: null, left: left / props.size.width, top: top / props.size.height }) : box;
                    }),
                };
            }, function () { return notifyParent && _this.notifyParentOnPositionChange(id); });
        };
        _this.movePoint = function (id, left, top, notifyParent) {
            if (notifyParent === void 0) { notifyParent = false; }
            _this.setState(function (state, props) {
                return {
                    boxes: state.boxes.map(function (box) {
                        return box.id === id
                            ? __assign({}, box, { pointer: {
                                    left: left / props.size.width,
                                    top: top / props.size.height,
                                } }) : box;
                    }),
                };
            }, function () { return notifyParent && _this.notifyParentOnPositionChange(id); });
        };
        _this.notifyParentOnPositionChange = function (id) {
            if (_this.props.onSensorPositionChange) {
                var box = _this.state.boxes.find(function (b) { return b.id === id; });
                if (box) {
                    _this.props.onSensorPositionChange(id, lodash.omit(box, ['id', 'defaultSlot']));
                }
            }
        };
        _this.state = SensorOverlay.getNewStateFromProps(props, {
            timeseriesIds: [],
            boxes: [],
            prevSize: {
                width: 0,
                height: 0,
            },
        });
        return _this;
    }
    SensorOverlay.getDerivedStateFromProps = function (props, state) {
        if (props.timeseriesIds !== state.timeseriesIds ||
            props.size.width !== state.prevSize.width ||
            props.size.height !== state.prevSize.height) {
            return SensorOverlay.getNewStateFromProps(props, state);
        }
        else {
            return null;
        }
    };
    SensorOverlay.getNewStateFromProps = function (props, state) {
        return props.size.width === 0 || props.size.height === 0
            ? {
                // container is empty
                timeseriesIds: props.timeseriesIds,
                boxes: [],
                prevSize: {
                    width: props.size.width,
                    height: props.size.height,
                },
            }
            : {
                timeseriesIds: props.timeseriesIds,
                boxes: SensorOverlay.makeBoxesList(state.boxes, props),
                prevSize: {
                    width: props.size.width,
                    height: props.size.height,
                },
            };
    };
    SensorOverlay.makeBoxesList = function (oldBoxes, props) {
        var closedSlots = oldBoxes
            .map(function (box) { return box.defaultSlot; })
            .filter(function (v) { return typeof v === 'number'; })
            .sort(function (a, b) { return a - b; });
        return props.timeseriesIds.map(function (id) {
            var oldBox = oldBoxes.find(function (box) { return box.id === id; });
            if (oldBox) {
                return oldBox;
            }
            else {
                var isDefaultPositionProvided = !!(props.defaultPositionMap && props.defaultPositionMap[id]);
                var defaultSlot = isDefaultPositionProvided
                    ? null
                    : SensorOverlay.findFirstFreeSlot(closedSlots);
                if (typeof defaultSlot === 'number') {
                    closedSlots.splice(lodash.sortedIndex(closedSlots, defaultSlot), 0, defaultSlot);
                }
                return __assign({ id: id,
                    defaultSlot: defaultSlot, color: (props.colorMap && props.colorMap[id]) ||
                        getColorByString(id.toString()) }, (isDefaultPositionProvided
                    ? props.defaultPositionMap[id]
                    : SensorOverlay.getDefaultPosition(defaultSlot, props.size)));
            }
        });
    };
    SensorOverlay.findFirstFreeSlot = function (closedSlots) {
        var e_1, _a;
        var freeSlot = 0;
        try {
            for (var closedSlots_1 = __values(closedSlots), closedSlots_1_1 = closedSlots_1.next(); !closedSlots_1_1.done; closedSlots_1_1 = closedSlots_1.next()) {
                var slot = closedSlots_1_1.value;
                if (slot !== freeSlot) {
                    return freeSlot;
                }
                else {
                    freeSlot++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (closedSlots_1_1 && !closedSlots_1_1.done && (_a = closedSlots_1.return)) _a.call(closedSlots_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return freeSlot;
    };
    SensorOverlay.getDefaultPosition = function (defaultsSlot, size) {
        return {
            // default position of tag and pointer
            left: (100 + defaultsSlot * 40) / size.width,
            top: (40 + defaultsSlot * 20) / size.height,
            pointer: {
                left: (200 + defaultsSlot * 40) / size.width,
                top: (140 + defaultsSlot * 20) / size.height,
            },
        };
    };
    SensorOverlay.prototype.render = function () {
        var _this = this;
        var _a = this.props, size = _a.size, fixedWidth = _a.fixedWidth, colorMap = _a.colorMap, stickyMap = _a.stickyMap, minMaxMap = _a.minMaxMap, refreshInterval = _a.refreshInterval, strings = _a.strings, alertColor = _a.alertColor;
        return this.props.connectDropTarget(React__default.createElement("div", { style: {
                position: 'relative',
                display: 'block',
                width: fixedWidth || '100%',
                pointerEvents: 'auto',
            } },
            this.props.children,
            this.state.boxes.map(function (box) {
                var color = (colorMap && colorMap[box.id]) || box.color;
                return (React__default.createElement(React__default.Fragment, { key: box.id },
                    React__default.createElement(DraggableBox$1, { id: box.id, alertColor: alertColor, left: box.left * size.width, top: box.top * size.height, color: color, sticky: (stickyMap && stickyMap[box.id]) || false, onLinkClick: _this.props.linksMap ? _this.props.onLinkClick : undefined, isDraggable: _this.props.isTagDraggable, flipped: box.pointer.left > box.left, onDragHandleDoubleClick: _this.onDragHandleDoubleClick, onClick: _this.props.onClick, onSettingsClick: _this.props.onSettingsClick, refreshInterval: refreshInterval, minMaxRange: minMaxMap && minMaxMap[box.id], strings: strings }),
                    React__default.createElement(SvgLine, { box: {
                            color: color,
                            left: box.left * size.width,
                            top: box.top * size.height,
                            pointer: {
                                left: box.pointer.left * size.width,
                                top: box.pointer.top * size.height,
                            },
                        } }),
                    React__default.createElement(DraggablePoint$1, { id: box.id, left: box.pointer.left * size.width, top: box.pointer.top * size.height, color: color, isDraggable: _this.props.isPointerDraggable, onClick: _this.props.onClick, onDragHandleDoubleClick: _this.onAnchorDoubleClick })));
            })));
    };
    SensorOverlay.defaultProps = {
        isTagDraggable: true,
        isPointerDraggable: true,
    };
    return SensorOverlay;
}(React.Component));
var WrappedSensorOverlay = reactDnd.DropTarget([DragTargets.Box, DragTargets.Point], boxTarget, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(SensorOverlay);
var SizeWrapper = reactSizeme.withSize({ monitorHeight: true })(WrappedSensorOverlay);
var FinalSensorOverlay = reactDnd.DragDropContext(HTML5Backend)(SizeWrapper);
FinalSensorOverlay.displayName = 'SensorOverlay';

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

var Panel$1 = antd.Collapse.Panel;
var TenantValidity;
(function (TenantValidity) {
    TenantValidity[TenantValidity["CHECKING"] = 0] = "CHECKING";
    TenantValidity[TenantValidity["INVALID"] = 1] = "INVALID";
    TenantValidity[TenantValidity["UNKNOWN"] = 2] = "UNKNOWN";
})(TenantValidity || (TenantValidity = {}));
var TenantSelector = /** @class */ (function (_super) {
    __extends(TenantSelector, _super);
    function TenantSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onTenantChange = function (e) {
            _this.setState({
                tenant: sanitizeTenant(e.target.value),
                validity: TenantValidity.UNKNOWN,
            });
        };
        _this.checkTenantValidity = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, onInvalidTenant, onTenantSelected, validateTenant, _b, tenant, advanced, advancedOptions, isTenantValid, _c, e_1;
            return __generator(this, function (_d) {
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
            React__default.createElement(Panel$1, { key: '0', header: 'Advanced options' }, inputs)));
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
                React__default.createElement(antd.Form.Item, __assign({ hasFeedback: true }, formItemProps),
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
var LoginWrapper = styled__default.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: initial;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  max-width: 400px;\n  box-shadow: ", ";\n  background-color: ", ";\n  margin: auto;\n  padding: 45px;\n  overflow: auto;\n"], ["\n  display: flex;\n  flex-wrap: initial;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  max-width: 400px;\n  box-shadow: ", ";\n  background-color: ", ";\n  margin: auto;\n  padding: 45px;\n  overflow: auto;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.lightShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.gearbox.containerColor;
});
LoginWrapper.defaultProps = {
    theme: {
        gearbox: defaultTheme,
    },
};
var Title = styled__default.h1(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
Title.defaultProps = {
    theme: {
        gearbox: defaultTheme,
    },
};
var SubTitle = styled__default.h3(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gearbox.textColor;
});
SubTitle.defaultProps = {
    theme: {
        gearbox: defaultTheme,
    },
};
var Input = styled__default(function (props) { return React__default.createElement(antd.Input, __assign({}, props)); })(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  && {\n    border: none;\n    background-color: ", ";\n    font-weight: bold;\n    border-radius: 0;\n    height: 48px;\n    border-bottom: 2px solid ", ";\n    margin-bottom: 8px;\n    color: ", ";\n    &:focus,\n    &:active {\n      box-shadow: none;\n      border-bottom: 2px solid ", ";\n    }\n    &:hover {\n      border-bottom: 2px solid ", ";\n    }\n    &::placeholder {\n      color: ", " !important;\n    }\n  }\n"], ["\n  && {\n    border: none;\n    background-color: ", ";\n    font-weight: bold;\n    border-radius: 0;\n    height: 48px;\n    border-bottom: 2px solid ", ";\n    margin-bottom: 8px;\n    color: ", ";\n    &:focus,\n    &:active {\n      box-shadow: none;\n      border-bottom: 2px solid ", ";\n    }\n    &:hover {\n      border-bottom: 2px solid ", ";\n    }\n    &::placeholder {\n      color: ", " !important;\n    }\n  }\n"])), function (_a) {
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
        gearbox: defaultTheme,
    },
};
var LoginButton = styled__default(function (props) { return React__default.createElement(antd.Button, __assign({}, props)); })(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 0;\n  min-height: 45px;\n  margin: 15px 0;\n  border-color: ", ";\n\n  &:not([disabled]) {\n    cursor: pointer;\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    &:hover {\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  &:disabled,\n  &:disabled:hover {\n    border-color: ", " !important;\n    background-color: ", " !important;\n    color: ", ";\n  }\n"], ["\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 0;\n  min-height: 45px;\n  margin: 15px 0;\n  border-color: ", ";\n\n  &:not([disabled]) {\n    cursor: pointer;\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    &:hover {\n      color: ", ";\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  &:disabled,\n  &:disabled:hover {\n    border-color: ", " !important;\n    background-color: ",
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
        gearbox: defaultTheme,
    },
};
var CollapseWrapper = styled__default(antd.Collapse)(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  .ant-collapse-item {\n    border-bottom: none !important;\n  }\n  .ant-collapse-content {\n    background-color: ", " !important;\n  }\n  .ant-collapse-header {\n    font-size: 1.17em;\n    font-weight: 500;\n    color: ", " !important;\n    padding-left: 20px !important;\n    background-color: ", ";\n\n    .ant-collapse-arrow {\n      left: 0 !important;\n      color: ", " !important;\n    }\n  }\n  .ant-collapse-content-box {\n    padding: 5px 0 0 0 !important;\n  }\n"], ["\n  .ant-collapse-item {\n    border-bottom: none !important;\n  }\n  .ant-collapse-content {\n    background-color: ", " !important;\n  }\n  .ant-collapse-header {\n    font-size: 1.17em;\n    font-weight: 500;\n    color: ", " !important;\n    padding-left: 20px !important;\n    background-color: ", ";\n\n    .ant-collapse-arrow {\n      left: 0 !important;\n      color: ", " !important;\n    }\n  }\n  .ant-collapse-content-box {\n    padding: 5px 0 0 0 !important;\n  }\n"])), function (_a) {
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
        gearbox: defaultTheme,
    },
};
var templateObject_1$j, templateObject_2$c, templateObject_3$9, templateObject_4$7, templateObject_5$4, templateObject_6$3;

var withTimeseries = function (WrapperComponent) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.isComponentUnmounted = false;
            _this.state = {
                isLoading: true,
                timeseries: null,
                timeseriesId: props.timeseriesId,
            };
            return _this;
        }
        class_1.getDerivedStateFromProps = function (props, state) {
            if (props.timeseriesId !== state.timeseriesId) {
                return {
                    isLoading: true,
                    timeseries: null,
                    timeseriesId: props.timeseriesId,
                };
            }
            return null;
        };
        class_1.prototype.componentDidMount = function () {
            this.loadTimeseries();
        };
        class_1.prototype.componentWillUnmount = function () {
            this.isComponentUnmounted = true;
        };
        class_1.prototype.componentDidUpdate = function (prevProps) {
            if (prevProps.timeseriesId !== this.props.timeseriesId) {
                this.loadTimeseries();
            }
        };
        class_1.prototype.loadTimeseries = function () {
            return __awaiter(this, void 0, void 0, function () {
                var timeseries, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, connectPromiseToUnmountState(this, sdk.TimeSeries.retrieve(this.props.timeseriesId, true))];
                        case 1:
                            timeseries = _a.sent();
                            this.setState({
                                isLoading: false,
                                timeseries: timeseries,
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            if (error_1 instanceof CanceledPromiseException !== true) {
                                throw error_1;
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        class_1.prototype.render = function () {
            var _a = this.state, isLoading = _a.isLoading, timeseries = _a.timeseries;
            if (isLoading) {
                return (React__default.createElement(SpinnerContainer, null,
                    React__default.createElement(LoadingOverlay, { isLoading: true, backgroundColor: 'none' })));
            }
            if (timeseries) {
                return (React__default.createElement(WrapperComponent, __assign({}, this.props, { timeseries: timeseries })));
            }
            return null;
        };
        return class_1;
    }(React__default.Component));
};
var SpinnerContainer = styled__default.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: relative;\n  height: 300px;\n"], ["\n  position: relative;\n  height: 300px;\n"])));
var templateObject_1$k;

var TimeseriesChartMeta = withTimeseries(TimeseriesChartMetaPure);

var Container$3 = styled__default.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background: white;\n  border: 'none';\n  border-radius: 3px;\n  display: inline-flex;\n  justify-content: space-between;\n  padding: 8px;\n  margin-right: 'inherit';\n  cursor: pointer;\n  margin-bottom: 4px;\n  width: 100%;\n  transition: 0.3s all;\n\n  &:hover {\n    background-color: #eeeeee;\n  }\n\n  &.active {\n    background-color: #f2f2f2;\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  label {\n    margin: auto 16px auto 32px;\n  }\n"], ["\n  background: white;\n  border: 'none';\n  border-radius: 3px;\n  display: inline-flex;\n  justify-content: space-between;\n  padding: 8px;\n  margin-right: 'inherit';\n  cursor: pointer;\n  margin-bottom: 4px;\n  width: 100%;\n  transition: 0.3s all;\n\n  &:hover {\n    background-color: #eeeeee;\n  }\n\n  &.active {\n    background-color: #f2f2f2;\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  label {\n    margin: auto 16px auto 32px;\n  }\n"])));
var defaultProps = {
    checkable: true,
    onContainerClick: null,
    disabled: false,
    checked: false,
    className: 'detail-checkbox',
};
var DetailCheckbox = function (_a) {
    var checked = _a.checked, description = _a.description, disabled = _a.disabled, onContainerClick = _a.onContainerClick, title = _a.title, className = _a.className, checkable = _a.checkable;
    return (React__default.createElement(Container$3, { className: className, onClick: disabled ? null : onContainerClick },
        React__default.createElement("div", { style: { wordBreak: 'break-all' } },
            React__default.createElement("span", { style: {
                    fontSize: '14px',
                } }, title),
            React__default.createElement("br", null),
            React__default.createElement("span", { style: {
                    fontSize: '12px',
                    opacity: 0.6,
                } }, description)),
        checkable && (React__default.createElement(antd.Checkbox, { checked: checked, disabled: disabled, onClick: function (e) { return e.preventDefault(); } }))));
};
DetailCheckbox.defaultProps = defaultProps;
var templateObject_1$l;

var Wrapper$4 = styled__default.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  flex-directoin: row;\n  margin-bottom: 8px;\n"], ["\n  flex-directoin: row;\n  margin-bottom: 8px;\n"])));
var SelectedItems = /** @class */ (function (_super) {
    __extends(SelectedItems, _super);
    function SelectedItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedItems.prototype.render = function () {
        var _a = this.props, selectedItems = _a.selectedItems, onItemClose = _a.onItemClose;
        return (React__default.createElement(Wrapper$4, null,
            React__default.createElement("span", { style: { marginRight: '8px' } },
                React__default.createElement("b", null, "Selected:")),
            selectedItems &&
                selectedItems.map(function (item) { return (React__default.createElement(antd.Tag, { key: item.id, onClose: function () { return onItemClose(item); }, closable: true, color: getColorByString(item.id.toString()) }, item.name || '')); })));
    };
    SelectedItems.defaultProps = {
        selectedItems: [],
        onItemClose: null,
    };
    return SelectedItems;
}(React__default.Component));
var templateObject_1$m;

var Wrapper$5 = styled__default.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var TagList = styled__default.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n"])));
var CenteredSpin = styled__default(antd.Spin)(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  &.ant-spin-spinning {\n    min-height: 25px;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  &.ant-spin-spinning {\n    min-height: 25px;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
var ButtonRow = styled__default.div(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  margin-top: 5px;\n"], ["\n  margin-top: 5px;\n"])));
var SelectNoneButton = styled__default(function (props) { return (React__default.createElement(antd.Button, __assign({}, props))); })(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
var defaultStrings$6 = {
    searchPlaceholder: 'Search for timeseries',
    selectAll: 'Select all',
    selectNone: 'Select none',
    rootAssetSelectAll: defaultStrings$1.all,
    rootAssetSelectLoading: defaultStrings$1.loading,
};
var TimeseriesSearch = /** @class */ (function (_super) {
    __extends(TimeseriesSearch, _super);
    function TimeseriesSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectAsset = function (assetId) {
            _this.setState({ assetId: assetId, searchResults: [] });
        };
        _this.onTimeSerieClicked = function (timeseries) {
            var _a = _this.props, allowStrings = _a.allowStrings, single = _a.single, onTimeserieSelectionChange = _a.onTimeserieSelectionChange;
            if (!allowStrings && timeseries.isString) {
                return;
            }
            var newTimeseries = [];
            if (single) {
                newTimeseries = [timeseries];
            }
            else if (!_this.isChecked(timeseries.id)) {
                newTimeseries = __spread(_this.state.selectedTimeseries, [timeseries]);
            }
            else {
                newTimeseries = __spread(_this.state.selectedTimeseries).filter(function (existing) { return existing.id !== timeseries.id; });
            }
            _this.setState({ selectedTimeseries: newTimeseries });
            onTimeserieSelectionChange(newTimeseries.map(function (x) { return x.id; }), timeseries);
        };
        _this.fetchTimeseries = function (apiQuery) {
            var query = apiQuery.query, assetSubtrees = apiQuery.assetSubtrees;
            var lastFetchId = _this.state.lastFetchId;
            lastFetchId += 1;
            var fetchId = lastFetchId;
            _this.setState({ fetching: true, lastFetchId: lastFetchId });
            if (!query) {
                _this.setState({
                    fetching: false,
                    searchResults: [],
                });
                return;
            }
            sdk.TimeSeries.search({
                assetSubtrees: assetSubtrees == null ? undefined : assetSubtrees,
                query: query,
                limit: 100,
            })
                .then(function (data) {
                if (fetchId !== _this.state.lastFetchId) {
                    // for fetch callback order
                    return;
                }
                var items = data.items;
                if (_this.props.filterRule) {
                    var resultsFiltered = items.filter(_this.props.filterRule);
                    _this.setState({
                        searchResults: resultsFiltered,
                        fetching: false,
                    });
                }
                else {
                    _this.setState({
                        searchResults: items,
                        fetching: false,
                    });
                }
            })
                .catch(function (error) {
                _this.setState({
                    fetching: false,
                });
                var onError = _this.props.onError;
                if (onError) {
                    onError(error);
                }
            });
        };
        _this.isChecked = function (id) {
            return _this.state.selectedTimeseries.findIndex(function (timeseries) { return timeseries.id === id; }) !== -1;
        };
        _this.onItemClose = function (item) {
            var selectedTimeseries = _this.state.selectedTimeseries;
            var closedTimeseries = selectedTimeseries.find(function (timeseries) { return timeseries.id === item.id; });
            if (closedTimeseries === undefined) {
                throw Error('Closing nonexisting timeseries should not be possible');
            }
            var newTimeseries = selectedTimeseries.filter(function (existing) { return existing.id !== item.id; });
            _this.setState({ selectedTimeseries: newTimeseries });
            if (_this.props.onTimeserieSelectionChange) {
                _this.props.onTimeserieSelectionChange(newTimeseries.map(function (x) { return x.id; }), closedTimeseries);
            }
        };
        _this.onKeyDown = function (e) {
            var _a = _this.state, cursor = _a.cursor, searchResults = _a.searchResults;
            if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
            if (!searchResults || searchResults.length === 0) {
                return;
            }
            // Arrow up
            if (e.keyCode === 38) {
                if (cursor === undefined || cursor === 0) {
                    _this.setState({ cursor: searchResults.length - 1 });
                }
                else {
                    _this.setState({ cursor: cursor - 1 });
                }
                return;
            }
            // Arrow down
            if (e.keyCode === 40) {
                if (cursor === undefined || cursor === searchResults.length - 1) {
                    _this.setState({ cursor: 0 });
                }
                else {
                    _this.setState({ cursor: cursor + 1 });
                }
                return;
            }
            // Enter
            if (e.keyCode === 13 && cursor !== undefined) {
                var item = searchResults[cursor];
                _this.onTimeSerieClicked(item);
            }
        };
        _this.onSelectAll = function () {
            var _a = _this.props, allowStrings = _a.allowStrings, onTimeserieSelectionChange = _a.onTimeserieSelectionChange;
            var _b = _this.state, searchResults = _b.searchResults, selectedTimeseries = _b.selectedTimeseries;
            var newTimeseries = searchResults.filter(function (result) {
                return !result.isString || (allowStrings && result.isString);
            });
            _this.setState({
                selectedTimeseries: __spread(new Set(__spread(selectedTimeseries, newTimeseries))),
            });
            onTimeserieSelectionChange(newTimeseries.map(function (x) { return x.id; }), null);
        };
        _this.onSelectNone = function () {
            var onTimeserieSelectionChange = _this.props.onTimeserieSelectionChange;
            _this.setState({ selectedTimeseries: [] });
            onTimeserieSelectionChange([], null);
        };
        _this.isAllSelected = function () {
            var searchResults = _this.state.searchResults;
            var allowStrings = _this.props.allowStrings;
            return searchResults.every(function (series) {
                var isAllowed = allowStrings || !series.isString;
                return !isAllowed || _this.isChecked(series.id);
            });
        };
        _this.state = {
            assetId: props.rootAsset || undefined,
            fetching: false,
            searchResults: [],
            selectedTimeseries: [],
            lastFetchId: 0,
        };
        _this.fetchTimeseries = lodash.debounce(_this.fetchTimeseries, 200, {
            leading: false,
            trailing: true,
        });
        return _this;
    }
    TimeseriesSearch.getDerivedStateFromProps = function (props, state) {
        if (props.rootAsset !== null && props.rootAsset !== state.assetId) {
            return { assetId: props.rootAsset };
        }
        return null;
    };
    TimeseriesSearch.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selectedTimeseries, timeseries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTimeseries = this.props.selectedTimeseries;
                        if (!(selectedTimeseries && selectedTimeseries.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sdk.TimeSeries.retrieveMultiple(selectedTimeseries)];
                    case 1:
                        timeseries = _a.sent();
                        this.setState({ selectedTimeseries: timeseries });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TimeseriesSearch.prototype.render = function () {
        var _this = this;
        var _a = this.props, allowStrings = _a.allowStrings, single = _a.single, hideSelected = _a.hideSelected, rootAssetSelect = _a.rootAssetSelect, styles = _a.styles, strings = _a.strings;
        var _b = this.state, assetId = _b.assetId, fetching = _b.fetching, searchResults = _b.searchResults, selectedTimeseries = _b.selectedTimeseries, cursor = _b.cursor;
        var lang = __assign({}, defaultStrings$6, strings);
        return (React__default.createElement(Wrapper$5, null,
            !hideSelected && (React__default.createElement(SelectedItems, { selectedItems: selectedTimeseries.map(function (t) { return ({
                    id: t.id,
                    name: t.name,
                }); }), onItemClose: this.onItemClose })),
            React__default.createElement(Search, { rootAssetSelect: rootAssetSelect, onAssetSelected: this.onSelectAsset, assetId: assetId || 0, onSearch: this.fetchTimeseries, strings: {
                    searchPlaceholder: lang.searchPlaceholder,
                    rootAssetSelectAll: lang.rootAssetSelectAll,
                    rootAssetSelectLoading: lang.rootAssetSelectLoading,
                }, onKeyDown: this.onKeyDown }),
            searchResults.length > 0 && !single ? (React__default.createElement(ButtonRow, { style: styles && styles.buttonRow },
                React__default.createElement(antd.Button, { htmlType: "button", onClick: this.onSelectAll, disabled: this.isAllSelected(), style: styles && styles.selectAllButton }, lang.selectAll),
                React__default.createElement(SelectNoneButton, { htmlType: "button", onClick: this.onSelectNone, disabled: selectedTimeseries.length === 0, style: styles && styles.selectNoneButton }, lang.selectNone))) : null,
            React__default.createElement(TagList, { style: styles && styles.list },
                fetching ? React__default.createElement(CenteredSpin, null) : null,
                searchResults.map(function (timeseries, index) { return (React__default.createElement(DetailCheckbox, { className: "tag-search-result result-" + timeseries.id + " " + (index === cursor ? 'active' : ''), key: "detail-checkbox--" + timeseries.id, title: timeseries.name || timeseries.id.toString(), description: timeseries.description || timeseries.name || 'No description', checkable: !single, checked: _this.isChecked(timeseries.id), onContainerClick: function () { return _this.onTimeSerieClicked(timeseries); }, disabled: !allowStrings && !!timeseries.isString })); }))));
    };
    TimeseriesSearch.defaultProps = {
        selectedTimeseries: [],
        strings: {},
        filterRule: undefined,
        hideSelected: false,
        allowStrings: false,
        rootAssetSelect: false,
        single: false,
        onError: undefined,
        rootAsset: undefined,
    };
    return TimeseriesSearch;
}(React__default.Component));
var templateObject_1$n, templateObject_2$d, templateObject_3$a, templateObject_4$8, templateObject_5$5;

var ThemeProvider = function (props) {
    var theme = {
        gearbox: __assign({}, defaultTheme, props.theme),
    };
    return (React__default.createElement(styled.ThemeProvider, { theme: theme }, props.children));
};

exports.AssetScanner = AssetScanner;
exports.AssetSearch = AssetSearch;
exports.EventPreview = EventPreview;
exports.Model3DViewer = Model3DViewer;
exports.AssetMeta = AssetMeta;
exports.AssetMetaControlled = AssetMetaControlled;
exports.AssetTree = AssetTree;
exports.DescriptionList = DescriptionList;
exports.SensorOverlay = FinalSensorOverlay;
exports.TenantSelector = TenantSelector;
exports.TimeseriesChart = TimeseriesChart;
exports.TimeseriesChartMeta = TimeseriesChartMeta;
exports.defaultStrings = defaultStrings$6;
exports.TimeseriesSearch = TimeseriesSearch;
exports.ThemeProvider = ThemeProvider;
