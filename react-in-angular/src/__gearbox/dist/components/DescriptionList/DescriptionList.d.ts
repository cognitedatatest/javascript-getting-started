import React from 'react';
export interface DescriptionListProps {
    description?: {
        descriptionId: string;
        descriptionText: string;
    };
    valueSet: {
        [name: string]: any;
    };
    styles?: React.CSSProperties;
}
export declare const DescriptionList: {
    (props: DescriptionListProps): JSX.Element;
    displayName: string;
};
