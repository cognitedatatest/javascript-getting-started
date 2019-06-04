import * as sdk from '@cognite/sdk';
import React from 'react';
import { ApiQuery, Callback, PureObject } from '../../interfaces';
import { SearchStyles as AssetSearchStyles } from '../common/Search/Search';
export declare type AssetSearchStyles = AssetSearchStyles;
declare type LiveSearchSelect = (asset: sdk.Asset) => void;
export declare const defaultStrings: PureObject;
export interface AssetSearchProps {
    onLiveSearchSelect: LiveSearchSelect;
    onError?: Callback;
    strings?: PureObject;
    rootAssetSelect: boolean;
    advancedSearch: boolean;
    styles?: AssetSearchStyles;
}
interface AssetSearchState {
    items: sdk.Asset[];
    loading: boolean;
}
export declare class AssetSearch extends React.Component<AssetSearchProps, AssetSearchState> {
    static defaultProps: {
        rootAssetSelect: boolean;
        advancedSearch: boolean;
    };
    constructor(props: AssetSearchProps);
    onSearch(query: ApiQuery): Promise<void>;
    render(): JSX.Element;
}
export {};
