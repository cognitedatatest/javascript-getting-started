/// <reference types="react" />
import { OnClick } from '../../../interfaces';
export interface AssetViewProps {
    asset: {
        id: number;
        name?: string;
        path?: string[];
        description?: string;
        metadata?: {
            ASSETSCOPENAME?: string;
            DESCRIPTION?: string;
            NAME?: string;
            PARENTUID?: string;
            SOURCE?: string;
            SOURCEID?: string;
            SOURCE_DB?: string;
            SOURCE_TABLE?: string;
            TYPE?: string;
            UID?: string;
        };
    };
    onClick?: OnClick;
    onClose?: () => void;
    color?: boolean | string;
}
export declare const AssetView: {
    (props: AssetViewProps): JSX.Element | null;
    displayName: string;
};
