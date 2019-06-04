/// <reference types="globals" />
import { Timeseries } from '@cognite/sdk';
import React from 'react';
import { TimeseriesChartMetaProps } from '../../TimeseriesChartMeta/TimeseriesChartMetaPure';
export interface MetaTimeseriesProps extends Omit<TimeseriesChartMetaProps, 'timeseries'> {
    strings?: {
        noTimeseriesSign?: string;
    };
}
export interface TimeseriesPanelProps extends MetaTimeseriesProps {
    timeseries?: Timeseries[];
}
export declare class TimeseriesPanel extends React.PureComponent<TimeseriesPanelProps> {
    static defaultProps: {
        strings: {
            noTimeseriesSign: string;
        };
    };
    render(): JSX.Element;
}
