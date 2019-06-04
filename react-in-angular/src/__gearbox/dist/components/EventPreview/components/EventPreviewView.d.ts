import { Event as ApiEvent } from '@cognite/sdk';
import React from 'react';
import { PureObject } from '../../../interfaces';
export declare const defaultStrings: PureObject;
export interface EventPreviewStyles {
    wrapper?: React.CSSProperties;
    eventType?: React.CSSProperties;
    description?: React.CSSProperties;
    button?: React.CSSProperties;
    times?: React.CSSProperties;
    metadata?: React.CSSProperties;
}
export interface EventPreviewProps {
    event: ApiEvent;
    onShowDetails?: (event: ApiEvent) => void;
    strings?: PureObject;
    hideProperties?: (keyof ApiEvent)[];
    styles?: EventPreviewStyles;
}
export declare const EventPreviewView: ({ onShowDetails, event, strings, hideProperties, styles, }: EventPreviewProps) => JSX.Element;
