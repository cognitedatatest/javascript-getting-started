import * as sdk from '@cognite/sdk';
import React from 'react';
import { ApiQuery, PureObject } from '../../interfaces';
import { Item } from './SelectedItems';
export interface TimeseriesSearchStyles {
    buttonRow?: React.CSSProperties;
    list?: React.CSSProperties;
    selectAllButton?: React.CSSProperties;
    selectNoneButton?: React.CSSProperties;
}
export interface TimeseriesSearchProps {
    selectedTimeseries: number[];
    single: boolean;
    hideSelected: boolean;
    allowStrings: boolean;
    onTimeserieSelectionChange: (newTimeseriesIds: number[], selectedTimeseries: sdk.Timeseries | null) => void;
    rootAsset?: number;
    filterRule?: (timeseries: sdk.Timeseries) => boolean;
    onError?: (error: Error) => void;
    styles?: TimeseriesSearchStyles;
    rootAssetSelect: boolean;
    strings: PureObject;
}
export declare const defaultStrings: PureObject;
interface TimeseriesSearchState {
    assetId?: number;
    fetching: boolean;
    searchResults: sdk.Timeseries[];
    selectedTimeseries: sdk.Timeseries[];
    lastFetchId: number;
    cursor?: number;
}
export declare class TimeseriesSearch extends React.Component<TimeseriesSearchProps, TimeseriesSearchState> {
    static defaultProps: {
        selectedTimeseries: never[];
        strings: {};
        filterRule: undefined;
        hideSelected: boolean;
        allowStrings: boolean;
        rootAssetSelect: boolean;
        single: boolean;
        onError: undefined;
        rootAsset: undefined;
    };
    static getDerivedStateFromProps(props: TimeseriesSearchProps, state: TimeseriesSearchState): {
        assetId: number | undefined;
    } | null;
    constructor(props: TimeseriesSearchProps);
    componentDidMount(): Promise<void>;
    onSelectAsset: (assetId: number) => void;
    onTimeSerieClicked: (timeseries: sdk.Timeseries) => void;
    fetchTimeseries: (apiQuery: ApiQuery) => void;
    isChecked: (id: number) => boolean;
    onItemClose: (item: Item) => void;
    onKeyDown: (e: React.KeyboardEvent<Element>) => void;
    onSelectAll: () => void;
    onSelectNone: () => void;
    isAllSelected: () => boolean;
    render(): JSX.Element;
}
export {};
