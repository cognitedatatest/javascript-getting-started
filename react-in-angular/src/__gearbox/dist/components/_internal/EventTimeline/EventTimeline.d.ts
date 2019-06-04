import { ScaleTime } from 'd3';
import React from 'react';
import { EventTimelineType, IdCallback } from '../../../interfaces';
interface EventTimelineProps {
    barHeight: number;
    className: string;
    data: EventTimelineType[];
    isLoading: boolean;
    onEventClicked?: IdCallback;
}
export declare class EventTimeline extends React.Component<EventTimelineProps> {
    static defaultProps: {
        data: never[];
        className: string;
        barHeight: number;
        isLoading: boolean;
    };
    node: SVGSVGElement | null;
    private xAxis;
    private currentX;
    private chart;
    private axis;
    componentDidMount(): void;
    componentDidUpdate(prevProps: EventTimelineProps): void;
    calculateWidth: (scale: ScaleTime<number, number>, eventData: EventTimelineType) => number;
    createChart: () => void;
    zoomed: () => void;
    render(): JSX.Element;
    private instantaneous;
}
export {};
