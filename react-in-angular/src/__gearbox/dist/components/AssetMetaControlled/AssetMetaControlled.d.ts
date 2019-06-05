/// <reference types="react" />
export declare const AssetMetaControlled: {
    new (props: import("../../hoc/withObservable/withObservable").WithObservableProps): {
        unmount$: import("rxjs").Subject<void>;
        render(): JSX.Element;
        componentWillUnmount(): void;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    contextType?: import("react").Context<any> | undefined;
};
