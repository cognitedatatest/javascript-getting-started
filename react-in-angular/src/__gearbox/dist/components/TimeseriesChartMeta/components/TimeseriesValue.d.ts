import React from 'react';
import { ComponentWithUnmountState } from '../../../utils/promise';
interface TimeseriesValueProps {
    timeseriesDescription?: string;
    timeseriesName: string;
    liveUpdate?: boolean;
    updatePeriodMillis?: number;
    unit?: string;
}
interface TimeseriesValueState {
    value: string | null;
    lastTimestamp: number | null;
}
export declare class TimeseriesValue extends React.PureComponent<TimeseriesValueProps, TimeseriesValueState> implements ComponentWithUnmountState {
    static defaultProps: {
        liveUpdate: boolean;
        timeseriesDescription: string;
        updatePeriodMillis: number;
    };
    isComponentUnmounted: boolean;
    state: {
        value: null;
        lastTimestamp: null;
    };
    private interval;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: TimeseriesValueProps): void;
    getLatestDatapoint: () => Promise<void>;
    render(): JSX.Element;
}
export {};
