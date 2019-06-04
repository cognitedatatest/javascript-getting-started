import React from 'react';
export interface Item {
    id: number;
    name: string;
}
export interface SelectedTimeseriesProps {
    selectedItems: Item[];
    onItemClose: (closedItem: Item) => void;
}
export declare class SelectedItems extends React.Component<SelectedTimeseriesProps> {
    static defaultProps: {
        selectedItems: never[];
        onItemClose: null;
    };
    render(): JSX.Element;
}
