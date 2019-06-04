import moment from 'moment-timezone';
import { PureObject } from '../interfaces';
declare type TimeType = number | string | Date;
export declare function formatDatetime(time: TimeType | undefined, defaultValue?: string, timezone?: string, format?: string): string;
export declare function momentFromTimestamp(timestamp: number): moment.Moment;
export declare const mapMetaData: (metaObject: PureObject) => {
    key: string;
    name: string;
    value: any;
}[];
export {};
