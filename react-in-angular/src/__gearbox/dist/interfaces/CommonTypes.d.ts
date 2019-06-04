import { Asset } from '@cognite/sdk';
import { SyntheticEvent } from 'react';
import { AdvancedSearch } from './index';
export declare type ID = number | string;
export declare type OnClick = (event: SyntheticEvent) => void;
export declare type OnAssetListCallback = (assets: Asset[]) => void;
export declare type OnAdvancedSearchChange = (searchFields: AdvancedSearch) => void;
export declare type Callback = (...args: any[]) => void;
export declare type EmptyCallback = () => void;
export declare type StringsCallback = (strings: string[]) => void;
export declare type IdCallback = (id: number) => void;
export declare type SetVideoRefCallback = (element: HTMLVideoElement | null) => void;
export interface EventHandlers {
    [name: string]: Callback[];
}
export interface OcrRequest {
    image: string;
    key?: string;
    extractOcrStrings?: (data: any) => string[];
}
export interface MetadataId {
    id: number;
    key: string;
    value: ID;
}
export interface ErrorResponse {
    status: number;
    message: string;
    error?: Error;
}
export interface PureObject {
    [name: string]: ID;
}
export interface CacheObject {
    [name: string]: any;
}
export interface MouseScreenPosition {
    offsetX: number;
    offsetY: number;
}
