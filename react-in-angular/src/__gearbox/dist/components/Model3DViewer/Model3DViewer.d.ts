import { Cognite3DModel, Cognite3DViewer, THREE } from '@cognite/3d-viewer';
import * as sdk from '@cognite/sdk';
import React, { RefObject } from 'react';
import { CacheObject, Callback, MouseScreenPosition } from '../../interfaces';
declare type ClickHandler = (position: MouseScreenPosition) => void;
export interface Model3DViewerProps {
    modelId: number;
    revisionId: number;
    boundingBox?: THREE.Box3;
    cache?: CacheObject;
    assetId?: number;
    enableKeyboardNavigation?: boolean;
    onError?: Callback;
    onProgress?: Callback;
    onComplete?: Callback;
    onReady?: Callback;
    onClick?: Callback;
    onCameraChange?: Callback;
    useDefaultCameraPosition?: boolean;
}
export declare function mockCreateViewer(mockFunction: any): void;
export declare class Model3DViewer extends React.Component<Model3DViewerProps> {
    static defaultProps: {
        enableKeyboardNavigation: boolean;
        useDefaultCameraPosition: boolean;
    };
    disposeCalls: any[];
    divWrapper: RefObject<HTMLDivElement>;
    inputWrapper: RefObject<HTMLInputElement>;
    model: Cognite3DModel | null;
    onClickHandlerBounded: ClickHandler;
    onCompleteBounded: Callback;
    revision: sdk.Revision | null;
    viewer: Cognite3DViewer | null;
    nodes: sdk.AssetMapping[];
    constructor(props: Model3DViewerProps);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: Model3DViewerProps): Promise<void>;
    componentWillUnmount(): void;
    addDisposeCall: (func: any) => void;
    dispose: () => void;
    resetCameraPosition: () => void;
    onClickHandler({ offsetX, offsetY }: MouseScreenPosition): void;
    onContainerClick: () => void;
    onBlur: () => void;
    onFocus: () => void;
    render(): JSX.Element;
    private findMappedNodes;
    private highlightNodes;
    private onComplete;
}
export {};
