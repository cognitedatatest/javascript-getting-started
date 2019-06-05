import React from 'react';
import { Observable, Subject } from 'rxjs';
export interface WithObservableProps {
    observable: Observable<any>;
}
export declare const withObservable: (WrapperComponent: React.ComponentType<any>) => {
    new (props: WithObservableProps): {
        unmount$: Subject<void>;
        render(): JSX.Element;
        componentWillUnmount(): void;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
