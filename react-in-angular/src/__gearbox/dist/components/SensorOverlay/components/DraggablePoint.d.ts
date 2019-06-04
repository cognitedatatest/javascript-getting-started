import React, { Component } from 'react';
import { ConnectDragPreview, ConnectDragSource } from 'react-dnd';
interface DragSourceProps {
    connectDragSource: ConnectDragSource;
    connectDragPreview: ConnectDragPreview;
    isDragging: boolean;
}
interface DraggablePointProps extends DragSourceProps {
    onClick?: (id: number) => void;
    onDragHandleDoubleClick: (tsId: number) => void;
    id: number;
    isDraggable: boolean;
    left: number;
    top: number;
    color: string;
}
export declare class DraggablePoint extends Component<DraggablePointProps> {
    handleOnClick: () => void;
    onDragHandleDoubleClick: () => void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}
declare const _default: import("react-dnd").DndComponentClass<typeof DraggablePoint, Pick<DraggablePointProps, "onClick" | "onDragHandleDoubleClick" | "id" | "isDraggable" | "left" | "top" | "color">>;
export default _default;
