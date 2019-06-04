import { Datapoint } from '@cognite/sdk';
import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface SensorPosition {
    left: number;
    top: number;
    pointer: {
        left: number;
        top: number;
    };
}
export interface SensorMinMaxRange {
    min?: number;
    max?: number;
}
export interface SensorOverlayProps {
    children: React.ReactNode;
    timeseriesIds: number[];
    alertColor?: string;
    colorMap: {
        [id: string]: string;
    };
    defaultPositionMap: {
        [id: string]: SensorPosition;
    };
    linksMap: {
        [id: string]: boolean;
    };
    stickyMap: {
        [id: string]: boolean;
    };
    minMaxMap: {
        [id: string]: SensorMinMaxRange;
    };
    isTagDraggable: boolean;
    isPointerDraggable: boolean;
    onSensorPositionChange?: (id: number, position: SensorPosition) => void;
    onSettingsClick?: (id: number) => void;
    onClick?: (id: number) => void;
    onLinkClick?: (id: number, dataPoint?: Datapoint) => void;
    connectDropTarget: ConnectDropTarget;
    size: {
        width: number;
        height: number;
    };
    fixedWidth?: number;
    refreshInterval?: number;
    strings?: {
        [key: string]: string;
    };
}
declare const FinalSensorOverlay: any;
export { FinalSensorOverlay as SensorOverlay };
