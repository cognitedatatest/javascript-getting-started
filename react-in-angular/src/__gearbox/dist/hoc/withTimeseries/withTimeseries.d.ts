import { Timeseries } from '@cognite/sdk';
import React from 'react';
export interface WithTimeseriesDataProps {
    timeseries: Timeseries;
}
export interface WithTimeseriesProps {
    timeseriesId: number;
}
export interface WithTimeseriesState {
    isLoading: boolean;
    timeseries: Timeseries | null;
    timeseriesId: number;
}
export declare const withTimeseries: <P extends WithTimeseriesDataProps>(WrapperComponent: React.ComponentType<P>) => {
    new (props: P & WithTimeseriesProps): {
        isComponentUnmounted: boolean;
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentDidUpdate(prevProps: P & WithTimeseriesProps): void;
        loadTimeseries(): Promise<void>;
        render(): JSX.Element | null;
        context: any;
        setState<K extends "timeseries" | "timeseriesId" | "isLoading">(state: WithTimeseriesState | ((prevState: Readonly<WithTimeseriesState>, props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "timeseries">> & WithTimeseriesProps>) => WithTimeseriesState | Pick<WithTimeseriesState, K> | null) | Pick<WithTimeseriesState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "timeseries">> & WithTimeseriesProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<WithTimeseriesState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    getDerivedStateFromProps(props: P & WithTimeseriesProps, state: WithTimeseriesState): {
        isLoading: boolean;
        timeseries: null;
        timeseriesId: number;
    } | null;
    contextType?: React.Context<any> | undefined;
};
