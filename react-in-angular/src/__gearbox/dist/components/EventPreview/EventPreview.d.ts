import { Event as ApiEvent } from '@cognite/sdk';
import React from 'react';
import { PureObject } from '../../interfaces';
import { EventPreviewStyles } from './components/EventPreviewView';
export declare type EventPreviewStyles = EventPreviewStyles;
export interface EventPreviewProps {
    eventId: number;
    onShowDetails?: (e: ApiEvent) => void;
    strings?: PureObject;
    hideProperties?: (keyof ApiEvent)[];
    hideLoadingSpinner?: boolean;
    styles?: EventPreviewStyles;
}
interface EventPreviewState {
    event: ApiEvent | null;
}
export declare class EventPreview extends React.Component<EventPreviewProps, EventPreviewState> {
    isComponentUnmount: boolean;
    constructor(props: EventPreviewProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: EventPreviewProps): void;
    componentWillUnmount(): void;
    loadEvent(): Promise<void>;
    render(): JSX.Element | null;
}
export {};
