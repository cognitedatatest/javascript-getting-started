import React from 'react';
import { Callback, EmptyCallback, PureObject, SetVideoRefCallback } from '../../../interfaces';
import { ButtonRenderProp } from '../AssetScanner';
export declare const defaultStrings: PureObject;
export interface WebcamScannerStyles {
    button: React.CSSProperties;
}
interface WebcamScannerProps {
    isLoading: boolean;
    capture: EmptyCallback;
    setRef: SetVideoRefCallback;
    button?: ButtonRenderProp;
    imageSrc?: string;
    onReset?: EmptyCallback;
    styles?: WebcamScannerStyles;
    strings?: PureObject;
    onError?: Callback;
}
export declare function WebcamScanner({ capture, imageSrc, isLoading, setRef, onReset, styles, strings, onError, button, }: WebcamScannerProps): JSX.Element;
export {};
