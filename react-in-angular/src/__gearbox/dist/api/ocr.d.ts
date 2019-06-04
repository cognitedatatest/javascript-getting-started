import { OcrRequest } from '../interfaces';
export declare function ocrRecognize({ image, key, extractOcrStrings, }: OcrRequest): Promise<string[]>;
