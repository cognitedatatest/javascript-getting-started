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
var __chunk_10 = require('../../chunks/chunk-4f0fd587.js');

var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes["ERROR"] = "error";
    NotificationTypes["WARNING"] = "warning";
    NotificationTypes["INFO"] = "info";
    NotificationTypes["SUCCESS"] = "success";
})(NotificationTypes || (NotificationTypes = {}));
var notification = function (_a) {
    var _b = _a.type, type = _b === void 0 ? NotificationTypes.INFO : _b, message = _a.message, description = _a.description, props = __chunk_1.__rest(_a, ["type", "message", "description"]);
    antd.notification[type](__chunk_1.__assign({ message: message, key: message, description: description }, props));
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

var StyledVideo = styled__default.video(templateObject_1 || (templateObject_1 = __chunk_1.__makeTemplateObject(["\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n"], ["\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n"])));
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
    __chunk_1.__extends(Webcam, _super);
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
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var devices, audioSource_1, videoSource_1, error_1;
            return __chunk_1.__generator(this, function (_a) {
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
        return (React__default.createElement(StyledVideo, { autoPlay: true, muted: this.props.audio, className: this.props.className, style: __chunk_1.__assign({}, videoStyles), ref: function (ref) {
                _this.video = ref;
                if (setRef) {
                    setRef(ref);
                }
            } }));
    };
    Webcam.prototype.sourceSelected = function (audioSource, videoSource) {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var _a, onError, audio, width, height, constraints, stream_1, e_1;
            return __chunk_1.__generator(this, function (_b) {
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
var templateObject_1;

var Wrapper = styled__default.img(templateObject_1$1 || (templateObject_1$1 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  min-width: 150px;\n  top: 50%;\n  transform: translate(0, -50%);\n"], ["\n  width: 100%;\n  max-width: 100%;\n  position: absolute;\n  min-width: 150px;\n  top: 50%;\n  transform: translate(0, -50%);\n"])));
function WebcamScreenshot(_a) {
    var src = _a.src, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React__default.createElement(Wrapper, { src: "data:image/png;base64," + src, alt: "Captured from webcam", id: "freezeFrame", className: className }));
}
var templateObject_1$1;

var CameraButton = styled__default.button(templateObject_1$2 || (templateObject_1$2 = __chunk_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  border-radius: 100%;\n  width: 75px;\n  height: 75px;\n  outline: none;\n  transform: translateY(-50%);\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: .9\n  font-weight: 600;\n  :hover {\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  border-radius: 100%;\n  width: 75px;\n  height: 75px;\n  outline: none;\n  transform: translateY(-50%);\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: .9\n  font-weight: 600;\n  :hover {\n    opacity: 1;\n  }\n"])));
var Wrapper$1 = styled__default.div(templateObject_2 || (templateObject_2 = __chunk_1.__makeTemplateObject(["\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"], ["\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"])));
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
    var resultStrings = __chunk_1.__assign({}, defaultStrings, strings);
    return (React__default.createElement(Wrapper$1, null,
        React__default.createElement(__chunk_10.LoadingOverlay, { size: 'large', isLoading: isLoading }),
        imageSrc && React__default.createElement(WebcamScreenshot, { src: imageSrc }),
        React__default.createElement(Webcam, { audio: false, setRef: setRef, className: "camera", onError: onError }),
        !isLoading &&
            (button ? (button(onCaptureClick, imageSrc)) : (React__default.createElement(CameraButton, { onClick: onCaptureClick, "data-test-id": "scanner-camera-button", style: styles && styles.button }, imageSrc ? resultStrings.reset : '')))));
}
var templateObject_1$2, templateObject_2;

var Wrapper$2 = styled__default.div(templateObject_1$3 || (templateObject_1$3 = __chunk_1.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n"], ["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n"])));
(function (ASNotifyTypes) {
    ASNotifyTypes["recognizeSuccess"] = "recognizeSuccess";
    ASNotifyTypes["recognizeFails"] = "recognizeFails";
    ASNotifyTypes["assetsFind"] = "assetsFind";
    ASNotifyTypes["assetsEmpty"] = "assetsEmpty";
    ASNotifyTypes["errorVideoAccess"] = "errorVideoAccess";
    ASNotifyTypes["errorOccurred"] = "errorOccurred";
})(exports.ASNotifyTypes || (exports.ASNotifyTypes = {}));
var AssetScanner = /** @class */ (function (_super) {
    __chunk_1.__extends(AssetScanner, _super);
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
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var _a, onImageRecognizeFinish, onImageRecognizeStart, onImageRecognizeEmpty, onAssetFetchResult, recognizeSuccess, recognizeFails, imageString, imageSrc, strings, assets;
            return __chunk_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onImageRecognizeFinish = _a.onImageRecognizeFinish, onImageRecognizeStart = _a.onImageRecognizeStart, onImageRecognizeEmpty = _a.onImageRecognizeEmpty, onAssetFetchResult = _a.onAssetFetchResult;
                        recognizeSuccess = exports.ASNotifyTypes.recognizeSuccess, recognizeFails = exports.ASNotifyTypes.recognizeFails;
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
        return (React__default.createElement(Wrapper$2, null,
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
            _a[exports.ASNotifyTypes.recognizeSuccess] = function () { return notification(ocrSuccess); },
            _a[exports.ASNotifyTypes.recognizeFails] = function () { return notification(ocrNoTextFound); },
            _a[exports.ASNotifyTypes.assetsFind] = function () { return notification(ocrAssetFind); },
            _a[exports.ASNotifyTypes.assetsEmpty] = function () { return notification(ocrAssetNotFind); },
            _a[exports.ASNotifyTypes.errorVideoAccess] = function () { return notification(ocrErrorVideo); },
            _a[exports.ASNotifyTypes.errorOccurred] = function () { return notification(ocrError); },
            _a);
        return notifications[type]();
    };
    AssetScanner.prototype.getAssets = function (strings) {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(strings.map(function (s) { return __chunk_2.getAssetList({ query: s }); }))];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(function (asset) { return asset.length; })
                            .reduce(function (res, current) { return res.concat(current); })];
                }
            });
        });
    };
    // Made async to provide better UX for component
    AssetScanner.prototype.getImageFromCanvas = function () {
        var errorVideoAccess = exports.ASNotifyTypes.errorVideoAccess;
        if (!this.video) {
            this.notification(errorVideoAccess);
            return Promise.resolve('');
        }
        var aspectRatio = this.video.videoWidth / this.video.videoHeight;
        var canvas = __chunk_3.getCanvas(this.video, this.video.clientWidth, this.video.clientWidth / aspectRatio);
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(canvas.toDataURL()); }, 0);
        });
    };
    AssetScanner.prototype.recognizeImage = function (image) {
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var _a, ocrKey, onOcrError, extractOcrStrings, ocrRequest, errorOccurred, error_1;
            return __chunk_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, ocrKey = _a.ocrKey, onOcrError = _a.onOcrError, extractOcrStrings = _a.extractOcrStrings, ocrRequest = _a.ocrRequest;
                        errorOccurred = exports.ASNotifyTypes.errorOccurred;
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
        return __chunk_1.__awaiter(this, void 0, void 0, function () {
            var onError, errorOccurred, error_2;
            return __chunk_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onError = this.props.onError;
                        errorOccurred = exports.ASNotifyTypes.errorOccurred;
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
        ocrRequest: __chunk_2.ocrRecognize,
        enableNotification: false,
    };
    return AssetScanner;
}(React__default.Component));
var templateObject_1$3;

exports.AssetScanner = AssetScanner;
