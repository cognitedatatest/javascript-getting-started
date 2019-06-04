export interface ComponentWithUnmountState {
    isComponentUnmounted: boolean;
}
export declare class CanceledPromiseException {
}
export declare function connectPromiseToUnmountState<T>(component: ComponentWithUnmountState, promise: Promise<T>): Promise<T>;
