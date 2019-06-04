import { Asset, Event, File, Revision, Timeseries } from '@cognite/sdk';
import { ApiAssetList } from '../interfaces';
export declare function getAssetList({ query, fuzziness, fuzzLimit, }: ApiAssetList): Promise<Asset[]>;
export declare function fetch3DModelRevision(modelId: number, revisionId: number): Promise<Revision>;
export declare function retrieveAsset(sdkInstance: any, assetId: number): Promise<any>;
export declare function getAssetListDescendants(assetId: number, query: {
    [name: string]: any;
}): Promise<Asset[]>;
export declare function getAssetEvent(sdkInstance: any, query: {
    assetId: number;
    limit: number;
}): Promise<Event[]>;
export declare function getAssetFiles(sdkInstance: any, query: {
    assetId: number;
    limit: number;
}): Promise<File[]>;
export declare function getAssetTimeseries(sdkInstance: any, query: {
    assetId: number;
    limit: number;
}): Promise<Timeseries[]>;
