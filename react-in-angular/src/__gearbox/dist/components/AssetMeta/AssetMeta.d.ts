import { Asset } from '@cognite/sdk';
import React from 'react';
import { AssetEventsPanelProps, AssetEventsPanelStyles, AssetPanelType, DocumentTableProps, DocumentTableStyles } from '../../interfaces';
import { MetaEventsProps } from '../../interfaces/AssetTypes';
import { MetaDocProps } from '../../interfaces/DocumentTypes';
import { ComponentWithUnmountState } from '../../utils/promise';
import { MetaTimeseriesProps, TimeseriesPanelProps } from './components/TimeseriesPanel';
export interface AssetMetaStyles {
    header?: React.CSSProperties;
    emptyTab?: React.CSSProperties;
    details?: React.CSSProperties;
    documents?: DocumentTableStyles;
    events?: AssetEventsPanelStyles;
}
interface AssetMetaProps {
    assetId: number;
    tab?: string;
    docsProps?: MetaDocProps;
    eventProps?: MetaEventsProps;
    timeseriesProps?: MetaTimeseriesProps;
    hidePanels?: AssetPanelType[];
    onPaneChange?: (key: string) => void;
    styles?: AssetMetaStyles;
    sdkInstance: any;
}
interface AssetMetaState {
    asset: Asset | null;
    assetEvents: AssetEventsPanelProps | null;
    docs: DocumentTableProps | null;
    timeseries: TimeseriesPanelProps | null;
    isLoading: boolean;
}
export declare class AssetMeta extends React.Component<AssetMetaProps, AssetMetaState> implements ComponentWithUnmountState {
    isComponentUnmounted: boolean;
    constructor(props: AssetMetaProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: AssetMetaProps): void;
    loadAll: (assetId: number) => Promise<void>;
    tabStyle: (tab: string, contentLen: number) => JSX.Element;
    includesPanel: (pane: AssetPanelType) => boolean;
    renderDetails(): JSX.Element | null;
    renderTimeseries(): JSX.Element | null;
    renderDocuments(): JSX.Element | null;
    renderEvents(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
