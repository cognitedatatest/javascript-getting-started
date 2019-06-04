'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../../chunks/chunk-1c8e2aef.js');
var antd = require('antd');
var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
require('@cognite/sdk');
var __chunk_2 = require('../../chunks/chunk-c64952bd.js');
var __chunk_3 = require('../../chunks/chunk-3d06bc34.js');
var __chunk_4 = require('../../chunks/chunk-2980b17c.js');
require('moment-timezone');
var __chunk_5 = require('../../chunks/chunk-a09cc607.js');
var __chunk_6 = require('../../chunks/chunk-a85eee5b.js');
require('antd/lib/radio');
require('../TimeseriesChart/index.js');
require('@cognite/griff-react');
require('../../chunks/chunk-cefd798e.js');
require('antd/lib/collapse');
var __chunk_8 = require('../../chunks/chunk-86bfe67e.js');
require('../../chunks/chunk-b95c521d.js');

var AssetEventsPanel = /** @class */ (function (_super) {
    __chunk_1.__extends(AssetEventsPanel, _super);
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
        _this.mapEvent = function (event) { return (__chunk_1.__assign({}, event, { typeAndSubtype: (React__default.createElement("span", null,
                React__default.createElement("strong", { style: { display: 'block' } }, event.type),
                React__default.createElement("span", { style: { fontSize: 12, opacity: 0.8 } }, event.subtype))), description: event.description || 'No description', start: typeof event.startTime === 'number'
                ? __chunk_5.momentFromTimestamp(event.startTime).format('LLL')
                : '-', end: typeof event.endTime === 'number'
                ? __chunk_5.momentFromTimestamp(event.endTime).format('LLL')
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
var StyledTable = styled__default(antd.Table)(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject([""], [""])));
var StyledRow = styled__default.tr(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  background: white;\n  cursor: pointer;\n  &:nth-child(2n) {\n    background: #fafafa;\n  }\n"], ["\n  background: white;\n  cursor: pointer;\n  &:nth-child(2n) {\n    background: #fafafa;\n  }\n"])));
var StyledCell = styled__default.td(templateObject_3 || (templateObject_3 = __chunk_1.__makeTemplateObject(["\n  max-width: 500px;\n"], ["\n  max-width: 500px;\n"])));
var EventDetails = styled__default.div(templateObject_4 || (templateObject_4 = __chunk_1.__makeTemplateObject(["\n  .description {\n    font-size: 18px;\n    padding-top: 16px;\n  }\n  .times {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 16px;\n  }\n"], ["\n  .description {\n    font-size: 18px;\n    padding-top: 16px;\n  }\n  .times {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 16px;\n  }\n"])));
var EventMetadataList = styled__default.div(templateObject_5 || (templateObject_5 = __chunk_1.__makeTemplateObject(["\n  margin-top: 32px;\n  max-height: calc(100vh - 400px);\n  overflow: auto;\n  .event-metadata {\n    padding: 16px;\n    &:nth-child(2n) {\n      background: #fbfbfb;\n    }\n  }\n"], ["\n  margin-top: 32px;\n  max-height: calc(100vh - 400px);\n  overflow: auto;\n  .event-metadata {\n    padding: 16px;\n    &:nth-child(2n) {\n      background: #fbfbfb;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

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
        return (__chunk_1.__assign({}, acc, (_a = {}, _a[p] = i + 1, _a)));
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
        for (var _b = __chunk_1.__values(Object.keys(docsByCat)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    var sortFunction = customSort || __chunk_3.sortStringsAlphabetically;
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
        var keyList = __chunk_1.__spread([
            getDocumentType(doc.metadata, documentTypeField)
        ], doc.fileName.split('-'));
        var _b = getCategoryName(keyList, unknownCategoryName, types), key = _b.key, description = _b.description;
        var documents = acc[key] ? acc[key].documents : [];
        return __chunk_1.__assign({}, acc, (_a = {}, _a[key] = __chunk_1.__assign({}, acc[key], { description: description, documents: __chunk_1.__spread(documents, [doc]) }), _a));
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
    __chunk_1.__extends(DocumentTable, _super);
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
                React__default.createElement(CollapseContainer, __chunk_1.__assign({}, collapseProps), categories.map(function (category, i) {
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
var TableWrapper = styled__default.div(templateObject_1$1 || (templateObject_1$1 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"], ["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"])));
var LinkContainer = styled__default.div(templateObject_2$1 || (templateObject_2$1 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  margin: 10px 0;\n  white-space: nowrap;\n"], ["\n  display: flex;\n  margin: 10px 0;\n  white-space: nowrap;\n"])));
var CollapseContainer = styled__default(antd.Collapse)(templateObject_3$1 || (templateObject_3$1 = __chunk_1.__makeTemplateObject(["\n  background-color: green;\n  width: 100%;\n"], ["\n  background-color: green;\n  width: 100%;\n"])));
var TextContainerTop = styled__default.div(templateObject_4$1 || (templateObject_4$1 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n"], ["\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n"])));
var PanelWrapper = styled__default(Panel)(templateObject_5$1 || (templateObject_5$1 = __chunk_1.__makeTemplateObject(["\n  text-align: left;\n  ", "\n"], ["\n  text-align: left;\n  ",
    "\n"])), function (_a) {
    var delimiter = _a.delimiter;
    return delimiter ? 'border-bottom: 2px solid #CFCFCF !important;' : '';
});
var LinkStyle = styled__default.a(templateObject_6 || (templateObject_6 = __chunk_1.__makeTemplateObject(["\n  font-size: 1.125em;\n  margin-right: 10px;\n"], ["\n  font-size: 1.125em;\n  margin-right: 10px;\n"])));
var NoDocuments = styled__default.div(templateObject_7 || (templateObject_7 = __chunk_1.__makeTemplateObject(["\n  padding: 16px;\n"], ["\n  padding: 16px;\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6, templateObject_7;

var TimeseriesPanel = /** @class */ (function (_super) {
    __chunk_1.__extends(TimeseriesPanel, _super);
    function TimeseriesPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeseriesPanel.prototype.render = function () {
        var _a = this.props, strings = _a.strings, timeseries = _a.timeseries, rest = __chunk_1.__rest(_a, ["strings", "timeseries"]);
        if (!timeseries || !timeseries.length) {
            return (React__default.createElement(NoTimeseries, { "data-test-id": "no-timeseries" }, "" + strings.noTimeseriesSign));
        }
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(TableWrapper$1, null,
                React__default.createElement(CollapseContainer$1, null, timeseries &&
                    timeseries.map(function (ts) { return (React__default.createElement(PanelWrapper$1, { header: ts.name, key: ts.id.toString() },
                        React__default.createElement(__chunk_8.TimeseriesChartMetaPure, __chunk_1.__assign({ key: ts.id, timeseries: ts }, rest)))); })))));
    };
    TimeseriesPanel.defaultProps = {
        strings: {
            noTimeseriesSign: 'No timeseries linked to this asset',
        },
    };
    return TimeseriesPanel;
}(React__default.PureComponent));
var PanelWrapper$1 = styled__default(antd.Collapse.Panel)(templateObject_1$2 || (templateObject_1$2 = __chunk_1.__makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var TableWrapper$1 = styled__default.div(templateObject_2$2 || (templateObject_2$2 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"], ["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n"])));
var CollapseContainer$1 = styled__default(antd.Collapse)(templateObject_3$2 || (templateObject_3$2 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var NoTimeseries = styled__default.div(templateObject_4$2 || (templateObject_4$2 = __chunk_1.__makeTemplateObject(["\n  padding: 16px;\n"], ["\n  padding: 16px;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2;

var SpinContainer = styled__default.div(templateObject_1$3 || (templateObject_1$3 = __chunk_1.__makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"])));
var TabPane = antd.Tabs.TabPane;
var AssetMeta = /** @class */ (function (_super) {
    __chunk_1.__extends(AssetMeta, _super);
    function AssetMeta(props) {
        var _this = _super.call(this, props) || this;
        _this.loadAll = function (assetId) { return __chunk_1.__awaiter(_this, void 0, void 0, function () {
            var _a, eventProps, docsProps, timeseriesProps, sdkInstance, query, promises, _b, asset, events, docs, timeseries, error_1;
            return __chunk_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, eventProps = _a.eventProps, docsProps = _a.docsProps, timeseriesProps = _a.timeseriesProps, sdkInstance = _a.sdkInstance;
                        query = { assetId: assetId, limit: 1000 };
                        promises = [
                            __chunk_2.retrieveAsset(sdkInstance, assetId),
                            this.includesPanel('events')
                                ? __chunk_2.getAssetEvent(sdkInstance, query)
                                : Promise.resolve(null),
                            this.includesPanel('documents')
                                ? __chunk_2.getAssetFiles(sdkInstance, query)
                                : Promise.resolve(null),
                            this.includesPanel('timeseries')
                                ? __chunk_2.getAssetTimeseries(sdkInstance, query)
                                : Promise.resolve(null),
                        ];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, __chunk_4.connectPromiseToUnmountState(this, Promise.all(promises))];
                    case 2:
                        _b = __chunk_1.__read.apply(void 0, [_c.sent(), 4]), asset = _b[0], events = _b[1], docs = _b[2], timeseries = _b[3];
                        this.setState({
                            isLoading: false,
                            asset: asset || null,
                            assetEvents: events ? __chunk_1.__assign({}, eventProps, { events: events }) : null,
                            docs: docs ? __chunk_1.__assign({}, docsProps, { docs: docs }) : null,
                            timeseries: timeseries ? __chunk_1.__assign({}, timeseriesProps, { timeseries: timeseries }) : null,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        if (error_1 instanceof __chunk_4.CanceledPromiseException !== true) {
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
            React__default.createElement(__chunk_6.DescriptionList, { valueSet: asset.metadata, styles: styles && styles.details })));
    };
    AssetMeta.prototype.renderTimeseries = function () {
        var timeseries = this.state.timeseries;
        if (!timeseries || !this.includesPanel('timeseries')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Timeseries', timeseries && timeseries.timeseries ? timeseries.timeseries.length : 0), key: "timeseries" },
            React__default.createElement(TimeseriesPanel, __chunk_1.__assign({}, timeseries))));
    };
    AssetMeta.prototype.renderDocuments = function () {
        var styles = this.props.styles;
        var docs = this.state.docs;
        if (!docs || !this.includesPanel('documents')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Documents', docs.docs.length), key: "documents" },
            React__default.createElement(DocumentTable, __chunk_1.__assign({}, docs, { styles: styles && styles.documents }))));
    };
    AssetMeta.prototype.renderEvents = function () {
        var styles = this.props.styles;
        var assetEvents = this.state.assetEvents;
        if (!assetEvents || !this.includesPanel('events')) {
            return null;
        }
        return (React__default.createElement(TabPane, { tab: this.tabStyle('Events', assetEvents.events ? assetEvents.events.length : 0), key: "events" },
            React__default.createElement(AssetEventsPanel, __chunk_1.__assign({}, assetEvents, { styles: styles && styles.events }))));
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
var EmptyPane = styled__default.span(templateObject_2$3 || (templateObject_2$3 = __chunk_1.__makeTemplateObject(["\n  color: #9b9b9b;\n"], ["\n  color: #9b9b9b;\n"])));
var templateObject_1$3, templateObject_2$3;

exports.AssetMeta = AssetMeta;
