import { RadioChangeEvent } from 'antd/lib/radio';
import React from 'react';
import { WithTimeseriesDataProps } from '../../hoc/withTimeseries/withTimeseries';
declare const timeScales: {
    [key: string]: {
        unit: string;
        number: number;
    };
};
export declare type TimeseriesChartMetaPeriod = keyof typeof timeScales;
export interface TimeseriesChartMetaProps extends WithTimeseriesDataProps {
    liveUpdate?: boolean;
    updateIntervalMillis?: number;
    defaultTimePeriod?: TimeseriesChartMetaPeriod;
    defaultBasePeriod?: {
        startTime: number;
        endTime: number;
    };
    showDescription?: boolean;
    showPeriods?: boolean;
    showChart?: boolean;
    showDatapoint?: boolean;
    showMetadata?: boolean;
}
interface TimeseriesChartMetaState {
    timePeriod: TimeseriesChartMetaPeriod;
    basePeriod: {
        startTime: number;
        endTime: number;
    };
}
export declare class TimeseriesChartMetaPure extends React.PureComponent<TimeseriesChartMetaProps, TimeseriesChartMetaState> {
    static defaultProps: {
        liveUpdate: boolean;
        updateIntervalMillis: number;
        defaultTimePeriod: string;
        showDescription: boolean;
        showPeriods: boolean;
        showChart: boolean;
        showDatapoint: boolean;
        showMetadata: boolean;
    };
    constructor(props: TimeseriesChartMetaProps);
    getBasePeriod(period: TimeseriesChartMetaPeriod): {
        startTime: number;
        endTime: number;
    };
    handlePeriodChange: (e: RadioChangeEvent) => void;
    render(): JSX.Element | null;
}
export {};
