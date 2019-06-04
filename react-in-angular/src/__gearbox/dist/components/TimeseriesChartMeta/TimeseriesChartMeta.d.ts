/// <reference types="react" />
import { TimeseriesChartMetaPeriod, TimeseriesChartMetaProps } from './TimeseriesChartMetaPure';
export declare type TimeseriesChartMetaProps = TimeseriesChartMetaProps;
export declare type TimeseriesChartMetaPeriod = TimeseriesChartMetaPeriod;
export declare const TimeseriesChartMeta: {
    new (props: TimeseriesChartMetaProps & import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesProps): {
        isComponentUnmounted: boolean;
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentDidUpdate(prevProps: TimeseriesChartMetaProps & import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesProps): void;
        loadTimeseries(): Promise<void>;
        render(): JSX.Element | null;
        context: any;
        setState<K extends "timeseries" | "timeseriesId" | "isLoading">(state: import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState | ((prevState: Readonly<import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState>, props: Readonly<Pick<TimeseriesChartMetaProps, "liveUpdate" | "updateIntervalMillis" | "defaultTimePeriod" | "defaultBasePeriod" | "showDescription" | "showPeriods" | "showChart" | "showDatapoint" | "showMetadata"> & import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesProps>) => import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState | Pick<import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState, K> | null) | Pick<import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<TimeseriesChartMetaProps, "liveUpdate" | "updateIntervalMillis" | "defaultTimePeriod" | "defaultBasePeriod" | "showDescription" | "showPeriods" | "showChart" | "showDatapoint" | "showMetadata"> & import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    getDerivedStateFromProps(props: TimeseriesChartMetaProps & import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesProps, state: import("../../hoc/withTimeseries/withTimeseries").WithTimeseriesState): {
        isLoading: boolean;
        timeseries: null;
        timeseriesId: number;
    } | null;
    contextType?: import("react").Context<any> | undefined;
};
