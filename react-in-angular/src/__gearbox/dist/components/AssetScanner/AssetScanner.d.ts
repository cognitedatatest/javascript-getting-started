import React from 'react';
import { ocrRecognize } from '../../api';
import { Callback, EmptyCallback, OcrRequest, OnAssetListCallback, PureObject, SetVideoRefCallback } from '../../interfaces';
export declare enum ASNotifyTypes {
    recognizeSuccess = "recognizeSuccess",
    recognizeFails = "recognizeFails",
    assetsFind = "assetsFind",
    assetsEmpty = "assetsEmpty",
    errorVideoAccess = "errorVideoAccess",
    errorOccurred = "errorOccurred"
}
declare type ASNotification = (type: ASNotifyTypes) => any;
export declare type ButtonRenderProp = (onCapture: Callback, image?: string) => React.ReactNode;
export interface AssetScannerStyles {
    button: React.CSSProperties;
}
export interface AssetScannerProps {
    ocrRequest: (ocrParams: OcrRequest) => Promise<string[]>;
    ocrKey?: string;
    button?: ButtonRenderProp;
    extractOcrStrings?: (ocrResult: any) => string[];
    enableNotification?: boolean;
    customNotification?: ASNotification;
    onImageRecognizeStart?: (image: string) => void;
    onImageRecognizeFinish?: (strings: string[] | null) => void;
    onImageRecognizeEmpty?: Callback;
    onAssetFetchResult?: OnAssetListCallback;
    onStartLoading?: EmptyCallback;
    onEndLoading?: EmptyCallback;
    onOcrError?: Callback;
    onError?: Callback;
    onImageReset?: Callback;
    styles?: AssetScannerStyles;
    strings?: PureObject;
}
interface AssetScannerState {
    isLoading: boolean;
    scannedImageSrc: string;
}
export declare class AssetScanner extends React.Component<AssetScannerProps, AssetScannerState> {
    static defaultProps: {
        ocrRequest: typeof ocrRecognize;
        enableNotification: boolean;
    };
    notification: ASNotification;
    state: AssetScannerState;
    video: HTMLVideoElement | null;
    setRefBound: SetVideoRefCallback;
    captureBound: EmptyCallback;
    resetSearchBound: EmptyCallback;
    constructor(props: AssetScannerProps);
    componentDidMount(): void;
    setRef(video: HTMLVideoElement | null): void;
    resetSearch(): void;
    capture(): Promise<void>;
    render(): JSX.Element;
    private startLoading;
    private endLoading;
    private setScannedImageSrc;
    private prepareNotifications;
    private embeddedNotification;
    private getAssets;
    private getImageFromCanvas;
    private recognizeImage;
    private getAssetsHandler;
}
export {};
