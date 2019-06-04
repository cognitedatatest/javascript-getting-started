import * as sdk from '@cognite/sdk';
import React from 'react';
import { IdCallback, PureObject } from '../../../interfaces';
export declare const defaultStrings: PureObject;
export interface RootAssetSelectStyles {
    select?: React.CSSProperties;
}
export interface RootAssetSelectProps {
    allowAll: boolean;
    assetId: number;
    className: string;
    strings: PureObject;
    onAssetSelected?: IdCallback;
    styles?: RootAssetSelectStyles;
}
interface RootAssetSelectState {
    current: number;
    assets: sdk.Asset[] | null;
}
export declare class RootAssetSelect extends React.Component<RootAssetSelectProps, RootAssetSelectState> {
    static defaultProps: {
        allowAll: boolean;
        assetId: number;
        className: string;
        strings: {};
    };
    constructor(props: RootAssetSelectProps);
    componentDidMount(): Promise<void>;
    onSelectAsset: (selectedAssetId: number) => void;
    render(): JSX.Element;
}
export {};
