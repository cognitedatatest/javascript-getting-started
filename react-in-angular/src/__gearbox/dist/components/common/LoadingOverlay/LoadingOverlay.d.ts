/// <reference types="react" />
interface LoadingOverlayProps {
    isLoading: boolean;
    delay?: number;
    size?: 'large' | 'small' | 'default';
    backgroundColor?: string;
}
export declare function LoadingOverlay({ isLoading, backgroundColor, delay, size, }: LoadingOverlayProps): JSX.Element | null;
export {};
