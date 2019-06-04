import React from 'react';
export interface DetailCheckboxProps {
    checked: boolean;
    description: string;
    disabled: boolean;
    onContainerClick: any;
    title: string;
    className: string;
    checkable: boolean;
}
export declare const DetailCheckbox: React.SFC<DetailCheckboxProps>;
