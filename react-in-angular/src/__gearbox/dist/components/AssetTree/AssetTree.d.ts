import { Asset } from '@cognite/sdk';
import { AntTreeNode } from 'antd/lib/tree';
import { Component } from 'react';
import { AssetTreeProps, OnSelectAssetTreeParams, TreeNodeData, TreeNodeType } from '../../interfaces';
interface ExpandedKeysMap {
    [key: number]: true;
}
interface AssetTreeState {
    assets: Asset[];
    treeData: TreeNodeData[];
    expandedKeys: ExpandedKeysMap;
}
export declare class AssetTree extends Component<AssetTreeProps, AssetTreeState> {
    static mapDataAssets(assets: Asset[]): TreeNodeData[];
    static returnPretty(asset: Asset): {
        title: string;
        key: number;
        node: Asset;
        isLeaf: boolean;
    };
    static toKeys(path: number[], initial?: {}): ExpandedKeysMap;
    constructor(props: AssetTreeProps);
    componentDidMount(): Promise<void>;
    onLoadData: (treeNode: AntTreeNode) => Promise<void>;
    onSelectNode: (returnAsset: OnSelectAssetTreeParams) => void;
    onExpand: (expandedKeys: string[]) => void;
    renderTreeNode: (nodes: TreeNodeType[]) => JSX.Element[];
    render(): JSX.Element;
}
export {};
