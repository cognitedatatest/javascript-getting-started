/// <reference types="griff-react" />
import React from 'react';
import { Annotation, Ruler } from '@cognite/griff-react';
export interface TimeseriesChartStyles {
    container?: React.CSSProperties;
}
export declare type TimeseriesChartProps = {
    styles?: TimeseriesChartStyles;
    pointsPerSeries: number;
    startTime: number | Date;
    endTime: number | Date;
    contextChart: boolean;
    zoomable: boolean;
    liveUpdate: boolean;
    crosshair: boolean;
    updateIntervalMillis: number;
    timeseriesColors: {
        [id: number]: string;
    };
    hiddenSeries: {
        [id: number]: boolean;
    };
    annotations: Annotation[];
    ruler: Ruler;
    collections: any;
    xAxisHeight: number;
    yAxisDisplayMode: 'ALL' | 'COLLAPSED' | 'NONE';
    yAxisPlacement: 'RIGHT' | 'LEFT' | 'BOTH';
    height?: number;
    width?: number;
    onMouseMove?: (e: any) => void;
    onBlur?: (e: any) => void;
    onMouseOut?: (e: any) => void;
    onFetchDataError: (e: Error) => void;
} & ({
    timeseriesIds: number[];
} | {
    series: any;
});
interface TimeseriesChartState {
    loaded: boolean;
}
export declare class TimeseriesChart extends React.Component<TimeseriesChartProps, TimeseriesChartState> {
    static defaultProps: {
        startTime: number;
        endTime: number;
        pointsPerSeries: number;
        updateIntervalMillis: number;
        zoomable: boolean;
        contextChart: boolean;
        crosshair: boolean;
        yAxisDisplayMode: string;
        liveUpdate: boolean;
        yAxisPlacement: string;
        height: undefined;
        width: undefined;
        timeseriesColors: {};
        hiddenSeries: {};
        annotations: never[];
        xAxisHeight: number;
        collections: {};
        ruler: undefined;
        onFetchDataError: (e: Error) => never;
    };
    state: {
        loaded: boolean;
    };
    onFetchData: () => void;
    render(): false | JSX.Element;
}
export {};
