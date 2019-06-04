export declare enum NotificationTypes {
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
    SUCCESS = "success"
}
export interface NotificationProps {
    type: NotificationTypes;
    message: string;
    description: string;
    [name: string]: any;
}
export declare const notification: ({ type, message, description, ...props }: NotificationProps) => void;
export declare const ocrError: {
    type: NotificationTypes;
    message: string;
    description: string;
};
export declare const ocrNoTextFound: {
    type: NotificationTypes;
    message: string;
    description: string;
};
export declare const ocrAssetNotFind: {
    type: NotificationTypes;
    message: string;
    description: string;
};
export declare const ocrSuccess: {
    type: NotificationTypes;
    message: string;
    description: string;
};
export declare const ocrAssetFind: {
    type: NotificationTypes;
    message: string;
    description: string;
};
export declare const ocrErrorVideo: {
    type: NotificationTypes;
    message: string;
    description: string;
};
