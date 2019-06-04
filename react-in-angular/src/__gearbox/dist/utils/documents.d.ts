import { DocumentsByCategory, DocumentType, JsonDocTypes, PureObject } from '../interfaces';
export declare const getCategoryName: (keyList: string[], unknownCategoryName?: string, types?: JsonDocTypes) => DocumentType;
export declare const getCategoryByPriority: (docsByCat: DocumentsByCategory, priorityList?: string[], customSort?: ((a: string, b: string) => number) | undefined) => {
    categories: string[];
    prioritizedCount: number;
};
export declare const getDocumentsByCategory: (docs: import("@cognite/sdk").File[], unknownCategoryName?: string | undefined, types?: JsonDocTypes, documentTypeField?: string | undefined) => DocumentsByCategory;
export declare const getDocumentTitle: (metadata?: PureObject | undefined, documentTitleField?: string | undefined) => string;
export declare const getShortDescription: (description: string) => string;
