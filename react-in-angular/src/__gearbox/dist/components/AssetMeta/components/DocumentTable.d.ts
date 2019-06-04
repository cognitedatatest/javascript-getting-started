import React from 'react';
import { DocumentTableProps } from '../../../interfaces';
interface DocumentTableState {
    stateParam?: string;
}
export declare class DocumentTable extends React.PureComponent<DocumentTableProps, DocumentTableState> {
    static defaultProps: {
        handleDocumentClick: () => null;
        categoryPriorityList: string[];
    };
    renderDocument: (category: string, description: string) => (document: import("@cognite/sdk").File, i: number, all: import("@cognite/sdk").File[]) => {} | null | undefined;
    render(): JSX.Element;
}
export {};
