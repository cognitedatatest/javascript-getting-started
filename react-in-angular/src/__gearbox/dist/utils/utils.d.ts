import { Asset } from '@cognite/sdk';
export declare function clampNumber(v: number, minValue: number, maxValue: number): number;
export declare function sortStringsAlphabetically(a: string, b: string): number;
export declare function getCanvas(img: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, width: number, height: number): HTMLCanvasElement;
export declare function extractValidStrings(textAnnotations?: Asset[], maxLen?: number, minLen?: number): string[];
