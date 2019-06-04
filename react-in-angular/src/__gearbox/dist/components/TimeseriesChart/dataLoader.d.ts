/// <reference types="griff-react" />
import { DataProviderLoaderParams } from '@cognite/griff-react';
import * as sdk from '@cognite/sdk';
import { Datapoint } from '@cognite/sdk';
export declare type AccessorFunc = (point: Datapoint) => number;
export declare const getSubdomain: (id: number) => number[];
export declare const getGranularity: (id: number) => string;
export declare const yAccessor: (d: sdk.Datapoint) => number;
export declare const y0Accessor: (data: sdk.Datapoint) => number;
export declare const y1Accessor: (data: sdk.Datapoint) => number;
export declare const mergeInsert: (base: sdk.Datapoint[], toInsert: sdk.Datapoint[], xAccessor: AccessorFunc, subDomain: number[]) => sdk.Datapoint[];
export declare const cogniteloader: ({ id, timeDomain, timeSubDomain, pointsPerSeries, oldSeries, reason, }: DataProviderLoaderParams) => Promise<any>;
