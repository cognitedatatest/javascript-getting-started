import { Cognite3DModel, Cognite3DViewer, THREE } from '@cognite/3d-viewer';
import * as sdk from '@cognite/sdk';
import { CacheObject, Callback, EventHandlers } from '../interfaces';
interface ViewerConfig {
    modelId: number;
    revisionId: number;
    domElement: HTMLElement;
    cache?: CacheObject;
    boundingBox?: THREE.Box3;
}
export interface ViewerConfigResponse {
    viewer: Cognite3DViewer;
    modelPromise: Promise<Cognite3DModel>;
    revisionPromise: Promise<sdk.Revision>;
    addEvent: (events: [ViewerEventTypes, Callback][]) => void;
    removeEvent: (events?: [ViewerEventTypes, Callback][]) => void;
    fromCache?: boolean;
    domElement: HTMLElement;
}
export declare enum ViewerEventTypes {
    progress = "progress",
    complete = "complete",
    error = "error"
}
export declare function parseBoundingBox(boundingBox: {
    min: number[];
    max: number[];
} | THREE.Box3): THREE.Box3;
export declare function setCameraPosition(viewer: Cognite3DViewer, model: Cognite3DModel, revision: sdk.Revision, boundingBox?: THREE.Box3): void;
export declare function createViewer({ modelId, revisionId, boundingBox, cache, domElement, }: ViewerConfig): ViewerConfigResponse;
export declare function addEvent(listeners: EventHandlers, events: [ViewerEventTypes, Callback][]): void;
export declare function removeEvent(listeners: EventHandlers, events?: [ViewerEventTypes, Callback][]): void;
export declare function hashGenerator(modelId: number, revisionId: number, boundingBox?: THREE.Box3): string;
export {};
