import { WrappedFormUtils } from 'antd/lib/form/Form';
import React from 'react';
import { AdvancedSearch, EmptyCallback, OnAdvancedSearchChange, PureObject } from '../../../../interfaces';
export declare const defaultStrings: PureObject;
export interface SearchFormStyles {
    container?: React.CSSProperties;
    addMoreMetadataButton?: React.CSSProperties;
}
export interface SearchProps {
    form: WrappedFormUtils;
    value: AdvancedSearch | null;
    onChange?: OnAdvancedSearchChange;
    onPressEnter?: EmptyCallback;
    onSubmit?: OnAdvancedSearchChange;
    strings?: PureObject;
    styles?: SearchFormStyles;
}
export interface MetadataField {
    id: number;
    key: string;
    value: string;
}
declare const SearchFormHOC: React.ComponentClass<import("antd/lib/form/Form").RcBaseFormProps & Pick<SearchProps, "onSubmit" | "onPressEnter" | "styles" | "strings" | "value" | "onChange">, any>;
export { SearchFormHOC as SearchForm };
