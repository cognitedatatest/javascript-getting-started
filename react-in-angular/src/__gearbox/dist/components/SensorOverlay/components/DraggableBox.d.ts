import { Datapoint, Timeseries } from '@cognite/sdk';
import React, { Component } from 'react';
import { ConnectDragPreview, ConnectDragSource } from 'react-dnd';
import { ComponentWithUnmountState } from '../../../utils/promise';
import { SensorMinMaxRange } from '../SensorOverlay';
export declare const Link: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const Tag: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TagName: import("styled-components").StyledComponent<"div", any, {}, never>;
interface DragSourceProps {
    connectDragSource: ConnectDragSource;
    connectDragPreview: ConnectDragPreview;
    isDragging: boolean;
}
interface DraggableBoxProps extends DragSourceProps {
    id: number;
    onClick?: (tsId: number) => void;
    onLinkClick?: (tsId: number, dataPoint?: Datapoint) => void;
    onSettingsClick?: (tsId: number) => void;
    onDragHandleDoubleClick: (tsId: number) => void;
    isDraggable: boolean;
    flipped: boolean;
    left: number;
    top: number;
    color: string;
    sticky?: boolean;
    refreshInterval: number;
    minMaxRange?: SensorMinMaxRange;
    strings: {
        [key: string]: string;
    };
    alertColor: string;
}
interface DraggableBoxState {
    tag: Timeseries | null;
    dataPoint: Datapoint | null;
    hovering: boolean;
}
export declare class DraggableBox extends Component<DraggableBoxProps, DraggableBoxState> implements ComponentWithUnmountState {
    static defaultProps: {
        hovering: boolean;
        color: string;
        flipped: boolean;
        min: null;
        max: null;
        sticky: boolean;
        isDraggable: boolean;
        refreshInterval: number;
        strings: {
            underPercentage: string;
            overPercentage: string;
        };
        alertColor: string;
    };
    isComponentUnmounted: boolean;
    private interval;
    constructor(props: DraggableBoxProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(nextProps: DraggableBoxProps): void;
    onMouseOver: (e: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseLeave: (e: React.MouseEvent<Element, MouseEvent>) => void;
    onDragHandleDoubleClick: () => void;
    fetchTimeSeries: (id: number) => Promise<void>;
    updateValue: () => Promise<void>;
    handleClick: () => void;
    handleSettingsClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
    handleLinkClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
    isValid: () => boolean;
    getPercentDiff: () => React.ReactNode;
    renderValue(): string | number | JSX.Element;
    renderTag(): JSX.Element;
    renderError(): JSX.Element | null;
    render(): JSX.Element | null;
}
declare const _default: import("react-dnd").DndComponentClass<typeof DraggableBox, Pick<DraggableBoxProps, "id" | "color" | "onClick" | "left" | "top" | "sticky" | "alertColor" | "onLinkClick" | "onSettingsClick" | "onDragHandleDoubleClick" | "isDraggable" | "flipped" | "refreshInterval" | "minMaxRange" | "strings">>;
export default _default;
