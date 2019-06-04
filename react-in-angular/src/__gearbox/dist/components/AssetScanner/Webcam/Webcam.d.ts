import { Component } from 'react';
import { Callback, SetVideoRefCallback } from '../../../interfaces';
interface WebcamProps {
    audio?: boolean;
    setRef: SetVideoRefCallback;
    height?: number | string;
    width?: number | string;
    className?: string;
    audioSource?: string | null;
    videoSource?: string | null;
    isDesktop?: boolean;
    onError?: Callback;
}
interface WebcamState {
    hasUserMedia: boolean;
    src: string;
}
export declare class Webcam extends Component<WebcamProps, WebcamState> {
    static mountedInstances: Webcam[];
    static userMediaRequested: boolean;
    static defaultProps: {
        audio: boolean;
        className: string;
        height: number;
        width: number;
        audioSource: null;
        videoSource: null;
        isDesktop: boolean;
    };
    state: WebcamState;
    video: HTMLVideoElement | null;
    stream: MediaStream | null;
    componentDidMount(): void;
    componentWillUpdate(nextProps: WebcamProps): void;
    componentWillUnmount(): void;
    requestUserMedia(): Promise<void>;
    handleUserMedia(stream: MediaStream | null, error?: MediaStreamError): void;
    render(): JSX.Element;
    private sourceSelected;
}
export {};
