/// <reference types="lodash" />
import React, { KeyboardEvent } from 'react';
import { AdvancedSearch, Callback, EmptyCallback, IdCallback, OnClick, PureObject } from '../../../interfaces';
export declare const defaultStrings: PureObject;
export interface SearchStyles {
    rootAssetSelect?: React.CSSProperties;
    advancedSearchButton?: React.CSSProperties;
    searchResultList?: {
        container?: React.CSSProperties;
        listItem?: React.CSSProperties;
    };
    advancedSearch?: {
        modalBody?: React.CSSProperties;
        searchButton?: React.CSSProperties;
        clearButton?: React.CSSProperties;
        searchForm?: {
            container?: React.CSSProperties;
            addMoreMetadataButton?: React.CSSProperties;
        };
    };
}
export interface SearchProps {
    fetchingLimit: number;
    debounceTime: number;
    loading: boolean;
    rootAssetSelect: boolean;
    advancedSearch: boolean;
    liveSearch: boolean;
    strings: PureObject;
    liveSearchResults: any[];
    assetId?: number;
    onSearch?: Callback;
    onAssetSelected?: IdCallback;
    onFilterIconClick?: EmptyCallback;
    onLiveSearchSelect?: Callback;
    onKeyDown?: (e: KeyboardEvent) => void;
    styles?: SearchStyles;
}
interface SearchState {
    assetId: number;
    query: string;
    isModalOpen: boolean;
    advancedSearchQuery: AdvancedSearch | null;
    liveSearchResults: any[];
    liveSearchShow: boolean;
    cursor?: number;
}
export declare class Search extends React.Component<SearchProps, SearchState> {
    static defaultProps: {
        liveSearchResults: never[];
        fetchingLimit: number;
        debounceTime: number;
        loading: boolean;
        advancedSearch: boolean;
        rootAssetSelect: boolean;
        liveSearch: boolean;
        strings: {};
    };
    static getDerivedStateFromProps(props: SearchProps, state: SearchState): {
        liveSearchResults: any[];
        liveSearchShow: boolean;
    } | null;
    onSearchBlurBounded: OnClick;
    onSearch: (() => void) & import("lodash").Cancelable;
    constructor(props: SearchProps);
    debouncedSearch(): void;
    onFilterIconClick: () => void;
    onModalCancel: () => void;
    onModalOk: () => void;
    onAssetSelected: (assetId: number) => void;
    onSearchChange: (value: AdvancedSearch) => void;
    onSearchQueryInput: (e: React.SyntheticEvent<Element, Event>) => void;
    onKeyDown: (e: React.KeyboardEvent<Element>) => void;
    render(): JSX.Element;
    private onSearchBlur;
    private renderLiveSearch;
    private toggleInputIcon;
    private onLiveSearchClick;
}
export {};
