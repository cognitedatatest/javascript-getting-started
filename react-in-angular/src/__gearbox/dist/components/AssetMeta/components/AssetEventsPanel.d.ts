import { Event } from '@cognite/sdk';
import React, { Component } from 'react';
import { AssetEventsPanelProps } from '../../../interfaces';
interface EventAddonsProp extends Event {
    typeAndSubtype: React.ReactNode;
    start: string;
    end: string;
}
interface AssetEventsPanelState {
    selectedEvent: EventAddonsProp | null;
}
export declare class AssetEventsPanel extends Component<AssetEventsPanelProps, AssetEventsPanelState> {
    constructor(props: AssetEventsPanelProps);
    getTableComponents(): {
        body: {
            row: (props: any) => JSX.Element;
            cell: (props: any) => JSX.Element;
        };
    };
    renderEventDetails: (event: EventAddonsProp) => JSX.Element;
    renderEventMetadata: (event: EventAddonsProp) => JSX.Element;
    mapEvent: (event: Event) => EventAddonsProp;
    onEventClick: (id: number) => void;
    render(): JSX.Element;
}
export {};
