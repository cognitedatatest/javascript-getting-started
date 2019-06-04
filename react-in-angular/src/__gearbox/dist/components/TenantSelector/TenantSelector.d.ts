import React from 'react';
import { PureObject } from '../../interfaces';
declare enum TenantValidity {
    CHECKING = 0,
    INVALID = 1,
    UNKNOWN = 2
}
export interface TenantSelectorStyles {
    button?: React.CSSProperties;
    collapseWrapper?: React.CSSProperties;
    input?: React.CSSProperties;
    subTitle?: React.CSSProperties;
    title?: React.CSSProperties;
    wrapper?: React.CSSProperties;
}
export interface TenantSelectorProps {
    header?: string | React.ReactNode;
    initialTenant?: string;
    loginText?: string;
    onInvalidTenant?: (tenant: string) => void;
    onTenantSelected: (tenant: string, advancedOptions: PureObject | null) => void;
    placeholder?: string;
    title: string | React.ReactNode;
    unknownMessage?: string;
    validateTenant?: (tenant: string, advancedOptions: PureObject | null) => Promise<boolean>;
    advancedOptions?: PureObject;
    styles?: TenantSelectorStyles;
}
interface TenantSelectorState {
    tenant: string;
    validity: TenantValidity;
    advanced: PureObject;
}
export declare class TenantSelector extends React.Component<TenantSelectorProps, TenantSelectorState> {
    static defaultProps: {
        advancedOptions: {};
    };
    constructor(props: TenantSelectorProps);
    renderAdvancedOptions(): JSX.Element | null;
    render(): JSX.Element;
    private onAdvancedOptionChange;
    private onTenantChange;
    private checkTenantValidity;
    private getNonEmptyAdvancedFields;
}
export {};
